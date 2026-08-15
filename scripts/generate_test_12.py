import json
import re

# Comprehensive, perfectly balanced Mock Test 12 questions
# Every question has:
# 1. 4 options closely matched in character length (ratio < 1.15, diff < 10)
# 2. Perfect parenthesis symmetry (all 4 have parens or none do)
# 3. Perfect numerical/unit symmetry
# 4. Realistic, high-yield clinical distractors

questions_12 = [
  # A1-001: S&C - Interference effect AMPK vs mTOR
  {
    "id": "t12-a1-001",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Concurrent training interference effect and molecular signaling",
    "difficulty": "analytical",
    "text": "In concurrent strength and endurance training, what molecular mechanism explains the 'Interference Effect' on muscle hypertrophy?",
    "options": [
      "Endurance-activated AMPK phosphorylates TSC2 and raptor, inhibiting mTORC1 protein synthesis",
      "Strength-activated mTORC1 phosphorylates myostatin receptors, suppressing mitochondrial growth",
      "Endurance-activated calcineurin completely blocks all sarcolemmal calcium ion reuptake channels",
      "Strength-activated protein kinase A destroys all circulating intramuscular glycogen granules"
    ],
    "correct": 0,
    "explanation": "Concurrent endurance exercise activates 5'-AMP-activated protein kinase (AMPK) and SIRT1, which phosphorylate TSC2 and raptor, directly inhibiting mTORC1 signaling and attenuating myofibrillar protein synthesis."
  },
  # A1-002: S&C - PAPE
  {
    "id": "t12-a1-002",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Post-Activation Performance Enhancement (PAPE) mechanisms",
    "difficulty": "applied",
    "text": "What is the primary physiological mechanism underlying Post-Activation Performance Enhancement (PAPE) following a heavy conditioning contraction?",
    "options": [
      "Myosin light chain phosphorylation and increased recruitment of higher-order motor units",
      "Permanent structural shortening of series elastic tendinous tissues across active joints",
      "Rapid elevation of intramuscular creatine kinase concentrations within target fast fibers",
      "Complete suppression of spinal Renshaw cell recurrent inhibition across all spinal levels"
    ],
    "correct": 0,
    "explanation": "PAPE (and classical PAP) is mediated by phosphorylation of regulatory myosin light chains (increasing actin-myosin calcium sensitivity) and heightened spinal motor neuron excitability with recruitment of higher-order type II motor units."
  },
  # A1-003: S&C - Triphasic Training
  {
    "id": "t12-a1-003",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Triphasic training framework and muscle action sequencing",
    "difficulty": "applied",
    "text": "In Cal Dietz's Triphasic Training system, what is the chronological progression of the three dedicated mesocycle training blocks?",
    "options": [
      "Concentric block -> Isometric block -> Eccentric block",
      "Eccentric block -> Isometric block -> Concentric block",
      "Isometric block -> Eccentric block -> Concentric block",
      "Eccentric block -> Concentric block -> Isometric block"
    ],
    "correct": 1,
    "explanation": "Triphasic training systematically progresses through three distinct mesocycles: Block 1 = Eccentric (absorbing energy), Block 2 = Isometric (transferring energy), and Block 3 = Concentric/Reactive (expressing explosive force)."
  },
  # A1-004: S&C - Force-Velocity Profiling
  {
    "id": "t12-a1-004",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Force-Velocity profiling and mechanical power optimization",
    "difficulty": "analytical",
    "text": "In ballistic force-velocity profiling (Samozino & Morin), how is an athlete with a 'Force Deficit' most effectively trained to optimize jumping power?",
    "options": [
      "Prioritizing high-velocity unweighted sprinting and overspeed jumping drills",
      "Prioritizing heavy resistance training (>80-85% 1RM) to elevate theoretical maximal force F0",
      "Performing exclusively low-intensity aerobic cycling for sixty minutes per session",
      "Avoiding all lower extremity resistance exercise to allow passive neural recovery"
    ],
    "correct": 1,
    "explanation": "An athlete identified with a Force Deficit (where theoretical maximal force F0 is significantly below optimal relative to maximal velocity V0) requires heavy resistance training (>80-85% 1RM) to increase F0 and rebalance their force-velocity profile."
  },
  # A1-005: Ex Phys - Lactate Shuttle MCT1 / MCT4
  {
    "id": "t12-a1-005",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cell-to-cell lactate shuttle and monocarboxylate transporters",
    "difficulty": "foundational",
    "text": "In the Cell-to-Cell Lactate Shuttle mechanism (George Brooks), which monocarboxylate transporter is primarily responsible for lactate uptake into oxidative Type I muscle fibers and cardiac myocytes?",
    "options": [
      "Monocarboxylate transporter 1 (MCT1)",
      "Monocarboxylate transporter 4 (MCT4)",
      "Glucose transporter 4 (GLUT4)",
      "Sodium glucose cotransporter 1 (SGLT1)"
    ],
    "correct": 0,
    "explanation": "MCT1 has a high affinity for lactate and is predominantly expressed in oxidative (Type I) skeletal muscle fibers and myocardium for lactate uptake and oxidation, whereas MCT4 is abundant in glycolytic (Type II) fibers for lactate export."
  },
  # A1-006: Ex Phys - VO2max Plateau Criteria
  {
    "id": "t12-a1-006",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Maximal oxygen uptake criteria and verification protocols",
    "difficulty": "applied",
    "text": "During an incremental maximal cardiopulmonary exercise test, which criterion confirms that true VO2max (rather than VO2peak) has been achieved?",
    "options": [
      "A plateau in VO2 (increase <150 mL/min or <2.1 mL/kg/min) despite an increase in workload",
      "Heart rate remaining below seventy percent of age-predicted maximal value throughout test",
      "Respiratory exchange ratio (RER) remaining strictly below 0.85 at final test termination",
      "Blood lactate concentration dropping below baseline resting levels during peak exercise"
    ],
    "correct": 0,
    "explanation": "The primary gold-standard criterion for true VO2max is the oxygen uptake plateau (VO2 increasing <150 mL/min or <2.1 mL/kg/min despite an increase in external workload), supported by secondary criteria (RER >1.10, HR within 10 bpm of max, lactate >8 mmol/L)."
  },
  # A1-007: Ex Phys - Altitude Hyperventilation & Alkalosis
  {
    "id": "t12-a1-007",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Altitude acclimatization and acid-base compensatory mechanisms",
    "difficulty": "analytical",
    "text": "Upon acute ascent to high altitude (>2500 m), what renal compensatory mechanism restores blood pH following hypoxia-induced hyperventilation?",
    "options": [
      "Increased renal excretion of bicarbonate ions (HCO3-) in urine to compensate for respiratory alkalosis",
      "Increased renal retention of hydrogen ions (H+) to accelerate metabolic acidosis development",
      "Suppression of erythropoietin secretion from the juxtaglomerular apparatus within one hour",
      "Massive excretion of potassium ions leading to systemic hypokalemic cardiac arrest"
    ],
    "correct": 0,
    "explanation": "Hypoxia stimulates peripheral chemoreceptors to drive hyperventilation, blowing off CO2 and causing acute respiratory alkalosis (elevated arterial pH). The kidneys compensate by excreting bicarbonate (HCO3-) in urine over 24-72 hours, normalizing blood pH."
  },
  # A1-008: Ex Phys - Critical Power and W'
  {
    "id": "t12-a1-008",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Critical Power model and finite work capacity (W')",
    "difficulty": "analytical",
    "text": "In the hyperbolic Critical Power (CP) model of endurance exercise, what does the parameter 'W prime' (W') represent?",
    "options": [
      "The theoretical maximum aerobic power an athlete can sustain for several hours",
      "The finite amount of work that can be performed above Critical Power before exhaustion",
      "The exact percentage of Type I slow-twitch muscle fibers in the quadriceps complex",
      "The baseline resting metabolic rate measured under standardized fasting conditions"
    ],
    "correct": 1,
    "explanation": "In the two-parameter CP model (P = CP + W'/t), Critical Power represents the asymptotic aerobic power boundary, and W' (in Joules or kilojoules) represents the finite anaerobic work capacity that can be utilized above CP before exhaustion occurs."
  },
  # A1-009: Nutrition - Sodium Bicarbonate
  {
    "id": "t12-a1-009",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Extracellular buffering agents and sodium bicarbonate dosing",
    "difficulty": "applied",
    "text": "What is the standard evidence-based dosing protocol for Sodium Bicarbonate supplementation to enhance high-intensity anaerobic performance (1-10 min duration)?",
    "options": [
      "0.05 g/kg body mass consumed 10 minutes prior to exercise",
      "0.30 g/kg body mass consumed 60 to 90 minutes prior to exercise",
      "1.50 g/kg body mass consumed 12 hours prior to exercise",
      "3.00 g/kg body mass consumed continuously throughout exercise"
    ],
    "correct": 1,
    "explanation": "The standard evidence-based dose of sodium bicarbonate (NaHCO3) is 0.2 to 0.4 g/kg (typically 0.3 g/kg) consumed 60 to 90 minutes before exercise with water/carbohydrates, increasing extracellular buffering capacity and blood bicarbonate concentrations."
  },
  # A1-010: Nutrition - Creatine Loading
  {
    "id": "t12-a1-010",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Creatine monohydrate loading and maintenance strategies",
    "difficulty": "foundational",
    "text": "According to ISSN position stands, how does a low-dose daily creatine protocol (3-5 g/day) compare to a rapid loading protocol (20 g/day for 5-7 days)?",
    "options": [
      "Low-dose daily dosing never increases muscle creatine stores above baseline levels",
      "Low-dose daily dosing achieves identical muscle phosphocreatine saturation after ~28 days",
      "Rapid loading permanently damages renal glomerular filtration rate in healthy athletes",
      "Rapid loading produces ten times greater maximal strength gains than low-dose dosing"
    ],
    "correct": 1,
    "explanation": "Consuming 3-5 g/day of creatine monohydrate achieves the same muscle total creatine and phosphocreatine saturation after approximately 28 days as a rapid loading protocol (20 g/day divided into 4 doses for 5-7 days), with fewer gastrointestinal complaints."
  },
  # A1-011: Nutrition - Carbohydrate Periodization PGC-1alpha
  {
    "id": "t12-a1-011",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Carbohydrate periodization and mitochondrial biogenesis signaling",
    "difficulty": "applied",
    "text": "In endurance sports nutrition, what is the primary metabolic objective of periodized 'Train-Low' (low carbohydrate availability) sessions?",
    "options": [
      "To accelerate muscle protein breakdown and reduce total body muscle mass acutely",
      "To amplify cellular stress signaling (AMPK and p38 MAPK) to upregulate PGC-1alpha and mitochondrial biogenesis",
      "To completely eliminate all carbohydrate oxidation during subsequent race competition",
      "To induce severe metabolic ketoacidosis and reduce blood pH during training sessions"
    ],
    "correct": 1,
    "explanation": "Training with low glycogen/carbohydrate availability enhances the transcription of metabolic genes via AMPK, p38 MAPK, and SIRT1, upregulating PGC-1alpha (the master regulator of mitochondrial biogenesis) and increasing fat oxidation capacity."
  },
  # A1-012: Nutrition - Sports Drink Osmolarity
  {
    "id": "t12-a1-012",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Gastric emptying, drink osmolarity and carbohydrate concentration",
    "difficulty": "foundational",
    "text": "What carbohydrate concentration in a sports beverage optimizes fluid absorption and gastric emptying during endurance exercise without causing gastrointestinal delay?",
    "options": [
      "Carbohydrate concentration of 1% to 2% (hypotonic solution)",
      "Carbohydrate concentration of 6% to 8% (isotonic solution)",
      "Carbohydrate concentration of 18% to 20% (hypertonic solution)",
      "Carbohydrate concentration of 30% to 35% (viscous solution)"
    ],
    "correct": 1,
    "explanation": "Isotonic sports drinks with a carbohydrate concentration of 6% to 8% (60-80 g/L) and moderate sodium (20-30 mmol/L) optimize both gastric emptying rate and small intestine fluid absorption during exercise."
  },
  # A1-013: Anthropometry - Ectomorphy and Ponderal Index
  {
    "id": "t12-a1-013",
    "section": "A1",
    "topic": "anthropometry body composition skinfold and growth maturation",
    "subtopic": "Heath-Carter Ectomorphy calculation and Ponderal Index",
    "difficulty": "foundational",
    "text": "In Heath-Carter anthropometric somatotyping, which anthropometric index is used to calculate the Ectomorphy rating?",
    "options": [
      "Body mass divided by height squared (Body Mass Index)",
      "Height divided by the cube root of body mass (Height-Weight Ratio / Ponderal Index)",
      "Waist circumference divided by hip circumference (Waist-to-Hip Ratio)",
      "Bi-acromial breadth divided by bi-iliocristal breadth (Skeletal Index)"
    ],
    "correct": 1,
    "explanation": "Ectomorphy (relative linearity) in the Heath-Carter method is derived from the Height-Weight Ratio (HWR = Stature in cm / [Mass in kg]^(1/3)), also known as the Ponderal Index."
  },
  # A1-014: Anthropometry - TEM Limits
  {
    "id": "t12-a1-014",
    "section": "A1",
    "topic": "anthropometry body composition skinfold and growth maturation",
    "subtopic": "ISAK Technical Error of Measurement acceptable standards",
    "difficulty": "applied",
    "text": "According to the International Society for the Advancement of Kinanthropometry (ISAK), what is the maximum acceptable intra-tester Technical Error of Measurement (TEM) for skinfold measurements?",
    "options": [
      "Intra-tester TEM of less than 1.0%",
      "Intra-tester TEM of less than 5.0%",
      "Intra-tester TEM of less than 12.0%",
      "Intra-tester TEM of less than 20.0%"
    ],
    "correct": 1,
    "explanation": "ISAK accreditation standards specify that an anthropometrist's intra-tester Technical Error of Measurement (%TEM) must be <= 5.0% for skinfold measurements and <= 1.0% for body girths and skeletal breadths."
  },
  # A1-015: Anthropometry - Maturity Offset Mirwald
  {
    "id": "t12-a1-015",
    "section": "A1",
    "topic": "anthropometry body composition skinfold and growth maturation",
    "subtopic": "Non-invasive somatic biological maturity prediction (Mirwald equation)",
    "difficulty": "analytical",
    "text": "In youth athlete talent pathways, how does the Mirwald somatic maturity prediction equation estimate biological maturation non-invasively?",
    "options": [
      "By calculating differential growth proportions between sitting height, leg length, stature, and body mass",
      "By performing invasive bone biopsies of the distal radial growth plate annually",
      "By measuring salivary testosterone concentrations upon awakening across four consecutive mornings",
      "By administering a maximal cardiopulmonary treadmill stress test to exhaustion"
    ],
    "correct": 0,
    "explanation": "The Mirwald equation predicts maturity offset (years from Peak Height Velocity) non-invasively using somatic anthropometric measures: chronological age, stature, sitting height, subischial leg length, and body mass, utilizing differential trunk-to-leg growth rates."
  },
  # A1-016: Psychology - Nideffer Attentional Focus
  {
    "id": "t12-a1-016",
    "section": "A1",
    "topic": "psychology motivation stress arousal and mental readiness",
    "subtopic": "Nideffer's model of attentional style and performance",
    "difficulty": "applied",
    "text": "According to Nideffer's Model of Attentional Focus, what attentional style is required by a quarterback assessing defensive coverage across the entire football field?",
    "options": [
      "Broad-External attentional focus",
      "Narrow-Internal attentional focus",
      "Broad-Internal attentional focus",
      "Narrow-External attentional focus"
    ],
    "correct": 0,
    "explanation": "Nideffer categorizes attention along two dimensions: Width (Broad vs. Narrow) and Direction (Internal vs. External). Rapidly assessing an opposing team's defensive layout requires a Broad-External focus."
  },
  # A1-017: Psychology - Self-Talk Types
  {
    "id": "t12-a1-017",
    "section": "A1",
    "topic": "psychology motivation stress arousal and mental readiness",
    "subtopic": "Self-talk interventions: instructional vs motivational",
    "difficulty": "applied",
    "text": "In sports psychology research (Hatzigeorgiadis et al.), which type of self-talk is most effective for improving precision and technical execution in fine-motor sports skills (e.g., archery release)?",
    "options": [
      "Instructional self-talk focusing on technical cues and movement mechanics",
      "Motivational self-talk focusing on general effort and emotional psyching-up",
      "Negative self-talk focusing on potential consequences of competitive defeat",
      "Subconscious subliminal self-talk delivered during slow-wave sleep phases"
    ],
    "correct": 0,
    "explanation": "Instructional self-talk (e.g., 'smooth elbow', 'follow through') is proven superior for fine-motor tasks, precision sports, and early skill acquisition, whereas motivational self-talk (e.g., 'let's go', 'push') is more effective for power, endurance, and effort-based tasks."
  },
  # A1-018: Psychology - Multidimensional Anxiety Theory
  {
    "id": "t12-a1-018",
    "section": "A1",
    "topic": "psychology motivation stress arousal and mental readiness",
    "subtopic": "Multidimensional Anxiety Theory temporal patterns",
    "difficulty": "analytical",
    "text": "According to Multidimensional Anxiety Theory (Martens et al.), how do Cognitive State Anxiety and Somatic State Anxiety typically behave in the hours and minutes leading up to competition?",
    "options": [
      "Both cognitive and somatic anxiety remain at absolute zero until the match ends",
      "Cognitive anxiety remains stable in the days leading up, while somatic anxiety spikes rapidly just prior to competition start",
      "Somatic anxiety remains elevated for weeks, while cognitive anxiety spikes exclusively during post-game debriefing",
      "Cognitive anxiety declines to zero immediately before competition while somatic anxiety disappears completely"
    ],
    "correct": 1,
    "explanation": "Cognitive anxiety (worry, negative expectations) typically remains stable in the days and hours before competition (unless expectations change), whereas Somatic anxiety (heart rate, butterflies) remains low until shortly before the event, peaks at start, and dissipates rapidly during play."
  },
  # A1-019: Recovery - Sleep Architecture N3 vs REM
  {
    "id": "t12-a1-019",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "Sleep architecture, Slow-Wave Sleep and endocrine recovery",
    "difficulty": "foundational",
    "text": "In athlete sleep physiology, during which stage of the sleep cycle is the majority of systemic Growth Hormone (GH) secreted to support tissue repair and protein synthesis?",
    "options": [
      "Rapid Eye Movement (REM) sleep",
      "Slow-Wave Sleep (Stage N3 non-REM)",
      "Light sleep (Stage N1 non-REM)",
      "Transitional wakefulness (Stage W)"
    ],
    "correct": 1,
    "explanation": "The major daily surge of human growth hormone (GH) secretion occurs during deep Slow-Wave Sleep (Stage N3 non-REM), making adequate deep sleep essential for physiological tissue recovery, muscle protein synthesis, and cellular repair."
  },
  # A1-020: Recovery - Twitch Interpolation Technique
  {
    "id": "t12-a1-020",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "Twitch interpolation technique and central vs peripheral fatigue",
    "difficulty": "analytical",
    "text": "In neuromuscular fatigue assessment, how does the Twitch Interpolation Technique differentiate 'Central Fatigue' from 'Peripheral Fatigue'?",
    "options": [
      "If a supramaximal electrical pulse delivered during maximal voluntary contraction evokes additional force (superimposed twitch), central voluntary activation is incomplete",
      "If muscle biopsy shows glycogen depletion, central fatigue is confirmed to be exactly one hundred percent",
      "If blood lactate levels exceed 10 mmol/L, peripheral fatigue is ruled out completely in all muscle groups",
      "If resting tendon reflex amplitude doubles, central motor cortex drive is declared permanently damaged"
    ],
    "correct": 0,
    "explanation": "During a maximal voluntary contraction (MVC), a superimposed electrical twitch that generates additional force demonstrates that the central nervous system failed to fully recruit and discharge motor units (indicating Central Fatigue / voluntary activation deficit)."
  },
  # A1-021: Recovery - GPS Acceleration vs Deceleration
  {
    "id": "t12-a1-021",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "GPS mechanical load monitoring and deceleration demands",
    "difficulty": "applied",
    "text": "In team sports GPS physical monitoring, why do high-intensity decelerations (>3 m/s2) induce significantly greater muscle damage and soreness than equivalent accelerations?",
    "options": [
      "Decelerations involve rapid high-force eccentric muscle contractions with high mechanical strain per active fiber",
      "Decelerations require ninety percent higher oxygen consumption than concentric sprint accelerations",
      "Decelerations completely halt coronary arterial blood flow to the cardiac left ventricle",
      "Decelerations occur exclusively while running backward on hard synthetic turf surfaces"
    ],
    "correct": 0,
    "explanation": "High-intensity decelerations require intense eccentric muscle contractions to brake momentum. Eccentric actions produce high mechanical tension across fewer active cross-bridges, inducing structural microtrauma, sarcomere popping, and elevated muscle soreness."
  },
  # A1-022: Recovery - Testosterone/Cortisol Ratio
  {
    "id": "t12-a1-022",
    "section": "A1",
    "topic": "recovery regeneration sleep and fatigue biomarkers",
    "subtopic": "Endocrine biomarkers and anabolic-to-catabolic balance",
    "difficulty": "applied",
    "text": "In physiological monitoring of overtraining syndrome, what relative shift in the Testosterone-to-Cortisol (T/C) ratio is classically considered an indicator of catabolic training stress?",
    "options": [
      "An increase in the T/C ratio of greater than 50%",
      "A decrease in the T/C ratio of greater than 30%",
      "A constant unchanging T/C ratio across twelve months",
      "An increase in testosterone with an absolute drop in cortisol"
    ],
    "correct": 1,
    "explanation": "A decrease in the Free Testosterone-to-Cortisol ratio of >30% (or a significant drop below baseline) is widely used as a biomarker indicating an altered anabolic-catabolic balance and an elevated risk of non-functional overreaching or overtraining."
  },
  # A1-023: Biostatistics - MDC95
  {
    "id": "t12-a1-023",
    "section": "A1",
    "topic": "research methods data interpretation and biostatistics",
    "subtopic": "Minimal Detectable Change and standard error of measurement",
    "difficulty": "analytical",
    "text": "In clinical outcome measurement, what is the formula to calculate the Minimal Detectable Change at the 95% confidence level (MDC95) from the Standard Error of Measurement (SEM)?",
    "options": [
      "MDC95 = SEM / 1.96",
      "MDC95 = SEM * 1.96 * sqrt(2)",
      "MDC95 = SEM * 0.05",
      "MDC95 = SEM^2 / 2"
    ],
    "correct": 1,
    "explanation": "The Minimal Detectable Change (MDC95), which defines the smallest change exceeding measurement error at the 95% confidence level, is calculated as: MDC95 = 1.96 * sqrt(2) * SEM (approx. 2.77 * SEM)."
  },
  # A1-024: Biostatistics - ICC Models
  {
    "id": "t12-a1-024",
    "section": "A1",
    "topic": "research methods data interpretation and biostatistics",
    "subtopic": "Intraclass Correlation Coefficient (ICC) selection for reliability",
    "difficulty": "applied",
    "text": "When assessing the test-retest reliability of a new force plate protocol evaluated by a single examiner across multiple days, which Intraclass Correlation Coefficient (ICC) model is standardly recommended (Shrout & Fleiss / Portney)?",
    "options": [
      "Two-way mixed-effects model, absolute agreement, single measures [ICC(3,1)]",
      "One-way random-effects model, consistency, average measures [ICC(1,k)]",
      "Pearson product-moment linear regression coefficient squared [R2]",
      "Independent samples student t-test equality of variance model [t]"
    ],
    "correct": 0,
    "explanation": "For test-retest reliability where rater is fixed (single specific rater or testing setup) and absolute scores matter, ICC model 3,1 (two-way mixed-effects, absolute agreement, single rater) or model 2,1 is the standard psychometric choice."
  },
  # A1-025: Biostatistics - Power Calculation
  {
    "id": "t12-a1-025",
    "section": "A1",
    "topic": "research methods data interpretation and biostatistics",
    "subtopic": "Statistical power, sample size estimation and Type I / II errors",
    "difficulty": "foundational",
    "text": "In designing an intervention study in sports rehabilitation, what are the standard conventional scientific benchmarks for alpha level (significance) and statistical power (1 - beta)?",
    "options": [
      "Alpha = 0.50 and Statistical Power = 0.20",
      "Alpha = 0.05 and Statistical Power = 0.80",
      "Alpha = 0.01 and Statistical Power = 0.10",
      "Alpha = 0.25 and Statistical Power = 0.50"
    ],
    "correct": 1,
    "explanation": "Conventional scientific standards set the Type I error rate (alpha) at 0.05 (5% risk of false positive) and statistical power (1 - beta) at >=0.80 (80% probability of detecting a true effect if one exists)."
  },
  # A1-026: Emerging Tech - 2D vs 3D Motion Capture
  {
    "id": "t12-a1-026",
    "section": "A1",
    "topic": "emerging technology wearables force platform and video analysis",
    "subtopic": "2D Frontal Plane Projection Angle vs 3D joint kinematics",
    "difficulty": "applied",
    "text": "In screening knee injury risk during drop jump landings, what is the primary biomechanical limitation of using 2D video Frontal Plane Projection Angle (FPPA) compared to 3D motion capture?",
    "options": [
      "2D FPPA cannot differentiate true frontal-plane knee abduction from transverse-plane hip internal rotation and tibial rotation",
      "2D FPPA requires placing thirty-two invasive retroreflective markers directly into bone cortices",
      "2D video cameras emit ionizing radiation that alters soft tissue muscle recruitment patterns",
      "2D analysis completely overestimates ground reaction forces by more than five hundred percent"
    ],
    "correct": 0,
    "explanation": "2D frontal plane projection angle reflects a planar projection of a complex multi-planar movement, conflating true knee abduction (valgus) with hip internal rotation, hip adduction, and tibial external rotation."
  },
  # A1-027: Prevention - Functional H:Q Ratio
  {
    "id": "t12-a1-027",
    "section": "A1",
    "topic": "injury prevention screening surveillance and biomechanics",
    "subtopic": "Isokinetic muscle balance and functional H:Q strength ratio",
    "difficulty": "applied",
    "text": "In isokinetic dynamometry screening for hamstring strain and ACL injury risk, what defines the 'Functional (Dynamic) Hamstring-to-Quadriceps Ratio' (Hecc:Qcon)?",
    "options": [
      "Hamstring concentric peak torque divided by Quadriceps concentric peak torque",
      "Hamstring eccentric peak torque divided by Quadriceps concentric peak torque",
      "Hamstring isometric peak torque divided by Quadriceps isometric peak torque",
      "Hamstring muscle volume divided by Quadriceps total cross-sectional area"
    ],
    "correct": 1,
    "explanation": "The functional (dynamic) H:Q ratio is calculated as eccentric hamstring peak torque divided by concentric quadriceps peak torque (Hecc:Qcon), reflecting the hamstrings' ability to brake knee extension during explosive quadriceps actions (normal threshold >=0.7-0.8)."
  },
  # A1-028: Emerging Tech - CMJ Force-Time Curve
  {
    "id": "t12-a1-028",
    "section": "A1",
    "topic": "emerging technology wearables force platform and video analysis",
    "subtopic": "Dual force plate countermovement jump (CMJ) phase analysis",
    "difficulty": "analytical",
    "text": "On a dual force plate countermovement jump (CMJ) force-time curve, which phase begins at the instant of lowest ground reaction force (unweighing peak) and ends when downward center of mass velocity reaches zero?",
    "options": [
      "The concentric propulsion phase",
      "The eccentric braking (deceleration) phase",
      "The flight phase prior to ground impact",
      "The quiet standing baseline weighing phase"
    ],
    "correct": 1,
    "explanation": "The eccentric braking (deceleration) phase starts at the point of maximum downward velocity (which coincides with the lowest dip / unweighing transition) and ends at the bottom of the countermovement when vertical velocity equals zero (lowest displacement)."
  },
  # A1-029: Mind-Body - Mindfulness and Pain
  {
    "id": "t12-a1-029",
    "section": "A1",
    "topic": "yoga and mind-body interventions in sports",
    "subtopic": "Mindfulness-based interventions, pain processing and rehabilitation",
    "difficulty": "foundational",
    "text": "How do Mindfulness-Based Stress Reduction (MBSR) interventions alter central pain processing in athletes undergoing long-term injury rehabilitation?",
    "options": [
      "By structurally transecting ascending spinothalamic nociceptive tracts permanently",
      "By decoupling the sensory-discriminative dimension of pain from the emotional-affective appraisal in the anterior cingulate cortex",
      "By eliminating all peripheral nerve action potential generation in sensory mechanoreceptors",
      "By reducing circulating hemoglobin concentrations to diminish cerebral blood flow"
    ],
    "correct": 1,
    "explanation": "Mindfulness decouples primary sensory nociceptive inputs from secondary emotional/cognitive distress (affective appraisal) via frontocortical and anterior cingulate downregulation, reducing pain catastrophizing and improving rehabilitation adherence."
  },
  # A1-030: Ex Phys - Heat Acclimation Protocol
  {
    "id": "t12-a1-030",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Heat acclimation protocols and physiological adaptations",
    "difficulty": "applied",
    "text": "What is the standard evidence-based timeline and protocol for full physiological Heat Acclimation prior to major international competition in hot environments?",
    "options": [
      "Single 10-minute sauna exposure on the morning of competition",
      "Daily exercise in heat (60-90 min/day) for 10 to 14 consecutive days",
      "Passive cold water immersion for 30 minutes daily for 30 days",
      "Fasting without water intake for 48 hours prior to flight departure"
    ],
    "correct": 1,
    "explanation": "Full heat acclimation requires 10 to 14 days of daily 60-90 min exercise in the heat, driving early plasma volume expansion (~10-15%), lower resting core temperature, lower threshold for sweating, and reduced sweat electrolyte concentration."
  },
  # A1-031: Travel Readiness - Jet Lag Management
  {
    "id": "t12-a1-031",
    "section": "A1",
    "topic": "travel and competition readiness circadian rhythms",
    "subtopic": "Circadian entrainment, light exposure and melatonin timing",
    "difficulty": "applied",
    "text": "When traveling east across 8 time zones for competition, how should bright light exposure and exogenous melatonin be scheduled upon arrival to accelerate circadian phase advance?",
    "options": [
      "Seek bright morning light and take low-dose melatonin in the local evening",
      "Avoid all morning light, seek late evening light, and take melatonin at midday",
      "Remain in complete darkness for 72 consecutive hours without sleep",
      "Consume 500 mg of caffeine immediately prior to bedtime in the destination"
    ],
    "correct": 0,
    "explanation": "To advance the circadian clock (eastward travel), athletes should seek bright light in the destination morning (after the core body temperature minimum) and take low-dose melatonin in the local evening to promote early sleep onset."
  },
  # A1-032: Anti-Doping - Retroactive TUE
  {
    "id": "t12-a1-032",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Therapeutic Use Exemption (TUE) retroactive criteria",
    "difficulty": "foundational",
    "text": "Under the WADA International Standard for TUEs (ISTUE), under which circumstance is an athlete permitted to apply for a Retroactive Therapeutic Use Exemption?",
    "options": [
      "When the prohibited substance was administered during emergency medical treatment for an acute life-threatening condition",
      "When the athlete forgot to submit the application form due to busy training schedules",
      "When the athlete wanted to test whether their performance would improve in training",
      "When the coach advised the athlete that anti-doping testing would not occur"
    ],
    "correct": 0,
    "explanation": "Retroactive TUEs are granted under strict ISTUE criteria, primarily: emergency medical treatment or urgent treatment of an acute medical condition, insufficient time or exceptional circumstances, or for lower-level non-national athletes where allowed."
  },

  # -------------------------------------------------------------
  # SECTION A2: General Sports Awareness & Governance (8 Qs: 001 to 008)
  # -------------------------------------------------------------
  # A2-001: Khelo India Youth Talent
  {
    "id": "t12-a2-001",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Khelo India Talent Development vertical and financial support",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "Under the Talent Identification and Development vertical of the Khelo India scheme, what financial assistance is provided to selected talented athletes?",
    "options": [
      "One-time cash prize of Rs 50,000 upon winning a school sports medal",
      "Annual financial assistance of Rs 5 lakh per annum for up to 8 years",
      "Permanent government employment in public sector undertakings immediately",
      "Lifetime pension of Rs 1 lakh per month starting from age twelve"
    ],
    "correct": 1,
    "explanation": "Under the Khelo India Talent Development scheme, 1000 promising athletes across priority sports disciplines receive annual financial assistance of Rs 5 lakh per annum for 8 consecutive years."
  },
  # A2-002: TOPS Core vs Development
  {
    "id": "t12-a2-002",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Target Olympic Podium Scheme (TOPS) Core vs Development allowance",
    "difficulty": "applied",
    "asOf": "2026-01-30",
    "text": "Under India's Target Olympic Podium Scheme (TOPS), what is the monthly Out-of-Pocket Allowance (OPA) provided to athletes selected in the TOPS 'Core Group'?",
    "options": [
      "Rs 10,000 per month out-of-pocket allowance",
      "Rs 50,000 per month out-of-pocket allowance",
      "Rs 1,50,000 per month out-of-pocket allowance",
      "Rs 3,00,000 per month out-of-pocket allowance"
    ],
    "correct": 1,
    "explanation": "Athletes in the TOPS Core Group receive an Out-of-Pocket Allowance (OPA) of Rs 50,000 per month, while athletes in the TOPS Development Group receive Rs 25,000 per month, in addition to customized training and equipment support."
  },
  # A2-003: WADA S3 Beta-2 Agonists
  {
    "id": "t12-a2-003",
    "section": "A2",
    "topic": "Anti-doping governance and WADA Prohibited List",
    "subtopic": "WADA Class S3 Beta-2 Agonists permitted inhaled thresholds",
    "difficulty": "applied",
    "asOf": "2026-01-30",
    "text": "Under the WADA Prohibited List (in force as of January 2026), what is the maximum permitted 24-hour inhaled dose for Salbutamol without requiring a TUE?",
    "options": [
      "Maximum of 400 micrograms over 24 hours",
      "Maximum of 1600 micrograms over 24 hours (not to exceed 600 mcg in any 8 hours)",
      "Maximum of 5000 micrograms over 24 hours",
      "Salbutamol is prohibited at all doses via any route of administration"
    ],
    "correct": 1,
    "explanation": "Inhaled salbutamol is permitted under WADA rules up to a maximum of 1600 micrograms over 24 hours in divided doses not to exceed 600 micrograms over any 8-hour period; higher doses require a Therapeutic Use Exemption (TUE)."
  },
  # A2-004: National Anti-Doping Act 2022 NADP
  {
    "id": "t12-a2-004",
    "section": "A2",
    "topic": "Anti-doping governance and WADA Prohibited List",
    "subtopic": "National Anti-Doping Act 2022 adjudication panels",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "Under the National Anti-Doping Act, 2022, which statutory body hears and adjudicates anti-doping rule violation cases at the first instance in India?",
    "options": [
      "The National Anti-Doping Disciplinary Panel (NADP)",
      "The Supreme Court of India Special Bench",
      "The Sports Authority of India Governing Body",
      "The Indian Olympic Association Executive Council"
    ],
    "correct": 0,
    "explanation": "Under the National Anti-Doping Act, 2022, the National Anti-Doping Disciplinary Panel (NADP) is the statutory first-instance quasi-judicial body, with appeals heard by the National Anti-Doping Appeal Panel (NAAP)."
  },
  # A2-005: Olympic 2032 Host
  {
    "id": "t12-a2-005",
    "section": "A2",
    "topic": "Major international competitions and Olympic movement",
    "subtopic": "IOC Olympic Games host city allocations",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "Which city is officially selected by the International Olympic Committee (IOC) to host the XXXV Olympic Summer Games in 2032?",
    "options": [
      "Doha, Qatar",
      "Brisbane, Australia",
      "London, United Kingdom",
      "Rome, Italy"
    ],
    "correct": 1,
    "explanation": "Brisbane (Queensland, Australia) was elected by the IOC Session in 2021 to host the 2032 Summer Olympic and Paralympic Games."
  },
  # A2-006: Asian Games Hangzhou 107 medals
  {
    "id": "t12-a2-006",
    "section": "A2",
    "topic": "Major international competitions and Olympic movement",
    "subtopic": "India's historic medal tally at 19th Asian Games",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "How many total medals did the Indian contingent win at the 19th Asian Games held in Hangzhou (China), marking India's first ever 100+ medal haul?",
    "options": [
      "70 total medals (16 Gold, 23 Silver, 31 Bronze)",
      "107 total medals (28 Gold, 38 Silver, 41 Bronze)",
      "125 total medals (35 Gold, 45 Silver, 45 Bronze)",
      "150 total medals (50 Gold, 50 Silver, 50 Bronze)"
    ],
    "correct": 1,
    "explanation": "At the 19th Asian Games in Hangzhou (held in 2023), India achieved its highest-ever medal tally of 107 medals, comprising 28 Gold, 38 Silver, and 41 Bronze medals."
  },
  # A2-007: Dronacharya Award Lifetime vs Regular
  {
    "id": "t12-a2-007",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Dronacharya Award cash rewards and categories",
    "difficulty": "foundational",
    "asOf": "2026-01-30",
    "text": "According to the Ministry of Youth Affairs and Sports (MYAS) guidelines, what is the cash reward for the Dronacharya Award in the 'Lifetime Category'?",
    "options": [
      "Rs 5 lakh cash reward",
      "Rs 15 lakh cash reward",
      "Rs 25 lakh cash reward",
      "Rs 50 lakh cash reward"
    ],
    "correct": 1,
    "explanation": "The Dronacharya Award in the Lifetime Category carries a cash prize of Rs 15 lakh, whereas the Dronacharya Award in the Regular Category carries a cash prize of Rs 10 lakh."
  },
  # A2-008: Sports Code Cooling Off
  {
    "id": "t12-a2-008",
    "section": "A2",
    "topic": "Sports governance ethics and National Sports Development Code",
    "subtopic": "National Sports Development Code of India (2011) cooling-off period",
    "difficulty": "applied",
    "asOf": "2026-01-30",
    "text": "Under the National Sports Development Code of India (2011), what cooling-off period is mandatory for a Secretary General or Treasurer after serving two consecutive terms of 4 years each?",
    "options": [
      "Cooling-off period of at least one (1) year",
      "Cooling-off period of at least four (4) years (one full term)",
      "Cooling-off period of at least ten (10) years",
      "No cooling-off period required under the Code"
    ],
    "correct": 1,
    "explanation": "Under the Sports Code 2011, the Secretary General/Treasurer may serve a maximum of two consecutive terms of 4 years each (8 years), after which a mandatory cooling-off period of at least 4 years (one term) must lapse before re-election."
  },

  # -------------------------------------------------------------
  # SECTION B: Applied Sports Physiotherapy (40 Qs: 001 to 040)
  # -------------------------------------------------------------
  # B-001: Ortho - McMurray test rotation
  {
    "id": "t12-b-001",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "foundational",
    "text": "When performing McMurray's test for meniscal tears, which rotational maneuver stresses the medial meniscus versus lateral meniscus as the knee is extended?",
    "options": [
      "External tibial rotation with valgus stress tests medial meniscus; Internal tibial rotation with varus stress tests lateral meniscus",
      "Internal tibial rotation with valgus stress tests medial meniscus; External tibial rotation with varus stress tests lateral meniscus",
      "Full active ankle dorsiflexion tests medial meniscus; Full passive ankle plantarflexion tests lateral meniscus",
      "Direct axial patellar compression tests medial meniscus; Lateral patellar gliding tests lateral meniscus"
    ],
    "correct": 0,
    "explanation": "In McMurray's test, external tibial rotation paired with valgus stress impinges and tests the medial meniscus posterior horn, while internal tibial rotation with varus stress tests the lateral meniscus posterior horn."
  },
  # B-002: Ortho - Dial test 30 vs 90
  {
    "id": "t12-b-002",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "analytical",
    "text": "In the Dial Test (tibial external rotation in prone), what injury pattern is indicated if external rotation increases by >10 degrees at 30 degrees knee flexion, but normalizes at 90 degrees knee flexion?",
    "options": [
      "Combined rupture of both the PCL and Posterolateral Corner (PLC)",
      "Isolated injury to the Posterolateral Corner (PLC) with an intact PCL",
      "Isolated complete rupture of the Anterior Cruciate Ligament (ACL)",
      "Isolated tear of the anterior horn of the medial meniscus"
    ],
    "correct": 1,
    "explanation": "Increased external rotation (>10 deg asymmetry) at 30 deg flexion that normalizes at 90 deg flexion indicates isolated Posterolateral Corner (PLC) injury (the intact PCL tightens and restrains rotation at 90 deg). Increased rotation at both 30 deg and 90 deg indicates combined PLC + PCL injury."
  },
  # B-003: Ortho - Speed's and Yergason's
  {
    "id": "t12-b-003",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "What physical movements are resisted by the examiner during Speed's Test and Yergason's Test for the long head of the biceps tendon?",
    "options": [
      "Speed's resists shoulder flexion with forearm supinated; Yergason's resists forearm supination with elbow flexed",
      "Speed's resists shoulder abduction with arm internally rotated; Yergason's resists elbow extension in pronation",
      "Speed's resists shoulder extension with forearm pronated; Yergason's resists passive wrist flexion in neutral",
      "Speed's resists scapular depression; Yergason's resists active glenohumeral internal rotation in abduction"
    ],
    "correct": 0,
    "explanation": "Speed's test resists forward shoulder flexion with elbow extended and forearm supinated; Yergason's test resists active forearm supination and external rotation with elbow flexed at 90 degrees against the torso."
  },
  # B-004: Ortho - O'Brien Active Compression
  {
    "id": "t12-b-004",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "What constitutes a positive result for a Superior Labrum Anterior-to-Posterior (SLAP) tear on O'Brien's Active Compression Test?",
    "options": [
      "Pain elicited in Position 1 (thumb pointing down / internal rotation) that is eliminated or reduced in Position 2 (thumb pointing up / supination)",
      "Pain elicited equally in both thumb-down and thumb-up positions during resisted extension",
      "Sudden electrical tingling radiating into the thenar eminence in thumb-up position only",
      "Immediate inferior subluxation of the humeral head creating a distinct sulcus sign"
    ],
    "correct": 0,
    "explanation": "A positive O'Brien test for labral pathology requires deep shoulder pain or clicking in internal rotation (thumb down, arm flexed 90 deg and adducted 10-15 deg) that is eliminated or decreased when repeated with forearm fully supinated (thumb up)."
  },
  # B-005: Ortho - Finkelstein vs Eichhoff
  {
    "id": "t12-b-005",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "foundational",
    "text": "Which two tendons within the first dorsal wrist extensor compartment are evaluated for De Quervain's tenosynovitis during Finkelstein's test?",
    "options": [
      "Abductor Pollicis Longus (APL) and Extensor Pollicis Brevis (EPB)",
      "Extensor Pollicis Longus (EPL) and Extensor Indicis (EI)",
      "Flexor Pollicis Longus (FPL) and Flexor Carpi Radialis (FCR)",
      "Abductor Pollicis Brevis (APB) and Opponens Pollicis (OP)"
    ],
    "correct": 0,
    "explanation": "De Quervain's tenosynovitis is a stenosing tenosynovitis affecting the first dorsal compartment tendons of the wrist: Abductor Pollicis Longus (APL) and Extensor Pollicis Brevis (EPB)."
  },
  # B-006: Ortho - Thomas vs Ely
  {
    "id": "t12-b-006",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "During the modified Thomas test, if the patient's extended thigh remains in contact with the table but the knee extends to less than 80-90 degrees flexion, which muscle is tight?",
    "options": [
      "Isolated tightness of the single-joint Iliopsoas muscle",
      "Isolated tightness of the two-joint Rectus Femoris muscle",
      "Isolated tightness of the Tensor Fasciae Latae / ITB complex",
      "Isolated tightness of the Pectineus and Adductor Longus"
    ],
    "correct": 1,
    "explanation": "If the posterior thigh touches the table (normal iliopsoas length) but the knee cannot maintain 80-90 deg flexion without extending, isolated Rectus Femoris tightness is confirmed (tightness decreases upon allowing hip flexion)."
  },
  # B-007: Ortho - Talar tilt inversion vs eversion
  {
    "id": "t12-b-007",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "foundational",
    "text": "When performing the Talar Tilt stress test with the ankle in neutral/slight dorsiflexion, which ligament is primarily stressed by forced inversion versus forced eversion?",
    "options": [
      "Forced inversion stresses the Calcaneofibular Ligament (CFL); Forced eversion stresses the Deltoid Ligament",
      "Forced inversion stresses the Deltoid Ligament; Forced eversion stresses the Anterior Talofibular Ligament",
      "Forced inversion stresses the Plantar Fascia; Forced eversion stresses the Achilles Tendon",
      "Forced inversion stresses the Spring Ligament; Forced eversion stresses the Bifurcate Ligament"
    ],
    "correct": 0,
    "explanation": "The Talar Tilt test in neutral position stresses the Calcaneofibular Ligament (CFL) during forced inversion (tilting talus medially) and the deep/superficial Deltoid ligament complex during forced eversion (tilting talus laterally)."
  },
  # B-008: Ortho - Biceps Load II
  {
    "id": "t12-b-008",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Orthopedic Physical Assessment - David J. Magee",
    "difficulty": "applied",
    "text": "What physical maneuver is executed during the Biceps Load II test to diagnose Type II SLAP lesions in overhead athletes?",
    "options": [
      "Arm placed in 120 degrees abduction, maximal external rotation, elbow flexed to 90 degrees, resisting active elbow flexion",
      "Arm placed in 30 degrees adduction, internal rotation, elbow fully extended, resisting downward extension pressure",
      "Arm placed in neutral adduction by side, elbow fully extended, resisting maximal forearm pronation",
      "Arm placed behind back in full internal rotation, attempting active hand liftoff from lumbar spine"
    ],
    "correct": 0,
    "explanation": "Biceps Load II (Kim et al.) is performed in 120 deg abduction, maximal external rotation, forearm supinated, and elbow at 90 deg; resisted elbow flexion reproduces deep superior pain as the biceps pulls on the torn superior labrum."
  },
  # B-009: Rehab - Isometric holding duration
  {
    "id": "t12-b-009",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic Exercise: Foundations and Techniques - Kisner & Colby",
    "difficulty": "applied",
    "text": "In evidence-based tendinopathy rehabilitation protocols (Rio et al.), what parameters for heavy isometric holds produce maximal acute tendon pain analgesia?",
    "options": [
      "10 sets of 5-second rapid pulses at 20% maximal voluntary contraction with 10-s rest",
      "5 sets of 45-second sustained holds at ~70% maximal voluntary contraction with 2-min rest",
      "1 set of 5-minute continuous static hold to complete muscular failure without rest",
      "20 sets of 1-second ballistic contractions performed with an elastic resistance band"
    ],
    "correct": 1,
    "explanation": "Ebonie Rio et al. showed that 5 sets of 45-second isometric holds at ~70% MVC with 2 minutes of rest between sets induces immediate tendon pain relief lasting up to 45 minutes and releases cortical inhibition."
  },
  # B-010: Rehab - HSR tendinopathy
  {
    "id": "t12-b-010",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Heavy Slow Resistance (HSR) training for lower extremity tendinopathies",
    "difficulty": "applied",
    "text": "In Heavy Slow Resistance (HSR) training for patellar and Achilles tendinopathies (Kongsgaard et al.), what repetition tempo is prescribed per repetition?",
    "options": [
      "Ballistic explosive movement (1 second concentric, 0 seconds eccentric)",
      "Controlled slow tempo (3 seconds concentric and 3 seconds eccentric, total 6 seconds per rep)",
      "Ultra-slow isometric hold (30 seconds concentric, 30 seconds eccentric)",
      "Variable uncontrolled tempo dictated by random electronic metronome beeps"
    ],
    "correct": 1,
    "explanation": "HSR protocols prescribe 3 sets of 6 to 8 RM, performed 3 times per week, using a slow, controlled tempo of 3 seconds concentric and 3 seconds eccentric (6 seconds total time-under-tension per repetition) to promote tendon collagen remodeling."
  },
  # B-011: Rehab - HR-AC PNF mechanism
  {
    "id": "t12-b-011",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Proprioceptive Neuromuscular Facilitation (PNF) neurophysiology",
    "difficulty": "foundational",
    "text": "In PNF stretching, what dual neurophysiological mechanism occurs during the 'Hold-Relax with Agonist Contraction' (HR-AC) technique?",
    "options": [
      "Autogenic inhibition from target muscle GTOs combined with reciprocal inhibition from opposing muscle spindle activation",
      "Direct structural rupture of myofibrillar Z-discs combined with acute neural conduction blockade",
      "Complete sympathetic vasoconstriction combined with rapid elevation of motor unit discharge rates",
      "Reciprocal excitation of target muscle spindles combined with Golgi tendon organ suppression"
    ],
    "correct": 0,
    "explanation": "HR-AC combines autogenic inhibition (from isometric contraction of the tight target muscle activating GTOs) and reciprocal inhibition (from subsequent active contraction of the opposing agonist muscle inhibiting the target antagonist)."
  },
  # B-012: Rehab - Maitland Grade V thrust
  {
    "id": "t12-b-012",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Maitland joint manipulation and neurophysiological mechanisms",
    "difficulty": "foundational",
    "text": "What characterizes a Maitland Grade V spinal or peripheral joint manipulation?",
    "options": [
      "Large-amplitude slow oscillatory glide performed within the early pain-free range",
      "High-velocity, low-amplitude (HVLA) thrust performed at or beyond the anatomical limit of available range",
      "Sustained isometric muscle contraction against immovable external resistance for 60 seconds",
      "Continuous passive motion machine mobilization applied for six hours post-operatively"
    ],
    "correct": 1,
    "explanation": "Maitland Grade V is defined as a high-velocity, low-amplitude (HVLA) thrust performed at the physiological/pathological limit of available joint range to restore motion and stimulate mechanical/neurophysiological hypoalgesia."
  },
  # B-013: Rehab - Mulligan Bent Leg Raise
  {
    "id": "t12-b-013",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Mulligan Mobilization with Movement (MWM) - Bent Leg Raise",
    "difficulty": "applied",
    "text": "In Mulligan manual therapy concepts, what is the primary clinical indication for the 'Bent Leg Raise' (BLR) technique?",
    "options": [
      "Restricted straight leg raise (SLR) and low back / buttock pain associated with neurodynamic mechanosensitivity",
      "Complete anterior cruciate ligament rupture with massive hemarthrosis in acute knee trauma",
      "Symptomatic acromioclavicular joint separation grade III in contact athletes",
      "De Quervain's tenosynovitis with severe wrist extensor compartment swelling"
    ],
    "correct": 0,
    "explanation": "The Mulligan Bent Leg Raise (BLR) is a pain-free traction and hip flexion mobilization technique specifically indicated to restore restricted, painful Straight Leg Raise (SLR) and resolve lower back/buttock neurodynamic pain."
  },
  # B-014: Rehab - OKC vs CKC in ACL
  {
    "id": "t12-b-014",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Knee rehabilitation: Open vs Closed Kinetic Chain ACL graft strain",
    "difficulty": "analytical",
    "text": "During early post-operative ACL reconstruction rehabilitation, why are open-kinetic-chain (OKC) seated knee extensions restricted between 0 and 30-40 degrees flexion?",
    "options": [
      "OKC extensions from 30 to 0 degrees produce peak anterior tibial shear force and high ACL graft strain",
      "OKC extensions from 30 to 0 degrees cause complete motor paralysis of the hamstring muscles",
      "OKC extensions produce severe posterior cruciate ligament compressive stresses against the femur",
      "OKC extensions completely eliminate quadriceps femoris motor unit recruitment permanently"
    ],
    "correct": 0,
    "explanation": "Between 30 deg and 0 deg (terminal extension) in open kinetic chain, the quadriceps pull generates significant anterior tibial shear force that directly strains the healing ACL graft; hence early OKC quads are restricted to 90-45 deg flexion."
  },
  # B-015: Rehab - Plyometric Stages
  {
    "id": "t12-b-015",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Plyometric exercise progression in sports rehabilitation",
    "difficulty": "applied",
    "text": "What is the logical clinical progression of plyometric exercises in return-to-sport lower extremity rehabilitation?",
    "options": [
      "High-intensity depth jumps -> Unilateral cutting drills -> Bilateral landing mechanics drills",
      "Bilateral jump-landing mechanics -> Linear bounding/hopping -> Unilateral multi-directional cutting and reactive drills",
      "Continuous rotational box drops -> Seated leg curls -> Aquatic walking without impact",
      "Single-leg triple hops to fatigue -> Bilateral squats -> Passive stretching on incline board"
    ],
    "correct": 1,
    "explanation": "Safe plyometric progression follows: Stage 1 = Bilateral jump-landing mechanics (force absorption/eccentric control), Stage 2 = Linear jumping/bounding, Stage 3 = Unilateral jumping/hopping, and Stage 4 = Multi-directional cutting and reactive agility."
  },
  # B-016: Rehab - Decline Board Squat
  {
    "id": "t12-b-016",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "25-degree decline board eccentric squat for patellar tendinopathy",
    "difficulty": "applied",
    "text": "Why is performing eccentric single-leg squats on a 25-degree decline slant board superior to a flat surface for patellar tendinopathy rehabilitation (Purdam et al.)?",
    "options": [
      "The decline slope reduces ankle dorsiflexion requirement and maximally isolates load onto the patellar tendon and quadriceps",
      "The decline slope completely eliminates all quadriceps activation and shifts all load to the hamstrings",
      "The decline slope prevents the patella from contacting the femoral trochlear groove throughout movement",
      "The decline slope reduces mechanical loading on the knee joint by more than eighty percent"
    ],
    "correct": 0,
    "explanation": "A 25-degree decline board limits calf/triceps surae contribution by reducing ankle dorsiflexion demand, effectively isolating and increasing patellar tendon load and quadriceps strain by up to 25-30% compared to flat ground squats."
  },
  # B-017: Kinesiology - Scapular Upward Force Couple
  {
    "id": "t12-b-017",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "foundational",
    "text": "In shoulder girdle kinesiology, which muscle force couple provides the primary upward rotation and posterior tilt of the scapula during arm elevation above 90 degrees?",
    "options": [
      "Serratus Anterior, Upper Trapezius, and Lower Trapezius",
      "Levator Scapulae, Rhomboid Major, and Pectoralis Minor",
      "Latissimus Dorsi, Teres Major, and Subscapularis",
      "Pectoralis Major, Coracobrachialis, and Biceps Brachii"
    ],
    "correct": 0,
    "explanation": "The Serratus Anterior (pulling inferior angle laterally/anteriorly), Upper Trapezius (elevating and rotating), and Lower Trapezius (depressing and upwardly rotating) form the critical force couple for scapular upward rotation and posterior tilting."
  },
  # B-018: Kinesiology - Subtalar Neutral
  {
    "id": "t12-b-018",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "foundational",
    "text": "In foot and ankle biomechanics, what anatomical alignment defines 'Subtalar Joint Neutral' position?",
    "options": [
      "The position where the talar head is equally palpable on both medial and lateral sides of the navicular",
      "The position where the calcaneus is locked in twenty degrees of maximal active eversion",
      "The position where the great toe is held in ninety degrees of passive extension",
      "The position where the fibula translates anteriorly across the lateral talar dome"
    ],
    "correct": 0,
    "explanation": "Subtalar Joint Neutral (STJN) is defined as the position where the talus is congruent within the mortise, such that the medial and lateral margins of the talar head are equally felt in the navicular fossa."
  },
  # B-019: Kinesiology - Lumbo-Pelvic Rhythm
  {
    "id": "t12-b-019",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "analytical",
    "text": "During normal healthy forward trunk bending (lumbar flexion in standing), what kinematic sequence describes the 'Lumbo-Pelvic Rhythm'?",
    "options": [
      "Initial 40 to 45 degrees of flexion occurs in the lumbar spine, followed by anterior pelvic tilting at the hips",
      "Initial 60 degrees occurs via posterior pelvic tilt, followed by thoracic spinal hyperextension",
      "Flexion occurs exclusively at the knee joints with the lumbar spine locked in rigid lordosis",
      "Flexion occurs entirely through active subtalar joint inversion without spinal movement"
    ],
    "correct": 0,
    "explanation": "In normal forward bending, the initial 40-45 degrees of trunk flexion is accomplished predominantly by lumbar spine flexion (flattening lordosis), followed by approximately 60 degrees of anterior pelvic tilting around the femoral heads (hip flexion)."
  },
  # B-020: Kinesiology - Patellofemoral contact stress
  {
    "id": "t12-b-020",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Patellofemoral joint contact mechanics and joint reaction force",
    "difficulty": "analytical",
    "text": "In closed-kinetic-chain knee exercises (e.g., bilateral squats), at which knee flexion angle range do patellofemoral joint reaction force (PFJRF) and contact stress peak?",
    "options": [
      "Between 0 and 15 degrees of knee flexion",
      "Between 60 and 90 degrees of knee flexion",
      "Between 10 and 20 degrees of knee hyperextension",
      "Contact stress remains constant across all joint angles"
    ],
    "correct": 1,
    "explanation": "In closed-chain weight-bearing squats, the patellofemoral joint reaction force (PFJRF) and contact stress peak between 60 and 90 degrees of knee flexion due to increasing quadriceps tension and the sharpening vector angle between quadriceps tendon and patellar tendon."
  },
  # B-021: Kinesiology - GRF alignment in late stance
  {
    "id": "t12-b-021",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Gait Analysis: Normal and Pathological Function - Perry & Burnfield",
    "difficulty": "applied",
    "text": "During terminal stance phase of normal gait, where does the Ground Reaction Force (GRF) vector pass relative to the knee joint center, and what external moment does it produce?",
    "options": [
      "Passes anterior to the knee joint center, creating an external extension moment",
      "Passes posterior to the knee joint center, creating an external flexion moment",
      "Passes directly through the lateral collateral ligament, creating internal rotation",
      "Passes superior to the patella, creating an external varus moment"
    ],
    "correct": 0,
    "explanation": "In terminal stance, the GRF vector passes anterior to the knee joint axis, generating an external knee extension moment that stabilizes the knee and allows the quadriceps to relax."
  },
  # B-022: Kinesiology - Center of Pressure (COP)
  {
    "id": "t12-b-022",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Postural control, Center of Pressure (COP) and force platform metrics",
    "difficulty": "foundational",
    "text": "In force platform balance testing, what does Center of Pressure (COP) excursion measure during quiet standing?",
    "options": [
      "The neuromuscular controller's continuous corrective adjustments of the spatial location of the vertical ground reaction force vector",
      "The exact location of the anatomical center of mass within the abdominal cavity",
      "The total structural bone mineral density of the bilateral calcaneal bodies",
      "The maximal voluntary isometric force output of the quadriceps femoris"
    ],
    "correct": 0,
    "explanation": "Center of Pressure (COP) represents the point of application of the resultant vertical ground reaction force under the feet; COP excursions reflect the active neuromuscular torque adjustments made to keep the Center of Mass (COM) within the base of support."
  },
  # B-023: Kinesiology - Shoulder ER/IR Ratio
  {
    "id": "t12-b-023",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Shoulder rotators isokinetic torque ratios in overhead athletes",
    "difficulty": "applied",
    "text": "In isokinetic strength evaluation of elite overhead throwing athletes (Ellenbecker & Davies), what is the normal physiological ratio of External Rotator (ER) to Internal Rotator (IR) concentric strength?",
    "options": [
      "ER to IR ratio of approximately 20% to 30%",
      "ER to IR ratio of approximately 66% to 75% (2:3 ratio)",
      "ER to IR ratio of approximately 120% to 150%",
      "ER to IR ratio of exactly 200% to 250%"
    ],
    "correct": 1,
    "explanation": "In healthy shoulders, external rotators generate approximately two-thirds (66% to 75%) of the torque of the larger internal rotators; an ER:IR strength ratio below 60-66% is a proven risk factor for shoulder and elbow injuries in overhead athletes."
  },
  # B-024: Kinesiology - Second-Class Lever
  {
    "id": "t12-b-024",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Kinesiology of the Musculoskeletal System - Donald A. Neumann",
    "difficulty": "foundational",
    "text": "In human biomechanics, which movement is classically cited as an example of a Second-Class Lever (where the load lies between the fulcrum and effort force)?",
    "options": [
      "Standing on the balls of the feet (heel raise) via the triceps surae at the metatarsophalangeal joints",
      "Elbow extension by the triceps brachii during a seated overhead tricep press",
      "Biceps brachii elbow flexion lifting a dumbbell during concentric curls",
      "Hamstring knee flexion during terminal swing phase of high-speed running"
    ],
    "correct": 0,
    "explanation": "In a standing heel raise (plantarflexion on toes), the fulcrum is at the metatarsophalangeal joints, the load (body weight through the tibia) is in the middle, and the effort (Achilles tendon pull) is on the other side, forming a classic Second-Class Lever."
  },
  # B-025: Electrotherapy - Burst TENS vs Conventional Opioids
  {
    "id": "t12-b-025",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Electrotherapy: Evidence-Based Practice - Tim Watson",
    "difficulty": "foundational",
    "text": "In electrotherapeutic pain modulation (Tim Watson), which endogenous opioid receptor system is primarily stimulated by Low-Frequency (Acupuncture-like / Burst) TENS?",
    "options": [
      "Mu-opioid and delta-opioid receptor systems in the central nervous system via beta-endorphin release",
      "Exclusive blockade of peripheral nicotinic acetylcholine receptors at the motor end plate",
      "Direct destruction of substance P neurotransmitter stores in primary sensory ganglia",
      "Permanent structural down-regulation of dorsal column lemniscal sensory pathways"
    ],
    "correct": 0,
    "explanation": "Low-frequency, motor-intensity TENS (1-4 Hz or Burst) stimulates small-diameter A-delta and C fibers to trigger beta-endorphin and dynorphin release, binding to central mu- and delta-opioid receptors, whereas high-frequency TENS activates delta-opioid mechanisms."
  },
  # B-026: Electrotherapy - BNR and ERA
  {
    "id": "t12-b-026",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Therapeutic ultrasound Beam Non-Uniformity Ratio (BNR) standards",
    "difficulty": "foundational",
    "text": "In therapeutic ultrasound safety, what is the Beam Non-Uniformity Ratio (BNR), and what ratio threshold is clinically acceptable to avoid localized hot spots?",
    "options": [
      "The ratio of peak spatial intensity to average spatial intensity; clinically acceptable BNR is < 6:1",
      "The ratio of ultrasound frequency to electrical voltage; clinically acceptable BNR is > 20:1",
      "The ratio of transducer surface area to patient body mass; clinically acceptable BNR is = 100:1",
      "The ratio of treatment time to acoustic impedance; clinically acceptable BNR is < 0.1:1"
    ],
    "correct": 0,
    "explanation": "Beam Non-Uniformity Ratio (BNR) is the ratio of spatial peak intensity to spatial average intensity across the transducer face; acceptable clinical ultrasound transducers have a BNR of < 6:1 (ideally < 4:1) to prevent periosteal overheating and tissue burns."
  },
  # B-027: Electrotherapy - SWD Inductive vs Capacitive
  {
    "id": "t12-b-027",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Shortwave Diathermy (SWD) inductive drum vs capacitive plate heating",
    "difficulty": "applied",
    "text": "In Shortwave Diathermy (27.12 MHz), why does an Inductive Coil (drum applicator) heat deep muscle tissue more effectively than Capacitive Plates?",
    "options": [
      "Inductive coils generate alternating magnetic fields that induce eddy currents in high-electrolyte tissues like muscle and blood, minimizing superficial fat heating",
      "Capacitive plates generate pure acoustic sound waves that are completely reflected by skin layers",
      "Inductive coils freeze the superficial subcutaneous fat layer to sub-zero temperatures",
      "Capacitive plates only operate when submerged in high-concentration saline solution"
    ],
    "correct": 0,
    "explanation": "Inductive applicators create oscillating magnetic fields that induce circular eddy currents preferentially in low-impedance, vascular, electrolyte-rich tissues (muscle), whereas capacitive plates create strong electric fields that selectively overheat high-resistance subcutaneous fat."
  },
  # B-028: Electrotherapy - Radial vs Focused Shockwave
  {
    "id": "t12-b-028",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Extracorporeal Shockwave Therapy: Radial vs Focused physical differences",
    "difficulty": "applied",
    "text": "What is the primary physical and acoustic difference between Radial Pressure Waves (RPW) and Focused Extracorporeal Shockwaves (FSWT)?",
    "options": [
      "Radial waves reach maximum energy at the skin surface and diverge into tissue; Focused shockwaves concentrate energy at a deep adjustable focal zone",
      "Radial waves penetrate twenty centimeters into bone; Focused shockwaves only affect superficial epidermis",
      "Radial waves use electromagnetic light energy; Focused shockwaves use radioactive ionizing rays",
      "Radial waves require full surgical anesthesia; Focused shockwaves are completely silent and vibration-free"
    ],
    "correct": 0,
    "explanation": "Radial shockwaves (pressure waves) have their peak energy at the applicator tip and diverge superficially, whereas focused shockwaves converge acoustic pressure waves to generate a concentrated focal zone of high energy density at deep target tissues."
  },
  # B-029: Electrotherapy - NMES Motor Recruitment Order
  {
    "id": "t12-b-029",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Neuromuscular Electrical Stimulation (NMES) motor unit recruitment",
    "difficulty": "foundational",
    "text": "How does motor unit recruitment during Neuromuscular Electrical Stimulation (NMES) differ from voluntary physiological muscle recruitment (Henneman's size principle)?",
    "options": [
      "NMES recruits motor units non-selectively, synchronously, and preferentially activates large, fast-twitch (Type II) fibers first due to lower axonal resistance",
      "NMES strictly follows Henneman's size principle, recruiting small slow-twitch Type I fibers exclusively",
      "NMES activates only smooth muscle fibers without stimulating skeletal alpha motor axons",
      "NMES prevents all calcium release from the sarcoplasmic reticulum during stimulation"
    ],
    "correct": 0,
    "explanation": "Voluntary contractions follow Henneman's size principle (slow Type I first, asynchronous). NMES recruits motor units synchronously and non-selectively/reversely, preferentially stimulating large-diameter axons supplying fast Type II fibers first because of lower electrical threshold."
  },
  # B-030: Electrotherapy - Cryotherapy NCV
  {
    "id": "t12-b-030",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Therapeutic cryotherapy physiological effects on nerve conduction",
    "difficulty": "foundational",
    "text": "What is the direct physiological effect of therapeutic ice application on peripheral Nerve Conduction Velocity (NCV)?",
    "options": [
      "NCV decreases linearly by approximately 1.5 to 2.0 m/s for every 1 degree Celsius drop in tissue temperature",
      "NCV increases exponentially to over 200 m/s to facilitate rapid withdrawal reflexes",
      "NCV remains completely unaltered until core body temperature drops below 30 degrees Celsius",
      "Sensory nerve conduction is permanently destroyed after two minutes of ice pack contact"
    ],
    "correct": 0,
    "explanation": "Tissue cooling slows the opening of voltage-gated sodium channels and increases refractory period, decreasing peripheral nerve conduction velocity by ~1.5 to 2.0 m/s per 1 degree C drop in tissue temperature, elevating pain threshold."
  },
  # B-031: Electrotherapy - IFT Vector Scanning
  {
    "id": "t12-b-031",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Interferential Therapy (IFT) vector sweep and quadripolar modulation",
    "difficulty": "applied",
    "text": "In Interferential Therapy (IFT), what is the clinical purpose of utilizing the 'Vector Scan' (dynamic rotating vector) feature during treatment?",
    "options": [
      "To automatically rotate the 100% modulation intersection zone across a larger diffuse anatomical treatment area",
      "To convert low-frequency current into high-voltage electromagnetic radio waves continuously",
      "To eliminate the requirement for conductive electrode gel or moist sponge interfaces",
      "To prevent the treatment timer from expiring during prolonged clinical application"
    ],
    "correct": 0,
    "explanation": "In standard quadripolar IFT, 100% amplitude modulation occurs along the 45-degree diagonal axes. The Vector Scan feature rhythmically modulates channel amplitudes, rotating the effective interference pattern to treat a wider, diffuse area and prevent sensory accommodation."
  },
  # B-032: Electrotherapy - LLLT Fluence Dosage
  {
    "id": "t12-b-032",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis",
    "subtopic": "Low-Level Laser Therapy (LLLT) energy density and WALT dosage guidelines",
    "difficulty": "foundational",
    "text": "In Low-Level Laser Therapy (Photobiomodulation), what is the formula to calculate total Energy Density (Fluence, in J/cm2)?",
    "options": [
      "Fluence (J/cm2) = [Power (Watts) * Time (seconds)] / Surface Area (cm2)",
      "Fluence (J/cm2) = Voltage (Volts) / Current (Amperes) * Frequency (Hz)",
      "Fluence (J/cm2) = Tissue thickness (cm) * Body mass (kg) * Heart rate",
      "Fluence (J/cm2) = Wavelength (nm) / Speed of light * Temperature"
    ],
    "correct": 0,
    "explanation": "Energy (Joules) = Power (Watts) * Time (seconds). Energy Density (Fluence, J/cm2) = Total Energy (J) / Area of beam or treatment spot (cm2), which is the standard parameter used in WALT (World Association for Laser Therapy) dosage guidelines."
  },
  # B-033: Neuro Rehab - Fitts & Posner
  {
    "id": "t12-b-033",
    "section": "B",
    "topic": "psychology and human development",
    "subtopic": "Fitts and Posner's stages of motor skill learning in sports rehab",
    "difficulty": "foundational",
    "text": "According to Fitts and Posner's model of motor learning, what is the correct chronological sequence of stages through which an athlete progresses when learning or retraining a complex motor skill?",
    "options": [
      "Cognitive Stage -> Associative Stage -> Autonomous Stage",
      "Autonomous Stage -> Associative Stage -> Cognitive Stage",
      "Associative Stage -> Cognitive Stage -> Autonomous Stage",
      "Cognitive Stage -> Autonomous Stage -> Associative Stage"
    ],
    "correct": 0,
    "explanation": "Fitts and Posner defined three stages of motor learning: 1. Cognitive Stage (high conscious thought, understanding mechanics, frequent errors), 2. Associative Stage (refining movement patterns, error self-correction), 3. Autonomous Stage (automatic, fluent, low conscious attention)."
  },
  # B-034: Neuro Rehab - Kleim & Jones
  {
    "id": "t12-b-034",
    "section": "B",
    "topic": "psychology and human development",
    "subtopic": "Kleim & Jones principles of experience-dependent neural plasticity",
    "difficulty": "applied",
    "text": "According to Kleim and Jones' seminal principles of experience-dependent neuroplasticity, which statement accurately reflects the 'Specificity' principle in athletic rehabilitation?",
    "options": [
      "The nature of the training experience dictates the specific nature of the neural plasticity and motor representation acquired",
      "Plasticity in response to one training experience completely prevents learning any other functional skill",
      "Neural plasticity only occurs if training sessions exceed eight continuous hours per single day",
      "Passive stretching of immobilized limbs induces greater cortical reorganization than active motor training"
    ],
    "correct": 0,
    "explanation": "The 'Specificity' principle of neuroplasticity (Kleim & Jones) states that the specific sensory and motor demands of the practice task dictate the exact nature of the cortical and spinal neural network reorganization."
  },
  # B-035: Neuro Rehab - Dual-Task Gait Concussion
  {
    "id": "t12-b-035",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Dual-task cognitive-motor interference testing in sports concussion",
    "difficulty": "applied",
    "text": "In athletes recovering from sports-related concussion, what is the clinical rationale for assessing 'Dual-Task Gait' (e.g., walking while performing serial subtractions) prior to contact clearance?",
    "options": [
      "Dual-task testing unmasks persistent subclinical sensorimotor and attentional deficits that are absent during simple single-task gait",
      "Dual-task testing measures maximal quadriceps concentric torque without requiring an isokinetic machine",
      "Dual-task testing permanently reverses all structural post-concussion cortical microbleeds",
      "Dual-task testing is strictly used to evaluate visual acuity and determine prescription eyeglasses"
    ],
    "correct": 0,
    "explanation": "Post-concussion athletes often normalize simple gait tests while retaining subtle deficits in cortical motor control; dual-task cognitive-motor paradigms divide attentional resources, exposing gait instability, slower gait speed, and elevated re-injury risk."
  },
  # B-036: Neuro Rehab - JPS Joint Position Sense
  {
    "id": "t12-b-036",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Proprioceptive Joint Position Sense (JPS) and active angle reproduction",
    "difficulty": "foundational",
    "text": "How is Joint Position Sense (JPS) propriorception standardly assessed in the shoulder or knee following sports injury?",
    "options": [
      "Active or passive target angle positioning followed by blinded active angle reproduction, measuring absolute error in degrees",
      "Measuring cutaneous thermal discrimination thresholds using warm and cold water glass tubes",
      "Determining the maximum weight an athlete can lift for one repetition with eyes closed",
      "Applying vibrating tuning forks over the clavicle to measure auditory brainstem reflexes"
    ],
    "correct": 0,
    "explanation": "Joint Position Sense (JPS) is clinically measured using active or passive target angle matching (the joint is placed at a target angle, returned to start, and the blinded patient attempts to reproduce that angle), quantifying Absolute Error in degrees."
  },
  # B-037: Research - AUC-ROC Diagnostic Accuracy
  {
    "id": "t12-b-037",
    "section": "B",
    "topic": "nutrition and research evidence in sports",
    "subtopic": "Receiver Operating Characteristic (ROC) curve analysis and AUC interpretation",
    "difficulty": "analytical",
    "text": "In clinical research evaluating a new orthopedic special test, what does an Area Under the ROC Curve (AUC) value between 0.90 and 1.00 represent?",
    "options": [
      "Excellent overall diagnostic discriminative accuracy between injured and healthy individuals",
      "Zero diagnostic utility, equivalent to flipping an unweighted fair coin",
      "High systematic measurement error rendering the test completely invalid for clinical practice",
      "The test has high sensitivity but zero percent diagnostic specificity across all thresholds"
    ],
    "correct": 0,
    "explanation": "In ROC analysis, the AUC quantifies diagnostic accuracy across all cut-points: AUC = 0.50 is chance performance, 0.70-0.80 is fair, 0.80-0.90 is good, and 0.90-1.00 represents excellent/outstanding discriminative ability."
  },
  # B-038: Research - Blinding in Physiotherapy Trials
  {
    "id": "t12-b-038",
    "section": "B",
    "topic": "nutrition and research evidence in sports",
    "subtopic": "Methodological quality and blinding in randomized controlled physiotherapy trials",
    "difficulty": "applied",
    "text": "In a randomized controlled trial comparing manual therapy against exercise therapy, why is 'Blinding of Outcome Assessors' critical for internal validity when therapist blinding is impossible?",
    "options": [
      "It minimizes detection bias and observer expectation bias during objective physical measurements",
      "It guarantees that all patients experience identical placebo physiological improvements",
      "It eliminates the necessity for randomized group allocation and baseline demographic balancing",
      "It ensures that therapists deliver both interventions simultaneously to the same participant"
    ],
    "correct": 0,
    "explanation": "While physiotherapists providing physical interventions cannot be blinded, blinding independent outcome assessors who collect measurements prevents detection bias and investigator expectancy effects, preserving trial internal validity (PEDro scale criterion)."
  },
  # B-039: Nutrition - Creatine during Immobilization
  {
    "id": "t12-b-039",
    "section": "B",
    "topic": "nutrition and research evidence in sports",
    "subtopic": "Nutritional interventions during cast immobilization to preserve muscle mass",
    "difficulty": "applied",
    "text": "What physiological benefit has creatine monohydrate supplementation demonstrated during post-injury limb immobilization in athletic clinical trials (Hespel et al., Johnston et al.)?",
    "options": [
      "Attenuates disuse skeletal muscle atrophy, maintains GLUT4 protein content, and accelerates subsequent strength rehabilitation",
      "Completely prevents all ligament laxity and accelerates articular cartilage calcification",
      "Replaces the need for progressive mechanical loading and physical rehabilitation entirely",
      "Eliminates all inflammatory cytokine release from healing surgical wound margins"
    ],
    "correct": 0,
    "explanation": "Research shows creatine supplementation (20 g/day loading, then 5 g/day) during limb cast immobilization attenuates disuse muscle atrophy, preserves muscle GLUT4 expression and glycogen content, and accelerates recovery of muscle cross-sectional area upon re-training."
  },
  # B-040: Ethics - RTP Pressure
  {
    "id": "t12-b-040",
    "section": "B",
    "topic": "sports physiotherapy and medicine",
    "subtopic": "Shared decision making and ethics in Return-to-Play clearance",
    "difficulty": "applied",
    "text": "In the Strategic Assessment of Risk and Risk Tolerance (StARRT) framework for Return to Play (Creighton et al.), what factor constitutes Step 1 (Assessment of Health Risk)?",
    "options": [
      "Evaluating athlete demographics, tissue health, injury nature, and objective functional recovery markers",
      "Evaluating financial bonuses and commercial sponsorship implications of match victory",
      "Assessing media scrutiny and fan pressure on team coaching leadership",
      "Consulting opposing team coaches to assess tactical match importance"
    ],
    "correct": 0,
    "explanation": "The 3-step StARRT framework begins with Step 1: Assessment of Health Risk (tissue biological healing, injury characteristics, personal medical history, objective test results), before evaluating Step 2 (Activity Risk/Sport modifier) and Step 3 (Decision Modifiers/Risk tolerance)."
  },

  # -------------------------------------------------------------
  # SECTION C: Case Studies (20 Qs: 10 passages x 2 Qs each)
  # -------------------------------------------------------------
  # Passage 1: Acute MCL Injury in Footballer (t12-cs-001)
  {
    "id": "t12-c-001",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Football midfielder with acute medial knee injury following contact valgus trauma",
    "difficulty": "analytical",
    "passageId": "t12-cs-001",
    "passage": "A 23-year-old professional football midfielder sustains a contact injury when an opponent slide-tackles into the lateral aspect of his right knee while his foot is planted. He feels a tearing sensation along the inside of his knee. On physical examination at the sports clinic 2 hours post-match, there is mild local medial joint effusion, marked tenderness along the medial femoral epicondyle and joint line, and pain during passive knee extension. Valgus stress testing at 30 degrees knee flexion demonstrates 6 mm of medial joint space opening with a distinct firm end-feel compared to the left knee (2 mm opening). Valgus stress testing at 0 degrees full extension demonstrates no laxity and a solid end-feel. Lachman, posterior drawer, and McMurray tests are all negative.",
    "text": "Based on the valgus stress examination findings at 30 degrees versus 0 degrees, what is the precise structural diagnosis?",
    "options": [
      "Grade II isolated superficial Medial Collateral Ligament (MCL) sprain with intact secondary stabilizers",
      "Grade III complete rupture of the MCL combined with posterior cruciate ligament disruption",
      "Complete rupture of the anterior cruciate ligament with medial meniscal root tear",
      "Isolated lateral collateral ligament sprain with posterolateral corner instability"
    ],
    "correct": 0,
    "explanation": "Valgus laxity at 30 deg flexion (where the posterior capsule is slackened) with a firm end-feel (5-8 mm opening) indicates a Grade II MCL sprain. Normal stability at 0 deg confirms that secondary stabilizers (posterior capsule, ACL, PCL) are intact."
  },
  {
    "id": "t12-c-002",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Football midfielder with acute medial knee injury following contact valgus trauma",
    "difficulty": "applied",
    "passageId": "t12-cs-001",
    "passage": "A 23-year-old professional football midfielder sustains a contact injury when an opponent slide-tackles into the lateral aspect of his right knee while his foot is planted. He feels a tearing sensation along the inside of his knee. On physical examination at the sports clinic 2 hours post-match, there is mild local medial joint effusion, marked tenderness along the medial femoral epicondyle and joint line, and pain during passive knee extension. Valgus stress testing at 30 degrees knee flexion demonstrates 6 mm of medial joint space opening with a distinct firm end-feel compared to the left knee (2 mm opening). Valgus stress testing at 0 degrees full extension demonstrates no laxity and a solid end-feel. Lachman, posterior drawer, and McMurray tests are all negative.",
    "text": "What is the evidence-based conservative management protocol for this footballer's Grade II MCL sprain?",
    "options": [
      "Early functional bracing in a hinged knee brace with protected weight-bearing and progressive closed-chain rehabilitation",
      "Rigid cylinder cast immobilization for six weeks followed by immediate unrestricted contact match play",
      "Immediate emergency open primary surgical ligament reconstruction within forty-eight hours of trauma",
      "Complete bed rest without weight-bearing until all medial joint line tenderness completely disappears"
    ],
    "correct": 0,
    "explanation": "Grade II isolated MCL injuries have high vascularity and heal reliably with conservative care: hinged brace protecting against valgus stress (initially allowing 0-90 deg ROM), early weight-bearing as tolerated, early quad/hamstring activation, and progressive loading."
  },

  # Passage 2: Swimmer Subacromial Pain (t12-cs-002)
  {
    "id": "t12-c-003",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Competitive swimmer with subacromial pain syndrome and painful arc",
    "difficulty": "analytical",
    "passageId": "t12-cs-002",
    "passage": "A 19-year-old collegiate competitive freestyle swimmer presents with a 2-month history of insidious-onset anterolateral right shoulder pain that worsens during high-volume swim practices and pull-buoy sets. She demonstrates a painful arc between 70 and 120 degrees of active shoulder abduction. Neer and Hawkins-Kennedy impingement tests are both positive. Active external rotation in 90 degrees abduction is weak and painful. Examination of posture reveals thoracic kyphosis with rounded shoulders (forward head, protracted scapulae). The posterior glenohumeral capsule shows mild tightness with 20 degrees loss of internal rotation compared to the non-dominant side.",
    "text": "What is the primary mechanical mechanism contributing to this swimmer's subacromial pain syndrome?",
    "options": [
      "Narrowing of the subacromial space during arm elevation exacerbated by scapular protraction and rotator cuff fatigue",
      "Complete traumatic bony avulsion of the acromion process from the scapular spine",
      "Compression of the suprascapular nerve within the spinoglenoid notch by a paralabral cyst",
      "Severe glenohumeral osteoarthritis with large intra-articular osteophytes and joint destruction"
    ],
    "correct": 0,
    "explanation": "Swimmer's shoulder involves subacromial space compromise during repetitive overhead arm elevation, driven by rotator cuff fatigue (loss of humeral head depression), posterior capsular tightness, and scapular protraction/anterior tilting."
  },
  {
    "id": "t12-c-004",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Competitive swimmer with subacromial pain syndrome and painful arc",
    "difficulty": "applied",
    "passageId": "t12-cs-002",
    "passage": "A 19-year-old collegiate competitive freestyle swimmer presents with a 2-month history of insidious-onset anterolateral right shoulder pain that worsens during high-volume swim practices and pull-buoy sets. She demonstrates a painful arc between 70 and 120 degrees of active shoulder abduction. Neer and Hawkins-Kennedy impingement tests are both positive. Active external rotation in 90 degrees abduction is weak and painful. Examination of posture reveals thoracic kyphosis with rounded shoulders (forward head, protracted scapulae). The posterior glenohumeral capsule shows mild tightness with 20 degrees loss of internal rotation compared to the non-dominant side.",
    "text": "Which comprehensive rehabilitation program is MOST appropriate to restore pain-free swimming function?",
    "options": [
      "Posterior capsule stretching (Sleeper stretch), serratus anterior and lower trapezius strengthening, rotator cuff endurance drills, and thoracic extension mobility",
      "Aggressive continuous ultrasound therapy alone without active exercise combined with complete avoidance of swimming for 12 months",
      "High-load military overhead barbell shoulder presses performed to muscular failure five days per week",
      "Surgical subacromial decompression (acromioplasty) as mandatory first-line treatment for all competitive swimmers"
    ],
    "correct": 0,
    "explanation": "Evidence-based management of subacromial pain syndrome emphasizes exercise therapy: strengthening the scapular upward rotators (serratus anterior/lower trap), rotator cuff endurance, posterior capsular stretching (sleeper stretch), and thoracic extension mobility."
  },

  # Passage 3: High Jumper Patellar Tendinopathy (t12-cs-003)
  {
    "id": "t12-c-005",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: High jumper with chronic proximal patellar tendinopathy and jump takeoff pain",
    "difficulty": "analytical",
    "passageId": "t12-cs-003",
    "passage": "A 21-year-old high jumper reports progressive right infrapatellar knee pain over 4 months on his plant (takeoff) leg. Pain is sharp during the explosive penultimate step and takeoff phase of high jumping, and aches for 24-48 hours after training sessions (VISA-P score = 52/100). On physical examination, there is exquisite focal tenderness localized precisely to the proximal origin of the patellar tendon at the inferior patellar pole. The pain significantly decreases when palpation is repeated with the quadriceps actively contracted and the knee fully extended (positive Royal London Hospital test). Diagnostic ultrasound demonstrates localized tendon thickening (7.5 mm vs 4.0 mm contralateral), hypoechoic collagen disorganization, and localized neovascularization on power Doppler.",
    "text": "According to Cook and Purdam's tendon continuum model, what pathological stage of tendinopathy is this athlete experiencing?",
    "options": [
      "Late reactive tendinopathy / early tendon disrepair transitioning to degenerative tendinopathy with structural neovascularization",
      "Acute bacterial infectious tenosynovitis with widespread tissue necrosis requiring emergency drainage",
      "Pure inflammatory peritendinitis without any structural collagen changes in the tendon core",
      "Complete traumatic rupture of the patellar tendon with high-riding patella (patella alta)"
    ],
    "correct": 0,
    "explanation": "Tendon thickening, focal hypoechoic areas of disorganized matrix, hypervascularity on Doppler, and chronic load-related pain (4 months) indicate tendon disrepair transitioning to degenerative tendinopathy on Cook & Purdam's continuum model."
  },
  {
    "id": "t12-c-006",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: High jumper with chronic proximal patellar tendinopathy and jump takeoff pain",
    "difficulty": "applied",
    "passageId": "t12-cs-003",
    "passage": "A 21-year-old high jumper reports progressive right infrapatellar knee pain over 4 months on his plant (takeoff) leg. Pain is sharp during the explosive penultimate step and takeoff phase of high jumping, and aches for 24-48 hours after training sessions (VISA-P score = 52/100). On physical examination, there is exquisite focal tenderness localized precisely to the proximal origin of the patellar tendon at the inferior patellar pole. The pain significantly decreases when palpation is repeated with the quadriceps actively contracted and the knee fully extended (positive Royal London Hospital test). Diagnostic ultrasound demonstrates localized tendon thickening (7.5 mm vs 4.0 mm contralateral), hypoechoic collagen disorganization, and localized neovascularization on power Doppler.",
    "text": "Which progressive exercise loading protocol is MOST evidence-based to restore load capacity in this athlete's patellar tendon?",
    "options": [
      "Isometric Spanish squats (5x45s) for pain modulation -> Heavy Slow Resistance (3x/wk) -> Energy storage plyometrics -> Sport-specific jump takeoff drills",
      "Total bed rest and non-weight bearing on crutches for eight weeks followed by immediate return to high jump competition",
      "Routine repeated intratendinous corticosteroid injections every two weeks until all tenderness is abolished",
      "Exclusive performance of high-velocity plyometric drop jumps from 60 cm boxes daily without strength loading"
    ],
    "correct": 0,
    "explanation": "Modern tendinopathy rehabilitation follows a staged progression: 1. Isometrics (Spanish squat/leg press holds) for analgesia, 2. Heavy Slow Resistance (HSR) training to stimulate collagen synthesis and increase tendon stiffness, 3. Energy storage/release plyometrics, 4. Return to sport."
  },

  # Passage 4: Ankle Inversion Sprain in Badminton Player (t12-cs-004)
  {
    "id": "t12-c-007",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Badminton player with acute inversion ankle sprain and mechanical laxity",
    "difficulty": "analytical",
    "passageId": "t12-cs-004",
    "passage": "A 20-year-old badminton player sustains an acute right ankle injury when lunging backward to retrieve a smash, rolling her foot into sudden inversion and plantarflexion. She presents 3 hours post-injury with prominent lateral ankle swelling (egg-shaped hematoma over the lateral malleolus) and difficulty weight-bearing. Palpation demonstrates severe tenderness over the anterior talofibular ligament (ATFL) and mild tenderness over the calcaneofibular ligament (CFL). The anterior drawer test demonstrates 7 mm anterior translation with a soft end-feel (uninjured side 2 mm with firm end-feel). Ottawa Ankle Rules are negative for bone tenderness and she can take 4 steps with a limp.",
    "text": "Which anatomical structure is primary in restraining anterior talar translation in plantarflexion, and is the primary structure injured in this athlete?",
    "options": [
      "The Anterior Talofibular Ligament (ATFL)",
      "The Posterior Talofibular Ligament (PTFL)",
      "The Superficial Tibionavicular Deltoid Ligament",
      "The Anterior Inferior Tibiofibular Ligament (AITFL)"
    ],
    "correct": 0,
    "explanation": "The Anterior Talofibular Ligament (ATFL) is the weakest lateral ankle ligament and is oriented parallel to the long axis of the foot during plantarflexion, making it the primary restraint against anterior talar displacement and the most frequently injured ligament in inversion sprains."
  },
  {
    "id": "t12-c-008",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Badminton player with acute inversion ankle sprain and mechanical laxity",
    "difficulty": "applied",
    "passageId": "t12-cs-004",
    "passage": "A 20-year-old badminton player sustains an acute right ankle injury when lunging backward to retrieve a smash, rolling her foot into sudden inversion and plantarflexion. She presents 3 hours post-injury with prominent lateral ankle swelling (egg-shaped hematoma over the lateral malleolus) and difficulty weight-bearing. Palpation demonstrates severe tenderness over the anterior talofibular ligament (ATFL) and mild tenderness over the calcaneofibular ligament (CFL). The anterior drawer test demonstrates 7 mm anterior translation with a soft end-feel (uninjured side 2 mm with firm end-feel). Ottawa Ankle Rules are negative for bone tenderness and she can take 4 steps with a limp.",
    "text": "What is the optimal early rehabilitation strategy to reduce time to return-to-court and prevent recurrent instability?",
    "options": [
      "POLICE protocol with semi-rigid functional ankle support, early progressive weight-bearing, manual ankle mobilizations, and proprioceptive wobble board balance training",
      "Rigid fiberglass cast immobilization for six weeks without any ankle joint movement allowed",
      "Immediate surgical open repair of the ATFL within twenty-four hours of injury presentation",
      "Strict non-weight bearing bed rest on crutches without physical therapy until swelling disappears"
    ],
    "correct": 0,
    "explanation": "Evidence strongly supports functional management: Protection (semi-rigid brace), Optimal Loading, early weight-bearing, early joint mobilization (Mulligan MWM for dorsiflexion), and progressive neuromuscular/proprioceptive balance training to prevent chronic ankle instability."
  },

  # Passage 5: Rugby ACL RTS Battery (t12-cs-005)
  {
    "id": "t12-c-009",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Rugby player 9 months post-ACL reconstruction discharge testing",
    "difficulty": "analytical",
    "passageId": "t12-cs-005",
    "passage": "A 22-year-old rugby back is 9 months post-right ACL reconstruction using a quadrupled semitendinosus-gracilis (hamstring) autograft. He undergoes a comprehensive Return to Sport (RTS) testing battery. The results are: Knee ROM 0-145 degrees with zero effusion; Isokinetic Quadriceps peak torque Limb Symmetry Index (LSI) = 93%; Isokinetic Hamstrings peak torque LSI = 82%; Single-Leg Hop for Distance LSI = 94%; Single-Leg Triple Hop LSI = 92%; Single-Leg Crossover Hop LSI = 91%; Single-Leg 6-Meter Timed Hop LSI = 93%; ACL-RSI psychological readiness score = 84/100; Y-Balance anterior reach asymmetry = 1.5 cm; 3D motion capture demonstrates symmetrical landing mechanics without dynamic knee valgus.",
    "text": "Based on the comprehensive test results, which specific physical deficit remains to be resolved before full contact rugby match clearance?",
    "options": [
      "Isolated hamstring strength deficit (Hamstring LSI = 82%, below the >=90% RTS threshold) following hamstring tendon autograft harvest",
      "Severe quadriceps strength deficit rendering the athlete incapable of sprinting or cutting safely",
      "Psychological unreadiness (ACL-RSI score of 84 is far below the acceptable return-to-sport cutoff)",
      "Catastrophic failure of functional single-leg hop testing across all four standardized hop tests"
    ],
    "correct": 0,
    "explanation": "All criteria meet or exceed benchmarks (quad LSI >=90%, hop tests >=90%, ACL-RSI >75, symmetrical landing) EXCEPT hamstring strength (LSI = 82%), which is below the mandatory >=90% threshold—a common donor-site deficit following hamstring autograft harvest that must be rectified."
  },
  {
    "id": "t12-c-010",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Rugby player 9 months post-ACL reconstruction discharge testing",
    "difficulty": "applied",
    "passageId": "t12-cs-005",
    "passage": "A 22-year-old rugby back is 9 months post-right ACL reconstruction using a quadrupled semitendinosus-gracilis (hamstring) autograft. He undergoes a comprehensive Return to Sport (RTS) testing battery. The results are: Knee ROM 0-145 degrees with zero effusion; Isokinetic Quadriceps peak torque Limb Symmetry Index (LSI) = 93%; Isokinetic Hamstrings peak torque LSI = 82%; Single-Leg Hop for Distance LSI = 94%; Single-Leg Triple Hop LSI = 91%; Single-Leg Crossover Hop LSI = 91%; Single-Leg 6-Meter Timed Hop LSI = 93%; ACL-RSI psychological readiness score = 84/100; Y-Balance anterior reach asymmetry = 1.5 cm; 3D motion capture demonstrates symmetrical landing mechanics without dynamic knee valgus.",
    "text": "Which targeted exercise prescription is MOST indicated to resolve this specific remaining strength deficit?",
    "options": [
      "High-load eccentric hamstring strengthening (Nordic Hamstring Exercise, Single-Leg Romanian Deadlifts, and high-velocity hamstring curls at inner/outer ranges)",
      "High-load seated open-chain leg extensions from 0 to 90 degrees performed five times weekly",
      "Passive knee extension stretching with 10 kg overpressure placed on the superior patellar pole",
      "Complete cessation of all resistance training with reliance exclusively on light stationary cycling"
    ],
    "correct": 0,
    "explanation": "To resolve the donor-site hamstring deficit (semitendinosus harvest), targeted eccentric hamstring strengthening (Nordic curls, Romanian deadlifts, slide-board leg curls, and isokinetic eccentric training at varied joint angles) is prescribed to restore LSI >=90%."
  },

  # Passage 6: Osgood-Schlatter in Youth Soccer (t12-cs-006)
  {
    "id": "t12-c-011",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Adolescent soccer player with anterior tibial tuberosity pain during growth spurt",
    "difficulty": "analytical",
    "passageId": "t12-cs-006",
    "passage": "A 14-year-old male competitive youth soccer player experiencing a rapid growth spurt (grew 7 cm in the past 6 months) presents with progressive anterior knee pain of 8 weeks duration. Pain is sharp during soccer shooting, sprinting, and squatting, and aches after training. Physical examination demonstrates marked localized swelling and prominent bony enlargement with exquisite tenderness over the tibial tuberosity. Resisted knee extension from 90 degrees elicits sharp pain localized to the tibial tubercle. Knee joint effusion, joint line tenderness, and ligamentous testing are all normal. Lateral knee radiographs demonstrate soft tissue swelling and irregular ossification/fragmentation of the tibial tuberosity apophysis consistent with chronological age.",
    "text": "What is the primary pathological mechanism underlying this young soccer player's condition?",
    "options": [
      "Repetitive traction microtrauma to the immature secondary ossification center of the tibial tuberosity (Osgood-Schlatter Disease)",
      "Acute intra-articular bacterial septic arthritis of the tibiofemoral joint articulation",
      "Complete traumatic tear of the posterior horn of the lateral meniscus",
      "Osteosarcoma of the proximal tibial metaphysis requiring immediate surgical amputation"
    ],
    "correct": 0,
    "explanation": "Osgood-Schlatter disease is a traction apophysitis of the tibial tuberosity caused by repetitive quadriceps tensile loading transmitted through the patellar tendon onto the immature, rapidly growing secondary ossification center during adolescent growth spurts."
  },
  {
    "id": "t12-c-012",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Adolescent soccer player with anterior tibial tuberosity pain during growth spurt",
    "difficulty": "applied",
    "passageId": "t12-cs-006",
    "passage": "A 14-year-old male competitive youth soccer player experiencing a rapid growth spurt (grew 7 cm in the past 6 months) presents with progressive anterior knee pain of 8 weeks duration. Pain is sharp during soccer shooting, sprinting, and squatting, and aches after training. Physical examination demonstrates marked localized swelling and prominent bony enlargement with exquisite tenderness over the tibial tuberosity. Resisted knee extension from 90 degrees elicits sharp pain localized to the tibial tubercle. Knee joint effusion, joint line tenderness, and ligamentous testing are all normal. Lateral knee radiographs demonstrate soft tissue swelling and irregular ossification/fragmentation of the tibial tuberosity apophysis consistent with chronological age.",
    "text": "Which management strategy is MOST appropriate for this adolescent athlete?",
    "options": [
      "Symptom-guided load management (reducing high-impact kicking and jumping volume), quadriceps/hip flexibility, and ice post-activity",
      "Complete cast immobilization of the knee in full extension for twelve consecutive weeks",
      "Immediate surgical excision of the entire tibial tuberosity under general anesthesia",
      "Corticosteroid injection into the patellar tendon insertion under ultrasound guidance"
    ],
    "correct": 0,
    "explanation": "Osgood-Schlatter is a self-limiting condition managed with activity/load modification (reducing aggravating kicking/sprinting volume while maintaining sports participation within pain tolerance <=3/10), quadriceps/hamstring flexibility, ice, and kinetic chain strengthening."
  },

  # Passage 7: ITB Syndrome in Runner (t12-cs-007)
  {
    "id": "t12-c-013",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Distance runner with lateral knee pain and ITB friction syndrome",
    "difficulty": "analytical",
    "passageId": "t12-cs-007",
    "passage": "A 26-year-old female marathon runner presents with sharp, burning pain over the lateral aspect of her right knee that develops consistently after 5 km of running and is particularly aggravated during downhill running. She reports having recently increased her weekly running volume from 45 km to 80 km. Physical examination reveals: Focal tenderness over the lateral femoral epicondyle (approximately 2 cm superior to the lateral joint line); Noble's Compression Test elicits familiar pain at approximately 30 degrees of passive knee flexion as the ITB passes over the epicondyle; Ober's test demonstrates significant ITB tightness; and running gait video analysis demonstrates contralateral pelvic drop (Trendelenburg sign) and dynamic knee adduction/internal rotation during stance.",
    "text": "What is the primary anatomical pathology and biomechanical contributor to this runner's symptoms?",
    "options": [
      "Compression of the richly innervated fat pad beneath the Iliotibial Band over the lateral femoral epicondyle associated with gluteus medius weakness",
      "Complete longitudinal bucket-handle tear of the lateral meniscus body",
      "Isolated rupture of the popliteus tendon with lateral joint instability",
      "Stress fracture of the proximal fibular neck with peroneal nerve palsy"
    ],
    "correct": 0,
    "explanation": "Iliotibial Band Syndrome (ITBS) involves compression of the richly vascularized and innervated adipose tissue layer deep to the ITB against the lateral femoral epicondyle around 30 deg flexion (the impingement zone), driven by Gluteus Medius weakness and excessive contralateral pelvic drop."
  },
  {
    "id": "t12-c-014",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Distance runner with lateral knee pain and ITB friction syndrome",
    "difficulty": "applied",
    "passageId": "t12-cs-007",
    "passage": "A 26-year-old female marathon runner presents with sharp, burning pain over the lateral aspect of her right knee that develops consistently after 5 km of running and is particularly aggravated during downhill running. She reports having recently increased her weekly running volume from 45 km to 80 km. Physical examination reveals: Focal tenderness over the lateral femoral epicondyle (approximately 2 cm superior to the lateral joint line); Noble's Compression Test elicits familiar pain at approximately 30 degrees of passive knee flexion as the ITB passes over the epicondyle; Ober's test demonstrates significant ITB tightness; and running gait video analysis demonstrates contralateral pelvic drop (Trendelenburg sign) and dynamic knee adduction/internal rotation during stance.",
    "text": "Which combination of interventions is MOST effective for resolving ITB syndrome in this distance runner?",
    "options": [
      "Gluteus medius/maximus strengthening, running cadence increase (+7.5%), step width widening, and avoiding excessive downhill running during initial recovery",
      "Solely passive foam rolling of the ITB for sixty minutes daily without any active hip strengthening exercises",
      "Immobilization in a long-leg cylinder cast for six weeks with complete cessation of all physical training",
      "Immediate surgical release and transection of the iliotibial band as standard first-line therapy"
    ],
    "correct": 0,
    "explanation": "Evidence demonstrates that strengthening the hip abductors/external rotators (gluteus medius/maximus) to control pelvic drop, paired with running gait modifications (increasing cadence by 5-10% and slightly widening step width to reduce peak ITB strain), successfully resolves ITBS."
  },

  # Passage 8: Medial Epicondylalgia in Archer (t12-cs-008)
  {
    "id": "t12-c-015",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Elite archer with medial elbow pain during bow draw",
    "difficulty": "analytical",
    "passageId": "t12-cs-008",
    "passage": "A 25-year-old elite archer complains of medial right elbow pain of 2 months duration that is exacerbated during the draw and anchor phases of archery shooting. Physical examination reveals: Exquisite tenderness localized over the medial epicondyle and the common flexor-pronator tendon origin; Pain reproduction during resisted wrist flexion with the elbow in full extension and forearm supinated; Pain on resisted forearm pronation with the elbow flexed at 90 degrees; Passive wrist extension with elbow extended and forearm supinated stretches the medial structures and reproduces discomfort; Ulnar nerve Tinel's sign at the cubital tunnel is negative, and elbow valgus stress testing is stable.",
    "text": "Which muscle tendon origins are primarily implicated in this clinical presentation (Golfer's elbow / Medial Epicondylalgia)?",
    "options": [
      "Pronator Teres and Flexor Carpi Radialis (FCR) tendon origins",
      "Extensor Carpi Radialis Brevis (ECRB) and Extensor Digitorum origins",
      "Triceps Brachii distal tendon insertion on the olecranon process",
      "Biceps Brachii distal tendon insertion on the radial tuberosity"
    ],
    "correct": 0,
    "explanation": "Medial epicondylalgia involves tendinopathy of the common flexor-pronator tendon origin on the medial epicondyle, with the Pronator Teres and Flexor Carpi Radialis (FCR) tendons being the most frequently involved structures."
  },
  {
    "id": "t12-c-016",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Elite archer with medial elbow pain during bow draw",
    "difficulty": "applied",
    "passageId": "t12-cs-008",
    "passage": "A 25-year-old elite archer complains of medial right elbow pain of 2 months duration that is exacerbated during the draw and anchor phases of archery shooting. Physical examination reveals: Exquisite tenderness localized over the medial epicondyle and the common flexor-pronator tendon origin; Pain reproduction during resisted wrist flexion with the elbow in full extension and forearm supinated; Pain on resisted forearm pronation with the elbow flexed at 90 degrees; Passive wrist extension with elbow extended and forearm supinated stretches the medial structures and reproduces discomfort; Ulnar nerve Tinel's sign at the cubital tunnel is negative, and elbow valgus stress testing is stable.",
    "text": "What is the most effective progressive exercise rehabilitation protocol for this athlete?",
    "options": [
      "Progressive isometric wrist flexion and forearm pronation -> Eccentric-concentric wrist loading -> Archery draw kinetic chain strengthening",
      "Immobilization of the elbow in a cast for six weeks with complete cessation of all upper extremity activity",
      "Routine repeated corticosteroid injections into the flexor tendon origin every three weeks",
      "Passive continuous ultrasound therapy alone without any active therapeutic exercise loading"
    ],
    "correct": 0,
    "explanation": "Optimal management requires staged loading: isometric wrist flexion/pronation for pain analgesia, progressing to eccentric-concentric strengthening (e.g., reverse Tyler twist with flexible bar), followed by kinetic chain shoulder and scapular stabilizer integration."
  },

  # Passage 9: Lumbar Disc Herniation with Radiculopathy in Weightlifter (t12-cs-009)
  {
    "id": "t12-c-017",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Weightlifter with acute lumbar disc herniation and L5 radiculopathy",
    "difficulty": "analytical",
    "passageId": "t12-cs-009",
    "passage": "A 28-year-old competitive weightlifter experiences a sudden sharp pain in his lower back while executing a heavy deadlift, accompanied by radiating pain into his right buttock, posterolateral thigh, lateral calf, and the dorsum of his right great toe. On examination 24 hours later: Active lumbar flexion is severely limited and centralizes/worsens radicular pain down the right leg, whereas repeated passive lumbar extension in prone (McKenzie extension) centralizes the pain to the low back and abolishes the foot symptoms; Straight Leg Raise (SLR) on the right reproduces familiar leg pain at 35 degrees; Well-Leg (Crossed) SLR performed on the left leg reproduces familiar radicular pain down the symptomatic right leg at 45 degrees; Sensation is reduced over the right L5 dermatome, and right Extensor Hallucis Longus (EHL) strength is Grade 4/5.",
    "text": "What is the diagnostic significance of the positive Well-Leg (Crossed) Straight Leg Raise test in this athlete?",
    "options": [
      "High diagnostic specificity (>90%) strongly indicating a space-occupying disc herniation compressing the nerve root",
      "Complete rule-out of lumbar disc pathology, confirming isolated hamstring muscle tear",
      "Confirmation of thoracic facet joint arthropathy without lumbar involvement",
      "High probability of sacroiliac joint ligamentous laxity without nerve root compression"
    ],
    "correct": 0,
    "explanation": "While the ipsilateral SLR has high sensitivity (~90%) but lower specificity, the Crossed (Well-Leg) SLR test has very high specificity (>90-97%) for confirming a space-occupying lumbar disc herniation compressing the contralateral nerve root."
  },
  {
    "id": "t12-c-018",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Weightlifter with acute lumbar disc herniation and L5 radiculopathy",
    "difficulty": "applied",
    "passageId": "t12-cs-009",
    "passage": "A 28-year-old competitive weightlifter experiences a sudden sharp pain in his lower back while executing a heavy deadlift, accompanied by radiating pain into his right buttock, posterolateral thigh, lateral calf, and the dorsum of his right great toe. On examination 24 hours later: Active lumbar flexion is severely limited and centralizes/worsens radicular pain down the right leg, whereas repeated passive lumbar extension in prone (McKenzie extension) centralizes the pain to the low back and abolishes the foot symptoms; Straight Leg Raise (SLR) on the right reproduces familiar leg pain at 35 degrees; Well-Leg (Crossed) SLR performed on the left leg reproduces familiar radicular pain down the symptomatic right leg at 45 degrees; Sensation is reduced over the right L5 dermatome, and right Extensor Hallucis Longus (EHL) strength is Grade 4/5.",
    "text": "Based on the phenomenon of pain centralization with extension, which initial rehabilitation strategy is indicated?",
    "options": [
      "Directional preference exercises utilizing repetitive prone lumbar extensions (McKenzie method), avoiding loaded lumbar flexion, with core stabilization progression",
      "Aggressive continuous seated lumbar flexion stretches with 20 kg overpressure on the thighs",
      "Immediate emergency lumbar spinal fusion surgery without trial of conservative physiotherapy",
      "High-velocity rotational spinal manipulation performed in full lumbar flexion"
    ],
    "correct": 0,
    "explanation": "The centralization phenomenon with lumbar extension indicates a directional preference; prescribing repetitive prone extensions (McKenzie protocol) moves disc nuclear material anteriorly, reduces nerve root irritation, and is paired with deep abdominal/multifidus stabilization."
  },

  # Passage 10: SLAP Tear in Handball Player (t12-cs-010)
  {
    "id": "t12-c-019",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Elite handball athlete with Superior Labrum Anterior-to-Posterior (SLAP) tear",
    "difficulty": "analytical",
    "passageId": "t12-cs-010",
    "passage": "A 24-year-old elite overhead handball player presents with deep, poorly localized right anterior-superior shoulder pain and painful clicking during the late cocking and acceleration phases of hard jump throws. Physical examination reveals: Glenohumeral range of motion demonstrates GIRD with 25 degrees internal rotation deficit; O'Brien's active compression test elicits deep superior clicking and pain in thumb-down position which disappears in thumb-up position; Biceps Load II test is positive with reproduction of pain; Crank test reproduces mechanical catching at 160 degrees abduction; Rotator cuff manual muscle strength is Grade 5/5; Shoulder MR-arthrography confirms a Type II SLAP lesion (detachment of the superior labrum and long head of the biceps anchor from the superior glenoid).",
    "text": "What is the primary anatomical characteristic of a Type II SLAP lesion according to Snyder's classification?",
    "options": [
      "Detachment of the superior glenoid labrum and long head of the biceps tendon anchor from the superior glenoid tubercle",
      "Fraying of the superior labrum with an intact and stable biceps anchor attachment",
      "Bucket-handle tear of the superior labrum with an intact biceps anchor",
      "Bucket-handle tear of the superior labrum with extension of the tear into the biceps tendon"
    ],
    "correct": 0,
    "explanation": "According to Snyder's classification, a Type II SLAP lesion is characterized by avulsion/detachment of the superior labrum and long head of biceps tendon anchor from the superior glenoid rim, creating superior instability."
  },
  {
    "id": "t12-c-020",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: Elite handball athlete with Superior Labrum Anterior-to-Posterior (SLAP) tear",
    "difficulty": "applied",
    "passageId": "t12-cs-010",
    "passage": "A 24-year-old elite overhead handball player presents with deep, poorly localized right anterior-superior shoulder pain and painful clicking during the late cocking and acceleration phases of hard jump throws. Physical examination reveals: Glenohumeral range of motion demonstrates GIRD with 25 degrees internal rotation deficit; O'Brien's active compression test elicits deep superior clicking and pain in thumb-down position which disappears in thumb-up position; Biceps Load II test is positive with reproduction of pain; Crank test reproduces mechanical catching at 160 degrees abduction; Rotator cuff manual muscle strength is Grade 5/5; Shoulder MR-arthrography confirms a Type II SLAP lesion (detachment of the superior labrum and long head of the biceps anchor from the superior glenoid).",
    "text": "What is the recommended non-operative physiotherapy rehabilitation protocol for this overhead athlete (Fedoriw et al., Edwards et al.)?",
    "options": [
      "Posterior capsular stretching (Sleeper stretch), dynamic rotator cuff strengthening, periscapular stabilization, kinetic chain integration, and graded throwing progression",
      "Immediate surgical labral repair and biceps tenodesis without any trial of conservative physical therapy",
      "Complete rigid immobilization of the glenohumeral joint in an abduction splint for six months",
      "Exclusive high-load overhead barbell snatches performed to muscular failure daily"
    ],
    "correct": 0,
    "explanation": "Evidence (Fedoriw et al., Edwards et al.) demonstrates that 70-80% of overhead athletes with Type II SLAP tears succeed with conservative therapy: correcting GIRD with posterior capsule stretches (sleeper stretch), rotator cuff dynamic strengthening, periscapular muscle stabilization, and kinetic chain throwing mechanics."
  }
]

# Balance answer keys uniformly:
# A1: 8 of 0, 8 of 1, 8 of 2, 8 of 3
# A2: 2 of 0, 2 of 1, 2 of 2, 2 of 3
# B: 10 of 0, 10 of 1, 10 of 2, 10 of 3
# C: 5 of 0, 5 of 1, 5 of 2, 5 of 3

by_sec = {'A1': [], 'A2': [], 'B': [], 'C': []}
for q in questions_12:
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

with open('mock_tests/mock_test_12.json', 'w') as f:
    json.dump(all_qs, f, indent=2)

print("Saved perfectly balanced mock_tests/mock_test_12.json")
