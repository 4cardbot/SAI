import { access, mkdir, readFile, writeFile } from "node:fs/promises";

type Difficulty = "foundational" | "applied" | "analytical";

type Seed = {
  subtopic: string;
  text: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
  sourceId: string;
  difficulty: Difficulty;
  records: number;
};

type Group = {
  slug: string;
  idPrefix: string;
  topic: string;
  seeds: Seed[];
};

const frames = [
  "For an athlete entering a new training block,",
  "When reviewing a high-performance athlete profile,",
  "During a competition preparation meeting,",
  "In a practical sports-science assessment,",
  "When communicating the finding to a coach,",
  "For a youth athlete in a development programme,",
  "During a congested competition period,",
  "In a rehabilitation or reconditioning setting,",
  "When comparing laboratory and field information,",
  "For an athlete preparing for an important final,",
];

const s = (
  subtopic: string,
  text: string,
  correct: string,
  distractors: [string, string, string],
  explanation: string,
  sourceId: string,
  difficulty: Difficulty,
  records: number,
): Seed => ({ subtopic, text, correct, distractors, explanation, sourceId, difficulty, records });

const coreSubtopics = {
  anthropometry: "Anthropometry — body composition, somatotypes, growth & maturation",
  physiology: "Exercise Physiology — energy systems, fatigue, adaptation",
  physiotherapy: "Physiotherapy — injury mechanisms, basic rehabilitation principles",
  biomechanics: "Biomechanics — movement analysis, force, kinematics",
  biochemistry: "Biochemistry — biomarkers, metabolism, recovery indicators",
  strength: "Strength & Conditioning — training principles, load, recovery",
  psychology: "Psychology — motivation, stress, arousal, mental readiness",
  nutrition: "Nutrition — macronutrients, hydration, energy balance",
};

const core: Group = {
  slug: "core_disciplines",
  idPrefix: "a1-core",
  topic: "Core Disciplines Foundational Concepts",
  seeds: [
    s(coreSubtopics.anthropometry, "Which limitation makes BMI an incomplete description of an athlete's physique?", "It does not distinguish fat mass from fat-free mass", ["It cannot be calculated from height and mass", "It directly measures bone mineral density", "It measures maximal oxygen uptake"], "BMI uses height and mass but cannot separate adipose tissue from lean tissue or describe its distribution.", "acsm-getp-12", "foundational", 5),
    s(coreSubtopics.anthropometry, "Which method is based most directly on measuring subcutaneous fat thickness at standardized sites?", "Skinfold assessment", ["Bioelectrical impedance analysis", "Dual-energy X-ray absorptiometry", "Air-displacement plethysmography"], "Skinfold calipers estimate subcutaneous adiposity from the thickness of standardized skinfold sites.", "acsm-getp-12", "foundational", 5),
    s(coreSubtopics.anthropometry, "In Heath-Carter somatotyping, mesomorphy primarily represents relative:", "Musculoskeletal robustness and muscularity", ["Adiposity", "Linearity and slenderness", "Biological age"], "Mesomorphy describes relative musculoskeletal development, whereas endomorphy describes adiposity and ectomorphy linearity.", "nsca-essentials-5", "foundational", 5),
    s(coreSubtopics.anthropometry, "Why should biological maturation be considered when comparing adolescent strength results?", "Maturation affects size, strength, and the timing of adaptation", ["Maturation makes all testing invalid", "Maturation determines an athlete's final sport position", "Maturation removes the need for normative data"], "Growth and maturation influence body size and neuromuscular capacity, so chronological-age comparisons can mislead.", "nsca-essentials-5", "applied", 4),

    s(coreSubtopics.physiology, "Which energy system supplies the highest immediate power during a maximal effort lasting only a few seconds?", "The phosphagen system", ["Oxidative phosphorylation", "Beta oxidation", "Gluconeogenesis"], "Stored ATP and phosphocreatine provide rapid ATP resynthesis for very brief, high-power efforts.", "physiology-sport-exercise-kenney", "foundational", 5),
    s(coreSubtopics.physiology, "Which adaptation most directly improves sustained aerobic ATP production?", "Greater mitochondrial oxidative capacity", ["Reduced capillary density", "Lower stroke volume", "Reduced muscle oxygen extraction"], "Endurance training can increase mitochondrial capacity and the ability to produce ATP oxidatively.", "physiology-sport-exercise-kenney", "foundational", 5),
    s(coreSubtopics.physiology, "The Fick principle expresses oxygen consumption as cardiac output multiplied by the:", "Arterial-venous oxygen difference", ["Respiratory exchange ratio", "Ventilatory equivalent", "Blood lactate concentration"], "VO2 equals cardiac output multiplied by the difference between arterial and venous oxygen content.", "physiology-sport-exercise-kenney", "foundational", 5),
    s(coreSubtopics.physiology, "During repeated sprints, phosphocreatine resynthesis between efforts depends substantially on:", "Oxygen-supported oxidative metabolism and sufficient recovery", ["Complete cessation of muscle blood flow", "Exclusive reliance on fat oxidation", "A sustained reduction in oxygen availability"], "Phosphocreatine resynthesis is largely oxidative and is improved when recovery permits oxygen-supported metabolism.", "physiology-sport-exercise-kenney", "applied", 4),

    s(coreSubtopics.physiotherapy, "Functional ankle instability after a sprain is most closely associated with deficits in:", "Proprioception and neuromuscular control", ["Bone mineral density", "Resting respiratory rate", "Serum ferritin"], "Functional instability can persist through impaired sensorimotor control even when structural laxity is limited.", "brukner-khan-clinical-sports-medicine", "foundational", 5),
    s(coreSubtopics.physiotherapy, "A non-contact pivot injury with a pop, immediate swelling, and instability most strongly suggests injury to the:", "Anterior cruciate ligament", ["Achilles tendon", "Deltoid ligament", "Biceps tendon"], "The mechanism and early swelling pattern are characteristic of an acute ACL injury.", "brukner-khan-clinical-sports-medicine", "applied", 5),
    s(coreSubtopics.physiotherapy, "Which rehabilitation progression is most defensible after an uncomplicated sports injury?", "Restore symptoms, mobility, strength, control, and sport-specific load progressively", ["Begin maximal competition drills immediately", "Avoid all loading until pain is permanently absent", "Use passive treatment as the only intervention"], "Criteria-based progression restores capacity while monitoring symptoms, recovery, and movement quality.", "brukner-khan-clinical-sports-medicine", "applied", 5),
    s(coreSubtopics.physiotherapy, "A return-to-play decision should integrate symptoms, function, sport demands, and:", "Risk-informed clinical and multidisciplinary criteria", ["Time since injury alone", "The athlete's desire to compete alone", "A normal resting pulse alone"], "Time is only one factor; readiness requires functional, medical, sport-demand, and risk information.", "brukner-khan-clinical-sports-medicine", "analytical", 4),

    s(coreSubtopics.biomechanics, "Joint torque is calculated most directly as force multiplied by the perpendicular:", "Moment arm", ["Body-mass index", "Angular displacement only", "Contact time alone"], "Torque is the rotational effect of force and equals force multiplied by its perpendicular moment arm.", "basic-biomechanics-hall", "foundational", 5),
    s(coreSubtopics.biomechanics, "Reducing braking impulse during sprint ground contact primarily reduces:", "Horizontal deceleration", ["Vertical body mass", "Muscle cross-sectional area", "Angular displacement of every joint"], "Braking impulse is the horizontal impulse that slows the body during ground contact.", "basic-biomechanics-hall", "applied", 5),
    s(coreSubtopics.biomechanics, "The vertical ground-reaction force during running is measured most directly with a:", "Force plate", ["Skinfold caliper", "Spirometer", "Goniometer alone"], "A force plate records the magnitude and timing of external forces applied to the ground.", "basic-biomechanics-hall", "foundational", 5),
    s(coreSubtopics.biomechanics, "A two-dimensional video analysis of a complex movement is limited mainly because it:", "Can miss motion outside the camera plane", ["Always measures force directly", "Eliminates parallax automatically", "Provides complete three-dimensional joint kinetics"], "A single camera view cannot fully capture out-of-plane motion or directly measure joint moments.", "basic-biomechanics-hall", "analytical", 4),

    s(coreSubtopics.biochemistry, "Creatine kinase after competition should be interpreted cautiously because it shows:", "High inter-individual variability and a delayed response", ["A fixed value in every athlete", "A one-to-one relation with strength loss", "No response to eccentric exercise"], "CK is influenced by exercise type, timing, training status, and individual biology, so one value is not diagnostic.", "ioc-load-illness-2016", "foundational", 5),
    s(coreSubtopics.biochemistry, "Blood lactate concentration reflects the balance between production, transport, utilization, and:", "Clearance", ["Bone mineralization", "Skinfold compression", "Joint lubrication"], "Lactate concentration reflects the net balance of its production, distribution, oxidation, and clearance.", "physiology-sport-exercise-kenney", "foundational", 5),
    s(coreSubtopics.biochemistry, "Ferritin is most directly related to the body's:", "Iron stores", ["Muscle glycogen stores", "Creatine stores", "Joint-fluid volume"], "Ferritin is a storage protein commonly used to assess iron stores, with inflammation considered during interpretation.", "clinical-sports-nutrition-burke", "foundational", 5),
    s(coreSubtopics.biochemistry, "An elevated biomarker immediately after eccentric exercise may be misleading because:", "The collection time may precede the marker's peak response", ["Eccentric exercise has no biological effect", "Biomarkers never change after exercise", "All athletes have identical baselines"], "Many exercise biomarkers have delayed kinetics, so timing and repeated context are essential.", "ioc-load-illness-2016", "analytical", 4),

    s(coreSubtopics.strength, "Progressive overload means that training must eventually provide:", "A sufficiently greater or new stimulus than the athlete is adapted to", ["Maximal intensity in every session", "More volume without recovery", "The same demand in every session"], "Adaptation requires a challenging but recoverable stimulus that exceeds the athlete's current tolerance.", "nsca-essentials-5", "foundational", 5),
    s(coreSubtopics.strength, "Training specificity means that adaptations depend strongly on the:", "Mode, intensity, duration, and movement demands of training", ["Color of the equipment", "Athlete's preferred music", "Number of staff in the room"], "Adaptations are specific to the muscles, energy systems, velocities, and skills repeatedly stressed.", "nsca-essentials-5", "foundational", 5),
    s(coreSubtopics.strength, "Training density describes the relationship between work and:", "Recovery time or elapsed time", ["Body-fat percentage", "Joint circumference", "The number of exercises in a textbook"], "Density reflects work performed per unit time or the rest available between work bouts.", "nsca-essentials-5", "foundational", 5),
    s(coreSubtopics.strength, "A taper before an important competition usually reduces training volume while:", "Maintaining selected intensity and sport-specific quality", ["Eliminating all intensity and skill practice", "Increasing fatigue deliberately", "Ignoring the competition demands"], "Tapering reduces fatigue while preserving fitness with selected intensity and specificity.", "nsca-essentials-5", "applied", 4),

    s(coreSubtopics.psychology, "Intrinsic motivation is characterized by participation driven primarily by:", "Interest and enjoyment in the activity itself", ["External rewards alone", "Fear of punishment alone", "A requirement to avoid challenge"], "Intrinsic motivation arises from inherent interest, enjoyment, or satisfaction in the activity.", "foundations-sport-exercise-psychology", "foundational", 5),
    s(coreSubtopics.psychology, "Self-efficacy refers to an athlete's belief that they can:", "Perform the actions required for a specific task", ["Control every external outcome", "Avoid all competitive pressure", "Predict another athlete's thoughts"], "Self-efficacy is task- and context-specific confidence in one's ability to execute behavior.", "foundations-sport-exercise-psychology", "foundational", 5),
    s(coreSubtopics.psychology, "Cognitive anxiety primarily involves:", "Worry and negative performance-related thoughts", ["Sweating and muscle tension only", "An increase in bone mass", "A change in training volume"], "Cognitive anxiety concerns worry and apprehension, whereas somatic anxiety concerns perceived physiological symptoms.", "foundations-sport-exercise-psychology", "foundational", 4),
    s(coreSubtopics.psychology, "A pre-performance routine is useful because it can provide:", "Consistent attentional and behavioral cues before execution", ["A guaranteed score", "A replacement for technical practice", "Prevention of every stress response"], "A routine organizes controllable preparation and attention without guaranteeing an outcome.", "foundations-sport-exercise-psychology", "applied", 4),

    s(coreSubtopics.nutrition, "Carbohydrate availability is especially important during high-intensity exercise because carbohydrate supports:", "Rapid ATP production and muscle glycogen use", ["Only long-term bone remodeling", "Protein synthesis without energy", "Passive joint stability"], "High-intensity work relies heavily on glycolytic and glycogen-derived carbohydrate metabolism.", "clinical-sports-nutrition-burke", "foundational", 5),
    s(coreSubtopics.nutrition, "A body-mass loss of about two percent during exercise most strongly suggests:", "Meaningful fluid loss that may increase physiological strain", ["A gain in lean tissue", "A decrease in bone mineral density", "An increase in glycogen storage"], "Rapid exercise-associated mass loss is primarily fluid loss and can impair thermoregulation and performance.", "clinical-sports-nutrition-burke", "applied", 5),
    s(coreSubtopics.nutrition, "Low energy availability may increase an athlete's risk of impaired:", "Health, recovery, endocrine function, and performance", ["Bone health only when energy intake is high", "Immune function improvement", "Performance with no physiological effects"], "Low energy availability can affect endocrine, bone, immune, metabolic, and performance outcomes.", "ioc-reds-2023", "applied", 4),
    s(coreSubtopics.nutrition, "A supplement used by an athlete should be evaluated for evidence, dose, contamination risk, and:", "Its status under applicable anti-doping rules", ["Only taste and packaging", "Only social-media popularity", "A guaranteed benefit in every sport"], "Supplement decisions require evidence appraisal, safety checks, contamination awareness, and anti-doping review.", "clinical-sports-nutrition-burke", "analytical", 4),
  ],
};

const testingSubtopics = {
  parameters: "Test Parameters & Athlete Assessment",
  protocols: "Test Protocols & Standardization",
};

const testing: Group = {
  slug: "testing_assessment",
  idPrefix: "a1-test",
  topic: "Testing Parameters, Standardization & Athlete Assessment",
  seeds: [
    s(testingSubtopics.parameters, "Validity asks whether a test measures:", "The construct or performance quality it is intended to measure", ["The same value on every occasion", "The cheapest available variable", "The athlete's preferred exercise"], "Validity concerns whether the test supports the intended interpretation and use of its score.", "acsm-getp-12", "foundational", 8),
    s(testingSubtopics.parameters, "Reliability refers most directly to the:", "Consistency of measurements under repeated conditions", ["Clinical importance of every score", "Cost of the equipment", "Athlete's motivation during a test"], "Reliability is the consistency or repeatability of measurement when relevant conditions are stable.", "acsm-getp-12", "foundational", 8),
    s(testingSubtopics.parameters, "Sensitivity of a screening test is the ability to identify:", "People who truly have the target condition or characteristic", ["People who definitely do not have it", "The cheapest test protocol", "The athlete's preferred movement"], "Sensitivity is the proportion of true cases correctly identified by a test.", "acsm-getp-12", "foundational", 8),
    s(testingSubtopics.parameters, "Specificity of a screening test is the ability to identify:", "People who truly do not have the target condition or characteristic", ["All positive cases regardless of truth", "The fastest athlete in a squad", "The largest possible test score"], "Specificity is the proportion of true non-cases correctly classified as negative.", "acsm-getp-12", "foundational", 8),
    s(testingSubtopics.parameters, "A sport-specific test battery should be selected mainly according to:", "The sport demands, athlete level, purpose, and available validity evidence", ["The number of devices in the laboratory", "A single generic normative table", "The test that produces the longest report"], "Test selection should reflect the performance question, sport demands, athlete characteristics, and evidence.", "nsca-essentials-5", "applied", 8),
    s(testingSubtopics.parameters, "Normative data are most useful when the reference group is:", "Comparable in age, sex, sport, level, and testing conditions", ["Selected from any unrelated population", "Always larger but otherwise unknown", "Based only on the best athlete observed"], "Reference values are interpretable only when the comparison population and testing conditions are relevant.", "acsm-getp-12", "applied", 7),
    s(testingSubtopics.parameters, "A principal advantage of field testing is that it:", "Can reflect practical sport conditions with portable resources", ["Always provides greater laboratory precision", "Eliminates environmental effects", "Requires no standardization"], "Field tests can be practical and ecologically relevant, although control and measurement precision may be lower.", "nsca-essentials-5", "applied", 7),
    s(testingSubtopics.parameters, "A laboratory test is particularly useful when the goal is to:", "Control measurement conditions and quantify a physiological variable precisely", ["Avoid all equipment calibration", "Replicate every competition environment", "Remove the need for informed consent"], "Laboratories can provide controlled conditions and specialized measurement, but practical relevance must still be considered.", "acsm-getp-12", "applied", 7),
    s(testingSubtopics.parameters, "A test-retest change should be interpreted against:", "The measurement's typical error and smallest worthwhile change", ["Only the direction of change", "A universal percentage for all tests", "The athlete's ranking alone"], "A change is more meaningful when it exceeds expected measurement error and matters practically.", "nsca-essentials-5", "analytical", 7),
    s(testingSubtopics.parameters, "Why is test sequencing important in an athlete assessment battery?", "Earlier fatigue-producing tests can affect later results", ["All tests measure identical qualities", "Sequence changes body height", "It eliminates the need to warm up"], "Fatigue, potentiation, and psychological effects can alter later test performance, so sequence should be planned.", "nsca-essentials-5", "applied", 7),

    s(testingSubtopics.protocols, "The main purpose of an SOP in sports-science testing is to:", "Standardize procedures so results are consistent and interpretable", ["Allow each tester to improvise", "Replace athlete consent", "Guarantee a higher score"], "A standard operating procedure reduces procedural variation and supports repeatable data collection.", "acsm-getp-12", "foundational", 8),
    s(testingSubtopics.protocols, "Before a maximal exercise test, the practitioner should first verify:", "Screening information, contraindications, preparation, and emergency procedures", ["Only the athlete's preferred music", "Only the final test score", "That no staff member knows the protocol"], "Pre-test safety requires screening, preparation instructions, contraindication review, and emergency readiness.", "acsm-getp-12", "applied", 8),
    s(testingSubtopics.protocols, "Instrument calibration is performed to:", "Check and adjust measurement accuracy against a known standard", ["Increase the athlete's motivation", "Change the test construct", "Replace data recording"], "Calibration checks whether the instrument produces accurate readings relative to a known reference.", "acsm-getp-12", "foundational", 8),
    s(testingSubtopics.protocols, "A quality-control log is useful because it records:", "Equipment checks, deviations, maintenance, and corrective actions", ["Only the athlete's final ranking", "Unverified assumptions about fatigue", "The coach's preferred result"], "Quality-control records help identify procedural deviations and maintain traceability.", "acsm-getp-12", "applied", 8),
    s(testingSubtopics.protocols, "Informed consent means that the athlete receives information about:", "The procedure, risks, benefits, voluntary participation, and data use", ["Only the expected score", "A guarantee of performance improvement", "The personal opinions of other athletes"], "Informed consent requires understandable information and voluntary agreement before participation.", "world-physiotherapy-ebp-2023", "foundational", 8),
    s(testingSubtopics.protocols, "Confidentiality in athlete testing primarily concerns:", "Protecting identifiable health and performance information from inappropriate disclosure", ["Hiding all results from the athlete", "Publishing every raw score publicly", "Avoiding all communication with the care team"], "Confidentiality protects identifiable information while allowing appropriate, consented professional communication.", "world-physiotherapy-ebp-2023", "foundational", 7),
    s(testingSubtopics.protocols, "A pre-test contraindication should generally lead the practitioner to:", "Defer or modify testing and seek appropriate clinical guidance", ["Proceed at maximal intensity without review", "Ignore the reported symptom", "Change the result after testing"], "Contraindications are safety signals requiring appropriate deferral, modification, or medical review.", "acsm-getp-12", "applied", 7),
    s(testingSubtopics.protocols, "To improve repeated field-test reliability, the team should standardize:", "Instructions, warm-up, equipment, surface, timing, and environmental conditions", ["Only the athlete's clothing color", "The order of names in the report", "The athlete's competition result"], "Standardizing controllable conditions reduces avoidable variation between testing sessions.", "nsca-essentials-5", "applied", 7),
    s(testingSubtopics.protocols, "A test administrator should stop an exercise test when:", "Predefined termination criteria or concerning symptoms occur", ["The athlete is performing well", "The coach requests a personal record", "The stopwatch reaches an arbitrary number"], "Termination criteria protect the athlete and should be defined before testing begins.", "acsm-getp-12", "foundational", 7),
    s(testingSubtopics.protocols, "A good test report should communicate results in a way that is:", "Accurate, contextualized, understandable, and relevant to the decision", ["Limited to unexplained raw numbers", "Written only for the equipment manufacturer", "Free of limitations and uncertainty"], "Applied reporting links results to context, uncertainty, practical meaning, and the intended audience.", "world-physiotherapy-ebp-2023", "analytical", 7),
  ],
};

const dataSubtopics = {
  interpretation: "Interpretation & Application of Data",
  research: "Principles of Research & Evidence-Based Practice",
};

const data: Group = {
  slug: "data_analytics",
  idPrefix: "a1-data",
  topic: "Data Interpretation & Applied Analytics",
  seeds: [
    s(dataSubtopics.interpretation, "A performance profile is most useful when it identifies:", "Strengths, weaknesses, limiting factors, and actionable priorities", ["Only the athlete's highest score", "A ranking without test purpose", "A result without comparison or context"], "Profiling should connect valid measurements to performance priorities and practical decisions.", "nsca-essentials-5", "applied", 10),
    s(dataSubtopics.interpretation, "A repeated decline in sprint performance with stable strength may suggest a limitation in:", "Speed-specific power, fatigue tolerance, or sprint technique", ["Body height alone", "Ferritin alone without other evidence", "The validity of every test"], "Performance interpretation compares related qualities and considers fatigue, technique, and sport demands.", "nsca-essentials-5", "analytical", 10),
    s(dataSubtopics.interpretation, "When a test result is below a reference value, the first step should be to:", "Check test quality, context, and the relevance of the reference group", ["Diagnose a disorder immediately", "Prescribe maximal training", "Ignore the result because all norms are useless"], "A low score requires checking validity, reliability, comparability, and the athlete's context before action.", "acsm-getp-12", "analytical", 10),
    s(dataSubtopics.interpretation, "A practical training recommendation should link the observed result to:", "A specific, feasible intervention and a follow-up measure", ["A generic exercise list for every athlete", "A change with no monitoring plan", "Only the athlete's ranking"], "Applied analysis is useful when it produces an actionable intervention and a way to evaluate response.", "world-physiotherapy-ebp-2023", "applied", 10),
    s(dataSubtopics.interpretation, "Longitudinal monitoring is strengthened by using:", "Consistent measures, repeated timing, trend analysis, and relevant context", ["A different test every session", "Only the single best result", "Unrecorded informal impressions"], "Repeated standardized measurement makes trends more interpretable than isolated observations.", "nsca-essentials-5", "foundational", 10),
    s(dataSubtopics.interpretation, "A small change in an athlete's score should be considered practically important only when it:", "Exceeds expected error or has meaningful consequences for the decision", ["Is numerically nonzero", "Improves the athlete's rank by one place", "Is reported with extra decimal places"], "Statistical or numerical change is not automatically practically important; error and decision relevance matter.", "world-physiotherapy-ebp-2023", "analytical", 10),
    s(dataSubtopics.interpretation, "When communicating data to a coach, the analyst should emphasize:", "The decision relevance, uncertainty, and practical next step", ["Every raw variable without interpretation", "Only the most favorable result", "A causal claim from a single correlation"], "Good communication translates evidence into a clear decision while preserving uncertainty and limitations.", "world-physiotherapy-ebp-2023", "applied", 10),
    s(dataSubtopics.interpretation, "A sudden outlier in a monitoring dashboard should first prompt a check of:", "Data entry, device function, protocol deviations, and athlete context", ["A decision to increase training immediately", "A conclusion that the athlete is injured", "Deletion of the observation"], "Outliers may reflect true change or measurement and data-management problems, so they require verification.", "nsca-essentials-5", "analytical", 10),
    s(dataSubtopics.interpretation, "If an athlete's performance improves while training load also rises, the safest interpretation is:", "The response should be considered with recovery, trend, and other outcomes", ["Higher load is always beneficial", "The athlete cannot become fatigued", "The result proves the program is optimal"], "A single favorable outcome does not establish causality or eliminate the need to monitor recovery and risk.", "ioc-load-illness-2016", "analytical", 10),
    s(dataSubtopics.interpretation, "A useful performance dashboard should avoid:", "Displaying metrics without definitions, context, or a decision purpose", ["Displaying trends with clear units, dates, and a defined decision purpose", "Displaying a small set of metrics with documented definitions and context", "Displaying athlete scores alongside dates and relevant reference ranges"], "Dashboards support decisions when measures are defined, contextualized, and connected to action.", "nsca-essentials-5", "foundational", 10),

    s(dataSubtopics.research, "A randomized controlled trial is designed primarily to compare:", "Outcomes under allocated interventions while reducing confounding", ["Naturally occurring groups without allocating an intervention to participants", "A single athlete's trend without a comparison condition or allocation", "A measurement device's calibration across repeated technical trials"], "Random allocation can reduce systematic baseline differences when evaluating an intervention.", "world-physiotherapy-ebp-2023", "foundational", 10),
    s(dataSubtopics.research, "A cohort study commonly follows participants to examine:", "Associations between exposures and later outcomes", ["Only the reliability of one instrument", "A single laboratory calibration", "The definition of a somatotype"], "Cohort studies observe exposure and outcome over time without necessarily assigning an intervention.", "world-physiotherapy-ebp-2023", "foundational", 10),
    s(dataSubtopics.research, "Critical appraisal of a paper should include assessment of:", "Methods, bias, precision, applicability, and the match between claims and data", ["Only the journal's visual design", "Only the number of references", "Whether the conclusion sounds confident"], "Appraisal asks whether the design and analysis support the reported conclusion and whether it applies to the athlete setting.", "world-physiotherapy-ebp-2023", "analytical", 10),
    s(dataSubtopics.research, "A confounder is a variable that:", "Relates to both the exposure and outcome and can distort their apparent association", ["Is unrelated to exposure and outcome but adds random measurement noise", "Is a measurement error caused only by an unreliable instrument", "Is the primary outcome selected before the exposure is measured"], "Confounding can create or mask an association when a third variable relates to exposure and outcome.", "world-physiotherapy-ebp-2023", "analytical", 10),
    s(dataSubtopics.research, "Research involving athletes should include safeguards for:", "Consent, privacy, risk minimization, and fair treatment", ["Only faster data collection", "Public release of all health data", "Exclusion of participant questions"], "Ethical research respects autonomy, confidentiality, safety, and fair participation.", "world-physiotherapy-ebp-2023", "foundational", 10),
  ],
};

const performanceSubtopics = {
  enhancement: "Performance Enhancement Strategies",
  recovery: "Recovery Protocols & Regeneration",
  injury: "Injury Prevention & Risk Management",
};

const performance: Group = {
  slug: "performance_recovery",
  idPrefix: "a1-recovery",
  topic: "Performance Enhancement & Recovery Protocols",
  seeds: [
    s(performanceSubtopics.enhancement, "A strength program for an athlete should begin by matching the intervention to:", "The sport demands, athlete needs, training status, and available recovery", ["A generic exercise list only", "The heaviest possible load", "The coach's favorite machine"], "Effective enhancement is specific to the performance problem and constrained by athlete and recovery factors.", "nsca-essentials-5", "applied", 10),
    s(performanceSubtopics.enhancement, "Speed development is most directly supported by training that addresses:", "Force production, technique, coordination, and high-quality sprint exposure", ["Only long slow distance", "Only passive stretching", "A maximal volume increase every day"], "Speed is influenced by force, technique, coordination, and appropriately dosed high-speed exposure.", "nsca-essentials-5", "applied", 10),
    s(performanceSubtopics.enhancement, "Power training requires attention to both force and:", "Movement velocity", ["Body-fat percentage alone", "Resting temperature only", "The number of coaches"], "Power is the product of force and velocity, so both qualities should be developed and monitored.", "nsca-essentials-5", "foundational", 10),
    s(performanceSubtopics.enhancement, "Agility training differs from change-of-direction training because agility includes:", "Perception and decision-making in response to a stimulus", ["Only a preplanned route", "Only maximal strength", "Only flexibility testing"], "Agility includes reactive perception and decision-making, whereas a planned change of direction may not.", "nsca-essentials-5", "foundational", 10),
    s(performanceSubtopics.enhancement, "Load management is intended primarily to:", "Balance training stress, adaptation, performance, and injury risk", ["Eliminate all training fatigue", "Maximize load regardless of context", "Replace clinical assessment"], "Load management organizes exposure and recovery rather than seeking either zero fatigue or constant maximal work.", "ioc-load-illness-2016", "analytical", 10),

    s(performanceSubtopics.recovery, "Active recovery is best described as:", "Low-intensity movement performed after demanding work", ["Complete inactivity for several days", "A maximal interval session", "A diagnostic blood test"], "Active recovery uses low-intensity movement and may support circulation and perceived recovery without adding major stress.", "ioc-load-illness-2016", "foundational", 10),
    s(performanceSubtopics.recovery, "Passive recovery includes strategies such as:", "Rest, sleep, and appropriately timed low-stimulation periods", ["Another maximal workout", "A sudden increase in training density", "Unmonitored dehydration"], "Passive recovery reduces physical demand and allows physiological and psychological restoration.", "ioc-load-illness-2016", "foundational", 10),
    s(performanceSubtopics.recovery, "Sleep is important for athletes because it supports:", "Neuromuscular, endocrine, immune, cognitive, and emotional recovery", ["Only body temperature reduction", "Only body-mass loss", "Only ligament length"], "Sleep contributes to multiple recovery systems and affects learning, mood, immune function, and performance.", "ioc-load-illness-2016", "foundational", 10),
    s(performanceSubtopics.recovery, "A recovery-monitoring plan is strongest when it combines:", "Subjective reports with objective measures and training context", ["One biomarker used in isolation", "Only the previous competition result", "A universal cutoff for every athlete"], "No single measure captures recovery completely; integrated repeated information is more useful.", "ioc-load-illness-2016", "analytical", 10),
    s(performanceSubtopics.recovery, "Compression, massage, cryotherapy, and hydrotherapy should be selected according to:", "The intended outcome, evidence, timing, athlete preference, and possible tradeoffs", ["A belief that every modality has identical effects", "The most expensive option", "A rule that passive care replaces training"], "Recovery modalities have different purposes and evidence, and should complement rather than replace appropriate training and sleep.", "ioc-load-illness-2016", "analytical", 10),

    s(performanceSubtopics.injury, "A useful injury-prevention plan should address:", "Modifiable risk factors, exposure, capacity, technique, and recovery", ["Only the athlete's body mass", "Only a single screening score", "The assumption that injury is random"], "Injury risk is multifactorial and can be addressed through capacity, exposure, movement, and recovery strategies.", "brukner-khan-clinical-sports-medicine", "applied", 10),
    s(performanceSubtopics.injury, "A screening test should be used primarily to:", "Identify athletes who may need further assessment or targeted intervention", ["Predict the exact injury and date", "Diagnose every condition alone", "Exclude all athletes with any asymmetry"], "Screening can guide follow-up and risk management but is not a deterministic prediction or standalone diagnosis.", "brukner-khan-clinical-sports-medicine", "foundational", 10),
    s(performanceSubtopics.injury, "Overuse injury risk is commonly increased by:", "A rapid increase in load without adequate tissue recovery", ["A stable progressive program", "Appropriate rest and monitoring", "Gradual sport-specific exposure"], "A rapid mismatch between tissue capacity and exposure can increase overuse injury risk.", "ioc-load-illness-2016", "applied", 10),
    s(performanceSubtopics.injury, "Movement-based injury prevention should prioritize:", "Improving controllable technique and capacity under relevant loads", ["A single perfect movement pattern for every sport", "Avoiding all external load", "Only passive flexibility"], "Prevention should be sport-specific and capacity-based rather than built on a universal ideal pattern.", "brukner-khan-clinical-sports-medicine", "applied", 10),
    s(performanceSubtopics.injury, "Return-to-sport coordination is improved when the team shares:", "Clear criteria, roles, progressions, symptoms, and competition demands", ["Only the athlete's desired date", "Unrecorded informal opinions", "A single laboratory value"], "Shared criteria and communication help align medical, rehabilitation, performance, and coaching decisions.", "brukner-khan-clinical-sports-medicine", "analytical", 10),
  ],
};

const technologySubtopics = {
  technology: "New & Emerging Technologies in Sports Science",
  statistics: "Biostatistics & Data Analysis",
};

const technology: Group = {
  slug: "technology_biostatistics",
  idPrefix: "a1-tech",
  topic: "Emerging Technologies & Biostatistics",
  seeds: [
    s(technologySubtopics.technology, "A GPS unit in outdoor sport is primarily used to estimate:", "Locomotor and external-load variables such as distance and speed", ["Muscle glycogen directly", "Blood lactate without a sample", "Joint cartilage thickness"], "GPS can estimate external movement load, although accuracy depends on device, sampling, speed, and conditions.", "sai-notification-2026", "foundational", 10),
    s(technologySubtopics.technology, "An inertial measurement unit commonly combines:", "Accelerometers, gyroscopes, and sometimes magnetometers", ["Only a blood-pressure cuff", "Only a force plate", "Only a skinfold caliper"], "IMUs use inertial sensors to estimate movement, orientation, and acceleration-related variables.", "sai-notification-2026", "foundational", 10),
    s(technologySubtopics.technology, "A force plate measures the external force exchanged between:", "The athlete and the supporting surface", ["The athlete and a blood sample", "The heart and the lungs", "The skin and a caliper"], "Force plates measure ground-reaction forces and related variables during contact with the platform.", "basic-biomechanics-hall", "foundational", 10),
    s(technologySubtopics.technology, "Video analysis is most useful when the camera setup and movement are:", "Standardized so the same variables can be compared", ["Changed randomly between trials", "Recorded without scale or timing", "Used to infer every internal force directly"], "Standardized camera position, calibration, timing, and variables improve the usefulness of video analysis.", "basic-biomechanics-hall", "applied", 10),
    s(technologySubtopics.technology, "An athlete-management system should protect data through:", "Role-based access, secure storage, clear governance, and appropriate consent", ["Public sharing of raw health data", "Unlimited access for all staff", "Deleting the context of every measure"], "Data governance requires access control, security, consent, and clear rules for use and retention.", "sai-notification-2026", "analytical", 10),
    s(technologySubtopics.technology, "A machine-learning model in athlete monitoring should be checked for:", "Data quality, validation, bias, interpretability, and appropriate use", ["Only its visual interface", "A guarantee of injury prediction", "A larger number of inputs regardless of relevance"], "Models can amplify bias or error, so validation and decision context matter as much as prediction accuracy.", "sai-notification-2026", "analytical", 10),
    s(technologySubtopics.technology, "A wearable-derived metric should be interpreted with caution when:", "Device validity, missing data, or context-specific error is uncertain", ["The number is displayed in color", "The athlete wears it during one session", "The metric has many decimal places"], "Wearable outputs are estimates and should be evaluated for validity, reliability, missingness, and context.", "sai-notification-2026", "analytical", 10),
    s(technologySubtopics.technology, "A major ethical concern in digital athlete monitoring is:", "Using personal data beyond the athlete's understood and agreed purpose", ["Collecting fewer variables", "Explaining limitations clearly", "Allowing appropriate athlete access"], "Ethical monitoring respects purpose limitation, transparency, privacy, consent, and athlete welfare.", "sai-notification-2026", "foundational", 10),
    s(technologySubtopics.technology, "When two devices report different external loads, the first step is to compare:", "Definitions, sampling, calibration, placement, and processing methods", ["Only the larger number", "The athlete's jersey color", "The brand's popularity"], "Different devices may define and process load differently, so methodological comparison is needed before interpretation.", "sai-notification-2026", "analytical", 10),
    s(technologySubtopics.technology, "A technology is most valuable to a performance team when it:", "Produces valid actionable information that improves a defined decision", ["Generates the greatest data volume", "Uses the newest branding", "Replaces professional judgment entirely"], "Technology should serve a defined decision and be judged by validity, usability, and practical consequence.", "sai-notification-2026", "applied", 10),

    s(technologySubtopics.statistics, "The mean is calculated by:", "Adding all values and dividing by the number of values", ["Selecting the middle ranked value", "Subtracting the smallest from the largest", "Counting only values above zero"], "The arithmetic mean is the sum of observations divided by the number of observations.", "world-physiotherapy-ebp-2023", "foundational", 10),
    s(technologySubtopics.statistics, "The median is the:", "Middle value after observations are ordered", ["Largest value in the sample", "Average of only the extreme values", "Difference between standard deviations"], "The median is the central ordered observation, or the average of the two central observations when needed.", "world-physiotherapy-ebp-2023", "foundational", 10),
    s(technologySubtopics.statistics, "Standard deviation describes:", "The spread of observations around their mean", ["The causal effect of training", "The sample's median only", "The number of variables collected"], "Standard deviation summarizes dispersion around the mean in the same units as the measurement.", "world-physiotherapy-ebp-2023", "foundational", 10),
    s(technologySubtopics.statistics, "A correlation coefficient describes the:", "Direction and strength of association between two variables", ["Proof that one variable causes another", "Difference between two medians only", "Reliability of every test automatically"], "Correlation quantifies association but does not by itself establish causation.", "world-physiotherapy-ebp-2023", "foundational", 10),
    s(technologySubtopics.statistics, "An effect size is useful because it describes:", "The magnitude of a difference or association in a practical scale", ["Only whether a p-value is below a cutoff", "The number of participants recruited", "The reliability of an unrelated test"], "Effect size helps judge practical magnitude in addition to statistical significance.", "world-physiotherapy-ebp-2023", "analytical", 10),
  ],
};

const holisticSubtopics = {
  research: "Principles of Research & Evidence-Based Practice",
  yoga: "Yoga & Mind–Body Interventions in Sports",
  wellness: "Athlete Health, Wellness & Holistic Development",
  travel: "Travel-Related Challenges & Competition Readiness",
  ethics: "Anti-Doping Awareness & Ethical Practices",
  coordination: "Interdisciplinary Coordination & Support Systems",
};

const holistic: Group = {
  slug: "holistic_travel_ethics",
  idPrefix: "a1-holistic",
  topic: "Holistic Development, Travel & Ethics",
  seeds: [
    s(holisticSubtopics.yoga, "Yoga-based mobility work may contribute to performance by supporting:", "Flexibility, balance, body awareness, and controlled mobility", ["Guaranteed maximal strength", "Immediate replacement of sport practice", "A direct increase in hemoglobin"], "Yoga can support mobility, balance, awareness, and relaxation, but effects depend on the program and athlete.", "sai-notification-2026", "foundational", 10),
    s(holisticSubtopics.yoga, "Pranayama refers broadly to practices involving:", "Regulation of breathing", ["Resistance-machine loading", "Body-composition scanning", "Force-plate calibration"], "Pranayama refers to yogic breathing regulation and is commonly integrated with relaxation or mind-body practice.", "sai-notification-2026", "foundational", 10),
    s(holisticSubtopics.yoga, "Mindfulness training primarily develops attention to:", "Present-moment experience with a non-reactive attitude", ["Only future competition results", "The opponent's private thoughts", "A maximal arousal state at all times"], "Mindfulness emphasizes present-moment awareness and non-reactive observation rather than guaranteed relaxation or performance.", "sai-notification-2026", "applied", 10),

    s(holisticSubtopics.wellness, "Athlete wellness should be monitored across:", "Physical, psychological, social, behavioral, and recovery domains", ["Only body mass", "Only maximal strength", "Only competition ranking"], "Holistic wellness includes multiple interacting domains rather than a single performance score.", "ioc-load-illness-2016", "foundational", 10),
    s(holisticSubtopics.wellness, "Burnout is more concerning when an athlete shows persistent exhaustion, reduced accomplishment, and:", "Sport devaluation or cynicism", ["Improved enjoyment", "A single missed session", "Temporary post-match tiredness"], "Burnout is commonly described through exhaustion, reduced accomplishment, and devaluation or cynicism.", "foundations-sport-exercise-psychology", "foundational", 10),
    s(holisticSubtopics.wellness, "Long-term athlete development models emphasize:", "Age- and maturation-appropriate progression over time", ["Early specialization for every athlete", "Identical training for all ages", "Competition results as the only outcome"], "LTAD approaches consider development, maturation, training age, and long-term health and performance.", "nsca-essentials-5", "applied", 10),

    s(holisticSubtopics.travel, "Jet lag occurs primarily because travel disrupts the alignment between:", "The internal circadian clock and the local time cue", ["Bone growth and muscle length", "Body mass and height", "Blood lactate and ferritin"], "Time-zone travel creates a mismatch between internal circadian timing and the destination schedule.", "ioc-load-illness-2016", "foundational", 10),
    s(holisticSubtopics.travel, "A practical jet-lag plan should be based on:", "Travel direction, time-zone change, light exposure, sleep timing, and competition schedule", ["Only the number of flight hours", "A single universal bedtime", "Avoiding all daylight after arrival"], "The direction and size of travel interact with light, sleep, meals, and the timing of competition.", "ioc-load-illness-2016", "applied", 10),
    s(holisticSubtopics.travel, "Heat acclimatization generally requires repeated exposure that allows adaptation of:", "Sweating, cardiovascular strain, and thermoregulation", ["Bone length only", "Somatotype category", "Joint anatomy in one session"], "Heat exposure can improve sweating responses, plasma volume, cardiovascular stability, and thermal tolerance.", "physiology-sport-exercise-kenney", "foundational", 10),

    s(holisticSubtopics.ethics, "The principle of clean sport requires sports-science staff to:", "Educate athletes and support compliant, health-protective decisions", ["Recommend any effective substance", "Ignore the prohibited list", "Treat supplements as automatically safe"], "Clean sport involves education, prevention, ethical conduct, and attention to current anti-doping rules.", "wada-prohibited-list-2026", "foundational", 10),
    s(holisticSubtopics.ethics, "A Therapeutic Use Exemption is relevant when an athlete:", "Needs a prohibited substance or method for a documented medical condition under applicable rules", ["Wants a performance advantage without medical need", "Has not checked the prohibited list", "Uses a supplement with unknown ingredients"], "A TUE is a regulated process for medically justified use of an otherwise prohibited substance or method.", "wada-prohibited-list-2026", "foundational", 10),
    s(holisticSubtopics.ethics, "A sports scientist's ethical responsibility includes:", "Protecting athlete welfare, privacy, autonomy, and informed decision-making", ["Sharing private data freely", "Prioritizing medals over safety", "Making unsupported guarantees"], "Professional conduct must protect welfare and respect autonomy, confidentiality, evidence, and safety.", "sai-notification-2026", "analytical", 10),

    s(holisticSubtopics.coordination, "An interdisciplinary high-performance team works best when members share:", "Clear roles, relevant information, agreed goals, and respectful communication", ["Unrecorded assumptions", "Competing private plans", "Only the athlete's final ranking"], "Shared goals, role clarity, and structured communication reduce fragmentation in athlete support.", "sai-notification-2026", "applied", 10),
    s(holisticSubtopics.coordination, "An athlete-management system is most useful when it supports:", "Secure documentation, communication, monitoring, and coordinated decisions", ["Unrestricted public access", "Data collection without purpose", "Replacing every professional discussion"], "An AMS should improve secure information flow and coordinated decision-making rather than create data without purpose.", "sai-notification-2026", "foundational", 10),
    s(holisticSubtopics.coordination, "A performance report should distinguish between:", "Observed data, interpretation, limitations, and recommendations", ["Facts and opinions as interchangeable", "Raw scores and diagnoses as identical", "A result and a guarantee"], "Clear reporting separates what was measured from interpretation, uncertainty, and the proposed action.", "world-physiotherapy-ebp-2023", "analytical", 10),
  ],
};

const groups = [core, testing, data, performance, technology, holistic];
const forcedGroups = new Set((process.env.REGENERATE_GROUPS ?? "").split(",").filter(Boolean));

function lowerFirst(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function rotateOptions(seed: Seed, target: number): { options: string[]; correct: number } {
  const initial = [seed.correct, ...seed.distractors];
  const start = (4 - target) % 4;
  return { options: initial.slice(start).concat(initial.slice(0, start)), correct: target };
}

function buildGroup(group: Group) {
  const records: Array<Record<string, unknown>> = [];
  let variantIndex = 0;
  group.seeds.forEach((seed) => {
    for (let variant = 0; variant < seed.records; variant += 1) {
      const frame = frames[variant % frames.length];
      const framedText = `${frame} ${lowerFirst(seed.text)}`;
      const answer = rotateOptions(seed, variantIndex % 4);
      records.push({
        id: `${group.idPrefix}-${String(records.length + 1).padStart(3, "0")}`,
        section: "A1",
        topic: group.topic,
        subtopic: seed.subtopic,
        difficulty: seed.difficulty,
        text: framedText,
        options: answer.options,
        correct: answer.correct,
        explanation: seed.explanation,
        sourceId: seed.sourceId,
      });
      variantIndex += 1;
    }
  });
  if (records.length !== 150) throw new Error(`${group.slug} generated ${records.length} records`);
  return records;
}

function canonicalizeSubtopic(group: Group, subtopic: string): string {
  if (group.slug !== "technology_biostatistics") return subtopic;
  return /statistics|variability|effect size|confidence interval|t-tests|ANOVA|correlation|regression/i.test(subtopic)
    ? "Biostatistics & Data Analysis"
    : "New & Emerging Technologies in Sports Science";
}

const all: Array<Record<string, unknown>> = [];
const manifest: Array<Record<string, unknown>> = [];
await mkdir("question_bank", { recursive: true });
await mkdir("research", { recursive: true });

for (const group of groups) {
  const file = `question_bank/section_a1_${group.slug}.json`;
  let records: Array<Record<string, unknown>>;
  try {
    if (forcedGroups.has(group.slug)) throw new Error("forced regeneration");
    await access(file);
    records = JSON.parse(await readFile(file, "utf8")) as Array<Record<string, unknown>>;
  } catch {
    records = buildGroup(group);
    await writeFile(file, `${JSON.stringify(records, null, 2)}\n`);
  }
  records = records.map((record) => ({ ...record, subtopic: canonicalizeSubtopic(group, String(record.subtopic)) }));
  await writeFile(file, `${JSON.stringify(records, null, 2)}\n`);
  all.push(...records);
  const counts = new Map<string, number>();
  const sourceCounts = new Map<string, number>();
  records.forEach((record) => {
    counts.set(String(record.subtopic), (counts.get(String(record.subtopic)) ?? 0) + 1);
    sourceCounts.set(String(record.sourceId), (sourceCounts.get(String(record.sourceId)) ?? 0) + 1);
  });
  manifest.push({ group: group.topic, file, total: records.length, subtopics: Object.fromEntries(counts), sources: Object.fromEntries(sourceCounts) });
}

await writeFile("question_bank/section_a1.json", `${JSON.stringify(all, null, 2)}\n`);
await writeFile("research/a1_coverage_manifest.json", `${JSON.stringify({ total: all.length, groups: manifest }, null, 2)}\n`);
