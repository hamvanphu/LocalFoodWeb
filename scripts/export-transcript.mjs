/**
 * Xuất hội thoại PM ↔ AI ra một file HTML đọc được.
 *
 * Nguồn: transcript phiên của Claude Code (~/.claude/projects/…/<session>.jsonl).
 *
 * Ba nguyên tắc:
 *  1. CHE SECRET — transcript có chứa anon key Supabase, MapTiler key, project URL.
 *     Che hết trước khi ghi ra file, vì file này sẽ được gửi cho người khác.
 *  2. GIỮ HỘI THOẠI, LƯỢC THAO TÁC — người đọc cần thấy PM nói gì và AI trả lời gì.
 *     Tool call rút thành một dòng tóm tắt; tool result (rất dài) thì bỏ.
 *  3. KHÔNG SỬA LỜI — nội dung hội thoại giữ nguyên văn, kể cả chỗ AI sai.
 *
 * Chạy: node scripts/export-transcript.mjs <đường-dẫn-jsonl> <file-html-đầu-ra>
 */
import fs from "node:fs";
import readline from "node:readline";

const [, , SRC, OUT] = process.argv;
if (!SRC || !OUT) {
  console.error("Dùng: node scripts/export-transcript.mjs <input.jsonl> <output.html>");
  process.exit(1);
}

/** Che mọi thứ trông giống thông tin bí mật. Thà che nhầm còn hơn để lọt. */
function redact(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g, "«KEY ĐÃ CHE»")
    // JWT bị cắt cụt vẫn phải che: bản thân header không chứa bí mật, nhưng người đọc
    // báo cáo không phân biệt được và sẽ tưởng là key đã lọt ra ngoài.
    .replace(/eyJ[A-Za-z0-9_-]{8,}/g, "«KEY ĐÃ CHE»")
    // Email: file này được gửi cho người khác. Che mặc định, PM muốn hiện thì tự bỏ.
    .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, "«EMAIL ĐÃ CHE»")
    .replace(/https:\/\/[a-z0-9]{15,}\.supabase\.co/g, "https://«PROJECT».supabase.co")
    .replace(/\b[a-z0-9]{20,}\.supabase\.co/g, "«PROJECT».supabase.co")
    .replace(/(NEXT_PUBLIC_MAPTILER_KEY\s*=\s*)[A-Za-z0-9]{8,}/g, "$1«KEY ĐÃ CHE»")
    .replace(/(NEXT_PUBLIC_SUPABASE_ANON_KEY\s*=\s*)\S+/g, "$1«KEY ĐÃ CHE»")
    .replace(/(apikey:\s*)\S{20,}/gi, "$1«KEY ĐÃ CHE»")
    .replace(/(Bearer\s+)[A-Za-z0-9._-]{20,}/g, "$1«KEY ĐÃ CHE»")
    .replace(/\b[a-f0-9]{32,}\b/g, (m) => (m.length > 40 ? "«CHUỖI DÀI ĐÃ CHE»" : m));
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Markdown tối thiểu — đủ để transcript đọc được, không kéo thư viện. */
function md(text) {
  const blocks = esc(text).split(/\n{2,}/);
  return blocks
    .map((b) => {
      if (/^```/.test(b)) {
        return `<pre><code>${b.replace(/^```[a-z]*\n?/, "").replace(/```$/, "")}</code></pre>`;
      }
      if (/^\s*[-*]\s+/m.test(b) && b.split("\n").every((l) => /^\s*[-*]\s+|^\s*$/.test(l))) {
        const items = b.split("\n").filter((l) => l.trim()).map((l) => `<li>${inline(l.replace(/^\s*[-*]\s+/, ""))}</li>`);
        return `<ul>${items.join("")}</ul>`;
      }
      if (/^\|/.test(b)) return `<pre class="tbl">${b}</pre>`;
      if (/^#{1,4}\s/.test(b)) {
        const lvl = b.match(/^#+/)[0].length;
        return `<h${Math.min(lvl + 2, 6)}>${inline(b.replace(/^#+\s*/, ""))}</h${Math.min(lvl + 2, 6)}>`;
      }
      return `<p>${inline(b).replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}
const inline = (s) =>
  s
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "<em>$1</em>");

const turns = [];
let stats = { user: 0, ai: 0, tools: 0, firstTs: null, lastTs: null };

const rl = readline.createInterface({ input: fs.createReadStream(SRC), crlfDelay: Infinity });
for await (const line of rl) {
  if (!line.trim()) continue;
  let j;
  try { j = JSON.parse(line); } catch { continue; }

  const msg = j.message;
  if (!msg || !msg.content) continue;
  if (j.timestamp) { stats.firstTs ||= j.timestamp; stats.lastTs = j.timestamp; }

  const blocks = Array.isArray(msg.content) ? msg.content : [{ type: "text", text: msg.content }];

  if (j.type === "user") {
    // Bỏ tool_result (rất dài, là output máy) và các khối hệ thống chèn vào
    const texts = blocks
      .filter((b) => b.type === "text" && typeof b.text === "string")
      .map((b) => b.text)
      .filter((t) => !t.startsWith("<system-reminder>") && !t.includes("[SYSTEM NOTIFICATION"))
      .join("\n\n")
      .trim();
    if (texts) { turns.push({ who: "pm", text: redact(texts), ts: j.timestamp }); stats.user++; }
  }

  if (j.type === "assistant") {
    const texts = blocks.filter((b) => b.type === "text").map((b) => b.text).join("\n\n").trim();
    const tools = blocks.filter((b) => b.type === "tool_use").map((b) => {
      const i = b.input || {};
      const label = i.description || i.file_path || i.pattern || i.command || i.prompt || "";
      return { name: b.name, label: redact(String(label).slice(0, 110)) };
    });
    stats.tools += tools.length;
    const last = turns[turns.length - 1];
    if (texts) {
      // Lượt AI có lời nói → mở khối mới
      turns.push({ who: "ai", text: redact(texts), tools, ts: j.timestamp });
      stats.ai++;
    } else if (tools.length && last?.who === "ai") {
      // Lượt chỉ gọi công cụ → gộp vào khối AI liền trước, tránh 1.100+ khối rỗng
      last.tools.push(...tools);
    } else if (tools.length) {
      turns.push({ who: "ai", text: "", tools, ts: j.timestamp });
    }
  }
}

const d = (t) => (t ? new Date(t).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" }) : "");

const body = turns
  .map((t) => {
    if (t.who === "pm") {
      return `<div class="turn pm"><div class="who">PM<span class="ts">${d(t.ts)}</span></div><div class="bubble">${md(t.text)}</div></div>`;
    }
    const toolLine = t.tools?.length
      ? `<div class="tools">${t.tools.map((x) => `<span class="tool"><b>${esc(x.name)}</b>${x.label ? " · " + esc(x.label) : ""}</span>`).join("")}</div>`
      : "";
    const txt = t.text ? `<div class="bubble">${md(t.text)}</div>` : "";
    return `<div class="turn ai"><div class="who">AI<span class="ts">${d(t.ts)}</span></div>${txt}${toolLine}</div>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="vi"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Hội thoại PM ↔ AI — Local Food</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
<style>
:root{--paper:#F5F6F4;--card:#fff;--ink:#101820;--ink2:#41505C;--ink3:#6B7A85;--rule:#DDE1DC;--pm:#0E7C6B;--pmbg:#E4F1ED;--ai:#41505C;--code:#EDF0EC}
@media(prefers-color-scheme:dark){:root{--paper:#0E1418;--card:#161E24;--ink:#E8ECEA;--ink2:#A8B5BD;--ink3:#7C8B95;--rule:#26323A;--pm:#3DBFA6;--pmbg:#12312C;--ai:#A8B5BD;--code:#1B252C}}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:"IBM Plex Sans",system-ui,sans-serif;font-size:15px;line-height:1.65}
.wrap{max-width:860px;margin:0 auto;padding:36px 20px 70px}
header{border-bottom:2px solid var(--ink);padding-bottom:18px;margin-bottom:26px}
h1{font-size:26px;margin:0 0 6px;letter-spacing:-.01em}
.meta{color:var(--ink2);font-size:13.5px}
.note{background:var(--code);border-left:3px solid var(--pm);padding:11px 14px;border-radius:0 7px 7px 0;font-size:13.5px;color:var(--ink2);margin-top:14px}
.turn{margin:22px 0}
.who{font-family:"IBM Plex Mono",monospace;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);margin-bottom:6px;display:flex;gap:10px;align-items:baseline}
.turn.pm .who{color:var(--pm)}
.ts{font-weight:400;letter-spacing:0;text-transform:none;font-size:11px;color:var(--ink3)}
.bubble{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:14px 17px}
.turn.pm .bubble{background:var(--pmbg);border-color:transparent}
.bubble>*:first-child{margin-top:0}.bubble>*:last-child{margin-bottom:0}
p{margin:0 0 10px}h3,h4,h5,h6{margin:16px 0 8px;font-size:15px}
ul{margin:0 0 10px;padding-left:20px}li{margin:3px 0}
code{font-family:"IBM Plex Mono",monospace;font-size:.88em;background:var(--code);padding:1px 5px;border-radius:4px}
pre{background:var(--code);border:1px solid var(--rule);border-radius:8px;padding:11px 13px;overflow-x:auto;margin:0 0 10px}
pre code{background:none;padding:0;font-size:12.5px;line-height:1.5}
pre.tbl{font-family:"IBM Plex Mono",monospace;font-size:12px;white-space:pre}
.tools{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.tool{font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--ink3);background:var(--code);border:1px solid var(--rule);border-radius:5px;padding:2px 7px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tool b{color:var(--ink2);font-weight:600}
footer{margin-top:44px;padding-top:16px;border-top:1px solid var(--rule);font-size:12.5px;color:var(--ink3)}
</style></head><body><div class="wrap">
<header>
  <h1>Hội thoại PM ↔ AI — Local Food</h1>
  <p class="meta">${stats.user} lượt PM · ${stats.ai} lượt AI trả lời · ${stats.tools} thao tác công cụ<br>
  Từ ${d(stats.firstTs)} đến ${d(stats.lastTs)}</p>
  <div class="note"><strong>Về bản xuất này:</strong> giữ nguyên văn hội thoại, kể cả những chỗ AI làm sai và bị sửa.
  Thao tác công cụ được rút thành một dòng tóm tắt (tên công cụ + việc làm); kết quả trả về của công cụ — vốn rất dài — được lược bỏ.
  <strong>Mọi khoá API và chuỗi bí mật đã được che.</strong></div>
</header>
${body}
<footer>Xuất tự động từ transcript phiên làm việc bằng <code>scripts/export-transcript.mjs</code>. Nguồn dữ liệu là log của Claude Code, không phải bản chép tay.</footer>
</div></body></html>`;

fs.writeFileSync(OUT, html, "utf8");
console.log(`✓ ${OUT}`);
console.log(`  ${stats.user} lượt PM · ${stats.ai} lượt AI · ${stats.tools} thao tác`);
console.log(`  ${(fs.statSync(OUT).size / 1048576).toFixed(1)} MB`);
