export type SourceKind = "official" | "guideline" | "consensus" | "textbook" | "research";

export interface SourceReference {
  id: string;
  title: string;
  kind: SourceKind;
  publisher: string;
  url?: string;
  scope: string;
}

/**
 * Compact provenance catalog for the authored bank. These are the references
 * used to frame each item; current or disputed claims are phrased cautiously
 * in the question itself and should be checked against the linked source.
 */
export const SOURCE_CATALOG: SourceReference[] = [
  { id: "sai-notification-2026", title: "Final Notification for Performance Analyst Regular Recruitment", kind: "official", publisher: "Sports Authority of India", scope: "Exam structure, syllabus, SAI schemes and governance context" },
  { id: "wada-prohibited-list-2026", title: "2026 Prohibited List", kind: "official", publisher: "World Anti-Doping Agency", url: "https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list", scope: "Prohibited substances, methods and anti-doping terminology" },
  { id: "nsca-essentials-5", title: "Essentials of Strength Training and Conditioning", kind: "textbook", publisher: "National Strength and Conditioning Association", scope: "Strength, conditioning, loading, periodisation and testing" },
  { id: "acsm-getp-12", title: "ACSM's Guidelines for Exercise Testing and Prescription", kind: "guideline", publisher: "American College of Sports Medicine", url: "https://acsm.org/education-resources/books/guidelines-exercise-testing-prescription/", scope: "Exercise physiology, testing, safety and prescription" },
  { id: "neumann-kinesiology", title: "Kinesiology of the Musculoskeletal System", kind: "textbook", publisher: "Elsevier", scope: "Kinesiology, biomechanics, gait and movement analysis" },
  { id: "magee-orthopaedic-assessment", title: "Orthopedic Physical Assessment", kind: "textbook", publisher: "Elsevier", scope: "Clinical examination, special tests and assessment" },
  { id: "kisner-therapeutic-exercise", title: "Therapeutic Exercise: Foundations and Techniques", kind: "textbook", publisher: "F.A. Davis", scope: "Exercise therapy, rehabilitation and progression" },
  { id: "watson-electrotherapy", title: "Electrotherapy: Evidence-Based Practice", kind: "textbook", publisher: "Elsevier", scope: "Electrotherapy, modalities, indications and contraindications" },
  { id: "osullivan-rehabilitation", title: "Physical Rehabilitation", kind: "textbook", publisher: "F.A. Davis", scope: "Neurological rehabilitation and motor control" },
  { id: "brukner-khan-clinical-sports-medicine", title: "Brukner and Khan's Clinical Sports Medicine", kind: "textbook", publisher: "McGraw Hill Education", scope: "Sports injury mechanisms, diagnosis and rehabilitation" },
  { id: "foundations-sport-exercise-psychology", title: "Foundations of Sport and Exercise Psychology", kind: "textbook", publisher: "Human Kinetics", scope: "Motivation, anxiety, confidence and psychological skills" },
  { id: "ioc-reds-2023", title: "IOC consensus statement on Relative Energy Deficiency in Sport: 2023 update", kind: "consensus", publisher: "International Olympic Committee", url: "https://pubmed.ncbi.nlm.nih.gov/37752011/", scope: "Energy availability and athlete health" },
  { id: "ioc-sports-nutrition-consensus", title: "IOC consensus statement on sports nutrition", kind: "consensus", publisher: "International Olympic Committee", scope: "Fueling, hydration and supplementation" },
  { id: "ioc-load-illness-2016", title: "IOC consensus statement on load in sport and risk of illness", kind: "consensus", publisher: "International Olympic Committee", url: "https://pubmed.ncbi.nlm.nih.gov/27535991/", scope: "Training load, recovery, travel and illness risk" },
  { id: "world-physiotherapy-ebp-2023", title: "World Physiotherapy evidence-based practice policy", kind: "guideline", publisher: "World Physiotherapy", url: "https://world.physio/policy/ps-ebp", scope: "Evidence quality, uncertainty and clinical reasoning" },
  { id: "ioc-concussion-amsterdam-2022", title: "Consensus statement on concussion in sport: Amsterdam 2022", kind: "consensus", publisher: "Concussion in Sport Group / BJSM", url: "https://bjsm.bmj.com/content/57/11/695", scope: "Concussion recognition, rehabilitation and return to sport" },
  { id: "aspetar-acl-cpg-2023", title: "Aspetar clinical practice guideline on rehabilitation after ACL reconstruction", kind: "guideline", publisher: "British Journal of Sports Medicine", url: "https://bjsm.bmj.com/content/57/9/500", scope: "ACL rehabilitation and criteria-based return to sport" },
  { id: "london-hamstring-consensus-2023", title: "London International Consensus on Hamstring Injuries", kind: "consensus", publisher: "British Journal of Sports Medicine", url: "https://bjsm.bmj.com/content/57/5/278", scope: "Hamstring rehabilitation, running exposure and return to sport" },
  { id: "apta-lateral-ankle-cpg-2021", title: "Lateral Ankle Ligament Sprains Clinical Practice Guideline", kind: "guideline", publisher: "Academy of Orthopaedic Physical Therapy / JOSPT", url: "https://pubmed.ncbi.nlm.nih.gov/33789434/", scope: "Ankle sprain assessment and rehabilitation" },
  { id: "olympics-official", title: "Olympic Games official results and programme", kind: "official", publisher: "International Olympic Committee", url: "https://olympics.com/", scope: "Olympic movement and host-city facts" },
  { id: "asian-games-official", title: "Asian Games official information", kind: "official", publisher: "Olympic Council of Asia", url: "https://oca.asia/", scope: "Asian Games facts" },
  { id: "sports-governance-official", title: "SAI and Ministry of Youth Affairs and Sports official information", kind: "official", publisher: "Government of India", url: "https://sportsauthorityofindia.nic.in/", scope: "Indian sports institutions, schemes and governance" },
];

export const SOURCE_CATALOG_BY_ID = new Map(SOURCE_CATALOG.map((source) => [source.id, source]));

function includesAny(value: string, terms: string[]): boolean {
  return terms.some((term) => value.includes(term));
}

export function sourceIdForQuestion(question: { section: string; topic: string; subtopic: string; text: string; explanation: string }): string {
  const value = (question.topic + " " + question.subtopic + " " + question.text + " " + question.explanation).toLowerCase();

  if (question.section === "A2") {
    if (includesAny(value, ["anti-doping", "wada", "nada", "prohibited", "whereabouts", "tue", "adverse analytical"])) return "wada-prohibited-list-2026";
    if (includesAny(value, ["olympic", "asian games", "paralympic", "commonwealth", "world cup", "cas", "international testing agency"])) return includesAny(value, ["asian games"]) ? "asian-games-official" : "olympics-official";
    if (includesAny(value, ["governance", "posh", "sports development code", "nsnis", "sai", "khelo", "tops", "national sports", "sports authority"])) return "sports-governance-official";
    return "sai-notification-2026";
  }

  if (includesAny(value, ["anti-doping", "wada", "nada", "prohibited", "whereabouts", "tue"])) return "wada-prohibited-list-2026";
  if (includesAny(value, ["psychology", "motivation", "anxiety", "self-efficacy", "burnout", "cohesion", "mental"])) return "foundations-sport-exercise-psychology";
  if (includesAny(value, ["strength and conditioning", "periodization", "periodisation", "resistance", "1rm", "velocity-based", "plyometric"])) return "nsca-essentials-5";
  if (includesAny(value, ["nutrition", "hydration", "carbohydrate", "protein", "energy availability", "red-s", "supplement"])) return includesAny(value, ["red-s", "energy availability"]) ? "ioc-reds-2023" : "ioc-sports-nutrition-consensus";
  if (includesAny(value, ["recovery", "hrv", "sleep", "training load", "fatigue", "travel", "monitoring", "playerload"])) return "ioc-load-illness-2016";
  if (includesAny(value, ["biomechanics", "kinematic", "kinetic", "gait", "force plate", "joint mechanics"])) return "neumann-kinesiology";
  if (includesAny(value, ["electrotherapy", "ultrasound", "tens", "laser", "cryotherapy", "interferential", "shockwave"])) return "watson-electrotherapy";
  if (includesAny(value, ["neurological", "stroke", "spasticity", "motor control", "constraint-induced"])) return "osullivan-rehabilitation";
  if (includesAny(value, ["acl", "hamstring", "ankle sprain", "sports injury", "return to sport", "tendinopathy", "athlete injury"])) return "brukner-khan-clinical-sports-medicine";
  if (includesAny(value, ["assessment", "special test", "diagnostic", "anatomy", "range of motion", "goniometr"])) return "magee-orthopaedic-assessment";
  if (includesAny(value, ["exercise therapy", "rehabilitation", "strengthening", "stretch", "mobilization", "manual therapy"])) return "kisner-therapeutic-exercise";
  if (includesAny(value, ["concussion", "scat", "head injury"])) return "ioc-concussion-amsterdam-2022";
  if (includesAny(value, ["research", "statistics", "reliability", "validity", "evidence", "confidence interval"])) return "world-physiotherapy-ebp-2023";
  return question.section === "C" ? "brukner-khan-clinical-sports-medicine" : "acsm-getp-12";
}
