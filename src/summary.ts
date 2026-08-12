import type { ResultItem, TestResult } from "./types";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

function optionLabel(index: number | undefined): string {
  return index === undefined ? "—" : String.fromCharCode(65 + index);
}

function displayLabel(item: ResultItem, sourceIndex: number | undefined): string {
  return sourceIndex === undefined ? "—" : optionLabel(item.optionOrder.indexOf(sourceIndex));
}

function itemHtml(item: ResultItem): string {
  const selected = item.selected === undefined ? "Skipped" : `${displayLabel(item, item.selected)}. ${escapeHtml(item.options[item.selected])}`;
  const correct = `${displayLabel(item, item.correct)}. ${escapeHtml(item.options[item.correct])}`;
  const passage = item.passage ? `<div class="passage"><strong>Case study</strong><p>${escapeHtml(item.passage)}</p></div>` : "";
  const source = item.sourceUrl
    ? `<a href="${escapeHtml(item.sourceUrl)}">${escapeHtml(item.source)}</a>`
    : escapeHtml(item.source);
  return `<article class="item ${item.status}">${passage}<p class="status"><strong>${item.status === "wrong" ? "Wrong" : "Skipped"}</strong></p><h3>${escapeHtml(item.text)}</h3><p><strong>Your answer:</strong> ${selected}</p><p><strong>Correct answer:</strong> ${correct}</p><p><strong>Explanation:</strong> ${escapeHtml(item.explanation)}</p><p class="source"><strong>Source:</strong> ${source}</p></article>`;
}

export function buildSummaryHtml(result: TestResult): string {
  const details = result.items.filter((item) => item.status !== "correct").map(itemHtml).join("\n");
  const sections = Object.entries(result.sectionScores).map(([section, score]) => `<tr><td>${section}</td><td>${score.correct}</td><td>${score.wrong}</td><td>${score.skipped}</td><td>${score.score.toFixed(2)}</td></tr>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>SAI Performance Analyst Mock Test ${result.testNumber} Summary</title><style>body{font-family:system-ui,-apple-system,sans-serif;max-width:900px;margin:40px auto;padding:0 20px;color:#102a43;line-height:1.55}h1{margin-bottom:4px}.muted{color:#52606d}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:24px 0}.stat{padding:14px;background:#f0f4f8;border-radius:10px}.stat strong{display:block;font-size:1.45rem}table{border-collapse:collapse;width:100%;margin:16px 0 30px}th,td{border:1px solid #bcccdc;padding:8px;text-align:left}.item{border:1px solid #d9e2ec;border-left:5px solid #d64545;padding:18px;margin:18px 0;border-radius:8px}.item.skipped{border-left-color:#d9822b}.passage{background:#f5f7fa;padding:12px;border-radius:8px}.source{color:#52606d;font-size:.9rem}@media(max-width:600px){.stats{grid-template-columns:repeat(2,1fr)}}@media print{body{margin:0}.item{break-inside:avoid}}</style></head><body><h1>SAI Performance Analyst Mock Tests</h1><p class="muted">Independent preparation tool · Test ${result.testNumber} · Submitted ${escapeHtml(new Date(result.submittedAt).toLocaleString())}</p><p>This summary includes only wrong and skipped questions, as requested. It is not an official Sports Authority of India document.</p><div class="stats"><div class="stat"><strong>${result.score.toFixed(2)}</strong>Final score</div><div class="stat"><strong>${result.correctCount}</strong>Correct</div><div class="stat"><strong>${result.wrongCount}</strong>Wrong</div><div class="stat"><strong>${result.skippedCount}</strong>Skipped</div></div><h2>Section performance</h2><table><thead><tr><th>Section</th><th>Correct</th><th>Wrong</th><th>Skipped</th><th>Score</th></tr></thead><tbody>${sections}</tbody></table><h2>Review items</h2>${details || "<p>No wrong or skipped questions.</p>"}</body></html>`;
}

export function downloadSummary(result: TestResult): void {
  const blob = new Blob([buildSummaryHtml(result)], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `sai-performance-analyst-test-${result.testNumber}-summary.html`;
  link.click();
  URL.revokeObjectURL(url);
}
