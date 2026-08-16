import { readFile, writeFile } from "node:fs/promises";

type Question = {
  id: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
};

const files = [
  "question_bank/section_b_human_exercise_physiology.json",
  "question_bank/section_b_sports_physiotherapy_emergencies_travel.json",
  "question_bank/section_b_sports_medicine_nutrition_research.json",
  "question_bank/section_b_human_anatomy.json",
  "question_bank/section_b_electrotherapy_electrodiagnosis.json",
  "question_bank/section_b_biomechanics_movement_analysis.json",
];

const updates: Record<string, Partial<Question>> = {
  "b-physiology-019": {
    options: [
      "Higher pH, lower temperature and carbon dioxide",
      "Lower pH, increased temperature and carbon dioxide",
      "Higher pH, increased bicarbonate and oxygen tension",
      "Unchanged pH, temperature and carbon dioxide",
    ],
    correct: 1,
    explanation: "Increased carbon dioxide, hydrogen ions and temperature shift the oxygen–haemoglobin curve rightward and facilitate unloading.",
  },
  "b-sportsphysio-064": {
    options: ["Anterior talofibular ligament", "Posterior talofibular ligament", "Calcaneofibular ligament", "Deltoid ligament"],
    correct: 0,
    explanation: "The anterior talofibular ligament is the most frequently injured component of the lateral ankle ligament complex.",
  },
  "b-sportsphysio-065": {
    options: ["Low ankle sprain", "Medial ankle sprain", "Inversion ankle sprain", "High ankle sprain"],
    correct: 3,
    explanation: "The distal tibiofibular syndesmosis is injured in what is commonly called a high ankle sprain.",
  },
  "b-sportsmed-046": {
    options: ["Treat the supplement as essential", "Discuss evidence uncertainty", "Ignore possible adverse effects", "Assume benefit for every athlete"],
    correct: 1,
    explanation: "Transparent discussion of evidence uncertainty, possible benefit, risks and contamination supports an informed risk–benefit decision.",
  },
  "b-anatomy-049": {
    text: "The muscle that forms most of the anterior wall of the axilla and contributes to shoulder adduction and internal rotation is the:",
  },
  "b-anatomy-079": {
    text: "Which primary spinal curve is located in the thoracic region?",
    options: ["Cervical lordosis", "Thoracic kyphosis", "Lumbar lordosis", "Sacral kyphosis"],
    correct: 1,
    explanation: "Thoracic kyphosis is the primary curve located in the thoracic region; primary thoracic and sacral curves are present from fetal flexion, whereas cervical and lumbar lordoses develop later.",
  },
  "b-electro-122": {
    text: "In electrodiagnosis, rheobase is the:",
  },
  "b-physiology-043": {
    correct: 0,
    explanation: "High-frequency stimulation maintains calcium availability and allows force from successive cross-bridge cycles to summate; ATP is still required for cross-bridge cycling.",
  },
  "b-biomechanics-131": {
    options: ["Increases tipping resistance", "Makes friction disappear", "Narrows the base of support", "Increases muscle force automatically"],
    correct: 0,
    explanation: "For a given base of support, lowering the centre of mass generally increases resistance to tipping by reducing the overturning tendency.",
  },
  "b-biomechanics-121": {
    options: ["Pelvic rotation smooths but shortens the step", "Pelvic rotation smooths and lengthens the step", "Both hips lock in extension", "Trunk motion is prevented"],
    correct: 1,
    explanation: "Transverse pelvic rotation contributes to functional step length and helps smooth the body's progression during gait.",
  },
  "b-biomechanics-047": {
    options: ["More excursion prevents all impact loading", "More excursion absorbs more energy", "A stiffer landing always improves energy absorption", "Landing mechanics are independent of joint motion"],
    correct: 1,
    explanation: "Greater controlled knee-flexion excursion can increase the distance over which work is absorbed, although the effect depends on timing and whole-body strategy.",
  },
  "b-sportsmed-040": {
    options: ["To follow current national procedures", "To replace the global anti-doping framework", "To assume national medicines are permitted", "To avoid checking the current Prohibited List"],
    correct: 0,
    sourceId: "nada-india-official-2026",
    explanation: "NADA India resources provide current national procedures and guidance that should be checked alongside the global anti-doping framework and current Prohibited List.",
  },
  "b-sportsmed-021": { sourceId: "wada-code-2021" },
  "b-sportsmed-024": { sourceId: "wada-code-2021" },
  "b-sportsmed-026": { sourceId: "wada-code-2021" },
  "b-sportsmed-027": { sourceId: "nada-india-rules-2021" },
  "b-sportsmed-028": { sourceId: "nada-india-rules-2021" },
  "b-sportsmed-029": { sourceId: "nada-india-rules-2021" },
  "b-sportsmed-039": { sourceId: "nada-india-official-2026" },
  "b-sportsmed-043": { sourceId: "who-medication-without-harm-2022" },
  "b-sportsmed-044": { sourceId: "who-medication-without-harm-2022" },
  "b-sportsmed-050": { sourceId: "who-medication-without-harm-2022" },
  "b-sportsphysio-071": { sourceId: "doha-groin-consensus-2015" },
  "b-sportsphysio-072": { sourceId: "doha-groin-consensus-2015" },
  "b-sportsphysio-073": { sourceId: "doha-groin-consensus-2015" },
  "b-sportsphysio-074": { sourceId: "doha-groin-consensus-2015" },
};

const applied: string[] = [];
for (const file of files) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  let changed = false;
  for (const question of questions) {
    const update = updates[question.id];
    if (!update) continue;
    Object.assign(question, update);
    applied.push(question.id);
    changed = true;
  }
  if (file.endsWith("section_b_human_anatomy.json")) {
    questions.forEach((question) => {
      if (question.sourceId !== "sai-notification-2026") return;
      question.sourceId = "openstax-anatomy-physiology-2e";
      applied.push(`${question.id}:source`);
      changed = true;
    });
  }
  if (changed) await writeFile(file, `${JSON.stringify(questions, null, 2)}\n`);
}

await writeFile("research/section_b_factual_remediation_log.json", `${JSON.stringify({ generatedAt: "2026-08-17", applied, updateCount: applied.length, source: "independent factual audit and central content review" }, null, 2)}\n`);
console.log(`Applied ${applied.length} Section B factual remediations.`);
