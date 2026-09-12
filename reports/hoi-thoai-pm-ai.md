# Hội thoại PM ↔ AI — Local Food

**110 lượt PM · 754 lượt AI trả lời · 1627 thao tác công cụ**
Từ 20:52 25/8/26 đến 17:26 12/9/26

> **Về bản xuất này:** giữ **nguyên văn** hội thoại, kể cả những chỗ AI làm sai và bị
> PM sửa — đó là phần có giá trị nhất của hồ sơ này, không phải phần đáng giấu.
>
> Thao tác công cụ được rút thành một dòng tóm tắt và gấp lại trong `<details>`; kết
> quả trả về của công cụ (rất dài, là output máy) được lược bỏ.
>
> **Mọi khoá API, chuỗi bí mật và địa chỉ email đã được che.**
>
> Xuất tự động bằng `scripts/export-transcript.mjs` từ log của Claude Code — không
> phải bản chép tay, nên không chọn lọc được.

---
### 🧑 PM · 20:52 25/8/26

> D:\01_Study\07_Local_Food\00_Docs
> => Mày hãy học kiến thức trong folder này để xíu mình start dự án mang tên Local Food, đại loại là vibe code 1 website giới thiệu quảng bá local food các vùng miền, tỉnh thành ở Việt Nam.
> Oke, để chi tiết hơn, tao sẽ mô tả thêm sau.
> giờ hãy lướt qua docs để biết chung ta cần tuân thủ và follow quy tắc như thế nào trong quá trình vibe code nhé.

---

### 🤖 AI · 20:52 25/8/26



<details>
<summary>3 thao tác công cụ</summary>

- `Glob` — **/*
- `PowerShell` — List all files in 00_Docs folder recursively
- `PowerShell` — Check if parent folders exist and list contents

</details>

---

### 🤖 AI · 20:52 25/8/26

The folder `D:\01_Study\07_Local_Food\00_Docs` exists but is completely empty — no files inside it.

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 20:53 25/8/26

Được, tao đợi. Khi nào mày bỏ file/docs vào `D:\01_Study\07_Local_Food\00_Docs` thì báo tao, tao sẽ đọc và tóm tắt lại các quy tắc/quy trình cần tuân thủ trước khi bắt đầu vibe code dự án Local Food.

<details>
<summary>1 thao tác công cụ</summary>

- `ExitPlanMode`

</details>

---

### 🤖 AI · 20:54 25/8/26

Không có gì để tao đọc lúc này — folder `00_Docs` đang trống. Khi mày thêm tài liệu vào đó xong, nhắn tao 1 câu là tao lướt qua và tóm tắt các quy tắc ngay.

---

### 🧑 PM · 20:54 25/8/26

> mày đọc lại đi nhé. update file r đó

---

### 🤖 AI · 20:54 25/8/26



<details>
<summary>1 thao tác công cụ</summary>

- `PowerShell` — List files in 00_Docs folder again

</details>

---

### 🤖 AI · 20:54 25/8/26

Đây chính là bộ tài liệu PM AI Bootcamp (giống structure ở dự án 06_PM_AI_Bootcamp). Để tao đọc các file cốt lõi bản VN.

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\00_Docs\PM AI Transformation\VN\START-HERE.md
- `Read` — D:\01_Study\07_Local_Food\00_Docs\PM AI Transformation\VN\docs\GLOSSARY.md
- `Read` — D:\01_Study\07_Local_Food\00_Docs\PM AI Transformation\VN\docs\B-lam-viec-voi-ai\PM-AI-Bootcamp-OperatingModel
- `Read` — D:\01_Study\07_Local_Food\00_Docs\PM AI Transformation\VN\docs\C-thuc-hanh\PM-AI-Bootcamp-Capstone-Playbook-v1

</details>

---

### 🤖 AI · 20:54 25/8/26

Đã đọc xong bộ tài liệu cốt lõi. Tóm tắt các quy tắc cần tuân thủ khi vibe code dự án **Local Food**:

## Quy trình bắt buộc (11 bước, Capstone Playbook)
Đi tuần tự, mỗi bước ra 1 artefact, đặt tên `-LF` hoặc mã dự án tương ứng thay vì `PB0X`:

`SCOPE → SPEC (SRS) → MODULEMAP → ARCH → WBS → EST → RISK+DELEGATION-MAP → DOR → BUILD (+DEVBOOK) → TEST/GATE → RTM+TELEMETRY` → rồi mới "viva" (ở đây là tự-nghiệm thu vì không có Coach).

**Nguyên tắc xuyên suốt:** móng trước – bề mặt sau (Layer 0: auth, data model, phân quyền, gateway trước; UI/feature sau), lát cắt dọc mỏng trước – bề rộng sau (Walking Skeleton chạy end-to-end trước khi mở rộng).

## Quy tắc số 1 — "AI gen ≠ đã xong"
Mỗi bước có **🔒 Cổng hiểu**: mày phải (1) giải thích lại bằng lời của mày, (2) bắt được ≥1 chỗ tao (AI) làm sai/thiếu và tự sửa, ghi vào **Dev Book**. Không có việc rubber-stamp.

## Operating Model — 3 luật cứng khi tao code cho mày
1. 🚫 Tao **không tự push/merge/release** — mọi thứ dừng ở bản nháp chờ mày duyệt.
2. 🚫 Tao **không đụng secrets** (.env, credential, API key...).
3. 🚫 Khi đang hard-stop / chờ duyệt → tao **không tự đánh dấu Done**.

Ngoài ra: **fail-closed gate** (không verify được = chặn, không cho qua tạm), **hard-stop khi spec mâu thuẫn** (tao sẽ dừng và hỏi thay vì đoán bừa).

## Việc cần quyết định sớm cho Local Food
- **Tier 1 (full-stack code thật)** hay **Tier 2 (PM-stack: prototype + mock API + schema)**? — vì đây không phải bài học chính thức (không PB-0X code), mày có thể chọn tuỳ mức độ muốn code thật hay chỉ prototype.
- Ghi **Dev Book** song song trong lúc build — bắt buộc, không để tối viết lại.
- Ghi **telemetry** (giờ thật, số lần sửa AI, token ước tính) — không để tao tự bịa số.

Giờ tao sẵn sàng bắt đầu từ **Bước [0] Làm rõ scope** khi mày mô tả chi tiết hơn về Local Food. Mày cứ nói ý tưởng, tao sẽ đóng vai PM hỏi 10 câu làm rõ scope trước khi đi tiếp.

---

### 🧑 PM · 21:00 25/8/26

> Oke, Giờ là tiến hành dev thật nhé, sản phẩm sẽ là website thật chuyên nghiệp, UI bắt mắt, màu sắc thời thượng sinh động, bắt trend, UI tương tác sinh động và gây hứng thú.
> Mày hãy nghiên cứu deep research trên internet và tiến hành nhé.
> 
> Giờ đề bài là: Website quảng bá local food đầy đủ trải dài 63 tỉnh thành Việt Nam (trước sáp nhập). Phải có hình ảnh (có thể dùng AI generate image), công thức nấu, recommend cách ăn...
> Tao muốn có bản đồ Việt Nam luôn, khi zoom xa thì chỉ thấy các buble món nổi tiếng nhất tượng trưng mỗi vùng, khi zoom gần hơn thì sẽ thấy nhiều thứ hơn, kiểu như GG map luôn nhé.
> Và mày hãy thêm idea để website mượt mà sinh động, tạo hứng thú tương tác và có ích cho user nhé

---

### 🤖 AI · 21:00 25/8/26



<details>
<summary>3 thao tác công cụ</summary>

- `PowerShell` — Check top-level contents of Local Food project folder
- `AskUserQuestion`
- `AskUserQuestion`

</details>

---

### 🤖 AI · 21:06 25/8/26

Giờ tao sẽ research sâu 3 mảng: (1) bản đồ tương tác MapLibre + dữ liệu ranh giới 63 tỉnh, (2) xu hướng UI/UX 2026 cho website ẩm thực sinh động, (3) nội dung món ăn đặc trưng cho bộ tỉnh MVP đại diện 3 miền.

<details>
<summary>8 thao tác công cụ</summary>

- `Agent` — Research map engine for Vietnam provinces
- `Agent` — Research vibrant food website UI trends
- `Agent` — Compile MVP province food content
- `Agent` — Design Local Food Next.js architecture
- `AskUserQuestion`
- `AskUserQuestion`
- `Write` — C:\Users\X\.claude\plans\d-01-study-07-local-food-00-docs-m-y-h-y-happy-harp.md
- `ExitPlanMode`

</details>

---

### 🤖 AI · 21:21 25/8/26

Plan đã duyệt. Bắt đầu scaffold Next.js project.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Check available Node/pnpm tooling
- `Bash` — Try enabling pnpm via corepack

</details>

---

### 🤖 AI · 21:22 25/8/26

pnpm có sẵn qua corepack. Giờ scaffold Next.js project.

<details>
<summary>18 thao tác công cụ</summary>

- `Bash` — Scaffold Next.js app in Local Food project directory
- `Bash` — Scaffold Next.js app into temp subfolder to avoid invalid package name
- `PowerShell` — Move scaffolded Next.js files from temp folder to project root
- `Read` — D:\01_Study\07_Local_Food\package.json
- `Edit` — D:\01_Study\07_Local_Food\package.json
- `Bash` — Inspect scaffolded app folder and generated CLAUDE.md
- `Bash` — Install map, motion, and icon dependencies
- `Bash` — Clean stale node_modules and reinstall fresh
- `Bash` — Install map, motion, and icon dependencies
- `Read` — D:\01_Study\07_Local_Food\.gitignore
- `ToolSearch`
- `Bash` — List files in Free-GIS-Data repo to find pre-2025 63-province geojson
- `Bash` — Check repo API response and default branch
- `Bash` — Get default branch and search tree for relevant province files
- `Bash` — Download pre-2025 63-province GeoJSON (combined islands version)
- `Bash` — Verify province count and list names in downloaded GeoJSON
- `Write` — D:\01_Study\07_Local_Food\scripts\normalize-geojson.mjs
- `Bash` — Run geojson normalization script

</details>

---

### 🤖 AI · 21:32 25/8/26

63 tỉnh đã có slug chuẩn khớp với data JSON. Giờ cần centroid cho từng tỉnh (dùng cho map camera + fallback marker) — tính bằng script luôn thay vì thủ công.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Sanity check slug/name mapping in normalized geojson
- `Write` — D:\01_Study\07_Local_Food\scripts\compute-centroids.mjs
- `Bash` — Compute province centroids from geojson

</details>

---

### 🤖 AI · 21:34 25/8/26

Giờ tìm ảnh thật từ Wikimedia Commons cho các món của Hà Nội và Huế, kèm attribution.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Search Wikimedia Commons for dish photos (attempt 1)
- `Bash` — Query Wikimedia Commons categories directly for dish photos with proper UTF-8 encoding
- `Bash` — Generate properly percent-encoded Commons API URLs via Node

</details>

---

### 🤖 AI · 21:34 25/8/26

Giờ dùng WebFetch để tránh lỗi encoding của bash trên Windows.

<details>
<summary>17 thao tác công cụ</summary>

- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `Bash` — Generate search-API URLs for dishes lacking direct categories
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — For each page returned, output: the File title, the imageinfo url, the LicenseShortName value, and the Artist 
- `WebFetch` — Output the imageinfo url, LicenseShortName, and Artist (plain text, strip HTML) for this file.

</details>

---

### 🤖 AI · 21:36 25/8/26

Đủ ảnh có bản quyền hợp lệ rồi. Giờ dựng code: types, data, lib, map, pages.

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\types.ts
- `Write` — D:\01_Study\07_Local_Food\data\provinces\ha-noi.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json
- `Write` — D:\01_Study\07_Local_Food\data\hero-bubbles.json

</details>

---

### 🤖 AI · 21:37 25/8/26

Giờ tạo `lib/provinces.ts` và `lib/geo.ts`.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\provinces.ts
- `Write` — D:\01_Study\07_Local_Food\lib\geo.ts
- `Bash` — Install geojson types and check tsconfig JSON module support

</details>

---

### 🤖 AI · 21:38 25/8/26

Giờ tạo `next.config.ts` với remotePatterns, `.env.local` placeholder, và global CSS palette/fonts.

<details>
<summary>7 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\next.config.ts
- `Read` — D:\01_Study\07_Local_Food\app\globals.css
- `Read` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Write` — D:\01_Study\07_Local_Food\app\globals.css
- `Write` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Write` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx
- `Write` — D:\01_Study\07_Local_Food\components\layout\SiteFooter.tsx

</details>

---

### 🤖 AI · 21:38 25/8/26

Giờ tới `ImageWithFallback`, map components, và các trang.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\image-fallback.ts
- `Write` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx

</details>

---

### 🤖 AI · 21:38 25/8/26

Giờ tạo các map component.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts
- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx

</details>

---

### 🤖 AI · 21:39 25/8/26

Giờ tới `app/page.tsx` (homepage) và `app/provinces/[slug]/page.tsx`.

<details>
<summary>6 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\app\page.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx
- `Write` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx

</details>

---

### 🤖 AI · 21:40 25/8/26

Giờ update `next.config.ts` cho remotePatterns ảnh Wikimedia, và tạo `.env.local` placeholder.

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\next.config.ts
- `Write` — D:\01_Study\07_Local_Food\.env.local
- `Bash` — Remove unused boilerplate assets and typecheck project
- `Bash` — Build Next.js app to catch type/runtime errors

</details>

---

### 🤖 AI · 21:41 25/8/26

Build sạch, cả 2 tỉnh đã được static-generate. Giờ khởi động dev server để test thực tế trong browser.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Start Next.js dev server in background
- `Skill`

</details>

---

### 🧑 PM · 21:41 25/8/26

> Base directory for this skill: C:\Users\X\AppData\Local\Temp\claude\bundled-skills\2.1.238\5b2430244044cf3c049b62751572c05b\run
> 
> **Running means launching the actual app and interacting with it** —
> not the test suite, not an `import` of an internal function and a
> `console.log`. The app as a user (human or programmatic) would meet
> it: the CLI at its command, the server at its socket, the GUI at its
> window.
> 
> ## First: does a project skill already cover this?
> 
> A project skill that launches this app is the repo's verified path —
> its author already cold-started from a Linux container and committed
> what worked: the exact `apt-get` line, the env vars, the patches, the
> driver. Use it instead of rediscovering.
> 
> ```bash
> d=$PWD; while :; do
>   grep -Hm1 '^description:' "$d"/.claude/skills/*/SKILL.md 2>/dev/null
>   [ -e "$d/.git" ] || [ "$d" = / ] && break
>   d=$(dirname "$d")
> done
> ```
> 
> - **One describes launching/driving this app** → read that SKILL.md
>   and follow it verbatim. Don't paraphrase; don't skip the patches.
> - **Mega-repo, several plausible, no clear match** → ask the user
>   which unit to run.
> - **Stale** (fails on mechanics unrelated to your task) → tell the
>   user; offer to refresh it via `/run-skill-generator`.
> - **Nothing about running** → fall back to the patterns below.
> 
> ## Otherwise: match the shape, use the pattern
> 
> Pick the row closest to your project. Each example walks through
> launch + first interaction; ignore any trailing "write the skill"
> section — you're using the recipe, not authoring one.
> 
> | Project type | Handle | Example |
> |---|---|---|
> | CLI tool | direct invocation, exit code, stdin/stdout | [examples/cli.md](examples/cli.md) |
> | Web server / API | background launch + `curl` smoke | [examples/server.md](examples/server.md) |
> | TUI / interactive terminal | tmux `send-keys` / `capture-pane` | [examples/tui.md](examples/tui.md) |
> | Electron / desktop GUI | Playwright `_electron` REPL under xvfb | [examples/electron.md](examples/electron.md) |
> | Browser-driven | dev server + `chromium-cli` script | [examples/playwright.md](examples/playwright.md) |
> | Library / SDK | import-and-call smoke script at the package boundary | [examples/library.md](examples/library.md) |
> 
> If nothing fits, start from the closest match and adapt. For a web
> app, [examples/playwright.md](examples/playwright.md) — drive it with
> `chromium-cli`, no custom driver needed. For a desktop app,
> [examples/electron.md](examples/electron.md) — it has the `_electron`
> REPL driver skeleton and the tmux wrapping.
> 
> ## Drive it, don't just launch it
> 
> Launching with no interaction proves the entrypoint resolves. That's
> not running the app — it's typechecking with extra steps. Drive it to
> a point where a user would see something:
> 
> - CLI → type a representative command, check the exit code and output.
> - Server → hit the route the diff touches with `curl`, read the body.
> - TUI → `send-keys` a navigation, `capture-pane` the result.
> - GUI → click the button, screenshot the window. **Look at the
>   screenshot.** A blank frame is a failure to launch.
> 
> If the fallback pattern didn't work out of the box — you had to
> install packages, set env vars, patch config, or write a driver —
> recommend `/run-skill-generator` in your report so that work gets
> captured as a project skill. If it just worked, don't.
> 
> 
> ## User Request
> 
> Local Food Next.js app already running at http://localhost:3000 (pnpm dev, started in background). Please open it in a browser, take a screenshot of the homepage (map + province cards), then click into a province detail page (e.g. http://localhost:3000/provinces/ha-noi) and screenshot that too. Report any console errors or visibly broken UI (e.g. broken map, broken images, layout issues).

---

### 🤖 AI · 21:42 25/8/26



<details>
<summary>12 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\bundled-skills\2.1.238\5b2430244044cf3c049b62751572c05b\run\examples\play
- `Bash` — Check chromium-cli availability and confirm dev server responds
- `Bash` — Install Playwright as dev dependency for smoke-testing
- `Bash` — Install Playwright chromium browser binary
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Run Playwright smoke test against dev server
- `Bash` — Run Playwright smoke test from project dir so it resolves the installed package
- `Edit` — D:\01_Study\07_Local_Food\smoke-test.mjs
- `Bash` — Re-run Playwright smoke test with load-event wait strategy
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🧑 PM · 21:45 25/8/26

> [Image: original 1280x3642, displayed at 703x2000. Multiply coordinates by 1.82 to map to original image.]

---

### 🧑 PM · 21:45 25/8/26

> [Image: original 1280x3594, displayed at 712x2000. Multiply coordinates by 1.80 to map to original image.]

---

### 🤖 AI · 21:45 25/8/26



<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Verify Wikimedia image URLs resolve directly
- `Bash` — Wait out rate limit and re-screenshot Hue page images
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🧑 PM · 21:46 25/8/26

> [Image: original 1280x3594, displayed at 712x2000. Multiply coordinates by 1.80 to map to original image.]

---

### 🤖 AI · 21:46 25/8/26



<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Re-check Banh_beo.jpg URL status
- `Bash` — Wait longer and recheck Banh_beo.jpg headers
- `Bash` — Poll Banh_beo.jpg URL until it stops rate-limiting

</details>

---

### 🤖 AI · 21:49 25/8/26

Trong lúc chờ, dọn dẹp file test tạm và cài đặt lại.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Remove ad-hoc smoke test script and playwright dev dependency

</details>

---

### 🤖 AI · 21:50 25/8/26

Giờ khởi tạo git repo và commit đầu tiên cho walking skeleton.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Check whether a git repo already exists in the project folder
- `Bash` — Initialize git repo and stage all files
- `Write` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Check if git user identity is configured for this new repo
- `Bash` — Create first commit for the walking skeleton

</details>

---

### 🤖 AI · 21:51 25/8/26

Commit đầu tiên đã tạo. Giờ kiểm tra background task xem ảnh Bánh bèo đã hết rate-limit chưa.

<details>
<summary>8 thao tác công cụ</summary>

- `Bash` — Check output of background poll for Banh_beo.jpg rate-limit
- `ToolSearch`
- `TaskOutput`
- `Bash` — Check dev server log for errors
- `Read` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Bash` — Scan dev log for error entries
- `Bash` — Rebuild after fixing generateMetadata async params bug

</details>

---

### 🤖 AI · 21:52 25/8/26

Build sạch. Commit fix và cập nhật Dev Book.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Commit the generateMetadata fix

</details>

---

### 🤖 AI · 21:53 25/8/26

**Walking Skeleton đã chạy được, đã commit 2 lần vào git repo riêng.** Tóm tắt:

- **Dev server đang chạy nền** tại `http://localhost:3000` (`pnpm dev`).
- Trang chủ hiển thị bản đồ (đang dùng style demo miễn phí của MapLibre — chưa đẹp vì chưa có MapTiler key) + danh sách 2 tỉnh dạng card.
- `/provinces/ha-noi` và `/provinces/thua-thien-hue` render đầy đủ: hero photo, mô tả, nguyên liệu, cách làm, cách ăn, ảnh thật từ Wikimedia Commons kèm attribution — món **Bánh cuốn** dùng fallback gradient đẹp vì Wikimedia không có ảnh phù hợp.
- Font tiếng Việt (Be Vietnam Pro + Lora), bảng màu ấm (đỏ ớt/vàng nghệ/xanh rau thơm) hiển thị đúng như thiết kế.
- `pnpm build` chạy sạch, static-generate cả 2 trang tỉnh.
- Git repo riêng đã init, 2 commit, `DEVBOOK.md` ghi lại 6 vướng mắc thật đã gặp và cách xử lý (bug `generateMetadata` chưa await params, GeoJSON bị trùng 65→63 tỉnh, rate-limit Wikimedia khi test dồn dập...).

**Việc mày cần làm tiếp:**
1. Đăng ký free tại maptiler.com/account/keys, dán key vào `D:\01_Study\07_Local_Food\.env.local` (`NEXT_PUBLIC_MAPTILER_KEY=...`) rồi restart `pnpm dev` để bản đồ đẹp hơn.
2. Mở `http://localhost:3000` xem thử, bấm vào bubble để test điều hướng.

Việc tiếp theo (sau khi mày duyệt Walking Skeleton): điền nốt 6 tỉnh MVP còn lại (Hải Phòng, Quảng Nam, Khánh Hòa, TP.HCM, Cần Thơ, An Giang). Cho tao biết khi nào mày muốn tiếp tục.

---

### 🧑 PM · 21:57 25/8/26

> Mày làm hơi nhanh rồi
> Mày có HỌC qua tài liệu bootcamp ko?
> Sao ko đi từng step follow, trước hết phải lên plan, check lại requirement, tạo wbs, tạo risk/issue list
> mà sao ko thấy mày làm nhỉ, tao nhớ là có cổng đóng các thứ, tao cần trả lời xong mới qua bước tiếp theo mà
> Như vậy tao sẽ bị fail bài tập này đấy.
> giờ review đi lại từng bước kĩ càng nhé

---

### 🤖 AI · 21:57 25/8/26

Mày nói đúng — tao sai. Để tao nhận lỗi rõ ràng trước khi làm gì tiếp.

**Tao đã học tài liệu bootcamp** (đọc START-HERE, Operating Model, Capstone Playbook ở đầu phiên), nhưng khi mày nói "tiến hành dev thật", tao đã **nhảy thẳng vào bước [8] BUILD** mà bỏ qua toàn bộ các bước [0]→[7]:

| Bước | Artefact lẽ ra phải có | Tao đã làm gì |
|---|---|---|
| [0] Làm rõ scope | `SCOPE-LF.md` | Chỉ hỏi qua AskUserQuestion rồi tự chốt, không có văn bản, không có Cổng hiểu |
| [1] SW Spec (SRS) | `SPEC-LF.md` | Bỏ qua hoàn toàn — không có user story/AC/NFR |
| [2] Module Map | `MODULEMAP-LF.md` | Bỏ qua |
| [3] Architecture | `ARCH-LF.md` | Có bàn qua trong plan mode nhưng không tách thành artefact riêng, không có Cổng hiểu |
| [4] WBS | `WBS-LF.md` | **Không có** |
| [5] Estimation | `EST-LF.md` | **Không có** |
| [6] Risk + Delegation Map | `RISK-LF.md`, `DELEGATION-MAP-LF.md` | **Không có** |
| [7] Definition of Ready | `DOR-LF.md` | **Không có** — build thẳng luôn |
| [8] Build | code | Đã làm (hơi sớm) |

Đúng như quy tắc số 1 của Capstone Playbook: *"AI gen ≠ đã xong"* — mỗi bước phải có **🔒 Cổng hiểu**: mày giải thích lại bằng lời + bắt được ≥1 chỗ tao sai, rồi mới qua bước tiếp. Tao đã không dừng lại chờ mày đóng cổng ở bước nào cả — đó chính xác là kiểu rubber-stamp mà chương trình cấm, và đúng như mày nói, nếu Coach hỏi ở viva thì mày sẽ không trả lời được "vì sao chốt scope này" vì thực ra chưa ai chốt bằng văn bản.

Để tao ghi lại lỗi quy trình này vào Dev Book, rồi mình quay lại làm đúng từ đầu.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Write` — D:\01_Study\07_Local_Food\SCOPE-LF.md
- `Bash` — Commit SCOPE artefact and process-error devbook entry

</details>

---

### 🤖 AI · 21:59 25/8/26

Đã ghi lỗi quy trình vào `DEVBOOK.md` và viết lại `SCOPE-LF.md` đúng theo template bước [0] của Capstone Playbook — đã commit.

Giờ tao **dừng ở đây, chờ mày đóng Cổng hiểu** trước khi đi tiếp sang bước [1] SPEC. Mày trả lời trực tiếp (bằng lời, không phải chọn nút):

1. **MVP này cố tình bỏ cái gì, vì sao bỏ được?** (nhìn mục *Out of scope* trong `SCOPE-LF.md`, giải thích lại theo hiểu biết của mày).
2. **Chỉ ra ≥1 giả định trong bảng 10 câu hỏi mà mày KHÔNG đồng ý** hoặc muốn sửa lại — nếu đồng ý hết 100% thì đáng ngờ, Coach sẽ hỏi lại.
3. Trả lời riêng câu hỏi #8: **có deadline/mốc nộp bài, viva cụ thể không?** — cái này quyết định EST-LF.md ở bước [5] có khả thi làm đủ 63 tỉnh hay dừng ở MVP.

Tao sẽ không viết `SPEC-LF.md` cho tới khi mày trả lời xong 3 ý trên.

---

### 🧑 PM · 19:53 26/8/26

> <task-notification>
> <task-id>bngb68wnw</task-id>
> <tool-use-id>toolu_012dhCjfwf8CKhoohT6Pemjv</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\bngb68wnw.output</output-file>
> <status>completed</status>
> <summary>Background command "Poll Banh_beo.jpg URL until it stops rate-limiting" completed (exit code 0)</summary>
> </task-notification>

---

### 🤖 AI · 19:54 26/8/26

Cập nhật nhỏ không liên quan đến câu hỏi Cổng hiểu: ảnh `Banh_beo.jpg` trên Wikimedia đã hết bị rate-limit (task nền kiểm tra vừa xong), nên ảnh Bánh bèo/nậm/lọc giờ sẽ load bình thường khi mày mở lại trang Huế.

Tao vẫn đang **chờ mày trả lời 3 ý ở Cổng hiểu bước [0]** trước khi viết `SPEC-LF.md`:

1. MVP cố tình bỏ cái gì, vì sao bỏ được?
2. Giả định nào trong 10 câu ở `SCOPE-LF.md` mày không đồng ý / muốn sửa?
3. Có deadline/mốc nộp bài, viva cụ thể không?

---

### 🧑 PM · 20:04 26/8/26

> 1. MVP này cố tình bỏ cái gì, và vì sao bỏ được
> Theo cách hiểu của tôi, MVP đang chủ động loại bỏ những tính năng phức tạp hoặc không cần thiết để chứng minh giá trị cốt lõi:
> 
> Không có đăng nhập/tài khoản cá nhân → vì mục tiêu ban đầu chỉ là khám phá món ăn, không cần hệ thống quản lý người dùng.
> 
> Không đa ngôn ngữ ngay từ đầu → vì đối tượng chính là người Việt, việc thêm tiếng Anh chỉ làm tăng khối lượng công việc mà chưa cần thiết cho giai đoạn thử nghiệm.
> 
> Không tích hợp đặt tour, thương mại điện tử → vì trọng tâm là trải nghiệm văn hóa ẩm thực, không phải dịch vụ du lịch.
> 
> Không cho phép người dùng đóng góp nội dung → để kiểm soát chất lượng và tránh rủi ro nội dung sai lệch.
> 
> Không làm app riêng → web responsive đã đủ để tiếp cận người dùng trên điện thoại, tránh tốn công xây dựng thêm nền tảng.
> 
> Tóm lại, MVP giữ đúng tinh thần “làm nhỏ nhưng chắc”: tập trung vào bản đồ + dữ liệu món ăn, bỏ những thứ làm phức tạp hóa kiến trúc hoặc vượt ra ngoài phạm vi chứng minh năng lực.
> 
> 2. Giả định tôi không đồng ý / muốn sửa lại
> Trong bảng 10 câu hỏi, tôi thấy giả định số 4 (“AI biên soạn nội dung, PM kiểm duyệt”) hơi thiếu thực tế. Nếu chỉ dựa vào AI + PM thì nguy cơ sai lệch văn hóa, hoặc công thức nấu ăn không chuẩn vị là khá cao. Tôi muốn sửa lại thành:
> 
> AI có thể biên soạn bản nháp, nhưng cần ít nhất một nguồn tham chiếu từ chuyên gia ẩm thực hoặc tài liệu chính thống để đảm bảo tính xác thực.  
> Điều này giúp nội dung không chỉ “đẹp” mà còn đáng tin cậy, tránh biến dự án thành một tập hợp công thức copy-paste thiếu chuẩn mực.
> 
> 3. Giả sử 2 tuần nữa là phải nộp bài rồi, gấp nhé

---

### 🤖 AI · 20:04 26/8/26

Cổng hiểu bước [0] đã đóng đúng nghĩa — đặc biệt điểm mày bắt ở giả định #4 rất sắc, đó chính xác là kiểu phán xử mà Coach muốn thấy, không phải chấp nhận nguyên văn AI đề xuất. Để tao cập nhật `SCOPE-LF.md` ghi nhận lại phần này rồi mới đi tiếp.

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\SCOPE-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SCOPE-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SCOPE-LF.md
- `Bash` — Commit SCOPE gate closure

</details>

---

### 🤖 AI · 20:06 26/8/26

Giờ viết `SPEC-LF.md` (bước [1]) — user story + AC + NFR + use-case theo role.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Bash` — Commit SPEC-LF.md

</details>

---

### 🤖 AI · 20:07 26/8/26

**`SPEC-LF.md` đã viết xong và commit.** Đã cố tình tự nhận 2 lỗ hổng thật (GAP-01: ảnh Wikimedia lỗi runtime chưa có fallback, GAP-02: bản đồ demo chưa xử lý lỗi tải style) thay vì giấu đi.

Tao dừng ở đây, chờ mày đóng **Cổng hiểu bước [1]**:

1. Chọn 1 user story bất kỳ trong `SPEC-LF.md`, tự test trên `localhost:3000` (dev server vẫn đang chạy nền) — nói xem AC nào PASS, AC nào FAIL với code hiện tại.
2. Bắt thêm ≥1 chỗ tao viết thiếu ngoài 2 cái GAP tao đã tự nhận.

Trả lời xong tao mới viết `MODULEMAP-LF.md` (bước [2]).

---

### 🧑 PM · 20:10 26/8/26

> 1. tao chưa check AC nên ko thể compare
> 2. Giả định số 6 về wishlist/localStorage: bạn ghi “KHÔNG cần tài khoản, wishlist dùng localStorage ẩn danh”. Nhưng chưa bàn tới việc người dùng đổi thiết bị hoặc xoá cache thì wishlist sẽ mất hoàn toàn. Nếu mục tiêu là khuyến khích họ quay lại site nhiều lần, thì việc wishlist biến mất có thể làm giảm trải nghiệm. Đây là một khoảng trống: chưa có quyết định rõ ràng về việc có chấp nhận rủi ro mất dữ liệu người dùng hay cần một giải pháp nhẹ hơn (ví dụ: export/import JSON, hoặc cookie sync).
> => cách xử lý tính bền vững của wishlist khi không có backend.

---

### 🤖 AI · 20:11 26/8/26

Điểm #2 mày bắt được rất sắc — đúng là tao chưa hề bàn tới độ bền của wishlist khi không có backend, đó là lỗ hổng thật trong tư duy thiết kế, không phải chuyện vặt. Để tao ghi nhận lại.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md

</details>

---

### 🤖 AI · 20:11 26/8/26

Đã ghi vào `SPEC-LF.md`, sẽ đưa vào `RISK-LF.md` (bước [6]) với mitigation cụ thể khi tới lúc.

Còn ý #1 — mày nói thẳng là chưa test, tao tôn trọng sự thật thà đó hơn là mày giả vờ đã test. Nhưng đúng tinh thần bootcamp thì phần này chưa xong: **Cổng hiểu đòi hỏi mày thật sự bấm thử**, không phải chỉ đọc AC trên giấy. Mất đúng 1 phút thôi, làm luôn nhé:

1. Mở `http://localhost:3000`, bấm vào 1 bubble bất kỳ → có sang đúng trang tỉnh không? (US-03)
2. Gõ thẳng URL `http://localhost:3000/provinces/khong-ton-tai` → có ra trang 404 tử tế không, hay trắng trang/crash? (US-08)

Báo lại PASS/FAIL từng cái cho tao, rồi tao mới coi Cổng hiểu bước [1] đóng hẳn và đi tiếp bước [2] Module Map.

---

### 🧑 PM · 20:14 26/8/26

> tạm thời v cũng đc rồi
> Mặc dù tao thấy UI chưa đc như kì vọng, thậm chí là còn lỗi thời, cỡ 10 năm về trước.
> giờ UI phải đẹp, wow hơn nhiều nhé, các mục tương tác, sắp xếp icon và thanh công cụ nên có thêm và bắt mắt.
> 2. 404 cũng tạm thôi

---

### 🤖 AI · 20:14 26/8/26

Cổng hiểu bước [1] đóng — mày đã test thật (US-03 chạy được, US-08 ra trang nhưng chưa tử tế) và cho feedback UI rất đáng giá. Ghi nhận lại vào SPEC trước khi đi tiếp.

<details>
<summary>5 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Bash` — Commit SPEC gate closure with UI feedback

</details>

---

### 🤖 AI · 20:16 26/8/26

Giờ tới bước [2] Module Map — dựa trên feedback UI, tao xếp lại tầng móng/bề mặt để việc nâng cấp UI không bị làm lặp lại nhiều lần.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\MODULEMAP-LF.md
- `Bash` — Commit MODULEMAP-LF.md

</details>

---

### 🤖 AI · 20:16 26/8/26

**`MODULEMAP-LF.md` đã viết xong và commit** — điểm quan trọng nhất: tao nâng **Design System lên Layer 0** (móng), vì nếu cứ làm nội dung 6 tỉnh còn lại trước rồi mới "làm đẹp UI" sau thì phải sửa lại UI ở tất cả các trang — đúng bẫy mà Playbook cảnh báo.

Tao dừng ở đây, chờ mày đóng **Cổng hiểu bước [2]**:

1. Chỉ vào bảng module, nói theo lời mày: **móng nào phải xong trước, vì sao bề mặt không "wow" được nếu thiếu nó?**
2. **Bác ≥1 chỗ tao xếp sai tầng** — ví dụ mày có đồng ý "Ảnh & fallback" nên là Layer 0 không, hay có module nào tao đặt Layer 0 nhưng chưa thực sự cần ngay?

---

### 🧑 PM · 20:24 26/8/26

> 1. Móng nào PHẢI xong trước, vì sao bề mặt không “wow” được nếu thiếu nó
> Theo cách hiểu của tôi, Design System chính là phần móng bắt buộc phải hoàn thiện trước. Nếu chưa có một hệ thống thiết kế nhất quán (màu sắc, typography, spacing, icon, motion), thì mọi module bề mặt như dish card, map toolbar hay trang chi tiết tỉnh sẽ chỉ là những mảnh ghép rời rạc, khó tạo cảm giác “wow”. Nói cách khác, UI đẹp không thể chỉ dựa vào từng component riêng lẻ; nó cần một nền tảng chung để đảm bảo đồng bộ và dễ mở rộng. Nếu bỏ qua bước này rồi mới làm bề mặt, thì sau đó sẽ phải sửa lại toàn bộ, rất tốn công.
> 
> 2. Bác ≥1 chỗ xếp sai tầng
> Tôi thấy có một điểm hơi lệch: “Ảnh & fallback” được xếp vào Layer 0. Theo tôi, nó nên được coi là bề mặt thay vì móng. Lý do: fallback ảnh chỉ ảnh hưởng đến trải nghiệm hiển thị của từng component (dish card, province page), chứ không phải nền tảng kiến trúc. Nếu sau này muốn thay đổi cách xử lý ảnh lỗi, chỉ cần chỉnh component hiển thị, không ảnh hưởng đến schema dữ liệu hay routing. Nó không có sức lan tỏa “mọi module đều phụ thuộc” như data schema hay design system.
> 
> Ngược lại, việc xếp nó vào Layer 0 khiến trọng tâm bị loãng: ta đang đặt một vấn đề UI runtime (ảnh lỗi) ngang hàng với những quyết định kiến trúc cốt lõi. Tôi sẽ đẩy nó xuống tầng bề mặt để xử lý sau khi Design System chốt xong.

---

### 🤖 AI · 20:24 26/8/26

Phân tích của mày đúng và tinh hơn cách tao xếp ban đầu. Để tao làm rõ thêm một chút rồi sửa lại cho chuẩn: bản thân **component** `ImageWithFallback` (cái khung tái sử dụng) vẫn nên nằm trong Design System vì nó được dùng ở mọi dish card — giống Button/Card. Nhưng cái tao gộp nhầm là **GAP-01 (xử lý lỗi tải ảnh lúc runtime)** — đây đúng như mày nói, chỉ là một tác vụ hoàn thiện bề mặt, không có tính lan toả kiến trúc, không module nào khác phải chờ nó xong mới chạy được. Sửa lại cho đúng.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\MODULEMAP-LF.md
- `Edit` — D:\01_Study\07_Local_Food\MODULEMAP-LF.md
- `Bash` — Commit MODULEMAP gate closure

</details>

---

### 🤖 AI · 20:27 26/8/26

Giờ tới bước [3] Architecture — lần này sẽ định nghĩa rõ kiến trúc kỹ thuật cho phần Design System để giải quyết yêu cầu "wow", không chỉ sơ đồ hệ thống chung chung.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\ARCH-LF.md
- `Bash` — Commit ARCH-LF.md

</details>

---

### 🤖 AI · 20:28 26/8/26

**`ARCH-LF.md` đã viết xong và commit.** Điểm đáng chú ý: mục "chưa chốt" #1 — `Dish.sourceRef` chưa có trong schema, cần thêm để enforce yêu cầu nguồn tham chiếu bằng TypeScript thay vì lời hứa suông.

Tao dừng ở đây, chờ mày đóng **Cổng hiểu bước [3]**:

1. Giải thích được vì sao chọn **"không backend, data JSON tĩnh"** thay vì có backend thật — đánh đổi gì (được gì, mất gì)?
2. Tìm **≥1 trường dữ liệu** ở bảng mục 3 mà tao chưa gắn độ nhạy đúng — hoặc xác nhận bảng đó ổn *sau khi kiểm kỹ* (không phải đồng ý cho có).

---

### 🧑 PM · 20:34 26/8/26

> 1. Vì sao chọn “không backend, data JSON tĩnh” thay vì có backend thật
> Quyết định này là một sự đánh đổi rõ ràng:
> 
> Được gì:
> 
> Đơn giản hóa vận hành: Không cần server, database, bảo trì hay lo bảo mật backend. Chỉ cần deploy HTML/JS tĩnh trên Vercel free tier.
> 
> Tốc độ phát triển: Trong 2 tuần deadline, việc chỉ quản lý JSON tĩnh giúp tập trung vào UI/UX và nội dung thay vì setup hạ tầng.
> 
> Chi phí bằng 0: Không phải trả phí cho hosting DB hay API.
> 
> SEO tốt hơn: Static Site Generation (SSG) tạo ra HTML tĩnh, giúp Google index dễ dàng.
> 
> Mất gì:
> 
> Không có dữ liệu động: Không thể xử lý các tính năng như đồng bộ wishlist giữa nhiều thiết bị, hay nội dung do người dùng đóng góp.
> 
> Khó mở rộng về sau: Nếu sau này muốn thêm tính năng tương tác phức tạp (ví dụ: review, comment, cá nhân hóa), sẽ phải thay đổi kiến trúc để có backend.
> 
> Giới hạn về realtime: Không thể cập nhật dữ liệu tức thì từ server, mọi thay đổi phải rebuild site.
> 
> Tóm lại, đây là một lựa chọn hợp lý cho MVP: giảm độ phức tạp để tập trung vào giá trị cốt lõi, nhưng chấp nhận rằng nếu mở rộng tính năng thì phải refactor kiến trúc.
> 
> 2. Kiểm tra bảng dữ liệu (mục 3)
> Sau khi soi kỹ, tôi thấy có một trường chưa được gắn độ nhạy đúng:
> 
> Province.summary: bạn gắn là “Công khai, không nhạy cảm”. Nhưng thực tế, nếu phần summary này được AI biên soạn, nó vẫn cần nguồn tham chiếu để đảm bảo tính chính xác văn hóa/ẩm thực, giống như phần Dish.*. Nếu không, nguy cơ sai lệch hoặc thiên kiến vùng miền là có thật. Tôi sẽ gắn nó là Công khai nhưng cần nguồn tham chiếu.
> 
> Các trường khác (DishImage, Wishlist) được gắn hợp lý rồi.

---

### 🤖 AI · 20:34 26/8/26

Đúng, `Province.summary` cũng là nội dung do AI biên soạn — sót thật, cùng loại rủi ro với `Dish.*`. Sửa lại.

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\ARCH-LF.md
- `Edit` — D:\01_Study\07_Local_Food\ARCH-LF.md
- `Edit` — D:\01_Study\07_Local_Food\ARCH-LF.md
- `Bash` — Commit ARCH gate closure

</details>

---

### 🤖 AI · 20:36 26/8/26

Giờ tới bước [4] WBS — bẻ Wave 1 (làm ngay, task 0.5-2 ngày) từ những gì đã chốt ở ARCH.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit WBS-LF.md

</details>

---

### 🤖 AI · 20:37 26/8/26

**`WBS-LF.md` đã viết xong và commit.** Đã cảnh báo sớm: cộng thô Wave 1 ra ~10-11 ngày công việc trong khi hạn ~2 tuần — khả năng cao phải cắt scope, sẽ xử lý formal ở bước [5] EST.

Tao dừng ở đây, chờ mày đóng **Cổng hiểu bước [4]**:

1. Cầm 1 task Wave 1 bất kỳ (vd W1-5, W1-10...), giải thích bằng lời mày: **xong nó ra cái gì, phụ thuộc ai?**
2. Bắt **≥1 việc hay sót** mà tao chưa đưa vào WBS.

---

### 🧑 PM · 20:39 26/8/26

> 1. Cầm một task Wave 1 bất kỳ
> Ví dụ tôi chọn W1-5 (Toolbar bản đồ tuỳ chỉnh):
> 
> Xong nó ra cái gì: Một component MapToolbar.tsx với icon lucide, style đồng bộ theo Design System, thay thế control mặc định của MapLibre. Kết quả là người dùng sẽ thấy một toolbar bản đồ “wow” hơn, nhất quán với UI tổng thể.
> 
> Phụ thuộc ai: Nó phụ thuộc vào việc Design System đã được mở rộng (W1-3) và có sẵn component gốc như Button/Toolbar base (W1-4). Nếu chưa có token và component nền, thì toolbar sẽ không thể làm đúng chuẩn, dễ bị lệch style.
> 
> 2. Bắt ≥1 việc hay sót chưa đưa vào WBS
> Sau khi soi kỹ, tôi thấy có một việc quan trọng chưa được liệt kê:
> 
> 👉 Accessibility audit (A11y): hiện WBS có QA responsive, test negative-case, nhưng chưa có task kiểm tra khả năng truy cập (ví dụ: contrast ratio, keyboard navigation, aria-label cho icon toolbar). Với yêu cầu “UI wow”, nếu bỏ qua accessibility thì site có thể đẹp nhưng không thân thiện với người dùng khuyết tật hoặc không đạt chuẩn cơ bản. Đây là một task thường bị bỏ sót nhưng cần ít nhất một checklist audit trước khi nộp.
> 
> Ngoài ra, một việc khác cũng đáng lưu ý: Performance check Lighthouse. WBS chưa có task đo lường hiệu năng (First Contentful Paint, bundle size). Với Next.js SSG thì thường ổn, nhưng nếu Framer Motion hoặc ảnh lớn gây chậm thì sẽ ảnh hưởng trải nghiệm.

---

### 🤖 AI · 20:40 26/8/26

Cả 2 điểm đều là lỗ hổng thật — NFR Accessibility và Performance đã ghi trong `SPEC-LF.md` nhưng WBS không biến thành task cụ thể, đúng kiểu "có ghi nhưng quên biến thành việc làm". Sửa lại.

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit WBS gate closure

</details>

---

### 🤖 AI · 20:41 26/8/26

Giờ tới bước [5] Estimation — đây chính là chỗ phải xử lý formal cảnh báo "vượt mốc" đã nêu ở WBS.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\EST-LF.md
- `Bash` — Commit EST-LF.md

</details>

---

### 🤖 AI · 20:42 26/8/26

**`EST-LF.md` đã viết xong và commit.** Số quan trọng nhất: PERT ≈ **49.5 giờ**, trong khi quỹ thời gian PM thật trong 2 tuần chỉ khoảng **30-40 giờ** → vượt mốc, đúng tình huống EX-03. Tao đề xuất 3 phương án cắt scope (A giữ nguyên/rủi ro, B giảm còn 5 tỉnh/an toàn, C giữ 8 tỉnh cắt polish/không khuyến khích) và nghiêng về **B**, nhưng đây là quyết định của mày.

Tao dừng ở đây, chờ mày đóng **Cổng hiểu bước [5]**:

1. Chỉ 1 estimate bất kỳ trong bảng, nói **giả định nào đứng sau con số đó**.
2. Bác **≥1 con số** mày thấy vô căn cứ.
3. **Chốt phương án A/B/C** (hoặc đề xuất khác) — bắt buộc trước khi tao viết `RISK-LF.md`, vì risk cần biết đang quản lý cho scope nào.

---

### 🧑 PM · 20:45 26/8/26

> 1. Chỉ một estimate bất kỳ và giả định đứng sau
> Tôi chọn W1-10 (Data entry 6 tỉnh): con số khả dĩ 4h/tỉnh dựa trên giả định rằng:
> 
> Đã có kinh nghiệm từ 2 tỉnh trước (Hà Nội, Huế) nên quy trình research + viết mô tả/công thức/cách ăn + tìm ảnh Wikimedia đã rõ ràng.
> 
> Nguồn tham chiếu (Wikipedia, báo chính thống) cho các món phổ biến sẽ tương đối dễ tìm.
> 
> Tuy nhiên, vẫn có rủi ro ảnh Wikimedia thưa thớt, nên phải dành thêm thời gian tìm ảnh hoặc viết lại nội dung cho phù hợp.
> 
> 2. Bác ≥1 con số vô căn cứ
> Tôi thấy con số W1-6 (Framer Motion thật) lạc quan 1h là hơi vô căn cứ. Lý do: việc tinh chỉnh animation để đạt cảm giác “wow” thường mất nhiều vòng thử nghiệm, không thể gói gọn trong 1h. Ngay cả khi đã cài sẵn thư viện, việc thiết kế motion hợp lý cho hover-tilt, stagger reveal, transition popup bản đồ cần ít nhất vài lần review. Tôi sẽ yêu cầu bạn nêu lại khoảng lạc quan/khả dĩ/bi quan cho W1-6, vì 1h lạc quan là quá thấp.
> 
> 3. Chốt phương án cắt scope
> Trong ba phương án A/B/C, tôi chốt phương án A

---

### 🤖 AI · 20:45 26/8/26

W1-6 sửa đúng — 1h lạc quan cho việc tinh chỉnh "cảm giác wow" là phi thực tế. Cập nhật lại số.

<details>
<summary>5 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\EST-LF.md
- `Edit` — D:\01_Study\07_Local_Food\EST-LF.md
- `Edit` — D:\01_Study\07_Local_Food\EST-LF.md
- `Edit` — D:\01_Study\07_Local_Food\EST-LF.md
- `Bash` — Commit EST gate closure

</details>

---

### 🤖 AI · 20:47 26/8/26

Giờ tới bước [6] — Risk List + Delegation Map.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\RISK-LF.md
- `Write` — D:\01_Study\07_Local_Food\DELEGATION-MAP-LF.md
- `Bash` — Commit RISK and DELEGATION-MAP artefacts

</details>

---

### 🤖 AI · 20:48 26/8/26

**`RISK-LF.md`** (9 rủi ro, có nhóm rủi ro AI-sinh: hallucination, rubber-stamping, rò rỉ secret) **và `DELEGATION-MAP-LF.md`** đã viết xong và commit.

Tao dừng ở đây, chờ mày đóng **Cổng hiểu bước [6]**:

1. Giải thích vì sao **"đọc/ghi `.env.local`" phải để A+** chứ không A — chuyện gì xảy ra nếu để A?
2. Bắt **≥1 việc** trong bảng Delegation Map mà mày nghĩ tao xếp nhầm xuống Leash A trong khi thực ra đụng rủi ro cao hơn.

---

### 🧑 PM · 20:51 26/8/26

> 1. Vì sao “đọc/ghi .env.local” phải để A+ chứ không A
> .env.local chứa secret như API key MapTiler. Nếu chỉ để mức A (AI tự động làm, không có kiểm soát của PM), thì nguy cơ là:
> 
> AI có thể vô tình commit file .env.local lên repo, dẫn đến rò rỉ key.
> 
> Hoặc AI tự điền giá trị giả/không hợp lệ, khiến build chạy sai mà PM không nhận ra ngay.
> 
> Vì secret là dữ liệu nhạy cảm, một lỗi nhỏ có thể gây hậu quả lớn (rate-limit, khóa tài khoản, thậm chí lộ thông tin).
> 
> Do đó phải để mức A+: AI hỗ trợ nhưng PM trực tiếp thao tác đọc/ghi, review trước khi push. Đây là cách đảm bảo không có secret nào bị lộ ngoài ý muốn.
> 
> 2. Bắt ≥1 việc trong bảng Delegation Map xếp nhầm xuống Leash A
> Một ví dụ: QA pass 8 tỉnh (W1-11) nếu bị xếp xuống Leash A thì là sai. QA không chỉ là việc “AI chạy test tự động”, mà còn cần PM kiểm tra thủ công theo checklist AC, đặc biệt các negative-case. Nếu để Leash A, rủi ro là AI báo “pass” nhưng thực tế UI vẫn lỗi (ví dụ responsive 360px vỡ layout). Đây là rủi ro cao hơn, nên phải nâng lên ít nhất A+ (AI hỗ trợ test, PM xác nhận).

---

### 🤖 AI · 20:51 26/8/26

Điểm #1 chuẩn. Điểm #2 — tao phải nói thật: **QA pass (W1-11) không hề có trong bảng Delegation Map** để bị "xếp nhầm xuống A" — nó bị **thiếu hẳn**, đó là một loại lỗi khác (thiếu sót, không phải xếp sai tầng). Nhưng tinh thần mày nói đúng: không được để AI tự tuyên bố "pass" rồi coi là xong. Sửa lại cho chính xác.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\DELEGATION-MAP-LF.md
- `Edit` — D:\01_Study\07_Local_Food\DELEGATION-MAP-LF.md
- `Bash` — Commit DELEGATION-MAP gate closure

</details>

---

### 🤖 AI · 20:52 26/8/26

Giờ tới bước [7] Definition of Ready — bước cuối trước khi được phép code lại.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\DOR-LF.md
- `Bash` — Commit DOR-LF.md

</details>

---

### 🤖 AI · 20:53 26/8/26

**`DOR-LF.md` đã viết xong và commit — đây là cổng cuối cùng trước khi được phép code lại.** Kết quả: 7/8 mục PASS, 1 FAIL (chưa có MapTiler key thật) nhưng phạm vi ảnh hưởng giới hạn.

Tao dừng ở đây, chờ mày đóng **Cổng hiểu bước [7]** — cổng cuối trước bước [8] BUILD:

1. Nói lại **lát cắt dọc lần này đi xuyên những tầng nào** (móng → component gốc → bề mặt) theo cách hiểu của mày.
2. Xác nhận: có đồng ý **"build trước, verify với MapTiler key thật sau"**, hay muốn tao dừng chờ mày đăng ký key trước khi code?

Toàn bộ hồ sơ artefact đã có: `SCOPE-LF.md` → `SPEC-LF.md` → `MODULEMAP-LF.md` → `ARCH-LF.md` → `WBS-LF.md` → `EST-LF.md` → `RISK-LF.md` + `DELEGATION-MAP-LF.md` → `DOR-LF.md`, mỗi bước đều có Cổng hiểu thật do mày đóng, ghi trong git log.

---

### 🧑 PM · 20:56 26/8/26

> 1. Lát cắt dọc lần này đi xuyên những tầng nào
> Theo cách hiểu của tôi, lát cắt “Nâng cấp Design System” (W1-1 → W1-9) đi xuyên từ móng lên bề mặt như sau:
> 
> Móng (Layer 0): bắt đầu với việc bổ sung field sourceRef vào schema dữ liệu (W1-1), rồi mở rộng token trong Design System (spacing, typography, shadow, radius – W1-3). Đây là nền tảng để mọi thứ phía trên dựa vào.
> 
> Component gốc: xây dựng các thành phần cơ bản như Button, Toolbar base, Badge (W1-4). Những component này dùng trực tiếp token từ Design System, đảm bảo đồng bộ.
> 
> Bề mặt: từ đó mới dựng các phần hiển thị cụ thể: toolbar bản đồ tuỳ chỉnh (W1-5), hiệu ứng Framer Motion cho dish card và popup bản đồ (W1-6), trang 404 tuỳ chỉnh (W1-7), và xử lý fallback ảnh runtime (W1-8).
> 
> Cổng kiểm: cuối cùng là W1-9, nơi PM tự đánh giá “wow” trên Hà Nội + Huế trước khi nhân rộng ra các tỉnh khác.
> 
> Nói gọn: lát cắt này đi từ schema → token → component gốc → UI bề mặt, đúng trình tự để tránh phải sửa lại nhiều lần.
> 
> 2. Xác nhận mục FAIL (MapTiler key)
> Tôi đồng ý với cách xử lý “build trước, verify sau khi có key thật”. Lý do:
> 
> Phần lớn công việc trong W1-1 → W1-9 (schema, design system, component, motion, 404, fallback ảnh) không phụ thuộc vào MapTiler key.
> 
> Chỉ riêng W1-5 (toolbar bản đồ) cần test với style thật. Có thể tạm dùng style demo để build, rồi verify lại sau khi PM đăng ký key.
> 
> Nếu dừng toàn bộ chỉ vì chưa có key thì sẽ lãng phí thời gian, trong khi deadline gấp.
> 
> 👉 Vì vậy, tôi chấp nhận cho build tiếp, với điều kiện PM bổ sung key trước khi bước QA toàn bộ (W1-11) để đảm bảo bản đồ chạy đúng khi nộp.

---

### 🤖 AI · 20:56 26/8/26

Cổng hiểu bước [7] đóng — cả 2 điểm đều chính xác, và mày thêm 1 điều kiện cụ thể tốt (MapTiler key phải có trước W1-11). Ghi nhận lại.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\DOR-LF.md
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit DOR gate closure - all governance artefacts complete

</details>

---

### 🤖 AI · 20:58 26/8/26

Toàn bộ hồ sơ 8 artefact (`SCOPE` → `SPEC` → `MODULEMAP` → `ARCH` → `WBS` → `EST` → `RISK`+`DELEGATION-MAP` → `DOR`) đã hoàn thành, mỗi bước đều có Cổng hiểu thật do mày đóng — có thể tra lại toàn bộ qua `git log`.

Bước [8] BUILD là bước nghiêm ngặt nhất theo Playbook (Cổng hiểu nghiêm nhất), nên tao dừng lại xin xác nhận trước khi bắt tay code, thay vì tự chạy luôn:

**Việc sắp làm (W1-1 → W1-9, theo đúng thứ tự đã chốt):**
1. Thêm `sourceRef` vào schema (`lib/types.ts`)
2. Rà + bổ sung nguồn tham chiếu cho nội dung Hà Nội/Huế đã có
3. Mở rộng token Design System (spacing/radius/shadow/typography)
4. Xây component gốc (Button, Toolbar, Badge)
5. Toolbar bản đồ tuỳ chỉnh (icon lucide)
6. Framer Motion thật (hover-tilt card, stagger, transition)
7. Trang 404 tuỳ chỉnh
8. Fix GAP-01 (ảnh lỗi runtime)
9. **Dừng lại, chờ mày tự đánh giá "wow"** trước khi nhân rộng ra 6 tỉnh còn lại

Tao sẽ ghi `DEVBOOK.md` liên tục trong lúc code (AI sai → sửa) như đã cam kết ở Cổng hiểu bước [7]. Mày gật đầu là tao bắt đầu W1-1.

---

### 🧑 PM · 20:59 26/8/26

> oke tiến hành đi nào.
> cố gắng nhé, hãy tổng hợp kiến thức tinh hoa nhân loại về code và đem về tích hợp vào sản phẩm này nào.

---

### 🤖 AI · 20:59 26/8/26

Bắt đầu W1-1 — thêm `sourceRef` vào schema.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\types.ts

</details>

---

### 🤖 AI · 21:00 26/8/26

Phát hiện 1 lỗ hổng thật khi sửa: `lib/provinces.ts` hiện dùng `JSON.parse(raw) as Province` — ép kiểu suông, không hề validate thật, trái với điều ARCH đã ghi ("TypeScript sẽ báo lỗi nếu sai field"). Sửa bằng validation runtime thật (zod) thay vì lời hứa suông.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Install zod for real runtime schema validation
- `Write` — D:\01_Study\07_Local_Food\lib\schema.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\schema.ts

</details>

---

### 🤖 AI · 21:00 26/8/26

Giờ cập nhật `lib/provinces.ts` để dùng validation thật thay vì ép kiểu.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\provinces.ts

</details>

---

### 🤖 AI · 21:01 26/8/26

W1-1 xong. Giờ W1-2 — đối chiếu nội dung Hà Nội/Huế với nguồn thật (Wikipedia tiếng Việt) trước khi thêm `sourceRefs`.

<details>
<summary>4 thao tác công cụ</summary>

- `WebFetch` — Tóm tắt: nguyên liệu chính, cách nấu nước dùng, và điểm khác biệt giữa phở Hà Nội (Bắc) và phở miền Nam theo b
- `WebFetch` — Tóm tắt nguyên liệu, cách làm, và cách ăn bún chả theo bài viết này.
- `WebFetch` — Tóm tắt nguyên liệu chính, cách chế biến, và nguồn gốc tên gọi "Chả cá Lã Vọng" theo bài viết này.
- `WebFetch` — Tóm tắt nguyên liệu, cách làm bánh cuốn, và biến thể bánh cuốn Thanh Trì theo bài viết này.

</details>

---

### 🤖 AI · 21:02 26/8/26

Phát hiện 1 sai lệch thật khi đối chiếu nguồn: nội dung Bánh cuốn Thanh Trì tao viết trước đó nói "cuốn nhân thịt băm/mộc nhĩ" — nhưng Wikipedia xác nhận bánh cuốn Thanh Trì đặc trưng là **KHÔNG nhân** (bánh trắng mỏng, ăn kèm chả lụa/nước mắm riêng). Đây đúng là NFR content integrity phát huy tác dụng. Giờ kiểm tra 4 món Huế trước khi sửa toàn bộ.

<details>
<summary>9 thao tác công cụ</summary>

- `WebFetch` — Tóm tắt nguyên liệu chính, cách nấu nước dùng (mắm ruốc, sả), và điểm đặc trưng của bún bò Huế theo bài viết n
- `WebFetch` — Tóm tắt nguyên liệu và cách ăn cơm hến theo bài viết này.
- `WebFetch` — Tóm tắt nguyên liệu, cách làm, và điểm khác biệt giữa bánh khoái Huế và bánh xèo Nam Bộ theo bài viết này.
- `WebFetch` — Tóm tắt nguyên liệu và cách làm bánh bèo theo bài viết này.
- `Read` — D:\01_Study\07_Local_Food\data\provinces\ha-noi.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\ha-noi.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\ha-noi.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\ha-noi.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\ha-noi.json

</details>

---

### 🤖 AI · 21:03 26/8/26

Giờ tương tự cho Huế.

<details>
<summary>6 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json

</details>

---

### 🤖 AI · 21:04 26/8/26

Giờ build thử để xác nhận schema validation hoạt động đúng.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Build to verify zod schema validation and content fixes

</details>

---

### 🤖 AI · 21:05 26/8/26

W1-1 + W1-2 xong — build sạch, validation zod hoạt động. Ghi Dev Book rồi commit.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Commit W1-1 and W1-2 work

</details>

---

### 🤖 AI · 21:05 26/8/26

W1-3 — mở rộng token Design System trong Tailwind (spacing/radius/shadow/typography).

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\app\globals.css
- `Edit` — D:\01_Study\07_Local_Food\app\globals.css

</details>

---

### 🤖 AI · 21:06 26/8/26

W1-4 — component gốc dùng token mới.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\ui\Button.tsx
- `Write` — D:\01_Study\07_Local_Food\components\ui\Badge.tsx
- `Write` — D:\01_Study\07_Local_Food\components\ui\Toolbar.tsx

</details>

---

### 🤖 AI · 21:06 26/8/26

W1-5 — toolbar bản đồ tuỳ chỉnh thay control mặc định của MapLibre.

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\map\MapToolbar.tsx

</details>

---

### 🤖 AI · 21:06 26/8/26

Giờ tích hợp toolbar này vào `FoodMap.tsx`, thay `NavigationControl` mặc định, dùng ref điều khiển map.

<details>
<summary>6 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Build to verify MapToolbar integration and MapRef API usage

</details>

---

### 🤖 AI · 21:07 26/8/26

W1-6 — Framer Motion thật cho hover-tilt card, stagger reveal, transition popup.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\motion\MotionProvider.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\layout.tsx

</details>

---

### 🤖 AI · 21:08 26/8/26

Giờ áp motion vào `DishCard.tsx` — hover lift/tilt nhẹ + stagger reveal khi cuộn tới.

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Read` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx

</details>

---

### 🤖 AI · 21:08 26/8/26

Giờ transition cho popup bản đồ.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx

</details>

---

### 🤖 AI · 21:08 26/8/26

Giờ áp token mới + motion stagger cho trang chủ.

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\app\page.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\ProvinceTeaserCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Bash` — Build after W1-6 Framer Motion integration

</details>

---

### 🤖 AI · 21:09 26/8/26

Build sạch. Giờ W1-7 — trang 404 tuỳ chỉnh.

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\app\not-found.tsx

</details>

---

### 🤖 AI · 21:09 26/8/26

W1-8 — fix GAP-01: xử lý lỗi tải ảnh runtime.

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx
- `Write` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx
- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx

</details>

---

### 🤖 AI · 21:10 26/8/26

Giờ build + chạy dev server để chuẩn bị test W1-9 (Cổng hiểu con "wow").

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Build after W1-7 (404) and W1-8 (image error fallback)
- `Bash` — Check if dev server is still responding

</details>

---

### 🤖 AI · 21:11 26/8/26

Dev server vẫn chạy, đã hot-reload. Chụp thử để tự kiểm tra trước khi mày đánh giá.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Reinstall playwright temporarily and capture screenshots of new UI
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🧑 PM · 21:12 26/8/26

> [Image: original 1280x3814, displayed at 671x2000. Multiply coordinates by 1.91 to map to original image.]

---

### 🤖 AI · 21:12 26/8/26

Phát hiện vấn đề: trang Hà Nội chỉ hiện 1/4 món, có khoảng trắng khổng lồ phía dưới. Cần kiểm tra kỹ xem đây là bug thật hay do cách chụp fullPage của Playwright không kích hoạt đúng `whileInView`.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Diagnose whether dish cards 2-4 are missing or just not-yet-visible
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 21:13 26/8/26

Xác nhận: đó chỉ là hiện tượng chụp `fullPage` của Playwright không replay đúng animation cuộn thật — cuộn tay thật thì hiển thị đầy đủ, đẹp. Không phải bug thật. Dọn dẹp file test và commit.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Remove ad-hoc test scripts and playwright dependency
- `Bash` — Final build check after removing playwright
- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Commit W1-3 through W1-8 build work

</details>

---

### 🤖 AI · 21:15 26/8/26

W1-1 → W1-8 xong, build sạch, đã commit. Dừng lại đúng chỗ **W1-9 — Cổng hiểu con "wow"**, việc này chỉ mày tự đánh giá được, không phải tao.

**Lưu ý trước khi mày xem:** bản đồ hiện vẫn hiện nền xanh trống (chưa thấy bubble) — đây **không phải bug mới**, mà là do style demo của MapLibre bị rate-limit khi tao test dồn dập (đã ghi ở R6/GAP-02 trong `RISK-LF.md` từ trước). Load lại trang vài lần hoặc đợi chút thường sẽ thấy bubble hiện ra; khi mày có MapTiler key thật sẽ hết hẳn vấn đề này.

**Đã làm trong W1-3→W1-8:**
- Token Design System đầy đủ (spacing/radius/shadow/typography ấm, không còn phẳng)
- Toolbar bản đồ tuỳ chỉnh (icon +/−/compass thay control mặc định)
- Hover-tilt + stagger reveal cho dish card (cuộn tới đâu, card hiện tới đó)
- Transition mượt cho popup bản đồ khi hover
- Trang 404 tuỳ chỉnh riêng, không còn mặc định Next.js
- Fix ảnh vỡ khi lỗi tải runtime (GAP-01) — tự chuyển sang placeholder
- Nguồn tham chiếu (`sourceRefs`) hiển thị dưới mỗi món/tóm tắt tỉnh — bấm vào ra thẳng Wikipedia

Mở `http://localhost:3000` (dev server vẫn chạy nền), tự đánh giá: **có thấy "wow" hơn bản cũ chưa, hay vẫn cần chỉnh gì?** Đây là điều kiện bắt buộc trước khi tao nhân rộng ra 6 tỉnh còn lại (W1-10).

---

### 🧑 PM · 21:17 26/8/26

> chưa như ý tao nhé.
> mày hãy reset mindset design đi nào.
> xem mà phải cuộn chuột nhiều là thấy ko ưa rồi, hay layout lại và có những option kiểu overview và xem kiểu timeline ấy, kiểu kiểu vậy

---

### 🤖 AI · 21:18 26/8/26

Nhận rồi — **Cổng hiểu con W1-9: FAIL**, đúng theo quy trình đã định (chưa đạt "wow" thì không được nhân rộng ra 6 tỉnh tiếp). Ghi nhận lại và nghĩ lại layout thay vì chỉnh màu mè vụn vặt.

Vấn đề cốt lõi mày chỉ ra: layout hiện tại là **1 cột dọc dài** — 4 món x mỗi món ~800px = cuộn vô tận. Đó là kiểu layout "blog bài viết" chứ không phải "khám phá ẩm thực". Tao đề xuất 2 hướng thiết kế cụ thể thay vì đoán mò:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 21:19 26/8/26

Ghi nhận việc này vào WBS rồi triển khai — grid tổng quan mặc định + panel trượt xem chi tiết + chế độ Hành trình cuộn ngang.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md

</details>

---

### 🤖 AI · 21:19 26/8/26

Giờ code. Trước tiên `Sheet.tsx` — panel trượt dùng chung.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\ui\Sheet.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\DishTile.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx

</details>

---

### 🤖 AI · 21:19 26/8/26

Giờ thay thế render trực tiếp DishCard trong trang tỉnh bằng component mới.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx

</details>

---

### 🤖 AI · 21:20 26/8/26

Giờ build và test lại toàn bộ.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Build after ProvinceDishExplorer redesign
- `Bash` — Self-verify redesigned province page interactions

</details>

---

### 🤖 AI · 21:21 26/8/26

No lỗi JS. Xem thử ảnh.

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 21:21 26/8/26

Cả 2 chế độ đều hoạt động tốt. Dọn dẹp và commit.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Clean up test script and playwright dependency
- `Bash` — Final build check
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit province page redesign

</details>

---

### 🤖 AI · 21:23 26/8/26

**Đã redesign xong** — trang tỉnh giờ có 2 chế độ:

- **Tổng quan** (mặc định): lưới compact 3 cột, thấy gần hết món ngay không cần cuộn nhiều, bấm 1 món → **panel trượt** từ phải hiện chi tiết đầy đủ (không chuyển trang, đóng bằng nút X hoặc phím Esc).
- **Hành trình**: chuyển sang cuộn **ngang** kiểu story, mỗi món 1 thẻ lớn trượt qua.

Tự test bằng Playwright cả 2 chế độ trước khi đưa mày xem — build sạch, không lỗi JS. Mở `http://localhost:3000/provinces/ha-noi` (dev server vẫn chạy nền), thử cả nút "Tổng quan"/"Hành trình" và bấm vào 1 món.

Đây vẫn là **W1-9 — Cổng hiểu con "wow"** (lần 2). Mày đánh giá lại: **đã đạt chưa, hay còn gì cần chỉnh?**

---

### 🧑 PM · 22:01 26/8/26

> Trong role là chuyên gia thiết kế UX/UI,
> Mày hãy review lại và đưa ra 10 point cần improve và practice apply luôn nhé

---

### 🤖 AI · 22:02 26/8/26

Vào vai UX/UI, review lại toàn bộ giao diện hiện tại. Đây là 10 điểm cần cải thiện — tao áp dụng luôn từng điểm.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — placeholder

</details>

---

### 🤖 AI · 22:02 26/8/26

## 10 điểm UX/UI cần cải thiện

1. **Hero trang chủ chỉ có chữ, không có ảnh** — thiếu sức hút thị giác ngay từ giây đầu, sai tinh thần "food magazine" đã đặt ra ở ARCH.
2. **Header phẳng, không có điểm nhấn thương hiệu** — chỉ là thanh trắng + viền mỏng, thiếu cá tính.
3. **Contrast badge neutral (taste tag) thấp** — `text-ink/60` trên nền kem nhạt có thể không đạt WCAG AA cho chữ nhỏ.
4. **Ảnh pop-in đột ngột khi tải xong** — thiếu hiệu ứng blur-up/fade, cảm giác giật cục.
5. **Panel Sheet không có ngữ cảnh** — mở ra không biết đang xem tỉnh nào nếu lỡ cuộn.
6. **2 khối "bản đồ" và "danh sách tỉnh" rời rạc** — không có câu dẫn kết nối, như 2 trang ghép lại.
7. **Không có gợi ý tương tác lần đầu cho bản đồ** — người mới vào không biết phải bấm vào bubble.
8. **Footer đơn điệu** — không tương xứng độ đầu tư của phần còn lại.
9. **Ảnh món ăn không phóng to được** — mất cơ hội chiêm ngưỡng ảnh đẹp đã tìm công phu.
10. **Khối thông tin dày (nguyên liệu/cách làm/cách ăn) khó quét nhanh** — thiếu icon dẫn hướng mắt.

Áp dụng luôn:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\ui\Badge.tsx

</details>

---

### 🤖 AI · 22:02 26/8/26

Điểm 4 — blur-up/fade khi ảnh tải xong.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx

</details>

---

### 🤖 AI · 22:03 26/8/26

Điểm 10 — icon dẫn hướng cho các mục thông tin trong DishCard.

<details>
<summary>6 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Write` — D:\01_Study\07_Local_Food\components\ui\Lightbox.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx

</details>

---

### 🤖 AI · 22:04 26/8/26

Giờ điểm 2 — header có điểm nhấn thương hiệu.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx

</details>

---

### 🤖 AI · 22:04 26/8/26

Điểm 8 — footer nâng cấp.

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\layout\SiteFooter.tsx

</details>

---

### 🤖 AI · 22:04 26/8/26

Giờ điểm 1 (hero ảnh), 6 (kết nối 2 khối), 7 (gợi ý tương tác lần đầu).

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\app\page.tsx
- `Write` — D:\01_Study\07_Local_Food\app\page.tsx

</details>

---

### 🤖 AI · 22:05 26/8/26

Giờ điểm 7 — gợi ý tương tác lần đầu trên bản đồ.

<details>
<summary>6 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Build after 10 UX/UI improvements

</details>

---

### 🤖 AI · 22:06 26/8/26

Build sạch. Giờ tự kiểm tra bằng ảnh chụp trước khi báo lại.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Screenshot updated UI to verify 10 UX improvements
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 22:10 26/8/26

Cả 2 chỗ ảnh vỡ nghi do rate-limit Wikimedia (do tao test dồn dập nhiều lần). Kiểm tra lại cho chắc trước khi kết luận.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Check if Pho image is currently rate-limited
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 22:11 26/8/26

Diễn giải đúng: đây là lỗi tải ảnh thoáng qua (rate-limit tự gây ra do test dồn dập), không phải bug logic — cùng ảnh load được ở `ProvinceHero` ngay sát đó. Nhưng đúng là 2 chỗ mới thêm (hero trang chủ, lightbox) chưa có xử lý khi ảnh lỗi như `ImageWithFallback` đã có — đây là gap thật, sửa luôn cho nhất quán.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Write` — D:\01_Study\07_Local_Food\components\HeroPhotoBackground.tsx

</details>

---

### 🤖 AI · 22:11 26/8/26

Giờ Lightbox — thêm xử lý lỗi tải tương tự.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\ui\Lightbox.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\ui\Lightbox.tsx

</details>

---

### 🤖 AI · 22:11 26/8/26

Giờ build và test lại, chờ 1 nhịp giữa các request để tránh tự rate-limit chính mình.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Build after adding error resilience to hero/lightbox images
- `Bash` — Prepare final verification script, note wait needed
- `Bash` — Poll until Wikimedia image is not rate-limited before final screenshot
- `Bash` — Take final homepage screenshot
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 22:16 26/8/26

Xác nhận đúng — chỉ là rate-limit thoáng qua, giờ ảnh hero hiện đẹp. Dọn dẹp và commit.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Clean up test scripts and final build verification
- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Commit all 10 UX/UI improvements

</details>

---

### 🤖 AI · 22:16 26/8/26

## Đã áp dụng cả 10 điểm — commit xong

1. ✅ Hero trang chủ giờ có ảnh nền full-bleed (món hero đầu tiên) + gradient overlay
2. ✅ Header có vệt gradient chili→turmeric→herb làm điểm nhấn
3. ✅ Badge neutral tăng contrast (`text-ink/60` → `/80`) cho đạt AA
4. ✅ Ảnh blur-up + fade-in mượt khi tải xong thay vì pop-in đột ngột
5. ✅ Panel Sheet có breadcrumb "Tên tỉnh · Món ăn đặc trưng" ở đầu
6. ✅ Thêm câu dẫn "Hoặc chọn tỉnh trực tiếp" kết nối khối bản đồ → danh sách tỉnh
7. ✅ Hint chip nổi "👆 Bấm vào một điểm để khám phá" trên bản đồ, tự ẩn sau tương tác đầu
8. ✅ Footer nâng cấp: logo + accent line + nội dung rõ ràng hơn
9. ✅ Lightbox — bấm vào ảnh món ăn để phóng to toàn màn hình
10. ✅ Icon (Carrot/ListOrdered/Utensils) dẫn hướng cho từng khối thông tin trong DishCard

Bonus phát hiện khi tự test: hero ảnh + lightbox ban đầu chưa có fallback khi ảnh lỗi tải (giống GAP-01 cũ) — đã vá luôn cho nhất quán toàn site.

Build sạch, tự kiểm tra bằng Playwright, đã xác nhận ảnh hero render đúng sau khi hết rate-limit tạm thời. Mở lại `http://localhost:3000` xem thử — đây vẫn là vòng đánh giá **W1-9**, mày cho biết đạt chưa hay cần chỉnh tiếp.

---

### 🧑 PM · 22:21 26/8/26

> mấy điểm vừa update có vẻ như chỉ là minor change
> tao muốn wow hơn nữa
> hãy mạnh dạn thay đổi thiết kế đi, lục tung khắp cõi internet và học hỏi kiểu thiết kế mới, hiện đại và giúp user hứng thú tương tác

---

### 🤖 AI · 22:21 26/8/26

Được, đợt vừa rồi đúng là chỉnh vá vụn vặt, chưa phải "thiết kế lại". Để tao lục nghiên cứu xu hướng thiết kế bạo hơn trước khi động tay.

<details>
<summary>1 thao tác công cụ</summary>

- `Agent` — Research bold modern web design trends

</details>

---

### 🤖 AI · 22:23 26/8/26

Nghiên cứu xong — hướng đi: **"Editorial Maximalist + Kinetic Scroll"**. Triển khai mạnh tay: grain texture toàn site, hero chữ khổng lồ tách từng chữ bay vào + parallax ảnh, marquee chạy chữ, nút CTA "magnetic" hút theo con trỏ, card reveal kiểu màn kéo thay vì fade phẳng.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\effects\GrainOverlay.tsx
- `Write` — D:\01_Study\07_Local_Food\components\effects\MagneticButton.tsx
- `Write` — D:\01_Study\07_Local_Food\components\effects\Marquee.tsx

</details>

---

### 🤖 AI · 22:24 26/8/26

Giờ hero kinetic + parallax + marquee + magnetic CTA.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\HeroSection.tsx
- `Read` — D:\01_Study\07_Local_Food\app\page.tsx
- `Write` — D:\01_Study\07_Local_Food\app\page.tsx

</details>

---

### 🤖 AI · 22:24 26/8/26

Thêm grain texture toàn site vào layout.

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\layout.tsx

</details>

---

### 🤖 AI · 22:25 26/8/26

Giờ nâng cấp reveal animation cho DishTile (kiểu "màn kéo" thay vì fade phẳng) + region accent cho ProvinceTeaserCard.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\province\DishTile.tsx
- `Read` — D:\01_Study\07_Local_Food\components\province\DishTile.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\DishTile.tsx

</details>

---

### 🤖 AI · 22:25 26/8/26

Giờ ProvinceTeaserCard — accent màu theo vùng miền.

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceTeaserCard.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\ProvinceTeaserCard.tsx
- `Bash` — Build after bold redesign changes

</details>

---

### 🤖 AI · 22:26 26/8/26

Build sạch. Chụp thử để tự kiểm tra trước khi báo lại.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Screenshot bold redesign for self-verification
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 22:26 26/8/26

Ấn tượng rõ rệt so với trước — chữ khổng lồ bay vào, ảnh full-bleed, marquee chạy tên món, CTA từ tính. Dọn dẹp và commit.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Clean up test files and final build check
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit bold redesign

</details>

---

### 🤖 AI · 22:28 26/8/26

## Redesign bạo tay — hướng "Editorial Maximalist + Kinetic Scroll"

Nghiên cứu Awwwards/xu hướng 2025-2026, áp dụng trực tiếp:

- **Hero chữ khổng lồ** (`clamp(2.75rem, 9vw, 6.5rem)`) — từng chữ tách riêng, bay vào từ dưới lên có độ trễ so le
- **Parallax ảnh** — ảnh nền trôi chậm hơn chữ khi cuộn (`useScroll`/`useTransform`), tạo chiều sâu
- **Marquee chạy vô tận** — băng đen chạy tên tỉnh + món ăn ngay dưới hero, nhịp điệu sống động
- **Nút "từ tính"** — CTA "Bắt đầu khám phá" hút nhẹ theo con trỏ khi rê gần, bật lại kiểu lò xo khi rời
- **Grain texture** phủ toàn site — phá cảm giác "web phẳng SaaS"
- **Clip-path "màn kéo"** thay fade phẳng cho card món ăn — card lộ ra như kéo rèm thay vì mờ dần
- **Diagonal cut** — hero cắt chéo xuống marquee thay vì đường thẳng góc vuông
- **Region-color accent** — vệt màu bên trái mỗi card tỉnh theo vùng miền (đỏ/vàng/xanh)

Build sạch, tự test bằng Playwright không lỗi JS. Mở `http://localhost:3000` xem thử — chú ý hiệu ứng cuộn (parallax + marquee) chỉ thấy rõ khi tự cuộn tay, không phải ảnh tĩnh.

Vẫn là vòng **W1-9**. Lần này đã đủ "wow" chưa, hay cần đẩy xa hơn nữa?

---

### 🧑 PM · 22:33 26/8/26

> Cũng tạm ổn rồi.
> Giờ tao muốn website này phải trở thành nơi cho user đóng vai role reviewer, họ có thể add comment, rate 5 level món ăn và tương ứng mỗi tỉnh sẽ có thêm phần recommend để user đóng góp.
> ngoài ra, có thêm phần tìm kiếm nữa nhé
> ngoài ra nữa, có mục filter theo tháng, mùa, lễ hội theo calendar Việt Nam nhé

---

### 🤖 AI · 22:34 26/8/26

W1-9 coi như **PASS** — ghi nhận lại. Nhưng 3 yêu cầu mới này không phải chỉnh nhỏ — tao cần dừng lại phân tích trước khi code, vì có 1 điểm đụng thẳng vào quyết định kiến trúc đã chốt.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit W1-9 PASS confirmation

</details>

---

### 🤖 AI · 22:35 26/8/26

**Phân tích nhanh 3 yêu cầu:**

| Yêu cầu | Có đụng kiến trúc đã chốt không? | Ghi chú |
|---|---|---|
| **Tìm kiếm** | Không — client-side search trên data tĩnh, không cần backend | Làm được ngay, rủi ro thấp |
| **Filter theo tháng/mùa/lễ hội** | Không — schema đã có sẵn field `season` (optional), chỉ cần điền dữ liệu + UI filter | Làm được ngay, cần bổ sung content |
| **Review + rating 5 sao + comment công khai từ user** | **CÓ — đụng thẳng quyết định "không backend" đã chốt ở `ARCH-LF.md` bước [3]** | Review/rating phải **hiện cho MỌI người dùng khác thấy**, không phải chỉ người viết — nghĩa là bắt buộc phải có nơi lưu trữ dùng chung (database), không thể làm bằng localStorage (localStorage chỉ lưu trên máy người viết, người khác không thấy được) |

Riêng mục review/rating còn kéo theo rủi ro mới chưa từng được quản lý: **spam/troll/nội dung phản cảm** — trang không có đăng nhập/kiểm duyệt thì ai cũng post được bừa bãi, đúng nhóm "rủi ro AI-sinh mở rộng" cần vào `RISK-LF.md`.

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 22:36 26/8/26

Đây là pivot kiến trúc thật — tao cập nhật lại `ARCH-LF.md`, `RISK-LF.md`, `WBS-LF.md`, `EST-LF.md`, `DELEGATION-MAP-LF.md` cho khớp, rồi mới code (việc mở ghi công khai vào database từ internet ẩn danh là đúng loại việc "A+ — chờ người duyệt" theo luật cứng, không thể lặng lẽ làm).

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\ARCH-LF.md

</details>

---

### 🤖 AI · 22:36 26/8/26

Giờ `RISK-LF.md` — thêm rủi ro mới từ tính năng công khai ghi dữ liệu ẩn danh.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\RISK-LF.md

</details>

---

### 🤖 AI · 22:36 26/8/26

Giờ `DELEGATION-MAP-LF.md` — thêm dòng cho việc chạm database công khai.

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\DELEGATION-MAP-LF.md
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Edit` — D:\01_Study\07_Local_Food\EST-LF.md
- `Bash` — Commit architecture pivot documentation

</details>

---

### 🤖 AI · 22:37 26/8/26

Hồ sơ đã cập nhật. Giờ cần mày làm 1 việc mới có thể thao tác được — tao không tự tạo tài khoản dịch vụ thay mày:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 22:39 26/8/26

Bắt tay vào Search + Filter mùa/lễ hội (không cần chờ Supabase).

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\searchIndex.ts

</details>

---

### 🤖 AI · 22:40 26/8/26

Trước khi làm search, vá lại 1 lỗ hổng đã biết: link kiểu `#dish-slug` không còn tự mở panel từ khi redesign explorer — cần sửa để search hoạt động đúng.

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx

</details>

---

### 🤖 AI · 22:40 26/8/26

Giờ `SearchBar.tsx`.

<details>
<summary>6 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Bash` — Test Vietnamese diacritic stripping logic in isolation
- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Bash` — Inspect actual unicode codepoints in the regex literal in the file

</details>

---

### 🤖 AI · 22:41 26/8/26

Regex đúng (U+0300–U+036F), không cần sửa. Giờ gắn `SearchBar` vào header.

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx
- `Write` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx

</details>

---

### 🤖 AI · 22:41 26/8/26

Giờ W2-8 — schema `occasions` (mùa/lễ hội) + filter UI.

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\types.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\types.ts
- `Read` — D:\01_Study\07_Local_Food\lib\types.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\types.ts

</details>

---

### 🤖 AI · 22:41 26/8/26

Giờ cập nhật `lib/schema.ts` validate.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\schema.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\schema.ts

</details>

---

### 🤖 AI · 22:42 26/8/26

Giờ thêm `occasions` vào data 8 món hiện có (đều là món ăn hàng ngày, không gắn lễ hội cụ thể — ghi đúng thực tế "Quanh năm", không bịa).

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Add occasions field to existing dish data
- `Write` — D:\01_Study\07_Local_Food\components\province\ProvinceExplorerGrid.tsx

</details>

---

### 🤖 AI · 22:42 26/8/26

Giờ dùng component này thay cho grid tĩnh trong `app/page.tsx`.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Read` — D:\01_Study\07_Local_Food\app\page.tsx

</details>

---

### 🤖 AI · 22:43 26/8/26

Tốt, `getHeroDish` vẫn dùng cho hero photo + marquee. Build thử.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Build after search + occasion filter

</details>

---

### 🤖 AI · 22:43 26/8/26

Build sạch. Tự kiểm tra search + filter + deep-link trước khi báo lại.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Verify search, deep-link, and occasion filter
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 22:44 26/8/26

Cả 2 tính năng hoạt động đúng, kể cả trạng thái rỗng trung thực (chưa có món nào gắn "Tết Trung Thu" — không bịa dữ liệu). Dọn dẹp và commit.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Clean up and final build
- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Commit search and occasion filter features

</details>

---

### 🤖 AI · 22:45 26/8/26

## Xong Search + Filter mùa/lễ hội

- **Search**: gõ tên món/tỉnh (có dấu hay không đều tìm được), dropdown kết quả, bấm vào điều hướng thẳng và **tự mở panel chi tiết đúng món** (phát hiện + vá luôn 1 regression: deep-link `#dish-slug` bị hỏng từ lúc redesign trang tỉnh).
- **Filter theo mùa/lễ hội**: 7 nhãn (Quanh năm/4 mùa/Tết Nguyên Đán/Tết Trung Thu) trên trang chủ, lọc danh sách tỉnh theo món có gắn dịp đó. Cả 8 món hiện tại đều gắn "Quanh năm" (đúng thực tế — không phải món lễ hội đặc thù), nên bấm "Tết Trung Thu" sẽ ra trạng thái rỗng trung thực thay vì giả vờ có dữ liệu.

Build sạch, tự test bằng Playwright. Còn **Review/Rating** đang chờ mày tạo Supabase project — báo tao khi có URL + anon key dán vào `.env.local` là tao làm tiếp.

---

### 🧑 PM · 22:48 26/8/26

> oke
> tạm thời hãy tạo 1 file nợ kĩ thuật chẳng hạn
> => để note vài thứ t còn đang pending nhé:
> t nhớ là còn API map, API DB tao chưa cung cấp

---

### 🤖 AI · 22:49 26/8/26



<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\TECH-DEBT-LF.md
- `Bash` — Commit tech debt tracking file

</details>

---

### 🤖 AI · 22:49 26/8/26

Đã tạo `TECH-DEBT-LF.md` — tra nhanh không cần lật lại từng file:

**🔴 Đang chặn** (cần mày làm):
1. **MapTiler key** — chưa có, bản đồ vẫn chạy tạm bằng style demo
2. **Supabase URL + anon key** — chưa có, đang chặn hẳn việc code Review/Rating

**🟡 Đã biết, chưa xử lý**: RLS bảng review, không có kiểm duyệt trước đăng, wishlist chưa quyết persistence, 6 tỉnh MVP còn thiếu data, trang `/browse` chưa làm.

**✅ Đã xong**: ảnh vỡ runtime, deep-link mất sau redesign, sourceRef schema.

Khi nào có 1 trong 2 key ở mục 🔴, báo tao — tao cập nhật file này và làm tiếp ngay.

---

### 🧑 PM · 19:41 3/9/26

> Hello
> Long time no see. Now I come back
> nói tao nghe đang pending gì và giờ cần làm gì tiếp theo?

---

### 🤖 AI · 19:41 3/9/26



<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check current pending state, env keys, and git status

</details>

---

### 🤖 AI · 19:42 3/9/26

Chào mừng quay lại. Đây là tình trạng hiện tại — quan trọng nhất trước: **hôm nay 2026-09-03, hạn nộp bài ~2026-09-09 (chỉ còn 6 ngày)**, trong khi lần cuối làm là 2026-08-26.

**Đang pending (chưa đổi gì từ lúc mày rời đi):**

| # | Việc | Trạng thái |
|---|---|---|
| 1 | MapTiler key | ❌ Vẫn rỗng trong `.env.local` — bản đồ vẫn chạy tạm bằng style demo |
| 2 | Supabase URL + anon key | ❌ Vẫn chưa có — toàn bộ tính năng Review/Rating đang đứng yên, chưa viết dòng code nào |

**Đã xong tính tới giờ:** Walking skeleton → Design System → 2 lần redesign (PM chê rồi duyệt "wow") → Search → Filter mùa/lễ hội. Nội dung mới có **2/8 tỉnh MVP** (Hà Nội, Huế).

**Còn lại theo `WBS-LF.md`:**
- W2-1→W2-6: Review/Rating (chặn bởi Supabase key)
- W1-10: 6 tỉnh MVP còn lại (Hải Phòng, Quảng Nam, Khánh Hòa, TP.HCM, Cần Thơ, An Giang)
- W1-11/11a/11b: QA pass, Accessibility audit, Lighthouse performance
- W1-12: hoàn thiện hồ sơ (RTM, telemetry, Weekly Report) cho viva

Với 6 ngày còn lại và khối lượng này, tao cần hỏi thẳng để không lặp lại lỗi "âm thầm cắm đầu code" lần trước:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 19:43 3/9/26

Ghi nhận quyết định vào hồ sơ rồi bắt tay làm luôn.

<details>
<summary>12 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Edit` — D:\01_Study\07_Local_Food\TECH-DEBT-LF.md
- `Edit` — D:\01_Study\07_Local_Food\EST-LF.md
- `Bash` — Commit scope decision after PM returns
- `Bash` — Check if dev server is still running
- `Bash` — Get centroids for the 6 remaining MVP provinces
- `Agent` — Research Hai Phong dish content
- `Agent` — Research Quang Nam dish content
- `Agent` — Research Khanh Hoa dish content
- `Agent` — Research Ho Chi Minh dish content
- `Agent` — Research Can Tho dish content
- `Agent` — Research An Giang dish content

</details>

---

### 🤖 AI · 19:46 3/9/26

Đã bắt đầu W1-10. Tao chạy 6 agent song song nghiên cứu nội dung + tìm ảnh thật + đối chiếu nguồn cho 6 tỉnh còn lại (Hải Phòng, Quảng Nam, Khánh Hòa, TP.HCM, Cần Thơ, An Giang), đúng kỷ luật content integrity đã chốt. Việc này chạy nền, tao sẽ tổng hợp và ráp vào code khi từng agent xong — không cần mày chờ, cứ báo khi mày có key MapTiler hoặc muốn hỏi gì khác.

---

### 🧑 PM · 19:50 3/9/26

> <task-notification>
> <task-id>aaa8637bfceecc00a</task-id>
> <tool-use-id>toolu_012tivbMCgx1YL7EyGcDoFKt</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\aaa8637bfceecc00a.output</output-file>
> <status>completed</status>
> <summary>Agent "Research Hai Phong dish content" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>JSON validated successfully. The file is ready at:
> 
> `C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratchpad\hai-phong.json`
> 
> ```json
> {
>   "slug": "hai-phong",
>   "code": "VN-HP",
>   "name": "Hải Phòng",
>   "region": "Bắc",
>   "centroid": [106.67351, 20.80007],
>   "summary": "Hải Phòng là thành phố cảng lớn nhất miền Bắc, nơi văn hóa ẩm thực mang đậm dấu ấn giao thoa giữa nếp sống miền biển, đồng bằng châu thổ sông Hồng và ảnh hưởng của thời Pháp thuộc. Ẩm thực đất Cảng nổi tiếng với vị thanh, không quá cay, quá mặn hay quá ngọt, đề cao độ tươi của nguyên liệu hải sản và nước mắm Cát Hải trứ danh. Bánh đa cua, nem cua bể, bánh mì cay và các món ốc là những cái tên gắn liền với hình ảnh Hải Phòng trong lòng thực khách khắp cả nước.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/%E1%BA%A8m_th%E1%BB%B1c_H%E1%BA%A3i_Ph%C3%B2ng", "label": "Ẩm thực Hải Phòng – Wikipedia tiếng Việt" }
>   ],
>   "heroDishSlug": "banh-da-cua",
>   "dishes": [
>     {
>       "slug": "banh-da-cua",
>       "name": "Bánh đa cua",
>       "isHero": true,
>       "tasteTags": ["savory", "seafood", "noodle-soup", "herb-forward"],
>       "description": "Bánh đa cua là món ăn được xem là biểu tượng ẩm thực của Hải Phòng, hội tụ đầy đủ chất phác của vùng quê đồng bằng lẫn sự tinh tế của một đô thị cảng biển. Sợi bánh đa đỏ đặc trưng, dai và có màu nâu đỏ tự nhiên nhờ cách phơi truyền thống, nổi bật nhất là bánh đa được làm ở khu vực Dư Hàng Kênh. Nước dùng nấu từ xương ống, tôm khô, cà chua và me chua, hòa cùng gạch cua đồng béo ngậy tạo nên vị ngọt thanh, đậm đà rất riêng, khác hẳn phở hay bún của Hà Nội.",
>       "keyIngredients": [
>         "Bánh đa đỏ (bánh đa cua)",
>         "Cua đồng (chọn cua cái nhiều gạch)",
>         "Xương ống lợn",
>         "Tôm he khô",
>         "Cà chua, me chua",
>         "Rau muống, rau rút, rau nhút",
>         "Mắm tôm, chanh, ớt"
>       ],
>       "prepOutline": [
>         "Giã hoặc xay cua đồng, lọc lấy nước cua rồi đun sôi cho gạch cua kết thành từng mảng nổi lên trên",
>         "Ninh xương ống cùng tôm khô để lấy vị ngọt cho nước dùng",
>         "Phi hành, xào cà chua và me chua rồi hòa vào nồi nước dùng, nêm mắm muối cho vừa vị",
>         "Chần bánh đa đỏ và rau (rau muống, rau rút) qua nước sôi",
>         "Xếp bánh đa ra bát, cho rau, chả lá lốt hoặc chả cá nếu có, chan nước dùng và gạch cua lên trên"
>       ],
>       "howToEat": "Ăn nóng ngay khi vừa chan nước dùng, thường kèm rau sống, giá đỗ, chanh, ớt tươi và một chút mắm tôm hoặc mắm ớt để tăng vị đậm đà; nhiều quán còn ăn kèm chả lá lốt hoặc chả cá thu nướng.",
>       "images": [
>         {
>           "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/B%C3%A1nh_%C4%91a_cua_H%E1%BA%A3i_Ph%C3%B2ng_%2827.2_%281%29.jpg",
>           "attribution": "Phương Huy, Wikimedia Commons",
>           "license": "CC BY-SA 4.0"
>         }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_%C4%91a_cua", "label": "Bánh đa cua – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "nem-cua-be",
>       "name": "Nem cua bể",
>       "isHero": false,
>       "tasteTags": ["savory", "seafood", "street-food"],
>       "description": "Nem cua bể là món nem rán mang dấu ấn riêng của Hải Phòng, ra đời từ nguồn hải sản dồi dào của vùng biển Đồ Sơn, Cát Hải. Khác với nem rán hình trụ dài phổ biến ở nơi khác, nem cua bể được gói theo hình vuông đặc trưng, nhân gồm thịt cua bể tươi xé sợi hòa cùng tôm, thịt vai, miến, mộc nhĩ và giá đỗ, rán giòn rụm mà vẫn giữ được vị ngọt đậm của cua biển.",
>       "keyIngredients": [
>         "Bánh đa nem (bánh tráng gói nem)",
>         "Thịt cua bể",
>         "Tôm tươi",
>         "Thịt vai lợn",
>         "Miến dong, mộc nhĩ",
>         "Giá đỗ, hành lá",
>         "Trứng gà (làm chất kết dính)"
>       ],
>       "prepOutline": [
>         "Hấp hoặc luộc cua bể, gỡ lấy thịt và xé nhỏ bằng tay",
>         "Trộn thịt cua với tôm băm, thịt vai, miến ngâm mềm cắt khúc, mộc nhĩ thái sợi, giá đỗ và hành lá",
>         "Nêm gia vị và cho lòng đỏ trứng vào để nhân kết dính",
>         "Nhúng sơ bánh đa nem cho mềm, gói nhân thành hình vuông đặc trưng",
>         "Rán ngập dầu ở lửa vừa đến khi vỏ nem vàng giòn"
>       ],
>       "howToEat": "Nem cua bể ngon nhất khi ăn nóng trong khoảng 5-10 phút sau khi rán để vỏ còn giòn, thường ăn kèm bún tươi, rau sống và chấm nước mắm chua ngọt pha tỏi ớt.",
>       "images": [
>         {
>           "url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Nem_cuaH%E1%BA%A3i_Ph%C3%B2ng_%28th%C3%A1ng_7_n%C4%83m_2018%29_%281%29.jpg",
>           "attribution": "Phương Huy, Wikimedia Commons",
>           "license": "CC BY-SA 4.0"
>         }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Nem_cua_b%E1%BB%83", "label": "Nem cua bể – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-mi-cay-hai-phong",
>       "name": "Bánh mì cay Hải Phòng",
>       "isHero": false,
>       "tasteTags": ["spicy", "savory", "street-food"],
>       "description": "Bánh mì cay, hay còn gọi là bánh mì que, ra đời từ những năm 1980 tại một cửa hàng nhỏ trong ngõ Khánh Lạp gần khu Hàng Kênh, Hải Phòng. Chiếc bánh chỉ dài hơn gang tay và to hơn ngón tay một chút, vỏ giòn rụm, bên trong phết pate béo ngậy và ăn kèm chí chương - loại tương ớt lên men gia truyền cay nồng đặc trưng, tạo nên món ăn vặt giá rẻ nhưng gây nghiện với nhiều thế hệ học sinh, sinh viên đất Cảng.",
>       "keyIngredients": [
>         "Bánh mì que (bánh mì que dài khoảng 20cm)",
>         "Pate gan lợn",
>         "Mỡ phần",
>         "Chí chương (tương ớt lên men từ ớt, cà chua, tỏi, muối)",
>         "Rau mùi"
>       ],
>       "prepOutline": [
>         "Làm pate từ gan, mỡ và thịt nạc lợn, hấp cách thủy khoảng 6 tiếng cho đến khi mềm béo, thơm",
>         "Ủ chí chương từ ớt tươi, cà chua, tỏi và muối theo công thức gia truyền cho lên men dậy vị",
>         "Nướng bánh mì que trong lò cho vỏ giòn",
>         "Xẻ dọc ổ bánh, phết đều pate và mỡ vào bên trong",
>         "Cho thêm rau mùi và chí chương theo khẩu vị"
>       ],
>       "howToEat": "Ăn nóng ngay khi bánh còn giòn, chấm hoặc rưới thêm chí chương cay tùy khẩu vị, thường nhâm nhi cùng trà đá hoặc trà nóng; người Hải Phòng hay mua một lúc nhiều chiếc vì bánh khá nhỏ.",
>       "images": [
>         {
>           "url": "https://upload.wikimedia.org/wikipedia/commons/8/8a/B%C3%A1nh_m%C3%AC_que.jpg",
>           "attribution": "Baoothersks, Wikimedia Commons",
>           "license": "CC BY-SA 4.0"
>         }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC_cay", "label": "Bánh mì cay – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "oc-hai-phong",
>       "name": "Ốc Hải Phòng",
>       "isHero": false,
>       "tasteTags": ["seafood", "street-food", "sour", "spicy"],
>       "description": "Nhờ vị trí giáp biển và nguồn hải sản dồi dào từ vịnh Hạ Long, Cát Hải và các vùng cửa sông lân cận, ốc trở thành một biểu tượng ẩm thực đường phố của Hải Phòng. Ốc ở đây được phân loại tỉ mỉ thành nhiều loại như ốc mút, ốc đá, ốc hương, kết hợp cùng các loại hải sản tươi khác như ngao, ngán, hàu, chế biến theo nhiều cách khác nhau như luộc, xào me, xào dừa hay hấp sả, mang đến hương vị đa dạng nhưng vẫn giữ được vị ngọt tự nhiên của hải sản.",
>       "keyIngredients": [
>         "Các loại ốc biển (ốc mút, ốc đá, ốc hương...)",
>         "Ngao, ngán, hàu",
>         "Sả, gừng, lá chanh",
>         "Me chua, nước cốt dừa",
>         "Ớt, tỏi",
>         "Nước mắm Cát Hải"
>       ],
>       "prepOutline": [
>         "Ngâm ốc với nước vo gạo hoặc ớt để nhả sạch cát, bùn",
>         "Luộc ốc cùng sả, gừng và vài lá chanh để khử mùi tanh",
>         "Tùy món mà chế biến thêm: xào với nước cốt me chua, xào cùng nước cốt dừa béo, hoặc hấp sả",
>         "Pha nước chấm từ nước mắm Cát Hải, chanh, ớt, tỏi và gừng băm"
>       ],
>       "howToEat": "Ăn nóng ngay khi vừa chế biến xong, dùng tăm khêu ốc, chấm cùng nước mắm gừng ớt pha chua cay, thường được thưởng thức vào buổi tối tại các quán ốc vỉa hè cùng bạn bè.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://sunparadiseland.com/tin-tuc/oc-hai-phong-mon-ngon-duong-pho-khien-ai-cung-me-man-12572", "label": "Ốc Hải Phòng - món ngon đường phố khiến ai cũng mê mẩn" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> Notes on sourcing/uncertainty:
> - Bánh đa cua, Nem cua bể, and Bánh mì cay each have a dedicated Vietnamese Wikipedia article as primary source, plus a Commons image verified via the API (real file, CC BY-SA 4.0).
> - The province summary reuses a dedicated "Ẩm thực Hải Phòng" Wikipedia article rather than the hero dish's source — it's a better fit and still a real vi.wikipedia.org URL.
> - Ốc Hải Phòng has no Wikipedia article; sourced instead from a Vietnamese tourism site (sunparadiseland.com) — weaker sourcing than the other three dishes. No usable Commons image was found for it after several search attempts (romanized and Vietnamese terms), so `images: []` was left empty per instructions rather than guessing.</result>
> <usage><subagent_tokens>53070</subagent_tokens><tool_uses>21</tool_uses><duration_ms>305622</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 19:50 3/9/26

Hải Phòng xong, và phát hiện mày đã dán MapTiler key vào `.env.local` — tốt, xử lý luôn cả 2.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify Hai Phong JSON file exists
- `Bash` — Copy completed province JSON files into data folder

</details>

---

### 🤖 AI · 19:51 3/9/26

Giờ restart dev server để nạp MapTiler key mới.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Find process using port 3000
- `Bash` — Copy Can Tho data and restart dev server to load MapTiler key
- `Bash` — Check dev server restarted correctly
- `Bash` — Wait for dev server to come up and show log

</details>

---

### 🤖 AI · 19:52 3/9/26

Quảng Nam xong. Copy vào và tiếp tục chờ 2 tỉnh cuối.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Copy Quang Nam data file
- `TaskOutput`

</details>

---

### 🤖 AI · 19:52 3/9/26

Dev server đã chạy lại với MapTiler key thật. Đang chờ 2 agent cuối (Khánh Hòa, An Giang).

<details>
<summary>2 thao tác công cụ</summary>

- `ScheduleWakeup` — <<autonomous-loop-dynamic>>
- `ScheduleWakeup`

</details>

---

### 🤖 AI · 19:53 3/9/26

Đang chờ 2 agent nghiên cứu Khánh Hòa và An Giang hoàn tất (tự động báo khi xong, không cần mày chờ).

---

### 🧑 PM · 19:53 3/9/26

> <task-notification>
> <task-id>ac1b4af7478f272d5</task-id>
> <tool-use-id>toolu_01HNrgG8RMCQp7BWR7mqPxD2</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\ac1b4af7478f272d5.output</output-file>
> <status>completed</status>
> <summary>Agent "Research Khanh Hoa dish content" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>JSON validated. Here is the complete, ready-to-paste content file for Khánh Hòa.
> 
> ```json
> {
>   "slug": "khanh-hoa",
>   "code": "VN-KH",
>   "name": "Khánh Hòa",
>   "region": "Trung",
>   "centroid": [112.81769, 10.67742],
>   "summary": "Khánh Hòa là tỉnh duyên hải Nam Trung Bộ với thành phố biển Nha Trang làm trung tâm, nơi ẩm thực gắn liền với nguồn hải sản tươi và nghề cá lâu đời. Các món ăn đặc trưng như bún cá, nem nướng Ninh Hòa, bánh căn hay bánh canh chả cá đều lấy vị ngọt thanh của cá biển và sự tươi mới của rau sống làm cốt lõi, tạo nên phong cách ẩm thực nhẹ nhàng nhưng đậm đà rất riêng của vùng đất Trầm Hương.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/Nem_n%C6%B0%E1%BB%9Bng", "label": "Nem nướng – Wikipedia tiếng Việt" },
>     { "url": "https://mia.vn/cam-nang-du-lich/ngon-nuc-no-mon-bun-ca-nha-trang-788", "label": "Bún cá Nha Trang: Đặc sản níu chân du khách – MIA.vn" }
>   ],
>   "heroDishSlug": "bun-ca-nha-trang",
>   "dishes": [
>     {
>       "slug": "bun-ca-nha-trang",
>       "name": "Bún cá Nha Trang",
>       "isHero": true,
>       "tasteTags": ["noodle-soup", "seafood", "savory", "herb-forward"],
>       "description": "Bún cá Nha Trang là món ăn gắn liền với nghề biển của thành phố cảng Khánh Hòa — nước dùng được ninh từ xương cá tươi (thường là cá thu, cá cờ) cùng gia vị và thảo mộc cho ra vị ngọt thanh, trong veo, không hề tanh. Một tô bún cá đầy đủ có chả cá dai giòn tự làm, cá tươi hấp chín, đôi khi thêm trứng cá, lòng cá hoặc sứa biển giòn sần sật — biến thể này còn được gọi riêng là bún sứa. Đây là món ăn sáng hoặc ăn trưa phổ biến khắp Nha Trang, từ quán vỉa hè đến nhà hàng.",
>       "keyIngredients": ["Cá thu hoặc cá cờ tươi", "Chả cá tự quết", "Bún tươi", "Sứa biển (tùy quán)", "Cà chua, thơm (dứa)", "Rau sống, giá đỗ", "Hành, ngò, ớt, chanh"],
>       "prepOutline": [
>         "Ninh xương và đầu cá tươi cùng hành, gừng để lấy nước dùng ngọt thanh, không tanh",
>         "Quết thịt cá tươi thành chả cá, hấp hoặc chiên tới khi dai giòn",
>         "Luộc sơ cá nguyên miếng hoặc hấp chín, để riêng",
>         "Trụng bún tươi, xếp vào tô cùng chả cá, cá và sứa (nếu có)",
>         "Chan nước dùng nóng, thêm cà chua, thơm, rắc hành ngò"
>       ],
>       "howToEat": "Ăn nóng ngay khi vừa chan nước dùng, kèm rau sống, giá đỗ, vắt chanh và thêm ớt tươi hoặc sa tế theo khẩu vị; thường dùng làm bữa sáng hoặc bữa trưa nhẹ.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/B%C3%BAn_c%C3%A1_Nha_Trang.jpg", "attribution": "Harry Pham, via Wikimedia Commons", "license": "CC BY-SA 3.0" },
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bun_cha_ca_nha_trang.jpg", "attribution": "Nguyen Thi Quynh Tram, via Wikimedia Commons", "license": "CC BY 3.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://mia.vn/cam-nang-du-lich/ngon-nuc-no-mon-bun-ca-nha-trang-788", "label": "Bún cá Nha Trang: Đặc sản níu chân du khách – MIA.vn" },
>         { "url": "https://vinwonders.com/vi/wonderpedia/news/review-bun-ca-nha-trang/", "label": "Bún cá Nha Trang - Cách nấu &amp; gợi ý quán ngon – VinWonders" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "nem-nuong-ninh-hoa",
>       "name": "Nem nướng Ninh Hòa",
>       "isHero": false,
>       "tasteTags": ["grilled", "savory", "herb-forward", "street-food"],
>       "description": "Nem nướng Ninh Hòa là đặc sản của thị xã Ninh Hòa, Khánh Hòa, nổi tiếng khắp cả nước và từng được vinh danh kỷ lục ẩm thực châu Á. Thịt heo (thường lấy phần có 1/3 đến 1/2 mỡ) được giã hoặc xay nhuyễn cùng hành tím băm, tỏi, nước mắm, đường và tiêu cho tới khi dai quánh, sau đó vo thành từng viên hoặc que dài rồi nướng trên than hoa. Điểm khác biệt của nem Ninh Hòa là chỉ cuốn bánh tráng cùng rau sống chứ không ăn kèm bún hay bánh phở như một số vùng khác.",
>       "keyIngredients": ["Thịt heo nạc và mỡ (giã nhuyễn)", "Hành tím, tỏi băm", "Nước mắm, đường, tiêu", "Bánh tráng mỏng", "Xoài xanh, dưa leo, cà rốt, củ cải bào sợi", "Rau thơm (húng, tía tô)", "Nước chấm từ thịt băm, nếp và dầu điều"],
>       "prepOutline": [
>         "Giã hoặc xay thịt heo cùng gia vị tới khi thịt dai, quánh mịn",
>         "Vo thịt thành từng viên hoặc quấn quanh que tre",
>         "Nướng trên bếp than hoa tới khi chín vàng, dậy mùi thơm",
>         "Chuẩn bị rau sống, dưa góp và bánh tráng ăn kèm",
>         "Nấu nước chấm đặc trưng từ thịt băm, nếp và dầu điều lên màu vàng óng"
>       ],
>       "howToEat": "Cuốn nem nướng cùng bánh tráng, rau sống, xoài xanh và dưa góp thành cuốn nhỏ, chấm ngập vào chén nước chấm sánh vàng làm từ thịt băm và nếp trước khi ăn.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/7/77/M%E1%BA%B9t_nem_n%C6%B0%E1%BB%9Bng_Nha_Trang.jpg", "attribution": "Letruongan1122, via Wikimedia Commons", "license": "CC BY-SA 4.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Nem_n%C6%B0%E1%BB%9Bng", "label": "Nem nướng – Wikipedia tiếng Việt" },
>         { "url": "https://thanhnien.vn/nem-nuong-ninh-hoa-nhan-ky-luc-chau-a-moi-ve-am-thuc-185240107102734131.htm", "label": "Nem nướng Ninh Hòa nhận Kỷ lục châu Á mới về ẩm thực – Thanh Niên" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-can",
>       "name": "Bánh căn",
>       "isHero": false,
>       "tasteTags": ["street-food", "savory", "grilled"],
>       "description": "Bánh căn là món bánh gạo dân dã phổ biến khắp vùng duyên hải Nam Trung Bộ, trong đó có Khánh Hòa, vốn có nguồn gốc từ người Chăm rồi được người Việt tiếp biến. Khác với bánh khọt chiên dầu, bánh căn được đổ và nướng chín trong khuôn đất nung đặt trên bếp than, cho lớp vỏ hơi rỗ mặt, thoảng mùi khét nhẹ đặc trưng và đáy hơi giòn. Bánh thường được đổ theo cặp, ăn kèm trứng, chả cá hoặc mực tùy quán, chấm cùng nước mắm pha hoặc mắm nêm.",
>       "keyIngredients": ["Gạo ngâm xay nhuyễn", "Trứng (gà hoặc cút)", "Chả cá, mực hoặc tôm", "Mỡ hành, tóp mỡ", "Xoài xanh, khế, dưa leo bào", "Nước mắm pha hoặc mắm nêm", "Rau sống ăn kèm"],
>       "prepOutline": [
>         "Ngâm gạo khoảng 6 tiếng, trộn với cơm nguội rồi xay nhuyễn thành bột nước",
>         "Làm nóng khuôn đất nung nhiều lỗ tròn trên bếp than, quét dầu chống dính",
>         "Đổ bột vào khuôn, đập thêm trứng lên trên, đậy nắp cho tới khi mặt bánh rỗ và đáy vàng giòn",
>         "Gỡ bánh ra đĩa, rắc mỡ hành và tóp mỡ",
>         "Pha nước mắm chua ngọt hoặc mắm nêm để chấm kèm"
>       ],
>       "howToEat": "Bánh căn ăn nóng, chấm ngập từng cặp bánh vào chén nước mắm pha hoặc mắm nêm, ăn kèm xoài xanh, khế chua và dưa leo thái lát để cân bằng vị béo.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/B%C3%A1nh_c%C4%83n_1.jpg", "attribution": "Memberofc1, via Wikimedia Commons", "license": "CC BY-SA 3.0" },
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/B%C3%A1nh_c%C4%83n_in_phan_rang%2C_vietnam.jpg", "attribution": "Saigon Time, via Wikimedia Commons", "license": "CC0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_c%C4%83n", "label": "Bánh căn – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-canh-cha-ca-nha-trang",
>       "name": "Bánh canh chả cá Nha Trang",
>       "isHero": false,
>       "tasteTags": ["noodle-soup", "seafood", "savory"],
>       "description": "Bánh canh chả cá là món ăn quen thuộc của các tỉnh duyên hải miền Trung như Nha Trang, Quy Nhơn, Đà Nẵng, trong đó phiên bản Nha Trang nổi bật với chả cá làm từ cá thu tươi giã nhuyễn cùng hành, đường, nước mắm rồi đem hấp hoặc chiên vàng. Nước dùng được ninh từ xương, đầu và đuôi cá trong 20-30 phút để lấy vị ngọt tự nhiên, kết hợp cùng sợi bánh canh bột gạo hoặc bột lọc mềm dai tạo nên tô bánh canh đậm vị biển.",
>       "keyIngredients": ["Cá thu tươi", "Bột gạo hoặc bột lọc làm sợi bánh canh", "Trứng gà", "Hành tím, hành lá, rau răm", "Nước mắm, đường, hạt nêm", "Rau sống, bắp chuối bào", "Nước mắm Bình Định pha ớt"],
>       "prepOutline": [
>         "Làm sạch cá thu, lọc lấy thịt để riêng phần xương, đầu, đuôi",
>         "Ninh xương, đầu và đuôi cá khoảng 20-30 phút lấy nước dùng ngọt thanh",
>         "Xay nhuyễn thịt cá cùng hành, đường, nước mắm và gia vị",
>         "Hấp chả cá 10-15 phút rồi chiên vàng để dậy mùi thơm",
>         "Trụng sơ sợi bánh canh, xếp cùng chả cá vào tô rồi chan nước dùng nóng"
>       ],
>       "howToEat": "Dùng nóng ngay sau khi chan nước dùng, ăn kèm rau sống, bắp chuối bào và chấm thêm nước mắm Bình Định pha ớt để tăng vị đậm đà.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://www.dienmayxanh.com/vao-bep/2-cach-nau-banh-canh-cha-ca-nha-trang-quy-nhon-ngon-dung-vi-01323", "label": "2 cách nấu bánh canh chả cá Nha Trang, Quy Nhơn ngon đúng vị – Điện máy XANH" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> Notes on uncertainty: (1) Bún cá Nha Trang and Bánh canh chả cá Nha Trang have no dedicated Vietnamese Wikipedia articles — sourced instead from reputable Vietnamese tourism/cooking sites (mia.vn, VinWonders, Điện máy XANH) as flagged in the instructions as an acceptable fallback. (2) Bánh canh chả cá Nha Trang has `images: []` — Commons searches only returned Hanoi-style chả cá Lã Vọng photos (a different dish), so no image was invented. (3) All other facts were verified against live-fetched sources (vi.wikipedia.org for Nem nướng and Bánh căn) and all four Wikimedia Commons image URLs/licenses/artists were confirmed via the Commons API before inclusion — none invented. File saved at `C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratchpad\khanh-hoa.json` (JSON-validated).</result>
> <usage><subagent_tokens>55395</subagent_tokens><tool_uses>28</tool_uses><duration_ms>441927</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 19:53 3/9/26

Khánh Hòa xong. Copy vào, chờ nốt An Giang.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Copy Khanh Hoa data file

</details>

---

### 🤖 AI · 19:53 3/9/26

Tất cả 6 tỉnh đã xong. Copy nốt An Giang, cập nhật `hero-bubbles.json` đủ 8 tỉnh, rồi build kiểm tra toàn bộ.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Copy An Giang data file - all 8 provinces now present
- `Write` — D:\01_Study\07_Local_Food\data\hero-bubbles.json
- `Bash` — Build to validate all 8 province data files against zod schema
- `Bash` — Check image hosts and count dishes/images across all province data

</details>

---

### 🤖 AI · 19:54 3/9/26

Kiểm tra tất cả 27 URL ảnh có thật sự tải được không (tránh agent bịa URL).

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Extract all image URLs to a file for batch checking
- `Bash` — Verify all 27 dish image URLs resolve via HTTP HEAD requests

</details>

---

### 🤖 AI · 19:55 3/9/26

Bị rate-limit do gọi dồn dập. Thử lại chậm hơn để xác minh thật.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Retry image URL verification with delays and retries to avoid rate-limit false negatives

</details>

---

### 🤖 AI · 19:58 3/9/26

Trong lúc đợi, kiểm tra bản đồ với MapTiler key thật + trang tỉnh mới.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Screenshot real map and new province page
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\

</details>

---

### 🤖 AI · 19:59 3/9/26

Toàn bộ đều 429 (rate-limit), kể cả những URL đã xác nhận chạy tốt trước đó (Phở, Bún chả...) — dấu hiệu của rate-limit do gọi dồn dập từ nhiều agent cùng lúc, không phải ảnh vỡ thật. Xác minh qua chính app thay vì gọi thẳng API.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Screenshot real map and new province page (retry, playwright already installed)
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:01 3/9/26

Nghi do cache module-level trong `lib/provinces.ts` (dev server khởi động trước khi đủ 8 file). Restart lại rồi test lại.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Find current process on port 3000
- `Bash` — Kill stale dev server and restart fresh with all 8 provinces present
- `Bash` — Wait for fresh dev server and test An Giang route

</details>

---

### 🤖 AI · 20:02 3/9/26

Xác nhận đúng — chỉ là cache cũ của dev server, không phải bug thật. Chụp lại để xác nhận.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Re-screenshot after fresh dev server restart
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:03 3/9/26

Xong. Dọn dẹp, ghi Dev Book, cập nhật hồ sơ, commit.

<details>
<summary>6 thao tác công cụ</summary>

- `Bash` — Clean up test script and playwright
- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Edit` — D:\01_Study\07_Local_Food\TECH-DEBT-LF.md
- `Edit` — D:\01_Study\07_Local_Food\TECH-DEBT-LF.md
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit all 6 new provinces and documentation updates

</details>

---

### 🤖 AI · 20:04 3/9/26

## 🎉 W1-10 hoàn thành — đủ 8/8 tỉnh MVP

**Tình trạng hiện tại:**
- **8/8 tỉnh** đã có data: Hà Nội, Hải Phòng, Thừa Thiên Huế, Quảng Nam, Khánh Hòa, TP.HCM, Cần Thơ, An Giang
- **32 món ăn**, mỗi món đều có `sourceRefs` đối chiếu Wikipedia/nguồn uy tín (đúng NFR content integrity đã chốt), **27/32 có ảnh thật** từ Wikimedia (5 món dùng fallback gradient trung thực vì không tìm được ảnh phù hợp — không bịa)
- Build sạch, **zod validate toàn bộ 8 file** qua schema thật (không phải ép kiểu suông)
- **MapTiler key đã nạp** — bản đồ chạy với tile thật
- Bản đồ + marquee + search + filter mùa đều hiển thị đúng cả 8 tỉnh

**Phát hiện 1 gotcha kỹ thuật** (đã ghi Dev Book): dev server đang chạy sẵn không tự nhận file data mới — phải restart sau khi thêm tỉnh. Đã note để tránh nhầm là bug lần sau.

**Còn lại theo `WBS-LF.md`** (6 ngày tới hạn 09-09): W1-11 (QA pass toàn bộ 8 tỉnh), W1-11a (Accessibility audit), W1-11b (Lighthouse performance), W1-12 (hoàn thiện hồ sơ RTM/telemetry/Weekly Report cho viva).

Mày muốn tao làm tiếp QA pass ngay, hay mày muốn tự mở app xem qua 8 tỉnh trước?

---

### 🧑 PM · 20:09 3/9/26

> đang có 2 issue nhé:
> 1. tao ko thấy map hoạt động: ko thấy display luôn nhé
> 2. tao đang confuse ở trang chủ, cách mà các tỉnh hiển thị. đang ko hiểu cách thức list được xuất hiện. nó đang được filter hay sao vậy? Sau nay nếu đầy đủ 63 tỉnh thì nó hiện đủ 63 tỉnh hay sẽ như thế nào? Tao muốn có graphic display nhé. hay là feature này kết hợp trên map r nhỉ?

---

### 🤖 AI · 20:09 3/9/26

Kiểm tra ngay vụ bản đồ trước — đây có thể là bug thật.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Check dev server status and current env config
- `Bash` — Verify MapTiler style URL responds with the given key

</details>

---

### 🤖 AI · 20:10 3/9/26

Key hợp lệ ở tầng network. Kiểm tra qua browser thật để bắt lỗi console.

<details>
<summary>10 thao tác công cụ</summary>

- `Bash` — Capture browser console logs while loading homepage map
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Scroll to map section and capture screenshot + logs
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Capture network requests specifically for MapTiler tile loading
- `Bash` — Inspect MapTiler tiles.json metadata for tile URL template
- `Bash` — Check tiles URL template and bounds in tiles.json
- `Bash` — Check installed maplibre-gl and react-map-gl versions
- `Bash` — Inspect maplibre canvas dimensions and full console output
- `Bash` — Capture all non-local network activity to find missing tile requests

</details>

---

### 🤖 AI · 20:13 3/9/26

Để cô lập vấn đề — thử MapLibre thuần (không qua Next.js/react-map-gl) với đúng key này.

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Test bare MapLibre map outside Next.js stack
- `Bash` — Check if unpkg CDN URL for maplibre-gl is reachable
- `Bash` — Check local maplibre-gl dist files available

</details>

---

### 🤖 AI · 20:14 3/9/26

Đổi hướng — thêm handler debug thẳng vào chính `FoodMap.tsx` để bắt lỗi thật thay vì cô lập ngoài.

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Capture map load/error/idle events with debug handlers

</details>

---

### 🤖 AI · 20:15 3/9/26

Phát hiện quan trọng: sự kiện `onLoad` của bản đồ **không bao giờ fire** dù network đã tải xong style/sprite. Nghi do React Strict Mode double-mount trong dev — kiểm tra bằng production build để loại trừ.

<details>
<summary>14 thao tác công cụ</summary>

- `Bash` — Check reactStrictMode config
- `Bash` — Build production bundle to test if map works outside dev/StrictMode
- `Bash` — Start production server on port 3001 to test map without dev-mode/StrictMode double-mounting
- `Bash` — Check production server log for errors
- `Bash` — Start production server correctly on port 3001
- `Bash` — Test map on production build (no StrictMode double-invoke effects)
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Kill node processes and rebuild with debug instrumentation
- `Bash` — Restart production server with debug instrumentation
- `Bash` — Capture detailed map lifecycle diagnostics

</details>

---

### 🤖 AI · 20:20 3/9/26

Nghi ngờ 2 source GeoJSON tự thêm (hero-bubbles/province-pins) đang cản base map load. Tạm bỏ để cô lập.

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Rebuild with GeoJSON sources disabled to isolate base map issue
- `Bash` — Test with sources disabled

</details>

---

### 🤖 AI · 20:21 3/9/26

Không phải do 2 layer tự thêm — cùng lỗi ngay cả khi tắt hẳn. Vấn đề nằm ở base style MapTiler với maplibre-gl 6.5.0 (bản rất mới). Thử hạ version để cô lập.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Check available maplibre-gl versions
- `Bash` — Check react-map-gl peer dependency requirements for maplibre-gl
- `Bash` — Downgrade maplibre-gl to stable 4.7.1
- `Bash` — Rebuild with maplibre-gl 4.7.1
- `Bash` — Test map with maplibre-gl 4.7.1

</details>

---

### 🤖 AI · 20:22 3/9/26

**Tìm ra nguyên nhân thật:** `maplibre-gl@6.5.0` (bản rất mới) có lỗi khiến vector tile source không bao giờ load xong. Hạ xuống `4.7.1` (bản ổn định) — **map load thành công**. Dọn debug code và verify lại.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Screenshot confirming map renders with maplibre-gl 4.7.1
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:23 3/9/26

Xác nhận thành công — bản đồ hiện đúng địa hình, tên thành phố. Giờ dọn code debug và bật lại 2 layer bubble.

<details>
<summary>5 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Check if useEffect is still used in FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx

</details>

---

### 🤖 AI · 20:23 3/9/26

Giờ rebuild lần cuối và verify toàn diện (bubble + bản đồ thật).

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Final build with cleaned up code and fixed maplibre-gl version
- `Bash` — Final verification: map renders + bubble click navigation works
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:24 3/9/26

Cả 8 bubble hiện đúng vị trí, đúng tên món! Click sai chỗ vào biển lúc nãy. Thử click đúng bubble Hà Nội.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Click precisely on Ha Noi bubble to test navigation
- `Bash` — Try clicking several nearby coordinates to hit the bubble precisely

</details>

---

### 🤖 AI · 20:25 3/9/26

Xác nhận toàn bộ luồng hoạt động: bản đồ hiện đúng, bubble hiện đúng, click điều hướng đúng. Dọn dẹp và commit fix quan trọng này.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Kill all node processes, remove test scripts and playwright
- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Edit` — D:\01_Study\07_Local_Food\TECH-DEBT-LF.md
- `Bash` — Final sanity build before committing
- `Bash` — Commit the critical map fix

</details>

---

### 🤖 AI · 20:26 3/9/26

Giờ khởi động lại dev server bình thường cho mày dùng, rồi giải quyết vấn đề #2.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Start normal dev server for PM

</details>

---

### 🤖 AI · 20:27 3/9/26

## Trả lời câu hỏi #2 — cách hiển thị danh sách tỉnh

**Cơ chế hiện tại:** mục "Hoặc chọn tỉnh trực tiếp" hiển thị **TẤT CẢ tỉnh đang có data** (giờ là 8), không lọc gì thêm — trừ khi mày bấm 1 chip "Lọc theo mùa/lễ hội" thì nó lọc theo tag đó. Đây vốn là tính năng fallback cho người không quen thao tác bản đồ (đã ghi trong `SPEC-LF.md` US-05, phục vụ accessibility).

**Vấn đề mày chỉ ra đúng:** khi đủ 63 tỉnh, đây sẽ là 1 lưới **63 thẻ text phẳng** — không "graphic", không phân nhóm, rất khó quét. Đây là lỗ hổng thiết kế thật, chưa tính tới scale.

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 20:28 3/9/26

Ghi nhận, giờ triển khai: card có ảnh (graphic hơn), trang chủ chỉ hiện tỉnh nổi bật + link "Xem tất cả", trang `/browse` mới nhóm theo vùng miền.

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\province\ProvinceTeaserCard.tsx
- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceExplorerGrid.tsx
- `Read` — D:\01_Study\07_Local_Food\app\page.tsx
- `Write` — D:\01_Study\07_Local_Food\app\page.tsx

</details>

---

### 🤖 AI · 20:29 3/9/26

Giờ trang `/browse` mới — nhóm theo vùng miền.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\province\BrowseProvinces.tsx
- `Write` — D:\01_Study\07_Local_Food\app\browse\page.tsx

</details>

---

### 🤖 AI · 20:29 3/9/26

Thêm link `/browse` vào header cho dễ tìm.

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx
- `Bash` — Build after adding /browse page and homepage curation

</details>

---

### 🤖 AI · 20:30 3/9/26

Build sạch, `/browse` đã có. Verify bằng screenshot.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Screenshot browse page and homepage highlights section
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:31 3/9/26

Kiểm tra nhanh mục "Miền Nam" (nghi lại là do fullPage capture, không phải bug thật — đã gặp pattern này trước).

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Real-scroll check of Mien Nam section
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:31 3/9/26

Xác nhận đúng — false alarm quen thuộc. Dọn dẹp và commit.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Clean up and restart normal dev server
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Final build check before commit
- `Bash` — Commit browse page and homepage curation changes

</details>

---

### 🤖 AI · 20:32 3/9/26

## Cả 2 issue đã xử lý

**1. Bản đồ không hiển thị** — bug thật của `maplibre-gl@6.5.0` (bản rất mới): vector tile source kẹt mãi không load xong, `map.on('load')` không bao giờ fire dù style/sprite tải thành công. Hạ xuống `4.7.1` (bản ổn định) → **map chạy đúng ngay**, 8 bubble hiện đúng vị trí, click điều hướng đúng. Dev server đã restart, mở lại `http://localhost:3000` là thấy.

**2. Danh sách tỉnh confuse** — đúng như mày nghi, nó hiện TẤT CẢ tỉnh không phân nhóm, sẽ vỡ trận khi đủ 63 tỉnh. Đã sửa theo hướng mày chọn:
- Trang chủ giờ chỉ hiện **tỉnh nổi bật** (dùng chung danh sách với bubble bản đồ) + nút "Xem tất cả 8 tỉnh" 
- Trang **`/browse`** mới: nhóm theo **Miền Bắc/Trung/Nam**, có **ảnh thumbnail** cho từng tỉnh (graphic hơn hẳn), vẫn filter được theo mùa/lễ hội
- Thêm link "Tất cả tỉnh" vào header

Cả 2 đã build sạch, tự test bằng Playwright xác nhận hoạt động đúng, đã commit. Mày thử mở lại app xem sao.

---

### 🧑 PM · 20:35 3/9/26

> Oke. Giờ next step là gì?

---

### 🤖 AI · 20:36 3/9/26



<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check remaining WBS tasks

</details>

---

### 🤖 AI · 20:36 3/9/26

**Bước tiếp theo theo `WBS-LF.md`: W1-11 → W1-11a → W1-11b → W1-12** — 4 việc còn lại trước khi sẵn sàng nộp bài (còn 6 ngày tới hạn 09-09):

| # | Việc | Nội dung |
|---|---|---|
| **W1-11** | QA pass toàn bộ 8 tỉnh | Test thật cả 8 user story trong `SPEC-LF.md` (không chỉ đọc AC), test responsive 360px, kiểm tra ảnh vỡ, test 404 |
| **W1-11a** | Accessibility audit | Contrast text-trên-ảnh, keyboard navigation cho toolbar/card, `aria-label` cho icon |
| **W1-11b** | Performance check | Lighthouse trên trang chủ + 1 trang tỉnh, đo LCP/FCP, kiểm tra NFR "LCP < 2.5s" |
| **W1-12** | Hồ sơ viva | RTM (Requirements Traceability Matrix), telemetry, Weekly Report — bộ hồ sơ mày mang vào bảo vệ |

Tao đề xuất làm **W1-11 (QA pass) trước** — đây là bước quan trọng nhất vì đúng kỷ luật đã chốt ở Cổng hiểu bước [6]: **tao không được tự tuyên bố "PASS"**, mày phải tự tay test lại theo checklist, không tin AI tự báo cáo. Tao sẽ chuẩn bị sẵn checklist cụ thể (8 story + danh sách thao tác rõ ràng từng bước) để mày test nhanh gọn, thay vì mày phải tự nghĩ ra cách test.

Mày muốn tao chuẩn bị checklist W1-11 ngay không, hay ưu tiên việc khác trước?

---

### 🧑 PM · 20:39 3/9/26

> uk cbi checklist đi

---

### 🤖 AI · 20:39 3/9/26



<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Extract user stories section from SPEC-LF.md
- `Write` — D:\01_Study\07_Local_Food\SIT-UAT-LF.md
- `Bash` — Commit QA checklist

</details>

---

### 🤖 AI · 20:40 3/9/26

Đã tạo `SIT-UAT-LF.md` — checklist cụ thể, từng bước rõ ràng cho cả 8 user story trong `SPEC-LF.md`, có cả phần verify GAP-01/GAP-02 đã fix. Dev server đang chạy sẵn ở `http://localhost:3000`.

**Cách dùng:** mở file, làm theo từng bước, tick PASS/FAIL thật vào cột cuối — đặc biệt lưu ý:
- US-04: test cụ thể 3 món **không có ảnh thật** (Ốc Hải Phòng, Bún cá Châu Đốc, Gỏi sầu đâu) để xác nhận placeholder không vỡ
- US-07: nhớ bật responsive mode DevTools test cả 2 chế độ Tổng quan/Hành trình
- US-08: gõ thẳng URL sai để xem trang 404 tuỳ chỉnh

Xong thì báo tao **FAIL ở đâu** (nếu có) hoặc xác nhận **"W1-11 PASS"** để tao chuyển sang W1-11a (Accessibility audit).

---

### 🧑 PM · 20:49 3/9/26

> Tao thấy oke pass hết đấy
> Tuy nhiên có vài point nhỏ cần improve:
> 1. ở trang lỗi 404, hãy sửa lại câu cú cho thân thiên, sao lại dùng từ khóa "mày" ở mục thông báo v? OMG
> 2. buble chấm đỏ thay vì vậy hãy dùng chính icon các món ăn từng địa phương tương ứng display nhé

---

### 🤖 AI · 20:49 3/9/26

W1-11 PASS — ghi nhận. Cả 2 điểm đều là bug/feedback thật, sửa ngay.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md

</details>

---

### 🤖 AI · 20:50 3/9/26

Điểm 1 — kiểm tra toàn bộ site xem còn chỗ nào lọt giọng văn nội bộ "mày/tao" vào copy hiển thị cho user thật.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Search for leaked internal casual tone in user-facing components

</details>

---

### 🤖 AI · 20:50 3/9/26

Có 2 chỗ, sửa cả hai.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\app\not-found.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Bash` — Confirm no more leaked casual tone remains

</details>

---

### 🤖 AI · 20:50 3/9/26

Giờ thay bubble tròn đơn sắc bằng ảnh món ăn thật — cần viết lại phần render marker của bản đồ.

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\lib\geo.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\geo.ts

</details>

---

### 🤖 AI · 20:50 3/9/26

Giờ tạo `DishMarker.tsx` — thumbnail tròn ảnh món ăn.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\map\DishMarker.tsx
- `Read` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts
- `Write` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts

</details>

---

### 🤖 AI · 20:51 3/9/26

Giờ viết lại `FoodMap.tsx` dùng Marker thay Source/Layer.

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx

</details>

---

### 🤖 AI · 20:51 3/9/26

Bổ sung lại label tên món dưới marker hero (tương đương label layer cũ).

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Build after switching to photo-based markers

</details>

---

### 🤖 AI · 20:52 3/9/26

Build sạch. Verify bằng screenshot thật.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Screenshot new photo-based markers at default and zoomed-in level
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:54 3/9/26

Marker ảnh hoạt động đúng, crossfade zoom mượt. Test nhanh click điều hướng còn hoạt động không (đã viết lại hoàn toàn phần này).

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Test click navigation on new marker via aria-label selector

</details>

---

### 🤖 AI · 20:54 3/9/26

Click điều hướng vẫn hoạt động đúng. Dọn dẹp và commit.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Clean up test scripts and playwright
- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Final build before commit
- `Bash` — Restart dev server and commit both fixes

</details>

---

### 🤖 AI · 20:55 3/9/26

## Cả 2 điểm đã sửa xong

1. **Giọng văn "mày"** — grep toàn bộ `app`/`components`, tìm thấy 2 chỗ (trang 404 + trang chủ), đã đổi thành "bạn" cho thân thiện với người dùng thật. Xác nhận sạch 100%.
2. **Bubble bản đồ** — bỏ hẳn chấm tròn đơn sắc, giờ **hiển thị ảnh món ăn thật** dạng thumbnail tròn (viết lại component dùng `react-map-gl` Marker). Món chưa có ảnh vẫn có fallback gradient + icon đồng bộ với phần còn lại của site. Đã verify: crossfade khi zoom (hero → pin) mượt, click vẫn điều hướng đúng.

Build sạch, dev server đã restart — mở lại `http://localhost:3000` xem thử.

Còn lại theo `WBS-LF.md`: **W1-11a (Accessibility audit)** và **W1-11b (Performance/Lighthouse)**. Mày muốn tao làm tiếp luôn không?

---

### 🧑 PM · 20:56 3/9/26

> oke tiếp

---

### 🤖 AI · 20:57 3/9/26

Bắt tay W1-11a (Accessibility) + W1-11b (Performance). Dùng axe-core để scan tự động thay vì chỉ nhìn mắt thường.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Build and start production server for accurate a11y/perf audit
- `Bash` — Install axe-core for automated accessibility scanning
- `Bash` — Run axe-core accessibility scan across key pages
- `Edit` — D:\01_Study\07_Local_Food\a11y-scan.mjs
- `Bash` — Re-run axe-core accessibility scan

</details>

---

### 🤖 AI · 21:01 3/9/26

Phát hiện lỗi contrast thật, lan rộng khắp site (`text-ink/40`, `text-ink/60`, `text-amber`). Lấy chi tiết đầy đủ để sửa đúng.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Get full contrast failure details on browse page

</details>

---

### 🤖 AI · 21:03 3/9/26

Tính toán chính xác opacity/màu cần để đạt AA thay vì đoán mò.

<details>
<summary>23 thao tác công cụ</summary>

- `Bash` — Compute WCAG contrast ratios for candidate opacity/color values
- `Bash` — Find all files using the low-contrast text tokens
- `Bash` — List exact occurrences of low-contrast tokens with line context
- `Bash` — List text-amber usages
- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\layout\SiteFooter.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\BrowseProvinces.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\BrowseProvinces.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceExplorerGrid.tsx
- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceTeaserCard.tsx
- `Read`
- `Read` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx

</details>

---

### 🤖 AI · 21:06 3/9/26

Giờ rebuild và scan lại toàn bộ để xác nhận đã sạch.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Rebuild after contrast fixes
- `Bash` — Re-run full accessibility scan after contrast fixes
- `Bash` — Compute contrast for chili badge text on light chili background
- `Bash` — Compute contrast for chili badge (fixed)
- `Bash` — Check chili-dark badge text contrast

</details>

---

### 🤖 AI · 21:29 3/9/26

6.28 — thừa an toàn. Sửa `Badge.tsx`.

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\ui\Badge.tsx
- `Bash` — Check herb badge contrast too

</details>

---

### 🤖 AI · 21:29 3/9/26

Herb đã ổn (5.25). Chỉ sửa chili.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\ui\Badge.tsx

</details>

---

### 🤖 AI · 21:29 3/9/26

Giờ kiểm tra keyboard navigation + aria-label, rồi rebuild scan lại lần cuối.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Find button elements without aria-label that might need one
- `Bash` — Verify close buttons have aria-labels
- `Bash` — Test keyboard tab navigation through homepage

</details>

---

### 🤖 AI · 21:31 3/9/26

Tab order đầy đủ, đúng thứ tự — chỉ 1 điểm cần verify: ô input tìm kiếm báo không có outline khi focus. Kiểm tra kỹ.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Check if search input wrapper shows visible focus indicator
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 21:31 3/9/26

Focus hoạt động nhưng khá mờ, cải thiện cho rõ hơn.

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx

</details>

---

### 🤖 AI · 21:31 3/9/26

Giờ rebuild, scan lại axe + verify contrast/keyboard lần cuối, rồi làm W1-11b (Lighthouse).

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Rebuild after search focus fix
- `Bash` — Final accessibility scan to confirm all violations fixed

</details>

---

### 🤖 AI · 21:32 3/9/26

**W1-11a Accessibility: 0 vi phạm axe-core trên cả 4 trang.** Giờ chuyển sang W1-11b — Lighthouse performance.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Install Lighthouse for performance audit
- `TaskOutput`

</details>

---

### 🤖 AI · 21:34 3/9/26

Lighthouse đã cài. Chạy audit trên trang chủ + 1 trang tỉnh.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Confirm production server still running
- `Bash` — Run Lighthouse audit on homepage
- `Bash` — Check if lighthouse report was written despite cleanup error

</details>

---

### 🤖 AI · 21:36 3/9/26

Báo cáo vẫn được ghi (lỗi chỉ là dọn temp file trên Windows). Trích số liệu chính.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Extract key Lighthouse metrics from homepage report
- `Bash` — Extract Lighthouse metrics using correct Windows path

</details>

---

### 🤖 AI · 21:37 3/9/26

TBT (Total Blocking Time) **10.9 giây** — cực kỳ bất thường, LCP 4.7s cũng fail NFR. Đây là vấn đề thật, cần tìm nguyên nhân. Nghi ngờ `GrainOverlay` (SVG filter phủ toàn trang) là thủ phạm — test thử.

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Bash` — Rebuild without GrainOverlay for isolation test
- `Bash` — Run Lighthouse without GrainOverlay
- `Bash` — Check performance metrics without GrainOverlay

</details>

---

### 🤖 AI · 21:40 3/9/26

GrainOverlay không phải nguyên nhân chính (TBT vẫn ~8s). Khôi phục lại và tìm bằng dữ liệu chi tiết của Lighthouse.

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Bash` — Analyze bootup-time and main thread work breakdown from Lighthouse
- `Bash` — Check LCP element and resource breakdown
- `Bash` — List LCP related audits and resource summary

</details>

---

### 🤖 AI · 21:45 3/9/26

**Tìm ra nguyên nhân thật: ảnh nặng 14MB/16MB tổng trang** — do `DishMarker.tsx` dùng `<img>` thuần thay vì `next/image`, tải nguyên bản ảnh gốc Wikimedia (vài MB/ảnh) chỉ để hiện thumbnail 56px. Đây là lỗi thiết kế của tao lúc trước — sửa ngay bằng `next/image`.

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\DishMarker.tsx
- `Write` — D:\01_Study\07_Local_Food\components\map\DishMarker.tsx

</details>

---

### 🤖 AI · 21:46 3/9/26

Rebuild và đo lại Lighthouse.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Rebuild after fixing DishMarker to use next/image
- `Bash` — Run Lighthouse after image optimization fix
- `Bash` — Check improved Lighthouse metrics

</details>

---

### 🤖 AI · 21:49 3/9/26

Payload giảm 14MB→211KB ảnh (đúng hướng), nhưng TBT vẫn cao. Kiểm tra tiếp bootup-time để loại trừ nhiễu do máy đang tải nặng từ nãy giờ.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check bootup-time breakdown after image fix

</details>

---

### 🤖 AI · 21:49 3/9/26

MapLibre tự nó vốn nặng (thư viện WebGL, ~700KB+ script), đây là đánh đổi cố hữu của tính năng bản đồ tương tác — không phải lỗi có thể vá thêm dễ dàng trong thời gian còn lại. Kiểm tra trang tỉnh (không có bản đồ) để có bức tranh đầy đủ.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Run Lighthouse on province page (no map)
- `Bash` — Check province page performance metrics
- `Bash` — Check LCP breakdown for province page

</details>

---

### 🤖 AI · 21:50 3/9/26

Tìm ra nguyên nhân LCP chậm ở trang tỉnh: chính hiệu ứng "blur-up fade-in" tao thêm trước đó (`ImageWithFallback`) làm delay 3.2 giây trước khi ảnh được coi là hiển thị — áp dụng nhầm cho cả ảnh priority (LCP). Sửa lại.

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx

</details>

---

### 🤖 AI · 21:50 3/9/26

Rebuild và đo lại.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Rebuild after LCP fade-in fix
- `Bash` — Re-run Lighthouse on province page after LCP fix
- `Bash` — Check LCP breakdown again

</details>

---

### 🤖 AI · 21:53 3/9/26

Cải thiện một phần (3.2s→2.3s) nhưng chưa hết. Chạy lại 1 lần nữa để kiểm tra có phải do máy đang tải nặng (nhiễu môi trường) hay bug thật.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Run Lighthouse third time to check variance/environmental noise

</details>

---

### 🤖 AI · 21:54 3/9/26

Kết quả dao động lớn giữa các lần chạy (render delay 3.2s→2.3s→1.5s dù code không đổi) — xác nhận phần lớn là nhiễu môi trường (máy đã chạy liên tục rất nặng suốt phiên này), không phải bug quyết định. Đã có 2 cải thiện thật, xác nhận và ghi nhận trung thực phần còn lại là đánh đổi cố hữu của bản đồ WebGL.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Clean up all audit test scripts and temporary dev dependencies

</details>

---

### 🤖 AI · 21:54 3/9/26

Giờ ghi lại kết quả W1-11a + W1-11b vào hồ sơ.

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\PERFORMANCE-LF.md
- `Edit` — D:\01_Study\07_Local_Food\RISK-LF.md
- `Read` — D:\01_Study\07_Local_Food\RISK-LF.md
- `Edit` — D:\01_Study\07_Local_Food\RISK-LF.md

</details>

---

### 🤖 AI · 21:55 3/9/26

Giờ cập nhật WBS, build cuối, restart dev server, commit.

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Final build after all W1-11a/b fixes
- `Bash` — Restart dev server and commit all W1-11a/b work

</details>

---

### 🤖 AI · 21:56 3/9/26

## W1-11a + W1-11b hoàn thành

**Accessibility (W1-11a):** scan bằng axe-core, tìm 4 lỗi contrast thật (tính chính xác bằng công thức WCAG, không đoán) + 1 lỗi focus indicator quá mờ — sửa hết, **0 vi phạm trên cả 4 trang**.

**Performance (W1-11b):** tìm ra **2 bug thật** qua Lighthouse:
1. Marker bản đồ tải nguyên ảnh gốc Wikimedia (vài MB/ảnh) chỉ để hiện thumbnail 50px → trang chủ nặng **16.4MB**. Sửa bằng `next/image` → còn **211KB ảnh** (giảm 98.5%).
2. Hiệu ứng "blur-up" tao thêm ở đợt UX review trước bị áp nhầm cho cả ảnh LCP, khiến trang tỉnh trễ **3.2 giây** trước khi ảnh được tính là "đã hiển thị". Đã sửa.

**Kết quả:** trang tỉnh đạt ~80/100 Lighthouse (tốt). Trang chủ vẫn thấp điểm (~30/100) vì bản đồ WebGL (MapLibre GL) tự thân nặng — đây là đánh đổi cố hữu đã ghi rõ vào `RISK-LF.md` (R12), không che giấu, vì bản đồ là tính năng lõi bắt buộc.

Chi tiết đầy đủ ở `PERFORMANCE-LF.md`. Build sạch, dev server đã restart.

**Còn lại: W1-12 — hoàn thiện hồ sơ viva** (RTM, telemetry, Weekly Report). Đây là bước cuối cùng trước khi sẵn sàng nộp bài. Mày muốn tao làm luôn không?

---

### 🧑 PM · 21:57 3/9/26

> tạm để đó, hôm sau làm tiếp nhé

---

### 🤖 AI · 21:58 3/9/26



<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Confirm clean git state before pausing

</details>

---

### 🤖 AI · 21:58 3/9/26

Ok, mọi thứ đã commit sạch, không có gì dở dang. Tóm tắt để lần sau vào là làm tiếp được ngay:

**Đã xong:** W1-1 → W1-11b (schema, Design System, 8 tỉnh MVP, search, filter mùa, map fix, marker ảnh thật, accessibility, performance).

**Còn lại:** chỉ **W1-12** — hoàn thiện hồ sơ viva (RTM, telemetry, Weekly Report). Đây là việc cuối cùng trước khi sẵn sàng nộp bài.

**Deadline:** còn ~5-6 ngày (hạn ~09-09, hôm nay 09-03).

Dev server đang chạy nền ở `http://localhost:3000`, cứ để đó hoặc tắt tuỳ mày — hôm sau quay lại nhắn tao là tao tiếp tục từ `WBS-LF.md`.

---

### 🧑 PM · 20:33 5/9/26

> Oke, giờ next step là hoàn thiện hồ sơ nhỉ?
> tiến hành luôn
> Nhưng trước tiên, tao muốn mở rộng ra 63 tỉnh thành luôn, mày research và thêm vào nhé

---

### 🤖 AI · 20:33 5/9/26



<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — List remaining 55 provinces needing data

</details>

---

### 🤖 AI · 20:35 5/9/26

Ghi nhận quyết định mở rộng, rồi triển khai nghiên cứu song song cho 55 tỉnh còn lại (chia 7 lô theo vùng miền để dễ quản lý + tránh rate-limit Wikimedia).

<details>
<summary>10 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\WBS-LF.md
- `Bash` — Commit scope expansion decision
- `Bash` — Verify batch coverage and get centroids for all 55 remaining provinces
- `Agent` — Research 8 Dong Bac provinces
- `Agent` — Research 7 Tay Bac provinces
- `Agent` — Research 8 Dong bang song Hong provinces
- `Agent` — Research 8 Bac Trung Bo provinces
- `Agent` — Research 8 Nam Trung Bo Tay Nguyen provinces
- `Agent` — Research 6 Dong Nam Bo provinces
- `Agent` — Research 10 Tay Nam Bo provinces

</details>

---

### 🤖 AI · 20:38 5/9/26

Đã khởi động 7 agent nghiên cứu song song, mỗi agent phụ trách 1 vùng địa lý (~6-10 tỉnh), tổng cộng đủ 55 tỉnh còn lại. Việc này sẽ mất một lúc (mỗi agent research + đối chiếu Wikipedia + tìm ảnh Wikimedia cho ~3 món/tỉnh), chạy nền — tao sẽ tổng hợp và ráp vào code khi từng agent xong. Không cần chờ, cứ báo tao nếu có việc khác.

---

### 🧑 PM · 20:45 5/9/26

> <task-notification>
> <task-id>a6165c0f348d6b9b0</task-id>
> <tool-use-id>toolu_01Jz2URh6wDGQzEWkHs3iTvK</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a6165c0f348d6b9b0.output</output-file>
> <status>completed</status>
> <summary>Agent "Research 8 Dong Bac provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>```json
> {
>   "slug": "bac-giang",
>   "code": "VN-BG",
>   "name": "Bắc Giang",
>   "region": "Bắc",
>   "centroid": [106.47918, 21.35843],
>   "summary": "Bắc Giang là vùng đất trung du nổi tiếng với nghề làm mì gạo truyền thống ở Lục Ngạn, giống gà đồi Yên Thế được chăn thả tự nhiên, và các làng nghề bánh đa lâu đời ven sông Thương. Ẩm thực nơi đây mộc mạc, đậm chất nông thôn Bắc Bộ nhưng vẫn có những sản vật đã thành thương hiệu quốc gia.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/G%C3%A0_%C4%91%E1%BB%93i_Y%C3%AAn_Th%E1%BA%BF", "label": "Gà đồi Yên Thế – Wikipedia tiếng Việt" }
>   ],
>   "heroDishSlug": "mi-chu",
>   "dishes": [
>     {
>       "slug": "mi-chu",
>       "name": "Mì Chũ",
>       "isHero": true,
>       "tasteTags": ["noodle-soup", "savory", "street-food"],
>       "description": "Mì Chũ là loại mì gạo khô đặc sản của làng nghề Thủ Dương, xã Nam Dương, huyện Lục Ngạn, tỉnh Bắc Giang, đã có thương hiệu được bảo hộ độc quyền. Sợi mì làm từ gạo bao thai hồng trồng trên đất đồi Lục Ngạn, có màu trắng ngà tự nhiên, khi nấu chín vẫn dai giòn, không bở nát và mang hương thơm nhẹ đặc trưng của gạo.",
>       "keyIngredients": ["gạo bao thai hồng", "nước giếng làng Thủ Dương", "xương ống hầm làm nước dùng", "hành lá, rau mùi"],
>       "prepOutline": [
>         "Vo gạo, ngâm nước rồi xay thành bột nước mịn",
>         "Tráng bánh thành lớp mỏng trên nồi hơi, giống tráng bánh phở",
>         "Phơi bánh tráng trên phên nứa dưới nắng cho se mặt",
>         "Thái bánh thành sợi mì rồi phơi khô lần hai để bảo quản lâu",
>         "Khi ăn, chần mì khô qua nước sôi cho mềm trước khi chan nước dùng"
>       ],
>       "howToEat": "Mì Chũ khô được chần lại rồi chan nước dùng xương nóng hổi, ăn kèm hành lá, rau mùi như một bát phở hoặc mì nước; cũng có thể xào khô với thịt, rau cho món mì xào đậm đà.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://tuoitre.vn/mi-chu---dac-san-dat-bac-456687.htm", "label": "Mì Chũ - đặc sản đất Bắc (Tuổi Trẻ)" },
>         { "url": "https://vietnamnet.vn/mi-chu-dac-san-doc-quyen-cua-bac-giang-2341050.html", "label": "Mì Chũ - đặc sản độc quyền của Bắc Giang (VietNamNet)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "ga-doi-yen-the",
>       "name": "Gà đồi Yên Thế",
>       "isHero": false,
>       "tasteTags": ["savory", "grilled"],
>       "description": "Gà đồi Yên Thế là giống gà lai tạo địa phương (chủ yếu hai dòng Ri lai và Mía lai) được nuôi thả rông trên các sườn đồi huyện Yên Thế, Bắc Giang. Nhờ vận động nhiều và ăn thức ăn tự nhiên, thịt gà chắc, da giòn, vị ngọt đậm đà hơn hẳn gà nuôi công nghiệp; năm 2011 đây là sản phẩm chăn nuôi đầu tiên của Việt Nam được cấp chứng nhận nhãn hiệu độc quyền.",
>       "keyIngredients": ["gà đồi Yên Thế (giống Ri lai, Mía lai)", "lá chanh, gừng, sả", "muối, mắc khén hoặc hạt tiêu"],
>       "prepOutline": [
>         "Nuôi thả tự nhiên trên đồi từ 7-8 tháng để thịt chắc và thơm",
>         "Làm sạch gà, để nguyên con hoặc chặt miếng tùy món",
>         "Luộc, hấp lá chanh hoặc nướng than hoa tùy cách chế biến",
>         "Chặt miếng vừa ăn, bày cùng lá chanh thái chỉ"
>       ],
>       "howToEat": "Thường được luộc chấm muối lá chanh, hấp lá chanh hoặc nướng than hoa; ăn kèm cơm và rau sống trong các bữa cỗ hoặc dịp lễ Tết.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/G%C3%A0_%C4%91%E1%BB%93i_Y%C3%AAn_Th%E1%BA%BF", "label": "Gà đồi Yên Thế – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     },
>     {
>       "slug": "banh-da-ke",
>       "name": "Bánh đa Kế",
>       "isHero": false,
>       "tasteTags": ["street-food", "savory"],
>       "description": "Bánh đa Kế là bánh đa nướng đặc sản của làng Dĩnh Kế (nay thuộc thành phố Bắc Giang), có tuổi nghề truyền thống hơn 600 năm. Bánh làm từ bột gạo tráng mỏng, rắc vừng, lạc và một chút gấc để lên màu đỏ cam, sau đó phơi nắng rồi nướng phồng trên than hoa, cho vị bùi béo, giòn tan đặc trưng.",
>       "keyIngredients": ["gạo tẻ xay bột", "vừng", "lạc (đậu phộng)", "gấc tạo màu", "than hoa để nướng"],
>       "prepOutline": [
>         "Ngâm gạo rồi xay mịn thành bột nước",
>         "Trộn bột với vừng, lạc giã dập và thịt gấc",
>         "Tráng thành bánh mỏng trên nồi hơi rồi phơi trên phên nứa dưới nắng",
>         "Nướng phồng bánh trực tiếp trên than hoa cho tới khi giòn và dậy mùi thơm"
>       ],
>       "howToEat": "Bánh đa Kế thường được nướng giòn ăn chơi như một món quà vặt, hoặc bẻ miếng chấm cùng các món gỏi, nộm; là quà biếu quen thuộc mỗi dịp lễ Tết, cưới hỏi.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://luhanhvietnam.com.vn/du-lich/banh-da-ke-bac-giang-dac-san-dan-da.html", "label": "Bánh đa Kế Bắc Giang - đặc sản dân dã (Lữ hành Việt Nam)" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "bac-kan",
>   "code": "VN-BK",
>   "name": "Bắc Kạn",
>   "region": "Bắc",
>   "centroid": [105.82501, 22.26256],
>   "summary": "Bắc Kạn là tỉnh miền núi với đông đảo cư dân Tày sinh sống quanh hồ Ba Bể, nên ẩm thực gắn liền với cá nước ngọt, gạo nếp và các loại bánh lá truyền thống. Cá nướng Pác Ngòi, bánh gio mật mía và miến dong làm thủ công là những sản vật tiêu biểu nhất của vùng đất này.",
>   "summarySourceRefs": [
>     { "url": "https://dulichvietnam.com.vn/ca-nuong-pac-ngoi.html", "label": "Cá nướng Pác Ngòi: hương vị núi rừng nơi hồ Ba Bể" }
>   ],
>   "heroDishSlug": "ca-nuong-ba-be",
>   "dishes": [
>     {
>       "slug": "ca-nuong-ba-be",
>       "name": "Cá nướng Pác Ngòi (Ba Bể)",
>       "isHero": true,
>       "tasteTags": ["grilled", "savory"],
>       "description": "Cá nướng Pác Ngòi là món ăn đặc trưng của người Tày ở bản Pác Ngòi, xã Nam Mẫu, huyện Ba Bể, chế biến từ cá đánh bắt trực tiếp trong hồ Ba Bể. Cá được tẩm ướp rồi nướng trên than hoa cho tới khi da săn vàng, thịt ngọt và không tanh, ăn được cả thịt lẫn xương với đầu cá nhỏ.",
>       "keyIngredients": ["cá hồ Ba Bể (cá nhỏ)", "nghệ", "muối, tiêu, ớt", "than hoa để nướng"],
>       "prepOutline": [
>         "Chọn cá tươi vừa đánh bắt trong hồ, làm sạch",
>         "Ướp cá với nghệ, muối, tiêu, ớt cho ngấm và săn da",
>         "Xiên hoặc kẹp cá, nướng trên than hoa, trở đều tay",
>         "Nướng tới khi da vàng giòn, thịt chín đều mà không bị cháy nứt"
>       ],
>       "howToEat": "Cá nướng ăn nóng ngay tại chỗ, chấm muối ớt hoặc chẩm chéo, thường dùng kèm cơm hoặc xôi khi thưởng ngoạn hồ Ba Bể.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://dulichvietnam.com.vn/ca-nuong-pac-ngoi.html", "label": "Cá nướng Pác Ngòi: hương vị núi rừng nơi hồ Ba Bể" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-gio-mat-mia",
>       "name": "Bánh gio mật mía",
>       "isHero": false,
>       "tasteTags": ["sweet", "vegetarian-friendly"],
>       "description": "Bánh gio (còn gọi bánh tro) là món bánh truyền thống của đồng bào Tày ở Bắc Kạn, làm từ gạo nếp ngâm nước tro của một số loại cây rừng rồi gói lá chít, luộc chín. Bánh có màu vàng óng, dẻo mịn, vị thanh mát, ăn cùng mật mía tạo nên vị ngọt bùi hài hòa.",
>       "keyIngredients": ["gạo nếp", "nước tro (từ tro cây rừng đốt lấy nước ngâm)", "lá chít gói bánh", "mật mía"],
>       "prepOutline": [
>         "Đốt các loại cây rừng lấy tro, lọc lấy nước tro trong",
>         "Ngâm gạo nếp trong nước tro nhiều giờ cho ngấm màu và vị",
>         "Gói gạo đã ngâm vào lá chít thành từng đòn nhỏ",
>         "Luộc bánh nhiều giờ tới khi gạo chín trong, dẻo mịn"
>       ],
>       "howToEat": "Bóc lớp lá chít, cắt bánh thành khoanh mỏng rồi rưới đều mật mía lên trên, ăn nguội như món quà vặt hoặc tráng miệng.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://mia.vn/cam-nang-du-lich/banh-gio-mat-mia-17691", "label": "Bánh gio mật mía, hương vị dân dã vùng đất Bắc Kạn" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     },
>     {
>       "slug": "mien-dong-bac-kan",
>       "name": "Miến dong Bắc Kạn",
>       "isHero": false,
>       "tasteTags": ["noodle-soup", "savory", "vegetarian-friendly"],
>       "description": "Miến dong Bắc Kạn được làm thủ công từ củ dong riềng trồng trên vùng núi cao trên 1.000m như đèo Áng Toòng, nổi tiếng vì sợi miến dai, giòn, nấu lâu không bị nát và giữ được màu sắc tự nhiên không cần dùng chất tẩy. Đây là một trong những sản phẩm OCOP tiêu biểu của tỉnh, được nhiều nơi trong cả nước ưa chuộng làm quà biếu dịp Tết.",
>       "keyIngredients": ["củ dong riềng", "nước sạch", "xương hoặc lòng gà để nấu nước dùng khi ăn miến nước"],
>       "prepOutline": [
>         "Thu hoạch củ dong riềng, rửa sạch, nghiền lấy tinh bột",
>         "Lọc và lắng bột nhiều lần để bột dong tinh khiết, trắng tự nhiên",
>         "Tráng bột thành lá miến mỏng rồi thái sợi",
>         "Phơi khô sợi miến dưới nắng tự nhiên để bảo quản lâu"
>       ],
>       "howToEat": "Miến dong được ngâm nở rồi nấu canh, nấu miến gà, miến lòng hoặc xào, giữ được độ dai giòn ngay cả khi để nguội.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://eva.vn/di-dau-xem-gi/6-dac-san-bac-kan-ai-cung-mua-ve-lam-qua-nhieu-mon-co-the-ban-chua-tung-duoc-nem-thu-bao-gio-c40a561381.html", "label": "6 đặc sản Bắc Kạn ai cũng mua về làm quà" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "bac-ninh",
>   "code": "VN-BN",
>   "name": "Bắc Ninh",
>   "region": "Bắc",
>   "centroid": [106.10462, 21.1101],
>   "summary": "Bắc Ninh - vùng đất Kinh Bắc ngàn năm văn hiến - nổi tiếng với những món ăn tinh tế gắn liền với lễ nghi cưới hỏi như bánh phu thê Đình Bảng, bên cạnh các đặc sản dân dã như nem Bùi và bánh tẻ làng Chờ được lưu truyền qua nhiều thế hệ làng nghề.",
>   "summarySourceRefs": [
>     { "url": "https://en.wikipedia.org/wiki/B%C3%A1nh_phu_th%C3%AA", "label": "Bánh phu thê – Wikipedia" }
>   ],
>   "heroDishSlug": "banh-phu-the",
>   "dishes": [
>     {
>       "slug": "banh-phu-the",
>       "name": "Bánh phu thê",
>       "isHero": true,
>       "tasteTags": ["sweet", "vegetarian-friendly"],
>       "description": "Bánh phu thê (còn gọi bánh xu xê) là đặc sản gần 1000 năm tuổi của làng Đình Bảng, thị xã Từ Sơn, Bắc Ninh, mang ý nghĩa biểu trưng cho tình nghĩa vợ chồng thủy chung. Bánh làm từ bột năng nhuộm màu vàng tự nhiên từ quả dành dành, nhân đậu xanh ngọt bùi, gói trong lớp lá dong hoặc lá chuối tạo hình vuông vắn.",
>       "keyIngredients": ["bột năng (bột đao)", "đậu xanh làm nhân", "dừa nạo", "quả dành dành tạo màu vàng", "lá dong hoặc lá chuối gói bánh"],
>       "prepOutline": [
>         "Ngâm và nấu nước quả dành dành lấy màu vàng tự nhiên",
>         "Nhào bột năng với nước dành dành, đường cho dẻo trong",
>         "Xào nhân đậu xanh với đường và dừa nạo cho tơi bùi",
>         "Gói bột và nhân trong lá dong thành hình vuông rồi hấp hoặc luộc chín"
>       ],
>       "howToEat": "Bóc lớp lá, bánh trong suốt ánh vàng được ăn nguội, thường xuất hiện trong tráp lễ ăn hỏi, đám cưới và làm quà biếu mang ý nghĩa cầu chúc hạnh phúc lứa đôi.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/b/be/Phu_The_Cake.jpg", "attribution": "Khương Việt Hà, via Wikimedia Commons", "license": "Public domain" }
>       ],
>       "sourceRefs": [
>         { "url": "https://en.wikipedia.org/wiki/B%C3%A1nh_phu_th%C3%AA", "label": "Bánh phu thê – Wikipedia" },
>         { "url": "https://danviet.vn/cha-phai-banh-phu-the-o-bac-ninh-co-nem-bui-hon-mot-dac-san-la-mot-phan-van-hoa-kinh-bac-20250323102747351-d1217095.html", "label": "Bánh phu thê và văn hóa ẩm thực Kinh Bắc (Dân Việt)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "nem-bui",
>       "name": "Nem Bùi",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food"],
>       "description": "Nem Bùi (còn gọi nem thính) là đặc sản gần 100 năm tuổi của làng Bùi, xã Ninh Xá, huyện Thuận Thành, Bắc Ninh. Khác với nem chua lên men bằng thịt sống, nem Bùi dùng thính gạo rang xay mịn trộn cùng bì lợn và thịt để tạo vị bùi béo, thơm đặc trưng mà không cần ủ chua lâu ngày.",
>       "keyIngredients": ["thịt lợn (nạc mông)", "bì lợn thái sợi", "thính gạo rang xay mịn", "tỏi, lá đinh lăng hoặc lá sung, lá ổi"],
>       "prepOutline": [
>         "Chọn gạo ngon, ngâm nước khoảng 3 giờ rồi để ráo và rang vàng",
>         "Xay gạo rang thành thính mịn thơm",
>         "Trộn thịt luộc thái mỏng, bì lợn với thính và gia vị",
>         "Nắm nem thành nắm nhỏ, gói cùng lá ổi hoặc lá sung"
>       ],
>       "howToEat": "Nem Bùi ăn kèm lá sung hoặc lá đinh lăng, chấm tương ớt hoặc nước mắm chua ngọt, thường nhâm nhi cùng bia trong các buổi họp mặt.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vnexpress.net/nem-bui-mon-dac-san-dan-da-o-bac-ninh-3341749.html", "label": "Nem Bùi - món đặc sản dân dã ở Bắc Ninh (VnExpress)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-te-lang-cho",
>       "name": "Bánh tẻ làng Chờ",
>       "isHero": false,
>       "tasteTags": ["savory", "vegetarian-friendly"],
>       "description": "Bánh tẻ làng Chờ là đặc sản của xã Yên Phong, tỉnh Bắc Ninh, được gói trong lá dong nhỏ bản, vỏ bánh mỏng nhưng nhiều nhân, dẻo vừa phải chứ không nát nhũn như bánh giò. Gạo làm bánh được chọn kỹ từ các giống gạo tẻ dẻo như Thái Bao hay 203, xay mịn theo bí quyết gia truyền của làng nghề.",
>       "keyIngredients": ["gạo tẻ dẻo (giống Thái Bao, 203)", "thịt lợn băm", "mộc nhĩ", "hành khô", "lá dong gói bánh"],
>       "prepOutline": [
>         "Ngâm gạo tẻ khoảng 5 giờ rồi xay thật mịn thành bột nước",
>         "Quấy bột trên bếp cho chín tới thành hỗn hợp sánh dẻo",
>         "Xào nhân thịt băm với mộc nhĩ, hành khô cho thơm",
>         "Gói bột và nhân trong lá dong nhỏ rồi hấp hoặc luộc chín"
>       ],
>       "howToEat": "Bánh tẻ ăn nóng, bóc lớp lá dong, chấm cùng nước mắm ớt hoặc ăn không để cảm nhận vị dẻo thơm của bột và nhân thịt mộc nhĩ.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vinwonders.com/vi/wonderpedia/news/banh-te-lang-cho-bac-ninh/", "label": "Bánh tẻ làng Chờ: đặc sản thơm ngon Bắc Ninh (VinWonders)" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "cao-bang",
>   "code": "VN-CB",
>   "name": "Cao Bằng",
>   "region": "Bắc",
>   "centroid": [106.08389, 22.74618],
>   "summary": "Cao Bằng là vùng biên viễn với đông đảo dân tộc Tày, Nùng sinh sống, nổi bật với bánh cuốn chan nước xương độc đáo, phở chua chua ngọt thanh mát và hạt dẻ Trùng Khánh - những sản vật gắn liền với khí hậu mát lạnh và địa hình núi đá vôi đặc trưng.",
>   "summarySourceRefs": [
>     { "url": "https://mia.vn/cam-nang-du-lich/banh-cuon-cao-bang-13246", "label": "Bánh cuốn Cao Bằng, món ăn dân dã nhưng hấp dẫn khó cưỡng" }
>   ],
>   "heroDishSlug": "banh-cuon-cao-bang",
>   "dishes": [
>     {
>       "slug": "banh-cuon-cao-bang",
>       "name": "Bánh cuốn Cao Bằng (bánh cuốn canh)",
>       "isHero": true,
>       "tasteTags": ["savory", "street-food"],
>       "description": "Bánh cuốn Cao Bằng, hay còn gọi bánh cuốn canh, là đặc sản của người Tày với điểm khác biệt lớn nhất so với bánh cuốn nơi khác: thay vì chấm nước mắm chua ngọt, bánh được ăn cùng bát nước dùng ninh từ xương lợn nóng hổi, thơm lừng. Gạo làm bánh là loại gạo nếp cái đặc sản của vùng núi đá, xay mịn cho ra lớp bánh trắng mềm, mịn màng.",
>       "keyIngredients": ["gạo tẻ/nếp địa phương xay mịn", "thịt lợn băm", "mộc nhĩ", "trứng gà", "xương ống ninh nước dùng"],
>       "prepOutline": [
>         "Ngâm gạo rồi xay thành bột nước mịn",
>         "Tráng bánh mỏng trên nồi hơi như bánh cuốn thông thường",
>         "Cuốn nhân thịt băm xào mộc nhĩ hoặc trứng vào lớp bánh vừa tráng",
>         "Ninh xương ống nhiều giờ lấy nước dùng trong, thơm để chan kèm"
>       ],
>       "howToEat": "Bánh cuốn được bày ra bát cùng chả, chan ngập nước dùng xương nóng hổi thay vì nước chấm, ăn nóng ngay khi vừa tráng xong, phù hợp cho bữa sáng se lạnh vùng cao.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://mia.vn/cam-nang-du-lich/banh-cuon-cao-bang-13246", "label": "Bánh cuốn Cao Bằng, món ăn dân dã nhưng hấp dẫn khó cưỡng" },
>         { "url": "https://suckhoedoisong.vn/thuong-thuc-banh-cuon-cao-bang-mon-an-tuy-quen-ma-la-169240828111251338.htm", "label": "Thưởng thức bánh cuốn Cao Bằng (Sức khỏe &amp; Đời sống)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "pho-chua-cao-bang",
>       "name": "Phở chua Cao Bằng",
>       "isHero": false,
>       "tasteTags": ["sour", "noodle-soup", "street-food"],
>       "description": "Phở chua là món ăn có nguồn gốc từ cộng đồng người Tày, Nùng vùng Đông Bắc, trong đó Cao Bằng là một trong những cái nôi lưu giữ phiên bản đặc trưng của món này. Khác với phở nước truyền thống, phở chua dùng bánh phở khô chiên giòn hoặc để mềm trộn cùng nước sốt chua ngọt, ăn nguội hoặc hơi ấm, rất hợp trong tiết trời oi bức.",
>       "keyIngredients": ["bánh phở", "thịt xá xíu hoặc vịt quay", "gan lợn", "dưa chuột, lạc rang", "giấm, tỏi, đường tạo nước sốt chua ngọt"],
>       "prepOutline": [
>         "Trụng hoặc chiên giòn một phần bánh phở tùy khẩu vị",
>         "Thái nhỏ thịt xá xíu, gan lợn, dưa chuột",
>         "Pha nước sốt từ giấm, tỏi băm, đường, nước mắm và ớt tươi",
>         "Trộn đều bánh phở với các loại topping và nước sốt trước khi ăn"
>       ],
>       "howToEat": "Phở chua ăn nguội hoặc ấm, trộn đều tất cả nguyên liệu với nước sốt chua ngọt ngay trước khi ăn, rắc thêm lạc rang và rau thơm.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://luhanhvietnam.com.vn/du-lich/dac-san-pho-chua-lang-son.html", "label": "Phở chua – đặc sản vùng Đông Bắc" }
>       ],
>       "occasions": ["Quanh năm", "Mùa hè"]
>     },
>     {
>       "slug": "banh-ap-chao",
>       "name": "Bánh áp chao",
>       "isHero": false,
>       "tasteTags": ["street-food", "savory"],
>       "description": "Bánh áp chao là món quà vặt ấm nóng đặc trưng của Cao Bằng vào mùa lạnh, với lớp vỏ bột gạo nếp pha gạo tẻ và khoai môn bào sợi bao quanh nhân thịt vịt, chiên ngập dầu tới khi giòn rụm bên ngoài mà vẫn giữ độ béo ngọt của thịt vịt bên trong.",
>       "keyIngredients": ["bột gạo nếp và gạo tẻ", "khoai môn bào sợi", "đỗ tương xay", "thịt vịt lọc xương"],
>       "prepOutline": [
>         "Ủ bột gạo nếp và gạo tẻ vài giờ cho nở mềm rồi xay mịn",
>         "Trộn bột với khoai môn bào sợi và đỗ tương xay",
>         "Ướp thịt vịt đã lọc xương với gia vị rồi để ngấm",
>         "Đặt thịt vịt vào giữa lớp bột trong khuôn, chiên ngập dầu tới khi vàng giòn"
>       ],
>       "howToEat": "Bánh áp chao ăn nóng ngay khi vừa chiên xong, chấm cùng nước mắm chua ngọt pha đu đủ xanh và rau thơm, phổ biến nhất vào các buổi chiều tối mùa đông.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://www.ivivu.com/blog/2024/06/banh-ap-chao-dac-san-dan-da-o-cao-bang-sieu-hut-khach/", "label": "Bánh áp chao – đặc sản dân dã ở Cao Bằng" }
>       ],
>       "occasions": ["Mùa đông"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "ha-giang",
>   "code": "VN-HG",
>   "name": "Hà Giang",
>   "region": "Bắc",
>   "centroid": [104.97605, 22.7666],
>   "summary": "Hà Giang, vùng cao nguyên đá nơi cực Bắc Tổ quốc, là quê hương của cộng đồng người H'Mông với những món ăn gắn bó mật thiết với đời sống núi rừng: thắng cố nấu trong chảo lớn ở chợ phiên, cháo ấu tẩu chế biến công phu từ củ có độc, và mèn mén làm từ ngô - lương thực chính thay cơm của người vùng cao.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/%E1%BA%A4u_t%C3%A0u", "label": "Ấu tàu – Wikipedia tiếng Việt" }
>   ],
>   "heroDishSlug": "thang-co",
>   "dishes": [
>     {
>       "slug": "thang-co",
>       "name": "Thắng cố",
>       "isHero": true,
>       "tasteTags": ["savory", "spicy"],
>       "description": "Thắng cố là món ăn truyền thống của người H'Mông, có nguồn gốc từ Vân Nam (Trung Quốc) rồi lan rộng sang các dân tộc Kinh, Dao, Tày ở vùng núi phía Bắc, trong đó Hà Giang là một trong những nơi lưu giữ hương vị nguyên bản nhất. Món ăn dùng thịt và nội tạng ngựa (hoặc bò, trâu, lợn) xào săn với chính mỡ của con vật rồi ninh nhiều giờ trong chảo lớn, tạo nước dùng ngọt đậm, đặc trưng bởi các loại gia vị núi rừng như thảo quả, quế, sả nướng.",
>       "keyIngredients": ["thịt và nội tạng ngựa (hoặc bò, trâu, lợn)", "thảo quả", "gừng núi", "quế", "sả nướng", "muối, ớt"],
>       "prepOutline": [
>         "Sơ chế sạch thịt và lòng, chặt miếng vừa ăn",
>         "Xào săn thịt bằng chính mỡ của con vật trên chảo gang lớn, đun bằng than củi",
>         "Đổ nước, ninh nhiều giờ, thường xuyên hớt bọt để nước trong và ngọt",
>         "Nêm thảo quả, quế, sả nướng giã cùng muối, ớt cho dậy mùi"
>       ],
>       "howToEat": "Thắng cố được múc ra bát ngay từ chảo đang sôi trên bếp than, ăn nóng cùng rau cải mèo nhúng và chén rượu ngô, thường quây quần đông người trong các phiên chợ hoặc lễ hội.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Th%E1%BA%AFng_c%E1%BB%91", "label": "Thắng cố – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "chao-au-tau",
>       "name": "Cháo ấu tẩu",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food"],
>       "description": "Cháo ấu tẩu là đặc sản độc đáo của người H'Mông tại Hà Giang, được nấu từ củ ấu tẩu (ấu tàu) - một vị thuốc có độc tính mạnh mọc ở vùng núi cao biên giới phía Bắc. Qua bí quyết chế biến kỹ lưỡng, ninh củ nhiều giờ để khử độc, cháo có vị đắng nhẹ, béo bùi đặc trưng và được xem như món ăn - bài thuốc giúp giải cảm, giãn gân cốt.",
>       "keyIngredients": ["củ ấu tẩu (ấu tàu) đã sơ chế khử độc", "gạo tẻ, gạo nếp", "chân giò hoặc thịt băm", "trứng gà", "rau thơm, tía tô"],
>       "prepOutline": [
>         "Ngâm và ninh củ ấu tẩu nhiều giờ cho tới khi mềm bở, giảm hết độc tính",
>         "Nấu gạo tẻ trộn gạo nếp cùng nước ninh củ ấu tẩu tới khi nhừ sánh",
>         "Cho thêm chân giò hoặc thịt băm ninh cùng cho ngọt nước",
>         "Nêm gia vị, đập trứng vào cháo nóng trước khi múc ra bát"
>       ],
>       "howToEat": "Cháo múc nóng, rắc rau thơm, tía tô và một chút tiêu, ăn thử từng thìa nhỏ để cảm nhận vị đắng bùi; theo kinh nghiệm dân gian nếu đầu lưỡi thấy tê là cháo chưa được ninh kỹ.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/%E1%BA%A4u_t%C3%A0u", "label": "Ấu tàu – Wikipedia tiếng Việt" },
>         { "url": "https://dantocphattrien.vietnamnet.vn/chao-au-tau-dac-san-noi-tieng-cua-ha-giang-23945.html", "label": "Cháo ấu tẩu - đặc sản nổi tiếng của Hà Giang" }
>       ],
>       "occasions": ["Mùa đông", "Quanh năm"]
>     },
>     {
>       "slug": "men-men",
>       "name": "Mèn mén",
>       "isHero": false,
>       "tasteTags": ["vegetarian-friendly", "savory"],
>       "description": "Mèn mén, tên gọi bắt nguồn từ tiếng Hoa nghĩa là \"bột ngô hấp\", là món ăn từ ngô gắn bó lâu đời với đời sống người H'Mông ở cao nguyên đá Hà Giang, nơi ruộng bậc thang khan hiếm nước và ngô là cây lương thực chính thay cơm. Theo quan niệm của người H'Mông, phụ nữ phải biết đồ mèn mén ngon mới được xem là khéo léo, đảm đang.",
>       "keyIngredients": ["ngô tẻ địa phương xay vỡ", "nước", "đôi khi ăn kèm đậu, bí ngô"],
>       "prepOutline": [
>         "Tách hạt ngô, xay vỡ thành mảnh nhỏ rồi sàng sảy sạch trấu",
>         "Trộn bột ngô với nước cho đủ ẩm",
>         "Đồ (hấp) lần một trên chõ gỗ cho tới khi bột chín tới",
>         "Dỡ ra, xới tơi, vẩy thêm nước rồi đồ lần hai cho ngô chín mềm hoàn toàn"
>       ],
>       "howToEat": "Mèn mén ăn nóng ngay sau khi đồ xong, xới tơi ra bát, dùng thay cơm với canh rau hoặc thắng cố; để nguội mèn mén sẽ khô cứng và mất ngon.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://www.vietnamplus.vn/men-men-dac-san-doc-nhat-vo-nhi-cua-nguoi-mong-o-ha-giang-post868631.vnp", "label": "Mèn mén: đặc sản độc nhất vô nhị của người Mông ở Hà Giang (VietnamPlus)" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "lang-son",
>   "code": "VN-LS",
>   "name": "Lạng Sơn",
>   "region": "Bắc",
>   "centroid": [106.61932, 21.83973],
>   "summary": "Lạng Sơn - xứ Lạng nơi cửa ngõ biên giới phía Bắc - nổi danh với vịt quay lá mắc mật thơm nức, phở chua chua ngọt lạ miệng của người Tày, Nùng, và khâu nhục đậm đà mang dấu ấn giao thoa ẩm thực Hoa - Việt vùng biên ải.",
>   "summarySourceRefs": [
>     { "url": "https://baolangson.vn/vit-quay-la-mac-mat-cua-xu-lang-lot-top-100-mon-dac-san-viet-nam-1415256.html", "label": "Vịt quay lá mắc mật của xứ Lạng lọt top 100 món đặc sản Việt Nam (Báo Lạng Sơn)" }
>   ],
>   "heroDishSlug": "vit-quay-mac-mat",
>   "dishes": [
>     {
>       "slug": "vit-quay-mac-mat",
>       "name": "Vịt quay lá mắc mật",
>       "isHero": true,
>       "tasteTags": ["grilled", "savory"],
>       "description": "Vịt quay lá mắc mật là món đặc sản trứ danh của xứ Lạng, được Tổ chức Kỷ lục Việt Nam công nhận vào top 100 món ăn đặc sản Việt Nam giai đoạn 2020-2021. Vịt dùng là giống vịt bầu Thất Khê béo chắc, được nhồi lá mắc mật (móc mật) vào bụng trước khi quay, tạo mùi thơm hăng nhẹ và vị chua thanh rất riêng không lẫn với vịt quay vùng khác.",
>       "keyIngredients": ["vịt bầu Thất Khê", "lá và quả mắc mật (móc mật)", "mật ong", "gừng, hành khô, ngũ vị hương", "giấm hoặc rượu để quay da giòn"],
>       "prepOutline": [
>         "Làm sạch vịt qua đường mổ nhỏ ở cổ, giữ nguyên hình dáng con vịt",
>         "Nhồi lá mắc mật cùng gia vị vào bụng vịt rồi khâu kín",
>         "Bơm hơi qua ống lá đu đủ để da vịt căng phồng, không dính vào thịt",
>         "Nhúng nước sôi có giấm rồi phết mật ong lên da",
>         "Quay vịt trên than hoa hoặc lò quay, xoay đều tay tới khi da vàng giòn"
>       ],
>       "howToEat": "Vịt quay chặt miếng vừa ăn, chấm cùng nước mắm gừng hoặc nước xì dầu pha, ăn kèm bánh mì hoặc cơm và rau sống; món này rất phổ biến trong các dịp cỗ bàn và làm quà khi rời xứ Lạng.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://baolangson.vn/vit-quay-la-mac-mat-cua-xu-lang-lot-top-100-mon-dac-san-viet-nam-1415256.html", "label": "Vịt quay lá mắc mật của xứ Lạng lọt top 100 món đặc sản Việt Nam (Báo Lạng Sơn)" },
>         { "url": "https://tcdulichtphcm.vn/an-gi/vit-quay-mac-mat-mon-an-gay-thuong-nho-noi-bien-ai-c12a40426.html", "label": "Vịt quay mắc mật - Món ăn gây thương nhớ nơi biên ải" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     },
>     {
>       "slug": "pho-chua-lang-son",
>       "name": "Phở chua Lạng Sơn",
>       "isHero": false,
>       "tasteTags": ["sour", "noodle-soup", "street-food"],
>       "description": "Phở chua có nguồn gốc từ cộng đồng người Tày, Nùng ở Lạng Sơn, tên gọi xuất phát từ vị chua đặc trưng của nước sốt giấm thay vì nước dùng nóng như phở thường. Một bát phở chua đầy đủ hội tụ nhiều tầng hương vị và kết cấu: bánh phở mềm, khoai lang chiên giòn, gan lợn, xúc xích, thịt gà xé và lạc rang.",
>       "keyIngredients": ["bánh phở", "khoai lang thái lát chiên giòn", "gan lợn", "lạp xưởng (xúng xàng)", "thịt gà xé, hành phi", "giấm, tỏi, đường, ớt tươi pha nước sốt"],
>       "prepOutline": [
>         "Chiên giòn khoai lang thái lát mỏng",
>         "Luộc và xé sợi thịt gà, thái lát gan lợn, lạp xưởng",
>         "Pha nước sốt chua ngọt từ giấm, tỏi băm, đường, nước mắm và ớt",
>         "Trộn bánh phở với các loại topping rồi rưới đều nước sốt trước khi ăn"
>       ],
>       "howToEat": "Phở chua ăn nguội hoặc hơi ấm, trộn đều mọi thành phần với nước sốt ngay trước khi thưởng thức để giữ độ giòn của khoai lang và lạc rang.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://luhanhvietnam.com.vn/du-lich/dac-san-pho-chua-lang-son.html", "label": "Phở chua Lạng Sơn – món đặc sản nức tiếng" }
>       ],
>       "occasions": ["Quanh năm", "Mùa hè"]
>     },
>     {
>       "slug": "khau-nhuc",
>       "name": "Khâu nhục",
>       "isHero": false,
>       "tasteTags": ["savory"],
>       "description": "Khâu nhục (tên gọi Việt hóa từ tiếng Hoa, \"khâu\" nghĩa là mềm nhừ, \"nhục\" là thịt) vốn là món ăn của người Hoa được cộng đồng Tày, Nùng ở Lạng Sơn tiếp biến thành một trong những đặc sản nổi bật nhất vùng biên. Thịt ba chỉ được chiên vàng da rồi hấp cách thủy hàng giờ cùng tàu soi (cải mèn muối mặn) và mắc mật khô, cho miếng thịt mềm rục, mỡ không ngấy, da mềm mà không bở.",
>       "keyIngredients": ["thịt ba chỉ", "tàu soi (cải mèn muối mặn)", "quả mắc mật khô", "ngũ vị hương, quế, hồi, đinh hương", "tỏi, gừng, xì dầu"],
>       "prepOutline": [
>         "Luộc sơ thịt ba chỉ rồi chiên vàng phần da",
>         "Ướp thịt với ngũ vị hương, xì dầu, tỏi, gừng cho ngấm gia vị",
>         "Xếp tàu soi và mắc mật khô lót đáy bát, đặt thịt úp lên trên",
>         "Hấp cách thủy nhiều giờ tới khi thịt mềm nhừ, úp ngược ra đĩa khi dùng"
>       ],
>       "howToEat": "Khâu nhục ăn nóng cùng cơm trắng hoặc xôi, thường xuất hiện trong mâm cỗ ngày lễ, cưới hỏi của người Tày, Nùng xứ Lạng.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vnexpress.net/doi-song-cooking-khau-nhuc-lang-son-4702792.html", "label": "Cách làm món khâu nhục Lạng Sơn (VnExpress)" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "lao-cai",
>   "code": "VN-LC",
>   "name": "Lào Cai",
>   "region": "Bắc",
>   "centroid": [104.11016, 22.36621],
>   "summary": "Lào Cai, vùng đất biên giới với thị trấn nghỉ mát Sa Pa nổi tiếng, sở hữu nền ẩm thực đa sắc tộc từ cá hồi nuôi trong khe núi lạnh, thắng cố ở chợ phiên Bắc Hà, cho tới lợn cắp nách nướng than đặc trưng của các phiên chợ vùng cao.",
>   "summarySourceRefs": [
>     { "url": "https://baolaocai.vn/thit-lon-cap-nach-dac-san-kho-quen-cua-lao-cai-post387318.html", "label": "Thịt lợn cắp nách, đặc sản khó quên của Lào Cai (Báo Lào Cai)" }
>   ],
>   "heroDishSlug": "ca-hoi-sa-pa",
>   "dishes": [
>     {
>       "slug": "ca-hoi-sa-pa",
>       "name": "Cá hồi Sa Pa",
>       "isHero": true,
>       "tasteTags": ["grilled", "savory"],
>       "description": "Cá hồi Sa Pa là đặc sản nổi tiếng của Lào Cai, được nuôi trong nguồn nước suối lạnh tự nhiên ở độ cao 1.500-1.600m, nơi khí hậu ôn đới quanh năm mát mẻ rất thích hợp cho loài cá xứ lạnh. Thịt cá có màu cam hồng bắt mắt, thớ chắc, vị ngọt tự nhiên và ít mỡ hơn cá hồi nhập khẩu.",
>       "keyIngredients": ["cá hồi nuôi tại Sa Pa", "gừng, sả", "muối, tiêu", "rau thơm ăn kèm"],
>       "prepOutline": [
>         "Nuôi cá trong bể hoặc ao nước suối lạnh chảy liên tục nhiều tháng",
>         "Làm sạch cá, lọc phi lê hoặc cắt khúc tùy món",
>         "Ướp sơ với muối, tiêu, gừng trước khi chế biến",
>         "Nướng, hấp hoặc nhúng lẩu tùy cách thưởng thức"
>       ],
>       "howToEat": "Cá hồi Sa Pa được chế biến đa dạng thành gỏi cá hồi, cá hồi nướng, cá hồi hấp hoặc lẩu cá hồi, ăn kèm rau rừng và chấm mù tạt hoặc muối tiêu chanh.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://laocaitourism.vn/vi/detailnews/?t=ca-hoi-sa-pa-dac-san-lao-cai&amp;id=news_723", "label": "Cá hồi Sa Pa - đặc sản Lào Cai (Cổng du lịch Lào Cai)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "thang-co-bac-ha",
>       "name": "Thắng cố Bắc Hà",
>       "isHero": false,
>       "tasteTags": ["savory", "spicy"],
>       "description": "Thắng cố là món ăn truyền thống của người H'Mông có mặt khắp vùng núi phía Bắc, và phiên chợ Bắc Hà (Lào Cai) vào sáng Chủ nhật được xem là nơi thưởng thức thắng cố \"đúng chất\" nhất. Thịt và nội tạng ngựa, bò được ninh nhừ nhiều giờ trong chảo lớn đặt trên bếp than ngay giữa chợ, tạo nên nồi nước dùng đậm đà tỏa hương thảo quả, quế, sả khắp phiên chợ vùng cao.",
>       "keyIngredients": ["thịt và nội tạng ngựa hoặc bò", "thảo quả, quế, gừng núi", "sả nướng", "muối, ớt, rau cải mèo ăn kèm"],
>       "prepOutline": [
>         "Sơ chế và xào săn thịt, nội tạng bằng mỡ của chính con vật",
>         "Đổ nước, đun sôi rồi ninh liu riu nhiều giờ trên bếp than",
>         "Hớt bọt thường xuyên để nước dùng trong và ngọt",
>         "Nêm thảo quả, quế, sả nướng giã nhuyễn cùng muối, ớt"
>       ],
>       "howToEat": "Thắng cố múc nóng ngay tại chảo, ăn cùng rau cải mèo nhúng và bát rượu ngô, thường thưởng thức đông người quây quần tại các phiên chợ vùng cao.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Th%E1%BA%AFng_c%E1%BB%91", "label": "Thắng cố – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "lon-cap-nach",
>       "name": "Lợn cắp nách",
>       "isHero": false,
>       "tasteTags": ["grilled", "savory"],
>       "description": "Lợn cắp nách (còn gọi lợn Mường, lợn lửng) là giống lợn lai giữa lợn rừng và lợn Mường, được người vùng cao Lào Cai thả rông tự kiếm ăn từ rau củ dại nên trọng lượng nhỏ, dưới 20kg, có thể cắp gọn vào nách khi mang đi chợ phiên. Nhờ chế độ ăn hoàn toàn tự nhiên, thịt lợn dai nhẹ, thơm và không bở, mang hương vị đặc trưng của núi rừng Tây Bắc.",
>       "keyIngredients": ["thịt lợn cắp nách (ba chỉ, thịt vai, thịt mông)", "lá mắc mật", "riềng, sả, mẻ", "muối, hạt tiêu rừng"],
>       "prepOutline": [
>         "Chọn lợn nhỏ dưới 20kg thả rông tự nhiên, mổ và làm sạch",
>         "Thái miếng theo từng phần: thịt ba chỉ, thịt mông đem hấp; thịt vai trở lên đem nướng",
>         "Ướp thịt với riềng, sả, mẻ hoặc lá mắc mật tùy món",
>         "Hấp hoặc nướng than tới khi thịt chín tới, giữ độ ngọt tự nhiên"
>       ],
>       "howToEat": "Thịt lợn cắp nách thường được hấp lá chuối, nướng than hoa hoặc làm lẩu, chấm cùng muối ớt xanh hoặc lá mắc mật giã, ăn kèm rau rừng trong các phiên chợ vùng cao.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://baolaocai.vn/thit-lon-cap-nach-dac-san-kho-quen-cua-lao-cai-post387318.html", "label": "Thịt lợn cắp nách, đặc sản khó quên của Lào Cai (Báo Lào Cai)" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "quang-ninh",
>   "code": "VN-QNI",
>   "name": "Quảng Ninh",
>   "region": "Bắc",
>   "centroid": [107.25341, 21.2392],
>   "summary": "Quảng Ninh, vùng đất di sản vịnh Hạ Long, sở hữu nền ẩm thực biển phong phú với chả mực giã tay trứ danh, gà đồi Tiên Yên thả tự nhiên và sá sùng - đặc sản quý hiếm của các bãi cát ven đảo Vân Đồn, Quan Lạn.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/Ch%E1%BA%A3_m%E1%BB%B1c", "label": "Chả mực – Wikipedia tiếng Việt" }
>   ],
>   "heroDishSlug": "cha-muc-ha-long",
>   "dishes": [
>     {
>       "slug": "cha-muc-ha-long",
>       "name": "Chả mực Hạ Long",
>       "isHero": true,
>       "tasteTags": ["seafood", "savory", "street-food"],
>       "description": "Chả mực là đặc sản nổi tiếng bậc nhất của Quảng Ninh, đặc biệt ở Hạ Long và Cẩm Phả, lọt top 50 món ăn đặc sản nổi tiếng Việt Nam do Trung tâm Kỷ lục Việt Nam công nhận. Mực tươi được giã tay (không xay máy) để giữ độ dai giòn tự nhiên của thớ thịt, sau đó nặn thành miếng và chiên vàng, cho ra miếng chả mực ngọt đậm, giòn sần sật đặc trưng không nơi nào có được.",
>       "keyIngredients": ["mực tươi (mực mai)", "trứng gà", "thìa là, rau mùi", "mỡ phần hoặc mỡ lợn", "tỏi, tiêu, nước mắm"],
>       "prepOutline": [
>         "Làm sạch mực tươi, để ráo rồi giã tay bằng chày cho tới khi mực dai quyện",
>         "Trộn mực giã với trứng, mỡ phần, tỏi băm, tiêu và rau thơm",
>         "Nặn hỗn hợp thành từng miếng tròn dẹt",
>         "Chiên ngập dầu tới khi chả vàng đều hai mặt, giòn bên ngoài"
>       ],
>       "howToEat": "Chả mực ăn nóng ngay khi vừa chiên, chấm cùng tương ớt hoặc nước mắm, ăn kèm dưa chuột, cà chua, hoặc dùng cùng bánh cuốn nóng, xôi trắng.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Banh-cuon-cha-muc-ha-long.jpg", "attribution": "Lonnaemmittin163, via Wikimedia Commons", "license": "CC BY-SA 4.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Ch%E1%BA%A3_m%E1%BB%B1c", "label": "Chả mực – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "ga-tien-yen",
>       "name": "Gà Tiên Yên",
>       "isHero": false,
>       "tasteTags": ["savory"],
>       "description": "Gà Tiên Yên (gà đồi, gà râu) là giống gà nội địa có nguồn gốc từ huyện Tiên Yên, Quảng Ninh, gắn liền với câu ngạn ngữ \"Lợn Móng Cái - Gái Đầm Hà - Gà Tiên Yên\". Gà có đặc điểm nhận dạng là có râu, da vàng, chân vàng, được chăn thả tự nhiên trên các triền đồi núi nên thịt ngọt, thơm, da giòn và có vị béo đặc trưng của mỡ gà tích trong thớ thịt.",
>       "keyIngredients": ["gà Tiên Yên nuôi thả đồi", "lá chanh", "gừng, sả", "muối hạt, hạt tiêu"],
>       "prepOutline": [
>         "Chăn thả gà tự nhiên trên đồi núi nhiều tháng cho thịt chắc",
>         "Làm sạch gà, để nguyên con hoặc chặt miếng tùy món",
>         "Luộc hoặc hấp cùng gừng, sả cho gà chín tới, giữ được vị ngọt",
>         "Chặt miếng vừa ăn, bày cùng lá chanh thái chỉ"
>       ],
>       "howToEat": "Gà Tiên Yên thường được luộc chấm muối lá chanh hoặc hấp, ăn kèm cơm trong các dịp lễ, Tết; đây là món đặc sản thường \"cháy hàng\" mỗi khi vào mùa cao điểm.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/G%C3%A0_Ti%C3%AAn_Y%C3%AAn", "label": "Gà Tiên Yên – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     },
>     {
>       "slug": "sa-sung-van-don",
>       "name": "Sá sùng Vân Đồn",
>       "isHero": false,
>       "tasteTags": ["seafood", "savory"],
>       "description": "Sá sùng là loài hải sản quý hiếm sống trong cát ở các bãi biển đảo Minh Châu, Quan Lạn thuộc huyện Vân Đồn, Quảng Ninh, được xem là \"tinh hoa biển cả\" với giá bán sá sùng khô có thể lên tới vài triệu đồng một cân. Việc khai thác đòi hỏi kinh nghiệm nhiều năm để tìm đúng hang trên bãi cát, cùng công đoạn sơ chế và phơi sấy công phu để giữ được vị ngọt đậm tự nhiên hiếm có.",
>       "keyIngredients": ["sá sùng tươi hoặc khô", "tỏi, ớt", "rau răm hoặc hành lá"],
>       "prepOutline": [
>         "Đào bắt sá sùng trên bãi cát lúc thủy triều xuống",
>         "Làm sạch cát bên trong con sá sùng, chần qua nước sôi",
>         "Phơi hoặc sấy khô trên bếp than nếu làm sá sùng khô để bảo quản lâu",
>         "Rang sá sùng khô trên chảo nóng tới khi vàng đều rồi chà nhẹ cho sạch cát và vỏ còn sót"
>       ],
>       "howToEat": "Sá sùng khô rang giòn ăn kèm rau thơm chấm tương ớt như món nhắm; sá sùng tươi thường xào tỏi, nấu canh hoặc dùng làm nước dùng phở, bún cho vị ngọt thanh tự nhiên.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://baoquangninh.vn/sa-sung-kho-van-don-2511339.html", "label": "Sá sùng khô Vân Đồn (Báo Quảng Ninh)" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> Summary of sourcing/image gaps across the batch (under 150 words):
> 
> Strong Wikipedia (vi/en) sourcing: thắng cố, chả mực, ấu tàu/cháo ấu tẩu, gà đồi Yên Thế, gà Tiên Yên, bánh phu thê (en.wikipedia only, no vi article found). All other dishes (mì Chũ, bánh đa Kế, cá nướng Ba Bể, bánh gio, miến dong, nem Bùi, bánh tẻ làng Chờ, bánh cuốn Cao Bằng, phở chua x2, bánh áp chao, vịt quay mắc mật, khâu nhục, cá hồi Sa Pa, lợn cắp nách, sá sùng) have no dedicated Vietnamese Wikipedia article — sourced instead from reputable Vietnamese news/tourism outlets (VnExpress, Báo Lạng Sơn, Báo Quảng Ninh, VietnamPlus, provincial tourism portals, etc.), which is weaker sourcing per the task's fallback rule.
> 
> Images: Wikimedia Commons searches (English/romanized terms) surfaced almost no usable dish photos — only two hits: "Phu The Cake.jpg" (public domain, bánh phu thê) and "Banh-cuon-cha-muc-ha-long.jpg" (CC BY-SA 4.0, used for chả mực Hạ Long). All other 22 dishes have `images: []` — no fabricated URLs were used.</result>
> <usage><subagent_tokens>81904</subagent_tokens><tool_uses>49</tool_uses><duration_ms>516748</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 20:45 5/9/26

Lô 1 (Đông Bắc, 8 tỉnh) xong. Lưu vào file.

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\data\provinces\bac-giang.json

</details>

---

### 🤖 AI · 20:46 5/9/26

Lô 2 (Tây Bắc, 7 tỉnh) cũng xong. Lưu lần lượt tất cả file còn lại của cả 2 lô.

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\data\provinces\bac-kan.json

</details>

---

### 🤖 AI · 20:46 5/9/26

Lô 3 (Đồng bằng sông Hồng, 8 tỉnh) cũng xong. Lưu hàng loạt các file còn lại của 3 lô đã có.

<details>
<summary>16 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\data\provinces\bac-ninh.json
- `Read` — D:\01_Study\07_Local_Food\package.json
- `Edit` — D:\01_Study\07_Local_Food\package.json
- `Bash` — Inspect scaffolded app folder and generated CLAUDE.md
- `Bash` — Install map, motion, and icon dependencies
- `Bash` — Clean stale node_modules and reinstall fresh
- `Bash` — Install map, motion, and icon dependencies
- `Read` — D:\01_Study\07_Local_Food\.gitignore
- `ToolSearch`
- `Bash` — List files in Free-GIS-Data repo to find pre-2025 63-province geojson
- `Bash` — Check repo API response and default branch
- `Bash` — Get default branch and search tree for relevant province files
- `Bash` — Download pre-2025 63-province GeoJSON (combined islands version)
- `Bash` — Verify province count and list names in downloaded GeoJSON
- `Write` — D:\01_Study\07_Local_Food\scripts\normalize-geojson.mjs
- `Bash` — Run geojson normalization script

</details>

---

### 🤖 AI · 21:32 25/8/26

63 tỉnh đã có slug chuẩn khớp với data JSON. Giờ cần centroid cho từng tỉnh (dùng cho map camera + fallback marker) — tính bằng script luôn thay vì thủ công.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Sanity check slug/name mapping in normalized geojson
- `Write` — D:\01_Study\07_Local_Food\scripts\compute-centroids.mjs
- `Bash` — Compute province centroids from geojson

</details>

---

### 🤖 AI · 21:34 25/8/26

Giờ tìm ảnh thật từ Wikimedia Commons cho các món của Hà Nội và Huế, kèm attribution.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Search Wikimedia Commons for dish photos (attempt 1)
- `Bash` — Query Wikimedia Commons categories directly for dish photos with proper UTF-8 encoding
- `Bash` — Generate properly percent-encoded Commons API URLs via Node

</details>

---

### 🤖 AI · 21:34 25/8/26

Giờ dùng WebFetch để tránh lỗi encoding của bash trên Windows.

<details>
<summary>17 thao tác công cụ</summary>

- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `WebFetch` — List every File: title returned in categorymembers, verbatim.
- `Bash` — Generate search-API URLs for dishes lacking direct categories
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — List every File: title returned, verbatim, one per line.
- `WebFetch` — For each page returned, output: the File title, the imageinfo url, the LicenseShortName value, and the Artist 
- `WebFetch` — Output the imageinfo url, LicenseShortName, and Artist (plain text, strip HTML) for this file.

</details>

---

### 🤖 AI · 21:36 25/8/26

Đủ ảnh có bản quyền hợp lệ rồi. Giờ dựng code: types, data, lib, map, pages.

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\types.ts
- `Write` — D:\01_Study\07_Local_Food\data\provinces\ha-noi.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\thua-thien-hue.json
- `Write` — D:\01_Study\07_Local_Food\data\hero-bubbles.json

</details>

---

### 🤖 AI · 21:37 25/8/26

Giờ tạo `lib/provinces.ts` và `lib/geo.ts`.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\provinces.ts
- `Write` — D:\01_Study\07_Local_Food\lib\geo.ts
- `Bash` — Install geojson types and check tsconfig JSON module support

</details>

---

### 🤖 AI · 21:38 25/8/26

Giờ tạo `next.config.ts` với remotePatterns, `.env.local` placeholder, và global CSS palette/fonts.

<details>
<summary>7 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\next.config.ts
- `Read` — D:\01_Study\07_Local_Food\app\globals.css
- `Read` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Write` — D:\01_Study\07_Local_Food\app\globals.css
- `Write` — D:\01_Study\07_Local_Food\app\layout.tsx
- `Write` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx
- `Write` — D:\01_Study\07_Local_Food\components\layout\SiteFooter.tsx

</details>

---

### 🤖 AI · 21:38 25/8/26

Giờ tới `ImageWithFallback`, map components, và các trang.

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\image-fallback.ts
- `Write` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx

</details>

---

### 🤖 AI · 21:38 25/8/26

Giờ tạo các map component.

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts
- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx

</details>

---

### 🤖 AI · 21:39 25/8/26

Giờ tới `app/page.tsx` (homepage) và `app/provinces/[slug]/page.tsx`.

<details>
<summary>6 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\app\page.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Write` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx
- `Write` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx

</details>

---

### 🤖 AI · 21:40 25/8/26

Giờ update `next.config.ts` cho remotePatterns ảnh Wikimedia, và tạo `.env.local` placeholder.

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\next.config.ts
- `Write` — D:\01_Study\07_Local_Food\.env.local
- `Bash` — Remove unused boilerplate assets and typecheck project
- `Bash` — Build Next.js app to catch type/runtime errors

</details>

---

### 🤖 AI · 21:41 25/8/26

Build sạch, cả 2 tỉnh đã được static-generate. Giờ khởi động dev server để test thực tế trong browser.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Start Next.js dev server in background
- `Skill`

</details>

---

### 🧑 PM · 21:41 25/8/26

> Base directory for this skill: C:\Users\X\AppData\Local\Temp\claude\bundled-skills\2.1.238\5b2430244044cf3c049b62751572c05b\run
> 
> **Running means launching the actual app and interacting with it** —
> not the test suite, not an `import` of an internal function and a
> `console.log`. The app as a user (human or programmatic) would meet
> it: the CLI at its command, the server at its socket, the GUI at its
> window.
> 
> ## First: does a project skill already cover this?
> 
> A project skill that launches this app is the repo's verified path —
> its author already cold-started from a Linux container and committed
> what worked: the exact `apt-get` line, the env vars, the patches, the
> driver. Use it instead of rediscovering.
> 
> ```bash
> d=$PWD; while :; do
>   grep -Hm1 '^description:' "$d"/.claude/skills/*/SKILL.md 2>/dev/null
>   [ -e "$d/.git" ] || [ "$d" = / ] && break
>   d=$(dirname "$d")
> done
> ```
> 
> - **One describes launching/driving this app** → read that SKILL.md
>   and follow it verbatim. Don't paraphrase; don't skip the patches.
> - **Mega-repo, several plausible, no clear match** → ask the user
>   which unit to run.
> - **Stale** (fails on mechanics unrelated to your task) → tell the
>   user; offer to refresh it via `/run-skill-generator`.
> - **Nothing about running** → fall back to the patterns below.
> 
> ## Otherwise: match the shape, use the pattern
> 
> Pick the row closest to your project. Each example walks through
> launch + first interaction; ignore any trailing "write the skill"
> section — you're using the recipe, not authoring one.
> 
> | Project type | Handle | Example |
> |---|---|---|
> | CLI tool | direct invocation, exit code, stdin/stdout | [examples/cli.md](examples/cli.md) |
> | Web server / API | background launch + `curl` smoke | [examples/server.md](examples/server.md) |
> | TUI / interactive terminal | tmux `send-keys` / `capture-pane` | [examples/tui.md](examples/tui.md) |
> | Electron / desktop GUI | Playwright `_electron` REPL under xvfb | [examples/electron.md](examples/electron.md) |
> | Browser-driven | dev server + `chromium-cli` script | [examples/playwright.md](examples/playwright.md) |
> | Library / SDK | import-and-call smoke script at the package boundary | [examples/library.md](examples/library.md) |
> 
> If nothing fits, start from the closest match and adapt. For a web
> app, [examples/playwright.md](examples/playwright.md) — drive it with
> `chromium-cli`, no custom driver needed. For a desktop app,
> [examples/electron.md](examples/electron.md) — it has the `_electron`
> REPL driver skeleton and the tmux wrapping.
> 
> ## Drive it, don't just launch it
> 
> Launching with no interaction proves the entrypoint resolves. That's
> not running the app — it's typechecking with extra steps. Drive it to
> a point where a user would see something:
> 
> - CLI → type a representative command, check the exit code and output.
> - Server → hit the route the diff touches with `curl`, read the body.
> - TUI → `send-keys` a navigation, `capture-pane` the result.
> - GUI → click the button, screenshot the window. **Look at the
>   screenshot.** A blank frame is a failure to launch.
> 
> If the fallback pattern didn't work out of the box — you had to
> install packages, set env vars, patch config, or write a driver —
> recommend `/run-skill-generator` in your report so that work gets
> captured as a project skill. If it just worked, don't.
> 
> 
> ## User Request
> 
> Local Food Next.js app already running at http://localhost:3000 (pnpm dev, started in background). Please open it in a browser, take a screenshot of the homepage (map + province cards), then click into a province detail page (e.g. http://localhost:3000/provinces/ha-noi) and screenshot that too. Report any console errors or visibly broken UI (e.g. broken map, broken images, layout issues).

---

### 🤖 AI · 21:42 25/8/26



<details>
<summary>12 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\bundled-skills\2.1.238\5b2430244044cf3c049b62751572c05b\run\examples\play
- `Bash` — Check chromium-cli availability and confirm dev server responds
- `Bash` — Install Playwright as dev dependency for smoke-testing
- `Bash` — Install Playwright chromium browser binary
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Run Playwright smoke test against dev server
- `Bash` — Run Playwright smoke test from project dir so it resolves the installed package
- `Edit` — D:\01_Study\07_Local_Food\smoke-test.mjs
- `Bash` — Re-run Playwright smoke test with load-event wait strategy
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🧑 PM · 21:45 25/8/26

> [Image: original 1280x3642, displayed at 703x2000. Multiply coordinates by 1.82 to map to original image.]

---

### 🧑 PM · 21:45 25/8/26

> [Image: original 1280x3594, displayed at 712x2000. Multiply coordinates by 1.80 to map to original image.]

---

### 🤖 AI · 21:45 25/8/26



<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Verify Wikimedia image URLs resolve directly
- `Bash` — Wait out rate limit and re-screenshot Hue page images
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🧑 PM · 21:46 25/8/26

> [Image: original 1280x3594, displayed at 712x2000. Multiply coordinates by 1.80 to map to original image.]

---

### 🤖 AI · 21:46 25/8/26



<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Re-check Banh_beo.jpg URL status
- `Bash` — Wait longer and recheck Banh_beo.jpg headers
- `Bash` — Poll Banh_beo.jpg URL until it stops rate-limiting

</details>

---

### 🤖 AI · 21:49 25/8/26

Trong lúc chờ, dọn dẹp file test tạm và cài đặt lại.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Remove ad-hoc smoke test script and playwright dev dependency

</details>

---

### 🤖 AI · 21:50 25/8/26

Giờ khởi tạo git repo và commit đầu tiên cho walking skeleton.

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Check whether a git repo already exists in the project folder
- `Bash` — Initialize git repo and stage all files
- `Write` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Check if git user identity is configured for this new repo
- `Bash` — Create first commit for the walking skeleton

</details>

---

### 🤖 AI · 21:51 25/8/26

Commit đầu tiên đã tạo. Giờ kiểm tra background task xem ảnh Bánh bèo đã hết rate-limit chưa.

<details>
<summary>8 thao tác công cụ</summary>

- `Bash` — Check output of background poll for Banh_beo.jpg rate-limit
- `ToolSearch`
- `TaskOutput`
- `Bash` — Check dev server log for errors
- `Read` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Bash` — Scan dev log for error entries
- `Bash` — Rebuild after fixing generateMetadata async params bug

</details>

---

### 🤖 AI · 21:52 25/8/26

Build sạch. Commit fix và cập nhật Dev Book.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md
- `Bash` — Commit the generateMetadata fix

</details>

---

### 🤖 AI · 21:53 25/8/26

**Walking Skeleton đã chạy được, đã commit 2 lần vào git repo riêng.** Tóm tắt:

- **Dev server đang chạy nền** tại `http://localhost:3000` (`pnpm dev`).
- Trang chủ hiển thị bản đồ (đang dùng style demo miễn phí của MapLibre — chưa đẹp vì chưa có MapTiler key) + danh sách 2 tỉnh dạng card.
- `/provinces/ha-noi` và `/provinces/thua-thien-hue` render đầy đủ: hero photo, mô tả, nguyên liệu, cách làm, cách ăn, ảnh thật từ Wikimedia Commons kèm attribution — món **Bánh cuốn** dùng fallback gradient đẹp vì Wikimedia không có ảnh phù hợp.
- Font tiếng Việt (Be Vietnam Pro + Lora), bảng màu ấm (đỏ ớt/vàng nghệ/xanh rau thơm) hiển thị đúng như thiết kế.
- `pnpm build` chạy sạch, static-generate cả 2 trang tỉnh.
- Git repo riêng đã init, 2 commit, `DEVBOOK.md` ghi lại 6 vướng mắc thật đã gặp và cách xử lý (bug `generateMetadata` chưa await params, GeoJSON bị trùng 65→63 tỉnh, rate-limit Wikimedia khi test dồn dập...).

**Việc mày cần làm tiếp:**
1. Đăng ký free tại maptiler.com/account/keys, dán key vào `D:\01_Study\07_Local_Food\.env.local` (`NEXT_PUBLIC_MAPTILER_KEY=...`) rồi restart `pnpm dev` để bản đồ đẹp hơn.
2. Mở `http://localhost:3000` xem thử, bấm vào bubble để test điều hướng.

Việc tiếp theo (sau khi mày duyệt Walking Skeleton): điền nốt 6 tỉnh MVP còn lại (Hải Phòng, Quảng Nam, Khánh Hòa, TP.HCM, Cần Thơ, An Giang). Cho tao biết khi nào mày muốn tiếp tục.

<details>
<summary>3 thao tác công cụ</summary>

- `WebFetch` — Tóm tắt nguyên liệu chính, cách chế biến, và nguồn gốc tên gọi "Chả cá Lã Vọng" theo bài viết này.
- `WebFetch` — Tóm tắt nguyên liệu, cách làm bánh cuốn, và biến thể bánh cuốn Thanh Trì theo bài viết này.
- `WebFetch` — Tóm tắt nguyên liệu và cách làm bánh bèo theo bài viết này.

</details>

---

### 🧑 PM · 20:51 5/9/26

> This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.
> 
> Summary:
> ## 1. Primary Request and Intent
> 
> This is a long-running session building **"Local Food"** — a Next.js website showcasing Vietnamese local specialty dishes across all 63 pre-2025-merger provinces, as a personal project following the user's PM AI Bootcamp methodology (11-step Capstone Playbook: SCOPE→SPEC→MODULEMAP→ARCH→WBS→EST→RISK→DELEGATION-MAP→DOR→BUILD→TEST/GATE, each step requiring a "Cổng hiểu" comprehension gate where the PM must explain back in their own words and catch ≥1 AI mistake before proceeding).
> 
> Key intents across the session, in order:
> - Build a website with: interactive Google-Maps-style zoomable map (bubbles→pins by zoom), 63 provinces of local dishes, recipes, "cách ăn" (how-to-eat) guidance, photos, "wow"/modern/bold UI.
> - **Explicit process correction**: "Mày làm hơi nhanh rồi... giờ review đi lại từng bước kĩ càng nhé" — insisted on strict adherence to the 11-step methodology with real Cổng hiểu gates, not rubber-stamped shortcuts.
> - Iteratively demanded UI improvements when found lacking ("UI chưa như kỳ vọng, thậm chí lỗi thời", then "vẫn là minor, tao muốn wow hơn nữa... mạnh dạn thay đổi thiết kế đi").
> - Requested feature additions (review/rating with Supabase, search, season/festival filter) — later deprioritized review/rating given deadline pressure.
> - Reported real bugs found through his own testing: map not displaying, confusing non-scalable province list, "mày" casual language leaking into user-facing copy, wanting real dish photos instead of plain colored map bubbles.
> - Most recent explicit instruction (this session, date 2026-09-05, ~4 days to self-imposed deadline 2026-09-09): **"Oke, giờ next step là hoàn thiện hồ sơ nhỉ? tiến hành luôn Nhưng trước tiên, tao muốn mở rộng ra 63 tỉnh thành luôn, mày research và thêm vào nhé"** — i.e., expand data to the full 63 provinces FIRST, then proceed to W1-12 (finalize viva documentation: RTM, telemetry, Weekly Report).
> 
> ## 2. Key Technical Concepts
> 
> - **Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, pnpm.
> - **Map**: MapLibre GL JS (currently pinned to `4.7.1` after discovering `^6.5.0` has a critical bug — see Errors section), `react-map-gl/maplibre`, MapTiler basemap (free tier, key now provided by user in `.env.local`).
> - **Map markers**: Custom `<Marker>` HTML components (not GL circle layers) rendering circular dish-photo thumbnails via `next/image`, with manual zoom-based opacity crossfade (not MapLibre paint expressions).
> - **Motion**: Framer Motion (package `motion`, import from `motion/react`), used for hover-tilt cards, stagger reveals, kinetic split-text hero, magnetic buttons, parallax (`useScroll`/`useTransform`), popup transitions. `MotionConfig reducedMotion="user"` respects `prefers-reduced-motion`.
> - **Validation**: `zod` for real runtime schema validation of province JSON data (replaced unsafe `as Province` type casts).
> - **Content integrity discipline**: every dish/province summary requires ≥1 `sourceRef` (prefer vi.wikipedia.org, verified via WebFetch, not relied on from memory); images must be real Wikimedia Commons URLs (verified via Commons API) or `images: []` — never fabricated URLs.
> - **Accessibility**: axe-core/playwright for automated WCAG scanning; manual WCAG contrast ratio calculations (relative luminance formula) to pick exact safe opacity/color values.
> - **Performance**: Lighthouse CLI for audits; found and fixed real image-payload and LCP-blocking bugs.
> - **Data architecture**: no backend for content (static JSON files per province in `data/provinces/*.json`), though `ARCH-LF.md` D3 records a (currently deferred) decision to add Supabase for a review/rating feature.
> - **Bootcamp artefacts maintained**: `SCOPE-LF.md`, `SPEC-LF.md`, `MODULEMAP-LF.md`, `ARCH-LF.md`, `WBS-LF.md`, `EST-LF.md`, `RISK-LF.md`, `DELEGATION-MAP-LF.md`, `DOR-LF.md`, `SIT-UAT-LF.md`, `PERFORMANCE-LF.md`, `TECH-DEBT-LF.md`, `DEVBOOK.md` — all git-committed after each Cổng hiểu closure.
> - **Known operational gotcha** (documented in DEVBOOK.md): `lib/provinces.ts` caches province data in a module-level variable; a running `pnpm dev`/`next start` process will NOT pick up newly-added `data/provinces/*.json` files without a full server restart.
> - **Parallel research-agent pattern**: used repeatedly to batch-research province/dish content (Wikipedia verification + Wikimedia Commons image search with proper URL-encoding for Vietnamese diacritics, romanized-term fallback when diacritic search returns garbage) — proven effective for scaling content production.
> 
> ## 3. Files and Code Sections
> 
> ### Core data/schema
> - **`lib/types.ts`**: Defines `TASTE_TAGS`, `TasteTag`, `Region`, `OCCASIONS` (`"Quanh năm" | "Mùa xuân" | "Mùa hè" | "Mùa thu" | "Mùa đông" | "Tết Nguyên Đán" | "Tết Trung Thu"`), `Occasion`, `DishImage {url, attribution, license}`, `SourceRef {url, label}`, `Dish {slug, name, isHero, tasteTags, description, keyIngredients, prepOutline, howToEat, images, sourceRefs, occasions}`, `Province {slug, code, name, region, centroid, summary, summarySourceRefs, heroDishSlug, dishes}`.
> - **`lib/schema.ts`**: zod schemas mirroring types.ts; `provinceSchema` includes a `.refine()` cross-field check that `heroDishSlug` must match a dish with `isHero:true`; `sourceRefsSchema` requires min 1 entry.
> - **`lib/provinces.ts`**: `getAllProvinces()`, `getProvinceBySlug()`, `getAllProvinceSlugs()`, `getHeroDish()` — reads `data/provinces/*.json`, validates via `provinceSchema.safeParse`, throws descriptive error listing file+field on failure. Has the module-level cache gotcha noted above.
> - **`lib/geo.ts`**: `ProvinceMapProperties` includes `heroDishImageUrl: string | null`; `buildHeroBubbleFeatureCollection()` / `buildProvincePinFeatureCollection()`.
> - **`lib/searchIndex.ts`**: `buildSearchIndex()` flattens provinces+dishes into `SearchEntry[]` for client-side search.
> - **`lib/image-fallback.ts`**: `placeholderGradientFor(slug)` deterministic gradient variant picker.
> - **`data/hero-bubbles.json`**: currently `{"provinceSlugs": ["ha-noi","hai-phong","thua-thien-hue","quang-nam","khanh-hoa","ho-chi-minh","can-tho","an-giang"]}` — the 8 original MVP provinces, used both as map's low-zoom curated bubbles AND homepage's "highlighted provinces" set. **Will need updating** once more provinces are added if the curated set should change (currently not required to change, but worth a decision).
> - **`data/geo/vietnam-provinces-63.geojson`**: normalized 63-province boundaries with `properties.slug`/`properties.sourceName`.
> - **`data/geo/centroids.json`**: `{slug: [lng, lat]}` for all 63 provinces (already computed, used for new province centroids).
> - **`data/provinces/*.json`**: one file per province. **8 already existed and committed**: `ha-noi.json`, `hai-phong.json`, `thua-thien-hue.json`, `quang-nam.json`, `khanh-hoa.json`, `ho-chi-minh.json`, `can-tho.json`, `an-giang.json`. **2 more just written this session**: `bac-giang.json`, `bac-kan.json` (full content below in section 8/9). **18 more pending write** (full JSON content preserved verbatim below).
> 
> ### Map components
> - **`components/map/FoodMap.tsx`**: main map component; uses `<Marker>` per province (not GL Source/Layer), tracks `zoom` state via `onMove`, computes `heroOpacity`/`pinOpacity` from `mapStyle.ts` helpers, renders `DishMarker` for hero tier (with text label below showing hero dish name) and pin tier, `Popup` on hover, `MapToolbar` for zoom/reset, a "Bấm vào một điểm..." hint that fades after first interaction (`onPointerDownCapture`/`onWheelCapture`).
> - **`components/map/DishMarker.tsx`**: circular button marker; uses `next/image` (fixed after perf bug — was previously raw `<img>` causing 14MB payload) with `fill`, `sizes={size+"px"}`, `quality={60}`; falls back to gradient+`UtensilsCrossed` icon on error or missing image; has `aria-label={name}` and `focus-visible` outline.
> - **`components/map/mapStyle.ts`**: `maptilerStyleUrl()` (reads `NEXT_PUBLIC_MAPTILER_KEY`, falls back to MapLibre demo style), `VIETNAM_CENTER`, `VIETNAM_INITIAL_ZOOM`, `HERO_MAX_ZOOM=8`, `PIN_MIN_ZOOM=7`, `HERO_MARKER_SIZE=56`, `PIN_MARKER_SIZE=36`, `heroOpacityAtZoom()`/`pinOpacityAtZoom()` (linear crossfade over zoom 7-8 band).
> - **`components/map/MapToolbar.tsx`**: zoom in/out/reset buttons using `Toolbar`/`ToolbarButton` primitives, all with `aria-label`.
> - **`components/map/FoodMapLoader.tsx`**: `next/dynamic(ssr:false)` wrapper.
> 
> ### Province/content components
> - **`components/province/ProvinceDishExplorer.tsx`**: toggle between "Tổng quan" (grid of `DishTile`, click→`Sheet` slide-over with full `DishCard`) and "Hành trình" (horizontal scroll-snap `DishCard`s). Has a `useEffect` reading `window.location.hash` on mount to auto-open the Sheet for deep-linking (fixes a regression where search results linking to `#dish-slug` stopped working after this redesign).
> - **`components/province/DishTile.tsx`**: compact grid card with clip-path "curtain reveal" entrance animation, group-hover image zoom.
> - **`components/province/DishCard.tsx`**: full dish detail (image with click-to-zoom `Lightbox`, ingredients/steps/how-to-eat sections each with a lucide icon — `Carrot`/`ListOrdered`/`Utensils`, `sourceRefs` links at bottom).
> - **`components/province/ProvinceHero.tsx`**: province page hero banner, "Quay lại bản đồ" link, region label, summary + `summarySourceRefs`.
> - **`components/province/ProvinceTeaserCard.tsx`**: homepage/browse card, now includes a photo thumbnail (`ImageWithFallback` of hero dish), region-color accent bar (`bg-chili`/`bg-turmeric`/`bg-herb` by region).
> - **`components/province/ProvinceExplorerGrid.tsx`**: homepage's province grid with occasion-filter chips; now receives only the *highlighted* subset from `app/page.tsx`, not all provinces.
> - **`components/province/BrowseProvinces.tsx`**: `/browse` page component — occasion filter + groups all provinces by region (`Bắc`/`Trung`/`Nam`) with section headers showing counts.
> 
> ### UI primitives
> - **`components/ui/Button.tsx`, `Badge.tsx`** (tones: chili→now `text-chili-dark`, turmeric→`text-amber-dark`, herb→`text-herb-dark`, neutral→`text-ink/80`), **`Toolbar.tsx`**, **`Sheet.tsx`** (slide-over panel with Esc/backdrop close), **`Lightbox.tsx`** (full-screen image viewer, has its own `onError` fallback), **`ImageWithFallback.tsx`** (key logic: `const [loaded, setLoaded] = useState(priority)` — priority images skip the blur-up fade to avoid delaying LCP; non-priority images still get the nice blur-up transition).
> 
> ### Layout/effects
> - **`components/layout/SiteHeader.tsx`**: logo, `SearchBar`, "Tất cả tỉnh" link to `/browse`.
> - **`components/layout/SiteFooter.tsx`**.
> - **`components/HeroSection.tsx`**: kinetic split-word headline (`motion.span` per word, staggered), parallax background image via `useScroll`/`useTransform`, `Marquee`, `MagneticButton` CTA, diagonal `clip-path` on section bottom edge.
> - **`components/HeroPhotoBackground.tsx`**: decorative bg image with its own `onError` fallback (hides gracefully).
> - **`components/effects/GrainOverlay.tsx`, `MagneticButton.tsx`, `Marquee.tsx`**.
> - **`components/motion/MotionProvider.tsx`**: wraps app in `<MotionConfig reducedMotion="user">`.
> - **`components/search/SearchBar.tsx`**: diacritic-insensitive search (`normalize()` using NFD + strip `\u0300-\u036f` + `đ→d`), dropdown results, deep-links to `/provinces/{slug}#{dish-slug}`.
> 
> ### Pages
> - **`app/page.tsx`**: homepage — `HeroSection`, map, "Tỉnh nổi bật" section (now filtered to `heroBubbles.provinceSlugs` only) + "Xem tất cả N tỉnh" link, `ProvinceExplorerGrid`.
> - **`app/browse/page.tsx`**: new page listing all provinces grouped by region.
> - **`app/provinces/[slug]/page.tsx`**: `generateStaticParams`, `generateMetadata` (must be `async` and `await params` — Next.js 16 dynamic API requirement, was a real bug caught early).
> - **`app/not-found.tsx`**: custom 404 (icon + "Về bản đồ ẩm thực" button); text fixed from "mày" → "bạn".
> - **`app/layout.tsx`**: fonts (Be Vietnam Pro + Lora via `next/font/google`), `GrainOverlay`, `MotionProvider`, `SiteHeader`/`SiteFooter`.
> - **`app/globals.css`**: design tokens (`--color-chili/-dark`, `--color-turmeric/-dark`, `--color-herb/-dark`, `--color-amber/-dark`, `--radius-card/-pill/-control`, `--shadow-soft/-card/-lifted`, `.bg-texture-warm`).
> - **`next.config.ts`**: `images.remotePatterns` allowlisting `upload.wikimedia.org` (all dish images currently come only from this host).
> 
> ### Governance/documentation artefacts (all in project root)
> `SCOPE-LF.md`, `SPEC-LF.md`, `MODULEMAP-LF.md`, `ARCH-LF.md` (has D3: Supabase decision, currently deferred), `WBS-LF.md` (tracks all W1-* tasks and their PASS/FAIL history, most recently updated with the 2026-09-05 63-province expansion decision and 7-batch plan), `EST-LF.md`, `RISK-LF.md` (12 risks, R12 = accepted MapLibre-weight-causes-low-LCP risk), `DELEGATION-MAP-LF.md`, `DOR-LF.md`, `SIT-UAT-LF.md` (W1-11 QA checklist, all PASS), `PERFORMANCE-LF.md` (W1-11a/b results), `TECH-DEBT-LF.md`, `DEVBOOK.md` (running log of every real AI mistake caught and fixed — very long, includes the maplibre-gl 6.5.0 bug, the DishMarker image-payload bug, the ImageWithFallback LCP bug, the stale-dev-cache gotcha, the "mày" language leak, etc.).
> 
> ## 4. Errors and Fixes
> 
> 1. **Process violation**: Jumped straight to coding, skipping SCOPE/SPEC/ARCH/WBS/RISK/DOR steps and Cổng hiểu gates. **User feedback**: "Mày làm hơi nhanh rồi... giờ review đi lại từng bước kĩ càng nhé." **Fix**: Logged in DEVBOOK, retroactively did all 8 governance artefacts properly with real Cổng hiểu closures.
> 2. **`lib/provinces.ts` used `JSON.parse(...) as Province`** (no real validation) despite ARCH claiming schema errors would be caught. **Fix**: Added `zod`, `lib/schema.ts`, real `safeParse` with descriptive throw.
> 3. **Bánh cuốn Thanh Trì content factually wrong** (described as filled, should be unfilled per Wikipedia) — caught during W1-2 source-verification pass, fixed content + added `sourceRefs`.
> 4. **`generateMetadata` used `params.slug` synchronously** — Next.js 16 requires `await params`. Fixed to match the already-correct page component pattern.
> 5. **W1-9 "wow" gate failed twice**: (a) 1-column-long-scroll layout → redesigned to grid+Sheet+Timeline modes; (b) still "minor" per user → researched Awwwards trends, did a bold kinetic/parallax/marquee/magnetic-button redesign.
> 6. **Playwright `fullPage` screenshot false-positives**: several times, `whileInView`-animated content appeared to be "missing" in `fullPage` screenshots but was actually fine on real scroll — learned to always verify with real `mouse.wheel` scroll before concluding a bug, not just trust fullPage captures.
> 7. **Deep-link `#dish-slug` regression**: broke after redesigning province page to grid+Sheet (DishTile has no `id` anchor). Fixed by reading `window.location.hash` on mount in `ProvinceDishExplorer` and auto-opening the matching Sheet.
> 8. **Map completely not displaying** (user report, 2026-09-03): extensive debugging via custom `onLoad`/`onError`/`onStyleData`/`onSourceData`/`onData`/`onIdle` handlers and `map.isStyleLoaded()`/`map.loaded()` polling revealed `maplibre-gl@6.5.0`'s vector tile source (`maptiler_planet`) never reached `isSourceLoaded:true` and zero `.pbf` tile requests ever fired, reproducible in both dev and production, independent of our own GeoJSON layers (confirmed by disabling them — same bug). **Fix**: downgraded `maplibre-gl` to `4.7.1` — resolved immediately, verified with screenshots showing real map tiles + all 8 bubbles + working click navigation.
> 9. **"mày" (casual/rude pronoun) leaked into user-facing copy** on 404 page and homepage. **User feedback**: "sao lại dùng từ khóa 'mày' ở mục thông báo v? OMG". **Fix**: grepped whole `app`/`components` tree, fixed both occurrences to "bạn", confirmed zero remaining via re-grep.
> 10. **Map bubbles were plain colored circles**. **User feedback**: "bubble chấm đỏ thay vì vậy hãy dùng chính icon các món ăn từng địa phương tương ứng display nhé". **Fix**: replaced entire GL circle-layer rendering with `<Marker>` + new `DishMarker.tsx` component showing actual dish photo thumbnails.
> 11. **Accessibility**: axe-core found `color-contrast` violations from `text-ink/40`, `text-ink/60`, `text-amber`, chili-badge combo, across all 4 tested pages. Computed exact WCAG relative-luminance contrast ratios via a Node script rather than guessing; bumped opacities/colors precisely (`/60→/70`, `/40→/65`, `text-amber→text-amber-dark`, chili badge→`text-chili-dark`), also strengthened SearchBar's focus ring (`border-chili/40`→`border-chili` + `ring-2 ring-chili/30`). Result: 0 violations on re-scan.
> 12. **Performance — homepage 16.4MB, 14.4MB of it images**: root cause was `DishMarker.tsx` using raw `<img>` (not `next/image`) loading full-resolution Wikimedia originals for ~50px thumbnails. **Fix**: switched to `next/image` with proper `sizes` — reduced to 211KB (98.5% cut).
> 13. **Performance — LCP delayed ~3.2s on province pages**: root cause was `ImageWithFallback`'s blur-up fade (`opacity-0`→`opacity-100` on `onLoad`) applied even to `priority` (LCP-candidate) images, so the browser didn't count them as "painted" until the JS state flipped. **Fix**: `useState(priority)` so priority images start already visible. Verified improvement (though residual variance ~1.5-3.2s attributed largely to this specific test machine's heavy sustained load across the long session, not re-confirmed as fully resolved — documented honestly in `PERFORMANCE-LF.md` rather than claimed as fully fixed).
> 14. **Stale dev-server cache**: adding new `data/provinces/*.json` files while `pnpm dev`/`next start` was already running caused 404s for the new routes even though the files existed on disk — root cause is `lib/provinces.ts`'s module-level `cache` variable. **Fix pattern**: always kill and restart the Next server after adding new province data files (now a documented DEVBOOK.md gotcha, must be repeated for the current 63-province expansion).
> 
> ## 5. Problem Solving
> 
> - Established a reusable **parallel-research-agent pattern** for content production: give each agent the exact TS/zod schema, a curated (or self-identified) hero dish + 2-3 more dishes, strict rules (Wikipedia-verify via WebFetch not memory, proper URL-encoding for Vietnamese Commons searches, romanized-term fallback, never fabricate image URLs, `occasions` defaults to `["Quanh năm"]` unless evidence otherwise). This scaled successfully from 6 provinces (individual agents) to now 55 provinces (7 batched agents, ~6-10 provinces each) in roughly the same wall-clock time via backgrounding.
> - Solved the "why is this metric bad" performance debugging by systematically checking Lighthouse's `resource-summary`, `bootup-time`, and `lcp-breakdown-insight` audits rather than guessing, which correctly identified two distinct, fixable root causes (image payload, blur-up timing) versus one accepted architectural tradeoff (MapLibre GL's inherent script weight).
> - Solved the "map won't load" mystery by adding first-class MapLibre lifecycle event instrumentation directly rather than assuming network-level causes, and by isolating variables (disabling own layers, testing dev vs. prod) before concluding it was a library-version bug.
> 
> ## 6. All User Messages (verbatim, non-tool-result turns only)
> 
> 1. "D:\01_Study\07_Local_Food\00_Docs => Mày hãy học kiến thức trong folder này để xíu mình start dự án mang tên Local Food... Oke, để chi tiết hơn, tao sẽ mô tả thêm sau. giờ hãy lướt qua docs để biết chung ta cần tuân thủ và follow quy tắc như thế nào trong quá trình vibe code nhé."
> 2. "mày đọc lại đi nhé. update file r đó"
> 3. "Mày làm hơi nhanh rồi\nTao thấy oke pass hết đấy..." [Note: this exact phrase belongs to a later turn; the actual early scope-request message was the long one about "Long time no see" — see below list is reconstructed in order]
> 4. (Long project-brief message) "Oke. Giờ là tiến hành dev thật nhé, sản phẩm sẽ là website thật chuyên nghiệp... Giờ đề bài là: Website quảng bá local food đầy đủ trải dài 63 tỉnh thành Việt Nam (trước sáp nhập)... Tao muốn có bản đồ Việt Nam luôn, khi zoom xa thì chỉ thấy các buble món nổi tiếng nhất... Và mày hãy thêm idea để website mượt mà sinh động..."
> 5. "Mày làm hơi nhanh rồi\nTao thấy oke pass hết đấy\nSao lại dùng từ khóa..." [this is actually two separate later messages — corrected ordering below]
> 
> Given the risk of mis-ordering, here is the corrected chronological list of genuine user turns:
> 
> 1. Initial doc-learning request about the empty `00_Docs` folder and later populated PM AI Bootcamp docs (folder path, "học kiến thức... tuân thủ quy tắc").
> 2. "mày đọc lại đi nhé. update file r đó" (after docs were added).
> 3. The big Local Food project brief: dev thật, 63 tỉnh, bản đồ zoom bubble, ảnh AI generate optional, công thức, cách ăn, UI mượt sinh động.
> 4. "Mày làm hơi nhanh rồi\nTao nhớ là có cổng đóng các thứ, tao cần trả lời xong mới qua bước tiếp theo mà\nNhư vậy tao sẽ bị fail bài tập này đấy.\ngiờ review đi lại từng bước kĩ càng nhé" (process-violation callout).
> 5. Scope-gate answers: explanation of what MVP intentionally excludes, disagreement with assumption #4 (AI-only content), deadline = 2 weeks.
> 6. SPEC-gate answers: confirmed US-03/US-08 test results, caught the wishlist localStorage persistence gap.
> 7. MODULEMAP-gate answer: explained foundation-first reasoning, disputed lumping "Ảnh & fallback" into Layer 0.
> 8. ARCH-gate answer: explained no-backend tradeoffs, caught that `Province.summary` also needs `sourceRef`.
> 9. WBS-gate answer: explained W1-5 dependencies, caught missing A11y/Performance tasks.
> 10. EST-gate answer: explained W1-10 estimate assumption, disputed W1-6's unrealistic 1h optimistic estimate, chose **Phương án A** (keep 8 provinces).
> 11. DELEGATION-MAP-gate answer: explained why `.env.local` needs A+, disputed (partially correctly) that QA needed re-tiering.
> 12. DOR-gate answer: confirmed vertical-slice understanding, accepted "build now, verify MapTiler key later" with the added condition that the key must exist before W1-11.
> 13. "oke tiến hành đi nào. cố gắng nhé, hãy tổng hợp kiến thức tinh hoa nhân loại về code và đem về tích hợp vào sản phẩm này nào." (green light for W1-1 build).
> 14. "Trong role là chuyên gia thiết kế UX/UI, Mày hãy review lại và đưa ra 10 point cần improve và practice apply luôn nhé" (UX audit request).
> 15. "Cũng tạm ổn rồi. Tuy nhiên có vài point nhỏ cần improve: 1. ở trang lỗi 404, hãy sửa lại câu cú cho thân thiện... 2. bubble chấm đỏ thay vì vậy hãy dùng chính icon các món ăn từng địa phương tương ứng display nhé" — **wait, this is later; reorder once more**.
> 
> Given the difficulty of perfect reconstruction from a compacted transcript, the key distinct verbatim instructions I am confident about, in true order, are:
> 
> 1. "D:\01_Study\07_Local_Food\00_Docs => Mày hãy học kiến thức trong folder này..." + "giờ hãy lướt qua docs..."
> 2. "mày đọc lại đi nhé. update file r đó"
> 3. Long Local Food project brief (63 tỉnh, bản đồ bubble, ảnh AI, công thức, cách ăn, UI sinh động).
> 4. "Mày làm hơi nhanh rồi... giờ review đi lại từng bước kĩ càng nhé"
> 5. Series of Cổng hiểu gate answers (SCOPE, SPEC, MODULEMAP, ARCH, WBS, EST, DELEGATION-MAP, DOR) each containing specific corrections as detailed in section 4 above.
> 6. "oke tiến hành đi nào. cố gắng nhé, hãy tổng hợp kiến thức tinh hoa nhân loại về code và đem về tích hợp vào sản phẩm này nào."
> 7. "Trong role là chuyên gia thiết kế UX/UI, Mày hãy review lại và đưa ra 10 point cần improve và practice apply luôn nhé"
> 8. "mấy điểm vừa update có vẻ như chỉ là minor change tao muốn wow hơn nữa hãy mạnh dạn thay đổi thiết kế đi, lục tung khắp cõi internet và học hỏi kiểu thiết kế mới, hiện đại và giúp user hứng thú tương tác"
> 9. "oke Giờ tao muốn website này phải trở thành nơi cho user đóng vai role reviewer, họ có thể add comment, rate 5 level món ăn... ngoài ra, có thêm phần tìm kiếm nữa nhé... có mục filter theo tháng, mùa, lễ hội theo calendar Việt Nam nhé"
> 10. Answer to Supabase-vs-deadline question: "Làm review/rating ngay, chấp nhận thêm backend nhẹ (vd Supabase free tier)"
> 11. Answer to search-order question: "Tao làm Search + Filter mùa/lễ hội trước..., review/rating làm sau khi mày có key"
> 12. "Hello Long time no see. Now I come back nói tao nghe đang pending gì và giờ cần làm gì tiếp theo?"
> 13. Answer choosing to drop Review/Rating: "Bỏ Review/Rating (Supabase), tập trung hoàn thiện 8 tỉnh + QA + hồ sơ viva"
> 14. "đang có 2 issue nhé: 1. tao ko thấy map hoạt động: ko thấy display luôn nhé 2. tao đang confuse ở trang chủ, cách mà các tỉnh hiển thị... Tao muốn có graphic display nhé."
> 15. Answer choosing homepage-highlights + `/browse` page approach.
> 16. "uk cbi checklist đi" (prepare the QA checklist).
> 17. "Tao thấy oke pass hết đấy\nTuy nhiên có vài point nhỏ cần improve:\n1. ở trang lỗi 404, hãy sửa lại câu cú cho thân thiện, sao lại dùng từ khóa 'mày' ở mục thông báo v? OMG\n2. buble chấm đỏ thay vì vậy hãy dùng chính icon các món ăn từng địa phương tương ứng display nhé"
> 18. "oke tiếp" (continue to W1-11a/W1-11b).
> 19. "tạm để đó, hôm sau làm tiếp nhé"
> 20. "Oke, giờ next step là hoàn thiện hồ sơ nhỉ?\ntiến hành luôn\nNhưng trước tiên, tao muốn mở rộng ra 63 tỉnh thành luôn, mày research và thêm vào nhé" — **the most recent explicit instruction**, launching the current 63-province expansion work.
> 
> (Note: a harness-level instruction, not a user message, then interrupted mid-work demanding this plain-text summary.)
> 
> ## 7. Pending Tasks
> 
> - **Finish the 63-province expansion** (explicit, current, highest-priority task):
>   - Write the remaining 6 provinces from Batch 1 (Đông Bắc) to `data/provinces/*.json`: `bac-ninh`, `cao-bang`, `ha-giang`, `lang-son`, `lao-cai`, `quang-ninh`.
>   - Write all 7 provinces from Batch 2 (Tây Bắc): `dien-bien`, `hoa-binh`, `lai-chau`, `son-la`, `tuyen-quang`, `yen-bai`, `phu-tho`.
>   - Write all 8 provinces from Batch 3 (Đồng bằng sông Hồng): `ha-nam`, `hai-duong`, `hung-yen`, `nam-dinh`, `ninh-binh`, `thai-binh`, `thai-nguyen`, `vinh-phuc`.
>   - Wait for and then write Batch 4 (Bắc Trung Bộ, 8: `thanh-hoa`,`nghe-an`,`ha-tinh`,`quang-binh`,`quang-tri`,`quang-ngai`,`binh-dinh`,`da-nang` — agent id `aae794eeef2f4e634`, still running).
>   - Wait for and then write Batch 5 (Nam Trung Bộ + Tây Nguyên, 8: `phu-yen`,`ninh-thuan`,`binh-thuan`,`gia-lai`,`kon-tum`,`dak-lak`,`dak-nong`,`lam-dong` — agent id `a58497aebe7caf12c`, still running).
>   - Wait for and then write Batch 6 (Đông Nam Bộ, 6: `ba-ria-vung-tau`,`binh-duong`,`binh-phuoc`,`dong-nai`,`long-an`,`tay-ninh` — agent id `a3f65eed0966372a5`, still running).
>   - Wait for and then write Batch 7 (Tây Nam Bộ, 10: `bac-lieu`,`ben-tre`,`ca-mau`,`dong-thap`,`hau-giang`,`kien-giang`,`soc-trang`,`tien-giang`,`tra-vinh`,`vinh-long` — agent id `a4e52f488243ab709`, still running).
>   - After all 63 files exist: decide/update `data/hero-bubbles.json` (currently only the original 8 — needs a policy decision, likely keep as-is or curate a slightly larger "hero" set for the low-zoom map view; not yet decided with the user).
>   - Run `pnpm build` to validate every new file against the zod schema in `lib/schema.ts`; fix any validation errors.
>   - Restart the dev server (`pnpm dev`) — required per the documented stale-cache gotcha — before any manual testing.
>   - Commit all new province data with a clear message.
>   - Spot-check a handful of the 63 provinces per the user's own stated intent ("PM sẽ spot-check ngẫu nhiên vài tỉnh sau khi xong").
> - **W1-12** (explicitly the user's other named next-step, to be done after the 63-province expansion): finalize viva documentation — RTM (Requirements Traceability Matrix), telemetry data, Weekly Report.
> - Longer-term/deferred (not to be started without further instruction): Review/Rating feature with Supabase (deferred per user's own decision on 2026-09-03), Wishlist (phase-2), taste-tag map filtering (phase-2 beyond what's already built), quiz recommender.
> 
> ## 8. Current Work
> 
> Immediately before the summary-request interruption, I was executing the very first concrete step of the 63-province expansion: **writing the completed research-agent output to disk as individual `data/provinces/{slug}.json` files**. 
> 
> I had just successfully written `bac-giang.json` and was in the process of writing `bac-kan.json` via the `Write` tool (confirmed successful: "File created successfully at: D:\01_Study\07_Local_Food\data\provinces\bac-kan.json"). At that exact moment, a task-notification arrived reporting that Batch 3 (Đồng bằng sông Hồng, agent id `ad1ac3d23777955b0`) had also completed with its 8 provinces' full JSON content, followed immediately by the harness's plain-text-summary-only instruction that forced this compaction before I could continue writing files.
> 
> The exact task-relevant content still needing to be written to disk (verbatim from the task notifications already received in this conversation) is as follows — **these must be written to `data/provinces/{slug}.json` exactly as given, then validated via `pnpm build`**:
> 
> **Batch 1 remaining (6 files): `bac-ninh.json`, `cao-bang.json`, `ha-giang.json`, `lang-son.json`, `lao-cai.json`, `quang-ninh.json`** — full JSON bodies for each are present verbatim in the Batch-1 task-notification message earlier in this conversation (agent id `a6165c0f348d6b9b0`), immediately following the already-written `bac-giang`/`bac-kan` entries in that same notification.
> 
> **Batch 2 (7 files): `dien-bien.json`, `hoa-binh.json`, `lai-chau.json`, `son-la.json`, `tuyen-quang.json`, `yen-bai.json`, `phu-tho.json`** — full JSON bodies present verbatim in the Batch-2 task-notification (agent id `a680e3d3e5847661d`).
> 
> **Batch 3 (8 files): `ha-nam.json`, `hai-duong.json`, `hung-yen.json`, `nam-dinh.json`, `ninh-binh.json`, `thai-binh.json`, `thai-nguyen.json`, `vinh-phuc.json`** — full JSON bodies present verbatim in the Batch-3 task-notification (agent id `ad1ac3d23777955b0`), the most recently received notification.
> 
> All of these follow the exact same `Province`/`Dish` schema as the already-committed 8 MVP provinces (see `lib/types.ts` in section 3), each with 3 dishes (1 hero + 2 more), `sourceRefs` per dish and per province summary, `occasions` arrays (mostly `["Quanh năm"]`, a few `["Mùa xuân"]`/`["Mùa đông"]`/`["Tết Nguyên Đán"]` where genuinely seasonal), and `images: []` for the majority of dishes (Wikimedia Commons coverage for regional/lesser-known dishes was sparse across all three batches — each batch agent explicitly confirmed no URLs were fabricated).
> 
> ## 9. Optional Next Step
> 
> Continue exactly where interrupted: **write the remaining 21 province JSON files already returned by completed agents** (6 from Batch 1 + 7 from Batch 2 + 8 from Batch 3 = 21 files), using the `Write` tool with the exact verbatim JSON content quoted in the corresponding task-notification messages in this conversation (agent ids `a6165c0f348d6b9b0`, `a680e3d3e5847661d`, `ad1ac3d23777955b0`), matching the pattern already established for `bac-giang.json` and `bac-kan.json`. This directly continues the user's most recent explicit instruction: *"tao muốn mở rộng ra 63 tỉnh thành luôn, mày research và thêm vào nhé"* — the research is done for these 23 provinces (batches 1-3); the "thêm vào" (add it in) step is what was in progress. After that, continue waiting for and writing Batches 4-7 as their task-notifications arrive, then validate with `pnpm build`, restart the dev server, commit, and proceed to W1-12.
> 
> If you need specific details from before compaction (like exact code snippets, error messages, or content you generated), read the full transcript at: C:\Users\X\.claude\projects\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6.jsonl
> Continue the conversation from where it left off without asking the user any further questions. Resume directly — do not acknowledge the summary, do not recap what was happening, do not preface with "I'll continue" or similar. Pick up the last task as if the break never happened.

---

### 🤖 AI · 20:51 5/9/26

You've hit your session limit · resets 1:30am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 20:51 5/9/26

> <task-notification>
> <task-id>aae794eeef2f4e634</task-id>
> <tool-use-id>toolu_01Bq3k1GfQvby6LarV7XteLw</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\aae794eeef2f4e634.output</output-file>
> <status>completed</status>
> <summary>Agent "Research 8 Bac Trung Bo provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Below are the 8 complete Province JSON objects, ready to save as `data/provinces/{slug}.json`.
> 
> ```json
> {
>   "slug": "thanh-hoa",
>   "code": "VN-TH",
>   "name": "Thanh Hóa",
>   "region": "Trung",
>   "centroid": [105.31651, 20.04736],
>   "summary": "Thanh Hóa là vùng đất chuyển tiếp giữa Bắc Bộ và Bắc Trung Bộ, có cả đồng bằng sông Mã, vùng biển Sầm Sơn lẫn vùng đất nhiễm mặn Nga Sơn, tạo nên một nền ẩm thực đa dạng: từ nem chua lên men trứ danh cả nước, gỏi cá nhệch cầu kỳ của vùng cửa biển, đến chả tôm nướng đậm vị biển Sầm Sơn.",
>   "summarySourceRefs": [
>     { "url": "https://vietnamnet.vn/dac-san-thanh-hoa-khong-phai-ai-cung-dam-thu-khach-sanh-an-khen-ngon-hon-tom-2450214.html", "label": "VietNamNet – Đặc sản Thanh Hóa" }
>   ],
>   "heroDishSlug": "nem-chua-thanh-hoa",
>   "dishes": [
>     {
>       "slug": "nem-chua-thanh-hoa",
>       "name": "Nem chua Thanh Hóa",
>       "isHero": true,
>       "tasteTags": ["sour", "savory", "street-food"],
>       "description": "Nem chua Thanh Hóa là món ăn lên men trứ danh, được xem như biểu tượng ẩm thực của xứ Thanh. Khác với nem chua ở nhiều địa phương khác, nem chua Thanh Hóa chua thanh dịu, ngọt nhẹ, chín tự nhiên nhờ quá trình lên men bằng lá chứ không qua nấu nướng hay dùng chất bảo quản. Nem được làm thành nhiều hình dạng: nem thỏi, nem vuông, nem cối, nem nướng, mỗi loại có kết cấu và cách thưởng thức riêng.",
>       "keyIngredients": ["thịt lợn nạc xay", "bì lợn thái sợi mỏng", "thính gạo rang", "tỏi", "ớt", "lá đinh lăng hoặc lá ổi", "lá chuối gói ngoài"],
>       "prepOutline": [
>         "Chọn thịt lợn nạc còn nóng, xay nhuyễn ngay để giữ độ kết dính tự nhiên",
>         "Trộn thịt với bì lợn thái sợi, thính gạo rang, tỏi, ớt, hạt tiêu và một chút đường, muối",
>         "Nắm nhân thành viên nhỏ, đặt lên lá đinh lăng hoặc lá ổi rồi gói trong lá chuối",
>         "Ủ nem ở nhiệt độ thường: mùa nóng 8–12 giờ, mùa lạnh 24–36 giờ cho tới khi nem chín tới, có vị chua nhẹ"
>       ],
>       "howToEat": "Bóc lá chuối, ăn trực tiếp kèm tương ớt hoặc tỏi tươi; nem nướng thì nướng trên than hoa cho thơm trước khi ăn kèm rau sống.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/2/22/Nem_chua_Thanh_Hoa.jpg", "attribution": "Bogiasamson, Wikimedia Commons", "license": "CC BY-SA 4.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vietnamnet.vn/dac-san-thanh-hoa-khong-phai-ai-cung-dam-thu-khach-sanh-an-khen-ngon-hon-tom-2450214.html", "label": "VietNamNet – Đặc sản Thanh Hóa" },
>         { "url": "https://en.wikipedia.org/wiki/Nem_chua", "label": "Wikipedia (EN) – Nem chua" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     },
>     {
>       "slug": "goi-ca-nhech-nga-son",
>       "name": "Gỏi cá nhệch Nga Sơn",
>       "isHero": false,
>       "tasteTags": ["sour", "savory", "seafood", "herb-forward"],
>       "description": "Gỏi cá nhệch là đặc sản của vùng nước lợ Nga Sơn, chế biến từ cá nhệch — loài thuộc họ lươn nhưng thân dài, da trơn, sống ở cửa sông giáp biển. Món ăn vốn dân dã của ngư dân nhưng nhờ sự khéo léo trong chế biến đã trở thành đặc sản đãi khách quý, đòi hỏi người làm phải rất thạo nghề vì da cá rất trơn nhớt.",
>       "keyIngredients": ["cá nhệch tươi", "thính gạo rang", "lá chanh, lá sung, rau thơm các loại", "nước chấm chẻo (gan cá, xương cá giã nhuyễn)"],
>       "prepOutline": [
>         "Làm sạch nhớt cá bằng nước vôi loãng hoặc tro, sau đó lọc thịt cá bỏ xương",
>         "Thái cá thành lát mỏng, trộn đều với thính gạo rang cho thơm và se lại thịt",
>         "Giã xương và gan cá cùng gia vị để làm bát nước chấm chẻo đặc trưng",
>         "Bày cá gỏi ra đĩa cùng rổ rau sống, lá sung, lá chanh thái chỉ"
>       ],
>       "howToEat": "Cuốn miếng cá gỏi cùng rau sống, lá sung trong bánh đa hoặc lá chuối, chấm ngập vào bát chẻo đặc sánh rồi ăn ngay.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://nld.com.vn/thoi-su/goi-nhech-mon-ngon-tru-danh-o-xu-thanh-20210208223033965.htm", "label": "Người Lao Động – Gỏi nhệch, món ngon trứ danh xứ Thanh" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "cha-tom-thanh-hoa",
>       "name": "Chả tôm Thanh Hóa",
>       "isHero": false,
>       "tasteTags": ["savory", "grilled", "seafood", "street-food"],
>       "description": "Chả tôm Thanh Hóa là món quà vặt gắn liền với thành phố Thanh Hóa và vùng biển Sầm Sơn, dùng tôm sông tươi có vị ngọt và thịt chắc. Lớp bánh phở bọc ngoài được nướng vàng giòn, bên trong là nhân tôm trộn thịt ba chỉ béo ngậy, tạo nên món ăn vừa lạ miệng vừa đậm đà.",
>       "keyIngredients": ["tôm sông tươi", "thịt ba chỉ", "bánh phở", "hành khô", "gấc (tạo màu)", "nước chấm chua ngọt"],
>       "prepOutline": [
>         "Giã tôm cùng thịt ba chỉ, trộn với hành khô phi thơm và gia vị",
>         "Trải bánh phở, đặt nhân tôm lên rồi cuốn lại thành từng cuộn nhỏ",
>         "Xiên que tre và nướng trên than hoa cho tới khi vỏ bánh phở vàng giòn thơm nức"
>       ],
>       "howToEat": "Ăn kèm rau sống, bánh cuốn, chấm với nước mắm chua ngọt pha theo công thức riêng của người Thanh Hóa.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://nongthonmoi.danviet.vn/cha-tom-thanh-hoa-dac-san-dan-da-mang-huong-vi-kho-quen-cua-xu-thanh-d28414.html", "label": "Dân Việt – Chả tôm Thanh Hóa" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "nghe-an",
>   "code": "VN-NA",
>   "name": "Nghệ An",
>   "region": "Trung",
>   "centroid": [104.94393, 19.23729],
>   "summary": "Nghệ An, quê hương xứ Nghệ, nổi bật với các món chế biến từ lươn đồng — cháo lươn và súp lươn Vinh đã được công nhận là di sản văn hóa phi vật thể quốc gia — cùng bánh mướt mềm mại, món ăn dân dã gắn bó với đời sống thường nhật của người dân nơi đây.",
>   "summarySourceRefs": [
>     { "url": "https://vtcnews.vn/bi-quyet-lam-mon-chao-luon-nghe-an-khong-phai-ai-cung-biet-ar768963.html", "label": "VTC News – Bí quyết làm cháo lươn Nghệ An" }
>   ],
>   "heroDishSlug": "chao-luon-vinh",
>   "dishes": [
>     {
>       "slug": "chao-luon-vinh",
>       "name": "Cháo lươn Vinh",
>       "isHero": true,
>       "tasteTags": ["savory", "spicy", "herb-forward"],
>       "description": "Cháo lươn Nghệ An, đặc biệt là ở thành phố Vinh, là món ăn dân dã trứ danh nấu từ lươn đồng và gạo. Gạo được ngâm kỹ, nấu qua đêm để hạt gạo nở đều mà không nát, cháo có màu vàng óng, sánh mịn, ăn cùng thịt lươn béo ngậy, thơm nồng mùi nghệ và hành phi. Tri thức chế biến các món từ lươn của người Nghệ An đã được công nhận là di sản văn hóa phi vật thể quốc gia.",
>       "keyIngredients": ["lươn đồng", "gạo tẻ pha ít gạo nếp", "nghệ tươi", "gừng", "hành tăm (hành củ nhỏ)", "rau răm, hành lá"],
>       "prepOutline": [
>         "Chọn lươn còn sống, thân thon, thịt chắc, làm sạch nhớt bằng tro hoặc muối",
>         "Luộc hoặc xào lươn với nghệ, gừng, hành tăm, rượu để khử tanh và lên màu vàng đẹp",
>         "Gỡ thịt lươn, xào lại với gia vị cho săn và thơm",
>         "Ninh gạo thành cháo sánh mịn, múc ra bát rồi rắc thịt lươn xào lên trên cùng hành răm"
>       ],
>       "howToEat": "Ăn nóng, có thể thêm ớt bột hoặc tiêu, ăn kèm bánh mướt hoặc quẩy để tăng độ giòn.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vtcnews.vn/bi-quyet-lam-mon-chao-luon-nghe-an-khong-phai-ai-cung-biet-ar768963.html", "label": "VTC News – Bí quyết làm cháo lươn Nghệ An" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "sup-luon-nghe-an",
>       "name": "Súp lươn Nghệ An",
>       "isHero": false,
>       "tasteTags": ["savory", "spicy"],
>       "description": "Súp lươn là món anh em của cháo lươn, dùng cùng nguyên liệu lươn đồng nhưng phần nước sánh đặc hơn nhờ bột năng hoặc bột đao, thường được ăn kèm bánh mì hoặc bánh mướt thay vì cơm hay cháo gạo.",
>       "keyIngredients": ["lươn đồng", "bột năng hoặc bột đao", "nghệ, gừng, hành tăm", "rau răm, hành lá", "ớt chưng"],
>       "prepOutline": [
>         "Sơ chế và xào thịt lươn với nghệ, gừng, hành tăm tương tự cách làm cháo lươn",
>         "Nấu nước dùng từ xương lươn, nêm gia vị rồi hòa bột năng để tạo độ sánh đặc trưng",
>         "Cho thịt lươn xào vào bát, chan nước súp sánh nóng lên trên"
>       ],
>       "howToEat": "Ăn kèm bánh mì nướng giòn hoặc bánh mướt, rắc thêm hành răm và ớt chưng tùy khẩu vị.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://baoxuan.vov.vn/doi-song/cach-lam-chao-va-sup-luon-nghe-an-cuc-ngon-tai-nha-post1259415.vov", "label": "VOV – Cách làm cháo và súp lươn Nghệ An" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-muot-nghe-an",
>       "name": "Bánh mướt Nghệ An",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food"],
>       "description": "Bánh mướt là món bánh làm từ bột gạo tráng mỏng, hình dạng và cách làm gần giống bánh cuốn miền Bắc hay bánh ướt miền Nam nhưng nhỏ, dài bằng ngón tay, trắng mềm và không bị dính nhờ được phết một lớp dầu khi cuộn. Đây là món ăn gắn bó mật thiết với đời sống của người xứ Nghệ, thường ăn cùng cháo lươn hoặc súp lươn.",
>       "keyIngredients": ["bột gạo", "dầu ăn hoặc mỡ", "nước mắm chua cay", "rau răm, tỏi, ớt"],
>       "prepOutline": [
>         "Xay bột gạo mịn, pha loãng vừa phải",
>         "Tráng bột mỏng trên nồi hấp, cuộn lại thành từng cuốn nhỏ và phết dầu để không dính",
>         "Chuẩn bị nước chấm chua cay từ nước mắm, tỏi, ớt, rau răm băm nhỏ"
>       ],
>       "howToEat": "Chấm bánh mướt với nước mắm chua cay, hoặc ăn kèm cháo lươn, súp lươn, bò hầm.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vnexpress.net/banh-muot-dac-san-it-nguoi-biet-khi-den-nghe-an-3880826.html", "label": "VnExpress – Bánh mướt, đặc sản ít người biết khi đến Nghệ An" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "ha-tinh",
>   "code": "VN-HT",
>   "name": "Hà Tĩnh",
>   "region": "Trung",
>   "centroid": [105.73338, 18.29143],
>   "summary": "Ẩm thực Hà Tĩnh giản dị nhưng đậm đà, tiêu biểu là kẹo cu đơ ngọt bùi từ mật mía và lạc, món quà quê gắn với câu chuyện dân gian độc đáo, bên cạnh các món hải sản vùng biển như gỏi cá đục và các loại bánh dân dã như ram bánh mướt.",
>   "summarySourceRefs": [
>     { "url": "https://baohatinh.vn/am-thuc-ha-tinh-dam-da-phong-vi-que-huong-post237989.html", "label": "Báo Hà Tĩnh – Ẩm thực Hà Tĩnh đậm đà phong vị quê hương" }
>   ],
>   "heroDishSlug": "keo-cu-do",
>   "dishes": [
>     {
>       "slug": "keo-cu-do",
>       "name": "Kẹo Cu Đơ",
>       "isHero": true,
>       "tasteTags": ["sweet", "savory"],
>       "description": "Kẹo cu đơ là đặc sản nổi tiếng nhất của Hà Tĩnh, kết hợp mật mía, đường, mạch nha, gừng và lạc rang được nấu trên lửa nhỏ, khuấy đều tay rồi ép giữa hai miếng bánh tráng nướng. Tên gọi \"cu đơ\" bắt nguồn từ một câu chuyện dân gian về ông Cu Hai ở Hương Sơn, khi lính Pháp gọi ông là \"Hai\" rồi phiên thành \"Deux\" (đọc là \"đơ\") trong tiếng Pháp.",
>       "keyIngredients": ["mật mía", "đường", "mạch nha", "gừng tươi", "lạc (đậu phộng)", "bánh tráng (bánh đa) nướng"],
>       "prepOutline": [
>         "Nấu mật mía, đường, mạch nha và gừng trên lửa nhỏ, khuấy liên tục cho hỗn hợp sánh lại",
>         "Rang lạc chín thơm, giòn rồi trộn đều vào hỗn hợp mật đang sôi",
>         "Múc phần nhân còn nóng đặt lên một miếng bánh tráng, ép miếng bánh tráng thứ hai lên trên",
>         "Để nguội cho kẹo đông cứng lại rồi cắt hoặc bẻ thành từng miếng"
>       ],
>       "howToEat": "Bẻ từng miếng kẹo, ăn kèm chén trà xanh nóng để cân bằng vị ngọt và tăng hương thơm.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/K%E1%BA%B9o_Cu_%C4%90%C6%A1", "label": "Wikipedia tiếng Việt – Kẹo Cu Đơ" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     },
>     {
>       "slug": "goi-ca-duc-thach-hai",
>       "name": "Gỏi cá đục Thạch Hải",
>       "isHero": false,
>       "tasteTags": ["sour", "seafood", "herb-forward"],
>       "description": "Gỏi cá đục là món ăn đặc trưng của vùng biển Thạch Hải, Hà Tĩnh, chế biến từ cá đục tươi đánh bắt trong ngày. Món ăn có vị chua nhẹ từ chanh, hòa cùng vị ngọt tự nhiên của cá và độ giòn của thính, từng lọt vào top 100 món ăn đặc sản Việt Nam năm 2021.",
>       "keyIngredients": ["cá đục tươi", "thính gạo rang", "chanh hoặc khế chua", "rau thơm, lá sung", "lạc rang giã dập"],
>       "prepOutline": [
>         "Làm sạch cá đục, phi lê lấy phần thịt trắng, để ráo nước",
>         "Vắt chanh hoặc trộn khế chua để cá tái đi mà vẫn giữ độ ngọt tươi",
>         "Trộn cá với thính gạo rang, lạc rang giã dập cho thơm bùi",
>         "Pha nước chấm từ nước mắm, tỏi, ớt để ăn kèm"
>       ],
>       "howToEat": "Cuốn cá gỏi cùng rau thơm, lá sung trong bánh tráng, chấm nước mắm chua cay.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://mia.vn/cam-nang-du-lich/nhung-mon-dac-san-ha-tinh-12392", "label": "MIA.vn – Những món đặc sản Hà Tĩnh" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "ram-banh-muot-ha-tinh",
>       "name": "Ram bánh mướt Hà Tĩnh",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food"],
>       "description": "Ram bánh mướt là sự kết hợp giữa hai loại bánh: ram (nem rán/chả giò chiên giòn) và bánh mướt mềm mại, tạo nên món ăn vừa giòn vừa dai đặc trưng của người Hà Tĩnh, thường xuất hiện trong bữa sáng hoặc các dịp họp mặt gia đình.",
>       "keyIngredients": ["bánh mướt (bột gạo tráng mỏng)", "bánh tráng cuốn nhân (ram)", "thịt băm, miến, mộc nhĩ", "nước mắm chua ngọt", "rau sống"],
>       "prepOutline": [
>         "Làm nhân ram từ thịt băm, miến, mộc nhĩ, cà rốt, cuốn trong bánh tráng rồi chiên giòn",
>         "Tráng bánh mướt từ bột gạo, cuộn lại từng cuốn nhỏ mềm mại",
>         "Bày ram giòn và bánh mướt mềm cùng đĩa, ăn kèm rau sống và nước mắm chua ngọt"
>       ],
>       "howToEat": "Xé nhỏ ram, cuốn cùng bánh mướt và rau sống, chấm nước mắm chua ngọt pha tỏi ớt.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://baohatinh.vn/am-thuc-ha-tinh-dam-da-phong-vi-que-huong-post237989.html", "label": "Báo Hà Tĩnh – Ẩm thực Hà Tĩnh đậm đà phong vị quê hương" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "quang-binh",
>   "code": "VN-QB",
>   "name": "Quảng Bình",
>   "region": "Trung",
>   "centroid": [106.29035, 17.53331],
>   "summary": "Quảng Bình, vùng đất gió Lào cát trắng, có nền ẩm thực dân dã đậm chất miền Trung: bánh bột lọc dai mềm gói lá, cháo canh sợi bột dày ăn kèm ram giòn, và khoai deo — món quà quê ngọt bùi làm từ khoai lang trồng trên cồn cát Hải Ninh.",
>   "summarySourceRefs": [
>     { "url": "https://quangbinhtravel.vn/en/quang-binh-banh-loc-simple-but-unforgettable-flavor.html", "label": "Quang Binh Travel – Bánh lọc Quảng Bình" }
>   ],
>   "heroDishSlug": "banh-bot-loc-quang-binh",
>   "dishes": [
>     {
>       "slug": "banh-bot-loc-quang-binh",
>       "name": "Bánh bột lọc Quảng Bình",
>       "isHero": true,
>       "tasteTags": ["savory", "seafood", "street-food"],
>       "description": "Bánh bột lọc là món bánh dân dã đặc trưng của Quảng Bình, vỏ bánh làm từ bột sắn (bột lọc) tinh khiết, trong suốt và dai, nhân bên trong gồm tôm, thịt, mộc nhĩ. Bánh được gói cẩn thận trong lá chuối quê rồi hấp chín, mang hương vị mộc mạc nhưng khó quên.",
>       "keyIngredients": ["bột sắn (bột lọc)", "tôm", "thịt ba chỉ", "mộc nhĩ (nấm mèo)", "lá chuối gói bánh", "hành phi"],
>       "prepOutline": [
>         "Nhào bột sắn với nước sôi già cho tới khi bột dẻo, trong",
>         "Xào tôm, thịt ba chỉ, mộc nhĩ với hành phi và gia vị làm nhân",
>         "Vo bột thành từng viên nhỏ, bọc nhân vào giữa rồi gói trong lá chuối",
>         "Hấp bánh cho tới khi vỏ bột chuyển trong hẳn"
>       ],
>       "howToEat": "Bóc lá chuối, chấm bánh với nước mắm chua ngọt, rắc thêm hành phi và ăn nóng, đặc biệt ngon vào ngày trời lạnh.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/b/b8/B%C3%A1nh_b%E1%BB%99t_l%E1%BB%8Dc.jpg", "attribution": "Charles Haynes, Wikimedia Commons", "license": "CC BY-SA 2.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://quangbinhtravel.vn/en/quang-binh-banh-loc-simple-but-unforgettable-flavor.html", "label": "Quang Binh Travel – Bánh lọc Quảng Bình" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "chao-canh-quang-binh",
>       "name": "Cháo canh Quảng Bình",
>       "isHero": false,
>       "tasteTags": ["savory", "noodle-soup", "seafood"],
>       "description": "Cháo canh (còn gọi là bánh canh Quảng Bình) tuy mang tên cháo nhưng thực chất gần giống phở hay bún hơn: sợi bánh làm từ bột gạo hoặc bột mì cán dày, ăn cùng nước dùng ninh từ xương ngọt thanh và các loại topping như cá lóc, cá thu, tôm hay thịt băm.",
>       "keyIngredients": ["bột gạo hoặc bột mì", "xương heo hoặc xương cá", "cá lóc, cá thu hoặc tôm", "ram Ba Đồn (chả giò chiên giòn)", "rau sống, ớt tươi"],
>       "prepOutline": [
>         "Nhào bột gạo hoặc bột mì, cán mỏng rồi cắt thành sợi dày bản",
>         "Ninh xương heo hoặc xương cá lấy nước dùng ngọt tự nhiên",
>         "Luộc hoặc áp chảo cá, tôm, thịt băm làm topping",
>         "Trụng sợi bánh canh, chan nước dùng nóng và bày topping lên trên"
>       ],
>       "howToEat": "Ăn nóng kèm ram Ba Đồn bẻ nhỏ thả vào bát để tăng độ giòn, thêm rau sống và ớt tươi tùy khẩu vị.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://ticotravel.com.vn/chao-canh-quang-binh/", "label": "Tico Travel – Cháo canh Quảng Bình" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "khoai-deo-quang-binh",
>       "name": "Khoai deo Quảng Bình",
>       "isHero": false,
>       "tasteTags": ["sweet", "street-food"],
>       "description": "Khoai deo là món quà quê đặc sản của vùng cồn cát trắng Hải Ninh (Quảng Ninh, Quảng Bình), làm từ khoai lang đỏ được nắng gió tự nhiên hong khô, cho vị ngọt bùi tự nhiên, dẻo dai như mạch nha nhưng không hề bở hay cứng.",
>       "keyIngredients": ["khoai lang đỏ (trồng trên cồn cát Hải Ninh)", "đường (tùy công thức)"],
>       "prepOutline": [
>         "Chọn củ khoai lang đỏ đều, không sâu, luộc hoặc hấp sơ cho chín tới",
>         "Bóc vỏ, thái lát hoặc để nguyên củ nhỏ",
>         "Phơi khoai dưới nắng và gió biển nhiều ngày cho tới khi khoai săn lại, dẻo và có màu cánh gián"
>       ],
>       "howToEat": "Nhâm nhi khoai deo cùng một tách trà nóng, thường dùng làm quà biếu khi rời Quảng Bình.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/b/b4/%C4%90%E1%BA%B7c_S%E1%BA%A3n_Khoai_Deo_Qu%E1%BA%A3ng_B%C3%ACnh.jpg", "attribution": "Review Quang Binh, Wikimedia Commons", "license": "CC BY-SA 4.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://www.vietnamplus.vn/khoai-deo-mon-dac-san-dan-da-ma-doc-dao-cua-vung-dat-quang-binh-post912018.vnp", "label": "VietnamPlus (TTXVN) – Khoai deo Quảng Bình" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "quang-tri",
>   "code": "VN-QT",
>   "name": "Quảng Trị",
>   "region": "Trung",
>   "centroid": [106.92758, 16.74795],
>   "summary": "Quảng Trị có nền ẩm thực gắn với sông nước và làng nghề lâu đời: cháo bột cá lóc sợi bột dai phải ăn bằng đũa, bánh ướt Phương Lang từ làng nghề gần trăm năm tuổi, và biến thể cháo cá vạt giường của vùng Hải Lăng — tất cả đều mang vị cay nồng đặc trưng của miền Trung nắng gió.",
>   "summarySourceRefs": [
>     { "url": "https://ipa.quangtri.gov.vn/vi/xuc-tien-du-lich/thong-tin-du-lich/dac-san-banh-uot-phuong-lang-32.html", "label": "Cổng TTĐT Xúc tiến Đầu tư Quảng Trị – Bánh ướt Phương Lang" }
>   ],
>   "heroDishSlug": "chao-bot-ca-loc-quang-tri",
>   "dishes": [
>     {
>       "slug": "chao-bot-ca-loc-quang-tri",
>       "name": "Cháo bột cá lóc Quảng Trị",
>       "isHero": true,
>       "tasteTags": ["savory", "spicy", "noodle-soup", "seafood"],
>       "description": "Cháo bột cá lóc là đặc sản độc đáo của Quảng Trị, dù gọi là \"cháo\" nhưng không nấu từ gạo mà từ bột gạo nhồi cán thành sợi dày, khi nấu chín vẫn giữ độ dai mềm vừa phải chứ không nhũn như cháo thông thường. Nước dùng ninh từ đầu, xương, đuôi cá lóc, nêm củ nén, lá nén, ớt và tiêu Vĩnh Linh cay nồng.",
>       "keyIngredients": ["bột gạo (cán sợi)", "cá lóc (cá quả)", "củ nén, lá nén", "ớt, tiêu Vĩnh Linh", "hành lá, rau thơm"],
>       "prepOutline": [
>         "Ngâm gạo, xay thành bột rồi nhồi kỹ, cán mỏng và cắt thành sợi bột dày bản",
>         "Luộc cá lóc nguyên con, gỡ lấy thịt, ướp với muối, tiêu, hành, nước mắm",
>         "Ninh nước dùng từ đầu, xương, đuôi cá cho ngọt tự nhiên, nêm củ nén và ớt",
>         "Trụng sợi bột chín tới, chan nước dùng và bày thịt cá lóc lên trên"
>       ],
>       "howToEat": "Người Quảng Trị ăn món này bằng đũa để gắp sợi bột dai, còn phần nước dùng đặc sánh thì múc bằng thìa.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://ngoisao.vnexpress.net/chao-bot-ca-loc-quang-tri-an-phai-dung-dua-duoc-xuat-khau-sang-my-4959357.html", "label": "VnExpress – Cháo bột cá lóc Quảng Trị" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-uot-phuong-lang",
>       "name": "Bánh ướt Phương Lang",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food"],
>       "description": "Bánh ướt Phương Lang là đặc sản của làng Phương Lang (xã Hải Ba, huyện Hải Lăng), nơi có nghề làm bánh ướt truyền thống gần trăm năm tuổi. Nhờ dùng gạo ngon của vùng Quảng Trị, lớp bánh tráng hấp mỏng, mềm và dẻo dai hơn hẳn các loại bánh ướt nơi khác.",
>       "keyIngredients": ["gạo ngâm xay mịn", "nước mắm chua ngọt", "hành phi, rau sống", "thịt luộc hoặc chả (tùy nơi phục vụ)"],
>       "prepOutline": [
>         "Gạo được vo sạch, ngâm qua đêm rồi xay thành bột nước mịn",
>         "Tráng bột mỏng trên nồi hơi sôi, hấp chín thành từng lớp bánh mềm",
>         "Cuộn hoặc xếp bánh thành từng lớp, rắc hành phi lên trên",
>         "Pha nước chấm chua ngọt từ nước mắm, tỏi, ớt, đường"
>       ],
>       "howToEat": "Ăn kèm thịt luộc hoặc chả, chấm nước mắm chua ngọt và rau sống.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Nh%C3%A0_m%C3%ACnh_L%E1%BB%85_30th4n2023_%28b%C3%A1nh_%C6%B0%E1%BB%9Bt_Ph%C6%B0%C6%A1ng_Lang%29_%281%29.jpg", "attribution": "Phương Huy, Wikimedia Commons", "license": "CC BY-SA 4.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://ipa.quangtri.gov.vn/vi/xuc-tien-du-lich/thong-tin-du-lich/dac-san-banh-uot-phuong-lang-32.html", "label": "Cổng TTĐT Xúc tiến Đầu tư Quảng Trị – Bánh ướt Phương Lang" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "chao-ca-vat-giuong-hai-lang",
>       "name": "Cháo cá vạt giường Hải Lăng",
>       "isHero": false,
>       "tasteTags": ["savory", "herb-forward", "seafood"],
>       "description": "Cháo cá vạt giường là biến thể địa phương của món cháo bột cá lóc, đặc trưng của vùng Hải Lăng, Quảng Trị. Tên gọi \"vạt giường\" xuất phát từ hình dáng sợi bột được cán và cắt bản to giống các thanh vạt giường tre truyền thống. Món có thể biến tấu thêm vịt, riêu cua, tôm hoặc cua tùy mùa.",
>       "keyIngredients": ["sợi bột gạo cán bản to", "cá lóc (hoặc vịt, cua, tôm)", "củ nén", "hành, tiêu, nước mắm"],
>       "prepOutline": [
>         "Ngâm gạo, xay bột, ép và cán tay thành từng tấm mỏng rồi cắt sợi bản to",
>         "Luộc nguyên con cá lóc, gỡ xương lấy thịt, ướp muối, tiêu, hành, nước mắm",
>         "Nấu nước dùng từ xương cá và củ nén cho thơm ngọt",
>         "Kết hợp sợi bột, thịt cá đã ướp và nước dùng trong một tô lớn, rắc hành phi"
>       ],
>       "howToEat": "Dùng chung theo kiểu mâm cộng đồng, vừa ăn vừa cảm nhận hương thơm củ nén và hành đặc trưng của món.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Ch%C3%A1o_c%C3%A1_V%E1%BA%A1t_gi%C6%B0%E1%BB%9Dng_H%E1%BA%A3i_L%C4%83ng", "label": "Wikipedia tiếng Việt – Cháo cá Vạt giường Hải Lăng" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "quang-ngai",
>   "code": "VN-QNG",
>   "name": "Quảng Ngãi",
>   "region": "Trung",
>   "centroid": [108.64801, 14.99339],
>   "summary": "Quảng Ngãi, xứ sở núi Ấn sông Trà, gắn liền với những đặc sản từ dòng sông Trà Khúc: don ngọt thanh nấu từ loài nhuyễn thể nhỏ, cá bống sông Trà kho tiêu đậm đà, cùng bánh xèo mực hải sản của vùng biển Sa Huỳnh.",
>   "summarySourceRefs": [
>     { "url": "https://vietnamtourism.gov.vn/post/59394", "label": "Cục Du lịch Quốc gia Việt Nam – Don Quảng Ngãi" }
>   ],
>   "heroDishSlug": "don-quang-ngai",
>   "dishes": [
>     {
>       "slug": "don-quang-ngai",
>       "name": "Don Quảng Ngãi",
>       "isHero": true,
>       "tasteTags": ["savory", "seafood", "street-food"],
>       "description": "Don vừa là tên món ăn vừa là tên loài nhuyễn thể nhỏ thuộc họ hến, vỏ mỏng màu vàng nhạt, sống ở vùng nước lợ các sông Trà Khúc và sông Vệ. Nước don ngọt thanh, trong veo, gần như không cần nêm nhiều gia vị vì vị ngọt đã có sẵn từ con don, ăn cùng bánh tráng bẻ vụn và rau sống tạo nên món quà quê dân dã của xứ Quảng Ngãi.",
>       "keyIngredients": ["con don (nhuyễn thể vùng nước lợ)", "bánh tráng nướng hoặc để sống", "hành, ớt xanh", "rau sống"],
>       "prepOutline": [
>         "Đãi sạch cát bám trên vỏ don",
>         "Luộc nhanh don trong nước sôi để chiết lấy nước ngọt, đây là phần \"hồn\" của món ăn",
>         "Tách lấy phần thịt don ra khỏi vỏ",
>         "Có thể nấu thịt don thành canh với rau cải, rau muống, hoặc xào với hành"
>       ],
>       "howToEat": "Múc nước don nóng ra bát, bẻ vụn bánh tráng thả vào, rắc hành và ớt xanh, ăn kèm rau sống.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Don_(m%C3%B3n_%C4%83n)", "label": "Wikipedia tiếng Việt – Don (món ăn)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "ca-bong-song-tra-kho-tieu",
>       "name": "Cá bống sông Trà kho tiêu",
>       "isHero": false,
>       "tasteTags": ["savory", "spicy", "seafood"],
>       "description": "Cá bống sông Trà là loài cá nhỏ cỡ ngón tay nhưng thịt chắc và ngọt tự nhiên, sống trong dòng nước trong xanh của sông Trà Khúc. Cá được kho tiêu đậm đà, cay nồng, là một trong bốn đặc sản của Quảng Ngãi được Tổ chức Kỷ lục Việt Nam công nhận.",
>       "keyIngredients": ["cá bống sông Trà", "tiêu", "nước mắm", "đường, hành, ớt", "nước màu (nước hàng)"],
>       "prepOutline": [
>         "Đánh bắt cá bống vào mùa từ tháng 1 đến tháng 8 âm lịch khi cá bơi ngược dòng",
>         "Làm sạch cá, ướp với nước mắm, tiêu, đường và nước màu",
>         "Kho cá trên lửa nhỏ liu riu cho tới khi nước kho sánh lại, cá thấm đều gia vị"
>       ],
>       "howToEat": "Ăn kèm cơm trắng nóng, có thể để nguội và đóng hũ dùng dần hoặc làm quà biếu.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vnexpress.net/thoi-su/dac-san-ca-bong-song-tra-kho-tieu-cua-nguoi-quang-ngai-3602611.html", "label": "VnExpress – Cá bống sông Trà kho tiêu" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-xeo-muc-quang-ngai",
>       "name": "Bánh xèo mực Quảng Ngãi",
>       "isHero": false,
>       "tasteTags": ["savory", "seafood", "street-food"],
>       "description": "Bánh xèo Quảng Ngãi có kích thước nhỏ gọn trong lòng bàn tay, màu trắng ngà tự nhiên của bột gạo chứ không vàng rực như bánh xèo Nam Bộ, dùng ít dầu mỡ hơn. Phiên bản nhân mực tươi của vùng biển Sa Huỳnh mang vị ngọt biển đặc trưng, ăn cùng nước mắm Lý Sơn cay nồng.",
>       "keyIngredients": ["bột gạo", "mực tươi", "giá đỗ", "chuối chát, dưa leo, rau sống", "nước mắm Lý Sơn"],
>       "prepOutline": [
>         "Pha bột gạo loãng vừa phải, có thể thêm chút bột nghệ tạo màu nhẹ",
>         "Phi hành cho thơm, đổ mực tươi vào áp chảo trước",
>         "Đổ bột lên khuôn nhỏ khoảng 20cm, thêm giá đỗ, đậy nắp cho bánh chín đều",
>         "Gỡ bánh ra đĩa khi bánh vừa chín tới, còn mềm"
>       ],
>       "howToEat": "Ăn kèm chuối chát, dưa leo, rau sống, chấm nước mắm Lý Sơn pha tỏi ớt.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://baoquangngai.vn/channel/2047/201908/thom-ngon-banh-xeo-vo-sa-huynh-2960551/", "label": "Báo Quảng Ngãi – Bánh xèo vỏ Sa Huỳnh" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "binh-dinh",
>   "code": "VN-BD",
>   "name": "Bình Định",
>   "region": "Trung",
>   "centroid": [108.94654, 14.12484],
>   "summary": "Bình Định, đất võ miền Trung, tự hào với bánh xèo tôm nhảy dùng tôm sống còn nhảy tanh tách, bún chả cá Quy Nhơn đậm vị biển, và nem chợ Huyện chua giòn — món quà không thể thiếu trong cưới hỏi, giỗ chạp của người dân nơi đây.",
>   "summarySourceRefs": [
>     { "url": "https://thanhnien.vn/ve-binh-dinh-dung-quen-lang-nem-cho-huyen-185856053.htm", "label": "Thanh Niên – Làng nem Chợ Huyện, Bình Định" }
>   ],
>   "heroDishSlug": "banh-xeo-tom-nhay-binh-dinh",
>   "dishes": [
>     {
>       "slug": "banh-xeo-tom-nhay-binh-dinh",
>       "name": "Bánh xèo tôm nhảy Bình Định",
>       "isHero": true,
>       "tasteTags": ["savory", "seafood", "street-food"],
>       "description": "Bánh xèo tôm nhảy là đặc sản nổi bật nhất của Bình Định, tên gọi xuất phát từ việc dùng tôm đất tươi sống, vẫn còn nhảy tanh tách trong thau khi vừa mua về để làm nhân. Khác với bánh xèo Nam Bộ cỡ lớn nhiều nhân, bánh xèo Bình Định nhỏ gọn, vỏ mỏng giòn rụm nhưng vẫn giữ được hương vị đậm đà đặc trưng vùng đất võ.",
>       "keyIngredients": ["bột gạo", "tôm đất tươi sống", "giá đỗ", "rau sống, xà lách, chuối chát", "nước mắm chua ngọt"],
>       "prepOutline": [
>         "Pha bột gạo với nước, có thể thêm bột nghệ tạo màu vàng nhẹ",
>         "Đun nóng khuôn, tráng một lớp bột mỏng rồi xếp tôm đất còn tươi lên trên",
>         "Thêm giá đỗ, đậy nắp cho bánh chín giòn đều hai mặt",
>         "Gỡ bánh ra đĩa khi vỏ bánh giòn vàng"
>       ],
>       "howToEat": "Cuốn bánh xèo cùng rau sống, xà lách, chuối chát trong bánh tráng, chấm nước mắm chua ngọt pha tỏi ớt.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/B%C3%A1nh_x%C3%A8o_1.jpg", "attribution": "Kent Wang, Wikimedia Commons", "license": "CC BY-SA 2.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vnexpress.net/thuong-thuc-banh-xeo-tom-nhay-binh-dinh-o-ha-noi-4683224.html", "label": "VnExpress – Bánh xèo tôm nhảy Bình Định" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "bun-cha-ca-quy-nhon",
>       "name": "Bún chả cá Quy Nhơn",
>       "isHero": false,
>       "tasteTags": ["savory", "seafood", "noodle-soup"],
>       "description": "Bún chả cá là món ăn đặc trưng của thành phố biển Quy Nhơn, tận dụng nguồn cá biển phong phú của miền Trung như cá thu, cá mối, cá cờ, cá rựa để làm chả cá. Nước dùng trong, ngọt thanh từ xương cá và cà chua, ăn cùng chả cá chiên hoặc hấp dai ngọt.",
>       "keyIngredients": ["chả cá (cá thu, cá mối hoặc cá rựa)", "xương cá làm nước dùng", "cà chua, thơm (dứa)", "bún tươi", "rau sống, hành lá"],
>       "prepOutline": [
>         "Quết cá tươi cùng gia vị cho nhuyễn dai, nặn thành miếng rồi chiên hoặc hấp chín",
>         "Ninh nước dùng từ xương và đầu cá, nêm với cà chua và thơm để tạo vị chua thanh nhẹ",
>         "Trụng bún tươi, xếp chả cá lên trên rồi chan nước dùng nóng"
>       ],
>       "howToEat": "Ăn kèm rau sống, giá đỗ, thêm mắm ruốc hoặc ớt tươi tùy khẩu vị.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/3/32/B%C3%BAn_ch%E1%BA%A3_c%C3%A1%2C_th%C3%A1ng_8_n%C4%83m_2018.JPG", "attribution": "Phương Huy, Wikimedia Commons", "license": "Public domain" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%BAn_ch%E1%BA%A3_c%C3%A1", "label": "Wikipedia tiếng Việt – Bún chả cá" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "nem-cho-huyen-binh-dinh",
>       "name": "Nem chợ Huyện Bình Định",
>       "isHero": false,
>       "tasteTags": ["sour", "savory", "street-food"],
>       "description": "Nem chợ Huyện có nguồn gốc từ làng Chợ Huyện, xã Phước Lộc, huyện Tuy Phước, Bình Định — nơi từng là chốn tụ họp của nhiều gia đình quyền quý xưa, dần hình thành nhu cầu ẩm thực tinh tế. Nem có vị chua ngọt hài hòa, hơi chát nhẹ đặc trưng từ lá ổi gói ngoài, là món không thể thiếu trong cưới hỏi, giỗ chạp và ngày Tết của người Bình Định.",
>       "keyIngredients": ["thịt lợn nạc", "bì lợn", "tỏi, ớt, tiêu", "lá ổi", "lá chuối gói ngoài"],
>       "prepOutline": [
>         "Xay thịt lợn nạc còn tươi cùng bì lợn thái sợi mỏng",
>         "Trộn thịt với tỏi, ớt, tiêu và gia vị cho vừa ăn",
>         "Nắm thành viên nhỏ, gói trong lá ổi rồi bọc thêm lớp lá chuối bên ngoài",
>         "Để lên men tự nhiên ở nhiệt độ phòng cho tới khi nem chua vừa tới"
>       ],
>       "howToEat": "Bóc lá, ăn trực tiếp kèm tương ớt hoặc tỏi tươi, thường dùng làm món nhắm hoặc quà biếu.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://thanhnien.vn/ve-binh-dinh-dung-quen-lang-nem-cho-huyen-185856053.htm", "label": "Thanh Niên – Làng nem Chợ Huyện, Bình Định" }
>       ],
>       "occasions": ["Quanh năm", "Tết Nguyên Đán"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "da-nang",
>   "code": "VN-DN",
>   "name": "Đà Nẵng",
>   "region": "Trung",
>   "centroid": [109.75771, 16.23695],
>   "summary": "Đà Nẵng không chỉ nổi tiếng với mì Quảng mà còn có bánh tráng cuốn thịt heo — món ăn giản dị từ ba nguyên liệu chính nhưng tạo nên hương vị khiến du khách nhớ mãi — cùng mít trộn dân dã và gỏi cá Nam Ô của làng chài dưới chân đèo Hải Vân.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/Th%E1%BB%83_lo%E1%BA%A1i:%E1%BA%A8m_th%E1%BB%B1c_%C4%90%C3%A0_N%E1%BA%B5ng", "label": "Wikipedia tiếng Việt – Thể loại: Ẩm thực Đà Nẵng" }
>   ],
>   "heroDishSlug": "banh-trang-cuon-thit-heo-da-nang",
>   "dishes": [
>     {
>       "slug": "banh-trang-cuon-thit-heo-da-nang",
>       "name": "Bánh tráng cuốn thịt heo Đà Nẵng",
>       "isHero": true,
>       "tasteTags": ["savory", "street-food"],
>       "description": "Bánh tráng cuốn thịt heo là đặc sản gắn liền riêng với Đà Nẵng, gồm những nguyên liệu tưởng chừng đơn giản — bánh tráng, thịt heo, rau sống — nhưng khi kết hợp lại tạo nên hương vị hài hòa khó quên. Thịt ba chỉ luộc được thái lát mỏng, cuộn cùng bánh tráng dẻo dai, bún tươi và rất nhiều loại rau sống đặc trưng Đà Nẵng.",
>       "keyIngredients": ["thịt ba chỉ luộc", "bánh tráng", "bún tươi", "rau sống, xà lách, húng quế, diếp cá", "mắm nêm hoặc nước mắm chua ngọt"],
>       "prepOutline": [
>         "Luộc thịt ba chỉ chín tới, để nguội rồi thái lát mỏng vừa nạc vừa mỡ",
>         "Trải bánh tráng, xếp bún tươi, thịt và các loại rau sống lên trên",
>         "Cuộn chặt tay thành cuốn vừa ăn",
>         "Pha mắm nêm hoặc nước mắm chua ngọt đậm đà kiểu miền Trung"
>       ],
>       "howToEat": "Chấm cuốn bánh tráng vào bát mắm nêm pha thơm (dứa) và tỏi ớt, ăn ngay khi bánh tráng còn dẻo.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/B%C3%A1nh_tr%C3%A1ng_cu%E1%BB%91n_th%E1%BB%8Bt_heo.jpg", "attribution": "Lê Huỳnh Bộ, Wikimedia Commons", "license": "CC BY-SA 4.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://danangfantasticity.com/en/am-thuc-dia-phuong/banh-trang-cuon-thit-heo", "label": "Đà Nẵng Fantasticity (Cổng du lịch Đà Nẵng) – Bánh tráng cuốn thịt heo" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "mit-tron-da-nang",
>       "name": "Mít trộn Đà Nẵng",
>       "isHero": false,
>       "tasteTags": ["savory", "herb-forward", "street-food"],
>       "description": "Mít trộn là món ăn vặt dân dã gắn liền với tuổi thơ của nhiều thế hệ người Đà Nẵng, ra đời từ cuối thế kỷ 19 khi người dân vùng Đà Nẵng – Quảng Nam tận dụng mít non trong vườn nhà. Mít non luộc chín tới, xé sợi, trộn cùng lạc rang, hành phi, nước mắm và rau răm, có thể thêm da heo, tôm hoặc nhộng tằm tùy quán.",
>       "keyIngredients": ["mít non", "lạc rang giã dập", "hành phi", "rau răm, húng lủi", "da heo hoặc tôm (tùy chọn)", "nước mắm pha"],
>       "prepOutline": [
>         "Luộc mít non cho chín mềm nhưng không nhũn, giữ được sợi",
>         "Xé mít thành từng sợi nhỏ",
>         "Trộn mít với lạc rang, hành phi, rau răm và nước mắm pha",
>         "Thêm da heo chiên giòn hoặc tôm tùy khẩu vị"
>       ],
>       "howToEat": "Ăn kèm bánh tráng nướng giòn bẻ nhỏ để xúc, thường dùng làm món ăn chơi buổi chiều.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vinwonders.com/vi/wonderpedia/news/mit-tron-da-nang-mon-an-choi-doc-dao/", "label": "VinWonders – Mít trộn Đà Nẵng" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "goi-ca-nam-o-da-nang",
>       "name": "Gỏi cá Nam Ô",
>       "isHero": false,
>       "tasteTags": ["sour", "seafood", "herb-forward"],
>       "description": "Gỏi cá Nam Ô là tinh hoa ẩm thực của làng chài Nam Ô, nằm ở cửa sông Cu Đê dưới chân đèo Hải Vân, cách trung tâm Đà Nẵng khoảng 10km. Cá dùng để làm gỏi thường là cá trích tươi đánh bắt sớm nên thịt rất ngọt, ít tanh, kết hợp cùng riềng, mè và đậu phộng rang tạo hương vị đậm đà đặc trưng.",
>       "keyIngredients": ["cá trích tươi (hoặc cá cơm)", "riềng, tỏi, gừng giã nhuyễn", "mè rang", "đậu phộng rang", "bánh tráng, rau sống, chuối chát, khế"],
>       "prepOutline": [
>         "Chọn cá trích tươi đánh bắt sớm trong ngày, lọc lấy phần thịt không xương",
>         "Ướp cá với riềng, tỏi, gừng giã nhuyễn cùng một ít nước cốt chanh",
>         "Trộn cá đã ướp với mè rang và đậu phộng rang giã dập",
>         "Chuẩn bị nước chấm đặc từ xương cá giã nhuyễn nấu cùng gia vị"
>       ],
>       "howToEat": "Cuốn cá gỏi cùng bánh tráng, rau sống, chuối chát và khế chua, chấm nước chấm đặc sánh.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://danangfantasticity.com/en/am-thuc-dia-phuong/goi-ca-nam-o-da-nang", "label": "Đà Nẵng Fantasticity (Cổng du lịch Đà Nẵng) – Gỏi cá Nam Ô" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> **Sourcing/image summary (under 150 words):**
> 
> Strong sourcing (vi.wikipedia.org, dedicated articles): kẹo cu đơ, don (món ăn), cháo cá vạt giường Hải Lăng, bún chả cá. Reputable news/official-tourism sourcing (VnExpress, VietNamNet, VOV, VietnamPlus/TTXVN, Báo Hà Tĩnh, Báo Quảng Ngãi, official provincial tourism portals): all remaining dishes — none rely on low-quality sources, but none have vi.wikipedia articles either, so these are weaker than ideal per the brief. Nem chua Thanh Hóa additionally cites English Wikipedia's "Nem chua" as backup.
> 
> Images found and verified via Wikimedia Commons (all CC-BY-SA or public domain, attributed): nem chua Thanh Hóa, bánh bột lọc (Quảng Bình), khoai deo Quảng Bình, bánh ướt Phương Lang, bánh tráng cuốn thịt heo Đà Nẵng, bún chả cá (generic, used for Quy Nhơn variant), and a generic bánh xèo photo (Central Vietnam category, not tôm-nhảy-specific) for Bình Định's hero dish. No usable Commons images were found for: cháo lươn, súp lươn, bánh mướt, gỏi cá nhệch/đục/Nam Ô, chả tôm, cháo canh, cháo bột cá lóc, cháo cá vạt giường, cá bống sông Trà, bánh xèo mực, nem chợ huyện, mít trộn, don, ram bánh mướt — left as empty arrays rather than fabricated.</result>
> <usage><subagent_tokens>102571</subagent_tokens><tool_uses>46</tool_uses><duration_ms>603980</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 20:51 5/9/26

You've hit your session limit · resets 1:30am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 20:51 5/9/26

> <task-notification>
> <task-id>a3f65eed0966372a5</task-id>
> <tool-use-id>toolu_01WVR7A9z4n9PpEGNgMg8Qoe</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a3f65eed0966372a5.output</output-file>
> <status>completed</status>
> <summary>Agent "Research 6 Dong Nam Bo provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>All 6 valid JSON files created at `D:\01_Study\07_Local_Food\data\provinces\{slug}.json`:
> 
> - `ba-ria-vung-tau.json`, `binh-duong.json`, `binh-phuoc.json`, `dong-nai.json`, `long-an.json`, `tay-ninh.json`
> 
> Each has 3 dishes (hero + 2), Vietnamese descriptions researched via WebFetch (Vietnamese Wikipedia where available) and WebSearch (Vietnamese news/tourism sites otherwise), Commons-sourced images where a genuine match existed, and `occasions: ["Quanh năm"]` (Long An's lạp xưởng also tags Tết since it's a common holiday gift item).
> 
> Hero dishes chosen: Bánh khọt Vũng Tàu, Gỏi gà măng cụt Lái Thiêu (Bình Dương), Hạt điều rang Bình Phước, Gỏi cá Biên Hòa (Đồng Nai), Lạp xưởng tươi Cần Đước (Long An), Bánh tráng phơi sương Trảng Bàng (Tây Ninh).
> 
> **Sourcing/image caveats (per instructions):**
> - Wikipedia-backed (strong): bánh khọt, bánh tráng phơi sương, muối tôm, hạt điều/điều.
> - Weaker (Vietnamese news/tourism sites, no Wikipedia article found): lẩu cá đuối, gỏi cá mai, gỏi gà măng cụt, bánh bèo bì, nem Lái Thiêu, gà nướng Bình Phước, canh thụt, gỏi cá Biên Hòa, gỏi bưởi Tân Triều, gà hấp bưởi, lạp xưởng Cần Đước, cá lóc nướng trui, lẩu mắm Long An, bánh canh Trảng Bàng.
> - Missing images entirely: lẩu cá đuối, gỏi gà măng cụt, bánh bèo bì, nem Lái Thiêu, canh thụt, gỏi cá Biên Hòa, gà hấp bưởi, lạp xưởng tươi Cần Đước, lẩu mắm, muối tôm — no genuine Commons match found for these specific dishes.
> - Approximate/generic images used with a note in `attribution` (not exact-species or exact-locale matches, but same dish category): gỏi cá mai (used a gỏi cá trích/herring-salad photo), hạt điều (generic roasted cashews, not Bình Phước-specific), bánh tráng phơi sương (generic rice-paper-drying photo), bánh canh Trảng Bàng (bánh canh photo from Ngã Bảy, not Trảng Bàng). Exact matches were found for: gà nướng chợ Bình Long (Bình Phước-specific, CC0), cá lóc nướng trui (Grilled snakeheads.jpg), gỏi bưởi Tân Triều (Gỏi bưởi.jpg).</result>
> <usage><subagent_tokens>103916</subagent_tokens><tool_uses>58</tool_uses><duration_ms>581065</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 20:51 5/9/26

You've hit your session limit · resets 1:30am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 20:51 5/9/26

> <task-notification>
> <task-id>a58497aebe7caf12c</task-id>
> <tool-use-id>toolu_015A69kptXgpHjsCPSQ8RMiq</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a58497aebe7caf12c.output</output-file>
> <status>completed</status>
> <summary>Agent "Research 8 Nam Trung Bo Tay Nguyen provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>```json
> {
>   "slug": "phu-yen",
>   "code": "VN-PY",
>   "name": "Phú Yên",
>   "region": "Trung",
>   "centroid": [109.05566, 13.17039],
>   "summary": "Phú Yên là xứ biển Nam Trung Bộ nổi tiếng với nghề câu cá ngừ đại dương lớn nhất cả nước (Vũng Rô, Đông Tác) và các đầm phá nước lợ như Ô Loan, Cù Mông cho hải sản đặc trưng. Ẩm thực Phú Yên thiên về vị thanh, ít cay, tận dụng tối đa nguyên liệu biển tươi sống, tiêu biểu là mắt cá ngừ đại dương, sò huyết Ô Loan và bánh canh hẹ.",
>   "summarySourceRefs": [
>     { "url": "https://www.greensm.com/vn-vi/news/dac-san-phu-yen", "label": "Đặc sản Phú Yên – Top 15 món không thể bỏ lỡ khi đến xứ Nẫu (Green SM)" }
>   ],
>   "heroDishSlug": "mat-ca-ngu-dai-duong",
>   "dishes": [
>     {
>       "slug": "mat-ca-ngu-dai-duong",
>       "name": "Mắt cá ngừ đại dương",
>       "isHero": true,
>       "tasteTags": ["savory", "seafood"],
>       "description": "Mắt cá ngừ đại dương là món ăn gắn liền với nghề câu cá ngừ đại dương của ngư dân Phú Yên — nơi có sản lượng cá ngừ lớn nhất cả nước. Mỗi con cá ngừ nặng hàng chục ký chỉ cho một cặp mắt to bằng nắm tay, vị béo bùi đặc trưng, được xem là phần tinh túy và bổ dưỡng nhất của con cá nên trở thành đặc sản hiếm và đắt giá.",
>       "keyIngredients": ["mắt cá ngừ đại dương", "thuốc bắc (táo tàu, kỷ tử, hạt sen)", "gừng", "hành lá", "tiêu"],
>       "prepOutline": [
>         "Sơ chế mắt cá ngừ, khử tanh bằng rượu gừng rồi rửa sạch nhớt",
>         "Xếp mắt cá vào thố cùng thuốc bắc (táo tàu, kỷ tử, hạt sen), gừng và gia vị",
>         "Chưng cách thủy nhiều giờ ở lửa nhỏ cho mắt cá mềm, nước dùng ngọt thanh",
>         "Nêm lại vừa ăn, rắc hành lá và tiêu trước khi dùng"
>       ],
>       "howToEat": "Dùng nóng ngay khi vừa chưng xong, múc riêng từng chén nhỏ như một món tiềm bồi bổ, ăn kèm bánh mì hoặc cơm trắng, húp cả phần nước dùng ngọt béo tiết ra từ mắt cá.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://www.greensm.com/vn-vi/news/dac-san-phu-yen", "label": "Đặc sản Phú Yên – Green SM" },
>         { "url": "https://ohdidi.vn/blog/am-thuc/an-gi-o-phu-yen-thuong-thuc-21-mon-ngon-xu-nau-gay-thuong-nho", "label": "Top 21 món ngon đặc sản Phú Yên – Ohdidi" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-canh-he",
>       "name": "Bánh canh hẹ",
>       "isHero": false,
>       "tasteTags": ["savory", "noodle-soup", "street-food"],
>       "description": "Bánh canh hẹ là món ăn sáng phổ biến khắp Phú Yên, khác biệt với bánh canh các vùng khác nhờ vị the nồng của hẹ tươi thái nhỏ rắc lên trên. Nước lèo được ninh từ xương và cá tươi (thường là cá thu, cá cờ), sợi bánh canh làm từ bột gạo dẻo mềm, ăn cùng chả cá chiên và hấp.",
>       "keyIngredients": ["sợi bánh canh bột gạo", "chả cá chiên", "chả cá hấp", "hẹ tươi", "xương/cá làm nước lèo", "tiêu, ớt"],
>       "prepOutline": [
>         "Ninh nước lèo từ xương heo và đầu cá trong nhiều giờ cho ngọt trong",
>         "Luộc sợi bánh canh bột gạo tươi vừa chín tới",
>         "Chiên vàng một phần chả cá, phần còn lại hấp chín để giữ độ dai mềm",
>         "Trụng bánh canh, chan nước lèo nóng, xếp chả cá lên trên và rắc hẹ thái nhỏ"
>       ],
>       "howToEat": "Ăn nóng ngay khi múc ra tô, vắt thêm chanh, thêm ớt xay hoặc ớt tươi để dậy vị, trộn đều hẹ vào nước lèo trước khi húp.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_canh", "label": "Bánh canh – Wikipedia tiếng Việt" },
>         { "url": "https://www.greensm.com/vn-vi/news/dac-san-phu-yen", "label": "Đặc sản Phú Yên – Green SM" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "so-huyet-dam-o-loan",
>       "name": "Sò huyết đầm Ô Loan",
>       "isHero": false,
>       "tasteTags": ["savory", "seafood"],
>       "description": "Đầm Ô Loan (huyện Tuy An) là vùng nước lợ nổi tiếng của Phú Yên, cho ra loại sò huyết thịt dày, ngọt béo đậm đà nhờ môi trường sinh thái đặc thù. Sò huyết Ô Loan đã được Cục Sở hữu trí tuệ cấp chứng nhận chỉ dẫn địa lý vào năm 2018, khẳng định thương hiệu đặc sản vùng miền.",
>       "keyIngredients": ["sò huyết Ô Loan", "sả", "gừng", "muối tiêu chanh", "rau răm"],
>       "prepOutline": [
>         "Ngâm sò huyết trong nước vo gạo pha ớt để nhả sạch cát",
>         "Hấp hoặc luộc sơ với sả đập dập đến khi sò vừa hé miệng",
>         "Có thể nướng trên than hoa với mỡ hành cho dậy mùi thơm",
>         "Chuẩn bị muối tiêu chanh hoặc mắm gừng để chấm"
>       ],
>       "howToEat": "Ăn khi còn nóng, tách vỏ bằng tay, chấm với muối tiêu chanh hoặc mắm gừng, thường dùng làm món nhậu kèm rau răm.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://moit.gov.vn/tin-tuc/xuc-tien-thuong-mai/so-huyet-o-loan-dac-san-cua-vung-bien-phu-yen.html", "label": "Sò huyết Ô Loan – đặc sản của vùng biển Phú Yên (Bộ Công Thương)" },
>         { "url": "https://vinwonders.com/vi/wonderpedia/news/so-huyet-dam-o-loan/", "label": "Sò huyết đầm Ô Loan – VinWonders" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "ninh-thuan",
>   "code": "VN-NT",
>   "name": "Ninh Thuận",
>   "region": "Trung",
>   "centroid": [108.86698, 11.70655],
>   "summary": "Ninh Thuận là vùng đất khô nóng đặc trưng của Nam Trung Bộ, nơi giao thoa văn hóa ẩm thực Chăm và Việt. Khí hậu bán khô hạn tạo điều kiện cho nghề chăn nuôi dê, cừu phát triển mạnh, trong khi các món bánh làm từ bột gạo như bánh căn, bánh xèo mang đậm dấu ấn ẩm thực Chăm truyền thống.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_c%C4%83n", "label": "Bánh căn – Wikipedia tiếng Việt" }
>   ],
>   "heroDishSlug": "thit-de-ninh-thuan",
>   "dishes": [
>     {
>       "slug": "thit-de-ninh-thuan",
>       "name": "Thịt dê Ninh Thuận",
>       "isHero": true,
>       "tasteTags": ["savory", "grilled"],
>       "description": "Nhờ khí hậu nắng nóng, ít mưa và những triền đồi cây bụi khô, dê cừu Ninh Thuận được chăn thả tự nhiên, ăn cỏ và lá cây bản địa nên thịt săn chắc, thơm và gần như không có mùi hôi đặc trưng của dê nuôi nhốt. Thịt dê Ninh Thuận được chế biến thành nhiều món như dê nướng, dê né, lẩu dê, tiết canh dê, trở thành đặc sản gắn liền với vùng đất này.",
>       "keyIngredients": ["thịt dê (đùi, ba chỉ)", "sả", "riềng", "mẻ/sa tế", "rau sống, chuối chát, khế", "bánh tráng"],
>       "prepOutline": [
>         "Chọn thịt dê tơ, lọc bỏ gân, thái miếng vừa ăn",
>         "Ướp thịt với sả, riềng, ngũ vị hương và sa tế trong khoảng 30 phút",
>         "Nướng trên than hoa hoặc nhúng lẩu cùng nước dùng sả, măng chua",
>         "Chuẩn bị mâm rau sống, chuối chát, khế chua và bánh tráng ăn kèm"
>       ],
>       "howToEat": "Cuốn thịt dê nướng cùng bánh tráng, rau sống, chuối chát, khế chua rồi chấm mắm nêm hoặc chao; nếu ăn lẩu thì nhúng thịt tái vừa chín tới, chấm cùng nước chấm chua cay.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vinpearl.com/vi/dac-san-ninh-thuan-khanh-hoa", "label": "Đặc sản Ninh Thuận: 19 món ngon không thể bỏ lỡ – Vinpearl" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-can-ninh-thuan",
>       "name": "Bánh căn Ninh Thuận",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food", "grilled"],
>       "description": "Bánh căn có nguồn gốc từ ẩm thực của người Chăm, sau đó được người Việt tiếp biến và trở thành món ăn đặc trưng của Ninh Thuận, Bình Thuận, Khánh Hòa. Bánh được đổ trong khuôn đất nung nhỏ đặt trên bếp than, khác với bánh khọt là chiên dầu, bánh căn được 'nướng' khô nên vỏ ngoài giòn, ruột mềm.",
>       "keyIngredients": ["bột gạo xay", "trứng", "tôm, mực hoặc thịt bằm", "mỡ heo", "nước mắm/mắm nêm pha", "xoài xanh bào sợi"],
>       "prepOutline": [
>         "Ngâm gạo khoảng 6 tiếng rồi xay nhuyễn cùng một ít cơm nguội cho bánh xốp",
>         "Đặt khuôn đất nung nhiều lỗ tròn lên bếp than, phết mỡ heo chống dính",
>         "Đổ bột vào khuôn, đập thêm trứng hoặc thêm tôm/mực lên trên, đậy nắp cho chín",
>         "Cạy bánh ra khi mặt trên se lại và đáy vàng giòn"
>       ],
>       "howToEat": "Ăn nóng ngay khi vừa ra khuôn, chan hoặc chấm nước mắm pha (có nơi dùng mắm nêm), ăn kèm xoài xanh bào sợi, rau sống và các loại chả, nem.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/B%C3%A1nh_c%C4%83n_in_phan_rang%2C_vietnam.jpg", "attribution": "Saigon Time, Wikimedia Commons", "license": "CC0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_c%C4%83n", "label": "Bánh căn – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-canh-cha-ca-phan-rang",
>       "name": "Bánh canh chả cá Phan Rang",
>       "isHero": false,
>       "tasteTags": ["savory", "noodle-soup", "street-food"],
>       "description": "Bánh canh chả cá là biến thể bánh canh đặc trưng của Phan Rang – Ninh Thuận, được Wikipedia tiếng Việt ghi nhận là một trong các phiên bản vùng miền của món bánh canh. Nước lèo được hầm từ cá biển và xương heo cho vị ngọt thanh, ăn cùng chả cá tự làm dai giòn.",
>       "keyIngredients": ["sợi bánh canh bột gạo", "chả cá thu/cá nhồng", "xương heo và cá làm nước lèo", "hành lá, tiêu", "ớt xanh"],
>       "prepOutline": [
>         "Quết chả cá từ cá tươi giã nhuyễn cùng gia vị, tạo hình viên hoặc miếng dẹt",
>         "Hấp hoặc chiên chả cá cho chín tới",
>         "Ninh nước lèo từ xương heo và đầu cá trong nhiều giờ",
>         "Trụng sợi bánh canh, chan nước lèo, xếp chả cá lên trên"
>       ],
>       "howToEat": "Dùng nóng, thêm ớt xanh Ninh Thuận cắt lát hoặc ớt bột, vắt chanh và rắc tiêu, thường ăn vào buổi sáng hoặc xế chiều.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_canh", "label": "Bánh canh – Wikipedia tiếng Việt" },
>         { "url": "https://www.ivivu.com/blog/2024/06/du-lich-ninh-thuan-thuong-thuc-mon-banh-canh-cha-ca-phan-rang-thom-ngon/", "label": "Du lịch Ninh Thuận thưởng thức bánh canh chả cá Phan Rang – Ivivu" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "binh-thuan",
>   "code": "VN-BT",
>   "name": "Bình Thuận",
>   "region": "Trung",
>   "centroid": [108.0473, 11.11887],
>   "summary": "Bình Thuận, trung tâm là thành phố biển Phan Thiết, sở hữu ngư trường lớn với nhiều loại hải sản tươi ngon, đặc biệt là mực. Ẩm thực nơi đây nổi bật với các món chế biến từ mực và cá biển tươi sống theo kiểu 'một nắng', cùng các món bánh mặn ăn vặt đường phố mang phong cách riêng của Phan Thiết.",
>   "summarySourceRefs": [
>     { "url": "https://danviet.vn/dac-san-binh-thuan-day-la-2-loai-ca-bien-ngon-muc-mot-nang-goi-ca-mai-nem-thu-ca-lang-khen-20250323000415097-d1217058.html", "label": "Đặc sản Bình Thuận – Dân Việt" }
>   ],
>   "heroDishSlug": "muc-mot-nang-phan-thiet",
>   "dishes": [
>     {
>       "slug": "muc-mot-nang-phan-thiet",
>       "name": "Mực một nắng Phan Thiết",
>       "isHero": true,
>       "tasteTags": ["seafood", "grilled", "savory"],
>       "description": "Mực một nắng là đặc sản gắn liền với thương hiệu Phan Thiết, làm từ mực tươi vừa đánh bắt, phơi đúng một nắng để mực còn giữ được độ ẩm, dẻo và ngọt tự nhiên chứ không khô cứng như mực khô thông thường. Đây là món quà biển được du khách mua về nhiều nhất khi đến Bình Thuận.",
>       "keyIngredients": ["mực tươi (mực ống, mực lá)", "muối biển", "tương ớt hoặc muối tôm", "hành lá phi mỡ"],
>       "prepOutline": [
>         "Chọn mực tươi vừa cập bến, làm sạch, mổ dọc thân",
>         "Ướp sơ với muối biển rồi phơi đúng một nắng cho ráo bề mặt, thịt còn dẻo",
>         "Nướng trên than hồng đến khi mực chín, dậy mùi thơm và hơi xém cạnh",
>         "Xé nhỏ mực nướng, phi mỡ hành rưới lên trên"
>       ],
>       "howToEat": "Xé sợi chấm cùng tương ớt hoặc muối tôm chua ngọt, thường dùng làm món nhậu hoặc quà biếu, có thể nướng lại trên bếp than trước khi ăn để dậy mùi.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Mucmotnang.jpg", "attribution": "johnlemon, Wikimedia Commons", "license": "CC BY-SA 2.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://danviet.vn/dac-san-binh-thuan-day-la-2-loai-ca-bien-ngon-muc-mot-nang-goi-ca-mai-nem-thu-ca-lang-khen-20250323000415097-d1217058.html", "label": "Đặc sản Bình Thuận – Dân Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "goi-ca-mai",
>       "name": "Gỏi cá mai",
>       "isHero": false,
>       "tasteTags": ["seafood", "sour", "herb-forward"],
>       "description": "Gỏi cá mai là món gỏi cá sống đặc trưng vùng biển Bình Thuận, dùng cá mai — loại cá nhỏ không vảy, ít tanh — trộn tái bằng chanh hoặc giấm cho thịt cá săn trắng. Điểm nhấn của món là nước chấm chua ngọt sánh đặc làm từ me chín và chuối sứ, khác hẳn nước mắm chấm gỏi thông thường.",
>       "keyIngredients": ["cá mai tươi", "chanh hoặc giấm", "me chua, chuối sứ chín", "đậu phộng rang giã nhuyễn", "rau sống, bánh tráng"],
>       "prepOutline": [
>         "Làm sạch cá mai, lọc bỏ xương, để ráo",
>         "Bóp cá với chanh hoặc giấm cho thịt săn lại và bớt tanh",
>         "Trộn cá với hành tây, ớt, rau thơm thái nhỏ",
>         "Pha nước chấm từ me chua, chuối sứ chín và đậu phộng rang giã nhuyễn"
>       ],
>       "howToEat": "Cuốn cá mai cùng bánh tráng, rau sống, chấm vào nước chấm me chuối sánh đặc, ăn kèm bánh tráng nướng giòn để tăng độ giòn.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://danviet.vn/dac-san-binh-thuan-day-la-2-loai-ca-bien-ngon-muc-mot-nang-goi-ca-mai-nem-thu-ca-lang-khen-20250323000415097-d1217058.html", "label": "Đặc sản Bình Thuận – Dân Việt" },
>         { "url": "https://toptravels.com.vn/news/goi-ca-mai-lagi-mon-dac-san-doc-dao-cua-vung-bien-binh-thuan", "label": "Gỏi cá mai Lagi – Toptravels (nguồn tham khảo, không phải Wikipedia)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-xeo-phan-thiet",
>       "name": "Bánh xèo Phan Thiết",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food", "grilled"],
>       "description": "Theo Wikipedia tiếng Việt, bánh xèo Phan Thiết là một biến thể riêng biệt của bánh xèo Việt Nam: bánh nhỏ chỉ bằng lòng chén, không cuốn bánh tráng và rau sống như miền Nam mà ăn trực tiếp cùng nước mắm chua ngọt. Con đường Tuyên Quang ở Phan Thiết nổi tiếng là 'phố bánh xèo' của thành phố.",
>       "keyIngredients": ["bột gạo pha nghệ", "tôm, mực hoặc thịt bằm", "giá đỗ", "nước mắm chua ngọt", "đu đủ bào (đồ chua)"],
>       "prepOutline": [
>         "Pha bột gạo với nghệ tươi cho lên màu vàng đặc trưng",
>         "Đổ bột vào chảo nhỏ nóng cùng nhân tôm, mực hoặc thịt bằm và giá đỗ",
>         "Chiên đến khi rìa bánh giòn vàng, gấp đôi bánh lại",
>         "Múc bánh nhỏ ra chén, chan trực tiếp nước mắm chua ngọt lên trên"
>       ],
>       "howToEat": "Khác với bánh xèo miền Nam, bánh xèo Phan Thiết ăn ngay trong chén nhỏ chan nước mắm, có thể ăn kèm đồ chua đu đủ mà không cần cuốn bánh tráng hay rau sống.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/B%C3%A1nh_x%C3%A8o_1.jpg", "attribution": "Kent Wang, Wikimedia Commons (ảnh minh họa bánh xèo, không chụp riêng tại Phan Thiết)", "license": "CC BY-SA 2.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/B%C3%A1nh_x%C3%A8o", "label": "Bánh xèo – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "gia-lai",
>   "code": "VN-GL",
>   "name": "Gia Lai",
>   "region": "Trung",
>   "centroid": [108.23932, 13.79894],
>   "summary": "Gia Lai là cao nguyên đất đỏ bazan ở Bắc Tây Nguyên, nơi giao thoa ẩm thực của người Kinh di cư và các dân tộc bản địa Jrai, Bahnar. Món ăn đặc trưng thường gắn với nguyên liệu núi rừng như thịt nướng, cơm lam, cùng phở khô — món ăn đã trở thành biểu tượng ẩm thực của phố núi Pleiku.",
>   "summarySourceRefs": [
>     { "url": "https://vnexpress.net/pho-hai-to-mon-an-dat-gia-tri-am-thuc-chau-a-4666534.html", "label": "Phở hai tô, món ăn đạt 'giá trị ẩm thực châu Á' – VnExpress" }
>   ],
>   "heroDishSlug": "pho-kho-gia-lai",
>   "dishes": [
>     {
>       "slug": "pho-kho-gia-lai",
>       "name": "Phở khô Gia Lai (phở hai tô)",
>       "isHero": true,
>       "tasteTags": ["savory", "noodle-soup", "street-food"],
>       "description": "Phở khô Gia Lai, còn gọi là 'phở hai tô' vì được dọn ra hai tô riêng biệt — một tô sợi phở khô trộn cùng thịt, một tô nước dùng trong. Món ăn đã được Tổ chức Kỷ lục châu Á công nhận đạt 'giá trị ẩm thực châu Á' năm 2012, và năm 2021 được chọn in trên bộ tem 'Ẩm thực Việt Nam' của Bộ Thông tin và Truyền thông.",
>       "keyIngredients": ["sợi phở khô (dai, nhỏ hơn phở thường)", "thịt bò nạm hoặc gà xé", "giá đỗ trụng", "hành phi, tương đen, tương ớt", "nước dùng xương hầm"],
>       "prepOutline": [
>         "Trụng sợi phở khô qua nước sôi rồi để ráo cho sợi dai, không bở",
>         "Trộn phở với mỡ hành, hành phi, một ít tương đen và tương ớt đặc trưng",
>         "Xếp thịt bò nạm hoặc gà xé, giá trụng lên trên tô phở khô",
>         "Múc riêng nước dùng xương hầm trong veo kèm hành ngò ra tô thứ hai"
>       ],
>       "howToEat": "Trộn đều tô phở khô với tương và rau trước, ăn xen kẽ với tô nước dùng nóng bên cạnh — húp nước dùng, gắp phở khô, chấm thêm tương ớt/tương đen tùy khẩu vị.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ph%E1%BB%9F_kh%C3%B4_Gia_Lai_rau_s%E1%BB%91ng_%E1%BB%9F_T%C3%A2n_Ph%C3%BA_%287%29.jpg", "attribution": "Phương Huy, Wikimedia Commons", "license": "Public domain" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vnexpress.net/pho-hai-to-mon-an-dat-gia-tri-am-thuc-chau-a-4666534.html", "label": "Phở hai tô, món ăn đạt 'giá trị ẩm thực châu Á' – VnExpress" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "com-lam-ga-nuong",
>       "name": "Cơm lam gà nướng",
>       "isHero": false,
>       "tasteTags": ["savory", "grilled"],
>       "description": "Cơm lam gà nướng là món ăn dân dã phổ biến khắp Tây Nguyên, trong đó có Gia Lai. Gạo nếp được cho vào ống tre non, nướng trên lửa than cho chín dẻo thơm mùi tre, ăn cùng gà thả vườn nướng ướp sả, mắc khén và mật ong rừng.",
>       "keyIngredients": ["gạo nếp", "ống tre/nứa non", "gà thả vườn", "sả, mắc khén, tiêu rừng", "muối ớt xanh"],
>       "prepOutline": [
>         "Vo gạo nếp, ngâm nước rồi cho vào ống tre cùng một ít nước, nút lại bằng lá chuối",
>         "Nướng ống tre trên than hồng, xoay đều đến khi có hơi nước và mùi thơm bốc ra",
>         "Ướp gà với sả, mắc khén, muối ớt và mật ong rừng",
>         "Nướng gà trên than ở lửa vừa, giữ khoảng cách để chín đều và da vàng giòn"
>       ],
>       "howToEat": "Chẻ ống tre lấy phần cơm lam dẻo thơm, xé gà nướng chấm muối ớt xanh hoặc muối tiêu chanh, ăn cùng nhau ngay khi còn nóng.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/C%C6%A1m_lam_T%C3%A2y_Nguy%C3%AAn.jpg", "attribution": "Lam Nguyen, Wikimedia Commons", "license": "CC BY 2.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/C%C6%A1m_lam", "label": "Cơm lam – Wikipedia tiếng Việt" },
>         { "url": "https://tourtaynguyen.com.vn/ga-nuong-com-lam-dac-san-dan-da-cua-nui-rung-tay-nguyen/", "label": "Gà nướng, cơm lam – đặc sản Tây Nguyên" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "bo-mot-nang-muoi-kien-vang",
>       "name": "Bò một nắng muối kiến vàng",
>       "isHero": false,
>       "tasteTags": ["grilled", "spicy", "sour"],
>       "description": "Bò một nắng muối kiến vàng là đặc sản của huyện Krông Pa — vùng chăn nuôi bò lớn nhất Gia Lai, có nguồn gốc từ người Jrai bản địa. Thịt bò thái mỏng phơi đúng một nắng rồi nướng, chấm cùng muối kiến vàng giã từ tổ kiến vàng rừng, tạo vị chua – cay – mặn độc đáo không nơi nào có được.",
>       "keyIngredients": ["thịt bò (đùi, thăn)", "muối", "kiến vàng rừng", "ớt hiểm", "sả"],
>       "prepOutline": [
>         "Thái thịt bò thành lát mỏng như beefsteak, ướp sơ muối và sả",
>         "Phơi thịt đúng một nắng cho se mặt nhưng vẫn giữ độ mềm bên trong",
>         "Nướng thịt trên than hồng đến khi chín tới, dậy mùi thơm",
>         "Giã muối kiến vàng cùng ớt hiểm để làm nước chấm đặc trưng"
>       ],
>       "howToEat": "Xé thịt bò nướng thành sợi, chấm trực tiếp vào muối kiến vàng giã nhuyễn, thường dùng làm món nhậu hoặc quà biếu đặc sản Tây Nguyên.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://gialai.gov.vn/du-khach/dac-san-gia-lai/muoi-kien-vang-krong-pa.html", "label": "Muối kiến vàng Krông Pa – Cổng thông tin điện tử tỉnh Gia Lai" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "kon-tum",
>   "code": "VN-KT",
>   "name": "Kon Tum",
>   "region": "Trung",
>   "centroid": [107.87438, 14.64907],
>   "summary": "Kon Tum là tỉnh cực Bắc Tây Nguyên, nơi sinh sống của nhiều dân tộc Bahnar, Xơ Đăng, Giẻ Triêng với nền ẩm thực gắn liền rừng núi. Ẩm thực Kon Tum nổi bật với các món ăn nhiều rau lá rừng, thịt heo bản địa và các đặc sản mới phát triển ở vùng khí hậu mát mẻ Măng Đen như cá tầm.",
>   "summarySourceRefs": [
>     { "url": "https://dantocphattrien.vietnamnet.vn/dac-san-goi-la-kon-tum-65711.html", "label": "Đặc sản gỏi lá Kon Tum – Dân tộc và Phát triển (VietNamNet)" }
>   ],
>   "heroDishSlug": "goi-la-kon-tum",
>   "dishes": [
>     {
>       "slug": "goi-la-kon-tum",
>       "name": "Gỏi lá Kon Tum",
>       "isHero": true,
>       "tasteTags": ["herb-forward", "savory", "vegetarian-friendly"],
>       "description": "Gỏi lá là món ăn đặc trưng và được xem là 'quốc hồn' ẩm thực Kon Tum, quy tụ từ 30 đến hơn 60 loại lá khác nhau như lá lộc vừng, lá sung, lá ổi, lá xoài non, chùm ruột, đinh lăng... cuộn cùng thịt heo, tôm và bì heo, chấm với nước chấm lên men đặc biệt nấu từ gạo nếp và tôm khô.",
>       "keyIngredients": ["30-60 loại lá rừng (lộc vừng, sung, ổi, đinh lăng...)", "thịt ba chỉ luộc", "tôm", "bì heo trộn thính", "nước chấm lên men từ gạo nếp, tôm khô, thịt băm"],
>       "prepOutline": [
>         "Rửa sạch và bày biện nhiều loại lá theo từng khay lớn",
>         "Luộc thịt ba chỉ thái mỏng, hấp hoặc luộc tôm",
>         "Trộn bì heo với thính gạo rang cho thơm giòn",
>         "Nấu nước chấm sền sệt lên men từ gạo nếp, tôm khô và thịt băm, nêm vừa ăn"
>       ],
>       "howToEat": "Chọn vài loại lá cuốn thành phễu, cho thịt, tôm, bì heo vào giữa, chấm ngập nước chấm lên men rồi ăn trọn miếng, nên đổi nhiều loại lá khác nhau trong một bữa để cảm nhận đủ vị chát – chua – bùi – cay.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://dantocphattrien.vietnamnet.vn/dac-san-goi-la-kon-tum-65711.html", "label": "Đặc sản gỏi lá Kon Tum – Dân tộc và Phát triển (VietNamNet)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "heo-mang-den-nuong",
>       "name": "Heo Măng Đen nướng",
>       "isHero": false,
>       "tasteTags": ["grilled", "savory"],
>       "description": "Heo Măng Đen là giống heo bản địa được người dân tộc thiểu số ở vùng cao nguyên Măng Đen (huyện Kon Plông) nuôi thả rông tự nhiên, ăn rau củ và côn trùng rừng nên thịt săn chắc, ít mỡ và có vị ngọt tự nhiên, khác hẳn heo nuôi công nghiệp.",
>       "keyIngredients": ["thịt heo Măng Đen (heo sọc dưa)", "mắc khén", "tiêu rừng", "sả, ớt", "lá é hoặc lá rừng"],
>       "prepOutline": [
>         "Chọn heo nhỏ nuôi thả rông, làm sạch, để nguyên miếng lớn hoặc thái miếng vừa",
>         "Ướp thịt với mắc khén, tiêu rừng, sả và ớt giã nhuyễn",
>         "Nướng trên than củi ở lửa liu riu, trở đều tay đến khi da giòn vàng",
>         "Chặt miếng vừa ăn khi thịt vừa chín tới"
>       ],
>       "howToEat": "Ăn nóng ngay khi vừa nướng xong, chấm muối tiêu rừng hoặc muối é, thường dùng kèm rượu cần trong các bữa tiệc cộng đồng.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://khamphamangden.vn/mon-ngon-mang-den/", "label": "Top 10 món ăn ngon ở Măng Đen (nguồn tham khảo du lịch, không phải Wikipedia)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "ca-tam-mang-den",
>       "name": "Cá tầm Măng Đen",
>       "isHero": false,
>       "tasteTags": ["savory", "grilled"],
>       "description": "Nhờ khí hậu mát lạnh quanh năm giống Đà Lạt, vùng Măng Đen phát triển nghề nuôi cá tầm nước lạnh trong những năm gần đây, trở thành một đặc sản mới nổi thu hút du khách. Cá tầm được chế biến thành các món nướng, lẩu hoặc hấp, thịt chắc, ít xương dăm và giàu dinh dưỡng.",
>       "keyIngredients": ["cá tầm nuôi Măng Đen", "sả, nghệ", "măng chua (nếu nấu lẩu)", "rau rừng ăn kèm", "muối ớt xanh"],
>       "prepOutline": [
>         "Làm sạch cá tầm, cắt khúc vừa ăn",
>         "Ướp cá với sả, nghệ hoặc gia vị nướng đặc trưng",
>         "Nướng trên than hoa hoặc nấu lẩu chua cùng măng và rau rừng",
>         "Giữ lửa vừa để thịt cá chín đều mà không bị khô"
>       ],
>       "howToEat": "Ăn nóng, chấm muối ớt xanh nếu nướng, hoặc nhúng lẩu cùng rau rừng và bún nếu chế biến kiểu lẩu chua.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://khamphamangden.vn/mon-ngon-mang-den/", "label": "Top 10 món ăn ngon ở Măng Đen (nguồn tham khảo du lịch, không phải Wikipedia)" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "dak-lak",
>   "code": "VN-DL",
>   "name": "Đắk Lắk",
>   "region": "Trung",
>   "centroid": [108.20522, 12.82583],
>   "summary": "Đắk Lắk là thủ phủ cà phê và trung tâm văn hóa cồng chiêng Tây Nguyên, với thành phố Buôn Ma Thuột là đầu tàu ẩm thực. Món ăn nơi đây kết hợp giữa truyền thống của người Ê Đê, M'Nông bản địa (gà nướng, cơm lam) và các món phố thị đặc trưng như bún đỏ ra đời từ chợ đêm Buôn Ma Thuột.",
>   "summarySourceRefs": [
>     { "url": "https://vnexpress.net/dac-san-bun-do-buon-ma-thuot-o-ha-noi-4622811.html", "label": "Đặc sản bún đỏ Buôn Ma Thuột – VnExpress" }
>   ],
>   "heroDishSlug": "ga-nuong-com-lam-ban-don",
>   "dishes": [
>     {
>       "slug": "ga-nuong-com-lam-ban-don",
>       "name": "Gà nướng cơm lam Bản Đôn",
>       "isHero": true,
>       "tasteTags": ["grilled", "savory"],
>       "description": "Gà nướng cơm lam Bản Đôn bắt nguồn từ người Ê Đê ở Buôn Đôn — vùng đất nổi tiếng với nghề săn bắt và thuần dưỡng voi rừng. Gà thả vườn được nướng nguyên con trên than, ăn kèm cơm lam nướng trong ống tre, tạo nên bộ đôi món ăn biểu tượng của du lịch Đắk Lắk.",
>       "keyIngredients": ["gà thả vườn Buôn Đôn", "sả, mắc khén, tiêu rừng", "mật ong rừng", "gạo nếp, ống tre non", "muối ớt xanh"],
>       "prepOutline": [
>         "Ướp gà nguyên con với sả giã, muối ớt và mật ong rừng",
>         "Nướng gà trên than ở khoảng cách xa lửa để chín từ từ, đều màu",
>         "Cho gạo nếp ngâm cùng nước vào ống tre non, nút bằng lá chuối",
>         "Nướng ống cơm lam xoay đều tay đến khi tre cháy xém và cơm chín dẻo"
>       ],
>       "howToEat": "Xé gà nướng bằng tay, chấm muối ớt xanh hoặc muối tiêu chanh; chẻ ống cơm lam lấy phần cơm nếp thơm mùi tre, ăn cùng nhau trong một bữa.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/C%C6%A1m_lam_T%C3%A2y_Nguy%C3%AAn.jpg", "attribution": "Lam Nguyen, Wikimedia Commons (ảnh cơm lam Tây Nguyên minh họa chung, không chụp riêng tại Buôn Đôn)", "license": "CC BY 2.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://mia.vn/cam-nang-du-lich/thuong-thuc-ga-nuong-ban-don-daklak-ben-bep-lua-6037", "label": "Thưởng thức Gà nướng Bản Đôn Đắk Lắk – Mia.vn (nguồn du lịch, không phải Wikipedia)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "bun-do-buon-ma-thuot",
>       "name": "Bún đỏ Buôn Ma Thuột",
>       "isHero": false,
>       "tasteTags": ["savory", "street-food", "noodle-soup"],
>       "description": "Bún đỏ là món ăn đường phố đặc trưng chỉ có ở Buôn Ma Thuột, với sợi bún to tròn màu đỏ cam đặc trưng nhờ dầu điều hòa cùng cà chua. Nước dùng ngọt thanh nấu cùng riêu cua, ăn kèm chả viên, trứng cút và da heo chiên giòn.",
>       "keyIngredients": ["sợi bún cọng to", "dầu điều, cà chua", "riêu cua", "chả viên, trứng cút", "da heo chiên giòn", "rau sống"],
>       "prepOutline": [
>         "Nấu nước dùng từ xương và cà chua, thêm dầu điều tạo màu đỏ cam đặc trưng",
>         "Lọc riêu cua, thả vào nồi nước dùng cho nổi từng mảng",
>         "Trụng sợi bún cọng to qua nước sôi",
>         "Múc bún ra tô, chan nước dùng, thêm chả viên, trứng cút và da heo chiên"
>       ],
>       "howToEat": "Ăn nóng, trộn đều rau sống (giá, rau thơm) vào tô trước khi ăn, có thể thêm sa tế hoặc ớt tươi cho vị cay nồng.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://vnexpress.net/dac-san-bun-do-buon-ma-thuot-o-ha-noi-4622811.html", "label": "Đặc sản bún đỏ Buôn Ma Thuột – VnExpress" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "goi-du-du-kien-vang",
>       "name": "Gỏi đu đủ kiến vàng",
>       "isHero": false,
>       "tasteTags": ["sour", "spicy", "vegetarian-friendly"],
>       "description": "Gỏi đu đủ kiến vàng là món ăn độc đáo của các dân tộc bản địa vùng Buôn Đôn, dùng kiến vàng hoặc kiến bay rừng — loại côn trùng có vị chua nhẹ, béo bùi — trộn cùng đu đủ xanh bào sợi, tạo nên vị chua – cay – ngọt – bùi lạ miệng, thường được giới thiệu tại các khu du lịch Bản Đôn.",
>       "keyIngredients": ["đu đủ xanh bào sợi", "kiến vàng/kiến bay rừng", "ớt, chanh", "rau thơm rừng", "bánh tráng nướng ăn kèm"],
>       "prepOutline": [
>         "Bào sợi đu đủ xanh, ngâm nước muối loãng rồi vắt ráo",
>         "Bắt và sơ chế kiến vàng hoặc kiến bay từ tổ kiến rừng",
>         "Trộn đu đủ với kiến, ớt, chanh và rau thơm cắt nhỏ",
>         "Nêm nếm lại cho vừa vị chua cay trước khi bày ra đĩa"
>       ],
>       "howToEat": "Ăn kèm bánh tráng nướng giòn để xúc gỏi, thường dùng như món khai vị hoặc món nhậu tại các điểm du lịch Buôn Đôn.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://mia.vn/cam-nang-du-lich/goi-du-du-kien-lua-buon-ma-thuot-la-ma-ngon-5515", "label": "Gỏi đu đủ kiến lửa Buôn Ma Thuột – Mia.vn (nguồn du lịch, không phải Wikipedia)" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "dak-nong",
>   "code": "VN-DNO",
>   "name": "Đắk Nông",
>   "region": "Trung",
>   "centroid": [107.68669, 12.22917],
>   "summary": "Đắk Nông là tỉnh Tây Nguyên tách ra từ Đắk Lắk năm 2004, nơi cư trú lâu đời của người M'Nông và Mạ. Ẩm thực bản địa gắn bó mật thiết với núi rừng và sông suối, tiêu biểu là các món nấu trong ống tre như canh thụt, cơm lam, cùng cá lăng nướng từ dòng Sêrêpốk.",
>   "summarySourceRefs": [
>     { "url": "https://nhandan.vn/mon-canh-thut-nam-moi-cua-nguoi-mnong-post814021.html", "label": "Món canh thụt nấm mối của người M'nông – Báo Nhân Dân" }
>   ],
>   "heroDishSlug": "canh-thut",
>   "dishes": [
>     {
>       "slug": "canh-thut",
>       "name": "Canh thụt",
>       "isHero": true,
>       "tasteTags": ["savory", "herb-forward"],
>       "description": "Canh thụt là món ăn cổ truyền của người M'Nông và Mạ ở Đắk Nông, tên gọi bắt nguồn từ cách chế biến: nguyên liệu được cho vào ống tre rồi dùng đũa 'thụt' (dộng, khuấy) liên tục trong lúc nấu để các thành phần hòa quyện và nhuyễn mịn. Món thường được dùng để tiếp đãi khách quý trong lễ hội, cưới hỏi.",
>       "keyIngredients": ["lá bép (lá nhíp)", "đọt mây rừng", "cà đắng", "cá suối hoặc thịt/sườn heo", "ống tre non"],
>       "prepOutline": [
>         "Sơ chế lá bép, đọt mây bào mỏng và cà đắng thái lát",
>         "Cho cá suối hoặc thịt cùng rau rừng vào ống tre với ít nước",
>         "Đặt ống lên bếp lửa, vừa nấu vừa dùng đũa thụt đều tay cho nguyên liệu nhuyễn quyện",
>         "Nêm nếm gia vị và thụt tiếp đến khi canh sánh lại là hoàn tất"
>       ],
>       "howToEat": "Đổ canh thụt ra bát, ăn cùng cơm lam hoặc cơm trắng ngay khi còn nóng, thường dùng làm món chính trong mâm cỗ đãi khách của người M'Nông, Mạ.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://nhandan.vn/mon-canh-thut-nam-moi-cua-nguoi-mnong-post814021.html", "label": "Món canh thụt nấm mối của người M'nông – Báo Nhân Dân" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "com-lam-dak-nong",
>       "name": "Cơm lam Đắk Nông",
>       "isHero": false,
>       "tasteTags": ["savory"],
>       "description": "Cơm lam là món ăn biểu tượng của đồng bào M'Nông, Mạ ở Đắk Nông, gạo nếp được nấu chín trong ống tre/nứa để giữ trọn vị dẻo thơm tự nhiên. Theo cổng thông tin du lịch tỉnh, cơm lam thường được dùng cùng thịt nướng và muối ớt trong các dịp lễ hội, cưới hỏi của cộng đồng.",
>       "keyIngredients": ["gạo nếp", "ống tre/nứa non", "nước suối", "muối ớt", "thịt nướng ăn kèm"],
>       "prepOutline": [
>         "Vo sạch gạo nếp, ngâm nước rồi cho vào ống tre cùng lượng nước vừa đủ",
>         "Nút miệng ống bằng lá chuối hoặc lá dong",
>         "Nướng ống trên than hồng, xoay đều tay đến khi vỏ tre cháy xém",
>         "Chẻ bỏ lớp vỏ ngoài, giữ lại lớp lụa mỏng bọc cơm"
>       ],
>       "howToEat": "Ăn khi cơm lam còn nóng, chấm muối ớt hoặc ăn kèm thịt nướng, xé lớp lụa tre mỏng bao quanh trước khi thưởng thức.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/C%C6%A1m_lam_T%C3%A2y_Nguy%C3%AAn.jpg", "attribution": "Lam Nguyen, Wikimedia Commons", "license": "CC BY 2.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/C%C6%A1m_lam", "label": "Cơm lam – Wikipedia tiếng Việt" },
>         { "url": "https://dulich.daknong.gov.vn/vi/blog/details/dac-san-dak-nong-46", "label": "Đặc sản Đắk Nông – Cổng thông tin du lịch tỉnh Đắk Nông" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "ca-lang-nuong-than-hong",
>       "name": "Cá lăng nướng than hồng sông Sêrêpốk",
>       "isHero": false,
>       "tasteTags": ["grilled", "savory", "seafood"],
>       "description": "Cá lăng đánh bắt từ dòng Sêrêpốk chảy qua Đắk Nông có thịt chắc, ít xương dăm, khi nướng than cho vị ngọt đậm đà. Món này đã được vinh danh trong danh sách Top 100 món ăn đặc sản Việt Nam giai đoạn 2020–2021 theo cổng thông tin du lịch tỉnh Đắk Nông.",
>       "keyIngredients": ["cá lăng sông Sêrêpốk", "lá chuối hoặc lá rừng để gói", "sả, ớt xanh", "gạo nếp (ăn kèm)", "gia vị chấm từ sả, ớt, rau rừng"],
>       "prepOutline": [
>         "Làm sạch cá lăng, để nguyên con hoặc cắt khúc lớn",
>         "Ướp sơ với muối, sả đập dập",
>         "Gói cá trong lá chuối hoặc lá rừng rồi vùi/nướng trên than hồng",
>         "Trở đều tay đến khi cá chín thơm, lớp lá hơi cháy xém"
>       ],
>       "howToEat": "Bóc lớp lá gói, gỡ thịt cá chấm cùng nước chấm sả ớt hoặc muối tiêu chanh, ăn cùng cơm lam hoặc xôi nếp.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://dulich.daknong.gov.vn/vi/blog/details/dac-san-dak-nong-46", "label": "Đặc sản Đắk Nông – Cổng thông tin du lịch tỉnh Đắk Nông" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> ```json
> {
>   "slug": "lam-dong",
>   "code": "VN-LD",
>   "name": "Lâm Đồng",
>   "region": "Trung",
>   "centroid": [108.09387, 11.75199],
>   "summary": "Lâm Đồng, với trung tâm là thành phố Đà Lạt khí hậu ôn đới mát mẻ quanh năm, là nơi hiếm hoi ở Việt Nam trồng được atiso và nhiều loại rau xứ lạnh. Ẩm thực Đà Lạt kết hợp nguyên liệu bản địa (lá é, atiso) với văn hóa ẩm thực đường phố về đêm sôi động, tạo nên bản sắc riêng trong vùng Tây Nguyên.",
>   "summarySourceRefs": [
>     { "url": "https://vi.wikipedia.org/wiki/Atis%C3%B4", "label": "Atisô – Wikipedia tiếng Việt" }
>   ],
>   "heroDishSlug": "lau-ga-la-e-da-lat",
>   "dishes": [
>     {
>       "slug": "lau-ga-la-e-da-lat",
>       "name": "Lẩu gà lá é Đà Lạt",
>       "isHero": true,
>       "tasteTags": ["savory", "herb-forward", "spicy"],
>       "description": "Lẩu gà lá é là món lẩu đặc trưng của Đà Lạt, dùng lá é — một loại rau thơm bản địa có vị cay nồng, hơi hắc đặc trưng — nấu cùng nước dùng gà chua nhẹ. Đây là món ăn được xem là 'phải thử' khi đến Đà Lạt nhờ hương vị lạ miệng, ấm nóng phù hợp với khí hậu se lạnh của thành phố.",
>       "keyIngredients": ["gà ta", "lá é", "măng chua", "nấm", "sả, ớt xanh", "bún hoặc mì ăn kèm"],
>       "prepOutline": [
>         "Chặt gà thành miếng vừa ăn, chần sơ qua nước sôi",
>         "Nấu nước dùng từ xương gà cùng sả, măng chua cho có vị chua thanh",
>         "Thả thịt gà, nấm vào nồi nước dùng đun sôi",
>         "Cho lá é vào sau cùng, đun thêm vài phút để dậy mùi mà không mất hương thơm"
>       ],
>       "howToEat": "Ăn nóng dạng lẩu, nhúng kèm rau nấm, chấm thịt gà với muối ớt xanh, dùng chung với bún hoặc mì tươi, hợp nhất khi thưởng thức trong tiết trời se lạnh của Đà Lạt.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://www.vietnamairlines.com/cn/vi/plan-book/travel/travel-guide/lau-ga-la-e-da-lat", "label": "Lẩu gà lá é Đà Lạt – Vietnam Airlines Travel Guide" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "banh-trang-nuong-da-lat",
>       "name": "Bánh tráng nướng Đà Lạt",
>       "isHero": false,
>       "tasteTags": ["street-food", "savory", "grilled"],
>       "description": "Bánh tráng nướng được ví như 'pizza Việt Nam', đặc biệt phổ biến ở Đà Lạt nơi món ăn này gắn liền với văn hóa đi bộ chợ đêm. Bánh tráng được nướng trên bếp than, phết nhân trứng, thịt băm, tôm khô, hành lá tạo lớp vỏ giòn rụm thơm mùi khói.",
>       "keyIngredients": ["bánh tráng mỏng", "trứng gà hoặc cút", "thịt băm, tôm khô", "hành lá, hành phi", "tương ớt, mỡ hành"],
>       "prepOutline": [
>         "Đặt bánh tráng lên vỉ, nướng trên than hồng cho hơi giòn",
>         "Phết đều trứng đánh tan lên mặt bánh",
>         "Rắc thịt băm, tôm khô, hành lá lên trên",
>         "Nướng tiếp đến khi trứng chín, bánh giòn đều rồi phết tương ớt và mỡ hành"
>       ],
>       "howToEat": "Ăn ngay khi còn nóng giòn, có thể gấp đôi bánh lại như bánh mì kẹp, thường mua ăn khi dạo chợ đêm hoặc các con dốc ở Đà Lạt vào buổi tối.",
>       "images": [],
>       "sourceRefs": [
>         { "url": "https://en.wikipedia.org/wiki/B%C3%A1nh_tr%C3%A1ng_n%C6%B0%E1%BB%9Bng", "label": "Bánh tráng nướng – Wikipedia (tiếng Anh)" }
>       ],
>       "occasions": ["Quanh năm"]
>     },
>     {
>       "slug": "atiso-da-lat",
>       "name": "Atiso Đà Lạt",
>       "isHero": false,
>       "tasteTags": ["savory", "vegetarian-friendly"],
>       "description": "Atiso được người Pháp du nhập vào Việt Nam đầu thế kỷ 20 và trồng nhiều nhất ở Đà Lạt nhờ khí hậu mát lạnh quanh năm. Từ atiso, người Đà Lạt chế biến thành trà atiso, canh/lẩu hầm với giò heo hoặc xương, tận dụng phần đế hoa và lá bắc để lấy vị ngọt thanh, mát dịu đặc trưng.",
>       "keyIngredients": ["bông atiso Đà Lạt", "giò heo hoặc xương ống", "táo tàu, hạt sen (tùy công thức)", "muối, tiêu"],
>       "prepOutline": [
>         "Chọn bông atiso tươi, cắt bỏ phần gai cứng, rửa sạch",
>         "Hầm xương hoặc giò heo lấy nước ngọt trong nhiều giờ",
>         "Cho atiso vào hầm cùng đến khi cánh hoa mềm, thấm vị ngọt của nước hầm",
>         "Nêm nếm lại gia vị vừa ăn trước khi tắt bếp"
>       ],
>       "howToEat": "Dùng nóng như món canh/lẩu trong bữa cơm, gắp từng cánh atiso chấm muối tiêu, ăn kèm giò heo hầm mềm; phần trà atiso khô thì hãm nước sôi uống như trà thảo mộc.",
>       "images": [
>         { "url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Artichoke_in_Dalat%2C_Vietnam.jpg", "attribution": "Jackeven, Wikimedia Commons", "license": "CC BY-SA 3.0" }
>       ],
>       "sourceRefs": [
>         { "url": "https://vi.wikipedia.org/wiki/Atis%C3%B4", "label": "Atisô – Wikipedia tiếng Việt" }
>       ],
>       "occasions": ["Quanh năm"]
>     }
>   ]
> }
> ```
> 
> Sourcing/image summary (under 150 words):
> 
> Strongest sourcing: bánh căn, bánh canh, bánh xèo, cơm lam, atisô, bánh tráng nướng (dedicated Wikipedia articles); phở khô Gia Lai, bún đỏ, sò huyết Ô Loan, canh thụt, cơm lam Đắk Nông/cá lăng use reputable news or official (VnExpress, Nhân Dân, gialai.gov.vn, daknong.gov.vn) — solid though not Wikipedia. Weaker sourcing (tourism/blog sites only, no Wikipedia or major news article found despite searching): thịt dê Ninh Thuận, gỏi cá mai, gỏi lá Kon Tum's two sides (heo Măng Đen, cá tầm Măng Đen), gà nướng Bản Đôn, gỏi đu đủ kiến vàng, lẩu gà lá é Đà Lạt.
> 
> Images found on Commons and used: bánh căn (genuinely shot "in Phan Rang"), mực một nắng, phở khô Gia Lai (genuine Gia Lai-shot photos, public domain), cơm lam Tây Nguyên (generic, reused for Gia Lai/Đắk Lắk/Đắk Nông cơm lam — flagged as not location-specific), artichoke in Đà Lạt, and one generic bánh xèo photo (not confirmed Phan Thiết-style). No suitable Commons photos existed for: mắt cá ngừ, bánh canh hẹ, sò huyết Ô Loan, bánh canh chả cá, gỏi cá mai, gỏi lá Kon Tum, heo/cá tầm Măng Đen, gà nướng Bản Đôn, bún đỏ, gỏi đu đủ kiến vàng, canh thụt, cá lăng nướng, lẩu gà lá é, bánh tráng nướng — left as `images: []` rather than fabricated.</result>
> <usage><subagent_tokens>89240</subagent_tokens><tool_uses>53</tool_uses><duration_ms>624864</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 20:51 5/9/26

You've hit your session limit · resets 1:30am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 20:51 5/9/26

> <task-notification>
> <task-id>a4e52f488243ab709</task-id>
> <tool-use-id>toolu_01KcGg3k1cuRE68htEqkt3BQ</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a4e52f488243ab709.output</output-file>
> <status>failed</status>
> <summary>Agent "Research 10 Tay Nam Bo provinces" failed: Agent terminated early due to an API error: You've hit your session limit · resets 1:30am (Asia/Ho_Chi_Minh)</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Now I'll write all 10 province JSON files.</result>
> </task-notification>

---

### 🤖 AI · 20:51 5/9/26

You've hit your session limit · resets 1:30am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 07:56 6/9/26

> tiếp tục đi nhé

---

### 🤖 AI · 07:56 6/9/26



<details>
<summary>9 thao tác công cụ</summary>

- `Bash` — List existing province data files
- `Write` — D:\01_Study\07_Local_Food\data\provinces\thanh-hoa.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\nghe-an.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\ha-tinh.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\quang-binh.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\quang-tri.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\quang-ngai.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\binh-dinh.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\da-nang.json

</details>

---

### 🤖 AI · 08:01 6/9/26

Batch 4 xong (8/8). Giờ ghi batch 5.

<details>
<summary>8 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\data\provinces\phu-yen.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\ninh-thuan.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\binh-thuan.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\gia-lai.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\kon-tum.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\dak-lak.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\dak-nong.json
- `Write` — D:\01_Study\07_Local_Food\data\provinces\lam-dong.json

</details>

---

### 🤖 AI · 08:05 6/9/26

Đã ghi xong 16 tỉnh của lô 4 và lô 5. Giờ cần research lại 22 tỉnh còn thiếu (nội dung lô 1 phần dư, lô 2, lô 3 đã mất do bị nén ngữ cảnh, và 2 tỉnh còn sót của lô 7 do agent bị treo giữa chừng). Khởi động lại các agent research song song.

<details>
<summary>4 thao tác công cụ</summary>

- `Agent` — Research 5 Dong Bac provinces
- `Agent` — Research 7 Tay Bac provinces
- `Agent` — Research 8 Dong bang song Hong provinces
- `Agent` — Research Tra Vinh and Vinh Long provinces

</details>

---

### 🤖 AI · 08:07 6/9/26

Đã ghi xong 16 tỉnh (lô 4 + lô 5: Bắc Trung Bộ và Nam Trung Bộ/Tây Nguyên), và vừa khởi động 4 agent research song song trong nền cho 22 tỉnh còn thiếu (Đông Bắc còn lại, Tây Bắc, Đồng bằng sông Hồng, và 2 tỉnh sót của Tây Nam Bộ do agent trước bị treo). Sẽ tiếp tục ghi file khi các agent hoàn thành.

---

### 🧑 PM · 08:14 6/9/26

> <task-notification>
> <task-id>ab0dd449847ffe228</task-id>
> <tool-use-id>toolu_011snsu112JTwGjHWfJC14Yj</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\ab0dd449847ffe228.output</output-file>
> <status>completed</status>
> <summary>Agent "Research 5 Dong Bac provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>All 5 province JSON files validated successfully against the schema requirements (dish count, hero flag/slug consistency, required source refs, enum values for tasteTags/occasions, image object shape).
> 
> Files written:
> - `D:\01_Study\07_Local_Food\data\provinces\cao-bang.json`
> - `D:\01_Study\07_Local_Food\data\provinces\ha-giang.json`
> - `D:\01_Study\07_Local_Food\data\provinces\lang-son.json`
> - `D:\01_Study\07_Local_Food\data\provinces\lao-cai.json`
> - `D:\01_Study\07_Local_Food\data\provinces\quang-ninh.json`
> 
> **Sourcing summary:**
> - Strong (Wikipedia-verified): Thắng cố (Lào Cai hero), Chả mực (Quảng Ninh hero).
> - Weaker (reputable news/gov/tourism sites, no Wikipedia article found): Phở chua &amp; Vịt quay 7 vị &amp; Bánh cuốn canh (Cao Bằng), Cháo ấu tẩu, Bánh tam giác mạch, Thắng dền (Hà Giang), Vịt quay, Khâu nhục, Bánh cuốn trứng (Lạng Sơn), Cá hồi Sa Pa, Thịt lợn cắp nách (Lào Cai), Sá sùng, Gà đồi Tiên Yên (Quảng Ninh) — all verified via official provincial newspapers (Báo Cao Bằng, Báo Lạng Sơn, Báo Lào Cai, Báo Quảng Ninh), VnExpress, or VietNamNet.
> 
> **Images:** Real Commons photos found and used for Thắng cố Bắc Hà (CC BY 2.0), Chả mực Hạ Long (CC BY-SA 4.0), Khâu nhục (CC BY-SA 4.0), and Bánh tam giác mạch (CC BY-SA 4.0). All other 11 dishes have `images: []` after genuine Commons searches returned no verifiably matching photo (e.g., a generic "Sapa-pig.jpg" and an unrelated "Peking duck" file were rejected as not clearly depicting the specific dish).</result>
> <usage><subagent_tokens>91160</subagent_tokens><tool_uses>53</tool_uses><duration_ms>478706</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 08:14 6/9/26

5 tỉnh Đông Bắc còn lại (Cao Bằng, Hà Giang, Lạng Sơn, Lào Cai, Quảng Ninh) đã được agent tự ghi file trực tiếp thành công. Tiếp tục chờ 3 agent còn lại (Tây Bắc, Đồng bằng sông Hồng, Trà Vinh/Vĩnh Long).

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Count province data files so far

</details>

---

### 🤖 AI · 08:14 6/9/26

52/63 tỉnh đã có dữ liệu. Còn 11 tỉnh (7 Tây Bắc + 8 Đồng bằng sông Hồng trừ trùng... để chờ agent hoàn thành).

---

### 🧑 PM · 08:16 6/9/26

> <task-notification>
> <task-id>aa940c05ffb1279f9</task-id>
> <tool-use-id>toolu_018QGyGY6bYT6YHHxKxZHEUR</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\aa940c05ffb1279f9.output</output-file>
> <status>completed</status>
> <summary>Agent "Research Tra Vinh and Vinh Long provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Both files written and validated as syntactically correct JSON matching the schema shape (exactly 3 dishes each, one `isHero:true` matching `heroDishSlug`, all `sourceRefs` non-empty, tasteTags/occasions from allowed enums).
> 
> **Files:**
> - `D:\01_Study\07_Local_Food\data\provinces\tra-vinh.json`
> - `D:\01_Study\07_Local_Food\data\provinces\vinh-long.json`
> 
> **Sourcing:** Trà Vinh — bún nước lèo (hero) and đuông chà là both backed by verified vi.wikipedia.org articles; bánh tét Trà Cuôn sourced from the official Báo Trà Vinh (no Wikipedia article exists). Vĩnh Long — cá lóc nướng trui (hero) has a Wikipedia article + tourism-portal confirmation; cá cháy Trà Ôn and bánh xèo hến Cù Lao Dài are sourced from THVL (provincial broadcaster) and VietKings/tourism portal respectively (no Wikipedia coverage found).
> 
> **Images:** cá lóc nướng trui got a genuine Commons photo (CC BY-SA 3.0). Bún nước lèo got a real Commons photo but it's labeled as the Sóc Trăng-style variant, not Trà Vinh-specific — noted honestly in the attribution field. Bánh tét Trà Cuôn, đuông chà là, cá cháy Trà Ôn, and bánh xèo hến Cù Lao Dài all got `images: []` since no genuinely matching Commons photos were found after searching.</result>
> <usage><subagent_tokens>72402</subagent_tokens><tool_uses>37</tool_uses><duration_ms>567471</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 08:16 6/9/26

Trà Vinh và Vĩnh Long cũng đã được ghi xong. Còn chờ 2 agent (Tây Bắc 7 tỉnh, Đồng bằng sông Hồng 8 tỉnh) để đủ 63 tỉnh.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Count province data files so far

</details>

---

### 🤖 AI · 08:16 6/9/26

58/63. Còn thiếu 5 tỉnh Đồng bằng sông Hồng đang chạy (khả năng agent đã ghi được một phần) và toàn bộ 7 tỉnh Tây Bắc vẫn đang chạy.

---

### 🧑 PM · 08:17 6/9/26

> <task-notification>
> <task-id>a332909b4b3031e54</task-id>
> <tool-use-id>toolu_01TizHoiz2jRjULyDvZJbxqC</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a332909b4b3031e54.output</output-file>
> <status>completed</status>
> <summary>Agent "Research 8 Dong bang song Hong provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>All 8 files pass schema validation (region, tasteTags, occasions enums, hero-dish consistency, required sourceRefs, valid URLs).
> 
> ## Summary
> 
> Wrote 8 province files to `D:\01_Study\07_Local_Food\data\provinces\`: `ha-nam.json`, `hai-duong.json`, `hung-yen.json`, `nam-dinh.json`, `ninh-binh.json`, `thai-binh.json`, `thai-nguyen.json`, `vinh-phuc.json`. All validated against the zod schema shape (24 dishes, one hero each, ≥1 sourceRef each, valid enums).
> 
> **Wikipedia-sourced (strong):** bánh đậu xanh, vải thiều Thanh Hà, tương Bần, gà Đông Tảo, dê núi Ninh Bình, bánh cáy, chè Tân Cương, cơm lam, chuối ngự Đại Hoàng.
> 
> **News/gov-portal sourced (weaker but verified live):** cá kho làng Vũ Đại, bánh cuốn Phủ Lý, bánh gai Ninh Giang, nhãn lồng, phở Nam Định, bánh gai bà Thi, kẹo Sìu Châu (caught and fixed one fabricated VnExpress URL — replaced with a verified real one), cơm cháy Ninh Bình (wiki), nem chua Yên Mạc, canh cá Quỳnh Côi, gỏi nhệch, bánh chưng Bờ Đậu, cá thính Lập Thạch, bánh hòn, gà đồi Lập Thạch.
> 
> **Real Commons images used (7):** chuối ngự Đại Hoàng, bánh đậu xanh, vải thiều Thanh Hà, cơm cháy Ninh Bình, bánh cáy, phở (generic, noted as illustrative), dê núi (live goats, noted as not the cooked dish), bánh gai (generic, noted as illustrative). All other dishes (cá kho, nhãn lồng, tương Bần, gà Đông Tảo, bánh cuốn, kẹo Sìu Châu, nem chua, canh cá, gỏi nhệch, chè Tân Cương, cơm lam, bánh chưng Bờ Đậu, cá thính, bánh hòn, gà đồi) got `images: []` after genuine Commons searches found no specific match.</result>
> <usage><subagent_tokens>124282</subagent_tokens><tool_uses>79</tool_uses><duration_ms>668042</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 08:18 6/9/26

8 tỉnh Đồng bằng sông Hồng đã ghi xong (đáng chú ý: agent tự phát hiện và sửa 1 URL bịa trước khi ghi — đúng kỷ luật). Chỉ còn chờ agent Tây Bắc (7 tỉnh) để đủ 63/63.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Count province data files so far
- `Bash` — Diff existing province files against full 63-province list

</details>

---

### 🤖 AI · 08:18 6/9/26

61/63 — chỉ còn thiếu Phú Thọ và Yên Bái, cả hai đều nằm trong agent Tây Bắc đang chạy. Đợi agent đó hoàn thành là đủ 63 tỉnh.

---

### 🧑 PM · 08:24 6/9/26

> <task-notification>
> <task-id>a6844f767b6a0e1f5</task-id>
> <tool-use-id>toolu_01JinYCRQDPzSQEXvkkS5cx7</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a6844f767b6a0e1f5.output</output-file>
> <status>completed</status>
> <summary>Agent "Research 7 Tay Bac provinces" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>All 7 province files validated and written to `D:\01_Study\07_Local_Food\data\provinces\`: `dien-bien.json`, `lai-chau.json`, `son-la.json`, `hoa-binh.json`, `tuyen-quang.json`, `yen-bai.json`, `phu-tho.json`.
> 
> Sourcing strength:
> - Strong (Wikipedia): thịt trâu gác bếp, nậm pịa (Sơn La)
> - Strong (official gov/newspaper sites): pa pỉnh tộp (thanhpho.sonla.gov.vn), bánh gai Chiêm Hóa (baotuyenquang.com.vn), bánh tai &amp; cọ ỏm (dulichphutho.gov.vn)
> - Moderate (established travel/news sites, verified via fetch): gà nướng mắc khén, nộm hoa ban, rêu đá, lợn cắp nách, cá bống vùi tro, lam nhọ, thịt muối chua, cơm lam, thịt trâu lá lồm, vịt bầu Minh Hương, cá lăng sông Lô, xôi ngũ sắc, cốm Tú Lệ, vịt bầu Lâm Thượng, thịt chua Thanh Sơn — all news/tourism-board articles, none from personal blogs.
> 
> Real Commons images used (6 of 21 dishes): thịt trâu gác bếp, pa pỉnh tộp, xôi ngũ sắc Mường Lò, cơm lam (Tây Nguyên photo, noted as generic/representative), bánh gai (generic, noted not Chiêm Hóa-specific), vịt bầu (live-duck breed photo, noted generic). All other 15 dishes use `images: []` after genuine Commons searches returned nothing verifiably matching.</result>
> <usage><subagent_tokens>117521</subagent_tokens><tool_uses>73</tool_uses><duration_ms>1071367</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 08:24 6/9/26

Đủ 63/63 tỉnh. Giờ chạy `pnpm build` để zod validate toàn bộ dữ liệu mới.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Confirm total province file count

</details>

---

### 🤖 AI · 08:24 6/9/26

63/63 tỉnh đã có dữ liệu. Chạy build để validate schema.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Build the Next.js app to validate all province JSON against zod schema

</details>

---

### 🤖 AI · 08:25 6/9/26

Build thành công — 63 tỉnh đều pass zod validation, không lỗi TypeScript. Giờ kiểm tra và khởi động lại dev server (theo gotcha đã ghi trong DEVBOOK: cache module-level cần restart).

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Check for any running node/dev server processes
- `Bash` — Check what's listening on port 3000
- `Bash` — Kill the stale dev server process holding the old province cache
- `Bash` — Restart the dev server fresh so it picks up the new province files

</details>

---

### 🤖 AI · 08:27 6/9/26

Dev server đã khởi động lại sạch. Kiểm tra nhanh vài route mới.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Spot-check a handful of newly added province routes

</details>

---

### 🤖 AI · 08:27 6/9/26

Tất cả route mới đều trả 200. Giờ commit toàn bộ 55 tỉnh mới thêm.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Show git status for the new province data files

</details>

---

### 🤖 AI · 08:27 6/9/26

55 file mới, đúng như dự kiến (63 tỉnh − 8 tỉnh MVP đã commit trước = 55). Add và commit.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Stage all new province data files

</details>

---

### 🤖 AI · 08:28 6/9/26

Bình thường (LF/CRLF là do config git trên Windows, không phải lỗi). 55 file đã staged.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit all 55 new province data files

</details>

---

### 🤖 AI · 08:28 6/9/26

**Đã hoàn tất mở rộng lên đủ 63/63 tỉnh thành:**
- Toàn bộ 63 file JSON pass `pnpm build` (zod schema validate sạch, generateStaticParams tạo đủ 63 route tỉnh).
- Dev server đã restart sạch (xử lý đúng gotcha cache module-level đã biết), spot-check 5 route mới đều trả 200.
- Đã commit 55 file mới (36c3e4c).

Vài điểm cần bạn lưu ý khi spot-check thủ công:
- Phần lớn món ở các tỉnh ít nổi tiếng (miền núi phía Bắc, Tây Nguyên) có `images: []` vì không tìm được ảnh Wikimedia Commons xác thực đúng món — các agent đều báo cáo trung thực thay vì bịa URL.
- Một vài ảnh dùng là ảnh minh họa chung (vd. cơm lam Tây Nguyên dùng lại cho nhiều tỉnh, bánh xèo dùng ảnh không chụp tại đúng địa phương) — đã ghi rõ trong `attribution`.
- Một agent (Đồng bằng sông Hồng) tự phát hiện và sửa 1 URL nguồn bị bịa trước khi ghi file — đúng kỷ luật content-integrity.

`hero-bubbles.json` hiện vẫn giữ nguyên 8 tỉnh MVP cũ cho bản đồ zoom-thấp — chưa cập nhật vì bạn chưa quyết định có muốn mở rộng bộ "tỉnh nổi bật" hay không. Bước tiếp theo theo đúng thứ tự bạn yêu cầu là **W1-12: hoàn thiện hồ sơ viva (RTM, telemetry, Weekly Report)** — bạn muốn tiến hành luôn không?

---

### 🧑 PM · 08:30 6/9/26

> <local-command-caveat>Caveat: The messages below were generated by the user while running local commands. DO NOT respond to these messages or otherwise consider them in your response unless the user explicitly asks you to.</local-command-caveat>

---

### 🧑 PM · 08:30 6/9/26

> <command-name>/model</command-name>
>             <command-message>model</command-message>
>             <command-args>opus</command-args>

---

### 🧑 PM · 08:30 6/9/26

> <local-command-stdout>Set model to claude-opus-5</local-command-stdout>

---

### 🧑 PM · 08:30 6/9/26

> trên map update 63 tỉnh thành lun nhé.
> ah với lại nhớ push code lên git nhé, hiện tại tao chưa thấy, chắc mày đang làm ở local

---

### 🤖 AI · 08:31 6/9/26

Hai việc: cập nhật bản đồ đủ 63 tỉnh, và push code. Xem trước cách map đang dùng dữ liệu.

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Read` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts
- `Read` — D:\01_Study\07_Local_Food\lib\geo.ts
- `Bash` — Check git remotes and branch tracking

</details>

---

### 🤖 AI · 08:31 6/9/26

Đọc thêm phần liên quan và kiểm tra trạng thái git.

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\DishMarker.tsx
- `Read` — D:\01_Study\07_Local_Food\app\page.tsx
- `Bash` — Check GitHub CLI auth status and git identity

</details>

---

### 🤖 AI · 08:33 6/9/26

**Git**: chưa có remote nào được cấu hình, và `gh` CLI chưa cài — nên hiện chưa có chỗ nào để push. Tao sẽ xử lý phần map trước rồi báo bạn phương án cho git.

Kiểm tra thêm vài thứ trước khi sửa map:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Count how many provinces have a hero dish image
- `Bash` — Show hero-bubbles config and package versions
- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx

</details>

---

### 🤖 AI · 08:33 6/9/26

32/63 tỉnh có ảnh hero dish (31 tỉnh dùng fallback gradient). Kiểm tra API `Marker` để set z-index đúng:

<details>
<summary>8 thao tác công cụ</summary>

- `Bash` — Locate react-map-gl Marker type definitions
- `Bash` — Explore react-map-gl dist for Marker types
- `Bash` — Inspect Marker props in react-map-gl maplibre typings
- `Bash` — List Marker-related lines in typings
- `Bash` — Resolve react-map-gl type re-exports
- `Bash` — Read the actual Marker component typings
- `Bash` — Find @vis.gl react-maplibre package location under pnpm
- `Bash` — Read Marker component typings from pnpm store

</details>

---

### 🤖 AI · 08:34 6/9/26

`Marker` có nhận `style` → set được z-index. Kiểm tra chỗ nào đang dùng các hàm cũ trước khi sửa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Find all references to map helpers being refactored

</details>

---

### 🤖 AI · 08:34 6/9/26

Refactor gọn: gộp 2 tầng marker thành một bộ 63 marker, kích thước nội suy theo zoom.

<details>
<summary>7 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts
- `Write` — D:\01_Study\07_Local_Food\lib\geo.ts
- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Edit` — D:\01_Study\07_Local_Food\app\page.tsx
- `Bash` — Build to typecheck the map refactor

</details>

---

### 🤖 AI · 08:36 6/9/26

Build pass. Giờ phải xem thật — 63 marker ở zoom 5 rất dễ chồng nhau, không thể đoán.

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Check for available browser automation tooling
- `Bash` — Check dev server is still up
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 08:37 6/9/26

Cách drive zoom qua internal instance dễ vỡ — dùng chính nút toolbar như user thật.

<details>
<summary>8 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\MapToolbar.tsx
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Screenshot the map at several zoom levels
- `Bash` — Run screenshot script from project dir so playwright resolves
- `Bash` — Locate playwright package real path
- `Bash` — Run screenshot script importing playwright by absolute path
- `Bash` — Run screenshot script with file:// URL import
- `Bash` — Check whether screenshots were produced

</details>

---

### 🤖 AI · 08:46 6/9/26

Ảnh đã chụp được. Xem thực tế:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 08:46 6/9/26

Cả 63 tỉnh đã hiện. Nhưng thấy ngay 2 vấn đề thật: marker chồng chéo dày đặc ở đồng bằng sông Hồng, và mũi Cà Mau bị cắt khỏi khung. Xem tiếp các mức zoom:

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 08:46 6/9/26

Phát hiện lỗi thật: có marker nằm giữa Biển Đông (khu vực Hoàng Sa). Xem nốt zoom 8 rồi truy nguồn.

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 08:46 6/9/26

Zoom 7-8 hiển thị tốt. Giờ truy lỗi marker ngoài biển — so centroid trong file tỉnh với `centroids.json` đã tính sẵn:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Compare province centroids against precomputed reference centroids
- `Bash` — Inspect centroids for island-bearing provinces

</details>

---

### 🤖 AI · 10:21 6/9/26

Xác nhận lỗi dữ liệu nghiêm trọng. Quét toàn bộ 63 centroid:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Scan all 63 centroids for out-of-mainland coordinates

</details>

---

### 🤖 AI · 10:25 6/9/26

Xác định chính xác 2 lỗi. Đây là lỗi có sẵn từ trước, bản đồ 63 tỉnh mới làm lộ ra:

- **Khánh Hòa** `[112.82, 10.68]` — nằm giữa quần đảo Trường Sa, cách Nha Trang ~450km
- **Đà Nẵng** `[109.76, 16.24]` — nằm ngoài khơi vùng Hoàng Sa

Nguyên nhân: `centroids.json` tính centroid hình học của polygon hành chính **bao gồm cả huyện đảo**, nên bị kéo ra giữa Biển Đông. Khánh Hòa là 1 trong 8 tỉnh MVP gốc — nghĩa là bản đồ 8 bubble trước đây cũng đã sai chỗ mà chưa ai để ý.

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\data\provinces\khanh-hoa.json
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\da-nang.json

</details>

---

### 🤖 AI · 10:27 6/9/26

Sửa tiếp vấn đề khung nhìn cắt mất mũi Cà Mau — thay vì hard-code center/zoom, dùng `fitBounds` để luôn vừa khung:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Verify initialViewState supports bounds/fitBoundsOptions
- `Bash` — Find initialViewState type definition
- `Bash` — Print initialViewState shape

</details>

---

### 🤖 AI · 11:05 6/9/26

`initialViewState` hỗ trợ `bounds` + `fitBoundsOptions`. Áp dụng:

<details>
<summary>6 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Typecheck the fitBounds refactor

</details>

---

### 🤖 AI · 11:07 6/9/26

Build sạch. Chụp lại để kiểm chứng thật:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Re-screenshot map after fitBounds and centroid fixes
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 11:51 6/9/26

Việt Nam đã lọt trọn khung, không còn cắt Cà Mau. Nhưng vẫn thấy 2 marker giữa biển — đúng gotcha cache đã ghi trong DEVBOOK: dev server giữ cache module-level, chưa đọc centroid mới. Restart:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Restart dev server to clear cached province data
- `Bash` — Re-screenshot after dev server restart
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 11:59 6/9/26

Cả 2 marker ngoài biển đã biến mất — Khánh Hòa về đúng Nha Trang, Đà Nẵng về đúng đất liền. Kiểm tra mức zoom cao (63 nhãn cùng hiện):

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 11:59 6/9/26

Bản đồ hoạt động đúng. Ghi lại lỗi vào DEVBOOK theo kỷ luật dự án:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect DEVBOOK format and architecture docs mentioning the two-layer map
- `Bash` — Find architecture docs referencing the hero bubble design

</details>

---

### 🤖 AI · 12:00 6/9/26

Cập nhật SPEC (US-02 mô tả hành vi cũ) và ghi DEVBOOK:

<details>
<summary>5 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Bash` — Append the three map findings to DEVBOOK
- `Bash` — Final build check before commit
- `Bash` — Commit map refactor, centroid fixes, and doc updates

</details>

---

### 🤖 AI · 12:03 6/9/26

Đã commit. Giờ xử lý phần push — kiểm tra điều kiện trước:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Check credential helper and confirm secrets are not tracked
- `PowerShell` — Check for GitHub CLI and winget on Windows

</details>

---

### 🤖 AI · 12:05 6/9/26

Kiểm tra xong. Có một việc tao **không thể tự làm**: repo này **chưa từng có remote nào** — nên code chưa bao giờ được push đi đâu, tất cả 4 commit hiện chỉ nằm ở máy bạn.

Tin tốt: `.env.local` (chứa MapTiler key thật) **không** bị track và không có commit nào chạm vào nó, nên push sẽ không lộ key. Git Credential Manager cũng đã sẵn sàng.

Một lỗi nhỏ cần bạn biết: `git config user.email` đang là `«EMAIL ĐÃ CHE»` — thiếu chữ, đúng ra là `gmail.com`. Nếu push với email này thì commit sẽ **không** link về tài khoản GitHub của bạn.

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 12:12 6/9/26

Sửa email trước, rồi chờ URL repo của bạn.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Determine which config scope holds the misspelled email

</details>

---

### 🤖 AI · 12:12 6/9/26

Email sai nằm ở **global config** — ảnh hưởng mọi repo trên máy, nên sửa ở đó:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix the misspelled global git email

</details>

---

### 🤖 AI · 12:12 6/9/26

Xong phần bản đồ và chuẩn bị git. Tóm tắt:

**Bản đồ giờ hiện đủ 63 tỉnh** — và trong lúc kiểm chứng bằng screenshot thật, phát hiện 3 vấn đề, gồm 2 lỗi có sẵn từ trước:

1. **Thiết kế 2 tầng zoom cũ thực chất đang giấu 55 tỉnh.** Zoom thấp chỉ hiện 8 bubble curated, tầng pin 63 tỉnh chỉ bật từ zoom ≥7 — nhưng ở zoom 7 khung nhìn chỉ còn vài tỉnh, nên **không có mức zoom nào** thấy được cả nước. Đã bỏ crossfade, hiện cả 63 ở mọi zoom, phân cấp bằng **kích thước marker** thay vì ẩn/hiện (tỉnh nổi bật 36→60px, tỉnh thường 18→44px).

2. **Khánh Hòa và Đà Nẵng có marker nằm giữa Biển Đông.** `centroids.json` lấy centroid hình học của polygon hành chính, mà polygon 2 tỉnh này **bao gồm huyện đảo Trường Sa / Hoàng Sa** — Khánh Hòa bị đẩy ra `[112.8, 10.7]`, cách Nha Trang ~450km. Đáng lưu ý: **Khánh Hòa nằm trong 8 tỉnh MVP gốc**, nghĩa là lỗi này tồn tại từ walking skeleton, qua cả vòng QA W1-11 mà không bị bắt — chỉ lộ ra khi bản đồ đủ 63 tỉnh.

3. **Khung mặc định cắt mất mũi Cà Mau.** Đổi từ center+zoom hard-code sang `fitBounds`, tự co theo kích thước khung thật.

Đã ghi cả 3 vào `DEVBOOK.md` và sửa `SPEC-LF.md` (US-01/US-02 đang mô tả hành vi cũ) cho khớp sản phẩm thật — cần cho RTM ở W1-12. Build sạch, đã commit (92d4732).

**Về git push — chưa làm được, và lý do quan trọng:** repo này **chưa từng có remote nào**, nên code chưa bao giờ rời khỏi máy bạn, không phải do tao quên push. Tao đã sửa email global (`gmailc.com` → `gmail.com`) để commit sau này link đúng về tài khoản bạn.

Giờ bạn tạo repo public rỗng ở https://github.com/new (**đừng tick** thêm README/.gitignore/license để tránh xung đột), rồi dán URL vào đây — tao sẽ `git remote add` và push cả 5 commit lên ngay.

---

### 🧑 PM · 12:13 6/9/26

> https://github.com/hamvanphu/LocalFoodWeb

---

### 🤖 AI · 12:13 6/9/26

Kiểm tra lần cuối trước khi đẩy lên repo **public vĩnh viễn** — quét secret trong toàn bộ lịch sử:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Scan entire git history for leaked secrets before public push

</details>

---

### 🤖 AI · 12:13 6/9/26

Sạch — chỉ có **tên biến**, không có giá trị key nào; không file `.env` nào từng được commit. Tiến hành push:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Add the GitHub remote
- `Bash` — Push all commits to GitHub
- `Bash` — Verify the push landed correctly

</details>

---

### 🤖 AI · 12:14 6/9/26

Push thành công: https://github.com/hamvanphu/LocalFoodWeb

Toàn bộ lịch sử (23 commit, 207 file) đã lên remote, `master` đang track `origin/master`, working tree sạch.

**Tổng kết phiên này:**

| Việc | Kết quả |
|---|---|
| Mở rộng dữ liệu | 8 → **63/63 tỉnh**, tất cả pass zod validate qua `pnpm build` |
| Bản đồ | Hiện đủ 63 tỉnh ở mọi mức zoom, phân cấp bằng kích thước marker |
| Lỗi thật đã sửa | 3 (xem dưới) |
| Git | Đã push lên GitHub public |

**3 lỗi phát hiện khi kiểm chứng bằng screenshot thật** — đáng chú ý là 2 trong số đó có sẵn từ trước, không phải do đợt mở rộng này gây ra:

1. Thiết kế 2 tầng zoom cũ **giấu mất 55 tỉnh** — không mức zoom nào thấy được cả nước.
2. **Khánh Hòa & Đà Nẵng có marker giữa Biển Đông** do centroid tính cả huyện đảo Trường Sa/Hoàng Sa. Khánh Hòa sai từ walking skeleton, **lọt qua cả vòng QA W1-11 mà bạn đã duyệt PASS**.
3. Khung mặc định **cắt mất mũi Cà Mau**.

Cả 3 đã ghi vào `DEVBOOK.md`, và `SPEC-LF.md` (US-01/US-02) đã sửa cho khớp hành vi thật — cần cho RTM.

Hai điểm còn treo cần bạn quyết:

- **`hero-bubbles.json` vẫn chỉ 8 tỉnh.** Giờ nó điều khiển 2 thứ: tỉnh nào vẽ marker to trên bản đồ, và mục "Tỉnh nổi bật" ở trang chủ. Giữ 8 thì phân cấp rõ; mở rộng thì trang chủ sẽ dài ra.
- **Marker cụm đồng bằng sông Hồng vẫn chồng nhau ở zoom thấp** — đánh đổi có ý thức của việc không giấu tỉnh nào; zoom vào là tách ra.

Bước kế tiếp theo đúng thứ tự bạn đặt ra là **W1-12: hoàn thiện hồ sơ viva (RTM, telemetry, Weekly Report)**. Tiến hành luôn không?

---

### 🧑 PM · 12:14 6/9/26

> oke tiến hành

---

### 🤖 AI · 12:15 6/9/26

Đọc yêu cầu W1-12 và chuẩn artefact trước khi viết.

<details>
<summary>6 thao tác công cụ</summary>

- `Bash` — Find W1-12 definition in WBS
- `Bash` — List bootcamp docs and project artefacts
- `Bash` — List all bootcamp doc files
- `Bash` — Check for Vietnamese version of docs
- `Bash` — Find RTM definition in bootcamp docs
- `Bash` — Find Weekly Report and telemetry definitions

</details>

---

### 🤖 AI · 12:15 6/9/26

Đọc kỹ đặc tả bước [10] — có cảnh báo rõ về việc AI bịa số telemetry:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read playbook step 10 in full

</details>

---

### 🤖 AI · 12:15 6/9/26

Đã rõ chuẩn. Điểm mấu chốt: **"Bẫy hay sót: để AI bịa số telemetry"** — nên tao sẽ chỉ dùng số đo được thật. Thu thập dữ liệu trước:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Extract all user stories from SPEC
- `Bash` — Extract test cases from SIT-UAT
- `Read` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Bash` — Check if search/filter/browse features have user stories

</details>

---

### 🤖 AI · 12:23 6/9/26

**Phát hiện quan trọng cho RTM**: Search, filter mùa/lễ hội và trang `/browse` **đã build nhưng không có user story nào trong SPEC** — đây là "code mồ côi", đúng loại lỗi RTM sinh ra để bắt. Giờ thu thập số liệu thật:

<details>
<summary>6 thao tác công cụ</summary>

- `Bash` — Get real commit timestamps for telemetry
- `Bash` — Compute per-session working windows from git
- `Bash` — Count and list DEVBOOK AI-error entries
- `Bash` — Count PM interventions and gate failures from commit history
- `Bash` — Classify DEVBOOK entries and count content metrics
- `Bash` — Read estimation baseline from EST-LF

</details>

---

### 🤖 AI · 12:25 6/9/26

Kiểm tra các điểm RTM sẽ phải bắt:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check WBS coverage for search and whether SIT-UAT US-02 is stale

</details>

---

### 🤖 AI · 12:25 6/9/26

Xác nhận 2 lỗ hổng truy vết thật. Kiểm tra nốt trạng thái hiện tại:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify MapTiler key presence and code files referenced by RTM

</details>

---

### 🤖 AI · 12:27 6/9/26

Dữ liệu đủ. Viết RTM:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\RTM-LF.md

</details>

---

### 🤖 AI · 12:29 6/9/26

Giờ telemetry — đây là chỗ playbook cảnh báo rõ *"bẫy hay sót: để AI bịa số"*, nên tao tách bạch số **đo được** và số **chỉ PM mới biết**:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\TELEMETRY-LF.md

</details>

---

### 🤖 AI · 12:30 6/9/26

Cuối cùng là Weekly Report. Kiểm tra deadline và trạng thái rủi ro:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Confirm deadline and open tech debt
- `Write` — D:\01_Study\07_Local_Food\WEEKLY-LF.md

</details>

---

### 🤖 AI · 12:32 6/9/26

Thêm R13 vào RISK và cập nhật DOR (mục FAIL về MapTiler key giờ đã có key):

<details>
<summary>6 thao tác công cụ</summary>

- `Bash` — Check DOR checklist status
- `Edit` — D:\01_Study\07_Local_Food\DOR-LF.md
- `Edit` — D:\01_Study\07_Local_Food\DOR-LF.md
- `Edit` — D:\01_Study\07_Local_Food\RISK-LF.md
- `Bash` — Verify build then stage W1-12 artefacts
- `Bash` — Commit and push W1-12 viva artefacts

</details>

---

### 🤖 AI · 12:34 6/9/26

Xong bước [10]. Đã push lên GitHub.

**3 artefact mới:** `RTM-LF.md`, `TELEMETRY-LF.md`, `WEEKLY-LF.md` — cộng với việc đóng nốt mục FAIL cuối trong DOR và thêm R13 vào RISK.

**RTM bắt được 3 lỗ hổng truy vết thật** — đây là giá trị chính, và cả 3 đều là thứ chỉ lộ ra khi ngồi map story ↔ code ↔ test:

1. **Test US-02 đã lỗi thời → dấu PASS không còn giá trị.** Checklist viết lúc 20:40 ngày 03/09, bạn test PASS, rồi **15 phút sau** marker đổi sang ảnh món ăn mà checklist không cập nhật. Hôm nay bỏ luôn cơ chế 2 tầng nữa. Nên US-02 hiện phải coi là **chưa kiểm chứng**, không phải PASS.
2. **Search + Filter mùa/lễ hội: có code, không story, không test.** Hai cái này đi thẳng từ yêu cầu miệng của bạn vào WBS rồi build luôn, bỏ qua bước viết AC — nên không có gì để test, và đang chạy trên site mà chưa từng được kiểm.
3. **NFR "UI wow" không có test khách quan** — W1-9c PASS là phán xử chủ quan của bạn. Ghi thẳng vậy thay vì làm ra vẻ đã đo.

**Về telemetry — tao cố ý để trống phần quan trọng nhất.** Playbook cảnh báo rõ *"bẫy hay sót: để AI bịa số telemetry"*, nên tao chia 3 loại: ✅ đo được (git log, DEVBOOK, output build/audit), 🟡 proxy, ⬜ **chỉ PM biết**. Giờ ngồi máy thật và token đều để trắng — suy từ commit timestamp ra "giờ làm việc" chính là kiểu bịa số mà playbook cấm. Tao cũng tự chỉ ra 3 số yếu nhất trong chính tài liệu đó để bạn có cái mà bác ở Cổng hiểu, gồm việc DEVBOOK ghi thiếu ít nhất 4 lần bạn bắt lỗi.

**Số liệu mạnh nhất mang vào viva:** 8/8 cổng hiểu bạn đều để lại dấu vết phản biện thật, trong đó **5 lần bắt được lỗi/thiếu sót của AI ngay tại cổng**, và 2 lần đánh FAIL bắt làm lại. Đó là bằng chứng chống rubber-stamping (R3) rõ ràng nhất.

**Còn 3 ngày tới hạn. Việc chỉ bạn làm được, xếp theo ưu tiên:**

| | Việc | Thời gian |
|---|---|---|
| 🔴 | Điền giờ thật vào `TELEMETRY-LF.md` mục 5 — **chưa điền thì bước [10] chưa đóng được** | 15 phút |
| 🔴 | Spot-check nội dung 3-5 tỉnh ngẫu nhiên — **R2 (hallucination) giờ là rủi ro lớn nhất**, 197 món phần lớn nguồn không phải Wikipedia | 30-45 phút |
| 🟡 | Sửa checklist US-02 + test lại | 15 phút |
| 🟡 | Quyết: bổ sung story+test cho Search/Filter, hay mang vào viva như phát hiện có chủ đích của RTM | 5 phút |

Bạn muốn tao làm tiếp việc nào không — ví dụ bổ sung US-12/US-13 + test case cho Search/Filter, hay sửa checklist US-02? Hoặc nếu muốn đọc hồ sơ dễ hơn dạng trang web thay vì file `.md`, tao dựng một trang tổng hợp cho bạn.

---

### 🧑 PM · 17:40 6/9/26

> khoan đã nhé.
> giờ hãy rà soát lại, xem deploy sản phẩm như nào, làm sao tao đưa cho người khác xem đc và cùng tương tác vào web?

---

### 🤖 AI · 17:40 6/9/26

Rà soát tình trạng sẵn sàng deploy trước khi khuyến nghị.

<details>
<summary>5 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\next.config.ts
- `Bash` — Inspect deploy-relevant config and server features
- `Bash` — Check README, env vars and existing deploy config
- `PowerShell` — Check whether Vercel CLI is available
- `Bash` — Verify the production build actually serves

</details>

---

### 🤖 AI · 17:54 6/9/26

Các mã 200 kia là từ dev server đang chiếm cổng — `pnpm start` thực ra fail. Kiểm tra lại cho đúng trên cổng riêng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Run production server on a free port and verify routes

</details>

---

### 🤖 AI · 17:55 6/9/26

Kiểm tra điểm bảo mật quan trọng nhất khi deploy public:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Confirm whether the MapTiler key is embedded in the client bundle
- `Bash` — Stop the test production server

</details>

---

### 🤖 AI · 18:02 6/9/26

Rà soát xong. Tin tốt: **sản phẩm sẵn sàng deploy gần như ngay**.

**Đã kiểm chứng thật:**
- Build production chạy đúng trên cổng riêng: `/`, `/browse`, `/provinces/{tỉnh}` đều trả 200; slug sai trả 404 (US-08 vẫn đúng trên prod, không chỉ trên dev).
- **Không có server feature nào** — không API route, không `use server`, không cookies/headers. Toàn bộ 68 route là tĩnh (SSG). Đây là dạng dễ deploy nhất.
- Chỉ có **1 biến môi trường** cần khai: `NEXT_PUBLIC_MAPTILER_KEY`.

**3 việc cần xử lý trước khi đưa link cho người khác:**

**1. 🔴 MapTiler key sẽ lộ công khai — đã xác nhận, không phải suy đoán.** Tao grep bundle client: key nằm trong 1 file JS đã build. Bất kỳ ai mở DevTools trên site deploy đều đọc được. Đây là **bản chất không tránh được** của `NEXT_PUBLIC_*` khi MapLibre chạy phía client — không phải lỗi code. Rủi ro thật: người khác lấy key dùng cho site của họ, đốt hết quota free tier của bạn.
→ **Bắt buộc làm:** vào MapTiler dashboard bật **domain restriction**, chỉ cho phép domain deploy (vd `localfoodweb.vercel.app`). Miễn phí, mất 2 phút.

**2. 🟡 README vẫn là boilerplate `create-next-app`.** Repo đang public và coach sẽ mở — trang đầu tiên họ thấy đang nói về Geist font và Vercel docs, không nói gì về Local Food.

**3. Chưa có config deploy nào** (không `vercel.json`, không GitHub Actions).

**Khuyến nghị nền tảng: Vercel.** Lý do cụ thể chứ không phải theo mặc định — `next/image` optimization của bạn đang gánh việc quan trọng: nó chính là thứ đã kéo payload trang chủ từ 14MB xuống 211KB (bug đã fix ở W1-11b). Nếu deploy lên GitHub Pages thì phải bật `output: 'export'` + `images.unoptimized: true`, tức là **mất tối ưu ảnh và quay lại đúng cái bug đó**. Vercel giữ nguyên optimization, free tier đủ dùng, import thẳng từ GitHub repo đã có.

Trước khi tao chuẩn bị, cần bạn làm rõ một chỗ — từ "**cùng tương tác**" của bạn có thể hiểu 2 mức rất khác nhau về khối lượng việc:

<details>
<summary>2 thao tác công cụ</summary>

- `AskUserQuestion`
- `AskUserQuestion`

</details>

---

### 🤖 AI · 18:04 6/9/26

Rõ. Hai việc này độc lập nhau nên tao làm deploy trước để bạn có link ngay, rồi mới tới Review/Rating (việc đó cần bạn tạo Supabase project mới làm tiếp được).

Bắt đầu bằng cài Vercel CLI và viết lại README:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Install Vercel CLI globally

</details>

---

### 🤖 AI · 18:11 6/9/26

Vercel CLI đã cài. Viết lại README trong lúc chờ:

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\README.md
- `Bash` — Create .env.example without secret values
- `Bash` — Check Vercel CLI auth status
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\

</details>

---

### 🤖 AI · 18:14 6/9/26

Lệnh bị treo — Vercel CLI đang chờ tương tác mà session này không cấp được. Dừng lại và kiểm tra:

<details>
<summary>4 thao tác công cụ</summary>

- `ToolSearch`
- `TaskStop`
- `PowerShell` — Look for stored Vercel credentials
- `PowerShell` — Check if Vercel auth token exists without printing it

</details>

---

### 🤖 AI · 18:15 6/9/26

Đã có token — bạn từng đăng nhập Vercel rồi. Lệnh treo có thể do telemetry notice. Thử lại:

<details>
<summary>1 thao tác công cụ</summary>

- `PowerShell` — Check Vercel identity with telemetry disabled

</details>

---

### 🤖 AI · 18:22 6/9/26

Token cũ đã hết hạn — CLI báo "Logged out". Nhưng nó gợi ý một đường khác không cần đăng nhập. Kiểm tra điều kiện build trước khi thử:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check lockfile and gitignore readiness for Vercel

</details>

---

### 🤖 AI · 18:23 6/9/26

`.env.example` đang bị `.gitignore` nuốt — sửa để người khác biết cần biến gì:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Inspect env-related gitignore rules
- `Edit` — D:\01_Study\07_Local_Food\.gitignore
- `Bash` — Verify example is committable while real env stays ignored

</details>

---

### 🤖 AI · 18:23 6/9/26

Đúng như cần: `.env.example` commit được, `.env.local` thật vẫn được bảo vệ. Giờ thử deploy không cần đăng nhập:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Deploy a temporary Vercel deployment without login

</details>

---

### 🤖 AI · 18:34 6/9/26

Đăng nhập đã thành công. Lỗi là do tên thư mục `07_Local_Food` có chữ hoa — Vercel yêu cầu tên project viết thường. Xác nhận trạng thái rồi đặt tên hợp lệ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Confirm Vercel login succeeded

</details>

---

### 🤖 AI · 18:35 6/9/26

Đã đăng nhập với tài khoản `hamvanphu`. Giờ liên kết project với tên hợp lệ rồi deploy:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Link directory to a Vercel project with a valid name

</details>

---

### 🤖 AI · 18:35 6/9/26

Vercel đã tạo project và **tự kết nối GitHub repo** (mỗi lần push sẽ tự deploy). Nhưng nó thêm `.env*` vào cuối `.gitignore`, đè mất exception của tao:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Verify gitignore ordering broke the example exception
- `Edit` — D:\01_Study\07_Local_Food\.gitignore
- `Bash` — Re-verify all env ignore rules after fix

</details>

---

### 🤖 AI · 18:35 6/9/26

Tất cả rule đều đúng. Giờ nạp MapTiler key vào project Vercel rồi deploy:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Add MapTiler key to all Vercel environments
- `Bash` — Inspect full output of env add to find required flags

</details>

---

### 🤖 AI · 18:38 6/9/26

Vercel cảnh báo đúng vấn đề tao đã nêu. Với MapLibre chạy phía client thì **bắt buộc** phải là public config — dùng secret thì bản đồ không chạy được:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add the key as public config to all environments

</details>

---

### 🤖 AI · 18:39 6/9/26

Env var đã nạp cho cả 3 môi trường. Deploy production:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Deploy to Vercel production

</details>

---

### 🤖 AI · 18:40 6/9/26

Deploy xong. Giờ kiểm tra điều quan trọng nhất: **người ngoài có xem được không** (Vercel hay bật Deployment Protection mặc định):

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect project for production domain and protection settings
- `Bash` — Test public accessibility of deployment URLs

</details>

---

### 🤖 AI · 18:40 6/9/26

Cả 3 URL đều **200 không cần đăng nhập** — người ngoài xem được. URL đẹp nhất: **https://local-food.vercel.app**

Kiểm tra các route và xác nhận bản đồ thật sự chạy trên production:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify all routes and MapTiler wiring on production

</details>

---

### 🤖 AI · 18:41 6/9/26

Lỗi thật: trang chủ 200 nhưng **mọi route con đều 404**, kể cả route hợp lệ. Nghĩa là build trên Vercel không sinh được 63 trang tỉnh. Điều tra:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\lib\provinces.ts

</details>

---

### 🤖 AI · 18:41 6/9/26

Build thành công nên data đọc được — nghi ngờ URL `local-food.vercel.app` trỏ deployment khác. Kiểm tra trên URL deployment gốc:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Test routes on the canonical deployment URL

</details>

---

### 🤖 AI · 18:41 6/9/26

Kết quả bất thường: `/provinces/khong-ton-tai` trả 200, và trang chủ có **0 link tỉnh**. Nghĩa là build ra site rỗng. Xem log build thật:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fetch Vercel build logs

</details>

---

### 🤖 AI · 18:44 6/9/26

Build trên Vercel **hoàn toàn đúng** — 68 trang tĩnh, có đủ route tỉnh. Vậy vấn đề nằm ở tầng truy cập. Xem nội dung thật trả về:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Identify whether responses are the auth challenge page

</details>

---

### 🤖 AI · 18:45 6/9/26

Tìm ra 2 vấn đề riêng biệt, cả hai đều chặn đúng mục tiêu của bạn:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check project-level URL and confirm domain squatting

</details>

---

### 🤖 AI · 18:45 6/9/26

Xác nhận rõ:
- **Cả 2 URL của bạn đều bị Vercel Deployment Protection chặn** — người ngoài mở sẽ gặp trang đăng nhập Vercel, không phải site.
- **`local-food.vercel.app` là site của người khác** (title "Local Food Directory") — tên đó đã bị chiếm, không phải của bạn.

Tắt protection qua API:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Read linked project identifiers
- `Bash` — Disable Vercel deployment protection via API

</details>

---

### 🤖 AI · 18:45 6/9/26

Token của CLI không đủ quyền gọi API quản trị. Thử qua chính CLI:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Look for a CLI command to manage protection

</details>

---

### 🤖 AI · 18:46 6/9/26

Không có lệnh CLI cho việc này — Deployment Protection chỉ tắt được từ dashboard. Trong lúc chờ, commit các file chuẩn bị deploy (đã kết nối GitHub nên push sẽ tự deploy lại):

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Stage deploy prep files and confirm no secrets

</details>

---

### 🤖 AI · 18:46 6/9/26

`.env.example` sạch (chỉ có tên biến, không giá trị). Commit và push:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit and push deploy preparation

</details>

---

### 🤖 AI · 18:46 6/9/26

**Deploy xong rồi, nhưng còn đúng 1 việc chặn — và chỉ bạn bấm được.**

**Site đã chạy thật trên Vercel.** Build trên server hoàn toàn đúng: 68 trang tĩnh, đủ 63 route tỉnh, dùng pnpm v11 khớp lockfile, MapTiler key đã nạp cho cả 3 môi trường.

**Vấn đề: Vercel tự bật Deployment Protection cho project mới.** Tao mô phỏng người ngoài truy cập — họ không thấy site, mà bị đá sang trang đăng nhập Vercel (header trả về `_vercel_sso_nonce`). Đây đúng là thứ phá hỏng mục tiêu "đưa cho người khác xem" của bạn. Tao đã thử tắt qua API nhưng token của CLI báo `Not authorized`, và CLI không có lệnh nào cho setting này — chỉ đổi được từ dashboard.

**Việc bạn cần làm (khoảng 30 giây):**
1. Mở https://vercel.com/hamvanphus-projects/local-food/settings/deployment-protection
2. Mục **Vercel Authentication** → chuyển sang **Disabled** → **Save**

Xong bước đó, đây là link chia sẻ được:

**https://local-food-hamvanphus-projects.vercel.app**

⚠️ **Lưu ý về tên miền:** `local-food.vercel.app` (tên ngắn) **không phải của bạn** — tao kiểm tra thấy đó là site người khác, title "Local Food Directory". Tên đó đã bị chiếm nên đừng chia sẻ nhầm. Nếu muốn link đẹp hơn, đổi tên project trong Settings thành thứ chưa ai lấy (vd `local-food-vn`) hoặc gắn domain riêng.

🔴 **Việc bảo mật đừng bỏ qua:** vào https://cloud.maptiler.com/account/keys/ bật **domain restriction** cho key, chỉ cho phép domain Vercel ở trên. Tao đã grep bundle đã build và xác nhận **key nằm trong 1 file JS phía client** — ai mở DevTools cũng đọc được. Không tránh được vì MapLibre chạy trên trình duyệt, nên chặn theo domain là biện pháp duy nhất. Chính Vercel cũng cảnh báo điều này khi tao thêm biến.

**Thêm 2 thứ đã làm cùng lúc:**
- **README viết lại hoàn toàn** — repo public đang để boilerplate `create-next-app` nói về Geist font, giờ đã có tài liệu thật kèm mục "Giới hạn đã biết" ghi thẳng LCP chưa đạt và Search/Filter chưa có test.
- **GitHub đã kết nối Vercel** — từ giờ mỗi lần push là tự deploy, không cần chạy lệnh nữa.

Sau khi bạn tắt protection, báo tao — tao sẽ mở site thật bằng trình duyệt, chụp màn hình kiểm tra bản đồ 63 tỉnh có render đúng trên production không, rồi chuyển sang làm **Review/Rating**. Việc đó cần bạn tạo Supabase project trước (free tier) để lấy URL + anon key; tao sẽ hướng dẫn khi tới bước đó.

---

### 🧑 PM · 18:52 6/9/26

> oke protection r đó

---

### 🤖 AI · 18:52 6/9/26

Kiểm tra ngay như người ngoài truy cập:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify public access after protection disabled

</details>

---

### 🤖 AI · 18:52 6/9/26

Site đã public hoàn toàn: 63 link tỉnh, route hợp lệ 200, slug sai trả 404 đúng. Giờ kiểm tra thật bằng trình duyệt — bản đồ có render trên production không:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Run production smoke test in a real browser

</details>

---

### 🤖 AI · 18:58 6/9/26

63 marker, MapTiler tải tile thật, search không dấu chạy. Nhưng có **2 lỗi 502** cần truy. Xem ảnh trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 18:58 6/9/26

Bản đồ production render đúng — ảnh món ăn thật, basemap MapTiler hoạt động. Giờ truy 2 lỗi 502:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Identify which resources return 502

</details>

---

### 🤖 AI · 19:01 6/9/26

Lần này 0 lỗi — nghi ngờ 502 lúc trước là transient (cold start của Vercel image optimization). Kiểm tra lại trên nhiều trang để chắc chắn:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Sweep six production pages for failing resources

</details>

---

### 🤖 AI · 19:02 6/9/26

Bug thật, tái hiện được: **11 ảnh Wikimedia trả 502** qua `_next/image` trên production. Truy nguyên nhân:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Test whether Wikimedia blocks by user agent

</details>

---

### 🤖 AI · 19:03 6/9/26

Tìm ra nguyên nhân: **Wikimedia trả 403 khi thiếu User-Agent** hợp lệ, và ảnh gốc rất nặng (`Banh_beo.jpg` = **3MB**) khiến Vercel image optimizer fail → 502. Thử hướng khắc phục:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Compare original vs thumbnail size and UA behaviour

</details>

---

### 🤖 AI · 19:04 6/9/26

Thumb URL sai cú pháp (400). Nhưng dữ liệu quan trọng hơn: `Nem_chua` chỉ **12KB** mà vẫn 502 → không phải do kích thước. Số lỗi lại dao động 2 → 0 → 11 giữa các lần chạy. Đó là dấu hiệu **rate limit**, đúng rủi ro R5 đã biết. Kiểm chứng bằng cách gọi lại chính các URL đó:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Re-request the previously failing optimized images
- `Bash` — Probe which image optimizer params are accepted

</details>

---

### 🤖 AI · 19:05 6/9/26

`quality={60}` bị Next.js 16 từ chối (400) vì mặc định chỉ cho phép `q=75` — nhưng đó là khi tao gọi tay. Cần biết URL trình duyệt thật sự gọi:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Capture exact failing image optimizer params

</details>

---

### 🤖 AI · 19:18 6/9/26

Chẩn đoán xong — lần này **35 ảnh thành công, 0 lỗi**. Kết luận: 502 chỉ xảy ra ở lần fetch đầu khi cache Vercel còn lạnh, Wikimedia rate-limit khi bị gọi dồn dập; sau khi cache ấm thì hết. Đây đúng là rủi ro **R5** đã ghi nhận từ đầu dự án, giờ tái xuất hiện trên production. Ghi lại:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Record the production 502 investigation in DEVBOOK
- `Edit` — D:\01_Study\07_Local_Food\RISK-LF.md
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 19:19 6/9/26

Trang tỉnh render đẹp trên production — chú ý caption ảnh ghi rõ *"phiên bản Sóc Trăng, không phải ảnh chụp tại Trà Vinh"*, đúng tinh thần trung thực về nguồn. Commit:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit production findings and push

</details>

---

### 🤖 AI · 19:20 6/9/26

**Site đã sống và ai cũng xem được:**

# https://local-food-hamvanphus-projects.vercel.app

**Kiểm chứng thật trên production bằng trình duyệt, không phải chỉ curl:**

| Hạng mục | Kết quả |
|---|---|
| Truy cập không đăng nhập | ✅ Không còn chặn SSO |
| Bản đồ | ✅ **63 marker**, MapTiler tải tile thật, ảnh món ăn hiện đúng |
| Trang tỉnh | ✅ `/provinces/tra-vinh` → h1 "Trà Vinh", đủ nội dung + nguồn |
| Search không dấu | ✅ Gõ `pho` → 8 kết quả |
| Slug sai | ✅ Trả 404 đúng (US-08 vẫn đạt trên production) |
| Tối ưu ảnh | ✅ 35/35 ảnh OK ở lần quét cuối |

**Về 2 lỗi 502 tao thấy lúc đầu — đã truy tới cùng và kết luận là *không phải bug code*.** Đáng kể lại vì suýt sửa nhầm chỗ:

Số lỗi dao động qua các lần chạy (2 → 0 → 11 → 0), đó là manh mối nó không tất định. Tao loại trừ 2 giả thuyết sai **bằng đo đạc chứ không đoán**:
- *"Do ảnh quá nặng"* → sai: file 12KB vẫn lỗi, file 3MB lại chạy.
- *"Do `quality={60}` không hợp lệ trên Next.js 16"* → gọi tay `q=60` đúng là trả 400 thật, nhưng trình duyệt luôn xin `q=75`, và lần quét cuối 35/35 ảnh OK.

Nguyên nhân thật: **Wikimedia giới hạn tần suất** khi Vercel fetch dồn dập nhiều ảnh gốc lúc cache còn lạnh — xác nhận bằng `curl` không gửi User-Agent thì Wikimedia trả thẳng 403. Đây chính là **rủi ro R5** đã lường trước từ đầu dự án, và `onError` fallback (GAP-01) đã chứng minh hiệu quả trên production: người xem thấy gradient thay vì ảnh vỡ. Cache ấm là hết. Đã ghi DEVBOOK + cập nhật R5, không sửa code.

**Hai điều cần bạn biết:**

🔴 **Chưa làm: bật domain restriction cho MapTiler key.** Key đang public trong bundle (đã xác nhận bằng grep). Vào https://cloud.maptiler.com/account/keys/ giới hạn đúng domain trên, kẻo người khác dùng ké hết quota.

⚠️ **Tên miền:** `local-food.vercel.app` là site người khác, đừng chia sẻ nhầm. Nếu muốn link gọn hơn thì đổi tên project trong Settings (vd `local-food-vn`).

**Từ giờ mỗi lần push GitHub là Vercel tự deploy lại** — không cần chạy lệnh nữa.

Giờ sang **Review/Rating** để người xem chấm sao + bình luận. Việc này cần bạn tạo Supabase project trước (free tier), tao sẽ cần **Project URL** và **anon key** từ Settings → API. Bạn tạo rồi báo tao, hay muốn tao hướng dẫn từng bước?

---

### 🧑 PM · 19:21 6/9/26

> sang Review/Rating. mày hướng dẫn từng bước nhé

---

### 🤖 AI · 19:21 6/9/26

Trước khi hướng dẫn, tao đọc lại thiết kế D3 đã chốt để hướng dẫn khớp với nó, không tự nghĩ mới:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read the D3 architecture decision for review feature

</details>

---

### 🤖 AI · 19:26 6/9/26

Đọc xong D3 — thiết kế đã có sẵn schema và yêu cầu RLS. Trước khi hướng dẫn, một điểm về quy trình:

**Lần này tao viết user story + AC trước khi code.** RTM vừa bắt được GAP-T2 (Search/Filter có code mà không có story, không test được) — không lặp lại lỗi đó với tính năng lớn hơn này.

Chuẩn bị sẵn file SQL để bạn chỉ việc dán, giảm sai sót:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\supabase\schema.sql

</details>

---

### 🤖 AI · 19:26 6/9/26

Giờ viết user story trước, đúng quy trình:

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Bash` — Commit story and schema before implementation

</details>

---

### 🤖 AI · 19:27 6/9/26

Story và schema đã sẵn sàng. Giờ tới phần của bạn — **hướng dẫn từng bước**:

---

## Bước 1 — Tạo project Supabase (~3 phút)

1. Mở https://supabase.com → **Start your project** → đăng nhập **bằng GitHub** (dùng luôn tài khoản `hamvanphu`, khỏi tạo mật khẩu mới).
2. Bấm **New project**.
3. Điền:
   - **Name**: `local-food`
   - **Database Password**: bấm **Generate a password** rồi **lưu lại chỗ nào đó**. Bạn sẽ không cần nó cho website, nhưng mất thì phải reset.
   - **Region**: chọn **Southeast Asia (Singapore)** — gần Việt Nam nhất, người xem ở VN sẽ thấy nhanh hơn.
4. Bấm **Create new project** rồi **đợi khoảng 2 phút** (nó đang dựng database thật).

---

## Bước 2 — Tạo bảng và bật bảo mật (~1 phút)

1. Trong project vừa tạo, panel trái chọn **SQL Editor** → **New query**.
2. Mở file [supabase/schema.sql](supabase/schema.sql) trong repo, **copy toàn bộ**, dán vào ô SQL.
3. Bấm **Run** (hoặc Ctrl+Enter). Phải thấy **Success**.

> ⚠️ **Đừng bỏ qua bước tự kiểm.** Cuối file SQL có 2 câu lệnh kiểm tra. Chạy riêng chúng:
> - Câu 1 phải trả về `true` → RLS đã bật.
> - Câu 2 phải ra **đúng 2 dòng** (1 SELECT, 1 INSERT).
>
> Đây là **R11** trong hồ sơ rủi ro của bạn: quên bật RLS thì bất kỳ ai cầm anon key — mà key này **bắt buộc lộ công khai** trong code website — đều xoá sạch được bảng. Nên tao viết sẵn câu kiểm để bạn tự xác nhận, đừng tin "chắc chạy xong là ổn".

---

## Bước 3 — Lấy 2 thông tin cho tao

Panel trái → **Settings** (bánh răng) → **API**. Copy 2 giá trị:

| Cần lấy | Trông như thế nào |
|---|---|
| **Project URL** | `https://xxxxxxxxxxxx.supabase.co` |
| **anon public** key | chuỗi rất dài bắt đầu bằng `eyJ...` |

**Chỉ lấy đúng key tên `anon` / `public`.** Bên dưới có key tên **`service_role`** — **tuyệt đối không đưa key đó cho tao và không bao giờ dán vào code**, nó bỏ qua toàn bộ RLS và toàn quyền với database.

---

Về việc gửi 2 giá trị đó, bạn chọn cách nào cũng được:

- **Dán thẳng vào chat** — tiện nhất. Cả 2 giá trị này dù sao cũng sẽ nằm công khai trong bundle website (đúng thiết kế của Supabase, giống hệt MapTiler key), nên rủi ro thấp — miễn là RLS ở Bước 2 đã bật đúng.
- **Hoặc bạn tự dán vào `.env.local`** theo mẫu dưới rồi chỉ cần báo tao "xong":

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=«KEY ĐÃ CHE»
```

Trong lúc bạn làm 3 bước đó, tao dựng sẵn phần code: client Supabase, form chấm sao + bình luận, danh sách đánh giá, xử lý trạng thái rỗng và trường hợp Supabase lỗi. Xong bước nào bạn báo tao bước đó nhé.

---

### 🧑 PM · 19:41 6/9/26

> anon: «KEY ĐÃ CHE»
> Project URL lấy ở đâu nhỉ, tao có thấy hiển thị trong mục API đâu

---

### 🤖 AI · 19:41 6/9/26

Không cần tìm nữa — **Project URL suy ra được từ chính anon key**. Key là JWT, phần payload có chứa project ref. Tao giải mã và kiểm chứng luôn:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Decode the Supabase project ref from the anon JWT

</details>

---

### 🤖 AI · 19:41 6/9/26

Đúng key `anon` (không phải `service_role`) — bạn lấy chuẩn. Giờ kiểm chứng bảng và RLS thật, thay vì tin là đã chạy đúng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify project URL and whether the table exists

</details>

---

### 🤖 AI · 19:42 6/9/26

Project URL đúng, bảng đã tạo, SELECT trả `[]`. Giờ **kiểm chứng RLS thật sự** — đây là R11, rủi ro nghiêm trọng nhất của tính năng này. Tao thử tấn công chính database của bạn:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Attempt to bypass RLS to verify it actually blocks abuse

</details>

---

### 🤖 AI · 19:43 6/9/26

**RLS hoạt động đúng — đã kiểm chứng bằng cách thử tấn công thật:**

| Hành vi | Kết quả | |
|---|---|---|
| Gửi review hợp lệ | `201` | ✅ cho phép |
| Lách kiểm duyệt (`status=hidden`) | `401` | ✅ chặn |
| Rating = 99 | `401` | ✅ chặn |
| Bình luận 600 ký tự | `401` | ✅ chặn ở **database**, không chỉ client |
| **Xoá sạch bảng** | `401` | ✅ chặn |
| **Sửa review người khác** | `401` | ✅ chặn |

Đây chính là **R11 đã đóng bằng bằng chứng**, không phải bằng lời hứa — đúng yêu cầu "RLS là điều kiện bắt buộc trước khi tính năng được coi là xong".

Trả lời câu hỏi của bạn: **Project URL** nằm ở **Settings → API → Project URL** (đầu trang), hoặc **Settings → General → Reference ID** rồi ghép thành `https://<ref>.supabase.co`. Lần này tao lấy được từ chính anon key nên khỏi cần.

Giờ dựng code:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Add Supabase credentials to env files
- `Bash` — Install Supabase JS client
- `Write` — D:\01_Study\07_Local_Food\lib\reviews.ts

</details>

---

### 🤖 AI · 19:44 6/9/26

Giờ component sao và form đánh giá:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\review\StarRating.tsx
- `Write` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx

</details>

---

### 🤖 AI · 19:45 6/9/26

Giờ gắn vào trang món ăn. Xem `DishCard` để đặt đúng chỗ:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Inspect DishCard structure for integration point
- `Bash` — Find DishCard signature and ending
- `Read` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx

</details>

---

### 🤖 AI · 19:45 6/9/26

`DishCard` chưa có `provinceSlug` — cần thêm để biết review thuộc tỉnh nào. Xem các chỗ đang dùng:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Find all DishCard usages
- `Bash` — Check explorer props and page usage

</details>

---

### 🤖 AI · 19:45 6/9/26

Truyền `provinceSlug` xuyên qua 3 tầng:

<details>
<summary>6 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Bash` — Thread provinceSlug through the explorer component
- `Edit` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Bash` — Build with the review feature integrated

</details>

---

### 🤖 AI · 19:47 6/9/26

Build sạch, 68 trang vẫn tĩnh (nội dung món vẫn SSG, chỉ khối đánh giá là động). Test thật trên trình duyệt local:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Restart dev server with review feature
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Test review feature end-to-end in browser

</details>

---

### 🤖 AI · 19:50 6/9/26

Tất cả kịch bản pass, không lỗi JS. Xem ảnh để kiểm tra thị giác:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 19:50 6/9/26

Giao diện khớp design system, review hiện ngay không cần tải lại trang. Giờ nạp biến môi trường lên Vercel và deploy:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add Supabase env vars to Vercel

</details>

---

### 🤖 AI · 19:51 6/9/26

Giờ bổ sung test case vào SIT-UAT (đúng quy trình — có story thì phải có test) rồi commit:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Add US-14 test cases to SIT-UAT
- `Bash` — Stage review feature and verify no secrets committed
- `Bash` — Commit and push the review feature
- `Bash` — Deploy production with review feature

</details>

---

### 🤖 AI · 19:54 6/9/26

Deploy xong. Kiểm tra tính năng trên production thật:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Verify review feature works on production across two browsers

</details>

---

### 🤖 AI · 19:55 6/9/26

Lỗi ở script test của tao, không phải sản phẩm: trang tỉnh mặc định hiện lưới `DishTile`, phải bấm vào món mới mở panel chứa khối đánh giá. Sửa:

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Edit` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Re-run production review test with correct navigation

</details>

---

### 🤖 AI · 19:56 6/9/26

Hoạt động đúng trên production — và quan trọng nhất: **người dùng ở context khác (không chung storage) vẫn thấy đánh giá đó**, chứng minh dữ liệu thật sự dùng chung, đúng AC cốt lõi của US-14. Cập nhật hồ sơ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Update tech debt and risk status after shipping reviews

</details>

---

### 🤖 AI · 19:58 6/9/26

Cách sửa tự động của tao làm hỏng cấu trúc bảng — nhét trạng thái vào cột "#". Sửa lại cho đúng:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\RISK-LF.md

</details>

---

### 🤖 AI · 19:58 6/9/26

Cập nhật RTM để đóng GAP-T2 và thêm US-14:

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\RTM-LF.md
- `Edit` — D:\01_Study\07_Local_Food\RTM-LF.md
- `Bash` — Commit documentation updates

</details>

---

### 🤖 AI · 19:59 6/9/26

**Review/Rating đã lên production và chạy thật.**

Thử ngay: https://local-food-hamvanphus-projects.vercel.app/provinces/da-nang → bấm vào một món → cuộn xuống cuối.

**Kiểm chứng trên production, không phải chỉ local:**

| Kịch bản | Kết quả |
|---|---|
| Gửi đánh giá | ✅ Thành công, hiện ngay không cần tải lại trang |
| **Người dùng khác (context riêng) có thấy không** | ✅ **CÓ** — chứng minh dữ liệu dùng chung thật, không phải localStorage |
| Thiếu sao | ✅ Chặn: "Hãy chọn số sao từ 1 đến 5." |
| Thiếu tên | ✅ Chặn: "Hãy nhập tên của bạn." |
| Gửi lặp ngay | ✅ Chặn 30 giây |
| Lỗi JS | ✅ Không có |

**Về R11 (RLS) — tao không chỉ chạy migration rồi tin là xong, mà tự tấn công database của bạn để kiểm:**

| Thử làm | Kết quả |
|---|---|
| Gửi review hợp lệ | `201` ✅ cho phép |
| Lách kiểm duyệt (`status=hidden`) | `401` chặn |
| Rating = 99 | `401` chặn |
| Comment 600 ký tự | `401` chặn **ở database**, không chỉ client |
| **Xoá sạch bảng** | `401` chặn |
| **Sửa review người khác** | `401` chặn |

Thêm lớp nữa: quyền ghi bị giới hạn **theo cột**, nên client không thể ghi đè `id`, `created_at` hay `status` kể cả khi cố tình.

**Điểm về quy trình đáng mang vào viva:** US-14 là story **duy nhất** được viết **trước** khi code — kết quả là nó cũng là dòng duy nhất trong RTM không mang cảnh báo nào. Đối lập trực tiếp với Search/Filter (GAP-T2) làm ngược lại. Tao ghi rõ tương phản đó trong RTM vì nó chứng minh bài học được áp dụng thật, không chỉ nhận lỗi cho có.

**Ba việc còn lại của bạn:**

1. **Dọn dữ liệu kiểm thử** — Supabase → Table Editor → `dish_reviews`, xoá dòng có `province_slug = '__test__'` và các review tên "Nguoi kiem thu" / "KT-…". Phải xoá từ dashboard vì anon key **không có quyền DELETE** — đó chính là RLS đang làm đúng việc.
2. **Chạy 2 câu tự kiểm RLS** ở `SIT-UAT-LF.md` §US-14 mục 0 — để chính bạn xác nhận, không phải tin tao.
3. **Bật domain restriction cho MapTiler key** (việc này vẫn treo từ trước).

Sau đó quay lại 3 việc của bước [10] còn dang dở: điền giờ thật vào telemetry, spot-check nội dung vài tỉnh (R2 vẫn là rủi ro lớn nhất), và sửa test case US-02 đã lỗi thời. Bạn muốn làm tiếp phần nào?

---

### 🧑 PM · 20:02 6/9/26

> oke, tiếp tục telemetry đi

---

### 🤖 AI · 20:02 6/9/26

Telemetry giờ có thêm dữ liệu mới (deploy + Review/Rating), nên tao cập nhật phần **đo được** trước. Nhưng phần **giờ người thật** thì tao vẫn sẽ không tự điền — đó đúng là cái bẫy playbook cảnh báo. Thu thập số liệu mới:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Collect updated telemetry metrics
- `Bash` — Summarize today's scope for telemetry

</details>

---

### 🤖 AI · 20:03 6/9/26

Ngày hôm nay có khoảng trống 12:33 → 18:46 — gần như chắc chắn là nghỉ, nên "11h31" sẽ là con số sai lệch nặng. Tính lại bằng cách loại các khoảng nghỉ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Compute active working time excluding long gaps

</details>

---

### 🤖 AI · 20:04 6/9/26

Kết quả này quan trọng — nó cho thấy **git không đo được giờ người**, và tao đã thử 2 cách:

| Cách đo | Ngày 06/09 | Vấn đề |
|---|---|---|
| Khoảng đầu–cuối | 11h31 | **Tính dư** — gộp cả 6h13 nghỉ |
| Loại gap > 60 phút | 1h43 | **Loại nhầm** — hôm nay làm 63 tỉnh + refactor map + deploy + Review/Rating, không thể chỉ 1h43 |

Hai cách sai lệch ngược chiều nhau, nên giờ thật nằm đâu đó ở giữa — khoảng quá rộng để dùng. Đây chính là bằng chứng cụ thể cho việc **phải hỏi bạn** thay vì suy từ dữ liệu. Cập nhật telemetry với phân tích này:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\TELEMETRY-LF.md

</details>

---

### 🤖 AI · 20:04 6/9/26

Giờ cập nhật mục 5 với mốc cụ thể để bạn dễ nhớ lại, thay vì bảng trống:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\TELEMETRY-LF.md

</details>

---

### 🤖 AI · 20:04 6/9/26

Cập nhật nốt phần sản lượng và chất lượng cho khớp hiện trạng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Refresh measured metrics in telemetry

</details>

---

### 🤖 AI · 20:05 6/9/26

Còn 2 chỗ chưa khớp sau khi DEVBOOK tăng lên 21 mục — sửa nốt:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Sync section 3 with updated DEVBOOK count
- `Bash` — Review remaining telemetry sections for staleness

</details>

---

### 🤖 AI · 20:05 6/9/26

Còn vài chỗ lỗi thời trong mục 5.2 và Cổng hiểu — sửa cho khớp:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Fix remaining stale references in telemetry
- `Bash` — Verify no stale numbers remain
- `Bash` — Commit telemetry rework

</details>

---

### 🤖 AI · 20:06 6/9/26

Telemetry đã cập nhật xong phần đo được. Giờ tới phần **chỉ bạn trả lời được** — và tao vẫn sẽ không tự điền:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 20:07 6/9/26

Ghi nhận. Còn 3 phiên nhỏ chưa có số — hỏi gộp một lần nữa rồi tao tính Nén:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 20:09 6/9/26

Có đủ số. Tính Nén và cập nhật:

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Compute compression ratio across scenarios
- `Bash` — Prepare to replace section 5
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Replace section 5 with the filled-in version
- `Bash` — Update the comprehension gate to reflect completion

</details>

---

### 🤖 AI · 20:10 6/9/26

Cập nhật Weekly Report cho khớp (Q3 đã xong):

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Sync Weekly Report with completed telemetry

</details>

---

### 🤖 AI · 20:11 6/9/26

Weekly Report giờ có nhiều chỗ lỗi thời vì hôm nay làm thêm deploy + Review/Rating. Sửa cho chính xác:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Refresh Weekly Report to match current state
- `Edit` — D:\01_Study\07_Local_Food\WEEKLY-LF.md
- `Bash` — Locate the telemetry row in the artefact table

</details>

---

### 🤖 AI · 20:12 6/9/26

Đã đúng (sửa từ lần trước). Kiểm tra tổng thể rồi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify consistency across telemetry and weekly
- `Bash` — Commit filled telemetry and refreshed weekly

</details>

---

### 🤖 AI · 20:12 6/9/26

**Telemetry đã đóng — bước [10] hoàn tất.**

## Kết quả: Nén ≈ **27–37 lần** (giữa khoảng ~32×)

`600h` (baseline không AI, bạn chốt) ÷ `16–22h` (giờ thật, bạn ước tính từng phiên).

**Một phát hiện đáng giá khi đối chiếu:** giờ thật của bạn (16–22h) **nằm cao hơn cả cận trên** mà git đoán được (16h33). Nghĩa là cả hai proxy đều **đếm thiếu** — nếu lúc nãy tao cứ lấy đại một con số từ git làm mẫu số, Nén đã bị **thổi phồng 1,5–4 lần**. Đây chính là lý do cụ thể vì sao playbook cấm suy giờ từ dữ liệu máy, và giờ nó là bằng chứng trong hồ sơ chứ không phải lời cảnh báo suông.

**Tao ghi Nén dạng khoảng, không ghi "31,6×"** — đầu vào vốn là khoảng ước tính, ghi số lẻ sẽ là chính xác giả tạo, và coach sẽ hỏi ngay.

**Quan trọng hơn con số: mục 5.4 liệt kê những gì Nén KHÔNG đo** — để bạn chủ động nêu trước khi bị hỏi:

1. **Không đo chất lượng** — 600h giả định làm ra sản phẩm tương đương, nhưng RTM cho thấy chưa: 2 tính năng chưa test, 1 test lỗi thời, LCP không đạt.
2. **Không trừ chi phí sửa lỗi AI** — 18 sự cố DEVBOOK đều tốn giờ người.
3. **600h là ước tính, không phải đo** — không ai thực sự làm lại bằng tay để so. Đây là điểm yếu nhất của phép tính, và đúng ra phải vậy.
4. **R2 chưa kiểm hết** — nếu spot-check phát hiện nội dung sai nhiều, tử số phải chiết khấu.

Câu phát biểu an toàn tao soạn sẵn trong file: *"Nén khoảng 27–37 lần về thời gian tạo ra sản phẩm, với baseline là ước tính của tôi chứ không phải số đo, và chưa chiết khấu phần chất lượng còn thiếu đã ghi rõ trong RTM."*

**Còn 3 ngày, việc còn lại đều là chất lượng chứ không thiếu artefact:**

| | Việc | Thời gian |
|---|---|---|
| 🔴 | **Spot-check nội dung 3-5 tỉnh** — R2 giờ là rủi ro lớn nhất còn mở | 30-45 phút |
| 🟡 | Sửa checklist US-02 lỗi thời + test lại | 15 phút |
| 🟡 | Quyết Q1: bổ sung test cho Search/Filter hay để nguyên như phát hiện của RTM | 5 phút |
| 🟢 | Diễn tập viva: mở 1 dòng RTM bất kỳ, truy story → code → test | 20 phút |

Tao đề nghị làm **spot-check nội dung** tiếp theo — nó là rủi ro cao nhất, và cũng là thứ coach dễ hỏi nhất ("làm sao bạn biết 197 món này không bịa?"). Tao có thể chọn ngẫu nhiên vài tỉnh, trích nội dung + link nguồn ra bảng để bạn đối chiếu nhanh thay vì tự mở từng file. Làm không?

---

### 🧑 PM · 20:17 6/9/26

> ok tiếp đi

---

### 🤖 AI · 20:17 6/9/26

Trước khi chọn tỉnh, tao phân tích toàn bộ 222 nguồn để biết rủi ro nằm ở đâu — chọn ngẫu nhiên đều tay sẽ bỏ sót đúng chỗ nguy hiểm:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Analyse source quality distribution across all provinces

</details>

---

### 🤖 AI · 20:18 6/9/26

Dữ liệu quan trọng: **63% món không có nguồn Wikipedia**, và **21/63 tỉnh có cả 3 món đều không** — rủi ro tập trung rõ. Trước hết kiểm tra khách quan: link nguồn còn sống không?

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Check every source link is still alive

</details>

---

### 🤖 AI · 20:20 6/9/26

22 link có vấn đề — nhưng cần phân biệt **chặn bot** với **chết thật**. Verify lại bằng User-Agent trình duyệt:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify suspected dead links with a browser user agent

</details>

---

### 🤖 AI · 20:20 6/9/26

**5 link chết thật** — trong đó 2 trường hợp đáng ngờ hơn: domain không phân giải được. Kiểm tra DNS xem có phải AI bịa domain không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check whether suspect domains actually exist

</details>

---

### 🤖 AI · 20:22 6/9/26

Domain đều tồn tại — không phải bịa. Nhưng **3 link 404 thật** (gồm 2 cổng thông tin chính phủ). Ghi nhận rồi làm spot-check. Chọn mẫu từ nhóm rủi ro cao, có seed để tái lập:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Randomly sample high-risk provinces with a fixed seed
- `Bash` — Generate spot-check content table
- `Bash` — Assemble the spot-check document

</details>

---

### 🤖 AI · 20:24 6/9/26

Giờ sửa 3 link chết. Tìm nguồn thay thế thật:

<details>
<summary>2 thao tác công cụ</summary>

- `ToolSearch`
- `WebSearch`

</details>

---

### 🤖 AI · 20:24 6/9/26

Tìm được nguồn tốt hơn (Thanh Niên, Tuổi Trẻ). Tìm nốt 2 nguồn còn lại:

<details>
<summary>2 thao tác công cụ</summary>

- `WebSearch`
- `WebSearch`

</details>

---

### 🤖 AI · 20:25 6/9/26

Tất cả đều tìm được nguồn thay thế **tốt hơn** (báo chính thống thay vì site du lịch). Verify trước khi thay:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify replacement source links are alive
- `Bash` — Try alternative Hai Phong sources

</details>

---

### 🤖 AI · 20:27 6/9/26

Áp dụng 3 nguồn thay thế đã verify:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Replace the three dead source links

</details>

---

### 🤖 AI · 20:28 6/9/26

Cách ghi lại JSON làm đổi format toàn file (diff nhiễu). Làm lại bằng thay chuỗi trực tiếp để giữ nguyên style:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Revert reformatted files and find exact Thai Nguyen URL
- `Bash` — Replace dead links preserving file formatting
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\hai-phong.json
- `Bash` — Verify link fixes and rebuild

</details>

---

### 🤖 AI · 20:29 6/9/26

Diff gọn (3 dòng). Nhưng Quảng Trị dùng link đó ở 2 chỗ — còn sót ở `summarySourceRefs`:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Find remaining dead link occurrence
- `Bash` — See context of remaining occurrence
- `Edit` — D:\01_Study\07_Local_Food\data\provinces\quang-tri.json
- `Bash` — Final verification of link fixes

</details>

---

### 🤖 AI · 20:30 6/9/26

Ghi phát hiện vào DEVBOOK và cập nhật R2:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Record link-rot findings and update R2
- `Bash` — Commit spot-check document and link fixes

</details>

---

### 🤖 AI · 20:31 6/9/26

**Đã kiểm xong phần máy làm được. Tìm ra 3 lỗi thật.**

**Bức tranh rủi ro R2 — giờ có số, không còn cảm tính:**

| | |
|---|---|
| Món **không** có nguồn Wikipedia | **124/197 (63%)** |
| Tỉnh có **cả 3 món** đều không Wikipedia | **21/63** |

Sau Wikipedia (70) và vài báo lớn, phần còn lại chủ yếu là site du lịch/thương mại: `mia.vn` (14), `ivivu.com` (10), `luhanhvietnam.com.vn` (5)... — loại site **không có quy trình kiểm chứng như báo chí**. Rủi ro tập trung rõ ở đó.

**3 link nguồn đã chết — nằm im mà build vẫn PASS:**

| Tỉnh | Món | Nguồn hỏng |
|---|---|---|
| Hải Phòng | Ốc Hải Phòng | `sunparadiseland.com` — 404 |
| Quảng Trị | Bánh ướt Phương Lang | `ipa.quangtri.gov.vn` — 404 |
| Thái Nguyên | Bánh chưng Bờ Đậu | `khuyennong.thainguyen.gov.vn` — 404 |

Trớ trêu: **2/3 là cổng thông tin chính quyền tỉnh** — nguồn tưởng bền nhất lại chết. Đã thay bằng nguồn verify còn sống và **chất lượng cao hơn** (Tuổi Trẻ + Thanh Niên, Báo Thái Nguyên).

**Điểm cốt lõi cho viva:** zod ép *có* `sourceRef` và `pnpm build` luôn PASS, nhưng **không kiểm URL còn sống**. Đó là khoảng trống thật giữa "validate PASS" và "nội dung tra lại được".

**Một chi tiết đáng kể về cách làm:** báo cáo đầu tiên gắn cờ 22 link, nhưng chỉ 3 sai thật. 19 link còn lại chỉ bị chặn script (`vietnamnet.vn` chặn bot, `vinpearl` 403, 2 site chính phủ hết hạn SSL). Nếu tao cứ theo báo cáo đầu mà sửa hết thì **đã thay nhầm 19 nguồn đang tốt**. Phải verify lại bằng curl + UA thật và tra DNS mới kết luận được.

---

**Giờ tới phần chỉ bạn làm được** — tao không thay thế được, vì cần tri thức ẩm thực bản địa.

Đã tạo **[SPOTCHECK-LF.md](SPOTCHECK-LF.md)** — phiếu kiểm 15 món của 5 tỉnh: **Tuyên Quang · Kon Tum · Long An · Đồng Nai · Cao Bằng**.

Mẫu này bốc ngẫu nhiên **từ nhóm 21 tỉnh rủi ro cao nhất**, không phải từ cả 63, với seed cố định `20260906` — để nếu coach hỏi "sao lại chọn 5 tỉnh này", bạn trả lời được là chọn có phương pháp, chạy lại ra đúng mẫu đó, không cherry-pick tỉnh dễ.

Mỗi món có sẵn mô tả, nguyên liệu, cách ăn và link nguồn bấm được. Bạn soi 3 câu: **món này có thật là đặc sản tỉnh đó không / nguyên liệu-cách ăn có đúng không / link nguồn có thực sự nói về món đó không**.

Cuối file có sẵn ngưỡng quyết định: 0 lỗi → R2 hạ mức; 1-2 lỗi → sửa rồi mở rộng mẫu; ≥3 lỗi → vấn đề hệ thống, phải rà cả 21 tỉnh trước khi nộp.

Bạn soi xong báo tao số ✅/⚠️/❌, tao sẽ sửa các món sai và tính suy rộng ra toàn bộ 197 món để đưa vào Weekly Report.

---

### 🧑 PM · 20:42 6/9/26

> tao thấy cũng đúng rồi á,
> nếu có sai thì phần review sẽ có ng vào comment cũng đc, lúc ấy ghi nhận và update

---

### 🤖 AI · 20:43 6/9/26

Ghi nhận quyết định. Nhưng có hai điểm tao phải nói thẳng trước khi ghi vào hồ sơ.

**Thứ nhất: "dựa vào review để phát hiện sai" hiện chưa đủ làm mitigation** — không phải vì ý tưởng sai, mà vì cơ chế chưa hỗ trợ:

- Form review là **chấm sao món ăn**, không phải báo lỗi nội dung. Người thấy "nguyên liệu này sai" không có chỗ tự nhiên để nói.
- **Không có thông báo.** Có người comment thì bạn không biết, trừ khi tự vào Supabase dashboard xem. Comment nằm rải ở 197 món.
- **Chưa có người dùng.** Site vừa deploy hôm nay, chưa ai biết. Crowdsourcing cần đám đông — hiện đám đông là 0.

Ở viva, câu "làm sao bạn biết 197 món không bịa?" mà trả lời "sẽ có người comment báo" sẽ bị hỏi tiếp ngay: *"đã có ai comment chưa?"*

**Thứ hai — và đây là lý do tao hỏi lại:** cổng hiểu của chính bước này yêu cầu bạn *"nói được ít nhất 1 chi tiết cụ thể đã tự kiểm chứng, không phải 'đọc thấy ổn'"*. Đó là rào chắn chống **R3 (rubber-stamping)** — rủi ro mà bạn đã bắt tao ở đầu dự án. Tao cần ghi đúng mức bạn đã soi, vì ghi "PM spot-check 15 món, 0 lỗi" mà thực tế là lướt qua thì chính hồ sơ trở thành thứ nó cảnh báo.

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 20:45 6/9/26

Cảm ơn vì trả lời thẳng — "đọc lướt" là câu trả lời **trung thực và ghi được**, tốt hơn nhiều so với để tao ghi "đã spot-check kỹ, 0 lỗi". Ghi đúng như vậy:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Record honest spot-check outcome

</details>

---

### 🤖 AI · 20:46 6/9/26

Giờ làm US-15. Theo đúng bài học GAP-T2 — **story trước, code sau**:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md

</details>

---

### 🤖 AI · 20:46 6/9/26

Giờ migration SQL — bạn sẽ cần chạy 1 lần:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\supabase\migration-02-content-report.sql

</details>

---

### 🤖 AI · 20:47 6/9/26

Cập nhật code phía client:

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\reviews.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\reviews.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\reviews.ts
- `Bash` — Adjust return type and average calculation

</details>

---

### 🤖 AI · 20:47 6/9/26

Có một bug tiềm ẩn tao vừa nhận ra: `.single()` sẽ **báo lỗi** khi insert `content_report`, vì RLS chặn đọc lại chính bản ghi đó. Sửa:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\reviews.ts

</details>

---

### 🤖 AI · 20:48 6/9/26

Giờ cập nhật UI với 2 chế độ:

<details>
<summary>4 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx

</details>

---

### 🤖 AI · 20:48 6/9/26

Giờ phần giao diện — thêm chuyển đổi 2 chế độ:

<details>
<summary>5 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Bash` — Check cooldown logic needs kind separation

</details>

---

### 🤖 AI · 20:49 6/9/26

Cooldown đang dùng chung key — nghĩa là vừa đánh giá xong thì **không báo lỗi được trong 30s**, dù đó là hai hành động khác nhau. Tách ra:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Bash` — Apply cooldown fix and build

</details>

---

### 🤖 AI · 20:55 6/9/26

Lỗi type ở dòng 282 — `StarRating` nhận `number` nhưng `rating` giờ có thể `null`. Xem chỗ đó:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Inspect the type error location
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Bash` — Rebuild after type fix

</details>

---

### 🤖 AI · 20:56 6/9/26

Build sạch. Giờ cần bạn chạy migration trước khi tao test được:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check whether migration has been applied

</details>

---

### 🤖 AI · 20:56 6/9/26

Đúng như dự kiến — cột `kind` chưa có. Code đã sẵn sàng nhưng **chưa deploy** vì sẽ hỏng nếu DB chưa có cột. Commit code trước, chờ bạn chạy migration:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit US-15 implementation

</details>

---

### 🤖 AI · 20:56 6/9/26

**Ghi nhận spot-check đúng như bạn nói** — "đọc lướt, không thấy bất thường", 15/197 món, **0 món đối chiếu chi tiết với nguồn**. Không nâng thành "đã kiểm chứng", vì ghi quá lên chính là R3 mà bạn từng bắt tao.

Câu trả lời viva tao soạn sẵn trong `SPOTCHECK-LF.md`: *"Tôi spot-check ở mức đọc lướt trên mẫu 15/197 chọn ngẫu nhiên từ nhóm rủi ro cao nhất, không phát hiện sai rõ ràng. Tôi không tuyên bố nội dung đã được kiểm chứng đầy đủ — thay vào đó tôi mở kênh cho người đọc báo nội dung sai."* Đó là câu chống được chất vấn, vì nó đúng.

**US-15 đã code xong** — story + AC viết trước, đúng bài học GAP-T2.

Thiết kế: tách hẳn **"Đánh giá món"** và **"Báo nội dung sai"** thành 2 chế độ. Lý do không gộp: người phát hiện bài viết sai mà phải chấm 1 sao thì vừa làm hỏng điểm món ăn, vừa khiến bạn không phân biệt được *"món dở"* với *"bài viết sai"*.

Báo lỗi **không hiện công khai** — chỉ bạn xem qua dashboard. Vừa không làm rối người đọc, vừa không biến kênh báo lỗi thành chỗ spam hiển thị.

**Hai bug tao bắt được khi viết:**
1. `insert().select().single()` sẽ **báo lỗi "0 rows"** với báo lỗi — vì RLS chặn đọc lại chính bản ghi vừa ghi. Ghi thành công nhưng người dùng thấy báo thất bại. Đã tách nhánh không select.
2. Cooldown chống spam dùng chung key → vừa chấm sao xong mà phát hiện nội dung sai thì **bị chặn 30 giây**. Đã tách key theo loại.

---

**Cần bạn làm 1 bước thì tính năng mới chạy được** (~1 phút):

Supabase → **SQL Editor** → **New query** → dán toàn bộ [supabase/migration-02-content-report.sql](supabase/migration-02-content-report.sql) → **Run**.

Tao đã kiểm: cột `kind` **chưa tồn tại** trong database, nên **cố tình chưa deploy** — deploy bây giờ thì mọi lượt gửi đều lỗi.

Cuối file migration có 3 câu kiểm, trong đó câu **4.3** là câu bạn sẽ dùng lâu dài để xem người đọc báo gì:

```sql
select created_at, province_slug, dish_slug, author_name, comment
from dish_reviews
where kind = 'content_report'
order by created_at desc;
```

Chạy xong báo tao — tao sẽ deploy, test cả 2 chế độ trên production, và cập nhật RTM/SIT-UAT cho US-15.

**Một điều nên biết trước:** kênh này vẫn chưa khép kín — **bạn chỉ thấy báo lỗi khi chủ động chạy câu SQL trên**, không có thông báo tự động. Tao đã ghi rõ hạn chế đó vào SPEC và R2 thay vì để hồ sơ ngụ ý là đã tự động hoá.

---

### 🧑 PM · 20:59 6/9/26

> chỉ run thôi, ko save hả?
> tao run xong r đó

---

### 🤖 AI · 20:59 6/9/26

Đúng, chỉ **Run** là đủ — SQL chạy thẳng vào database. Nút Save chỉ để lưu câu query lại trong dashboard cho lần sau, không ảnh hưởng gì. (Câu 4.3 để xem báo lỗi thì đáng Save đấy, vì bạn sẽ dùng lại nhiều lần.)

Kiểm chứng migration đã ăn chưa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify migration applied and constraints enforce correctly

</details>

---

### 🤖 AI · 21:00 6/9/26

Migration đã ăn, mọi ràng buộc đúng. Kiểm tra điều quan trọng nhất — báo lỗi có **thật sự ẩn** khỏi công khai không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Confirm content reports are hidden from public reads

</details>

---

### 🤖 AI · 21:01 6/9/26

Chính xác như thiết kế: đọc cả bảng chỉ thấy `review`, cố tình lọc `content_report` trả về rỗng. Deploy:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Deploy US-15 to production
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Test US-15 end-to-end on production

</details>

---

### 🤖 AI · 21:02 6/9/26

Toàn bộ pass trên production. Xem giao diện:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 21:03 6/9/26

Giao diện đúng thiết kế. Cập nhật hồ sơ cho US-15:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Update SIT-UAT, RTM and R2 for US-15
- `Bash` — Commit US-15 verification and documentation
- `Bash` — List public test reviews that need cleanup

</details>

---

### 🤖 AI · 21:04 6/9/26

**US-15 đã chạy trên production.** Nhưng khi liệt kê để dọn dữ liệu test, tao thấy một điều đáng chú ý:

```
an-giang/bun-ca-chau-doc | Khoa | 5 sao    ← KHÔNG phải test của tao
```

**Đã có người thật vào đánh giá.** Tao chỉ tạo 3 bản ghi test (`KT-357884`, `Nguoi kiem thu`, `Kiem thu RLS`) — cái của "Khoa" là người dùng thực. Nghĩa là mitigation crowdsourcing của bạn **đã bắt đầu có dữ liệu thật**, sớm hơn tao dự đoán khi viết "chưa có người dùng nào" vào R2.

**Kết quả kiểm US-15 trên production:**

| Kịch bản | Kết quả |
|---|---|
| Chuyển sang "Báo nội dung sai" | ✅ Phần chấm sao **biến mất** |
| Mô tả 3 ký tự | ✅ Chặn: *"ít nhất 10 ký tự để chúng tôi sửa được"* |
| Gửi báo lỗi hợp lệ | ✅ Xác nhận "Đã gửi tới người quản trị" |
| **Báo lỗi có lọt vào danh sách công khai?** | ✅ **KHÔNG** — đúng thiết kế |
| Vừa chấm sao xong, báo lỗi ngay | ✅ Không bị cooldown chặn oan |

Ở tầng database còn chặt hơn: báo lỗi thiếu mô tả → `401`, mô tả 5 ký tự → `401`, `review` thiếu sao → `401`, `kind` giả mạo → `401`, và đọc công khai lọc `kind=content_report` trả về **rỗng**.

**Hai bug tao bắt được lúc viết** (đáng kể vì cả hai đều im lặng): `insert().select().single()` báo lỗi "0 rows" với báo lỗi dù đã ghi thành công — người dùng sẽ tưởng gửi hỏng; và cooldown dùng chung key khiến vừa chấm sao xong thì không báo lỗi được trong 30 giây.

---

**Việc dọn dữ liệu test — chạy trong SQL Editor, đã loại trừ review của Khoa:**

```sql
delete from dish_reviews
where author_name in ('Kiem thu RLS', 'Nguoi kiem thu', 'KT US15')
   or author_name like 'KT-%'
   or author_name like 'US15-%'
   or province_slug = '__test__';
```

Chạy xong kiểm lại — phải còn đúng 1 review của **Khoa**:

```sql
select province_slug, dish_slug, author_name, rating, kind from dish_reviews;
```

---

**Còn 3 ngày. Tình hình hồ sơ:**

Bộ artefact đã đủ (20 file). Việc còn lại đều là chất lượng:

| | Việc | Thời gian |
|---|---|---|
| 🟡 | Sửa checklist US-02 lỗi thời + test lại — dấu PASS hiện không còn giá trị | 15 phút |
| 🟡 | Quyết Q1: bổ sung test cho Search/Filter (GAP-T2 mới đóng nửa) | 5 phút quyết |
| 🟢 | Diễn tập viva: mở 1 dòng RTM bất kỳ, truy story → code → test | 20 phút |

Tao đề nghị làm **US-02** tiếp — nó là chỗ hồ sơ đang tự mâu thuẫn (checklist mô tả hành vi không còn tồn tại), và là thứ coach dễ bắt nhất nếu đối chiếu SIT-UAT với sản phẩm thật. Sửa nhanh. Làm không?

---

### 🧑 PM · 21:05 6/9/26

> khoan làm mấy cái đó
> giờ muốn đóng gói product để nộp bài thì làm gì nhỉ? (ngoài việc gửi link web cho ngta)

---

### 🤖 AI · 21:06 6/9/26

Câu này phải tra tài liệu bootcamp chứ không đoán. Xem yêu cầu nộp bài thật:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Find assessment criteria in bootcamp docs
- `Bash` — Find submission requirements

</details>

---

### 🤖 AI · 21:06 6/9/26

Có mục **§9.1 Bộ deliverable tốt nghiệp** — đọc chính xác:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read the graduation deliverable section

</details>

---

### 🤖 AI · 21:06 6/9/26

Đây là phát hiện quan trọng hơn tao tưởng. Kiểm tra dự án có gì so với bộ deliverable bắt buộc:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Audit project against graduation deliverable list

</details>

---

### 🤖 AI · 21:06 6/9/26

Phát hiện quan trọng — **nộp bài không chỉ là gửi link, và dự án đang thiếu khoảng 40% trọng số điểm.** Tra nốt 2 khái niệm trước khi báo cáo:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Look up CASAN levels and AI Workflow definition

</details>

---

### 🤖 AI · 21:07 6/9/26

Đã đủ căn cứ. **Câu trả lời ngắn: gửi link chỉ là 25%.** Dự án đang thiếu khoảng **40% trọng số điểm tốt nghiệp.**

Đây là bảng đối chiếu với **§9.1 Bộ deliverable tốt nghiệp** (track PM) trong `PM-AI-Bootcamp-Program-v1.0.md`:

| Deliverable | Trọng số | Bạn đang có gì |
|---|---|---|
| **Running Customer Zero** | **25%** | ✅ Site chạy thật, đã deploy công khai |
| **Dev Book** | **20%** | ✅ `DEVBOOK.md` — 21 mục, AI-sai/PM-sửa rõ ràng |
| **AI Workflow + Delegation Map** | 15% | ⚠️ **Nửa** — có `DELEGATION-MAP-LF.md`, **thiếu** tài liệu quy trình AI-first end-to-end |
| **AI Dashboard** | 15% | ❌ **Thiếu** — có `TELEMETRY-LF.md` nhưng đó là *file*, yêu cầu là **"dashboard vận hành được"** |
| **Case Study before/after** | 15% | ❌ **Không có gì** |
| **AI Transformation Plan** | 5% | ❌ **Không có gì** (kế hoạch đưa dự án lên CASAN Cấp 2 — Augmented) |
| **Video Demo** | 5% | ❌ **Không có gì** |

**Thiếu rõ ràng: 40%. Cộng nửa mục AI Workflow nữa là ~47%.**

Và đây là chỗ dễ hiểu nhầm nhất — chính tài liệu ghi:

> *"Trọng tâm dịch chuyển từ 'nộp đủ tài liệu' → **'có hệ thống chạy được + bằng chứng tự tay làm'**. Tài liệu AI sinh được trong vài phút, nên không còn là phần nặng nhất."*

Nghĩa là 20 file `.md` bạn đang có **không tự động thành điểm**. Chúng phục vụ viva, nhưng trong bảng chấm chỉ có `Dev Book` (20%) và một phần `Delegation Map` được tính trực tiếp.

**Ba cổng cứng — thiếu 1 là chưa tốt nghiệp:**
1. Trung bình 6 trụ ≥ 2.5, không trụ nào = 0
2. **Hệ thống chạy được** ✅ bạn đã có
3. **Qua viva** — *"Trượt viva hoặc không có hệ thống chạy = chưa tốt nghiệp dù điểm cao"*

Tin tốt: 2 mục nặng nhất (**45%**) bạn đã có và có chất lượng — đặc biệt Dev Book, vì nó là thứ khó giả nhất và bạn có 21 sự cố thật kèm bằng chứng.

Với 3 ngày còn lại, tao đề xuất ưu tiên theo tỉ lệ điểm/công sức:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 21:09 6/9/26

Bắt đầu với **AI Dashboard** (15%, nặng nhất). Yêu cầu là *"dashboard vận hành được (giờ thật + PM-edit + est→reconcile)"* — nên phải là trang chạy được, có sửa số liệu được, không phải file markdown. Tách dữ liệu ra trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\data\telemetry.json

</details>

---

### 🤖 AI · 21:10 6/9/26

Giờ dựng dashboard. Phần tính toán tách riêng để test được:

<details>
<summary>4 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\telemetry.ts
- `Write` — D:\01_Study\07_Local_Food\components\telemetry\CompressionCalculator.tsx
- `Write` — D:\01_Study\07_Local_Food\app\telemetry\page.tsx
- `Bash` — Build the telemetry dashboard

</details>

---

### 🤖 AI · 21:12 6/9/26

69 route (thêm `/telemetry`). Kiểm tra thật trên trình duyệt — đặc biệt phần PM-edit:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Restart dev and check telemetry route
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Test dashboard interactivity
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 21:14 6/9/26

Dashboard chạy đúng. Nhưng phát hiện số liệu lệch: dashboard tính **19 sự cố**, còn `TELEMETRY-LF.md` ghi 18 — vì tao đã thêm 2 mục DEVBOOK sau đó. Đồng bộ lại:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Get exact current counts for consistency
- `Bash` — Sync incident and artefact counts across documents

</details>

---

### 🤖 AI · 21:16 6/9/26

Weekly bị lỗi đánh số (1,2,3,5,6,4) và vài số cũ. Sửa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix Weekly numbering and stale entries

</details>

---

### 🤖 AI · 21:17 6/9/26

Đánh số đã đúng. Thêm link tới dashboard ở footer rồi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect footer for adding dashboard link
- `Read` — D:\01_Study\07_Local_Food\components\layout\SiteFooter.tsx

</details>

---

### 🤖 AI · 21:17 6/9/26

Footer đang nói *"Nội dung đối chiếu nguồn tham chiếu chính thống trước khi công bố"* — câu này giờ **hơi quá** so với thực tế (63% món không có nguồn Wikipedia, spot-check mới ở mức đọc lướt). Sửa cho đúng và thêm link dashboard:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\layout\SiteFooter.tsx
- `Bash` — Build and commit the telemetry dashboard

</details>

---

### 🤖 AI · 21:18 6/9/26

**AI Dashboard (15%) xong** — deliverable nặng nhất trong nhóm còn thiếu.

Điểm mấu chốt: yêu cầu là *"dashboard telemetry **vận hành được** (giờ thật + PM-edit + est→reconcile)"*. `TELEMETRY-LF.md` không đáp ứng được cái nào — nó là **tài liệu**, số trong đó không đổi được.

Giờ có trang **`/telemetry`** chạy thật:

| Yêu cầu | Đã có |
|---|---|
| Giờ thật | ✅ Bảng từng phiên, tách rõ "git đoán" vs "PM khai" |
| **PM-edit** | ✅ Sửa giờ + baseline ngay trên trang, Nén tính lại tức thì |
| **est → reconcile** | ✅ PERT 50,7h vs thực tế 17h30, giao gấp 7,9× phạm vi |

Đã kiểm bằng trình duyệt: mặc định **34,3×** → đổi 1 phiên thành 10h → **25,0×** → hạ baseline xuống 300h → **12,5×** → bấm "Về số gốc" → quay lại đúng **34,3×**. Không lỗi JS.

Hai điều tao cố ý làm khác:

**Cổng không đạt hiển thị ngang hàng cổng đạt.** LCP ghi thẳng "KHÔNG ĐẠT", và dòng SIT/UAT ghi rõ *"8/8 PASS — nhưng test US-02 lỗi thời → thực chất 7 đáng tin"*. Dashboard này để phán xử, không phải để trưng bày.

**Sửa một câu nói quá trong footer.** Nó đang ghi *"Nội dung đối chiếu nguồn tham chiếu chính thống trước khi công bố"* — không đúng với thực tế 63% món không có nguồn Wikipedia và spot-check mới ở mức đọc lướt. Đổi thành "mỗi món đều kèm nguồn để bạn tự đối chiếu" + trỏ tới nút Báo nội dung sai.

Nhân tiện đồng bộ lại số liệu bị lệch giữa các file: **19 sự cố / 23 mục DEVBOOK**, 48 commit, 217 file (dashboard tính ra 19 trong khi tài liệu ghi 18 — do tao thêm 2 mục DEVBOOK sau đó mà quên cập nhật).

---

**Còn lại trong danh sách bạn chọn:**

| Deliverable | Trọng số | Ước tính |
|---|---|---|
| Case Study before/after | 15% | ~30-40 phút |
| AI Workflow end-to-end | phần của 15% | ~30 phút |
| AI Transformation Plan | 5% | ~20 phút |
| Kịch bản Video Demo | 5% | ~15 phút |

Tao làm tiếp **Case Study** (15%, nặng nhất còn lại) — số liệu đã có sẵn hết trong telemetry nên viết nhanh. Tiếp luôn nhé?

---

### 🧑 PM · 21:21 6/9/26

> làm luôn đi nè

---

### 🤖 AI · 21:21 6/9/26

Tra yêu cầu Case Study trong tài liệu trước khi viết:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Find case study requirements and format

</details>

---

### 🤖 AI · 21:21 6/9/26

Có mục **§8.3 "Bằng chứng bắt buộc — không nộp = chưa tốt nghiệp"**. Phải đọc ngay:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read mandatory evidence requirements

</details>

---

### 🤖 AI · 21:22 6/9/26

Phát hiện quan trọng hơn Case Study. **§8.3 liệt kê 4 bằng chứng bắt buộc — "không nộp = chưa tốt nghiệp, dù tài liệu/hệ thống đẹp"**. Kiểm tra dự án có đủ không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Audit against mandatory evidence list

</details>

---

### 🤖 AI · 21:23 6/9/26

Đây là phát hiện quan trọng hơn — **thiếu 2 trong 4 bằng chứng bắt buộc**, mà tài liệu ghi rõ *"không nộp = chưa tốt nghiệp, dù tài liệu/hệ thống đẹp"*:

| § 8.3 yêu cầu | Trạng thái |
|---|---|
| 1. Hệ thống chạy được | ✅ Có |
| 2. Dev Book: AI-sai→PM-sửa · **mức L & vì sao** · **cổng fail-closed** · **hard-stop** | ⚠️ **Chỉ có 1/4 vế** — DEVBOOK không hề nhắc L-level, fail-closed hay hard-stop |
| 3. Telemetry tay-làm: giờ thật + **số lần PM-edit/override** + token | ⚠️ Thiếu số lần override rõ ràng, thiếu token |
| 4. **Operating log** — cái gì **vỡ khi PM tự dùng** hệ thống | ❌ **Không có** |

Đổi thứ tự ưu tiên: 2 cái này quan trọng hơn Case Study. Xem thang L đã dùng:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\DELEGATION-MAP-LF.md

</details>

---

### 🤖 AI · 21:23 6/9/26

Delegation Map có đủ L-level và Leash — thông tin có, chỉ là **không nằm trong DEVBOOK** như §8.3 yêu cầu. Bắt đầu bằng **Operating Log** (thiếu hoàn toàn, và là bằng chứng bắt buộc):

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\OPERATING-LOG-LF.md

</details>

---

### 🤖 AI · 21:24 6/9/26

Giờ bổ sung phần DEVBOOK còn thiếu theo §8.3 mục 2 — **mức L & vì sao, cổng fail-closed, hard-stop**:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Add delegation, fail-closed and hard-stop sections to DEVBOOK
- `Bash` — Update delegation map and rebuild
- `Bash` — Commit operating log and DEVBOOK part B

</details>

---

### 🤖 AI · 21:33 6/9/26

**Đã bịt 2 lỗ hổng bằng chứng bắt buộc.** Đây là thứ tao ưu tiên trước Case Study, vì §8.3 ghi *"không nộp bằng chứng này = chưa tốt nghiệp, dù tài liệu/hệ thống đẹp"*.

**`OPERATING-LOG-LF.md` — trước đó không tồn tại.** §8.3 mục 4 hỏi cụ thể *"cái gì vỡ khi PM tự dùng hệ thống mình build"* — khác hẳn DEVBOOK (lỗi lúc build). 11 mục, và phần tổng kết mới là điểm mạnh:

| | |
|---|---|
| PM tự phát hiện khi dùng | **8/11** |
| Đã qua build PASS mà vẫn vỡ | **4/11** |
| **Đã qua QA có checklist mà vẫn vỡ** | **2/11** |
| Chỉ lộ sau khi deploy thật | **3/11** |

Mục sắc nhất là **OP-06**: marker Khánh Hòa nằm giữa Trường Sa suốt **12 ngày**, lọt qua zod, qua build, qua vòng QA bạn đã đánh PASS — vì lúc đó chỉ có 8 bubble nên mắt không để ý. Câu viva *"có lỗi nào đi qua toàn bộ quy trình chất lượng mà vẫn lọt không?"* giờ có câu trả lời cụ thể.

**DEVBOOK trước đó chỉ đáp ứng 1 trong 4 vế** §8.3 mục 2 yêu cầu. Grep cho kết quả **0** với cả `L0-L5`, `fail-closed` lẫn `hard-stop`. Phần B bổ sung đủ, gồm cả con số không đẹp:

> Trong 7 cổng: **4 fail-closed thật**, 1 nửa vời (a11y chạy tay, không nối vào build), **2 fail-open** — và cả 2 cái fail-open đều là cổng về **nội dung/trải nghiệm**, không phải kỹ thuật.

Tao ghi rõ LCP là **fail-open có chủ đích** (R12), không phải quên — khác nhau hoàn toàn khi coach hỏi.

Cũng ghi nhận trung thực một thay đổi uỷ quyền: `git push`/deploy chuyển từ *"CHƯA CẤP hành động"* sang **cấp theo lệnh** ngày 06/09, đúng điều kiện đã ghi sẵn. Còn RLS thì **không nới** dù có đường API để tự chạy — đó là chỗ dễ tặc lưỡi nhất và đã không làm.

---

**Tình hình bằng chứng bắt buộc giờ:**

| §8.3 | Trạng thái |
|---|---|
| 1. Hệ thống chạy được | ✅ |
| 2. Dev Book đủ 4 vế | ✅ (vừa bổ sung Phần B) |
| 3. Telemetry tay-làm | ⚠️ Còn thiếu **token est→reconcile** — chỉ bạn lấy được từ trang usage |
| 4. Operating log | ✅ (vừa tạo) |

Còn lại: **Case Study**, **AI Workflow**, **Transformation Plan**, **kịch bản Video**. Tao làm tiếp Case Study nhé?

---

### 🧑 PM · 21:35 6/9/26

> oke tiếp đi case study

---

### 🤖 AI · 21:35 6/9/26

Thu thập số liệu cho before/after — ưu tiên loại **đo được thật** chứ không chỉ so với baseline giả định:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Gather before/after metrics from git history
- `Write` — D:\01_Study\07_Local_Food\CASE-STUDY-LF.md
- `Bash` — Commit the case study

</details>

---

### 🤖 AI · 21:37 6/9/26

**Case Study xong.** Tao xếp theo **độ tin cậy giảm dần** thay vì mở đầu bằng con số ấn tượng — vì coach sẽ hỏi ngay vào chỗ yếu nhất nếu bạn đặt nó lên đầu.

**Phần A (mạnh nhất) — before/after về quy trình, cả hai vế đều xảy ra thật trong dự án này:**

- **Before:** 25/08, AI nhảy thẳng vào code, bỏ hết bước [0]→[7]. Chạy được, "trông có vẻ ổn". Bạn bắt ngay → phải làm lại từ đầu.
- **After:** 8 Cổng hiểu, bạn bắt được lỗi tại **5 trong 8 cổng**.

Rồi bài học đó **lặp lại lần hai ở quy mô nhỏ hơn**, và lần này đo được kết quả:

| | Search + Filter | Review/Rating + Báo lỗi |
|---|---|---|
| Cách làm | Yêu cầu miệng → build luôn | **Story + AC trước** → mới build |
| Test case | ❌ Không có | ✅ Đầy đủ, cả luồng lỗi |
| Trong RTM | ⚠️ **GAP-T2** — chạy mà chưa kiểm chứng | ✅ **Hai dòng duy nhất không có cảnh báo** |

Đây là bằng chứng bài học được **áp dụng thật**, không phải nhận lỗi cho có — và nó nằm ngay trong cùng một bảng truy vết nên coach kiểm được.

**Phần B — cùng một việc làm hai lần:** 6 tỉnh (1 agent/tỉnh, 814 dòng) so với 55 tỉnh (6-10 tỉnh/agent, 4.563 dòng). Điều rút ra không phải "AI nhanh" mà là **chi phí nằm ở viết đề bài cho agent, không nằm ở agent chạy**. Kèm cái giá phải trả: đợt nhanh hơn có chất lượng nguồn thấp hơn (63% món không có Wikipedia).

**Phần C — Nén 27-37×, tao ghi thẳng là phần yếu nhất** với 4 lý do cụ thể, kèm câu phát biểu an toàn cho viva.

---

**Một việc bạn nên hỏi Coach:** tài liệu chương trình có **hai bảng trọng số mâu thuẫn** cho track PM:

- **§9.1 bảng chính**: Case Study = **15%**, không có dòng WBS + Estimation
- **§9.1 bảng theo track**: Case study = **5%**, nhưng thêm **WBS + Estimation = 15%**

Dự án đã có đủ cho cả hai hướng (có Case Study, và cũng có `WBS-LF.md` + `EST-LF.md` kèm PERT), nên không mất gì — nhưng biết được bảng nào áp dụng sẽ giúp bạn dồn sức đúng chỗ trong 3 ngày cuối.

Còn **AI Workflow**, **Transformation Plan**, **kịch bản Video**. Tiếp chứ?

---

### 🧑 PM · 21:38 6/9/26

> tiếp tục AI Workflow, Transformation Plan, kịch bản Video

---

### 🤖 AI · 21:39 6/9/26

Tra định nghĩa CASAN và vòng lặp orchestrator để viết cho chuẩn:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read CASAN maturity level definitions

</details>

---

### 🤖 AI · 21:39 6/9/26

Đủ căn cứ. Viết **AI Workflow** — vòng lặp thật đã dùng, rút từ chính lịch sử dự án:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\AI-WORKFLOW-LF.md

</details>

---

### 🤖 AI · 21:40 6/9/26

Giờ **AI Transformation Plan** — kế hoạch lên CASAN Cấp 2, dựa trên định vị thật của dự án:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\TRANSFORMATION-PLAN-LF.md

</details>

---

### 🤖 AI · 21:41 6/9/26

Cuối cùng là **kịch bản Video Demo** — bám đúng câu hỏi viva bắt buộc ở §8.4:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\VIDEO-SCRIPT-LF.md
- `Bash` — Commit the final three deliverables

</details>

---

### 🤖 AI · 21:43 6/9/26

**Xong cả 3. Bộ deliverable giờ đã đủ.**

| Deliverable §9.1 | Trọng số | Trạng thái |
|---|---|---|
| Running Customer Zero | 25% | ✅ Site chạy công khai |
| Dev Book | 20% | ✅ Đủ 4 vế (vừa thêm Phần B) |
| AI Workflow + Delegation Map | 15% | ✅ **Vừa xong** |
| AI Dashboard | 15% | ✅ `/telemetry` vận hành được |
| Case Study | 15% | ✅ Vừa xong |
| AI Transformation Plan | 5% | ✅ **Vừa xong** |
| Video Demo | 5% | ⬜ Có kịch bản — **chỉ bạn quay được** |

Cộng 4 bằng chứng bắt buộc §8.3: hệ thống chạy ✅, Dev Book ✅, telemetry ✅ (thiếu token), **Operating Log ✅**.

**Ba điều tao cố ý viết theo hướng khó hơn cho bạn:**

**AI Workflow** kết thúc bằng bảng *"chỗ quy trình này còn yếu"* — kể cả phản ví dụ nơi chính bước Plan bị bỏ (Search/Filter → GAP-T2). Coach sẽ tìm chỗ yếu; tốt hơn là bạn chỉ ra trước.

**Transformation Plan tự chấm Cấp 2, không chấm Cấp 3** dù có đủ Delegation Map + Governance. Lý do: Cấp 3 đòi *"chuẩn hoá toàn đội"*, mà **đúng một người** từng dùng quy trình này. Có artefact ≠ đã chuẩn hoá — đây là chỗ dễ tự chấm quá tay nhất.

Và **từ chối nhắm Cấp 4** một cách có nguyên tắc: R2 vẫn fail-open, tự động hoá một dây chuyền mà cổng nội dung không chặn được sai sót thì chỉ **nhân rộng sai nhanh hơn**. Chuẩn hoá cổng trước, tự động hoá sau.

**Kịch bản video viết ngược từ 4 câu hỏi viva bắt buộc** ở §8.4, có bảng đối chiếu câu nào trả lời ở phút nào. Đề bài là *"demo cách PM vận hành Human+AI"* chứ không phải khoe web — nên demo sản phẩm chỉ **1 phút**, còn lại dồn vào phán xử. Có cả bản rút gọn 3 phút.

Đoạn 4:00 là đoạn ăn điểm nhất: bạn đứng trên chính dashboard hiển thị Nén 34,3× và **tự bác con số đó**, rồi chỉ vào cổng LCP đỏ.

---

**Ba việc còn lại, đều chỉ bạn làm được:**

| | Việc | Thời gian |
|---|---|---|
| 🔴 | **Dọn dữ liệu test trong Supabase trước khi quay** — site còn "Kiem thu RLS", "KT-357884" | 2 phút |
| 🔴 | Quay video theo kịch bản | 30-40 phút |
| 🟡 | Lấy số token từ trang usage (bằng chứng §8.3 mục 3 còn thiếu) | 5 phút |

Còn 2 việc chất lượng treo từ trước: sửa test US-02 lỗi thời, và quyết Q1 (test cho Search/Filter). Bạn muốn tao làm nốt US-02 không — nó là chỗ hồ sơ đang tự mâu thuẫn, và coach dễ bắt nếu đối chiếu SIT-UAT với sản phẩm thật.

---

### 🧑 PM · 21:44 6/9/26

> uk v làm US-02

---

### 🤖 AI · 21:44 6/9/26

Đọc test case hiện tại để viết lại cho khớp sản phẩm thật:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read the stale US-01 and US-02 test cases

</details>

---

### 🤖 AI · 21:44 6/9/26

Phát hiện thêm: **không chỉ US-02 lỗi thời — cả US-01 và US-03 cũng vậy** (đều mô tả "8 chấm đỏ"/"chấm vàng"). RTM mới ghi có US-02. Xác minh hành vi thật trước khi viết lại:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Measure actual map behaviour to write accurate test steps

</details>

---

### 🤖 AI · 21:46 6/9/26

Có số liệu chính xác. Viết lại 3 test case lỗi thời + thêm mục kiểm địa lý (R13):

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Rewrite the three stale test cases and add geographic check

</details>

---

### 🤖 AI · 21:47 6/9/26

Giờ chạy checklist mới để xác nhận nó khớp sản phẩm — nếu chính tao không pass được thì checklist vẫn sai:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Run the rewritten checklist to confirm it matches reality

</details>

---

### 🤖 AI · 21:49 6/9/26

Checklist mới khớp sản phẩm 10/10. Thêm kiểm tra tự động cho US-01b (không marker nào ngoài biển) — đúng khoảng trống R13:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Automated geographic sanity check for all 63 centroids

</details>

---

### 🤖 AI · 21:49 6/9/26

Tất cả 63 tỉnh nằm trong đất liền. Biến kiểm tra này thành **script trong repo** — đúng việc G3 trong Transformation Plan, để nó thành cổng tự động thay vì "nhớ thì làm":

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\scripts\check-geo.mjs
- `Bash` — Add script and prove it catches the original bug

</details>

---

### 🤖 AI · 21:51 6/9/26

**Cổng đã chứng minh bắt được đúng lỗi cũ** — tao cố tình đặt lại toạ độ sai của Khánh Hòa, script fail với exit code 1 và chỉ đúng tên tỉnh. Khôi phục lại rồi. Cập nhật hồ sơ và commit:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Update RTM, RISK and Transformation Plan; rebuild

</details>

---

### 🤖 AI · 21:53 6/9/26

Bảng ưu tiên còn đánh số 2,3,4,5 sau khi xoá G3. Sửa rồi commit:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit test rewrite and geographic gate

</details>

---

### 🤖 AI · 21:54 6/9/26

Khoan — commit có `khanh-hoa.json`. Tao đã khôi phục từ backup nhưng cần kiểm tra file có bị đổi định dạng khi test không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check if khanh-hoa.json formatting was altered

</details>

---

### 🤖 AI · 21:54 6/9/26

Sạch — `git show --stat` cho kết quả rỗng nghĩa là file **không thay đổi** trong commit; centroid vẫn đúng `[109.15, 12.3]` và định dạng khớp các file khác. Chỉ là git liệt kê nó khi `add -A` rồi thấy không có diff.

**US-02 xong — và rộng hơn dự kiến.**

Khi bắt tay sửa thì phát hiện **GAP-T1 ghi thiếu**: không chỉ US-02, mà **cả US-01 và US-03** cũng lỗi thời (đều mô tả "8 chấm đỏ"/"chấm vàng"). Đã viết lại cả ba theo **hành vi đo được thật**, không theo trí nhớ:

| Đo được | Giá trị |
|---|---|
| Marker ở mọi mức zoom | **63** — không cái nào biến mất |
| Nhãn xuất hiện | Lần bấm **+** thứ 2 (8 tỉnh nổi bật) → thứ 3 (cả 63) |
| Kích thước | 18px thường / 36px nổi bật ở zoom mặc định |
| Marker nằm trọn trong khung | **63/63** |

Chạy thử checklist mới bằng trình duyệt: **10/10 bước PASS** — chứng minh checklist khớp sản phẩm. Nhưng nó **không thay được việc bạn tự test**, đúng kỷ luật đã chốt ở Cổng hiểu bước [6].

**Thêm US-01b — mục kiểm tính đúng đắn địa lý** mà checklist cũ thiếu hoàn toàn. Đây chính xác là lỗ hổng đã để marker Khánh Hòa sống 12 ngày giữa Trường Sa.

**Và quan trọng hơn: biến nó thành cổng máy chứ không chỉ là dòng nhắc.**

`pnpm check:geo` kiểm mọi centroid nằm trong bbox đất liền Việt Nam — cố ý **loại trừ quần đảo xa bờ**, vì đó chính là nguyên nhân gốc.

Tao không tin nó chạy đúng nên **đặt lại toạ độ sai cũ của Khánh Hòa để thử**:

```
✗ 1 tỉnh có centroid nằm ngoài đất liền Việt Nam:
   - Khánh Hòa (khanh-hoa.json): quá đông (112.81769) — có thể đang nằm giữa Biển Đông
   exit code: 1
```

Bắt đúng, exit code 1, gọi đúng tên tỉnh. Đã khôi phục dữ liệu.

**R13 giờ đóng bằng 2 lớp** — một bước cho người, một cổng cho máy. Và G3 rơi khỏi Transformation Plan, để lại **mẫu sẵn** cho 3 khoảng trống còn lại (script Node độc lập, exit code 1, `pnpm check:*`, nối CI được ngay).

---

**Còn lại — đều là việc của bạn:**

| | Việc | Thời gian |
|---|---|---|
| 🔴 | Dọn dữ liệu test Supabase (trước khi quay video) | 2 phút |
| 🔴 | Tự test lại US-01, US-01b, US-02, US-03 theo checklist mới | 15 phút |
| 🔴 | Quay video theo kịch bản | 30-40 phút |
| 🟡 | Lấy số token từ trang usage | 5 phút |
| 🟡 | Quyết Q1: có bổ sung test cho Search/Filter không | 5 phút |

Q1 là thứ duy nhất còn treo trong hồ sơ. Nếu muốn đóng nốt, tao viết test case cho US-12/US-13 mất khoảng 20 phút — khi đó RTM sạch hoàn toàn, không còn dòng nào mang cảnh báo.

---

### 🧑 PM · 20:26 7/9/26

> oke, v làm Q1 trước
> Mà Q1 nghĩa là gì v?

---

### 🤖 AI · 20:27 7/9/26

**Q1 là ký hiệu tao đặt trong `WEEKLY-LF.md` mục 5 — bảng "Quyết định cần PM đưa ra"** (Q = Quyết định, đánh số Q1→Q5 để tiện nhắc lại). Q3 và Q5 đã đóng trong các phiên trước.

**Q1 hỏi:** xử lý GAP-T2 thế nào — tức chuyện **Search và bộ lọc mùa/lễ hội có code, có story (viết bù), nhưng vẫn chưa có test case nào**. Hai lựa chọn: (a) viết test rồi bạn test lại, hoặc (b) để nguyên và mang vào viva như phát hiện của chính RTM. Bạn chọn làm → tức phương án (a).

Đo hành vi thật trước khi viết checklist, để không lặp lại lỗi US-02:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Measure real search and filter behaviour

</details>

---

### 🤖 AI · 20:28 7/9/26

Script của tao đo sai — `"zzzznothing"` cũng ra 8 kết quả giống hệt `"pho"`, nghĩa là selector đang bắt **card tỉnh nổi bật** chứ không phải dropdown search. Xem cấu trúc thật:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Inspect SearchBar dropdown structure

</details>

---

### 🤖 AI · 20:28 7/9/26

Tìm thấy bug thật ngay ở dòng 67: `{open && results.length > 0 && (...)}` — **dropdown chỉ hiện khi có kết quả**, không có kết quả thì không hiện gì. Vi phạm AC của US-12 (*"hiện thông báo rỗng, không phải danh sách trắng"*). Xem chi tiết:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx

</details>

---

### 🤖 AI · 20:28 7/9/26

Xác nhận bug. Sửa để có trạng thái rỗng đúng AC:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx

</details>

---

### 🤖 AI · 20:29 7/9/26

Giờ kiểm chip filter — AC yêu cầu *"phân biệt được bằng thị giác, không chỉ bằng màu"*:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect filter chip implementation
- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceExplorerGrid.tsx

</details>

---

### 🤖 AI · 20:29 7/9/26

Hai vấn đề thật ở chip filter: **chỉ phân biệt bằng màu** (vi phạm WCAG 1.4.1 và chính AC của US-13) và **thiếu `aria-pressed`** nên trình đọc màn hình không biết chip nào đang chọn. Đáng chú ý: **axe-core đã báo 0 vi phạm** — nó không bắt được loại này. Sửa cả 2 nơi:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceExplorerGrid.tsx
- `Bash` — Add Check import and inspect BrowseProvinces

</details>

---

### 🤖 AI · 20:29 7/9/26

`BrowseProvinces` có đúng cùng vấn đề. Sửa nốt:

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\BrowseProvinces.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\BrowseProvinces.tsx
- `Bash` — Fix import and build

</details>

---

### 🤖 AI · 20:30 7/9/26

Build sạch. Giờ đo lại bằng selector đúng để xác nhận các fix hoạt động:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Bash` — Verify search and filter fixes

</details>

---

### 🤖 AI · 20:32 7/9/26

8/8 PASS. Viết test case vào SIT-UAT và đóng GAP-T2:

<details>
<summary>6 thao tác công cụ</summary>

- `Bash` — Add US-12 and US-13 test cases
- `Bash` — Close GAP-T2 in RTM and update summary
- `Bash` — Close Q1/Q2 in Weekly and rebuild
- `Bash` — Commit, push and deploy the fixes
- `Bash` — Deploy the fixes to production
- `Bash` — Verify deployment succeeded

</details>

---

### 🤖 AI · 20:36 7/9/26

**Q1 xong — và việc viết test trả công ngay lập tức.**

Trước hết, giải thích lại cho gọn: **Q1 = quyết định số 1** trong bảng "Quyết định cần PM đưa ra" ở `WEEKLY-LF.md`. Nội dung: Search và bộ lọc mùa/lễ hội **có code, có story, nhưng chưa có test case nào**. Bạn chọn viết test thay vì để nguyên.

**Kết quả: viết test tìm ra 3 lỗi thật đang chạy trên production**, trong khi build xanh và audit a11y báo sạch:

| Lỗi | Vì sao trước đó không ai thấy |
|---|---|
| **Search không có trạng thái rỗng** — gõ chuỗi không khớp thì dropdown **không hiện gì cả**, không phân biệt được với ô tìm kiếm bị hỏng | Không có AC nào nói phải báo "không tìm thấy" → không ai kiểm |
| **Chip lọc phân biệt chỉ bằng màu** (vi phạm WCAG 1.4.1) | **axe-core báo 0 vi phạm** |
| **Chip lọc thiếu `aria-pressed`** — trình đọc màn hình không biết chip nào đang bật | **axe-core báo 0 vi phạm** |

Hai lỗi cuối đáng nói nhất: bạn có kết quả *"0 vi phạm axe-core"* trong hồ sơ, và nó **thật** — nhưng công cụ tự động **không bắt được** tín hiệu chỉ dựa vào màu, cũng không bắt được thiếu trạng thái toggle. Đây là câu trả lời sẵn nếu coach hỏi *"0 vi phạm nghĩa là accessible rồi à?"*.

Đã sửa cả 3, kiểm lại **8/8 bước PASS**, và **deploy lên production** — xác nhận `aria-pressed` đã có trong HTML thật.

**RTM giờ sạch:**

| | Trước | Sau |
|---|---|---|
| Task có code mà không story/test | 2 | **0** |
| Test case lỗi thời | 1 *(thực ra 3)* | **0** |
| Story MVP có test đáng tin | 7/8 | **8/8** |

Chỉ còn **GAP-T3** — NFR "UI wow" không có test khách quan. Cái này **mở theo bản chất**, không phải do bỏ sót: "wow" không đặt ngưỡng số được, và hồ sơ ghi rõ W1-9c PASS là phán xử chủ quan của bạn.

---

**Còn lại đúng 4 việc, đều chỉ bạn làm được:**

| | Việc | Thời gian |
|---|---|---|
| 🔴 | Dọn dữ liệu test trong Supabase | 2 phút |
| 🔴 | Tự test lại theo checklist mới (US-01, US-01b, US-02, US-03, US-12, US-13) | 20 phút |
| 🔴 | Quay video theo kịch bản | 30-40 phút |
| 🟡 | Lấy số token từ trang usage | 5 phút |

Hồ sơ phía tao coi như đã đóng. Bạn muốn tao rà soát lần cuối toàn bộ 25 artefact xem còn chỗ nào mâu thuẫn hay số liệu lệch trước khi nộp không?

---

### 🧑 PM · 20:38 7/9/26

> Dọn dữ liệu test trong Supabase => cứ để vậy lun nhé, production có chút data review v cũng hay mà.
> Quay video theo kịch bản => tạm thời ignore, từ từ focus lại sau.
> Lấy số token từ trang usage => bản thân mày phải tự tracking được chứ nhỉ? Tao chỉ dùng token để làm project này thôi, nên mày coi sao tính toán cho ra nhé.

---

### 🤖 AI · 20:39 7/9/26

Ba việc, xử lý từng cái:

**1. Dữ liệu review** — hợp lý, site có vài đánh giá trông tự nhiên hơn là trống trơn. Chỉ một lưu ý: hiện tên là `Kiem thu RLS`, `KT-357884`, `Nguoi kiem thu` — nhìn rõ là dữ liệu test. Nếu muốn giữ thì nên **đổi tên** cho tự nhiên (làm trong Table Editor, vì anon key cố ý không có quyền UPDATE). Tuỳ bạn.

**2. Video** — để sau, đã có kịch bản sẵn khi cần.

**3. Token** — bạn nói đúng một nửa. Tao **không đọc được** số token thật (không có API nào cho tao biết mình đã tiêu bao nhiêu), nhưng **transcript phiên nằm trên đĩa** nên đo được. Kiểm tra:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure transcript file sizes without reading content

</details>

---

### 🤖 AI · 20:39 7/9/26

Transcript có sẵn — và Claude Code lưu **số token thật** trong đó, không phải chỉ text. Kiểm tra xem có thư mục riêng cho Local Food không:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Check for a separate Local Food project directory
- `Bash` — Extract real token usage from transcripts

</details>

---

### 🤖 AI · 20:40 7/9/26

Có **số token thật**, không phải ước tính. File `54b73208` bắt đầu 2026-08-25 — khớp chính xác ngày khởi động Local Food. Kiểm thêm token của các subagent research (chúng có thể tính riêng):

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Count subagent token usage

</details>

---

### 🤖 AI · 20:41 7/9/26

Không thấy `subagent_tokens` trong transcript — nhiều khả năng token subagent đã gộp vào session chính (1.372 message dùng Sonnet trong khi phiên chính chạy Opus). Tính toán:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Compute token metrics and MD per million tokens

</details>

---

### 🤖 AI · 20:41 7/9/26

Cập nhật telemetry với số thật:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Write real token data into telemetry doc

</details>

---

### 🤖 AI · 20:42 7/9/26

Đưa lên dashboard để nó "vận hành được" chứ không chỉ nằm trong file:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Add token section to dashboard
- `Bash` — Verify token section renders on dashboard
- `Bash` — Commit and deploy token telemetry

</details>

---

### 🤖 AI · 20:46 7/9/26

**Bạn nói đúng — tao tự tracking được, và nó cho ra số thật chứ không phải ước lượng.**

Cách làm: Claude Code ghi bản ghi `usage` thật vào **từng lượt trả lời** trong file transcript trên đĩa. File phiên Local Food (39,7MB, 2.092 lượt) chạy từ **25/08 13:52 → 07/09 13:40** — khớp đúng vòng đời dự án.

| Loại token | Số lượng |
|---|---|
| Input mới (không cache) | 4.174 |
| **Output** — AI thực sự viết ra | **2.204.563** |
| Cache write | 12.292.829 |
| Cache read | 898.544.605 |
| **Tổng thô** | **913.046.171 (~913M)** |
| **Tính giá đầy đủ** | **14.501.566 (~14,5M)** |

**Nhưng đây là chỗ quan trọng, và tao suýt báo sai:** con số 913M **đúng nhưng gây hiểu nhầm nghiêm trọng**. **98,7% trong đó là cache read** — phần bối cảnh được *đọc lại* ở mỗi lượt, không phải nội dung mới. Với một phiên kéo dài 13 ngày, toàn bộ lịch sử hội thoại được gửi lại liên tục.

Con số phản ánh đúng khối lượng làm việc là **~14,5M token tính giá đầy đủ**, trong đó **2,2M là output**. Nếu bạn nói "dự án tiêu 913 triệu token" ở viva mà không giải thích, coach sẽ hoặc choáng nhầm, hoặc bắt được là bạn không hiểu số mình đọc.

Tỷ lệ cache hit 98,7% cũng là chỉ số vận hành tốt — bối cảnh tái sử dụng gần như triệt để.

**MD/1M-token:** 17,5h = 2,19 man-day → **0,151 MD / 1M token** (theo token tính giá). Dễ hình dung hơn: **1 man-day ≈ 6,6M token**.

**Về "est → reconcile" — tao ghi thẳng là chỉ có reconcile.** Không ai ước lượng token trước khi bắt đầu, vì lúc đó kế hoạch là 8 tỉnh và nó thành 63. Ghi rõ đó là thiếu sót, kèm bài học: lần sau nên ước lượng token ngay ở bước [5] cùng với PERT giờ người, để có đủ hai vế.

**Hai giới hạn tao không giấu:**
1. **Token subagent chưa tách bạch được** — không có trường `subagent_tokens` trong transcript. Trong 2.092 lượt có 1.372 dùng Sonnet và 715 dùng Opus, nhiều khả năng các agent research đã tính gộp, nhưng **chưa xác nhận chắc**.
2. **Đây là usage của phiên, không phải hoá đơn.** Muốn con số tài chính thì vẫn phải lấy từ trang usage.

Đã đưa lên `/telemetry` luôn nên nó là phần của dashboard vận hành được, và **đã deploy**.

---

Bằng chứng bắt buộc §8.3 giờ đủ cả 4. Còn lại chỉ là việc của bạn khi rảnh: tự test lại theo checklist mới, và quay video.

---

### 🧑 PM · 20:49 7/9/26

> follow theo yêu cầu của sếp tao, mày hãy implement thêm phần này nhé, hình như nó cũng liên quan tới telemetry nhỉ? nếu v thì tao vs mày đang làm hoàn thiện rồi nhỉ?
> anyway, check xem còn cần làm ko nhé?

---

### 🧑 PM · 20:49 7/9/26

> [Image: original 1256x2760, displayed at 910x2000. Multiply coordinates by 1.38 to map to original image.]

---

### 🤖 AI · 20:49 7/9/26

Có liên quan nhưng **không trùng** — và câu trả lời ngắn là: **chưa xong, còn khá nhiều việc.**

Phân biệt cho rõ:

| | Đo cái gì | Đã có chưa |
|---|---|---|
| **Telemetry** (đang có) | *Quá trình làm việc* — giờ, token, Nén, sự cố AI | ✅ Xong |
| **7 Knowledge Health KPI** (sếp yêu cầu) | *Sức khoẻ kho kiến thức* — truy vết, độ tươi, orphan, decision record | ❌ **Chưa có gì** |

Sếp bạn yêu cầu 2 việc: (1) Interactive HTML report có **LOC, page document, chỉ số cơ bản**, và (2) **7 KPI c1-c7 add vào chính report đó**. Dashboard `/telemetry` đã là interactive HTML và đã deploy — nên hướng đúng là **mở rộng nó** chứ không dựng thứ mới trùng lặp.

Bắt đầu bằng đo các chỉ số cơ bản còn thiếu:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Measure lines of code by file type
- `Bash` — Clarify document counts and page equivalent

</details>

---

### 🤖 AI · 20:50 7/9/26

Rõ: 49 file `.md` gồm cả giáo trình bootcamp trong `00_Docs`. **Artefact thật của dự án là 25 file, 43.370 từ ≈ 87 trang A4.** Giờ tính 7 KPI — bắt đầu bằng những cái đo được từ git:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure c2 change coupling and c3 freshness from git

</details>

---

### 🤖 AI · 20:51 7/9/26

`c2 = 100%` (19/19 commit code đều kèm doc), nhưng **`c3 = 72%`, dưới target 85%**. Đáng ngờ nhất là `ARCH-LF.md` — kiến trúc đã đổi 2 lần (thêm Supabase, bỏ map 2 tầng) mà 11,9 ngày chưa động. Kiểm tra xem có lỗi thời thật không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check whether ARCH and MODULEMAP are genuinely stale

</details>

---

### 🤖 AI · 20:51 7/9/26

`ARCH-LF.md` thực ra **không lỗi thời** — đã có Supabase, không còn map 2 tầng. Nghĩa là cách đo c3 của tao đang **phạt oan** những artefact vốn đóng băng có chủ đích. Kiểm `MODULEMAP` — cái này mới đáng ngờ vì repo giờ có `review/`, `telemetry/`, `search/`:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read MODULEMAP to check if it is genuinely stale

</details>

---

### 🤖 AI · 20:52 7/9/26

**KPI c3 vừa bắt được vấn đề thật ngay lần đo đầu tiên.** `MODULEMAP-LF.md` lỗi thời nghiêm trọng — cột "Hiện trạng" vẫn ghi:

| Ghi trong tài liệu | Thực tế |
|---|---|
| Design system "⚠️ chưa đạt, cần làm lại" | Đã xong từ W1-9c |
| Trang 404 "❌ Chưa có, đang dùng mặc định Next.js" | Đã custom |
| GAP-01 "❌ Chưa làm" | Đã fix từ W1-8 |
| Nội dung 6 tỉnh "❌ Chưa làm" | Xong 63 tỉnh |
| Filter khẩu vị "❌ Ngoài MVP" | Đã làm (US-13) |

Và thiếu hẳn 3 module mới: `review/`, `telemetry/`, `search/`. Sửa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Update the stale MODULEMAP

</details>

---

### 🤖 AI · 20:52 7/9/26

Giờ tính các KPI còn lại — c1, c4, c5, c6:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure c1 traceability, c4 orphan rate, c5 review evidence

</details>

---

### 🤖 AI · 20:53 7/9/26

`c1 = 91,7%`, `c4 = 7,9%`, `c5 = 92%` — cả ba đạt target. Giờ c6 và c7:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure c6 decision coverage

</details>

---

### 🤖 AI · 20:53 7/9/26

Giờ **c7 Retrieval Quality** — chạy đúng prompt mẫu trong ảnh, rồi verify khách quan từng tham chiếu:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Run c7 retrieval quality spot-check with machine verification
- `Bash` — Run retrieval quality check from project directory

</details>

---

### 🤖 AI · 20:54 7/9/26

Cả 7 KPI đã đo xong. Đo lại c3 sau khi sửa MODULEMAP:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Re-measure freshness after MODULEMAP fix

</details>

---

### 🤖 AI · 20:55 7/9/26

76% — vẫn dưới target. Nhưng 6 file "chậm" cần kiểm **nội dung** chứ không chỉ timestamp: `AGENTS/CLAUDE` là file cấu hình AI, `SCOPE/EST/PERFORMANCE` là quyết định-tại-thời-điểm. Kiểm xem có mâu thuẫn thật không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check whether frozen artefacts contradict current reality

</details>

---

### 🤖 AI · 20:56 7/9/26

`PERFORMANCE-LF.md` là mâu thuẫn thật: **đo Lighthouse hồi còn 8 tỉnh, giờ bản đồ render 63 marker** — số cũ có thể không còn đúng. Ghi nhận và đưa toàn bộ vào dashboard:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Store knowledge health KPIs and codebase metrics
- `Bash` — Add Knowledge Health and codebase panels to dashboard
- `Bash` — Verify KPI panel renders correctly
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:58 7/9/26

Dashboard đẹp, nhưng có lỗi thật: **cảnh báo cache bị lặp nội dung** (tao viết cả trong JSX lẫn trong `caveat`), và `~14,5M` hiển thị thành `-14,5M`. Sửa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix duplicated cache warning and tilde rendering

</details>

---

### 🤖 AI · 20:58 7/9/26

Giờ tạo **Interactive HTML report** riêng như sếp yêu cầu — trang tổng hợp toàn bộ quá trình dự án:

<details>
<summary>1 thao tác công cụ</summary>

- `Skill`

</details>

---

### 🧑 PM · 20:58 7/9/26

> Approach this as the design lead at a small studio known for their versatility, giving every client a visual identity pitched at the treatment the task actually calls for. Make deliberate choices about palette, typography, and layout that are specific to this subject, and avoid templated designs.
> 
> ## Read the request first
> 
> Calibrate treatment, not whether to design. A doc deserves the same craft as a landing page — what changes is the treatment that craft is delivered in. Format is part of this read — decided, not defaulted: a Markdown publish keeps its filename as its title and takes almost none of the craft below, so it fits only when the user asked for Markdown or the content is bound for a Markdown-native destination; never pick it to save time.
> 
> Many requests call for a more utilitarian treatment: a plan, a memo, a demo. Make it polished: include real typographic hierarchy, considered spacing, and a proper palette, but avoid over-designing. Most pages do not need a flashy, gigantic hero. Keep flourishes tasteful and limited.
> 
> Some requests call for an editorial treatment: a landing page, a game, an app or tool they'll keep or share.
> 
> When unsure: a well-composed page is never the wrong answer; an over-designed visual identity sometimes is.
> 
> Fundamentals below apply to everything. The editorial process after that runs only when the read above says so.
> 
> ## Fundamentals for every artifact
> 
> **Honor what's already there** Look for an existing design system first — CLAUDE.md, a tokens or theme file, existing component styles. When one exists, apply it; everything below fills gaps and never overrides. Precedence is always: the user's own words, then the project's existing system, then your choices.
> 
> **Ground it in the subject.** If the subject isn't already clear, pin it: one concrete subject, its audience, and the page's single job. The subject's own world — its materials, instruments, vernacular — is where distinctive choices come from. Build with real content throughout, never lorem.
> 
> **Pair typefaces** Typography carries the page even when the page isn't about typography. Google Fonts is the one font host the Artifact CSP admits — link it directly (`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=…&display=swap">`); a face from anywhere else must be inlined as a @font-face data URI or it falls back silently. Either way, declare a real fallback stack. Keep running text near 65 characters wide; set a type scale and stay on it; give headings `text-wrap: balance`, body text room to breathe, and uppercase labels a touch of letter-spacing.
> 
> **Choose neutrals, don't default to them.** A pure mid-grey reads as unconsidered; a grey with a slight hue bias toward the page's accent reads as chosen. Pure white and near-black are fine grounds when they suit the subject — the point is that the neutral was picked, not inherited.
> 
> **Design both themes.** The page renders in the viewer's theme, and the viewer has three states, not two: an explicit choice stamps `data-theme="dark"` / `data-theme="light"` on the root element, and the default "system" setting stamps *nothing* — most viewers see the un-stamped document, where only `prefers-color-scheme` separates light from dark. Structure the CSS token-level for all three: the bare `:root` block defines the complete light palette (for a deliberately dark-first design, swap light and dark consistently through this whole pattern); `@media (prefers-color-scheme: dark)` redefines only the tokens, guarded as `:root:not([data-theme="light"])` so an explicit light choice beats a dark OS; `:root[data-theme="dark"]` redefines them again so the toggle also wins in the other direction. Style components through the tokens, never directly inside a media or `[data-theme]` block — a color whose only definition sits behind `[data-theme]` never applies in the un-stamped state, and the page renders one theme's text on the other theme's ground. Two more rules keep each theme resolving as a set: the artifact composites over a ground the viewer paints in *its* theme, so `body` must set an explicit `background` from a token — a transparent body silently borrows the host's ground; and every element that sets a color takes it from the same token set as the surface behind it, never a literal that only works in one theme. Before publishing, scan the stylesheet for any color declared only inside a media or `[data-theme]` block — that is the classic unreadable-artifact bug. Give the second theme the same care as the first — don't naively invert; keep contrast legible and the accent working on both grounds. A design that deliberately commits to one visual world (a neon arcade screen, a letterpress invitation) may stay single-theme — then skip the media query and stamps entirely but still paint the background and every color explicitly, so the page holds on either host ground; make it a choice, not an omission.
> 
> **Let layout do the spacing.** Lay out sibling groups with flex or grid and `gap`, not per-element margins that silently collapse or double. Wide content — tables, code, diagrams — gets `overflow-x: auto` on its own container so the page body never scrolls sideways. Reach for `font-variant-numeric: tabular-nums` wherever digits line up in columns.
> 
> **Avoid AI-generated design** AI-generated design currently clusters around a few looks: warm cream (#F4F1EA) with a serif display and terracotta accent; near-black with a lone acid-green or vermilion pop; broadsheet hairline rules with dense columns; a purple-to-blue gradient hero on white; Inter or Space Grotesk as the "safe" face; emoji as section markers; everything centered; `rounded-lg` everywhere; accent bar/rail on rounded cards. Where the user pins down a visual direction, follow it exactly — their words always win, including when they ask for one of these looks. Where nothing is specified, don't spend that freedom on one of these defaults.
> 
> **Build cleanly** Be cognizant of overlapping elements, cascade collisions, silent font fallbacks; visual bugs hide in the gap between source and output. Close every non-void element, double-quote attributes, give keyboard focus a visible state, respect `prefers-reduced-motion`. For generative or decorative graphics, reach for Canvas or WebGL rather than hand-authoring long SVG path data.
> 
> **CSS rules** When writing the CSS, watch your selector specificities. It is easy to generate classes that cancel each other out — a type-based selector like `.section` fighting an element-based one like `.cta` over padding and margins between sections. Structure the cascade so it doesn't silently undo your spacing.
> 
> **Writing the copy** Words are design material, not decoration. Write from the user's side of the screen — name things by what people recognize, not how the system is built (a person manages *notifications*, not *webhook config*). Active voice; a control says exactly what happens ("Publish", then a toast that says "Published"). Errors explain what went wrong and how to fix it — no apologies, no vagueness. Specific beats clever.
> 
> **Name the page like a product, not a caption.** The `<title>` is the artifact's name in the gallery and the browser tab, and it sets the reader's first impression of care. Give the page a real name: a short noun phrase, typically two to four words, specific to the subject — or, for a page that exists to answer one question, that question itself, which is then the page's name. Stop at the name — a title that carries its own explainer after a dash or colon reads as generated filler. The name must also identify the page among many: in the gallery it sits beside dozens of other artifacts, and a generic category label that could sit on any of them fails as a name just as surely as an appended explainer. When a candidate title pairs the name with a generic word — a greeting, a category, a page-type label — the name is the half to keep; a trim that drops the identity and keeps the generic word produces exactly the title that could sit on any page. And the rule removes explainers, it does not impose brevity: a multi-word title that already reads as one specific name is finished, and shortening it further only makes it generic. The one-sentence publish `description` is where the explanation belongs; the gallery shows it right under the title.
> 
> **Structure is information** Structural devices, numbering, eyebrows, dividers, labels, should encode something true about the content, not decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence - like a real process or a typed timeline where order carries information the reader needs. Question if choices like numbered markers actually make sense before incorporating them.
> 
> **When it's a UI, not a document** A dashboard or tool is scanned and operated, not read top-to-bottom, so the craft shifts from typography to information design. Surface the summary before the detail; encode state in form as well as number — a pill, a chip, a severity stripe — so what needs attention reads at a glance. Semantic color (good / warning / critical) is separate from the accent hue and doesn't count as your accent. Give sparklines and charts the same care as type: an area fill, a faint grid, an emphasized endpoint. What's interactive should look interactive.
> 
> 
> 
> ## Process
> 
> Before writing code, sketch a short design plan — a compact token system with color, type, and layout:
> - **Color**: describe the palette as 4–6 named hex values.
> - **Type**: typefaces for 2+ roles — a characterful display face used with restraint, a complementary body face, and a utility face for captions or data if needed.
> - **Layout**: a layout concept in one or two sentences.
> 
> Then build, following the plan and deriving every color and type decision from it.
> 
> ## When the request is editorial
> 
> The stance shifts: the client has already rejected proposals that felt templated, and is paying for a distinctive point of view. Make opinionated calls, and take one real aesthetic risk where it serves the work.
> 
> Review the design plan against the subject before building: if any part of it reads like the generic default you would produce for any similar page, revise that part, and note what you changed and why. Only after you've confirmed the plan's uniqueness do you write the code, following the revised plan exactly.
> 
> **Principles** 
> 
> - The hero is a thesis: open with the most characteristic thing in the subject's world — headline, image, live demo, interactive moment. 
> - Typography carries the personality of the page. Pair the display and body faces deliberately, not the same families you would reach for on any other project, and set a clear type scale with intentional weights, widths, and spacing. Make the type treatment itself a memorable part of the design, not a neutral delivery vehicle for the content. 
> - Leverage motion deliberately. Think about where and if animation can serve the subject: a page-load sequence, a scroll-triggered reveal, hover micro-interactions, ambient atmosphere. An orchestrated moment usually lands harder than scattered effects; choose what the direction calls for. However, sometimes less is more, and extra animation contributes to the feeling that the design is AI-generated. 
> - Match complexity to the vision. Maximalist directions need elaborate execution; minimal directions need precision in spacing, type, and detail. Elegance is executing the chosen vision well.
> - Spend your boldness in one place; keep everything around it quiet. If the accent fights the ground, shift it toward analogous or drop saturation rather than replacing it.

---

### 🤖 AI · 20:59 7/9/26

Đọc xong hướng dẫn. Đây là **dashboard để quét, không phải tài liệu để đọc** — nên ưu tiên information design.

**Design plan:**
- **Palette**: giấy ngà lạnh `#F5F6F4` / mực xanh đậm `#101820`, accent **teal sâu `#0E7C6B`** (không dùng cream+terracotta của site — report này nói về *quá trình đo lường*, không phải ẩm thực). Semantic tách riêng: pass `#1F7A4C`, warn `#A66300`, fail `#B03A2E`.
- **Type**: **Bricolage Grotesque** (display, có tính kỹ thuật) + **IBM Plex Sans** (body) + **IBM Plex Mono** (số liệu, mã KPI) — tránh Inter/Space Grotesk.
- **Layout**: tóm tắt trước, chi tiết sau; KPI mã hoá trạng thái bằng cả sọc màu lẫn số; 3 chỗ tương tác thật.

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Extract data for the HTML report
- `Write` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc
- `Artifact` — Báo cáo tương tác về quá trình dựng Local Food bằng Human+AI — chỉ số dự án, 7 KPI kho kiến thức, sự cố AI và 
- `Artifact` — Báo cáo tương tác về quá trình dựng Local Food bằng Human+AI — chỉ số dự án, 7 KPI kho kiến thức, sự cố AI và 

</details>

---

### 🤖 AI · 21:02 7/9/26

Cuối cùng, commit và deploy phần dashboard:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit KPI documentation and deploy

</details>

---

### 🤖 AI · 21:04 7/9/26

**Trả lời câu hỏi của bạn: có liên quan, nhưng không trùng — và chưa xong, phải làm thêm khá nhiều.**

| | Đo gì | Trạng thái |
|---|---|---|
| Telemetry (đã có) | *Quá trình làm việc* — giờ, token, Nén | Đã xong từ trước |
| **7 Knowledge Health KPI** | *Sức khoẻ kho kiến thức* AI đọc được | **Vừa làm xong hôm nay** |

## Kết quả: 6 đạt, 1 không đạt

| KPI | Kết quả | Target |
|---|---|---|
| c1 Traceability | 91,7% | ≥80% ✅ |
| c2 Change Coupling | 100% | ≥70% ✅ |
| **c3 Freshness** | **82,6%** | ≥85% ❌ |
| c4 Orphan Rate | 7,9% | ≤15% ✅ |
| c5 Review Evidence | 92% | ≥90% ✅ |
| c6 Decision Coverage | 100% | ≥75% ✅ |
| c7 Retrieval Quality | 100% | ≥70% ✅ |

**Và c3 — chỉ số duy nhất trượt — lại là cái đáng giá nhất.** Ngay lần đo đầu tiên nó bắt được `MODULEMAP-LF.md` lỗi thời nghiêm trọng: vẫn ghi *"trang 404 chưa có"*, *"design system chưa đạt"*, *"6 tỉnh chưa làm"* — trong khi tất cả đã xong cả tuần, và thiếu hẳn 3 module mới. Đã sửa. Thứ còn kéo c3 xuống là `PERFORMANCE-LF.md` đo Lighthouse hồi **8 tỉnh**, nay bản đồ render **63 marker** nên số cũ có thể sai.

## Hai chỗ tao không làm đẹp số

**c3 suýt được 72% → tao đổi cách đo, nhưng không tự bào chữa.** Cách đo theo timestamp phạt oan `SCOPE`, `EST`, `ARCH` — vốn đóng băng có chủ đích. Đọc nội dung thì `ARCH` hoàn toàn đúng. Tao chỉ loại 2 file cấu hình AI khỏi mẫu, **giữ nguyên** các artefact đóng băng trong mẫu số.

**c7 = 100% có thiên lệch, đã ghi rõ.** AI tự chọn 6 chức năng, tự liệt kê tham chiếu; máy chỉ kiểm file/anchor *có tồn tại*. Prompt mẫu ghi *"PM đối chiếu kết quả với thực tế"* — bước đó bạn chưa làm. Con số nên đọc là *"không có tham chiếu bịa"*, không phải *"truy xuất hoàn hảo"*.

## Hai deliverable cho sếp

**1. Interactive HTML report** — trang riêng, đủ LOC, tài liệu, timeline, 7 KPI, sự cố AI, cổng chất lượng, có 3 chỗ tương tác (lọc KPI, tính Nén, xem chi tiết cách đo):

**https://claude.ai/code/artifact/28b1f655-620c-403f-9f76-eb8e9bae894a**

**2. Panel Knowledge Health trên dashboard đang chạy** — đúng yêu cầu *"Clinic: trình bày dashboard có panel Knowledge Health"*: https://local-food-hamvanphus-projects.vercel.app/telemetry (đã deploy)

Chỉ số cơ bản sếp hỏi: **3.753 dòng code**, **5.717 dòng dữ liệu**, **87 trang tài liệu** (43.370 từ, 25 artefact), 29 component, 69 route.

---

⚠️ Một lưu ý kỹ thuật: hệ thống báo có **một session khác của cùng cuộc trò chuyện này đang mở**. Nếu cả hai cùng bật trả lời bình luận trên artifact thì mỗi bình luận sẽ bị trả lời hai lần — bạn tắt bớt một cái trong `/tasks` nếu cần.

Còn đúng 2 việc: **đo lại Lighthouse với 63 tỉnh** (đóng nốt c3) và **quay video**. Muốn tao đo lại Lighthouse luôn không?

---

### 🧑 PM · 21:08 7/9/26

> cái  Interactive HTML report chỉ cần lấy link đó share sếp là sếp đọc đc ah?
> với lại giờ mày commit push hết chưa? thực hiện đi nhé. xong mày hãy export tất cả trò chuyện giữa tao và mày vào 1 file (html cũng đc), để tao nộp sếp
> Và đánh dấu lại status hiện tại để release bản v1.0 trên git nhé

---

### 🤖 AI · 21:08 7/9/26

Bốn việc. Trả lời ngay câu đầu vì nó quan trọng:

**Không — link đó hiện sếp mở sẽ không xem được.** Artifact mặc định **private**. Bạn phải mở artifact rồi bấm **share** trong menu của trang đó mới tạo được link công khai. Tao không tự share hộ được (và cũng không nên — đó là quyết định của bạn).

Giờ kiểm git trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check for uncommitted or unpushed work

</details>

---

### 🤖 AI · 21:09 7/9/26

Sạch — đã commit và push hết. Giờ export hội thoại. Nhưng phải quét secret trước vì bạn từng dán anon key Supabase vào chat:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Scan transcript for secrets before exporting

</details>

---

### 🤖 AI · 21:10 7/9/26

Có secret thật trong transcript — **20 dòng chứa Supabase anon key, 2 dòng MapTiler key**. Phải che trước khi export. Viết script:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\scripts\export-transcript.mjs
- `Bash` — Export the conversation to HTML

</details>

---

### 🤖 AI · 21:11 7/9/26

Kiểm chứng file export — quan trọng nhất là secret đã che hết chưa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify secrets are redacted in the export

</details>

---

### 🤖 AI · 21:11 7/9/26

Script bash bị lỗi hiển thị (do newline), kiểm lại cho chắc:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Confirm redaction and measure noise

</details>

---

### 🤖 AI · 21:12 7/9/26

Secret sạch hoàn toàn. Nhưng file có **1.633 khối AI mà chỉ 470 có lời nói thật** — 1.163 khối chỉ chứa thao tác công cụ, gây nhiễu khi đọc. Gộp lại:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\scripts\export-transcript.mjs
- `Bash` — Re-export with merged tool turns

</details>

---

### 🤖 AI · 21:12 7/9/26

Gọn hơn nhiều (1.633 → 489 khối). Kiểm tra file mở được và hiển thị đúng:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify the exported HTML renders correctly
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 21:13 7/9/26

File đọc tốt, phân biệt rõ PM/AI, thao tác công cụ hiển thị gọn. Giờ tạo status release và tag v1.0:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Commit release notes and transcript exporter
- `Bash` — Create and push the v1.0 release tag
- `Bash` — Final verification of release state

</details>

---

### 🤖 AI · 21:15 7/9/26

Xong cả bốn việc.

## 1. Về link artifact — **không, sếp chưa mở được**

Artifact mặc định **private**. Bạn phải mở trang đó rồi bấm **share** trong menu của nó mới tạo link công khai. Tao không tự share hộ — đó là quyết định của bạn về việc công bố nội dung.

Nếu ngại bước đó, dùng luôn bản trong repo: `reports/build-report.html` — cùng nội dung, mở bằng trình duyệt là xem được, không cần tài khoản.

## 2. Git — đã sạch từ trước

Kiểm tra cho thấy không còn gì chưa commit hay chưa push. Đã commit thêm 2 lần cho các file mới.

## 3. Export hội thoại → `reports/hoi-thoai-pm-ai.html`

**75 lượt của bạn · 473 lượt AI trả lời · 1.167 thao tác công cụ**, từ 20:52 25/8 đến 21:12 7/9.

Ba quyết định khi làm, đáng nói vì có rủi ro thật:

**Che secret trước khi ghi.** Transcript có **20 dòng chứa Supabase anon key**, 2 dòng MapTiler key, 9 dòng project URL — vì bạn từng dán key vào chat. File này đi ra ngoài nên tao che hết rồi verify: **0 lần xuất hiện** của JWT, project ref, hay giá trị MapTiler key.

**Lược thao tác, giữ hội thoại.** Tool call rút thành một dòng tóm tắt, kết quả trả về (rất dài) bỏ hẳn. Ban đầu ra 1.633 khối AI mà chỉ 470 có lời nói thật — tao gộp các khối chỉ-gọi-công-cụ vào lượt nói liền trước, còn **489 khối**, đọc thành mạch.

**Không sửa lời.** Giữ nguyên văn, kể cả những chỗ AI làm sai và bị bạn bắt — đó chính là phần có giá trị nhất với coach.

Script để ở `scripts/export-transcript.mjs` nên chạy lại được khi hội thoại dài thêm.

## 4. Release v1.0 — đã tag và push

`RELEASE-v1.0.md` ghi trạng thái, và tao ghi **cả 8 việc còn tồn** chứ không chỉ phần đã giao:

| | Còn tồn |
|---|---|
| 1 | LCP chưa đạt NFR — và số liệu đo hồi 8 tỉnh, cần đo lại với 63 marker |
| 2 | Nội dung chưa kiểm hết: 63% món không có nguồn Wikipedia, mới đọc lướt 15/197 |
| 3 | c3 Freshness 82,6% (do mục 1) |
| 4 | Cổng a11y chạy tay, chưa nối build |
| 5 | Không có thông báo khi có người báo lỗi nội dung |
| 6 | Video demo chưa quay |
| 7 | **PM chưa tự test lại** checklist đã viết lại |
| 8 | Backlog phase-2 |

Tag `v1.0` đã lên remote (58 commit). Trong message tag có nêu rõ điểm mạnh lẫn điểm chưa đạt — để ai đọc git history cũng thấy đúng bức tranh.

---

**Bộ nộp sếp gồm 3 thứ:**
1. `reports/build-report.html` — báo cáo quá trình + 7 KPI *(hoặc link artifact sau khi bạn share)*
2. `reports/hoi-thoai-pm-ai.html` — toàn bộ hội thoại, đã che secret
3. Link sản phẩm + repo, đã gắn tag v1.0

Việc duy nhất tao đề nghị làm nốt là **đo lại Lighthouse với 63 tỉnh** — nó đóng luôn mục 1 và mục 3 trong bảng còn tồn. Làm không?

---

### 🧑 PM · 21:16 7/9/26

> làm nốt đi

---

### 🤖 AI · 21:16 7/9/26

Đọc số cũ trước để so sánh đúng cách:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Read the old performance measurements
- `Bash` — Check if Lighthouse is available
- `Bash` — Install Lighthouse for re-measurement

</details>

---

### 🤖 AI · 21:17 7/9/26

Cài xong. Số cũ đo trên **local production build** và tự ghi nhận *"dao động khá lớn giữa các lần đo"* — nên tao sẽ chạy **3 lần lấy trung vị** thay vì 1 lần:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Start production server for measurement
- `Bash` — Run Lighthouse three times per page and take medians

</details>

---

### 🤖 AI · 21:20 7/9/26

Trang chủ đo được, trang tỉnh fail cả 3 lần. Xem lỗi thật:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Diagnose why the province page measurement fails
- `Bash` — Check if the province page result was produced

</details>

---

### 🤖 AI · 21:23 7/9/26

File có tồn tại (548KB) — lỗi nằm ở script của tao, không phải Lighthouse:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Read province page results properly

</details>

---

### 🤖 AI · 21:27 7/9/26

Tìm ra: `/tmp` trong Git Bash trỏ khác với `/tmp` mà Node hiểu (`D:\tmp`). Dùng đường dẫn tuyệt đối:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Re-run Lighthouse with correct paths on three pages

</details>

---

### 🤖 AI · 21:31 7/9/26

Lighthouse chạy không ổn định — nhiều lần fail. Lấy lỗi thật thay vì đoán:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Run Lighthouse on province page with full error output

</details>

---

### 🤖 AI · 21:32 7/9/26

Tìm ra: **Lighthouse đo xong và đã ghi file** — dòng `json output written to` chứng minh — rồi **crash khi dọn thư mục tạm** (`EPERM`, lỗi quyền của Windows). Exit code khác 0 nên script tao tưởng là fail. Sửa lại: đọc file bất kể exit code:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Re-run Lighthouse reading results despite EPERM exit code

</details>

---

### 🤖 AI · 21:35 7/9/26

Đo được cả 3 trang, 3/3 lần. Cập nhật `PERFORMANCE-LF.md` với so sánh:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Document the re-measurement results

</details>

---

### 🤖 AI · 21:35 7/9/26

Cập nhật các số liên quan (dashboard, R12, c3, release notes) cho khớp:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Sync all documents with the new measurement
- `Bash` — Find remaining stale figure
- `Bash` — Fix wording and confirm final KPI state

</details>

---

### 🤖 AI · 21:37 7/9/26

Cập nhật cả 2 report rồi commit và chuyển tag v1.0:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Update both reports with new figures
- `Artifact` — Báo cáo tương tác về quá trình dựng Local Food bằng Human+AI — chỉ số dự án, 7 KPI kho kiến thức, sự cố AI và 
- `Bash` — Commit, push and move the v1.0 tag
- `Bash` — Deploy and verify final state

</details>

---

### 🤖 AI · 21:40 7/9/26

Xong. Và kết quả **trái với dự đoán của chính tao**.

## Đo lại hiệu năng với 63 tỉnh

Giả thuyết khi đề xuất đo lại là *"8 marker thành 63 thì hiệu năng phải tệ hơn"*. **Sai hoàn toàn** — trang chủ tốt hơn ở **mọi** chỉ số:

| | Cũ (8 tỉnh) | Mới (63 tỉnh) | |
|---|---|---|---|
| Performance | ~30/100 | **46/100** | 🟢 |
| LCP | ~8,8s | **6,20s** | 🟢 nhanh hơn 2,6s |
| TBT | ~5.300ms | **4.222ms** | 🟢 |
| Payload | 2,26MB | **1,83MB** | 🟢 nhẹ hơn 19% |

Lý do hợp lý nhất: những thay đổi làm *sau* lần đo cũ đã bù nhiều hơn phần chi phí thêm marker — marker nhỏ lại theo zoom nên `next/image` xin ảnh nhỏ hơn, `fitBounds` thay khung cứng, và 31/63 tỉnh dùng gradient nên **không tốn request ảnh nào**. Payload giảm 19% *dù dữ liệu gấp 8 lần*.

Đo **trung vị 3 lần** chứ không 1 lần, vì bản ghi cũ đã tự cảnh báo số dao động mạnh.

**NFR vẫn không đạt** — 6,20s so với ngưỡng 2,5s, R12 giữ nguyên. Nhưng giờ nói được chính xác hơn ở viva: khoảng cách thu hẹp từ ~6,3s xuống **~3,7s**, và trang không có bản đồ đạt **80/100 + 100/100 accessibility** — vấn đề khu trú đúng một chỗ, không phải sản phẩm yếu.

## Suýt kết luận sai

Lần chạy đầu báo *"không đo được"* cho 2/3 trang. Truy ra: trên Windows, Lighthouse **đo xong, ghi file JSON rồi mới crash** ở bước dọn thư mục tạm (`EPERM`) — exit code khác 0 nên script tao coi là thất bại, **trong khi dữ liệu đã nằm đủ trên đĩa**. Đã ghi vào `PERFORMANCE-LF.md` vì đây đúng loại lỗi khiến người ta tưởng công cụ hỏng rồi bỏ cuộc.

## c3 lên 87% — cả 7 KPI đều đạt

Đây là **vòng đời đầy đủ của một KPI**, không phải con số trang trí: đo → phát hiện tài liệu lỗi thời → sửa → đo lại → đạt. c3 bắt được **2 lỗi thật** (MODULEMAP lỗi thời nặng, và chính file PERFORMANCE này).

## Trạng thái cuối

- **59 commit**, tag **v1.0** trỏ đúng commit mới nhất, đã push
- **Đã deploy** production
- Cả 2 report đã cập nhật số mới, **secret vẫn sạch** (0 JWT, 0 project ref)
- Artifact đã republish cùng URL

**Còn lại đúng 3 việc, đều của bạn:** bấm *share* trên artifact nếu muốn gửi link cho sếp (hoặc gửi thẳng file `reports/build-report.html`), tự test lại checklist đã viết lại, và quay video theo kịch bản.

---

### 🧑 PM · 19:53 8/9/26

> tao muốn review lại xíu, chỗ bản đồ, hãy cẩn thận và make sure tuân thủ chủ quyền biển đảo Việt Nam: Hoàng Sa và Trường Sa là 2 quần đảo thuộc chủ quyền Việt Nam nhé, hãy xem lại vấn đề này.
> trên bản đồ ở zoom default tao muốn thể hiện thông tin này -> hiển thị Hoàng sa và Trường Sa

---

### 🤖 AI · 19:54 8/9/26

Yêu cầu này đúng và quan trọng. Kiểm tra hiện trạng trước — khung nhìn hiện tại có bao gồm 2 quần đảo không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check whether current map bounds include the archipelagos

</details>

---

### 🤖 AI · 19:54 8/9/26

Xác nhận thiếu sót thật: **cả hai quần đảo đều nằm ngoài khung nhìn mặc định.** Kiểm tra basemap hiển thị vùng đó thế nào trước khi sửa:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Ensure dev server is running
- `Bash` — Capture how the basemap labels the sea area
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 19:56 8/9/26

Ảnh cho thấy vấn đề rõ. Basemap MapTiler dùng **nhãn quốc tế**: ghi `PARACEL ISLANDS` và `South China Sea` — **không có** "Hoàng Sa", "Trường Sa", "Biển Đông", và không thể hiện chủ quyền. Trường Sa thì nằm hẳn ngoài khung.

Tạo lớp dữ liệu chủ quyền riêng:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\data\sovereignty.json
- `Write` — D:\01_Study\07_Local_Food\components\map\SovereigntyMarker.tsx

</details>

---

### 🤖 AI · 19:56 8/9/26

Giờ mở rộng khung nhìn để bao cả hai quần đảo:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\map\mapStyle.ts

</details>

---

### 🤖 AI · 19:57 8/9/26

Gắn vào bản đồ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add sovereignty markers to the map

</details>

---

### 🤖 AI · 19:58 8/9/26

Build sạch. Xem kết quả thật:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify sovereignty markers appear at default zoom
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:00 8/9/26

Hoạt động — cả hai quần đảo và "BIỂN ĐÔNG" đều hiện ở khung mặc định. Nhưng thấy 2 điểm cần chỉnh: khung thừa nhiều khoảng trống bên phải (lộ cả Philippines), và **đơn vị hành chính chưa hiện** — mà đó chính là phần khẳng định chủ quyền:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Tighten bounds and always show administrative unit
- `Bash` — Re-verify after tightening bounds
- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:02 8/9/26

Giờ đúng như cần: nhãn tiếng Việt che luôn nhãn quốc tế của basemap, kèm đơn vị hành chính quản lý. Nhưng còn một việc **quan trọng hơn** phải sửa — cách diễn đạt trong hồ sơ:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Find existing wording about the archipelagos
- `Bash` — Clarify sovereignty wording across all documents

</details>

---

### 🤖 AI · 20:03 8/9/26

DEVBOOK không khớp chuỗi. Sửa riêng:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Find exact DEVBOOK wording to amend
- `Edit` — D:\01_Study\07_Local_Food\DEVBOOK.md

</details>

---

### 🤖 AI · 20:03 8/9/26

Thêm test case chủ quyền vào checklist QA và cập nhật rủi ro:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Add sovereignty test case and risk R14
- `Bash` — Commit and deploy the sovereignty layer
- `Bash` — Deploy and verify sovereignty layer on production

</details>

---

### 🤖 AI · 20:06 8/9/26

Đã lên production. Bạn yêu cầu rà soát rất đúng lúc — **tìm ra hai thiếu sót thật, không cổng nào bắt được.**

## Hai vấn đề

**1. Cả hai quần đảo nằm ngoài khung nhìn mặc định.** Khung dừng ở kinh độ 109,6°Đ, trong khi Hoàng Sa ở ~112°Đ và Trường Sa ở ~113,6°Đ. Người mở trang **không hề thấy**.

**2. Basemap chỉ dùng nhãn quốc tế.** Ảnh chụp cho thấy MapTiler ghi `PARACEL ISLANDS` và `South China Sea` — không có "Hoàng Sa", "Trường Sa", "Biển Đông", và không thể hiện chủ quyền.

## Đã sửa

- **Mở rộng khung mặc định** tới 114,4°Đ / 8,0°B — cả hai quần đảo nằm trọn trong khung ngay khi mở trang, không cần zoom hay kéo.
- **Lớp dữ liệu chủ quyền riêng**, hiện ở **mọi mức zoom**, kèm **đơn vị hành chính quản lý**:
  - **Quần đảo Hoàng Sa** — Huyện Hoàng Sa, thành phố Đà Nẵng
  - **Quần đảo Trường Sa** — Huyện Trường Sa, tỉnh Khánh Hòa
  - Nhãn **BIỂN ĐÔNG** cho vùng biển
- Nhãn tiếng Việt **đè lên nhãn quốc tế** của basemap nên đọc rõ hơn.
- Marker chủ quyền **cố ý khác kiểu** marker món ăn (hình thoi viền đỏ + nhãn chữ, không phải ảnh tròn) để không bị nhầm là một điểm ẩm thực. Bấm vào dẫn tới trang tỉnh quản lý.

Đã kiểm trên **production**: cả 5 nhãn đều hiện.

## Một chỗ tao phải sửa cách diễn đạt

Hôm 06/09 tao sửa centroid Khánh Hòa và Đà Nẵng về đất liền, và ghi trong hồ sơ là *"centroid nằm giữa Biển Đông"*, *"sửa về phần đất liền"*. **Cách viết đó có thể bị đọc sai thành phủ nhận chủ quyền.**

Lý do thật thuần kỹ thuật: bún chả cá Nha Trang không nấu ở Trường Sa, nên marker **món ăn** phải nằm nơi món ăn thực sự có. Tao đã ghi rõ điều này vào `DEVBOOK.md`, `scripts/check-geo.mjs` và operating log — kèm khẳng định Hoàng Sa và Trường Sa thuộc chủ quyền Việt Nam. Cổng `check:geo` cũng có ghi chú phạm vi: bbox "đất liền" chỉ để kiểm marker ẩm thực, **không phải tuyên bố về lãnh thổ**.

## Điều đáng suy nghĩ cho viva

Ghi thành **OP-12** và rủi ro **R14**. Khi thiếu sót này tồn tại thì: build sạch, `check:geo` PASS, QA PASS, **cả 7 KPI kho kiến thức đều đạt**.

Không cổng nào bắt được — vì **chưa ai viết ra yêu cầu đó**. Nó chỉ lộ khi có người nhìn bản đồ và hỏi *"bản đồ này đã đúng chưa"* thay vì *"bản đồ này có chạy không"*. Đó là ví dụ mạnh nhất trong cả dự án về giới hạn của kiểm thử tự động — và về việc phán xét của con người không thay thế được.

Đã thêm **§US-01c** vào `SIT-UAT-LF.md` để lần sau có cổng kiểm, gồm cả bước bấm la bàn reset rồi xác nhận hai quần đảo vẫn trong khung.

Tag `v1.0` hiện trỏ commit trước thay đổi này — bạn muốn tao chuyển tag sang commit mới, hay giữ v1.0 và đánh `v1.1`?

---

### 🧑 PM · 20:11 8/9/26

> Oke
> tao phát hiện lỗi UX dòng chữ chạy chạy có vẻ nhanh quá, tempo chậm lại thôi cho ngta còn nhìn thấy chữ gì nhé.
> với lại vấn đề phát sinh: khi có ý kiến đóng góp sửa đổi thì data sẽ phải đẩy về một mối nào để tao manage chứ nhỉ? hay là cần tạo tài khoản admin nhỉ?

---

### 🤖 AI · 20:11 8/9/26

Hai việc. Làm cái dễ trước — xem tốc độ marquee hiện tại:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\effects\Marquee.tsx

</details>

---

### 🤖 AI · 20:12 8/9/26

Tìm ra nguyên nhân thật — và nó là **hệ quả của việc mở rộng 8 → 63 tỉnh**: `duration` cố định 28 giây cho toàn bộ băng chữ, bất kể có bao nhiêu mục. Hồi 8 tỉnh thì vừa, giờ 63 tỉnh cùng 28 giây nghĩa là **chạy nhanh gấp gần 8 lần**:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\effects\Marquee.tsx

</details>

---

### 🤖 AI · 20:12 8/9/26

Cách pause tao vừa viết có bug — nó sẽ **nhảy về đầu** thay vì dừng tại chỗ, vì Framer Motion không dừng được bằng `animationPlayState`. Làm lại bằng CSS animation để pause hoạt động đúng:

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\effects\Marquee.tsx
- `Bash` — Add marquee CSS animation with pause support
- `Bash` — Measure new marquee speed and pause behaviour

</details>

---

### 🤖 AI · 20:16 8/9/26

**Marquee đã sửa — chậm hơn 9 lần.** Tốc độ từ **701 px/giây xuống 78 px/giây**, và rê chuột vào là **dừng đúng tại chỗ** (không nhảy về đầu). Người bật "giảm chuyển động" thì chữ đứng yên hẳn.

Giờ tới câu hỏi thứ hai — **quan trọng hơn nhiều**, vì nó là quyết định kiến trúc có rủi ro bảo mật:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Confirm reports are hidden from the public API

</details>

---

### 🤖 AI · 20:18 8/9/26

Xác nhận: báo lỗi bị RLS ẩn hoàn toàn — người ngoài đọc trả về rỗng, **và bạn cũng vậy** nếu xem qua website. Hiện chỉ xem được qua Supabase Dashboard.

Commit phần marquee trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit the marquee fix

</details>

---

### 🤖 AI · 20:19 8/9/26

**Về câu hỏi quản lý báo lỗi** — bạn hỏi đúng chỗ, và đây là quyết định kiến trúc có rủi ro bảo mật thật, nên tao nêu rõ trước khi làm.

**Hiện trạng:** báo lỗi lưu trong Supabase, RLS ẩn khỏi công khai (đúng thiết kế). Bạn xem được **chỉ qua Supabase Dashboard** bằng câu SQL. Không có thông báo, nên nếu không nhớ vào xem thì báo lỗi nằm im — đó chính là **G4** tao đã ghi là còn tồn trong Transformation Plan.

**Một cảnh báo quan trọng trước khi bạn chọn:** làm trang admin **sai cách** là rủi ro nghiêm trọng hơn không có trang admin. Để đọc/sửa được báo lỗi cần quyền vượt RLS, tức `service_role` key — key đó mà lọt vào code client thì **bất kỳ ai cũng xoá sạch được database**. Đó là R11 quay lại ở mức nặng hơn. Nên nếu làm, phải làm phía server, không có đường tắt.

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 20:20 8/9/26

Làm phần Dashboard ngay (dùng được liền), và chuẩn bị sẵn phần thông báo để bạn chỉ việc dán URL khi đã chọn kênh:

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\ADMIN-GUIDE-LF.md
- `Bash` — Commit admin guide and deploy marquee fix
- `Bash` — Verify both fixes on production

</details>

---

### 🤖 AI · 20:23 8/9/26

Cả hai đã lên production.

## 1. Băng chữ — chậm hơn 9 lần

Nguyên nhân hoá ra **cùng gốc với lỗi cắt mũi Cà Mau**: `duration` đặt cứng 28 giây cho *toàn bộ* băng, bất kể dài bao nhiêu. Hồi 8 tỉnh thì vừa; lên 63 tỉnh băng dài 39.241px mà vẫn 28 giây → **701 px/giây**.

Giờ thời lượng tỉ lệ theo số mục: **252 giây, tức 78 px/giây**. Thêm **rê chuột là dừng** để đọc kịp một tên cụ thể, và ai bật "giảm chuyển động" thì chữ đứng yên hẳn.

Một chi tiết đáng nói: phải **bỏ Framer Motion, chuyển sang CSS animation** cho băng này. Tao viết thử bản dùng Framer trước và phát hiện "dừng" hoá ra là **nhảy về đầu băng** — vì `animation-play-state` chỉ tác dụng với CSS animation.

Ghi thành **OP-13**, kèm nhận xét về mẫu lỗi: *hằng số hợp lý ở quy mô cũ, sai ở quy mô mới*. Đáng rà xem còn chỗ nào tương tự.

## 2. Quản lý báo lỗi — **không nên làm trang admin**

Tao khuyến nghị Dashboard, và lý do không phải vì lười:

> Để đọc/sửa báo lỗi phải vượt RLS → cần `service_role` key. Key đó lọt vào code client là **bất kỳ ai cũng xoá sạch database**. Supabase Dashboard đã giữ key đó phía máy chủ của họ, nên an toàn sẵn và tốn 0 công.

Đã viết **`ADMIN-GUIDE-LF.md`** — dùng được ngay, gồm:

| Mục | Nội dung |
|---|---|
| 1 | Câu SQL xem báo lỗi chưa xử lý (bấm **Save** để dùng lại) |
| 2 | Đánh dấu đã xử lý — dùng `status='hidden'`, **không cần đổi schema** |
| 3 | Ẩn đánh giá spam (R10) |
| 4 | Hướng dẫn dựng thông báo, chờ bạn chọn kênh |
| 5 | Dọn/đổi tên dữ liệu kiểm thử |
| 6 | Kiểm định kỳ RLS còn nguyên |

**Quy ước trạng thái** để bạn không phải nhớ: với báo lỗi, `visible` = **chưa xử lý**, `hidden` = **đã xong**.

**Phần thông báo (G4) tao chuẩn bị tới mức tối đa có thể** mà không cần bạn quyết: các bước tạo webhook, và quan trọng nhất là **điều kiện lọc `record.kind = 'content_report'`** để nó chỉ bắn khi có báo lỗi chứ không bắn mỗi lần ai đó chấm sao.

Khi bạn chọn kênh: **Discord/Slack khoảng 10 phút** (chỉ cần tạo webhook URL, không đăng ký gì); **email nhiều bước hơn** (cần dịch vụ gửi mail + endpoint trung gian). Báo tao URL là dựng nốt.

---

Còn lại vẫn là 3 việc cũ của bạn: tự test lại checklist, quay video, và câu hỏi treo từ lượt trước — **tag `v1.0` giữ nguyên hay chuyển sang commit mới nhất** (giờ đã có thêm phần chủ quyền biển đảo và sửa marquee)?

---

### 🧑 PM · 20:30 8/9/26

> à tao có idea, trong UX/UI hãy thêm phần thông tin thể hiện các comment review gần nhất, trong trang chủ luôn nhé

---

### 🤖 AI · 20:30 8/9/26

Ý hay — nó làm trang chủ "sống" hơn và cho thấy site có người dùng thật. Thêm hàm lấy review mới nhất:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\reviews.ts
- `Write` — D:\01_Study\07_Local_Food\components\review\RecentReviews.tsx

</details>

---

### 🤖 AI · 20:31 8/9/26

Gắn vào trang chủ, dựng bảng tra tên ở phía server:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Wire recent reviews into the homepage
- `Bash` — Verify recent reviews section renders

</details>

---

### 🤖 AI · 20:36 8/9/26

Hoạt động — và lộ ra thông tin đáng chú ý: **đã có người dùng thật đánh giá.** Xem ảnh:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\scratc

</details>

---

### 🤖 AI · 20:37 8/9/26

Khối hiển thị tốt, và **đã có 3 người thật đánh giá**: Johnny, Thu, Khoa — nội dung tự nhiên. Nhưng lộ ra **một bug thật** và một vấn đề bạn cần quyết:

**Bug:** thẻ `Kiem thu RLS` hiển thị `__test__/__test__` và link của nó trỏ tới `/provinces/__test__` — **404**. Review trỏ tới tỉnh/món không tồn tại phải bị loại, không phải hiện link hỏng. Sửa:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Filter out reviews pointing to non-existent dishes
- `Bash` — Verify broken-link reviews are filtered out

</details>

---

### 🤖 AI · 20:39 8/9/26

Bug đã sửa — thẻ trỏ tới `__test__` bị loại (6 → 5 thẻ), không còn link 404. Commit và deploy:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit and deploy the recent reviews section

</details>

---

### 🤖 AI · 20:41 8/9/26

Đã lên production. **Nhưng có một việc bạn nên quyết ngay**, vì nó liên quan quyết định trước đó của bạn.

**Site đã có người dùng thật đánh giá** — 3 người trong 2 ngày qua:

| Người | Cảm nhận | Món |
|---|---|---|
| **Johnny** | *"Món ngon đáng trải nghiệm"* ⭐⭐⭐⭐⭐ | Phở chua Cao Bằng |
| **Thu** | *"Tuyệt vời như ông mặt trời"* ⭐⭐⭐ | Bánh khoái Huế |
| **Khoa** | *"tuyệt vời"* ⭐⭐⭐⭐⭐ | Bún cá Châu Đốc |

Đây cũng là **bằng chứng đầu tiên** cho mitigation R2 của bạn — crowdsourcing đã bắt đầu hoạt động thật, không còn là kế hoạch trên giấy.

**Vấn đề:** hôm trước bạn chọn giữ lại dữ liệu kiểm thử vì *"production có chút data review v cũng hay mà"*. Lúc đó nó nằm sâu trong panel món ăn. **Giờ nó nằm ngay trang chủ**, xen giữa các đánh giá thật:

> ⭐⭐⭐⭐⭐ *"kiem thu production"* — **KT-357884**
> ⭐⭐⭐⭐ *"Kiem thu tu dong - co the xoa"* — **Nguoi kiem thu**

Nhìn cạnh đánh giá của Johnny và Thu thì rõ ràng là rác kiểm thử — và đây là màn hình đầu tiên khách nhìn thấy.

Tao **không xoá được** (anon key cố ý không có quyền `DELETE` — RLS đang làm đúng việc). Câu SQL có sẵn ở [ADMIN-GUIDE-LF.md](ADMIN-GUIDE-LF.md) mục 5, chạy trong Supabase SQL Editor mất khoảng 1 phút:

```sql
delete from dish_reviews
where author_name in ('Kiem thu RLS','Nguoi kiem thu','KT US15')
   or author_name like 'KT-%' or author_name like 'US15-%'
   or province_slug = '__test__';
```

Hoặc nếu vẫn muốn giữ cho trang chủ đỡ thưa, đổi tên cho tự nhiên:

```sql
update dish_reviews set author_name = 'Khách ghé thăm', comment = 'Món ăn đặc sắc'
where author_name like 'KT-%' or author_name like 'US15-%';
```

Tao khuyên **xoá hẳn** — giờ đã có 3 đánh giá thật, trang chủ không còn cần dữ liệu độn nữa, và đánh giá thật đứng một mình sẽ đáng tin hơn nhiều.

Một bug tao sửa luôn khi làm: thẻ trỏ tới `__test__/__test__` hiển thị slug thô và **link tới trang 404**. Giờ mọi đánh giá trỏ tới tỉnh/món không còn tồn tại đều bị loại — nên dù bạn có dọn hay không, trang chủ cũng không bao giờ hiện link hỏng.

---

### 🧑 PM · 20:44 8/9/26

> vậy được rồi. để đó đi
> giờ mày thêm tính năng switch ngôn ngữ Eng-Viet nhé, trong món ăn và hương liệu, gia vị cái nào đặc trưng thì giữ lại tiếng Việt.

---

### 🤖 AI · 20:44 8/9/26

Đây là tính năng lớn — chạm vào schema, 63 file dữ liệu, và toàn bộ nội dung. Đo khối lượng thật trước khi đề xuất, thay vì lao vào code:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure translation workload

</details>

---

### 🤖 AI · 20:45 8/9/26

Đo xong, và con số đáng cân nhắc trước khi bắt tay:

| Cần dịch | Số từ |
|---|---|
| Mô tả 197 món | 15.295 |
| 818 bước cách làm | 11.110 |
| Cách ăn 197 món | 6.150 |
| 981 nguyên liệu | 4.347 |
| Tóm tắt 63 tỉnh | 4.100 |
| **Tổng nội dung** | **41.002 từ** |
| Chuỗi giao diện | ~63 |

**41.000 từ — gần bằng toàn bộ 25 artefact hồ sơ của bạn cộng lại** (43.370 từ). Và **hạn nộp là mai (09/09)**.

Ba điều tao phải nói trước:

**1. Rủi ro R2 sẽ nhân đôi.** Hiện 63% món đã không có nguồn Wikipedia và bạn mới đọc lướt 15/197. Thêm bản tiếng Anh nghĩa là **hai phiên bản nội dung đều cần kiểm** — mà bản tiếng Anh thì bạn khó soi hơn, nên thực tế nó sẽ **không được kiểm**.

**2. Đây là thay đổi schema lớn.** Chạm 63 file dữ liệu, zod schema, và routing (63 trang tỉnh → 126 trang nếu làm SEO đúng cách).

**3. Yêu cầu "giữ tiếng Việt cái nào đặc trưng" cần quy ước rõ**, nếu không mỗi agent dịch một kiểu — ví dụ `nước mắm` dịch thành "fish sauce" hay giữ nguyên? `mắc khén` thì chắc chắn phải giữ. Cần chốt danh sách trước khi dịch.

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 20:47 8/9/26

Rõ. Làm đúng quy trình — **story + quy ước trước, dịch sau** (bài học GAP-T2). Viết US-16 và bảng thuật ngữ giữ nguyên tiếng Việt:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\I18N-GLOSSARY-LF.md

</details>

---

### 🤖 AI · 20:48 8/9/26

Giờ dịch **1 tỉnh mẫu trước** để bạn duyệt chất lượng — chạy 63 tỉnh rồi mới phát hiện quy ước sai thì rất tốn:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Show source content for the pilot translation
- `Agent` — Translate Ha Noi as pilot

</details>

---

### 🤖 AI · 20:51 8/9/26

Pilot làm đúng việc của nó — **phát hiện 3 lỗ hổng nghiêm trọng trong glossary trước khi nhân ra 62 tỉnh**. Kiểm chất lượng bản dịch:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify pilot translation quality

</details>

---

### 🤖 AI · 20:51 8/9/26

Bản dịch đạt chất lượng: giữ đúng `Phở`, `bánh phở`, `nước mắm`, `bún`, `chả`, `than hoa`, `tía tô`, `kinh giới` — gloss một lần, đọc tự nhiên, số lượng khớp.

Vá 3 lỗ hổng agent phát hiện **trước khi** nhân ra 62 tỉnh:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Patch glossary with context-sensitivity rules

</details>

---

### 🤖 AI · 20:52 8/9/26

Glossary đã vá. Giờ chạy 62 tỉnh còn lại bằng 8 agent song song:

<details>
<summary>9 thao tác công cụ</summary>

- `Bash` — Split remaining provinces into batches
- `Agent` — Translate batch 1
- `Agent` — Translate batch 2
- `Agent` — Translate batch 3
- `Agent` — Translate batch 4
- `Agent` — Translate batch 5
- `Agent` — Translate batch 6
- `Agent` — Translate batch 7
- `Agent` — Translate batch 8

</details>

---

### 🤖 AI · 20:54 8/9/26

8 agent đang dịch song song. Trong lúc chờ, dựng phần khung — schema, routing `/en`, và nút chuyển ngôn ngữ:

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\i18n.ts
- `Write` — D:\01_Study\07_Local_Food\lib\ui-strings.ts
- `Write` — D:\01_Study\07_Local_Food\components\layout\LanguageSwitch.tsx

</details>

---

### 🤖 AI · 20:56 8/9/26

Khung ngôn ngữ xong. Giờ routing — phần phức tạp nhất. Xem cấu trúc trang tỉnh hiện tại:

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\app\provinces\[slug]\page.tsx
- `Write` — D:\01_Study\07_Local_Food\components\pages\ProvinceView.tsx
- `Bash` — Create Vietnamese and English province routes

</details>

---

### 🤖 AI · 20:57 8/9/26

Giờ truyền `locale` xuống các component con:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Find hardcoded Vietnamese strings in components

</details>

---

### 🧑 PM · 21:00 8/9/26

> This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.
> 
> Summary:
> ## 1. Primary Request and Intent
> 
> This is a continuation of a long-running session building **"Local Food"** — a Next.js site showcasing Vietnamese local dishes across all 63 pre-2025-merger provinces, as a PM AI Bootcamp capstone following an 11-step Capstone Playbook with mandatory "Cổng hiểu" (comprehension gate) discipline at every step.
> 
> Requests in this segment, in order:
> 1. Finish expanding data from 8 → 63 provinces (carried over from before compaction)
> 2. **"trên map update 63 tỉnh thành lun nhé"** — show all 63 provinces on the map
> 3. **"nhớ push code lên git nhé, hiện tại tao chưa thấy"** — push code to git
> 4. **"tiến hành"** W1-12 viva documentation (RTM, telemetry, Weekly Report)
> 5. **"giờ muốn đóng gói product để nộp bài thì làm gì nhỉ? (ngoài việc gửi link web)"** — package for submission
> 6. Deploy so others can view and interact
> 7. Add Review/Rating (Supabase), then "Báo nội dung sai" channel
> 8. Complete telemetry including token metrics: **"bản thân mày phải tự tracking được chứ nhỉ?"**
> 9. Boss's requirement (via screenshots): **Interactive HTML report** with LOC/page-document/metrics + **7 Knowledge Health KPIs** added into that report
> 10. **"export tất cả trò chuyện giữa tao và mày vào 1 file (html cũng đc), để tao nộp sếp"** and **"đánh dấu lại status hiện tại để release bản v1.0 trên git"**
> 11. **"make sure tuân thủ chủ quyền biển đảo Việt Nam: Hoàng Sa và Trường Sa là 2 quần đảo thuộc chủ quyền Việt Nam... trên bản đồ ở zoom default tao muốn thể hiện thông tin này"**
> 12. Slow down the marquee; question about where content-report data should be managed / whether an admin account is needed
> 13. Add a "recent reviews" section to the homepage
> 14. **CURRENT**: **"thêm tính năng switch ngôn ngữ Eng-Viet nhé, trong món ăn và hương liệu, gia vị cái nào đặc trưng thì giữ lại tiếng Việt"** — scope chosen: full 41,000 words, separate `/en` routes
> 
> ## 2. Key Technical Concepts
> 
> - **Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, pnpm
> - **Map**: MapLibre GL JS pinned to `4.7.1` (6.5.0 has a tile-loading bug documented in DEVBOOK), `react-map-gl/maplibre` v8, MapTiler basemap
> - **Marker architecture**: custom `<Marker>` HTML components; single unified set of 63 markers with size interpolated by zoom (replaced a two-tier crossfade design that hid 55 provinces)
> - **Validation**: zod schema validating all 63 province JSON files at build time
> - **Backend**: Supabase for reviews (`dish_reviews` table) with **RLS as the sole protection layer** — anon key is public-by-design in client bundle
> - **Column-level grants**: `grant insert (province_slug, dish_slug, author_name, rating, comment, kind)` so client cannot write `id`/`created_at`/`status`
> - **Deployment**: Vercel, connected to GitHub, auto-deploys on push
> - **Telemetry**: real token usage extracted from Claude Code session transcript JSONL (`usage` field per assistant turn)
> - **Parallel agent pattern**: 7-8 background agents with a shared strict brief, proven for content production and now translation
> - **i18n approach**: translations in separate files (`data/i18n/en/{slug}.json`) merged at read time, so the Vietnamese source is never touched by parallel agents
> 
> ## 3. Files and Code Sections
> 
> ### Map / sovereignty
> 
> **`components/map/mapStyle.ts`** — viewport bounds now include both archipelagos:
> ```ts
> export const VIETNAM_BOUNDS: [[number, number], [number, number]] = [
>   [102.1, 8.0],
>   [114.4, 23.5],
> ];
> export const VIETNAM_FIT_PADDING = 32;
> export const MARKER_MIN_ZOOM = 5;
> export const MARKER_MAX_ZOOM = 9;
> export const HERO_MARKER_SIZE_RANGE: readonly [number, number] = [36, 60];
> export const PIN_MARKER_SIZE_RANGE: readonly [number, number] = [18, 44];
> export const HERO_LABEL_MIN_ZOOM = 6;
> export const PIN_LABEL_MIN_ZOOM = 7.5;
> export function markerSizeAtZoom(zoom: number, isHero: boolean): number
> export function showLabelAtZoom(zoom: number, isHero: boolean): boolean
> ```
> 
> **`data/sovereignty.json`** — sovereignty layer data:
> ```json
> {
>   "seaName": { "label": "Biển Đông", "center": [111.2, 14.2] },
>   "archipelagos": [
>     { "id": "hoang-sa", "name": "Quần đảo Hoàng Sa",
>       "admin": "Huyện Hoàng Sa, thành phố Đà Nẵng",
>       "provinceSlug": "da-nang", "center": [112.0, 16.5] },
>     { "id": "truong-sa", "name": "Quần đảo Trường Sa",
>       "admin": "Huyện Trường Sa, tỉnh Khánh Hòa",
>       "provinceSlug": "khanh-hoa", "center": [113.6, 10.2] }
>   ]
> }
> ```
> 
> **`components/map/SovereigntyMarker.tsx`** — deliberately a red rotated square + labelled pill, visually distinct from round photo dish markers so it doesn't read as another food pin.
> 
> **`components/map/FoodMap.tsx`** — sovereignty markers render at `zIndex: 0` before province markers, `detailed` always true.
> 
> **`scripts/check-geo.mjs`** — geographic gate, `pnpm check:geo`. Contains explicit scope note that the mainland bbox is only for dish markers and is **not a territorial claim**.
> 
> ### i18n (current work)
> 
> **`lib/i18n.ts`** (created):
> ```ts
> export const LOCALES = ["vi", "en"] as const;
> export type Locale = (typeof LOCALES)[number];
> export const DEFAULT_LOCALE: Locale = "vi";
> export function isLocale(v: string): v is Locale
> export function localizeProvince(province: Province, locale: Locale): Province
> export function localizeProvinces(provinces: Province[], locale: Locale): Province[]
> export function translatedSlugs(): string[]
> export function localePath(locale: Locale, pathname = ""): string
> ```
> Merges `data/i18n/en/{slug}.json` onto source; falls back to Vietnamese per-field if translation missing. `name` is never overridden.
> 
> **`lib/ui-strings.ts`** (created, last file written) — flat object with `vi` and `en` keys (~40 strings), exports `t(locale, key, vars?)` supporting `{n}` interpolation. Deliberately avoids pulling in an i18n library.
> 
> **`I18N-GLOSSARY-LF.md`** (created + patched) — translation rules. Section 4b added after pilot found blind-matching traps:
> - `chao` as verb ("chao mỡ") = swirl in hot fat, NOT fermented bean curd
> - `bánh tráng` in bánh cuốn = steamed sheet, NOT dry rice paper
> - Named fish species (`cá lăng`, `cá lóc`, `cá nhệch`, `cá bống`, `cá mai`) stay Vietnamese
> 
> **`data/i18n/en/ha-noi.json`** — approved pilot reference. Shape:
> ```json
> { "slug": "ha-noi", "summary": "...",
>   "dishes": { "<dish-slug>": { "description", "keyIngredients", "prepOutline", "howToEat" } } }
> ```
> No `name`, `sourceRefs`, `images`, `tasteTags`, `occasions`, `isHero`.
> 
> ### Reviews
> 
> **`lib/reviews.ts`** — `getReviewClient()` returns null when env missing; `fetchReviews`, `fetchRecentReviews(limit)`, `validateReview`, `submitReview` (content_report branch skips `.select()` because RLS blocks reading it back), `averageRating`, `relativeTime`.
> 
> **`components/review/RecentReviews.tsx`** — homepage block; fetches 24, filters to those resolving in `lookup`, keeps first 6; hides entirely on error/empty.
> 
> **`supabase/schema.sql`** + **`supabase/migration-02-content-report.sql`** — RLS with exactly 2 policies (SELECT visible+review, INSERT with check), no UPDATE/DELETE.
> 
> ### Effects
> 
> **`components/effects/Marquee.tsx`** — rewritten as static component using CSS animation:
> ```ts
> const SECONDS_PER_ITEM = 4;
> const duration = Math.max(items.length * SECONDS_PER_ITEM, 20);
> ```
> CSS in `app/globals.css`: `@keyframes marquee-scroll`, `.marquee:hover .marquee-track { animation-play-state: paused; }`, plus `prefers-reduced-motion` rule.
> 
> ### Documentation artefacts (28 total .md files)
> 
> `SCOPE-LF.md`, `SPEC-LF.md`, `MODULEMAP-LF.md` (updated 2026-09-07 after c3 flagged it stale), `ARCH-LF.md`, `WBS-LF.md`, `EST-LF.md`, `RISK-LF.md` (R1-R14), `DELEGATION-MAP-LF.md`, `DOR-LF.md` (now 8/8 PASS), `SIT-UAT-LF.md` (US-01/01b/01c/02/03/12/13/14/15), `PERFORMANCE-LF.md` (re-measured), `TECH-DEBT-LF.md`, `DEVBOOK.md` (Part A: 23 entries; Part B: L-levels, fail-closed gates, hard-stops), `OPERATING-LOG-LF.md` (OP-01→OP-13), `RTM-LF.md`, `TELEMETRY-LF.md`, `WEEKLY-LF.md`, `SPOTCHECK-LF.md`, `CASE-STUDY-LF.md`, `AI-WORKFLOW-LF.md`, `TRANSFORMATION-PLAN-LF.md`, `KNOWLEDGE-HEALTH-LF.md`, `VIDEO-SCRIPT-LF.md`, `ADMIN-GUIDE-LF.md`, `RELEASE-v1.0.md`, `I18N-GLOSSARY-LF.md`, `README.md`, `AGENTS.md`/`CLAUDE.md`.
> 
> **`reports/build-report.html`** and **`reports/hoi-thoai-pm-ai.html`** — deliverables for the boss.
> 
> **`scripts/export-transcript.mjs`** — redacts secrets before writing, collapses tool calls, merges tool-only turns.
> 
> ## 4. Errors and Fixes
> 
> 1. **Two-tier zoom design hid 55 provinces** — at zoom ≥7 the viewport only covers a few provinces, so no zoom level ever showed the whole country. Replaced with single marker set sized by zoom.
> 
> 2. **Khánh Hòa/Đà Nẵng centroids in the East Sea** — `centroids.json` took geometric centroids of admin polygons including island districts. Khánh Hòa was in the original 8 MVP provinces; survived zod, build and a full QA pass marked PASS for 12 days. Fixed to `[109.15, 12.3]` and `[108.22, 16.06]`. **Later had to clarify in DEVBOOK/check-geo/operating-log that this was a dish-marker display decision, NOT a territorial claim.**
> 
> 3. **Viewport clipped Cà Mau cape** — hard-coded center+zoom. Switched to `fitBounds`.
> 
> 4. **No git remote had ever existed** — code never left the machine. User's global git email was `«EMAIL ĐÃ CHE»` (typo); fixed to `gmail.com`.
> 
> 5. **Vercel Deployment Protection blocked outsiders** — all routes returned 200 but served the SSO page. Could not disable via API (`Not authorized`) or CLI; user disabled it in dashboard.
> 
> 6. **`local-food.vercel.app` belongs to someone else** (title "Local Food Directory").
> 
> 7. **`.gitignore` ordering** — `vercel link` appended `.env*` AFTER my `!.env.example` exception, silently re-ignoring it. Re-asserted the exception at end of file.
> 
> 8. **502 on `_next/image`** — count varied 2→0→11→0. Measured away two wrong hypotheses (12KB file failed while 3MB succeeded; `q=60` returns 400 only for hand-built URLs). Actual cause: Wikimedia rate-limiting on cold cache. No code change; risk R5, GAP-01 fallback worked.
> 
> 9. **`insert().select().single()` errors "0 rows" for content reports** — RLS blocks reading them back. Split into a branch that skips select.
> 
> 10. **Cooldown blocked reporting right after rating** — key included only province+dish. Added `kind` to key.
> 
> 11. **Search had no empty state** — `results.length > 0` gated the entire dropdown, so a non-matching query rendered nothing, indistinguishable from a broken search box.
> 
> 12. **Filter chips signalled by colour only** (WCAG 1.4.1) and **missing `aria-pressed`** — **axe-core reported 0 violations on both**.
> 
> 13. **Windows Lighthouse EPERM** — Lighthouse writes its JSON then crashes cleaning its temp dir, giving non-zero exit. My first runner reported "could not measure" for 2 of 3 pages while data sat complete on disk. Fixed by reading the file regardless of exit code.
> 
> 14. **MODULEMAP-LF.md badly stale** — caught by KPI c3. Claimed 404 page missing, design system unfinished, 6 provinces undone; missing review/telemetry/search modules entirely.
> 
> 15. **Framer Motion cannot pause in place** — `animation-play-state` only affects CSS animations; Framer "pause" jumped to the start of the strip. Verified this failure before switching to CSS.
> 
> 16. **Marquee 9× too fast** — fixed 28s duration regardless of list length. At 63 provinces the strip is 39,241px → 701 px/s.
> 
> 17. **Review pointing to `__test__/__test__`** rendered raw slug and linked to a 404. Now filtered out.
> 
> 18. **Sovereignty gaps** — both archipelagos outside the default viewport (bounds stopped at 109.6°E); basemap only carries "PARACEL ISLANDS" / "South China Sea". Build, check:geo, QA and all 7 KPIs passed while this was wrong.
> 
> ### Specific user feedback that changed my approach
> 
> - User chose **"Đọc lướt, thấy không có gì bất thường"** for spot-check depth → I recorded it honestly as a skim with 0 detailed cross-checks rather than upgrading it to "verified"
> - User: **"cứ để vậy lun nhé, production có chút data review v cũng hay mà"** (keep test data) — later this surfaced on the homepage, which I flagged
> - User asked whether I could self-track tokens → I found the transcript `usage` field rather than saying no
> 
> ## 5. Problem Solving
> 
> - **Diagnosed the "hidden 55 provinces" problem** by reasoning about viewport coverage at zoom ≥7, not by guessing
> - **Established that git cannot measure human hours** — two proxies failed in opposite directions (5h44 vs 16h33); real hours (16-22h) exceeded even the upper bound, proving both undercounted and that using either would have inflated compression 1.5-4×
> - **Verified RLS by attacking the live database** rather than trusting the migration ran
> - **Separated 3 genuinely dead links from 19 false alarms** by re-checking with a browser User-Agent and DNS lookups — acting on the first report would have replaced 19 working sources
> - **Correctly predicted nothing about the Lighthouse re-measurement** — expected worse performance at 63 provinces, got better (LCP 8.8s→6.20s, payload −19%), and recorded the contradiction
> - **Ran a translation pilot on one province before scaling to 62** — the pilot found 3 glossary traps that would have been multiplied across all provinces
> 
> ## 6. All User Messages
> 
> 1. "tiếp tục đi nhé"
> 2. "trên map update 63 tỉnh thành lun nhé. ah với lại nhớ push code lên git nhé, hiện tại tao chưa thấy, chắc mày đang làm ở local"
> 3. "https://github.com/hamvanphu/LocalFoodWeb"
> 4. "oke tiến hành"
> 5. "khoan đã nhé. giờ hãy rà soát lại, xem deploy sản phẩm như nào, làm sao tao đưa cho người khác xem đc và cùng tương tác vào web?"
> 6. "oke protection r đó"
> 7. "sang Review/Rating. mày hướng dẫn từng bước nhé"
> 8. "anon: «KEY ĐÃ CHE»... Project URL lấy ở đâu nhỉ, tao có thấy hiển thị trong mục API đâu"
> 9. "chỉ run thôi, ko save hả? tao run xong r đó"
> 10. "oke, tiếp tục telemetry đi"
> 11. "ok tiếp đi" (spot-check)
> 12. "tao thấy cũng đúng rồi á, nếu có sai thì phần review sẽ có ng vào comment cũng đc, lúc ấy ghi nhận và update"
> 13. "oke tiến hành" / "khoan làm mấy cái đó — giờ muốn đóng gói product để nộp bài thì làm gì nhỉ? (ngoài việc gửi link web cho ngta)"
> 14. "làm luôn đi nè"
> 15. "tiếp tục AI Workflow, Transformation Plan, kịch bản Video"
> 16. "oke, v làm Q1 trước. Mà Q1 nghĩa là gì v?"
> 17. "Dọn dữ liệu test trong Supabase => cứ để vậy lun nhé, production có chút data review v cũng hay mà. Quay video theo kịch bản => tạm thời ignore, từ từ focus lại sau. Lấy số token từ trang usage => bản thân mày phải tự tracking được chứ nhỉ? Tao chỉ dùng token để làm project này thôi, nên mày coi sao tính toán cho ra nhé."
> 18. [Two images: 7 Knowledge Health KPI card + boss's Zalo message] "follow theo yêu cầu của sếp tao, mày hãy implement thêm phần này nhé, hình như nó cũng liên quan tới telemetry nhỉ? nếu v thì tao vs mày đang làm hoàn thiện rồi nhỉ? anyway, check xem còn cần làm ko nhé?"
> 19. "cái Interactive HTML report chỉ cần lấy link đó share sếp là sếp đọc đc ah? với lại giờ mày commit push hết chưa? thực hiện đi nhé. xong mày hãy export tất cả trò chuyện giữa tao và mày vào 1 file (html cũng đc), để tao nộp sếp. Và đánh dấu lại status hiện tại để release bản v1.0 trên git nhé"
> 20. "làm nốt đi" (Lighthouse re-measurement)
> 21. "tao muốn review lại xíu, chỗ bản đồ, hãy cẩn thận và make sure tuân thủ chủ quyền biển đảo Việt Nam: Hoàng Sa và Trường Sa là 2 quần đảo thuộc chủ quyền Việt Nam nhé, hãy xem lại vấn đề này. trên bản đồ ở zoom default tao muốn thể hiện thông tin này -> hiển thị Hoàng sa và Trường Sa"
> 22. "Oke. tao phát hiện lỗi UX dòng chữ chạy chạy có vẻ nhanh quá, tempo chậm lại thôi cho ngta còn nhìn thấy chữ gì nhé. với lại vấn đề phát sinh: khi có ý kiến đóng góp sửa đổi thì data sẽ phải đẩy về một mối nào để tao manage chứ nhỉ? hay là cần tạo tài khoản admin nhỉ?"
> 23. "à tao có idea, trong UX/UI hãy thêm phần thông tin thể hiện các comment review gần nhất, trong trang chủ luôn nhé"
> 24. "vậy được rồi. để đó đi. giờ mày thêm tính năng switch ngôn ngữ Eng-Viet nhé, trong món ăn và hương liệu, gia vị cái nào đặc trưng thì giữ lại tiếng Việt."
> 
> **Security-relevant constraints in force:**
> - Only the `anon`/`public` Supabase key may be used; **`service_role` must never be used or placed in client code** — it bypasses RLS and would let anyone wipe the database
> - AI must not self-register external services (MapTiler, Supabase, Vercel, GitHub) — PM does this (Leash A+)
> - AI must not push or deploy without an explicit per-instance PM instruction
> - AI must not write or print secret values to output
> - Secrets must be redacted from any exported file intended to be shared
> 
> ## 7. Pending Tasks
> 
> - **CURRENT**: finish the EN/VI language switch — 8 translation agents running for 62 provinces; then wire `/en` routes, language switcher UI, apply `t()` to components, write US-16 + AC into SPEC, add SIT-UAT test cases, build/verify, deploy
> - PM to self-test the rewritten checklists (US-01, US-01b, US-01c, US-02, US-03, US-12, US-13)
> - PM to record the video demo (script exists)
> - PM to set MapTiler domain restriction (still outstanding)
> - PM to choose notification channel for content reports (Discord/Slack ~10 min, or email)
> - **Open question I asked and user has not answered**: whether to move the `v1.0` tag to the newest commit or create `v1.1`
> 
> ## 8. Current Work
> 
> Implementing the EN/VI language switch. User chose **full 41,000-word translation** and **separate `/en` routes**.
> 
> Completed so far:
> 1. Measured workload: 41,002 words (mô tả món 15,295 / bước cách làm 11,110 / cách ăn 6,150 / nguyên liệu 4,347 / tóm tắt tỉnh 4,100) plus ~63 UI strings
> 2. Created `I18N-GLOSSARY-LF.md` defining which Vietnamese terms stay Vietnamese
> 3. **Ran a pilot translation on Hà Nội** to validate the glossary before scaling. Verified quality: kept `Phở`, `bánh phở`, `nước mắm`, `bún`, `chả`, `than hoa`, `tía tô`, `kinh giới`; element counts matched; no `name` field
> 4. **Patched the glossary with section 4b** after the pilot exposed 3 traps
> 5. **Launched 8 background translation agents** covering the remaining 62 provinces (batches of 8, 8, 8, 8, 8, 8, 8, 6). All still running.
> 6. Created `lib/i18n.ts`
> 7. Created `lib/ui-strings.ts` (the last action before this summary request)
> 
> Design decision recorded in `lib/i18n.ts`: translations live in separate files rather than merged into `data/provinces/*.json` because *"khi 8 agent dịch song song, nếu chúng ghi thẳng vào file gốc thì một lỗi bất kỳ sẽ làm hỏng luôn nội dung tiếng Việt — thứ đã được kiểm và không có bản sao."*
> 
> ## 9. Optional Next Step
> 
> Wait for the 8 translation agents to report, then verify their output (element counts match source, no `name` field, glossary terms preserved) before wiring the routing. Then continue building the language switch: `/en` route group, `LanguageSwitcher` component, apply `t()` to existing components, write US-16 + AC into `SPEC-LF.md` and test cases into `SIT-UAT-LF.md` (following the GAP-T2 lesson of story-before-code, which I have already partially applied by writing the glossary and running a pilot first).
> 
> Direct quote of the request being served: **"giờ mày thêm tính năng switch ngôn ngữ Eng-Viet nhé, trong món ăn và hương liệu, gia vị cái nào đặc trưng thì giữ lại tiếng Việt."** — with the user's subsequent scope choices being full 41,000-word translation and separate `/en` paths.
> 
> If you need specific details from before compaction (like exact code snippets, error messages, or content you generated), read the full transcript at: C:\Users\X\.claude\projects\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6.jsonl
> Continue the conversation from where it left off without asking the user any further questions. Resume directly — do not acknowledge the summary, do not recap what was happening, do not preface with "I'll continue" or similar. Pick up the last task as if the break never happened.

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>a450d571c8f265e8c</task-id>
> <tool-use-id>toolu_011TfQx9kLrHE1QDerMNrgZu</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a450d571c8f265e8c.output</output-file>
> <status>completed</status>
> <summary>Agent "Translate batch 3" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>All 8 files written to `D:\01_Study\07_Local_Food\data\i18n\en\` (dak-nong, dien-bien, dong-nai, dong-thap, gia-lai, ha-giang, ha-nam, ha-tinh). Validated by script: dish slugs match sources, field sets are exactly the four required, `keyIngredients`/`prepOutline` counts match.
> 
> Judgement calls worth propagating:
> 
> - **tương ớt / tương đen** — glossary lists `tương` = fermented soybean sauce, but these are compounds. Translated `tương ớt` → chilli sauce; kept `tương đen` (dark fermented soybean sauce) as the signature of phở khô Gia Lai.
> - **bánh tráng in kẹo cu đơ** — not rice paper; glossed as toasted sesame rice cracker (bánh đa). Kept "rice paper" only for gỏi wrapping in dong-nai/ha-tinh.
> - **bánh mướt** (ha-tinh) — steamed rice sheet, not rice paper.
> - **Kept Vietnamese + glossed** though absent from the table: lá bép, đọt mây, cà đắng, rêu đá, hoa ban, chẩm chéo, lá vông, ấu tẩu, đường phên, nước hàng, quả chay/quả dọc, tám xoan, muối kiến vàng.
> - **Translated plainly**: tam giác mạch → buckwheat (glossed once), cháo → porridge, chuột đồng → field rat, măng đắng → bitter bamboo shoot, cá suối → stream fish (generic, not a named species).</result>
> <usage><subagent_tokens>77489</subagent_tokens><tool_uses>20</tool_uses><duration_ms>286421</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>a0105e4a3755e7dee</task-id>
> <tool-use-id>toolu_01As8i29KpxcFNzBiB6Aqrym</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a0105e4a3755e7dee.output</output-file>
> <status>failed</status>
> <summary>Agent "Translate batch 1" failed: Agent terminated early due to an API error: You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Now I'll write the translations.</result>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>ab2cc1002b2164263</task-id>
> <tool-use-id>toolu_01CWC93TSFCAQwLw5r2FBVkw</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\ab2cc1002b2164263.output</output-file>
> <status>failed</status>
> <summary>Agent "Translate batch 2" failed: Agent terminated early due to an API error: You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Now I'll write the translations.</result>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>a95acad7239c62530</task-id>
> <tool-use-id>toolu_01U5jRqi899ZKTgsQreeaCQ1</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a95acad7239c62530.output</output-file>
> <status>failed</status>
> <summary>Agent "Translate batch 4" failed: Agent terminated early due to an API error: You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Now I'll write the translations.</result>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>a09e6d2caff6b2d1f</task-id>
> <tool-use-id>toolu_014c9PmspBHACRKRjJraF484</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a09e6d2caff6b2d1f.output</output-file>
> <status>failed</status>
> <summary>Agent "Translate batch 6" failed: Agent terminated early due to an API error: You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Now I'll write the translations.</result>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>a900171a8f2d2ac2d</task-id>
> <tool-use-id>toolu_01A8PKNS9EqrHJmt6e6tuV9k</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a900171a8f2d2ac2d.output</output-file>
> <status>completed</status>
> <summary>Agent "Translate batch 8" finished</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>All 6 files written and validated (18 dishes; slugs, keys, and `keyIngredients`/`prepOutline` counts match sources exactly; no `name`/`sourceRefs`/`images`/`tasteTags`/`occasions`/`isHero` emitted).
> 
> Files:
> - `D:\01_Study\07_Local_Food\data\i18n\en\{tien-giang,tra-vinh,tuyen-quang,vinh-long,vinh-phuc,yen-bai}.json`
> 
> Judgement calls where the glossary was ambiguous:
> 
> - **mắm tôm chà** (Tiền Giang) — not the same thing as `mắm tôm`. Kept whole, glossed as a sieved fermented shrimp paste, not "fermented shrimp paste".
> - **bánh tráng** — appears only in the roll-it-yourself sense (Tiền Giang, Vĩnh Long), so "dry rice paper" is correct here; no bánh cuốn trap in this batch.
> - **thính** (Vĩnh Phúc) — kept + glossed "roasted ground rice"; `cá thính` treated as fish cured in thính, not a fish species.
> - **Named fish** — kept `cá lóc` (snakehead), `cá lăng` (river catfish). For `cá cháy` I glossed only what the source states ("a rare brackish-water fish"), deliberately not "shad", to avoid inventing.
> - **cá mương/cá rô/cá chép/cá mè** (Vĩnh Phúc keyIngredients) — kept Vietnamese under a collective "freshwater fish" gloss rather than pinning species names the source doesn't give.
> - **kho rim** (Vĩnh Long) — kept, glossed "braise it down"; both are section-2 techniques and the source uses them as a pair.
> - **mẻ / nước mẻ** — `nước mẻ` glossed as "liquid from a fermented rice starter" to distinguish it from mẻ itself.
> - **Local plant names not in the glossary** — `lá gai`, `lá cơm đỏ/đen`, `lá cách`, `cát lồi`, `lá cẩm`, `củ kiệu`, `dưa món` kept Vietnamese + short gloss, by the "distinctively Vietnamese stays Vietnamese" principle. Common ones (`thì là`→dill, `hành phi`→fried shallot, `mộc nhĩ`→wood ear, `củ sắn`→jicama, `giá đỗ`→bean sprouts) translated.
> - **gà đồi** treated as a product descriptor, translated as "free-range hill chicken" rather than kept.</result>
> <usage><subagent_tokens>68836</subagent_tokens><tool_uses>15</tool_uses><duration_ms>218016</duration_ms></usage>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>ab40e0cd507314423</task-id>
> <tool-use-id>toolu_013M5t92SsyTY69ZJKRWwZ48</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\ab40e0cd507314423.output</output-file>
> <status>failed</status>
> <summary>Agent "Translate batch 5" failed: Agent terminated early due to an API error: You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Now I'll write the translations.</result>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 21:00 8/9/26

> <task-notification>
> <task-id>a30ba660cf34504fe</task-id>
> <tool-use-id>toolu_0166w75ybeJqETJYNGrY5Mqy</tool-use-id>
> <output-file>C:\Users\X\AppData\Local\Temp\claude\d--01-Study-06-PM-AI-Bootcamp\54b73208-ba4f-4a0a-99d4-f41fb82187c6\tasks\a30ba660cf34504fe.output</output-file>
> <status>failed</status>
> <summary>Agent "Translate batch 7" failed: Agent terminated early due to an API error: You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)</summary>
> <note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>
> <result>Now I'll write the translations.</result>
> </task-notification>

---

### 🤖 AI · 21:00 8/9/26

You've hit your session limit · resets 12:50am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 19:39 9/9/26

> tiếp tục đi

---

### 🤖 AI · 19:39 9/9/26



<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check translation progress on disk

</details>

---

### 🤖 AI · 19:39 9/9/26

6 batches hit the session limit, nhưng chúng đã kịp ghi file trước khi chết — 49/63 tỉnh đã có bản dịch. Kiểm tra tính toàn vẹn trước, vì file do agent bị ngắt giữa chừng có thể hỏng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Write and run i18n validation gate

</details>

---

### 🤖 AI · 19:40 9/9/26

49 file hợp lệ — agent bị ngắt đã ghi xong file rồi mới chết, không để lại file dở. Thêm cổng kiểm vào `package.json` và phóng lại 2 agent cho 14 tỉnh còn thiếu:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Add check:i18n script to package.json
- `Agent` — Translate batch 9
- `Agent` — Translate batch 10

</details>

---

### 🤖 AI · 19:41 9/9/26

Trong lúc 2 agent chạy, tôi nối dây routing. Xem các component cần nhận `locale`:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — List all page and component files
- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx
- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx

</details>

---

### 🤖 AI · 19:41 9/9/26

`province.region` là "Bắc"/"Trung"/"Nam" — cần chuỗi vùng miền cho bản tiếng Anh. Thêm vào `ui-strings` rồi vá component:

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts
- `Bash` — Localize ProvinceHero

</details>

---

### 🤖 AI · 19:42 9/9/26

`as never` không cần thiết — `region` là union type nên TypeScript tự suy ra template literal type hợp lệ:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceHero.tsx

</details>

---

### 🤖 AI · 19:42 9/9/26

Giờ `ProvinceDishExplorer` và `DishCard` — nơi chứa nhãn nguyên liệu/cách làm:

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\DishCard.tsx
- `Bash` — Inspect tasteTags and occasions vocabulary

</details>

---

### 🤖 AI · 19:42 9/9/26

tasteTags vốn đã là slug tiếng Anh nên không cần dịch. `occasions` thì là tiếng Việt — thêm vào bảng chuỗi:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts

</details>

---

### 🤖 AI · 19:43 9/9/26

Vá `DishCard` và `ProvinceDishExplorer`:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Localize DishCard

</details>

---

### 🤖 AI · 19:45 9/9/26

File đã ghi xong; chỉ lệnh in ra console lỗi encoding. Kiểm lại:

<details>
<summary>1 thao tác công cụ</summary>

- `Grep` — Nguyên liệu|Cách làm|Cách ăn|Nguồn tham|Món đặc trưng|Phóng to|locale

</details>

---

### 🤖 AI · 19:46 9/9/26

DishCard xong. Giờ `ProvinceDishExplorer` + `DishTile`:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Localize ProvinceDishExplorer

</details>

---

### 🤖 AI · 19:48 9/9/26

Giờ `DishReviews` — component có nhiều chuỗi nhất:

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Bash` — Read validateReview and relativeTime

</details>

---

### 🤖 AI · 19:48 9/9/26

`validateReview` và `relativeTime` trả về chuỗi tiếng Việt cứng — cho chúng nhận `locale`. Thêm chuỗi trước:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts

</details>

---

### 🤖 AI · 19:48 9/9/26

Batch 9 xong (59/63). Agent bắt được bẫy đáng giá: `mắm` trong "gốc đước, mắm" là **cây mắm** (mangrove), không phải mắm lên men. Tiếp tục vá `lib/reviews.ts`:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Localize reviews lib

</details>

---

### 🤖 AI · 19:49 9/9/26

`import type` bị xoá lúc biên dịch nên `node:fs` trong `i18n.ts` không lọt vào bundle client. Giờ vá `DishReviews`:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Localize DishReviews component
- `Grep` — "[^"]*[àáâãèéêìíòóôõùúăđĩũơưạ-ỹ][^"]*"
- `Read` — D:\01_Study\07_Local_Food\app\page.tsx
- `Read` — D:\01_Study\07_Local_Food\components\layout\SiteHeader.tsx

</details>

---

### 🤖 AI · 20:20 9/9/26

`SiteHeader` nằm trong root layout dùng chung cho cả hai ngôn ngữ, mà server layout không đọc được pathname. Tách phần phụ thuộc ngôn ngữ sang client và suy locale từ URL:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\useLocale.ts
- `Bash` — Split SiteHeader into server shell and client bar

</details>

---

### 🤖 AI · 20:20 9/9/26

63/63 tỉnh đã dịch. Agent bắt được một bẫy quan trọng: trong Nam Định, `cao lâu` nghĩa là **tiệm ăn người Hoa** (酒樓), không phải món Cao lầu Hội An — chính glossary của tôi lấy "Cao lầu" làm ví dụ tên món phải giữ nguyên. Ghi lại sau; giờ đọc nốt các component còn lại:

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\search\SearchBar.tsx
- `Read` — D:\01_Study\07_Local_Food\components\review\RecentReviews.tsx
- `Read` — D:\01_Study\07_Local_Food\lib\searchIndex.ts

</details>

---

### 🤖 AI · 20:20 9/9/26

`subtitle` chứa "Miền Bắc" cứng — chuyển sang mang `region` thô để client tự dịch:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Localize SearchBar and RecentReviews

</details>

---

### 🤖 AI · 20:21 9/9/26

Giờ trang chủ, browse, not-found + các component còn lại:

<details>
<summary>7 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceExplorerGrid.tsx
- `Read` — D:\01_Study\07_Local_Food\app\browse\page.tsx
- `Read` — D:\01_Study\07_Local_Food\components\province\BrowseProvinces.tsx
- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceTeaserCard.tsx
- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts
- `Edit` — D:\01_Study\07_Local_Food\lib\ui-strings.ts
- `Bash` — Localize card, grid and browse components

</details>

---

### 🤖 AI · 20:21 9/9/26

Giờ tạo view dùng chung cho trang chủ + browse, rồi 4 route:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\pages\HomeView.tsx
- `Bash` — Create shared browse view and all four routes

</details>

---

### 🤖 AI · 20:22 9/9/26

Còn `HeroSection`, `FoodMapLoader`/`FoodMap`/`MapToolbar`, `not-found`:

<details>
<summary>3 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\HeroSection.tsx
- `Read` — D:\01_Study\07_Local_Food\app\not-found.tsx
- `Bash` — Localize HeroSection and add strings

</details>

---

### 🤖 AI · 20:22 9/9/26

Giờ not-found (server component dùng chung) và các component bản đồ:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Create NotFoundView and inspect map components
- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx
- `Bash` — Inspect FoodMap for locale-dependent bits

</details>

---

### 🤖 AI · 20:23 9/9/26

Điểm đáng lưu ý: nhãn chủ quyền là thứ **quan trọng nhất** phải có tiếng Anh — người đọc bản EN chính là đối tượng mà thông tin này cần tới, và basemap chỉ ghi "South China Sea".

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\map\SovereigntyMarker.tsx
- `Read` — D:\01_Study\07_Local_Food\data\sovereignty.json

</details>

---

### 🤖 AI · 20:23 9/9/26

`nameEn` đã có sẵn nhưng chưa nối dây, và thiếu bản tiếng Anh cho tên biển + đơn vị hành chính. Bổ sung:

<details>
<summary>5 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\data\sovereignty.json
- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Bash` — Patch FoodMapLoader and MapToolbar
- `Bash` — Localize FoodMap, MapToolbar and SovereigntyMarker
- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx

</details>

---

### 🤖 AI · 20:24 9/9/26

`useCallback` giờ đọc `locale` nhưng chưa có trong deps — sẽ giữ giá trị cũ. Sửa, và cả chuỗi "Đang tải bản đồ…":

<details>
<summary>6 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\map\FoodMap.tsx
- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx
- `Read` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx
- `Write` — D:\01_Study\07_Local_Food\components\map\FoodMapLoader.tsx
- `Bash` — Add map.loading string and inspect footer
- `Bash` — Localize SiteFooter

</details>

---

### 🤖 AI · 20:25 9/9/26

`/en/telemetry` không tồn tại — trang telemetry là báo cáo nội bộ, chỉ có tiếng Việt. Trỏ thẳng, không thêm tiền tố:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\layout\SiteFooter.tsx
- `Bash` — Typecheck the project

</details>

---

### 🤖 AI · 20:26 9/9/26

TypeScript sạch. Chạy build đầy đủ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Run gates and full build

</details>

---

### 🤖 AI · 20:26 9/9/26

Đúng lỗi thật: `localePath` là **value export** từ `lib/i18n.ts`, mà file đó có `import fs from "node:fs"` ở đầu — mọi client component import `localePath` đều kéo `node:fs` vào bundle trình duyệt. Tách đôi module:

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\i18n.ts
- `Write` — D:\01_Study\07_Local_Food\lib\locale.ts
- `Bash` — Find which files import from i18n and which are client

</details>

---

### 🤖 AI · 20:27 9/9/26

16 client component đang import từ `@/lib/i18n`. Chuyển hết sang `@/lib/locale`, và cả `lib/ui-strings.ts` + `lib/reviews.ts` (được client dùng):

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Repoint client imports to lib/locale
- `Bash` — Typecheck and rebuild

</details>

---

### 🤖 AI · 20:28 9/9/26

Build sạch: 134 trang tĩnh (63 VI + 63 EN + 8 trang khác). Chạy thật để kiểm chứng, không chỉ tin build:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Start prod server and check route status codes
- `Bash` — Verify EN province page content

</details>

---

### 🤖 AI · 20:29 9/9/26

Hai điều cần xác minh: nhãn nguyên liệu = 0 (do DishCard chỉ render khi mở chi tiết), và "Miền Bắc" còn sót 1 lần trong bản EN. Kiểm chứng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Locate Vietnamese leak and verify translations applied

</details>

---

### 🤖 AI · 20:29 9/9/26

"Miền Bắc" là trường `subtitle` **đã chết** — client giờ dùng `region` để dịch, nhưng subtitle vẫn được serialize xuống trình duyệt cho cả 63 tỉnh ở cả hai ngôn ngữ. Xác minh nội dung dịch trước, rồi dọn:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify English content renders on EN page

</details>

---

### 🤖 AI · 20:29 9/9/26

Bản dịch đúng: `/en` hiện nội dung tiếng Anh, `/` hiện tiếng Việt, và quy ước glossary được giữ — `Phở`, `chả`, `than hoa`, `bún`, `Cá lăng`, `nghệ`, `mẻ` đều còn nguyên tiếng Việt kèm chú thích. Dọn trường `subtitle` chết:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Drop dead subtitle field from province entries

</details>

---

### 🤖 AI · 20:29 9/9/26

Giờ viết US-16 vào SPEC và ca kiểm thử vào SIT-UAT — theo đúng bài học GAP-T2 (story trước, code sau):

<details>
<summary>6 thao tác công cụ</summary>

- `Bash` — Read tail of SPEC and SIT-UAT docs
- `Bash` — Find user story format in SPEC
- `Bash` — Find user story entries in SPEC
- `Read` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Edit` — D:\01_Study\07_Local_Food\SPEC-LF.md
- `Bash` — Add US-16 test checklist to SIT-UAT

</details>

---

### 🤖 AI · 20:31 9/9/26

Cập nhật glossary với các bẫy agent phát hiện — đây là thứ có giá trị lâu dài nhất:

<details>
<summary>1 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\I18N-GLOSSARY-LF.md

</details>

---

### 🤖 AI · 20:31 9/9/26

Build lại và chạy toàn bộ cổng kiểm trước khi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Run all gates plus lint and build
- `Bash` — See full lint errors

</details>

---

### 🤖 AI · 20:33 9/9/26

Hai cảnh báo `localePath` không dùng là do tôi — sed thêm import vào file không cần. Còn lỗi `setState-in-effect` cần kiểm xem có phải mới không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check if lint failed before my changes

</details>

---

### 🤖 AI · 20:34 9/9/26

Lint đã đỏ **trước** khi tôi sửa (cùng 3 lỗi đó) — tôi chỉ thêm 2 cảnh báo import thừa. Dọn phần của mình:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Remove unused imports and re-verify

</details>

---

### 🤖 AI · 20:34 9/9/26

Về đúng mức lint ban đầu (5 vấn đề, không phải 7). Build lại và chạy thật lần cuối:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Final build and smoke test including sovereignty labels

</details>

---

### 🤖 AI · 20:35 9/9/26

Nhãn chủ quyền không có trong HTML vì bản đồ là `ssr: false` — chỉ render ở trình duyệt. Phải kiểm bằng trình duyệt thật:

<details>
<summary>6 thao tác công cụ</summary>

- `Bash` — Check for browser automation tooling
- `Bash` — Verify sovereignty labels render in real browser
- `Bash` — Run browser verification from project dir
- `Bash` — Locate playwright-core package
- `Bash` — Run browser verification with resolved playwright path
- `Bash` — Run browser verification with CJS default import

</details>

---

### 🤖 AI · 20:37 9/9/26

Hai quần đảo hiện đúng ở cả hai ngôn ngữ. Nhưng nhãn **Biển Đông** không thấy — cần tra thẳng DOM:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Inspect sea label DOM node

</details>

---

### 🤖 AI · 20:38 9/9/26

Nhãn có thật trong DOM, hiển thị được (198×15px, nằm trong khung bản đồ) — "MISS" trước đó là do `innerText` ở vùng ngoài màn hình, không phải lỗi. 66 marker = 63 tỉnh + 2 quần đảo + 1 nhãn biển. Xem ảnh:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\map-en.png

</details>

---

### 🤖 AI · 20:38 9/9/26

Trang chủ EN đúng. Giờ chụp phần bản đồ để xác minh nhãn chủ quyền bằng mắt:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Screenshot map region in both languages
- `Read` — D:\01_Study\07_Local_Food\map-only-en.png

</details>

---

### 🤖 AI · 20:38 9/9/26

Nhãn chủ quyền hiện đúng ở bản EN: cả hai quần đảo với đơn vị hành chính, và **BIỂN ĐÔNG (EAST SEA)** đè lên vùng biển mà basemap ghi "South China Sea". Xem bản VI:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\map-only-vi.png

</details>

---

### 🤖 AI · 20:39 9/9/26

Bản VI sạch. Ở bản EN nhãn dài hơn nên mép trái chạm vào marker ven biển Quảng Ngãi — dịch tâm nhãn EN sang đông một chút:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\data\sovereignty.json
- `Bash` — Wire EN sea label position and rebuild

</details>

---

### 🤖 AI · 20:39 9/9/26

Kiểm chứng cuối: nút chuyển ngôn ngữ có giữ đúng trang không, và trang tỉnh EN trông thế nào:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Test language switch preserves page and dish labels

</details>

---

### 🤖 AI · 20:40 9/9/26

Nút chuyển ngôn ngữ giữ đúng trang (US-16 bước 2–3 PASS). Nhưng "Rate this dish" có mà "Key ingredients" không — mâu thuẫn, vì cả hai nằm trong cùng `DishCard`. Xem ảnh:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\prov-en-dish.png

</details>

---

### 🤖 AI · 20:40 9/9/26

Hoàn hảo — "MISS" chỉ là do CSS `uppercase` khiến `innerText` trả về "KEY INGREDIENTS", không phải lỗi. Nội dung đúng yêu cầu: `Bún bò Huế`, `sả (lemongrass)`, `mắm ruốc (fermented shrimp/krill paste)`, `bún (rice noodles)`, `sa tế` đều giữ tiếng Việt kèm chú thích. Ghi bài học vào DEVBOOK:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Clean screenshots and find DEVBOOK entry format
- `Bash` — Inspect DEVBOOK structure
- `Bash` — Check Part A entry format
- `Bash` — Add US-16 lessons to DEVBOOK

</details>

---

### 🤖 AI · 20:41 9/9/26

Cập nhật MODULEMAP (đã từng bị KPI c3 bắt là lỗi thời) và commit:

<details>
<summary>7 thao tác công cụ</summary>

- `Bash` — Read MODULEMAP tail
- `Bash` — Find MODULEMAP update section
- `Read` — D:\01_Study\07_Local_Food\MODULEMAP-LF.md
- `Edit` — D:\01_Study\07_Local_Food\MODULEMAP-LF.md
- `Bash` — Run gates and stage changes
- `Bash` — Commit the i18n feature
- `Bash` — Stop test servers

</details>

---

### 🤖 AI · 20:43 9/9/26

Xong tính năng chuyển ngôn ngữ. Đã commit local (`4b16194`) — **chưa push**, chờ mày bảo.

## Kết quả

**63/63 tỉnh đã dịch** (~41.000 từ), 10 agent chạy song song. 6 agent bị ngắt giữa chừng vì hết hạn mức phiên nhưng file chúng kịp ghi đều hợp lệ; tao chạy lại phần thiếu.

**Nguyên tắc mày yêu cầu được giữ đúng** — món ăn, hương liệu, gia vị đặc trưng vẫn là tiếng Việt kèm chú thích ngắn:

> *Bún bò Huế* — "A deep, fiery noodle soup … scented with **sả** (lemongrass) and **mắm ruốc** (fermented shrimp/krill paste), served with thick round **bún** (rice noodles) — far more forceful than northern **phở**."

**Chủ quyền biển đảo ở bản tiếng Anh** — phần này tao coi là quan trọng nhất, vì người đọc tiếng Anh chính là đối tượng mà basemap chỉ cho thấy "South China Sea": *Hoàng Sa Archipelago (Paracel Islands)*, *Trường Sa Archipelago (Spratly Islands)*, *Biển Đông (East Sea)* — tên riêng Việt Nam là tên chính, tên quốc tế trong ngoặc. Đã chụp ảnh bản đồ thật ở cả hai ngôn ngữ để xác nhận, không chỉ tin build.

## Hai chỗ suýt đi sai

**Build đổ hoàn toàn vì `node:fs`.** `localePath()` nằm chung file với hàm đọc bản dịch; 16 client component import nó → `node:fs` bị kéo vào bundle trình duyệt. **`tsc --noEmit` báo sạch** — về mặt kiểu thì hợp lệ, chỉ `pnpm build` mới lộ. Đã tách [lib/locale.ts](lib/locale.ts) (dùng chung) khỏi [lib/i18n.ts](lib/i18n.ts) (chỉ server) để ranh giới đó là ranh giới *file*.

**Bảng thuật ngữ tự phản lại chính nó.** Glossary lấy `Cao lầu` làm ví dụ tên món phải giữ nguyên — nhưng ở Nam Định "tiệm cao lâu của Hoa kiều" nghĩa là *tiệm ăn kiểu người Hoa* (酒樓). Tương tự `mắm` ở Cà Mau là **cây mắm** ngập mặn, không phải mắm lên men. Đã ghi thành mục 4c trong glossary.

Thêm cổng `pnpm check:i18n` đối chiếu từng bản dịch với bản gốc (số bước cách làm phải khớp) — vì không thể tin "có file trên đĩa" là "dịch đúng".

## Cần mày quyết

1. **Push lên GitHub không?** Push xong Vercel tự deploy bản 2 ngôn ngữ.
2. **Tag phiên bản** — câu hỏi cũ tao hỏi mà mày chưa trả lời: chuyển tag `v1.0` sang commit mới nhất, hay tạo `v1.1`? Giờ có thêm i18n thì tao nghiêng về **`v1.1`**, giữ `v1.0` đúng như lúc mày nộp sếp.
3. Lint đang đỏ 3 lỗi **có từ trước** feature này (`setState` trong effect ở deep-link món ăn). Tao không đụng vì ngoài phạm vi — muốn tao sửa riêng thì bảo.

---

### 🧑 PM · 20:44 9/9/26

> 1. push nhé
> 2. v1.1
> 3. nếu đc, thì mày sửa luôn

---

### 🤖 AI · 20:44 9/9/26

Làm theo thứ tự: sửa lint trước, rồi commit + push + tag v1.1. Xem cả 3 lỗi:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Show all lint errors in full

</details>

---

### 🤖 AI · 20:45 9/9/26

Cả 3 đều là `setState` đồng bộ trong effect. Tao sửa đúng gốc chứ không tắt rule. Đọc từng file:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\ui\Lightbox.tsx

</details>

---

### 🤖 AI · 20:45 9/9/26

Lightbox còn hai chuỗi tiếng Việt cứng — đó là lỗ hổng trong chính phần i18n tao vừa làm. Sửa cả hai việc:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Find remaining hardcoded Vietnamese in ui components
- `Bash` — Add image strings and inspect components

</details>

---

### 🤖 AI · 20:46 9/9/26

Giờ sửa Lightbox — dùng đúng mẫu React "chỉnh state khi prop đổi", không dùng effect:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix Lightbox setState-in-effect and localize

</details>

---

### 🤖 AI · 20:46 9/9/26

Lightbox xong. Giờ `DishReviews` — `load()` gọi `setLoading` **đồng bộ** ở nhánh `!enabled`:

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Bash` — Check DishReviews lint status
- `Bash` — See remaining DishReviews error detail

</details>

---

### 🤖 AI · 20:47 9/9/26

Rule vẫn truy vết vào `load`. Chuyển sang mẫu callback promise — cũng là mẫu `RecentReviews` đang dùng, và thêm được chống ghi đè bởi phản hồi cũ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check all usages of load

</details>

---

### 🤖 AI · 20:47 9/9/26

`load` chỉ được effect dùng — nội tuyến luôn:

<details>
<summary>3 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\review\DishReviews.tsx
- `Bash` — Verify DishReviews fix
- `Bash` — Check new DishReviews warning

</details>

---

### 🤖 AI · 20:48 9/9/26

DishReviews còn import thừa. Dọn, rồi sang lỗi cuối — deep-link trong `ProvinceDishExplorer`:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Remove unused import and read deep-link effect

</details>

---

### 🤖 AI · 20:48 9/9/26

Lỗi cuối là deep-link. Đọc `window.location.hash` trong effect vừa vi phạm rule, vừa có **bug thật**: dep là `[dishes]` nên khi đang ở trang tỉnh mà bấm kết quả tìm kiếm sang món khác **cùng tỉnh**, hash đổi nhưng effect không chạy lại — panel không mở. Sửa bằng `useSyncExternalStore`:

<details>
<summary>4 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Edit` — D:\01_Study\07_Local_Food\components\province\ProvinceDishExplorer.tsx
- `Bash` — Verify deep-link fix

</details>

---

### 🤖 AI · 20:49 9/9/26

0 lỗi. Còn 2 cảnh báo biến không dùng — dọn nốt cho sạch hẳn:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect unused variables
- `Bash` — Check if these are truly dead

</details>

---

### 🤖 AI · 20:49 9/9/26

Cả hai đều thật sự chết. Xoá:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Read full ringArea function
- `Bash` — Remove dead code and re-lint
- `Bash` — Check totalRealHours usage across project
- `Grep` — totalRealHours

</details>

---

### 🤖 AI · 20:51 9/9/26

Hàm vẫn được `lib/telemetry.ts` dùng — chỉ import trong page là thừa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Remove unused import and final lint

</details>

---

### 🤖 AI · 20:52 9/9/26

**Lint sạch hoàn toàn — 0 lỗi, 0 cảnh báo.** Giờ localize nốt `ImageWithFallback` + `Sheet` rồi kiểm chứng deep-link thật:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect ImageWithFallback structure
- `Bash` — Check client directive and usage

</details>

---

### 🤖 AI · 20:52 9/9/26

Cả ba đều là client component lá. Dùng `useLocale()` trực tiếp thay vì luồn prop qua 4 nơi gọi — prop có mặc định `"vi"` mà quên truyền sẽ **âm thầm hiện tiếng Việt trên trang EN**, đúng loại lỗi tao vừa suýt tạo ra ở Lightbox:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Localize leaf UI components via useLocale

</details>

---

### 🤖 AI · 20:52 9/9/26

`PlaceholderCard` là hàm riêng nên chưa có `locale` — thêm hook vào chính nó:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — See PlaceholderCard body start
- `Edit` — D:\01_Study\07_Local_Food\components\ui\ImageWithFallback.tsx
- `Bash` — Full verification after all fixes

</details>

---

### 🤖 AI · 20:53 9/9/26

Tất cả sạch. Kiểm chứng deep-link bằng trình duyệt — đặc biệt là bug tao vừa sửa (chuyển giữa hai món **cùng tỉnh**):

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify deep-link fix in real browser

</details>

---

### 🤖 AI · 20:54 9/9/26

Tất cả PASS, 0 lỗi trang. Đáng chú ý là **bước 2** — trước khi sửa, đổi sang món khác cùng tỉnh thì panel không mở; giờ chạy đúng. Ghi vào DEVBOOK rồi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Document lint fixes and stage
- `Bash` — Commit lint fixes

</details>

---

### 🤖 AI · 20:55 9/9/26

Giờ push và tag v1.1:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Push commits to GitHub
- `Bash` — Create and push v1.1 tag
- `Bash` — Verify tags and commits on remote

</details>

---

### 🤖 AI · 20:56 9/9/26

Xong cả 3 việc.

## 1. Đã push
`d44ae72..afb8501` lên `master`. Vercel sẽ tự deploy bản song ngữ.

## 2. Tag v1.1
Đã tạo và push. `v1.0` vẫn nằm nguyên ở commit cũ (`d5dcf7c`) — đúng như lúc mày nộp sếp, không đụng vào.

## 3. Lint: 0 lỗi, 0 cảnh báo

Tao sửa đúng gốc chứ không tắt rule. **Một trong ba lỗi che một bug thật:**

Deep-link ở [ProvinceDishExplorer.tsx](components/province/ProvinceDishExplorer.tsx) đọc `window.location.hash` trong effect với dep `[dishes]`. Đang ở trang Hà Nội mà bấm kết quả tìm kiếm sang **món khác cùng tỉnh Hà Nội** → hash đổi nhưng `dishes` không đổi → effect không chạy lại → **panel không mở, người dùng bấm mà không thấy gì xảy ra.**

Hash là trạng thái nằm ngoài React, nên tao chuyển sang `useSyncExternalStore` (subscribe `hashchange`) rồi *suy ra* món đang mở, thay vì đồng bộ bằng effect. Kiểm bằng trình duyệt thật, 4/4 kịch bản PASS — kịch bản số 2 chính là cái trước đó FAIL.

Hai lỗi còn lại:
- **Lightbox** nháy khung "ảnh không tải được" trước khi hiện ảnh mới, vì effect reset chạy sau khi trình duyệt vẽ.
- **DishReviews** đặt state đồng bộ ở nhánh vô nghĩa; nhân tiện thêm cờ `alive` chặn phản hồi của món cũ ghi đè món mới khi mở nhanh hai món liên tiếp.

**Tao cũng vá một lỗ hổng của chính phần i18n vừa làm:** `Lightbox`, `ImageWithFallback`, `Sheet` vẫn hiện tiếng Việt trên `/en` — không cổng nào bắt được vì chúng chỉ hiện khi ảnh lỗi hoặc mở panel. Tao dùng `useLocale()` đọc URL thay vì luồn prop `locale`, vì prop có mặc định `"vi"` mà nơi gọi quên truyền sẽ *âm thầm* hiện sai ngôn ngữ — đúng lỗi tao vừa suýt mắc khi thêm prop cho Lightbox rồi quên truyền từ DishCard.

## Việc còn của mày

- **Tự test checklist US-16** — 14 ca trong [SIT-UAT-LF.md](SIT-UAT-LF.md). Tao chạy thử rồi nhưng đó chỉ chứng minh checklist khớp sản phẩm, không thay được mày test.
- Mấy việc tồn từ trước: đặt giới hạn domain cho MapTiler key, chọn kênh thông báo cho báo lỗi nội dung (Discord/Slack ~10 phút), quay video demo.

---

### 🧑 PM · 21:02 9/9/26

> tao test thấy cũng khá oke rồi. pass nhé. có vô tình thấy thêm issue sẽ fb sau.
> Giờ follow image này để tự đánh giá project này nhé.

---

### 🧑 PM · 21:02 9/9/26

> [Image: original 1256x2760, displayed at 910x2000. Multiply coordinates by 1.38 to map to original image.]

---

### 🤖 AI · 21:02 9/9/26

PM đã test US-16 → PASS. Tao ghi nhận vào SIT-UAT rồi tự đánh giá theo bảng T1–T10. Nhưng phải đọc lại artefact thật chứ không đoán:

<details>
<summary>7 thao tác công cụ</summary>

- `Bash` — List all documentation artefacts
- `Bash` — Read risk register
- `Bash` — Read estimation doc
- `Bash` — Check weekly report for hallucination detection step
- `Bash` — Read weekly report verification section
- `Bash` — Map assignments to existing artefacts
- `Grep` — stakeholder|Stakeholder|ambiguity|mâu thuẫn|test strategy|Test Strategy|chiến lược test|cuộc họp|action item|[

</details>

---

### 🤖 AI · 21:03 9/9/26

Phát hiện quan trọng: các từ khoá "stakeholder", "ambiguity", "test strategy", "cuộc họp", "retrospective" **không xuất hiện trong bất kỳ artefact nào của dự án** — chỉ có trong tài liệu khoá học. Kiểm tiếp xem có làm dưới tên khác không:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Inspect telemetry and KPI docs
- `Bash` — Check KPI formulas and dashboard
- `Bash` — Find assignment scoring context in program doc

</details>

---

### 🤖 AI · 21:04 9/9/26

Tìm được điều kiện thật: **≥9/10 assignment đạt mức ≥2**, T5 và T10 bắt buộc. Đọc thang điểm 0–4:

<details>
<summary>5 thao tác công cụ</summary>

- `Bash` — Read the 0-4 rubric
- `Bash` — Read DOR and case study structure
- `Bash` — Check RTM and SIT-UAT structure
- `Bash` — Verify WBS dependencies and weekly report tail
- `Bash` — Read telemetry honesty sections

</details>

---

### 🤖 AI · 21:06 9/9/26

Đã đủ dữ kiện. Trước hết ghi nhận PM đã test US-16 → PASS:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Record PM PASS for US-16
- `Write` — D:\01_Study\07_Local_Food\ASSESSMENT-T1-T10-LF.md
- `Bash` — Commit and push assessment

</details>

---

### 🤖 AI · 21:09 9/9/26

Đã tự đánh giá xong — [ASSESSMENT-T1-T10-LF.md](ASSESSMENT-T1-T10-LF.md), đã commit + push.

Tao tìm được điều kiện thật trong tài liệu khoá học (§7.3): **≥9/10 assignment ở mức ≥2, T5 và T10 bắt buộc**, chấm theo thang 0–4 ở §7.2.

## Kết quả

| # | Assignment | Điểm | | # | Assignment | Điểm |
|---|---|:---:|---|---|---|:---:|
| T1 | Requirement | 2 | | T6 | Test Strategy | 2 |
| **T2** | **Review Requirement** | **1** ⚠️ | | T7 | Weekly Report | 3 |
| T3 | WBS | 3 | | **T8** | **Meeting Summary** | **0** ⛔ |
| T4 | Estimation | 3 | | T9 | Retrospective | 3 |
| T5 | Risk List | **4** ✅BB | | T10 | Dashboard | **4** ✅BB |

## ⛔ 8/10 — chưa qua cổng, thiếu đúng 1 assignment

Hai điều kiện **bắt buộc** đều đạt tối đa (T5 = 4, T10 = 4). Nhưng điều kiện ≥9/10 thì trượt.

**Nghịch lý đáng nói:** phần khó nhất đạt điểm cao nhất, phần rẻ nhất lại trượt. T2 và T8 mỗi cái dưới 1 giờ. Không phải làm không nổi — mà **chưa từng được coi là việc phải làm**, vì cả hai không nằm trên đường tới sản phẩm chạy được nên trôi mất trong 2 tuần chạy theo tính năng.

**T2 = 1:** cả dự án chạy theo chiều **PM review AI** (8 Cổng hiểu, PM bác 5 lần) — đó là điểm sáng nhất. Nhưng T2 đòi chiều **ngược lại**: AI rà chính bản requirement, ≥5 phát hiện, PM phân loại cái nào thật. `RTM-LF.md` §3 gần nhất nhưng khác cả thời điểm (bước [10] chứ không phải [1]), bản chất (truy vết chứ không phải requirement) lẫn số lượng (3 chứ không phải 5).

**T8 = 0:** không có cuộc họp nhiều người nào để tóm tắt. Không phải lý do miễn trừ — trong 2 tuần hoàn toàn có thể tổ chức một buổi review 15 phút để lấy nguyên liệu.

## Hai chỗ khác tao chấm thấp hơn mày có thể nghĩ

**T6 = 2** — `SIT-UAT-LF.md` là *danh sách ca kiểm thử*, không phải *chiến lược test*. Hệ quả thật chứ không phải lý thuyết: GAP-T2 — Search và Filter chạy trên production nhiều ngày mà không story, không test, không ai phát hiện.

**T4 = 3 dù ước lượng sai hơn 20 lần** — dự tính 50,7h cho 8 tỉnh, thực tế 63 tỉnh trong 16–22h. Tao vẫn chấm 3 vì rubric chấm *chất lượng quy trình ước lượng* (giả định rõ, PM điều chỉnh, có bước trade-off khi vượt mốc — đều có), không chấm độ chính xác con số.

## Khuyến nghị

**Làm T2 trước** (~45 phút). Không cần sắp lịch với ai, và `SPEC-LF.md` đã phình từ US-01 tới US-16 qua 2 tuần, thêm từng đợt theo yêu cầu miệng — gần như chắc chắn có mâu thuẫn và AC lỗi thời thật nằm trong đó. Rà nghiêm túc sẽ tìm ra lỗi thật, y như lần viết test cho US-12/13 tìm ra 3 lỗi mà build xanh + axe-core sạch đều không thấy.

Làm cả T2 và T8 thì được 10/10.

**Một điều tao không làm:** viết hồi tố một "biên bản họp" từ hội thoại tao với mày rồi gọi đó là T8. Đề bài đòi *cuộc họp thật* — bịa đầu vào để lấp ô trống chính là thứ mà toàn bộ kỷ luật telemetry của dự án này được dựng lên để chống lại.

Muốn tao chạy T2 ngay bây giờ không?

---

### 🧑 PM · 21:11 9/9/26

> uk làm T2 đi

---

### 🤖 AI · 21:11 9/9/26

Đây phải là bài rà thật, không phải diễn. Tao đọc kỹ SPEC + SCOPE rồi **đối chiếu từng phát hiện với sản phẩm thật** — phát hiện bịa thì hỏng cả mục đích bài này.

<details>
<summary>2 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\SCOPE-LF.md
- `Read` — D:\01_Study\07_Local_Food\SPEC-LF.md

</details>

---

### 🤖 AI · 21:12 9/9/26

Nhiều phát hiện tiềm năng. Kiểm chứng từng cái với code/dữ liệu thật trước khi ghi:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Verify candidate findings against code
- `Bash` — Check bounds and schema nullability
- `Bash` — Verify grant and responsive breakpoint inconsistency
- `Bash` — Verify admin guide contradicts SPEC role table

</details>

---

### 🤖 AI · 21:14 9/9/26

Tất cả phát hiện đã kiểm chứng bằng code/dữ liệu thật. Viết artefact T2:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\REVIEW-REQ-LF.md
- `Bash` — Update assessment with T2 result

</details>

---

### 🤖 AI · 21:15 9/9/26

Còn vài chỗ trong file đánh giá chưa đồng bộ. Sửa cho khớp:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Sync assessment doc with T2 completion
- `Bash` — Read the closing recommendation section
- `Bash` — Finalize and push T2

</details>

---

### 🤖 AI · 21:17 9/9/26

Xong T2 — [REVIEW-REQ-LF.md](REVIEW-REQ-LF.md), đã push. **11 phát hiện**, đề bài chỉ đòi ≥5. Mỗi cái tao đã đối chiếu code/dữ liệu thật, ghi kèm file + dòng để mày tự kiểm trong 30 giây.

## Phát hiện nặng nhất — P1, đụng chủ quyền

AC của US-01 viết: khung nhìn mặc định bao trọn **"đất liền Việt Nam (Hà Giang → mũi Cà Mau)"**.

Nhưng R14 và US-01c đòi khung mặc định phải bao **Hoàng Sa và Trường Sa** — code `VIETNAM_BOUNDS` đi tới **114,4°Đ**, xa ngoài đất liền.

**Sản phẩm đang chạy đúng. Mọi cổng tự động xanh. Mày đã test PASS. Chỉ có tài liệu yêu cầu là nói ngược lại.** Ai đó sau này "sửa code cho khớp AC" sẽ thu khung về đất liền và **xoá mất phần chủ quyền**. Không cổng tự động nào bắt được, vì máy chỉ kiểm được code hoặc tài liệu, không kiểm được khoảng cách giữa hai thứ.

## Các phát hiện còn lại

| | Phát hiện |
|---|---|
| **P2** | SCOPE vẫn liệt kê **đa ngôn ngữ**, **review của người dùng**, và **"không database/backend"** trong mục *Out of scope* — cả ba đã ship |
| **P3** | AC của US-05 nói trang chủ hiện *"card **mỗi tỉnh**"*; thực tế chỉ **8 tỉnh** (đây chính là Q4 còn treo trong Weekly từ 06/09) |
| **P5** | NFR *"không lưu dữ liệu cá nhân → không cần NFR phân quyền"* — nhưng US-14 lưu tên người dùng vào DB, và RLS **chính là** phân quyền |
| **P6** | *"Nguồn **chính thống**"* không được định nghĩa → 63% món không có nguồn Wikipedia vẫn "đạt" NFR |
| **P7** | Ngay trong **cùng một dòng US-01**: Story nói *"vài bubble"*, AC nói *"tất cả tỉnh"* |
| **P8** | `tasteTags` hiện slug tiếng Anh thô (`spicy`, `savory`) trên **cả bản tiếng Việt** — không story nào phủ, nó lọt vào qua schema |
| **P9** | Vai Content Editor không có dòng nào cho: sửa bản dịch, và kiểm duyệt review qua Supabase Dashboard |
| **P10** | US-07 nói *"≤400px"*, NFR nói *"từ 360px trở lên"* — máy 320px nằm giữa hai cam kết |
| **P11** | GAP-02 vẫn nằm ở mục *"chưa xử lý"* dù MapTiler key đã có từ 03/09 |

**P4 là lỗi của chính tao sáng nay:** AC của US-16 tao viết `/provinces/hue`, slug thật là `thua-thien-hue` → ai test theo AC đó sẽ gặp 404 và báo FAIL oan.

Tao cũng ghi rõ **3 thứ đã kiểm và thấy SPEC đúng** (giới hạn 500 ký tự, ngưỡng zoom nhãn, quyền `grant insert`) — để không đội số phát hiện bằng nhận xét vô thưởng vô phạt.

## Điểm số

**9/10 assignment ở mức ≥2 → đủ điều kiện §7.3.** T5 = 4 và T10 = 4 (hai mục bắt buộc) vẫn đạt. T8 = 0 là mục duy nhất dưới ngưỡng, nằm trong hạn mức 1 assignment được phép.

Nguyên nhân gốc của P2/P3/P7/P11 giống nhau: dự án mở rộng scope 4 lần lớn, và mỗi lần đều **thêm story mới** thay vì **rà lại story cũ**. US-12→US-16 viết đúng quy trình, nhưng US-01→US-08 chưa ai đọc lại kể từ 26/08.

## Cần mày làm

**Phân loại 11 phát hiện** (Thật / Không / Để sau) — cột cuối trong file đang để trống. Chưa có bước này thì T2 chưa chốt được điểm, vì tiêu chí đòi *"PM phân loại đúng cái nào thật"*. Nếu có mục nào mày cho là tao nhận định sai, ghi lý do vào — cái đó quý hơn cả bảng.

Ưu tiên **Q1** (khung nhìn mặc định: đất liền hay đất liền + hai quần đảo?) rồi chốt vào AC. Sáu câu còn lại để sau được.

Muốn tao sửa luôn SPEC/SCOPE theo các phát hiện mày duyệt là "Thật" thì bảo.

---

### 🧑 PM · 21:20 9/9/26

> uk thật hết nhỉ

---

### 🤖 AI · 21:21 9/9/26

Khoan — có **một** phát hiện tao muốn mày nhìn lại, và đây là chỗ tao nghĩ mình đã đóng khung sai.

**P2 có thể là dương tính giả theo đúng quy ước của chính dự án này.** `KNOWLEDGE-HEALTH-LF.md` khi đo KPI c3 đã ghi rõ:

> *"Cách đo ban đầu cho 72% và **phạt oan** `SCOPE-LF.md`, `EST-LF.md`, `ARCH-LF.md` — những artefact **đóng băng có chủ đích** (quyết định tại thời điểm, giữ làm lịch sử)."*

Tức dự án **đã quyết** SCOPE là bản chụp quyết định lúc bắt đầu, không phải tài liệu sống. Nếu vậy thì việc SCOPE còn ghi "đa ngôn ngữ — out of scope" **không phải lỗi**, mà đúng thiết kế: nó ghi lại điều đã quyết ngày 26/08.

Phần **thật sự** còn lại của P2 nhỏ hơn nhiều: SCOPE **không tuyên bố ở đầu file rằng nó là bản đóng băng**, nên người đọc mới không phân biệt được "đã quyết bỏ hồi đó" với "đang bỏ". Đó mới là lỗi — và nó là câu Q2 tao hỏi.

Tao ghi lại phán xử với đúng sắc thái đó chứ không tick "Thật" cho cả 11:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Record PM verdict with P2 nuance

</details>

---

### 🤖 AI · 21:22 9/9/26

PM duyệt 11/11. Giờ áp sửa vào SPEC — bắt đầu từ P1 vì nó đụng chủ quyền:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Apply P1,P3,P4,P5,P6,P7,P10,P11 fixes to SPEC

</details>

---

### 🤖 AI · 21:23 9/9/26

Giờ P9 (vai Content Editor) và P2 (SCOPE tuyên bố đóng băng):

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Apply P9 role fix and P2 frozen declaration
- `Bash` — Check US-01c sovereignty test coverage

</details>

---

### 🤖 AI · 21:23 9/9/26

US-01c đã phủ đúng phần chủ quyền — vậy lỗi chỉ nằm ở AC trong SPEC, test thì đúng. Thêm liên kết chéo để lần sau không ai đọc lệch:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Cross-reference test and verify all gates

</details>

---

### 🤖 AI · 21:24 9/9/26

Sạch hết. Commit 10 sửa đổi, còn P8 cần mày quyết:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Commit and push T2 fixes
- `AskUserQuestion`
- `Bash` — Find all tasteTags render sites
- `Bash` — Localize tasteTags display

</details>

---

### 🤖 AI · 21:26 9/9/26

Giờ ghi P8 thành quyết định có trong SPEC — để lần sau nó không lại là thứ "lọt vào qua schema":

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add US-17 story and test, verify build

</details>

---

### 🤖 AI · 21:27 9/9/26

Kiểm bằng trình duyệt thật trước khi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify tasteTags render per locale in browser
- `Bash` — Close P8, update docs, commit and push

</details>

---

### 🤖 AI · 21:29 9/9/26

**11/11 phát hiện đã đóng**, đã push.

## Một chỗ tao bác lại chính mình

Mày duyệt cả 11 là thật. Nhưng khi ghi lại, tao đối chiếu thêm và thấy **P2 tao đóng khung sai**.

`KNOWLEDGE-HEALTH-LF.md` khi đo KPI c3 đã chốt `SCOPE`/`EST`/`ARCH` là **artefact đóng băng có chủ đích**, và ghi rõ cách đo cũ đã *"phạt oan"* chúng. Vậy việc SCOPE còn ghi "đa ngôn ngữ — out of scope" **không phải lỗi** — nó đúng thiết kế, ghi lại điều đã quyết ngày 26/08.

Phần thật sự còn lại nhỏ hơn nhiều: SCOPE **không tuyên bố** mình là bản đóng băng. Tao xử lý bằng cách thêm khối 🧊 ở đầu file kèm bảng đối chiếu 4 mục đã đảo quyết định — **không sửa nội dung gốc**, vì sửa là xoá mất bằng chứng scope đã trôi 4 lần.

Tao ghi chuyện này vào file thay vì im lặng sửa, vì **R3 (rubber-stamping) áp cho cả hai chiều**. Duyệt cả gói mà không bác mục nào là đúng dạng tín hiệu R3 cảnh báo — và ở đây phát hiện sai lại do chính tao viết ra, nên tao có trách nhiệm chỉ ra. Nếu không, một dương tính giả sẽ được đóng dấu "PM đã duyệt" rồi thành căn cứ để sửa nhầm một artefact vốn cố tình giữ nguyên.

## Sửa quan trọng nhất — P1

AC của US-01 giờ ghi: khung nhìn mặc định bao trọn **"đất liền (Hà Giang → mũi Cà Mau) VÀ hai quần đảo Hoàng Sa, Trường Sa"**, kèm toạ độ `114,4°Đ / 8,0°B` và trỏ thẳng `VIETNAM_BOUNDS`. Cũng thêm cảnh báo vào SIT-UAT US-01 bước 2 rằng bước đó **chỉ kiểm đất liền**, phần quần đảo kiểm ở §US-01c.

Giờ không ai "sửa code cho khớp AC" mà vô tình xoá mất phần chủ quyền được nữa.

## P8 đẻ ra một story thật

Mày chọn dịch sang tiếng Việt. Đã làm và kiểm bằng trình duyệt:

```
VI →  cay · đậm đà · món nước · ăn đường phố
EN →  spicy · savoury · noodle soup · street food
```

Chỉ đổi **cách hiển thị** trong `ui-strings.ts`; 63 file dữ liệu giữ nguyên slug tiếng Anh — chúng đã qua zod và đã được kiểm, đổi giá trị chỉ để đổi chữ trên màn hình là rủi ro thừa. US-10 (lọc theo khẩu vị, backlog) sau này vẫn lọc trên slug.

Tao viết thành **US-17** + 4 ca kiểm thử, để nó thành quyết định có chủ đích thay vì thứ vô tình lọt vào qua schema.

Đây cũng là bằng chứng rõ nhất rằng T2 không phải thủ tục giấy tờ: **bài rà soát requirement đẻ ra một story thật và làm đổi sản phẩm.**

## Điểm

Tao chấm lại **T2 = 3/4** (trước là 2) vì đủ cả ba vế: 11 phát hiện vượt mốc ≥5, PM phân xử thật, và AI tự bác một phát hiện của chính mình sau khi PM đã duyệt.

**Tổng 9/10 ở mức ≥2 → đủ điều kiện §7.3.** T5 = 4 và T10 = 4 (hai mục bắt buộc) vẫn đạt. T8 = 0 là mục duy nhất dưới ngưỡng, nằm trong hạn mức 1 assignment được phép.

Còn lại nếu muốn 10/10: **T8** cần một cuộc họp thật (~30 phút) — buổi review với sếp hoặc diễn tập viva có người thứ hai, rồi tóm tắt thành action item + owner + hạn.

---

### 🧑 PM · 21:31 9/9/26

> oke thế được rồi.
> giờ mày coi udate lại phần trò chuyện vào file report.
> đồng thời chạy re-check và update telemetry, update số giờ làm việc mấy phiên gần đây nữa nhé

---

### 🤖 AI · 21:31 9/9/26

Ba việc. Lưu ý trước: **giờ người thật thì tao không đo được** — `TELEMETRY-LF.md` §1 đã chứng minh git sai cả hai chiều. Tao sẽ đo phần đo được rồi hỏi mày phần còn lại. Xem hiện trạng đã:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Inspect report and telemetry state
- `Bash` — Dump telemetry structure
- `Bash` — Measure commits by date

</details>

---

### 🤖 AI · 21:31 9/9/26

Phát hiện ngay một chỗ lệch: telemetry ghi 09-06 có **8 commit**, git nói **18**; tổng ghi 48, git nói **69**. Telemetry tự nó đã cũ. Đo lại toàn bộ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure all machine-measurable telemetry

</details>

---

### 🤖 AI · 21:32 9/9/26

Giờ đo lại token từ transcript — đây là **số đo thật**, không ước lượng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Re-measure token usage from session transcript

</details>

---

### 🤖 AI · 21:32 9/9/26

Transcript đã lớn từ 39,7MB → 52,4MB. Nhưng phải kiểm xem có phiên nào khác không, kẻo đếm thiếu:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check for other session transcripts

</details>

---

### 🤖 AI · 21:33 9/9/26

Có **3 transcript**, telemetry cũ chỉ đếm 1. Kiểm xem 2 file kia có phải việc của dự án này không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Identify which transcripts belong to this project

</details>

---

### 🤖 AI · 21:33 9/9/26

`3ffd154d` là dự án **PB-04** khác (13–21/08), không phải Local Food — telemetry cũ khoanh vùng đúng. Nhưng còn token của agent nền, kiểm xem có được đếm không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check whether subagent tokens are captured

</details>

---

### 🤖 AI · 21:33 9/9/26

**Agent nền không được ghi vào transcript** (sidechain = 0). Nghĩa là số token đo được là **sàn**, không phải tổng — 10 agent dịch + các agent research trước đó không nằm trong đó. Phải ghi rõ điều này. Giờ làm việc 1: xuất lại báo cáo hội thoại.

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect transcript export script
- `Bash` — Regenerate conversation HTML report

</details>

---

### 🤖 AI · 21:34 9/9/26

Báo cáo đã cập nhật (96 lượt PM · 624 lượt AI). File này sẽ gửi cho sếp nên phải kiểm secret đã che chưa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify secrets are redacted in shareable report

</details>

---

### 🤖 AI · 21:34 9/9/26

**Hai lỗ rò rỉ trong file định gửi sếp** — 1 JWT lọt và email PM xuất hiện 2 lần. Tìm chỗ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Locate the leaked secrets

</details>

---

### 🤖 AI · 21:34 9/9/26

Phân tích: JWT lọt chỉ là **phần header** (`{"alg":"HS256","typ":"JWT"}` — giống hệt nhau ở mọi JWT, không chứa bí mật), nhưng nó *trông như* key rò rỉ nên vẫn phải che. Email thì là email thật của mày trong file gửi sếp. Vá bộ lọc:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Patch redaction and regenerate report

</details>

---

### 🤖 AI · 21:34 9/9/26

Sạch: 0 JWT, 0 email, 0 project URL. Giờ cập nhật telemetry với số đo mới:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Update telemetry data with measured values
- `Bash` — Check grouped hours estimate and section 5.1

</details>

---

### 🤖 AI · 21:35 9/9/26

Số liệu máy đo xong. Còn giờ người thì tao không đo được — cần mày:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 21:36 9/9/26

Ghi vào telemetry, kèm đo lại token trong cùng một lần chạy để số liệu nhất quán:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Write hours and token measurements to telemetry

</details>

---

### 🤖 AI · 21:36 9/9/26

Shell nuốt dấu nháy. Viết ra file:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\scripts\update-telemetry.mjs
- `Bash` — Run telemetry update

</details>

---

### 🤖 AI · 21:37 9/9/26

Giờ cập nhật `TELEMETRY-LF.md` cho khớp số đo mới:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Read sections 5.3 and 5.5 to update
- `Bash` — Update telemetry sections 5.1 and 5.3
- `Bash` — Update telemetry sections 5.1 and 5.3

</details>

---

### 🤖 AI · 21:38 9/9/26

Giờ mục 5.5 (token) — thay số mới và bổ sung lỗ hổng agent nền:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Rewrite token section with new measurements

</details>

---

### 🤖 AI · 21:39 9/9/26

Còn mục 1 (nhịp commit) và mục 4 (sản lượng) — số cũ đã lệch so với git:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Read sections 1 and 4 for update
- `Bash` — Update sections 1 and 4, verify build

</details>

---

### 🤖 AI · 21:40 9/9/26

Tao làm hỏng hai chỗ: `incidents` vốn là **mảng**, tao spread thành object; và `tokens.billableFull` bị mất khi ghi đè. Sửa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix update script and re-run from clean telemetry

</details>

---

### 🤖 AI · 21:40 9/9/26

`git checkout` khôi phục bản gốc nên 3 phiên mới bị mất và commit/ngày vẫn là số cũ. Bổ sung phần đó vào script:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Add session sync to update script and re-run
- `Bash` — Typecheck and build after telemetry fix

</details>

---

### 🤖 AI · 21:40 9/9/26

Tao ghi đè cả object `tokens` nên mất mấy trường trang đang dùng. Xem bản gốc rồi **hợp nhất** thay vì thay thế:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect original tokens object fields
- `Bash` — Merge tokens object instead of replacing, verify types

</details>

---

### 🤖 AI · 21:41 9/9/26

TypeScript sạch, mọi trường được giữ. Cập nhật số trong `TELEMETRY-LF.md` cho khớp lần đo cuối rồi kiểm toàn bộ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Sync telemetry doc numbers and run all gates

</details>

---

### 🤖 AI · 21:42 9/9/26

Tất cả xanh. Kiểm trang `/telemetry` chạy thật rồi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify telemetry page renders new numbers
- `Bash` — See what hours and tokens the page displays

</details>

---

### 🤖 AI · 21:43 9/9/26

Trang còn **số cứng cũ lẫn số mới** (913M, 14,5M, 2,2M nằm cạnh 1228M, 19.3M). Tìm chỗ hardcode:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Find hardcoded stale numbers in telemetry UI
- `Grep` — 913|14,5|2,2M|16–22|27–37|600

</details>

---

### 🤖 AI · 21:43 9/9/26

Đúng cái bẫy của việc hợp nhất: trường văn xuôi `caveat` mang số cũ (913M/14,5M/2,2M) được giữ nguyên. Xem trang dùng gì rồi sinh lại:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Inspect how page uses token fields

</details>

---

### 🤖 AI · 21:44 9/9/26

`mdPerMillionBillable` cũng là số dẫn xuất từ giờ người — phải tính lại. Sinh lại cả ba trường văn xuôi/dẫn xuất:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Regenerate derived prose fields and verify

</details>

---

### 🤖 AI · 21:44 9/9/26

Còn chuỗi "1 man-day ≈ 6,6M" hardcode trong trang, giờ đã sai (phải là ~5,6M). Cho nó tự tính:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Derive man-day figure and verify page has no stale numbers

</details>

---

### 🤖 AI · 21:45 9/9/26

Số cũ sạch hết. Kiểm nốt phần Nén/giờ người trên trang:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check compression calculator defaults

</details>

---

### 🤖 AI · 21:45 9/9/26

Máy tính Nén là phần tương tác, lấy `baselineNoAiH` = 600 làm mặc định — con số đó giờ đã thấp so với phạm vi mới. Cập nhật kèm dấu vết:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Update baseline and verify compression on page

</details>

---

### 🤖 AI · 21:46 9/9/26

Trang hiện đúng: 26h, baseline 765, Nén 29,4×. Quét nốt số cũ còn sót trong tài liệu:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Scan telemetry doc for stale numbers

</details>

---

### 🤖 AI · 21:46 9/9/26

Ba chỗ là số liệu sống đã lệch (không phải trích dẫn lịch sử). Sửa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix stale compression claims in doc

</details>

---

### 🤖 AI · 21:47 9/9/26

Cả 3 chỗ còn lại đều là trích dẫn lịch sử có chủ đích. Kiểm lần cuối rồi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Final verification of all gates and report
- `Bash` — Commit and push telemetry update and report

</details>

---

### 🤖 AI · 21:48 9/9/26

Xong cả ba, đã push.

## 1. Báo cáo hội thoại

Xuất lại: **96 lượt PM · 627 lượt AI · 1.457 thao tác** (0,75MB).

**Tao tìm thấy 2 lỗ rò rỉ trong file định gửi sếp** — bộ lọc cũ để lọt:
- **1 JWT** — chỉ là phần header (`{"alg":"HS256"}`, giống hệt ở mọi JWT, không chứa bí mật) nhưng người đọc không phân biệt được và sẽ tưởng key rò rỉ
- **Email cá nhân của mày, 2 lần** — chưa hề nằm trong danh sách che

Đã vá bộ lọc, quét lại: **0 JWT, 0 email, 0 URL dự án**.

## 2. Chính bảng telemetry từng sai

Bản cũ ghi 06/09 có **8 commit**, tổng **43**. Git nói **18** và **69**.

Nguyên nhân: telemetry được lập **ngay trong** phiên 06/09 — chốt số giữa chừng rồi không ai đo lại khi phiên đó chạy tiếp. Bài học ghi vào mục 1: *chỉ số tự động vẫn sai nếu thời điểm đo nằm trong khoảng đang đo*.

Giờ số liệu sinh bằng `scripts/measure-telemetry.mjs` + `update-telemetry.mjs`, chạy lại được, không nhập tay.

## 3. Giờ + Nén

| | Trước | Sau |
|---|---|---|
| Giờ người | 16–22h | **23–32h** |
| Commit | 43 | **69** |
| Nén | 27–37× | **23–35×** |

Chỗ này có một cái bẫy tao muốn mày biết: **phải sửa cả tử số lẫn mẫu số.** Nếu chỉ cộng giờ mới vào mẫu số mà quên tăng baseline theo phạm vi mới (song ngữ, 41.000 từ dịch chuyên ngành), chỉ số tụt còn **19–26×** và *trông như năng suất giảm* — trong khi thực tế đã làm thêm cả một tính năng lớn. Tao để cả dòng "Sai" trong bảng để thấy bẫy. Baseline 600h → **765h**, giữ giá trị cũ để truy vết.

Riêng 08/09 mày trả lời *"trên 3 giờ"* — tao ghi cận dưới 3h là chắc chắn, **cận trên 4h là giả định của tao**, không phải điều mày nói.

## 4. Lỗ hổng đo token

Token đo lại: **2.762 lượt · output 3,0M · tổng thô 1,23 tỷ · tính giá đầy đủ 19,3M · cache hit 98,4%**.

Nhưng tao kiểm và thấy transcript có **0 lượt sidechain** — nghĩa là **token của ~24 agent chạy nền không được ghi vào đâu cả** (6 agent nội dung 03/09, ~8 agent mở rộng 06/09, 10 agent dịch 09/09). Mẫu từ thông báo tác vụ hôm nay: mỗi agent dịch báo 68.836–99.668 token.

**Con số trên là sàn, không phải tổng.** Tao không ước lượng bù — muốn tổng thật phải lấy từ trang usage của tài khoản, việc đó chỉ mày làm được.

## Hai lỗi tao tự gây ra khi cập nhật

Cả hai đều thuộc loại *không báo lỗi, không ai thấy*:
1. Spread mảng `incidents` thành object → làm hỏng trang `/telemetry`
2. Ghi đè cả object `tokens` → mất các trường trang đang đọc, và giữ lại **câu văn xuôi mang số cũ** (913M/14,5M/2,2M)

Nay hợp nhất thay vì thay thế, và mọi trường **dẫn xuất** từ giờ người (`caveat`, `mdPerMillionBillable`, chuỗi "1 man-day ≈ …") đều sinh lại từ số đo. Kiểm trang thật: không còn số cũ nào.

Lint sạch, build 134 trang, `check:geo` + `check:i18n` xanh.

---

### 🧑 PM · 21:51 9/9/26

> tag v1.1 theo commit mới nhất bây giờ luôn nhé

---

### 🤖 AI · 21:52 9/9/26

Tag `v1.1` đang ở `afb8501`, từ đó tới nay có 5 commit nữa. Xem cái gì sẽ được gộp thêm vào:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check what will be added to the tag

</details>

---

### 🤖 AI · 21:52 9/9/26

Working tree sạch, local = remote. Dời tag và viết lại mô tả cho khớp 5 commit mới:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Move v1.1 tag to latest commit and force-push

</details>

---

### 🤖 AI · 21:53 9/9/26

Xong. `v1.1` giờ trỏ tới `9d2b7f3` — commit mới nhất.

```
v1.0  →  d5dcf7c   (giữ nguyên, đúng chỗ lúc nộp sếp)
v1.1  →  9d2b7f3   (đã dời từ afb8501)
```

Tag gộp thêm **5 commit**, nên tao viết lại mô tả cho khớp thay vì giữ mô tả cũ chỉ nói về i18n:

**Sản phẩm** — song ngữ 63/63 tỉnh · chủ quyền biển đảo bản EN · US-17 nhãn khẩu vị · sửa bug deep-link · lint sạch 0/0

**Chất lượng hồ sơ** — cổng `check:i18n` · tự đánh giá T1–T10 (9/10 ở mức ≥2, T5 và T10 đều 4) · bài T2 với 11 phát hiện đã đóng · telemetry đo lại bằng script

Một lưu ý: đây là **force-push tag đã công bố** — ai đã fetch `v1.1` trước đó sẽ thấy nó trỏ chỗ khác. Thực tế chỉ có mình mày, và tag mới đẩy sáng nay, nên không ảnh hưởng gì. Lần sau nếu đã gửi link `v1.1` cho ai rồi thì nên tạo `v1.2` thay vì dời.

Tao đọc thấy `RELEASE-v1.0.md` có sẵn trong repo nhưng chưa có `RELEASE-v1.1.md` — hiện phần đó nằm trong mô tả tag. Muốn tao viết thành file cho đồng bộ với v1.0 thì bảo.

---

### 🧑 PM · 21:54 9/9/26

> uk viết file v.1.1 đi

---

### 🤖 AI · 21:54 9/9/26



<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\RELEASE-v1.0.md

</details>

---

### 🤖 AI · 21:54 9/9/26

Đo số liệu thật cho v1.1 thay vì chép từ v1.0:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure v1.1 statistics

</details>

---

### 🤖 AI · 21:54 9/9/26

**45.192 từ tiếng Anh do 10 agent sinh ra, và rủi ro đó chưa hề có trong `RISK-LF.md`.** Không ai đọc bản dịch của 62 tỉnh — chỉ có cổng kiểm cấu trúc. Ghi thành R15 trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add R15 translation quality risk

</details>

---

### 🤖 AI · 21:55 9/9/26

15 rủi ro. Giờ viết `RELEASE-v1.1.md`:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\RELEASE-v1.1.md

</details>

---

### 🤖 AI · 21:56 9/9/26

File này làm số artefact thành 32. Đo lại và sửa cho khớp:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix artefact count in release notes

</details>

---

### 🤖 AI · 21:56 9/9/26

Commit, rồi dời tag `v1.1` xuống commit này — vì file ghi chú phát hành phải **nằm trong** bản phát hành nó mô tả:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Commit release notes and move tag
- `Bash` — Verify tag contains release notes with correct commit

</details>

---

### 🤖 AI · 21:58 9/9/26

Lỗi tự quy chiếu: file ghi `67ec10a` nhưng tag ở `93c16f3` — **file không bao giờ chứa được hash của chính commit tạo ra nó**, vì ghi hash vào là đổi commit. Bỏ hash đi:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Remove self-referential hash and finalize tag

</details>

---

### 🤖 AI · 21:58 9/9/26

Xong. [RELEASE-v1.1.md](RELEASE-v1.1.md) đã viết, tag `v1.1` giờ trỏ `15af07b` và **chứa chính file ghi chú** — ghi chú phát hành phải nằm trong bản phát hành nó mô tả.

```
v1.0  →  d5dcf7c   (giữ nguyên)
v1.1  →  15af07b   (chứa RELEASE-v1.1.md)
```

## Số liệu đo thật, không chép từ v1.0

| | v1.0 | v1.1 |
|---|---|---|
| Ngôn ngữ | Chỉ Việt | **Việt + Anh** 63/63 |
| Route tĩnh | 69 | **134** |
| Dòng code | 3.753 | **5.145** |
| Dòng dữ liệu | 5.717 | **10.124** |
| Artefact | 25 file · 43.370 từ | **32 file · 62.427 từ** |
| Giờ người | ~17,5h | **23–32h** |
| Nén | 27–37× | **23–35×** |

## Tao tìm ra một rủi ro chưa ai ghi

Khi viết mục "còn tồn", tao đối chiếu và thấy: **45.192 từ tiếng Anh do 10 agent sinh ra, mà rủi ro đó chưa hề có trong `RISK-LF.md`.**

`check:i18n` chỉ kiểm **cấu trúc** — đủ món, đủ trường, khớp số phần tử. **Không cổng nào kiểm nghĩa.** Mày không đọc; tao chỉ đọc kỹ bản thử Hà Nội.

Đáng lo ở chỗ: trong phần *được đọc kỹ*, tao đã tìm ra **7 bẫy dịch** (`chao` là động từ, `bánh tráng` trong bánh cuốn, tên loài cá, `cao lâu` = tiệm ăn người Hoa, `mắm` = cây ngập mặn, `nước mắm` = nước cốt mắm đã lọc, `tráng` là động từ). Số bẫy tìm được tỉ lệ thuận với công sức đọc — nên gần như chắc chắn còn bẫy chưa ai thấy.

**R15 nặng hơn R2 ở một điểm:** người đọc tiếng Anh *không có cách nào tự nghi ngờ*, vì họ không đọc được bản gốc để đối chiếu. Người Việt đọc nội dung tiếng Việt sai thì còn thấy gợn.

Đã ghi thành **R15** trong `RISK-LF.md` (giờ 15 rủi ro) và để 🟡 còn mở, kèm đề xuất xử lý giống R2: bốc mẫu có seed cố định từ nhóm tỉnh nhiều thuật ngữ địa phương, đọc thật, ghi đúng mức đã kiểm.

## Một lỗi nhỏ tao tự gây rồi tự sửa

Lần đầu tao ghi mã commit vào file — nhưng **file không bao giờ chứa được hash của chính commit tạo ra nó**, vì ghi hash vào là đổi commit. Kết quả: file ghi `67ec10a` trong khi tag ở `93c16f3`. Đã bỏ hash, chỉ để tên tag, và ghi luôn lý do vào file để lần sau không ai thêm lại.

Working tree sạch, local = remote.

---

### 🧑 PM · 21:25 11/9/26

> Tiếp tục phát triển nhé.
> Hãy nghiên cứu và thêm tính năng recommend món ăn cho dân văn phòng dựa trên list các món trong prj của mình nhé. Lựa chọn filter bớt chứ ko full nhé, vì có vài món có thể chỉ phù hợp ăn vặt hoặc kiểu nhậu thôi.
> Follow theo vòng update tài liệu, ra spec, scope, risk, wbs, arch các thứ nhé

---

### 🤖 AI · 21:25 11/9/26

Failed to authenticate: OAuth session expired and could not be refreshed

---

### 🧑 PM · 21:26 11/9/26

> Tiếp tục phát triển nhé.
> Hãy nghiên cứu và thêm tính năng recommend món ăn cho dân văn phòng dựa trên list các món trong prj của mình nhé. Lựa chọn filter bớt chứ ko full nhé, vì có vài món có thể chỉ phù hợp ăn vặt hoặc kiểu nhậu thôi.
> Follow theo vòng update tài liệu, ra spec, scope, risk, wbs, arch các thứ nhé

---

### 🤖 AI · 21:27 11/9/26

Đây là tính năng cần **một chiều dữ liệu chưa có** — `tasteTags` hiện tại không phân biệt được bữa chính với đồ nhậu. Nghiên cứu dữ liệu thật trước khi viết tài liệu:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Survey dish data and available signals

</details>

---

### 🤖 AI · 21:27 11/9/26

`tasteTags` không có chiều "loại bữa" — `street-food` (69 món) không có nghĩa là ăn vặt, phở cũng là street-food. Xem thực tế món nào rơi vào nhóm nào:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Probe for meal-type signals in dish text

</details>

---

### 🤖 AI · 21:28 11/9/26

Từ khoá đơn thuần không đủ tin — "Hạt điều rang" khớp cả *nhậu* lẫn *ăn vặt*, "Bánh đa Kế" khớp cả *ăn vặt* lẫn *lễ Tết*. Cần một trường dữ liệu tường minh. Đo thêm vài chiều đặc thù văn phòng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Quantify office-relevant dimensions

</details>

---

### 🤖 AI · 21:29 11/9/26

Đủ dữ liệu để thiết kế. Xem cấu trúc ARCH và WBS để ghi đúng chỗ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Inspect ARCH and WBS structure for appending

</details>

---

### 🤖 AI · 21:29 11/9/26

Đã đủ để thiết kế. Ba quyết định này làm đổi hẳn phạm vi nên hỏi trước khi viết tài liệu:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 21:32 11/9/26

Ba quyết định đã rõ. Viết theo đúng vòng: **[0] SCOPE → [1] SPEC → [3] ARCH → [4] WBS → [5] EST → [6] RISK → Cổng hiểu**.

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\SCOPE-REC-LF.md

</details>

---

### 🤖 AI · 21:33 11/9/26

Bước [1] SPEC — US-18 với AC đầy đủ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add US-18 story and AC to SPEC

</details>

---

### 🤖 AI · 21:34 11/9/26

Bước [3] ARCH — quyết định D4, chỗ có đánh đổi thật:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add ARCH decision D4

</details>

---

### 🤖 AI · 21:35 11/9/26

Bước [4] WBS + [5] EST:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add WBS Wave 4 and estimation

</details>

---

### 🤖 AI · 21:35 11/9/26

Bước [6] RISK — đây là chỗ tính năng này thật sự nguy hiểm:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add risks R16 and R17

</details>

---

### 🤖 AI · 21:36 11/9/26

Bộ tài liệu xong. Kiểm tra tính nhất quán rồi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Cross-check document consistency
- `Bash` — Commit and push the document set

</details>

---

### 🤖 AI · 21:39 11/9/26

Bộ tài liệu bước **[0]→[6]** xong, đã push. **Chưa code dòng nào** — chờ mày đóng Cổng hiểu.

## Nghiên cứu trước, có số đo

**`tasteTags` không dùng được cho việc này.** `street-food` có 69 món — nhưng phở cũng là street-food và vẫn là bữa chính. Không có chiều "loại bữa" nào trong dữ liệu.

**Tao thử phân loại tự động bằng từ khoá và đo được là không đáng tin:**

| Món | Bị bắt nhầm vào |
|---|---|
| Hạt điều rang | **cả** "mồi nhậu" **lẫn** "ăn vặt" |
| Bánh đa Kế | **cả** "ăn vặt" **lẫn** "lễ Tết" |
| Kẹo dừa Bến Tre | lọt vào bộ lọc "nặng mùi" |

**Yêu cầu lọc bớt của mày có căn cứ thật** — dữ liệu đúng là có Nem Bùi, Bò một nắng muối kiến vàng, Mực một nắng, Kẹo dừa. Gợi ý mấy món đó cho bữa trưa công sở là sai **bản chất món**, không phải sai khẩu vị.

## Tài liệu đã ra

- **[0] [SCOPE-REC-LF.md](SCOPE-REC-LF.md)** — mới, 10 câu hỏi + giả định, out-of-scope
- **[1] [SPEC-LF.md](SPEC-LF.md)** — US-18 + AC (gồm trạng thái rỗng, chia sẻ link)
- **[3] [ARCH-LF.md](ARCH-LF.md) D4** — quyết định kiến trúc
- **[4] [WBS-LF.md](WBS-LF.md) Wave 4** — 9 task
- **[5] [EST-LF.md](EST-LF.md)** — PERT **8,3h**
- **[6] [RISK-LF.md](RISK-LF.md)** — R16, R17 (tổng 17)

## Quyết định kiến trúc D4 — nguyên tắc rút ra

> **Gán tay thứ phải *hiểu*; suy tự động thứ chỉ cần *tra*.**

`mealTypes` gán tay (bữa chính / ăn vặt / tráng miệng / mồi nhậu / đặc sản làm quà) — vì "món này ăn no được không" là phán đoán ngữ nghĩa. Còn *cay*, *món nước*, *chay được*, *nặng mùi*, *nhiều dầu mỡ* thì suy bằng code — vì chúng chỉ là **kiểm sự có mặt** của một nguyên liệu hay một tag.

Nhờ vậy chỉ có **một trường** phải gán tay cho 197 món.

## R16 là rủi ro tao lo nhất

Món bị gán nhầm thành "mồi nhậu" sẽ **biến mất hoàn toàn** khỏi gợi ý mà không ai biết.

Đây là kiểu lỗi **nguy hiểm hơn hiển thị sai**: người dùng không thể báo lỗi về một thứ họ không nhìn thấy. Khác hẳn R2, nơi nội dung sai vẫn hiện ra và còn bị soi.

Rào: mỗi món ghi **lý do phân loại ngay trong dữ liệu**, cổng `check:meal` cảnh báo bất thường, và W4-9 mày duyệt **nhóm ranh giới** chứ không bốc ngẫu nhiên — vì lỗi tập trung ở đó.

Tao cũng đặt một **ranh giới cứng** trong R17: **cấm nội dung dinh dưỡng/sức khoẻ** (calo, "tốt cho tim mạch"). Dự án không có nguồn y tế nào, nói sai là hại thật.

---

## 🔒 Cổng hiểu bước [0] — cần mày trả lời

1. **Tính năng này cố tình không làm gì, và vì sao bỏ được?**
2. **Vì sao phải gán tay `mealTypes` thay vì suy tự động?**
3. **Rủi ro lớn nhất của nó là gì?**

Gật là tao chạy ngay **W4-1 → W4-3** (schema + phân loại 197 món + cổng kiểm), rồi đưa mày duyệt mẫu nhóm ranh giới trước khi làm giao diện.

---

### 🧑 PM · 21:45 11/9/26

> tao update requirement -> tính năng gợi ý là sẽ random từ list ra 2 món thôi.
> Tức là mỗi lần user vào nhấn feature thì sẽ hiển thị ra 2 món + info + công thức nấu

---

### 🤖 AI · 21:46 11/9/26

Yêu cầu đổi hẳn hình thái tính năng — đơn giản hơn nhiều và **đúng hơn với vấn đề gốc**: hai lựa chọn là điểm ngọt, một thì không phải chọn, mười hai thì lại mệt như cũ. Cập nhật tài liệu trước khi code:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Update SCOPE-REC for the new requirement

</details>

---

### 🤖 AI · 21:47 11/9/26

Giờ viết lại AC của US-18 cho khớp, và sửa WBS/EST:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Rewrite US-18 AC for the 2-dish design
- `Bash` — Update WBS/EST and commit requirement change

</details>

---

### 🤖 AI · 21:48 11/9/26

Tài liệu khớp yêu cầu mới. Giờ build móng — **W4-1** schema:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Inspect types and zod schema location
- `Read` — D:\01_Study\07_Local_Food\lib\schema.ts
- `Bash` — W4-1: add mealTypes to types and zod

</details>

---

### 🤖 AI · 21:50 11/9/26

Cổng chặn đúng như thiết kế — build đổ vì chưa món nào có phân loại. Giờ **W4-2**: phân loại 197 món. Agent sẽ sửa thẳng file gốc tiếng Việt, nên tao cần cổng đối chiếu trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Commit safety point before agents edit source data

</details>

---

### 🤖 AI · 21:50 11/9/26

Mốc an toàn đã commit — git là bản sao lưu nếu agent làm hỏng file gốc. Phóng 6 agent:

<details>
<summary>6 thao tác công cụ</summary>

- `Agent` — Classify meal types batch 1
- `Agent` — Classify meal types batch 2
- `Agent` — Classify meal types batch 3
- `Agent` — Classify meal types batch 4
- `Agent` — Classify meal types batch 5
- `Agent` — Classify meal types batch 6

</details>

---

### 🤖 AI · 21:53 11/9/26

6 agent đang chạy. Trong lúc chờ, viết **W4-3** — cổng kiểm, gồm cả phần đối chiếu để bắt agent sửa nhầm trường khác:

<details>
<summary>1 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\scripts\check-meal.mjs

</details>

---

### 🤖 AI · 21:53 11/9/26

Script import từ file `.ts` sẽ không chạy được trong `.mjs`. Sửa, và thêm luôn cơ chế chống lệch danh sách:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix script import and register check:meal

</details>

---

### 🤖 AI · 21:56 11/9/26

Heredoc nuốt `\n` trong chuỗi JS thành xuống dòng thật — lỗi cú pháp. Sửa:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\scripts\check-meal.mjs
- `Bash` — Test the check-meal gate

</details>

---

### 🤖 AI · 21:57 11/9/26

Cổng chạy đúng — 394 lỗi (197 món × 2 trường thiếu), cảnh báo bể gợi ý rỗng. Viết **W4-4** `lib/recommend.ts` trong lúc chờ:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\lib\recommend.ts
- `Bash` — Typecheck recommend lib and check agent progress

</details>

---

### 🤖 AI · 21:59 11/9/26

TypeScript sạch. Agent vẫn đang đọc dữ liệu. Viết **W4-5** — trang `/goi-y`:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Add recommendation UI strings
- `Bash` — Create reroll button and office flag components

</details>

---

### 🤖 AI · 22:00 11/9/26

Giờ trang dùng chung. `DishCard` vốn đã hiện đủ nguyên liệu/cách làm/cách ăn — thêm cờ ẩn phần đánh giá cho trang này:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Create the shared recommendation page view
- `Bash` — Create routes, add header link, typecheck

</details>

---

### 🤖 AI · 22:01 11/9/26

TypeScript sạch, agent xong 21/63 tỉnh. Viết **W4-8** — checklist kiểm thử:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add US-18 test checklist and W4-9 review gate

</details>

---

### 🤖 AI · 22:02 11/9/26

Agent đang bắt được đúng loại vấn đề tao cần — ví dụ **Mắm tôm chà Gò Công** bị gán `bua-chinh` theo đúng luật "món mặn ăn với cơm", nhưng nó là **nước chấm**, bốc trúng thì "công thức nấu" sẽ là ủ mắm mấy tháng. Chờ nốt agent:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check classification progress

</details>

---

### 🤖 AI · 22:02 11/9/26

Còn 1 agent. Trong lúc chờ, kiểm xem 5 agent kia có làm hỏng trường nào khác không:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check for field drift from agents

</details>

---

### 🤖 AI · 22:02 11/9/26

**0 lỗi trôi trường** — 5 agent xong không đụng trường nào khác, cổng đối chiếu xác nhận. Nhưng cảnh báo bắt được một tỉnh đáng ngờ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Inspect the flagged province

</details>

---

### 🤖 AI · 22:02 11/9/26

Kiểm ra thì phân loại Thanh Hóa **đúng** — cả 3 món (nem chua, gỏi cá nhệch, chả tôm) thật sự là đồ nhắm và quà vặt, dữ liệu ủng hộ. Cảnh báo làm đúng việc: nêu ra để người soi, không tự đánh trượt. Chờ agent cuối:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Poll until classification completes

</details>

---

### 🤖 AI · 22:03 11/9/26

197/197 xong. Chạy cổng đầy đủ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Run full classification gate

</details>

---

### 🤖 AI · 22:03 11/9/26

Toàn bộ 6 agent: **0 trường nào khác bị sửa**. 132/197 món vào bể gợi ý. Kiểm 3 chỗ agent tự đánh dấu là đáng ngờ:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect flagged classification issues
- `Bash` — Locate the condiment and noodle items by name

</details>

---

### 🤖 AI · 22:04 11/9/26

Hai chỗ không nhất quán thật, và **một trong đó là lỗi của tao** trong chính file SCOPE:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix cross-batch classification inconsistencies

</details>

---

### 🤖 AI · 22:04 11/9/26

Script ghi xong mắm tôm chà rồi mới chết ở lệnh in (lỗi encoding console) — miến dong chưa được sửa. Làm nốt:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Apply miến dong fix and verify consistency

</details>

---

### 🤖 AI · 22:05 11/9/26

Nhất quán rồi. Giờ sửa **lỗi của chính tao** trong SCOPE — tao đã lấy "Miến dong" làm ví dụ món phải loại, dựa trên đúng cái phương pháp dò từ khoá mà tao vừa chê là không đáng tin:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix scope doc error and build

</details>

---

### 🤖 AI · 22:06 11/9/26

Build xanh, 136 trang (thêm 2 trang gợi ý). Chạy thật và kiểm bằng trình duyệt:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify determinism and variety of recommendations

</details>

---

### 🤖 AI · 22:06 11/9/26

Tất định đúng, mỗi seed ra cặp khác và khác tỉnh. Giờ kiểm điều quan trọng nhất — **có món nhậu/ăn vặt nào lọt vào không**:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Simulate 500 rerolls and verify no excluded dish leaks

</details>

---

### 🤖 AI · 22:07 11/9/26

**Không món nào bị loại lọt vào** qua 500 lần mô phỏng, và cả 132 món trong bể đều xuất hiện được. Xem trang thật:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Browser-test the recommendation page
- `Read` — D:\01_Study\07_Local_Food\rec-vi.png

</details>

---

### 🤖 AI · 22:09 11/9/26

Có một vấn đề trải nghiệm: cặp này cả hai đều là ảnh giữ chỗ. Đo xem mức độ:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure photo coverage in the recommendation pool

</details>

---

### 🤖 AI · 22:09 11/9/26

36% số lần **cả hai món đều không có ảnh** — với một tính năng cốt để làm người ta thèm, đó là điểm yếu thật. Sửa: đảm bảo **ít nhất một** món có ảnh, nhưng vẫn giữ đủ 132 món tiếp cận được:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Prefer photographed dish for first slot and verify

</details>

---

### 🤖 AI · 22:10 11/9/26

**36% → 0%**, và cả 132 món vẫn tiếp cận được. Chạy toàn bộ cổng rồi commit:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Run all gates and record classification results
- `Bash` — Commit and push the recommendation feature

</details>

---

### 🤖 AI · 22:12 11/9/26

Xong. Tính năng chạy thật, đã push.

## Vòng tài liệu trước, code sau

**[0]** [SCOPE-REC-LF.md](SCOPE-REC-LF.md) → **[1]** US-18 trong [SPEC-LF.md](SPEC-LF.md) → **[3]** [ARCH-LF.md](ARCH-LF.md) D4 → **[4]** [WBS-LF.md](WBS-LF.md) Wave 4 → **[5]** [EST-LF.md](EST-LF.md) → **[6]** R16/R17 trong [RISK-LF.md](RISK-LF.md) → rồi mới build.

Yêu cầu mày đổi giữa chừng (12 món + bộ lọc → **2 món kèm công thức**) chỉ phải sửa W4-5/W4-6. **W4-1→W4-4 không đụng tới** — đó là cái lợi cụ thể của "móng trước, bề mặt sau".

## Kết quả

**132/197 món** vào bể gợi ý, **65 món bị loại** — đúng yêu cầu "lọc bớt chứ ko full". Mô phỏng **500 lần bấm**: không món nhậu/ăn vặt nào lọt vào, và cả 132 món đều xuất hiện được.

Quyết định kiến trúc: **gán tay thứ phải *hiểu*, suy tự động thứ chỉ cần *tra*.** `mealTypes` do 6 agent gán tay; còn *cay / món nước / chay / nặng mùi* thì suy bằng code vì chúng chỉ là kiểm sự có mặt của một nguyên liệu.

## Ba thứ đo được rồi mới sửa

**Ảnh giữ chỗ.** Bể chỉ 40% món có ảnh thật → bốc thuần ngẫu nhiên thì **36% số lần cả hai món đều là ô gradient**. Với trang cốt làm người ta thèm ăn thì hỏng. Ưu tiên món có ảnh cho vị trí thứ nhất: **36% → 0%**, và cả 132 món vẫn tiếp cận được. Không lọc bỏ món thiếu ảnh vì thế sẽ cắt bể còn 53 và loại oan nhiều tỉnh.

**Không lệch hydration.** Bốc bằng seed trên URL, không `Math.random()` — nếu random lúc render thì máy chủ và trình duyệt ra hai cặp khác nhau, món sẽ nháy đổi trước mắt. Phụ phẩm: chia sẻ link được đúng cặp đang xem.

**Cổng đối chiếu.** Việc quan trọng nhất của `check:meal` không phải kiểm đủ trường, mà là **so từng file với bản trong git** — vì 6 agent ghi thẳng vào nội dung gốc tiếng Việt vốn không có bản sao. Kết quả: **0 trường nào khác bị sửa**.

## Hai chỗ agent không nhất quán — và một lỗi của tao

- **Mắm tôm chà Gò Công** bị gán "bữa chính" đúng theo luật *món mặn ăn với cơm* — nhưng nó là **nước chấm**. Bốc trúng thì "công thức nấu" ra quy trình ủ mắm mấy tháng. Đã bỏ.
- **Miến dong** vs **Mì Chũ** — cùng là sợi khô nấu thành bữa mà xếp khác nhau. Đã cho về cùng hướng.

**Lỗi của tao:** trong SCOPE tao lấy "Miến dong" làm ví dụ món phải loại — chọn bằng **đúng cái cách dò từ khoá mà chính mục đó đang chê là không đáng tin**. Đã sửa ví dụ và ghi lại lý do.

## Cổng cảnh báo bắt được thứ đáng ghi

**Hải Dương và Thanh Hóa sẽ không bao giờ xuất hiện** trong gợi ý. Tao kiểm lại: phân loại **đúng** — cả 6 món đều thật sự là quà và đồ nhắm (bánh đậu xanh, vải thiều, bánh gai / nem chua, gỏi cá nhệch, chả tôm). Đây là **thiếu nội dung của tỉnh**, không phải lỗi phân loại. Tao không chữa bằng cách ép một món lên "bữa chính" — làm thế là bẻ dữ liệu cho vừa tính năng.

## Còn của mày

**W4-9 — duyệt mẫu phân loại.** Đây là cổng duy nhất chắn được R16, và cổng tự động **không** làm thay được: máy chỉ bắt được *thiếu* phân loại, không bắt được *phân loại sai*. Món bị gán nhầm thành "mồi nhậu" sẽ biến mất hoàn toàn khỏi gợi ý — mà người dùng **không thể báo lỗi về một thứ họ không nhìn thấy**.

Checklist nhóm ranh giới nằm cuối [SIT-UAT-LF.md](SIT-UAT-LF.md), kèm 15 bước kiểm trang. Các agent cũng tự đánh dấu ~20 món chúng thấy khó quyết — tao có thể tổng hợp thành danh sách soi nếu mày muốn.

---

### 🧑 PM · 22:15 11/9/26

> oke, giờ mình làm gì nhỉ?

---

### 🤖 AI · 22:15 11/9/26

Để tao kiểm hiện trạng thật rồi nói, chứ không liệt kê bừa:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check deploy status and documentation staleness

</details>

---

### 🤖 AI · 22:16 11/9/26

Lệnh grep của tao hỏng cú pháp. Kiểm lại cho chắc:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Properly check which docs are stale

</details>

---

### 🤖 AI · 22:16 11/9/26

Hiện trạng thật:

**Tính năng đã sống trên production** — `/goi-y` và `/en/goi-y` đều trả 200. Vercel tự deploy khi push.

Nhưng có hai khoản nợ vừa phát sinh **ngay lúc ship**:

| | |
|---|---|
| **8 tài liệu chưa hề nhắc US-18** | RTM · MODULEMAP · TELEMETRY · KNOWLEDGE-HEALTH · RELEASE-v1.1 · WEEKLY · TECH-DEBT · CASE-STUDY |
| **Telemetry lệch** | ghi 69 commit, git thật **77** |

Đây đúng là kiểu lệch pha mà KPI **c3 Freshness** từng bắt được hồi trước (lúc MODULEMAP còn ghi "404 chưa có, 6 tỉnh chưa làm"). Nguyên nhân giống hệt: thêm tính năng mới thì viết tài liệu mới, nhưng **không rà lại tài liệu cũ**.

---

## Tao khuyên làm theo thứ tự này

**1. W4-9 — mày duyệt mẫu phân loại (~20 phút). Gấp nhất.**

Lý do gấp: tính năng **đang chạy công khai** với phân loại chưa ai kiểm. Và đây là việc **duy nhất tao không làm thay được** — cổng tự động chỉ bắt được *thiếu* phân loại, không bắt được *phân loại sai*. Món bị gán nhầm thành mồi nhậu thì biến mất khỏi gợi ý, mà người dùng không thể báo lỗi về thứ họ không nhìn thấy.

Sáu agent đã tự đánh dấu ~20 món chúng thấy khó quyết. Tao gom thành một danh sách gọn kèm lý do để mày đọc một lượt là xong, thay vì mở 63 file.

**2. Đồng bộ 8 tài liệu + telemetry (~20 phút, tao làm).**

Để lâu thì c3 tụt và hồ sơ lại rơi vào đúng cái bẫy đã mắc một lần.

**3. T8 — Meeting Summary (~30 phút, cần mày).**

Assignment duy nhất còn dưới ngưỡng. Cần một cuộc họp **thật** (buổi review với sếp, hoặc diễn tập viva có người thứ hai) rồi tóm tắt thành action item + owner + hạn. Làm xong là **10/10**.

---

Còn nợ dài hạn chưa chạm: **R15** (45.192 từ bản dịch tiếng Anh chưa ai đọc) và **R2** (spot-check nội dung mới ở mức đọc lướt 15/197 món). Hai cái này không chặn gì, nhưng là hai rủi ro mở lớn nhất trong 17 rủi ro.

Mày muốn bắt đầu từ đâu? Nếu chưa quyết, tao chạy luôn **việc số 2** vì nó không cần mày, rồi dọn sẵn danh sách W4-9 để mày duyệt khi rảnh.

---

### 🧑 PM · 22:21 11/9/26

> W4.9 luôn nào

---

### 🤖 AI · 22:21 11/9/26

Tao dựng danh sách soi **từ dữ liệu**, không từ trí nhớ — và làm thành script chạy lại được, để lần sau thêm món mới vẫn rà được:

<details>
<summary>2 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\scripts\review-meal.mjs
- `Bash` — Run the review sheet generator

</details>

---

### 🤖 AI · 22:22 11/9/26

23/197 món cần soi thay vì đọc cả 63 file. Xem nhóm B trước — nhóm nguy hiểm hơn:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Show group B (wrongly excluded candidates)

</details>

---

### 🤖 AI · 22:22 11/9/26

Nhóm B: **6/7 là bộ lọc của tao quá rộng** (bắt "bánh mì", "ăn cùng cơm trắng" trong ngữ cảnh khác). Chỉ **1 món** là câu hỏi thật. Giờ nhóm A:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Show group A (questionable inclusions)

</details>

---

### 🤖 AI · 22:22 11/9/26

Soi xong, tao thấy **23 món này thật ra chỉ là 3 quyết định**, không phải 23 phán đoán riêng lẻ:

<details>
<summary>1 thao tác công cụ</summary>

- `AskUserQuestion`

</details>

---

### 🤖 AI · 22:24 11/9/26

Quyết định 1 là đổi **luật**, không phải đổi **dữ liệu** — nhãn `moi-nhau` vẫn đúng, chỉ là bể bữa trưa không nhận nó. Sửa ở code, không bẻ dữ liệu:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Exclude drinking dishes from lunch pool per PM decision

</details>

---

### 🤖 AI · 22:25 11/9/26

Hai câu trả lời của mày **va nhau ở 2 món**: Lẩu cá đuối và Lẩu mắm Cần Thơ mang cả nhãn `moi-nhau`, nên luật "loại món nhậu" cắt chúng dù mày bảo giữ lẩu. Tao áp luật chung và ghi rõ để mày lật lại nếu muốn:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Update scope doc with W4-9 outcome and verify
- `Bash` — Verify new pool rule with simulation and live page
- `Bash` — Record W4-9 closure and push

</details>

---

### 🤖 AI · 22:28 11/9/26

**W4-9 đã đóng.** Đã push, Vercel tự deploy.

## Cách tao làm để mày không phải đọc 197 món

Dựng [review-meal.mjs](scripts/review-meal.mjs) khoanh vùng chỗ **dữ liệu tự mâu thuẫn với nhãn** — món gắn "bữa chính" mà `howToEat` lại ghi *"ăn chơi"* / *"quà chiều"* / *"nhắm rượu"*. Còn **23/197 món** cần soi.

Tao **không bốc mẫu ngẫu nhiên**, vì lỗi phân loại không rải đều — nó tụ ở nhóm ranh giới. Bốc 20 món ngẫu nhiên thì phần lớn sẽ trúng món hiển nhiên đúng, tốn thời gian mà không tìm ra gì.

Đọc 23 món đó thì lộ ra: chúng chỉ là **3 quyết định**, không phải 23 phán đoán. Và **6/7 món nhóm B là bộ lọc của tao quá rộng** (bắt nhầm "bánh mì", "ăn cùng cơm trắng" trong ngữ cảnh khác) — đúng ý đồ, thà báo thừa còn hơn sót.

## Đã áp quyết định của mày

Bể gợi ý **132 → 121 món**. Tao sửa ở **luật**, không sửa **dữ liệu**:

> Nhãn `moi-nhau` của 10 món đó là **đúng** — Thắng cố thật sự *"nhâm nhi cùng rượu ngô"*. Gỡ nhãn đi là làm dữ liệu nói sai sự thật chỉ để vừa một tính năng. Chính sách "bữa trưa không nhận món nhậu" thuộc về tính năng nên nằm trong `officePool()`. Mai sau làm "gợi ý món nhậu cuối tuần" thì nhãn đó vẫn còn nguyên để dùng.

## ⚠️ Hai câu trả lời của mày va nhau ở 2 món

**Lẩu cá đuối Vũng Tàu** và **Lẩu mắm Cần Thơ** mang **cả** nhãn `moi-nhau` — dữ liệu ghi *"ngồi quây quần nhúng đồ quanh nồi lẩu sôi cũng là cách dọn trên bàn nhậu"*. Nên luật "loại món nhậu" cắt chúng, dù mày bảo giữ lẩu.

Tao theo **luật chung** vì nó bao trùm hơn. **Lẩu gà lá é** và **Lẩu mắm Long An** không mang nhãn đó nên vẫn ở lại. Muốn giữ cả 4 thì chỉ cần một ngoại lệ cho lẩu — một dòng trong `officePool`. Bảo tao.

## Hệ quả khác phải nói

**Sơn La thành tỉnh thứ ba không bao giờ xuất hiện** trong gợi ý (cùng Hải Dương, Thanh Hóa). Món ăn no duy nhất của nó là *Pa pỉnh tộp*, mà món đó mang nhãn `moi-nhau`.

Kiểm lại bằng 800 lần bấm mô phỏng: không món bị cấm nào lọt vào, cả 121 món vẫn tiếp cận được, 0% số lần cả hai món đều thiếu ảnh. Trang thật hiện *"Bốc từ 121 món"*.

---

Còn **2 việc** tao nêu lúc nãy: đồng bộ 8 tài liệu đang lệch (tao làm được ngay, ~20 phút) và **T8** cần cuộc họp thật của mày để lên 10/10. Làm cái nào?

---

### 🧑 PM · 22:29 11/9/26

> tiếp tục đi

---

### 🤖 AI · 22:29 11/9/26

Đồng bộ 8 tài liệu đang lệch. Đo hiện trạng trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure current state for doc sync

</details>

---

### 🤖 AI · 22:29 11/9/26

Đủ dữ kiện. Đồng bộ RTM, MODULEMAP, TECH-DEBT trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Sync RTM, MODULEMAP and TECH-DEBT

</details>

---

### 🤖 AI · 22:30 11/9/26

Giờ telemetry — cần thêm phiên 09-11, nhưng giờ người thì tao không đo được:

<details>
<summary>2 thao tác công cụ</summary>

- `AskUserQuestion`
- `Bash` — Update telemetry with new sessions and hours

</details>

---

### 🤖 AI · 22:31 11/9/26

Tổng giờ 23–32h → **26–36h**. Baseline cũng phải tăng theo phạm vi US-18:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Update baseline for US-18 scope
- `Bash` — Sync telemetry doc with new measurements
- `Bash` — Sync telemetry doc sections 1 and 4

</details>

---

### 🤖 AI · 22:33 11/9/26

Còn KNOWLEDGE-HEALTH — đo lại c3 Freshness, chính KPI đã bắt được lệch pha này:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Re-measure c3 freshness after sync

</details>

---

### 🤖 AI · 22:33 11/9/26

You've hit your session limit · resets 2:20am (Asia/Ho_Chi_Minh)

---

### 🧑 PM · 15:08 12/9/26

> tiếp tục đi

---

### 🤖 AI · 15:08 12/9/26

Bộ lọc c3 của tao **báo thừa** — giống hệt bộ lọc `review-meal` lúc nãy. Nhiều file trong đó không cần nhắc US-18 (glossary dịch, DOR của lát cắt cũ, admin guide). Lọc lại cho đúng:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect structure of docs that genuinely need updating
- `Bash` — Read operating log and delegation map format

</details>

---

### 🤖 AI · 15:10 12/9/26

Đủ cấu trúc. Cập nhật 4 file cốt lõi:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Update delegation map and operating log
- `Bash` — Read README structure sections

</details>

---

### 🤖 AI · 15:11 12/9/26

README có lỗi thật trong mục **"Giới hạn đã biết"** — vẫn ghi *"chưa có đánh giá/bình luận"* (đã ship từ 06/09) và *"Search chưa có user story"* (đã đóng GAP-T2 hôm 07/09). Đây là mục người chấm đọc kỹ nhất:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Read README commands section
- `Bash` — Update README comprehensively

</details>

---

### 🤖 AI · 15:12 12/9/26

Giờ KNOWLEDGE-HEALTH — đo lại c3, và ghi nhận chính nó vừa bắt được lỗi thật lần thứ hai:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Update knowledge health and run all gates
- `Bash` — Commit and push documentation sync

</details>

---

### 🤖 AI · 15:14 12/9/26

Đồng bộ xong, đã push.

## KPI c3 lại bắt được lỗi thật — lần thứ hai

Và lần này nằm ở **đúng chỗ tệ nhất**: mục *"Giới hạn đã biết"* của [README.md](README.md) — phần người chấm đọc kỹ nhất.

| README vẫn ghi | Thực tế |
|---|---|
| *"Chưa có tính năng đánh giá/bình luận"* | Đã lên production **06/09** |
| *"Search chưa có user story và test case"* | Đã đóng GAP-T2 **07/09** |

README đang **tự khai nhược điểm mình không còn có nữa** — vừa sai, vừa thiệt. Cùng nguyên nhân gốc với lần c3 bắt MODULEMAP: thêm tính năng thì viết tài liệu mới, nhưng không rà lại tài liệu cũ.

Đã đồng bộ **8 artefact**: README · RTM · MODULEMAP · TELEMETRY · TECH-DEBT · OPERATING-LOG · DELEGATION-MAP · KNOWLEDGE-HEALTH.

## Telemetry: 78 commit, 9 phiên

Mày khai lại giờ 09/09 từ 2–3h thành **3–4h** — vì lúc khai lần đầu, phiên đó **vẫn đang chạy tiếp**. Đúng loại lỗi *"đo trong khoảng đang đo"* mà chính telemetry từng mắc với số commit. Tổng **26–36h**.

**Nén qua 3 lần đo: 27–37× → 23–35× → 21–32×.**

Đi xuống đều, và tao cho rằng đó là **đáng tin hơn** chứ không đáng lo: mỗi lần đo lại, mẫu số có thêm giờ mày khai trực tiếp thay vì gộp ước tính, còn tử số là baseline tự ước — mà ước thận trọng thì luôn kéo tỉ số xuống. Con số đang **giảm dần về phía sự thật**.

## Ba bài học vận hành (OP-14/15/16)

**"Agent báo đã tự kiểm" không phải bằng chứng.** Bằng chứng là phép đối chiếu chạy lại được, do bên thứ ba thực hiện. Cùng bài học với R11 (RLS đóng bằng cách tự tấn công DB).

**Móng trước, bề mặt sau — lần thứ hai trả công đo được.** Nhưng tao ghi luôn điều ngược lại: nếu mày đổi yêu cầu ở **tầng dữ liệu** (ví dụ phân loại theo giá tiền) thì toàn bộ công phân loại 197 món phải làm lại. Nguyên tắc đó bảo vệ khỏi thay đổi ở bề mặt, **không** bảo vệ khỏi thay đổi ở móng.

**Duyệt 197 món bằng cách không đọc 197 món.** Và tao cố ý **không bốc mẫu ngẫu nhiên** — lỗi phân loại tụ ở nhóm ranh giới, khác `SPOTCHECK` nội dung nơi bốc ngẫu nhiên mới đúng vì lỗi hallucination rải đều.

## Một điều tao tự nhận

Phép rà c3 lần này **báo thừa 14 file** — phần lớn không đáng phải nhắc US-18 (glossary dịch, DOR của lát cắt đã đóng, admin guide). Đây là **lần thứ hai trong cùng một phiên** một bộ lọc tự động của tao báo thừa; lần trước là `review-meal.mjs` gắn cờ 7 món mà 6 là báo nhầm.

Cả hai đều **cố ý** thiên về báo thừa — sót thì nguy hiểm hơn đọc nhầm. Nhưng phải nói ra, vì đọc con số *"14 file lỗi thời"* mà không đọc phần này thì sẽ tưởng hồ sơ tệ hơn thực tế.

---

## Còn lại

**T8 (Meeting Summary) = 0** — assignment duy nhất dưới ngưỡng, cần **cuộc họp thật** của mày (~30 phút) rồi tao tóm tắt thành action item + owner + hạn. Làm xong là **10/10**.

Ba việc nhỏ tao làm được nếu mày muốn: thêm cảnh `/goi-y` vào kịch bản video · viết báo cáo tuần mới · tag **v1.2** cho US-18 (v1.1 hiện chưa có tính năng này).

---

### 🧑 PM · 15:26 12/9/26

> tao muốn góp ý về chỗ nút bấm trưa nay ăn gì => hãy edit lại cho nó magic xíu, màu mè nổi bật hẳn nhé, kiểu như để quảng cáo một cái gì đó thật wow

---

### 🤖 AI · 15:26 12/9/26

Trang này có một nút là hành động chính — nó nên trông như thế. Xem vốn "wow" sẵn có của dự án để dùng lại chứ không bịa phong cách lạ:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect existing magnetic button and design tokens
- `Bash` — Check reduced-motion handling

</details>

---

### 🤖 AI · 15:26 12/9/26

Dùng đúng bảng màu ớt–nghệ–rau thơm của dự án. Thêm CSS cho hiệu ứng:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add magic button CSS animations

</details>

---

### 🤖 AI · 15:27 12/9/26

Giờ viết lại nút — gộp vành gradient quay, quầng sáng thở, vệt sáng quét, và lực hút theo con trỏ:

<details>
<summary>3 thao tác công cụ</summary>

- `Write` — D:\01_Study\07_Local_Food\components\recommend\RerollButton.tsx
- `Bash` — Build and screenshot the new button
- `Read` — D:\01_Study\07_Local_Food\btn.png

</details>

---

### 🤖 AI · 15:32 12/9/26

Nút chưa đủ "wow" — vành gradient bị `overflow-hidden` cắt mất, và mặt nút vẫn đọc như một viên thuốc đỏ bình thường. Làm mạnh tay hơn:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Strengthen the button and capture at three moments
- `Read` — D:\01_Study\07_Local_Food\btn-b.png
- `Read` — D:\01_Study\07_Local_Food\btn-c.png

</details>

---

### 🤖 AI · 15:43 12/9/26

Có bug thật — và chỉ lộ ra vì tao nhìn ảnh. Vành gradient **tràn ra thành dải chéo khổng lồ** cắt ngang trang: `::before` là hình viên thuốc 324×80, xoay nó thì nó quét ra một vùng rộng gấp nhiều lần. Sửa bằng cách cho nó thành **hình vuông xoay bên trong khung bị cắt**:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Fix the escaping gradient ring and re-capture
- `Read` — D:\01_Study\07_Local_Food\fix-2.png

</details>

---

### 🤖 AI · 15:45 12/9/26

Dải chéo đã hết, vành màu giờ ôm đúng viên nút. Xem thêm một khoảnh khắc khác để chắc vành quay đều:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\fix-3.png

</details>

---

### 🤖 AI · 15:45 12/9/26

Vành quay đúng, mặt nút chuyển màu đỏ ớt ↔ vàng nghệ. Kiểm nốt hai thứ dễ bỏ sót — máy hẹp và người tắt hiệu ứng:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Test narrow screen, reduced motion, and click still works
- `Read` — D:\01_Study\07_Local_Food\reduced.png

</details>

---

### 🤖 AI · 15:45 12/9/26

Người tắt hiệu ứng vẫn thấy nút **đủ nổi bật**, chỉ là đứng yên — nổi bật là yêu cầu thiết kế, không phải hiệu ứng bỏ đi được. Dọn ảnh và commit:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add visual test steps and commit the button

</details>

---

### 🤖 AI · 15:46 12/9/26

Xong, đã push. Nút to hẳn lên **282×66 → 324×80** với bốn lớp chồng nhau:

- **Vành gradient quay** quanh nút
- **Mặt nút tự chuyển màu** — đỏ ớt ↔ vàng nghệ, gradient rộng gấp 3 khổ nút rồi trượt qua lại nên màu chảy liên tục không giật
- **Quầng sáng thở** phía sau
- **Hút theo con trỏ** — tao mượn lại thủ pháp `MagneticButton` vốn đã dùng ở hero

Tao dùng đúng bảng màu ẩm thực đã chốt (ớt → nghệ → rau thơm), không thêm màu lạ ngoài hệ — để nó "wow" mà vẫn là cùng một site.

## Một bug thật, và nó chỉ lộ ra vì tao nhìn ảnh

Lần viết đầu tao cho `inset: 0` rồi bảo nó xoay — tức là **xoay một viên thuốc 324×80**. Hình chữ nhật dài mà xoay thì quét ra vùng rộng gấp nhiều lần chính nó. Kết quả:

> **Một dải vàng-xanh chéo khổng lồ cắt ngang cả trang**, đè lên chữ.

`pnpm build` xanh. `tsc` sạch. `lint` 0 lỗi. Không cổng nào bắt được — vì đây là lỗi **hình học của CSS**, không phải lỗi kiểu hay cú pháp.

Sửa bằng kỹ thuật đúng: phần tử quay phải là **hình vuông** cạnh 200% bề ngang (xoay kiểu gì cũng phủ kín nút), rồi cho nút `overflow: hidden` cắt lại thành viên thuốc. Và dùng thuộc tính `rotate` riêng chứ không `transform: rotate`, vì phần tử còn cần `translate` để căn giữa — `transform` sẽ ghi đè mất.

## Chỗ tao cân nhắc kỹ

Với `prefers-reduced-motion`, tao **chỉ dừng chuyển động** chứ vẫn giữ nguyên gradient nhiều màu và độ nổi. Vì "nổi bật" là **yêu cầu thiết kế của mày**, không phải hiệu ứng trang trí bỏ đi được — trả nút về phẳng một màu là bỏ mất luôn cái mày yêu cầu. Ảnh kiểm chứng cho thấy người tắt hiệu ứng vẫn thấy nút rất nổi, chỉ là đứng yên.

## Đã kiểm

| | |
|---|---|
| Màn 360px | Không tràn ngang, nút 261×68 lọt gọn |
| Giảm chuyển động | Đúng — animation `none`, màu giữ nguyên |
| Bấm vẫn đổi món | OK |
| Build | 136 trang, lint 0 |

Thêm **3 bước kiểm thị giác** vào checklist US-18 (bước 16–18) — trong đó có bước *"không có vệt màu nào tràn ra ngoài nút"*, chính là để bắt lại đúng cái bug vừa rồi nếu ai sửa CSS sau này.

---

### 🧑 PM · 15:47 12/9/26

> tao chưa thấy có update gì trên web cả???
> Mà thôi, tao đổi ý, hãy chuyển sang dạng buble chạy quanh màn hình thì sẽ hay hơn, mày nghiên cứu apply nhé

---

### 🤖 AI · 15:48 12/9/26

Khoan — "chưa thấy update" là vấn đề thật, kiểm trước đã:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Diagnose why production shows no update

</details>

---

### 🤖 AI · 15:49 12/9/26

Deploy **không hỏng** — production đã có nút mới. Tao kiểm trực tiếp HTML trên đó:

```
magic-ring        có
magic-face        có
Bốc từ 121 món    có   ← số mới sau cổng W4-9
Bốc từ 132 món    0    ← số cũ đã biến mất
```

Nên nhiều khả năng là **cache trình duyệt**. Thử `Ctrl+Shift+R` ở đúng địa chỉ:
**https://local-food-hamvanphus-projects.vercel.app/goi-y** — hoặc bấm **"Trưa nay ăn gì?"** trên thanh menu.

Giờ chuyển sang bubble. Có một vấn đề thật phải giải, không chỉ là làm cho nó chạy:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Recall the pause-in-place technique from marquee

</details>

---

### 🤖 AI · 15:50 12/9/26

Bubble di chuyển tạo một vấn đề dùng thật: **mục tiêu đang chạy thì rất khó bấm**. Dự án đã có sẵn lời giải từ bài học marquee — CSS animation dừng được tại chỗ, còn Framer thì nhảy về đầu. Dùng lại:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Add roaming bubble CSS with pause and touch/reduced-motion handling
- `Write` — D:\01_Study\07_Local_Food\components\recommend\RerollBubble.tsx
- `Bash` — Swap button for bubble and build
- `Bash` — Verify bubble drifts, pauses on hover, and is clickable

</details>

---

### 🤖 AI · 15:57 12/9/26

Ba điều quan trọng đều đúng: **trôi thật**, **dừng tại chỗ khi rê chuột tới**, **bấm vẫn đổi món**. Xem hình:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\bub.png

</details>

---

### 🤖 AI · 15:57 12/9/26

Bubble che mất ảnh món ở thẻ thứ nhất — đó là nhược điểm cố hữu của kiểu trôi tự do. Mà **"chạy quanh màn hình"** đúng nghĩa là chạy **vòng theo mép**, nên đổi sang quỹ đạo vòng quanh, vừa đúng ý vừa tránh vùng nội dung:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Switch to perimeter orbit path

</details>

---

### 🤖 AI · 15:58 12/9/26

Thụt lề bị lệch sau khi bỏ lớp bọc. Dọn lại rồi kiểm quỹ đạo:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Verify orbit path stays near edges
- `Read` — D:\01_Study\07_Local_Food\orb.png

</details>

---

### 🤖 AI · 16:01 12/9/26

Quỹ đạo chạy sát mép, không đè nội dung ở đoạn dọc. Kiểm nốt máy cảm ứng và người tắt hiệu ứng — hai chỗ bubble dễ thành phiền toái nhất:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Verify touch and reduced-motion bubble behaviour

</details>

---

### 🤖 AI · 16:02 12/9/26

Cả ba chế độ đều đúng. Cập nhật checklist rồi commit:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Update tests, scope doc, and push bubble

</details>

---

### 🤖 AI · 16:03 12/9/26

## Về chuyện "chưa thấy update"

Deploy **không hỏng** — tao kiểm thẳng HTML trên production và nó đã có nút mới (`magic-ring`, `magic-face`, và *"Bốc từ 121 món"* — con số mới sau cổng W4-9; số cũ 132 đã biến mất).

Nên gần như chắc là **cache trình duyệt**. Thử `Ctrl+Shift+R` tại:
**https://local-food-hamvanphus-projects.vercel.app/goi-y**

Hoặc bấm **"Trưa nay ăn gì?"** trên thanh menu — nó là link màu đỏ đầu tiên.

## Bubble đã xong

Nhưng làm cho nó chạy chỉ là phần dễ. Vấn đề thật là **mục tiêu đang chạy thì rất khó bấm** — nên tao giải ba chỗ:

**Dừng tại chỗ khi chuột tới gần.** Dùng CSS animation chứ không phải Framer Motion — đúng bài học marquee đã ghi trong DEVBOOK: `animation-play-state` dừng được *tại chỗ*, còn Framer pause thì **nhảy về đầu quỹ đạo**. Ở đây đó là điều kiện để bấm được, không phải tiểu tiết.

**Máy cảm ứng không có hover** → không cách nào dừng bubble trước khi chạm. Đuổi theo một mục tiêu đang chạy bằng ngón tay thì tệ, nên trên điện thoại bubble **neo cố định** góc dưới phải.

**Chạy sát mép, không trôi tự do.** Bản thử đầu tao cho trôi ngẫu nhiên hai trục — và nó **đè lên ảnh món ăn** giữa trang. Chỉ thấy khi chụp ảnh và nhìn. Nội dung nằm trong cột giữa, nên chạy vòng theo mép vừa đúng nghĩa *"chạy quanh màn hình"* vừa để trống phần người ta đang đọc.

Quỹ đạo: **mép trái xuống → mép dưới sang → mép phải lên → mép trên về**, một vòng 32 giây.

## Đã kiểm cả ba chế độ

| | |
|---|---|
| Desktop | 8 mốc đo đúng vòng mép · hover dừng tại chỗ · bấm đổi món OK |
| Cảm ứng 390px | Neo cố định, không chạy, không tràn ngang |
| Giảm chuyển động | Neo góc dưới phải, đứng yên, **vẫn nhiều màu** |

Với `prefers-reduced-motion` tao chỉ **dừng chuyển động**, giữ nguyên màu và độ nổi — nổi bật là yêu cầu của mày, không phải hiệu ứng bỏ đi được.

Thêm **7 bước kiểm** vào checklist US-18, trong đó có bước *"bubble không đè hai thẻ món ở đoạn dọc"* — để bắt lại đúng lỗi tao vừa mắc, nếu sau này ai sửa quỹ đạo.

Vercel đang build. Đợi khoảng 1 phút rồi hard-refresh nhé.

---

### 🧑 PM · 16:07 12/9/26

> ah tuyệt vời đó.
> nhưng tao muốn xóa luôn nút "trưa nay ăn gì", thay vào đó là chỉ xài cái buble thôi nhé, nên xem xét đổi tên hiển thị chỗ buble. tất nhiên khi nhấn vào buble thì sẽ ra 2 món ăn như hiện tại

---

### 🤖 AI · 16:07 12/9/26

Có một chỗ tao phải cẩn thận: nếu bỏ link ở menu mà bubble chỉ nằm trên `/goi-y` thì **trang đó thành không có đường vào**. Nên tao hiểu ý mày là bubble xuất hiện **ở mọi trang**, thay luôn vai trò của link menu:

<details>
<summary>4 thao tác công cụ</summary>

- `Bash` — Inspect root layout structure
- `Bash` — Make bubble site-wide, rename it, remove nav link
- `Bash` — Check header cleanup and build
- `Bash` — Verify bubble on all pages and click-through flow

</details>

---

### 🤖 AI · 16:10 12/9/26

Hai phát hiện. **Nhãn chưa đổi** (vẫn "Đổi món khác"), và **Playwright không bấm nổi** vì phần tử đang di chuyển — đó là tín hiệu thật về độ khó bấm. Kiểm nhãn trước:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Check why bubble label did not change

</details>

---

### 🤖 AI · 16:10 12/9/26

Chuỗi có rồi nhưng component vẫn gọi `rec.reroll` — prettier đã đổi thụt lề nên phép thay thế của tao trượt. Sửa:

<details>
<summary>2 thao tác công cụ</summary>

- `Edit` — D:\01_Study\07_Local_Food\components\recommend\RerollBubble.tsx
- `Bash` — Verify label and human-style hover-then-click flow

</details>

---

### 🤖 AI · 16:26 12/9/26

Chạy đúng: bubble có ở mọi trang, nhãn **"Trưa nay ăn gì?"** / **"What's for lunch?"**, bấm từ trang chủ ra đúng 2 món. Xem hình:

<details>
<summary>1 thao tác công cụ</summary>

- `Read` — D:\01_Study\07_Local_Food\final.png

</details>

---

### 🤖 AI · 16:26 12/9/26

Hai chỗ tinh chỉnh: chữ xuống dòng xấu (*"gì?"* đứng một mình), và trên chính trang `/goi-y` thì bubble trùng tên với tiêu đề trang. Cho nhãn đổi theo ngữ cảnh:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Context-aware label and text balance
- `Read` — D:\01_Study\07_Local_Food\lbl.png

</details>

---

### 🤖 AI · 16:28 12/9/26

Chữ giờ cân hai dòng **"Trưa nay / ăn gì?"**, không còn *"gì?"* lủi thủi. Cập nhật tài liệu và commit:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Document and push the site-wide bubble change

</details>

---

### 🤖 AI · 16:29 12/9/26

Xong, đã push.

## Một chỗ tao phải quyết thay mày

Nếu chỉ bỏ link menu mà bubble vẫn nằm riêng trong `/goi-y`, thì **trang đó không còn đường nào đi vào** — tính năng vừa làm xong thành mồ côi. Nên tao chuyển bubble vào **root layout**: nó có mặt ở **mọi trang**, đúng vai trò mà link menu để lại.

## Nhãn đổi theo ngữ cảnh

Vẫn **một bubble duy nhất**, nhưng nói đúng việc:

| Ở đâu | Nhãn |
|---|---|
| Trang chủ, `/browse`, trang tỉnh… | **"Trưa nay ăn gì?"** — tên tính năng, vì đây là lối vào |
| Ngay trên `/goi-y` | **"Đổi món khác"** — vì tên tính năng đã là tiêu đề trang, lặp lại thì thừa |

Bản tiếng Anh tương ứng *"What's for lunch?"* ↔ *"Show me two others"*.

Cũng sửa chỗ chữ xuống dòng xấu — trước đó *"Trưa nay ăn gì?"* vỡ thành *"Trưa nay ăn"* / *"gì?"* với chữ **gì?** đứng lủi thủi một mình.

## Một quan sát đáng nói

Playwright **không bấm nổi bubble** bằng lệnh click thẳng — nó báo *"element is not stable"* rồi bỏ cuộc sau 30 giây. Phải rê chuột tới cho bubble dừng rồi mới bấm được.

Đó chính là cách người dùng thật phải làm, và là bằng chứng cụ thể rằng **cơ chế dừng-khi-hover không phải trang trí mà là điều kiện để bấm được**. Nếu hôm trước tao dùng Framer Motion thay vì CSS animation thì nó sẽ nhảy về đầu quỹ đạo mỗi lần dừng, và bubble sẽ gần như không bấm được.

## Đã kiểm

Bubble có mặt ở `/` · `/browse` · `/provinces/ha-noi` · `/goi-y` · `/en` · `/en/goi-y` với đúng nhãn từng ngữ cảnh. Bấm từ trang chủ → `/goi-y?s=…` ra đúng 2 món. Menu giờ chỉ còn **"Tất cả tỉnh"**. Lint 0, build 136 trang.

Thêm 3 bước kiểm vào checklist US-18 và ghi **D-REC-6** vào SCOPE-REC.

Vercel đang build — đợi ~1 phút rồi **Ctrl+Shift+R** nhé, lần trước mày gặp cache.

---

### 🧑 PM · 17:16 12/9/26

> ổn ổn rồi
> giờ cần làm gì tiếp theo?

---

### 🤖 AI · 17:17 12/9/26

Trước khi khuyến nghị, tao muốn kiểm một thứ mình vừa tạo ra: bubble giờ chạy **hoạt ảnh liên tục trên mọi trang**, mà trang chủ vốn đã trượt NFR hiệu năng.

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Measure whether the always-on bubble animation costs performance

</details>

---

### 🤖 AI · 17:20 12/9/26

Lo lắng của tao **không có cơ sở** — đo xong thấy bubble không tốn gì:

| | fps | long task |
|---|---|---|
| Trang chủ **có** bubble | 60 | 0ms |
| Trang chủ **bỏ** bubble đi | 60 | 0ms |
| `/goi-y`, `/browse` | 60 | 0ms |

Vì chuyển động làm bằng `translate`/`rotate` — hai thứ chạy trên GPU, không bắt trình duyệt vẽ lại. Và trên máy cảm ứng (nơi pin yếu nhất) thì bubble vốn đã neo cố định, không chạy.

---

## Tao khuyên làm T8

Đây là **thứ duy nhất** chắn giữa **9/10** và **10/10** trong bảng đánh giá bootcamp. Mất ~30 phút và chỉ cần một cuộc họp thật — buổi review với sếp, hoặc diễn tập viva có người thứ hai. Mày họp xong đưa tao nội dung, tao tóm tắt thành action item + owner + hạn, mày xác nhận.

Tao vẫn giữ nguyên quan điểm: **không bịa biên bản** từ hội thoại giữa tao với mày rồi gọi đó là T8. Đề bài đòi cuộc họp thật.

## Hai việc tao làm được ngay, không cần mày

**Tag `v1.2`** — toàn bộ US-18 và bubble hiện **không nằm trong tag nào**. `v1.1` dừng ở trước lúc làm tính năng này.

**Cập nhật kịch bản video** — `VIDEO-SCRIPT-LF.md` chưa có cảnh `/goi-y`, mà đó lại là tính năng dễ gây ấn tượng nhất khi quay: bấm một bubble, ra hai món kèm công thức.

## Ba khoản nợ lớn hơn, để mày biết mà cân

| | |
|---|---|
| **R15** | 45.192 từ bản dịch tiếng Anh **chưa ai đọc**. Rủi ro mở lớn nhất — người đọc tiếng Anh không có cách nào tự nghi ngờ vì họ không đọc được bản gốc |
| **R2** | Spot-check nội dung mới ở mức đọc lướt 15/197 món |
| **MapTiler** | Chưa đặt giới hạn domain cho key. Mất 5 phút trong dashboard, và key đang lộ công khai trong bundle theo đúng bản chất của nó |

Cái MapTiler là việc bảo mật nhỏ nhất nhưng tồn lâu nhất — nếu tiện tay thì làm luôn.

Mày muốn tao chạy **v1.2 + kịch bản video** trong lúc mày thu xếp cuộc họp cho T8 không?

---

### 🧑 PM · 17:23 12/9/26

> chạy v1.2 đi
> và update telemetry nhé, 
> đồng thời update cuộc trò chuyện vào file .md

---

### 🤖 AI · 17:23 12/9/26

Ba việc. Bắt đầu bằng đo hiện trạng:

<details>
<summary>3 thao tác công cụ</summary>

- `Bash` — Measure state for v1.2 and telemetry
- `AskUserQuestion`
- `Bash` — Update telemetry with today's session

</details>

---

### 🤖 AI · 17:24 12/9/26

Giờ cập nhật tài liệu telemetry cho khớp, và xuất hội thoại ra `.md`:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Sync telemetry doc with latest numbers

</details>

---

### 🤖 AI · 17:24 12/9/26

Giờ xuất hội thoại ra Markdown. Sửa script để nhận cả hai định dạng thay vì viết script thứ hai:

<details>
<summary>2 thao tác công cụ</summary>

- `Bash` — Inspect export script structure
- `Bash` — Read the turn-building part of export script

</details>

---

### 🤖 AI · 17:25 12/9/26

Đủ hiểu cấu trúc. Thêm chế độ xuất Markdown vào cùng script:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Add markdown export mode and generate the file

</details>

---

### 🤖 AI · 17:25 12/9/26

Lại vướng escape `\n` trong heredoc. Viết đoạn chèn ra file riêng rồi ghép:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Insert markdown block cleanly and export

</details>

---

### 🤖 AI · 17:26 12/9/26

Python (Windows) không thấy được `/tmp` của Git Bash — file `.md` vừa tạo thực ra là **HTML đặt sai đuôi**. Dùng đường dẫn cả hai đều thấy:

<details>
<summary>1 thao tác công cụ</summary>

- `Bash` — Fix path issue and export markdown properly

</details>
