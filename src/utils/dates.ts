import type { IsoDate } from "@/types";

export const DAY_MS = 24 * 60 * 60 * 1000;

export function nowIso(): IsoDate {
  return new Date().toISOString();
}

/** Day-granularity key, e.g. "2026-08-13" — used for streak bookkeeping. */
export function dayKey(date: Date | IsoDate = new Date()): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().slice(0, 10);
}

export function addDays(date: Date | IsoDate, days: number): IsoDate {
  const d = typeof date === "string" ? new Date(date) : new Date(date.getTime());
  return new Date(d.getTime() + days * DAY_MS).toISOString();
}

/** Whole-day difference (b - a), can be negative. */
export function daysBetween(a: IsoDate | Date, b: IsoDate | Date): number {
  const da = typeof a === "string" ? new Date(a) : a;
  const db = typeof b === "string" ? new Date(b) : b;
  return Math.round((db.getTime() - da.getTime()) / DAY_MS);
}

export function isDue(nextReview: IsoDate, at: Date = new Date()): boolean {
  return new Date(nextReview).getTime() <= at.getTime();
}

/** Human-friendly relative label, e.g. "in 3 days", "today", "2 days ago". */
export function relativeLabel(iso: IsoDate, at: Date = new Date()): string {
  const diff = daysBetween(dayKey(at), dayKey(iso));
  if (diff === 0) return "today";
  if (diff === 1) return "tomorrow";
  if (diff === -1) return "yesterday";
  if (diff > 1) return `in ${diff} days`;
  return `${Math.abs(diff)} days ago`;
}
