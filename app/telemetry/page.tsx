import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, XCircle, GitCommit } from "lucide-react";
import CompressionCalculator from "@/components/telemetry/CompressionCalculator";
import {
  telemetryData,
  sessions,
  gitBounds,
  totalRealHours,
  totalIncidents,
  gateSummary,
  estimateReconcile,
  formatHours,
  type TelemetryGate,
} from "@/lib/telemetry";

export const metadata: Metadata = {
  title: "Telemetry — Local Food",
  description: "Dashboard đo quá trình xây dựng Local Food bằng Human + AI.",
};

const statusIcon = {
  pass: <CheckCircle2 className="h-4 w-4 text-herb-dark" aria-hidden="true" />,
  warn: <AlertTriangle className="h-4 w-4 text-amber-dark" aria-hidden="true" />,
  fail: <XCircle className="h-4 w-4 text-chili-dark" aria-hidden="true" />,
};
const statusLabel = { pass: "Đạt", warn: "Cần lưu ý", fail: "Không đạt" };

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <p className="text-sm text-ink/70">{label}</p>
      <p className="mt-1 font-display text-2xl font-semibold text-ink">{value}</p>
      {sub && <p className="mt-1 text-xs text-ink/65">{sub}</p>}
    </div>
  );
}

export default function TelemetryPage() {
  const bounds = gitBounds();
  const real = totalRealHours();
  const rec = estimateReconcile();
  const gates = telemetryData.gates as TelemetryGate[];
  const gsum = gateSummary();
  const d = telemetryData.delivered;

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-chili hover:text-chili-dark"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Về trang chủ
      </Link>

      <header className="mt-4">
        <h1 className="font-display text-3xl font-bold text-ink">Telemetry</h1>
        <p className="mt-2 max-w-3xl text-ink/80">
          Đo quá trình xây dựng Local Food bằng Human + AI. Mọi số ở đây truy được về
          git, file trong repo, hoặc output lệnh — <strong>trừ giờ người thật</strong>,
          vốn do PM tự khai vì không công cụ nào đo thay được.
        </p>
        <p className="mt-2 text-sm text-ink/65">
          Cập nhật {telemetryData.updatedAt} · chi tiết đầy đủ trong{" "}
          <code className="rounded bg-surface-muted px-1.5 py-0.5">TELEMETRY-LF.md</code>
        </p>
      </header>

      {/* --- Nén: phần tương tác --- */}
      <section className="mt-8">
        <CompressionCalculator
          sessions={sessions()}
          groupedDefaultH={telemetryData.groupedEstimateH}
          groupedNote={telemetryData.groupedNote}
          baselineDefaultH={telemetryData.baselineNoAiH}
          gitLowerH={bounds.lower}
          gitUpperH={bounds.upper}
        />
        <p className="mt-3 text-sm text-ink/70">
          <strong className="text-ink">Baseline là ước lượng phản-thực:</strong>{" "}
          {telemetryData.baselineNote} Nén không đo chất lượng, và không trừ chi phí
          sửa {totalIncidents()} sự cố AI bên dưới.
        </p>
      </section>

      {/* --- est → reconcile --- */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          Ước lượng → Thực tế (est → reconcile)
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            label="PERT ước lượng ban đầu"
            value={`${rec.estimatedH}h`}
            sub={telemetryData.estimate.scope}
          />
          <Stat label="Giờ thật đã bỏ ra" value={formatHours(rec.actualH)} sub="PM tự khai" />
          <Stat
            label="Chênh lệch"
            value={`${rec.varianceH < 0 ? "−" : "+"}${formatHours(Math.abs(rec.varianceH))}`}
            sub={rec.varianceH < 0 ? "Nhanh hơn ước lượng" : "Chậm hơn ước lượng"}
          />
          <Stat
            label="Phạm vi đã giao"
            value={`${rec.scopeMultiplier.toFixed(1)}×`}
            sub={`Kế hoạch ${rec.scopePlanned} tỉnh → thực tế ${rec.scopeActual} tỉnh`}
          />
        </div>
        <p className="mt-3 text-sm text-ink/70">
          Làm <strong className="text-ink">ít giờ hơn ước lượng</strong> trong khi giao{" "}
          <strong className="text-ink">gấp {rec.scopeMultiplier.toFixed(1)} lần phạm vi</strong>.
          Nhưng đọc kèm phần cổng chất lượng bên dưới — có 1 cổng không đạt và 2 cổng cần lưu ý.
        </p>
      </section>

      {/* --- Nhịp làm việc --- */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">Nhịp làm việc</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-ink/70">
                <th className="py-2 pr-4 font-medium">Ngày</th>
                <th className="py-2 pr-4 font-medium">Commit</th>
                <th className="py-2 pr-4 font-medium">Git đoán</th>
                <th className="py-2 pr-4 font-medium">PM khai</th>
                <th className="py-2 font-medium">Việc đã làm</th>
              </tr>
            </thead>
            <tbody>
              {sessions().map((s) => (
                <tr key={s.date} className="border-b border-border/60 align-top">
                  <td className="py-3 pr-4 font-mono text-ink/85">{s.date}</td>
                  <td className="py-3 pr-4">
                    <span className="inline-flex items-center gap-1 text-ink/85">
                      <GitCommit className="h-3.5 w-3.5 text-ink/50" aria-hidden="true" />
                      {s.commits}
                    </span>
                  </td>
                  <td className="py-3 pr-4 whitespace-nowrap text-ink/70">
                    {s.gitUpperBoundH === 0
                      ? "—"
                      : `${formatHours(s.gitLowerBoundH)} – ${formatHours(s.gitUpperBoundH)}`}
                  </td>
                  <td className="py-3 pr-4 whitespace-nowrap font-medium text-ink">
                    {s.pmEstimatedH !== null ? formatHours(s.pmEstimatedH) : "gộp"}
                  </td>
                  <td className="py-3 text-ink/80">{s.work}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- Sự cố AI --- */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          Sự cố AI — {totalIncidents()} lần AI sai, PM sửa
        </h2>
        <div className="mt-4 space-y-2">
          {telemetryData.incidents.map((i) => {
            const pct = (i.count / totalIncidents()) * 100;
            return (
              <div key={i.group} className="rounded-card border border-border bg-surface p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium text-ink">{i.group}</span>
                  <span className="text-sm text-ink/70">{i.count}</span>
                </div>
                <div
                  className="mt-2 h-1.5 overflow-hidden rounded-pill bg-surface-muted"
                  role="img"
                  aria-label={`${i.group}: ${i.count} trên ${totalIncidents()} sự cố`}
                >
                  <div className="h-full rounded-pill bg-chili" style={{ width: `${pct}%` }} />
                </div>
                <p className="mt-2 text-sm text-ink/75">{i.example}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-ink/70">{telemetryData.incidentsNote}</p>
      </section>

      {/* --- Cổng chất lượng --- */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          Cổng chất lượng — {gsum.pass} đạt · {gsum.warn} cần lưu ý · {gsum.fail} không đạt
        </h2>
        <div className="mt-4 space-y-2">
          {gates.map((g) => (
            <div
              key={g.name}
              className="flex flex-wrap items-start gap-3 rounded-card border border-border bg-surface p-3"
            >
              <span className="mt-0.5 shrink-0">{statusIcon[g.status]}</span>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-ink">{g.name}</p>
                <p className="text-sm text-ink/70">{g.how}</p>
              </div>
              <span className="shrink-0 text-sm font-medium text-ink">
                {g.value}
                <span className="sr-only"> — {statusLabel[g.status]}</span>
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-ink/70">
          Cổng không đạt và cần lưu ý được hiển thị ngang hàng với cổng đạt — dashboard
          này để phán xử, không phải để trưng bày.
        </p>
      </section>

      {/* --- Sản lượng --- */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">Sản lượng</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Tỉnh thành" value={`${d.provincesActual}/63`} sub={`Kế hoạch ban đầu ${d.provincesPlanned}`} />
          <Stat label="Món ăn" value={String(d.dishes)} sub={`${d.dishesWithImage} món có ảnh thật`} />
          <Stat label="Nguồn tham chiếu" value={String(d.sourceRefs)} sub="0 món thiếu nguồn" />
          <Stat label="Route sinh tĩnh" value={String(d.staticRoutes)} sub="Build sạch, 0 lỗi TS" />
          <Stat label="Commit" value={String(d.commits)} />
          <Stat label="File trong repo" value={String(d.trackedFiles)} />
          <Stat label="Artefact quản trị" value={String(d.artefacts)} sub="SCOPE → RTM → Telemetry" />
          <Stat label="Sự cố DEVBOOK" value={String(totalIncidents())} sub="Đã phân loại" />
        </div>
      </section>
    </div>
  );
}
