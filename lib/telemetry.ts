import telemetry from "@/data/telemetry.json";

export interface TelemetrySession {
  date: string;
  commits: number;
  gitLowerBoundH: number;
  gitUpperBoundH: number;
  /** PM tự khai. `null` = nằm trong nhóm 3 phiên ước tính gộp. */
  pmEstimatedH: number | null;
  grouped: boolean;
  work: string;
}

export interface TelemetryGate {
  name: string;
  value: string;
  status: "pass" | "warn" | "fail";
  how: string;
}

export const telemetryData = telemetry;

export function sessions(): TelemetrySession[] {
  return telemetry.sessions as TelemetrySession[];
}

/** Tổng cận dưới/cận trên mà git đoán được — cả hai đều SAI, xem `TELEMETRY-LF.md` mục 1. */
export function gitBounds(): { lower: number; upper: number } {
  return sessions().reduce(
    (acc, s) => ({
      lower: acc.lower + s.gitLowerBoundH,
      upper: acc.upper + s.gitUpperBoundH,
    }),
    { lower: 0, upper: 0 },
  );
}

/**
 * Tổng giờ người thật = các phiên PM khai riêng + ước tính gộp cho 3 phiên nhỏ.
 * `override` cho phép PM chỉnh ngay trên dashboard để xem Nén đổi thế nào
 * (yêu cầu "PM-edit" của deliverable AI Dashboard).
 */
export function totalRealHours(override?: {
  perSession?: Record<string, number>;
  grouped?: number;
}): number {
  const groupedH = override?.grouped ?? telemetry.groupedEstimateH;
  const named = sessions().reduce((sum, s) => {
    if (s.grouped) return sum;
    const v = override?.perSession?.[s.date] ?? s.pmEstimatedH ?? 0;
    return sum + v;
  }, 0);
  return named + groupedH;
}

/** Nén = giờ truyền thống ÷ giờ thật. Trả `null` nếu mẫu số không hợp lệ. */
export function compressionRatio(realHours: number, baseline?: number): number | null {
  if (!Number.isFinite(realHours) || realHours <= 0) return null;
  return (baseline ?? telemetry.baselineNoAiH) / realHours;
}

export function totalIncidents(): number {
  return telemetry.incidents.reduce((s, i) => s + i.count, 0);
}

export function gateSummary(): { pass: number; warn: number; fail: number } {
  return (telemetry.gates as TelemetryGate[]).reduce(
    (acc, g) => ({ ...acc, [g.status]: acc[g.status] + 1 }),
    { pass: 0, warn: 0, fail: 0 },
  );
}

/** est → reconcile: PERT ước lượng ban đầu so với thực tế đã giao. */
export function estimateReconcile() {
  const real = totalRealHours();
  return {
    estimatedH: telemetry.estimate.pertH,
    actualH: real,
    /** Âm = làm nhanh hơn ước lượng. */
    varianceH: real - telemetry.estimate.pertH,
    scopePlanned: telemetry.delivered.provincesPlanned,
    scopeActual: telemetry.delivered.provincesActual,
    scopeMultiplier: telemetry.delivered.provincesActual / telemetry.delivered.provincesPlanned,
  };
}

export function formatHours(h: number): string {
  const whole = Math.floor(h);
  const mins = Math.round((h - whole) * 60);
  if (whole === 0) return `${mins}p`;
  return mins === 0 ? `${whole}h` : `${whole}h${String(mins).padStart(2, "0")}`;
}
