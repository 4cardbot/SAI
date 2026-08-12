import { STORAGE_KEY } from "./constants";
import type { ActiveAttempt, PersistedState, TestResult } from "./types";

export const EMPTY_STATE: PersistedState = { version: 1, activeAttempt: null, latestResult: null, nextTestNumber: 1 };

export function loadState(storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage): PersistedState {
  if (!storage) return { ...EMPTY_STATE };
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_STATE };
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    if (parsed.version !== 1) return { ...EMPTY_STATE };
    return {
      version: 1,
      activeAttempt: parsed.activeAttempt ?? null,
      latestResult: parsed.latestResult ?? null,
      nextTestNumber: Math.max(1, parsed.nextTestNumber ?? 1),
    };
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
  const nextTestNumber = state.nextTestNumber + 1;
  const next = { ...state, activeAttempt: null, latestResult: null, nextTestNumber };
  saveState(next, storage);
  return next;
}

export function clearAll(storage: Storage | undefined = typeof window === "undefined" ? undefined : window.localStorage): PersistedState {
  if (storage) storage.removeItem(STORAGE_KEY);
  return { ...EMPTY_STATE };
}
