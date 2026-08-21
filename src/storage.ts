import { STORAGE_KEY } from "./constants";
import type { ActiveAttempt, PersistedState, TestResult, TestSlot } from "./types";

const CURRENT_VERSION = 4;

export const EMPTY_STATE: PersistedState = {
  version: CURRENT_VERSION,
  practiceAttempt: null,
  finalAttempt: null,
  activeSlot: null,
  latestResult: null,
  finalTestResult: null,
};

function migrateActiveAttempt(value: unknown): ActiveAttempt | null {
  if (!value || typeof value !== "object") return null;
  const { testNumber: _testNumber, version: _version, ...attempt } = value as Record<string, unknown>;
  return { ...attempt, version: 3 } as unknown as ActiveAttempt;
}

function migrateResult(value: unknown): TestResult | null {
  if (!value || typeof value !== "object") return null;
  const { testNumber: _testNumber, version: _version, ...result } = value as Record<string, unknown>;
  return { ...result, version: 3 } as unknown as TestResult;
}

function migrateSlot(value: unknown): TestSlot | null {
  return value === "practice" || value === "final" ? value : null;
}

export function loadState(storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage): PersistedState {
  if (!storage) return { ...EMPTY_STATE };
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_STATE };
    const parsed = JSON.parse(raw) as {
      version?: number;
      activeAttempt?: unknown;
      practiceAttempt?: unknown;
      finalAttempt?: unknown;
      activeSlot?: unknown;
      latestResult?: unknown;
      finalTestResult?: unknown;
    };
    if (parsed.version !== 2 && parsed.version !== 3 && parsed.version !== CURRENT_VERSION) return { ...EMPTY_STATE };
    const migrated: PersistedState = {
      version: CURRENT_VERSION,
      practiceAttempt: migrateActiveAttempt(parsed.practiceAttempt ?? parsed.activeAttempt),
      finalAttempt: migrateActiveAttempt(parsed.finalAttempt),
      activeSlot: migrateSlot(parsed.activeSlot) ?? (parsed.activeAttempt ? "practice" : null),
      latestResult: migrateResult(parsed.latestResult),
      finalTestResult: migrateResult(parsed.finalTestResult),
    };
    if (parsed.version !== CURRENT_VERSION) saveState(migrated, storage);
    return migrated;
  } catch {
    return { ...EMPTY_STATE };
  }
}

export function saveState(state: PersistedState, storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage): void {
  if (!storage) return;
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function saveActiveAttempt(state: PersistedState, activeAttempt: ActiveAttempt | null, storage?: Storage): PersistedState {
  const next = { ...state, practiceAttempt: activeAttempt, activeSlot: activeAttempt ? "practice" as const : state.activeSlot === "practice" ? null : state.activeSlot };
  saveState(next, storage);
  return next;
}

export function saveLatestResult(state: PersistedState, latestResult: TestResult, storage?: Storage): PersistedState {
  const next = { ...state, practiceAttempt: null, activeSlot: state.activeSlot === "practice" ? null : state.activeSlot, latestResult };
  saveState(next, storage);
  return next;
}

export function clearForNewTest(state: PersistedState, storage?: Storage): PersistedState {
  const next = { ...state, practiceAttempt: null, activeSlot: state.activeSlot === "practice" ? null : state.activeSlot, latestResult: null };
  saveState(next, storage);
  return next;
}

export function clearAll(storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage): PersistedState {
  if (storage) storage.removeItem(STORAGE_KEY);
  return { ...EMPTY_STATE };
}
