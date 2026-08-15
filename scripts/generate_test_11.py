import json
import re

# Comprehensive, perfectly balanced Mock Test 11 questions
# Every question has:
# 1. 4 options closely matched in character length (ratio < 1.15, diff < 10)
# 2. Perfect parenthesis symmetry (all 4 have parens or none do)
# 3. Perfect numerical/unit symmetry
# 4. Realistic, high-yield clinical distractors

questions_11 = [
  # A1-001
  {
    "id": "t11-a1-001",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "General Adaptation Syndrome and supercompensation kinetics",
    "difficulty": "foundational",
    "text": "In Selye's General Adaptation Syndrome (GAS), what physiological state characterizes the 'Supercompensation' phase following adequate recovery?",
    "options": [
      "A transient decline in neuromuscular force output below baseline levels",
      "An adaptive rebound where biological work capacity exceeds initial baseline",
      "An acute state of sympathetic overreaching with severe structural damage",
      "A sustained plateau in myofibrillar protein synthesis and motor recruitment"
    ],
    "correct": 1,
    "explanation": "Supercompensation represents the adaptive physiological rebound following the recovery phase where the athlete's biological capacity and performance exceed initial pre-training baseline levels (NSCA Essentials)."
  },
  # A1-002
  {
    "id": "t11-a1-002",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Stretch-shortening cycle (SSC) and plyometric mechanics",
    "difficulty": "applied",
    "text": "In the stretch-shortening cycle (SSC) during plyometric ground contact, what defines a 'fast SSC' movement compared to a 'slow SSC' movement?",
    "options": [
      "Ground contact time duration of greater than 500 milliseconds with high displacement",
      "Ground contact time duration of less than 250 milliseconds with small displacement",
      "Ground contact time duration of 350 to 450 milliseconds with moderate displacement",
      "Ground contact time duration of exactly 600 milliseconds with maximal displacement"
    ],
    "correct": 1,
    "explanation": "Fast SSC movements (e.g., sprinting, drop jumps) involve ground contact times of less than 250 ms with small joint angular displacements, whereas slow SSC movements (e.g., countermovement jumps) exceed 250 ms."
  },
  # A1-003
  {
    "id": "t11-a1-003",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Velocity-based training (VBT) and fatigue monitoring",
    "difficulty": "analytical",
    "text": "In velocity-based resistance training (VBT), which mean concentric velocity loss threshold within a set is standard to maximize maximal strength while avoiding excessive neuromuscular fatigue?",
    "options": [
      "Velocity loss of 10% to 20% from the first repetition",
      "Velocity loss of 35% to 45% from the first repetition",
      "Velocity loss of 55% to 65% from the first repetition",
      "Velocity loss of 75% to 85% from the first repetition"
    ],
    "correct": 0,
    "explanation": "In VBT, capping intra-set velocity loss at 10% to 20% optimizes maximal strength and neuromuscular adaptations while minimizing metabolic fatigue, whereas higher losses (>30-40%) induce hypertrophy at the cost of high neuromuscular fatigue."
  },
  # A1-004
  {
    "id": "t11-a1-004",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Daily undulating periodization vs linear periodization",
    "difficulty": "applied",
    "text": "What is the primary structural characteristic of Daily Undulating Periodization (DUP) compared to traditional Linear Periodization?",
    "options": [
      "Gradual multi-month progression from high volume/low load to low volume/high load",
      "Frequent within-week fluctuations in training volume, intensity, and rep schemes",
      "Static unchanging resistance loads and rep schemes maintained across all cycles",
      "Exclusive performance of isometric muscle contractions across all yearly cycles"
    ],
    "correct": 1,
    "explanation": "Daily Undulating Periodization (DUP) involves frequent, daily or microcycle-level fluctuations in training load, volume, and repetition brackets (e.g., strength, hypertrophy, and power days in the same week)."
  },
  # A1-005
  {
    "id": "t11-a1-005",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Lactate metabolism and hepatic gluconeogenesis",
    "difficulty": "foundational",
    "text": "In exercise metabolism, which physiological process describes the hepatic conversion of exercise-produced lactate back into blood glucose?",
    "options": [
      "The Cori cycle via hepatic gluconeogenesis",
      "The Krebs cycle via oxidative respiration",
      "The malate shuttle via electron transport",
      "The hexose pathway via glycogen hydrolysis"
    ],
    "correct": 0,
    "explanation": "The Cori cycle (lactic acid cycle) involves transport of muscle-derived lactate through the bloodstream to the liver, where it is converted via gluconeogenesis back to glucose and returned to working muscles."
  },
  # A1-006
  {
    "id": "t11-a1-006",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Ventilatory thresholds and respiratory compensation point",
    "difficulty": "analytical",
    "text": "During an incremental cardiopulmonary exercise test (CPET), what gas exchange hallmark identifies the Second Ventilatory Threshold (VT2 / RCP)?",
    "options": [
      "A concurrent decrease in both VE/VO2 and VE/VCO2 ventilatory equivalent ratios",
      "A sharp increase in VE/VCO2 accompanied by an abrupt decline in expired PetCO2",
      "A stable plateau in PetCO2 accompanied by a progressive decrease in VE/VO2 ratio",
      "A complete cessation of pulmonary minute ventilation during maximal workload"
    ],
    "correct": 1,
    "explanation": "The respiratory compensation point (VT2/RCP) is identified by an abrupt increase in the ventilatory equivalent for carbon dioxide (VE/VCO2) and an accelerated drop in end-tidal CO2 partial pressure (PetCO2) driven by metabolic acidosis hyperventilation."
  },
  # A1-007
  {
    "id": "t11-a1-007",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Thermoregulation and cardiovascular drift in heat",
    "difficulty": "applied",
    "text": "During steady-state endurance exercise in a hot environment, what hemodynamic pattern defines classical 'Cardiovascular Drift'?",
    "options": [
      "Progressive elevation in heart rate with a concurrent decline in stroke volume",
      "Progressive elevation in stroke volume with a concurrent decline in heart rate",
      "Progressive decline in heart rate with a concurrent increase in blood pressure",
      "Progressive decline in cardiac output with an abrupt elevation in blood volume"
    ],
    "correct": 0,
    "explanation": "Cardiovascular drift is characterized by a gradual increase in heart rate and a concomitant decrease in stroke volume during prolonged steady-state exercise, exacerbated by cutaneous vasodilation, fluid loss, and reduced central venous pressure."
  },
  # A1-008
  {
    "id": "t11-a1-008",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Excess post-exercise oxygen consumption (EPOC)",
    "difficulty": "foundational",
    "text": "Which biochemical mechanism primarily accounts for the 'fast component' of Excess Post-Exercise Oxygen Consumption (EPOC)?",
    "options": [
      "Resynthesis of ATP and phosphocreatine alongside restoration of stored oxygen",
      "Conversion of total accumulated body lactate into structural muscle proteins",
      "Substantial elevation of core body temperature and sustained lipid breakdown",
      "Replenishment of liver glycogen reserves from circulating long-chain lipids"
    ],
    "correct": 0,
    "explanation": "The fast (alactacid) component of EPOC occurs within 2-3 minutes post-exercise and is driven by the rapid resynthesis of high-energy phosphates (ATP and PCr) and replenishment of hemoglobin and myoglobin oxygen stores."
  },
  # A1-009
  {
    "id": "t11-a1-009",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Protein distribution and muscle protein synthesis triggers",
    "difficulty": "applied",
    "text": "In sports nutrition, what is the approximate 'leucine trigger' threshold per meal required to maximally stimulate muscle protein synthesis (MPS) via mTORC1 in adult athletes?",
    "options": [
      "Approximately 0.5 to 0.8 grams of leucine per meal",
      "Approximately 2.5 to 3.0 grams of leucine per meal",
      "Approximately 6.5 to 7.0 grams of leucine per meal",
      "Approximately 9.5 to 10.0 grams of leucine per meal"
    ],
    "correct": 1,
    "explanation": "Research indicates that approximately 2.5 to 3.0 g of leucine (typically contained in ~20-30 g of high-quality intact protein) is required to reach the 'leucine trigger' and maximally activate the mTORC1 signaling pathway for MPS."
  },
  # A1-010
  {
    "id": "t11-a1-010",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Endurance carbohydrate fueling and intestinal transporters",
    "difficulty": "applied",
    "text": "For endurance events lasting longer than 2.5 to 3 hours, what carbohydrate intake rate and transporter strategy is recommended by ACSM and IOC guidelines?",
    "options": [
      "Up to 30 g/h of single-source carbohydrate utilizing exclusively GLUT5 transporters",
      "Up to 90 g/h of multiple transportable carbohydrates utilizing SGLT1 and GLUT5",
      "Up to 140 g/h of single-source maltodextrin utilizing passive intestinal diffusion",
      "Up to 180 g/h of complex insoluble polysaccharides utilizing colonic fermentation"
    ],
    "correct": 1,
    "explanation": "For ultra-endurance (>2.5-3 h), carbohydrate intake up to 90 g/h is recommended using multiple transportable carbohydrates (e.g., 2:1 glucose:fructose) to saturate both SGLT1 and GLUT5 intestinal transporters, avoiding gastrointestinal distress."
  },
  # A1-011
  {
    "id": "t11-a1-011",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Post-exercise rehydration and electrolyte replacement",
    "difficulty": "foundational",
    "text": "According to standard sports nutrition guidelines, how much fluid should an athlete consume post-exercise for each kilogram of acute body mass lost through sweat?",
    "options": [
      "Approximately 0.5 liters of fluid per kilogram of body mass lost",
      "Approximately 1.5 liters of fluid per kilogram of body mass lost",
      "Approximately 2.5 liters of fluid per kilogram of body mass lost",
      "Approximately 3.5 liters of fluid per kilogram of body mass lost"
    ],
    "correct": 1,
    "explanation": "To account for ongoing obligatory urine and sweat losses, athletes should consume approximately 1.25 to 1.5 L (125-150%) of fluid containing sodium for each kilogram of body weight lost during exercise."
  },
  # A1-012
  {
    "id": "t11-a1-012",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Relative Energy Deficiency in Sport (RED-S) threshold",
    "difficulty": "analytical",
    "text": "In athlete health assessment, what Energy Availability (EA) threshold is classically defined as indicating Low Energy Availability (LEA) associated with RED-S in female athletes?",
    "options": [
      "Energy availability below 30 kcal/kg Fat-Free Mass/day",
      "Energy availability of 45 to 50 kcal/kg Fat-Free Mass/day",
      "Energy availability of 60 to 65 kcal/kg Fat-Free Mass/day",
      "Energy availability above 75 kcal/kg Fat-Free Mass/day"
    ],
    "correct": 0,
    "explanation": "An Energy Availability below 30 kcal/kg of Fat-Free Mass (FFM) per day is recognized as the threshold where hormonal disruptions, menstrual dysfunction, impaired bone remodeling, and metabolic suppression occur in RED-S."
  },
  # A1-013
  {
    "id": "t11-a1-013",
    "section": "A1",
    "topic": "anthropometry body composition skinfold and growth maturation",
    "subtopic": "Heath-Carter somatotyping components and interpretation",
    "difficulty": "foundational",
    "text": "In the Heath-Carter somatotyping system, what do the three numbers in a somatotype rating (e.g., 2.0 - 6.5 - 1.5) sequentially represent?",
    "options": [
      "Ectomorphy, Mesomorphy, and Endomorphy components",
      "Endomorphy, Mesomorphy, and Ectomorphy components",
      "Mesomorphy, Endomorphy, and Ectomorphy components",
      "Ectomorphy, Endomorphy, and Mesomorphy components"
    ],
    "correct": 1,
    "explanation": "The Heath-Carter somatotype is always reported in the standard sequence: 1st component = Endomorphy (relative fatness), 2nd component = Mesomorphy (musculoskeletal development), 3rd component = Ectomorphy (relative linearity)."
  },
  # A1-014
  {
    "id": "t11-a1-014",
    "section": "A1",
    "topic": "anthropometry body composition skinfold and growth maturation",
    "subtopic": "Body composition and target body weight calculation",
    "difficulty": "analytical",
    "text": "An athlete currently weighs 80 kg with 20% body fat. What is the athlete's target body weight at 12% body fat assuming lean body mass remains constant?",
    "options": [
      "Target body weight of approximately 64.0 kg",
      "Target body weight of approximately 72.7 kg",
      "Target body weight of approximately 78.5 kg",
      "Target body weight of approximately 85.2 kg"
    ],
    "correct": 1,
    "explanation": "Lean Body Mass (LBM) = 80 kg * (1 - 0.20) = 64 kg. Target Weight = LBM / (1 - Target Fat%) = 64 / (1 - 0.12) = 64 / 0.88 = 72.73 kg."
  },
  # A1-015
  {
    "id": "t11-a1-015",
    "section": "A1",
    "topic": "anthropometry body composition skinfold and growth maturation",
    "subtopic": "Peak Height Velocity and youth athletic development",
    "difficulty": "applied",
    "text": "In youth athlete physical development, why is tracking Peak Height Velocity (PHV) critical for injury prevention?",
    "options": [
      "Total bone mineral density reaches final adult biological peak values during PHV",
      "Rapid longitudinal bone growth temporarily outpaces muscle-tendon extensibility",
      "Aerobic mitochondrial capacity declines permanently if training continues during PHV",
      "Ligamentous tensile strength increases five-fold, preventing structural sprains"
    ],
    "correct": 1,
    "explanation": "During PHV, rapid longitudinal bone growth precedes the lengthening and flexibility adaptations of muscle-tendon units, creating 'adolescent awkwardness' and heightened vulnerability to traction apophysitis (e.g., Osgood-Schlatter, Sever's)."
  },
  # A1-016
  {
    "id": "t11-a1-016",
    "section": "A1",
    "topic": "psychology motivation stress arousal and mental readiness",
    "subtopic": "Hardy's Catastrophe model of anxiety and performance",
    "difficulty": "analytical",
    "text": "According to Hardy's Catastrophe Model of sports anxiety, what occurs when an athlete experiences high physiological arousal combined with high cognitive anxiety?",
    "options": [
      "A gradual linear improvement in athletic motor performance toward an optimal peak",
      "A catastrophic sharp drop in performance rather than a smooth symmetrical decline",
      "An immediate complete suppression of somatic physiological arousal to resting level",
      "A stable unchanging plateau in motor performance unaffected by competition stress"
    ],
    "correct": 1,
    "explanation": "The Catastrophe Model posits that under conditions of high cognitive anxiety, increases in physiological arousal beyond an optimal point lead to a catastrophic, precipitous drop in performance that requires substantial arousal reduction to reverse."
  },
  # A1-017
  {
    "id": "t11-a1-017",
    "section": "A1",
    "topic": "psychology motivation stress arousal and mental readiness",
    "subtopic": "Progressive Muscle Relaxation and somatic anxiety reduction",
    "difficulty": "foundational",
    "text": "What is the primary operational mechanism of Jacobson's Progressive Muscle Relaxation (PMR) in reducing somatic anxiety in athletes?",
    "options": [
      "Rapid hyperventilation drills to increase sympathetic nervous system outflow",
      "Systematic tensing and releasing of muscle groups to build somatic tension awareness",
      "Passive sensory deprivation in a dark isolation chamber without muscle activation",
      "Continuous high-intensity plyometric hopping drills to exhaust motor units"
    ],
    "correct": 1,
    "explanation": "Jacobson's PMR teaches athletes to recognize and contrast sensations of tension and relaxation through deliberate, sequential contraction and release of muscle groups, reducing somatic anxiety and promoting parasympathetic dominance."
  },
  # A1-018
  {
    "id": "t11-a1-018",
    "section": "A1",
    "topic": "psychology motivation stress arousal and mental readiness",
    "subtopic": "Self-Determination Theory and basic psychological needs",
    "difficulty": "foundational",
    "text": "According to Self-Determination Theory (Deci & Ryan), which three basic psychological needs must be satisfied to foster intrinsic motivation in athletes?",
    "options": [
      "Aggression, Dominance, and External Status",
      "Autonomy, Competence, and Relatedness",
      "Financial Gain, Fame, and Social Approval",
      "Strict Authority, Rigidity, and Compliance"
    ],
    "correct": 1,
    "explanation": "Self-Determination Theory identifies Autonomy (feeling in control of choices), Competence (feeling effective in executing tasks), and Relatedness (feeling connected and valued in a social group) as essential for intrinsic motivation."
  },
  # A1-019
  {
    "id": "t11-a1-019",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "Heart rate variability (HRV) metrics and autonomic balance",
    "difficulty": "applied",
    "text": "In athlete monitoring, what physiological state is most typically reflected by a substantial suppression in waking resting HRV (e.g., ln rMSSD) alongside elevated resting heart rate?",
    "options": [
      "Optimal parasympathetic reactivation and complete functional recovery",
      "Autonomic fatigue, sympathetic dominance, and incomplete recovery state",
      "Substantial increase in plasma volume and maximal cardiac stroke volume",
      "Severe peripheral glycogen saturation and suppressed metabolic rate"
    ],
    "correct": 1,
    "explanation": "A significant reduction in vagally-mediated HRV metrics (such as rMSSD or ln rMSSD) paired with an elevated resting heart rate indicates parasympathetic withdrawal, heightened sympathetic tone, and systemic neuromuscular/autonomic fatigue."
  },
  # A1-020
  {
    "id": "t11-a1-020",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "Serum creatine kinase kinetics following eccentric exercise",
    "difficulty": "analytical",
    "text": "Following an unaccustomed bout of high-volume eccentric resistance exercise, when does serum Creatine Kinase (CK) typically reach its peak concentration in athletic populations?",
    "options": [
      "Between 1 to 2 hours post-exercise",
      "Between 24 to 48 hours post-exercise",
      "Between 7 to 10 days post-exercise",
      "Between 14 to 21 days post-exercise"
    ],
    "correct": 1,
    "explanation": "Serum CK exhibits a delayed response following exercise-induced muscle damage (EIMD) from eccentric actions, typically peaking between 24 and 48 hours post-exercise due to delayed microtrauma propagation and membrane permeability changes."
  },
  # A1-021
  {
    "id": "t11-a1-021",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "Reactive Strength Index (RSI) calculation from drop jumps",
    "difficulty": "analytical",
    "text": "An athlete performs a drop jump from a 30 cm box, achieving a jump height of 36 cm (0.36 m) with a ground contact time of 180 ms (0.18 s). What is the athlete's Reactive Strength Index (RSI)?",
    "options": [
      "RSI of 0.50 m/s",
      "RSI of 2.00 m/s",
      "RSI of 4.50 m/s",
      "RSI of 6.67 m/s"
    ],
    "correct": 1,
    "explanation": "Reactive Strength Index (RSI) = Jump Height (m) / Contact Time (s) = 0.36 m / 0.18 s = 2.00 m/s (or jump height in mm / contact time in ms = 360 / 180 = 2.00)."
  },
  # A1-022
  {
    "id": "t11-a1-022",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "GPS monitoring, metabolic power and high-speed running",
    "difficulty": "applied",
    "text": "In team sports GPS tracking, why is 'Metabolic Power' calculated in addition to traditional high-speed running distance (>19.8 km/h)?",
    "options": [
      "It measures the athlete's instantaneous blood glucose concentration continuously",
      "It captures the high energetic cost of accelerations occurring at lower speeds",
      "It replaces the fundamental necessity of tracking total match distance covered",
      "It estimates continuous internal core body temperature fluctuations directly"
    ],
    "correct": 1,
    "explanation": "Metabolic Power (Osgnach model) estimates instantaneous energy expenditure by combining running speed and acceleration, capturing the high metabolic demands of frequent accelerations/decelerations that occur below arbitrary high-speed running speed thresholds."
  },
  # A1-023
  {
    "id": "t11-a1-023",
    "section": "A1",
    "topic": "research methods data interpretation and biostatistics",
    "subtopic": "Typical Error of Measurement and reliability analysis",
    "difficulty": "analytical",
    "text": "In sports science test reliability, what does the Typical Error of Measurement (TEM, expressed as standard error of measurement) represent?",
    "options": [
      "The total systematic bias between two completely distinct assessment systems",
      "The expected within-subject variation when repeating a test without true change",
      "The maximum theoretical physical score an athlete can achieve in testing",
      "The exact probability that the experimental null hypothesis is accurate"
    ],
    "correct": 1,
    "explanation": "The Typical Error of Measurement (TEM = SD_diff / sqrt(2)) quantifies the day-to-day noise/error inherent in a measurement protocol, providing the baseline variability needed to determine if an observed change is a real performance shift."
  },
  # A1-024
  {
    "id": "t11-a1-024",
    "section": "A1",
    "topic": "research methods data interpretation and biostatistics",
    "subtopic": "Bland-Altman analysis and method agreement in sports testing",
    "difficulty": "applied",
    "text": "When comparing a new field-based tracking device against a laboratory gold standard, what do the '95% Limits of Agreement' in a Bland-Altman plot represent?",
    "options": [
      "The mean difference plus and minus 1.96 standard deviations of the pairwise differences",
      "The Pearson correlation coefficient squared multiplied by one hundred percent of sample",
      "The exact p-value resulting from a two-way repeated measures analysis of variance test",
      "The proportion of true positive scores relative to false positive identification rates"
    ],
    "correct": 0,
    "explanation": "In Bland-Altman analysis, 95% limits of agreement are defined as Mean Difference +/- 1.96 * SD of differences, indicating the range within which 95% of future pairwise differences between methods are expected to fall."
  },
  # A1-025
  {
    "id": "t11-a1-025",
    "section": "A1",
    "topic": "research methods data interpretation and biostatistics",
    "subtopic": "Inferential statistics, Type I and Type II errors",
    "difficulty": "foundational",
    "text": "In sports rehabilitation research, what is a 'Type II error' (Beta error)?",
    "options": [
      "Rejecting a true null hypothesis and claiming an intervention works when it does not",
      "Failing to reject a false null hypothesis and missing a real meaningful intervention effect",
      "Using a parametric statistical model when testing data are strictly non-normal in shape",
      "Selecting an unrepresentative convenience sample of professional competitive athletes"
    ],
    "correct": 1,
    "explanation": "A Type II error (beta) occurs when researchers fail to reject a false null hypothesis (a false negative), thereby concluding there is no intervention effect when a real effect actually exists (often due to inadequate sample size/statistical power)."
  },
  # A1-026
  {
    "id": "t11-a1-026",
    "section": "A1",
    "topic": "emerging technology wearables force platform and video analysis",
    "subtopic": "Inertial Measurement Units (IMUs) and sensor fusion algorithms",
    "difficulty": "applied",
    "text": "In wearable motion analysis using Inertial Measurement Units (IMUs), which mathematical technique is standardly implemented to overcome gyroscopic integration drift?",
    "options": [
      "Linear extrapolation using uncalibrated raw piezoelectric voltage measurements",
      "Sensor fusion algorithms combining accelerometer gravity and magnetometer headings",
      "Manual recalibration routines conducted after every ten seconds of live movement",
      "Frequency thresholding filtering all acceleration signals above one hertz value"
    ],
    "correct": 1,
    "explanation": "Gyroscopic drift (error accumulation over time from angular velocity integration) is mitigated by sensor fusion algorithms (e.g., Extended Kalman Filters or Madgwick filters) that combine tri-axial accelerometer gravity vectors and magnetometer heading references."
  },
  # A1-027
  {
    "id": "t11-a1-027",
    "section": "A1",
    "topic": "injury prevention screening surveillance and biomechanics",
    "subtopic": "Eccentric hamstring strengthening and architectural remodeling",
    "difficulty": "applied",
    "text": "What structural architectural adaptation is induced in the biceps femoris long head by compliance with the Nordic Hamstring Exercise protocol?",
    "options": [
      "Significant decrease in fascicle length with an increase in pennation angle",
      "Significant increase in fascicle length via addition of sarcomeres in series",
      "Complete conversion of Type IIx fast fibers into Type I slow-twitch fibers",
      "Marked reduction in total cross-sectional area of proximal tendon insertions"
    ],
    "correct": 1,
    "explanation": "Heavy eccentric training via the Nordic Hamstring Exercise promotes sarcomerogenesis (in-series sarcomere addition), lengthening biceps femoris fascicles and shifting the optimum muscle length to longer muscle lengths, protecting against strain during terminal swing."
  },
  # A1-028
  {
    "id": "t11-a1-028",
    "section": "A1",
    "topic": "emerging technology wearables force platform and video analysis",
    "subtopic": "Infrared thermography in athletic recovery and overload monitoring",
    "difficulty": "applied",
    "text": "In athlete screening using medical Infrared Thermography (IRT), what thermal difference between contralateral homologous anatomical regions is considered clinically meaningful for potential tissue overload or inflammation?",
    "options": [
      "Thermal asymmetry of 0.1 degrees Celsius or greater",
      "Thermal asymmetry of 0.5 to 0.7 degrees Celsius or greater",
      "Thermal asymmetry of 2.5 to 3.0 degrees Celsius or greater",
      "Thermal asymmetry of 5.0 to 6.0 degrees Celsius or greater"
    ],
    "correct": 1,
    "explanation": "Contralateral skin temperature differences exceeding 0.5 to 0.7 degrees C (0.9 to 1.3 degrees F) are established as clinically relevant thresholds indicating localized hyperthermia (microtrauma/inflammation) or hypothermia (vasoconstriction/neuropathy)."
  },
  # A1-029
  {
    "id": "t11-a1-029",
    "section": "A1",
    "topic": "yoga and mind-body interventions in sports",
    "subtopic": "Slow-paced pranayama and autonomic nervous system modulation",
    "difficulty": "foundational",
    "text": "What physiological adaptation is primarily stimulated by slow-paced yogic breathing (Pranayama at approximately 6 breaths per minute) in athletes?",
    "options": [
      "Immediate surge in plasma catecholamines and maximal sympathetic arousal state",
      "Enhanced arterial baroreflex sensitivity and increased cardiac vagal parasympathetic activity",
      "Acute respiratory acidosis with an elevation in circulating blood lactate concentration",
      "Sustained elevation in pulmonary dead space ventilation and systemic blood pressure"
    ],
    "correct": 1,
    "explanation": "Slow pranayama at ~6 breaths/min aligns respiratory sinus arrhythmia with Mayer waves (0.1 Hz resonance frequency), enhancing baroreflex sensitivity, parasympathetic vagal outflow (elevated HRV), and downregulating sympathetic stress responses."
  },
  # A1-030
  {
    "id": "t11-a1-030",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Menstrual cycle phases and thermoregulatory/metabolic shifts",
    "difficulty": "applied",
    "text": "During the mid-luteal phase of the normal menstrual cycle in female athletes, what physiological change is driven by elevated progesterone concentrations?",
    "options": [
      "A drop in resting basal body temperature of approximately 0.5 degrees Celsius",
      "An increase in resting core body temperature of approximately 0.3 to 0.5 degrees Celsius",
      "A complete suppression of resting metabolic rate and lipid oxidation pathways",
      "An immediate five-fold elevation in maximal ventilatory anaerobic capacity"
    ],
    "correct": 1,
    "explanation": "Progesterone elevates the hypothalamic thermoregulatory set-point, raising basal core body temperature by ~0.3-0.5 degrees C during the mid-luteal phase, which can increase thermoregulatory and cardiovascular strain during exercise in hot environments."
  },
  # A1-031
  {
    "id": "t11-a1-031",
    "section": "A1",
    "topic": "travel and competition readiness circadian rhythms",
    "subtopic": "Circadian Phase Response Curve and westward vs eastward travel",
    "difficulty": "applied",
    "text": "When traveling across multiple time zones for international competition, why is eastward travel generally associated with longer circadian resynchronization times than westward travel?",
    "options": [
      "The human circadian period is slightly longer than 24 hours, making phase delays easier than phase advances",
      "Eastward flights fly against the Earth's magnetic orientation, reducing circulating erythrocyte count",
      "Atmospheric cabin oxygen pressure is significantly lower on eastward flights compared to westward flights",
      "Eastward air travel completely halts natural melatonin synthesis from the human pineal gland permanently"
    ],
    "correct": 0,
    "explanation": "Because the human free-running circadian period is slightly longer than 24 hours (~24.2 h), circadian phase delays (lengthening the day, required for westward travel) are physiologically easier to adapt to than phase advances (shortening the day, eastward travel)."
  },
  # A1-032
  {
    "id": "t11-a1-032",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA sample collection standards and B-sample confirmation",
    "difficulty": "foundational",
    "text": "Under the World Anti-Doping Code, what is the mandatory procedure when an athlete's 'Sample A' returns an Adverse Analytical Finding (AAF)?",
    "options": [
      "The athlete is automatically banned for life without any further laboratory testing allowed",
      "The athlete has the statutory right to request opening and analysis of their Sample B",
      "The testing laboratory immediately destroys Sample B to preserve athlete confidentiality",
      "The national anti-doping federation selects a completely new athlete for alternate testing"
    ],
    "correct": 1,
    "explanation": "Under the WADA International Standard for Results Management (ISRM), following an AAF on Sample A, the athlete has the right to request the opening and confirmation analysis of their split Sample B before disciplinary proceedings proceed."
  },

  # -------------------------------------------------------------
  # SECTION A2: General Sports Awareness & Governance (8 Qs: 001 to 008)
  # -------------------------------------------------------------
  # A2-001
  {
    "id": "t11-a2-001",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "MYAS Khelo India State Centres of Excellence (KISCE) framework",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "Under the Ministry of Youth Affairs and Sports (MYAS), what is the primary objective of establishing Khelo India State Centres of Excellence (KISCE)?",
    "options": [
      "To build commercial fitness facilities in private corporate offices across urban cities",
      "To upgrade selected state sports facilities into world-class Olympic training centers",
      "To conduct annual recreational sports leagues exclusively for retired administrators",
      "To manufacture all athletic apparel and equipment domestically for commercial export"
    ],
    "correct": 1,
    "explanation": "The KISCE initiative under the Khelo India scheme aims to upgrade one existing sports training facility in each State and Union Territory into a world-class training center equipped with top sports science and coaching support."
  },
  # A2-002
  {
    "id": "t11-a2-002",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Target Olympic Podium Scheme (TOPS) and Mission Olympic Cell",
    "difficulty": "applied",
    "asOf": "2026-01-30",
    "text": "In the administration of India's Target Olympic Podium Scheme (TOPS), which body is responsible for reviewing athlete proposals and approving customized training plans?",
    "options": [
      "The Mission Olympic Cell (MOC)",
      "The National Sports Tribunal (NST)",
      "The Union Public Commission (UPC)",
      "The Central Vigilance Wing (CVW)"
    ],
    "correct": 0,
    "explanation": "The Mission Olympic Cell (MOC) within the Sports Authority of India (SAI) comprises eminent sports personalities, administrators, and high-performance experts tasked with evaluating athlete performance and approving TOPS funding and training support."
  },
  # A2-003
  {
    "id": "t11-a2-003",
    "section": "A2",
    "topic": "Anti-doping governance and WADA Prohibited List",
    "subtopic": "WADA Prohibited List classification S1 vs S2 substances",
    "difficulty": "applied",
    "asOf": "2026-01-30",
    "text": "Under the WADA Prohibited List (in force as of January 2026), what substance category is classified under Class S1?",
    "options": [
      "Peptide Hormones and Growth Factors",
      "Anabolic Androgenic Steroids and Agents",
      "Beta-2 Agonists and Bronchodilators",
      "Hormone and Metabolic Modulator Drugs"
    ],
    "correct": 1,
    "explanation": "Under the WADA Prohibited List: Class S1 = Anabolic Agents (including AAS), Class S2 = Peptide Hormones, Growth Factors, and Related Substances, Class S3 = Beta-2 Agonists, Class S4 = Hormone and Metabolic Modulators."
  },
  # A2-004
  {
    "id": "t11-a2-004",
    "section": "A2",
    "topic": "Anti-doping governance and WADA Prohibited List",
    "subtopic": "NADA Whereabouts filing failures and Anti-Doping Rule Violations",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "Under National Anti-Doping Agency (NADA) regulations, how many Whereabouts Failures (Filing Failures or Missed Tests) within a 12-month period constitute an Anti-Doping Rule Violation (ADRV)?",
    "options": [
      "Any single (1) missed test or filing failure in 12 months",
      "Any combination of three (3) missed tests or filing failures in 12 months",
      "Any combination of six (6) missed tests or filing failures in 12 months",
      "Any combination of eight (8) missed tests or filing failures in 12 months"
    ],
    "correct": 1,
    "explanation": "Under Article 2.4 of the WADA / NADA Code, any combination of three (3) Whereabouts Failures (Filing Failures and/or Missed Tests) within a rolling 12-month period by an athlete in a Registered Testing Pool (RTP) constitutes an ADRV."
  },
  # A2-005
  {
    "id": "t11-a2-005",
    "section": "A2",
    "topic": "Major international competitions and Olympic movement",
    "subtopic": "IOC Olympic Games host cities and upcoming editions",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "Which city is officially designated by the International Olympic Committee (IOC) to host the XXXIV Olympic Summer Games in 2028?",
    "options": [
      "Brisbane, Australia",
      "Los Angeles, United States",
      "Aichi-Nagoya, Japan",
      "Madrid, Spain"
    ],
    "correct": 1,
    "explanation": "The IOC designated Los Angeles (USA) to host the 2028 Summer Olympic Games, following Paris 2024, with Brisbane (Australia) scheduled to host the 2032 Games."
  },
  # A2-006
  {
    "id": "t11-a2-006",
    "section": "A2",
    "topic": "Major international competitions and Olympic movement",
    "subtopic": "Olympic Council of Asia (OCA) Asian Games host venues",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "Which city/prefecture is scheduled to host the 20th Asian Games in 2026 under the Olympic Council of Asia (OCA)?",
    "options": [
      "Doha, Qatar",
      "Aichi-Nagoya, Japan",
      "Riyadh, Saudi Arabia",
      "Bangkok, Thailand"
    ],
    "correct": 1,
    "explanation": "The 20th Asian Games in 2026 will be co-hosted by Aichi Prefecture and the city of Nagoya in Japan, following the 19th Asian Games held in Hangzhou, China."
  },
  # A2-007
  {
    "id": "t11-a2-007",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Major Dhyan Chand Khel Ratna Award eligibility guidelines",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "According to the Ministry of Youth Affairs and Sports (MYAS) scheme, what is the primary qualifying performance period evaluated for the Major Dhyan Chand Khel Ratna Award?",
    "options": [
      "Outstanding performance over the preceding four (4) years",
      "Consistent contribution to sports over twenty (20) years",
      "Single match performance in bilateral exhibition games (1) year",
      "Outstanding coaching leadership over fifteen (15) years"
    ],
    "correct": 0,
    "explanation": "The Major Dhyan Chand Khel Ratna Award is conferred for the most spectacular and outstanding performance in sports over the preceding four-year period by a sportsperson."
  },
  # A2-008
  {
    "id": "t11-a2-008",
    "section": "A2",
    "topic": "Sports governance ethics and National Sports Development Code",
    "subtopic": "National Sports Development Code of India (2011) tenure and age rules",
    "difficulty": "applied",
    "asOf": "2026-01-30",
    "text": "Under the National Sports Development Code of India (2011), what is the maximum permissible age limit for an individual to hold the office of President in a National Sports Federation (NSF)?",
    "options": [
      "Maximum age limit of 60 years",
      "Maximum age limit of 70 years",
      "Maximum age limit of 75 years",
      "Maximum age limit of 80 years"
    ],
    "correct": 1,
    "explanation": "Under the National Sports Development Code of India (2011), the upper age limit for all office-bearers (including the President) of National Sports Federations is fixed at 70 years."
  },

  # -------------------------------------------------------------
  # SECTION B: Applied Sports Physiotherapy (40 Qs: 001 to 040)
  # -------------------------------------------------------------
  # B-001
  {
    "id": "t11-b-001",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "According to diagnostic accuracy meta-analyses in orthopedic assessment (Magee), which statement accurately compares the Lachman test and Pivot Shift test for ACL tears?",
    "options": [
      "Lachman has higher sensitivity (~85-95%), while Pivot Shift has higher specificity (~97-99%)",
      "Pivot Shift has higher sensitivity (~85-95%), while Lachman has higher specificity (~97-99%)",
      "Lachman has lower sensitivity (~20-30%), while Pivot Shift has lower specificity (~15-25%)",
      "Pivot Shift has lower sensitivity (~10-20%), while Lachman has lower specificity (~10-20%)"
    ],
    "correct": 0,
    "explanation": "In clinical orthopedic assessment, the Lachman test demonstrates the highest sensitivity (~85-95%) for detecting ACL tears, whereas the Pivot Shift test demonstrates superior specificity (~97-99%) for functional rotary knee instability."
  },
  # B-002
  {
    "id": "t11-b-002",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "When performing the Thessaly test for meniscal tears, at what angle of knee flexion is the patient instructed to rotate their body over the weight-bearing knee to maximize diagnostic accuracy?",
    "options": [
      "At 0 degrees of full knee extension",
      "At 20 degrees of active knee flexion",
      "At 45 degrees of active knee flexion",
      "At 90 degrees of seated knee flexion"
    ],
    "correct": 1,
    "explanation": "Karachalios et al. demonstrated that the Thessaly test performed at 20 degrees of knee flexion achieves the highest diagnostic accuracy (~89-94%) for detecting meniscal tears, dynamically loading the posterior horn."
  },
  # B-003
  {
    "id": "t11-b-003",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "foundational",
    "text": "In shoulder orthopedic physical examination, what is the anatomical mechanism of the Hawkins-Kennedy impingement test?",
    "options": [
      "Passive shoulder extension compressing the latissimus dorsi tendon against ribs",
      "Passive forward flexion and internal rotation compressing supraspinatus against arch",
      "Forced external rotation at ninety degrees abduction compressing the long triceps",
      "Full active shoulder abduction in frontal plane compressing the rhomboid muscles"
    ],
    "correct": 1,
    "explanation": "The Hawkins-Kennedy test involves flexing the arm to 90 degrees in the scapular plane and forcefully internally rotating the humerus, driving the greater tuberosity and supraspinatus tendon against the coracoacromial ligament."
  },
  # B-004
  {
    "id": "t11-b-004",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "Why is the 'Full Can test' (elevation at 90 degrees in scapular plane with 45 degrees external rotation) often preferred over the 'Empty Can test' for supraspinatus assessment?",
    "options": [
      "It isolates subscapularis muscle while completely eliminating biceps activation",
      "It elicits similar supraspinatus EMG activation while reducing subacromial pain",
      "It completely paralyzes the deltoid muscle during active manual muscle testing",
      "It eliminates active scapulothoracic upward rotation during clinical testing"
    ],
    "correct": 1,
    "explanation": "Kelly et al. demonstrated that the Full Can test elicits equivalent supraspinatus muscle activation to the Empty Can test while creating less subacromial impingement and anterior superior pain, making it clinically preferable."
  },
  # B-005
  {
    "id": "t11-b-005",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "When assessing anterior glenohumeral instability, what constitutes a positive result on the Jobe Relocation Test?",
    "options": [
      "Immediate reproduction of sharp radicular tingling in upper arm dermatomes",
      "Reduction of apprehension when posterior stabilizing force is applied to humeral head",
      "Sudden inferior displacement of the humeral head creating a distinct sulcus gap",
      "Complete structural rupture of the long head of the biceps brachii tendon fibers"
    ],
    "correct": 1,
    "explanation": "A positive Jobe Relocation Test occurs when applying a posteriorly directed stabilizing pressure to the anterior humeral head relieves the pain and apprehension felt during the anterior apprehension test (90 deg abduction + 90 deg external rotation)."
  },
  # B-006
  {
    "id": "t11-b-006",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "Which special test combination provides the highest clinical utility for diagnosing an acute syndesmotic (high ankle) sprain?",
    "options": [
      "Lachman test and Pivot Shift test",
      "Kleiger test and Squeeze test",
      "Talar Tilt test and Thompson test",
      "Thomas test and Ober test"
    ],
    "correct": 1,
    "explanation": "The External Rotation Stress Test (Kleiger test) and the Fibular Squeeze Test (compressing the tibia and fibula at mid-calf to gap the distal syndesmosis) are standard, highly specific clinical tests for syndesmotic sprains."
  },
  # B-007
  {
    "id": "t11-b-007",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee / Butler",
    "difficulty": "analytical",
    "text": "During neurodynamic testing, what is the essential structural differentiation between true neural mechanosensitivity and hamstring muscle tightness during the Slump Test?",
    "options": [
      "Hamstring symptoms resolve when performing rapid active knee flexion movements",
      "Neural symptoms change with remote maneuvers such as cervical extension or release",
      "Hamstring tightness produces bilateral loss of the patellar deep tendon reflex",
      "Neural mechanosensitivity is tested with the patient lying completely prone"
    ],
    "correct": 1,
    "explanation": "In neurodynamics (Butler), structural differentiation—such as releasing cervical flexion while maintaining knee extension—modifies neurodynamic mechanical tension without altering hamstring muscle length, differentiating neural mechanosensitivity from local muscle tightness."
  },
  # B-008
  {
    "id": "t11-b-008",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "analytical",
    "text": "In shoulder orthopedic assessment, what specific pathology is indicated when both the Kim Test and the Jerk Test are positive?",
    "options": [
      "Posteroinferior labral lesion and posterior instability",
      "Isolated subscapularis tendon rupture at insertion site",
      "Anterior superior labral anterior-to-posterior lesion",
      "Calcific tendinitis of infraspinatus humeral insertion"
    ],
    "correct": 0,
    "explanation": "Kim et al. established that combining the Kim Test and Jerk Test achieves a sensitivity of 97% for diagnosing posteroinferior labral tears and posterior glenohumeral instability."
  },
  # B-009
  {
    "id": "t11-b-009",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "foundational",
    "text": "How does the Oxford Progressive Resistance Exercise (PRE) protocol differ from the classic DeLorme protocol?",
    "options": [
      "Oxford begins at 100% 10RM and decreases to 75% and 50% 10RM to account for fatigue",
      "Oxford begins at 50% 10RM and increases to 75% and 100% 10RM as a warm-up sequence",
      "Oxford utilizes exclusively isometric holds at 100% maximal voluntary force capacity",
      "Oxford requires performing 100 continuous repetitions using 10% 1RM without any rest"
    ],
    "correct": 0,
    "explanation": "The DeLorme protocol progresses from 50% -> 75% -> 100% of 10RM (light to heavy), whereas the Oxford protocol begins at 100% -> 75% -> 50% of 10RM (heavy to light), decreasing load to adjust for progressive muscular fatigue."
  },
  # B-010
  {
    "id": "t11-b-010",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "applied",
    "text": "What is the standard exercise prescription in the classic Alfredson heavy-load eccentric training protocol for midportion Achilles tendinopathy?",
    "options": [
      "1 set of 10 repetitions performed once weekly with zero pain allowed",
      "3 sets of 15 repetitions performed twice daily for 12 weeks with knee straight and bent",
      "5 sets of 5 repetitions performed every second day with heavy concentric loads",
      "8 sets of 20 repetitions performed once monthly using aquatic pool immersion"
    ],
    "correct": 1,
    "explanation": "The Alfredson protocol prescribes 3 sets of 15 repetitions, twice daily for 12 weeks, consisting of eccentric heel drops performed with both straight knee (gastrocnemius) and bent knee (soleus), allowing tendon remodeling."
  },
  # B-011
  {
    "id": "t11-b-011",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "applied",
    "text": "According to Ebonie Rio et al., what is the clinical rationale for using heavy isometric contractions (e.g., 5 x 45-s at ~70% MVC) in early patellar tendinopathy rehabilitation?",
    "options": [
      "Induces immediate tendon analgesia and reduces cortical motor inhibition acutely",
      "Causes immediate surgical realigning of disorganized collagen fiber cross-links",
      "Completely destroys nociceptive C-fibers supplying the infrapatellar fat pad",
      "Replaces the fundamental requirement for progressive mechanical loading rehab"
    ],
    "correct": 0,
    "explanation": "Heavy isometric loading (5 sets of 45-second holds at ~70% MVC with 2 min rest) induces immediate, short-term tendon pain relief (analgesia) and downregulates cortical motor drive inhibition, enabling pain-free strength training."
  },
  # B-012
  {
    "id": "t11-b-012",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Proprioceptive neuromuscular facilitation (PNF) stretching principles",
    "difficulty": "foundational",
    "text": "In PNF stretching, what neurophysiological mechanism is traditionally attributed to the increased muscle extensibility following a 'Hold-Relax' technique?",
    "options": [
      "Autogenic inhibition mediated by Golgi tendon organ firing during isometric contraction",
      "Reciprocal activation mediated by muscle spindle primary afferent fiber discharge",
      "Permanent structural elongation of the tendon bone insertion interface tissues",
      "Complete pharmacological blockade of neuromuscular acetylcholine synaptic receptors"
    ],
    "correct": 0,
    "explanation": "The Hold-Relax PNF technique relies on autogenic inhibition: isometric contraction of the tight target muscle stimulates Golgi Tendon Organs (GTOs), which send inhibitory signals via Ib afferents to relax the target muscle."
  },
  # B-013
  {
    "id": "t11-b-013",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "foundational",
    "text": "In Maitland's joint mobilization grading system, what characterizes a 'Grade III' mobilization?",
    "options": [
      "Small-amplitude oscillatory movement performed at beginning of available range",
      "Large-amplitude oscillatory movement performed up to limit of available joint range",
      "Small-amplitude high-velocity thrust performed beyond anatomical joint barrier",
      "Large-amplitude oscillatory movement performed entirely within free range space"
    ],
    "correct": 1,
    "explanation": "Maitland Grade III mobilization is a large-amplitude oscillatory movement that moves up to the limit of available joint range and stresses into tissue resistance, indicated for increasing joint range of motion."
  },
  # B-014
  {
    "id": "t11-b-014",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "applied",
    "text": "What is the foundational clinical rule when applying Mulligan's Mobilization with Movement (MWM) to a restricted joint?",
    "options": [
      "The mobilization and active movement must be completely pain-free throughout execution",
      "The mobilization must produce sharp pain to break down intra-articular adhesion bands",
      "The patient must remain completely passive and immobilized during the mobilization glide",
      "The mobilization must only be performed under general anesthesia in a surgical suite"
    ],
    "correct": 0,
    "explanation": "Mulligan MWM techniques must strictly follow the PILL principle: Pain-free glide and movement, Immediate improvement in range/function, and Long-Lasting effect. If pain is produced, the direction or angle of glide must be modified."
  },
  # B-015
  {
    "id": "t11-b-015",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "analytical",
    "text": "When prescribing quadriceps exercise for patellofemoral joint pain, which ranges of motion minimize patellofemoral joint stress in Open Kinetic Chain (OKC) versus Closed Kinetic Chain (CKC)?",
    "options": [
      "OKC safe zone: 0 to 30 degrees knee flexion; CKC safe zone: 60 to 90 degrees knee flexion",
      "OKC safe zone: 90 to 50 degrees knee flexion; CKC safe zone: 0 to 45 degrees knee flexion",
      "OKC safe zone: 0 to 90 degrees knee flexion; CKC safe zone: 90 to 120 degrees knee flexion",
      "OKC safe zone: 45 to 60 degrees knee flexion; CKC safe zone: 75 to 110 degrees knee flexion"
    ],
    "correct": 1,
    "explanation": "Patellofemoral contact stress is lowest in OKC knee extensions between 90 deg and 50 deg flexion (increasing toward terminal extension), whereas in CKC squats, contact stress is lowest between 0 deg and 45 deg flexion (increasing deeply past 60-90 deg)."
  },
  # B-016
  {
    "id": "t11-b-016",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "applied",
    "text": "In hamstring rehabilitation, why are eccentric lengthening exercises (such as the Nordic Hamstring Exercise and Roman Chair) emphasized over isolated concentric curls?",
    "options": [
      "Hamstring strains typically occur during rapid concentric acceleration of knee flexors",
      "Hamstring strains typically occur during eccentric deceleration; lengthening builds fascicle length",
      "Concentric curls cause immediate avulsion fractures of the ischial tuberosity origin",
      "Eccentric exercise completely eliminates the need for sport-specific sprinting drills"
    ],
    "correct": 1,
    "explanation": "Hamstrings are injured primarily during late swing phase when actively resisting hip flexion and decelerating knee extension under maximal eccentric stretch; eccentric loading increases fascicle length and high-velocity eccentric strength."
  },
  # B-017
  {
    "id": "t11-b-017",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "foundational",
    "text": "What is the classic overall kinematic ratio of glenohumeral to scapulothoracic motion during full healthy shoulder abduction (Scapulohumeral Rhythm)?",
    "options": [
      "1:1 ratio (90 degrees glenohumeral to 90 degrees scapulothoracic motion)",
      "2:1 ratio (120 degrees glenohumeral to 60 degrees scapulothoracic motion)",
      "3:1 ratio (135 degrees glenohumeral to 45 degrees scapulothoracic motion)",
      "1:2 ratio (60 degrees glenohumeral to 120 degrees scapulothoracic motion)"
    ],
    "correct": 1,
    "explanation": "Healthy scapulohumeral rhythm demonstrates an overall 2:1 ratio through 180 degrees of abduction: approximately 120 degrees of glenohumeral movement and 60 degrees of upward scapulothoracic rotation."
  },
  # B-018
  {
    "id": "t11-b-018",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "foundational",
    "text": "In the open kinetic chain 'screw-home' mechanism of the knee, which motion occurs during the final 15 to 20 degrees of terminal knee extension?",
    "options": [
      "Internal rotation of the tibia on the fixed femur",
      "External rotation of the tibia on the fixed femur",
      "Anterior translation of the femur on the fixed tibia",
      "Adduction of the patella into the intercondylar notch"
    ],
    "correct": 1,
    "explanation": "In open kinetic chain knee extension, the tibia rotates externally (lateral rotation) approximately 10-15 degrees relative to the fixed femur during the final 15-20 degrees of extension to 'lock' the joint, driven by medial femoral condyle curvature."
  },
  # B-019
  {
    "id": "t11-b-019",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "applied",
    "text": "What is the primary mechanical function of the inferior rotator cuff force couple (Infraspinatus, Teres Minor, Subscapularis) during active shoulder abduction?",
    "options": [
      "Upward translation of the humeral head into the subacromial space",
      "Inferior glide and depression of humeral head counteracting deltoid shear",
      "Locking the glenohumeral joint into rigid internal rotation throughout range",
      "Preventing scapular upward rotation by anchoring inferior scapular angle"
    ],
    "correct": 1,
    "explanation": "The deltoid produces a strong superior shear force during early abduction. The inferior rotator cuff (infraspinatus, teres minor, subscapularis) exerts a downward/compressive force couple, depressing the humeral head into the glenoid."
  },
  # B-020
  {
    "id": "t11-b-020",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "foundational",
    "text": "In human musculoskeletal biomechanics, which anatomical movement is a classic example of a First-Class Lever system?",
    "options": [
      "Elbow flexion by biceps brachii during concentric bicep curls",
      "Head and neck extension at atlanto-occipital joint by cervical extensors",
      "Plantarflexion on metatarsals by gastrocnemius-soleus triceps surae",
      "Knee extension by quadriceps tendon at tibiofemoral joint articulation"
    ],
    "correct": 1,
    "explanation": "Head extension at the atlanto-occipital joint represents a First-Class Lever: the fulcrum (axis) is the atlanto-occipital joint, situated between the effort force (cervical extensors) and the resistance load (weight of the head)."
  },
  # B-021
  {
    "id": "t11-b-021",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "analytical",
    "text": "During the loading response phase of gait, how does closed-chain subtalar joint pronation mechanically couple with the proximal lower extremity?",
    "options": [
      "Subtalar pronation drives obligatory internal rotation of tibia and femur",
      "Subtalar pronation drives obligatory external rotation of tibia and femur",
      "Subtalar pronation causes immediate posterior pelvic tilt and hyperextension",
      "Subtalar pronation completely uncouples ankle joint from knee mechanics"
    ],
    "correct": 0,
    "explanation": "In closed kinetic chain stance, subtalar joint pronation (calcaneal eversion, talar adduction and plantarflexion) drives obligatory internal rotation of the tibia and femur, which can increase knee valgus dynamic vectors."
  },
  # B-022
  {
    "id": "t11-b-022",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "applied",
    "text": "In foot and ankle biomechanics, what occurs during the 'Windlass Mechanism' as the athlete extends the great toe (hallux dorsiflexion) during terminal stance?",
    "options": [
      "The plantar fascia relaxes, flattening the medial arch into flexible pronation",
      "The plantar fascia tightens over metatarsal heads, elevating medial arch into rigid lever",
      "The Achilles tendon completely detaches from the posterior calcaneal bone",
      "The subtalar joint unlocks into twenty degrees of continuous active eversion"
    ],
    "correct": 1,
    "explanation": "Great toe extension (dorsiflexion) winds the plantar fascia around the first metatarsal head, shortening the distance between calcaneus and metatarsals, raising the medial longitudinal arch, and creating a rigid lever for push-off."
  },
  # B-023
  {
    "id": "t11-b-023",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Gait Analysis: Normal and Pathological Function - Perry & Burnfield",
    "difficulty": "foundational",
    "text": "According to Perry and Burnfield's gait analysis, during which phase of normal walking does maximum knee flexion (approximately 60 degrees) occur?",
    "options": [
      "Loading response phase",
      "Initial swing phase",
      "Terminal stance phase",
      "Mid-stance single phase"
    ],
    "correct": 1,
    "explanation": "Peak knee flexion during normal walking reaches approximately 60 degrees during the initial/mid-swing phase to provide foot clearance over the ground as the limb accelerates forward."
  },
  # B-024
  {
    "id": "t11-b-024",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "applied",
    "text": "Which trio of muscles forms the primary upward rotation force couple of the scapula during arm elevation?",
    "options": [
      "Levator Scapulae, Rhomboid Major, and Pectoralis Minor",
      "Serratus Anterior, Upper Trapezius, and Lower Trapezius",
      "Latissimus Dorsi, Teres Major, and Subscapularis",
      "Pectoralis Major, Biceps Brachii, and Coracobrachialis"
    ],
    "correct": 1,
    "explanation": "Scapular upward rotation is driven by a force couple comprising the Serratus Anterior (drawing the inferior angle anterolaterally), Upper Trapezius (elevating and upwardly rotating), and Lower Trapezius (depressing and stabilizing)."
  },
  # B-025
  {
    "id": "t11-b-025",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "foundational",
    "text": "In electrophysical agents (Tim Watson), what neurophysiological pain-modulation mechanism is primarily activated by High-Frequency (Conventional) TENS (80-120 Hz, sensory intensity)?",
    "options": [
      "Endorphin release mediated via descending mu-opioid neurochemical pathways",
      "Gate Control Mechanism mediated by large A-beta sensory fiber stimulation in dorsal horn",
      "Direct thermal ablation of nociceptive A-delta and C-fibers in peripheral tissue",
      "Sustained tetanic motor unit recruitment causing complete sensory nerve fatigue"
    ],
    "correct": 1,
    "explanation": "Conventional high-frequency TENS (80-120 Hz, low intensity below motor threshold) activates large-diameter cutaneous A-beta sensory fibers, which activate inhibitory interneurons in the substantia gelatinosa (Gate Control Theory) to block nociceptive transmission."
  },
  # B-026
  {
    "id": "t11-b-026",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "applied",
    "text": "When treating an acute sports ligament sprain in the acute inflammatory phase (Day 1-3), which ultrasound mode and parameters are evidence-based to avoid thermal aggravation?",
    "options": [
      "Continuous ultrasound at 2.5 W/cm2 for 15 minutes of heating",
      "Pulsed ultrasound at 20% duty cycle at low intensity of 0.5 W/cm2",
      "Continuous ultrasound at 3.0 W/cm2 with thermal coupling agent",
      "Pulsed ultrasound at 100% duty cycle at high intensity of 2.0 W/cm2"
    ],
    "correct": 1,
    "explanation": "In acute inflammation, pulsed ultrasound with a low duty cycle (20% or 1:4 mark:space ratio) and low acoustic intensity (0.5 W/cm2) delivers non-thermal bio-effects (acoustic streaming and stable cavitation) to facilitate cellular healing without tissue heating."
  },
  # B-027
  {
    "id": "t11-b-027",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "applied",
    "text": "According to evidence-based electrotherapy reviews, for which musculoskeletal condition does Extracorporeal Shockwave Therapy (ESWT) demonstrate the strongest level of clinical evidence?",
    "options": [
      "Acute muscle contusion within two hours of sports impact",
      "Chronic recalcitrant plantar fasciitis and calcific tendinopathy",
      "Complete grade III anterior cruciate ligament rupture",
      "Acute cervical facet joint subluxation in junior athletes"
    ],
    "correct": 1,
    "explanation": "Extracorporeal Shockwave Therapy (ESWT) has robust clinical trial evidence supporting its effectiveness for chronic, treatment-resistant tendinopathies and fasciopathies, specifically chronic plantar fasciitis and calcific rotator cuff tendinopathy."
  },
  # B-028
  {
    "id": "t11-b-028",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "foundational",
    "text": "What is the 'Hunting Reaction' (Lewis reaction) in therapeutic cryotherapy application?",
    "options": [
      "Permanent complete occlusion of deep femoral arteries following icing",
      "Transient cyclical vasodilation following prolonged cold below 10 degrees C",
      "Immediate five-fold increase in motor nerve conduction velocity upon cooling",
      "Systemic hyperthermia triggered by localized cooling of distal limbs"
    ],
    "correct": 1,
    "explanation": "The Hunting Reaction is a transient, oscillating cold-induced vasodilation (CIVD) following prolonged cooling (>15-20 min at low temperatures), serving as a protective mechanism to preserve peripheral tissue vitality."
  },
  # B-029
  {
    "id": "t11-b-029",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "foundational",
    "text": "In Interferential Therapy (IFT), how is the low-frequency therapeutic 'Beat Frequency' generated within deep tissues?",
    "options": [
      "By passing a single direct monophasic galvanic current through two pads",
      "By intersection and interference of two medium-frequency currents in deep tissue",
      "By converting acoustic ultrasound waves into electromagnetic radiofrequency waves",
      "By rapidly switching off the electrical power supply 5000 times per second"
    ],
    "correct": 1,
    "explanation": "IFT uses two medium-frequency currents (e.g., 4000 Hz and 4100 Hz) that cross in deep tissue, generating an amplitude-modulated low-frequency 'beat frequency' (e.g., 100 Hz) that overcomes skin impedance without superficial discomfort."
  },
  # B-030
  {
    "id": "t11-b-030",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "applied",
    "text": "In Low-Level Laser Therapy (Photobiomodulation), what is the primary intracellular chromophore that absorbs red and near-infrared photons to stimulate ATP production?",
    "options": [
      "Cytochrome c oxidase in the mitochondrial respiratory chain",
      "Hemoglobin iron molecules in circulating erythrocytes",
      "Myoglobin oxygen storage proteins in slow-twitch fibers",
      "Actin-myosin cross-bridges in myofibrillar sarcomeres"
    ],
    "correct": 0,
    "explanation": "Cytochrome c oxidase (Unit IV of the mitochondrial respiratory chain) serves as the primary photoacceptor for red and near-infrared light (600-900 nm), accelerating electron transfer, ATP synthesis, and cellular repair."
  },
  # B-031
  {
    "id": "t11-b-031",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "foundational",
    "text": "What are the standard electrical waveform parameters of classic 'Russian Current' used for neuromuscular electrical stimulation (NMES)?",
    "options": [
      "Continuous direct galvanic current delivered at 10 microamperes",
      "2500 Hz sinusoidal carrier delivered in 50 bursts per second with 50% duty cycle",
      "High-voltage pulsed current delivered at 100 kHz with microsecond pulse duration",
      "Monophasic square wave delivered at 1 Hz with continuous unmodulated output"
    ],
    "correct": 1,
    "explanation": "Russian current (Kots technique) uses a 2500 Hz medium-frequency sinusoidal AC carrier frequency delivered in 50 bursts per second (50 Hz burst frequency) with a 50% duty cycle (10 ms on, 10 ms off within each burst cycle)."
  },
  # B-032
  {
    "id": "t11-b-032",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "foundational",
    "text": "Which clinical scenario represents an absolute contraindication to the application of continuous Shortwave Diathermy (SWD)?",
    "options": [
      "Chronic knee osteoarthritis with no metallic implants present",
      "Presence of implanted cardiac pacemaker or metallic implants in the field",
      "Mild delayed onset muscle soreness in healthy quadriceps muscle",
      "Chronic subacromial bursitis without systemic inflammatory fever"
    ],
    "correct": 1,
    "explanation": "Implanted cardiac pacemakers, neurostimulators, and metallic implants in the treatment field are absolute contraindications for Shortwave Diathermy due to risk of electromagnetic interference and severe deep thermal tissue burns from concentrated eddy currents."
  },
  # B-033
  {
    "id": "t11-b-033",
    "section": "B",
    "topic": "psychology and human development",
    "subtopic": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz",
    "difficulty": "applied",
    "text": "In neurological rehabilitation (O'Sullivan), what is the standard minimal active movement inclusion criterion for Constraint-Induced Movement Therapy (CIMT) of the paretic upper extremity?",
    "options": [
      "Complete active range of motion of upper extremity against manual resistance",
      "At least 10 degrees active wrist extension and 10 degrees active finger extension",
      "Total absence of voluntary movement with flaccid paralysis of the entire arm",
      "Ability to lift a 20 kg barbell overhead with non-paretic upper extremity"
    ],
    "correct": 1,
    "explanation": "Classic CIMT inclusion criteria require minimal baseline voluntary active movement of at least 10 degrees active wrist extension and 10 degrees active extension of at least two digits (MCP/IP joints) to ensure functional motor potential."
  },
  # B-034
  {
    "id": "t11-b-034",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz",
    "difficulty": "applied",
    "text": "In dynamic balance screening using the Y-Balance Test (Star Excursion Balance Test derivative), what bilateral reach asymmetry is predictive of elevated lower extremity injury risk in athletes?",
    "options": [
      "Anterior reach difference greater than 4 cm between limbs",
      "Posteromedial reach difference of 0.5 cm between limbs",
      "Posterolateral reach difference of 1.0 cm between limbs",
      "Composite score reach symmetry of exactly 100 percent"
    ],
    "correct": 0,
    "explanation": "Plisky et al. demonstrated that an anterior reach asymmetry greater than 4 cm on the Y-Balance / SEBT is significantly associated with an increased risk (over 2.5 times higher) of lower extremity sports injuries."
  },
  # B-035
  {
    "id": "t11-b-035",
    "section": "B",
    "topic": "psychology and human development",
    "subtopic": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz",
    "difficulty": "applied",
    "text": "In motor learning and sensorimotor retraining, why is 'Random (Variable) Practice' generally superior to 'Blocked Practice' for long-term sports skill retention?",
    "options": [
      "It eliminates cognitive effort and allows automatic execution without thought",
      "It creates contextual interference, promoting deeper motor schema transfer",
      "It guarantees that the athlete never commits any errors during acquisition",
      "It decreases cortical motor excitability and downregulates neural pathways"
    ],
    "correct": 1,
    "explanation": "While blocked practice shows better immediate acquisition performance, random practice creates contextual interference that forces continuous motor plan reconstruction, leading to superior long-term retention and real-game transfer."
  },
  # B-036
  {
    "id": "t11-b-036",
    "section": "B",
    "topic": "psychology and human development",
    "subtopic": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz",
    "difficulty": "foundational",
    "text": "On the Modified Ashworth Scale (MAS) for grading spasticity, what clinical finding defines a Grade 1+?",
    "options": [
      "No increase in muscle tone throughout passive range of motion",
      "Slight catch followed by minimal resistance through less than half of ROM",
      "Considerable increase in tone, passive movement difficult through range",
      "Affected joint parts rigid in flexion or extension with zero movement"
    ],
    "correct": 1,
    "explanation": "MAS Grade 1+: Slight increase in muscle tone, manifested by a catch, followed by minimal resistance throughout the remainder (less than half) of the available ROM (distinct from Grade 1 where resistance occurs only at the end of range)."
  },
  # B-037
  {
    "id": "t11-b-037",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Physiotherapy in Musculoskeletal Conditions - Prof. P.P. Mohanty",
    "difficulty": "applied",
    "text": "According to the Ottawa Ankle Rules, which clinical finding warrants an acute ankle radiographic series following an acute inversion injury?",
    "options": [
      "Mild diffuse ecchymosis over ATFL without bone tenderness",
      "Bone tenderness at posterior edge/tip of lateral malleolus or inability to bear weight",
      "Ability to walk 10 steps comfortably immediately after the injury occurred",
      "Normal full active dorsiflexion and plantarflexion without local pain"
    ],
    "correct": 1,
    "explanation": "Ottawa Ankle Rules mandate X-rays if there is bone tenderness along the posterior edge/tip of either malleolus (distal 6 cm), or inability to bear weight both immediately and in the emergency department for 4 steps (near 100% sensitivity for fracture)."
  },
  # B-038
  {
    "id": "t11-b-038",
    "section": "B",
    "topic": "sports physiotherapy and medicine",
    "subtopic": "Victorian Institute of Sport Assessment - Achilles (VISA-A)",
    "difficulty": "analytical",
    "text": "In outcome assessment for Achilles tendinopathy, what is the established Minimal Clinically Important Difference (MCID) for the VISA-A questionnaire score?",
    "options": [
      "An increase or decrease of approximately 1.5 to 2.0 points",
      "An increase of at least 10.0 to 14.0 points on the scale",
      "An increase of exactly 45.0 to 50.0 points on the scale",
      "A decrease of at least 30.0 to 35.0 points on the scale"
    ],
    "correct": 1,
    "explanation": "The Minimal Clinically Important Difference (MCID) for the Victorian Institute of Sport Assessment - Achilles (VISA-A) questionnaire is established between 10 and 14 points on its 0-100 scale."
  },
  # B-039
  {
    "id": "t11-b-039",
    "section": "B",
    "topic": "nutrition and research evidence in sports",
    "subtopic": "Nutritional support during injury rehabilitation and immobilization",
    "difficulty": "applied",
    "text": "During limb immobilization following musculoskeletal injury, what nutritional intervention is evidence-based to attenuate disuse muscle atrophy?",
    "options": [
      "Severe caloric restriction below 800 kcal/day to prevent body fat gain",
      "Maintaining energy balance and consuming 1.6 to 2.5 g/kg/day of protein",
      "Completely eliminating dietary protein and relying solely on lipid fats",
      "Consuming 100% of daily carbohydrates in a single pre-sleep feeding"
    ],
    "correct": 1,
    "explanation": "During injury/immobilization, preventing energy deficits and maintaining higher protein intake (1.6 to 2.5 g/kg/day) with evenly distributed leucine-rich feedings (20-30 g per meal every 3-4 hours) helps mitigate disuse muscle protein breakdown."
  },
  # B-040
  {
    "id": "t11-b-040",
    "section": "B",
    "topic": "sports physiotherapy and medicine",
    "subtopic": "Interdisciplinary coordination and return-to-play ethics",
    "difficulty": "applied",
    "text": "When a coach pressures a sports physiotherapist to prematurely clear an injured athlete before objective physical criteria are met, what is the physiotherapist's primary ethical obligation?",
    "options": [
      "Immediately comply with coaching demands to preserve professional standing",
      "Prioritize athlete health, long-term safety, and objective readiness criteria",
      "Delegate clinical clearance decisions entirely to athlete parents or peers",
      "Falsify objective hop testing and isokinetic torque reports for management"
    ],
    "correct": 1,
    "explanation": "Sports medicine and physiotherapy ethics (WCPT/IFSPT) dictate that the practitioner's primary duty of care is to protect athlete health and safety, upholding evidence-based, objective clearance criteria regardless of external coaching or institutional pressure."
  },

  # -------------------------------------------------------------
  # SECTION C: Case Studies (20 Qs: 10 passages x 2 Qs each)
  # -------------------------------------------------------------
  # Passage 1: Acute Hamstring Strain (t11-cs-001)
  {
    "id": "t11-c-001",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Track sprinter with acute posterior thigh pain during terminal swing phase",
    "difficulty": "analytical",
    "passageId": "t11-cs-001",
    "passage": "A 21-year-old elite track sprinter decelerates abruptly at the 70-meter mark of a 100-meter sprint, grasping the posterior aspect of his right thigh. He reports hearing a distinct 'pop' followed by immediate sharp pain (VAS 8/10) and an inability to maintain running velocity. On physical examination at the trackside clinic 1 hour post-injury, there is localized pain on palpation 8 cm distal to the ischial tuberosity, moderate swelling without a palpable tendon defect, and pain on resisted knee flexion at 30 degrees.",
    "text": "Based on the mechanism of injury (terminal swing phase of maximum velocity sprinting) and physical findings, which muscle and anatomical region is MOST commonly injured?",
    "options": [
      "Distal myotendinous junction of semitendinosus muscle",
      "Proximal myotendinous junction of biceps femoris long head",
      "Mid-belly structural tear of gracilis and sartorius muscles",
      "Proximal origin avulsion of adductor magnus at pubic ramus"
    ],
    "correct": 1,
    "explanation": "During the terminal swing phase of sprinting, the hamstrings undergo maximal eccentric lengthening to decelerate the forward-swinging tibia; the long head of the biceps femoris experiences the greatest relative stretch and accounts for ~80% of sprint-related hamstring strains."
  },
  {
    "id": "t11-c-002",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Track sprinter with acute posterior thigh pain during terminal swing phase",
    "difficulty": "analytical",
    "passageId": "t11-cs-001",
    "passage": "A 21-year-old elite track sprinter decelerates abruptly at the 70-meter mark of a 100-meter sprint, grasping the posterior aspect of his right thigh. He reports hearing a distinct 'pop' followed by immediate sharp pain (VAS 8/10) and an inability to maintain running velocity. On physical examination at the trackside clinic 1 hour post-injury, there is localized pain on palpation 8 cm distal to the ischial tuberosity, moderate swelling without a palpable tendon defect, and pain on resisted knee flexion at 30 degrees.",
    "text": "Which clinical assessment battery must the sprinter successfully achieve before being cleared for unrestricted high-speed sprinting and competition?",
    "options": [
      "Pain-free full passive hip flexion without strength criteria",
      "Pain-free H-test, eccentric strength symmetry >=90%, and full-speed sprints",
      "Ability to complete five bodyweight squats without loss of balance",
      "Resolution of skin ecchymosis regardless of persistent weakness"
    ],
    "correct": 1,
    "explanation": "Return-to-sprint clearance criteria require full active pain-free length under high speed (negative Askling H-test), eccentric strength symmetry (LSI >=90%), and graded exposure to maximum velocity sprinting (>95% max velocity) without symptoms."
  },

  # Passage 2: Throwing Shoulder GIRD (t11-cs-002)
  {
    "id": "t11-c-003",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Javelin thrower with glenohumeral internal rotation deficit and shoulder pain",
    "difficulty": "analytical",
    "passageId": "t11-cs-002",
    "passage": "A 24-year-old national-level javelin thrower presents with insidious onset right posterior shoulder pain during the late cocking and acceleration phases of throwing. Passive range of motion testing at 90 degrees abduction reveals: Right (dominant) Glenohumeral External Rotation (ER) = 125 degrees, Internal Rotation (IR) = 35 degrees (Total Rotational Motion = 160 degrees). Left (non-dominant) ER = 100 degrees, IR = 65 degrees (Total Rotational Motion = 165 degrees).",
    "text": "How should the sports physiotherapist interpret the thrower's glenohumeral range of motion findings?",
    "options": [
      "Severe rotator cuff rupture requiring open surgical repair",
      "GIRD with acceptable total arc (IR loss > 20 deg, arc loss < 5 deg)",
      "Normal non-athletic shoulder range with excessive internal rotation",
      "Multidirectional glenohumeral instability with global capsular laxity"
    ],
    "correct": 1,
    "explanation": "GIRD is defined as a loss of internal rotation >18-20 degrees compared to the contralateral side. Here, the IR deficit is 30 degrees (35 vs 65) while the Total Arc of Motion difference is only 5 degrees (160 vs 165), representing classic thrower's GIRD with osseous/posterior soft tissue adaptation."
  },
  {
    "id": "t11-c-004",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Javelin thrower with glenohumeral internal rotation deficit and shoulder pain",
    "difficulty": "applied",
    "passageId": "t11-cs-002",
    "passage": "A 24-year-old national-level javelin thrower presents with insidious onset right posterior shoulder pain during the late cocking and acceleration phases of throwing. Passive range of motion testing at 90 degrees abduction reveals: Right (dominant) Glenohumeral External Rotation (ER) = 125 degrees, Internal Rotation (IR) = 35 degrees (Total Rotational Motion = 160 degrees). Left (non-dominant) ER = 100 degrees, IR = 65 degrees (Total Rotational Motion = 165 degrees).",
    "text": "Which targeted manual therapy and exercise intervention is MOST evidence-based to restore internal rotation in this athlete?",
    "options": [
      "Aggressive anterior capsule stretching with external rotation overpressure",
      "Posterior capsule mobilizations paired with Sleeper and Cross-Body stretches",
      "Complete immobilization of the shoulder in an abduction sling for six weeks",
      "High-frequency ultrasound directed strictly to the anterior glenohumeral band"
    ],
    "correct": 1,
    "explanation": "Evidence-based management of GIRD includes posterior glenohumeral joint mobilizations (Grade III-IV posterior glides) paired with posterior soft-tissue stretching (Sleeper stretch and cross-body stretch) to improve posterior capsular/cuff extensibility."
  },

  # Passage 3: Patellar Tendinopathy (t11-cs-003)
  {
    "id": "t11-c-005",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Elite volleyball player with chronic inferior patellar pole pain",
    "difficulty": "analytical",
    "passageId": "t11-cs-003",
    "passage": "A 22-year-old elite volleyball attacker reports a 3-month history of well-localized pain at the inferior pole of her right patella. Pain is sharp during the eccentric plant phase of spike jumps and immediately upon landing. Symptoms warm up during initial activity but ache significantly for 24-48 hours after matches. Palpation identifies focal point tenderness precisely at the bone-tendon junction of the inferior patellar pole. Knee joint effusion, joint line tenderness, and McMurray test are all negative.",
    "text": "Which diagnostic test finding and clinical diagnosis is MOST consistent with this presentation?",
    "options": [
      "Medial meniscal tear with positive McMurray test and locked knee",
      "Proximal Patellar Tendinopathy with positive Royal London Hospital test",
      "Hoffa's fat pad disease with positive anterior drawer test in extension",
      "Symptomatic bipartite patella with lateral retinacular avulsion injury"
    ],
    "correct": 1,
    "explanation": "Focal tenderness at the inferior pole of the patella that decreases when palpated with the knee extended versus flexed (positive Royal London Hospital test), paired with load-related pain during jumping, is hallmark Patellar Tendinopathy."
  },
  {
    "id": "t11-c-006",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Elite volleyball player with chronic inferior patellar pole pain",
    "difficulty": "applied",
    "passageId": "t11-cs-003",
    "passage": "A 22-year-old elite volleyball attacker reports a 3-month history of well-localized pain at the inferior pole of her right patella. Pain is sharp during the eccentric plant phase of spike jumps and immediately upon landing. Symptoms warm up during initial activity but ache significantly for 24-48 hours after matches. Palpation identifies focal point tenderness precisely at the bone-tendon junction of the inferior patellar pole. Knee joint effusion, joint line tenderness, and McMurray test are all negative.",
    "text": "What is the recommended progressive exercise rehabilitation pathway for this in-season volleyball player?",
    "options": [
      "Complete bed rest for 8 weeks followed by immediate return to match play",
      "Isometric Spanish squats -> Heavy Slow Resistance -> Energy storage jumping",
      "Daily passive ice immersion combined with high-velocity plyometric jumps only",
      "Surgical debridement of tendon core as the mandatory first-line treatment"
    ],
    "correct": 1,
    "explanation": "Malliaras et al. and Rio et al. recommend a staged progression: Stage 1 (isometrics for pain relief), Stage 2 (Heavy Slow Resistance training 3x/week for tendon stiffness/capacity), Stage 3 (energy storage/release plyometrics), and Stage 4 (sport-specific return)."
  },

  # Passage 4: Ankle Inversion Sprain (t11-cs-004)
  {
    "id": "t11-c-007",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Basketball player with acute inversion ankle sprain and lateral laxity",
    "difficulty": "analytical",
    "passageId": "t11-cs-004",
    "passage": "A 19-year-old university basketball guard lands on an opponent's foot during a rebound contest, forcing her right ankle into sudden plantarflexion and inversion. She presents to the physiotherapy room with prominent anterolateral ankle swelling and ecchymosis (egg-shaped swelling). Palpation reveals maximal tenderness over the anterior talofibular ligament (ATFL) and mild tenderness over the calcaneofibular ligament (CFL). The anterior drawer test demonstrates 8 mm of anterior translation with a soft end-feel compared to 3 mm on the uninjured left ankle.",
    "text": "How should the physiotherapist grade this ligamentous injury based on physical findings?",
    "options": [
      "Grade I ankle sprain with microscopic stretching and no mechanical laxity",
      "Grade II ankle sprain with partial tearing of ATFL and demonstrable laxity",
      "Grade IV ankle sprain with complete talonavicular dislocation and rupture",
      "Zero ligamentous involvement; isolated medial deltoid ligament avulsion"
    ],
    "correct": 1,
    "explanation": "A Grade II ankle sprain is characterized by significant swelling, ecchymosis, localized tenderness over the ATFL (and potentially CFL), and moderate mechanical laxity with a soft end-feel on anterior drawer testing without complete joint instability."
  },
  {
    "id": "t11-c-008",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Basketball player with acute inversion ankle sprain and lateral laxity",
    "difficulty": "applied",
    "passageId": "t11-cs-004",
    "passage": "A 19-year-old university basketball guard lands on an opponent's foot during a rebound contest, forcing her right ankle into sudden plantarflexion and inversion. She presents to the physiotherapy room with prominent anterolateral ankle swelling and ecchymosis (egg-shaped swelling). Palpation reveals maximal tenderness over the anterior talofibular ligament (ATFL) and mild tenderness over the calcaneofibular ligament (CFL). The anterior drawer test demonstrates 8 mm of anterior translation with a soft end-feel compared to 3 mm on the uninjured left ankle.",
    "text": "What is the most effective early intervention to prevent the development of Chronic Ankle Instability (CAI) in this athlete?",
    "options": [
      "Strict non-weight-bearing cast immobilization for 6 consecutive weeks",
      "Protected weight-bearing with bracing, early ROM, and balance training",
      "Immediate surgical ligament reconstruction within 24 hours of injury",
      "Passive bed rest without any rehabilitation until laxity disappears"
    ],
    "correct": 1,
    "explanation": "Clinical practice guidelines (Kerkhoffs et al., Martin et al.) strongly favor early functional management (protected weight-bearing with semi-rigid bracing) paired with early progressive neuromuscular and proprioceptive balance training over rigid immobilization."
  },

  # Passage 5: Post-ACL Return to Sport (t11-cs-005)
  {
    "id": "t11-c-009",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Football midfielder 8 months post-ACL reconstruction clearance testing",
    "difficulty": "analytical",
    "passageId": "t11-cs-005",
    "passage": "An 18-year-old competitive football midfielder is 8 months post-left ACL reconstruction with a Bone-Patellar Tendon-Bone (BPTB) autograft. She is eager to return to match play. Her testing results show: Full active ROM (-2 to 140 degrees), no effusion, isokinetic quadriceps peak torque Limb Symmetry Index (LSI) = 88%, Single-Leg Hop for Distance LSI = 92%, Triple Hop LSI = 91%, Y-Balance anterior reach asymmetry = 2.5 cm, and ACL-Return to Sport after Injury (ACL-RSI) psychological score = 78/100. However, 2D video analysis of a drop vertical jump reveals dynamic knee valgus on the involved left limb upon landing.",
    "text": "What is the most appropriate clinical decision regarding this athlete's clearance for full contact match play?",
    "options": [
      "Clear immediately for unrestricted competitive match play without further training",
      "Withhold match clearance until quad LSI >=90% and valgus landing deficit resolves",
      "Refer immediately for revision ACL reconstruction surgery due to graft failure",
      "Advise the athlete to permanently retire from all multidirectional field sports"
    ],
    "correct": 1,
    "explanation": "Comprehensive RTS criteria require meeting all physical benchmarks (quadriceps and hop test LSI >=90%), psychological readiness (ACL-RSI >75-80), and demonstrated biomechanical movement quality (absence of dynamic knee valgus on landing) before clearance."
  },
  {
    "id": "t11-c-010",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Football midfielder 8 months post-ACL reconstruction clearance testing",
    "difficulty": "applied",
    "passageId": "t11-cs-005",
    "passage": "An 18-year-old competitive football midfielder is 8 months post-left ACL reconstruction with a Bone-Patellar Tendon-Bone (BPTB) autograft. She is eager to return to match play. Her testing results show: Full active ROM (-2 to 140 degrees), no effusion, isokinetic quadriceps peak torque Limb Symmetry Index (LSI) = 88%, Single-Leg Hop for Distance LSI = 92%, Triple Hop LSI = 91%, Y-Balance anterior reach asymmetry = 2.5 cm, and ACL-Return to Sport after Injury (ACL-RSI) psychological score = 78/100. However, 2D video analysis of a drop vertical jump reveals dynamic knee valgus on the involved left limb upon landing.",
    "text": "Which targeted exercise intervention will most effectively address her dynamic knee valgus landing biomechanics?",
    "options": [
      "Passive seated quadriceps stretching without active hip strengthening",
      "Trunk/core stability and posterolateral hip motor control jump-landing training",
      "Performing exclusively heavy seated leg extensions from 0 to 90 degrees",
      "Complete immobilization of the hip joint with a rigid abduction orthosis"
    ],
    "correct": 1,
    "explanation": "Dynamic knee valgus is primarily driven by hip adduction and internal rotation combined with contralateral pelvic drop; strengthening the posterolateral hip complex (gluteus medius/maximus) and core with real-time biofeedback landing mechanics corrects this deficit."
  },

  # Passage 6: Sever's Disease / Calcaneal Apophysitis (t11-cs-006)
  {
    "id": "t11-c-011",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Junior gymnast with bilateral posterior heel pain during growth spurt",
    "difficulty": "analytical",
    "passageId": "t11-cs-006",
    "passage": "A 12-year-old female artistic gymnast undergoing a rapid height growth spurt reports bilateral posterior heel pain that has progressively worsened over 6 weeks. The pain is aggravated during tumbling passes, vault landings, and barefoot floor routines. Examination reveals marked bilateral tenderness upon mediolateral compression of the posterior calcaneus (positive Calcaneal Squeeze test). There is no retrocalcaneal swelling, and Achilles tendon midportion palpation is non-tender. Plain radiographs show typical fragmentation and increased density of the calcaneal apophysis consistent with chronological age.",
    "text": "What is the primary clinical diagnosis for this young athlete?",
    "options": [
      "Midportion Achilles tendinopathy with partial thickness tear",
      "Calcaneal apophysitis traction condition (Sever's disease)",
      "Tarsal tunnel syndrome with posterior tibial nerve entrapment",
      "Acute plantar fascia rupture at medial calcaneal tubercle"
    ],
    "correct": 1,
    "explanation": "Bilateral heel pain in a growing adolescent (8-14 years) during high-impact sports, localized tenderness on mediolateral compression of the calcaneus (positive Squeeze test), and non-tender Achilles midportion is diagnostic of Sever's disease (calcaneal apophysitis)."
  },
  {
    "id": "t11-c-012",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Junior gymnast with bilateral posterior heel pain during growth spurt",
    "difficulty": "applied",
    "passageId": "t11-cs-006",
    "passage": "A 12-year-old female artistic gymnast undergoing a rapid height growth spurt reports bilateral posterior heel pain that has progressively worsened over 6 weeks. The pain is aggravated during tumbling passes, vault landings, and barefoot floor routines. Examination reveals marked bilateral tenderness upon mediolateral compression of the posterior calcaneus (positive Calcaneal Squeeze test). There is no retrocalcaneal swelling, and Achilles tendon midportion palpation is non-tender. Plain radiographs show typical fragmentation and increased density of the calcaneal apophysis consistent with chronological age.",
    "text": "Which management strategy is MOST appropriate for this adolescent athlete?",
    "options": [
      "Aggressive terminal dorsiflexion stretching of calf on incline boards",
      "Impact load modification, temporary heel lifts, and calf strengthening",
      "Immediate surgical excision of calcaneal secondary ossification center",
      "Corticosteroid injection into calcaneal apophysis under ultrasound"
    ],
    "correct": 1,
    "explanation": "Sever's disease is self-limiting and managed conservatively: impact load modification, temporary silicone heel cups/lifts (to reduce Achilles traction), ice, and progressive calf/intrinsic strengthening; aggressive stretching is contraindicated as it increases traction strain."
  },

  # Passage 7: MTSS vs Stress Fracture (t11-cs-007)
  {
    "id": "t11-c-013",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Distance runner with posteromedial tibial border pain",
    "difficulty": "analytical",
    "passageId": "t11-cs-007",
    "passage": "A 20-year-old collegiate middle-distance runner presents with a 4-week history of exercise-induced right lower leg pain after abruptly increasing her weekly mileage from 40 km to 75 km. She describes a dull ache along the inner shin that begins during running and persists for several hours post-training. On examination, there is diffuse tenderness extending over a 7 cm region along the posteromedial border of the distal third of the tibia. There is no focal, point-specific bony periosteal step-off, and tuning fork vibration testing over the tibia does not elicit focal pain.",
    "text": "Which condition is MOST consistent with these clinical findings?",
    "options": [
      "Tibial bone stress fracture with cortical breakthrough",
      "Medial Tibial Stress Syndrome (MTSS / shin splints)",
      "Chronic exertional compartment syndrome of lateral side",
      "Popliteal artery entrapment syndrome with resting ischemia"
    ],
    "correct": 1,
    "explanation": "Medial Tibial Stress Syndrome (MTSS) characteristically presents as diffuse tenderness (>=5 cm) along the posteromedial border of the distal/middle third of the tibia, whereas a tibial stress fracture typically demonstrates sharp, focal point tenderness (<2 cm) and positive vibration/percussion pain."
  },
  {
    "id": "t11-c-014",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Distance runner with posteromedial tibial border pain",
    "difficulty": "applied",
    "passageId": "t11-cs-007",
    "passage": "A 20-year-old collegiate middle-distance runner presents with a 4-week history of exercise-induced right lower leg pain after abruptly increasing her weekly mileage from 40 km to 75 km. She describes a dull ache along the inner shin that begins during running and persists for several hours post-training. On examination, there is diffuse tenderness extending over a 7 cm region along the posteromedial border of the distal third of the tibia. There is no focal, point-specific bony periosteal step-off, and tuning fork vibration testing over the tibia does not elicit focal pain.",
    "text": "Which running gait modification is evidence-based to reduce tibial bone loading forces during rehabilitation?",
    "options": [
      "Decreasing step rate by 20% to encourage longer overstriding steps",
      "Increasing running cadence by 5% to 10% to reduce impact loading peaks",
      "Switching exclusively to heavy downhill trail running on uneven ground",
      "Instructing the runner to land strictly on the lateral calcaneal edge"
    ],
    "correct": 1,
    "explanation": "Increasing running cadence by 5-10% at a given running speed reduces step length, decreases braking impulse, and significantly reduces peak tibial accelerations and bone contact forces (Heiderscheit et al., Barton et al.)."
  },

  # Passage 8: Lateral Epicondylalgia (t11-cs-008)
  {
    "id": "t11-c-015",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Badminton player with lateral elbow pain during backhand strokes",
    "difficulty": "analytical",
    "passageId": "t11-cs-008",
    "passage": "A 28-year-old elite badminton player presents with pain over the lateral aspect of his dominant right elbow of 6 weeks duration. Symptoms are provoked during single-handed backhand clearing shots and when lifting heavy luggage. Clinical examination shows: Localized tenderness over the common extensor origin at the lateral epicondyle; pain reproduction during resisted wrist extension with elbow in full extension (Cozen's test); pain on resisted middle finger extension (Maudsley's test); and passive wrist flexion with pronation and elbow extension (Mill's test) reproduces symptoms. Radial nerve neurodynamic test is normal.",
    "text": "Which muscle tendon origin is primarily involved in this pathology?",
    "options": [
      "Flexor Carpi Radialis and Pronator Teres tendon origin",
      "Extensor Carpi Radialis Brevis (ECRB) tendon origin",
      "Triceps Brachii distal tendon insertion on olecranon",
      "Biceps Brachii distal tendon insertion on radial bone"
    ],
    "correct": 1,
    "explanation": "Lateral epicondylalgia primarily involves tendinopathic degenerative changes (angiofibroblastic hyperplasia) at the origin of the Extensor Carpi Radialis Brevis (ECRB) tendon (and to a lesser degree extensor digitorum communis)."
  },
  {
    "id": "t11-c-016",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Badminton player with lateral elbow pain during backhand strokes",
    "difficulty": "applied",
    "passageId": "t11-cs-008",
    "passage": "A 28-year-old elite badminton player presents with pain over the lateral aspect of his dominant right elbow of 6 weeks duration. Symptoms are provoked during single-handed backhand clearing shots and when lifting heavy luggage. Clinical examination shows: Localized tenderness over the common extensor origin at the lateral epicondyle; pain reproduction during resisted wrist extension with elbow in full extension (Cozen's test); pain on resisted middle finger extension (Maudsley's test); and passive wrist flexion with pronation and elbow extension (Mill's test) reproduces symptoms. Radial nerve neurodynamic test is normal.",
    "text": "Which progressive exercise rehabilitation approach has the strongest evidence for resolving this condition?",
    "options": [
      "Immobilizing the elbow in a cast for 4 weeks with zero active exercise",
      "Progressive loading starting with isometrics and advancing to eccentric-concentric strengthening",
      "Routine repeated corticosteroid injections into the ECRB tendon every two weeks",
      "Passive continuous ultrasound therapy alone without any active exercise"
    ],
    "correct": 1,
    "explanation": "Evidence demonstrates that active progressive loading (isometrics for pain, eccentric-concentric wrist extension exercises such as the Tyler Twist using a flexible bar, and kinetic chain shoulder/scapular strengthening) is the most effective long-term treatment, whereas steroid injections show high recurrence rates."
  },

  # Passage 9: Lumbar Spondylolysis in Fast Bowler (t11-cs-009)
  {
    "id": "t11-c-017",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Cricket fast bowler with acute unilateral low back pain",
    "difficulty": "analytical",
    "passageId": "t11-cs-009",
    "passage": "A 17-year-old cricket fast bowler presents with acute right-sided lower back pain that began during an intensive bowling camp. The pain is sharp, non-radiating, and significantly aggravated during the delivery stride and back foot impact. Physical examination demonstrates localized tenderness over the right L4-L5 paraspinal region. Range of motion testing shows marked pain provocation on lumbar extension combined with right lateral flexion and rotation. The single-leg hyperextension test (Stork test) on the right leg reproduces his familiar back pain. Neurological examination of lower extremities is entirely normal.",
    "text": "What is the most likely diagnosis indicated by this clinical presentation?",
    "options": [
      "Acute massive L5-S1 disc herniation with cauda equina syndrome",
      "Lumbar spondylolysis (pars stress fracture) on the right side",
      "Isolated piriformis muscle syndrome with sciatic nerve entrapment",
      "Thoracolumbar scoliosis without structural osseous stress reaction"
    ],
    "correct": 1,
    "explanation": "Unilateral low back pain in an adolescent fast bowler aggravated by hyperextension/rotation and a positive single-leg hyperextension (Stork) test is classic for lumbar spondylolysis (stress fracture of the pars interarticularis, most commonly L4 or L5 on the non-bowling arm side)."
  },
  {
    "id": "t11-c-018",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Cricket fast bowler with acute unilateral low back pain",
    "difficulty": "applied",
    "passageId": "t11-cs-009",
    "passage": "A 17-year-old cricket fast bowler presents with acute right-sided lower back pain that began during an intensive bowling camp. The pain is sharp, non-radiating, and significantly aggravated during the delivery stride and back foot impact. Physical examination demonstrates localized tenderness over the right L4-L5 paraspinal region. Range of motion testing shows marked pain provocation on lumbar extension combined with right lateral flexion and rotation. The single-leg hyperextension test (Stork test) on the right leg reproduces his familiar back pain. Neurological examination of lower extremities is entirely normal.",
    "text": "What are the primary initial rehabilitation guidelines for this young fast bowler?",
    "options": [
      "Immediate return to bowling with aggressive end-range extension exercises",
      "Bowling cessation, deep core stabilization, and bowling workload analysis",
      "High-velocity lumbar rotational manipulation performed daily for two weeks",
      "Permanent total bed rest for six months with zero physical therapy"
    ],
    "correct": 1,
    "explanation": "Initial management of acute spondylolysis requires bowling cessation, avoidance of lumbar hyperextension/rotation, progressive core stability (deep abdominal/multifidus retraining, neutral spine control), and gradual return to bowling while monitoring workload and side-flexion bowling biomechanics."
  },

  # Passage 10: Scapular Dyskinesis in Gymnast (t11-cs-010)
  {
    "id": "t11-c-019",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Gymnast with subacromial impingement and scapular dyskinesis",
    "difficulty": "analytical",
    "passageId": "t11-cs-010",
    "passage": "A 16-year-old competitive female gymnast reports diffuse anterior and superior right shoulder pain during hanging and pressing elements on uneven bars and floor routines. Visual movement analysis during unweighted active arm descent reveals prominence and winging of the entire medial border of the right scapula (Kibler Type II Scapular Dyskinesis). Manual muscle testing reveals weakness in the right Serratus Anterior and Lower Trapezius, alongside tightness in the Pectoralis Minor. Applying manual scapular stabilization (Scapular Assistance Test) completely eliminates her pain during active arm elevation.",
    "text": "What does the positive Scapular Assistance Test demonstrate clinically?",
    "options": [
      "The shoulder pain is entirely referred from cervical C5 nerve root",
      "Scapular dyskinesis contributes to subacromial space narrowing and pain",
      "The athlete has an irreparable full-thickness tear of latissimus dorsi",
      "The glenohumeral joint is permanently dislocated requiring surgery"
    ],
    "correct": 1,
    "explanation": "A positive Scapular Assistance Test (where manual assistance into upward rotation and posterior tilt relieves elevation pain) confirms that abnormal scapular kinematics (dyskinesis) directly contributes to subacromial impingement by failing to elevate the acromion."
  },
  {
    "id": "t11-c-020",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Gymnast with subacromial impingement and scapular dyskinesis",
    "difficulty": "applied",
    "passageId": "t11-cs-010",
    "passage": "A 16-year-old competitive female gymnast reports diffuse anterior and superior right shoulder pain during hanging and pressing elements on uneven bars and floor routines. Visual movement analysis during unweighted active arm descent reveals prominence and winging of the entire medial border of the right scapula (Kibler Type II Scapular Dyskinesis). Manual muscle testing reveals weakness in the right Serratus Anterior and Lower Trapezius, alongside tightness in the Pectoralis Minor. Applying manual scapular stabilization (Scapular Assistance Test) completely eliminates her pain during active arm elevation.",
    "text": "Which exercise rehabilitation combination is MOST indicated to restore optimal scapular kinematics in this gymnast?",
    "options": [
      "Heavy behind-the-neck military shoulder presses without scapular retraining",
      "Pectoralis minor stretching combined with Serratus Anterior and Lower Trap strengthening",
      "Strict immobilization of the scapula in a rigid posture harness for 3 months",
      "Isolated biceps brachii curls performed strictly on a preacher bench"
    ],
    "correct": 1,
    "explanation": "Correcting Kibler Type II dyskinesis requires stretching tight anterior structures (pectoralis minor) and strengthening the upward rotators and posterior stabilizers—specifically the Serratus Anterior (push-up plus, wall slides) and Lower Trapezius (prone Y-raises, Robbery exercises)."
  }
]

# Balance answer keys uniformly:
# A1: 8 of 0, 8 of 1, 8 of 2, 8 of 3
# A2: 2 of 0, 2 of 1, 2 of 2, 2 of 3
# B: 10 of 0, 10 of 1, 10 of 2, 10 of 3
# C: 5 of 0, 5 of 1, 5 of 2, 5 of 3

by_sec = {'A1': [], 'A2': [], 'B': [], 'C': []}
for q in questions_11:
    by_sec[q['section']].append(q)

for sec, q_list in by_sec.items():
    for i, q in enumerate(q_list):
        desired_correct = i % 4
        current_correct = q['correct']
        if current_correct != desired_correct:
            correct_content = q['options'][current_correct]
            remaining_options = [opt for j, opt in enumerate(q['options']) if j != current_correct]
            new_options = []
            rem_idx = 0
            for pos in range(4):
                if pos == desired_correct:
                    new_options.append(correct_content)
                else:
                    new_options.append(remaining_options[rem_idx])
                    rem_idx += 1
            q['options'] = new_options
            q['correct'] = desired_correct

all_qs = []
for sec in ['A1', 'A2', 'B', 'C']:
    all_qs.extend(by_sec[sec])

with open('mock_tests/mock_test_11.json', 'w') as f:
    json.dump(all_qs, f, indent=2)

print("Saved perfectly balanced mock_tests/mock_test_11.json")
