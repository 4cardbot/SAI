import { readFile, writeFile } from "node:fs/promises";

type Question = { id: string; text: string; options: string[]; correct: number; explanation: string; sourceId: string };
const files = [
  "question_bank/section_a2_olympic_asian_games.json",
  "question_bank/section_a2_indian_sports_ecosystem_schemes.json",
  "question_bank/section_a2_anti_doping_awareness.json",
  "question_bank/section_a2_major_international_events.json",
  "question_bank/section_a2_sports_governance_ethics.json",
];
const changes: Array<Record<string, unknown>> = [];
const sourceForEcosystem = (number: number): string => {
  if (number <= 10 || number === 33 || number === 34 || number === 40) return "myas-khelo-india-revised-guidelines-2025";
  if (number <= 16 || number === 18 || number === 19 || number === 20) return "sai-tops-official-2026";
  if (number === 17) return "myas-nsdf-official-2026";
  if (number === 21 || number === 22 || number === 25 || number === 26) return "sai-about-official-2026";
  if (number === 23 || number === 24 || number === 27) return "sai-ncoe-official-2026";
  if (number === 28 || number === 29 || number === 30) return "sai-organisational-information-2026";
  if (number === 31 || number === 32 || number === 38 || number === 39) return "ioa-organisation-official";
  if (number === 35 || number === 36) return "myas-recognised-nsf-2025";
  if (number === 37) return "myas-national-sports-code-2011";
  throw new Error(`No ecosystem provenance mapping for ${number}`);
};

for (const file of files) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  for (const question of questions) {
    const number = Number(question.id.match(/-(\d{3})$/)?.[1]);
    const before = { text: question.text, options: [...question.options], correct: question.correct, explanation: question.explanation, sourceId: question.sourceId };
    let reason: string | undefined;
    if (file.includes("indian_sports_ecosystem")) {
      const sourceId = sourceForEcosystem(number);
      if (question.sourceId !== sourceId) { question.sourceId = sourceId; reason = "Assigned granular official source for the individual scheme or institution claim."; }
    }
    if (question.id === "a2-major_international_events-012") {
      question.options = ["Argentina", "Uruguay", "Brazil", "Italy"];
      question.correct = 1;
      reason = "Corrected the stored key to Uruguay, the inaugural FIFA World Cup champion, while preserving the explanation.";
    }
    if (question.id === "a2-sports_governance_ethics-011") {
      question.options = [
        "Sexual Harassment of Employees at Workplace (Prevention, Prohibition and Redressal) Act, 2014",
        "Sexual Harassment of Women in Employment (Prevention, Prohibition and Redressal) Act, 2012",
        "Sexual Harassment of Workers at Workplace (Prevention, Prohibition and Redressal) Act, 2015",
        "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
      ];
      question.correct = 3;
      reason = "Replaced the incomplete POSH short title with the complete statutory title and parallel formal-title distractors.";
    }
    if (question.id === "a2-major_international_events-006") {
      question.sourceId = "commonwealth-sport-birmingham-2022";
      reason = "Changed the primary source to the direct Birmingham 2022 event and medal source.";
    }
    if (question.id === "a2-major_international_events-010") {
      question.text = "How many nations and territories took part in Glasgow 2026?";
      question.explanation = "The official Glasgow 2026 event information lists athletes from 74 nations and territories taking part under their own flags.";
      reason = "Updated scheduled-event wording to completed-event wording for the 2026-08-16 coverage date.";
    }
    if (question.id === "a2-major_international_events-022") {
      question.options = ["International Olympic Committee", "International Sports Union", "World Athletics governing body", "World Track and Field Council"];
      question.explanation = "World Athletics, the international governing body for athletics, organises the World Athletics Championships.";
      reason = "Used the organisation's formal short name in the correct option.";
    }
    if (question.id === "a2-major_international_events-040") {
      question.text = "Under FIBA's current qualification framework, how many teams will qualify directly from the World Cup to the Los Angeles 2028 Olympic basketball tournament?";
      question.explanation = "FIBA's current competition information states that seven national teams qualify directly from the 2027 World Cup, with the United States qualifying as host; the framework remains subject to the stated FIBA Central Board arrangements.";
      reason = "Added the current-framework qualifier and the source's stated qualification caveat.";
    }
    const after = { text: question.text, options: [...question.options], correct: question.correct, explanation: question.explanation, sourceId: question.sourceId };
    if (JSON.stringify(before) !== JSON.stringify(after)) changes.push({ id: question.id, file, reason: reason ?? "Assigned granular primary source.", before, after });
  }
  await writeFile(file, `${JSON.stringify(questions, null, 2)}\n`);
}
await writeFile("research/a2_factual_provenance_remediation_log.json", `${JSON.stringify({ generatedAt: "2026-08-16", changedQuestions: changes.length, changes }, null, 2)}\n`);
console.log(`Applied ${changes.length} factual/provenance repairs.`);
