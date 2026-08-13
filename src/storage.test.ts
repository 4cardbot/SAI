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
    const original = { version: 2 as const, activeAttempt: null, latestResult: null, nextTestNumber: 4 };
    saveState(original, storage);
    expect(loadState(storage)).toEqual(original);
  });

  it("falls back safely on malformed storage and supports reset", () => {
    const storage = new MemoryStorage();
    storage.setItem("sai-pa-mock:v3", "not json");
    expect(loadState(storage)).toEqual({ version: 2, activeAttempt: null, latestResult: null, nextTestNumber: 1 });
    storage.setItem("sai-pa-mock:v3", JSON.stringify({ version: 2, nextTestNumber: 7 }));
    expect(clearAll(storage)).toEqual({ version: 2, activeAttempt: null, latestResult: null, nextTestNumber: 1 });
    expect(storage.getItem("sai-pa-mock:v3")).toBeNull();
  });
});
