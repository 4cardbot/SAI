import type { Difficulty, Question, Section } from "../types";
import { hashSeed, shuffle } from "../random";
import { A1_FACTS, A2_FACTS, B_FACTS, VARIANT_DIFFICULTIES, type FactSeed } from "./facts";

const FACT_STEMS = [
  "Which statement is most accurate regarding {subject}?",
  "A performance analyst is reviewing {subject}. Which interpretation is most defensible?",
  "When applying {subject} in an athlete-support setting, which option should guide practice?",
  "Which option correctly links {subject} with its primary implication?",
  "An athlete-support team is discussing {subject}. Which conclusion is best supported?",
  "Which response demonstrates sound sports-science reasoning about {subject}?",
  "For a physiotherapist working with athletes, what is the key point about {subject}?",
  "Which statement about {subject} avoids the most common interpretation error?",
  "A test or intervention is being selected for {subject}. Which principle is most appropriate?",
  "Which explanation best accounts for the practical importance of {subject}?",
  "If an athlete presents with a question about {subject}, which answer is most defensible?",
  "Which option would be safest to communicate to a coach about {subject}?",
  "Which statement best distinguishes {subject} from a related concept?",
  "Which finding would be most consistent with the accepted interpretation of {subject}?",
  "In a high-performance environment, which action best reflects understanding of {subject}?",
  "Which option should be selected when a question concerns {subject}?",
];

const A2_STEMS = [
  "Which recent sports-awareness statement is correct about {subject}?",
  "A candidate is revising {subject}. Which answer is accurate?",
  "Which option correctly identifies {subject}?",
  "Which statement best distinguishes {subject} from the other choices?",
  "For the stated coverage period, what is correct about {subject}?",
  "Which response would be appropriate in a general sports-awareness section about {subject}?",
  "Which fact should an Indian sports-science professional know about {subject}?",
  "Which option gives the correct official position on {subject}?",
];

function expandFact(fact: FactSeed, section: Exclude<Section, "C">, factIndex: number, variants: number): Question[] {
  const stems = section === "A2" ? A2_STEMS : FACT_STEMS;
  return Array.from({ length: variants }, (_, variantIndex) => {
    const text = stems[variantIndex % stems.length].replace("{subject}", fact.subject);
    const options = shuffle([fact.answer, ...fact.distractors], hashSeed(`${section}-${factIndex}-${variantIndex}`));
    return {
      id: `${section}-${String(factIndex + 1).padStart(3, "0")}-${String(variantIndex + 1).padStart(2, "0")}`,
      section,
      topic: fact.topic,
      subtopic: fact.subtopic,
      difficulty: VARIANT_DIFFICULTIES[variantIndex % VARIANT_DIFFICULTIES.length],
      text,
      options,
      correct: options.indexOf(fact.answer),
      explanation: fact.explanation,
      source: fact.source,
      sourceUrl: fact.sourceUrl,
      asOf: fact.asOf,
    };
  });
}

interface CaseBlueprint {
  topic: string;
  sport: string;
  issue: string;
  findings: string;
  priority: string;
  monitor: string;
  progression: string;
  source: string;
  sourceUrl?: string;
  questions: Array<{
    prompt: string;
    answer: string;
    distractors: [string, string, string];
    explanation: string;
  }>;
}

const CASE_BLUEPRINTS: CaseBlueprint[] = [
  {
    topic: "Hamstring rehabilitation", sport: "sprinting", issue: "a high-speed hamstring strain", findings: "a sudden posterior-thigh pain event during maximal acceleration, local tenderness and reduced high-speed tolerance", priority: "protect the tissue while beginning pain-monitored movement and a graded loading plan", monitor: "pain response, strength in lengthened positions and progressive running exposure", progression: "advance from controlled isometrics and strength to lengthened loading, acceleration and maximal-speed exposure", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which interpretation best fits the presentation?", answer: "The mechanism and findings are consistent with a hamstring muscle injury that needs examination and graded rehabilitation.", distractors: ["The athlete has normal training soreness and should sprint immediately", "A diagnosis can be made from the stopwatch alone", "The symptoms prove a bone fracture without further assessment"], explanation: "A high-speed pain event with local tenderness and loss of function warrants a structured clinical examination and load modification." },
      { prompt: "What is the most appropriate initial management emphasis?", answer: "Protect the injured tissue while maintaining appropriately dosed, pain-monitored movement.", distractors: ["Aggressive stretching into sharp pain", "Immediate maximal sprinting to test the tissue", "Complete inactivity until every symptom disappears"], explanation: "Early rehabilitation balances protection and appropriate activity; both excessive provocation and unnecessary immobilization can delay progress." },
      { prompt: "Which outcome is most useful for monitoring progression?", answer: "A repeated profile of symptoms, strength and running exposure under standardized conditions.", distractors: ["One pain score collected without context", "The athlete's body mass alone", "A single flexibility value treated as a clearance"], explanation: "Return decisions benefit from repeated, task-relevant measures rather than one isolated marker." },
      { prompt: "Which progression is most defensible before unrestricted competition?", answer: "Progressive lengthened loading followed by graded acceleration and maximal-speed exposure.", distractors: ["Skip running and rely only on passive treatment", "Move from rest directly to a full match", "Use stretching alone as the final criterion"], explanation: "The rehabilitation must expose the athlete to the force and speed demands that contributed to the injury." },
    ],
  },
  {
    topic: "Ankle rehabilitation", sport: "basketball", issue: "a lateral ankle sprain", findings: "inversion trauma, lateral swelling, tenderness near the lateral ligament complex and pain with cutting", priority: "exclude fracture or severe instability and restore protected loading", monitor: "weight-bearing tolerance, range, swelling, balance and cutting response", progression: "advance from protected range and strength to perturbation, jumping and sport-specific change of direction", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which injury pattern is most likely?", answer: "A lateral ankle sprain, commonly involving the anterior talofibular ligament, pending examination.", distractors: ["An isolated Achilles rupture", "A shoulder dislocation", "A lumbar disc injury"], explanation: "Inversion with lateral tenderness is a typical pattern for a lateral ankle ligament injury, but fracture screening remains important." },
      { prompt: "What should be prioritized before advanced drills?", answer: "Safe weight-bearing, swelling control, range of motion and basic strength.", distractors: ["Maximal cutting while swollen", "Only passive massage", "Avoiding all ankle loading for the season"], explanation: "Early goals are symptom and function guided. The athlete needs a safe base before high-demand change-of-direction work." },
      { prompt: "Which test domain is especially relevant before return to court?", answer: "Single-leg balance, hopping and change-of-direction quality under graded load.", distractors: ["A resting body-mass index only", "A grip-strength test only", "A seated breathing rate only"], explanation: "Court sport demands include single-leg control, landing and rapid redirection, so functional testing should reflect those demands." },
      { prompt: "Which progression best matches the case?", answer: "Protected movement, strength and balance followed by jumping and sport-specific cutting.", distractors: ["Directly from compression to a full game", "Only ankle stretching without loading", "Avoiding all perturbation permanently"], explanation: "A graded return exposes the ankle to progressively relevant mechanical and perceptual demands." },
    ],
  },
  {
    topic: "ACL rehabilitation", sport: "football", issue: "a post-ACL reconstruction return-to-sport decision", findings: "near-normal daily function but residual quadriceps asymmetry, apprehension during deceleration and an upcoming congested schedule", priority: "use a criteria-informed, multidisciplinary decision rather than the calendar alone", monitor: "strength symmetry, landing and deceleration quality, symptoms, confidence and training exposure", progression: "increase running, deceleration, reactive tasks and football-specific load while reassessing response", source: "Buckthorpe et al., Rehabilitation and Return to Sport after ACLR", questions: [
      { prompt: "Which conclusion is most defensible?", answer: "The athlete is not ready for unrestricted football solely because daily function is normal.", distractors: ["The calendar guarantees safe return", "Quadriceps asymmetry has no relevance", "Confidence makes physical testing unnecessary"], explanation: "Return to sport is a multidimensional decision. Strength, movement quality, psychological readiness and exposure must be integrated." },
      { prompt: "What should the team do next?", answer: "Address the deficits with targeted progression and communicate a shared, criteria-informed plan.", distractors: ["Clear the athlete to satisfy the fixture list", "Stop all training indefinitely", "Use only a passive modality"], explanation: "A multidisciplinary plan should close meaningful gaps while preserving appropriate sport preparation." },
      { prompt: "Which combination provides the strongest monitoring picture?", answer: "Objective strength and movement tests combined with symptoms, confidence and training response.", distractors: ["A single hop score only", "The athlete's age only", "The next match date only"], explanation: "No single test captures the full risk and performance context after ACL reconstruction." },
      { prompt: "Which progression is appropriate?", answer: "Advance deceleration, reactive and football-specific exposure only as quality and symptoms permit.", distractors: ["Return directly to unrestricted match minutes", "Avoid all cutting forever", "Replace physical progression with education alone"], explanation: "The athlete must regain the qualities and exposure required by the sport in a controlled manner." },
    ],
  },
  {
    topic: "Concussion", sport: "rugby", issue: "a suspected sport-related concussion", findings: "a head-impact event followed by dizziness, slowed responses and headache", priority: "remove from play and arrange appropriate medical assessment", monitor: "symptoms, cognition, balance and tolerance to graduated cognitive and physical activity", progression: "follow a graduated return-to-learn and return-to-sport pathway with medical oversight", source: "6th International Conference on Concussion in Sport", questions: [
      { prompt: "What is the safest immediate decision?", answer: "Remove the athlete from play and do not allow same-day return without appropriate medical assessment.", distractors: ["Return the athlete if symptoms briefly settle", "Use maximal exercise as a diagnostic test", "Ask a teammate to clear the athlete"], explanation: "Suspected concussion requires removal from risk and appropriate evaluation; continuing play can increase harm." },
      { prompt: "Which finding should guide progression?", answer: "Symptoms and function during a graduated increase in cognitive and physical load.", distractors: ["A single normal resting pulse", "The athlete's position in the team", "A jersey number"], explanation: "Concussion recovery is monitored through symptoms and functional tolerance, not an isolated physiological measure." },
      { prompt: "How should the physiotherapist communicate?", answer: "Document the event and findings, escalate to the medical lead and give clear activity instructions.", distractors: ["Keep the event informal", "Promise a fixed return date", "Share the diagnosis publicly"], explanation: "Clear documentation and escalation support safety, continuity and confidentiality." },
      { prompt: "Which return pathway is appropriate?", answer: "A graduated return with stepwise increases and regression if symptoms worsen.", distractors: ["Immediate full-contact training", "Complete inactivity until the next competition", "A single clearance test"], explanation: "Graduated progression allows symptoms and function to guide the pace of return." },
    ],
  },
  {
    topic: "Heat illness", sport: "distance running", issue: "possible exertional heat illness", findings: "collapse during a hot race, confusion, very hot skin and poor ability to follow instructions", priority: "activate emergency care and begin rapid whole-body cooling", monitor: "mental status, core temperature when appropriate and response to cooling", progression: "return only after medical assessment, recovery and review of heat-acclimation and hydration planning", source: "NATA Position Statement: Exertional Heat Illness", questions: [
      { prompt: "Which interpretation is most urgent?", answer: "The presentation is a medical emergency consistent with severe exertional heat illness.", distractors: ["Routine post-race fatigue", "A simple calf cramp", "A condition suitable for delayed cooling"], explanation: "Central nervous-system dysfunction with severe heat symptoms requires immediate emergency action." },
      { prompt: "What is the priority intervention?", answer: "Rapid whole-body cooling while activating emergency medical procedures.", distractors: ["Wait for transport before cooling", "Give a deep massage first", "Encourage maximal exercise"], explanation: "Time to cooling is critical in exertional heat stroke; emergency protocols should run in parallel." },
      { prompt: "Which monitoring information matters most initially?", answer: "Mental status and the athlete's response to rapid cooling, with appropriate temperature assessment.", distractors: ["A post-event body-fat estimate", "A single flexibility score", "Shoe wear pattern"], explanation: "Neurological status and cooling response are key in an emergency, with trained medical support guiding measurements." },
      { prompt: "What should inform future return?", answer: "Medical recovery plus review of acclimatization, environment, pacing and hydration strategy.", distractors: ["Immediate return because the athlete feels proud", "Only a new pair of shoes", "A blanket ban on all hot-weather exercise"], explanation: "Prevention and return require a systems review tailored to the athlete and environment." },
    ],
  },
  {
    topic: "Achilles rehabilitation", sport: "volleyball", issue: "load-related Achilles tendinopathy", findings: "morning stiffness, pain that rises with repeated jumping and reduced tolerance of high-volume practice", priority: "modulate load while building tendon and calf capacity", monitor: "24-hour pain response, calf strength, jump volume and sport exposure", progression: "advance from isometric and isotonic calf loading to energy-storage and repeated-jump tasks", source: "Silbernagel et al., Achilles Tendon Rehabilitation", questions: [
      { prompt: "Which management principle is most appropriate?", answer: "Use pain- and response-monitored load modification while progressively rebuilding calf-tendon capacity.", distractors: ["Stop every form of activity indefinitely", "Increase jump volume to test toughness", "Use passive treatment as the only intervention"], explanation: "Tendon rehabilitation generally requires an individualized loading progression and monitoring of the response over the following day." },
      { prompt: "Which measure is especially useful?", answer: "The next-day symptom response alongside calf strength and jump exposure.", distractors: ["Pain during one unrelated sitting task", "Body mass alone", "A single ultrasound image without context"], explanation: "Load tolerance and next-day response help calibrate progression for a reactive tendon presentation." },
      { prompt: "Why is energy-storage loading needed later?", answer: "Volleyball repeatedly demands rapid stretch-shortening and jumping force from the calf-tendon unit.", distractors: ["It prevents all soreness instantly", "It makes strength testing unnecessary", "It only trains the upper limb"], explanation: "Later rehabilitation should reproduce the relevant force and speed demands before full sport exposure." },
      { prompt: "Which return criterion is most defensible?", answer: "Capacity to tolerate progressive practice volume and repeated jumps without unacceptable response.", distractors: ["No pain during one slow walk", "A fixed number of rehabilitation sessions", "The coach's verbal assurance alone"], explanation: "Return should reflect the actual demands and the athlete's response to increasing exposure." },
    ],
  },
  {
    topic: "Patellofemoral pain", sport: "basketball", issue: "patellofemoral pain aggravated by repeated squats and stairs", findings: "anterior knee pain, reduced hip-knee control under fatigue and a recent increase in court volume", priority: "educate, adjust irritability and train relevant hip and knee capacity", monitor: "pain during agreed tasks, next-day response, strength and movement quality", progression: "increase strength, deceleration, landing and court volume gradually", source: "BJSM Patellofemoral Pain Best Practice Guide", questions: [
      { prompt: "Which interpretation is most useful?", answer: "The pain pattern may reflect load and movement-capacity mismatch rather than a single structural label.", distractors: ["Every anterior knee pain is a meniscal tear", "The athlete must avoid all knee flexion", "A visual alignment finding proves the cause"], explanation: "Patellofemoral pain is multifactorial; education, load management and exercise are commonly integrated." },
      { prompt: "What is an appropriate first step?", answer: "Reduce or modify aggravating volume while maintaining tolerable strength and functional exercise.", distractors: ["Stop all activity for months", "Increase deep squats despite escalating pain", "Use imaging as the only treatment"], explanation: "Load modification and active rehabilitation can reduce irritability while maintaining capacity." },
      { prompt: "Which monitoring approach is best?", answer: "Track symptoms during relevant tasks and the response over the next 24 hours.", distractors: ["Track only body mass", "Track only resting blood pressure", "Ignore training volume"], explanation: "The athlete's response to the actual exposure helps guide progression better than a single isolated measure." },
      { prompt: "Which progression matches basketball demands?", answer: "Strength and control followed by graded landing, deceleration and court-volume exposure.", distractors: ["Only passive patellar mobilization", "Immediate unrestricted competition", "Avoiding all landing practice"], explanation: "The program must prepare the athlete for the force, speed and volume of court actions." },
    ],
  },
  {
    topic: "Shoulder instability", sport: "handball", issue: "recurrent anterior shoulder instability", findings: "apprehension in abduction-external rotation and poor control during high-velocity throwing", priority: "medical examination plus progressive dynamic stability and throwing-load management", monitor: "apprehension, range, strength, control and throwing volume", progression: "build cuff/scapular capacity, closed-chain control and graded throwing exposure", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which concern should be prioritized?", answer: "Recurrent instability requires assessment of structural status and dynamic control before high-speed throwing.", distractors: ["The athlete needs only more passive stretching", "Throwing volume has no relevance", "Pain-free range guarantees stability"], explanation: "Instability presentations need appropriate medical and functional assessment; high-risk positions and loads should be managed." },
      { prompt: "Which exercise emphasis is appropriate?", answer: "Progressive rotator-cuff and scapular control with task-specific stability.", distractors: ["Only maximal bench pressing", "Avoiding all shoulder loading", "Only neck flexibility"], explanation: "Dynamic stability depends on coordinated shoulder and scapular capacity, not one isolated muscle." },
      { prompt: "Which variable needs careful monitoring?", answer: "Throwing volume and symptom or apprehension response.", distractors: ["Only the athlete's height", "Only grip color", "Only resting body temperature"], explanation: "Throwing load is a meaningful exposure and should progress alongside capacity and confidence." },
      { prompt: "Which return progression is best?", answer: "Controlled drills followed by graded velocity, distance, volume and competitive throwing.", distractors: ["Return directly to full throwing", "Passive modalities without throwing exposure", "Avoiding overhead action permanently"], explanation: "Sport-specific exposure must be progressed, not omitted, when preparing for handball." },
    ],
  },
  {
    topic: "Low-back pain", sport: "weightlifting", issue: "load-sensitive low-back pain during a training block", findings: "pain with repeated flexion under fatigue but no neurological deficit or systemic red flag", priority: "screen for red flags and modify provocative loading while retaining safe activity", monitor: "symptoms, technique, fatigue, training load and neurological status", progression: "rebuild trunk and hip strength, hinge capacity and progressively heavier sport-specific lifting", source: "International Olympic Committee Back Pain Consensus", questions: [
      { prompt: "Which clinical reasoning is most appropriate?", answer: "The absence of red flags supports conservative management while continuing to monitor for change.", distractors: ["All back pain requires bed rest", "Pain during flexion proves a disc diagnosis", "A normal neurological screen means no plan is needed"], explanation: "History and examination guide the level of care. Symptoms must be interpreted without overdiagnosing from one movement." },
      { prompt: "What should the physiotherapist modify first?", answer: "The provoking load, fatigue and technique demands while preserving tolerable movement.", distractors: ["All exercise regardless of symptoms", "Only the athlete's footwear", "Every training activity for the season"], explanation: "Load modification should be specific and reversible rather than an indiscriminate ban on movement." },
      { prompt: "Which monitoring domain is essential?", answer: "Neurological symptoms and changes in function in addition to pain and training response.", distractors: ["Only muscle soreness", "Only body composition", "Only sleep duration"], explanation: "A change in neurological status would alter the clinical pathway and needs timely escalation." },
      { prompt: "Which progression best matches weightlifting?", answer: "Controlled hinge and trunk capacity followed by graded barbell load, speed and fatigue exposure.", distractors: ["Return directly to maximal lifts", "Only passive heat", "Avoid all hip hinging"], explanation: "The athlete needs progressive exposure to the actual positions, forces and fatigue of lifting." },
    ],
  },
  {
    topic: "Bone stress injury", sport: "distance running", issue: "a possible tibial bone stress injury", findings: "focal bony tenderness, pain that has progressed from running-only to walking and a recent mileage increase", priority: "stop impact loading and arrange timely medical evaluation", monitor: "pain with daily function, focal tenderness and imaging or medical findings", progression: "return to impact only after medical criteria, with gradual run-walk and load progression", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which interpretation is most concerning?", answer: "Progressive focal bone pain with walking needs evaluation for a bone stress injury.", distractors: ["Normal DOMS after every run", "A harmless flexibility issue", "A reason to test maximal sprinting"], explanation: "Focal pain progressing into daily activity is not managed as routine muscle soreness." },
      { prompt: "What is the immediate loading decision?", answer: "Remove or substantially reduce impact and refer for appropriate medical assessment.", distractors: ["Continue the same mileage", "Add hills to build toughness", "Use massage as a diagnostic test"], explanation: "Continued impact may worsen a bone stress injury; medical assessment determines diagnosis and safe alternatives." },
      { prompt: "Which outcome should guide early follow-up?", answer: "Pain with walking and daily tasks together with clinical and imaging review.", distractors: ["A single post-run mood score", "Resting pulse only", "A shoe brand"], explanation: "Functional pain and medical findings are more relevant to safety than unrelated performance measures." },
      { prompt: "Which return plan is safest?", answer: "A medically guided, gradual run-walk progression with monitoring of symptoms and recovery.", distractors: ["A direct return to the previous weekly mileage", "Maximal intervals first", "Permanent avoidance of running"], explanation: "Bone loading must rebuild progressively after the condition is medically managed." },
    ],
  },
  {
    topic: "Throwing shoulder", sport: "baseball", issue: "throwing-related shoulder pain with reduced external-rotation control", findings: "pain after increased pitch count, fatigue and altered scapular timing", priority: "reduce throwing exposure and assess shoulder, scapular and kinetic-chain contributors", monitor: "pain, range, cuff strength, pitch count and recovery response", progression: "restore capacity and progress from short controlled throws to full mound exposure", source: "American Sports Medicine Institute", questions: [
      { prompt: "Which interpretation is most appropriate?", answer: "Throwing load and kinetic-chain fatigue may be contributing and require structured assessment.", distractors: ["The shoulder should be tested only with maximal throws", "Pitch count never influences symptoms", "Scapular timing cannot affect throwing"], explanation: "Throwing is a high-load whole-chain task. Local symptoms should be understood with exposure and movement context." },
      { prompt: "What should be adjusted first?", answer: "Throwing volume and intensity while maintaining tolerable rehabilitation work.", distractors: ["Increase pitch count to locate the limit", "Stop all lower-limb training", "Use only passive ultrasound"], explanation: "Exposure modification reduces aggravation while preserving appropriate conditioning and strength." },
      { prompt: "Which monitoring variable is most sport-specific?", answer: "Pitch count and velocity alongside symptoms, range and recovery.", distractors: ["Only resting height", "Only grip size", "Only body mass"], explanation: "Pitch count and velocity describe external throwing demand and should be matched to capacity." },
      { prompt: "Which return sequence is best?", answer: "Controlled throwing distance and volume followed by intensity, mound work and competition.", distractors: ["Full competition after one pain-free day", "No throwing exposure before selection", "Passive care without workload progression"], explanation: "A graduated throwing program exposes the athlete to relevant demands in a controlled order." },
    ],
  },
  {
    topic: "Groin rehabilitation", sport: "football", issue: "adductor-related groin pain", findings: "pain with resisted adduction and cutting after a congested match schedule", priority: "identify irritability and restore adductor and trunk capacity while managing match load", monitor: "adduction strength, pain response, cutting and kicking exposure", progression: "progress from isometric and isotonic adductor loading to high-speed cutting and kicking", source: "Doha Agreement on Groin Pain", questions: [
      { prompt: "Which pattern is most consistent?", answer: "Adductor-related groin pain requiring examination and load-sensitive rehabilitation.", distractors: ["An isolated wrist injury", "A diagnosis of hip fracture without assessment", "Normal hydration response"], explanation: "Pain with resisted adduction provides a useful clinical clue but must be interpreted within a full groin examination." },
      { prompt: "Which load should be considered?", answer: "Cutting, kicking and congested match exposure in addition to gym work.", distractors: ["Only the number of stretching minutes", "Only upper-limb volume", "No sport exposure at all"], explanation: "Groin symptoms can be influenced by sport actions and schedule density, not just isolated exercises." },
      { prompt: "Which monitoring measure is useful?", answer: "Repeated adduction strength and symptom response to cutting and kicking.", distractors: ["Only resting blood pressure", "Only body fat", "Only a flexibility photograph"], explanation: "Monitoring should reflect the capacity and actions that matter to football." },
      { prompt: "Which progression is appropriate?", answer: "Progressive adductor loading followed by controlled cutting, kicking and match exposure.", distractors: ["Direct return to a congested schedule", "Stretching only", "Avoid all adductor strengthening"], explanation: "The athlete needs graded exposure to both force and sport-specific speed." },
    ],
  },
  {
    topic: "Calf strain", sport: "tennis", issue: "a medial calf strain", findings: "acute pain during push-off and reduced tolerance for repeated court sprints", priority: "protect the calf and restore plantar-flexor capacity", monitor: "walking, calf raise performance, acceleration and next-day response", progression: "progress from low-load calf work to fast stretch-shortening and court movement", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which interpretation fits best?", answer: "An acute calf muscle injury with impaired push-off capacity requires graded rehabilitation.", distractors: ["A shoulder overuse injury", "A normal response that needs maximal sprinting", "A diagnosis from footwear alone"], explanation: "Acute push-off pain and functional loss suggest a calf injury that should be examined and loaded progressively." },
      { prompt: "Which early goal is suitable?", answer: "Restore comfortable walking and controlled plantar-flexor loading.", distractors: ["Maximal bounding immediately", "Complete inactivity for a fixed month", "Aggressive stretching into sharp pain"], explanation: "Early function and controlled loading help establish a base for later speed and elastic work." },
      { prompt: "Which variable is most useful before court return?", answer: "Calf strength and repeated push-off tolerance under increasing speed.", distractors: ["Only a seated heart rate", "Only body mass", "Only shoulder range"], explanation: "Tennis requires repeated acceleration and push-off, so capacity should be tested in relevant tasks." },
      { prompt: "Which progression is appropriate?", answer: "Calf strength, then elastic drills, acceleration and graded court movement.", distractors: ["Full match directly from walking", "Massage as the whole plan", "Avoiding all hopping permanently"], explanation: "The progression should reflect the force and speed demands of tennis." },
    ],
  },
  {
    topic: "Training load", sport: "swimming", issue: "a sudden rise in weekly training load with worsening shoulder symptoms", findings: "high repetition volume, reduced sleep and pain that is worse after long pull sets", priority: "review total exposure and recovery while assessing the shoulder", monitor: "session load, stroke volume, pain response, sleep and strength", progression: "restore capacity and reintroduce volume with planned variation and recovery", source: "Halson, Monitoring Training Load", questions: [
      { prompt: "Which system-level interpretation is best?", answer: "The shoulder symptoms should be interpreted with recent load and recovery, not tissue findings alone.", distractors: ["Training volume cannot affect a shoulder", "The answer is always complete rest", "Sleep has no relationship to load tolerance"], explanation: "Load and recovery context can modify capacity and should be part of the assessment and plan." },
      { prompt: "What should be reviewed first?", answer: "Recent volume, intensity, stroke mix, recovery and symptom response.", distractors: ["Only the athlete's height", "Only their race ranking", "Only passive range"], explanation: "A full exposure profile helps identify modifiable contributors and avoids an overly narrow intervention." },
      { prompt: "Which monitoring method is most practical?", answer: "Combine session-load records with symptoms, sleep and relevant shoulder measures.", distractors: ["Use one biomarker alone", "Ignore subjective reports", "Measure only body mass"], explanation: "A multimodal monitoring system is more useful than one noisy indicator." },
      { prompt: "Which training progression is sound?", answer: "Rebuild shoulder capacity while gradually increasing swimming exposure with planned recovery.", distractors: ["Return immediately to the highest volume", "Avoid all swimming indefinitely", "Use passive care without training modification"], explanation: "The goal is durable capacity and load tolerance, not simply symptom suppression." },
    ],
  },
  {
    topic: "Travel medicine", sport: "national volleyball", issue: "jet lag and recovery disruption before an international tournament", findings: "eastward travel across multiple time zones, shortened sleep and an early first match", priority: "plan light exposure, sleep timing, hydration, meals and training around the destination", monitor: "sleep timing, subjective fatigue, readiness and schedule response", progression: "use a pre-travel and arrival plan, then match the final training load to readiness", source: "IOC Consensus Statement on Travel in Sport", questions: [
      { prompt: "Which challenge should the team anticipate?", answer: "Circadian disruption and travel fatigue can affect sleep, alertness and readiness.", distractors: ["Travel has no physiological effect", "Only footwear will determine readiness", "Jet lag is corrected by one maximal session"], explanation: "Time-zone changes and travel stress can alter sleep and performance, so preparation should begin before arrival." },
      { prompt: "What should be planned?", answer: "Sleep timing, appropriately timed light, hydration, meals, movement and training load.", distractors: ["Only the team's sightseeing schedule", "Avoiding all movement during travel", "A supplement without checking status"], explanation: "Travel management is multidimensional and should be individualized to the destination and competition schedule." },
      { prompt: "Which monitoring information is useful?", answer: "Sleep and fatigue trends combined with readiness and response to training.", distractors: ["Only resting height", "Only the room temperature", "Only the last match result"], explanation: "Readiness is best interpreted from current recovery and workload response rather than a single outcome." },
      { prompt: "Which pre-match approach is most defensible?", answer: "Adjust training and recovery to destination time and observed readiness while preserving key sport qualities.", distractors: ["Repeat home-time training without adaptation", "Maximize training on arrival", "Ignore sleep until after the tournament"], explanation: "The plan should balance adaptation, performance rehearsal and recovery in the actual competition context." },
    ],
  },
  {
    topic: "Energy availability", sport: "artistic gymnastics", issue: "low energy availability with menstrual and performance concerns", findings: "high training load, restrictive intake, fatigue and repeated bone pain", priority: "confidential multidisciplinary assessment for RED-S-related risk", monitor: "energy intake and expenditure, health markers, symptoms, mood and training response", progression: "restore health and energy availability before increasing performance load", source: "IOC Consensus Statement on RED-S", questions: [
      { prompt: "Which concern is most important?", answer: "The pattern may indicate low energy availability and requires confidential multidisciplinary assessment.", distractors: ["A normal adaptation to elite training", "A reason to add more conditioning immediately", "A problem solved by ignoring menstrual health"], explanation: "Low energy availability can affect endocrine, bone, immune and performance systems and should be addressed early." },
      { prompt: "What is the first support priority?", answer: "Coordinate medical, nutrition and performance support while protecting the athlete's health and confidentiality.", distractors: ["Prescribe more restriction", "Hide the symptoms from the medical team", "Use a painkiller to continue all training"], explanation: "RED-S concerns require coordinated care and respectful communication, not a single training adjustment." },
      { prompt: "Which monitoring approach is appropriate?", answer: "Track health, energy, menstrual, bone, mood and training indicators over time.", distractors: ["Track body mass alone", "Use appearance as the main outcome", "Ignore fatigue if results improve"], explanation: "The syndrome is multisystem; a single number cannot represent health or readiness." },
      { prompt: "Which progression is safest?", answer: "Restore health and energy availability before adding demanding performance load.", distractors: ["Increase volume to regain fitness", "Return to maximal impact immediately", "Use only stretching"], explanation: "Health restoration is the prerequisite for safely rebuilding training and competition capacity." },
    ],
  },
  {
    topic: "Post-operative rehabilitation", sport: "football", issue: "early rehabilitation after knee surgery", findings: "swelling, quadriceps inhibition and guarded gait without signs of wound complication", priority: "follow surgical precautions while restoring range, activation and safe mobility", monitor: "effusion, range, quadriceps activation, gait and wound or systemic signs", progression: "advance from protected activation to strength, running and sport-specific tasks according to criteria", source: "Kisner & Colby, Therapeutic Exercise", questions: [
      { prompt: "Which principle is most important early?", answer: "Respect surgical precautions while managing swelling and restoring safe movement and activation.", distractors: ["Ignore the surgeon's protocol", "Test maximal strength immediately", "Immobilize regardless of procedure"], explanation: "Post-operative care is procedure-specific. Precautions and healing status guide the safe starting point." },
      { prompt: "Which finding should be escalated?", answer: "Increasing swelling with systemic or wound concerns beyond the expected response.", distractors: ["Mild expected fatigue", "A stable exercise response", "A preference for one exercise"], explanation: "Unexpected systemic or wound signs require medical review rather than routine progression." },
      { prompt: "Which measure helps guide progress?", answer: "Effusion, range, activation and gait quality alongside the surgical plan.", distractors: ["Only the calendar", "Only body mass", "Only a single pain score"], explanation: "These measures reflect important early functional constraints and can be repeated objectively." },
      { prompt: "Which later progression is appropriate?", answer: "Criteria-based strength, running and sport exposure after foundational healing and control.", distractors: ["Full match before strength recovery", "Only passive treatment", "Avoiding all sport-specific tasks"], explanation: "Return requires progressive exposure after the athlete meets medical and functional criteria." },
    ],
  },
  {
    topic: "Swimmer's shoulder", sport: "competitive swimming", issue: "repetitive shoulder pain with high volume freestyle", findings: "pain late in sessions, scapular control fatigue and recent increase in interval density", priority: "modify exposure and address shoulder and trunk control", monitor: "stroke volume, pain, cuff endurance, scapular control and sleep", progression: "restore capacity and incrementally reintroduce volume and intensity", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which interpretation is most defensible?", answer: "Repetitive exposure and fatigue may be exceeding current shoulder capacity.", distractors: ["Every painful stroke means a tear", "Volume is irrelevant", "The athlete needs only passive stretching"], explanation: "Overuse symptoms should be interpreted with training load, technique, capacity and recovery rather than one structural assumption." },
      { prompt: "Which initial action is appropriate?", answer: "Adjust the provoking volume while training tolerable strength and control.", distractors: ["Increase interval density", "Stop all lower-body work", "Ignore pain until the taper"], explanation: "Load modification can reduce irritation while preserving fitness and building capacity." },
      { prompt: "Which monitoring variable matters?", answer: "Pain and control response as stroke volume and intensity are progressed.", distractors: ["Only the athlete's height", "Only one MRI", "Only resting pulse"], explanation: "The response to swimming exposure is central to deciding whether the shoulder is adapting." },
      { prompt: "Which return strategy is best?", answer: "Reintroduce volume and intensity in planned steps with recovery and technique monitoring.", distractors: ["Return to peak volume on day one", "Use only massage", "Avoid all swimming permanently"], explanation: "A staged, sport-specific exposure is necessary for durable return." },
    ],
  },
  {
    topic: "Elbow rehabilitation", sport: "cricket", issue: "throwing-related medial elbow pain", findings: "pain with high-velocity throws, reduced forearm endurance and a sudden increase in fielding volume", priority: "assess the elbow medically and reduce high-risk throwing exposure", monitor: "pain, range, grip and forearm strength, throwing count and velocity", progression: "rebuild forearm and kinetic-chain capacity before graded throwing", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which interpretation is safest?", answer: "The athlete needs assessment for a throwing-related elbow problem and temporary exposure modification.", distractors: ["Throwing pain is always harmless", "Maximal throwing is the best diagnostic test", "Forearm capacity cannot affect the elbow"], explanation: "Medial elbow symptoms with increased throwing require clinical assessment and a careful load plan." },
      { prompt: "Which load should be reduced first?", answer: "High-velocity and high-volume throwing while preserving tolerable conditioning.", distractors: ["All training regardless of symptoms", "Only walking", "Only sleep"], explanation: "The most provocative exposure should be modified while maintaining safe general capacity." },
      { prompt: "Which monitoring variable is most relevant?", answer: "Throw count and intensity together with symptoms, strength and recovery.", distractors: ["Only body mass", "Only shoulder flexibility", "Only match score"], explanation: "External throwing demand and the athlete's response should be tracked together." },
      { prompt: "Which return progression is appropriate?", answer: "Short, low-intensity throws progressing to distance, velocity, volume and competitive throws.", distractors: ["Return directly to full bowling or fielding", "No throwing until the season ends", "Passive treatment without exposure"], explanation: "A graded throwing plan rebuilds capacity and reveals response before competition." },
    ],
  },
  {
    topic: "Wrist rehabilitation", sport: "gymnastics", issue: "wrist pain during repeated weight-bearing skills", findings: "pain with extension loading, reduced tolerance for handstands and increased training volume", priority: "screen for bony or ligamentous injury and modify weight-bearing", monitor: "pain, range, grip, weight-bearing tolerance and medical findings", progression: "restore wrist capacity before graduated handstand and apparatus exposure", source: "Brukner & Khan's Clinical Sports Medicine", questions: [
      { prompt: "Which concern requires attention?", answer: "Persistent extension-loading pain in a gymnast needs assessment rather than routine stretching alone.", distractors: ["A normal sign that should be ignored", "A reason to test maximal handstands", "A shoulder diagnosis by default"], explanation: "Repetitive wrist loading can involve several tissues; persistent focal pain needs appropriate examination." },
      { prompt: "What should be modified?", answer: "Painful weight-bearing exposure while maintaining safe lower-limb and general conditioning.", distractors: ["All exercise indefinitely", "Increase handstand repetitions", "Only passive massage"], explanation: "Load management should target the aggravating task without unnecessarily removing unrelated capacity." },
      { prompt: "Which outcome is useful?", answer: "Progressive weight-bearing tolerance with symptom and range monitoring.", distractors: ["Only resting pulse", "Only body mass", "Only a flexibility score unrelated to load"], explanation: "The relevant task is weight-bearing extension, so tolerance should be monitored progressively." },
      { prompt: "Which return sequence is sound?", answer: "Supported loading, controlled handstand drills and graded apparatus volume.", distractors: ["Full apparatus immediately", "Avoid all wrist loading forever", "Only heat without exercise"], explanation: "The wrist needs staged exposure to the mechanical demands of gymnastics." },
    ],
  },
  {
    topic: "Para-sport classification support", sport: "wheelchair racing", issue: "shoulder overload in an athlete using a wheelchair", findings: "pain after increased propulsion volume, limited recovery and high shoulder demand in daily life", priority: "consider sport and daily-life load together with accessible assessment", monitor: "propulsion volume, pain, range, strength, transfers and equipment fit", progression: "modify exposure, improve capacity and coordinate equipment and coaching changes", source: "International Paralympic Committee Medical Code", questions: [
      { prompt: "Which load perspective is essential?", answer: "Sport propulsion, transfers and daily wheelchair use all contribute to shoulder demand.", distractors: ["Only race distance matters", "Daily mobility has no load", "Equipment cannot affect symptoms"], explanation: "Para-athletes often have substantial non-sport loading; the plan must account for the whole day and the environment." },
      { prompt: "Which assessment approach is appropriate?", answer: "Accessible, individualized assessment that includes equipment, transfers, propulsion technique and symptoms.", distractors: ["Use a standard test without adaptations", "Assess only seated grip strength", "Ignore the athlete's lived context"], explanation: "Assessment must be valid and safe for the athlete's impairment and actual activities." },
      { prompt: "Which monitoring variable is important?", answer: "Combined propulsion and daily-life exposure with shoulder response and recovery.", distractors: ["Only race ranking", "Only resting body mass", "Only a single imaging result"], explanation: "A complete load profile helps identify modifiable contributors and prevents underestimating total demand." },
      { prompt: "Which intervention is most defensible?", answer: "Coordinate load modification, strength work, technique and equipment review.", distractors: ["Only passive treatment", "Stop all wheelchair use", "Increase racing volume immediately"], explanation: "Multidisciplinary modification can improve capacity and reduce avoidable mechanical stress." },
    ],
  },
  {
    topic: "Youth athlete development", sport: "football", issue: "a growing athlete with heel pain during a rapid growth phase", findings: "training-related heel pain, recent height increase and high match frequency", priority: "consider growth and load context while screening for serious features", monitor: "growth, pain, training volume, footwear and function", progression: "modify impact and restore capacity before increasing sport exposure", source: "IOC Consensus Statement on Youth Athletic Development", questions: [
      { prompt: "Which context should guide assessment?", answer: "Growth and maturation can alter tissue tolerance and should be considered with training load.", distractors: ["Biological maturity never affects load", "The athlete should train through all pain", "Height alone diagnoses the condition"], explanation: "Growth-related changes may alter capacity, but symptoms still require appropriate examination and individualized management." },
      { prompt: "What should be reviewed?", answer: "Match and training load, growth tempo, footwear, surface and pain behavior.", distractors: ["Only the athlete's position", "Only body mass index", "Only the coach's opinion"], explanation: "The presentation is shaped by both biological and environmental factors." },
      { prompt: "Which monitoring approach is suitable?", answer: "Track pain and function alongside growth and weekly sport exposure.", distractors: ["Track only height", "Use only one scan", "Ignore daily function"], explanation: "Longitudinal monitoring captures changes that a single test can miss." },
      { prompt: "Which progression is safest?", answer: "Restore pain-free function and capacity before gradually rebuilding match frequency and impact.", distractors: ["Add extra matches to adapt", "Use complete inactivity as the only plan", "Return by calendar date alone"], explanation: "A graded return should respect symptoms, growth and actual sport demands." },
    ],
  },
  {
    topic: "Female athlete health", sport: "middle-distance running", issue: "fatigue and irregular menstrual cycles during a high-volume block", findings: "low energy intake, declining performance and recurrent illness", priority: "screen for low energy availability and coordinate confidential health support", monitor: "energy intake, menstrual health, illness, mood, bone symptoms and training response", progression: "restore health and energy availability before returning to high training volume", source: "IOC Consensus Statement on RED-S", questions: [
      { prompt: "Which issue should be considered?", answer: "Low energy availability with potential multisystem consequences needs assessment.", distractors: ["Only a motivation problem", "A normal effect of hard training", "A reason to add intervals"], explanation: "Energy deficiency can affect endocrine, immune, bone and performance systems, so early support is important." },
      { prompt: "Which team action is appropriate?", answer: "Coordinate medical and nutrition assessment with respectful confidentiality and athlete-centered communication.", distractors: ["Publicly discuss the athlete's cycle", "Prescribe further restriction", "Ignore the findings until competition"], explanation: "Health information is sensitive and should be handled by qualified professionals in a supportive multidisciplinary pathway." },
      { prompt: "Which data set is most informative?", answer: "Health, energy, menstrual, illness, mood and training trends over time.", distractors: ["Body mass alone", "Race ranking alone", "One resting heart-rate value"], explanation: "A multisystem pattern is more meaningful than a single performance or body-composition measure." },
      { prompt: "Which return approach is safest?", answer: "Restore health and adequate energy availability before progressing high-volume training.", distractors: ["Increase volume to regain fitness", "Return directly to peak mileage", "Use analgesia to mask symptoms"], explanation: "Health restoration is the foundation for sustainable performance and injury prevention." },
    ],
  },
  {
    topic: "Heat acclimatization", sport: "field hockey", issue: "training in hot and humid conditions before a tournament", findings: "high wet-bulb conditions, limited acclimatization and repeated high-intensity sessions", priority: "use environmental monitoring, progressive heat exposure, hydration and emergency planning", monitor: "wet-bulb conditions, body-mass change, symptoms, session intensity and recovery", progression: "increase heat exposure and match-like intensity gradually with safeguards", source: "NATA Position Statement: Exertional Heat Illness", questions: [
      { prompt: "Which preparation principle is most appropriate?", answer: "Progressive heat exposure with environmental monitoring and individualized hydration and recovery planning.", distractors: ["Use one maximal hot session", "Ignore humidity", "Rely on thirst as the only safety plan"], explanation: "Heat risk depends on environmental and individual factors; acclimatization should be progressive and monitored." },
      { prompt: "Which information should staff collect?", answer: "Environmental conditions, symptoms, body-mass trends and training intensity.", distractors: ["Only the athlete's ranking", "Only the air temperature", "Only a post-session stretch score"], explanation: "Heat management requires context about both environment and athlete response." },
      { prompt: "Which response warrants stopping and assessment?", answer: "Progressive heat illness symptoms or altered mental status.", distractors: ["Normal sweating during effort", "A mild preference for shade", "A routine post-session appetite"], explanation: "Symptoms that suggest escalating heat illness require immediate action rather than training continuation." },
      { prompt: "Which progression is sound?", answer: "Gradually increase heat and match-like exposure while preserving recovery and emergency readiness.", distractors: ["Full competition in the first hot session", "No environmental planning", "Avoid all hydration education"], explanation: "Adaptation and readiness are built over repeated controlled exposures, not a single maximal session." },
    ],
  },
  {
    topic: "Match recovery", sport: "football", issue: "short-turnaround recovery after a high-intensity match", findings: "reduced jump performance, soreness and limited sleep before the next fixture", priority: "coordinate recovery, medical screening and training-load modification", monitor: "well-being, sleep, soreness, neuromuscular performance and minutes played", progression: "restore readiness and reintroduce high intensity according to individual response", source: "Halson, Recovery Strategies for Athletes", questions: [
      { prompt: "Which interpretation is appropriate?", answer: "Reduced performance and sleep indicate incomplete recovery that should influence the next load.", distractors: ["The athlete must train maximally to recover", "A single jump score proves injury", "Sleep is unrelated to readiness"], explanation: "Recovery markers are context-dependent but can identify when a planned load needs adjustment." },
      { prompt: "What should the staff coordinate?", answer: "Medical screening, individual training exposure, sleep, nutrition and recovery logistics.", distractors: ["Only passive massage", "The same load for every player", "Only match selection"], explanation: "Short-turnaround management is multidisciplinary and should reflect minutes, symptoms and recovery." },
      { prompt: "Which monitoring combination is best?", answer: "Subjective well-being and sleep with relevant neuromuscular and workload measures.", distractors: ["One biomarker alone", "Only the previous scoreline", "Only body mass"], explanation: "Combining subjective and objective data improves context and avoids overreliance on a noisy single measure." },
      { prompt: "Which progression is defensible?", answer: "Restore high-intensity exposure as readiness and symptoms permit, with individual minutes management.", distractors: ["Give every athlete full minutes", "Avoid high intensity for the entire season", "Use only stretching"], explanation: "The next exposure should be individualized and proportional to recovery and competition demands." },
    ],
  },
  {
    topic: "Injury prevention", sport: "netball", issue: "recurrent landing-related knee symptoms", findings: "poor trunk control, high fixture density and fatigue-related valgus during single-leg landings", priority: "combine neuromuscular training with load and landing-technique management", monitor: "landing quality, fatigue, training volume and symptom response", progression: "build control under increasing speed, fatigue, perturbation and game-like conditions", source: "IOC Consensus on Injury Prevention", questions: [
      { prompt: "Which interpretation is most useful?", answer: "Landing mechanics and exposure interact; a movement finding alone is not a diagnosis.", distractors: ["Valgus guarantees ACL injury", "Fatigue cannot alter movement", "Only flexibility matters"], explanation: "Movement quality should be interpreted with fatigue, load, symptoms and sport context rather than used as a deterministic label." },
      { prompt: "What should the prevention plan include?", answer: "Progressive strength and neuromuscular landing work plus sensible fixture and training-load management.", distractors: ["Only passive stretching", "Avoid all jumping", "Increase match density to build tolerance"], explanation: "Prevention is a system involving capacity, technique, exposure and recovery." },
      { prompt: "Which monitoring is appropriate?", answer: "Observe landing quality under graded fatigue while tracking symptoms and exposure.", distractors: ["Only a resting flexibility test", "Only the athlete's age", "Only match result"], explanation: "The relevant quality should be assessed under conditions that resemble the sport without compromising safety." },
      { prompt: "Which progression is best?", answer: "Controlled landings followed by reactive, fatigued and game-like tasks.", distractors: ["Immediate maximal competition", "No landing after a single bad repetition", "Only seated exercise"], explanation: "Progression increases the demands while retaining the ability to adjust based on the athlete's response." },
    ],
  },
  {
    topic: "Interdisciplinary practice", sport: "elite athletics", issue: "disagreement between coach, medical staff and athlete about return to training", findings: "improving objective tests but persistent symptoms and athlete concern", priority: "create a shared decision using transparent evidence and athlete values", monitor: "symptoms, function, test results, confidence and training response", progression: "agree staged exposure and review points with clear responsibility", source: "IOC Consensus on the Role of Sports Science", questions: [
      { prompt: "Which process is most defensible?", answer: "Use shared decision-making that integrates data, clinical judgment, sport demands and the athlete's concerns.", distractors: ["Let the loudest staff member decide", "Ignore symptoms because tests improved", "Let the athlete return without a plan"], explanation: "Return is a shared, contextual decision, not a contest between isolated opinions." },
      { prompt: "What should the report contain?", answer: "A concise interpretation, limitations, recommendations, review points and responsible staff members.", distractors: ["Raw numbers only", "A guaranteed outcome", "A public ranking of staff"], explanation: "Good communication translates information into accountable action while preserving uncertainty and confidentiality." },
      { prompt: "Which monitoring design is best?", answer: "Combine repeated objective measures with symptoms, confidence and actual load exposure.", distractors: ["Use one test forever", "Ignore the athlete's report", "Monitor only competition results"], explanation: "Longitudinal, multimodal monitoring better captures readiness and response." },
      { prompt: "Which progression is appropriate?", answer: "Agree staged exposure with pre-defined review and regression criteria.", distractors: ["Return with no review date", "Avoid every sport demand", "Use only passive treatment"], explanation: "Clear milestones and review points make the decision safer and easier to revise." },
    ],
  },
  {
    topic: "Supplement safety", sport: "strength sport", issue: "an athlete asking whether a supplement is safe before competition", findings: "uncertain ingredient labeling and no verified batch testing", priority: "refer to qualified anti-doping and medical resources and avoid assuming safety", monitor: "ingredient records, clinical need and current prohibited-list status", progression: "use only an evidence-based, appropriately verified plan when justified", source: "WADA Prohibited List and NADA India KYM", sourceUrl: "https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list", questions: [
      { prompt: "Which response is safest?", answer: "Do not assume the supplement is safe; verify ingredients and current status through qualified channels.", distractors: ["Use it because it is marketed to athletes", "Ask a teammate to approve it", "Assume natural means permitted"], explanation: "Contamination and labeling uncertainty create risk. Athletes remain responsible for substances found in their samples." },
      { prompt: "What should be documented?", answer: "The product, batch, ingredients, intended use and advice received.", distractors: ["Only the brand color", "Nothing if the athlete feels well", "Only the price"], explanation: "Accurate records support risk management and informed clinical and anti-doping decisions." },
      { prompt: "Which monitoring approach is appropriate?", answer: "Review current prohibited status and clinical need, not only short-term performance effects.", distractors: ["Monitor only body mass", "Ignore medication interactions", "Use old lists"], explanation: "Anti-doping status can change and a supplement may carry health or contamination risks beyond performance claims." },
      { prompt: "Which plan is most defensible?", answer: "Use food-first and evidence-based options, with current verification and medical oversight when needed.", distractors: ["Take multiple untested products", "Stop prescribed medicine independently", "Use a supplement as a substitute for recovery"], explanation: "A conservative, verified approach reduces avoidable risk and keeps the athlete's health central." },
    ],
  },
  {
    topic: "Post-match screening", sport: "boxing", issue: "an athlete with nosebleed and dizziness after a bout", findings: "head and facial impact, persistent dizziness and difficulty recalling the last exchange", priority: "activate medical assessment and do not permit return to risk", monitor: "neurological symptoms, consciousness, breathing and medical findings", progression: "follow medical guidance and graduated return only after appropriate assessment", source: "6th International Conference on Concussion in Sport", questions: [
      { prompt: "Which priority is correct?", answer: "The athlete requires immediate medical assessment for potentially significant head injury.", distractors: ["Continue sparring to assess tolerance", "Treat only the nosebleed", "Clear the athlete based on desire to compete"], explanation: "Persistent dizziness and memory difficulty after impact are concerning and should not be normalized." },
      { prompt: "What should be avoided?", answer: "Any further contact or risk exposure before appropriate medical clearance.", distractors: ["Documentation", "Emergency escalation", "Observation by trained staff"], explanation: "Further impact can worsen a potentially serious injury." },
      { prompt: "Which information is most important to communicate?", answer: "Mechanism, symptoms, time course, observed neurological changes and actions taken.", distractors: ["Only the final round score", "Only the athlete's weight", "Only the coach's opinion"], explanation: "Structured handover supports urgent clinical decision-making and continuity." },
      { prompt: "Which return plan is appropriate?", answer: "Medical guidance followed by graduated, symptom-monitored training and contact exposure.", distractors: ["Return to contact the next day", "A single normal pulse", "No follow-up after symptoms settle"], explanation: "Contact sport requires a carefully staged progression after assessment and recovery." },
    ],
  },
  {
    topic: "Performance analysis", sport: "rowing", issue: "declining power despite stable aerobic test results", findings: "reduced stroke power, increased technical variability and high recent load", priority: "integrate biomechanical, strength, recovery and technical data", monitor: "power profile, stroke length, rate, strength, sleep and perceived fatigue", progression: "address the limiting factor and re-test under standardized conditions", source: "IOC Consensus on Data in Sport", questions: [
      { prompt: "Which interpretation is best?", answer: "Stable aerobic capacity does not exclude a technical, neuromuscular or recovery-related performance limiter.", distractors: ["Aerobic tests explain every performance change", "The data must be wrong", "More volume is always the answer"], explanation: "Performance is multidimensional. Stable VO2-related data can coexist with changes in power, technique or fatigue." },
      { prompt: "What should be combined?", answer: "Power and technique data with load, strength, sleep and athlete feedback.", distractors: ["Only one split time", "Only body mass", "Only a coach's intuition"], explanation: "Integrated data helps distinguish a limiting factor from normal day-to-day variability." },
      { prompt: "Which monitoring design is strongest?", answer: "Repeat standardized performance tests while tracking training and recovery context.", distractors: ["Compare tests from different conditions without adjustment", "Use only one maximal effort", "Ignore fatigue"], explanation: "Standardization and longitudinal context improve interpretation and decision-making." },
      { prompt: "Which intervention is appropriate?", answer: "Target the identified technical or neuromuscular limiter while adjusting load and checking response.", distractors: ["Increase every training variable", "Treat only the test number", "Stop all technical practice"], explanation: "Recommendations should be specific, feasible and reviewed against the athlete's response." },
    ],
  },
  {
    topic: "Recovery monitoring", sport: "tennis", issue: "high fatigue and poor sleep during a tournament week", findings: "multiple matches, rising soreness, reduced serving speed and low subjective readiness", priority: "coordinate recovery and adjust practice volume without losing essential preparation", monitor: "sleep, soreness, readiness, serving speed and match minutes", progression: "restore readiness through recovery and tailored practice before adding intensity", source: "Halson, Monitoring Training Load", questions: [
      { prompt: "Which interpretation is most defensible?", answer: "The combined subjective and objective pattern suggests insufficient recovery.", distractors: ["One metric must be ignored", "The athlete should always add conditioning", "Sleep has no performance relevance"], explanation: "Converging fatigue indicators are more informative than a single score and should influence the plan." },
      { prompt: "What should be adjusted?", answer: "Practice volume and intensity while preserving key tactical and technical rehearsal.", distractors: ["Remove all recovery", "Add maximal serving repetitions", "Use only a passive modality"], explanation: "Tapering or modifying practice can preserve readiness while maintaining competition-specific preparation." },
      { prompt: "Which monitoring is useful?", answer: "Track sleep and well-being alongside serving speed and actual match exposure.", distractors: ["Only ranking", "Only body mass", "Only a single blood value"], explanation: "Combining athlete feedback with performance and workload data informs practical decisions." },
      { prompt: "Which progression is appropriate?", answer: "Reintroduce intensity as readiness improves, with individual practice and match-minute management.", distractors: ["Return to full practice regardless of response", "Avoid all intensity until season end", "Ignore tournament schedule"], explanation: "The plan should be responsive to the athlete's recovery and the remaining competition demands." },
    ],
  },
];

const CASE_VARIANTS = [
  { athlete: "a 21-year-old national-level athlete", modifier: "after a congested week" },
  { athlete: "a 24-year-old international athlete", modifier: "after a return from travel" },
  { athlete: "a 19-year-old academy athlete", modifier: "during a build-up phase" },
  { athlete: "a 27-year-old elite athlete", modifier: "during a competition block" },
];

function buildCases(): Question[] {
  const questions: Question[] = [];
  CASE_BLUEPRINTS.slice(0, 25).forEach((blueprint, blueprintIndex) => {
    CASE_VARIANTS.forEach((variant, variantIndex) => {
      const passageId = `C-P${String(blueprintIndex + 1).padStart(2, "0")}-${variantIndex + 1}`;
      const passage = `${variant.athlete} in ${blueprint.sport} presents ${variant.modifier}. The physiotherapy team notes ${blueprint.findings}. The athlete wants to continue training, while the coach is concerned about performance and the medical team wants a clear plan. The team agrees to collect repeat measures and communicate a staged decision.`;
      blueprint.questions.forEach((question, questionIndex) => {
        const options = shuffle([question.answer, ...question.distractors], hashSeed(`${passageId}-${questionIndex}`));
        questions.push({
          id: `${passageId}-Q${questionIndex + 1}`,
          section: "C",
          topic: blueprint.topic,
          subtopic: blueprint.issue,
          difficulty: "analytical",
          text: `Case ${blueprintIndex + 1}, ${blueprint.sport}, ${variant.modifier}: ${question.prompt}`,
          options,
          correct: options.indexOf(question.answer),
          explanation: `${question.explanation} The key monitoring focus is ${blueprint.monitor}; the planned progression is ${blueprint.progression}.`,
          source: blueprint.source,
          sourceUrl: blueprint.sourceUrl,
          passageId,
          passage,
        });
      });
    });
  });
  return questions;
}

export function generateQuestionBank(): Question[] {
  return [
    ...A1_FACTS.flatMap((fact, index) => expandFact(fact, "A1", index, 16)),
    ...A2_FACTS.slice(0, 20).flatMap((fact, index) => expandFact(fact, "A2", index, 8)),
    ...B_FACTS.flatMap((fact, index) => expandFact(fact, "B", index, 16)),
    ...buildCases(),
  ];
}

export const QUESTION_BANK = generateQuestionBank();

export const BANK_COUNTS: Record<Exclude<Section, "C"> | "C", number> = {
  A1: A1_FACTS.length * 16,
  A2: Math.min(A2_FACTS.length, 20) * 8,
  B: B_FACTS.length * 16,
  C: Math.min(CASE_BLUEPRINTS.length, 25) * CASE_VARIANTS.length * 4,
};
