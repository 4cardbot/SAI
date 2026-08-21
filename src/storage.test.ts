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
  it("round-trips independent practice and final slots", () => {
    const storage = new MemoryStorage();
    const original = { version: 4 as const, practiceAttempt: null, finalAttempt: null, activeSlot: null, latestResult: null, finalTestResult: null };
    saveState(original, storage);
    expect(loadState(storage)).toEqual(original);
  });

  it("migrates the old single active attempt into the practice slot", () => {
    const storage = new MemoryStorage();
    storage.setItem("sai-pa-mock:v3", JSON.stringify({
      version: 3,
      activeAttempt: { version: 3, testNumber: 8, seed: 123, currentIndex: 14 },
      latestResult: { version: 3, testNumber: 7, score: 81.5 },
    }));
    const migrated = loadState(storage);
    expect(migrated.version).toBe(4);
    expect(migrated.activeSlot).toBe("practice");
    expect(migrated.practiceAttempt).toMatchObject({ version: 3, seed: 123, currentIndex: 14 });
    expect(migrated.practiceAttempt).not.toHaveProperty("testNumber");
    expect(migrated.latestResult).toMatchObject({ version: 3, score: 81.5 });
    expect(migrated.latestResult).not.toHaveProperty("testNumber");
    expect(JSON.parse(storage.getItem("sai-pa-mock:v3")!)).toEqual(migrated);
  });

  it("falls back safely on malformed storage and supports reset", () => {
    const storage = new MemoryStorage();
    storage.setItem("sai-pa-mock:v3", "not json");
    expect(loadState(storage)).toEqual({ version: 4, practiceAttempt: null, finalAttempt: null, activeSlot: null, latestResult: null, finalTestResult: null });
    storage.setItem("sai-pa-mock:v3", JSON.stringify({ version: 2, nextTestNumber: 7 }));
    expect(clearAll(storage)).toEqual({ version: 4, practiceAttempt: null, finalAttempt: null, activeSlot: null, latestResult: null, finalTestResult: null });
    expect(storage.getItem("sai-pa-mock:v3")).toBeNull();
  });
});
