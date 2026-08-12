import type { Section } from "./types";

export const TEST_DURATION_MS = 2 * 60 * 60 * 1000;
export const NEGATIVE_MARK = 0.25;
export const SECTION_COUNTS: Record<Section, number> = {
  A1: 32,
  A2: 8,
  B: 40,
  C: 20,
};
export const SECTION_LABELS: Record<Section, string> = {
  A1: "Section A1 · Basic sports science",
  A2: "Section A2 · General sports awareness",
  B: "Section B · Applied Physiotherapy",
  C: "Section C · Case studies",
};
export const STORAGE_KEY = "sai-pa-mock:v1";
export const BANK_VERSION = "2026.08.1";
