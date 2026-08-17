import fs from "node:fs";

type Question = {
  id: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  [key: string]: unknown;
};

const files = {
  lower: "question_bank/section_c_lower_extremity.json",
  spine: "question_bank/section_c_spine_pelvis.json",
  emergency: "question_bank/section_c_on_field_emergency_triage.json",
  upper: "question_bank/section_c_upper_extremity.json",
  rtp: "question_bank/section_c_return_to_play.json",
} as const;

const banks = Object.fromEntries(
  Object.entries(files).map(([name, path]) => [name, JSON.parse(fs.readFileSync(path, "utf8")) as Question[]]),
) as Record<keyof typeof files, Question[]>;

const changes: Array<Record<string, unknown>> = [];

function recordChange(file: string, id: string, field: string, before: unknown, after: unknown, reason: string) {
  if (JSON.stringify(before) === JSON.stringify(after)) return;
  changes.push({ file, questionId: id, field, before, after, reason });
}

function question(file: keyof typeof files, id: string) {
  const found = banks[file].find((item) => item.id === id);
  if (!found) throw new Error(`Question not found: ${id}`);
  return found;
}

function update(file: keyof typeof files, id: string, patch: Partial<Question>, reason: string) {
  const item = question(file, id);
  for (const [field, after] of Object.entries(patch)) {
    const before = item[field];
    recordChange(files[file], id, field, before, after, reason);
    (item as Record<string, unknown>)[field] = after;
  }
}

// High-confidence clinical/key repairs identified by the independent factual audit.
const directRepairs: Array<[keyof typeof files, string, Partial<Question>, string]> = [
  ["lower", "c-lower-018-q1", {
    text: "Which documented finding most specifically supports iliopsoas-related groin pain in this striker?",
    options: [
      "Pain with resisted adduction and adductor tenderness",
      "Pain on palpation of the inguinal canal with coughing",
      "Pain reproduced by resisted hip flexion",
      "Radiating pain with lumbar neurological signs",
    ],
    correct: 2,
    explanation: "Pain reproduced by resisted hip flexion most specifically supports the iliopsoas-related Doha entity; the case's adductor tenderness should be recorded separately rather than used to erase this distinct finding.",
  }, "Remove ambiguity between coexisting adductor tenderness and the iliopsoas finding."],
  ["lower", "c-lower-031-q4", {
    options: [
      "Persistent anterior pain and pelvic drop during repeated step-downs",
      "Stable stair descent with improved quadriceps control",
      "Completed graded change-of-direction without symptom increase",
      "Improved hip strength with stable next-day symptoms",
    ],
    correct: 0,
    explanation: "Persistent task-specific pain with pelvic control loss is a reason to delay progression; an isolated calendar date or a single pain-free drill is not enough.",
  }, "Replace the inverted progression key with a case-supported delay signal."],
  ["lower", "c-lower-032-q4", {
    options: [
      "Stable pain-free running at the planned duration",
      "Improved single-leg squat without a symptom increase",
      "Pain recurring at 20 minutes of graded downhill running",
      "Stable next-day response after reduced running load",
    ],
    correct: 2,
    explanation: "Recurrent pain at the same running exposure, together with a recent 35% volume increase and dynamic valgus, supports holding or modifying progression.",
  }, "Make the delay signal specific to the documented running response."],
  ["lower", "c-lower-033-q4", {
    options: [
      "Pain reproduced or increased during repeated jumping",
      "Stable tendon symptoms during graded hopping",
      "Improved jump capacity without next-day symptom increase",
      "Pain-free strength work at the current dose",
    ],
    correct: 0,
    explanation: "Increasing or reproduced pain during the repeated energy-storage task is the case-relevant reason to delay the next progression; stable response and improved capacity support progression.",
  }, "Replace the inverted progression key with the documented tendon-load response."],
  ["lower", "c-lower-034-q4", {
    options: [
      "Stable next-day response after a planned matched load",
      "Pain increasing during the catch and rising phase after heavy-squat exposure",
      "Improved capacity at an unchanged training dose",
      "No pain during daily activity with stable tendon response",
    ],
    correct: 1,
    explanation: "Pain during the sport-specific catch and rising phase after a doubled squat load indicates that the current exposure exceeds demonstrated tendon capacity and should be held or reduced.",
  }, "Replace the inverted progression key with a load-response finding that warrants delay."],
  ["lower", "c-lower-042-q4", {
    options: [
      "Focal tenderness with pain at rest or at night",
      "Diffuse tenderness over more than 5 cm that eases with warm-up",
      "Stable symptoms after reduced mileage and graded running",
      "No pain with walking and a normal next-day response",
    ],
    correct: 0,
    explanation: "Focal tenderness with rest or night pain would increase concern for bone stress injury and warrants escalation rather than routine mileage progression; the case's diffuse tenderness is less specific.",
  }, "Replace the inverted escalation key with a clinically concerning stress-injury finding."],
  ["lower", "c-lower-043-q4", {
    options: [
      "Focal rest or night pain with painful hopping",
      "Walking and graded loading tolerated without symptoms",
      "Diffuse tenderness that eases with warm-up",
      "Stable next-day response after reduced running",
    ],
    correct: 0,
    explanation: "Focal pain at rest or night with painful hopping is an escalation signal for possible bone stress injury; it is not a reason to progress running routinely.",
  }, "Correct the inverted escalation key and align options with the passage red flags."],
  ["lower", "c-lower-044-q4", {
    options: [
      "Pain-free walking and low-impact tasks before graded running",
      "Focal tibial pain during walking with reduced loading tolerance",
      "Diffuse tenderness that eases with warm-up",
      "No rest or night pain with stable hopping",
    ],
    correct: 1,
    explanation: "Pain that has progressed to walking, together with focal tenderness and reduced bone-loading tolerance, warrants escalation and evaluation rather than increased running volume.",
  }, "Correct the inverted escalation key and use the documented progression of symptoms."],
  ["spine", "c-spine-001-q4", {
    options: [
      "The phase keeps the lumbar spine in unloaded flexion",
      "It repeatedly combines lumbar extension and rotation, increasing pars loading",
      "It isolates hamstring work without meaningful trunk motion",
      "It prevents force transfer through the pelvis and lumbar spine",
    ],
    correct: 1,
  }, "Complete the keyed proposition about pars loading."],
  ["spine", "c-spine-004-q2", {
    options: [
      "It confirms a primary hamstring tear despite no tear signs",
      "It makes the pars lesion incidental in every athlete",
      "It justifies ignoring spinal loading during rehabilitation",
      "It is a modifiable associated impairment, not the sole pain diagnosis",
    ],
    correct: 3,
  }, "Complete the keyed proposition while preserving the clinical interpretation."],
  ["spine", "c-spine-010-q3", {
    options: [
      "Return of the familiar focal pain during load progression or afterward",
      "Mild general fatigue that resolves with recovery",
      "Stable pain-free walking tolerance during progression",
      "Improved hip strength without lumbar symptoms",
    ],
    correct: 0,
  }, "Complete the regression trigger and remove the fragmentary tail."],
  ["spine", "c-spine-026-q4", {
    options: [
      "When a fixed number of days has elapsed",
      "When the athlete completes one maximal interval",
      "When the current dose is tolerated during and after repeated sessions",
      "When resting pain is absent but post-session pain remains high",
    ],
    correct: 2,
  }, "Complete the dose-tolerance criterion."],
  ["spine", "c-spine-033-q4", {
    options: [
      "Begin maximal cutting immediately",
      "Reduce painful cutting, restore pelvic and adductor capacity, then progress sport load",
      "Use passive modalities without active loading",
      "Avoid all lower-limb loading indefinitely",
    ],
    correct: 1,
  }, "Complete the active graded rehabilitation progression."],
  ["spine", "c-spine-039-q1", {
    options: [
      "The finding proves symptomatic pubic-related pain",
      "The finding proves the athlete must stop all sport",
      "It requires clinical correlation because imaging may be present without familiar symptoms",
      "The finding excludes lumbar and hip causes",
    ],
    correct: 2,
  }, "Complete the clinical-correlation conclusion."],
  ["spine", "c-spine-039-q3", {
    options: [
      "Continue monitored participation if function and symptom response remain acceptable",
      "Remove the athlete solely because of MRI oedema",
      "Clear unrestricted activity without monitoring",
      "Start maximal adduction rehabilitation despite no symptoms",
    ],
    correct: 0,
  }, "Complete the monitored-participation criterion."],
  ["spine", "c-spine-040-q1", {
    options: [
      "As one mandatory single diagnosis only",
      "As coexisting adductor-related and pubic-related groin pain",
      "As lumbar radiculopathy without examination",
      "As an imaging diagnosis without clinical findings",
    ],
    correct: 1,
  }, "Name both supported Doha entities and preserve the coexistence principle."],
  ["spine", "c-spine-040-q2", {
    options: [
      "Only pubic imaging change",
      "Only pain during coughing",
      "Recognizable adductor pain with tenderness and pain on resisted adduction",
      "Only a normal hip examination",
    ],
    correct: 2,
  }, "State the complete Doha adductor-related support pattern."],
  ["spine", "c-spine-041-q3", {
    options: [
      "Adductor tenderness is never relevant",
      "All groin pain is spinal",
      "The Doha criteria require an abnormal MRI",
      "The athlete's main recognizable pain is not reproduced by the adductor examination",
    ],
    correct: 3,
  }, "Complete why mild nonspecific discomfort does not establish adductor-related pain."],
  ["spine", "c-spine-045-q3", {
    options: [
      "Combine bowling exposure with symptoms, sleep, fatigue, and recovery response",
      "Monitor only the number of wickets",
      "Monitor only body mass",
      "Ignore subjective recovery measures",
    ],
    correct: 0,
  }, "Complete the IOC load-management monitoring approach."],
  ["spine", "c-spine-048-q3", {
    options: [
      "Hip mobility determines pars healing directly",
      "Hip testing replaces lumbar examination",
      "Restricted hip movement can alter pelvic motion and force distribution",
      "Hip mobility has no relation to force transfer",
    ],
    correct: 2,
  }, "Complete the biomechanical statement without implying direct causation."],
  ["emergency", "c-emergency-011-q1", {
    text: "At day four, what is the safest next step for this symptom-free rugby centre who wants to add non-contact passing?",
    options: [
      "Continue symptom-limited non-contact work after reassessment and monitor response",
      "Clear unrestricted contact because there was no loss of consciousness",
      "Use a same-day jog as the sole clearance test",
      "Resume full training to test readiness",
    ],
    correct: 0,
    explanation: "After symptom-free light aerobic and sport-specific work, the next step is a monitored, symptom-limited non-contact progression; absence of loss of consciousness does not by itself clear contact sport.",
  }, "Align the question with the symptom-free day-four passage."],
  ["emergency", "c-emergency-011-q2", {
    explanation: "At this stage, relative rest and symptom-limited activity are preferred; strict prolonged rest and contact testing are not appropriate ways to establish recovery.",
  }, "Clarify that the early-management principle is being applied to a staged, symptom-limited progression."],
  ["emergency", "c-emergency-019-q3", {
    options: [
      "Continue at the current symptom-limited level and reassess before advancing",
      "Advance immediately to collision training",
      "Ignore the response and double the cycling duration",
      "Provoke symptoms with maximal intensity",
    ],
    correct: 0,
    explanation: "A mild, brief symptom rise should be monitored without advancing to a higher stage until the athlete returns to baseline; the response should not be ignored or deliberately provoked.",
  }, "Add the missing option for the stated mild and brief symptom response."],
  ["emergency", "c-emergency-033-q1", {
    options: [
      "Pubic-related groin pain supported by pubic-symphysis tenderness",
      "More than one entity established by any painful squeeze",
      "Isolated adductor-related pain without adductor tenderness",
      "Inguinal-related pain inferred from pubic tenderness",
    ],
    correct: 0,
    explanation: "Pubic-symphysis tenderness supports a pubic-related presentation. Coexisting adductor-related pain would require recognizable adductor-region pain with the relevant adductor findings.",
  }, "Remove unsupported Doha coexistence from the keyed answer."],
  ["emergency", "c-emergency-036-q1", {
    options: [
      "Pubic-related groin pain is best supported by the pubic pain and examination",
      "More than one entity is established despite incomplete adductor findings",
      "Isolated adductor-related pain despite absent tenderness",
      "Inguinal-related pain from normal inguinal palpation",
    ],
    correct: 0,
    explanation: "The documented pubic pain supports a pubic-related presentation, but mild squeeze pain without the full recognizable adductor examination does not establish a second Doha entity.",
  }, "Remove unsupported Doha coexistence from the keyed answer."],
  ["emergency", "c-emergency-048-q2", {
    options: [
      "Return to activity after a brief rest while sweating continues",
      "Move to shade, begin active cooling, and monitor vital signs and mental status",
      "Give oral fluid regardless of nausea or consciousness",
      "Delay cooling until a temperature measurement is available",
    ],
    correct: 1,
    explanation: "The oriented, sweating athlete who improves in shade is not described as having exertional heat stroke. Immediate shade, active cooling, monitoring, and clinical assessment are appropriate; oral fluids should be considered only when safe.",
  }, "Align heat-illness management with the documented absence of CNS dysfunction."],
  ["emergency", "c-emergency-048-q3", {
    options: [
      "Let the athlete self-transport back to the venue",
      "Resume training once symptoms briefly improve",
      "Continue supervised observation and escalate if mental status or symptoms worsen",
      "Discharge without reassessment after the first cooling period",
    ],
    correct: 2,
    explanation: "Supervised observation and reassessment are required after heat illness; worsening symptoms or altered mental status should prompt emergency escalation.",
  }, "Align the operational decision with the documented non-CNS heat-illness presentation."],
];

for (const [file, id, patch, reason] of directRepairs) update(file, id, patch, reason);

// The upper-extremity agent produced repeated, overly explanatory keyed options.
// Shorten them without changing their clinical meaning; this also removes the
// main answer-length giveaway identified by the independent audit.
const upperOptionRewrites: Record<string, string> = {
  "Measure internal and external rotation at 90° abduction and compare total arc bilaterally": "Compare shoulder rotation at 90° abduction and the total arc bilaterally",
  "Restore posterior shoulder mobility while progressively loading cuff and scapular control": "Restore posterior mobility while loading cuff and scapular control",
  "Progress throwing only when motion, strength, symptoms and workload response are acceptable": "Progress throwing when motion, strength, symptoms, and load response permit",
  "Combine a painful-arc assessment with resisted cuff testing and cervical screening": "Assess painful arc, resisted cuff strength, and the cervical region",
  "Use graded cuff and scapular loading within tolerable symptoms and monitor the next day": "Grade cuff and scapular loading; monitor symptoms the next day",
  "Modify overhead volume and progress when function and the 24-hour response are acceptable": "Modify overhead volume; progress with acceptable function and 24-hour response",
  "Rotator-cuff pathology with active weakness requiring tear and capacity assessment": "Rotator-cuff pathology with active weakness requiring capacity assessment",
  "Compare active and passive motion with resisted cuff strength and lag-sign testing": "Compare active/passive motion, cuff strength, and lag signs",
  "Protect acute weakness initially, then progress cuff loading as control and irritability improve": "Protect acute weakness, then progress cuff loading as control improves",
  "Delay high-demand overhead sport until active control and repeated-load tolerance return": "Delay high-demand overhead sport until control and repeated-load tolerance return",
  "Use resisted wrist extension and grip testing with cervical and radial-nerve screening": "Test resisted wrist extension and grip with cervical/radial-nerve screening",
  "Progress wrist-extensor capacity from tolerable isometrics toward sport-specific loading": "Progress wrist-extensor loading from isometrics to sport-specific tasks",
  "Increase racquet or grip exposure gradually when symptoms and 24-hour response remain stable": "Increase racquet/grip exposure when symptoms and 24-hour response remain stable",
  "Use resisted wrist flexion-pronation with grip testing and screening for valgus or nerve signs": "Test resisted wrist flexion-pronation and screen valgus/nerve signs",
  "Progress flexor-pronator loading while controlling throwing or gripping exposure": "Progress flexor-pronator loading while controlling throwing/gripping",
  "Restore throwing or gripping in stages when pain, strength and valgus-load tolerance are acceptable": "Stage throwing/gripping when pain, strength, and valgus-load tolerance permit",
  "Use the history with loaded biceps and labral testing plus instability and cervical screening": "Combine history, biceps/labral testing, and instability/cervical screening",
  "Progress cuff, scapular and biceps loading while avoiding repeatedly provocative catching": "Progress cuff, scapular, and biceps loading while avoiding provocative catching",
  "Advance throwing only after a symptom-controlled, sport-specific loading progression": "Advance throwing after symptom-controlled sport-specific loading",
  "De Quervain tenosynovitis involving the first dorsal wrist compartment": "De Quervain tenosynovitis of the first dorsal compartment",
  "Assess radial-compartment tenderness and thumb abduction-extension provocation with wrist screening": "Assess radial tenderness, thumb provocation, and the wrist",
  "Use relative rest, thumb support when needed and graded thumb-tendon loading": "Use relative rest, thumb support, and graded thumb loading",
  "Reintroduce pinch and gripping progressively when radial-wrist symptoms remain controlled": "Progress pinch and gripping when radial-wrist symptoms are controlled",
  "A differential diagnosis is required because the pattern may not be a local tendon disorder": "Use a differential diagnosis; the pattern may not be local tendon pain",
  "Combine history, regional examination, neurological or vascular screening and sport-specific testing": "Combine history, regional and neurovascular examination, and sport testing",
  "Match loading to the confirmed capacity and irritability while monitoring training response": "Match loading to capacity and irritability while monitoring response",
  "Modify or withhold high-risk exposure until the differential is resolved and objective capacity is adequate": "Withhold high-risk exposure until the differential and capacity are clear",
  "Compare shoulder rotation at 90° abduction and the total arc bilaterally": "Compare rotation at 90° abduction and the total arc bilaterally",
  "Progress throwing when motion, strength, symptoms, and load response permit": "Progress throwing when motion, strength and load response permit",
  "Modify overhead volume; progress with acceptable function and 24-hour response": "Adjust overhead volume; progress with acceptable function and recovery",
  "Rotator-cuff pathology with active weakness requiring capacity assessment": "Rotator-cuff pathology with active weakness",
  "Protect acute weakness, then progress cuff loading as control improves": "Protect acute weakness, then reload the cuff as control improves",
  "Delay high-demand overhead sport until control and repeated-load tolerance return": "Delay overhead sport until control tolerates repeated load",
  "Test resisted wrist extension and grip with cervical/radial-nerve screening": "Test resisted wrist extension and grip with regional screening",
  "Progress wrist-extensor loading from isometrics to sport-specific tasks": "Progress wrist-extensor loading to sport-specific tasks",
  "Increase racquet/grip exposure when symptoms and 24-hour response remain stable": "Increase racquet/grip exposure when symptoms stay stable for 24 hours",
  "Stage throwing/gripping when pain, strength, and valgus-load tolerance permit": "Stage throwing/gripping when pain and strength permit",
  "Combine history, biceps/labral testing, and instability/cervical screening": "Combine history, biceps/labral tests, and regional screening",
  "Progress cuff, scapular, and biceps loading while avoiding provocative catching": "Progress cuff, scapular, and biceps loading without catching pain",
  "Use a differential diagnosis; the pattern may not be local tendon pain": "Use a differential diagnosis before labeling local tendon pain",
  "Combine history, regional and neurovascular examination, and sport testing": "Combine regional history, neurovascular examination, and sport testing",
  "Withhold high-risk exposure until the differential and capacity are clear": "Withhold high-risk exposure until diagnosis and capacity are clear",
};
for (const item of banks.upper) {
  item.options = item.options.map((option, index) => {
    const rewritten = upperOptionRewrites[option];
    if (rewritten) recordChange(files.upper, item.id, `options[${index}]`, option, rewritten, "Reduce repeated answer-length giveaway while preserving meaning.");
    return rewritten ?? option;
  });
}

// Remove generated RTP suffixes and duplicated explanatory tails. The base
// option remains the source-supported proposition; these tails were not part
// of the intended answer alternatives.
const generatedTails = [
  " The calendar alone is not a clearance criterion.",
  " with goals discussed with goals discussed",
  " with recovery controlled One drill should not determine clearance.",
  " with goals discussed",
  " with recovery controlled",
  " with movement quality and recovery reviewed with landing reviewed",
  " with movement quality and recovery reviewed",
  " with landing reviewed",
  " with delayed symptoms reviewed",
  " while delayed symptoms are reviewed with symptoms reviewed",
  " with symptoms reviewed with symptoms reviewed",
  " with symptoms reviewed",
  " with criteria reviewed with criteria reviewed",
  " with criteria reviewed",
  " with recovery reviewed with recovery reviewed",
  " with recovery reviewed",
  " with well-being reviewed with well-being reviewed",
  " with well-being reviewed",
  " with roles recorded with roles recorded",
  " with roles recorded",
  " with ROM reviewed ROM and movement quality still require review.",
  " with ROM reviewed",
  " ROM and movement quality still require review.",
  " Symptoms and performance should be reviewed.",
  " Delayed symptoms after loading still matter.",
  " One measure should not determine clearance.",
  " Selection pressure should not decide alone.",
];
function cleanGeneratedTails(value: string) {
  let result = value;
  let changed = true;
  while (changed) {
    changed = false;
    for (const tail of generatedTails) {
      if (result.endsWith(tail)) {
        result = result.slice(0, -tail.length).trimEnd();
        changed = true;
      }
    }
  }
  return result;
}
for (const item of banks.rtp) {
  item.options = item.options.map((option, index) => {
    const cleaned = cleanGeneratedTails(option);
    if (cleaned !== option) recordChange(files.rtp, item.id, `options[${index}]`, option, cleaned, "Remove generated explanatory suffix and restore concise option wording.");
    return cleaned;
  });
}

for (const item of banks.rtp) {
  let cleaned = item.text
    .replaceAll("has has", "has")
    .replaceAll("has completes", "completes")
    .replaceAll("has runs", "runs")
    .replaceAll("has shows", "shows")
    .replaceAll("has performs", "performs")
    .replaceAll("has can", "can");
  const highDemand = cleaned.match(/^Before high-demand (.+?), which functional battery best complements the symmetry findings\?$/);
  if (highDemand) {
    cleaned = `Before high-demand exposure, which functional battery best complements the symmetry findings in this ${highDemand[1].replace(/^a /, "")} ?`.replace(" ?", "?");
  }
  if (/^Which dynamic-balance measure would add relevant information before advancing this a /.test(cleaned)) {
    cleaned = "Which dynamic-balance measure would add relevant information before advancing this athlete toward sport-specific demands?";
  }
  if (cleaned !== item.text) recordChange(files.rtp, item.id, "text", item.text, cleaned, "Repair generated duplicate words and malformed RTP stem wording.");
  item.text = cleaned;
}

const rtpOptionRewrites: Record<string, string> = {
  "Progress from controlled to reactive tasks; monitor quality and next-day response.": "Progress from controlled to reactive tasks; monitor next-day response.",
  "Discuss the feared task, goals, uncertainty and graded options with the team.": "Discuss feared task, goals, and graded options with the team.",
  "Delayed symptoms or effusion show that the preceding load was not tolerated.": "Delayed symptoms or effusion show the load was not tolerated.",
  "Reduce the provoking load, retain tolerable rehabilitation, and reassess.": "Reduce provoking load, retain rehabilitation, and reassess.",
  "Track loading symptoms, effusion or stiffness, ROM, performance and next-day function.": "Track loading symptoms, ROM, performance, and next-day function.",
  "progress repeated tennis-specific accelerations below maximal speed before full match play": "Progress tennis accelerations below maximal speed before match play",
  "Judge readiness from symptoms, capacity, sport demands and risk context.": "Judge readiness from symptoms, capacity, demands and risk.",
  "Reactive strength index from jump height divided by ground-contact time.": "Reactive strength index: jump height divided by contact time.",
  "Interpret the asymmetry with ROM, symptoms, movement quality and sport demands.": "Interpret asymmetry with ROM, symptoms, quality and sport demands.",
  "A deconditioned reference limb can make bilateral weakness look symmetrical.": "A deconditioned reference limb can mask bilateral weakness.",
  "Repeated single-, triple- and crossover-hop tests with landing quality and next-day response recorded.": "Repeated single-, triple- and crossover hops with landing and next-day response.",
  "The asymmetry warrants targeted rehabilitation before unrestricted cutting.": "The asymmetry warrants targeted work before unrestricted cutting.",
  "Progress from controlled to reactive sport tasks while monitoring quality and next-day response.": "Progress from controlled to reactive tasks; monitor quality and next-day response.",
  "Assess the fear, use graded supported exposure, and include the athlete in planning the next progression.": "Assess fear, use graded exposure, and include the athlete in planning.",
  "It cannot prove tissue healing or replace physical, functional and sport-demand testing.": "It cannot prove healing or replace functional and sport-demand testing.",
  "Discuss the feared task, uncertainty, goals and graded options with the athlete and performance team.": "Discuss the feared task, goals, uncertainty and graded options with the team.",
  "Repeated successful sport exposures with acceptable symptoms, movement quality and recovery.": "Repeated sport exposures with acceptable symptoms, quality and recovery.",
  "Y-Balance reach asymmetry interpreted with trunk control, strength and the sport task.": "Interpret Y-Balance asymmetry with control, strength and the sport task.",
  "Repeat sport efforts with acceptable symptoms, movement and next-day recovery.": "Repeat sport efforts with acceptable symptoms, movement and recovery.",
  "The delayed symptom or effusion indicates that the preceding sport load has not yet been tolerated.": "Delayed symptoms or effusion show that the preceding load was not tolerated.",
  "Reduce or modify the provoking load, retain tolerable rehabilitation, and reassess the response.": "Reduce the provoking load, retain tolerable rehabilitation, and reassess.",
  "Interpret pain and effusion with function, examination and sport demands.": "Interpret pain and effusion with function and sport demands.",
  "Track symptoms during/after loading, effusion or stiffness, ROM, performance and next-day function.": "Track loading symptoms, effusion or stiffness, ROM, performance and next-day function.",
  "Modify the next load and address recovery while monitoring symptoms, well-being and performance.": "Modify the next load and address recovery while monitoring response.",
  "Responses vary; no universal workload threshold fits every athlete or context.": "Responses vary; no single workload threshold fits every athlete.",
  "Review load response, recovery, symptoms, performance and the planned sport demand.": "Review load response, recovery, symptoms, performance and demand.",
  "Review sleep, soreness, illness symptoms, wellness, performance and recent load.": "Review sleep, soreness, wellness, performance and recent load.",
  "The pattern suggests reduced recovery capacity; review context rather than diagnose from one measure.": "Review context; one measure cannot diagnose recovery capacity.",
  "Protect sleep opportunity, review non-sport stressors and adjust the next demanding load to the response.": "Protect sleep, review non-sport stressors, and adjust the next load.",
  "Look for repeated improvement in symptoms, wellness, performance and load tolerance.": "Look for repeated improvement in symptoms, performance and load tolerance.",
  "Return to participation: activity has resumed below athlete desired sport level.": "Return to participation means activity below the desired sport level.",
  "The athlete, clinician and relevant performance staff should share information and agree on the plan.": "Athlete, clinician and performance staff should agree on the plan.",
  "Discuss uncertainty, goals, risk and alternatives; document a graded plan with review points.": "Discuss risk and alternatives; document a graded plan with review points.",
  "Modify the exposure and reassess athlete response before progressing toward the target.": "Modify exposure and reassess response before progressing.",
  "Combine symptoms, capacity, psychology and load response; no single test clears the athlete.": "Combine symptoms, capacity, psychology and load response; no single test clears.",
  "Control volume and intensity; progress only when the athlete tolerates the demand.": "Control volume and intensity; progress when the demand is tolerated.",
  "Agree on a staged plan with athlete and team, risks, monitoring and review criteria.": "Agree on a staged plan with the team, risks and review criteria.",
  "Investigate the reach asymmetry and control deficit before progressing high-speed unilateral tasks.": "Investigate reach asymmetry and control before high-speed unilateral tasks.",
  "Use it with repeated sport assessment, not as a standalone clearance rule.": "Use it with repeated sport assessment, not alone.",
};
for (const item of banks.rtp) {
  item.options = item.options.map((option, index) => {
    const rewritten = rtpOptionRewrites[option];
    if (rewritten) recordChange(files.rtp, item.id, `options[${index}]`, option, rewritten, "Reduce repeated answer-length giveaway while preserving meaning.");
    return rewritten ?? option;
  });
}

const emergencyOptionRewrites: Record<string, string> = {
  "A normal heart rate alone": "A normal heart rate without other warning signs",
  "The athlete’s request to continue": "The athlete's request to continue despite no red flags",
  "A superficial limb abrasion": "A superficial limb abrasion without neurovascular change",
};
for (const item of banks.emergency) {
  item.options = item.options.map((option, index) => {
    const rewritten = emergencyOptionRewrites[option];
    if (rewritten) recordChange(files.emergency, item.id, `options[${index}]`, option, rewritten, "Add a concise clinically meaningful qualifier to reduce answer-length giveaway.");
    return rewritten ?? option;
  });
}

// Fix the remaining fragmentary spine alternatives called out by the audit.
const fragmentRepairs: Array<[string, number, string]> = [
  ["c-spine-028-q1", 1, "Leg symptoms aggravated by spinal loading, not isolated local hamstring massage"],
  ["c-spine-031-q3", 1, "Consider a non-musculoskeletal or surgical cause when red flags are present"],
  ["c-spine-035-q1", 2, "They increase confidence when findings agree with the history and examination"],
  ["c-spine-039-q1", 2, "It requires clinical correlation because imaging may be present without familiar symptoms"],
  ["c-spine-040-q1", 1, "As coexisting adductor-related and pubic-related groin pain"],
  ["c-spine-040-q2", 2, "Recognizable adductor pain with tenderness and pain on resisted adduction"],
  ["c-spine-040-q3", 1, "Use passive treatment alone without active loading"],
  ["c-spine-040-q3", 2, "Return directly to match intensity before full competition"],
  ["c-spine-040-q3", 3, "Progress pelvic/adductor capacity before cutting/contact"],
  ["c-spine-041-q1", 0, "The lumbar spine and neural pathways"],
  ["c-spine-041-q3", 3, "The athlete's main recognizable pain is not reproduced by the adductor examination"],
  ["c-spine-045-q3", 0, "Combine bowling exposure with symptoms, sleep, fatigue, and recovery response"],
  ["c-spine-048-q3", 2, "Restricted hip movement can alter pelvic motion and force distribution"],
];
for (const [id, index, value] of fragmentRepairs) {
  const item = question("spine", id);
  const before = item.options[index];
  recordChange(files.spine, id, `options[${index}]`, before, value, "Complete fragmentary option identified during factual review.");
  item.options[index] = value;
}

// Final editorial cleanup of generated case wording. These changes do not
// alter the clinical facts or answer keys, but remove obvious grammar defects
// and truncated repeated clues from the displayed questions.
for (const item of banks.upper) {
  if (typeof item.passage === "string") {
    const cleaned = item.passage
      .replaceAll("reviewed after after", "reviewed after")
      .replaceAll("a athlete", "an athlete")
      .replaceAll("a outside hitter", "an outside hitter")
      .replaceAll("a attacker", "an attacker");
    if (cleaned !== item.passage) recordChange(files.upper, item.id, "passage", item.passage, cleaned, "Correct repeated or malformed article wording in the case passage.");
    item.passage = cleaned;
  }
}
for (const item of banks.lower) {
  const cleaned = item.text.replace(/\s+For this case, the key recorded feature is:.*…\.?$/, " Use the complete examination and load-response findings in the case passage.");
  if (cleaned !== item.text) recordChange(files.lower, item.id, "text", item.text, cleaned, "Replace a truncated ellipsis clue with a complete reference to the displayed case passage.");
  item.text = cleaned;
}

const spinePaddingTails = [
  " in this case for this athlete with stable recovery given these findings",
  " in this case for this athlete given these findings with stable recovery",
  " in this case for this athlete with stable recovery",
  " in this case for this athlete given these findings",
  " in this case for this athlete during the return phase",
  " in this case for this athlete",
  " in this case",
];
for (const item of banks.spine) {
  item.options = item.options.map((option, index) => {
    let cleaned = option;
    for (const tail of spinePaddingTails) {
      if (cleaned.endsWith(tail)) cleaned = cleaned.slice(0, -tail.length).trimEnd();
    }
    if (cleaned !== option) recordChange(files.spine, item.id, `options[${index}]`, option, cleaned, "Remove repetitive case-specific padding from the option while preserving its proposition.");
    return cleaned;
  });
}

// Shorten a selected set of lengthy keyed spine propositions after removing
// the generated tails. These are concise restatements of the same clinical
// claims and keep the global correct-option length signal below the review
// target without padding distractors artificially.
const spineOptionRewrites: Array<[string, number, string]> = [
  ["c-spine-001-q4", 1, "Repeated lumbar extension and rotation increase pars loading."],
  ["c-spine-003-q1", 0, "Anterior translation of one vertebra relative to the next"],
  ["c-spine-003-q2", 2, "Growth and loading may worsen vertebral slip or symptoms."],
  ["c-spine-003-q3", 1, "Neurological screen plus hip examination"],
  ["c-spine-004-q1", 1, "Pain reproduced by lumbar extension-rotation"],
  ["c-spine-004-q2", 3, "A modifiable associated impairment, not the sole diagnosis"],
  ["c-spine-004-q4", 0, "Progressive weakness or bowel/bladder change"],
  ["c-spine-005-q1", 2, "Mechanical lumbar bone-stress or posterior-element injury"],
  ["c-spine-005-q2", 3, "Medical review with examination-guided imaging"],
  ["c-spine-005-q3", 0, "It provokes pain but does not establish stability or treatment need"],
  ["c-spine-006-q1", 1, "Focal pain at rest or night in a young athlete"],
  ["c-spine-006-q2", 3, "Lumbar pars stress injury from repeated extension"],
  ["c-spine-006-q4", 2, "Fever, weight loss, or non-mechanical pain"],
  ["c-spine-007-q2", 2, "New dermatomal loss, reflex change, or myotomal weakness"],
  ["c-spine-007-q3", 1, "Progressive trunk, hip, and sport-specific control"],
  ["c-spine-007-q4", 3, "Progressive slip, disabling pain, or neurological compromise"],
  ["c-spine-008-q1", 1, "Repeated loaded lumbar extension-rotation"],
  ["c-spine-009-q1", 0, "Posterior-element pain aggravated by extension-rotation"],
  ["c-spine-009-q3", 2, "Neutral-range hip and trunk strengthening"],
  ["c-spine-009-q4", 1, "Graded pain-free extension-rotation tasks"],
  ["c-spine-010-q3", 0, "Familiar focal pain during or after progression"],
  ["c-spine-010-q4", 2, "Bone capacity, bowling load, and symptoms vary between athletes"],
  ["c-spine-011-q1", 2, "Posterior-element stress injury from repetitive extension"],
  ["c-spine-011-q2", 1, "Groin pain with restricted hip motion"],
  ["c-spine-011-q4", 3, "New weakness, saddle anaesthesia, or bladder dysfunction"],
  ["c-spine-012-q1", 2, "Low-grade anterior translation under 25%"],
  ["c-spine-012-q4", 0, "Myotomes, dermatomes, reflexes, and neurodynamics"],
  ["c-spine-013-q1", 0, "Local pain without distal or neurological signs"],
  ["c-spine-013-q2", 3, "Neutral trunk; reduce loaded extension-rotation"],
  ["c-spine-014-q2", 0, "Pain that increases later that day or next morning"],
  ["c-spine-014-q4", 2, "Hip extension and thoracic mobility"],
  ["c-spine-015-q4", 3, "Recurrent focal pain or new neurological findings"],
  ["c-spine-016-q4", 0, "Other restrictions can shift extension demand to the lumbar spine"],
  ["c-spine-017-q2", 2, "Neutral low-load hip control and trunk stabilization"],
  ["c-spine-017-q4", 1, "It confirms structural healing of the pars injury"],
  ["c-spine-018-q4", 2, "Progressive motor loss, saddle anaesthesia, or bladder change"],
  ["c-spine-019-q1", 0, "Neural irritability provoked by leg movement"],
  ["c-spine-019-q2", 1, "Myotomal weakness with reflex or sensory change"],
  ["c-spine-019-q4", 3, "Worsening weakness or bladder-control loss"],
  ["c-spine-020-q1", 1, "SLR may reflect hamstring or interface restriction"],
  ["c-spine-021-q1", 0, "It suggests neural involvement but does not identify one lesion"],
  ["c-spine-024-q1", 1, "It raises suspicion of nerve-root or disc irritation"],
  ["c-spine-024-q2", 3, "Myotomes, dermatomes, and reflexes"],
  ["c-spine-028-q1", 1, "Spinal loading aggravates the leg symptoms"],
  ["c-spine-030-q2", 3, "It reproduces pain in the symptomatic adductor region"],
  ["c-spine-030-q3", 0, "Progress active adduction loading"],
  ["c-spine-031-q2", 2, "It does not exclude inguinal-related pain"],
  ["c-spine-025-q2", 3, "Extension may be a directional preference; reassess repeatedly"],
  ["c-spine-026-q4", 2, "Progress when repeated sessions tolerate the current dose"],
];
for (const [id, index, value] of spineOptionRewrites) {
  const item = question("spine", id);
  const before = item.options[index];
  recordChange(files.spine, id, `options[${index}]`, before, value, "Shorten a keyed spine proposition after removing generated padding while preserving the sourced claim.");
  item.options[index] = value;
}

// Restore exact per-theme answer balance after content edits by swapping whole
// option positions, never changing the option text or the keyed meaning.
function rebalance(file: keyof typeof files) {
  const target = banks[file].length / 4;
  const counts = [0, 0, 0, 0];
  for (const item of banks[file]) counts[item.correct]++;
  for (let desired = 0; desired < 4; desired++) {
    while (counts[desired] < target) {
      const donor = counts.findIndex((count) => count > target);
      if (donor < 0) throw new Error(`Unable to rebalance ${file}`);
      const item = banks[file].find((candidate) => candidate.correct === donor);
      if (!item) throw new Error(`No donor question for ${file}`);
      const beforeOptions = [...item.options];
      const beforeCorrect = item.correct;
      [item.options[donor], item.options[desired]] = [item.options[desired], item.options[donor]];
      item.correct = desired;
      recordChange(files[file], item.id, "options", beforeOptions, item.options, "Rebalance answer positions after content correction.");
      recordChange(files[file], item.id, "correct", beforeCorrect, item.correct, "Rebalance answer positions after content correction.");
      counts[donor]--;
      counts[desired]++;
    }
  }
}
for (const file of Object.keys(files) as Array<keyof typeof files>) rebalance(file);

for (const [name, path] of Object.entries(files)) {
  fs.writeFileSync(path, `${JSON.stringify(banks[name as keyof typeof files], null, 2)}\n`);
}
fs.writeFileSync(
  "research/section_c_repair_log.json",
  `${JSON.stringify({
    version: 1,
    generatedAt: new Date().toISOString(),
    purpose: "Repair factual, grammatical, provenance-preserving, and option-length defects identified by the independent Section C audit.",
    changeCount: changes.length,
    changes,
  }, null, 2)}\n`,
);
console.log(`Applied ${changes.length} explainable Section C repairs.`);
