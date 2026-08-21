import { A2_COVERAGE_DATE, SECTION_COUNTS } from "../constants";
import { SOURCE_CATALOG_BY_ID } from "./sourceCatalog";
import type { Question, Section, ValidationResult } from "../types";

const sections: Section[] = ["A1", "A2", "B", "C"];

const coverage: Record<Section, Array<[string, RegExp]>> = {
  A1: [
    ["anthropometry", /anthropometry|body composition|skinfold/],
    ["exercise physiology", /exercise physiology|energy system|fatigue|oxygen transport/],
    ["physiotherapy", /physiotherap|physical therapy|rehabilitation science|clinical reasoning/],
    ["biomechanics", /biomechanics|kinematic|kinetic|force plate/],
    ["biochemistry", /biochemistry|lactate|creatine kinase|glycogen/],
    ["strength and conditioning", /strength\s*(and|&)\s*conditioning|exercise prescription|training theory/],
    ["psychology", /psychology|motivation|self-efficacy|mental readiness/],
    ["nutrition", /nutrition|hydration|energy availability/],
    ["test parameters and assessment", /assessment|testing|test parameter/],
    ["protocols and standardisation", /standard|protocol|reliability|validity/],
    ["data interpretation", /data interpretation|performance analysis|biostatistics|statistics/],
    ["performance enhancement", /performance enhancement|performance analysis|training theory|exercise prescription/],
    ["recovery and regeneration", /recovery|regeneration|sleep/],
    ["injury prevention", /injury prevention|injury surveillance|injury screening/],
    ["emerging technology", /technology|wearable|gps|force platform/],
    ["research and evidence", /research|evidence/],
    ["yoga and mind-body interventions", /yoga|mind-body/],
    ["athlete health and wellness", /athlete health|athlete wellness|female athlete health/],
    ["travel and competition readiness", /travel and competition readiness|travel/],
    ["anti-doping", /anti-doping/],
    ["interdisciplinary coordination", /interdisciplinary/],
  ],
  A2: [
    ["Olympic and Asian Games", /olympic|asian games/],
    ["Indian sports ecosystem and schemes", /indian sports ecosystem|khelo india|tops|fit india|sports authority|national sports federation/],
    ["anti-doping awareness", /anti-doping/],
    ["major international sporting events", /major international sporting events|cricket|football|hockey|world cup|commonwealth|world championship/],
    ["sports governance and ethics", /governance|ethics|safeguard|integrity/],
  ],
  B: [
    ["human anatomy", /anatomy|joint|muscle|ligament|nerve/],
    ["human and exercise physiology", /physiolog|heart rate|oxygen|respirat|cardiac|energy system/],
    ["electrotherapy and electrodiagnosis", /electrotherapy|electrodiagnos|tens|ultrasound|electrical stimulation|cryotherapy/],
    ["exercise therapy and rehabilitation", /exercise therapy|rehabilitation|rehab/],
    ["biomechanics and movement analysis", /biomechanics|gait|movement|force|moment|kinematic/],
    ["psychology and human development", /psycholog|fear|confidence|stress|motivation|growth|youth|development/],
    ["assessment and clinical reasoning", /assessment|diagnos|clinical reasoning|differential|red flag/],
    ["sports physiotherapy, emergencies and travel", /sports physiotherapy|sports injury|return to sport|concussion|emergency action|heat stroke|travel/],
    ["sports medicine, nutrition and research", /sports medicine|nutrition|research|evidence|statistics|anti-doping/],
  ],
  C: [
    ["lower extremity scenarios", /lower extremity scenarios|acl|hamstring|ankle sprain|patellar|achilles/],
    ["upper extremity scenarios", /upper extremity scenarios|gird|rotator cuff|slap|epicondyl|de quervain/],
    ["spine and pelvis scenarios", /spine & pelvis scenarios|spondylolysis|radiculopathy|sacroiliac|si joint/],
    ["on-field and emergency triage", /on-field & emergency triage|concussion|scat6|heat stroke|spinal trauma/],
    ["return to play frameworks", /return to play|rtp|limb symmetry|hop test|psychological readiness/],
  ],
};

export function validateQuestionBank(bank: Question[], expected = { A1: 900, A2: 200, B: 1350, C: 1000 }, requireCoverage = true): ValidationResult {
  const errors: string[] = [];
  const counts: Record<Section, number> = { A1: 0, A2: 0, B: 0, C: 0 };
  const ids = new Set<string>();
  const texts = new Set<string>();
  const passages = new Map<string, number>();

  bank.forEach((question, index) => {
    counts[question.section] += 1;
    if (ids.has(question.id)) errors.push(`Duplicate question id: ${question.id}`);
    ids.add(question.id);
    // Section C is passage-based: the same analytical stem can be validly
    // reused when the athlete, data and decision context differ by passage.
    if (question.section !== "C") {
      if (texts.has(question.text)) errors.push(`Duplicate question text: ${question.text}`);
      texts.add(question.text);
    }
    if (question.options.length !== 4) errors.push(`${question.id} must have exactly four options`);
    if (new Set(question.options).size !== question.options.length) errors.push(`${question.id} has duplicate options`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${question.id} has an invalid correct index`);
    if (!question.explanation.trim()) errors.push(`${question.id} is missing an explanation`);
    if (!sections.includes(question.section)) errors.push(`${question.id} has an invalid section`);
    if (question.section === "A2" && !question.asOf) errors.push(`${question.id} is missing asOf metadata`);
    if (question.section === "A2" && question.asOf !== A2_COVERAGE_DATE) errors.push(`${question.id} must use the notification coverage date ${A2_COVERAGE_DATE}`);
    if (question.section === "C" && !question.passageId) errors.push(`${question.id} is missing passageId`);
    if (!question.sourceId) errors.push(question.id + " is missing source provenance");
    else if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(question.id + " has unknown source provenance: " + question.sourceId);
    if (question.passageId) passages.set(question.passageId, (passages.get(question.passageId) ?? 0) + 1);
    if (index > 10000) errors.push("Question bank is unexpectedly large");
  });

  sections.forEach((section) => {
    if (counts[section] !== expected[section]) errors.push(`${section} has ${counts[section]} questions; expected ${expected[section]}`);
  });

  if (requireCoverage) {
    sections.forEach((section) => {
      const sectionQuestions = bank.filter((question) => question.section === section);
      const searchable = sectionQuestions.map((question) => `${question.topic} ${question.subtopic} ${question.text} ${question.explanation}`.toLowerCase());
      coverage[section].forEach(([label, pattern]) => {
        if (!searchable.some((value) => pattern.test(value))) errors.push(`${section} is missing syllabus coverage: ${label}`);
      });
    });
  }
  passages.forEach((count, passageId) => {
    if (count !== 4) errors.push(`${passageId} has ${count} questions; Section C cases require exactly 4`);
  });

  return { valid: errors.length === 0, errors, counts, passageCount: passages.size };
}
