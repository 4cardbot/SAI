import { describe, expect, it } from "vitest";
import { clearAll, loadState, saveState } from "./storage";

class MemoryStorage implements Storage {
  private values = new Map<string, string>();
  get length() { return this.values.size; }
  clear() { this.values.clear(); }
  getItem(key: string) { return this.values.get(key) ?? null; }
  key(index: number) { return [...this.values.keys()][index] ?? null; }
  removeItem(key: string) { this.values.delete(key); }
  setItem(key: string, value: string) { this.values.set(key, value); }
}

describe("versioned browser persistence", () => {
  it("round-trips an active attempt and latest result", () => {
    const storage = new MemoryStorage();
    const original = { version: 3 as const, activeAttempt: null, latestResult: null };
    saveState(original, storage);
    expect(loadState(storage)).toEqual(original);
  });

  it("migrates old numbered state without losing the attempt data", () => {
    const storage = new MemoryStorage();
    storage.setItem("sai-pa-mock:v3", JSON.stringify({
      version: 2,
      activeAttempt: { version: 2, testNumber: 8, seed: 123, currentIndex: 14 },
      latestResult: { version: 2, testNumber: 7, score: 81.5 },
      nextTestNumber: 9,
    }));

    const migrated = loadState(storage);
    expect(migrated.version).toBe(3);
    expect(migrated.activeAttempt).toMatchObject({ version: 3, seed: 123, currentIndex: 14 });
    expect(migrated.activeAttempt).not.toHaveProperty("testNumber");
    expect(migrated.latestResult).toMatchObject({ version: 3, score: 81.5 });
    expect(migrated.latestResult).not.toHaveProperty("testNumber");
    expect(JSON.parse(storage.getItem("sai-pa-mock:v3")!)).toEqual(migrated);
  });

  it("falls back safely on malformed storage and supports reset", () => {
    const storage = new MemoryStorage();
    storage.setItem("sai-pa-mock:v3", "not json");
    expect(loadState(storage)).toEqual({ version: 3, activeAttempt: null, latestResult: null });
    storage.setItem("sai-pa-mock:v3", JSON.stringify({ version: 2, nextTestNumber: 7 }));
    expect(clearAll(storage)).toEqual({ version: 3, activeAttempt: null, latestResult: null });
    expect(storage.getItem("sai-pa-mock:v3")).toBeNull();
  });
});
