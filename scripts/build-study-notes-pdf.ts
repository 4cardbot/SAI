import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = process.cwd();
const studyNotes = join(root, "study_notes");
const outputMarkdown = join(studyNotes, "SAI_Performance_Analyst_Day_Before_Study_Guide.md");
const outputHtml = join(studyNotes, "SAI_Performance_Analyst_Day_Before_Study_Guide.html");
const outputPdf = join(studyNotes, "SAI_Performance_Analyst_Day_Before_Study_Guide.pdf");

const orderedFiles = [
  "README.md",
  "glossary.md",
  "A1/01-core-disciplines.md",
  "A1/02-testing-standardization-assessment.md",
  "A1/03-emerging-technology-biostatistics.md",
  "A1/04-data-interpretation-analytics.md",
  "A1/05-performance-recovery.md",
  "A1/06-holistic-travel-ethics.md",
  "A2/01-olympic-asian-games.md",
  "A2/02-indian-sports-ecosystem.md",
  "A2/03-anti-doping-clean-sport.md",
  "A2/04-international-championships.md",
  "A2/05-governance-ethics-safeguarding.md",
  "B/01-biomechanics-movement-analysis.md",
  "B/02-anatomy-kinesiology.md",
  "B/03-physiology-exercise-physiology.md",
  "B/04-electrotherapy-electrodiagnosis.md",
  "B/05-exercise-therapy-rehabilitation.md",
  "B/06-assessment-diagnosis-clinical-reasoning.md",
  "B/07-sports-physiotherapy-injury-rtp.md",
  "B/08-sports-emergencies-on-field-travel.md",
  "B/09-sports-medicine-nutrition-research.md",
].map((relativePath) => join(studyNotes, relativePath));

for (const file of orderedFiles) {
  if (!existsSync(file)) throw new Error(`Missing study-note file: ${file}`);
}

const markdown = orderedFiles.map((file) => readFileSync(file, "utf8").trim()).join("\n\n---\n\n") + "\n";
writeFileSync(outputMarkdown, markdown, "utf8");

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function inlineMarkdown(value: string): string {
  const protectedParts: string[] = [];
  const protect = (html: string) => {
    const token = `\uE000${protectedParts.length}\uE001`;
    protectedParts.push(html);
    return token;
  };

  let text = value.replace(/`([^`]+)`/g, (_, code: string) => protect(`<code>${escapeHtml(code)}</code>`));
  text = text.replace(/\[([^\]]+)\]\((<[^>]+>|[^)]+)\)/g, (_, label: string, target: string) => {
    const cleanTarget = target.replace(/^</, "").replace(/>$/, "");
    if (!/^https?:\/\//.test(cleanTarget)) return escapeHtml(label);
    return protect(`<a href="${escapeHtml(cleanTarget)}">${escapeHtml(label)}</a>`);
  });
  text = escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/~~([^~]+)~~/g, "<del>$1</del>");

  return text.replace(/\uE000(\d+)\uE001/g, (_, index: string) => protectedParts[Number(index)]);
}

function tableCells(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cell.trim());
}

function isTableSeparator(line: string): boolean {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function renderMarkdown(source: string): string {
  const lines = source.replace(/\r/g, "").split("\n");
  const html: string[] = [];
  let paragraph: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let listItems: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (!listType) return;
    html.push(`<${listType}>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</${listType}>`);
    listType = null;
    listItems = [];
  };

  const flushText = () => {
    flushParagraph();
    flushList();
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (line.trim().startsWith("```")) {
      flushText();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushText();
      const level = heading[1].length;
      const className = level === 1 && html.length > 0 ? " class=\"topic-title\"" : "";
      html.push(`<h${level}${className}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (/^\s*---\s*$/.test(line)) {
      flushText();
      html.push("<hr>");
      continue;
    }

    if (line.includes("|") && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      flushText();
      const header = tableCells(line);
      index += 2;
      const rows: string[][] = [];
      while (index < lines.length && lines[index].includes("|") && lines[index].trim() !== "") {
        rows.push(tableCells(lines[index]));
        index += 1;
      }
      index -= 1;
      html.push(`<table><thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
      continue;
    }

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      listItems.push((unordered ?? ordered)![1]);
      continue;
    }

    if (line.trim() === "") {
      flushText();
      continue;
    }

    flushList();
    paragraph.push(line.trim());
  }

  if (inCode) html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  flushText();
  return html.join("\n");
}

const body = orderedFiles.map((file, index) => {
  const content = renderMarkdown(readFileSync(file, "utf8"));
  return index === 0 ? content : `<section class="document-section">${content}</section>`;
}).join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>SAI Performance Analyst — Day-Before Study Guide</title>
<style>
@page { size: A4; margin: 15mm 14mm 16mm; }
* { box-sizing: border-box; }
body { color: #172033; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; font-size: 9.5pt; line-height: 1.34; }
h1 { color: #102a43; font-size: 20pt; margin: 0 0 10pt; }
h2 { color: #174a6e; font-size: 14pt; border-bottom: 1px solid #b9c8d6; padding-bottom: 3pt; margin: 15pt 0 7pt; }
h3 { color: #245b78; font-size: 11.5pt; margin: 11pt 0 5pt; }
h4 { font-size: 10pt; margin: 8pt 0 4pt; }
p { margin: 4pt 0 7pt; }
ul, ol { margin: 4pt 0 8pt 19pt; padding: 0; }
li { margin: 2pt 0; }
strong { color: #102a43; }
code { font-family: "SFMono-Regular", Consolas, monospace; font-size: 8.5pt; background: #eef3f7; padding: 0 2pt; }
pre { white-space: pre-wrap; background: #f4f7f9; border-left: 3px solid #6d9db7; padding: 7pt 9pt; margin: 6pt 0 9pt; font: 8pt/1.28 "SFMono-Regular", Consolas, monospace; page-break-inside: avoid; }
table { width: 100%; border-collapse: collapse; margin: 6pt 0 10pt; page-break-inside: auto; }
thead { display: table-header-group; }
tr { page-break-inside: avoid; }
th, td { border: 0.5pt solid #b8c4cf; padding: 4pt 5pt; vertical-align: top; }
th { background: #e8f0f5; color: #173f5f; font-weight: 700; }
hr { border: 0; border-top: 1pt solid #9fb1bf; margin: 12pt 0; }
a { color: #155d88; text-decoration: underline; }
.document-section { page-break-before: always; }
.document-section > h1.topic-title { page-break-before: avoid; }
</style>
</head>
<body>
<div class="cover">
  <h1>SAI Performance Analyst</h1>
  <h2>Day-Before Study Guide</h2>
  <p><strong>Physiotherapy — compact revision notes</strong></p>
  <p>Includes A1, A2 and Section B weak-area notes, formulas, terminology, tables, memory aids and self-tests.</p>
  <p>Prepared from the repository study notes. Current A2 snapshot: 2026-08-21.</p>
</div>
${body}
</body>
</html>`;

writeFileSync(outputHtml, html, "utf8");

function buildPdf(): Buffer {
  try {
    const pdf = execFileSync("cupsfilter", ["-i", "text/html", "-m", "application/pdf", outputHtml], {
      stdio: ["ignore", "pipe", "ignore"],
    });
    if (pdf.subarray(0, 5).toString() === "%PDF-") return pdf;
  } catch {
    // Some macOS installations do not include an HTML-to-PDF CUPS filter.
  }

  const browserCandidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ];
  const browser = browserCandidates.find((candidate) => existsSync(candidate));
  if (!browser) {
    throw new Error("Could not find an HTML-to-PDF converter. Install Google Chrome, Chromium, or Microsoft Edge.");
  }

  execFileSync(browser, [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--no-pdf-header-footer",
    `--print-to-pdf=${outputPdf}`,
    `file://${outputHtml}`,
  ], { stdio: "ignore" });

  const pdf = readFileSync(outputPdf);
  if (pdf.subarray(0, 5).toString() !== "%PDF-") {
    throw new Error("The HTML-to-PDF converter did not produce a valid PDF.");
  }
  return pdf;
}

const pdf = buildPdf();
writeFileSync(outputPdf, pdf);

console.log(JSON.stringify({
  files: orderedFiles.length,
  markdown: resolve(outputMarkdown),
  html: resolve(outputHtml),
  pdf: resolve(outputPdf),
  pdfBytes: pdf.length,
}, null, 2));
