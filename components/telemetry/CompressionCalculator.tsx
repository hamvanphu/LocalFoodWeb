"use client";

import { useMemo, useState } from "react";
import { RotateCcw, Info } from "lucide-react";
import {
  compressionRatio,
  formatHours,
  type TelemetrySession,
} from "@/lib/telemetry";

interface Props {
  sessions: TelemetrySession[];
  groupedDefaultH: number;
  groupedNote: string;
  baselineDefaultH: number;
  gitLowerH: number;
  gitUpperH: number;
}

/**
 * Phần "vận hành được" của dashboard: PM chỉnh giờ thật và baseline ngay tại đây
 * để thấy Nén đổi thế nào — thay vì đọc một con số chết trong file markdown.
 * Chỉnh sửa chỉ nằm trong phiên trình duyệt, không ghi đè `data/telemetry.json`.
 */
export default function CompressionCalculator({
  sessions,
  groupedDefaultH,
  groupedNote,
  baselineDefaultH,
  gitLowerH,
  gitUpperH,
}: Props) {
  const named = sessions.filter((s) => !s.grouped);

  const [perSession, setPerSession] = useState<Record<string, number>>(() =>
    Object.fromEntries(named.map((s) => [s.date, s.pmEstimatedH ?? 0])),
  );
  const [grouped, setGrouped] = useState(groupedDefaultH);
  const [baseline, setBaseline] = useState(baselineDefaultH);

  const realHours = useMemo(
    () => Object.values(perSession).reduce((a, b) => a + b, 0) + grouped,
    [perSession, grouped],
  );

  const ratio = compressionRatio(realHours, baseline);
  const touched =
    baseline !== baselineDefaultH ||
    grouped !== groupedDefaultH ||
    named.some((s) => perSession[s.date] !== (s.pmEstimatedH ?? 0));

  const reset = () => {
    setPerSession(Object.fromEntries(named.map((s) => [s.date, s.pmEstimatedH ?? 0])));
    setGrouped(groupedDefaultH);
    setBaseline(baselineDefaultH);
  };

  const num = (v: string) => {
    const n = Number(v);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  };

  return (
    <div className="rounded-card border border-border bg-surface p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            Nén (Productivity Ratio)
          </h3>
          <p className="mt-1 text-sm text-ink/70">
            Giờ truyền thống ÷ giờ ngồi máy thật. Chỉnh số bên dưới để xem kết quả đổi.
          </p>
        </div>
        {touched && (
          <button
            type="button"
            onClick={reset}
            className="flex items-center gap-1.5 rounded-pill border border-border px-3 py-1.5 text-sm text-ink/75 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-chili"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Về số gốc
          </button>
        )}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto]">
        <div className="space-y-3">
          {named.map((s) => (
            <label key={s.date} className="flex flex-wrap items-center gap-3">
              <span className="w-28 shrink-0 font-mono text-sm text-ink/80">{s.date}</span>
              <input
                type="number"
                min={0}
                step={0.5}
                value={perSession[s.date]}
                onChange={(e) =>
                  setPerSession((p) => ({ ...p, [s.date]: num(e.target.value) }))
                }
                aria-label={`Giờ thật phiên ${s.date}`}
                className="w-24 rounded-control border border-border bg-surface px-3 py-1.5 text-sm text-ink focus:border-chili focus:ring-2 focus:ring-chili/30 focus:outline-none"
              />
              <span className="text-sm text-ink/65">giờ</span>
            </label>
          ))}

          <label className="flex flex-wrap items-center gap-3">
            <span className="w-28 shrink-0 text-sm text-ink/80">3 phiên nhỏ</span>
            <input
              type="number"
              min={0}
              step={0.5}
              value={grouped}
              onChange={(e) => setGrouped(num(e.target.value))}
              aria-label="Giờ thật gộp cho 3 phiên nhỏ"
              className="w-24 rounded-control border border-border bg-surface px-3 py-1.5 text-sm text-ink focus:border-chili focus:ring-2 focus:ring-chili/30 focus:outline-none"
            />
            <span className="text-sm text-ink/65">giờ</span>
          </label>
          <p className="pl-31 text-xs text-ink/65">{groupedNote}</p>

          <label className="flex flex-wrap items-center gap-3 border-t border-border pt-3">
            <span className="w-28 shrink-0 text-sm font-medium text-ink">Baseline</span>
            <input
              type="number"
              min={0}
              step={10}
              value={baseline}
              onChange={(e) => setBaseline(num(e.target.value))}
              aria-label="Giờ truyền thống nếu không có AI"
              className="w-24 rounded-control border border-border bg-surface px-3 py-1.5 text-sm text-ink focus:border-chili focus:ring-2 focus:ring-chili/30 focus:outline-none"
            />
            <span className="text-sm text-ink/65">giờ, nếu làm tay không AI</span>
          </label>
        </div>

        <div className="flex flex-col justify-center rounded-card bg-surface-muted p-6 text-center">
          <span className="text-sm text-ink/70">Giờ thật</span>
          <span className="font-display text-2xl font-semibold text-ink">
            {formatHours(realHours)}
          </span>
          <span className="mt-3 text-sm text-ink/70">Nén</span>
          <span className="font-display text-4xl font-bold text-chili">
            {ratio === null ? "—" : `${ratio.toFixed(1)}×`}
          </span>
        </div>
      </div>

      {/* Đối chiếu với proxy từ git: đây là bằng chứng vì sao KHÔNG tự suy giờ từ commit */}
      <div className="mt-5 flex gap-2 rounded-card bg-surface-muted p-4 text-sm text-ink/80">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
        <p>
          Git chỉ đoán được khoảng{" "}
          <strong className="text-ink">
            {formatHours(gitLowerH)} – {formatHours(gitUpperH)}
          </strong>
          . Giờ thật do PM khai{" "}
          <strong className="text-ink">{formatHours(realHours)}</strong> —{" "}
          {realHours > gitUpperH ? (
            <>
              <strong className="text-ink">vượt cả cận trên</strong>, xác nhận mọi proxy
              từ commit đều đếm thiếu. Nếu lấy proxy làm mẫu số, Nén đã bị thổi phồng.
            </>
          ) : (
            <>nằm trong khoảng git đoán, nhưng vẫn phải do PM khai mới đáng tin.</>
          )}
        </p>
      </div>
    </div>
  );
}
