import { STORAGE_KEY } from "./constants";
import type { ActiveAttempt, PersistedState, TestResult } from "./types";

const CURRENT_VERSION = 3;

export const EMPTY_STATE: PersistedState = { version: CURRENT_VERSION, activeAttempt: null, latestResult: null };

function migrateActiveAttempt(value: unknown): ActiveAttempt | null {
  if (!value || typeof value !== "object") return null;
  const { testNumber: _testNumber, version: _version, ...attempt } = value as Record<string, unknown>;
  return { ...attempt, version: CURRENT_VERSION } as unknown as ActiveAttempt;
}

function migrateResult(value: unknown): TestResult | null {
  if (!value || typeof value !== "object") return null;
  const { testNumber: _testNumber, version: _version, ...result } = value as Record<string, unknown>;
  return { ...result, version: CURRENT_VERSION } as unknown as TestResult;
}

export function loadState(storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage): PersistedState {
  if (!storage) return { ...EMPTY_STATE };
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_STATE };
    const parsed = JSON.parse(raw) as { version?: number; activeAttempt?: unknown; latestResult?: unknown };
    if (parsed.version !== 2 && parsed.version !== CURRENT_VERSION) return { ...EMPTY_STATE };
    const migrated: PersistedState = {
      version: CURRENT_VERSION,
      activeAttempt: migrateActiveAttempt(parsed.activeAttempt),
      latestResult: migrateResult(parsed.latestResult),
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
  const next = { ...state, activeAttempt };
  saveState(next, storage);
  return next;
}

export function saveLatestResult(state: PersistedState, latestResult: TestResult, storage?: Storage): PersistedState {
  const next = { ...state, activeAttempt: null, latestResult };
  saveState(next, storage);
  return next;
}

export function clearForNewTest(state: PersistedState, storage?: Storage): PersistedState {
  const next = { ...state, activeAttempt: null, latestResult: null };
  saveState(next, storage);
  return next;
}

export function clearAll(storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage): PersistedState {
  if (storage) storage.removeItem(STORAGE_KEY);
  return { ...EMPTY_STATE };
}
