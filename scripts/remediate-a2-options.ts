import { readFile, writeFile } from "node:fs/promises";

type Question = {
  id: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
};

const updates: Record<string, { options: string[]; reason: string; text?: string; explanation?: string; correct?: number }> = {
  "a2-olympic_asian_games-005": { options: ["Five sports in the first modern Games", "Five founding IOC host cities", "Union of continents and athlete meeting", "Five grades of Olympic medals"], reason: "Shortened the correct option and kept all four interpretations parallel." },
  "a2-olympic_asian_games-019": { options: ["India's only Paris 2024 gold medal", "First Indian woman with two Olympic medals", "Three individual shooting medals", "India's first Olympic archery medal"], reason: "Shortened the correct wording and preserved the Paris 2024 achievement in the stem context." },
  "a2-olympic_asian_games-020": { options: ["Gold after beating Germany", "Silver after losing to Netherlands", "Fourth place with no medal", "Bronze after beating Spain"], reason: "Used compact, parallel result descriptions." },
  "a2-olympic_asian_games-031": { options: ["The host moved from Hangzhou to another city", "The OCA renumbered the Games after closing", "The Games were held twice, once in each year", "The event was postponed from 2022 to 2023"], reason: "Rebalanced the historical explanation and distractors; the explanation retains the pandemic context." },
  "a2-olympic_asian_games-040": { text: "Which e-sports statement was confirmed by the OCA for Aichi–Nagoya 2026?", options: ["The OCA removed all e-sports from the programme", "The OCA announced 11 e-sports titles for the Games", "Only Olympic sports could enter the programme", "India alone selected every team-sport entry"], correct: 1, explanation: "The OCA announced 11 e-sports titles for the 2026 Asian Games; the event itself was scheduled for September–October 2026 as of the coverage date.", reason: "Corrected an unsupported sports-programme claim using the OCA's confirmed e-sports announcement." },
  "a2-anti_doping_awareness-005": { options: ["A professional clinical relationship for ordinary care", "A professional relationship with a person serving a ban", "A social meeting with a retired athlete outside sport", "A medical referral before entering a testing pool"], reason: "Shortened long relationship descriptions while retaining the Article 2.10 distinction." },
  "a2-anti_doping_awareness-007": { options: ["To harmonize anti-doping rules across sports and countries", "To replace the medical judgment of every team physician", "To limit testing to athletes competing at Olympic Games", "To let each federation define prohibited substances independently"], reason: "Balanced the purpose statement and distractors with meaningful qualifiers." },
  "a2-anti_doping_awareness-009": { options: ["Proof beyond any possible scientific doubt", "A simple assertion by the treating clinician", "Comfortable satisfaction of the hearing panel", "A unanimous decision by every testing laboratory"], reason: "Shortened procedural distractors without changing the Article 3.1 answer." },
  "a2-anti_doping_awareness-014": { options: ["S5: diuretics and masking agents", "S2: peptide hormones and growth factors", "S6: in-competition stimulants", "P1: sport-specific beta-blockers"], reason: "Used a consistent category-and-description format." },
  "a2-anti_doping_awareness-015": { options: ["S3: beta-2 agonists, with route limits", "S5: diuretics and masking agents, at all times", "S9: glucocorticoids, specified in-competition routes", "P1: beta-blockers in specified sports"], reason: "Shortened the S9 option and aligned category labels." },
  "a2-anti_doping_awareness-020": { options: ["Apply for a retroactive TUE after emergency treatment", "Assume emergency care automatically removes a violation", "Remove the medicine from the medical record", "Ask the coach to replace the TUE application"], reason: "Made the emergency-treatment alternatives comparable in length and preserved the qualified answer." },
  "a2-anti_doping_awareness-029": { options: ["Declare guilt without further review", "Discard it as irrelevant", "Investigate it under applicable rules", "Issue an automatic TUE"], reason: "Shortened procedural options while retaining the required investigation step." },
  "a2-anti_doping_awareness-031": { options: ["Replace all urine and blood tests during a season", "Certify supplements as free of prohibited substances", "Rank athletes by comparing competition results", "Monitor biological variables over time for doping patterns"], reason: "Balanced all four ABP descriptions around the same grammatical structure." },
  "a2-anti_doping_awareness-034": { options: ["Daily step counts from a wearable device", "Steroid-related variables in repeated samples", "Self-rated motivation before competition", "Monthly count of physiotherapy sessions"], reason: "Shortened unrelated monitoring examples and retained the steroidal-module answer." },
  "a2-anti_doping_awareness-036": { options: ["Learn anti-doping rights, List, TUEs and testing", "Wait for notification before seeking information", "Rely on a supplement company's safety statement", "Ask a coach to decide medication status alone"], reason: "Expanded the short correct option with a meaningful anti-doping qualifier." },
  "a2-anti_doping_awareness-039": { options: ["Use it because proprietary blends are exempt under the rules", "Ask a teammate to approve it after one serving and review", "Check ingredients and contamination risk with qualified advice", "Hide it from the medical team to avoid any record"], reason: "Added meaningful risk qualifiers to distractors instead of padding." },
  "a2-major_international_events-002": { options: ["International Commonwealth Council", "Commonwealth Sport organisation", "Commonwealth Olympic Board", "British Empire Sports Union"], reason: "Added a concise organisation qualifier to the correct option." },
  "a2-major_international_events-022": { options: ["International Olympic Committee", "World Athletics federation", "International Sports Union", "World Track and Field Council"], reason: "Added a concise federation qualifier to the correct option." },
  "a2-sports_governance_ethics-002": { options: ["A list of preferred competition venues", "A named policy owner responsible for implementation", "A ranking system for national-team selection", "A schedule for routine strength-training sessions"], reason: "Balanced the accountability examples with parallel noun phrases." },
  "a2-sports_governance_ethics-005": { options: ["Protecting athlete safety, health and well-being in sport", "Replacing welfare support with performance targets", "Restricting welfare services to medal-winning athletes", "Treating welfare concerns as outside sport administration"], reason: "Shortened the correct policy summary and kept the alternatives meaningful." },
  "a2-sports_governance_ethics-007": { options: ["Accept because the volunteer is part of the team", "Keep silent unless physical contact occurs", "Raise the concern with a welfare or safeguarding officer", "Ask teammates to decide if the conduct is acceptable"], reason: "Balanced the safeguarding scenario options without weakening the safety response." },
  "a2-sports_governance_ethics-012": { options: ["Only a permanent employee with a written contract", "Only a woman employed for one complete year", "Only a woman selected for a national sports team", "A woman of any age, employed or not, alleging harassment"], reason: "Used comparable employment-status qualifiers while retaining the statutory scope." },
  "a2-sports_governance_ethics-014": { options: ["Thirty calendar days from the alleged workplace incident", "Three months from the incident or last incident in a series", "Six calendar months after the sports season ends", "One year from the incident, regardless of series"], reason: "Balanced statutory time-limit alternatives and retained the three-month rule." },
  "a2-sports_governance_ethics-018": { options: ["The rule requiring conciliation before every inquiry", "Confidentiality for complaint and inquiry details", "The requirement to transfer every respondent", "The rule that only athletes may submit complaints"], reason: "Shortened the correct confidentiality option and kept the legal alternatives distinct." },
  "a2-sports_governance_ethics-019": { options: ["Automatic dismissal of the respondent", "Permanent cancellation of the professional licence", "Transfer or up to three months' leave for her", "Publication of allegations on the public website"], reason: "Used concise, parallel interim-relief descriptions." },
  "a2-sports_governance_ethics-020": { options: ["Decide every complaint without a committee", "Require withdrawal before team selection", "Publish identities to deter future complaints", "Provide awareness measures and display consequences"], reason: "Shortened employer-duty alternatives while retaining the statutory duty." },
  "a2-sports_governance_ethics-022": { options: ["Consent is implied by entering a training centre", "Voluntary choice after relevant information", "A coach can consent for every adult athlete", "Consent is unnecessary for performance treatment"], reason: "Made the consent principles concise and parallel." },
  "a2-sports_governance_ethics-023": { options: ["Anyone who follows the athlete or attends competitions", "All spectators who ask about an absence", "Only authorised people with a legitimate need to know", "Every athlete in the same training squad"], reason: "Balanced privacy options with meaningful audience qualifiers." },
  "a2-sports_governance_ethics-025": { options: ["Refuse concealment and use the proper reporting route", "Conceal it if the team is unlikely to be caught", "Post an allegation online before checking facts", "Ignore it because staff cannot affect fair play"], reason: "Aligned fair-play alternatives in concise action phrases." },
  "a2-sports_governance_ethics-027": { options: ["Remove it if the athlete wants to compete without review", "Replace it with a less serious diagnosis without retesting", "Keep the accurate record and escalate improper pressure", "Delete it and rely on an undocumented verbal handover"], reason: "Added meaningful review and documentation qualifiers to short distractors." },
  "a2-sports_governance_ethics-031": { options: ["National Sports Administration Act, 2024", "Indian Olympic Institutions Act, 2025", "National Sports Governance Act, 2025", "Sports Integrity and Competition Act, 2026"], reason: "Balanced statute-title options without changing the identified Act." },
  "a2-sports_governance_ethics-033": { options: ["Committees, staff, sponsors, coaches, athletes, officials and others", "Only the president and secretary of the National Sports Body", "Only athletes registered internationally and accredited team staff", "Only government employees assigned to sports administration"], reason: "Shortened the broad statutory coverage option and added comparable qualifiers to distractors." },
  "a2-sports_governance_ethics-034": { options: ["Has won an Olympic or Asian Games medal in any discipline", "Exercises authority or influence over another person or dependent", "Has served five years as a sports journalist in a recognised federation", "Holds a paid role in any recognised private fitness organisation"], reason: "Aligned the statutory position-of-trust alternatives while retaining the authority/influence test." },
  "a2-sports_governance_ethics-035": { options: ["Only the final competition, medal ceremony and official media activities", "Only activities involving women athletes at the event and camp", "All National Sports Body activities, events and proceedings", "Only activities conducted outside India during official tours"], reason: "Added meaningful scope qualifiers to the narrow alternatives." },
  "a2-sports_governance_ethics-036": { options: ["It should be confidential but need not give reasons", "It should be controlled only by the accused person", "It should decide matters only after the next election", "It should address grievances fairly, promptly and transparently"], reason: "Shortened the statutory standard and kept process alternatives comparable." },
  "a2-sports_governance_ethics-037": { options: ["A sports organisation recognised under the Act", "Any informal group claiming to promote a sport", "Only a commercial league with private investors", "Only an organisation that has hosted an Olympic Games"], reason: "Added the governing-recognition qualifier to the correct option." },
  "a2-sports_governance_ethics-038": { options: ["For every private contract by athletes and staff", "For use of the government grant or other assistance", "Only for determining a competition result", "Only for regulating international sport rules"], reason: "Shortened the public-authority purpose statement and aligned the alternatives." },
  "a2-sports_governance_ethics-039": { options: ["Former international athlete with five years' service", "Serving secretary of a recognised National Sports Federation", "Present or former Supreme Court Judge or High Court Chief Justice", "Retired coach nominated by the National Olympic Committee"], reason: "Added a meaningful recognition qualifier to remove the final length outlier while retaining the statutory tribunal qualification." },
};

const files = [
  "question_bank/section_a2_olympic_asian_games.json",
  "question_bank/section_a2_indian_sports_ecosystem_schemes.json",
  "question_bank/section_a2_anti_doping_awareness.json",
  "question_bank/section_a2_major_international_events.json",
  "question_bank/section_a2_sports_governance_ethics.json",
];
const log: Array<Record<string, unknown>> = [];
for (const file of files) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  for (const question of questions) {
    const update = updates[question.id];
    if (!update) continue;
    const before = { text: question.text, options: question.options, correct: question.correct, explanation: question.explanation, sourceId: question.sourceId };
    question.text = update.text ?? question.text;
    question.options = update.options;
    if (update.explanation) question.explanation = update.explanation;
    if (update.correct !== undefined) question.correct = update.correct;
    log.push({ id: question.id, file, reason: update.reason, before, after: { text: question.text, options: question.options, correct: question.correct, explanation: question.explanation, sourceId: question.sourceId } });
  }
  await writeFile(file, `${JSON.stringify(questions, null, 2)}\n`);
}
if (log.length !== Object.keys(updates).length) throw new Error(`Applied ${log.length} option updates; expected ${Object.keys(updates).length}`);
await writeFile("research/a2_option_remediation_log.json", `${JSON.stringify({ generatedAt: "2026-08-16", count: log.length, changes: log }, null, 2)}\n`);
console.log(`Applied ${log.length} reviewed A2 option/content updates.`);
