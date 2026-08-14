import type { Question } from "../types";

/**
 * Complete 500-question master bank for SAI Performance Analyst (Physiotherapy) CBT.
 * 5 Full Mock Tests (100 Qs each: 32 A1, 8 A2, 40 B, 20 C).
 * Balanced option lengths and strictly verified answers across all subjects.
 */
export const IMPORTED_QUESTION_BANK: Question[] = [
  {
    "id": "t1-a1-001",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "foundational",
    "text": "According to the General Adaptation Syndrome (GAS) model, what is the immediate physiological response during the 'Alarm' phase following an acute bout of unaccustomed high-intensity resistance exercise?",
    "options": [
      "Temporary reduction in neuromuscular performance and acute tissue microtrauma",
      "Rapid supercompensation of muscle glycogen stores and maximal force output",
      "Immediate upregulation of structural myofibrillar protein synthesis pathways",
      "Long-term structural adaptation and increased tolerance to subsequent heavy loads"
    ],
    "correct": 0,
    "explanation": "The Alarm phase of Selye's General Adaptation Syndrome is characterized by acute physiological disruption, soreness, stiffness, and a transient drop in neuromuscular performance before recovery and supercompensation occur."
  },
  {
    "id": "t1-a1-002",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "applied",
    "text": "When designing a resistance training program specifically for maximal strength development in an elite athlete, which load and repetition scheme is recommended by the NSCA?",
    "options": [
      "Loads of 67–85% 1RM performed for 8–12 repetitions per set with 1-min rest",
      "Loads of ≥85% 1RM performed for ≤6 repetitions per set with 2–5 min rest",
      "Loads of <67% 1RM performed for 12–20 repetitions per set with 30-s rest",
      "Loads of 75–80% 1RM performed for 15–25 repetitions per set with active rest"
    ],
    "correct": 1,
    "explanation": "For maximal strength development, the NSCA guidelines recommend using loads of 85% of 1RM or greater with 6 or fewer repetitions per set, accompanied by 2 to 5 minutes of rest between sets."
  },
  {
    "id": "t1-a1-003",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "analytical",
    "text": "In velocity-based training (VBT), a barbell velocity loss exceeding 30% during a resistance set is primarily indicative of which physiological state?",
    "options": [
      "Selective recruitment of high-threshold type IIb motor units without fatigue",
      "Optimal accumulation of mechanical tension for tendon collagen remodeling",
      "Substantial central nervous system and neuromuscular fatigue accumulation",
      "Rapid phosphocreatine replenishment within active contracting sarcomeres"
    ],
    "correct": 2,
    "explanation": "In velocity-based training, velocity loss greater than 30-40% indicates significant neuromuscular and central fatigue with high metabolic accumulation, making it inappropriate for power-specific sessions."
  },
  {
    "id": "t1-a1-004",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "foundational",
    "text": "During the stretch-shortening cycle (SSC) in plyometric training, what is the critical physiological role of minimizing the duration of the 'amortization' phase?",
    "options": [
      "Maximizing the dissipation of stored mechanical energy as thermal heat",
      "Allowing the Golgi tendon organ to fire and inhibit active muscle contraction",
      "Preventing the premature recruitment of fast-twitch motor units in the shank",
      "Preserving stored elastic energy in series elastic components for potentiation"
    ],
    "correct": 3,
    "explanation": "The amortization phase is the time between eccentric deceleration and concentric acceleration. A brief amortization phase ensures stored elastic energy in tendons/myofibrils and stretch reflex potentiation are effectively transferred into concentric propulsion."
  },
  {
    "id": "t1-a1-005",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "applied",
    "text": "In an undulating (nonlinear) periodization model, how are training volume and intensity typically manipulated compared to a classical linear model?",
    "options": [
      "Volume and intensity vary frequently on a daily or weekly microcycle basis",
      "Intensity is held constant while training volume progressively rises across cycles",
      "High volume is maintained for 6 months followed by sudden maximal load tapering",
      "Sport-specific technical practice is completely omitted until peak competition"
    ],
    "correct": 0,
    "explanation": "Undulating periodization involves frequent alterations in intensity and volume within a weekly microcycle (e.g., hypertrophy day, strength day, power day), offering neuromuscular variety and preventing plateaus."
  },
  {
    "id": "t1-a1-006",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "analytical",
    "text": "Which metabolic pathway provides the predominant source of adenosine triphosphate (ATP) during an all-out 60-meter sprint lasting approximately 7 seconds?",
    "options": [
      "Mitochondrial beta-oxidation of long-chain circulating free fatty acids",
      "Phosphagen (ATP-PCr) system within active contracting muscle fibers",
      "Slow aerobic glycolysis utilizing hepatic and circulating blood glucose",
      "Oxidative phosphorylation within highly vascular slow-twitch motor units"
    ],
    "correct": 1,
    "explanation": "The ATP-PCr (phosphagen) system is the primary bioenergetic pathway for maximal-intensity efforts lasting under 10 seconds, providing immediate ATP without requiring oxygen."
  },
  {
    "id": "t1-a1-007",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "foundational",
    "text": "During prolonged steady-state submaximal running in warm conditions, 'cardiovascular drift' is characterized by which physiological pattern?",
    "options": [
      "Gradual decline in heart rate with a progressive increase in stroke volume",
      "Gradual rise in heart rate accompanied by a progressive decrease in stroke volume",
      "Simultaneous increase in central blood volume, stroke volume, and cardiac output",
      "Sudden precipitous drop in mean arterial pressure and total peripheral resistance"
    ],
    "correct": 1,
    "explanation": "Cardiovascular drift during prolonged submaximal exercise in the heat involves progressive dehydration, reduced plasma volume, and increased skin blood flow, leading to lower stroke volume and a compensatory increase in heart rate to maintain cardiac output."
  },
  {
    "id": "t1-a1-008",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "applied",
    "text": "What is the primary physiological mechanism responsible for the 'fast component' of Excess Post-Exercise Oxygen Consumption (EPOC)?",
    "options": [
      "Hepatic conversion of all circulating lactate into blood glucose via the Cori cycle",
      "Elevated core body temperature and sustained hormonal calorigenic actions",
      "Resynthesis of muscle phosphocreatine and replenishment of myoglobin oxygen stores",
      "Repair of damaged structural proteins in eccentric-loaded sarcomeres over days"
    ],
    "correct": 2,
    "explanation": "The fast (alactacid) component of EPOC occurs within 2–3 minutes post-exercise and is primarily driven by the replenishment of ATP/PCr stores and reloading of oxyhemoglobin and oxymyoglobin."
  },
  {
    "id": "t1-a1-009",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "analytical",
    "text": "At what point during incremental exercise does Ventilatory Threshold 1 (VT1) typically occur relative to blood lactate concentrations?",
    "options": [
      "At maximal oxygen uptake when lactate reaches its highest peak value (>10 mmol/L)",
      "When blood lactate starts rising above baseline values (~2.0 mmol/L) with hyperventilation",
      "When the respiratory exchange ratio (RER) drops significantly below resting 0.70",
      "During complete cessation of exercise when blood lactate clearance is completed"
    ],
    "correct": 1,
    "explanation": "VT1 corresponds to the first breakpoint where ventilation increases disproportionately to VO2 to clear CO2 produced by the bicarbonate buffering of initial lactic acid accumulation (~2 mmol/L)."
  },
  {
    "id": "t1-a1-010",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "foundational",
    "text": "Upon acute ascent to high altitude (e.g., 2,500 meters), what is the immediate respiratory and acid-base compensatory response observed in an unacclimatized athlete?",
    "options": [
      "Hypoventilation causing metabolic acidosis with severe renal bicarbonate retention",
      "Suppression of carotid chemoreceptors resulting in elevated arterial PCO2 levels",
      "Hyperventilation resulting in decreased arterial PCO2 and acute respiratory alkalosis",
      "Immediate increase in red cell 2,3-DPG without changes in minute ventilation volume"
    ],
    "correct": 2,
    "explanation": "Acute hypoxia stimulates peripheral chemoreceptors to trigger hyperventilation, blowing off CO2 and lowering arterial PCO2, which results in acute respiratory alkalosis that the kidneys gradually compensate for by excreting bicarbonate."
  },
  {
    "id": "t1-a1-011",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "applied",
    "text": "In endurance exercise metabolism, the 'Cori cycle' specifically describes which biochemical pathway?",
    "options": [
      "Conversion of muscle glycogen directly into ketone bodies during prolonged fasting",
      "Oxidation of branched-chain amino acids in skeletal muscle mitochondria during rest",
      "Direct synthesis of ATP from adipose triglyceride lipolysis inside working myofibrils",
      "Transport of muscle-derived lactate to the liver for gluconeogenesis and glucose recycling"
    ],
    "correct": 3,
    "explanation": "The Cori cycle involves muscle-produced lactate being transported via circulation to the liver, where it is converted back to glucose through gluconeogenesis and released back into the bloodstream."
  },
  {
    "id": "t1-a1-012",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "analytical",
    "text": "For an endurance athlete participating in an event lasting longer than 90 minutes, what is the evidence-based recommendation for exogenous carbohydrate intake during the event?",
    "options": [
      "5 to 10 grams per hour of low-glycemic pure fructose exclusively",
      "30 to 60 grams per hour of rapid-acting, easily digestible carbohydrates",
      "90 to 120 grams per hour of complex insoluble dietary fiber and fats",
      "Complete carbohydrate restriction until the competitive event has ended"
    ],
    "correct": 1,
    "explanation": "ACSM and ISSN position stands recommend 30–60 g/hour of rapidly absorbed carbohydrates (e.g., glucose, maltodextrin) during endurance events lasting 1–2.5 hours to maintain blood glucose and spare muscle glycogen."
  },
  {
    "id": "t1-a1-013",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "foundational",
    "text": "What is the recommended daily protein intake range for athletes engaged in intense strength and power training to support muscle protein synthesis?",
    "options": [
      "0.6 to 0.8 grams per kilogram of body weight per day",
      "1.4 to 2.0 grams per kilogram of body weight per day",
      "3.5 to 4.5 grams per kilogram of body weight per day",
      "5.0 to 6.0 grams per kilogram of body weight per day"
    ],
    "correct": 1,
    "explanation": "Current evidence-based consensus guidelines (ACSM/ISSN) recommend 1.4 to 2.0 g/kg/day of protein for strength and power athletes, distributed in 20–40 g doses every 3–4 hours."
  },
  {
    "id": "t1-a1-014",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "applied",
    "text": "To achieve optimal rehydration following an intensive training session with significant sweat loss, how much fluid should an athlete consume relative to their acute body weight loss?",
    "options": [
      "0.5 liters per kilogram of body weight lost over 8 hours",
      "1.0 liter per kilogram of body weight lost with distilled pure water",
      "1.5 liters per kilogram of body weight lost (150% deficit) with sodium",
      "3.0 liters per kilogram of body weight lost within 15 minutes of completion"
    ],
    "correct": 2,
    "explanation": "Consuming approximately 1.5 L of fluid per kg of body weight lost (150% of sweat loss) over 2–4 hours accounts for ongoing urinary and respiratory fluid losses, provided sodium is included to maintain plasma osmolality."
  },
  {
    "id": "t1-a1-015",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "analytical",
    "text": "What is the primary physiological mechanism by which beta-alanine supplementation improves high-intensity exercise performance lasting 1 to 4 minutes?",
    "options": [
      "Increasing intracellular muscle carnosine to buffer hydrogen ion (H+) accumulation",
      "Directly stimulating the adrenal medulla to release high concentrations of epinephrine",
      "Accelerating mitochondrial fatty acid transport via carnitine palmitoyltransferase",
      "Increasing circulating plasma bicarbonate to expand extracellular buffering capacity"
    ],
    "correct": 0,
    "explanation": "Beta-alanine is the rate-limiting precursor to carnosine synthesis. Increased intramuscular carnosine enhances intracellular buffering capacity against H+ ion accumulation during anaerobic glycolysis."
  },
  {
    "id": "t1-a1-016",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "foundational",
    "text": "In the clinical diagnosis of Relative Energy Deficiency in Sport (RED-S), what is the underlying root etiological factor?",
    "options": [
      "Excessive dietary fat intake relative to total daily carbohydrate consumption in athletes",
      "Chronic low energy availability (LEA) where dietary intake does not match energy expenditure",
      "Elevated resting metabolic rate resulting from high-dose creatine supplementation regimens",
      "Inability to absorb fat-soluble vitamins due to over-hydration sports protocols"
    ],
    "correct": 1,
    "explanation": "RED-S is caused by low energy availability (LEA), where dietary energy intake is insufficient to support the energy expenditure required for health, daily living, and athletic training."
  },
  {
    "id": "t1-a1-017",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "applied",
    "text": "In the Heath-Carter somatotyping method, what do the three numerical ratings in a '1–7–1' profile represent respectively?",
    "options": [
      "Low endomorphy (fat), high mesomorphy (muscularity), low ectomorphy (linearity)",
      "High endomorphy (fat), low mesomorphy (muscularity), high ectomorphy (linearity)",
      "Moderate endomorphy, moderate mesomorphy, extremely high ectomorphy in build",
      "High endomorphy, high mesomorphy, low ectomorphy across all physical parameters"
    ],
    "correct": 0,
    "explanation": "Heath-Carter somatotypes are expressed as Endomorphy–Mesomorphy–Ectomorphy. A 1-7-1 rating signifies minimal relative fatness (1), extreme musculoskeletal robustness/muscularity (7), and minimal relative linearity/slenderness (1)."
  },
  {
    "id": "t1-a1-018",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "analytical",
    "text": "An athlete weighing 80 kg currently has 20% body fat. Assuming lean body mass (LBM) remains unchanged, what is the athlete's target body weight at a desired 10% body fat?",
    "options": [
      "64.0 kg",
      "71.1 kg",
      "74.5 kg",
      "76.2 kg"
    ],
    "correct": 1,
    "explanation": "Current LBM = 80 kg * (1 - 0.20) = 64 kg. Target weight = LBM / (1 - Desired Fat%) = 64 / (1 - 0.10) = 64 / 0.90 = 71.11 kg."
  },
  {
    "id": "t1-a1-019",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "foundational",
    "text": "When assessing biological maturation in youth athletic development, which statement accurately reflects the timing of Peak Height Velocity (PHV)?",
    "options": [
      "Boys achieve peak height velocity approximately two years earlier than girls in youth sport",
      "Girls achieve peak height velocity approximately two years earlier than boys in youth sport",
      "Chronological age perfectly predicts PHV timing identically across both male and female sexes",
      "Peak weight velocity always precedes peak height velocity by twelve consecutive months"
    ],
    "correct": 1,
    "explanation": "On average, girls experience their adolescent growth spurt and peak height velocity (PHV) at approximately age 11.5–12 years, roughly 2 years earlier than boys (average age 13.5–14 years)."
  },
  {
    "id": "t1-a1-020",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "applied",
    "text": "What is the standard mid-parental height calculation formula used to estimate target adult height for a male child?",
    "options": [
      "[Father's height (cm) + Mother's height (cm) + 13 cm] / 2",
      "[Father's height (cm) + Mother's height (cm) - 13 cm] / 2",
      "[Father's height (cm) + Mother's height (cm)] / 2",
      "[Father's height (cm) * 1.08 + Mother's height (cm)] / 2"
    ],
    "correct": 0,
    "explanation": "Tanner's mid-parental height formula for boys is: (Father's height + Mother's height + 13 cm) / 2. For girls, it is (Father's height - 13 cm + Mother's height) / 2."
  },
  {
    "id": "t1-a1-021",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "analytical",
    "text": "The 'Relative Age Effect' (RAE) in youth talent identification pathways refers to:",
    "options": [
      "Older biological parents producing children with greater innate aerobic endurance in distance races",
      "Systematic selection bias favoring athletes born earlier in the selection cut-off calendar year",
      "Rapid acceleration of Peak Height Velocity caused by early multi-sport childhood specialization",
      "Discrepancies between morphological age and chronological dental age in growing adolescent athletes"
    ],
    "correct": 1,
    "explanation": "The Relative Age Effect describes the phenomenon where youth born early in the selection calendar year are physically more mature than peers born later in the same year, leading to biased selection in competitive sports."
  },
  {
    "id": "t1-a1-022",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "foundational",
    "text": "According to the Catastrophe Model of sports anxiety, what happens to athletic performance when cognitive anxiety is high and somatic physiological arousal increases past optimal levels?",
    "options": [
      "Performance gradually drops in a smooth, symmetrical inverted-U curve across the entire match",
      "Performance shows a sudden, dramatic and catastrophic decline in execution efficiency",
      "Performance remains completely stable regardless of progressive somatic arousal fluctuations",
      "Performance immediately improves to peak record-breaking levels under maximal cognitive load"
    ],
    "correct": 1,
    "explanation": "Hardy's Catastrophe Model posits that under high cognitive anxiety (worry), increases in physiological arousal lead to a catastrophic, sharp drop in performance rather than a gradual decline."
  },
  {
    "id": "t1-a1-023",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "applied",
    "text": "Which psychological intervention is most specifically designed to address cognitive state anxiety rather than somatic anxiety in elite competitors?",
    "options": [
      "Progressive Muscle Relaxation (PMR) cycles targeting peripheral motor tension",
      "Diaphragmatic deep breathing exercises designed to stimulate the vagus nerve",
      "Cognitive reframing, positive rational self-talk, and restructuring of appraisal",
      "Thermal biofeedback protocols aimed at increasing fingertip peripheral temperature"
    ],
    "correct": 2,
    "explanation": "Cognitive reframing and restructuring target negative thoughts, worry, and appraisal (cognitive anxiety), whereas somatic modalities like PMR and breathing target physiological arousal."
  },
  {
    "id": "t1-a1-024",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "analytical",
    "text": "In Self-Determination Theory (Deci & Ryan), what are the three fundamental psychological needs essential for sustaining intrinsic athletic motivation?",
    "options": [
      "Power, financial reward, and external public recognition in competitive leagues",
      "Autonomy, competence, and relatedness within the sporting and training environment",
      "Arousal, aggression, and outcome orientation during high-stakes championship finals",
      "Ego involvement, coach dependence, and task compliance with strict rigid schedules"
    ],
    "correct": 1,
    "explanation": "Self-Determination Theory identifies Autonomy (feeling in control), Competence (feeling effective), and Relatedness (feeling connected and valued) as the three basic psychological needs driving self-determined intrinsic motivation."
  },
  {
    "id": "t1-a1-025",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "foundational",
    "text": "In team dynamics, how does 'Task Cohesion' differ fundamentally from 'Social Cohesion'?",
    "options": [
      "Task cohesion reflects team friendship, while social cohesion reflects winning tournament trophies",
      "Task cohesion relates to working unitedly toward shared athletic goals, whereas social cohesion relates to interpersonal liking",
      "Task cohesion is purely determined by coach personality, whereas social cohesion is determined by athlete salary",
      "Task cohesion only operates in individual sports, whereas social cohesion operates exclusively in team sports"
    ],
    "correct": 1,
    "explanation": "Task cohesion refers to the degree to which group members work together to achieve specific performance goals, whereas social cohesion refers to how much team members like each other and enjoy social interaction."
  },
  {
    "id": "t1-a1-026",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "applied",
    "text": "Which personality trait cluster is classically characterized by high competitiveness, extreme urgency, impatience, and elevated vulnerability to stress-induced injury?",
    "options": [
      "Type B relaxed personality style",
      "Type A competitive personality style",
      "Introverted phlegmatic temperament",
      "High sensory-processing sensitivity"
    ],
    "correct": 1,
    "explanation": "Type A personality behavior includes excessive time urgency, intense competitiveness, impatience, and aggressive drive, which can predispose athletes to overtraining and heightened injury risk."
  },
  {
    "id": "t1-a1-027",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "analytical",
    "text": "When monitoring post-exercise muscle damage, why must serum Creatine Kinase (CK) levels be interpreted with caution by the performance analyst team?",
    "options": [
      "CK levels drop to zero within 2 hours of high-force eccentric resistance exercise",
      "CK demonstrates high inter-individual variability and typically peaks 24–48 hours post-exercise",
      "CK levels are completely unaffected by intense contact collisions or eccentric loading protocols",
      "CK measurements can only be obtained through invasive surgical muscle biopsy procedures"
    ],
    "correct": 1,
    "explanation": "Creatine Kinase exhibits substantial inter-subject variability (high vs low responders) and delayed clearance (peaking 24 to 72 hours after unaccustomed eccentric work), so it must be evaluated longitudinally with context."
  },
  {
    "id": "t1-a1-028",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "foundational",
    "text": "A marked and sustained suppression in resting Heart Rate Variability (such as RMSSD) over consecutive microcycles in an elite athlete most strongly indicates:",
    "options": [
      "Enhanced parasympathetic recovery and optimal physical readiness for maximal competition",
      "Excessive allostatic load, autonomic imbalance, and non-functional overreaching",
      "Optimal long-term cardiac adaptation to high-volume aerobic base conditioning blocks",
      "Immediate necessity to double high-intensity interval training session frequency"
    ],
    "correct": 1,
    "explanation": "Suppression of vagally-mediated HRV metrics (like ln RMSSD) alongside elevated resting HR indicates sympathetic dominance, incomplete systemic recovery, and potential non-functional overreaching."
  },
  {
    "id": "t1-a1-029",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "applied",
    "text": "On a dual force plate system during a drop jump test, how is the Reactive Strength Index (RSI) calculated?",
    "options": [
      "Jump Height (m) divided by Ground Contact Time (s)",
      "Peak Ground Reaction Force (N) multiplied by Flight Time (s)",
      "Body Weight (kg) divided by Total Impulse (N·s)",
      "Rate of Force Development (N/s) divided by Jump Height (m)"
    ],
    "correct": 0,
    "explanation": "Reactive Strength Index (RSI) = Jump Height (in meters or millimeters) / Ground Contact Time (in seconds or milliseconds). It measures explosive plyometric capability and stretch-shortening cycle efficiency."
  },
  {
    "id": "t1-a1-030",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "analytical",
    "text": "In clinical and sports science research, what constitutes a 'Type I error' (alpha error)?",
    "options": [
      "Failing to reject a false null hypothesis during experimental analysis (false negative)",
      "Incorrectly rejecting a true null hypothesis during experimental analysis (false positive)",
      "Selecting a non-random convenience sample from a single competitive athletic academy",
      "Inaccurately measuring joint range of motion due to improper manual goniometer placement"
    ],
    "correct": 1,
    "explanation": "A Type I error occurs when a researcher rejects the null hypothesis when it is actually true (concluding a significant intervention effect exists when in reality it does not)."
  },
  {
    "id": "t1-a1-031",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "foundational",
    "text": "In anthropometric and sports science testing, what is the primary purpose of calculating the Technical Error of Measurement (TEM)?",
    "options": [
      "To establish the predictive validity of field screening tests against laboratory criteria",
      "To quantify intra-tester and inter-tester measurement precision, variability, and reliability",
      "To eliminate the requirement for ethical informed consent in elite national athlete squads",
      "To calculate statistical correlation coefficients between two completely independent variables"
    ],
    "correct": 1,
    "explanation": "TEM represents the standard deviation of repeated measurements taken by the same observer (intra-rater) or different observers (inter-rater), serving as a gold standard for measurement precision/error."
  },
  {
    "id": "t1-a1-032",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "applied",
    "text": "When comparing the mean jump height of three independent training groups (Plyometrics vs Heavy Resistance vs Control), which statistical test is most appropriate?",
    "options": [
      "Paired Student's t-test comparing pre- and post-test values",
      "One-way Analysis of Variance (ANOVA) with post-hoc testing",
      "Chi-Square test of independence on categorical distributions",
      "Pearson product-moment correlation coefficient calculation"
    ],
    "correct": 1,
    "explanation": "A one-way ANOVA is used to determine whether there are any statistically significant differences between the means of three or more independent (unrelated) groups."
  },
  {
    "id": "t1-a2-001",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "foundational",
    "text": "Under the Target Olympic Podium Scheme (TOPS) administered by the Sports Authority of India (SAI), which committee is responsible for approving customized athlete support and selections?",
    "options": [
      "Indian Olympic Association Executive Council",
      "Mission Olympic Cell (MOC) within SAI",
      "National Anti-Doping Disciplinary Panel",
      "High Court Sports Grievance Committee"
    ],
    "correct": 1,
    "explanation": "The Mission Olympic Cell (MOC) is the dedicated committee within SAI that evaluates, selects, and approves funding, training, and support for TOPS Core and Development athletes.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-a2-002",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "applied",
    "text": "What is the highest sporting honor in India, carrying a cash prize of Rs. 25 Lakhs for spectacular performance over a four-year period?",
    "options": [
      "Major Dhyan Chand Khel Ratna Award presented by MYAS",
      "Arjuna Award for Outstanding Performance in Sports",
      "Dronacharya Lifetime Award for Outstanding Coaches",
      "Rashtriya Khel Protsahan Puruskar for Institutions"
    ],
    "correct": 0,
    "explanation": "The Major Dhyan Chand Khel Ratna Award is India's highest sporting award, presented annually by the Ministry of Youth Affairs and Sports with a cash prize of Rs. 25 Lakhs.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-a2-003",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "foundational",
    "text": "Which flagship initiative was launched by the Ministry of Youth Affairs and Sports to identify grassroots talent across Youth, University, Winter, and Para disciplines in India?",
    "options": [
      "Khelo India Program across all national zones",
      "Fit India School Certification and Fitness Assessment",
      "National Sports Development Fund Matching Grants",
      "Scheme of Assistance to National Sports Federations"
    ],
    "correct": 0,
    "explanation": "The Khelo India Scheme is the premier national grassroots program encompassing Khelo India Youth Games, University Games, Winter Games, and Para Games to revive sports culture.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-a2-004",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "Under the World Anti-Doping Code, what fundamental tenet dictates that an athlete is strictly responsible for any prohibited substance found in their biological specimen?",
    "options": [
      "Principle of Negligence under civil law statutes",
      "Principle of Strict Liability under the WADA Code",
      "Principle of Inadvertent Contamination Defence",
      "Principle of Vicarious Organizational Accountability"
    ],
    "correct": 1,
    "explanation": "Under Article 2.1 of the WADA Code, the Principle of Strict Liability means that a violation occurs whenever a prohibited substance is found in an athlete's specimen, regardless of intent or fault.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-a2-005",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "foundational",
    "text": "When an athlete has a diagnosed medical condition requiring a prohibited medication, which official certificate must be granted prior to participation?",
    "options": [
      "Therapeutic Use Exemption (TUE) certificate",
      "Medical Return-to-Play Concussion Waiver",
      "National Federation General Medical Clearance",
      "Hospital Emergency Special Exemption Pass"
    ],
    "correct": 0,
    "explanation": "A Therapeutic Use Exemption (TUE) allows an athlete to use a prohibited substance or method for a legitimate, documented medical condition in accordance with the International Standard for TUEs.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-a2-006",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "applied",
    "text": "Which city will host the 2028 Summer Olympic Games as selected by the International Olympic Committee (IOC)?",
    "options": [
      "Brisbane, Queensland, Australia",
      "Los Angeles, California, United States",
      "Paris, Île-de-France, France",
      "Dakar, Cape Verde Peninsula, Senegal"
    ],
    "correct": 1,
    "explanation": "The Games of the XXXIV Olympiad (2028 Summer Olympics) will be hosted in Los Angeles, California, USA, followed by Brisbane in 2032.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-a2-007",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "foundational",
    "text": "Where is the global headquarters of the Court of Arbitration for Sport (CAS) located?",
    "options": [
      "Geneva, Switzerland",
      "Lausanne, Switzerland",
      "Monaco, France",
      "London, United Kingdom"
    ],
    "correct": 1,
    "explanation": "The Court of Arbitration for Sport (CAS / TAS) is an independent international body established to settle sports-related disputes through arbitration, headquartered in Lausanne, Switzerland.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-a2-008",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "applied",
    "text": "In Indian sports administration, what is the standardized scientific radiographical method mandated for skeletal age determination to prevent age fraud in age-group tournaments?",
    "options": [
      "Tanner-Whitehouse 3 (TW3) method on left wrist and hand X-ray",
      "Dual-energy X-ray absorptiometry (DEXA) lumbar spine scan",
      "Diagnostic ultrasound of the calcaneal apophysis",
      "Computed tomography (CT) of the bilateral femoral heads"
    ],
    "correct": 0,
    "explanation": "The Tanner-Whitehouse (TW3) method using plain radiograph of the left wrist and hand is the government/SAI mandated protocol for skeletal age estimation to curb age fraud.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t1-b-001",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "According to orthopedic physical assessment literature, which clinical test demonstrates the highest diagnostic sensitivity for acute Anterior Cruciate Ligament (ACL) rupture?",
    "options": [
      "Anterior Drawer test performed at 90 degrees of knee flexion",
      "Pivot Shift test evaluating anterolateral rotational subluxation",
      "Lachman test performed at 20 to 30 degrees of knee flexion",
      "McMurray test evaluating posterior meniscal horn pathology"
    ],
    "correct": 2,
    "explanation": "The Lachman test (performed at 20-30° knee flexion) has the highest sensitivity (~85-95%) for detecting ACL tears because hamstring spasm is minimized compared to the 90° anterior drawer test."
  },
  {
    "id": "t1-b-002",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "When performing McMurray's test for meniscal integrity, what combination of knee movements places maximal compressive stress on the posterior horn of the medial meniscus?",
    "options": [
      "Knee flexion with external tibial rotation and valgus stress while extending",
      "Knee flexion with internal tibial rotation and varus stress while extending",
      "Full knee extension with anterior tibial translation in neutral rotation",
      "Knee flexion at 90° with pure axial distraction along the tibial shaft"
    ],
    "correct": 0,
    "explanation": "External tibial rotation combined with valgus stress and extension from full flexion impinges the posterior horn of the medial meniscus between the femoral condyle and tibial plateau."
  },
  {
    "id": "t1-b-003",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In shoulder evaluation, a positive Hawkins-Kennedy impingement test is produced by placing the patient's arm in which specific position?",
    "options": [
      "90° shoulder abduction and full external rotation with horizontal extension",
      "90° forward shoulder flexion followed by maximal passive internal rotation",
      "Full active elevation in the scapular plane with thumb pointed downward",
      "Shoulder extension, adduction, and resisted elbow flexion in supine"
    ],
    "correct": 1,
    "explanation": "The Hawkins-Kennedy test involves flexing the shoulder to 90° in the sagittal plane with elbow flexed to 90°, then forcefully internally rotating the humerus to drive the supraspinatus against the coracoacromial arch."
  },
  {
    "id": "t1-b-004",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "Which anatomical structure is primarily assessed during the Anterior Drawer test of the ankle joint?",
    "options": [
      "Calcaneofibular ligament (CFL) during pure ankle dorsiflexion",
      "Anterior Talofibular ligament (ATFL) in slight plantarflexion",
      "Deltoid ligament complex along the medial malleolus border",
      "Posterior talofibular ligament (PTFL) in full joint extension"
    ],
    "correct": 1,
    "explanation": "The anterior drawer test of the ankle (performed with slight plantarflexion) specifically assesses the integrity and mechanical laxity of the anterior talofibular ligament (ATFL)."
  },
  {
    "id": "t1-b-005",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "Speed's test is clinically performed to assess pathology of which tendon complex in the shoulder?",
    "options": [
      "Supraspinatus tendon inserting onto the greater tubercle facet",
      "Long head of biceps brachii in the bicipital groove and labrum",
      "Subscapularis tendon inserting onto the lesser humeral tubercle",
      "Teres minor tendon at the posterior inferior glenohumeral capsule"
    ],
    "correct": 1,
    "explanation": "Speed's test involves resisting active shoulder flexion with the forearm supinated and elbow extended; pain in the bicipital groove indicates biceps tendinopathy or labral pathology."
  },
  {
    "id": "t1-b-006",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "The classic capsular pattern of restriction at the glenohumeral joint is characterized by:",
    "options": [
      "External rotation more limited than abduction, which is more limited than internal rotation",
      "Internal rotation more limited than abduction, which is more limited than external rotation",
      "Equal limitation of flexion and extension without loss of rotations across any arc",
      "Abduction strictly limited with full preserved external and internal rotation range"
    ],
    "correct": 0,
    "explanation": "According to Cyriax, the capsular pattern of the glenohumeral joint presents with external rotation being the most limited, followed by abduction, and then internal rotation (ER > ABD > IR)."
  },
  {
    "id": "t1-b-007",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "When assessing an athlete with suspected posterior shoulder instability, which special test provides the highest diagnostic specificity?",
    "options": [
      "Apprehension and Relocation test for anterior labral tears",
      "Posterior Jerk test / Kim test for posteroinferior labrum",
      "Neer Impingement test in full forward elevation plane",
      "Yergason's test for transverse humeral ligament laxity"
    ],
    "correct": 1,
    "explanation": "The Jerk test and Kim test are specific clinical tests designed to identify posteroinferior labral tears and posterior glenohumeral instability."
  },
  {
    "id": "t1-b-008",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "What does a positive Finkelstein's test classically indicate during an orthopedic evaluation of the wrist?",
    "options": [
      "Carpal Tunnel Syndrome involving compression of the median nerve",
      "De Quervain's tenosynovitis of APL and EPB tendons in the 1st compartment",
      "Scaphoid nonunion fracture at the base of the anatomical snuffbox",
      "Triangular Fibrocartilage Complex (TFCC) tear at the ulnar carpus"
    ],
    "correct": 1,
    "explanation": "Finkelstein's test (making a fist over the thumb and ulnarly deviating the wrist) elicits sharp pain in the first dorsal compartment, diagnostic of De Quervain's tenosynovitis (Abductor Pollicis Longus and Extensor Pollicis Brevis)."
  },
  {
    "id": "t1-b-009",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In the DeLorme progressive resistance exercise (PRE) protocol, how is the training load sequenced across 3 sets of 10 repetitions?",
    "options": [
      "Set 1 at 100% 10RM, Set 2 at 75% 10RM, Set 3 at 50% 10RM",
      "Set 1 at 50% 10RM, Set 2 at 75% 10RM, Set 3 at 100% 10RM",
      "Set 1 at 30% 10RM, Set 2 at 60% 10RM, Set 3 at 90% 10RM",
      "All three sets performed at 100% 10RM to absolute muscle failure"
    ],
    "correct": 1,
    "explanation": "The DeLorme method builds up load progressively: Set 1 = 10 reps @ 50% 10RM, Set 2 = 10 reps @ 75% 10RM, Set 3 = 10 reps @ 100% 10RM (in contrast to Oxford, which regresses from 100% to 50%)."
  },
  {
    "id": "t1-b-010",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "analytical",
    "text": "The Alfredson protocol for chronic mid-portion Achilles tendinopathy specifies which exercise regime?",
    "options": [
      "10 concentric hops twice daily on flat ground for 4 weeks with ice",
      "3 sets of 15 repetitions of eccentric heel drops twice daily for 12 weeks with knee straight and bent",
      "Passive calf stretching held for 60 seconds three times daily without load",
      "Low-intensity isometric calf raises performed exclusively once per week"
    ],
    "correct": 1,
    "explanation": "The Alfredson protocol consists of 180 eccentric heel drops daily (3x15 reps with straight knee and 3x15 reps with bent knee, twice daily) for 12 weeks, working through mild discomfort."
  },
  {
    "id": "t1-b-011",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "Why is an eccentric decline squat performed on a 25-degree wedge preferred over a flat-surface squat in patellar tendinopathy rehabilitation?",
    "options": [
      "It selectively unloads the patellar tendon and maximizes gluteal activation",
      "It eliminates gastrocnemius involvement and isolates higher patellar tendon load",
      "It prevents knee flexion beyond 30 degrees to avoid hip joint impingement",
      "It shifts all mechanical torque from the knee joint to the lumbar spine"
    ],
    "correct": 1,
    "explanation": "The 25° decline board limits ankle dorsiflexion requirement and trunk forward lean, directing greater load and mechanical strain onto the knee extensors and patellar tendon."
  },
  {
    "id": "t1-b-012",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "analytical",
    "text": "In Proprioceptive Neuromuscular Facilitation (PNF), which neurophysiological reflex mechanism is primarily responsible for muscle relaxation during the 'Contract-Relax' stretching technique?",
    "options": [
      "Reciprocal inhibition mediated by muscle spindle Ia afferents in agonists",
      "Autogenic inhibition mediated by Golgi Tendon Organ (GTO) Ib afferents",
      "Crossed extensor reflex activated by cutaneous nociceptive stimulation",
      "Gamma motor neuron co-activation increasing muscle stiffness during stretch"
    ],
    "correct": 1,
    "explanation": "Contract-Relax utilizes a maximal or submaximal contraction of the target muscle (antagonist to the desired movement) to activate Golgi Tendon Organs (Ib afferents), inducing autogenic inhibition and allowing greater subsequent stretch relaxation."
  },
  {
    "id": "t1-b-013",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "According to Maitland's manual therapy grading system, Grade I and II passive joint oscillations are primarily indicated for:",
    "options": [
      "Stretching chronic periarticular capsular contractures at end-range of motion",
      "Relieving acute joint pain and promoting synovial fluid hydrodynamic flow",
      "High-velocity manipulation to break joint adhesions under general anesthesia",
      "Correcting gross structural bony subluxations in acute dislocated joints"
    ],
    "correct": 1,
    "explanation": "Maitland Grade I (small amplitude at beginning of range) and Grade II (large amplitude within resistance-free range) are used to modulate pain and facilitate fluid movement, while Grades III and IV target mechanical stiffness."
  },
  {
    "id": "t1-b-014",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In tendon rehabilitation, heavy slow resistance (HSR) training is programmed with which parameter configuration?",
    "options": [
      "High repetitions (30+ reps) at 20% 1RM performed at explosive velocities",
      "Loads of 70–85% 1RM performed with 3-second concentric and 3-second eccentric tempos",
      "Pure 30-second passive stretches performed without resistance 5 times daily",
      "Isometric holds at 10% 1RM held for 2 seconds with rapid pulsing contractions"
    ],
    "correct": 1,
    "explanation": "Heavy Slow Resistance (HSR) training involves high loads (~70–85% 1RM or 6–8 RM) executed with a slow, controlled tempo (3 seconds up, 3 seconds down) 3 times per week to promote tendon collagen remodeling."
  },
  {
    "id": "t1-b-015",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "What is the key clinical advantage of utilizing isometric muscle contractions during the early reactive phase of tendinopathy?",
    "options": [
      "They produce significant cortical and tendon analgesic pain-relief without high compressive loads",
      "They completely break down mature type I collagen fibrils into granulation tissue",
      "They increase maximum speed of shortening and stretch-shortening cycle power output",
      "They maximize energetic depletion of glycogen within the muscle-tendon junction"
    ],
    "correct": 0,
    "explanation": "Ebonie Rio et al. demonstrated that heavy isometric holds (e.g., 5 x 45-second holds at 70% MVC) induce cortical inhibition and provide robust immediate analgesia in reactive tendinopathies without excessive compressive provocation."
  },
  {
    "id": "t1-b-016",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "During normal shoulder abduction, what is the classical ratio of glenohumeral to scapulothoracic motion (scapulohumeral rhythm)?",
    "options": [
      "1:1 ratio throughout the entire active range of motion across all planes",
      "2:1 overall ratio (2° glenohumeral motion for every 1° scapulothoracic rotation)",
      "1:3 ratio with scapular upward rotation dominating the initial 90 degrees",
      "4:1 ratio where scapula remains locked until 120 degrees of arm elevation"
    ],
    "correct": 1,
    "explanation": "Normal scapulohumeral rhythm operates at an overall 2:1 ratio (2° glenohumeral motion for every 1° scapulothoracic upward rotation beyond the setting phase)."
  },
  {
    "id": "t1-b-017",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "Which trio of muscles forms the essential 'upward rotator force couple' acting on the scapula during overhead arm elevation?",
    "options": [
      "Pectoralis major, Latissimus dorsi, and Teres major muscles",
      "Serratus anterior, Upper trapezius, and Lower trapezius muscles",
      "Rhomboid major, Levator scapulae, and Pectoralis minor muscles",
      "Subscapularis, Infraspinatus, and Teres minor muscles"
    ],
    "correct": 1,
    "explanation": "Upward rotation of the scapula is produced by the synergistic force couple of the Upper Trapezius (pulls upward/medial), Lower Trapezius (pulls downward/medial), and Serratus Anterior (pulls outward/anterior)."
  },
  {
    "id": "t1-b-018",
    "section": "B",
    "topic": "nutrition and research evidence",
    "subtopic": "Sports nutrition and clinical research methodology",
    "difficulty": "analytical",
    "text": "Based on electromyographic and kinesiological evidence, which rotator cuff muscle acts as the primary initiator of shoulder abduction from 0 to 15 degrees?",
    "options": [
      "Middle Deltoid muscle fibers",
      "Supraspinatus muscle tendon",
      "Subscapularis anterior belly",
      "Teres Major inferior tendon"
    ],
    "correct": 1,
    "explanation": "The supraspinatus initiates shoulder abduction during the first 0–15° and stabilizes the humeral head into the glenoid fossa before the deltoid gains optimal mechanical advantage."
  },
  {
    "id": "t1-b-019",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "During the 'screw-home mechanism' of the knee joint in an open kinetic chain (such as seated leg extension), which kinematic movement occurs during the final 15–20 degrees of extension?",
    "options": [
      "External rotation of the tibia relative to the fixed femur",
      "Internal rotation of the tibia relative to the fixed femur",
      "External rotation of the femur relative to the fixed tibia",
      "Posterior translation of the patella into the intercondylar notch"
    ],
    "correct": 0,
    "explanation": "In open kinetic chain knee extension, the tibia externally rotates on the fixed femur during the terminal 15–20° to lock the joint into maximal congruency, mediated by the unequal size of the femoral condyles."
  },
  {
    "id": "t1-b-020",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "Which muscle acts to 'unlock' the fully extended and locked knee joint during initiation of knee flexion from a standing weight-bearing position?",
    "options": [
      "Biceps femoris through tibial internal rotation",
      "Popliteus through external rotation of the femur on the fixed tibia",
      "Gastrocnemius through anterior tibial translation",
      "Sartorius through pure sagittal hip flexion"
    ],
    "correct": 1,
    "explanation": "In a closed-chain standing position, the popliteus muscle unlocks the knee by externally rotating the femur on the fixed tibia (or internally rotating the tibia in open chain)."
  },
  {
    "id": "t1-b-021",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In patellofemoral joint mechanics, during which range of closed kinetic chain knee flexion (e.g., squatting) is the patellofemoral joint contact stress and compressive force highest?",
    "options": [
      "0 to 15 degrees of knee flexion",
      "20 to 30 degrees of knee flexion",
      "60 to 90 degrees of knee flexion",
      "Pure full anatomical hyperextension"
    ],
    "correct": 2,
    "explanation": "In closed kinetic chain exercises, patellofemoral compressive force and joint contact stress increase significantly as knee flexion angles increase, peaking between 60° and 90°."
  },
  {
    "id": "t1-b-022",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "The calf muscle-tendon complex acting at the metatarsophalangeal joint during heel raise (plantarflexion) represents which class of anatomical lever?",
    "options": [
      "First-class lever in the human body",
      "Second-class lever in the human body",
      "Third-class lever in the human body",
      "Fourth-class lever in the human body"
    ],
    "correct": 1,
    "explanation": "During a standing calf raise, the fulcrum is at the MTP joints, the load (body weight) is transmitted through the talocrural joint in the middle, and effort is applied at the calcaneus by the Achilles tendon (Fulcrum - Load - Effort = Second-class lever)."
  },
  {
    "id": "t1-b-023",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In the standard 8-phase observational gait analysis system (Perry & Burnfield), during which phase does peak knee flexion of approximately 60 degrees occur?",
    "options": [
      "Loading response phase of stance",
      "Mid stance phase of single support",
      "Terminal stance phase of single support",
      "Initial swing phase of limb advancement"
    ],
    "correct": 3,
    "explanation": "Peak knee flexion (~60°) occurs during the Initial Swing phase to provide adequate foot clearance above the ground as the limb accelerates forward."
  },
  {
    "id": "t1-b-024",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "During normal human gait, what is the primary biomechanical function of the 'Loading Response' phase?",
    "options": [
      "Propulsion of the body mass forward into swing",
      "Shock absorption, weight acceptance, and preservation of forward progression",
      "Unrestricted passive knee hyperextension to lock the limb",
      "Maximal ankle dorsiflexion to elevate the center of mass"
    ],
    "correct": 1,
    "explanation": "Loading response (from initial contact to contralateral toe-off) provides shock absorption, weight acceptance, and forward momentum maintenance via controlled knee flexion (15°) and eccentric pretibial muscle contraction."
  },
  {
    "id": "t1-b-025",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "A patient walking with an uncompensated Trendelenburg gait demonstrates a pelvic drop on the unsupported (swing) side. This is caused by weakness of which muscle on the stance limb?",
    "options": [
      "Gluteus maximus extensor belly",
      "Gluteus medius and minimus abductors",
      "Adductor longus medial muscle",
      "Iliopsoas anterior flexor complex"
    ],
    "correct": 1,
    "explanation": "Weakness of the hip abductors (gluteus medius and minimus) of the stance leg prevents stabilization of the pelvis, causing the contralateral unsupported pelvis to drop during swing phase."
  },
  {
    "id": "t1-b-026",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "A 'High Steppage' pathological gait pattern, characterized by excessive hip and knee flexion during swing phase, is a classical compensation for:",
    "options": [
      "Quadriceps contracture preventing normal knee flexion",
      "Foot drop due to weakness of ankle dorsiflexors (deep peroneal nerve palsy)",
      "Gastrocnemius spasticity locking the foot in calcaneus position",
      "Hamstring weakness causing premature terminal knee extension"
    ],
    "correct": 1,
    "explanation": "Weakness or paralysis of the ankle dorsiflexors (Tibialis Anterior / deep peroneal nerve) causes foot drop, forcing the patient to excessively flex the hip and knee in a high-steppage pattern to clear the toes."
  },
  {
    "id": "t1-b-027",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In vertical ground reaction force (vGRF) profiling during normal walking, the vertical force curve classically displays:",
    "options": [
      "A single sharp parabolic peak reaching 3.5 times body weight at mid-stance",
      "A bimodal (two-peak) curve corresponding to weight acceptance and push-off",
      "A flat horizontal plateau remaining precisely at 0.5 times body weight throughout stance",
      "A linear downward trend from initial contact to swing with no peaks"
    ],
    "correct": 1,
    "explanation": "The vertical GRF curve during normal gait shows a characteristic double peak (M-shape): the first peak (~1.1–1.2 BW) occurs during loading response/weight acceptance and the second peak during terminal stance push-off."
  },
  {
    "id": "t1-b-028",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "According to evidence summaries in modern electrotherapy literature, for which clinical condition is Transcutaneous Electrical Nerve Stimulation (TENS) supported by the strongest clinical evidence?",
    "options": [
      "Reversal of structural joint deformities in osteoarthritis",
      "Acute postoperative and acute procedural pain management",
      "Long-term structural hypertrophy of denervated muscle fibers",
      "Eradication of deep intra-articular bacterial infections"
    ],
    "correct": 1,
    "explanation": "High-quality systematic reviews demonstrate that TENS has strong evidence for reducing acute postoperative and acute procedural pain, working via gate control and endogenous opioid mechanisms."
  },
  {
    "id": "t1-b-029",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "What does current evidence-based literature conclude regarding the efficacy of therapeutic ultrasound in chronic non-specific low back pain?",
    "options": [
      "It provides superior, definitive long-term disability reduction over all exercise therapies",
      "It demonstrates limited or no clinically meaningful benefit over sham/placebo",
      "It is contraindicated due to severe risks of spinal cord demyelination",
      "It is the single primary recommended modality in clinical practice guidelines"
    ],
    "correct": 1,
    "explanation": "International clinical practice guidelines and Cochrane reviews find that therapeutic ultrasound has little to no clinically meaningful benefit over placebo for chronic non-specific low back pain."
  },
  {
    "id": "t1-b-030",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "Extracorporeal Shockwave Therapy (ESWT) has established strong evidence-based indications in sports physiotherapy for which of the following conditions?",
    "options": [
      "Acute anterior cruciate ligament complete tears in youth",
      "Recalcitrant plantar fasciitis and calcific shoulder tendinopathy",
      "Acute grade III hamstring muscle belly avulsion injuries",
      "Severe systemic rheumatoid arthritis autoimmune flare-ups"
    ],
    "correct": 1,
    "explanation": "ESWT is strongly supported for chronic recalcitrant plantar fasciitis, calcific tendinitis of the shoulder, and Achilles/patellar tendinopathies by promoting mechanotransduction and tissue regeneration."
  },
  {
    "id": "t1-b-031",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "In Interferential Therapy (IFT), how is a low-frequency 'beat frequency' (e.g., 100 Hz) produced deep within biological tissues?",
    "options": [
      "By directly transmitting a high-voltage 100 Hz DC rectangular pulse from one electrode",
      "By the spatial intersection and constructive interference of two medium-frequency AC currents (e.g., 4000 Hz and 4100 Hz)",
      "By applying a laser beam synchronized with electromagnetic microwave radiation",
      "By rapid mechanical vibrations delivered through a piezoelectric crystal transducer"
    ],
    "correct": 1,
    "explanation": "IFT uses two medium-frequency out-of-phase currents (e.g., 4000 Hz and 4100 Hz) that intersect within the tissues, creating an amplitude-modulated beat frequency (100 Hz) that penetrates deeper with lower skin impedance."
  },
  {
    "id": "t1-b-032",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "What is the mandatory minimum motor criteria required for an upper extremity stroke patient to participate in Constraint-Induced Movement Therapy (CIMT)?",
    "options": [
      "Complete flaccidity with zero active motor response at the shoulder or hand",
      "At least 10° active wrist extension and 10° active extension of at least two fingers",
      "Normal 5/5 muscle power throughout the affected upper limb segments",
      "Presence of severe flexor synergy spasticity with Modified Ashworth Scale grade 4"
    ],
    "correct": 1,
    "explanation": "Standard CIMT inclusion criteria require a minimum of 10° active wrist extension, 10° active thumb abduction/extension, and 10° active extension in at least two additional digits."
  },
  {
    "id": "t1-b-033",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In neurorehabilitation, how is 'spasticity' differentiated clinically from 'rigidity' during passive movement assessment?",
    "options": [
      "Spasticity is velocity-dependent with a clasp-knife phenomenon; rigidity is velocity-independent with constant resistance",
      "Spasticity is velocity-independent lead-pipe resistance; rigidity increases only with rapid stretching",
      "Spasticity occurs only in cerebellar lesions; rigidity occurs exclusively in lower motor neuron lesions",
      "Spasticity affects only extensor muscles; rigidity affects only cranial nerve muscles"
    ],
    "correct": 0,
    "explanation": "Spasticity is a velocity-dependent increase in tonic stretch reflexes (clasp-knife type, upper motor neuron lesion), whereas rigidity is velocity-independent resistance throughout the range (lead-pipe or cogwheel in Parkinson's)."
  },
  {
    "id": "t1-b-034",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "According to modern motor learning principles, what type of practice schedule produces better long-term motor skill retention and transfer in sports rehabilitation?",
    "options": [
      "Massed blocked practice repeating the exact same skill without variation",
      "Random and variable distributed practice across multiple task variations",
      "Complete passive movement without active cognitive problem solving",
      "Immediate 100% continuous feedback after every single movement repetition"
    ],
    "correct": 1,
    "explanation": "Random and variable practice introduces contextual interference, which may slightly reduce immediate practice performance but significantly enhances long-term retention and transfer of motor skills."
  },
  {
    "id": "t1-b-035",
    "section": "B",
    "topic": "psychology and human development neuro-rehabilitation",
    "subtopic": "Neuro-rehabilitation concepts and motor relearning",
    "difficulty": "applied",
    "text": "In the Motor Relearning Programme (Carr & Shepherd) for stroke rehabilitation, what is the fundamental emphasis of training?",
    "options": [
      "Progressive resistance exercises using heavy free weights exclusively in supine",
      "Task-oriented training of context-specific functional actions in real environments",
      "Passive sensory stimulation without active voluntary movement attempts",
      "Immobilizing all unaffected extremities continuously for 24 hours a day"
    ],
    "correct": 1,
    "explanation": "Carr & Shepherd's Motor Relearning Programme emphasizes practicing missing components of functional tasks, active cognitive involvement, and context-specific task training in real environments."
  },
  {
    "id": "t1-b-036",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In fracture healing and rehabilitation, during which stage does woven bone get replaced by lamellar trabecular bone along mechanical lines of stress (Wolff's Law)?",
    "options": [
      "Inflammatory hematoma phase of acute vascular disruption",
      "Soft cartilaginous callus phase of chondrogenesis",
      "Hard bony callus / remodeling phase along lines of stress",
      "Avascular necrosis phase of bone resorption"
    ],
    "correct": 2,
    "explanation": "During the remodeling phase of fracture healing, woven bone is systematically remodeled into dense lamellar bone oriented along lines of stress in accordance with Wolff's Law."
  },
  {
    "id": "t1-b-037",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In McKenzie Mechanical Diagnosis and Therapy (MDT), the phenomenon of 'Centralization' during repeated movement testing is defined as:",
    "options": [
      "Referred or radiating distal pain moving progressively closer to the midline of the spine",
      "Pain radiating further down into the distal extremity and toes during extension",
      "A sudden increase in systemic body temperature during lumbar traction protocols",
      "Complete loss of deep tendon reflexes and motor power in the lower limb"
    ],
    "correct": 0,
    "explanation": "Centralization is the progressive reduction and abolition of distal, radiating pain toward the midline of the lumbar spine in response to specific directional movements, indicating good prognosis (Derangement syndrome)."
  },
  {
    "id": "t1-b-038",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "When performing neurodynamic tension testing of the lower extremity, performing a Straight Leg Raise (SLR) with ankle dorsiflexion and eversion (TED) specifically biases which nerve?",
    "options": [
      "Tibial nerve along the posterior compartment and sole",
      "Sural nerve along the posterolateral ankle border",
      "Common peroneal (fibular) nerve at the fibular neck",
      "Saphenous nerve along the medial joint line"
    ],
    "correct": 0,
    "explanation": "In neurodynamic testing: SLR + Dorsiflexion/Eversion (TED) biases the Tibial nerve; SLR + Dorsiflexion/Inversion (SID) biases the Sural nerve; SLR + Plantarflexion/Inversion (PIP) biases the Common Peroneal nerve."
  },
  {
    "id": "t1-b-039",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "What is the physiological mechanism behind the 'Hunting Reaction' (Lewis reaction) observed during prolonged local cryotherapy application?",
    "options": [
      "Continuous progressive vasoconstriction leading to tissue necrosis",
      "Cyclic alternating periods of vasodilation following initial vasoconstriction to protect tissue viability",
      "Permanent dilation of deep muscular arteries with rapid increase in local metabolism",
      "Immediate reflex inhibition of all cutaneous sensory thermoreceptors"
    ],
    "correct": 1,
    "explanation": "The Hunting Reaction is a transient, cyclic cold-induced vasodilation occurring after 15–20 minutes of tissue cooling at low temperatures (<10°C) to prevent local ischemic tissue damage."
  },
  {
    "id": "t1-b-040",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "analytical",
    "text": "Which of the following manual therapy techniques involves active physiological movement performed simultaneously by the patient while the therapist maintains an accessory glide (Mobilization with Movement - MWM)?",
    "options": [
      "Maitland passive oscillatory mobilization system",
      "Kaltenborn linear traction and gliding system",
      "Mulligan concept of Mobilization with Movement (MWM)",
      "Cyriax deep transverse friction massage method"
    ],
    "correct": 2,
    "explanation": "Brian Mulligan developed Mobilization with Movement (MWM), wherein the therapist applies a sustained pain-free accessory glide while the patient actively performs the previously restricted or painful movement."
  },
  {
    "id": "t1-c-001",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old elite track sprinter decelerates abruptly during the terminal swing phase of...",
    "difficulty": "analytical",
    "text": "On physical examination, there is acute point tenderness at the posterolateral thigh, painful resisted knee flexion at 30°, and pain on passive straight leg raise. Which specific muscle-tendon structure is most commonly injured in this biomechanical mechanism?",
    "options": [
      "Semimembranosus muscle belly at the medial thigh compartment",
      "Long head of biceps femoris at the proximal musculotendinous junction",
      "Adductor longus proximal tendon inserting on the pubic ramus",
      "Gracilis muscle insertion along the medial pes anserine"
    ],
    "correct": 1,
    "explanation": "Terminal swing involves rapid knee extension and hip flexion where the hamstrings undergo high-velocity eccentric lengthening to decelerate the forward-swinging shank; the long head of the biceps femoris experiences the greatest strain and is the most common site of sprinting strains.",
    "passageId": "cs-01",
    "passage": "A 23-year-old elite track sprinter decelerates abruptly during the terminal swing phase of a 100m sprint, clutching the back of his right thigh after hearing a distinct 'pop'."
  },
  {
    "id": "t1-c-002",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old elite track sprinter decelerates abruptly during the terminal swing phase of...",
    "difficulty": "analytical",
    "text": "As the sports performance analyst and physiotherapist designing this sprinter's criteria-based rehabilitation progression, which exercise represents the essential evidence-based modality to restore eccentric fascicle length and prevent recurrence?",
    "options": [
      "Passive static stretching on a massage table for 15 minutes daily",
      "Nordic Hamstring Exercise with progressive eccentric overload and high-speed running exposure",
      "Seated light leg extensions performed on a variable resistance machine",
      "Low-intensity continuous stationary cycling exclusively for 8 weeks"
    ],
    "correct": 1,
    "explanation": "The Nordic Hamstring Exercise increases eccentric hamstring strength and architectural fascicle length. Combined with progressive high-speed running exposure (>95% max velocity), it forms the gold standard for secondary prevention.",
    "passageId": "cs-01",
    "passage": "A 23-year-old elite track sprinter decelerates abruptly during the terminal swing phase of a 100m sprint, clutching the back of his right thigh after hearing a distinct 'pop'."
  },
  {
    "id": "t1-c-003",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old right-arm cricket fast bowler presents with progressive posterior shoulder p...",
    "difficulty": "analytical",
    "text": "Gonyometric examination reveals 125° of external rotation and 35° of internal rotation in the dominant shoulder (Total Motion Arc = 160°), compared to 100° ER and 65° IR in the non-dominant shoulder (Total Arc = 165°). What is the primary clinical diagnosis?",
    "options": [
      "Full-thickness Supraspinatus tendon avulsion with muscle retraction",
      "Glenohumeral Internal Rotation Deficit (GIRD) with posterior capsular tightness",
      "Adhesive Capsulitis (Frozen Shoulder) with global capsular restriction",
      "Multidirectional Glenohumeral Instability with inferior sulcus sign"
    ],
    "correct": 1,
    "explanation": "The bowler exhibits Glenohumeral Internal Rotation Deficit (GIRD >18-20° loss of IR compared to contralateral side) with preserved total arc of motion, typical of repetitive throwing osseous and posterior soft-tissue adaptations.",
    "passageId": "cs-02",
    "passage": "A 24-year-old right-arm cricket fast bowler presents with progressive posterior shoulder pain during the late cocking and deceleration phases of bowling."
  },
  {
    "id": "t1-c-004",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old right-arm cricket fast bowler presents with progressive posterior shoulder p...",
    "difficulty": "analytical",
    "text": "Which targeted physiotherapeutic stretching intervention is most effective for addressing the posterior capsular and rotator cuff tightness in this fast bowler?",
    "options": [
      "Overhead triceps static wall stretching in standing position",
      "Side-lying 'Sleeper stretch' and cross-body adduction stretching with scapular stabilization",
      "Doorway pectoralis major stretching in full external rotation",
      "Passive shoulder hanging from an overhead pull-up bar"
    ],
    "correct": 1,
    "explanation": "The Sleeper stretch (side-lying internal rotation at 90° abduction) and cross-body posterior capsule stretching with manual scapular stabilization are evidence-based interventions to restore internal rotation in GIRD.",
    "passageId": "cs-02",
    "passage": "A 24-year-old right-arm cricket fast bowler presents with progressive posterior shoulder pain during the late cocking and deceleration phases of bowling."
  },
  {
    "id": "t1-c-005",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 19-year-old female basketball player reports insidious onset of retro-patellar and perip...",
    "difficulty": "analytical",
    "text": "Examination reveals no joint effusion, negative Lachman and McMurray tests, but notable reproduction of pain during a single-leg squat with dynamic knee valgus. What is the most likely diagnosis?",
    "options": [
      "Medial Meniscus complex tear with mechanical locking",
      "Patellofemoral Pain Syndrome (PFPS) with dynamic maltracking",
      "Infrapatellar fat pad impingement with patellar tendon rupture",
      "Pes anserine bursitis with stress fracture of the tibia"
    ],
    "correct": 1,
    "explanation": "Peripatellar pain aggravated by loading flexed knee activities (stairs, squats) and sitting, with dynamic valgus and no intra-articular effusion, is the classic hallmark presentation of Patellofemoral Pain Syndrome (PFPS).",
    "passageId": "cs-03",
    "passage": "A 19-year-old female basketball player reports insidious onset of retro-patellar and peripatellar knee pain for 2 months, exacerbated by stair descent, squatting, and prolonged sitting ('theater/movie sign')."
  },
  {
    "id": "t1-c-006",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 19-year-old female basketball player reports insidious onset of retro-patellar and perip...",
    "difficulty": "analytical",
    "text": "According to international clinical consensus guidelines on Patellofemoral Pain Syndrome, what is the core recommended initial conservative management strategy?",
    "options": [
      "Strict 6-week cast immobilization followed by surgical lateral release",
      "Targeted combined hip abductor/gluteal strengthening and quadriceps (VMO) retraining",
      "High-dose ultrasound therapy without active therapeutic exercise",
      "Heavy knee extensions strictly between 60° and 90° seated on an open chain machine"
    ],
    "correct": 1,
    "explanation": "International consensus guidelines strongly recommend multimodal exercise therapy combining hip strengthening (gluteus medius/maximus) and quadriceps strengthening to correct dynamic maltracking in PFPS.",
    "passageId": "cs-03",
    "passage": "A 19-year-old female basketball player reports insidious onset of retro-patellar and peripatellar knee pain for 2 months, exacerbated by stair descent, squatting, and prolonged sitting ('theater/movie sign')."
  },
  {
    "id": "t1-c-007",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 29-year-old competitive tennis player reports lateral elbow pain aggravated during one-h...",
    "difficulty": "analytical",
    "text": "Palpation demonstrates focal tenderness 1 cm distal to the lateral epicondyle. Resisted wrist extension with the elbow in extension and resisted middle finger extension (Maudsley's test) reproduce familiar pain. What is the most likely underlying structural pathology?",
    "options": [
      "Tendinopathy of the Extensor Carpi Radialis Brevis (ECRB) origin",
      "Medial epicondyle common flexor tendon micro-tear lesion",
      "Ulnar collateral ligament anterior bundle sprain at the elbow",
      "Radial head acute undisplaced stress fracture"
    ],
    "correct": 0,
    "explanation": "Lateral epicondylalgia ('Tennis Elbow') primarily involves degenerative angiofibroblastic tendinosis of the Extensor Carpi Radialis Brevis (ECRB) origin, provoked by resisted wrist and 3rd digit extension.",
    "passageId": "cs-04",
    "passage": "A 29-year-old competitive tennis player reports lateral elbow pain aggravated during one-handed backhand strokes."
  },
  {
    "id": "t1-c-008",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 29-year-old competitive tennis player reports lateral elbow pain aggravated during one-h...",
    "difficulty": "analytical",
    "text": "In rehabilitating this athlete's lateral epicondylalgia, which progressive loading exercise utilizing a flexible rubber bar (Tyler Twist) or dumbbell has shown strong clinical efficacy?",
    "options": [
      "Isolated passive wrist flexion stretches without active loading",
      "Eccentric-concentric wrist extensor loading with progressive resistance",
      "High-frequency wrist pronation drills to fatigue",
      "Complete wrist splinting for 3 months with complete rest"
    ],
    "correct": 1,
    "explanation": "Progressive eccentric strengthening of the wrist extensors (e.g., the Tyler Twist protocol using a flexible resistance bar) stimulates collagen remodeling and load tolerance at the ECRB origin.",
    "passageId": "cs-04",
    "passage": "A 29-year-old competitive tennis player reports lateral elbow pain aggravated during one-handed backhand strokes."
  },
  {
    "id": "t1-c-009",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old soccer player sustains an acute ankle injury after landing on an opponent's...",
    "difficulty": "analytical",
    "text": "There is immediate localized swelling and tenderness over the anterolateral aspect of the lateral malleolus. Anterior drawer test is positive, while talar tilt test in neutral is mild. Which ligament is primarily torn?",
    "options": [
      "Deltoid ligament superficial tibiotalar fibers",
      "Anterior Talofibular Ligament (ATFL) in isolation",
      "Posterior Talofibular Ligament (PTFL) deep fibers",
      "Anterior Inferior Tibiofibular Ligament (AITFL)"
    ],
    "correct": 1,
    "explanation": "The Anterior Talofibular Ligament (ATFL) is the weakest and most commonly injured lateral ankle ligament, taut in plantarflexion and inversion, and evaluated by the anterior drawer test.",
    "passageId": "cs-05",
    "passage": "An 18-year-old soccer player sustains an acute ankle injury after landing on an opponent's foot, forcing the ankle into sudden inversion and plantarflexion."
  },
  {
    "id": "t1-c-010",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old soccer player sustains an acute ankle injury after landing on an opponent's...",
    "difficulty": "analytical",
    "text": "Following resolution of acute pain and swelling in this soccer player, which functional training component is most critical to prevent chronic ankle instability and recurrent sprains?",
    "options": [
      "Continuous passive calf stretching without weight bearing",
      "Neuromuscular balance, perturbation, and dynamic proprioceptive training (e.g., Y-Balance / wobble board)",
      "Rigid surgical casting of the ankle joint for 6 months",
      "Exclusively swimming freestyle with no ground-based drills"
    ],
    "correct": 1,
    "explanation": "Proprioceptive and neuromuscular balance training (single-leg stance, unstable surfaces, perturbation drills) restores mechanoreceptor feedback and peroneus longus reaction time, preventing chronic instability.",
    "passageId": "cs-05",
    "passage": "An 18-year-old soccer player sustains an acute ankle injury after landing on an opponent's foot, forcing the ankle into sudden inversion and plantarflexion."
  },
  {
    "id": "t1-c-011",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 13-year-old competitive junior badminton player presents with bilateral heel pain aggrav...",
    "difficulty": "analytical",
    "text": "Physical examination reveals focal tenderness on mediolateral compression of the posterior calcaneus (positive Squeeze test) and tight gastrocnemius-soleus complex. Plain X-rays show fragmentation and increased density of the calcaneal apophysis consistent with normal growth. What is the diagnosis?",
    "options": [
      "Plantar Fasciitis with chronic subcalcaneal heel spur",
      "Sever's Disease (Calcaneal Apophysitis of youth)",
      "Achilles Tendon complete mid-portion rupture",
      "Tarsal Tunnel Syndrome with tibial nerve entrapment"
    ],
    "correct": 1,
    "explanation": "Sever's disease (calcaneal apophysitis) is a traction apophysitis at the insertion of the Achilles tendon in growing adolescents, marked by heel pain with jumping/running and a positive calcaneal squeeze test.",
    "passageId": "cs-06",
    "passage": "A 13-year-old competitive junior badminton player presents with bilateral heel pain aggravated by running and jumping, which subsides with rest."
  },
  {
    "id": "t1-c-012",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 13-year-old competitive junior badminton player presents with bilateral heel pain aggrav...",
    "difficulty": "analytical",
    "text": "What is the most appropriate initial physiotherapy management plan for this young athlete with Sever's disease?",
    "options": [
      "Immediate surgical excision of the calcaneal apophysis",
      "Load modification, temporary heel lifts/cushions, and gentle calf stretching/strengthening",
      "High-impact plyometric jumping drills daily to force bone ossification",
      "Complete bed rest and permanent cessation of all future sports participation"
    ],
    "correct": 1,
    "explanation": "Sever's disease is self-limiting and managed conservatively with training load reduction, shock-absorbing heel cups or slight heel lifts (to reduce Achilles traction), and progressive calf stretching and strengthening.",
    "passageId": "cs-06",
    "passage": "A 13-year-old competitive junior badminton player presents with bilateral heel pain aggravated by running and jumping, which subsides with rest."
  },
  {
    "id": "t1-c-013",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old marathon runner presents with persistent pain along the lower inner shin aft...",
    "difficulty": "analytical",
    "text": "On examination, there is diffuse tenderness extending over a 6 cm region along the posteromedial border of the distal third of the tibia, but no single pinpoint focal bony tenderness or palpable callus. Plain radiographs are normal. What is the most likely condition?",
    "options": [
      "Anterior compartment syndrome with nerve ischemia",
      "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints')",
      "Acute Tibial Cortical Stress Fracture with complete displacement",
      "Deep vein thrombosis of the posterior tibial vein"
    ],
    "correct": 1,
    "explanation": "Diffuse tenderness (>5 cm) along the posteromedial tibial border without focal pinpoint tenderness is characteristic of Medial Tibial Stress Syndrome (MTSS), whereas focal pinpoint tenderness (<2 cm) points to a stress fracture.",
    "passageId": "cs-07",
    "passage": "A 21-year-old marathon runner presents with persistent pain along the lower inner shin after abruptly increasing weekly mileage from 40 km to 80 km."
  },
  {
    "id": "t1-c-014",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old marathon runner presents with persistent pain along the lower inner shin aft...",
    "difficulty": "analytical",
    "text": "If this runner's symptoms had shown focal pinpoint tenderness over the anterior tibial cortex with severe night pain and pain on single-leg hopping, which imaging modality is gold standard to confirm a suspected bone stress injury?",
    "options": [
      "Plain lateral radiograph immediately within 24 hours of symptom onset",
      "Magnetic Resonance Imaging (MRI) showing bone marrow edema and periosteal signal",
      "Diagnostic therapeutic ultrasound scanning of the soft tissue",
      "Dual-energy X-ray absorptiometry (DEXA) total body scan"
    ],
    "correct": 1,
    "explanation": "MRI is the gold standard imaging modality for detecting early bone stress injuries and stress fractures, revealing bone marrow edema and periosteal reaction with high sensitivity and specificity.",
    "passageId": "cs-07",
    "passage": "A 21-year-old marathon runner presents with persistent pain along the lower inner shin after abruptly increasing weekly mileage from 40 km to 80 km."
  },
  {
    "id": "t1-c-015",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An elite female footballer is evaluated at 9 months following ACL reconstruction (bone-pat...",
    "difficulty": "analytical",
    "text": "As part of the multidisciplinary testing battery for return-to-sport clearance, which objective performance benchmark must be met across functional hop test batteries (Single hop, Triple hop, Crossover hop, 6m Timed hop)?",
    "options": [
      "Limb Symmetry Index (LSI) of at least 50% compared to uninjured limb",
      "Limb Symmetry Index (LSI) of ≥90% across all hop tests and quadriceps strength testing",
      "Ability to run 1 km at walking pace with mild subjective knee giving way",
      "Pain-free passive knee flexion without requiring any objective strength tests"
    ],
    "correct": 1,
    "explanation": "Current return-to-sport consensus criteria mandate a Limb Symmetry Index (LSI) of at least 90% (or 95% in high-demand pivoting sports) on functional hop test batteries and isokinetic quadriceps/hamstring strength.",
    "passageId": "cs-08",
    "passage": "An elite female footballer is evaluated at 9 months following ACL reconstruction (bone-patellar tendon-bone autograft)."
  },
  {
    "id": "t1-c-016",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An elite female footballer is evaluated at 9 months following ACL reconstruction (bone-pat...",
    "difficulty": "analytical",
    "text": "In addition to objective physical and biomechanical tests, which psychological readiness outcome measure is widely recommended prior to clearing an athlete for unrestricted competition post-ACL reconstruction?",
    "options": [
      "ACL-Return to Sport after Injury (ACL-RSI) questionnaire score (>60–65%)",
      "Minnesota Multiphasic Personality Inventory (MMPI) full assessment",
      "Visual Analogue Mood Scale for clinical depression only",
      "Wechsler Adult Intelligence Scale (WAIS) cognitive score"
    ],
    "correct": 0,
    "explanation": "The ACL-Return to Sport after Injury (ACL-RSI) scale quantifies psychological readiness, confidence, and fear of re-injury; scores above 60–65% correlate with successful return to sport and reduced secondary injury rates.",
    "passageId": "cs-08",
    "passage": "An elite female footballer is evaluated at 9 months following ACL reconstruction (bone-patellar tendon-bone autograft)."
  },
  {
    "id": "t1-c-017",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: During video-based motion analysis of a drop-vertical jump in a female volleyball athlete,...",
    "difficulty": "analytical",
    "text": "Which biomechanical and muscular deficit is primarily responsible for this uncontrolled landing mechanic?",
    "options": [
      "Hypertrophy and excessive strength of the gastrocnemius muscle",
      "Weakness and delayed neuromuscular firing of the Gluteus Medius and hip external rotators",
      "Excessive tightness of the posterior cruciate ligament complex",
      "Increased ankle dorsiflexion range of motion beyond 45 degrees"
    ],
    "correct": 1,
    "explanation": "Dynamic knee valgus during landing is primarily driven by deficits in hip abductor (gluteus medius) and external rotator neuromuscular control, coupled with core/trunk instability, increasing non-contact ACL injury risk.",
    "passageId": "cs-09",
    "passage": "During video-based motion analysis of a drop-vertical jump in a female volleyball athlete, the analyst observes marked dynamic knee valgus (medial knee collapse), hip adduction, and internal rotation upon landing under fatigue."
  },
  {
    "id": "t1-c-018",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: During video-based motion analysis of a drop-vertical jump in a female volleyball athlete,...",
    "difficulty": "analytical",
    "text": "Which specific targeted training intervention should be implemented to correct this athlete's dynamic knee valgus landing pattern?",
    "options": [
      "Isolated passive hamstring stretching while lying supine on a table",
      "Neuromuscular jump-landing mechanics training with external feedback and hip abductor strengthening",
      "Increasing jumping volume without correcting movement quality",
      "Applying rigid knee braces and eliminating all lower body strength exercises"
    ],
    "correct": 1,
    "explanation": "Evidence-based injury prevention programs (e.g., FIFA 11+, neuromuscular warm-ups) utilize jump-landing technique training, plyometrics with knee alignment cues, and gluteal/core strengthening to eliminate valgus collapse.",
    "passageId": "cs-09",
    "passage": "During video-based motion analysis of a drop-vertical jump in a female volleyball athlete, the analyst observes marked dynamic knee valgus (medial knee collapse), hip adduction, and internal rotation upon landing under fatigue."
  },
  {
    "id": "t1-c-019",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old cricket fast bowler presents with acute-on-chronic focal low back pain on h...",
    "difficulty": "analytical",
    "text": "On examination, extension and ipsilateral rotation reproduce sharp localized pain, and the single-leg hyperextension (Stork standing) test is strongly positive. What is the primary suspected diagnosis?",
    "options": [
      "Acute thoracic disc herniation with cord compression",
      "Lumbar Spondylolysis (stress fracture of the pars interarticularis)",
      "Sciatic nerve entrapment in the piriformis muscle belly",
      "Sacroiliac joint anterior dislocation"
    ],
    "correct": 1,
    "explanation": "Lumbar spondylolysis (pars interarticularis stress fracture, most commonly at L4/L5) is prevalent in young fast bowlers due to repetitive lumbar hyperextension, lateral flexion, and rotation during bowling delivery; the Stork test is classical.",
    "passageId": "cs-10",
    "passage": "An 18-year-old cricket fast bowler presents with acute-on-chronic focal low back pain on his non-bowling arm side, exacerbated during the front-foot contact and delivery stride."
  },
  {
    "id": "t1-c-020",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old cricket fast bowler presents with acute-on-chronic focal low back pain on h...",
    "difficulty": "analytical",
    "text": "What is the core rehabilitation priority in the conservative management of this young fast bowler with active spondylolysis?",
    "options": [
      "Aggressive hyperextension spinal stretches and continuous heavy bowling",
      "Relative rest from aggravating extension/rotation loads, deep lumbo-pelvic core stabilization in neutral spine, and gradual reconditioning",
      "Complete bed rest for 6 months with zero physical movement permitted",
      "High-velocity spinal manipulative thrusts directly into painful hyperextension"
    ],
    "correct": 1,
    "explanation": "Management requires cessation of aggravating hyperextension/bowling loads to allow bony healing, followed by core stabilization in neutral spine (transversus abdominis, multifidus), hip mobility, and gradual bowling action review.",
    "passageId": "cs-10",
    "passage": "An 18-year-old cricket fast bowler presents with acute-on-chronic focal low back pain on his non-bowling arm side, exacerbated during the front-foot contact and delivery stride."
  },
  {
    "id": "t2-a1-001",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "foundational",
    "text": "In a block periodization model (Issurin), what is the primary training objective of the 'Accumulation' mesocycle block?",
    "options": [
      "Developing basic motor abilities like aerobic endurance, general strength, and movement foundation",
      "Fine-tuning sport-specific tactical decision-making at maximal competition speeds in simulated match play",
      "Executing taper protocols and rapid unloading immediately before major international tournaments",
      "Maximizing explosive power output through high-velocity contrast training and complex methods exclusively"
    ],
    "correct": 0,
    "explanation": "The Accumulation block focuses on high-volume, moderate-intensity training targeting fundamental athletic qualities (aerobic capacity, basic strength, hypertrophy) with minimal residual fatigue interference."
  },
  {
    "id": "t2-a1-002",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "applied",
    "text": "Post-Activation Performance Enhancement (PAPE) is most effectively elicited when a high-load conditioning contraction (e.g., 85–90% 1RM squat) is followed by a power activity after a rest interval of approximately:",
    "options": [
      "10 to 30 seconds following the heavy conditioning contraction",
      "4 to 8 minutes following the heavy conditioning contraction",
      "20 to 30 minutes following the heavy conditioning contraction",
      "60 to 90 minutes following the heavy conditioning contraction"
    ],
    "correct": 1,
    "explanation": "PAPE requires an optimal balance between post-activation potentiation and fatigue dissipation, which typically peaks between 4 to 8 minutes following the heavy conditioning stimulus."
  },
  {
    "id": "t2-a1-003",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "analytical",
    "text": "According to Henneman's Size Principle of motor unit recruitment, in what sequence are motor units recruited during progressive muscular contraction?",
    "options": [
      "High-threshold fast-twitch Type IIx motor units are recruited first, followed by Type I units",
      "Small, low-threshold Type I slow-twitch motor units are recruited first, followed by larger Type II units",
      "All motor units regardless of threshold fire simultaneously in an all-or-none explosive pattern",
      "Motor units are recruited completely randomly based on local intramuscular temperature and tissue pH"
    ],
    "correct": 1,
    "explanation": "Henneman's size principle states that smaller motor units with low axon diameters and low recruitment thresholds (Type I slow twitch) are recruited first, followed progressively by larger, high-threshold Type II units as force demands increase."
  },
  {
    "id": "t2-a1-004",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "foundational",
    "text": "When structuring an individual resistance training workout session for an athlete, what is the recommended exercise sequencing order?",
    "options": [
      "Single-joint isolation exercises first, followed by multi-joint power exercises, then core training",
      "High-skill multi-joint power exercises first, followed by multi-joint core strength, then assistance exercises",
      "High-intensity aerobic interval running first, followed immediately by maximal 1RM heavy deadlifts",
      "Abdominal and trunk fatiguing exercises first, followed by overhead Olympic snatch power lifts"
    ],
    "correct": 1,
    "explanation": "NSCA guidelines state that explosive power exercises requiring high neural coordination (e.g., cleans, snatches) should be performed first when the neuromuscular system is fresh, followed by non-power core structural exercises, and lastly single-joint assistance exercises."
  },
  {
    "id": "t2-a1-005",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "applied",
    "text": "Which combination of physiological mechanisms is identified as the primary stimulus driving exercise-induced skeletal muscle hypertrophy?",
    "options": [
      "Mechanical tension, muscle damage, and metabolic stress during loaded muscular contractions",
      "Passive dehydration, hyperventilation, and glycogen depletion during prolonged fasting states",
      "Elevated resting cortisol, motor unit inhibition, and joint immobilization across consecutive weeks",
      "Decreased satellite cell proliferation and reduced ribosomal biogenesis during complete detraining"
    ],
    "correct": 0,
    "explanation": "Schoenfeld established that mechanical tension (high force across sarcomeres), micro-damage to myofibers, and metabolic accumulation (metabolite buildup) are the three primary drivers of muscular hypertrophy."
  },
  {
    "id": "t2-a1-006",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "analytical",
    "text": "What is the key rate-limiting regulatory enzyme in anaerobic glycolysis responsible for catalyzing the conversion of fructose-6-phosphate to fructose-1,6-bisphosphate?",
    "options": [
      "Hexokinase enzyme in skeletal muscle cytoplasm",
      "Phosphofructokinase-1 (PFK-1) in anaerobic glycolysis",
      "Lactate dehydrogenase (LDH) inside cardiac myocytes",
      "Pyruvate kinase enzyme during the terminal glycolytic step"
    ],
    "correct": 1,
    "explanation": "Phosphofructokinase-1 (PFK-1) is the primary rate-limiting and allosterically regulated enzyme in glycolysis, stimulated by elevated AMP/ADP and inhibited by high intracellular ATP and citrate levels."
  },
  {
    "id": "t2-a1-007",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "foundational",
    "text": "How is the Onset of Blood Lactate Accumulation (OBLA) standardly defined in exercise physiology laboratory testing?",
    "options": [
      "The point where blood lactate first rises above resting baseline (~1.0 mmol/L) during exercise",
      "The specific exercise intensity corresponding to a fixed blood lactate concentration of 4.0 mmol/L",
      "The point at which blood lactate levels drop to absolute zero during maximal aerobic treadmill testing",
      "The maximum lactate level observed exactly 30 minutes following complete physical exercise cessation"
    ],
    "correct": 1,
    "explanation": "OBLA is standardly defined as the workload or oxygen consumption corresponding to a fixed blood lactate concentration of 4.0 mmol/L, representing severe exponential accumulation of metabolic byproducts."
  },
  {
    "id": "t2-a1-008",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "applied",
    "text": "In untrained individuals, stroke volume during incremental upright exercise typically increases until what percentage of VO2max before reaching a plateau?",
    "options": [
      "10% to 20% of VO2max during low-intensity warmup walking",
      "40% to 50% of VO2max during moderate-intensity graded exercise",
      "85% to 90% of VO2max during near-maximal anaerobic sprinting",
      "Continues to increase linearly up to 100% of VO2max without ever plateauing"
    ],
    "correct": 1,
    "explanation": "In untrained individuals, stroke volume increases progressively during graded upright exercise and plateaus at approximately 40–50% of VO2max, with further increases in cardiac output driven primarily by heart rate."
  },
  {
    "id": "t2-a1-009",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "analytical",
    "text": "What physiological adaptation is responsible for the chronic expansion of oxygen carrying capacity following several weeks of living and training at high altitude?",
    "options": [
      "Decreased bone marrow production of reticulocytes and suppression of erythropoiesis",
      "Hypoxia-induced renal release of erythropoietin (EPO) leading to increased red cell mass and hematocrit",
      "Permanent narrowing of pulmonary alveolar surface area to prevent atmospheric gas diffusion",
      "Suppression of 2,3-bisphosphoglycerate within circulating erythrocytes and lower minute ventilation"
    ],
    "correct": 1,
    "explanation": "Prolonged exposure to altitude-induced hypoxia triggers renal synthesis of erythropoietin (EPO), stimulating bone marrow erythropoiesis, expanding red blood cell volume, and increasing hemoglobin concentration."
  },
  {
    "id": "t2-a1-010",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "foundational",
    "text": "A Respiratory Exchange Ratio (RER) of 0.70 measured during submaximal steady-state indirect calorimetry indicates that energy is being derived almost entirely from:",
    "options": [
      "100% carbohydrate oxidation within active glycolytic fibers",
      "100% lipid (fat) oxidation within oxidative mitochondrial pathways",
      "50% protein catabolism and 50% carbohydrate oxidation in skeletal muscle",
      "Anaerobic breakdown of intramuscular phosphocreatine stores exclusively"
    ],
    "correct": 1,
    "explanation": "An RER of 0.70 reflects pure fat oxidation (because fatty acid combustion requires more oxygen relative to CO2 produced), whereas an RER of 1.00 reflects 100% carbohydrate oxidation."
  },
  {
    "id": "t2-a1-011",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "applied",
    "text": "During heat acclimatization in elite endurance athletes, which sweating adaptation is typically observed within 10 to 14 days?",
    "options": [
      "Delayed onset of sweating with significantly increased sodium concentration in sweat",
      "Earlier onset of sweating at a lower core temperature with more dilute (sodium-sparing) sweat",
      "Complete suppression of eccrine sweat gland activity to conserve circulating plasma volume",
      "Increased sweat chloride losses resulting in severe voluntary hypohydration and hyperthermia"
    ],
    "correct": 1,
    "explanation": "Heat acclimatization improves thermoregulation by triggering earlier sweating onset, higher sweat rates, and aldosterone-mediated conservation of sodium and chloride (more dilute sweat)."
  },
  {
    "id": "t2-a1-012",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "analytical",
    "text": "What is the primary dietary trigger responsible for maximally stimulating the mTORC1 signaling pathway to drive Muscle Protein Synthesis (MPS) following exercise?",
    "options": [
      "High dietary sodium intake exceeding 5000 mg per day across all training sessions",
      "Intake of approximately 2 to 3 grams of the essential amino acid Leucine within a complete protein dose",
      "Large doses of non-essential amino acids consumed in the complete absence of total caloric intake",
      "Exclusive consumption of saturated long-chain fatty acids immediately before evening sleep"
    ],
    "correct": 1,
    "explanation": "Leucine operates as a nutrient trigger that directly activates the mammalian target of rapamycin complex 1 (mTORC1); consuming ~2–3g of leucine (found in ~20–30g of high-quality protein like whey) maximally stimulates MPS."
  },
  {
    "id": "t2-a1-013",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "foundational",
    "text": "In a classical creatine monohydrate loading protocol, what dosage schedule is widely used to rapidly saturate intramuscular phosphocreatine stores?",
    "options": [
      "1 gram per day taken continuously for 30 consecutive days with meals",
      "20 grams per day (divided into 4 x 5g doses) for 5–7 days, followed by 3–5 grams per day maintenance",
      "50 grams per day taken in a single massive bolus before workouts for 2 consecutive weeks",
      "10 grams every hour for 24 continuous hours without any daily maintenance dose"
    ],
    "correct": 1,
    "explanation": "Standard creatine loading involves consuming 20 g/day (divided into four 5g servings) for 5–7 days to saturate muscle creatine stores by ~20%, followed by a daily maintenance dose of 3–5 g/day."
  },
  {
    "id": "t2-a1-014",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "applied",
    "text": "What is the recommended sodium concentration in commercial sports drinks designed for prolonged exercise to facilitate intestinal water absorption and prevent hyponatremia?",
    "options": [
      "10 to 50 mg per liter (or 1–5 mmol/L) for ultra-hypotonic hydration",
      "200 to 300 mg per liter (or 20–30 mmol/L) to optimize fluid retention",
      "1500 to 2000 mg per liter (or 150–200 mmol/L) for hypertonic recovery",
      "Sodium should be completely excluded from all endurance sports beverages"
    ],
    "correct": 1,
    "explanation": "ACSM guidelines recommend 200–300 mg/L (or 20–30 mEq/L) of sodium in sports drinks for endurance exercise to stimulate thirst, optimize SGLT1 glucose-water co-transport, and maintain plasma sodium."
  },
  {
    "id": "t2-a1-015",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "analytical",
    "text": "Dietary nitrate supplementation (e.g., concentrated beetroot juice) enhances submaximal endurance performance primarily through which biochemical mechanism?",
    "options": [
      "Conversion of nitrate to nitric oxide (NO), reducing the oxygen cost of submaximal ATP synthesis and enhancing vasodilation",
      "Direct stimulation of glycogen phosphorylase in type IIb glycolytic fibers during explosive anaerobic sprinting",
      "Inhibition of renal tubular water reabsorption to induce acute competitive weight loss in combat sports",
      "Blockade of peripheral adenosine receptors in the central nervous system to increase resting vigilance"
    ],
    "correct": 0,
    "explanation": "Dietary nitrate (NO3-) is reduced to nitrite (NO2-) and then to nitric oxide (NO), which improves endothelial vasodilation, increases muscle blood flow, and reduces the VO2 cost of submaximal exercise by improving mitochondrial efficiency."
  },
  {
    "id": "t2-a1-016",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "foundational",
    "text": "The classic 'Female Athlete Triad' syndrome consists of the interrelated spectrum of which three clinical components?",
    "options": [
      "High protein intake, renal hypertrophy, and excessive muscle mass accumulation in weight categories",
      "Hypoglycemia, iron overload, and hyperthyroidism resulting from unaccustomed supplement use",
      "Low energy availability (with or without eating disorder), menstrual dysfunction, and low bone mineral density",
      "Patellar tendinopathy, hamstring strain, and ankle sprain recurrence in jumping athletes"
    ],
    "correct": 2,
    "explanation": "The Female Athlete Triad is defined by the interrelationship of three components: Low Energy Availability (with or without disordered eating), Menstrual Dysfunction (amenorrhea/oligomenorrhea), and Low Bone Mineral Density (osteoporosis/osteopenia)."
  },
  {
    "id": "t2-a1-017",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "applied",
    "text": "When performing skinfold caliper measurements according to standard kinanthropometry guidelines (ISAK), what is the standardized reading delay after caliper jaws are released onto the skinfold?",
    "options": [
      "Immediately within 0.1 seconds before any dynamic tissue compression begins",
      "Approximately 2 seconds after the caliper pressure is fully applied to the fold",
      "Exactly 15 seconds after interstitial tissue fluids are fully squeezed out",
      "1 full minute after continuous maximal manual pinching of the adipose layer"
    ],
    "correct": 1,
    "explanation": "ISAK standardized protocols require reading the caliper dial 2 seconds after the full spring pressure is applied to allow initial dynamic compression while preventing progressive tissue fluid displacement."
  },
  {
    "id": "t2-a1-018",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "analytical",
    "text": "What is the standard mid-parental height calculation formula used to estimate the adult target height for a female child?",
    "options": [
      "[Father's height (cm) + Mother's height (cm) + 13 cm] / 2",
      "[Father's height (cm) - 13 cm + Mother's height (cm)] / 2",
      "[Father's height (cm) + Mother's height (cm)] / 2",
      "[Father's height (cm) + Mother's height (cm) * 0.92] / 2"
    ],
    "correct": 1,
    "explanation": "Tanner's mid-parental formula for girls adjusts for the average 13 cm adult sex difference: Target Height = [(Father's height - 13 cm) + Mother's height] / 2."
  },
  {
    "id": "t2-a1-019",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "foundational",
    "text": "In anthropometric body proportionality, a high 'Biacromial-to-Bicristal breadth ratio' indicates an athlete with:",
    "options": [
      "Broad shoulders relative to narrow pelvic hips (inverted-triangle athletic build)",
      "Extremely wide hips relative to narrow shoulders (pear-shaped morphological build)",
      "Equal width across shoulders and hips with disproportionately short torso length",
      "Disproportionately long lower extremities with narrow thoracic ribcage dimensions"
    ],
    "correct": 0,
    "explanation": "The biacromial-bicristal index (shoulder breadth / pelvic breadth x 100) measures trunk shape; a high ratio denotes wide shoulders and narrow hips, typical of elite swimmers and male sprinters."
  },
  {
    "id": "t2-a1-020",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "applied",
    "text": "Which body composition assessment technique divides the human body into a 3-compartment model consisting of Total Body Water, Fat Mass, and Fat-Free Dry Mass?",
    "options": [
      "Skinfold caliper thickness measurements using two-site formulas alone",
      "Hydrodensitometry (underwater weighing) utilizing body density estimates",
      "Dual-Energy X-ray Absorptiometry (DEXA) / Multi-compartment modeling",
      "Body Mass Index calculation using scale weight and standing stature"
    ],
    "correct": 2,
    "explanation": "DEXA and multi-compartment models separate the body into total bone mineral content, lean soft tissue (water and protein), and fat mass, overcoming the assumptions of traditional 2-compartment hydrostatic models."
  },
  {
    "id": "t2-a1-021",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "analytical",
    "text": "In youth athlete talent identification, why is biological maturation assessment preferred over chronological age categorization?",
    "options": [
      "Chronological age is impossible to document accurately in certified sports competitions",
      "Biological maturation accounts for wide variations in skeletal and somatic development among same-aged peers",
      "Late maturing athletes always possess permanent irreversible biomechanical coordination deficits",
      "Early maturing athletes require zero technical coaching or structured strength training"
    ],
    "correct": 1,
    "explanation": "Biological maturity varies widely among chronological peers (up to 4–5 years difference in skeletal age), meaning early maturers often dominate due to temporary size advantages while late maturers may be prematurely deselected."
  },
  {
    "id": "t2-a1-022",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "foundational",
    "text": "According to Multidimensional Anxiety Theory, how do cognitive state anxiety and somatic state anxiety typically behave as competition approaches?",
    "options": [
      "Cognitive anxiety rises only during the competition; somatic anxiety remains zero",
      "Cognitive anxiety can remain high and stable days prior; somatic anxiety peaks rapidly just before start and dissipates during performance",
      "Both cognitive and somatic anxieties remain completely constant throughout the entire competitive season",
      "Somatic anxiety peaks 3 weeks before competition and drops to zero upon arrival at the stadium"
    ],
    "correct": 1,
    "explanation": "Martens' Multidimensional Anxiety Theory demonstrates that cognitive state anxiety (worry) remains elevated days prior to event, while somatic anxiety (physiological arousal) spikes immediately prior to competition and drops once action begins."
  },
  {
    "id": "t2-a1-023",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "applied",
    "text": "In sports psychology imagery training, the 'PETTLEP' model provides an evidence-based framework where the acronym represents:",
    "options": [
      "Power, Endurance, Tension, Timing, Loading, Energy, and Periodization in sports training",
      "Physical, Environment, Task, Timing, Learning, Emotion, and Perspective in motor imagery",
      "Posture, Elevation, Temperature, Treatment, Longevity, Effort, and Pressure in clinical recovery",
      "Perception, Effort, Training, Technique, Lifting, Exercise, and Progression in weight rooms"
    ],
    "correct": 1,
    "explanation": "The PETTLEP model of motor imagery (Holmes & Collins) stands for: Physical, Environment, Task, Timing, Learning, Emotion, and Perspective, ensuring functional equivalence to physical practice."
  },
  {
    "id": "t2-a1-024",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "analytical",
    "text": "According to Locke and Latham's Goal Setting Theory in sport, which type of goals are under the highest level of direct personal control by the athlete?",
    "options": [
      "Outcome goals (e.g., winning a gold medal or defeating an opposing championship team)",
      "Process goals (e.g., maintaining high elbow during swimming catch or smooth breathing rhythm)",
      "Public media goals (e.g., gaining social media followers after an international tournament)",
      "Financial compensation goals (e.g., securing multi-million commercial sponsorship contracts)"
    ],
    "correct": 1,
    "explanation": "Process goals focus on the specific actions, movements, and technical behaviors an athlete must execute during performance, offering the highest personal control and lowest anxiety compared to outcome goals."
  },
  {
    "id": "t2-a1-025",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "foundational",
    "text": "In Nideffer's model of attentional focus, a quarterback analyzing the entire defensive formation across the whole field is utilizing which attentional style?",
    "options": [
      "Broad-External focus assessing the open tactical playing field",
      "Broad-Internal focus analyzing personal physiological fatigue",
      "Narrow-External focus focusing strictly on the ball laces",
      "Narrow-Internal focus rehearsing a single specific motor cue"
    ],
    "correct": 0,
    "explanation": "Nideffer's 2x2 attentional matrix defines Broad-External as assessing a wide external environment (e.g., scanning opposing team positions and field layout)."
  },
  {
    "id": "t2-a1-026",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "applied",
    "text": "According to Raedeke and Smith, athlete burnout is clinically defined by which three core dimensions?",
    "options": [
      "Severe joint pain, high lactate levels, and torn muscle fibers across multiple muscle groups",
      "Emotional/physical exhaustion, sport devaluation (cynicism), and reduced sense of athletic accomplishment",
      "Poor sleep quality, low carbohydrate intake, and dehydration during high-intensity training camps",
      "Elevated resting heart rate, high jump height, and excessive extrinsic financial rewards"
    ],
    "correct": 1,
    "explanation": "Athlete burnout is defined as a multidimensional syndrome characterized by: (1) emotional and physical exhaustion, (2) reduced sense of personal accomplishment, and (3) sport devaluation/cynicism."
  },
  {
    "id": "t2-a1-027",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "analytical",
    "text": "During which stage of non-REM sleep is the pulsatile secretion of Growth Hormone (GH) at its physiological peak to facilitate tissue repair in athletes?",
    "options": [
      "Stage 1 light transitional sleep occurring during initial sleep onset",
      "Stage 2 sleep spindle phase characterized by theta wave dominance",
      "Slow-Wave Sleep (Stage 3 / deep non-REM sleep) with delta wave activity",
      "Active Rapid Eye Movement (REM) dream sleep characterized by motor atonia"
    ],
    "correct": 2,
    "explanation": "Slow-Wave Sleep (SWS / deep NREM stage 3) is characterized by delta brain waves and corresponds to the largest daily surge of systemic growth hormone release, vital for protein synthesis and tissue repair."
  },
  {
    "id": "t2-a1-028",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "foundational",
    "text": "In GPS and micro-technology athlete monitoring, 'Player Load' is calculated using which raw physical sensor data?",
    "options": [
      "Heart rate reserve multiplied by ambient stadium temperature and humidity",
      "Tri-axial accelerometer instantaneous rate of change of acceleration (jerk) in x, y, and z vectors",
      "Optical camera tracking of ball speed and passing accuracy during open competition play",
      "Blood lactate accumulation multiplied by athlete body weight and running mileage"
    ],
    "correct": 1,
    "explanation": "Player Load (developed by Catapult) is a modified vector magnitude of instantaneous rate of change of acceleration (jerk) across three axes (anteroposterior, mediolateral, vertical), measuring total physical mechanical demand."
  },
  {
    "id": "t2-a1-029",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "applied",
    "text": "Why is Cold Water Immersion (CWI at 10–15°C for 10–15 minutes) recommended following contact sports collisions, but often avoided immediately following pure hypertrophy-focused resistance sessions?",
    "options": [
      "CWI completely destroys red blood cells and causes severe systemic hemolytic anemia",
      "CWI blunts acute inflammatory signaling pathways (p70S6K/mTOR) necessary for long-term myofibrillar hypertrophy adaptations",
      "CWI increases skin temperature and elevates whole-body metabolic rate excessively for hours",
      "CWI prevents glycogen resynthesis during the subsequent 72 hours of tournament play"
    ],
    "correct": 1,
    "explanation": "CWI reduces soreness and inflammation after collisions/matches, but applying it immediately after strength/hypertrophy training attenuates cellular signaling pathways (mTOR) and satellite cell activation, blunting long-term muscle growth."
  },
  {
    "id": "t2-a1-030",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "analytical",
    "text": "In biostatistics, what is the key difference between the 'Standard Deviation' (SD) and the 'Standard Error of the Mean' (SEM)?",
    "options": [
      "SD measures sample data dispersion around the sample mean; SEM estimates the precision of the sample mean relative to the true population mean",
      "SD is used only for qualitative nominal data; SEM is used only for continuous ratio laboratory measurements",
      "SD increases when sample size increases; SEM increases proportionally as sample size expands",
      "SD measures bivariate correlation; SEM measures statistical power of an experimental intervention"
    ],
    "correct": 0,
    "explanation": "Standard Deviation (SD) quantifies variability among individual measurements within a dataset, whereas Standard Error of the Mean (SEM = SD / sqrt(n)) reflects the precision/uncertainty with which the sample mean estimates the population mean."
  },
  {
    "id": "t2-a1-031",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "foundational",
    "text": "When comparing the pre-test and post-test 1RM bench press scores within the same group of athletes following a 12-week program, which statistical test is appropriate?",
    "options": [
      "Independent two-sample Student's t-test assuming equal variances",
      "Paired (dependent) Student's t-test comparing repeated measures",
      "Chi-Square test of independence on nominal categorical groups",
      "Kruskal-Wallis one-way analysis of variance for independent samples"
    ],
    "correct": 1,
    "explanation": "A paired (dependent) t-test compares the means of two related measurements taken from the same subjects under two conditions (e.g., pre-intervention vs post-intervention)."
  },
  {
    "id": "t2-a1-032",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "applied",
    "text": "In sports technology validation studies, what does a Bland-Altman analysis graphically illustrate?",
    "options": [
      "Statistical significance using p-values between independent treatment cohorts",
      "The difference between two measurement methods plotted against their mean, showing limits of agreement and systematic bias",
      "Linear progression of training volume across twelve consecutive mesocycles",
      "Percentage of type II fast-twitch muscle fibers in an invasive tissue sample"
    ],
    "correct": 1,
    "explanation": "A Bland-Altman plot quantifies the agreement between two clinical or sports measurement methods by plotting the difference between pairs against their average, establishing systematic bias and 95% limits of agreement."
  },
  {
    "id": "t2-a2-001",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "foundational",
    "text": "Under the National Sports Development Fund (NSDF) instituted by the Government of India, how does government funding match non-governmental contributions?",
    "options": [
      "The Government of India provides matching grants on a 1:1 basis against contributions from public/private sectors",
      "The Government provides 10% matching funds with 90% mandated from private commercial corporations",
      "The Fund is funded exclusively by international foreign loans with zero domestic central contributions",
      "The Government provides no financial matching and acts purely as an external auditing agency"
    ],
    "correct": 0,
    "explanation": "The NSDF was established in 1998 where contributions from public/private corporate houses and individuals are matched on a 1:1 parity basis by the Central Government to support elite athletes and infrastructure.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-a2-002",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "applied",
    "text": "In the National Sports Awards in India, what is the cash reward accompanying the Dronacharya Award (Lifetime Category)?",
    "options": [
      "Rs. 5 Lakhs along with a bronze statuette and scroll",
      "Rs. 10 Lakhs along with a bronze statuette and scroll",
      "Rs. 15 Lakhs along with a bronze statuette and scroll",
      "Rs. 25 Lakhs along with a bronze statuette and scroll"
    ],
    "correct": 2,
    "explanation": "Under the revised Ministry of Youth Affairs & Sports award structure, the Dronacharya Award in the Lifetime Category carries a bronze statuette, certificate, and a cash prize of Rs. 15 Lakhs (Regular category carries Rs. 10 Lakhs).",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-a2-003",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "foundational",
    "text": "Under the WADA Prohibited List, to which pharmacological classification do substances like Hydrochlorothiazide and Furosemide belong?",
    "options": [
      "Class S1: Anabolic Androgenic Steroid Hormones",
      "Class S5: Diuretics and Other Masking Agents",
      "Class S6: Central Nervous System Stimulants",
      "Class S8: Natural and Synthetic Cannabinoids"
    ],
    "correct": 1,
    "explanation": "Diuretics such as Furosemide and Hydrochlorothiazide belong to WADA Prohibited Class S5 (Diuretics and Masking Agents), prohibited at all times because they dilute urine and accelerate drug excretion.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-a2-004",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "Under the WADA Anti-Doping Administration and Management System (ADAMS), Registered Testing Pool (RTP) athletes must specify a daily 60-minute testing window between which hours?",
    "options": [
      "05:00 AM and 11:00 PM during any part of the day",
      "12:00 Midnight and 04:00 AM during night hours only",
      "09:00 AM and 05:00 PM during official office hours only",
      "Only on scheduled match competition days at stadiums"
    ],
    "correct": 0,
    "explanation": "RTP athletes must file quarterly whereabouts specifying a precise 60-minute time slot each day between 5:00 AM and 11:00 PM where they are guaranteed to be available and accessible for unannounced out-of-competition testing.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-a2-005",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "foundational",
    "text": "How many 'Whereabouts Failures' (any combination of missed tests or filing failures) within a rolling 12-month period constitute an Anti-Doping Rule Violation (ADRV) under the WADA Code?",
    "options": [
      "One single failure recorded in any calendar quarter",
      "Two failures recorded within any two consecutive quarters",
      "Three failures recorded within a rolling 12-month period",
      "Five failures recorded across an Olympic quadrennial cycle"
    ],
    "correct": 2,
    "explanation": "Under Article 2.4 of the WADA Code, any combination of three missed tests and/or filing failures within a 12-month window constitutes an Anti-Doping Rule Violation carrying a potential 1 to 2-year ineligibility period.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-a2-006",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "applied",
    "text": "Which Japanese prefecture and city will host the 20th Asian Games in 2026?",
    "options": [
      "Tokyo Prefecture and Greater Tokyo Metropolitan Area",
      "Aichi Prefecture and the City of Nagoya, Japan",
      "Hokkaido Prefecture and the City of Sapporo, Japan",
      "Osaka Prefecture and the City of Osaka, Japan"
    ],
    "correct": 1,
    "explanation": "The 2026 Asian Games (20th Asiad) will be co-hosted by Aichi Prefecture and the city of Nagoya in Japan.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-a2-007",
    "section": "A2",
    "topic": "sports governance ethics and age verification",
    "subtopic": "National Sports Development Code and athlete safeguarding",
    "difficulty": "foundational",
    "text": "Under the National Sports Development Code of India (2011), what is the maximum upper age limit for an individual serving as President of a National Sports Federation (NSF)?",
    "options": [
      "60 years of age at the time of election",
      "65 years of age at the time of election",
      "70 years of age at the time of election",
      "75 years of age at the time of election"
    ],
    "correct": 2,
    "explanation": "The National Sports Development Code of India (2011) mandates an upper age cap of 70 years for office bearers (President, Secretary General, Treasurer) of National Sports Federations and IOA.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-a2-008",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "What statutory authority was established under the National Anti-Doping Act, 2022 to conduct independent quasi-judicial adjudication of anti-doping rule violations in India?",
    "options": [
      "National Anti-Doping Disciplinary Panel (NADDP) under the Act",
      "Supreme Court Sports Special Appellate Bench in New Delhi",
      "Central Vigilance Anti-Doping Bureau under Home Ministry",
      "National Medical Commission Ethics and Registration Cell"
    ],
    "correct": 0,
    "explanation": "The National Anti-Doping Act, 2022 gave statutory backing to the National Anti-Doping Agency (NADA) and the National Anti-Doping Disciplinary Panel (NADDP) as the primary independent hearing body for ADRVs in India.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t2-b-001",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "When assessing an athlete with suspected Anterior Cruciate Ligament (ACL) deficiency, which clinical test demonstrates the highest specificity for true anterolateral rotary instability?",
    "options": [
      "Anterior Drawer test performed at 90 degrees of knee flexion",
      "Lachman test performed at 30 degrees of knee flexion",
      "Pivot Shift test evaluating dynamic tibial reduction subluxation",
      "Posterior Sag sign evaluated in the 90-90 hip-knee position"
    ],
    "correct": 2,
    "explanation": "The Pivot Shift test has the highest specificity (~98%) for functional anterolateral rotary instability and ACL rupture, reproducing the dynamic subluxation-reduction phenomenon."
  },
  {
    "id": "t2-b-002",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The Thessaly test for meniscal tears is clinically performed with the patient standing on one leg while flexing the knee to what specific angle and performing dynamic internal/external rotations?",
    "options": [
      "0 degrees (full locked hyperextension of the knee joint)",
      "20 degrees of knee flexion during dynamic weight-bearing rotation",
      "60 degrees of knee flexion during deep single-leg squatting",
      "90 degrees of knee flexion while seated on the examination table"
    ],
    "correct": 1,
    "explanation": "The Thessaly test is performed at 20° of knee flexion while the patient rotates the femur on the tibia 3 times internally and externally on a weight-bearing limb, loading the meniscal horns with high diagnostic accuracy."
  },
  {
    "id": "t2-b-003",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "When performing the O'Brien Active Compression test to evaluate a Superior Labrum Anterior to Posterior (SLAP) tear, what test finding is considered clinically positive?",
    "options": [
      "Pain elicited with the shoulder in 90° flexion, 10° adduction, and internal rotation (thumb down), which is abolished or reduced when tested in external rotation (thumb up)",
      "Pain elicited exclusively when the shoulder is passively abducted to 180° with thumb pointed upward in full supination",
      "Complete numbness in the axillary nerve cutaneous distribution during resisted elbow flexion in standing",
      "Severe pain during resisted shoulder extension with the forearm supinated and elbow locked in extension"
    ],
    "correct": 0,
    "explanation": "O'Brien's test is positive when deep shoulder pain produced during resisted shoulder elevation in 90° flexion/adduction with full internal rotation (thumb down) is eliminated or reduced when re-tested in external rotation (thumb up/supinated)."
  },
  {
    "id": "t2-b-004",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The Talar Tilt test performed with the ankle in neutral dorsiflexion/plantarflexion and the calcaneus forced into inversion specifically evaluates the integrity of which ligament?",
    "options": [
      "Anterior Talofibular Ligament (ATFL) in slight plantarflexion",
      "Calcaneofibular Ligament (CFL) spanning across subtalar joint",
      "Posterior Talofibular Ligament (PTFL) deep fibers at the back",
      "Deltoid ligament anterior tibiotalar superficial component"
    ],
    "correct": 1,
    "explanation": "The Calcaneofibular Ligament (CFL) spans across both the talocrural and subtalar joints; an inversion stress test (Talar Tilt) performed in neutral position selectively stresses the CFL."
  },
  {
    "id": "t2-b-005",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "A positive FADIR test (Flexion, Adduction, Internal Rotation) during orthopedic hip examination most strongly indicates:",
    "options": [
      "Gluteus medius complete avulsion from the greater trochanter facet",
      "Femoroacetabular Impingement (FAI) and/or anterior acetabular labral tear",
      "Greater trochanteric pain syndrome with calcific trochanteric bursitis",
      "Posterior dislocation of the femoral head out of the acetabular socket"
    ],
    "correct": 1,
    "explanation": "The FADIR test approximates the femoral neck against the anterior acetabular rim; pain reproduction indicates Femoroacetabular Impingement (cam or pincer type) or an anterior labral lesion."
  },
  {
    "id": "t2-b-006",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The FABER (Patrick's) test (Flexion, Abduction, External Rotation) is primarily designed to provoke pathology in which joint complex when anterior groin vs posterior pelvic pain is produced?",
    "options": [
      "Anterior groin pain indicates intra-articular hip pathology, while posterior pain indicates Sacroiliac Joint dysfunction",
      "Anterior pain indicates patellar dislocation, while posterior pain indicates hamstring avulsion injury",
      "Anterior pain indicates tibial nerve neuroma, while posterior pain indicates Achilles tendinitis at heel",
      "Anterior pain indicates abdominal hernia, while posterior pain indicates lumbar spinal canal stenosis"
    ],
    "correct": 0,
    "explanation": "During the FABER test, pain in the anterior groin points to intra-articular hip pathology/iliopsoas spasm, whereas pain in the posterior buttock/sacral region points to sacroiliac joint dysfunction."
  },
  {
    "id": "t2-b-007",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Empty Can (Jobe) test isolates and assesses the structural integrity of which shoulder tendon by elevating the arm in 90° scaption with full internal rotation?",
    "options": [
      "Infraspinatus tendon at the middle facet of greater tuberosity",
      "Supraspinatus tendon inserting onto the superior facet",
      "Subscapularis tendon inserting onto the lesser tuberosity",
      "Teres minor tendon at the posterior inferior capsule"
    ],
    "correct": 1,
    "explanation": "The Empty Can (Jobe) test elevates the arm to 90° in the scapular plane with thumbs pointed downward (internal rotation) against manual resistance, isolating the supraspinatus tendon."
  },
  {
    "id": "t2-b-008",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "During physical examination of the elbow, Cozen's test is performed by having the therapist resist which active movement by the patient?",
    "options": [
      "Active wrist flexion with forearm fully pronated and elbow flexed",
      "Active wrist extension and radial deviation with pronated forearm and extended elbow",
      "Active forearm supination with the wrist completely relaxed in neutral",
      "Active elbow flexion against maximal manual traction at the wrist"
    ],
    "correct": 1,
    "explanation": "Cozen's test puts maximal tension on the Extensor Carpi Radialis Brevis/Longus by resisting active wrist extension and radial deviation with a pronated forearm and extended elbow, reproducing lateral epicondyle pain."
  },
  {
    "id": "t2-b-009",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "How does the Oxford progressive resistance exercise protocol differ systematically from the DeLorme protocol?",
    "options": [
      "Oxford starts at 100% 10RM in set 1, regressing to 75% in set 2, and 50% in set 3 as fatigue accumulates",
      "Oxford starts at 50% 10RM and increases progressively to 100% 10RM in the final third set",
      "Oxford uses isometric contractions only with no resistance weight adjustments across sets",
      "Oxford requires 20 repetitions in all sets at 10% 1RM without any progression"
    ],
    "correct": 0,
    "explanation": "The Oxford technique accounts for developing muscle fatigue by starting with 10 reps @ 100% 10RM in set 1, then reducing to 75% in set 2, and 50% in set 3 (the exact inverse of DeLorme)."
  },
  {
    "id": "t2-b-010",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In the Heavy Slow Resistance (HSR) protocol for patellar tendinopathy described by Beyer et al., what is the recommended training frequency and repetition continuum?",
    "options": [
      "Daily training performing 50 rapid bodyweight squats with ice packs",
      "3 sessions per week performing 3–4 sets of 6–15 RM at slow 6-second execution tempos per rep",
      "One session per month using passive electrotherapy modalities exclusively",
      "Continuous 2-hour low-intensity stationary cycling without any added resistance"
    ],
    "correct": 1,
    "explanation": "HSR for patellar tendinopathy involves 3 weekly sessions of squats, leg press, and hack squats progressing from 15RM down to 6RM with slow 3s concentric / 3s eccentric cadence, demonstrating equal or superior tendon adaptation compared to Alfredson eccentric drops."
  },
  {
    "id": "t2-b-011",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "applied",
    "text": "In Proprioceptive Neuromuscular Facilitation (PNF), the 'Hold-Relax with Agonist Contraction' (HR-AC) stretching technique leverages which combined neurophysiological mechanisms?",
    "options": [
      "Autogenic inhibition of the tight muscle followed immediately by reciprocal inhibition from the contracting opposing agonist",
      "Gamma-loop suppression followed by high-velocity joint traction across all planes",
      "Crossed extensor facilitation combined with cold shock cutaneous stimulation",
      "Complete pharmacological blockade of neuromuscular acetylcholine receptors at motor endplates"
    ],
    "correct": 0,
    "explanation": "HR-AC combines autogenic inhibition (from the isometric contraction of the tight target muscle stimulating GTOs) with reciprocal inhibition (from the subsequent concentric contraction of the opposing agonist muscle)."
  },
  {
    "id": "t2-b-012",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "According to Maitland's mobilization framework, a Grade IV passive accessory joint mobilization is defined as:",
    "options": [
      "A small-amplitude oscillatory movement performed at the beginning of the available range",
      "A small-amplitude oscillatory movement performed at the end of the available joint range into tissue resistance",
      "A high-velocity, small-amplitude thrust performed beyond the physiological anatomical limit",
      "A large-amplitude rhythmic oscillation performed within the mid-range of free joint motion"
    ],
    "correct": 1,
    "explanation": "Maitland Grade IV is a small-amplitude oscillatory mobilization performed at the end of available movement (into tissue resistance) specifically indicated to treat chronic stiffness without severe pain."
  },
  {
    "id": "t2-b-013",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "applied",
    "text": "In spinal stabilization and core rehabilitation, which pair of deep local stabilizer muscles functions anticipatorily (feedforward) prior to limb movements to stabilize lumbar segments?",
    "options": [
      "Rectus abdominis and External oblique superficial muscles",
      "Transversus abdominis and Lumbar multifidus deep stabilizers",
      "Latissimus dorsi and Pectoralis major prime movers",
      "Iliopsoas and Rectus femoris anterior hip muscles"
    ],
    "correct": 1,
    "explanation": "Hodges et al. demonstrated that the Transversus Abdominis and deep Lumbar Multifidus fire feedforward (anticipatory motor control) prior to movement of the extremities to provide segmental spinal stiffness."
  },
  {
    "id": "t2-b-014",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In early phase rehabilitation following an acute ligamentous injury, why are closed kinetic chain (CKC) exercises often favored over open kinetic chain (OKC) exercises?",
    "options": [
      "CKC exercises produce higher joint shear forces and isolate single weak muscles",
      "CKC exercises promote joint axial compression, enhance co-contraction of surrounding muscles, and improve joint stability",
      "CKC exercises completely eliminate all ground reaction forces and neural proprioceptive feedback",
      "CKC exercises restrict muscle recruitment strictly to non-fatiguing type I muscle fibers"
    ],
    "correct": 1,
    "explanation": "Closed kinetic chain exercises generate joint axial compressive loading and stimulate muscular co-contraction (e.g., hamstrings co-contracting with quadriceps), minimizing dangerous shear forces on healing ligaments."
  },
  {
    "id": "t2-b-015",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "Which PNF diagonal pattern for the upper extremity incorporates shoulder Flexion, Abduction, and External Rotation with forearm supination and wrist extension?",
    "options": [
      "D1 Flexion pattern (bringing hand up to opposite ear)",
      "D2 Flexion pattern (drawing a sword up and outward)",
      "D1 Extension pattern (pushing down and backward)",
      "D2 Extension pattern (sheathing a sword into opposite hip)"
    ],
    "correct": 1,
    "explanation": "The D2 Flexion pattern (often visualized as 'drawing and raising a sword upward') involves shoulder flexion, abduction, external rotation, forearm supination, and wrist/finger extension."
  },
  {
    "id": "t2-b-016",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In shoulder biomechanics, how does the rotator cuff force couple (Subscapularis, Infraspinatus, Teres Minor) counteract the superior translatory shear force produced by the Deltoid during arm elevation?",
    "options": [
      "By pulling the humeral head superiorly into the acromion roof",
      "By exerting an inferior and compressive vector, depressing and centering the humeral head within the glenoid fossa",
      "By locking the scapulothoracic joint into full downward rotation",
      "By relaxing completely to allow passive bone-on-bone impingement"
    ],
    "correct": 1,
    "explanation": "The deltoid produces a strong superior shear force; the inferior rotator cuff force couple (Infraspinatus, Teres Minor, Subscapularis) exerts inferior and medial vectors, seating the humeral head and preventing subacromial impingement."
  },
  {
    "id": "t2-b-017",
    "section": "B",
    "topic": "human and exercise physiology",
    "subtopic": "Cardiorespiratory and neuromuscular physiology",
    "difficulty": "applied",
    "text": "What is the normal physiological Quadriceps Angle (Q-angle) measured with the knee extended in asymptomatic young adult males and females?",
    "options": [
      "0 to 5 degrees in both adult males and females",
      "10 to 14 degrees in males; 15 to 17 degrees in females",
      "25 to 30 degrees in males; 35 to 40 degrees in females",
      "Negative 10 degrees in both athletic sexes"
    ],
    "correct": 1,
    "explanation": "Normal Q-angle (measured from ASIS to mid-patella, and mid-patella to tibial tuberosity) is typically 10–14° for males and 15–17° for females (due to wider pelvis); an angle >20° increases lateral patellar tracking risk."
  },
  {
    "id": "t2-b-018",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "The atlanto-occipital joint of the cervical spine, where the head balances on the cervical vertebrae with the neck extensor muscles opposing the weight of the facial skeleton, represents which class of lever?",
    "options": [
      "First-class lever (Fulcrum situated between Effort and Resistance)",
      "Second-class lever (Resistance situated between Fulcrum and Effort)",
      "Third-class lever (Effort situated between Fulcrum and Resistance)",
      "Fourth-class anatomical lever in spinal kinematics"
    ],
    "correct": 0,
    "explanation": "The atlanto-occipital joint is a classic First-Class lever where the fulcrum (joint axis) lies between the resistance (weight of head anterior to axis) and the effort (posterior neck extensors)."
  },
  {
    "id": "t2-b-019",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "At what joint angle of pull does a muscle typically generate its greatest perpendicular rotary torque across a hinge joint?",
    "options": [
      "At 0 degrees (parallel to the long axis of the bony segment)",
      "At 90 degrees (where 100% of muscle force vector acts perpendicularly as rotary force)",
      "At 180 degrees (full extreme anatomical hyperextension)",
      "Angle of pull has zero mathematical influence on joint torque production"
    ],
    "correct": 1,
    "explanation": "When the angle of pull is 90°, the moment arm is maximized and 100% of the muscle's force vector acts perpendicular to the bone segment as rotary torque, with zero parallel translatory component."
  },
  {
    "id": "t2-b-020",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "During high-speed side-cutting maneuvers in team sports, an excessive dynamic knee valgus external moment significantly increases mechanical strain on which intra-articular structure?",
    "options": [
      "Posterior Cruciate Ligament (PCL) deep bundle",
      "Anterior Cruciate Ligament (ACL) and Medial Collateral Ligament (MCL)",
      "Lateral Collateral Ligament (LCL) and Biceps Femoris tendon",
      "Popliteal artery and posterior capsule exclusively"
    ],
    "correct": 1,
    "explanation": "Dynamic knee valgus (coupling hip adduction/internal rotation with tibial external rotation) places multi-planar tensile loading on the superficial MCL and dramatically elevates peak strain on the ACL."
  },
  {
    "id": "t2-b-021",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "Which anatomical structure provides the primary static restraint preventing anterior translation of the humeral head when the shoulder is positioned in 90 degrees of abduction and maximal external rotation (the late cocking position)?",
    "options": [
      "Superior Glenohumeral Ligament (SGHL) in adduction",
      "Anterior band of Inferior Glenohumeral Ligament Complex (IGHLC)",
      "Coracohumeral Ligament along the rotator interval",
      "Middle Glenohumeral Ligament at neutral 0 degrees elevation"
    ],
    "correct": 1,
    "explanation": "The anterior band of the Inferior Glenohumeral Ligament Complex (IGHLC) is the primary static stabilizer preventing anterior glenohumeral translation and dislocation at 90° abduction and external rotation."
  },
  {
    "id": "t2-b-022",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In the kinematics of the elbow joint, the physiological 'carrying angle' is created primarily by which anatomical feature of the distal humerus?",
    "options": [
      "The medial lip of the trochlea projecting more distally than the lateral lip",
      "The capitulum projecting directly superiorly into the radial fossa",
      "The olecranon fossa being completely closed by fibrous tissue adhesions",
      "The radial tuberosity bowing laterally at 45 degrees"
    ],
    "correct": 0,
    "explanation": "The normal carrying angle (valgus angulation of ~10–15° in males, ~15–20° in females) is caused by the medial projection of the trochlea extending more distally than the capitulum and lateral trochlear lip."
  },
  {
    "id": "t2-b-023",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In Perry and Burnfield's gait taxonomy, the 'Terminal Stance' phase begins with which critical kinematic event and ends with what event?",
    "options": [
      "Begins with initial heel contact and ends with flat foot loading",
      "Begins with heel rise of the stance limb and ends when the contralateral limb achieves initial contact",
      "Begins with toe-off and ends when the knee reaches peak flexion in mid-swing",
      "Begins when both feet are completely off the ground during running flight"
    ],
    "correct": 1,
    "explanation": "Terminal Stance starts with heel-off of the reference limb and continues until initial contact of the opposite foot, during which body weight moves forward past the forefoot rocker."
  },
  {
    "id": "t2-b-024",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "During the 'Pre-Swing' phase of the gait cycle (terminal double limb support), rapid knee flexion from 10° to 40° is achieved primarily through:",
    "options": [
      "Vigorous, maximal active contraction of the hamstring muscle group",
      "Passive mechanical recoil of the trailing limb triggered by rapid plantarflexor unloading and forward momentum",
      "Forceful isometric contraction of the vastus medialis oblique",
      "Immediate activation of the anterior tibialis pretibial muscle"
    ],
    "correct": 1,
    "explanation": "During Pre-Swing (toe-off preparation), rapid knee flexion to 40° occurs largely passively due to the rapid unloading of the limb, forward momentum of the body, and gastrocnemius elastic recoil, with minimal active hamstring recruitment."
  },
  {
    "id": "t2-b-025",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "An 'Antalgic Gait' observed in an athlete presenting with unilateral lower extremity joint pain is characterized by which hallmark temporal alteration?",
    "options": [
      "Significantly shortened stance phase duration on the painful limb with rapid step onto the unaffected limb",
      "Prolonged single-leg stance phase on the injured limb exceeding 3 seconds in duration",
      "Complete elimination of the swing phase on the healthy contralateral sound side",
      "Permanent locked knee hyperextension during the entire swing phase of gait"
    ],
    "correct": 0,
    "explanation": "An antalgic gait is a pain-avoiding gait pattern where the individual spends significantly less time in the stance phase on the affected/painful limb, resulting in an asymmetrical, hurried step cadence."
  },
  {
    "id": "t2-b-026",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "During normal level walking, what is the total vertical displacement of the body's center of mass (COM) throughout a complete gait cycle?",
    "options": [
      "Approximately 1 to 2 cm total throughout the entire walking cycle",
      "Approximately 4 to 5 cm (forming a smooth sinusoidal curve with peaks at mid-stance and troughs at double support)",
      "Approximately 15 to 20 cm with abrupt vertical drops during swing",
      "Zero displacement (the center of mass moves in a perfectly flat horizontal line)"
    ],
    "correct": 1,
    "explanation": "In normal human walking, the center of mass follows a smooth sinusoidal wave with an amplitude of ~4–5 cm, reaching its highest point at mid-stance and lowest point during double limb support."
  },
  {
    "id": "t2-b-027",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "A 'Circumduction Gait' pattern, where the swing leg swings outward in a lateral semicircle, is classically adopted to compensate for:",
    "options": [
      "Excessive hip abductor muscle power during initial swing phase",
      "Inability to functionally shorten the swing limb due to knee stiffness, extensor spasticity, or ankle dorsiflexor weakness",
      "Shortening of the contralateral unaffected sound limb by 5 cm",
      "Severe bilateral gluteus maximus flaccid paralysis in standing"
    ],
    "correct": 1,
    "explanation": "Circumduction clears the foot from the floor during swing phase when the patient cannot functionally shorten the limb (e.g., due to knee ankylosis, lack of knee flexion, or foot drop)."
  },
  {
    "id": "t2-b-028",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "In low-frequency 'Acupuncture-like TENS' (e.g., 2–5 Hz, high pulse width, motor contraction intensity), what is the primary neurophysiological mechanism mediating analgesia?",
    "options": [
      "Selective activation of large A-beta fibers closing the spinal gate in the dorsal horn",
      "Stimulation of small A-delta and C fibers activating descending opioid pathways in the periaqueductal gray to release endorphins/enkephalins",
      "Direct thermal ablation of peripheral cutaneous nociceptors at the skin surface",
      "Rapid peripheral vasodilation eliminating all tissue lactic acid within 5 minutes"
    ],
    "correct": 1,
    "explanation": "Acupuncture-like low-frequency TENS stimulates small-diameter A-delta and motor fibers, triggering endogenous opioid release (endorphins/enkephalins) via the descending pain inhibitory system, which can be blocked by naloxone."
  },
  {
    "id": "t2-b-029",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "In Low-Level Laser Therapy (LLLT) / Photobiomodulation, which primary intracellular chromophore absorbs red and near-infrared light photons to stimulate ATP production?",
    "options": [
      "Cytochrome c oxidase within the mitochondrial respiratory electron chain",
      "Hemoglobin iron core in circulating erythrocytes within local vessels",
      "Melanin pigments located in the superficial epidermal skin layer",
      "Myosin heavy chain ATPase enzymes in type I slow-twitch fibers"
    ],
    "correct": 0,
    "explanation": "Cytochrome c oxidase (Unit IV of the mitochondrial respiratory electron transport chain) is the primary photoacceptor for red and near-infrared wavelengths (600–1000 nm), boosting cellular ATP and promoting tissue repair."
  },
  {
    "id": "t2-b-030",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "How does local cryotherapy application physiologically reduce muscle spasticity and hypertonicity in upper motor neuron disorders?",
    "options": [
      "By increasing nerve conduction velocity and firing of dynamic gamma motor neurons",
      "By reducing muscle spindle afferent discharge (Ia and II fibers) and decreasing nerve conduction velocity",
      "By permanent chemical denervation of the neuromuscular motor endplate region",
      "By stimulating cutaneous nociceptors to trigger flexor withdrawal synergies"
    ],
    "correct": 1,
    "explanation": "Sustained cold application reduces tissue temperature, slowing sensory and motor nerve conduction velocity and decreasing muscle spindle sensitivity (Ia afferents) and Golgi tendon organ firing, thereby reducing spasticity."
  },
  {
    "id": "t2-b-031",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "Which of the following is an absolute contraindication to the application of Continuous Shortwave Diathermy (SWD)?",
    "options": [
      "Chronic subacromial bursitis in an adult competitive athlete",
      "Presence of an implanted cardiac pacemaker or metallic surgical implant in the treatment field",
      "Mild delayed onset muscle soreness in the gastrocnemius muscle belly",
      "Non-acute chronic osteoarthritis of the tibiofemoral joint"
    ],
    "correct": 1,
    "explanation": "Continuous high-frequency electromagnetic fields from SWD heat metal implants and disrupt cardiac pacemakers, posing severe burn and electrocution risks."
  },
  {
    "id": "t2-b-032",
    "section": "B",
    "topic": "psychology and human development neuro-rehabilitation",
    "subtopic": "Neuro-rehabilitation concepts and motor relearning",
    "difficulty": "analytical",
    "text": "In the Bobath Concept / Neuro-Developmental Treatment (NDT) approach for neurological patients, what is the primary therapeutic strategy?",
    "options": [
      "Encouraging abnormal compensatory movement patterns and primitive reflex synergies",
      "Inhibiting abnormal tone and primitive patterns while facilitating normal postural control and active key points of control",
      "Exclusively using heavy high-resistance Olympic weightlifting machines in seated postures",
      "Applying continuous passive mechanical traction to all spastic extremities"
    ],
    "correct": 1,
    "explanation": "The Bobath concept focuses on normalizing muscle tone, inhibiting abnormal reflex synergies, and facilitating active, normal movement patterns using handling at key points of control."
  },
  {
    "id": "t2-b-033",
    "section": "B",
    "topic": "psychology and human development neuro-rehabilitation",
    "subtopic": "Neuro-rehabilitation concepts and motor relearning",
    "difficulty": "applied",
    "text": "In Rood's neurofacilitation approach, which sensory stimulation technique is classified as a 'facilitatory' stimulus to enhance low muscle tone?",
    "options": [
      "Slow rhythmic rocking and neutral warmth application over trunk",
      "Fast brushing, light touch, and quick icing over the dermatome",
      "Prolonged static tendon pressure for 10 minutes over the insertion",
      "Slow continuous passive joint rotation in a quiet environment"
    ],
    "correct": 1,
    "explanation": "Rood's facilitation techniques utilize fast brushing, quick light touch, tapping, and quick icing (A-icing) to facilitate motor neuron pools, whereas slow rocking, prolonged stretch, and neutral warmth are inhibitory."
  },
  {
    "id": "t2-b-034",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "When assessing sensory ataxia and proprioceptive function in a neurological patient, what does a positive Romberg test indicate?",
    "options": [
      "Patient sways or falls when closing eyes, but maintains steady balance with eyes open (indicating somatosensory/proprioceptive pathway deficit)",
      "Patient is unable to stand steady even with eyes wide open (indicating cerebellar dysfunction)",
      "Patient exhibits unilateral resting tremor in the upper extremity during rest",
      "Complete loss of cutaneous temperature sensation on the plantar foot surface"
    ],
    "correct": 0,
    "explanation": "A positive Romberg test occurs when a patient stands steadily with eyes open (using visual compensation) but loses balance when eyes are closed, indicating loss of dorsal column somatosensory/proprioceptive input."
  },
  {
    "id": "t2-b-035",
    "section": "B",
    "topic": "psychology and human development neuro-rehabilitation",
    "subtopic": "Neuro-rehabilitation concepts and motor relearning",
    "difficulty": "applied",
    "text": "In stroke recovery according to the Brunnstrom Stages of Motor Recovery, Stage 3 is characterized by:",
    "options": [
      "Complete flaccidity with zero reflex or voluntary movement",
      "Voluntary control of movement occurring exclusively within basic synergistic patterns with marked spasticity",
      "Complete isolated joint movement with normal coordination and zero spasticity",
      "Spasticity completely absent with individual finger movements restored"
    ],
    "correct": 1,
    "explanation": "Brunnstrom Stage 3 is the stage where spasticity peaks and the patient gains voluntary control of movement synergies (basic limb synergies can be performed voluntarily)."
  },
  {
    "id": "t2-b-036",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In orthopedic fracture management, how is a 'Delayed Union' differentiated from a 'Non-Union'?",
    "options": [
      "Delayed union involves complete bone resorption; non-union shows normal rapid bridging callus",
      "Delayed union takes longer than expected to heal but maintains healing potential; non-union shows complete cessation of periosteal repair processes without surgical intervention",
      "Delayed union occurs only in pediatric greenstick fractures; non-union occurs only in clavicle fractures",
      "Delayed union requires immediate limb amputation within 48 hours of radiological assessment"
    ],
    "correct": 1,
    "explanation": "A delayed union is a fracture that has not healed in the expected timeframe for that bone but continues to show biological progression, whereas a non-union exhibits sclerotic bone ends and cessation of healing that will not consolidate without intervention."
  },
  {
    "id": "t2-b-037",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "During Upper Limb Neurodynamic Testing (ULTT 1 / Elvey Test), what is the standardized sequence of upper quadrant movements to selectively bias the Median Nerve?",
    "options": [
      "Shoulder depression, abduction to 110°, external rotation, forearm supination, wrist/finger extension, and elbow extension",
      "Shoulder depression, abduction to 10°, internal rotation, forearm pronation, wrist flexion, and elbow flexion",
      "Shoulder elevation, adduction across chest, forearm pronation, and thumb flexion in adduction",
      "Shoulder retraction, elbow flexion to 120°, forearm pronation, and ulnar deviation of wrist"
    ],
    "correct": 0,
    "explanation": "ULTT 1 (Median Nerve bias) sequence: Shoulder girdle depression -> Shoulder abduction (110°) -> Forearm supination -> Wrist and finger extension -> Shoulder lateral rotation -> Slow elbow extension with contralateral/ipsilateral cervical side-flexion sensitizing."
  },
  {
    "id": "t2-b-038",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "analytical",
    "text": "In the McKenzie classification system for spinal disorders, how is a 'Dysfunction Syndrome' differentiated from a 'Derangement Syndrome'?",
    "options": [
      "Dysfunction produces pain only at end-range of mechanically contracted/shortened tissues with no rapid change in ROM, whereas Derangement demonstrates rapid directional preference and centralization",
      "Dysfunction always involves an acute spinal cord tumor; Derangement is purely psychological",
      "Dysfunction causes pain in all directions during mid-range; Derangement causes zero movement pain",
      "Dysfunction responds exclusively to high-dose traction; Derangement requires emergency spinal surgery"
    ],
    "correct": 0,
    "explanation": "McKenzie Dysfunction Syndrome produces pain consistently at the end-range of shortened, scarred adaptive tissues without rapid centralization, whereas Derangement is caused by internal disc displacement that responds rapidly to directional loading."
  },
  {
    "id": "t2-b-039",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In myofascial pain syndrome, what is the clinical distinction between an 'Active Trigger Point' and a 'Latent Trigger Point'?",
    "options": [
      "An active trigger point produces spontaneous local and referred pain at rest; a latent trigger point causes pain and referral only when manually palpated or compressed",
      "An active trigger point occurs only in bone; a latent trigger point occurs in joint cartilage",
      "An active trigger point cannot be felt; a latent trigger point is always a visible hematoma",
      "An active trigger point is painless; a latent trigger point causes complete motor paralysis"
    ],
    "correct": 0,
    "explanation": "An active myofascial trigger point causes spontaneous local and referred pain, muscle weakness, and autonomic symptoms at rest, whereas a latent trigger point is clinically silent until provoked by palpation."
  },
  {
    "id": "t2-b-040",
    "section": "B",
    "topic": "human and exercise physiology",
    "subtopic": "Cardiorespiratory and neuromuscular physiology",
    "difficulty": "analytical",
    "text": "According to manual therapy terminology, a Grade V spinal mobilization is defined as:",
    "options": [
      "A small-amplitude oscillatory glide within resistance-free joint range",
      "A high-velocity, low-amplitude (HVLA) thrust manipulation performed at the physiological and anatomical limit of joint range",
      "Continuous passive mechanical axial traction maintained for 30 minutes",
      "A gentle soft tissue effleurage massage stroke along the paraspinous muscles"
    ],
    "correct": 1,
    "explanation": "Grade V manipulation is a high-velocity, low-amplitude (HVLA) thrust delivered at the physiological end of passive joint range to restore joint cavitation and cavitational neurophysiological release."
  },
  {
    "id": "t2-c-001",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old elite track sprinter who sustained a proximal Biceps Femoris grade II muscle...",
    "difficulty": "analytical",
    "text": "He is now entering late-stage functional rehabilitation. During isokinetic dynamometry testing at 60°/s, his eccentric hamstring peak torque is 140 Nm and concentric quadriceps peak torque is 220 Nm (Functional Dynamic Eccentric Hamstring to Concentric Quadriceps Ratio Hecc:Qcon = 0.63). Standard return-to-sprint guidelines recommend which target functional ratio to minimize re-injury risk?",
    "options": [
      "Hecc:Qcon ratio of at least 0.30 during isokinetic testing",
      "Hecc:Qcon ratio of ≥0.80 to 1.0 during dynamic isokinetic testing",
      "Hecc:Qcon ratio should not exceed 0.20 to avoid hamstring hypertrophy",
      "Quadriceps strength should be three times greater than eccentric hamstrings"
    ],
    "correct": 1,
    "explanation": "The functional ratio (Hecc:Qcon at 60°/s) reflects the hamstring's capacity to decelerate maximal quadriceps knee extension; values ≥0.80–1.0 indicate adequate eccentric protective capacity against hamstring re-injury during sprinting.",
    "passageId": "cs-11",
    "passage": "A 20-year-old elite track sprinter who sustained a proximal Biceps Femoris grade II muscle strain 4 weeks ago has completed pain-free isometric loading and progressive jogging."
  },
  {
    "id": "t2-c-002",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old elite track sprinter who sustained a proximal Biceps Femoris grade II muscle...",
    "difficulty": "analytical",
    "text": "Before clearing this sprinter for full unconstrained 100m sprint competition, what on-field GPS sprint benchmark must be safely achieved in training without symptom recurrence?",
    "options": [
      "Running 10 km at a continuous 10 km/h submaximal jogging pace",
      "Achieving ≥95% to 100% of maximum pre-injury sprinting velocity with repeated acceleration and deceleration efforts",
      "Completing 50 continuous low-intensity backward lunges on grass",
      "Zero requirement for field running if isokinetic testing is passed"
    ],
    "correct": 1,
    "explanation": "Hamstrings experience peak lengthening strain at maximum sprinting velocity (>95% max velocity); an athlete must be safely exposed to repeated near-maximal and maximal sprints in training before competition clearance.",
    "passageId": "cs-11",
    "passage": "A 20-year-old elite track sprinter who sustained a proximal Biceps Femoris grade II muscle strain 4 weeks ago has completed pain-free isometric loading and progressive jogging."
  },
  {
    "id": "t2-c-003",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 26-year-old baseball pitcher presents with deep anterior shoulder pain, clicking, and a ...",
    "difficulty": "analytical",
    "text": "Physical examination reveals a positive Biceps Load Test II and a positive Crank test with reproduction of painful clicking. Magnetic resonance arthrography (MRA) confirms a Type II SLAP lesion. What specific anatomical structure is compromised in a Type II SLAP tear?",
    "options": [
      "Fraying of the superior labrum with intact biceps anchor",
      "Detachment of the superior glenoid labrum along with the origin of the long head of the biceps brachii anchor from the superior glenoid tubercle",
      "Bucket-handle tear of the superior labrum with intact biceps tendon anchor",
      "Isolated tear of the inferior glenohumeral ligament anterior band"
    ],
    "correct": 1,
    "explanation": "Snyder Type II SLAP lesion is the most common labral tear in overhead athletes, involving complete avulsion/detachment of the superior labrum and long head of biceps tendon anchor from the glenoid rim.",
    "passageId": "cs-12",
    "passage": "A 26-year-old baseball pitcher presents with deep anterior shoulder pain, clicking, and a feeling of 'dead arm' during the acceleration and release phases of throwing."
  },
  {
    "id": "t2-c-004",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 26-year-old baseball pitcher presents with deep anterior shoulder pain, clicking, and a ...",
    "difficulty": "analytical",
    "text": "During non-operative conservative physiotherapy for this pitcher's SLAP tear, which therapeutic exercise principle should guide early rotator cuff and scapular conditioning?",
    "options": [
      "Avoid aggressive overhead throwing and biceps eccentric loading, focusing on closed-chain rhythmic stabilization, posterior cuff strengthening, and periscapular control",
      "Perform heavy maximal biceps curls and overhead military barbell presses daily to muscular failure",
      "Completely immobilize the shoulder in a rigid plaster cast for 6 consecutive months",
      "Apply high-velocity joint manipulations directly into end-range extension and external rotation"
    ],
    "correct": 0,
    "explanation": "Initial SLAP rehab focuses on restoring scapulothoracic kinematics, rotator cuff co-contraction, and posterior capsule mobility while avoiding traction on the biceps anchor (resisted elbow flexion/supination) and hyper-external rotation.",
    "passageId": "cs-12",
    "passage": "A 26-year-old baseball pitcher presents with deep anterior shoulder pain, clicking, and a feeling of 'dead arm' during the acceleration and release phases of throwing."
  },
  {
    "id": "t2-c-005",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old marathon runner presents with sharp lateral knee pain that begins consistent...",
    "difficulty": "analytical",
    "text": "Palpation reveals exquisite focal tenderness over the lateral femoral epicondyle, approximately 2 to 3 cm proximal to the lateral joint line. Noble's compression test and Ober's test are both strongly positive. What is the most likely diagnosis?",
    "options": [
      "Lateral Meniscus anterior horn radial tear with locking",
      "Iliotibial Band Friction Syndrome (ITBFS)",
      "Pes anserine bursitis with medial knee swelling",
      "Proximal tibiofibular joint complete dislocation"
    ],
    "correct": 1,
    "explanation": "Lateral knee pain over the lateral femoral epicondyle at ~30° knee flexion with positive Noble's and Ober's tests is the classic presentation of Iliotibial Band Friction Syndrome (ITBFS).",
    "passageId": "cs-13",
    "passage": "A 28-year-old marathon runner presents with sharp lateral knee pain that begins consistently after 5 kilometers of downhill running."
  },
  {
    "id": "t2-c-006",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old marathon runner presents with sharp lateral knee pain that begins consistent...",
    "difficulty": "analytical",
    "text": "Running gait analysis in this runner shows excessive contralateral pelvic drop (Trendelenburg) and dynamic knee internal rotation during stance. What is the primary muscular target in her rehabilitation program?",
    "options": [
      "Strengthening of the ipsilateral Gluteus Medius and hip external rotators to stabilize pelvic drop and reduce ITB strain",
      "Aggressive surgical release of the lateral collateral ligament within 24 hours",
      "Isolated quadriceps open chain leg extensions performed to exhaustion",
      "Passive bed rest for 12 weeks with zero weight-bearing hip loading"
    ],
    "correct": 0,
    "explanation": "Weak hip abductors (gluteus medius) allow excessive contralateral pelvic drop, increasing hip adduction and tensile strain over the ITB at the lateral femoral condyle; hip abductor strengthening is the definitive conservative therapy.",
    "passageId": "cs-13",
    "passage": "A 28-year-old marathon runner presents with sharp lateral knee pain that begins consistently after 5 kilometers of downhill running."
  },
  {
    "id": "t2-c-007",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 32-year-old competitive golfer complains of persistent medial elbow pain aggravated duri...",
    "difficulty": "analytical",
    "text": "Palpation elicits point tenderness over the medial epicondyle. Resisted wrist flexion and resisted forearm pronation reproduce the athlete's exact symptoms. What is the clinical diagnosis?",
    "options": [
      "Lateral epicondylalgia (Tennis Elbow / ECRB tendinopathy)",
      "Medial epicondylalgia (Golfer's Elbow / Common Flexor Tendinopathy)",
      "Carpal tunnel syndrome with median nerve entrapment",
      "Radial tunnel syndrome at the arcade of Frohse"
    ],
    "correct": 1,
    "explanation": "Medial epicondylalgia (Golfer's Elbow) is an angiofibroblastic tendinopathy of the common flexor-pronator tendon origin (primarily Pronator Teres and Flexor Carpi Radialis), provoked by resisted wrist flexion and pronation.",
    "passageId": "cs-14",
    "passage": "A 32-year-old competitive golfer complains of persistent medial elbow pain aggravated during the trailing arm acceleration and impact phase of golf swings."
  },
  {
    "id": "t2-c-008",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 32-year-old competitive golfer complains of persistent medial elbow pain aggravated duri...",
    "difficulty": "analytical",
    "text": "What is the most appropriate progressive exercise rehabilitation intervention for this golfer's medial epicondylalgia?",
    "options": [
      "Complete immobilization in an elbow cast for 4 months",
      "Isometric to progressive eccentric-concentric wrist flexor and pronator strengthening (e.g., Reverse Tyler Twist protocol)",
      "High-impact plyometric medicine ball throws immediately without progressive loading",
      "Exclusive application of hot packs without active exercise"
    ],
    "correct": 1,
    "explanation": "Evidence-based tendon management requires progressive tendon loading, beginning with analgesic isometrics, progressing to eccentric-concentric wrist flexor/pronator strengthening, and gradual sport-specific swing biomechanics modification.",
    "passageId": "cs-14",
    "passage": "A 32-year-old competitive golfer complains of persistent medial elbow pain aggravated during the trailing arm acceleration and impact phase of golf swings."
  },
  {
    "id": "t2-c-009",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A professional rugby player sustains an ankle injury during a tackle when his foot is trap...",
    "difficulty": "analytical",
    "text": "On examination, there is marked pain above the ankle joint line, a positive Squeeze test of the mid-calf, and a positive External Rotation Stress test (Kleiger's test). What injury is indicated?",
    "options": [
      "Isolated ATFL minor grade I inversion sprain",
      "High Ankle (Distal Tibiofibular Syndesmotic) Ligament Sprain",
      "Plantar fascia acute rupture at the calcaneal tuberosity",
      "Retrocalcaneal bursitis with Achilles tendon ossification"
    ],
    "correct": 1,
    "explanation": "A mechanism of forced external rotation and dorsiflexion with positive Kleiger's and syndesmosis Squeeze tests is diagnostic of a syndesmotic ('High Ankle') sprain involving the anterior/posterior inferior tibiofibular ligaments and interosseous membrane.",
    "passageId": "cs-15",
    "passage": "A professional rugby player sustains an ankle injury during a tackle when his foot is trapped on the turf and forced into extreme external rotation and hyper-dorsiflexion."
  },
  {
    "id": "t2-c-010",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A professional rugby player sustains an ankle injury during a tackle when his foot is trap...",
    "difficulty": "analytical",
    "text": "Compared to a standard grade II lateral ankle sprain (ATFL/CFL), how does the recovery timeline and weight-bearing protocol typically differ for a syndesmotic high ankle sprain?",
    "options": [
      "Syndesmotic sprains heal in 3 days with immediate unconstrained sprinting",
      "Syndesmotic sprains require a significantly longer recovery timeline (often 6–12 weeks) and initial non-weight-bearing immobilization to protect mortise stability",
      "Syndesmotic sprains never require physiotherapy and resolve with zero rehab",
      "Syndesmotic sprains require immediate full-contact match play within 24 hours"
    ],
    "correct": 1,
    "explanation": "Syndesmotic sprains take approximately twice as long to rehabilitate (typically 6–12+ weeks) because axial loading and dorsiflexion wedge the talus into the mortise, separating the fibula and tibia and delaying syndesmotic collagen healing.",
    "passageId": "cs-15",
    "passage": "A professional rugby player sustains an ankle injury during a tackle when his foot is trapped on the turf and forced into extreme external rotation and hyper-dorsiflexion."
  },
  {
    "id": "t2-c-011",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 14-year-old male soccer player experiencing a rapid growth spurt reports progressive ant...",
    "difficulty": "analytical",
    "text": "Pain is aggravated by kicking, jumping, and kneeling, and is provoked by resisted knee extension. What is the most likely diagnosis?",
    "options": [
      "Sever's disease of the calcaneus in the heel",
      "Osgood-Schlatter Disease (Traction Apophysitis of the Tibial Tubercle)",
      "Sinding-Larsen-Johansson syndrome of the inferior patellar pole",
      "Acute anterior cruciate ligament rupture with hemarthrosis"
    ],
    "correct": 1,
    "explanation": "Osgood-Schlatter disease is a traction apophysitis of the tibial tuberosity caused by repetitive quadriceps contractions pulling on the secondary ossification center during adolescent growth spurts.",
    "passageId": "cs-16",
    "passage": "A 14-year-old male soccer player experiencing a rapid growth spurt reports progressive anterior knee pain, localized swelling, and prominent bony enlargement over the tibial tuberosity."
  },
  {
    "id": "t2-c-012",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 14-year-old male soccer player experiencing a rapid growth spurt reports progressive ant...",
    "difficulty": "analytical",
    "text": "What is the recommended management strategy for this adolescent athlete with Osgood-Schlatter disease?",
    "options": [
      "Immediate surgical excision of the tibial tuberosity and complete sports retirement",
      "Load modification (activity management), quadriceps and hamstring flexibility/strength balancing, and ice/infrapatellar strap for symptom relief",
      "Daily high-impact plyometric depth jumps from 60 cm boxes to force remodeling",
      "Total cast immobilization of the knee for 6 months with crutches"
    ],
    "correct": 1,
    "explanation": "Osgood-Schlatter is self-limiting and managed with load management (reducing jumping/kicking volume to symptom tolerance), progressive quadriceps/hamstring stretching, closed-chain strengthening, and ice for acute flare-ups.",
    "passageId": "cs-16",
    "passage": "A 14-year-old male soccer player experiencing a rapid growth spurt reports progressive anterior knee pain, localized swelling, and prominent bony enlargement over the tibial tuberosity."
  },
  {
    "id": "t2-c-013",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old middle-distance runner reports severe bilateral lower leg tightness, burning...",
    "difficulty": "analytical",
    "text": "Physical examination at rest is completely normal. What is the primary suspected diagnosis?",
    "options": [
      "Medial Tibial Stress Syndrome with chronic periostitis",
      "Chronic Exertional Compartment Syndrome (CECS) of the anterior compartment",
      "Tibial complete displaced fracture with periosteal gap",
      "Lumbar spinal stenosis with neurogenic claudication"
    ],
    "correct": 1,
    "explanation": "CECS presents with exercise-induced elevated intracompartmental pressures causing ischemia, pain, and transient paresthesia that occurs predictably at a specific running duration and resolves completely with rest.",
    "passageId": "cs-17",
    "passage": "A 22-year-old middle-distance runner reports severe bilateral lower leg tightness, burning pain, and numbness on the dorsum of both feet that starts reliably after 15 minutes of running and completely resolves within 20 minutes of stopping."
  },
  {
    "id": "t2-c-014",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old middle-distance runner reports severe bilateral lower leg tightness, burning...",
    "difficulty": "analytical",
    "text": "What is the definitive diagnostic gold standard test used to confirm Chronic Exertional Compartment Syndrome?",
    "options": [
      "Resting plain lateral radiograph of the tibia",
      "Dynamic pre- and post-exercise intramuscular compartment pressure manometry testing",
      "Serum creatine kinase assessment immediately following a race",
      "Diagnostic ultrasound of the Achilles tendon"
    ],
    "correct": 1,
    "explanation": "Dynamic intracompartmental pressure measurement (Pedowitz criteria: resting pressure ≥15 mmHg, 1-min post-exercise ≥30 mmHg, or 5-min post-exercise ≥20 mmHg) is the diagnostic gold standard for CECS.",
    "passageId": "cs-17",
    "passage": "A 22-year-old middle-distance runner reports severe bilateral lower leg tightness, burning pain, and numbness on the dorsum of both feet that starts reliably after 15 minutes of running and completely resolves within 20 minutes of stopping."
  },
  {
    "id": "t2-c-015",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 25-year-old elite field hockey player underwent partial lateral meniscectomy 6 weeks ago...",
    "difficulty": "analytical",
    "text": "As she transitions to sport-specific court conditioning, which kinetic criterion indicates readiness for linear and multi-directional running progression?",
    "options": [
      "Zero joint effusion, full active knee extension/flexion, and at least 80–85% quadriceps limb symmetry index (LSI)",
      "Presence of grade III joint effusion and 20° flexion contracture in the knee",
      "Ability to walk 50 meters with crutches and moderate joint pain",
      "Normal MRI with complete cartilage regeneration across the compartment"
    ],
    "correct": 0,
    "explanation": "Progression to running post-meniscectomy requires absence of joint effusion (trace or zero), full symmetric range of motion, normal gait mechanics, and adequate quadriceps strength symmetry (LSI >80%).",
    "passageId": "cs-18",
    "passage": "A 25-year-old elite field hockey player underwent partial lateral meniscectomy 6 weeks ago."
  },
  {
    "id": "t2-c-016",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 25-year-old elite field hockey player underwent partial lateral meniscectomy 6 weeks ago...",
    "difficulty": "analytical",
    "text": "Post-meniscectomy athletes have an elevated long-term risk for developing unicompartmental osteoarthritis. Which ongoing biomechanical and conditioning recommendation is essential to preserve long-term joint health?",
    "options": [
      "Complete lifelong cessation of all lower body strength training",
      "Maintaining optimal lower limb alignment, high quadriceps/hamstring strength, core stability, and healthy body composition",
      "High-impact continuous running on hard concrete surfaces 7 days a week",
      "Exclusive use of heavy open-chain leg extensions with maximal terminal knee hyperextension"
    ],
    "correct": 1,
    "explanation": "Preserving knee joint health post-meniscectomy requires maintaining robust muscular strength (quadriceps/hamstrings act as dynamic shock absorbers), neuromuscular control, optimal alignment, and body weight management.",
    "passageId": "cs-18",
    "passage": "A 25-year-old elite field hockey player underwent partial lateral meniscectomy 6 weeks ago."
  },
  {
    "id": "t2-c-017",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: During force-plate drop jump testing (from 30 cm box) of an athlete recovering from lower ...",
    "difficulty": "analytical",
    "text": "How should this data be interpreted?",
    "options": [
      "The athlete demonstrates optimal reactive strength and perfect inter-limb symmetry across force plates",
      "The athlete demonstrates poor reactive strength (elevated contact time) and compensatory inter-limb loading asymmetry, requiring targeted plyometric and unilateral force absorption training",
      "The athlete should immediately return to full unconstrained international match play without precautions",
      "Force plate testing is completely invalid for evaluating dynamic stretch-shortening cycle function"
    ],
    "correct": 1,
    "explanation": "An RSI of 1.0 m/s with contact time >0.25 s reflects prolonged amortization and poor fast SSC function, while 65/35% limb loading asymmetry demonstrates ongoing inter-limb compensation and deficit.",
    "passageId": "cs-19",
    "passage": "During force-plate drop jump testing (from 30 cm box) of an athlete recovering from lower limb injury, the data shows: Contact Time = 0.28 s, Jump Height = 0.28 m (Reactive Strength Index RSI = 1.0 m/s), along with significant ground reaction force asymmetry (65% load absorbed by uninjured limb, 35% by injured limb)."
  },
  {
    "id": "t2-c-018",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: During force-plate drop jump testing (from 30 cm box) of an athlete recovering from lower ...",
    "difficulty": "analytical",
    "text": "What specific training intervention should be programmed to correct this athlete's ground contact time and inter-limb landing asymmetry?",
    "options": [
      "Progressive unilateral landing drills, low-amplitude fast stretch-shortening cycle plyometrics (e.g., ankle hops, pogo jumps), and eccentric single-leg strength training",
      "High-volume bilateral maximal heavy leg presses strictly seated on a machine",
      "Passive bed rest without ground contact for 4 consecutive weeks",
      "Applying ice packs to the knee while watching sport analysis videos"
    ],
    "correct": 0,
    "explanation": "Improving RSI and inter-limb symmetry requires single-leg force absorption training (unilateral drop landings) combined with fast SSC plyometric drills (pogos, hurdle hops with ground contact time <0.20 s).",
    "passageId": "cs-19",
    "passage": "During force-plate drop jump testing (from 30 cm box) of an athlete recovering from lower limb injury, the data shows: Contact Time = 0.28 s, Jump Height = 0.28 m (Reactive Strength Index RSI = 1.0 m/s), along with significant ground reaction force asymmetry (65% load absorbed by uninjured limb, 35% by injured limb)."
  },
  {
    "id": "t2-c-019",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old professional football (soccer) player presents with chronic groin pain exace...",
    "difficulty": "analytical",
    "text": "Physical examination demonstrates tenderness along the origin of the adductor longus at the pubic tubercle, pain on resisted hip adduction in 0° and 45° of hip flexion (positive Squeeze test), and no palpable inguinal hernia. According to the Doha International Consensus on Groin Pain in Athletes, how is this clinical entity classified?",
    "options": [
      "Iliopsoas-related groin pain with hip flexor tenderness",
      "Adductor-related groin pain with pain on resisted adduction",
      "Pubic-related groin pain with symphyseal tenderness",
      "Inguinal-related groin pain with canal tenderness"
    ],
    "correct": 1,
    "explanation": "The Doha Agreement classifies groin pain into defined clinical entities: Adductor-related groin pain is defined as adductor tenderness and pain on resisted adduction testing.",
    "passageId": "cs-20",
    "passage": "A 21-year-old professional football (soccer) player presents with chronic groin pain exacerbated during long passing and kicking."
  },
  {
    "id": "t2-c-020",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old professional football (soccer) player presents with chronic groin pain exace...",
    "difficulty": "analytical",
    "text": "Which evidence-based exercise protocol has been proven in randomized controlled trials to significantly reduce the risk and prevalence of adductor-related groin injuries in football players?",
    "options": [
      "Copenhagen Adduction Exercise program (progressive eccentric adductor loading)",
      "Passive groin stretching on a floor mat for 30 seconds daily without load",
      "Isolated knee extension machine training performed at high velocity",
      "Application of therapeutic ultrasound over the pubic symphysis without exercise"
    ],
    "correct": 0,
    "explanation": "The Copenhagen Adduction Exercise (Haroy et al.) provides progressive eccentric overload to the hip adductors and has been shown in large RCTs to reduce adductor injury risk by up to 41% in footballers.",
    "passageId": "cs-20",
    "passage": "A 21-year-old professional football (soccer) player presents with chronic groin pain exacerbated during long passing and kicking."
  },
  {
    "id": "t3-a1-001",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "foundational",
    "text": "In the force-velocity relationship of skeletal muscle, what occurs to maximal force production as the velocity of concentric muscle shortening increases?",
    "options": [
      "Concentric force increases exponentially due to elevated motor unit firing rates across all fibers",
      "Concentric force decreases progressively because cross-bridges lack time to form and cycle",
      "Concentric force remains completely constant across all movement velocities and joint angles",
      "Concentric force immediately drops to zero whenever movement velocity exceeds 0.1 meters per second"
    ],
    "correct": 1,
    "explanation": "According to Hill's muscle equation, as concentric shortening velocity increases, force production decreases hyperbolically because actin-myosin cross-bridges have less time to form and cycle."
  },
  {
    "id": "t3-a1-002",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "applied",
    "text": "What is 'Complex Training' in advanced strength and conditioning program design?",
    "options": [
      "Alternating between aerobic swimming and heavy barbell deadlifts within the same training hour",
      "Pairing a heavy resistance exercise (e.g., 85% 1RM back squat) with a biomechanically similar explosive plyometric exercise (e.g., jump squat)",
      "Performing 20 different single-joint isolation exercises to muscular failure in a single session",
      "Executing resistance exercises while wearing continuous hypoxia simulation training masks"
    ],
    "correct": 1,
    "explanation": "Complex training alternates heavy biomechanically matched resistance loads (conditioning stimulus) with explosive plyometric tasks to exploit Post-Activation Performance Enhancement (PAPE)."
  },
  {
    "id": "t3-a1-003",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "analytical",
    "text": "In Rate of Force Development (RFD) profiling from isometric mid-thigh pull (IMTP) testing, 'early RFD' measured within the first 0 to 50–100 ms is primarily determined by:",
    "options": [
      "Total structural muscle cross-sectional area and bone mineral density across the skeleton",
      "Intrinsic neural drive, motor unit recruitment speed, and initial motor unit discharge rates",
      "Cardiovascular stroke volume and systemic blood hemoglobin oxygen transport concentration",
      "Intramuscular glycogen stores and mitochondrial oxidative enzyme density in slow fibers"
    ],
    "correct": 1,
    "explanation": "Early RFD (<100 ms) is predominantly governed by neural factors (initial motor unit discharge rate and recruitment speed), whereas late RFD (>200 ms) is more strongly related to maximal strength and muscle cross-sectional area."
  },
  {
    "id": "t3-a1-004",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "foundational",
    "text": "With chronic heavy resistance training, what is the typical shift in fast-twitch skeletal muscle fiber subtype expression?",
    "options": [
      "Type I slow-twitch fibers convert entirely into Type IIx fast glycolytic fibers within weeks",
      "Type IIx fast-twitch fibers transition toward more fatigue-resistant Type IIa fibers",
      "All muscle fibers convert permanently into non-contractile connective scar tissue fibers",
      "Type IIa oxidative-glycolytic fibers convert directly into smooth involuntary muscle cells"
    ],
    "correct": 1,
    "explanation": "Resistance training induces a shift within the fast-twitch fiber pool from the highly fatigable Type IIx (formerly IIb) isoform toward the more oxidative and fatigue-resistant Type IIa phenotype."
  },
  {
    "id": "t3-a1-005",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "applied",
    "text": "In the Conjugate / Westside periodization system, what is the role of the 'Dynamic Effort' (DE) training day?",
    "options": [
      "Lifting submaximal loads (e.g., 50–60% 1RM) with maximal acceleration and movement velocity",
      "Testing 1RM maximal competitive lifts to absolute concentric failure on every training exercise",
      "Performing low-intensity aerobic walking for 90 continuous minutes in a steady state zone",
      "Executing passive stretching routines exclusively without using any external weights or bands"
    ],
    "correct": 0,
    "explanation": "The Dynamic Effort (DE) method trains rate of force development and explosive power by moving submaximal loads (50–60% 1RM) at maximum concentric velocity, often with accommodating resistance (bands/chains)."
  },
  {
    "id": "t3-a1-006",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "analytical",
    "text": "According to the Fick Equation, maximal oxygen consumption (VO2max) is mathematically defined as the product of:",
    "options": [
      "Maximal Heart Rate multiplied by Pulmonary Minute Ventilation Volume",
      "Maximal Cardiac Output (Q) multiplied by Maximal Arterio-Venous Oxygen Difference [C(a-v)O2]",
      "Resting Stroke Volume divided by Total Peripheral Vascular Resistance",
      "Maximal Tidal Volume multiplied by Pulmonary Capillary Diffusion Capacity"
    ],
    "correct": 1,
    "explanation": "The Fick Equation states: VO2 = Cardiac Output (Heart Rate x Stroke Volume) x Arterio-Venous Oxygen Difference [C(a-v)O2], linking central delivery with peripheral oxygen extraction."
  },
  {
    "id": "t3-a1-007",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "foundational",
    "text": "What is the typical physiological rate of muscle glycogen resynthesis following exhaustive glycogen-depleting exercise when adequate carbohydrates are consumed?",
    "options": [
      "1% to 2% per hour, requiring up to 7 days for complete restoration across muscles",
      "5% to 7% per hour, requiring approximately 20 to 24 hours for complete replenishment",
      "50% per hour, fully restored within 2 hours regardless of post-exercise dietary intake",
      "Glycogen resynthesis does not initiate until 48 hours following exercise cessation"
    ],
    "correct": 1,
    "explanation": "Under optimal carbohydrate feeding (1.0–1.2 g/kg/hr), muscle glycogen resynthesizes at an average rate of 5–7% per hour, requiring roughly 20 to 24 hours to fully restore depleted stores."
  },
  {
    "id": "t3-a1-008",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "applied",
    "text": "In exercise-induced fatigue, which mechanism is classified as a 'Central Fatigue' factor rather than a peripheral muscle factor?",
    "options": [
      "Depletion of intramuscular phosphocreatine within contracting sarcomeres",
      "Accumulation of inorganic phosphate inhibiting actin-myosin cross-bridge binding",
      "Reduction in voluntary corticospinal motor drive and altered central neurotransmitter levels (e.g., serotonin, dopamine)",
      "Impaired calcium release from the sarcoplasmic reticulum ryanodine receptors during excitation"
    ],
    "correct": 2,
    "explanation": "Central fatigue originates proximal to the neuromuscular junction, characterized by reduced voluntary activation, altered cerebral neurotransmitters (5-HT/dopamine), and decreased motor cortex firing rates."
  },
  {
    "id": "t3-a1-009",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "analytical",
    "text": "Why does the 'Live High, Train Low' (LHTL) altitude training model offer superior physiological advantages compared to 'Live High, Train High' (LHTH)?",
    "options": [
      "It eliminates all renal production of erythropoietin and lowers blood hematocrit levels",
      "It stimulates hypoxia-induced erythrocytic mass expansion while allowing athletes to maintain high training intensity and speed near sea level",
      "It causes profound muscle atrophy that artificially reduces the total metabolic cost of running",
      "It permanently prevents sweat and electrolyte loss during high-temperature championship competition"
    ],
    "correct": 1,
    "explanation": "LHTL allows athletes to gain altitude-induced hematological adaptations (increased EPO and RBC mass from living at ~2000–2500m) while maintaining sea-level training velocities, power output, and neuromuscular quality."
  },
  {
    "id": "t3-a1-010",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "foundational",
    "text": "What is the critical clinical distinction between Heat Exhaustion and Exertional Heat Stroke in an athlete?",
    "options": [
      "Heat stroke involves core body temperature ≥40.5°C (104°F) accompanied by Central Nervous System dysfunction (confusion, altered mental status, collapse)",
      "Heat exhaustion is accompanied by permanent neurological coma and extreme core hyperpyrexia exceeding 42°C",
      "Heat stroke presents with intense shivering, pale cold skin, and completely normal rectal body temperature",
      "Heat exhaustion occurs exclusively during indoor swimming competitions without any sweating response"
    ],
    "correct": 0,
    "explanation": "Exertional heat stroke is a medical emergency defined by severe hyperthermia (core rectal temp ≥40.5°C) and central nervous system (CNS) abnormalities (delirium, ataxia, seizures, loss of consciousness)."
  },
  {
    "id": "t3-a1-011",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "applied",
    "text": "During incremental treadmill testing, an abrupt increase in the Ventilatory Equivalent for Carbon Dioxide (VE/VCO2) corresponds to which physiological marker?",
    "options": [
      "Ventilatory Threshold 1 (VT1) representing the aerobic threshold",
      "Ventilatory Threshold 2 (VT2 / Respiratory Compensation Point) representing severe metabolic acidosis",
      "Basal resting metabolic rate measured prior to exercise warm-up",
      "Lactate recovery nadir point occurring during post-exercise rest"
    ],
    "correct": 1,
    "explanation": "VT2 (Respiratory Compensation Point) is marked by hyperventilation exceeding both VO2 and VCO2, resulting in a systemic breakpoint rise in both VE/VO2 and VE/VCO2 due to severe metabolic acidosis."
  },
  {
    "id": "t3-a1-012",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "analytical",
    "text": "In sports nutrition, what is the physiological rationale behind the 'Train Low, Compete High' carbohydrate periodization strategy?",
    "options": [
      "To cause chronic muscle protein wasting before major championships",
      "To amplify cellular stress signaling (AMPK and PGC-1alpha) to enhance mitochondrial biogenesis and fat oxidation enzymes",
      "To permanently abolish all glycogen synthase enzyme activity in liver and muscle",
      "To prevent the intestinal absorption of dietary electrolytes during competition"
    ],
    "correct": 1,
    "explanation": "Training with low glycogen availability amplifies the adaptive response to endurance exercise by upregulating AMPK, p38 MAPK, and PGC-1α, driving greater mitochondrial enzyme and fat oxidation adaptations."
  },
  {
    "id": "t3-a1-013",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "foundational",
    "text": "What is the evidence-based ergogenic dosing protocol for acute Caffeine supplementation in sports performance?",
    "options": [
      "0.5 mg/kg body weight consumed 24 hours prior to competition",
      "3 to 6 mg/kg body weight consumed approximately 60 minutes prior to exercise",
      "25 to 30 mg/kg body weight consumed as an intravenous injection",
      "100 mg consumed every 5 minutes throughout the entire competitive day"
    ],
    "correct": 1,
    "explanation": "Consuming 3–6 mg/kg of anhydrous caffeine ~60 minutes pre-exercise provides optimal central nervous system adenosine receptor antagonism, reducing perceived exertion and enhancing endurance and power."
  },
  {
    "id": "t3-a1-014",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "applied",
    "text": "Sodium bicarbonate acute loading improves high-intensity anaerobic performance lasting 1 to 7 minutes by:",
    "options": [
      "Increasing extracellular bicarbonate concentration and expanding blood buffering capacity against metabolic acidosis",
      "Directly binding to sarcomeric actin to prevent cross-bridge detachment during fatigue",
      "Inhibiting all sweat production during high-temperature championship events",
      "Increasing resting pulmonary diffusion capacity for atmospheric carbon monoxide"
    ],
    "correct": 0,
    "explanation": "Sodium bicarbonate (0.3 g/kg consumed 60–90 min pre-exercise) increases blood pH and bicarbonate concentration, enhancing extracellular H+ efflux from contracting muscles during intense glycolytic exercise."
  },
  {
    "id": "t3-a1-015",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "analytical",
    "text": "In an athlete presenting with 'non-anemic iron deficiency', what biochemical blood profile is typically observed?",
    "options": [
      "Low serum Ferritin with normal Hemoglobin and normal Hematocrit concentrations",
      "Severely reduced Hemoglobin (<8 g/dL) with elevated Ferritin (>300 ng/mL)",
      "Extremely high Serum Iron with absent circulating red blood cells",
      "Low white blood cell count with elevated total iron-binding capacity"
    ],
    "correct": 0,
    "explanation": "Non-anemic iron deficiency is characterized by depleted iron storage (serum ferritin <30–35 ug/L in athletes) despite normal hemoglobin concentrations, which can still impair energetic enzymes and oxidative capacity."
  },
  {
    "id": "t3-a1-016",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "foundational",
    "text": "Why is a high-fat ketogenic diet typically detrimental to performance in high-intensity sports and sprint finishes?",
    "options": [
      "It increases the oxygen cost per unit of ATP produced and downregulates pyruvate dehydrogenase activity",
      "It causes instantaneous cardiac valve regurgitation during high-intensity running",
      "It completely blocks all intestinal amino acid and protein absorption",
      "It increases glycogen storage in skeletal muscle beyond normal physiological limits"
    ],
    "correct": 0,
    "explanation": "Fat oxidation requires more oxygen per mole of ATP synthesized compared to carbohydrate oxidation (~5.6 vs 6.3 ATP/O2) and downregulates pyruvate dehydrogenase (PDH), impairing high-intensity glycolytic power."
  },
  {
    "id": "t3-a1-017",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "applied",
    "text": "In the Heath-Carter anthropometric somatotype method, which measurements are used to calculate the 'Endomorphy' component?",
    "options": [
      "Humerus and femur bone breadths, arm and calf girths, and stature in standing",
      "Sum of triceps, subscapular, and supraspinale skinfolds corrected for stature",
      "Height divided by the cube root of body weight (ponderal index equation)",
      "Total body weight divided by standing bilateral arm span measurement"
    ],
    "correct": 1,
    "explanation": "Endomorphy (relative adiposity) is derived from the sum of three skinfolds (triceps, subscapular, and supraspinale) adjusted for stature in the Heath-Carter equations."
  },
  {
    "id": "t3-a1-018",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "analytical",
    "text": "What is the 'Ape Index' in sports kinanthropometry?",
    "options": [
      "The ratio of an athlete's total arm span relative to their standing height",
      "The ratio of sitting height relative to total standing stature",
      "The ratio of biacromial shoulder breadth to bicristal pelvic breadth",
      "The ratio of total body mass relative to lower limb length"
    ],
    "correct": 0,
    "explanation": "The Ape Index is calculated as arm span divided by standing height (or arm span minus height); a positive ape index (arm span > height) offers biomechanical reach advantages in sports like basketball, boxing, and swimming."
  },
  {
    "id": "t3-a1-019",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "foundational",
    "text": "In the Greulich-Pyle method of skeletal maturity assessment, bone age is determined by comparing radiographs of which anatomical region against a reference atlas?",
    "options": [
      "Bilateral femoral condyles and patella posteroanterior radiographs",
      "Left hand and wrist posteroanterior radiograph against standard plates",
      "Pelvic iliac crest apophysis evaluating the Risser classification sign",
      "Lateral cervical spine radiographs evaluating vertebral body morphology"
    ],
    "correct": 1,
    "explanation": "The Greulich-Pyle atlas assesses skeletal maturity by comparing the ossification centers of a posteroanterior X-ray of the left hand and wrist with standard age-matched plates."
  },
  {
    "id": "t3-a1-020",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "applied",
    "text": "Throughout an elite athletic season, how does an athlete's somatotype typically shift from the general preparation phase to the peak competition phase?",
    "options": [
      "Endomorphy increases while mesomorphy and ectomorphy decrease significantly",
      "Endomorphy decreases (reduced body fat) while relative mesomorphy increases",
      "Ectomorphy increases to 7 while all skeletal muscle mass is catabolized",
      "Somatotype is genetically fixed and can never alter under training protocols"
    ],
    "correct": 1,
    "explanation": "Training and dietary conditioning over a season typically reduce relative fatness (lowering endomorphy) and preserve or enhance functional muscle mass (increasing relative mesomorphy)."
  },
  {
    "id": "t3-a1-021",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "analytical",
    "text": "The Ponderal Index (Reciprocal Ponderal Index - RPI) used to calculate Ectomorphy in somatotyping is mathematically defined as:",
    "options": [
      "Body Weight (kg) divided by Height (m) squared",
      "Height (cm) divided by [Body Weight (kg)]^(1/3)",
      "Arm Span (cm) divided by Sitting Height (cm)",
      "Chest Girth (cm) divided by Waist Girth (cm)"
    ],
    "correct": 1,
    "explanation": "In the Heath-Carter formula, Ectomorphy is calculated using the Reciprocal Ponderal Index (Height in cm divided by the cube root of weight in kg), measuring relative linearity and slenderness."
  },
  {
    "id": "t3-a1-022",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "foundational",
    "text": "According to Weiner's Attribution Theory in sport, an athlete who attributes a loss to 'bad referee calls' is attributing the outcome to factors that are:",
    "options": [
      "Internal, stable, and personally controllable by the athlete",
      "External, unstable, and personally uncontrollable by the athlete",
      "Internal, unstable, and highly controllable by the athlete",
      "Internal, permanent, and genetically determined in character"
    ],
    "correct": 1,
    "explanation": "Referee decisions are classified under Weiner's framework as External (outside the self), Unstable (varies from match to match), and Uncontrollable by the athlete."
  },
  {
    "id": "t3-a1-023",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "applied",
    "text": "In Autogenic Training (Schultz & Luthe) for athletic stress management, relaxation is induced through systematic self-suggestions of which physiological sensations?",
    "options": [
      "Extreme muscle tension and rapid hyperventilation patterns",
      "Heaviness in the limbs and warmth in the extremities",
      "Intense cold shivering and mental hyperactivity states",
      "Elevated heart rate and peripheral vasoconstriction responses"
    ],
    "correct": 1,
    "explanation": "Autogenic training consists of six standardized mental exercises focusing on sensations of heaviness (reflecting muscular relaxation) and warmth (reflecting peripheral vasodilation)."
  },
  {
    "id": "t3-a1-024",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "analytical",
    "text": "According to Albert Bandura's Self-Efficacy Theory, which source provides the most potent and dependable influence on an athlete's self-efficacy beliefs?",
    "options": [
      "Verbal persuasion from teammates and supportive family members",
      "Performance accomplishments (past authentic mastery experiences)",
      "Vicarious experiences (observing similar peers execute the task)",
      "Emotional and physiological arousal states during pre-competition"
    ],
    "correct": 1,
    "explanation": "Past mastery experiences and successful performance accomplishments provide the most authentic and powerful evidence of capability, exerting the strongest effect on self-efficacy."
  },
  {
    "id": "t3-a1-025",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "foundational",
    "text": "The 'Conscious Processing Hypothesis' (Masters) explains athletic 'choking under pressure' as being caused by:",
    "options": [
      "Complete physical paralysis of motor units due to acute lactic acid toxicity",
      "An athlete attempting to consciously control and monitor well-learned, automated motor skills under high anxiety, disrupting fluid execution",
      "Sudden loss of glycogen stores in the cerebral motor cortex tissue",
      "Failure to consume commercial sports supplements prior to competition"
    ],
    "correct": 1,
    "explanation": "Choking occurs when high anxiety prompts an athlete to reinvest explicit, conscious control over automated procedural motor programs, breaking down coordinated timing and fluency."
  },
  {
    "id": "t3-a1-026",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "applied",
    "text": "In Galvanic Skin Response (GSR / Electrodermal Activity) biofeedback training, what physiological parameter is being measured to reflect sympathetic nervous system arousal?",
    "options": [
      "Brain electrical activity in the occipital visual cortex",
      "Skin electrical conductance resulting from eccrine sweat gland activity",
      "Core body temperature measured in the external auditory canal",
      "Arterial pulse wave transit time across the radial artery"
    ],
    "correct": 1,
    "explanation": "GSR measures changes in electrical conductance of the skin caused by moisture from eccrine sweat glands, which are innervated purely by sympathetic cholinergic fibers and reflect emotional arousal."
  },
  {
    "id": "t3-a1-027",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "analytical",
    "text": "In Intermittent Pneumatic Compression (IPC) therapy for athlete recovery, what is the primary proposed physiological mechanism?",
    "options": [
      "Direct electrical depolarization of motor endplates to stimulate hypertrophy",
      "Enhancing venous return, promoting lymphatic hydrodynamic clearance, and reducing peripheral swelling and stiffness",
      "Heating deep bone marrow to stimulate osteoblast cellular proliferation",
      "Decreasing whole-body oxygen consumption to absolute basal metabolic levels"
    ],
    "correct": 1,
    "explanation": "IPC uses sequential pneumatic sleeves to provide dynamic peristaltic pressure gradients, accelerating venous and lymphatic return and facilitating the clearance of metabolic waste and interstitial edema."
  },
  {
    "id": "t3-a1-028",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "foundational",
    "text": "When performing 2D video-based kinematic motion analysis (e.g., in Dartfish), what calibration step is mandatory to minimize 'parallax error'?",
    "options": [
      "Placing the camera at an extreme 10-degree angle to the athlete's plane of motion",
      "Positioning the camera perpendicular (90 degrees) to the primary plane of movement at an adequate distance with optical zoom",
      "Constantly moving the tripod during the entire filming trial across the field",
      "Using wide-angle fisheye lenses with extreme lens distortion and close capture"
    ],
    "correct": 1,
    "explanation": "Parallax error occurs when movement is viewed off-axis; placing the optical axis strictly perpendicular (90°) to the 2D plane of motion and zooming from a distance minimizes perspective distortion."
  },
  {
    "id": "t3-a1-029",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "applied",
    "text": "In Force-Velocity-Power profiling of jumping (Samozino & Morin), what does a 'Force Deficit' indicate in an athlete?",
    "options": [
      "The athlete produces too much force and lacks velocity capabilities during takeoff",
      "The athlete's maximal theoretical force production (F0) at low velocities is suboptimal relative to optimal profile, indicating a need for heavy resistance training",
      "The athlete has excessive tendon stiffness and requires zero additional strength work",
      "The athlete cannot jump due to structural intra-articular bone fracture"
    ],
    "correct": 1,
    "explanation": "A force deficit indicates that an athlete's maximal theoretical force capability (F0) is the limiting factor in their ballistic performance profile, pointing to heavy resistance training (>80% 1RM) as the primary intervention."
  },
  {
    "id": "t3-a1-030",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "analytical",
    "text": "In diagnostic test accuracy, 'Specificity' is defined as the ability of a clinical test to correctly identify:",
    "options": [
      "Those individuals who truly have the specific disease or pathology (True Positive rate)",
      "Those individuals who truly do NOT have the disease or pathology (True Negative rate)",
      "The exact cost-effectiveness of medical equipment in a competitive sports clinic",
      "The percentage of athletes who will successfully return to play within 7 days"
    ],
    "correct": 1,
    "explanation": "Specificity is the proportion of disease-free individuals who test negative (True Negatives / [True Negatives + False Positives]). A highly specific test rules in disease when positive (SpPIn)."
  },
  {
    "id": "t3-a1-031",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "foundational",
    "text": "In statistical analysis, the 'Coefficient of Determination' (R-squared) indicates:",
    "options": [
      "The exact probability that the experimental null hypothesis is correct",
      "The proportion of variance in the dependent variable that is predictable from the independent variable",
      "The absolute difference between two sample means in standardized deviations",
      "The presence of categorical measurement errors during experimental data collection"
    ],
    "correct": 1,
    "explanation": "R-squared (R^2) represents the percentage of total variance in the outcome variable explained by the predictor variable in a linear regression model."
  },
  {
    "id": "t3-a1-032",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "applied",
    "text": "How does the 'Positive Predictive Value' (PPV) of a clinical screening test change as the prevalence of a sports injury in the tested athletic population increases?",
    "options": [
      "PPV decreases progressively toward absolute zero",
      "PPV increases, meaning a positive test result is more likely to represent a true positive",
      "PPV remains completely unchanged regardless of injury prevalence fluctuations",
      "PPV becomes mathematically impossible to compute without infinite sample size"
    ],
    "correct": 1,
    "explanation": "Unlike sensitivity and specificity (which are intrinsic test properties), Positive Predictive Value (PPV) increases directly as the pre-test probability/prevalence of the condition in the population increases."
  },
  {
    "id": "t3-a2-001",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "foundational",
    "text": "Which prestigious rolling trophy is awarded annually by the President of India to the top-performing university in inter-university sports tournaments?",
    "options": [
      "Rashtriya Khel Protsahan Puruskar for Corporate Excellence",
      "Maulana Abul Kalam Azad (MAKA) Trophy for Universities",
      "Dhyan Chand Lifetime Trophy for Veteran Athletes",
      "Khelo India University Shield for State Academies"
    ],
    "correct": 1,
    "explanation": "The Maulana Abul Kalam Azad (MAKA) Trophy, instituted in 1956–57, is awarded annually to the overall best-performing university in sports competitions.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-a2-002",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "applied",
    "text": "What is the official Latin Olympic Motto, updated by the International Olympic Committee (IOC) in 2021?",
    "options": [
      "Citius, Altius, Fortius in competitive athletics",
      "Citius, Altius, Fortius – Communiter (Faster, Higher, Stronger – Together)",
      "Mens Sana in Corpore Sano across all nations",
      "Ludus Pro Patria in international amateur sports"
    ],
    "correct": 1,
    "explanation": "In July 2021, the IOC Session updated the historic Olympic motto to 'Citius, Altius, Fortius – Communiter' (Faster, Higher, Stronger – Together) to emphasize global solidarity.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-a2-003",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "foundational",
    "text": "Which Australian city was selected by the International Olympic Committee to host the Games of the XXXV Olympiad in 2032?",
    "options": [
      "Melbourne, Victoria, Australia",
      "Sydney, New South Wales, Australia",
      "Brisbane, Queensland, Australia",
      "Perth, Western Australia, Australia"
    ],
    "correct": 2,
    "explanation": "Brisbane (Queensland, Australia) was officially elected as the host city for the 2032 Summer Olympic and Paralympic Games.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-a2-004",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "Under the WADA Prohibited List, to which pharmacological class do Peptide Hormones, Growth Factors, and related substances (such as Erythropoietin and Human Growth Hormone) belong?",
    "options": [
      "Class S0: Non-approved investigational substances",
      "Class S2: Peptide Hormones, Growth Factors, Related Substances and Mimetics",
      "Class S4: Hormone and Metabolic Modulator Agents",
      "Class S6: Central Nervous System Stimulants"
    ],
    "correct": 1,
    "explanation": "Erythropoietin (EPO), growth hormone (GH), and gonadotropins belong to WADA Prohibited Class S2 (Peptide Hormones, Growth Factors, Related Substances, and Mimetics).",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-a2-005",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "foundational",
    "text": "How many distinct categories of Anti-Doping Rule Violations (ADRVs) are defined under the 2021 World Anti-Doping Code?",
    "options": [
      "5 distinct categories of violations",
      "8 distinct categories of violations",
      "11 distinct categories of violations",
      "20 distinct categories of violations"
    ],
    "correct": 2,
    "explanation": "The 2021 WADA Code defines 11 distinct ADRVs (including presence, use, whereabouts failures, tampering, possession, trafficking, administration, complicity, prohibited association, and discouraging reporting).",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-a2-006",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "applied",
    "text": "Which National Centre of Excellence (NCOE) under the Sports Authority of India serves as the premier hub for sports coaching education and high-performance sports training in northern India?",
    "options": [
      "LNCPE Thiruvananthapuram, Kerala",
      "Netaji Subhas National Institute of Sports (NSNIS), Patiala, Punjab",
      "SAI Eastern Regional Centre, Kolkata, West Bengal",
      "SAI Training Centre, Guwahati, Assam"
    ],
    "correct": 1,
    "explanation": "NSNIS Patiala is Asia's largest sports institute and the premier academic/training centre under SAI for sports coaching and performance science.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-a2-007",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "foundational",
    "text": "Under the Prevention of Sexual Harassment (POSH) Act 2013 and SAI athlete safeguarding rules, what mandatory body must be established at every SAI regional centre and sports hostel?",
    "options": [
      "Internal Complaints Committee (ICC) headed by a senior woman officer",
      "Disciplinary Court of Military Inquiry headed by police",
      "Sports Arbitration Tribunal headed by legal advocates",
      "Medical Review Board headed by sports physicians"
    ],
    "correct": 0,
    "explanation": "Under the POSH Act and SAI athlete protection regulations, an Internal Complaints Committee (ICC) headed by a senior woman officer is mandatory at all sports facilities to ensure athlete safeguarding.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-a2-008",
    "section": "A2",
    "topic": "sports governance ethics and age verification",
    "subtopic": "National Sports Development Code and athlete safeguarding",
    "difficulty": "applied",
    "text": "Under the National Sports Development Code of India (2011), what is the maximum cumulative tenure allowed for a Secretary General of a National Sports Federation without a cooling-off period?",
    "options": [
      "4 years (one term of 4 years only)",
      "8 years (two consecutive terms of 4 years each)",
      "16 years (four consecutive terms of 4 years)",
      "Life-long unlimited tenure without cooling-off"
    ],
    "correct": 1,
    "explanation": "Under the 2011 Sports Code, the Secretary General/Treasurer of an NSF can serve a maximum of two consecutive terms of 4 years (8 years total), after which a mandatory 4-year cooling-off period is required.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t3-b-001",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Thompson (Simmonds) test is performed with the patient prone and knee flexed to 90° (or feet off table) by squeezing the calf. What constitutes a positive test indicative of complete Achilles tendon rupture?",
    "options": [
      "Vigorous plantarflexion of the foot upon manual calf compression",
      "Absence of passive foot plantarflexion upon manual calf compression",
      "Inability to actively dorsiflex the great toe against resistance",
      "Severe electric shock radiating down the lateral malleolus border"
    ],
    "correct": 1,
    "explanation": "A normal calf squeeze mechanically tensions the gastrocnemius-soleus complex, producing passive plantarflexion; absence of foot plantarflexion (positive Thompson test) confirms complete rupture of the Achilles tendon."
  },
  {
    "id": "t3-b-002",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "When assessing the Posterior Cruciate Ligament (PCL), the 'Godfrey 90-90 Test' (Posterior Sag sign) is observed when the patient is supine with hips and knees flexed to 90 degrees by noting:",
    "options": [
      "Anterior translation of the tibial plateau exceeding 10 mm",
      "Posterior displacement (sagging) of the proximal tibia relative to the femoral condyles due to gravity",
      "Immediate locking of the patella into the lateral femoral groove",
      "Spontaneous active hyperextension of the knee joint in supine"
    ],
    "correct": 1,
    "explanation": "In the Godfrey test, with hips and knees at 90°, loss of PCL integrity causes the proximal tibia to sag posteriorly under gravity relative to the femoral condyles, eliminating the normal tibial step-off."
  },
  {
    "id": "t3-b-003",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "Yergason's test is clinically performed by having the patient resist which combination of movements while the therapist palpates the bicipital groove?",
    "options": [
      "Resisted forearm supination and external rotation with the elbow flexed at 90°",
      "Resisted forearm pronation and shoulder internal rotation with elbow extended",
      "Resisted wrist extension with full elbow extension in anatomical plane",
      "Resisted shoulder abduction in the scapular plane with thumb pointed downward"
    ],
    "correct": 0,
    "explanation": "Yergason's test resists active forearm supination and shoulder external rotation with elbow at 90°; pain or tendon subluxation indicates biceps tendinopathy or transverse humeral ligament tear."
  },
  {
    "id": "t3-b-004",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "Clarke's sign (Patellar Grind test) is performed to evaluate chondromalacia patellae by applying downward pressure on the superior pole of the patella while the patient performs:",
    "options": [
      "An active isometric quadriceps contraction in full knee extension",
      "An active maximal hamstring curl against heavy manual resistance",
      "A passive full knee flexion to 140 degrees on the examination table",
      "An active ankle inversion movement against spring resistance"
    ],
    "correct": 0,
    "explanation": "Clarke's test compresses the patella into the trochlear groove while the patient contracts the quadriceps; retropatellar pain and inability to hold the contraction indicate patellofemoral articular irritation."
  },
  {
    "id": "t3-b-005",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "Ober's test is standardly performed in side-lying to evaluate contracture or tightness of which soft tissue structure?",
    "options": [
      "Hamstring muscle tendon group along the posterior thigh",
      "Iliotibial band and Tensor Fasciae Latae (TFL) complex",
      "Rectus femoris muscle belly along the anterior compartment",
      "Adductor magnus muscle along the medial thigh compartment"
    ],
    "correct": 1,
    "explanation": "Ober's test assesses tightness of the iliotibial band and tensor fasciae latae; failure of the abducted thigh to drop below horizontal upon release indicates ITB contracture."
  },
  {
    "id": "t3-b-006",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The Thomas Test evaluates hip flexor tightness. If the patient's thigh remains elevated off the table but extends fully when the knee is extended to 0 degrees, which specific muscle is tight?",
    "options": [
      "Psoas major and Iliacus (one-joint hip flexors)",
      "Rectus femoris (two-joint hip flexor / knee extensor)",
      "Tensor fasciae latae muscle belly exclusively",
      "Gluteus maximus muscle tendon unit"
    ],
    "correct": 1,
    "explanation": "If the thigh touches the table upon extending the knee, tightness is isolated to the two-joint Rectus Femoris (Kendall test); if the thigh remains elevated regardless of knee extension, the one-joint Iliopsoas is tight."
  },
  {
    "id": "t3-b-007",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The FAIR test (Flexion, Adduction, Internal Rotation) is clinically used to provoke sciatic nerve compression in which conditions?",
    "options": [
      "Femoral neck tension-side acute stress fracture",
      "Piriformis Syndrome compressing the sciatic nerve",
      "Greater trochanteric pain syndrome with bursitis",
      "Meralgia paresthetica of lateral femoral cutaneous nerve"
    ],
    "correct": 1,
    "explanation": "The FAIR test places the piriformis muscle on stretch across the sciatic nerve; reproduction of radiating buttock/posterior thigh paresthesia suggests Piriformis Syndrome."
  },
  {
    "id": "t3-b-008",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "When assessing the knee joint end-feel, what is the normal physiological end-feel encountered at terminal passive knee extension?",
    "options": [
      "Soft tissue approximation between calf and thigh muscles",
      "Firm (capsular / ligamentous stretch of posterior structures)",
      "Hard (abnormal bone-to-bone contact from osteophytes)",
      "Empty (severe acute pain before mechanical resistance)"
    ],
    "correct": 1,
    "explanation": "Terminal knee extension is checked by tension in the posterior joint capsule, oblique popliteal ligament, and cruciate ligaments, producing a firm, capsular end-feel."
  },
  {
    "id": "t3-b-009",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "applied",
    "text": "In the rehabilitation of patellar tendinopathy, why is the 'Spanish Squat' (using a heavy rigid strap behind the proximal shanks) clinically effective?",
    "options": [
      "It allows pure vertical shin positioning, reducing ankle dorsiflexion demands and isolating heavy isometric/isotonic quadriceps loading",
      "It eliminates all quadriceps muscle activation and loads the hamstrings exclusively in standing",
      "It forces the knee into extreme valgus angles to stretch the superficial medial collateral ligament",
      "It causes complete numbness of the infrapatellar nerve branch to eliminate conscious pain sensation"
    ],
    "correct": 0,
    "explanation": "The Spanish Squat supports the posterior tibia, allowing an upright vertical shank and reduced ankle dorsiflexion requirement, enabling high-load isometric quadriceps loading with minimal patellofemoral compression."
  },
  {
    "id": "t3-b-010",
    "section": "B",
    "topic": "nutrition and research evidence",
    "subtopic": "Sports nutrition and clinical research methodology",
    "difficulty": "analytical",
    "text": "According to motor learning evidence in sports rehabilitation (Wulf et al.), instructing an athlete to focus on 'pushing the ground away explosively' (External Focus) compared to 'contracting the quadriceps' (Internal Focus) produces:",
    "options": [
      "Inferior movement accuracy and higher antagonist muscle co-contraction during jumping",
      "Superior motor learning, higher movement efficiency, and greater force output during performance",
      "Immediate loss of dynamic joint stability and higher risk of acute ligamentous failure",
      "Zero difference in neuromuscular coordination or motor cortex activation patterns"
    ],
    "correct": 1,
    "explanation": "External focus of attention (focusing on the movement effect on the environment) enhances motor economy, reduces unnecessary muscle co-activation, and promotes superior motor skill acquisition and transfer."
  },
  {
    "id": "t3-b-011",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In the early post-operative rehabilitation following ACL reconstruction using a bone-patellar tendon-bone autograft, why are seated Open Kinetic Chain (OKC) quadriceps extensions between 0° and 30° restricted?",
    "options": [
      "They produce zero quadriceps EMG activity during seated leg extension",
      "They generate high anterior tibial shear forces and maximal tensile strain on the healing ACL graft",
      "They cause immediate posterior subluxation of the tibia on the femoral condyles",
      "They permanently freeze the patellofemoral joint in terminal hyperextension"
    ],
    "correct": 1,
    "explanation": "Open chain knee extension from 30° to 0° produces significant anterior tibial translation and high peak shear strain on the ACL graft, whereas OKC from 90° to 45° and CKC exercises are safer early on."
  },
  {
    "id": "t3-b-012",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "What is the primary clinical objective of 'Cryokinetics' in athletic injury rehabilitation?",
    "options": [
      "Applying ice to freeze deep joint tissues permanently to stop all metabolism",
      "Combining cold application to achieve local anesthesia followed immediately by progressive active, pain-free therapeutic exercise",
      "Using cryotherapy to induce passive muscle paralysis for 24 continuous hours",
      "Applying heat followed by passive stretching on a mechanical traction table"
    ],
    "correct": 1,
    "explanation": "Cryokinetics (Knight) utilizes cold application until numbness is achieved (10–15 min), enabling early, active, pain-free neuromuscular exercise to prevent arthrogenic muscle inhibition and restore ROM."
  },
  {
    "id": "t3-b-013",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "applied",
    "text": "According to the Convex-Concave rule of arthrokinematics (Kaltenborn), when a convex joint surface moves on a stable concave surface, the accessory glide occurs in which direction?",
    "options": [
      "In the identical same direction as the physiological bone roll",
      "In the opposite direction to the physiological bone roll",
      "Perpendicular to the treatment plane without any bone roll",
      "Arthrokinematic glide is completely absent in diarthrodial joints"
    ],
    "correct": 1,
    "explanation": "Convex on Concave: roll and slide occur in OPPOSITE directions (e.g., glenohumeral joint abduction: humeral head rolls superiorly while sliding inferiorly). Concave on Convex: roll and slide occur in the SAME direction."
  },
  {
    "id": "t3-b-014",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "To restore restricted glenohumeral joint Abduction using manual joint mobilization, in which direction should the therapist apply the humeral head accessory glide?",
    "options": [
      "Anterior glide toward the coracoid process",
      "Inferior (caudal) glide within the glenoid fossa",
      "Superior (cranial) glide toward the acromion",
      "Pure lateral traction without angular glide"
    ],
    "correct": 1,
    "explanation": "The humeral head is convex moving in the concave glenoid. Since abduction is an upward (superior) roll, the convex-concave rule dictates an inferior (caudal) glide to restore abduction."
  },
  {
    "id": "t3-b-015",
    "section": "B",
    "topic": "human and exercise physiology",
    "subtopic": "Cardiorespiratory and neuromuscular physiology",
    "difficulty": "applied",
    "text": "In shoulder joint mobilization, a Posterior Glide of the humeral head on the glenoid is primarily indicated to restore which physiological motions?",
    "options": [
      "Abduction and External rotation of the glenohumeral joint",
      "Flexion and Internal rotation of the glenohumeral joint",
      "Extension and Adduction of the glenohumeral joint",
      "Pure horizontal abduction across the coronal plane"
    ],
    "correct": 1,
    "explanation": "Posterior gliding of the convex humeral head stretches the posterior capsule and is used to increase shoulder flexion and internal rotation."
  },
  {
    "id": "t3-b-016",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In a standing human in standard anatomical position, where is the body's Center of Gravity (COG) approximately located?",
    "options": [
      "At the level of the T4 thoracic vertebra in the midline",
      "Just anterior to the second sacral vertebra (S2)",
      "At the level of the xiphoid process in the epigastrium",
      "Inside the femoral head bilaterally within the hip joints"
    ],
    "correct": 1,
    "explanation": "In an average standing adult in anatomical position, the total body center of gravity (COG) is located in the midline anterior to the second sacral vertebra (S2), approximately 55–57% of total standing height."
  },
  {
    "id": "t3-b-017",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Biceps Brachii flexing the elbow against a dumbbell in the hand represents which class of anatomical lever?",
    "options": [
      "First-class lever in the musculoskeletal system",
      "Second-class lever in the musculoskeletal system",
      "Third-class lever (Effort situated between Fulcrum and Resistance)",
      "Fourth-class lever in the musculoskeletal system"
    ],
    "correct": 2,
    "explanation": "In elbow flexion, the fulcrum is at the elbow joint, effort is applied by the biceps tendon at the radial tuberosity, and resistance is in the hand (Fulcrum - Effort - Resistance = Third-class lever)."
  },
  {
    "id": "t3-b-018",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In patellar biomechanics, how does the patella functionally enhance the mechanical advantage of the quadriceps muscle group?",
    "options": [
      "By shortening the moment arm of the quadriceps tendon to speed up flexion",
      "By displacing the quadriceps tendon away from the knee joint axis of rotation, increasing its moment arm and extensor torque",
      "By completely locking the tibia into internal rotation during knee flexion",
      "By absorbing 100% of all vertical ground reaction forces during sprint running"
    ],
    "correct": 1,
    "explanation": "The patella acts as an anatomical spacer that elevates the quadriceps tendon anteriorly away from the joint axis, lengthening its moment arm and increasing extensor torque production by up to 30–50%."
  },
  {
    "id": "t3-b-019",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "During which phase of the normal gait cycle is the ground reaction force (GRF) vector located furthest posterior to the knee joint axis, creating a strong external knee flexion moment?",
    "options": [
      "Initial contact to Loading response phase of stance",
      "Mid-stance phase of single limb support",
      "Terminal stance phase prior to heel rise",
      "Mid-swing phase during limb advancement"
    ],
    "correct": 0,
    "explanation": "At loading response, the GRF vector passes posterior to the knee joint axis, creating an external flexion moment that must be counteracted by eccentric quadriceps contraction to prevent knee collapse."
  },
  {
    "id": "t3-b-020",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "Which anatomical structure serves as the primary dynamic restraint against lateral subluxation of the patella during the first 0 to 30 degrees of knee flexion?",
    "options": [
      "Vastus Lateralis oblique fibers pulling laterally",
      "Vastus Medialis Oblique (VMO) and Medial Patellofemoral Ligament (MPFL)",
      "Iliotibial band lateral retinaculum expansion",
      "Biceps femoris short head tendon at fibula"
    ],
    "correct": 1,
    "explanation": "During 0–30° flexion (before the patella is fully seated in the bony trochlear groove), the VMO muscle fibers and the MPFL provide the primary dynamic and static restraints preventing lateral patellar dislocation."
  },
  {
    "id": "t3-b-021",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In the functional anatomy of the spine, what type of mechanical force is the annulus fibrosus of the intervertebral disc best structured to resist?",
    "options": [
      "Pure hydrostatic axial compression without deformation",
      "Tensile hoop stresses generated during axial compression and torsional shear",
      "Direct continuous thermal friction between vertebrae",
      "Complete electrical polarization of vertebral endplates"
    ],
    "correct": 1,
    "explanation": "The alternating concentric lamellae of collagen fibers (oriented at 65° to vertical) in the annulus fibrosus are structurally designed to resist multidirectional tensile hoop stresses and torsion."
  },
  {
    "id": "t3-b-022",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "During normal walking, what is the average joint position of the ankle at Initial Contact?",
    "options": [
      "20 degrees of active plantarflexion",
      "0 degrees (neutral position, ready for controlled eccentric plantarflexion)",
      "30 degrees of extreme dorsiflexion",
      "Full maximal subtalar eversion"
    ],
    "correct": 1,
    "explanation": "At initial heel contact, the ankle is positioned in neutral (0°), held by isometric/concentric pretibial muscles before immediately undergoing controlled eccentric plantarflexion during loading response."
  },
  {
    "id": "t3-b-023",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "A 'Gluteus Maximus Gait' (Extensor Lurch) is characterized by which hallmark compensatory movement during the loading phase of gait?",
    "options": [
      "Lateral trunk lean toward the contralateral swing leg",
      "A backward (posterior) trunk lurch at initial contact to maintain hip extension and prevent forward trunk collapse",
      "Forward trunk flexion of 45 degrees at toe-off",
      "Excessive hip hiking on the stance limb during mid-stance"
    ],
    "correct": 1,
    "explanation": "Weakness of the gluteus maximus prevents active hip extension at initial contact; the patient compensates with a backward trunk lurch, aligning the center of mass posterior to the hip joint to create a passive extensor moment."
  },
  {
    "id": "t3-b-024",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In gait analysis, 'Step Length' is defined as the distance between:",
    "options": [
      "Point of initial contact of one foot to the point of initial contact of the same foot",
      "Point of initial contact of one foot to the point of initial contact of the opposite foot",
      "Width between the medial borders of the bilateral heels during mid-stance",
      "Total distance covered during a 10-minute continuous walking trial"
    ],
    "correct": 1,
    "explanation": "Step length is the linear distance between successive contact points of opposite feet (e.g., right heel strike to left heel strike), whereas Stride length is between successive contacts of the same foot."
  },
  {
    "id": "t3-b-025",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "What is the primary role of the Hamstrings muscle group during the Terminal Swing phase of the gait cycle?",
    "options": [
      "Concentric acceleration of the shank forward into maximum extension",
      "Eccentric deceleration of forward hip flexion and rapid knee extension in preparation for initial contact",
      "Passive isometric resting with zero EMG activity throughout",
      "Forced plantarflexion of the subtalar joint at terminal contact"
    ],
    "correct": 1,
    "explanation": "In Terminal Swing, the hamstrings contract forcefully in an eccentric mode to decelerate the advancing thigh and leg, positioning the foot for controlled heel strike."
  },
  {
    "id": "t3-b-026",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "In Neuromuscular Electrical Stimulation (NMES) for overcoming Arthrogenic Muscle Inhibition (AMI) in the quadriceps post-knee injury, 'Russian Current' standardly utilizes which waveform characteristics?",
    "options": [
      "Continuous direct galvanic current at 10 Hz with chemical polarization",
      "A 2500 Hz sinusoidal carrier frequency interrupted into 50 bursts per second (50 Hz burst frequency) with a 50% duty cycle",
      "High-voltage pulsed monophasic spikes at 1000 Hz with microsecond durations",
      "Low-intensity microcurrent below sensory threshold without motor recruitment"
    ],
    "correct": 1,
    "explanation": "Kots (Russian Current) uses a 2500 Hz alternating carrier wave delivered in 50 bursts/sec with a 10ms-on/10ms-off (50%) duty cycle to maximize deep motor unit recruitment with minimal skin discomfort."
  },
  {
    "id": "t3-b-027",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "In Iontophoresis, to drive the anti-inflammatory corticosteroid Dexamethasone Sodium Phosphate into biological tissues, which electrode polarity must be selected?",
    "options": [
      "Positive electrode (Anode) due to positively charged ions",
      "Negative electrode (Cathode) due to negatively charged phosphate ions",
      "Alternating bipolar electrode polarity without direct current",
      "Ground grounding plate placed over the abdomen"
    ],
    "correct": 1,
    "explanation": "Dexamethasone phosphate carries a negative charge in solution; like charges repel, so it must be placed under the negative electrode (Cathode) to drive it transdermally into target tissues."
  },
  {
    "id": "t3-b-028",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "What is the primary biological mechanism of Pulsed Shortwave Diathermy (PSWD) when delivered at non-thermal energy levels?",
    "options": [
      "Severe tissue coagulation and protein denaturation in deep muscle",
      "Altering cellular membrane potential, enhancing ionic pumping, and accelerating hematoma resolution and fibroblastic activity",
      "Permanent destruction of sensory peripheral nociceptors at skin level",
      "Increasing joint temperature by greater than 5 degrees Celsius in capsules"
    ],
    "correct": 1,
    "explanation": "Non-thermal PSWD promotes healing by normalizing cell membrane potential, increasing calcium ion flux, accelerating cellular proliferation, and speeding up inflammatory resolution without elevating tissue temperature."
  },
  {
    "id": "t3-b-029",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In Ultraviolet Radiation (UVR) therapy, the Minimal Erythema Dose (MED) is clinically defined as:",
    "options": [
      "The maximum dose causing severe blistering and skin ulceration within 1 hour",
      "The shortest exposure time to UVR that produces faint, perceptible erythema (redness) on test skin within 6 to 8 hours that disappears in 24 hours",
      "The dose required to completely eliminate all skin melanin pigment cells",
      "A continuous 60-minute ultraviolet lamp exposure at 1 cm skin distance"
    ],
    "correct": 1,
    "explanation": "The MED is the threshold dose that produces faint erythema appearing 6–8 hours post-irradiation and resolving within 24 hours, serving as the baseline unit for all UVR prescription."
  },
  {
    "id": "t3-b-030",
    "section": "B",
    "topic": "psychology and human development neuro-rehabilitation",
    "subtopic": "Neuro-rehabilitation concepts and motor relearning",
    "difficulty": "analytical",
    "text": "In coordinating ataxia rehabilitation for cerebellar dysfunction, Frenkel's Exercises emphasize which fundamental principle?",
    "options": [
      "High-resistance ballistic lifting to maximal muscular fatigue",
      "Slow, precise, repetitive movements executed with high visual and conscious concentration",
      "Completely blindfolded passive stretching on an unstable gym ball",
      "Applying high-frequency vibration to all major peripheral joints"
    ],
    "correct": 1,
    "explanation": "Frenkel's exercises are a system of slow, repeated, precise movement patterns performed under strict visual control, progressing from lying to sitting to standing/walking to compensate for proprioceptive and cerebellar coordination deficits."
  },
  {
    "id": "t3-b-031",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "On the Modified Ashworth Scale (MAS) for grading muscle spasticity, a score of '1+' is defined as:",
    "options": [
      "No increase in muscle tone during passive movement",
      "Slight increase in tone manifested by a catch followed by minimal resistance throughout the remainder (less than half) of the ROM",
      "Marked increase in tone through most of the ROM, but affected part is easily moved",
      "Rigid flexion or extension contracture with zero passive movement possible"
    ],
    "correct": 1,
    "explanation": "MAS Grade 1+: Slight increase in muscle tone, manifested by a catch, followed by minimal resistance throughout the remainder (less than half) of the ROM (distinguishing it from Grade 1, which has release after the catch)."
  },
  {
    "id": "t3-b-032",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "analytical",
    "text": "In PNF rhythmic stabilization training for trunk and spinal stability, what type of muscle contractions are elicited?",
    "options": [
      "High-speed eccentric lengthening contractions across multiple joints",
      "Isometric co-contractions of opposing muscle groups (agonist-antagonist) resisting multidirectional rotational perturbations",
      "Rapid concentric contractions performed on isokinetic dynamometers",
      "Passive tissue elongation without active muscular resistance"
    ],
    "correct": 1,
    "explanation": "Rhythmic stabilization utilizes alternating isometric contractions of opposing muscle groups against multidirectional manual perturbations to enhance dynamic joint stability and trunk co-contraction."
  },
  {
    "id": "t3-b-033",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In the Wainner clinical prediction rule for Cervical Radiculopathy, which combination of four positive findings provides a post-test probability exceeding 90%?",
    "options": [
      "Spurling's test A, Upper Limb Tension Test 1 (Median), Cervical Distraction test, and Ipsilateral Cervical Rotation < 60°",
      "Neer's test, Hawkins-Kennedy test, Speed's test, and Yergason's test across the shoulder",
      "Positive Babinski sign, hyperreflexia, clonus, and Hoffman's sign indicating myelopathy",
      "Negative straight leg raise, normal sensation, full cervical range, and zero radicular pain"
    ],
    "correct": 0,
    "explanation": "Wainner's test cluster for cervical radiculopathy includes: (1) Positive Spurling A, (2) Positive ULTT 1 (Median), (3) Positive Cervical Distraction, and (4) Cervical rotation <60° to the involved side (4/4 positive yields 90% post-test probability)."
  },
  {
    "id": "t3-b-034",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In Cyriax's orthopedic assessment framework, an 'Empty End-Feel' encountered during passive range of motion is indicative of:",
    "options": [
      "Normal capsular tissue stretch at full physiological joint range",
      "Severe acute pain stopping the movement before any mechanical tissue resistance is reached (e.g., acute bursitis, neoplasm, abscess)",
      "Painless bony impingement between two enlarged osteophytes in joint",
      "Rubbery cartilaginous rebound from a bucket-handle meniscus tear fragment"
    ],
    "correct": 1,
    "explanation": "An empty end-feel occurs when the patient stops examination due to severe, intolerable pain before any true anatomical or mechanical resistance is felt, indicating severe acute inflammatory pathology, fracture, or neoplasm."
  },
  {
    "id": "t3-b-035",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "What is the hallmark clinical feature of Complex Regional Pain Syndrome (CRPS Type I / Reflex Sympathetic Dystrophy) following a minor sports extremity injury?",
    "options": [
      "Disproportionate burning pain, allodynia, hyperalgesia, sudomotor changes, and localized vasomotor temperature instability without a defined major nerve lesion",
      "Isolated motor paralysis of the radial nerve with normal autonomic skin appearance and zero pain",
      "Rapid complete resolution of all symptoms within 24 hours of standard ice pack application",
      "Painless joint laxity accompanied by severe hypothermia and complete sensory loss"
    ],
    "correct": 0,
    "explanation": "CRPS Type I presents with severe pain disproportionate to the inciting event, allodynia (pain from non-noxious stimuli), swelling, skin color/temperature changes, and abnormal sweating in the absence of a distinct peripheral nerve lesion."
  },
  {
    "id": "t3-b-036",
    "section": "B",
    "topic": "human and exercise physiology",
    "subtopic": "Cardiorespiratory and neuromuscular physiology",
    "difficulty": "analytical",
    "text": "In Dry Needling for myofascial trigger points, what physiological response during needle pistoning indicates accurate deactivation of the taut muscular band?",
    "options": [
      "Local Twitch Response (LTR) accompanied by immediate reduction in endplate noise and spontaneous electrical activity",
      "Immediate complete rupture of surrounding major arterial vessels in the limb",
      "Permanent numbness in the whole limb dermatome lasting for several weeks",
      "Severe sustained muscle tetany lasting 48 hours requiring chemical sedation"
    ],
    "correct": 0,
    "explanation": "Eliciting a Local Twitch Response (LTR)—an involuntary spinal reflex contraction of muscle fibers in the taut band—is the clinical indicator that the trigger point has been mechanically disrupted and normalized biochemically."
  },
  {
    "id": "t3-b-037",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In the management of an acute Grade I ankle sprain on the field, the modern 'PEACE & LOVE' protocol supersedes RICE by emphasizing:",
    "options": [
      "Protection, Elevation, Avoid Anti-inflammatories, Compression, Education, followed by Load, Optimism, Vascularization, and Exercise",
      "Permanent immobilization, Ice for 2 weeks, Complete bed rest, and High-dose NSAID medication",
      "Immediate high-velocity manipulation and heavy plyometrics within 1 hour of sprain occurrence",
      "Total fasting, strict fluid restriction, and zero weight bearing for 72 consecutive hours"
    ],
    "correct": 0,
    "explanation": "The PEACE & LOVE framework (Dubois & Esculier, BJSM) avoids anti-inflammatory drugs/ice (which may delay tissue healing) in the acute phase (PEACE) and promotes progressive loading, active vascularization, and exercise (LOVE)."
  },
  {
    "id": "t3-b-038",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "When assessing joint range of motion, what is the standardized universal goniometer alignment for measuring active shoulder abduction?",
    "options": [
      "Fulcrum at anterior acromion; stationary arm parallel to mid-axillary line; moving arm along lateral epicondyle",
      "Fulcrum at posterior aspect of acromion; stationary arm parallel to spine/sternum; moving arm along humeral midline pointing to lateral epicondyle",
      "Fulcrum at olecranon; stationary arm along forearm; moving arm along 5th metacarpal shaft",
      "Fulcrum over greater trochanter; stationary arm vertical to floor"
    ],
    "correct": 1,
    "explanation": "For shoulder abduction, the fulcrum is over the posterior acromion process, the stationary arm is parallel to the trunk/sternum, and the moving arm aligns with the lateral midline of the humerus toward the lateral epicondyle."
  },
  {
    "id": "t3-b-039",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In shoulder instability, a 'Bankart Lesion' refers to an avulsion tear of which specific anatomical structure?",
    "options": [
      "Superior labrum anterior to posterior with biceps anchor detachment in throwers",
      "Anterior-inferior glenoid labrum tear often involving the inferior glenohumeral ligament complex",
      "Supraspinatus tendon complete insertion avulsion from the greater tubercle",
      "Coracoclavicular ligament conoid band complete rupture in trauma"
    ],
    "correct": 1,
    "explanation": "A Bankart lesion is a detachment of the anterior-inferior glenoid labrum from the glenoid rim resulting from anterior shoulder dislocation, compromising anterior glenohumeral stability."
  },
  {
    "id": "t3-b-040",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "Which clinical test evaluates scapular dyskinesis by having the therapist manually stabilize the medial scapular border against the thoracic wall during active arm elevation?",
    "options": [
      "Scapular Assistance Test (SAT) / Scapular Retraction Test (SRT)",
      "Empty Can test for supraspinatus tendon structural integrity",
      "Yergason's test for transverse humeral ligament competence",
      "Sulcus Sign test for inferior capsular multidirectional laxity"
    ],
    "correct": 0,
    "explanation": "The Scapular Retraction and Scapular Assistance Tests (Kibler) manually assist upward rotation/posterior tilt or stabilize the medial border; reduction of impingement symptoms confirms scapular dyskinesis as a contributor."
  },
  {
    "id": "t3-c-001",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 25-year-old international 200m sprinter experiences acute recurrence of right hamstring ...",
    "difficulty": "analytical",
    "text": "Architectural ultrasound imaging reveals shortening of the Biceps Femoris long head fascicle length (7.2 cm compared to 9.8 cm in uninjured left limb). In sports physiotherapy evidence, which training modality specifically produces architectural longitudinal sarcomerogenesis and fascicle lengthening?",
    "options": [
      "Concentric leg curls performed rapidly on a weight machine in seated position",
      "High-force eccentric loading in lengthened positions (e.g., Nordic hamstring curls, Romanian deadlifts)",
      "Passive static stretching on a vibrating plate without external resistance",
      "Low-intensity aquatic water walking in a heated hydrotherapy pool"
    ],
    "correct": 1,
    "explanation": "Eccentric training at long muscle lengths stimulates sarcomerogenesis (addition of sarcomeres in series), resulting in increased muscle fascicle length and shifting the peak torque angle toward longer muscle lengths, protecting against re-injury.",
    "passageId": "cs-21",
    "passage": "A 25-year-old international 200m sprinter experiences acute recurrence of right hamstring tightness during high-speed transition training."
  },
  {
    "id": "t3-c-002",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 25-year-old international 200m sprinter experiences acute recurrence of right hamstring ...",
    "difficulty": "analytical",
    "text": "During running gait biomechanical analysis, what kinematic fault during the swing phase significantly elevates peak hamstring strain and re-injury risk in sprinters?",
    "options": [
      "Excessive anterior pelvic tilt and excessive lumbar lordosis during late swing/early stance",
      "Neutral pelvic alignment with upright torso posture throughout the sprint",
      "High cadence with reduced stride length and vertical oscillation",
      "Excessive arm swing across the sagittal plane during acceleration"
    ],
    "correct": 0,
    "explanation": "Anterior pelvic tilt places the ischial tuberosity (hamstring origin) further posteriorly and superiorly, increasing hamstring stretch and strain during terminal swing, predisposing the sprinter to recurrent muscle strain.",
    "passageId": "cs-21",
    "passage": "A 25-year-old international 200m sprinter experiences acute recurrence of right hamstring tightness during high-speed transition training."
  },
  {
    "id": "t3-c-003",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old female volleyball spiker presents with deep anterolateral shoulder pain aggr...",
    "difficulty": "analytical",
    "text": "Physical examination reveals a positive Neer's test, positive Hawkins-Kennedy test, and a painful arc between 70° and 120° of active abduction. Resisted rotator cuff tests show strength deficits in the infraspinatus and serratus anterior. What is the primary diagnosis?",
    "options": [
      "Subacromial Impingement / Rotator Cuff Tendinopathy with Scapular Dyskinesis",
      "Adhesive capsulitis with complete axillary pouch contracture and global freeze",
      "Acromioclavicular joint grade III dislocation with torn coracoclavicular ligaments",
      "Thoracic outlet syndrome involving severe compression of the subclavian artery"
    ],
    "correct": 0,
    "explanation": "Painful arc (60-120°), positive Neer/Hawkins-Kennedy tests, and weakness of the scapular stabilizers and rotator cuff in an overhead spiker are diagnostic of Subacromial Impingement/Cuff Tendinopathy secondary to dynamic scapular dyskinesis.",
    "passageId": "cs-22",
    "passage": "A 22-year-old female volleyball spiker presents with deep anterolateral shoulder pain aggravated during high-velocity spiking and overhead serving."
  },
  {
    "id": "t3-c-004",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old female volleyball spiker presents with deep anterolateral shoulder pain aggr...",
    "difficulty": "analytical",
    "text": "Which exercise progression is most evidence-based to restore the upward rotator force couple and clear the subacromial space in this volleyball player?",
    "options": [
      "Serratus Anterior wall slides / push-up plus, Lower Trapezius Y-raises, and progressive side-lying external rotation",
      "Heavy shoulder shrugs and upright barbell rows to fatigue using maximum loads",
      "Behind-the-neck heavy lat pulldowns and military overhead presses with rapid execution",
      "Immobilizing the arm in a sling for 4 weeks with complete avoidance of all elevation"
    ],
    "correct": 0,
    "explanation": "Strengthening the Serratus Anterior (push-up plus, wall slides) and Lower Trapezius (prone Y-raises) restores scapular upward rotation and posterior tilt, opening the subacromial space during overhead elevation.",
    "passageId": "cs-22",
    "passage": "A 22-year-old female volleyball spiker presents with deep anterolateral shoulder pain aggravated during high-velocity spiking and overhead serving."
  },
  {
    "id": "t3-c-005",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old male basketball player complains of localized pain at the inferior pole of t...",
    "difficulty": "analytical",
    "text": "Ultrasound reveals focal hypoechogenicity and tendon thickening at the proximal patellar tendon attachment without full-thickness tear (Jumper's Knee). Which structured exercise progression is supported by the highest clinical evidence?",
    "options": [
      "Isometric Spanish squats (pain relief) -> Heavy Slow Resistance (remodeling) -> Energy storage/plyometrics -> Sport-specific return",
      "Complete immobilization in a knee extension cylinder cast for 3 consecutive months",
      "Immediate corticosteroid injection directly into the central patellar tendon substance",
      "High-frequency plyometric jumping 7 days a week on hard concrete floors"
    ],
    "correct": 0,
    "explanation": "Malliaras and Cook's 4-stage tendinopathy framework (Isometric holds for pain -> Heavy Slow Resistance for capacity -> Fast SSC energy storage/release -> Sport return) is the gold standard for patellar tendinopathy.",
    "passageId": "cs-23",
    "passage": "A 20-year-old male basketball player complains of localized pain at the inferior pole of the patella that is worst when landing from jumps."
  },
  {
    "id": "t3-c-006",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old male basketball player complains of localized pain at the inferior pole of t...",
    "difficulty": "analytical",
    "text": "Why are intratendinous corticosteroid injections generally avoided in elite athletes with patellar tendinopathy?",
    "options": [
      "They produce excessive rapid muscle hypertrophy in the vastus medialis",
      "They inhibit tenocyte collagen synthesis, weaken tendon tensile strength, and significantly increase the risk of catastrophic tendon rupture",
      "They cause immediate hyper-flexibility and permanent joint dislocation",
      "They are completely banned under WADA as oral stimulant substances"
    ],
    "correct": 1,
    "explanation": "Corticosteroids inhibit tenocyte collagen synthesis, reduce mechanical strength, and predispose the tendon to necrosis and subsequent full-thickness rupture under high athletic loads.",
    "passageId": "cs-23",
    "passage": "A 20-year-old male basketball player complains of localized pain at the inferior pole of the patella that is worst when landing from jumps."
  },
  {
    "id": "t3-c-007",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 27-year-old badminton player presents with pain over the radial aspect of the wrist and ...",
    "difficulty": "analytical",
    "text": "Palpation demonstrates tenderness over the radial styloid process. Finkelstein's test is positive. Which two tendons traveling through the first dorsal extensor compartment are inflamed?",
    "options": [
      "Extensor Pollicis Longus and Extensor Indicis in the second compartment",
      "Abductor Pollicis Longus (APL) and Extensor Pollicis Brevis (EPB) in the first compartment",
      "Flexor Carpi Radialis and Palmaris Longus in the anterior carpal canal",
      "Extensor Carpi Ulnaris and Extensor Digiti Minimi in the sixth compartment"
    ],
    "correct": 1,
    "explanation": "De Quervain's tenosynovitis is a stenosing tenosynovitis of the first dorsal compartment containing the Abductor Pollicis Longus (APL) and Extensor Pollicis Brevis (EPB) tendons.",
    "passageId": "cs-24",
    "passage": "A 27-year-old badminton player presents with pain over the radial aspect of the wrist and anatomical snuffbox after repetitive flicking smashes."
  },
  {
    "id": "t3-c-008",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 27-year-old badminton player presents with pain over the radial aspect of the wrist and ...",
    "difficulty": "analytical",
    "text": "What is the optimal conservative physiotherapy management protocol for this badminton player's De Quervain's tenosynovitis?",
    "options": [
      "Thumb spica orthosis/splinting, relative rest from racquet flicking, eccentric thumb loading, and radial nerve neurodynamic glides",
      "Immediate surgical tenotomy on the field within 24 hours of diagnosis",
      "Heavy wrist curls with 20 kg barbells to strengthen forearm flexors",
      "Passive manipulation into extreme painful ulnar deviation under force"
    ],
    "correct": 0,
    "explanation": "Conservative management includes a thumb spica splint to rest the first dorsal compartment, modifying racquet grip/technique, gradual eccentric loading, and soft tissue mobilization.",
    "passageId": "cs-24",
    "passage": "A 27-year-old badminton player presents with pain over the radial aspect of the wrist and anatomical snuffbox after repetitive flicking smashes."
  },
  {
    "id": "t3-c-009",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old soccer midfielder receives a direct blow to the lateral aspect of his knee ...",
    "difficulty": "analytical",
    "text": "On examination, there is localized pain and opening with a firm end-feel at 30° knee flexion under valgus stress (Grade II Medial Collateral Ligament sprain), but negative Lachman and pivot shift tests. What is the evidence-based management strategy?",
    "options": [
      "Immediate emergency surgical reconstruction of the MCL within 48 hours of injury",
      "Non-operative functional bracing (hinged knee brace allowing 0–90°), early protected weight-bearing, quadriceps strengthening, and progressive return in 4–6 weeks",
      "Casting in 90 degrees of flexion for 12 weeks with non-weight-bearing crutches",
      "Total avoidance of all active quadriceps contractions for 6 continuous months"
    ],
    "correct": 1,
    "explanation": "Isolated Grade I and II MCL tears have high vascularity and excellent intrinsic healing capacity; they are managed non-operatively with a hinged brace, early protected motion, and progressive strengthening, usually returning in 4–6 weeks.",
    "passageId": "cs-25",
    "passage": "An 18-year-old soccer midfielder receives a direct blow to the lateral aspect of his knee while his foot is planted, sustaining a valgus force."
  },
  {
    "id": "t3-c-010",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old soccer midfielder receives a direct blow to the lateral aspect of his knee ...",
    "difficulty": "analytical",
    "text": "During the rehabilitation of this soccer player's Grade II MCL sprain, which exercise modification is critical during the first 3 weeks?",
    "options": [
      "Avoid open-chain resisted hip adduction and extreme valgus stress maneuvers",
      "Avoid all sagittal plane straight leg raises and stationary cycling drills",
      "Perform heavy side-cutting drills on wet turf immediately in week 1",
      "Wear high heels to unload the patellar tendon during walking"
    ],
    "correct": 0,
    "explanation": "Resisted hip adduction (e.g., adductor machine or Copenhagen plank) places direct tensile strain across the medial collateral ligament and should be avoided or modified until initial ligamentous scar consolidation.",
    "passageId": "cs-25",
    "passage": "An 18-year-old soccer midfielder receives a direct blow to the lateral aspect of his knee while his foot is planted, sustaining a valgus force."
  },
  {
    "id": "t3-c-011",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 12-year-old junior distance runner presents with anterior knee pain localized precisely ...",
    "difficulty": "analytical",
    "text": "Pain is reproduced on palpation and resisted knee extension. Plain radiographs show slight calcification at the inferior patellar pole. What is the diagnosis?",
    "options": [
      "Osgood-Schlatter disease of the tibial tuberosity at the shin",
      "Sinding-Larsen-Johansson Syndrome (osteochondrosis of inferior patellar pole)",
      "Osteochondritis dissecans of the medial femoral condyle articular surface",
      "Bipartite patella with acute traumatic avulsion fracture"
    ],
    "correct": 1,
    "explanation": "Sinding-Larsen-Johansson syndrome is an apophysitis/osteochondrosis at the junction of the inferior patellar pole and patellar tendon in growing adolescents, distinguishing it from Osgood-Schlatter at the tibial tubercle.",
    "passageId": "cs-26",
    "passage": "A 12-year-old junior distance runner presents with anterior knee pain localized precisely at the inferior pole of the patella (junction of the patella and patellar tendon)."
  },
  {
    "id": "t3-c-012",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 12-year-old junior distance runner presents with anterior knee pain localized precisely ...",
    "difficulty": "analytical",
    "text": "What is the primary management recommendation for this adolescent athlete with Sinding-Larsen-Johansson syndrome?",
    "options": [
      "Surgical excision of the distal patellar pole under general anesthesia",
      "Activity load management, quadriceps stretching/soft-tissue release, and non-impact cross-training (e.g., swimming) during acute painful episodes",
      "Immediate injection of high-dose corticosteroids into the patellar pole",
      "Complete bed rest and permanent discontinuation of all future physical education"
    ],
    "correct": 1,
    "explanation": "Sinding-Larsen-Johansson is self-limiting upon skeletal maturity; treatment focuses on activity modification, symptom-guided loading, quadriceps flexibility, and cross-training (cycling/swimming) to preserve cardiovascular fitness.",
    "passageId": "cs-26",
    "passage": "A 12-year-old junior distance runner presents with anterior knee pain localized precisely at the inferior pole of the patella (junction of the patella and patellar tendon)."
  },
  {
    "id": "t3-c-013",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old elite track runner presents with insidious, aching pain over the dorsal-medi...",
    "difficulty": "analytical",
    "text": "Palpation reveals focal point tenderness over the 'N-spot' (the dorsal aspect of the navicular bone between the anterior tibial and extensor hallucis longus tendons). What is the primary suspected injury?",
    "options": [
      "Plantar fasciitis at the calcaneal tuberosity insertion",
      "Tarsal Navicular Stress Fracture (High-Risk Bone Stress Injury)",
      "First metatarsophalangeal joint acute gouty arthritis",
      "Peroneus brevis tendon avulsion at the 5th metatarsal base"
    ],
    "correct": 1,
    "explanation": "Tenderness at the navicular 'N-spot' in a runner is pathognomonic for a Tarsal Navicular Stress Fracture—classified as a 'high-risk' stress fracture due to poor vascularity of the central third of the bone, requiring strict management.",
    "passageId": "cs-27",
    "passage": "A 24-year-old elite track runner presents with insidious, aching pain over the dorsal-medial midfoot that worsens with running and jumping."
  },
  {
    "id": "t3-c-014",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old elite track runner presents with insidious, aching pain over the dorsal-medi...",
    "difficulty": "analytical",
    "text": "Why is a navicular stress fracture classified as a 'high-risk' bone stress injury requiring immediate non-weight-bearing immobilization or surgical fixation?",
    "options": [
      "It consistently causes systemic bacterial sepsis in the foot joints",
      "The central third of the navicular is an avascular watershed zone with high rates of delayed union, non-union, and avascular necrosis if loaded prematurely",
      "It produces immediate complete paralysis of the tibial motor nerve",
      "It heals within 48 hours without any clinical precautions or rest"
    ],
    "correct": 1,
    "explanation": "High-risk stress fractures (navicular, anterior tibial cortex, femoral neck tension side, 5th metatarsal base) have poor blood supply and high tensile/shear stresses, making them prone to non-union or complete fracture if not treated with non-weight-bearing casting.",
    "passageId": "cs-27",
    "passage": "A 24-year-old elite track runner presents with insidious, aching pain over the dorsal-medial midfoot that worsens with running and jumping."
  },
  {
    "id": "t3-c-015",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old footballer is 2 weeks post-ACL reconstruction using a Bone-Patellar Tendon-B...",
    "difficulty": "analytical",
    "text": "He demonstrates an 'extensor lag' of 10 degrees during an active straight leg raise (cannot actively maintain full extension despite full passive extension). What is the primary physiological cause of this extensor lag?",
    "options": [
      "Hamstring muscle contracture locking the joint into flexion",
      "Arthrogenic Muscle Inhibition (AMI) and quadriceps weakness failing to overcome the active extensor torque requirement",
      "Structural mechanical failure and rupture of the patellar tendon graft",
      "Gastrocnemius spasticity pulling the foot into plantarflexion"
    ],
    "correct": 1,
    "explanation": "An extensor lag (passive ROM > active ROM) post-knee surgery is caused by arthrogenic muscle inhibition (AMI) from joint effusion and pain, resulting in failure of the quadriceps to achieve full terminal extension.",
    "passageId": "cs-28",
    "passage": "A 22-year-old footballer is 2 weeks post-ACL reconstruction using a Bone-Patellar Tendon-Bone (BPTB) autograft."
  },
  {
    "id": "t3-c-016",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old footballer is 2 weeks post-ACL reconstruction using a Bone-Patellar Tendon-B...",
    "difficulty": "analytical",
    "text": "Which physiotherapeutic intervention combination is most effective to overcome arthrogenic muscle inhibition and eliminate the extensor lag in this patient?",
    "options": [
      "Cryotherapy to reduce joint effusion combined with high-intensity Neuromuscular Electrical Stimulation (NMES) during active quadriceps sets and prone hangs",
      "Placing a pillow beneath the knee to keep it continuously flexed at 30 degrees during rest",
      "Immediate maximal hamstring curls to exhaustion on an open chain machine",
      "Passive complete immobilization in a wheelchair for 6 consecutive weeks"
    ],
    "correct": 0,
    "explanation": "Joint cooling (cryotherapy) reduces joint sensory afferent discharge to disinhibit the motor pool, while NMES superimposed on active quad sets effectively activates inhibited motor units to restore full active terminal extension.",
    "passageId": "cs-28",
    "passage": "A 22-year-old footballer is 2 weeks post-ACL reconstruction using a Bone-Patellar Tendon-Bone (BPTB) autograft."
  },
  {
    "id": "t3-c-017",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old basketball player with recurrent right lateral ankle sprains undergoes dynam...",
    "difficulty": "analytical",
    "text": "Her composite score is 88%, and she exhibits an anterior reach asymmetry of 5 cm (Right = 55 cm, Left = 60 cm). What does an anterior reach difference >4 cm indicate in athletic screening literature?",
    "options": [
      "Optimal elite athletic performance with zero prospective injury risk",
      "Significantly elevated risk (over 2.5 times higher) for non-contact lower extremity injury",
      "Superior ankle dorsiflexion mobility in the injured limb during functional reaching",
      "Complete invalidity of the Y-Balance test protocol in jumping athletes"
    ],
    "correct": 1,
    "explanation": "Plisky et al. established that an anterior reach asymmetry greater than 4 cm on the Y-Balance Test indicates significant dynamic neuromuscular deficit and dorsiflexion restriction, predicting a >2.5-fold increased lower extremity injury risk.",
    "passageId": "cs-29",
    "passage": "A 21-year-old basketball player with recurrent right lateral ankle sprains undergoes dynamic balance testing using the Y-Balance Test (Lower Quarter)."
  },
  {
    "id": "t3-c-018",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old basketball player with recurrent right lateral ankle sprains undergoes dynam...",
    "difficulty": "analytical",
    "text": "Weight-bearing lunge testing (WBLT / Knee-to-Wall test) reveals a restriction on her right ankle (7 cm vs 13 cm on the uninjured left ankle). Which manual therapy and exercise combination is most effective to restore weight-bearing dorsiflexion?",
    "options": [
      "Mulligan Mobilization with Movement (MWM) with anterior-to-posterior talar glide during active lunging, combined with gastrocnemius-soleus eccentric stretching",
      "Strict non-weight-bearing ankle casting for 4 consecutive weeks",
      "Passive plantarflexor strengthening in shortened position only without stretching",
      "Applying ultrasound over the lateral malleolus without any active joint movement"
    ],
    "correct": 0,
    "explanation": "A Mulligan talocrural MWM (posterior talar glide maintained with a belt while the athlete performs a dynamic forward weight-bearing lunge) rapidly restores arthrokinematic posterior glide and dorsiflexion range of motion.",
    "passageId": "cs-29",
    "passage": "A 21-year-old basketball player with recurrent right lateral ankle sprains undergoes dynamic balance testing using the Y-Balance Test (Lower Quarter)."
  },
  {
    "id": "t3-c-019",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old cricket batsman experiences acute lower back pain radiating down the posteri...",
    "difficulty": "analytical",
    "text": "Physical examination shows a positive Straight Leg Raise (SLR) at 35° on the right, diminished right Achilles reflex (S1), and weakness of great toe plantarflexion. During repeated McKenzie extension in lying (prone press-ups), the calf pain retreats into the right buttock and lumbar spine. What is this clinical response called and what does it indicate?",
    "options": [
      "Peripheralization indicating worsening disc herniation requiring immediate emergency surgery",
      "Centralization phenomenon indicating a reducing posterior disc derangement with a favorable non-operative prognosis",
      "Functional instability requiring complete spinal fusion surgery within 24 hours",
      "Malingering behavior without physical anatomical pathology in the lumbar spine"
    ],
    "correct": 1,
    "explanation": "Centralization of referred neurological pain into the lumbar spine during repeated extension movements indicates that the disc nuclear material is reducing anteriorly, predicting successful conservative rehabilitation.",
    "passageId": "cs-30",
    "passage": "A 28-year-old cricket batsman experiences acute lower back pain radiating down the posterior right thigh to the calf after an aggressive forward-defensive batting shot."
  },
  {
    "id": "t3-c-020",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old cricket batsman experiences acute lower back pain radiating down the posteri...",
    "difficulty": "analytical",
    "text": "What is the core directional preference exercise prescription for this batsman during the acute phase of rehabilitation?",
    "options": [
      "Repeated lumbar flexion in sitting (Williams flexion exercises) to open canals",
      "Repeated passive and active lumbar extension in prone (McKenzie extension progression) while avoiding loaded lumbar flexion",
      "Heavy seated deadlifts with rounded lumbar spine to strengthen extensors",
      "Continuous full-body twisting stretches to end-range across both sides"
    ],
    "correct": 1,
    "explanation": "Based on the observed directional preference (centralization with extension), the patient should perform repeated prone press-ups (10 reps every 2 hours), maintain lumbar lordosis during sitting, and avoid forward flexion.",
    "passageId": "cs-30",
    "passage": "A 28-year-old cricket batsman experiences acute lower back pain radiating down the posterior right thigh to the calf after an aggressive forward-defensive batting shot."
  },
  {
    "id": "t4-a1-001",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "foundational",
    "text": "In the Triphasic Training model (Cal Dietz), how is the muscular contraction cycle systematically broken down across distinct training blocks?",
    "options": [
      "A Hypertrophy block followed by an Aerobic conditioning block and a dedicated Flexibility block across annual cycles",
      "A dedicated Eccentric-focused block, followed by an Isometric-focused block, culminating in a Concentric/Reactive block",
      "An Upper body lifting block followed by a Lower body sprinting block and a Core lumbo-pelvic stabilization block",
      "A continuous linear intensity progression where set repetitions decrease while barbell load increases each week"
    ],
    "correct": 1,
    "explanation": "Triphasic training systematically trains the three phases of dynamic muscle action in order: 2 weeks of heavy eccentric overload, 2 weeks of isometric pauses, and 2 weeks of explosive concentric/reactive power."
  },
  {
    "id": "t4-a1-002",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "applied",
    "text": "In Olympic weightlifting biomechanics, during which phase of the Snatch or Clean does peak barbell acceleration and maximal vertical power output occur?",
    "options": [
      "First pull from the platform floor to just below the patella level",
      "Transition / scoop phase where the knees re-bend beneath the barbell",
      "Second pull (explosive triple extension of hip, knee, and ankle joints)",
      "Catch / turnover phase where the lifter drops rapidly into a deep squat"
    ],
    "correct": 2,
    "explanation": "The second pull (from mid-thigh to complete triple extension) produces the highest peak ground reaction force, barbell velocity, and instantaneous power output in Olympic lifting."
  },
  {
    "id": "t4-a1-003",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "analytical",
    "text": "In plyometric training progression, which exercise category generates the highest peak ground reaction forces and eccentric rate of loading on the musculoskeletal system?",
    "options": [
      "Two-foot low ankle hops (pogos) performed repeatedly on a soft gymnastics mat",
      "Depth jumps from a 60 cm box onto a firm surface with immediate vertical rebound",
      "Single-leg low-amplitude stationary cycling drills on a variable friction trainer",
      "Standing horizontal broad jumps landing smoothly into a loose deep sand pit"
    ],
    "correct": 1,
    "explanation": "Depth jumps from elevated boxes (>45–60 cm) produce extreme impact ground reaction forces (up to 4–7 times body weight) and very high eccentric stretch rates, requiring advanced base strength before prescription."
  },
  {
    "id": "t4-a1-004",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "foundational",
    "text": "What is the primary neurophysiological mechanism underlying the Bilateral Deficit phenomenon in human strength testing?",
    "options": [
      "Neural cross-talk and interhemispheric cortical inhibition reducing total bilateral force relative to sum of unilateral forces",
      "Mechanical obstruction of femoral arterial blood flow during simultaneous two-legged maximal hip flexion contractions",
      "Selective recruitment of slow-twitch motor units only during unilateral single-leg jumping and hopping activities",
      "Permanent structural anatomical asymmetry in the length and diameter of bilateral skeletal femoral bone segments"
    ],
    "correct": 0,
    "explanation": "The bilateral deficit (bilateral force < sum of unilateral forces) is mediated by neural mechanisms, including interhemispheric cortical inhibition and reduced motor unit discharge rates during simultaneous bilateral maximal efforts."
  },
  {
    "id": "t4-a1-005",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "applied",
    "text": "In cardiovascular exercise physiology, what physiological reflex prevents excessive drops in arterial blood pressure upon sudden standing in athletes?",
    "options": [
      "Bainbridge reflex triggering profound vagal bradycardia and transient arterial vasodilation across working vascular beds",
      "Baroreceptor reflex triggering arterial vasoconstriction and compensatory tachycardia via systemic sympathetic activation",
      "Hering-Breuer reflex inhibiting pulmonary diaphragm excursion and preventing excessive thoracic intra-alveolar inflation",
      "Bezold-Jarisch reflex inducing acute peripheral vasodilation accompanied by severe central parasympathetic bradycardia"
    ],
    "correct": 1,
    "explanation": "Orthostatic drop in venous return unloads arterial baroreceptors (carotid sinus/aortic arch), triggering immediate sympathetic outflow that increases heart rate and systemic vascular resistance to restore blood pressure."
  },
  {
    "id": "t4-a1-006",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "analytical",
    "text": "The 'Respiratory Muscle Metaboreflex' describes which physiological mechanism occurring during high-intensity endurance exercise?",
    "options": [
      "Severe fatigue of the diaphragm and inspiratory muscles triggers sympathetically mediated peripheral vasoconstriction in working locomotor limb muscles",
      "Increased pulmonary ventilation directly stimulates glycogen synthesis in active quadriceps motor units via systemic hormonal cascades",
      "Elevated blood lactate in the lungs causes immediate relaxation of all peripheral arterial smooth muscle to accelerate venous clearance",
      "Hyperventilation causes massive renal bicarbonate reabsorption to completely prevent intracellular lactic acid accumulation in muscle"
    ],
    "correct": 0,
    "explanation": "When respiratory muscles fatigue during heavy exercise, accumulated metabolites activate group IV phrenic afferents, triggering a sympathetically mediated vasoconstriction in active locomotor muscles, accelerating limb fatigue."
  },
  {
    "id": "t4-a1-007",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "foundational",
    "text": "How do Monocarboxylate Transporters (MCT1 and MCT4) facilitate metabolic recovery during and after high-intensity exercise?",
    "options": [
      "MCT1 and MCT4 co-transport lactate and protons (H+) across cell membranes for oxidation in oxidative fibers or gluconeogenesis in the liver",
      "MCT1 and MCT4 transport free fatty acids directly into the sarcoplasmic reticulum for long-term intracellular energetic storage",
      "MCT1 and MCT4 hydrolyze ATP into ADP during explosive sarcomeric cross-bridge power strokes inside fast-twitch skeletal myofibrils",
      "MCT1 and MCT4 synthesize glycogen directly from carbon dioxide inside pulmonary capillaries during steady-state aerobic breathing"
    ],
    "correct": 0,
    "explanation": "MCT4 facilitates lactate and H+ efflux from highly glycolytic muscle fibers into circulation, while MCT1 mediates lactate uptake into oxidative skeletal fibers and cardiac myocytes for oxidation (cell-to-cell lactate shuttle)."
  },
  {
    "id": "t4-a1-008",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "applied",
    "text": "During heavy isometric lifting with an uninhibited Valsalva maneuver, what acute hemodynamic change is observed during Phase II (strain phase)?",
    "options": [
      "Dramatic increase in venous return, stroke volume, and systemic cardiac output due to intense peripheral muscular pumping",
      "Decreased venous return and stroke volume due to elevated intrathoracic pressure compressing the thoracic vena cava",
      "Immediate drop in systolic blood pressure to absolute zero with total loss of arterial pulse across all peripheral vessels",
      "Complete elimination of all systemic sympathetic nerve activity accompanied by profound resting vagal parasympathetic dominance"
    ],
    "correct": 1,
    "explanation": "During sustained Valsalva strain, elevated intrathoracic pressure compresses the thoracic vena cava, reducing venous return, stroke volume, and pulse pressure, despite high total peripheral resistance."
  },
  {
    "id": "t4-a1-009",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "analytical",
    "text": "What is the primary cellular mechanism explaining the 'slow component' of oxygen uptake (VO2 slow component) during heavy constant-load exercise above VT1?",
    "options": [
      "Gradual reduction in cardiac stroke volume resulting from severe acute dehydration and elevated ambient core temperature",
      "Progressive recruitment of less efficient, low-oxidative Type II fast-twitch motor units with elevated ATP/O2 turnover cost",
      "Sudden complete cessation of pulmonary alveolar gas exchange in the lungs accompanied by severe hypoventilation",
      "Rapid increase in blood pH leading to a strong leftward shift of the oxygen-hemoglobin dissociation saturation curve"
    ],
    "correct": 1,
    "explanation": "The VO2 slow component represents a progressive rise in oxygen uptake during constant-workload exercise above lactate threshold, primarily caused by the recruitment of less efficient Type II muscle fibers and energetic cost of fatigued fibers."
  },
  {
    "id": "t4-a1-010",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "foundational",
    "text": "In high-altitude physiology, the acute increase in resting heart rate upon arriving at 3,000 meters is primarily driven by:",
    "options": [
      "Elevated systemic sympathetic nervous system activity and circulating catecholamines to maintain cardiac output despite lower stroke volume",
      "Profound parasympathetic vagal stimulation slowing the sinoatrial node to prevent cardiac energy depletion under hypoxia",
      "Massive expansion of circulating blood plasma volume by 50% resulting from increased renal water and sodium reabsorption",
      "Direct atmospheric barometric pressure compression of the peripheral radial arteries and ascending aortic root"
    ],
    "correct": 0,
    "explanation": "Acute hypobaric hypoxia stimulates peripheral chemoreceptors, increasing sympathetic adrenergic drive and catecholamine release, raising resting and submaximal HR to maintain tissue oxygen delivery."
  },
  {
    "id": "t4-a1-011",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "applied",
    "text": "In the cellular energy sensing network, high intramuscular AMP/ATP ratios during endurance exercise activate which master metabolic regulator?",
    "options": [
      "Mammalian Target of Rapamycin Complex 1 (mTORC1) driving rapid structural myofibrillar protein synthesis cascades",
      "AMP-Activated Protein Kinase (AMPK), which stimulates PGC-1alpha and mitochondrial biogenesis across active skeletal fibers",
      "Myostatin signaling cascade causing rapid sarcomeric atrophy and breakdown of contractile cross-bridge proteins",
      "Phospholamban enzyme inhibiting sarcoplasmic reticulum calcium ATPase re-uptake channels during relaxation"
    ],
    "correct": 1,
    "explanation": "AMPK acts as an intracellular energy sensor activated by elevated AMP/ATP ratios during metabolic depletion, turning on catabolic pathways (glucose uptake, fatty acid oxidation) and PGC-1α-mediated mitochondrial biogenesis."
  },
  {
    "id": "t4-a1-012",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "analytical",
    "text": "In ultra-endurance fueling (events >2.5–3 hours), why is a multi-transportable carbohydrate mixture (Glucose + Fructose in a 2:1 or 1:0.8 ratio) recommended over glucose alone?",
    "options": [
      "Fructose bypasses the gastrointestinal tract and is absorbed directly through the skin into the bloodstream during sweating",
      "Glucose relies on SGLT1 transporters (saturated at ~60 g/h), while fructose utilizes GLUT5 transporters, allowing total oxidation up to 90–120 g/h",
      "Fructose converts directly into pure phosphocreatine inside contracting muscle fibers without requiring cellular oxygen",
      "Multi-carbohydrate mixtures prevent all sweat and electrolyte water loss during championship competition"
    ],
    "correct": 1,
    "explanation": "SGLT1 intestinal transporters saturate at ~60 g/hr of glucose. Adding fructose (absorbed via non-competing GLUT5 transporters) allows athletes to oxidize 90–120 g/hr of total carbohydrate without gastrointestinal distress."
  },
  {
    "id": "t4-a1-013",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "foundational",
    "text": "When assessing whole-body hydration in elite athletes, what value of Urine Specific Gravity (USG) indicates significant hypohydration / dehydration?",
    "options": [
      "USG < 1.010 on optical refractometer assessment indicating optimal euhydration",
      "USG > 1.020 to 1.025 on optical refractometer assessment indicating dehydration",
      "USG = 1.000 representing pure distilled water without any dissolved solutes",
      "USG values between 1.001 and 1.005 indicating extreme hypertonic cellular dehydration"
    ],
    "correct": 1,
    "explanation": "Euhydration is defined by USG < 1.020 (optimally < 1.015); values > 1.020–1.025 indicate significant dehydration and hypohydration, signaling the need for structured fluid replacement."
  },
  {
    "id": "t4-a1-014",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "applied",
    "text": "What is the primary ergogenic mechanism of sodium bicarbonate buffering when taken at the recommended dose of 0.3 g/kg body weight prior to competition?",
    "options": [
      "Increasing plasma bicarbonate concentration ([HCO3-]), promoting extracellular H+ efflux from fatigued muscles via monocarboxylate transporters",
      "Directly inhibiting the central respiratory center in the brainstem to completely eliminate all perceived shortness of breath",
      "Stimulating pancreatic beta-cell insulin secretion to double muscle glycogen storage within 15 minutes of oral ingestion",
      "Binding to cutaneous thermoreceptors to eliminate all conscious perception of ambient heat stress during exercise"
    ],
    "correct": 0,
    "explanation": "Sodium bicarbonate increases blood pH and [HCO3-], creating a steeper extracellular-to-intracellular pH gradient that accelerates H+ and lactate transport out of active muscle fibers during anaerobic glycolysis."
  },
  {
    "id": "t4-a1-015",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "analytical",
    "text": "In competitive powerlifters and sprinters, what is the primary structural mechanism by which Creatine Monohydrate supplementation enhances explosive performance?",
    "options": [
      "Expanding resting intramuscular phosphocreatine (PCr) stores by 15–20%, accelerating rapid ATP resynthesis during short maximal bursts",
      "Increasing red blood cell hemoglobin mass by stimulating renal erythropoietin secretion across continuous altitude training blocks",
      "Accelerating mitochondrial beta-oxidation of long-chain dietary fatty acids to spare glycogen during submaximal jogging",
      "Directly binding to postsynaptic acetylcholine receptors to cause continuous involuntary muscle tetany across all limbs"
    ],
    "correct": 0,
    "explanation": "Creatine supplementation increases total muscle creatine and PCr stores by ~20%, enhancing the capacity and resynthesis rate of the phosphagen system during repeated high-intensity efforts."
  },
  {
    "id": "t4-a1-016",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "foundational",
    "text": "In sports kinanthropometry, which landmark is used as the standard anatomical reference for measuring the 'Subscapular skinfold'?",
    "options": [
      "Directly on the spine of the scapula at the junction with the acromial angle",
      "2 cm below the inferior angle of the scapula on a 45-degree diagonal line downward and outward",
      "Along the medial border of the scapula at the horizontal level of the T3 spinous process",
      "Directly inside the axillary fossa overlying the latissimus dorsi tendon insertion"
    ],
    "correct": 1,
    "explanation": "ISAK guidelines define the subscapular skinfold site as 2 cm along a line running obliquely downward and laterally at a 45° angle from the inferior angle of the scapula."
  },
  {
    "id": "t4-a1-017",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "applied",
    "text": "In somatotype distribution analysis, what is the 'Somatotype Attitudinal Distance' (SAD)?",
    "options": [
      "The spatial 3D Euclidean distance between two individual somatotype points plotted on a somatochart",
      "The psychological attitude and self-esteem score of an athlete regarding their physical body image",
      "The linear difference between standing stature and sitting height measured in centimeters",
      "The percentage change in body mass index recorded across twelve consecutive competitive months"
    ],
    "correct": 0,
    "explanation": "Somatotype Attitudinal Distance (SAD) is the spatial distance in 3D somatotype space (Endomorphy, Mesomorphy, Ectomorphy) between any two somatotypes or between an individual and a group mean."
  },
  {
    "id": "t4-a1-018",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "analytical",
    "text": "When assessing body composition via Air Displacement Plethysmography (Bod Pod), which physical law is utilized to calculate body volume?",
    "options": [
      "Boyle's Law of pressure-volume relationships under isothermal conditions inside closed chambers",
      "Newton's Third Law of action and equal opposing reaction forces during ground impact loading",
      "Bernoulli's Principle of hydrodynamic fluid flow through constricted cylindrical tubes",
      "Wolff's Law of bone trabecular remodeling under mechanical tensile and compressive strain"
    ],
    "correct": 0,
    "explanation": "The Bod Pod uses air displacement plethysmography based on Boyle's Law (P1V1 = P2V2 at constant temperature) to determine body volume, which is combined with mass to calculate body density."
  },
  {
    "id": "t4-a1-019",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "foundational",
    "text": "In pediatric sports science, the Khamis-Roche method predicts adult stature in non-invasive talent screening using which set of variables?",
    "options": [
      "Child's chronological age, standing stature, scale weight, and mid-parental stature",
      "Wrist radiograph ossification staging according to Tanner-Whitehouse standardized atlas plates",
      "Serum growth hormone and free testosterone concentrations obtained from fasting blood samples",
      "Dual-energy X-ray absorptiometry scan of the left proximal femur and lumbar vertebrae"
    ],
    "correct": 0,
    "explanation": "The Khamis-Roche method accurately predicts mature adult height in growing children without X-rays, utilizing chronological age, standing height, body weight, and biological parents' heights."
  },
  {
    "id": "t4-a1-020",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "applied",
    "text": "In the Morgan Profile of Mood States (POMS) research, what is the hallmark mood profile associated with elite, successful athletic performance called?",
    "options": [
      "The 'Burnout Valley' profile characterized by low vigor, extreme fatigue, and elevated anger",
      "The 'Iceberg Profile' (characterized by elevated Vigor and depressed Tension, Depression, Anger, Fatigue, and Confusion)",
      "The 'Flat-Line' profile characterized by identical normalized scores across all mood sub-scales",
      "The 'Inverted Triangle' profile characterized by high confusion and depressed physiological vigor"
    ],
    "correct": 1,
    "explanation": "Morgan's 'Iceberg Profile' demonstrates high vigor (above population average) combined with low negative mood states (tension, depression, anger, fatigue, confusion below average), characteristic of peak athletic functioning."
  },
  {
    "id": "t4-a1-021",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "analytical",
    "text": "In Hanin's Individual Zones of Optimal Functioning (IZOF) model, how does optimal pre-competition anxiety vary among elite athletes?",
    "options": [
      "Every elite athlete performs best when cognitive and somatic anxiety levels are at absolute zero",
      "Optimal anxiety is highly individualized; some athletes perform best at low, some at moderate, and others at very high anxiety levels",
      "All athletes perform best at precisely 50% of their maximal laboratory-measured physiological arousal",
      "Anxiety has zero measurable impact on complex motor performance or sport decision-making accuracy"
    ],
    "correct": 1,
    "explanation": "Hanin's IZOF model posits that optimal emotional arousal/anxiety is individual-specific; each athlete has a bandwidth (zone) of optimal functioning (some thriving under high anxiety, others under low anxiety)."
  },
  {
    "id": "t4-a1-022",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "foundational",
    "text": "In team sports psychology, the 'Ringelmann Effect' describes which social group phenomenon?",
    "options": [
      "Individual performance and motivation decrease as group size increases (Social Loafing)",
      "Team cohesion increases exponentially whenever a new star athlete joins the competitive squad",
      "Athletes always perform significantly better in front of large cheering home stadium crowds",
      "Coaches become progressively more democratic and open as championship tournaments approach"
    ],
    "correct": 0,
    "explanation": "The Ringelmann Effect demonstrates that individual productivity and effort decline as the size of the group increases due to loss of individual accountability and motivation (social loafing)."
  },
  {
    "id": "t4-a1-023",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "applied",
    "text": "Which psychological coping strategy involves active problem-solving, time management, and direct action to alter the stressful situation itself?",
    "options": [
      "Emotion-focused coping aimed at regulating internal emotional distress feelings and somatic symptoms",
      "Problem-focused coping aimed at altering or managing the source of the stress through direct constructive action",
      "Avoidance coping involving behavioral withdrawal, denial, and complete mental disengagement from the sport",
      "Catastrophizing coping focusing obsessively on worst-case scenario outcomes and potential future failures"
    ],
    "correct": 1,
    "explanation": "Problem-focused coping involves direct actions taken to solve the stressor (e.g., gathering information, planning, skill development), whereas emotion-focused coping manages emotional response."
  },
  {
    "id": "t4-a1-024",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "analytical",
    "text": "In force-plate Countermovement Jump (CMJ) assessment, what does the 'Eccentric Braking RFD' metric evaluate?",
    "options": [
      "The athlete's neuromuscular capacity to rapidly decelerate and brake the downward center of mass velocity during the rapid eccentric dip",
      "The total flight time recorded from instantaneous toe-off until the initial force threshold landing impact",
      "The peak vertical jump height achieved by the athlete above baseline standing center of mass position",
      "The rate of blood lactate clearance and metabolic recovery recorded during the post-jump resting interval"
    ],
    "correct": 0,
    "explanation": "Eccentric braking RFD measures the rate of force development during the deceleration phase of the CMJ, reflecting neuromuscular capacity to rapidly absorb kinetic energy and transition into concentric propulsion."
  },
  {
    "id": "t4-a1-025",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "foundational",
    "text": "Why is the natural logarithm of the Root Mean Square of Successive Differences (ln RMSSD) preferred for daily resting Heart Rate Variability monitoring in athletes?",
    "options": [
      "It measures pure sympathetic tone and is completely unaffected by respiratory breathing patterns",
      "It reflects cardiac vagal (parasympathetic) tone, is robust to breathing rate variations, and possesses high day-to-day reliability",
      "It requires 24-hour continuous Holter electrocardiogram recording to calculate accurately in sports clinics",
      "It drops to absolute zero whenever an athlete consumes moderate amounts of dietary carbohydrates"
    ],
    "correct": 1,
    "explanation": "RMSSD directly quantifies vagally-mediated parasympathetic modulation of cardiac cycle-to-cycle variations; ln RMSSD is statistically normalized, practical for short 1-minute morning recordings, and highly reliable."
  },
  {
    "id": "t4-a1-026",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "applied",
    "text": "In Tim Gabbett's Acute:Chronic Workload Ratio (ACWR) model for injury risk management, which ratio range represents the 'Sweet Spot' associated with lower injury risk?",
    "options": [
      "0.2 to 0.5 (representing acute severe unloading, complete detraining, and loss of athletic conditioning)",
      "0.8 to 1.3 (representing balanced acute loading relative to chronic fitness capacity)",
      "1.8 to 2.5 (representing sudden severe acute workload spiking and excessive fatigue accumulation)",
      "3.0 to 4.0 (representing extreme exponential training spikes with very high prospective injury risk)"
    ],
    "correct": 1,
    "explanation": "Gabbett's ACWR model identifies 0.8–1.3 as the optimal training sweet spot where acute fatigue matches chronic fitness capacity, while ratios >1.5 ('danger zone') significantly elevate relative injury risk."
  },
  {
    "id": "t4-a1-027",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "analytical",
    "text": "In sports science research, what is the 'Minimal Clinically Important Difference' (MCID)?",
    "options": [
      "The smallest statistical p-value achievable in an experimental sports science laboratory trial",
      "The smallest change in a clinical outcome or performance measure that an athlete or clinician perceives as beneficial and meaningful",
      "The total financial equipment cost difference between two computerized isokinetic dynamometers",
      "The mathematical difference between two standard deviations in a standardized normal Gaussian curve"
    ],
    "correct": 1,
    "explanation": "MCID is the smallest threshold change in a treatment outcome that represents a meaningful, clinically relevant improvement in patient/athlete function, beyond mere statistical significance."
  },
  {
    "id": "t4-a1-028",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "foundational",
    "text": "When assessing the reliability of continuous numerical testing data across repeated trials, which statistical coefficient is considered the gold standard?",
    "options": [
      "Pearson's correlation coefficient (r) without evaluating systematic measurement bias across trials",
      "Intraclass Correlation Coefficient (ICC) combined with Standard Error of Measurement (SEM)",
      "Chi-Square test of independence on nominal categorical groups across independent samples",
      "Spearman's rank-order correlation coefficient for non-parametric ordinal screening datasets"
    ],
    "correct": 1,
    "explanation": "The Intraclass Correlation Coefficient (ICC) accounts for both correlation and systematic agreement across trials; combined with SEM, it provides the standard metric for test-retest and inter-rater reliability."
  },
  {
    "id": "t4-a1-029",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "applied",
    "text": "What does a statistical 'Power Analysis' determine prior to conducting an experimental sports intervention study?",
    "options": [
      "The maximum jumping wattage of the athletes measured on a dual force plate system",
      "The required sample size (number of subjects) needed to detect a statistically significant effect of a given size at a specified alpha level",
      "The exact brand of barbell and resistance equipment required for strength training studies",
      "The percentage of fast-twitch motor units present in an athlete's vastus lateralis muscle"
    ],
    "correct": 1,
    "explanation": "A priori statistical power analysis determines the minimum sample size required to reject the null hypothesis with adequate statistical power (typically 80% or 1 - beta = 0.80) for a given effect size and alpha level."
  },
  {
    "id": "t4-a1-030",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "analytical",
    "text": "In a sports clinical trial, what is the purpose of 'Allocation Concealment'?",
    "options": [
      "Preventing researchers and participants from knowing which intervention group the next eligible participant will be assigned to prior to enrollment",
      "Hiding all research financial expenses and sponsorship funding sources from institutional review boards",
      "Keeping the final tournament game score completely secret from stadium spectators and broadcast media",
      "Preventing athletes from knowing which specific sports team or federation they are competing for"
    ],
    "correct": 0,
    "explanation": "Allocation concealment prevents selection bias by shielding the upcoming randomization sequence from investigators enrolling participants, ensuring assignment cannot be influenced."
  },
  {
    "id": "t4-a1-031",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "foundational",
    "text": "What does an 'Odds Ratio' (OR) of 2.5 for a specific biomechanical risk factor indicate regarding sports injury likelihood?",
    "options": [
      "Athletes with the risk factor have 2.5 times higher odds of sustaining the injury compared to athletes without the factor",
      "The injury risk is reduced by 250% in those athletes who possess the specific biomechanical risk factor",
      "The screening test has an overall diagnostic accuracy of exactly 2.5% when applied to healthy athletic cohorts",
      "Exactly 2.5 athletes will sustain an acute ligamentous injury during every competitive tournament match"
    ],
    "correct": 0,
    "explanation": "An Odds Ratio of 2.5 indicates that the odds of the outcome (injury) occurring in the exposed group are 2.5 times greater than the odds of the outcome in the unexposed group."
  },
  {
    "id": "t4-a1-032",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "applied",
    "text": "In epidemiological injury surveillance, the 'Incidence Rate' in team sports is standardly expressed as:",
    "options": [
      "Total number of injuries occurring per 1,000 athlete-exposure hours across matches and training",
      "Number of injured players divided by the total number of stadium spectators attending the match",
      "Total kilograms of ice and modalities utilized in the athletic training room per calendar month",
      "Percentage of competitive matches won following successful surgical orthopedic interventions"
    ],
    "correct": 0,
    "explanation": "Consensus statements for sports injury surveillance (Fuller et al.) standardly define injury incidence as the number of injuries per 1,000 athlete-hours of exposure (match play and training)."
  },
  {
    "id": "t4-a2-001",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "foundational",
    "text": "What is the primary governing function of the National Anti-Doping Agency (NADA) in India?",
    "options": [
      "Planning, coordinating, implementing, monitoring, and advocating for doping control in all sports across India in accordance with the World Anti-Doping Code",
      "Organizing national and international commercial sports broadcasting leagues and selling media rights",
      "Manufacturing, formulating, and commercially retailing ergogenic nutritional supplements for athletes",
      "Conducting criminal investigations into match-fixing, spot-fixing, and illegal betting in cricket"
    ],
    "correct": 0,
    "explanation": "NADA India is the national organization mandated for promoting, coordinating, and monitoring the doping control program in sports across the country under the WADA Code.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-a2-002",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "applied",
    "text": "In the National Sports Awards of India, which award is conferred to recognize the lifetime contribution of coaches to sports development?",
    "options": [
      "Arjuna Award for Outstanding Performance in Sports over four consecutive years",
      "Dronacharya Award (Lifetime Category) carrying a cash prize of Rs. 15 Lakhs",
      "Rashtriya Khel Protsahan Puruskar for Corporate Entities and Sports Boards",
      "Major Dhyan Chand Khel Ratna Award for Athletes achieving spectacular medals"
    ],
    "correct": 1,
    "explanation": "The Dronacharya Award in the Lifetime Category honors coaches who have produced outstanding athletes over a period of 20 years or more, carrying a cash prize of Rs. 15 Lakhs.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-a2-003",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "foundational",
    "text": "Under the World Anti-Doping Code, what is the 'Athlete Biological Passport' (ABP) designed to detect?",
    "options": [
      "Direct detection of synthetic steroids exclusively via gas chromatography-mass spectrometry in single urine screens",
      "Longitudinal monitoring of biological markers over time to detect indirect physiological effects of doping rather than detecting specific substances",
      "Tracking the international travel visa, passport entries, and hotel bookings of national athletes across countries",
      "Recording the chronological age, dental records, and skeletal X-rays of youth athletes to verify eligibility"
    ],
    "correct": 1,
    "explanation": "The ABP tracks biological variables (Hematological and Steroidal Modules) over time to identify indirect biomarker fluctuations resulting from doping, establishing personalized baselines.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-a2-004",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "applied",
    "text": "Which city will host the 2026 Commonwealth Games after host revisions?",
    "options": [
      "Glasgow, Scotland, United Kingdom (hosting a streamlined 10-sport program)",
      "Auckland, North Island, New Zealand (hosting full 20-sport program)",
      "Gold Coast, Queensland, Australia (hosting multi-city games)",
      "Durban, KwaZulu-Natal, South Africa (hosting African games)"
    ],
    "correct": 0,
    "explanation": "Glasgow, Scotland was officially confirmed as the host city for the 2026 Commonwealth Games, featuring a scaled-down 10-sport program.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-a2-005",
    "section": "A2",
    "topic": "sports governance ethics and age verification",
    "subtopic": "National Sports Development Code and athlete safeguarding",
    "difficulty": "foundational",
    "text": "Under the National Sports Development Code of India (2011), what is the maximum consecutive tenure permitted for the President of a recognized National Sports Federation?",
    "options": [
      "A maximum of three terms of 4 years each (total 12 years) with or without cooling-off",
      "A single term of 2 years with immediate mandatory lifetime retirement from all sports administration",
      "Five consecutive terms of 5 years each (total 25 years) without any term limits or age restrictions",
      "Unlimited lifelong tenure as long as approved annually by the federation executive council"
    ],
    "correct": 0,
    "explanation": "Under the 2011 Sports Code, the President of an NSF can hold office for a maximum of three consecutive terms of 4 years (total 12 years), after which they cannot stand for re-election.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-a2-006",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "applied",
    "text": "What is the apex National Sports Academy under SAI dedicated to physical education, teacher training, and sports research in southern India?",
    "options": [
      "Lakshmibai National College of Physical Education (LNCPE), Thiruvananthapuram, Kerala",
      "Netaji Subhas National Institute of Sports (NSNIS), Patiala, Punjab",
      "SAI Netaji Subhas Western Centre, Gandhinagar, Gujarat",
      "SAI Chaudhry Devi Lal Northern Regional Centre, Sonepat, Haryana"
    ],
    "correct": 0,
    "explanation": "LNCPE Thiruvananthapuram (Kerala) is the premier national institution under the Sports Authority of India dedicated to physical education, research, and high-performance training in southern India.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-a2-007",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "foundational",
    "text": "In the Olympic Games, what is the maximum permissible total delegation quota for Team India's medical and paramedical support staff relative to athlete numbers?",
    "options": [
      "Support staff quota is standardly capped at approximately 30% to 33% of the total qualified athlete contingent by the IOC/IOA",
      "One doctor and one physiotherapist permitted for every individual athlete (100% quota allocation across all events)",
      "Zero medical staff are permitted inside the Olympic Village under International Olympic Committee regulations",
      "Support staff quota is determined strictly by the host city municipal police and local transportation authorities"
    ],
    "correct": 0,
    "explanation": "IOC/IOA Olympic Village accreditation guidelines allocate support personnel (including coaches, medical, and performance analysts) at ~30–33% of the total qualified athlete quota.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-a2-008",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "Under the WADA 2024 Prohibited List, in-competition use of which pharmacological substance class is strictly banned in precision shooting sports (such as ISSF Shooting and Archery)?",
    "options": [
      "Beta-Blockers (Class P1: Prohibited in Particular Sports due to anti-tremor and bradycardic effects)",
      "Glucocorticoids (Class S9: Oral formulations only prohibited in all endurance and team sports)",
      "Non-steroidal anti-inflammatory drugs (NSAIDs like ibuprofen and naproxen across sports)",
      "Essential branched-chain amino acids (BCAAs like leucine, isoleucine, and valine supplements)"
    ],
    "correct": 0,
    "explanation": "Beta-blockers (Class P1) are prohibited in particular sports (e.g., shooting, archery, darts) at all times or in-competition because they reduce tremor, resting heart rate, and physiological arousal.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t4-b-001",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Dial Test (Tibial External Rotation test) is performed at 30° and 90° of knee flexion. Increased external rotation >10° at 30° flexion that decreases at 90° indicates isolated injury to which structure?",
    "options": [
      "Isolated Posterolateral Corner (PLC) injury of the knee without cruciate ligament involvement",
      "Combined Posterolateral Corner and Posterior Cruciate Ligament (PCL) catastrophic joint disruption",
      "Isolated Anterior Cruciate Ligament (ACL) rupture with anterolateral rotary instability",
      "Medial Collateral Ligament (MCL) superficial tear with valgus opening at 30 degrees"
    ],
    "correct": 0,
    "explanation": "Increased external rotation >10° at 30° flexion only indicates isolated PLC injury; if external rotation is increased at BOTH 30° and 90° flexion, a combined PLC + PCL injury is present."
  },
  {
    "id": "t4-b-002",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "When performing the Slump Test for neural tension, what is the standardized distal-to-proximal sequence of positioning?",
    "options": [
      "Seated, slumped thoracic/lumbar spine, cervical flexion, knee extension, ankle dorsiflexion, with neck release sensitizing",
      "Supine, hip abduction, knee flexion, ankle plantarflexion, and arm elevation in the coronal plane",
      "Prone, knee flexion to 90 degrees, hip hyperextension, and trunk rotation across the sagittal plane",
      "Standing, forward trunk flexion with arms outstretched overhead toward the ceiling"
    ],
    "correct": 0,
    "explanation": "Slump test sequence: Patient seated with hands behind back -> Slump thoracic/lumbar spine -> Apply overpressure -> Flex cervical spine -> Extend knee -> Dorsiflex ankle -> Release cervical flexion to confirm neural sensitizing."
  },
  {
    "id": "t4-b-003",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Crank Test for shoulder labral pathology is performed in supine by placing the glenohumeral joint in which position while applying axial load?",
    "options": [
      "160° abduction in scapular plane with axial load while repeatedly internally and externally rotating the humerus",
      "0° adduction with forceful downward traction and wrist extension in anatomical neutral position",
      "90° forward flexion with horizontal adduction across the chest and resisted forearm pronation",
      "Full extension with elbow flexion to 90 degrees and forearm supination against maximal manual resistance"
    ],
    "correct": 0,
    "explanation": "The Crank test elevates the arm to 160° in the scapular plane, applies axial compression along the humerus, and rotates the humerus into internal and external rotation; reproduction of painful clicking indicates labral tear."
  },
  {
    "id": "t4-b-004",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The Mulders Sign test is performed on the foot by squeezing the metatarsal heads together while palpating the intermetatarsal space to diagnose:",
    "options": [
      "Morton's Neuroma (interdigital perineural fibroma) between 3rd and 4th metatarsals with a palpable click",
      "Plantar fascia acute rupture at the calcaneal tuberosity insertion with severe loss of the arch",
      "Navicular bone acute stress fracture in the midfoot with severe dorsal swelling and antalgia",
      "First metatarsophalangeal joint turf toe sprain with hyperextension capsular tear"
    ],
    "correct": 0,
    "explanation": "Mulder's click is elicited by compressing the metatarsal heads transversally while applying plantar/dorsal pressure in the intermetatarsal space; a palpable click and sharp radiating pain confirm Morton's neuroma."
  },
  {
    "id": "t4-b-005",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Hornblower's Sign (Patte Test) evaluates the functional structural integrity of which external rotator cuff muscle?",
    "options": [
      "Supraspinatus muscle tendon unit inserting onto the superior facet of the greater tuberosity",
      "Teres Minor muscle and Infraspinatus (inability to maintain 90° external rotation at 90° abduction)",
      "Subscapularis anterior muscle belly inserting onto the lesser tuberosity of the humerus",
      "Pectoralis major clavicular head inserting along the lateral lip of the bicipital groove"
    ],
    "correct": 1,
    "explanation": "Hornblower's sign (inability to maintain 90° shoulder external rotation at 90° abduction, causing forearm to fall forward) specifically indicates severe tear/fatty degeneration of the Teres Minor."
  },
  {
    "id": "t4-b-006",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The Belly-Press (Napoleon) test and Lift-Off test are clinical diagnostic tests used specifically to assess:",
    "options": [
      "Subscapularis muscle integrity and internal rotation strength against abdominal resistance",
      "Infraspinatus tendon tear at the middle facet of the greater tuberosity with external rotation lag",
      "Long head of biceps tendon instability in the bicipital groove during resisted elbow flexion",
      "Serratus anterior winging during active overhead forward arm elevation against the wall"
    ],
    "correct": 0,
    "explanation": "The Lift-Off test (hand behind back) and Belly-Press test (pressing palm into abdomen with wrist straight) specifically evaluate the subscapularis muscle and tendon integrity."
  },
  {
    "id": "t4-b-007",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Ely's Test is performed with the patient in prone position to evaluate contracture or tightness of which muscle?",
    "options": [
      "Biceps femoris long head tendon along the posterolateral thigh",
      "Rectus Femoris (knee flexion produces spontaneous anterior pelvic tilt and hip flexion off table)",
      "Iliopsoas one-joint muscle belly originating from the lumbar spine",
      "Gluteus maximus extensor tendon inserting on the gluteal tuberosity"
    ],
    "correct": 1,
    "explanation": "Ely's test passively flexes the knee in prone; if the ipsilateral hip flexes and the pelvis rises off the table, it indicates tightness/shortening of the two-joint Rectus Femoris."
  },
  {
    "id": "t4-b-008",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The Noble Compression Test for Iliotibial Band Friction Syndrome produces pain over the lateral femoral epicondyle as the knee is passively moved from 90° flexion through what specific angle?",
    "options": [
      "0 to 5 degrees of knee hyperextension during terminal locking",
      "Approximately 30 degrees of knee flexion (the ITB impingement zone over the epicondyle)",
      "60 to 75 degrees of knee flexion during mid-range loading",
      "120 to 140 degrees of deep knee flexion on the examination couch"
    ],
    "correct": 1,
    "explanation": "Noble's test compresses the ITB over the lateral femoral epicondyle while extending the knee; pain peaks at ~30° flexion where the posterior fibers of the ITB slide anteriorly over the epicondyle."
  },
  {
    "id": "t4-b-009",
    "section": "B",
    "topic": "human and exercise physiology",
    "subtopic": "Cardiorespiratory and neuromuscular physiology",
    "difficulty": "applied",
    "text": "In therapeutic exercise progression, what is the 'SAID Principle'?",
    "options": [
      "Specific Adaptations to Imposed Demands (the human body adapts specifically to the type of demand placed upon it)",
      "Sustained Aerobic Intensity Decreases across consecutive weekly periodization cycles during competitive season",
      "Strength And Intensity Diminish during competition tapering unless high training volume is maintained",
      "Skeletal Articulations Immobilize following unaccustomed eccentric exercise to protect damaged sarcomeres"
    ],
    "correct": 0,
    "explanation": "The SAID principle (Specific Adaptations to Imposed Demands) dictates that the body will adapt specifically to the exact physiological, biomechanical, and metabolic stress imposed during training."
  },
  {
    "id": "t4-b-010",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In the rehabilitation of shoulder impingement, which exercise elicits high electromyographic (EMG) activity in the Lower Trapezius while minimizing Upper Trapezius dominance?",
    "options": [
      "Heavy shoulder shrugs with dumbbells in standing position to fatigue",
      "Prone Y-raise in scapular plane with external rotation (thumbs up) and Prone horizontal abduction with ER",
      "Upright barbell rows pulled directly to chin level with narrow hand grip",
      "Overhead military barbell press performed to failure on a bench"
    ],
    "correct": 1,
    "explanation": "EMG studies (Cools et al.) demonstrate that prone Y-raises (at 120° scaption with thumbs up) and prone horizontal abduction in external rotation maximize lower trapezius recruitment while minimizing upper trapezius co-activation."
  },
  {
    "id": "t4-b-011",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In closed kinetic chain squatting, why does increasing trunk forward lean (hip flexion) reduce patellofemoral joint stress while increasing hip extensor demand?",
    "options": [
      "It moves the ground reaction force vector closer to the knee joint (shortening the knee extensor moment arm) and further from the hip joint (lengthening hip moment arm)",
      "It completely eliminates all gluteus maximus and hamstring muscle recruitment during the downward squat descent",
      "It forces the patella to completely dislocate out of the trochlear groove into the lateral soft tissues",
      "It shifts 100% of body weight directly onto the gastrocnemius muscle belly without engaging the quadriceps"
    ],
    "correct": 0,
    "explanation": "Forward trunk lean shifts the center of mass anteriorly, shortening the moment arm at the knee (reducing quadriceps demand and PFJ compressive force) while increasing the moment arm at the hip (increasing gluteal/hamstring demand)."
  },
  {
    "id": "t4-b-012",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "analytical",
    "text": "According to Kaltenborn's manual therapy grading system, a Grade III Traction mobilization is defined as:",
    "options": [
      "An extremely small-amplitude movement that neutralizes joint pressure without separation ('Loosen')",
      "Taking up joint slack and tightening surrounding periarticular tissues ('Tighten')",
      "Applying sustained linear traction beyond tissue slack to stretch joint capsule and surrounding soft tissues ('Stretch')",
      "A high-velocity thrust manipulation performed at the physiological end of passive range"
    ],
    "correct": 2,
    "explanation": "Kaltenborn Grade III traction applies sufficient force to take up joint slack and stretch periarticular soft tissues to increase mobility and restore joint play."
  },
  {
    "id": "t4-b-013",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In the rehabilitation of an acute inversion ankle sprain, which muscle group requires priority concentric and eccentric strengthening to resist dynamic inversion forces?",
    "options": [
      "Tibialis anterior and Extensor hallucis longus dorsiflexors along the anterior shank",
      "Peroneus (Fibularis) Longus and Brevis evertors along the lateral compartment",
      "Tibialis posterior and Flexor digitorum longus invertors along the deep posterior compartment",
      "Gastrocnemius and Soleus deep plantarflexors inserting onto the calcaneus"
    ],
    "correct": 1,
    "explanation": "The peroneus longus and brevis are the primary dynamic lateral stabilizers of the ankle; their rapid eccentric contraction counteracts sudden forced inversion, protecting the ATFL and CFL."
  },
  {
    "id": "t4-b-014",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "During open-chain knee rehabilitation, why is isotonic knee extension from 90° to 45° of flexion considered safe for the Anterior Cruciate Ligament (ACL)?",
    "options": [
      "In this flexion range (90° to 45°), anterior tibial shear and ACL tensile strain are minimal to zero, whereas strain peaks between 30° and 0° extension",
      "The patella completely locks the tibiofemoral joint at 45 degrees of flexion, eliminating all shear forces",
      "Quadriceps muscle contraction cannot generate extensor torque at 90 degrees due to active insufficiency",
      "Hamstring muscles are 100% paralyzed at 90 degrees flexion, preventing antagonist co-contraction forces"
    ],
    "correct": 0,
    "explanation": "At knee flexion angles from 90° to 45°, the patellar tendon angle of insertion pulls the tibia posteriorly or with negligible anterior shear, placing zero strain on the ACL; significant anterior shear only develops at <30° extension."
  },
  {
    "id": "t4-b-015",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "applied",
    "text": "In kinetic chain evaluation of throwing athletes, what percentage of total kinetic energy and force delivered to the ball during a baseball pitch or cricket delivery originates from the lower extremities and trunk core?",
    "options": [
      "Approximately 10% to 15% of total kinetic energy transferred to the ball",
      "Approximately 50% to 55% of total kinetic energy transferred to the ball",
      "Approximately 90% to 95% of total kinetic energy transferred to the ball",
      "Zero percent (all throwing energy originates purely in the shoulder and wrist)"
    ],
    "correct": 1,
    "explanation": "Kibler's kinetic chain research demonstrates that over 50–55% of total kinetic energy and velocity generated during overhead throwing originates in the legs and lumbo-pelvic-hip core, transferring sequentially to the shoulder and hand."
  },
  {
    "id": "t4-b-016",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In foot and ankle biomechanics, the 'Windlass Mechanism' is engaged during terminal stance and toe-off when:",
    "options": [
      "The first metatarsophalangeal (MTP) joint undergoes passive extension/dorsiflexion, tightening the plantar fascia and elevating the medial longitudinal arch",
      "The ankle is forcefully inverted while the toes are completely flexed into the floor during stance",
      "The Achilles tendon relaxes to allow maximum flat-foot pronation across the midtarsal joints",
      "The calcaneus slides laterally away from the cuboid bone to flatten the lateral longitudinal arch"
    ],
    "correct": 0,
    "explanation": "The Windlass mechanism (Hicks) occurs during terminal stance toe-off when 1st MTP extension pulls the plantar fascia tight around the metatarsal heads, elevating the medial arch and transforming the foot into a rigid lever for propulsion."
  },
  {
    "id": "t4-b-017",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "Which foot posture during running increases tensile stress on the plantar fascia and posterior tibial tendon?",
    "options": [
      "Pes cavus with rigid high arch and supination during loading",
      "Pes planus with excessive prolonged subtalar pronation and midfoot eversion",
      "Neutral foot alignment with symmetrical rearfoot motion throughout",
      "Walking exclusively on the lateral 5th metatarsal border in inversion"
    ],
    "correct": 1,
    "explanation": "Excessive or prolonged pronation lowers the medial longitudinal arch, stretching the plantar fascia and overworking the Tibialis Posterior as it eccentrically attempts to decelerate internal tibial rotation and arch collapse."
  },
  {
    "id": "t4-b-018",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In hip biomechanics, why does holding a walking cane in the hand CONTRALATERAL to an injured or osteoarthritic hip significantly reduce joint reaction forces?",
    "options": [
      "It eliminates the need for hip abductors on the injured side by creating a supportive torque that assists pelvic stabilization, reducing abductor muscle force and resultant joint contact load",
      "It forces the patient to hop purely on the contralateral healthy limb, completely unloading the injured side",
      "It triples the body weight transferred onto the ipsilateral knee joint during the stance phase of walking",
      "It locks the injured hip into 90 degrees of internal rotation and prevents all sagittal plane movement"
    ],
    "correct": 0,
    "explanation": "A contralateral cane provides a long moment arm to the pelvis; pressing down creates a moment that opposes pelvic drop, drastically reducing the required contraction force of the ipsilateral gluteus medius and lowering hip joint reaction force by ~50%."
  },
  {
    "id": "t4-b-019",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "What is the primary function of the Menisci of the knee joint during axial weight-bearing?",
    "options": [
      "Transmitting and distributing 50% to 70% of compressive joint loads across the tibial plateau, increasing joint congruency, and providing secondary stability",
      "Completely preventing any knee flexion or extension beyond 45 degrees in standing weight-bearing postures",
      "Generating voluntary electrical action potentials to contract the hamstring muscle group during running",
      "Secreting systemic hormones that regulate blood glucose and insulin sensitivity during athletic running"
    ],
    "correct": 0,
    "explanation": "The menisci convert axial compressive loads into hoop stresses, transmitting ~50–70% of compressive force, doubling joint contact area, and reducing peak stress on articular cartilage."
  },
  {
    "id": "t4-b-020",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In scapular kinematics, 'scapular winging' characterized by prominence of the entire medial border and inferior angle of the scapula is caused by paralysis or weakness of:",
    "options": [
      "Serratus Anterior muscle (Long Thoracic Nerve)",
      "Trapezius muscle (Spinal Accessory Nerve)",
      "Rhomboid major muscle (Dorsal Scapular Nerve)",
      "Latissimus dorsi muscle (Thoracodorsal Nerve)"
    ],
    "correct": 0,
    "explanation": "Weakness or long thoracic nerve palsy of the Serratus Anterior causes classic medial scapular winging (medial border and inferior angle lifting away from posterior ribcage, especially during push-ups or arm elevation)."
  },
  {
    "id": "t4-b-021",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "In the human spine, which region possesses the highest range of axial rotation due to the nearly coronal orientation of its facet joints?",
    "options": [
      "Lumbar spine (L1 to L5 segments with sagittal facet orientation)",
      "Thoracic spine (T1 to T12 segments with coronal facet orientation)",
      "Sacrococcygeal junction at the base of the sacrum",
      "Pubic symphysis junction in the anterior pelvis"
    ],
    "correct": 1,
    "explanation": "Thoracic facet joints are oriented in the frontal (coronal) plane, facilitating axial rotation while restricting flexion/extension; lumbar facets are in the sagittal plane, blocking rotation."
  },
  {
    "id": "t4-b-022",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In normal human gait, what is the primary role of the Quadriceps muscle group during the Loading Response phase?",
    "options": [
      "Concentric contraction to hyperextend the knee forcefully onto the planted heel",
      "Eccentric contraction to absorb impact shock and control knee flexion from 0° to approximately 15°",
      "Isometric holding at 90 degrees of deep knee flexion throughout stance",
      "Total electrical silence with zero muscle force production across fibers"
    ],
    "correct": 1,
    "explanation": "At loading response, the quadriceps contract eccentrically to yield to the external knee flexion moment, absorbing ground impact shock while limiting knee flexion to ~15°."
  },
  {
    "id": "t4-b-023",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "A 'Vaulting Gait' is a pathological compensation where the patient rises up on the toes of the stance limb. Why is this compensation used?",
    "options": [
      "To assist toe clearance of a longer or non-flexing contralateral swing limb",
      "To stretch the stance Achilles tendon during running sprinting maneuvers",
      "Because the stance quadriceps is completely paralyzed in extension",
      "To accelerate forward sprinting velocity in competitive sprinters"
    ],
    "correct": 0,
    "explanation": "Vaulting involves premature plantarflexion on the sound stance limb to elevate the pelvis, creating extra ground clearance for a contralateral swing limb that cannot functionally shorten (due to knee stiffness, cast, or foot drop)."
  },
  {
    "id": "t4-b-024",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In running gait biomechanics, what is the key kinematic distinction that differentiates running from walking?",
    "options": [
      "Walking has a float (flight) phase; running has continuous double limb support",
      "Running has a flight phase (where neither foot is in contact with the ground) and lacks a double-support phase",
      "Running only occurs in backward reverse direction across sprinting tracks",
      "Walking requires 100 degrees of continuous knee flexion in mid-stance"
    ],
    "correct": 1,
    "explanation": "Walking is characterized by periods of double limb support (both feet on ground); running eliminates double support and introduces a flight (float) phase where neither foot contacts the ground."
  },
  {
    "id": "t4-b-025",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In running ground reaction force analysis, a 'Rearfoot Strike' (heel strike) pattern is characterized on force-time curves by:",
    "options": [
      "A prominent, sharp initial impact transient peak occurring within the first 10 to 30 ms of contact",
      "A completely smooth, single bell-shaped curve with zero initial impact force spike",
      "Zero ground reaction force throughout the entire stance phase of running",
      "Negative ground reaction forces pulling the runner downward into the track"
    ],
    "correct": 0,
    "explanation": "A rearfoot strike exhibits a distinct impact transient peak (vertical impact force spike occurring in the first 15–30 ms), whereas a forefoot/midfoot strike typically smooths out or eliminates this impact peak."
  },
  {
    "id": "t4-b-026",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "In high-voltage pulsed galvanic stimulation (HVPGS) for wound healing and edema reduction, which polarity is applied during the acute inflammatory phase (first 3 to 7 days)?",
    "options": [
      "Negative polarity (Cathode) over the wound to dissolve mature collagen scar tissue",
      "Positive polarity (Anode) over the acute edema site to repel negatively charged albumin proteins and attract neutrophils/macrophages",
      "High-frequency sinusoidal AC current at 50,000 Hz without distinct polarity",
      "Polarity is completely irrelevant in electrical tissue stimulation and healing"
    ],
    "correct": 1,
    "explanation": "In acute inflammation/edema, the positive anode is used over the injured site because it repels negatively charged serum albumin (reducing interstitial fluid shift) and attracts healing neutrophils/macrophages."
  },
  {
    "id": "t4-b-027",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "In therapeutic ultrasound, the 'Effective Radiating Area' (ERA) of the transducer crystal is clinically defined as:",
    "options": [
      "The total geometric surface area of the aluminum treatment soundhead faceplate",
      "The surface area of the piezoelectric crystal that actually emits ultrasonic energy (always slightly smaller than the geometric soundhead area)",
      "The depth of acoustic wave penetration into skeletal muscle and bone tissue",
      "The speed of sound travel through biological water and subcutaneous adipose"
    ],
    "correct": 1,
    "explanation": "The ERA is the cross-sectional area of the ultrasound beam exiting the treatment head, determined by the vibrating piezoelectric crystal, and is always slightly smaller than the total geometric faceplate area."
  },
  {
    "id": "t4-b-028",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "What is the Beam Non-uniformity Ratio (BNR) in therapeutic ultrasound, and what is the clinically acceptable standard ratio?",
    "options": [
      "The ratio of peak spatial intensity to average spatial intensity across the beam; an acceptable BNR is between 2:1 and 6:1",
      "The ratio of ultrasound frequency to electrical voltage; acceptable ratio is 100:1",
      "The ratio of soundhead diameter to treatment time; acceptable ratio is 10:1",
      "The ratio of water temperature to coupling gel thickness; acceptable ratio is 1:1"
    ],
    "correct": 0,
    "explanation": "BNR (Spatial Peak Intensity / Spatial Average Intensity) indicates beam uniformity and 'hot spot' risk; high quality ultrasound transducers have a BNR of <5:1 or 6:1 (lower is safer and more uniform)."
  },
  {
    "id": "t4-b-029",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "When applying therapeutic ultrasound at a frequency of 3 MHz compared to 1 MHz, how does the depth of tissue penetration differ?",
    "options": [
      "3 MHz penetrates deeply (up to 5 cm); 1 MHz penetrates superficially (1 to 2 cm)",
      "3 MHz is absorbed rapidly in superficial tissues (1 to 2.5 cm); 1 MHz penetrates deeply into tissues (up to 4 to 5 cm)",
      "Both 3 MHz and 1 MHz penetrate precisely 10 cm into biological bone",
      "Frequency has zero relationship to acoustic energy attenuation or depth"
    ],
    "correct": 1,
    "explanation": "Higher frequency (3 MHz) is absorbed more rapidly and penetrates superficially (1–2.5 cm, ideal for superficial tendons), while lower frequency (1 MHz) attenuates slower and reaches deep structures (3–5 cm, ideal for deep muscle/capsule)."
  },
  {
    "id": "t4-b-030",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "In proprioceptive neurorehabilitation, what is the primary function of the Golgi Tendon Organ (GTO)?",
    "options": [
      "Detecting rapid changes in muscle length and triggering the stretch reflex",
      "Monitoring muscle tension and force of contraction, mediating autogenic inhibition when tension is excessive",
      "Detecting superficial light touch on the epidermis of the skin",
      "Monitoring arterial oxygen saturation in the carotid sinus"
    ],
    "correct": 1,
    "explanation": "GTOs are encapsulated receptors located in series at the musculotendinous junction that monitor active muscle tension and exert autogenic inhibition (Ib afferents) on the agonist motor neuron pool to prevent excessive overload."
  },
  {
    "id": "t4-b-031",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In the assessment of balance and vestibular function, the Sensory Organization Test (SOT / Dynamic Posturography) systematically isolates which three sensory systems?",
    "options": [
      "Auditory, Olfactory, and Gustatory sensory systems in standing",
      "Visual, Somatosensory (proprioceptive), and Vestibular systems",
      "Cardiovascular, Respiratory, and Endocrine organ systems",
      "Sympathetic, Parasympathetic, and Enteric nervous systems"
    ],
    "correct": 1,
    "explanation": "The SOT evaluates balance under 6 conditions by systematically disrupting visual and somatosensory inputs to determine how effectively the central nervous system integrates visual, proprioceptive, and vestibular inputs."
  },
  {
    "id": "t4-b-032",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In spinal cord injury rehabilitation, an athlete presenting with 'Brown-Séquard Syndrome' (hemisection of the spinal cord) will demonstrate:",
    "options": [
      "Ipsilateral loss of motor function and proprioception/vibration, with contralateral loss of pain and temperature sensation below the lesion level",
      "Bilateral complete flaccid motor paralysis with zero sensory sparing across all dermatomes",
      "Loss of pain and temperature sensation bilaterally with complete preservation of motor power",
      "Isolated loss of bladder control with normal sensation and normal bilateral motor reflexes"
    ],
    "correct": 0,
    "explanation": "Hemisection of the cord damages uncrossed corticospinal tracts and dorsal columns (causing ipsilateral motor and proprioceptive loss) and crossed spinothalamic tracts (causing contralateral pain/temperature loss)."
  },
  {
    "id": "t4-b-033",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In upper motor neuron lesions, what is the 'Clasp-Knife Response' observed during rapid passive stretching of a spastic muscle?",
    "options": [
      "Smooth, continuous lead-pipe resistance throughout the entire passive range",
      "Marked initial resistance to passive stretch followed by an abrupt, sudden release and giving-way of resistance",
      "Rhythmic, oscillatory clonus beats occurring at 100 Hz continuously",
      "Complete flaccidity followed by immediate voluntary muscle contraction"
    ],
    "correct": 1,
    "explanation": "The clasp-knife phenomenon is a hallmark of spasticity where rapid passive stretch encounters high initial resistance (stretch reflex hyper-excitability) followed by sudden melting/giving-way of tone."
  },
  {
    "id": "t4-b-034",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In Cyriax's selective tissue tension testing, a finding of 'Painful and Strong' on resisted isometric testing indicates:",
    "options": [
      "A minor structural lesion of the muscle or tendon (e.g., Grade I strain or tendinopathy)",
      "A major complete full-thickness rupture of the tendon or muscle belly",
      "A complete neurological nerve root avulsion with motor denervation",
      "A totally normal, uninjured musculoskeletal and contractile structure"
    ],
    "correct": 0,
    "explanation": "Cyriax classification: (1) Strong & Pain-free = Normal; (2) Strong & Painful = Minor lesion/tendinitis/grade I strain; (3) Weak & Painful = Major lesion/fracture; (4) Weak & Pain-free = Complete rupture or neurological deficit."
  },
  {
    "id": "t4-b-035",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In Cyriax's selective tissue tension testing, a finding of 'Weak and Pain-Free' on resisted isometric testing classically indicates:",
    "options": [
      "Minor low-grade tendinitis with minimal inflammation",
      "Complete structural rupture of the tendon/muscle or a severe neurological nerve lesion",
      "Acute avulsion fracture with severe periosteal pain",
      "Normal healthy muscular contraction under no resistance"
    ],
    "correct": 1,
    "explanation": "Weak and Pain-Free indicates that the muscle cannot generate force but does not hurt during contraction, characteristic of complete tendon tear (no tension on fibers) or neurological denervation."
  },
  {
    "id": "t4-b-036",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "What is the primary diagnostic indicator of 'Thoracic Outlet Syndrome' (TOS) during the Roos Elevated Arm Stress Test (EAST)?",
    "options": [
      "Patient easily opens and closes hands for 3 full minutes without any symptoms",
      "Inability to maintain arms in 90° abduction/external rotation for 3 minutes due to ischemic pain, paresthesia, weakness, or cyanosis/heaviness in the extremity",
      "Immediate complete loss of bilateral patellar deep tendon reflexes",
      "Sudden severe pain in the contralateral lumbar spine during finger flexing"
    ],
    "correct": 1,
    "explanation": "In Roos EAST, the patient holds arms at 90° abduction/ER and slowly opens/closes hands for 3 minutes; reproduction of ischemic pain, distal paresthesias, or inability to hold arms up indicates neurovascular TOS."
  },
  {
    "id": "t4-b-037",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "During Adson's Test for vascular Thoracic Outlet Syndrome, what clinical change in the radial pulse constitutes a positive test?",
    "options": [
      "Marked increase in radial pulse volume and bounding tachycardia",
      "Diminution or complete obliteration of the radial pulse when the patient rotates the head toward the tested side and extends the neck while inhaling deeply",
      "Radial pulse shifting from the wrist to the dorsal aspect of the foot",
      "Pulse rate doubling from 60 bpm to 180 bpm within 2 seconds"
    ],
    "correct": 1,
    "explanation": "Adson's test compresses the subclavian artery between the anterior and middle scalene muscles; diminution or loss of the radial pulse with deep inspiration and ipsilateral neck rotation/extension indicates scalene entrapment."
  },
  {
    "id": "t4-b-038",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "analytical",
    "text": "In orthopedic manual therapy, what is the 'Treatment Plane' as defined by Kaltenborn?",
    "options": [
      "A plane passing perpendicular to the floor in a standing patient",
      "A plane lying in the concave articular surface, parallel to the joint surface and perpendicular to a line from the center of rotation",
      "A plane passing horizontally through the patient's lumbar spine",
      "A plane oriented at 45 degrees to the long axis of the femur"
    ],
    "correct": 1,
    "explanation": "Kaltenborn defines the treatment plane as lying on the concave articular surface. Traction is applied perpendicular to this plane, while joint gliding is applied parallel to it."
  },
  {
    "id": "t4-b-039",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "When assessing sacroiliac joint dysfunction, which clinical test cluster (Laslett Cluster) provides the highest diagnostic accuracy when at least 2 of 4 tests are positive?",
    "options": [
      "Distraction Test, Compression Test, Thigh Thrust Test, and Sacral Thrust Test",
      "Lachman test, Pivot shift test, Anterior drawer test, and McMurray test",
      "Neer test, Hawkins-Kennedy test, Speed test, and Yergason test",
      "Finkelstein test, Tinel sign, Phalen test, and Froment sign"
    ],
    "correct": 0,
    "explanation": "Laslett's SIJ cluster consists of Distraction, Thigh Thrust, Compression, and Sacral Thrust tests; if 2 or more of these 4 provocation tests are positive, SIJ pain is confirmed with high sensitivity and specificity."
  },
  {
    "id": "t4-b-040",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In the management of Benign Paroxysmal Positional Vertigo (BPPV) affecting the posterior semicircular canal, which particle repositioning maneuver is the gold standard therapy?",
    "options": [
      "Epley Maneuver (Canalith Repositioning Procedure)",
      "Valsalva breathing maneuver held for 60 seconds",
      "Maitland Grade IV cervical high-velocity manipulation",
      "Continuous passive cervical traction in prone"
    ],
    "correct": 0,
    "explanation": "The Epley maneuver systematically rotates the head through 4 positions to move free-floating otoconia (canaliths) out of the posterior semicircular canal back into the utricle, resolving BPPV with high efficacy."
  },
  {
    "id": "t4-c-001",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old elite rugby wing sustains an acute left hamstring injury while lunging forwa...",
    "difficulty": "analytical",
    "text": "On MRI, the injury is identified as a free-tendon proximal avulsion of the Semimembranosus tendon from the ischial tuberosity with 2.5 cm retraction. What is the standard management pathway for this high-grade free tendon avulsion in a professional athlete?",
    "options": [
      "Conservative passive stretching and rest on the team bench for 1 week without any surgical consultation",
      "Urgent orthopedic surgical consultation for anatomical tendon re-anchoring and repair, followed by structured criteria-based rehabilitation",
      "Immediate full-contact rugby match play with an elastic thigh sleeve to protect the avulsed tendon",
      "High-dose continuous ultrasound over the ischial tuberosity without any immobilization or loading restriction"
    ],
    "correct": 1,
    "explanation": "Complete proximal hamstring free-tendon avulsions with retraction (>1–2 cm) or multi-tendon ruptures in athletic populations require prompt surgical re-anchoring to restore high-level strength and prevent permanent functional deficit.",
    "passageId": "cs-31",
    "passage": "A 28-year-old elite rugby wing sustains an acute left hamstring injury while lunging forward to gather a low ball at full speed (hip flexed, knee extended)."
  },
  {
    "id": "t4-c-002",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old elite rugby wing sustains an acute left hamstring injury while lunging forwa...",
    "difficulty": "analytical",
    "text": "Following surgical repair of this proximal hamstring avulsion, what is the initial post-operative protection parameter during the first 6 weeks?",
    "options": [
      "Restricting combined hip flexion and knee extension (using a hinged knee/hip brace) to avoid excessive tensile strain on the surgical repair site",
      "Performing maximal loaded Romanian deadlifts to failure in week 2 to accelerate collagen cross-linking",
      "Encouraging unconstrained aggressive hurdles stretching from day 1 post-surgery to maintain flexibility",
      "Applying hot packs while running on a treadmill at 15 km/h to stimulate rapid peripheral blood flow"
    ],
    "correct": 0,
    "explanation": "Early post-op protocols protect the repair by limiting combined hip flexion and knee extension (avoiding stretch on the healing proximal tendon), allowing gradual protected weight-bearing in a hinged brace.",
    "passageId": "cs-31",
    "passage": "A 28-year-old elite rugby wing sustains an acute left hamstring injury while lunging forward to gather a low ball at full speed (hip flexed, knee extended)."
  },
  {
    "id": "t4-c-003",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old national javelin thrower complains of acute medial elbow pain following a ma...",
    "difficulty": "analytical",
    "text": "Examination reveals focal tenderness over the anterior bundle of the Ulnar Collateral Ligament (UCL), pain and laxity on the Moving Valgus Stress Test between 70° and 120° of elbow flexion, and a positive Milking Maneuver. What is the diagnosis?",
    "options": [
      "Lateral epicondylalgia of the common extensor origin involving the ECRB tendon",
      "Ulnar Collateral Ligament (UCL / Medial Collateral Ligament) Sprain/Tear of the elbow",
      "Biceps brachii distal tendon complete avulsion at radial tuberosity facet",
      "Radial head acute comminuted fracture with radiohumeral joint dislocation"
    ],
    "correct": 1,
    "explanation": "The anterior bundle of the UCL is the primary restraint to valgus stress at the elbow during throwing (late cocking/acceleration); positive Moving Valgus Stress and Milking tests confirm UCL injury.",
    "passageId": "cs-32",
    "passage": "A 23-year-old national javelin thrower complains of acute medial elbow pain following a maximal championship throw."
  },
  {
    "id": "t4-c-004",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old national javelin thrower complains of acute medial elbow pain following a ma...",
    "difficulty": "analytical",
    "text": "In non-operative rehabilitation of a partial UCL sprain in this thrower, which muscle-tendon unit acts as the primary dynamic stabilizer providing muscular support against valgus torque at the medial elbow?",
    "options": [
      "Extensor Carpi Radialis Longus and Brevis on the lateral epicondylar side",
      "Flexor-Pronator mass (specifically Flexor Carpi Ulnaris and Flexor Digitorum Superficialis)",
      "Triceps brachii lateral head at the olecranon process during terminal extension",
      "Supinator and Anconeus muscles along the posterior-lateral elbow capsule"
    ],
    "correct": 1,
    "explanation": "The flexor-pronator muscle mass (especially the FCU and FDS) overlies the anterior bundle of the UCL and contracts dynamically during throwing to absorb medial valgus tension, protecting the ligament.",
    "passageId": "cs-32",
    "passage": "A 23-year-old national javelin thrower complains of acute medial elbow pain following a maximal championship throw."
  },
  {
    "id": "t4-c-005",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 25-year-old competitive runner presents with severe heel pain that is sharpest during th...",
    "difficulty": "analytical",
    "text": "Palpation demonstrates focal tenderness at the medial process of the calcaneal tuberosity. Passive first MTP dorsiflexion reproduces the heel pain (positive Windlass test). What is the primary diagnosis?",
    "options": [
      "Plantar Fasciopathy (Plantar Fasciitis) at the calcaneal insertion",
      "Tarsal Tunnel Syndrome with tibial nerve compression behind medial malleolus",
      "Calcaneal stress fracture of the posterior tuberosity with diffuse swelling",
      "Achilles tendon complete mid-portion rupture with palpable tendon gap"
    ],
    "correct": 0,
    "explanation": "Post-static dyskinesia (first-step morning pain) with localized tenderness at the medial calcaneal tubercle and symptom reproduction on passive great toe dorsiflexion (Windlass test) is classic Plantar Fasciopathy.",
    "passageId": "cs-33",
    "passage": "A 25-year-old competitive runner presents with severe heel pain that is sharpest during the first few steps out of bed in the morning and after prolonged sitting."
  },
  {
    "id": "t4-c-006",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 25-year-old competitive runner presents with severe heel pain that is sharpest during th...",
    "difficulty": "analytical",
    "text": "Which high-load strength training protocol (Rathleff protocol) has shown superior clinical efficacy for chronic plantar fasciopathy?",
    "options": [
      "High-load strength training using unilateral heel raises with a rolled towel under the toes to engage the Windlass mechanism, performed every other day for 12 weeks",
      "Continuous passive bed rest for 6 months without any weight bearing or active foot exercise",
      "Immediate surgical plantar fascia release within 24 hours of symptom onset on the track",
      "Applying ice packs while running barefoot on hard asphalt roads to desensitize the heel"
    ],
    "correct": 0,
    "explanation": "The Rathleff protocol utilizes high-load progressive resistance (heel raises with a towel under the toes to dorsiflex MTP joints, 3s up / 3s down with heavy backpack/weights) every second day to stimulate plantar fascia collagen remodeling.",
    "passageId": "cs-33",
    "passage": "A 25-year-old competitive runner presents with severe heel pain that is sharpest during the first few steps out of bed in the morning and after prolonged sitting."
  },
  {
    "id": "t4-c-007",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 30-year-old elite weightlifter presents with anterior hip and groin pain provoked during...",
    "difficulty": "analytical",
    "text": "Radiographs show a prominent bony bump at the anterolateral femoral head-neck junction ('pistol-grip' deformity) with an alpha angle >55°. The FADIR impingement test is positive. What morphological type of Femoroacetabular Impingement (FAI) is present?",
    "options": [
      "Pincer-type FAI involving excessive acetabular overcoverage across the femoral head",
      "Cam-type FAI involving an aspherical femoral head-neck junction with elevated alpha angle",
      "Subspine impingement from an avulsed anterior inferior iliac spine bone fragment",
      "Ischiofemoral impingement between lesser trochanter and ischial tuberosity"
    ],
    "correct": 1,
    "explanation": "Cam-type FAI is caused by an aspherical femoral head/prominent bone bump at the head-neck junction (alpha angle >55°), which jams into the acetabulum during deep hip flexion and internal rotation.",
    "passageId": "cs-34",
    "passage": "A 30-year-old elite weightlifter presents with anterior hip and groin pain provoked during deep squats."
  },
  {
    "id": "t4-c-008",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 30-year-old elite weightlifter presents with anterior hip and groin pain provoked during...",
    "difficulty": "analytical",
    "text": "What is the core physiotherapeutic management approach for this weightlifter's Cam-type FAI to allow continued pain-free lifting?",
    "options": [
      "Modifying squat depth to avoid painful end-range impingement angles, strengthening hip external rotators/abductors and core stabilizers, and improving posterior capsule mobility",
      "Forcing deep 'ass-to-grass' squats under maximal loads to mechanically break down the bony bump",
      "Immobilizing the athlete in a hip spica cast for 12 consecutive weeks without any physical activity",
      "Performing aggressive passive internal rotation stretching at 90 degrees flexion to loosen the labrum"
    ],
    "correct": 0,
    "explanation": "Conservative FAI management modifies squat kinematics (avoiding impingement depth), strengthens hip stabilizers (gluteals, rotators) to center the femoral head, and addresses lumbo-pelvic control.",
    "passageId": "cs-34",
    "passage": "A 30-year-old elite weightlifter presents with anterior hip and groin pain provoked during deep squats."
  },
  {
    "id": "t4-c-009",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old female gymnast lands short on a balance beam dismount, sustaining a forced h...",
    "difficulty": "analytical",
    "text": "On examination, there is moderate joint effusion, a positive Lachman test with a soft end-feel, and a positive Posterior Sag sign. MRI reveals a combined complete tear of both the ACL and PCL (Knee Dislocation / Multi-ligament Knee Injury - MLKI). What is the immediate vascular priority in acute MLKI management?",
    "options": [
      "Immediate assessment of distal peripheral pulses and Ankle-Brachial Index (ABI) to rule out catastrophic Popliteal Artery disruption",
      "Applying hot packs and starting immediate heavy plyometric jumping drills on the gym floor",
      "Placing the athlete in a dry sauna for 60 minutes to reduce intra-articular knee joint effusion",
      "Performing immediate knee joint manipulation into full hyper-flexion under traction"
    ],
    "correct": 0,
    "explanation": "Multi-ligament knee injuries (dislocations involving ACL + PCL) carry a high risk (up to 20–40%) of limb-threatening popliteal artery injury; measuring distal pulses and ABI (<0.9 requires urgent CT angiography) is the top emergency priority.",
    "passageId": "cs-35",
    "passage": "A 24-year-old female gymnast lands short on a balance beam dismount, sustaining a forced hyperextension trauma to her right knee."
  },
  {
    "id": "t4-c-010",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old female gymnast lands short on a balance beam dismount, sustaining a forced h...",
    "difficulty": "analytical",
    "text": "Following surgical reconstruction of a combined ACL and PCL injury, how does early post-operative hamstring strengthening differ from isolated ACL reconstruction?",
    "options": [
      "Hamstring active contractions are encouraged aggressively in week 1 to stabilize the joint and prevent anterior tibial translation",
      "Active resisted hamstring contractions are restricted or delayed for 6 to 12 weeks to protect the healing PCL graft from posterior tibial shear forces",
      "Quadriceps strengthening is completely banned for the first 2 years post-op to protect the anterior knee structures",
      "The athlete must avoid all weight bearing for 3 consecutive years to allow full ligamentous remodeling"
    ],
    "correct": 1,
    "explanation": "In PCL/multi-ligament rehab, active isolated hamstring contractions produce strong posterior tibial translation that stresses the healing PCL graft, so resisted hamstring loading is restricted for the first 6–12 weeks.",
    "passageId": "cs-35",
    "passage": "A 24-year-old female gymnast lands short on a balance beam dismount, sustaining a forced hyperextension trauma to her right knee."
  },
  {
    "id": "t4-c-011",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 26-year-old elite middle-distance runner reports burning, aching pain over the posterola...",
    "difficulty": "analytical",
    "text": "Examination shows positive Tinel's sign posterior to the lateral malleolus and pain on passive ankle inversion with plantarflexion. What peripheral nerve is entrapped?",
    "options": [
      "Saphenous nerve along the medial joint line and medial tibial border",
      "Sural Nerve in the lateral retromalleolar canal along the lateral foot border",
      "Deep peroneal nerve in the anterior compartment beneath extensor retinaculum",
      "Obturator nerve in the medial groin canal supplying the hip adductors"
    ],
    "correct": 1,
    "explanation": "The sural nerve courses down the posterolateral calf and behind the lateral malleolus to supply the lateral foot; entrapment causes burning/paresthesias provoked by inversion/plantarflexion and a positive retromalleolar Tinel's sign.",
    "passageId": "cs-36",
    "passage": "A 26-year-old elite middle-distance runner reports burning, aching pain over the posterolateral calf and lateral foot that worsens during running."
  },
  {
    "id": "t4-c-012",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 26-year-old elite middle-distance runner reports burning, aching pain over the posterola...",
    "difficulty": "analytical",
    "text": "What physiotherapeutic intervention is specifically targeted to restore normal mobility of this entrapped sural nerve?",
    "options": [
      "Sural nerve neurodynamic slider and tensioner mobilization techniques (Straight Leg Raise with Dorsiflexion/Inversion)",
      "Heavy calf raises with 100 kg barbells on an elevated step to fatigue the gastrocnemius",
      "Strict casting of the foot in extreme plantarflexion for 8 consecutive weeks",
      "Applying ice directly to the nerve trunk for 60 continuous minutes to freeze conduction"
    ],
    "correct": 0,
    "explanation": "Neurodynamic mobilization (SLR + Ankle Dorsiflexion/Inversion - SID technique) restores longitudinal sliding and disperses intraneural edema in the sural nerve distribution.",
    "passageId": "cs-36",
    "passage": "A 26-year-old elite middle-distance runner reports burning, aching pain over the posterolateral calf and lateral foot that worsens during running."
  },
  {
    "id": "t4-c-013",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 19-year-old male competitive swimmer presents with bilateral anterior shoulder pain duri...",
    "difficulty": "analytical",
    "text": "Examination shows normal glenohumeral capsular range, positive Hawkins-Kennedy test, but marked anterior translation with a prominent Sulcus Sign (>2 cm) at 0° and 90° abduction, along with a Beighton hypermobility score of 7/9. What is the underlying diagnosis?",
    "options": [
      "Unidirectional traumatic Bankart lesion resulting from an acute collision tackle",
      "Multidirectional Glenohumeral Instability (MDI) with secondary subacromial impingement in a generalized joint hypermobile athlete",
      "Frozen shoulder (Adhesive Capsulitis) with global multi-planar capsular fibrosis",
      "Acromioclavicular joint osteoarthritis with severe inferior osteophyte formation"
    ],
    "correct": 1,
    "explanation": "Generalized hypermobility (Beighton 7/9) with symptomatic multi-planar laxity (positive sulcus sign, anterior/posterior glide) leading to secondary impingement in a swimmer is classic Multidirectional Instability (MDI).",
    "passageId": "cs-37",
    "passage": "A 19-year-old male competitive swimmer presents with bilateral anterior shoulder pain during freestyle stroke catch and pull-through."
  },
  {
    "id": "t4-c-014",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 19-year-old male competitive swimmer presents with bilateral anterior shoulder pain duri...",
    "difficulty": "analytical",
    "text": "What is the primary evidence-based conservative rehabilitation strategy (e.g., Watson MDI program) for this hypermobile swimmer with MDI?",
    "options": [
      "Aggressive passive capsular stretching into extreme end-range rotation to lengthen the capsule",
      "Motor control retraining and progressive dynamic strengthening of the rotator cuff and scapular stabilizers in closed and open kinetic chains to enhance dynamic joint stability",
      "Immediate surgical open inferior capsular shift without attempting structured exercise therapy",
      "Complete immobilization of the shoulder in an abduction sling for 4 continuous months"
    ],
    "correct": 1,
    "explanation": "The Watson MDI rehabilitation protocol focuses on progressive neuromotor control, periscapular stabilization, and rotator cuff co-contraction to dynamically compensate for congenital capsuloligamentous laxity.",
    "passageId": "cs-37",
    "passage": "A 19-year-old male competitive swimmer presents with bilateral anterior shoulder pain during freestyle stroke catch and pull-through."
  },
  {
    "id": "t4-c-015",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 29-year-old marathon runner presents with chronic mid-portion Achilles tendinopathy of 6...",
    "difficulty": "analytical",
    "text": "Diagnostic ultrasound shows marked tendon thickening (9 mm) and prominent neovascularization on power Doppler. In addition to progressive Heavy Slow Resistance (HSR) loading, which biophysical modality has strong randomized controlled trial evidence for improving pain and functional scores in chronic recalcitrant tendinopathy?",
    "options": [
      "Radial or Focused Extracorporeal Shockwave Therapy (ESWT)",
      "Continuous therapeutic ultrasound at 0.5 W/cm2 for 5 minutes",
      "Infrared heat lamp application for 15 minutes twice daily",
      "Static magnetic therapy bracelets worn continuously during sleep"
    ],
    "correct": 0,
    "explanation": "Extracorporeal Shockwave Therapy (ESWT) stimulates mechanotransduction, promotes pro-angiogenic tissue healing, disrupts abnormal pain nerve ingrowth, and has strong RCT evidence for recalcitrant mid-portion Achilles tendinopathy.",
    "passageId": "cs-38",
    "passage": "A 29-year-old marathon runner presents with chronic mid-portion Achilles tendinopathy of 6 months duration that has plateaued with basic calf raises."
  },
  {
    "id": "t4-c-016",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 29-year-old marathon runner presents with chronic mid-portion Achilles tendinopathy of 6...",
    "difficulty": "analytical",
    "text": "When delivering Extracorporeal Shockwave Therapy (ESWT) for chronic tendinopathy, what is the standard treatment protocol regarding session interval and local anesthesia?",
    "options": [
      "Daily treatments for 30 consecutive days under heavy regional nerve block anesthesia",
      "3 to 5 sessions spaced 1 week apart, performed without local anesthetic injections (which have been shown to reduce ESWT clinical efficacy)",
      "One single session lasting 4 continuous hours under general hospital anesthesia",
      "ESWT must only be applied while the foot is immersed inside an ice water bath"
    ],
    "correct": 1,
    "explanation": "Standard ESWT protocols deliver 2000–3000 pulses at 1.5–3.0 bar weekly for 3–5 sessions. Local anesthetics are avoided because they interfere with cellular mechanotransduction and blunt treatment efficacy.",
    "passageId": "cs-38",
    "passage": "A 29-year-old marathon runner presents with chronic mid-portion Achilles tendinopathy of 6 months duration that has plateaued with basic calf raises."
  },
  {
    "id": "t4-c-017",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old elite male hockey player is struck directly on the lateral aspect of the fib...",
    "difficulty": "analytical",
    "text": "Immediately following the impact, he exhibits complete foot drop (inability to actively dorsiflex or evert the ankle) and sensory loss over the anterolateral lower leg and dorsum of the foot. Which peripheral nerve was acutely contused?",
    "options": [
      "Tibial nerve in the popliteal fossa supplying the deep posterior flexors",
      "Common Peroneal (Fibular) Nerve winding around the fibular neck",
      "Femoral nerve in the femoral triangle supplying the anterior thigh",
      "Saphenous nerve along the medial tibia supplying the medial foot"
    ],
    "correct": 1,
    "explanation": "The common peroneal nerve wraps superficially around the neck of the fibula; blunt contusion or fracture causes paralysis of dorsiflexors/evertors (foot drop) and sensory loss on the anterolateral leg and foot dorsum.",
    "passageId": "cs-39",
    "passage": "A 20-year-old elite male hockey player is struck directly on the lateral aspect of the fibular neck by a hard field hockey ball."
  },
  {
    "id": "t4-c-018",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old elite male hockey player is struck directly on the lateral aspect of the fib...",
    "difficulty": "analytical",
    "text": "What immediate physiotherapeutic orthotic and electrotherapy intervention is indicated to preserve gait function and prevent equinus contracture while awaiting neural axonotmesis regeneration?",
    "options": [
      "Ankle-Foot Orthosis (AFO) to prevent foot drop, passive dorsiflexion stretching, and Electrical Muscle Stimulation (interrupted galvanic current / low-frequency NMES) to preserve denervated anterior compartment muscles",
      "Rigid circular plaster cast in 50 degrees of plantarflexion for 6 months to rest the ankle",
      "Forced barefoot running on uneven grass to stimulate spontaneous peripheral nerve firing",
      "Immediate amputation of the foot within 24 hours of nerve injury to prevent gangrene"
    ],
    "correct": 0,
    "explanation": "Managing acute peroneal nerve neuropraxia/axonotmesis involves an AFO to clear the foot during gait and prevent Achilles contracture, combined with electrical stimulation to maintain muscle trophism while axons regenerate (~1 mm/day).",
    "passageId": "cs-39",
    "passage": "A 20-year-old elite male hockey player is struck directly on the lateral aspect of the fibular neck by a hard field hockey ball."
  },
  {
    "id": "t4-c-019",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old female high jumper reports a 3-month history of localized aching over the a...",
    "difficulty": "analytical",
    "text": "Physical examination reveals pain on passive hip internal rotation and a positive Fulcrum Test of the femoral shaft. MRI confirms a non-displaced stress fracture on the compression (inferomedial) side of the femoral neck. How are compression-side femoral neck stress fractures typically managed compared to tension-side fractures?",
    "options": [
      "Compression-side fractures have a lower risk of displacement and are managed with strict non-weight-bearing bed rest/crutches until bony union, whereas tension-side (superior) fractures are high-risk and require urgent surgical internal screw fixation",
      "Compression-side fractures always require emergency total hip joint replacement within 12 hours of diagnosis",
      "Compression-side fractures require immediate heavy squatting and continuous high jumping to stimulate bone remodeling",
      "Tension-side fractures heal naturally in 3 days with zero rest, whereas compression-side fractures are fatal"
    ],
    "correct": 0,
    "explanation": "Compression-side (inferomedial) femoral neck stress fractures are inherently more stable and managed conservatively with non-weight-bearing crutches, while tension-side (superolateral) fractures have high non-union/displacement risk requiring immediate surgical screw fixation.",
    "passageId": "cs-40",
    "passage": "An 18-year-old female high jumper reports a 3-month history of localized aching over the anteromedial groin and proximal thigh that is exacerbated by single-leg takeoff and landing."
  },
  {
    "id": "t4-c-020",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 18-year-old female high jumper reports a 3-month history of localized aching over the a...",
    "difficulty": "analytical",
    "text": "As part of the comprehensive sports science management for this female athlete with a bone stress injury, which systemic health assessment must be conducted to identify underlying predisposing risks?",
    "options": [
      "Full Relative Energy Deficiency in Sport (RED-S) screening (assessing dietary energy availability, menstrual history/eumenorrhea, bone mineral density via DEXA, and serum ferritin/vitamin D levels)",
      "Screening exclusively for hereditary ear and eye genetic mutations across three family generations",
      "Testing for acute bacterial pneumonia using sputum cultures and chest radiographs",
      "Measuring lung tidal volume using underwater closed-circuit spirometry equipment"
    ],
    "correct": 0,
    "explanation": "Bone stress injuries in female athletes warrant a comprehensive RED-S assessment (evaluating caloric intake vs expenditure, menstrual regularity, endocrine markers, vitamin D/calcium, and DEXA bone density) to address the underlying physiological etiology.",
    "passageId": "cs-40",
    "passage": "An 18-year-old female high jumper reports a 3-month history of localized aching over the anteromedial groin and proximal thigh that is exacerbated by single-leg takeoff and landing."
  },
  {
    "id": "t5-a1-001",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "foundational",
    "text": "In the Fitness-Fatigue Model (Two-Factor Theory of Periodization - Banister), why does athletic performance peak several days after a high-load training stimulus rather than immediately after?",
    "options": [
      "Fatigue has a higher initial magnitude but dissipates at a much faster rate than fitness, resulting in positive net preparedness as fatigue subsides",
      "Fitness adaptations decay immediately within 2 hours while fatigue remains permanently elevated for several consecutive training weeks",
      "The athlete must completely deplete all liver glycogen stores before any neuromuscular potentiation or supercompensation can take place",
      "Muscle protein synthesis pathways do not initiate until fourteen full days following the complete cessation of heavy resistance training"
    ],
    "correct": 0,
    "explanation": "Banister's two-factor model demonstrates that training creates both fitness and fatigue. Because fatigue decays roughly 3 times faster than fitness, net preparedness peaks during the window when fatigue has dissipated while fitness adaptations remain high."
  },
  {
    "id": "t5-a1-002",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "applied",
    "text": "When planning an athletic competition taper, what is the most evidence-based strategy for manipulating training volume, intensity, and frequency (Mujika & Padilla)?",
    "options": [
      "Reduce training volume by 40–60% over 1–3 weeks while strictly maintaining high training intensity and moderate-to-high frequency",
      "Reduce training intensity to zero while tripling total training volume across all daily training sessions",
      "Completely cease all physical training, bed rest, and sports nutrition for 4 consecutive weeks",
      "Increase training volume by 200% while cutting training frequency down to once every two weeks"
    ],
    "correct": 0,
    "explanation": "Mujika and Padilla established that the optimal taper reduces training volume by 41–60% exponentially over 8–14 days while maintaining high training intensity (>85%) and high session frequency (~80%) to preserve neuromuscular adaptations."
  },
  {
    "id": "t5-a1-003",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "analytical",
    "text": "In the RAMP framework (Ian Jeffreys) for designing comprehensive athletic warm-ups, what do the four letters in the acronym represent?",
    "options": [
      "Raise (body temp/HR), Activate (key muscle groups), Mobilize (movement range), and Potentiate (sport-specific high-intensity performance)",
      "Run (aerobic base), Agility (cone drills), Massage (foam rolling), and Power (explosive jumping drills across platforms)",
      "Rest (sleep hygiene), Absorb (electrolyte fluids), Measure (force plates), and Plan (periodization training schedules)",
      "Relax (autogenic suggestions), Align (spinal posture), Modify (workload), and Progress (overload schemes systematically)"
    ],
    "correct": 0,
    "explanation": "The RAMP framework structures warm-ups into: Raise (body temperature, heart rate, respiration), Activate (key musculature), Mobilize (functional ranges of motion), and Potentiate (high-intensity sport-specific neural priming)."
  },
  {
    "id": "t5-a1-004",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "foundational",
    "text": "Why is 'Accommodating Resistance' (using variable resistance bands or chains on a barbell) biomechanically beneficial in training explosive strength?",
    "options": [
      "It eliminates all mechanical tension during the concentric phase of the lift to protect joints",
      "It increases resistance as mechanical leverage improves toward the top of the lift, matching the muscle's strength curve and minimizing the deceleration phase",
      "It forces the lifter to perform pure eccentric contractions without any concentric movement phase",
      "It permanently converts fast-twitch muscle fibers into smooth involuntary muscle fibers across limbs"
    ],
    "correct": 1,
    "explanation": "Chains/bands increase load at the top of the lift (where leverage is mechanically advantageous), forcing the athlete to accelerate through the entire range of motion and minimizing the natural terminal deceleration phase."
  },
  {
    "id": "t5-a1-005",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "applied",
    "text": "In neuromuscular physiology, 'Specific Tension' (force per unit of muscle cross-sectional area - N/cm2) is generally observed to be:",
    "options": [
      "Ten times higher in slow-twitch Type I fibers compared to fast-twitch fibers due to mitochondrial density",
      "Relatively similar across single Type I and Type II human muscle fibers when normalized to cross-sectional area, with Type II fibers producing greater peak power due to faster cross-bridge cycling",
      "Substantially higher in female athletes compared to male athletes due to higher circulating estrogen levels",
      "Completely equal to zero in all untrained adolescent athletes prior to reaching peak height velocity"
    ],
    "correct": 1,
    "explanation": "Normalized specific tension (force / CSA) is fairly similar between Type I and Type II fibers; the massive difference in maximal dynamic power output arises from Type II fibers' 3–4x higher maximum shortening velocity (Vmax)."
  },
  {
    "id": "t5-a1-006",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "analytical",
    "text": "What is the physiological definition of Maximal Lactate Steady State (MLSS)?",
    "options": [
      "The point at which blood lactate drops to absolute zero during high-intensity sprint intervals on the track",
      "The highest exercise workload that can be maintained over time without a continuous increase in blood lactate (increase <1.0 mmol/L over the final 20 min of a 30-min constant load bout)",
      "The maximum blood lactate concentration achieved during an all-out 30-second Wingate sprint cycling test",
      "The baseline resting blood lactate concentration measured after eight continuous hours of overnight sleep"
    ],
    "correct": 1,
    "explanation": "MLSS represents the highest exercise intensity at which blood lactate production and clearance are in equilibrium; standardly verified during constant-load trials where blood lactate does not rise by >1.0 mmol/L between min 10 and 30."
  },
  {
    "id": "t5-a1-007",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "foundational",
    "text": "How does chronic endurance training alter the systemic Oxygen-Hemoglobin Dissociation Curve during heavy exercise (Bohr Effect)?",
    "options": [
      "Shifts the curve to the left, preventing oxygen unloading at peripheral working tissues during high work rates",
      "Shifts the curve to the right in working muscles (due to elevated H+, PCO2, temperature, and 2,3-DPG), facilitating greater oxygen unloading into active myocytes",
      "Eliminates all chemical binding between oxygen molecules and hemoglobin heme iron groups in circulating erythrocytes",
      "Converts circulating hemoglobin into non-functional methemoglobin inside the pulmonary capillary vascular network"
    ],
    "correct": 1,
    "explanation": "The Bohr effect shifts the Hb-O2 dissociation curve to the right in exercising muscles (induced by lower pH, higher PCO2, elevated temperature, and 2,3-DPG), decreasing hemoglobin's affinity for O2 and promoting offloading to tissues."
  },
  {
    "id": "t5-a1-008",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "applied",
    "text": "In the cardiovascular adaptations of elite endurance athletes ('Athlete's Heart'), what structural remodeling of the left ventricle is classically observed on echocardiography?",
    "options": [
      "Eccentric left ventricular hypertrophy characterized by proportional increases in left ventricular internal chamber diameter and wall thickness",
      "Concentric left ventricular hypertrophy with severe pathological chamber obliteration and reduced diastolic filling",
      "Severe thinning of the ventricular walls accompanied by acute heart failure and depressed ejection fraction",
      "Permanent structural calcification of the aortic and mitral cardiac valves resulting in severe regurgitation"
    ],
    "correct": 0,
    "explanation": "Endurance training imposes a chronic volume overload, inducing physiological eccentric LV hypertrophy (increased LV end-diastolic internal diameter and proportional wall thickening), maximizing stroke volume."
  },
  {
    "id": "t5-a1-009",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "analytical",
    "text": "What is the primary chemical buffer system in the extracellular fluid and blood plasma responsible for neutralizing hydrogen ions (H+) during heavy metabolic acidosis?",
    "options": [
      "Intracellular myoglobin and hemoglobin histidine residues inside active contracting sarcomeres",
      "Carbonic acid-bicarbonate buffer system (H+ + HCO3- <-> H2CO3 <-> H2O + CO2) with respiratory pulmonary compensation",
      "Intramuscular phosphocreatine kinase enzymatic shuttle operating within the mitochondrial intermembrane space",
      "Renal tubular ammonium secretion system operating during resting basal metabolic states"
    ],
    "correct": 1,
    "explanation": "The carbonic acid-bicarbonate system (H+ + HCO3- <-> H2CO3 <-> H2O + CO2) is the predominant extracellular chemical buffer in blood, with excess CO2 eliminated via pulmonary ventilation."
  },
  {
    "id": "t5-a1-010",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "foundational",
    "text": "During acute exercise in cold environments, what physiological mechanism serves as the primary involuntary metabolic defense against core hypothermia?",
    "options": [
      "Sudden complete vasodilation of cutaneous superficial capillary beds to flush the skin surface with warm arterial blood",
      "Involuntary rhythmic muscular contractions (shivering thermogenesis) increasing resting metabolic heat production up to 4- to 5-fold",
      "Profound suppression of thyroid hormone, cortisol, and adrenal epinephrine secretion to slow whole-body metabolism",
      "Massive respiratory sweating to eliminate cold moisture from the epidermal skin surface"
    ],
    "correct": 1,
    "explanation": "When cutaneous vasoconstriction is insufficient to prevent heat loss, the preoptic anterior hypothalamus triggers shivering thermogenesis—involuntary asynchronous motor unit contractions that can elevate metabolic rate 4–5x."
  },
  {
    "id": "t5-a1-011",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "applied",
    "text": "In the regulation of skeletal muscle blood flow during exercise, 'Functional Sympatholysis' refers to:",
    "options": [
      "Systemic sympathetic nerve failure resulting in severe circulatory collapse during high-intensity competitive match play",
      "Local vasoactive metabolites (adenosine, nitric oxide, K+, H+, ATP) overriding and blunting sympathetic alpha-adrenergic vasoconstriction in contracting muscle beds",
      "Complete paralysis of all peripheral motor neurons during maximal sprinting due to acute central nervous system exhaustion",
      "Inhibition of the parasympathetic vagus nerve during resting sleep to elevate baseline cardiac heart rate"
    ],
    "correct": 1,
    "explanation": "Functional sympatholysis is the physiological process whereby locally produced metabolic vasodilators in exercising muscle override sympathetic vasoconstrictor signals, ensuring blood flow matches local metabolic demand."
  },
  {
    "id": "t5-a1-012",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "analytical",
    "text": "In sports nutrition, what is the optimal timing and distribution of dietary protein intake across the day to maximize 24-hour Muscle Protein Synthesis (MPS)?",
    "options": [
      "Consuming 100% of the daily protein target in a single massive bolus at bedtime to maximize overnight recovery",
      "Consuming 0.3 to 0.4 g/kg of high-quality protein (approx 20–40g) every 3 to 4 hours across 4 to 6 discrete meals throughout the day",
      "Consuming 5 grams of protein every 15 minutes during the entire 24-hour cycle to maintain continuous blood amino acids",
      "Avoiding all protein intake on resistance training days to prevent acute renal overload and metabolic strain"
    ],
    "correct": 1,
    "explanation": "Consuming repeated moderate doses (0.3–0.4 g/kg or ~20–40 g) of high-quality, leucine-rich protein spaced evenly every 3–4 hours produces superior 24-hour MPS compared to pulse or skewed feeding patterns."
  },
  {
    "id": "t5-a1-013",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "foundational",
    "text": "For endurance athletes participating in prolonged endurance events (>2 hours), what is the optimal carbohydrate concentration in a sports beverage to balance gastric emptying and intestinal absorption?",
    "options": [
      "1% to 2% carbohydrate solution for rapid hypotonic hydration without caloric benefit",
      "6% to 8% carbohydrate solution (60 to 80 grams per liter) for balanced absorption and fueling",
      "15% to 20% carbohydrate solution with high insoluble dietary fiber content",
      "Carbohydrates should not be consumed in liquid form during competitive running events"
    ],
    "correct": 1,
    "explanation": "A 6–8% carbohydrate solution (~60–80 g/L) provides an optimal balance between gastric emptying rates, fluid absorption, and exogenous energy delivery without causing gastrointestinal discomfort."
  },
  {
    "id": "t5-a1-014",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "applied",
    "text": "What is the primary role of Vitamin D in bone health and neuromuscular performance in elite athletes?",
    "options": [
      "Vitamin D enhances intestinal calcium and phosphate absorption, supports bone mineral density remodeling, and modulates skeletal muscle protein synthesis and type II fiber cross-sectional area via nuclear VDRs",
      "Vitamin D converts directly into adrenaline in the adrenal medulla to enhance sprinting velocity during competitive tournaments",
      "Vitamin D destroys osteoblasts to reduce skeletal bone mass in lightweight sports categories prior to official weigh-ins",
      "Vitamin D eliminates all lactic acid production in working muscle fibers by inhibiting anaerobic glycolysis enzymes"
    ],
    "correct": 0,
    "explanation": "Vitamin D regulates calcium-phosphate homeostasis and bone turnover; Vitamin D Receptors (VDR) on skeletal muscle also mediate genomic effects that influence muscle strength, contractility, and type II fiber morphology."
  },
  {
    "id": "t5-a1-015",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "analytical",
    "text": "In the diagnosis of 'Exercise-Associated Hyponatremia' (EAH) in marathon runners, what is the defined serum sodium diagnostic threshold?",
    "options": [
      "Serum sodium < 135 mmol/L (often resulting from overconsumption of hypotonic fluids beyond sweat losses)",
      "Serum sodium > 155 mmol/L resulting from severe unreplaced dehydration and water loss",
      "Serum potassium < 2.0 mmol/L during maximal sprint cycling on an ergometer",
      "Blood glucose < 40 mg/dL during prolonged fasting states and exhaustive exercise"
    ],
    "correct": 0,
    "explanation": "EAH is defined as a serum sodium concentration < 135 mmol/L during or up to 24 hours after physical activity, primarily caused by excessive fluid intake (water/sports drinks) exceeding renal excretory capacity."
  },
  {
    "id": "t5-a1-016",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "foundational",
    "text": "Why is adequate dietary carbohydrate intake essential for maintaining immune function in elite athletes during heavy training blocks?",
    "options": [
      "Carbohydrate ingestion during exercise blunts the excessive rise in stress hormones (cortisol, epinephrine) and prevents post-exercise leukocytosis and immunosuppression",
      "Carbohydrates directly neutralize all circulating viral particles inside the bloodstream upon initial mucosal contact",
      "Carbohydrates eliminate the necessity for sleep and rest in elite sports squads during international tournament travel",
      "Carbohydrates convert into synthetic antibiotics inside mucosal lymph nodes to eradicate bacterial pathogens"
    ],
    "correct": 0,
    "explanation": "Carbohydrate intake during prolonged strenuous exercise maintains blood glucose, attenuates circulating cortisol and adrenaline spikes, and prevents exercise-induced suppression of neutrophils, NK cells, and salivary IgA."
  },
  {
    "id": "t5-a1-017",
    "section": "A1",
    "topic": "strength and conditioning exercise prescription and training theory",
    "subtopic": "Resistance training periodization and progressive overload",
    "difficulty": "applied",
    "text": "In the Phantom Stratagem (Ross & Wilson) in kinanthropometry, what is the standardized unisex reference height used to geometrically scale human body dimensions?",
    "options": [
      "150.00 cm in standing stature",
      "170.18 cm in standing stature",
      "182.50 cm in standing stature",
      "200.00 cm in standing stature"
    ],
    "correct": 1,
    "explanation": "The Ross & Wilson Phantom model is a unisex, geometrically scaled reference human with a standard stature of 170.18 cm (5 feet 7 inches) and mass of 64.58 kg, used to calculate z-scores for proportional comparisons."
  },
  {
    "id": "t5-a1-018",
    "section": "A1",
    "topic": "exercise physiology bioenergetics and oxygen transport",
    "subtopic": "Cardiovascular, respiratory and energy system adaptations",
    "difficulty": "analytical",
    "text": "In somatotype categorization, an athlete with a somatotype profile of '2–6–2' is classified as:",
    "options": [
      "Balanced Endomorph in body structure with dominant relative adiposity",
      "Balanced Mesomorph (predominantly muscular with moderate and equal adiposity and linearity)",
      "Ectomorphic Endomorph in body structure with high linearity and fat",
      "Extreme Linear Ectomorph in body structure with minimal muscle mass"
    ],
    "correct": 1,
    "explanation": "In Heath-Carter somatotyping (Endomorphy-Mesomorphy-Ectomorphy), when Mesomorphy is dominant (6) and Endomorphy (2) and Ectomorphy (2) are equal and lower, the classification is Balanced Mesomorph."
  },
  {
    "id": "t5-a1-019",
    "section": "A1",
    "topic": "biomechanics kinematic force plate and kinetic analysis",
    "subtopic": "Movement mechanics, ground reaction forces and impulse",
    "difficulty": "foundational",
    "text": "In anthropometric assessment, what anatomical landmark defines the 'Tibiale Mediale' site?",
    "options": [
      "The most proximal point on the medial border of the head of the fibula near joint capsule",
      "The most superior point on the medial border of the tibial plateau along the joint line",
      "The distal apex of the medial malleolus at the talocrural ankle joint line",
      "The central point of the tibial tuberosity on the anterior proximal shank"
    ],
    "correct": 1,
    "explanation": "ISAK defines the Tibiale Mediale landmark as the most superior point on the proximal medial border of the head of the tibia, located along the transverse knee joint line."
  },
  {
    "id": "t5-a1-020",
    "section": "A1",
    "topic": "sports nutrition hydration and energy availability",
    "subtopic": "Macronutrient timing, ergogenic aids and RED-S",
    "difficulty": "applied",
    "text": "In Bioelectrical Impedance Analysis (BIA), why does dehydration lead to an OVERESTIMATION of an athlete's body fat percentage?",
    "options": [
      "Body water and electrolytes conduct electrical current; dehydration increases tissue impedance (resistance), which the algorithm interprets as lower lean mass and higher fat mass",
      "Water acts as a pure electrical insulator that completely prevents electrical current from flowing through biological tissues",
      "Acute dehydration converts stored subcutaneous body fat into active muscle protein within minutes of fluid restriction",
      "BIA devices measure scale body mass exclusively without applying any micro-amperage electrical alternating current"
    ],
    "correct": 0,
    "explanation": "Lean tissue has high water/electrolyte content and low electrical impedance. Dehydration reduces total body water, increasing measured resistance, causing the equation to underestimate fat-free mass and overestimate body fat percentage."
  },
  {
    "id": "t5-a1-021",
    "section": "A1",
    "topic": "kinanthropometry body composition and skinfold somatotyping",
    "subtopic": "Anthropometric proportionality and biological maturation",
    "difficulty": "analytical",
    "text": "In maturity offset prediction (Mirwald et al.), which ratio provides a strong kinematic indicator of the timing of the adolescent growth spurt?",
    "options": [
      "Sitting Height relative to Leg Length (Subischial Length) across growing years",
      "Total Arm Span relative to Cranial Skull Circumference during adolescence",
      "Biacromial Shoulder Breadth relative to Foot Length across pubertal stages",
      "Chest Circumference relative to Waist Girth during youth sports academies"
    ],
    "correct": 0,
    "explanation": "During puberty, leg growth accelerates before trunk growth. The ratio of sitting height to subischial leg length changes predictably, allowing non-invasive calculation of years from Peak Height Velocity (Maturity Offset)."
  },
  {
    "id": "t5-a1-022",
    "section": "A1",
    "topic": "sports psychology motivation self-efficacy and anxiety",
    "subtopic": "Arousal regulation, attentional focus and team cohesion",
    "difficulty": "foundational",
    "text": "According to the Dual-Process Theory of decision-making in sports, 'System 1' processing is characterized by:",
    "options": [
      "Slow, deliberate, highly analytical, and conscious cognitive calculation of tactical options on the field",
      "Fast, intuitive, automated, heuristic, and largely unconscious pattern recognition under high time pressure",
      "Complete cognitive paralysis of motor actions due to extreme competition panic and overwhelming anxiety",
      "Pure reliance on verbal tactical instructions communicated from the coach during official timeouts"
    ],
    "correct": 1,
    "explanation": "System 1 processing (Kahneman) is fast, intuitive, and automated, relying on expert situational pattern recognition under time constraints, whereas System 2 is slow, analytical, and cognitively effortful."
  },
  {
    "id": "t5-a1-023",
    "section": "A1",
    "topic": "recovery regeneration sleep and athlete monitoring",
    "subtopic": "HRV monitoring, fatigue tracking and recovery modalities",
    "difficulty": "applied",
    "text": "In athletic injury psychology, what is the 'Cognitive Appraisal Model' of injury response (Wiese-Bjornstal et al.)?",
    "options": [
      "An athlete's emotional and behavioral response to injury is determined by how they cognitively appraise the injury (perceived threat vs resource challenge) in light of personal and situational factors",
      "All injured athletes experience five invariant, rigid emotional stages of grief in exact sequential order across all sports",
      "Post-injury emotional response is purely determined by the annual financial salary and commercial sponsorship of the injured athlete",
      "Cognitive appraisal and psychological factors play zero role in post-injury rehabilitation adherence or functional recovery rates"
    ],
    "correct": 0,
    "explanation": "The Integrated Model of Psychological Response to Injury demonstrates that an athlete's dynamic emotional and behavioral responses are driven by their cognitive appraisal (meaning and impact) of the injury, moderated by personal/situational variables."
  },
  {
    "id": "t5-a1-024",
    "section": "A1",
    "topic": "clinical research biostatistics and data interpretation",
    "subtopic": "Research methodology, reliability and diagnostic statistics",
    "difficulty": "analytical",
    "text": "In achievement goal theory, an athlete with a strong 'Mastery / Task Orientation' defines success primarily through:",
    "options": [
      "Defeating opposing players and achieving higher public rankings with minimal personal effort",
      "Personal improvement, skill mastery, high self-referenced effort, and task learning",
      "Receiving public praise, monetary bonuses, and high-profile commercial endorsements",
      "Avoiding all challenging practice drills to protect personal ego status from failure"
    ],
    "correct": 1,
    "explanation": "Task/Mastery orientation focuses on self-referenced standards of improvement, skill mastery, and effort, fostering intrinsic motivation, resilience to failure, and long-term athletic development."
  },
  {
    "id": "t5-a1-025",
    "section": "A1",
    "topic": "physiotherapy rehabilitation science and clinical reasoning",
    "subtopic": "Interdisciplinary performance analysis and injury risk screening",
    "difficulty": "foundational",
    "text": "What is 'Transformational Leadership' in elite sports coaching and performance teams?",
    "options": [
      "Relying strictly on punitive threats, financial fines, and public humiliation of athletes during practice",
      "Inspiring, motivating, and intellectually stimulating athletes through individualized consideration, idealized influence, and a shared visionary culture",
      "Maintaining complete emotional indifference and never communicating directly with team players",
      "Focusing solely on transactional monetary compensation and bonuses for each competitive match victory"
    ],
    "correct": 1,
    "explanation": "Transformational leadership involves 4 dimensions (Idealized Influence, Inspirational Motivation, Intellectual Stimulation, Individualized Consideration) to elevate athletes' intrinsic motivation and performance beyond expectations."
  },
  {
    "id": "t5-a1-026",
    "section": "A1",
    "topic": "yoga and mind-body interventions for athletic recovery",
    "subtopic": "Mind-body breathing techniques and parasympathetic activation",
    "difficulty": "applied",
    "text": "In self-talk interventions, why is 'Instructional Self-Talk' (e.g., 'keep high elbow', 'see the ball') preferred over 'Motivational Self-Talk' during fine motor skill learning?",
    "options": [
      "It increases muscular shaking and elevates cardiovascular heart rate to maximal physiological limits",
      "It directs attentional focus to precise task-relevant biomechanical execution cues and technical movement components",
      "It eliminates the necessity for physical practice sessions in professional sports training academies",
      "It induces immediate sleepiness and relaxes the autonomic nervous system into deep lethargy"
    ],
    "correct": 1,
    "explanation": "Instructional self-talk directs attention to specific technical cues and movement mechanics, making it superior for precision tasks, motor learning, and tactical execution compared to general motivational self-talk."
  },
  {
    "id": "t5-a1-027",
    "section": "A1",
    "topic": "athlete health wellness and female athlete health",
    "subtopic": "Relative energy deficiency, hormonal cycles and wellness tracking",
    "difficulty": "analytical",
    "text": "In sports wearable technology, 'Photoplethysmography' (PPG) optical sensors measure heart rate and pulse wave metrics by:",
    "options": [
      "Directly detecting microvolt electrical action potentials generated by the myocardial sinoatrial node",
      "Emitting light (typically green LED) into underlying vascular tissue and detecting volumetric variations in blood perfusion via reflected light intensity",
      "Measuring acoustic sound waves produced by cardiac atrioventricular valve closures via an internal microphone",
      "Measuring skin surface sweat electrolyte concentrations and thermal skin temperature continuously"
    ],
    "correct": 1,
    "explanation": "PPG sensors illuminate tissue with LED light and measure changes in light absorption caused by blood volume pulses in microvascular tissue beds with each cardiac cycle."
  },
  {
    "id": "t5-a1-028",
    "section": "A1",
    "topic": "travel and competition readiness and circadian rhythm",
    "subtopic": "Jet lag mitigation, environmental acclimatization and competition protocols",
    "difficulty": "foundational",
    "text": "In force-plate testing, what is the 'Dynamic Strength Index' (DSI)?",
    "options": [
      "Ratio of Countermovement Jump (CMJ) peak force to Isometric Mid-Thigh Pull (IMTP) peak force",
      "Ratio of athlete's total body weight to their standing vertical stature in meters",
      "Ratio of sprint velocity at 10m to maximum sprint velocity achieved at 40m",
      "Ratio of systolic blood pressure to diastolic blood pressure during exercise"
    ],
    "correct": 0,
    "explanation": "DSI = CMJ Peak Ballistic Force / IMTP Peak Isometric Force. A DSI < 0.60–0.75 indicates a ballistic/dynamic deficit (needs plyometrics/power), while DSI > 0.85 indicates maximal strength is the limiting factor (needs heavy strength)."
  },
  {
    "id": "t5-a1-029",
    "section": "A1",
    "topic": "anti-doping science and prohibited substance monitoring",
    "subtopic": "WADA Code principles, TUE protocols and testing standards",
    "difficulty": "applied",
    "text": "In athlete monitoring, why is the session-RPE (sRPE) method (Foster et al.) widely validated as a reliable measure of internal training load?",
    "options": [
      "Multiplying the session RPE score (Borg CR-10 scale) by total session duration in minutes integrates both physiological and psychological training stress into a valid, practical metric (Load = RPE x Duration)",
      "It requires expensive surgical muscle biopsies and blood lactate draws after every daily training workout",
      "It completely eliminates the necessity to record session duration, training volume, or intensity parameters",
      "It measures the athlete's maximal sprinting velocity via satellite GPS tracking systems accurately"
    ],
    "correct": 0,
    "explanation": "Foster's session-RPE (sRPE = Borg CR10 rating taken 20–30 min post-session x duration in minutes) provides a robust, scientifically validated internal load metric correlating highly with heart rate and blood lactate."
  },
  {
    "id": "t5-a1-030",
    "section": "A1",
    "topic": "interdisciplinary coordination in sports science teams",
    "subtopic": "Performance analyst and sports medical team collaboration",
    "difficulty": "analytical",
    "text": "In sports biostatistics, what is 'Cohen's d' used to measure?",
    "options": [
      "The exact statistical significance level (p-value) of an experimental sports science research hypothesis",
      "The standardized effect size, expressing the magnitude of difference between two means in terms of standard deviation units (d = (Mean1 - Mean2) / Pooled SD)",
      "The exact number of human participants required in a double-blind randomized clinical control trial",
      "The percentage of missing longitudinal data points present in a comprehensive sports database"
    ],
    "correct": 1,
    "explanation": "Cohen's d is a standardized effect size metric that quantifies the practical magnitude of difference between two groups independent of sample size (0.2 = small, 0.5 = moderate, 0.8+ = large effect)."
  },
  {
    "id": "t5-a1-031",
    "section": "A1",
    "topic": "injury prevention injury surveillance and risk screening",
    "subtopic": "Biomechanic screening, workload management and secondary prevention",
    "difficulty": "foundational",
    "text": "In the hierarchy of clinical evidence, which study design provides the highest level of methodological rigor for establishing treatment efficacy?",
    "options": [
      "Individual retrospective clinical case reports of a single elite national championship athlete",
      "Systematic Reviews and Meta-Analyses of well-designed Randomized Controlled Trials (RCTs)",
      "Uncontrolled observational cross-sectional surveys administered to athletic academy squads",
      "Expert narrative opinion editorials published in non-peer-reviewed sports magazines"
    ],
    "correct": 1,
    "explanation": "Systematic reviews and meta-analyses of high-quality RCTs sit at the apex of the Oxford Centre for Evidence-Based Medicine (CEBM) hierarchy of evidence, minimizing bias and synthesizing pooled effect sizes."
  },
  {
    "id": "t5-a1-032",
    "section": "A1",
    "topic": "emerging technology wearable sensors and GPS tracking",
    "subtopic": "Micro-technology, velocity tracking and load monitoring",
    "difficulty": "applied",
    "text": "What is the primary function of an 'Intention-to-Treat' (ITT) analysis in randomized controlled trials?",
    "options": [
      "Analyzing participants strictly according to the group to which they were originally randomized, regardless of protocol non-compliance, dropouts, or crossover, preserving baseline randomization balance",
      "Excluding all non-compliant patients and protocol dropouts to artificially maximize the apparent effect size of the tested treatment",
      "Evaluating only those elite athletes who successfully won a podium medal in international championship tournaments",
      "Conducting exploratory statistical analyses before the study data has actually been collected by trial investigators"
    ],
    "correct": 0,
    "explanation": "ITT analysis analyzes all randomized participants in their allocated groups regardless of adherence or dropout, preventing attrition bias and preserving the prognostic balance created by randomization."
  },
  {
    "id": "t5-a2-001",
    "section": "A2",
    "topic": "Indian sports schemes and National Sports Awards",
    "subtopic": "Sports Authority of India and national schemes",
    "difficulty": "foundational",
    "text": "Under the Sports Authority of India (SAI) governance structure, who serves as the Ex-Officio President of the SAI General Body?",
    "options": [
      "Union Minister for Youth Affairs and Sports, Government of India",
      "President of the Indian Olympic Association (IOA) executive board",
      "Director General of the Sports Authority of India (DG SAI)",
      "Chief Justice of the Supreme Court of India in New Delhi"
    ],
    "correct": 0,
    "explanation": "The Union Minister for Youth Affairs and Sports serves as the Ex-Officio President of the SAI General Body, while the Director General (DG SAI) functions as the Chief Executive Officer.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-a2-002",
    "section": "A2",
    "topic": "sports governance ethics and age verification",
    "subtopic": "National Sports Development Code and athlete safeguarding",
    "difficulty": "applied",
    "text": "Under the Scheme of Assistance to National Sports Federations (NSFs), financial grants from the Government of India are utilized for which primary purpose?",
    "options": [
      "Funding national coaching camps, international exposure, hiring foreign coaches, and organizing national championships",
      "Constructing private commercial real estate shopping complexes for federation executive board members",
      "Funding political election campaigns across state sports associations and municipal councils",
      "Purchasing commercial passenger airlines for international sports federation travel"
    ],
    "correct": 0,
    "explanation": "The Scheme of Assistance to NSFs provides central funding for preparing national teams, conducting national championships, international exposure, foreign coaches/support staff salaries, and sports equipment.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-a2-003",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "foundational",
    "text": "Under the 2021 World Anti-Doping Code, what is the standard period of ineligibility (ban) for an intentional Anti-Doping Rule Violation involving a Non-Specified Prohibited Substance (e.g., Anabolic Steroids)?",
    "options": [
      "6 months ban accompanied by a formal written warning and reprimand",
      "4 years ineligibility for first intentional violation under WADA Code",
      "10 years ineligibility for all first-time violations across sports",
      "Lifetime ineligibility for all minor and major infractions identically"
    ],
    "correct": 1,
    "explanation": "Under Article 10.2.1 of the WADA Code, a first-time intentional ADRV involving a non-specified substance (such as anabolic steroids or EPO) carries a standard ineligibility period of 4 years.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-a2-004",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "In the Anti-Doping testing protocol, how are the collected athlete urine samples divided into secure containers for analytical chain of custody?",
    "options": [
      "Divided into Sample 'A' (minimum 60 mL for initial analysis) and Sample 'B' (minimum 30 mL for confirmatory analysis if requested)",
      "All urine is poured into a single unsealed plastic cup without any tamper-evident barcoded seals",
      "Separated into five equal 100 mL glass bottles stored at ambient room temperature without cold chain",
      "Urine is immediately disposed of after checking with an over-the-counter paper dipstick test"
    ],
    "correct": 0,
    "explanation": "WADA International Standard for Testing mandates a minimum 90 mL urine collection, divided into Sample A (min 60 mL) for screening/quantification and Sample B (min 30 mL) for confirmatory testing.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-a2-005",
    "section": "A2",
    "topic": "Olympic, Asian and Paralympic major competitions",
    "subtopic": "International games, venues and Olympic governance",
    "difficulty": "foundational",
    "text": "Which Italian cities will co-host the XXV Olympic Winter Games in 2026?",
    "options": [
      "Milan and Cortina d'Ampezzo, Italy (Milano Cortina 2026)",
      "Rome and Naples, Italy (Southern Italian Winter Games)",
      "Turin and Florence, Italy (Piedmont Regional Games)",
      "Venice and Verona, Italy (Veneto Winter Games)"
    ],
    "correct": 0,
    "explanation": "The 2026 Winter Olympic Games (Milano Cortina 2026) will be co-hosted by the Italian cities of Milan and Cortina d'Ampezzo.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-a2-006",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "In modern Olympic governance, what is the primary role of the International Testing Agency (ITA)?",
    "options": [
      "An independent non-profit anti-doping organization that manages independent anti-doping programs for the IOC and International Federations",
      "A commercial marketing agency selling global television broadcasting and media distribution rights",
      "An international sports federation that manufactures track and field synthetic running surfaces",
      "A travel agency managing airline ticketing and hotel logistics for national Olympic delegations"
    ],
    "correct": 0,
    "explanation": "The International Testing Agency (ITA), established in 2018 with IOC support, is an independent body that manages clean sport and anti-doping testing programs for major events and IFs.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-a2-007",
    "section": "A2",
    "topic": "sports governance ethics and age verification",
    "subtopic": "National Sports Development Code and athlete safeguarding",
    "difficulty": "foundational",
    "text": "Under the National Sports Development Code of India (2011), what percentage of voting rights in National Sports Federations must be reserved for eminent sportspersons?",
    "options": [
      "At least 25% voting representation for prominent sportspersons / athletes with national/international representation",
      "0% (athletes are completely barred from participating in sports federation governance)",
      "100% (only actively competing athletes can hold executive leadership offices in NSFs)",
      "5% representation with non-voting observer status only during annual general meetings"
    ],
    "correct": 0,
    "explanation": "The National Sports Development Code mandates that NSFs must include active/retired eminent sportspersons with at least 25% voting rights and executive representation.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-a2-008",
    "section": "A2",
    "topic": "anti-doping awareness and WADA/NADA regulations",
    "subtopic": "Anti-doping rules, testing and compliance",
    "difficulty": "applied",
    "text": "What is the official mandate of the National Dope Testing Laboratory (NDTL) in New Delhi, India?",
    "options": [
      "A WADA-accredited analytical laboratory responsible for conducting testing and chemical analysis of biological samples (urine/blood) for banned substances",
      "A pharmaceutical manufacturing company producing commercial ergogenic performance supplements for national squads",
      "A specialized tertiary orthopedic sports hospital performing cruciate ligament reconstruction surgeries",
      "A national sports coaching academy dedicated to training junior track and field sprinters"
    ],
    "correct": 0,
    "explanation": "NDTL New Delhi is an autonomous body under MYAS and a WADA-accredited laboratory responsible for analytical testing of human doping control specimens in India and the region.",
    "asOf": "2026-01-30"
  },
  {
    "id": "t5-b-001",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The Thessaly Test for meniscal tear assessment demonstrates its highest diagnostic accuracy when performed at what joint angle and functional condition?",
    "options": [
      "Standing single-leg weight bearing with the knee flexed to 20 degrees while rotating the body three times internally and externally",
      "Supine with knee fully extended while applying forceful anterior translation of the proximal tibia on the femur",
      "Prone with knee flexed to 90 degrees while applying axial distraction along the long axis of the tibial shaft",
      "Side-lying with hip in 45 degrees abduction and knee fully extended while checking lateral joint line tenderness"
    ],
    "correct": 0,
    "explanation": "Karachalios et al. demonstrated that the Thessaly test at 20° knee flexion with dynamic weight-bearing rotation loads the menisci dynamically, achieving diagnostic accuracy >90% for meniscal pathology."
  },
  {
    "id": "t5-b-002",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The 'External Rotation Lag Sign' (Infraspinatus Spring-back test) is performed with the shoulder at 90° abduction and near-maximal external rotation. Inability to maintain this position indicates tear of:",
    "options": [
      "Subscapularis muscle tendon unit inserting onto the lesser tuberosity",
      "Infraspinatus and/or Supraspinatus tendon complex at the greater tuberosity",
      "Pectoralis major clavicular tendon along the anterior axillary fold",
      "Latissimus dorsi insertion along the floor of the bicipital groove"
    ],
    "correct": 1,
    "explanation": "The External Rotation Lag Sign (Hertel) evaluates infraspinatus/supraspinatus integrity; if the patient's arm lags/springs forward internally, it confirms significant structural rotator cuff tear."
  },
  {
    "id": "t5-b-003",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The 'Drop-Arm Test' (Codman's Sign) is positive when an athlete cannot smoothly control lowering the arm from 90° abduction, indicating full-thickness tear of:",
    "options": [
      "Supraspinatus tendon (arm suddenly drops to the side with severe pain)",
      "Long head of triceps brachii muscle along the posterior humeral shaft",
      "Coracobrachialis anterior muscle belly originating from coracoid process",
      "Serratus anterior thoracic wall attachment along the upper ribs"
    ],
    "correct": 0,
    "explanation": "In Codman's Drop-Arm test, passive abduction to 90° is released; if the patient cannot slowly lower the arm eccentrically and it drops abruptly, a full-thickness supraspinatus tear is present."
  },
  {
    "id": "t5-b-004",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The 'Knee-to-Wall Test' (Weight-Bearing Lunge Test - WBLT) provides an objective clinical measure of:",
    "options": [
      "Maximal active knee extension range of motion during supine testing",
      "Weight-bearing ankle dorsiflexion range of motion (measured in cm or degrees of tibial inclination)",
      "Hip adductor muscular contracture and tightness in standing position",
      "Patellar tracking displacement and tilt across the trochlear groove"
    ],
    "correct": 1,
    "explanation": "The WBLT measures closed-chain ankle dorsiflexion mobility (distance from big toe to wall with heel kept down); values <9–10 cm indicate restricted dorsiflexion and heightened lower limb injury risk."
  },
  {
    "id": "t5-b-005",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The 'Stork Standing Test' (Single-Leg Hyperextension Test) is performed to diagnose which athletic spine condition?",
    "options": [
      "Acute cervical disc herniation with severe spinal cord myelopathy",
      "Lumbar Spondylolysis / Pars Interarticularis stress fracture on the ipsilateral weight-bearing side",
      "Thoracic structural scoliosis with severe rib cage rotational deformity",
      "Coccygodynia and coccygeal subluxation following a fall onto the buttocks"
    ],
    "correct": 1,
    "explanation": "The Stork test places the patient standing on one leg while extending the lumbar spine; pain reproduction on the stance leg side indicates active pars interarticularis stress pathology (spondylolysis)."
  },
  {
    "id": "t5-b-006",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The 'Phalen's Test' is performed for 60 seconds by holding the wrists in maximal unforced flexion. What constitutes a positive finding indicative of Carpal Tunnel Syndrome?",
    "options": [
      "Severe pain in the lateral epicondyle of the elbow during wrist extension",
      "Paresthesia, tingling, or numbness in the median nerve distribution (thumb, index, middle, and radial half of ring finger)",
      "Immediate complete numbness of the entire fifth digit exclusively without thumb pain",
      "Sharp shooting pain radiating upward into the cervical spine segments"
    ],
    "correct": 1,
    "explanation": "Phalen's test increases carpal tunnel pressure; numbness/tingling in the median nerve sensory distribution within 60 seconds indicates median nerve compression in the carpal canal."
  },
  {
    "id": "t5-b-007",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "The 'Froment's Sign' evaluates ulnar nerve motor function. When the patient attempts to pinch a piece of paper between the thumb and index finger against resistance, a positive test is manifested by:",
    "options": [
      "Hyper-extension of the thumb metacarpophalangeal joint with pain",
      "Compensatory flexion of the thumb interphalangeal (IP) joint by the Flexor Pollicis Longus (median nerve) due to paralysis of the Adductor Pollicis (ulnar nerve)",
      "Complete inability to see the white paper due to optic neuritis",
      "Spontaneous violent abduction of all fingers away from paper grip"
    ],
    "correct": 1,
    "explanation": "Froment's sign tests the ulnar-innervated Adductor Pollicis; weakness causes the patient to substitute by forcefully flexing the thumb IP joint using the median-innervated Flexor Pollicis Longus."
  },
  {
    "id": "t5-b-008",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "The 'Apprehension Test' for Anterior Shoulder Instability is performed with the patient supine and the shoulder in 90° abduction and maximal external rotation. What is considered a true positive test?",
    "options": [
      "The athlete demonstrates a look of apprehension, facial alarm, and active muscular resistance/guarding against further external rotation due to fear of impending shoulder dislocation",
      "Mild muscular fatigue in the biceps brachii tendon during the test",
      "Complete numbness across the upper thoracic dermatomes during elevation",
      "Painless audible cracking sound originating from the sternoclavicular joint"
    ],
    "correct": 0,
    "explanation": "True positive apprehension is marked by athlete alarm and resistance to further motion due to fear of anterior subluxation/dislocation (relieved by the Jobe Relocation test where posterior force is applied)."
  },
  {
    "id": "t5-b-009",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In the 'Optimal Loading' paradigm (POLICE / PEACE & LOVE), why is progressive mechanical loading superior to prolonged complete immobilization in soft tissue injuries?",
    "options": [
      "Mechanical loading stimulates mechanotransduction, upregulates collagen gene expression, aligns newly synthesized collagen fibrils along lines of stress, and preserves tensile strength",
      "Prolonged immobilization doubles skeletal muscle glycogen content and enhances collateral ligament stiffness",
      "Mechanical loading prevents any white blood cells or healing fibroblasts from entering the injured tissue bed",
      "Immobilization leads to permanent bony ankylosis and articular calcification across all human joints"
    ],
    "correct": 0,
    "explanation": "Mechanotransduction converts physiological mechanical loading into cellular biochemical signals (upregulating tenocyte/fibroblast collagen I synthesis), optimizing scar alignment and tissue tensile strength."
  },
  {
    "id": "t5-b-010",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In knee rehabilitation, what is the 'Envelope of Function' concept described by Scott Dye?",
    "options": [
      "The surgical fibrous capsule enclosing the intra-articular synovial fluid and menisci",
      "The range of physiological mechanical load and frequency that a musculoskeletal joint can safely withstand without causing tissue overload, structural breakdown, or loss of homeostasis",
      "The total number of exercise repetitions performed in a single resistance training workout",
      "The psychological mental boundary preventing athlete competition fear after surgical repair"
    ],
    "correct": 1,
    "explanation": "Scott Dye's 'Envelope of Function' defines the dynamic boundary of load and frequency that a joint/tissue can sustain while maintaining structural and metabolic homeostasis (loading beyond causes pain/degeneration)."
  },
  {
    "id": "t5-b-011",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "In eccentric resistance exercise, why does high-load eccentric training elicit greater muscle damage (microtrauma) and mechanical tension than concentric training?",
    "options": [
      "Fewer motor units are recruited to handle equivalent or higher absolute loads, resulting in higher mechanical strain per individual active sarcomere and non-uniform sarcomere popping",
      "Eccentric muscle contractions produce zero cellular ATP and cause immediate chemical necrosis across fibers",
      "Concentric contractions generate three times higher mechanical tensile forces across tendon insertions",
      "Eccentric exercise completely blocks all calcium release from sarcoplasmic reticulum ryanodine receptors"
    ],
    "correct": 0,
    "explanation": "Eccentric muscle contractions recruit fewer motor units for a given load, concentrating immense force across a smaller cross-sectional area of active fibers, leading to sarcomere overstretch ('popping sarcomere theory') and robust remodeling stimuli."
  },
  {
    "id": "t5-b-012",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In the Maitland concept, what is the clinical distinction between a joint 'Stiffness' dominant problem versus a 'Pain' dominant problem?",
    "options": [
      "Pain-dominant conditions are treated with gentle Grade I–II oscillations short of resistance, while Stiffness-dominant conditions are treated with Grade III–IV oscillations into tissue resistance",
      "Pain-dominant conditions require immediate high-velocity Grade V thrust manipulations under regional anesthesia",
      "Stiffness-dominant conditions are treated exclusively with passive superficial cold ice packs for 30 minutes",
      "There is zero clinical distinction between pain-dominant and stiffness-dominant presentations in manual therapy"
    ],
    "correct": 0,
    "explanation": "Maitland distinguishes: Pain-dominant (pain appears before resistance - R1 before P1; treated with Grade I/II oscillations) vs Stiffness-dominant (resistance appears before pain - P1 after R1; treated with Grade III/IV into resistance)."
  },
  {
    "id": "t5-b-013",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In spinal rehabilitation, McGill's 'Big Three' core stabilization exercises designed to optimize spinal stability with minimal compressive loading are:",
    "options": [
      "Seated Roman chair back extensions, heavy weighted sit-ups, and rapid Russian twists with medicine balls",
      "Modified Curl-up, Side Bridge (plank), and Bird-Dog (quadruped opposite arm/leg raise)",
      "Barbell overhead squats, hanging leg raises, and deep decline abdominal crunches to fatigue",
      "Standing good-mornings, standing heavy side bends, and high-load Jefferson deadlifts"
    ],
    "correct": 1,
    "explanation": "Stuart McGill's 'Big 3' (Modified Curl-Up, Side Bridge, and Bird-Dog) provide optimal 3D muscular endurance and motor control across the core with minimal spinal compressive and shear penalties."
  },
  {
    "id": "t5-b-014",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In the management of Achilles tendinopathy, which exercise protocol incorporates concentric-eccentric calf raises with heavy backpacks or barbell loads performed 3 times per week?",
    "options": [
      "Heavy Slow Resistance (HSR) protocol (Kongsgaard et al.) utilizing 6–15 RM loads with 6-second cadence",
      "Alfredson isolated eccentric drop protocol performing 180 repetitions twice daily without concentric load",
      "Continuous passive calf stretching on a wedge board held for 60 seconds without any external resistance",
      "Low-intensity cycling on a stationary trainer for 10 minutes with zero resistance"
    ],
    "correct": 0,
    "explanation": "Kongsgaard's HSR protocol for Achilles tendinopathy utilizes bilateral/unilateral heel raises with heavy progressive resistance (6–15 RM, 3s concentric / 3s eccentric) 3 days/week, yielding high collagen turnover and clinical satisfaction."
  },
  {
    "id": "t5-b-015",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "applied",
    "text": "In PNF stretching, what is the recommended minimum duration for holding the isometric contraction phase in the 'Contract-Relax' technique?",
    "options": [
      "0.5 seconds of rapid pulsing contraction before immediate stretch release",
      "5 to 10 seconds of submaximal or maximal isometric contraction to discharge GTOs",
      "60 continuous seconds of agonizing maximal strain to fatigue muscle fibers",
      "Contraction duration has zero influence on Golgi tendon organ Ib afferent activation"
    ],
    "correct": 1,
    "explanation": "Holding the isometric contraction for 5–10 seconds adequately discharges Golgi Tendon Organ Ib afferents, initiating autogenic inhibition to allow greater muscle relaxation during the subsequent passive stretch."
  },
  {
    "id": "t5-b-016",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In lower extremity biomechanics, during the closed-chain 'Subtalar Joint Pronation' that occurs during weight acceptance, what triplanar kinematic motions occur at the calcaneus and talus?",
    "options": [
      "Calcaneal eversion, with talar adduction (medial rotation) and talar plantarflexion",
      "Calcaneal inversion, with talar abduction (lateral rotation) and talar dorsiflexion",
      "Calcaneal pure sagittal extension with zero horizontal or frontal plane rotation",
      "Complete superior displacement of the cuboid bone away from the calcaneal facet"
    ],
    "correct": 0,
    "explanation": "Closed-chain subtalar pronation consists of calcaneal eversion (frontal plane), combined with talar adduction/medial rotation (transverse plane) and talar plantarflexion (sagittal plane), unlocking the midtarsal joint for shock absorption."
  },
  {
    "id": "t5-b-017",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "During normal human gait, what is the total range of sagittal plane ankle motion required for normal function?",
    "options": [
      "Approximately 10° of dorsiflexion and 20° of plantarflexion (total arc ~30°)",
      "Approximately 50° of dorsiflexion and 70° of plantarflexion (total arc ~120°)",
      "Zero degrees (the ankle remains in a rigid locked posture throughout gait)",
      "180 degrees of complete multi-planar rotation across all walking phases"
    ],
    "correct": 0,
    "explanation": "Normal walking gait requires ~10° of ankle dorsiflexion (achieved during late terminal stance) and ~20° of plantarflexion (achieved at push-off/toe-off), providing a total functional arc of ~30°."
  },
  {
    "id": "t5-b-018",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In scapular kinematics, what is the primary plane and direction of motion produced by the Serratus Anterior muscle on the scapula?",
    "options": [
      "Scapular protraction (abduction), upward rotation, and posterior tilting against the thoracic cage",
      "Scapular retraction (adduction), downward rotation, and anterior tilting against ribs",
      "Scapular depression with extreme medial border elevation away from thoracic wall",
      "Pure downward axial spin around the acromioclavicular articulation facet"
    ],
    "correct": 0,
    "explanation": "The Serratus Anterior pulls the scapula anterolaterally (protraction), rotates the inferior angle laterally (upward rotation), and holds the medial border against the thorax (posterior tilting), stabilizing the scapulothoracic joint."
  },
  {
    "id": "t5-b-019",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In the functional anatomy of the knee joint, why is the Medial Meniscus significantly less mobile and more prone to injury than the Lateral Meniscus?",
    "options": [
      "The medial meniscus is completely unattached to any surrounding joint capsule or ligament structures",
      "The medial meniscus is firmly anchored to the deep medial collateral ligament (MCL) and joint capsule, whereas the lateral meniscus is not attached to the LCL and has greater mobility",
      "The medial meniscus is composed purely of fragile elastic skin tissue without fibrocartilage fibers",
      "The lateral meniscus carries 100% of all knee compressive loads in standing postures"
    ],
    "correct": 1,
    "explanation": "The medial meniscus has firm peripheral attachments to the joint capsule and deep medial collateral ligament (MCL), making it less mobile (~5 mm translation vs ~11 mm for lateral meniscus) and more vulnerable to shearing forces."
  },
  {
    "id": "t5-b-020",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In hip biomechanics, what is the primary role of the Gluteus Medius muscle during single-leg stance?",
    "options": [
      "Concentric hip adduction pulling the thighs together in standing",
      "Generating an abductor moment to stabilize the pelvis horizontally, preventing the contralateral pelvis from dropping",
      "Flexing the knee joint to 90 degrees during the swing flight phase",
      "Extending the lumbar spine into extreme hyperlordosis and rotation"
    ],
    "correct": 1,
    "explanation": "During single-leg stance, the stance gluteus medius contracts to create a powerful lateral abductor moment that counteracts body weight torque, maintaining a level pelvis and preventing contralateral pelvic drop."
  },
  {
    "id": "t5-b-021",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In the upper extremity kinetic chain, what is the functional purpose of the 'Rotator Interval' in the glenohumeral joint?",
    "options": [
      "An anatomical space between the supraspinatus and subscapularis tendons containing the coracohumeral ligament, superior glenohumeral ligament, and long head of biceps tendon",
      "A structural bone fracture line passing through the surgical neck of the proximal humerus",
      "A surgical incision created during total shoulder joint replacement arthroplasty procedures",
      "The empty space beneath the deltoid tuberosity insertion along the lateral humeral shaft"
    ],
    "correct": 0,
    "explanation": "The rotator interval is a triangular space bounded by the supraspinatus (superiorly) and subscapularis (inferiorly), reinforced by the coracohumeral and superior glenohumeral ligaments, stabilizing the biceps tendon and resisting inferior translation at 0° abduction."
  },
  {
    "id": "t5-b-022",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "During the 'Mid-Stance' phase of normal walking, what is the primary mechanical function of the Soleus and Gastrocnemius muscle group?",
    "options": [
      "Eccentric deceleration of forward tibial progression over the fixed foot (controlling the second ankle rocker)",
      "Concentric explosive plantarflexion to launch the body into flight phase",
      "Passive complete relaxation allowing uncontrolled tibial collapse forward into flexion",
      "Pure isometric contraction of the toe extensor tendons to clear the floor"
    ],
    "correct": 0,
    "explanation": "In Mid-Stance, the calf plantarflexors (particularly soleus) contract eccentrically to restrain and control the rate of forward tibial advancement over the stationary planted foot, stabilizing the knee in extension."
  },
  {
    "id": "t5-b-023",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "A 'Genu Recurvatum' pathological gait pattern (knee hyperextension during stance) is commonly adopted as a compensation for:",
    "options": [
      "Severe weakness or paralysis of the Quadriceps muscle group (locking the knee mechanically in extension to prevent buckling)",
      "Severe contracture of the hamstring muscles holding the knee locked at 90 degrees",
      "Excessive strength and hyper-reflexia of the tibialis anterior dorsiflexor muscle",
      "Spasticity of the gluteus maximus extensor muscle belly during terminal swing"
    ],
    "correct": 0,
    "explanation": "Patients with quadriceps weakness lack the active torque to control knee flexion during stance; they compensate by thrusting the knee into passive bony/ligamentous hyperextension (genu recurvatum) to keep the GRF anterior to the knee."
  },
  {
    "id": "t5-b-024",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In 3D gait kinematic analysis, what is the 'Center of Pressure' (COP)?",
    "options": [
      "The point of application of the resultant ground reaction force vector on the plantar surface of the foot",
      "The center of mass of the human skull measured in quiet standing position",
      "The hydrostatic blood pressure recorded inside the popliteal artery during walking",
      "The atmospheric barometric pressure recorded inside the sports motion laboratory"
    ],
    "correct": 0,
    "explanation": "Center of Pressure (COP) represents the spatial location of the centroid of total vertical ground reaction force exerted on the contact surface, progressing from heel strike along the lateral foot to the 1st/2nd metatarsal heads at toe-off."
  },
  {
    "id": "t5-b-025",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "applied",
    "text": "During high-speed running, during which phase of the sprint gait cycle is the risk of an acute Hamstring strain injury highest?",
    "options": [
      "Late terminal swing phase (during maximal eccentric lengthening deceleration immediately prior to ground contact)",
      "Mid-stance phase of single support when the foot is completely flat on the running surface",
      "Early swing phase when the knee is actively flexing to 90 degrees behind the hip",
      "Mid-flight phase when both feet are completely suspended in the air without contact"
    ],
    "correct": 0,
    "explanation": "Biomechanical studies (Chumanov, Thelen et al.) show hamstring peak muscle-tendon length, high eccentric force, and negative work peak simultaneously during late terminal swing as the hamstrings decelerate the advancing shank."
  },
  {
    "id": "t5-b-026",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In therapeutic electrotherapy, the 'Strength-Duration Curve' illustrates that to depolarize a denervated muscle fiber directly (in the absence of intact motor nerves), the electrical stimulus requires:",
    "options": [
      "A very short pulse duration (<0.1 milliseconds) at low sensory intensity threshold",
      "A long pulse duration (>10 to 100 milliseconds) at significantly higher current amplitude (Galvanic / Interrupted Direct Current)",
      "High-frequency radio waves at 27.12 MHz delivered without any direct current component",
      "Denervated muscle fibers can never be electrically stimulated under any current parameters"
    ],
    "correct": 1,
    "explanation": "Denervated muscle lacks low-threshold nerve axons (chronaxie of nerve is ~0.05–0.1 ms; muscle membrane chronaxie is >10–50 ms), requiring long pulse durations (>10–100 ms) and higher amplitudes to depolarize sarcolemma directly."
  },
  {
    "id": "t5-b-027",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "applied",
    "text": "In Neuromuscular Electrical Stimulation (NMES), what is the optimal pulse frequency range standardly selected to produce a smooth, tetanic muscle contraction?",
    "options": [
      "1 to 5 Hz (producing isolated single muscle twitches with zero fusion)",
      "35 to 50 Hz (producing smooth fused tetanic muscle contraction with manageable fatigue)",
      "500 to 1000 Hz (producing continuous rapid neural destruction and burns)",
      "Pulse frequency has zero effect on muscular contraction quality or tetany"
    ],
    "correct": 1,
    "explanation": "A frequency of 35–50 pulses per second (Hz) produces complete physiological tetany (fused contraction) while minimizing rapid neuromuscular junction fatigue associated with higher frequencies (>80 Hz)."
  },
  {
    "id": "t5-b-028",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "In therapeutic phonophoresis, what is the physical mechanism by which ultrasound enhances the transdermal delivery of topical pharmacological agents (e.g., NSAIDs)?",
    "options": [
      "Acoustic cavitation and microstreaming increasing stratum corneum lipid permeability and pore diameter",
      "Complete thermal ablation and vaporization of the epidermis under high power",
      "Direct electrical attraction of positively charged ionic drug molecules into pores",
      "Freezing topical pharmacological creams into rigid subcutaneous ice crystals"
    ],
    "correct": 0,
    "explanation": "Phonophoresis utilizes acoustic cavitation, acoustic microstreaming, and mild thermal effects to disrupt the lipid bilayer of the stratum corneum, increasing skin permeability for drug diffusion."
  },
  {
    "id": "t5-b-029",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "Which electrophysical modality generates deep endogenous therapeutic tissue heating primarily through molecular dipole rotation and ionic conduction inside electrolyte-rich tissues?",
    "options": [
      "Continuous Shortwave Diathermy (SWD / 27.12 MHz) via dielectric heating",
      "Infrared radiant heating lamps (IRR) acting purely on superficial skin",
      "Superficial hydrocollator hot moist packs providing conductive surface heat",
      "Galvanic iontophoresis direct current units driving transdermal ions"
    ],
    "correct": 0,
    "explanation": "Continuous SWD uses high-frequency electromagnetic fields (27.12 MHz) that cause rapid oscillation/dipole rotation of water molecules and ionic movement, producing uniform deep endogenous heat in muscular and vascular tissues."
  },
  {
    "id": "t5-b-030",
    "section": "B",
    "topic": "human and exercise physiology",
    "subtopic": "Cardiorespiratory and neuromuscular physiology",
    "difficulty": "analytical",
    "text": "In Vestibular Rehabilitation Therapy (VRT), what is the primary physiological mechanism targeted by 'Gaze Stability Exercises' (e.g., VOR x 1 and VOR x 2 viewing drills)?",
    "options": [
      "Vestibulo-Ocular Reflex (VOR) adaptation and neuroplastic compensation to maintain clear visual focus on a stationary or moving target during head motion",
      "Complete chemical ablation and surgical transection of the vestibulocochlear cranial nerve pathway",
      "Increasing intraocular pressure inside the anterior eyeball chamber to sharpen distant vision",
      "Strengthening the deep cervical extensor muscles for heavy Olympic barbell weightlifting"
    ],
    "correct": 0,
    "explanation": "Gaze stability drills (VOR x 1 where head moves while staring at fixed letter; VOR x 2 where target and head move in opposite directions) induce vestibular neuroplastic adaptation and recalibrate the gain of the VOR."
  },
  {
    "id": "t5-b-031",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "applied",
    "text": "In spinal cord injury functional assessment, the ASIA Impairment Scale (AIS) Grade 'C' is defined as:",
    "options": [
      "Complete: No motor or sensory function is preserved in the sacral segments S4-S5",
      "Incomplete: Motor function is preserved below the neurological level, and more than half of key muscle functions below the single neurological level have a muscle grade LESS than 3",
      "Incomplete: Motor function is preserved below the neurological level, and at least half of key muscles have a muscle grade GREATER than or equal to 3",
      "Normal: Motor and sensory functions are completely normal throughout all dermatomes"
    ],
    "correct": 1,
    "explanation": "AIS Grade C = Incomplete motor injury where motor function is preserved below the level, and more than half of key muscles below the neurological level have a muscle grade <3/5 (Grade D has at least half ≥3/5)."
  },
  {
    "id": "t5-b-032",
    "section": "B",
    "topic": "biomechanics and movement analysis",
    "subtopic": "Observational and pathological gait analysis",
    "difficulty": "analytical",
    "text": "In Parkinson's disease neurorehabilitation, what is the primary therapeutic rationale for utilizing 'Auditory and Visual Rhythmic Cuing' (e.g., metronome beat or floor laser lines) during gait training?",
    "options": [
      "Cues bypass the impaired basal ganglia-supplementary motor area internal timing circuits by accessing preserved cerebellar-premotor visual/auditory sensory pathways",
      "Cues induce immediate deep hypnotic sleep to reduce resting tremors across the limbs",
      "Cues increase dopamine degradation in the substantia nigra pars compacta rapidly",
      "Cues completely immobilize the lower extremities during standing balance tasks"
    ],
    "correct": 0,
    "explanation": "External rhythmic sensory cues (auditory metronome, visual step lines) bypass deficient basal ganglia internal rhythm generation, utilizing alternative cortical-cerebellar visual/auditory pathways to overcome freezing and hypokinesia."
  },
  {
    "id": "t5-b-033",
    "section": "B",
    "topic": "psychology and human development neuro-rehabilitation",
    "subtopic": "Neuro-rehabilitation concepts and motor relearning",
    "difficulty": "applied",
    "text": "In the management of spastic cerebral palsy or adult spasticity, what is the mechanism of action of intramuscular Botulinum Toxin Type A (Botox) injections?",
    "options": [
      "Irreversibly binding to presynaptic cholinergic receptors to inhibit Acetylcholine release at the neuromuscular junction, inducing localized temporary flaccid chemo-denervation",
      "Stimulating muscle spindle firing to enhance rapid hyperactive stretch reflexes across spastic antagonist groups",
      "Causing permanent necrosis and complete surgical excision of the spastic muscle tendon unit",
      "Increasing systemic dopamine levels across the central nervous system to reduce tremors"
    ],
    "correct": 0,
    "explanation": "Botulinum toxin Type A cleaves SNAP-25, preventing presynaptic vesicular release of acetylcholine at the motor endplate, producing localized, dose-dependent chemical denervation lasting 3–4 months."
  },
  {
    "id": "t5-b-034",
    "section": "B",
    "topic": "electrotherapy and electrodiagnosis physical agents",
    "subtopic": "Evidence-based electrophysical modalities",
    "difficulty": "analytical",
    "text": "In the McKenzie Method (MDT), an athlete who presents with a 'Lateral Shift' of the lumbar spine (lumbar listing) must have the lateral shift corrected:",
    "options": [
      "BEFORE attempting sagittal plane extension movements (as sagittal extension will be blocked and aggravate symptoms if an uncorrected lateral shift remains)",
      "Immediately after completing 100 heavy lumbar flexion crunches on an inclined bench",
      "Lateral shifts should never be corrected under manual therapy protocols due to disc risk",
      "Exclusively through six consecutive months of absolute bed rest and continuous traction"
    ],
    "correct": 0,
    "explanation": "In MDT, an acute relevant lateral shift is a mechanical block; it MUST be manually corrected and centralized in the frontal plane before sagittal extension exercises can be successfully introduced."
  },
  {
    "id": "t5-b-035",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "When performing Upper Limb Neurodynamic Testing for the Radial Nerve (ULTT 2b / Radial Bias), what is the standardized shoulder and arm movement sequence?",
    "options": [
      "Shoulder depression, elbow extension, internal rotation, forearm pronation, wrist and finger flexion, with sensitizing cervical side-bending",
      "Shoulder elevation, elbow flexion, external rotation, forearm supination, and wrist extension in anatomical coronal plane",
      "Shoulder abduction to 180 degrees with maximal finger extension in full supination against manual overpressure",
      "Forearm supination with thumb extension and elbow locked at 90 degrees flexion against resistance"
    ],
    "correct": 0,
    "explanation": "Radial nerve bias (ULTT 2b) sequence: Shoulder girdle depression -> Elbow extension -> Shoulder internal rotation -> Forearm pronation -> Wrist/finger/thumb flexion -> Shoulder abduction (~10–30°)."
  },
  {
    "id": "t5-b-036",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "In Cyriax's manual therapy framework, 'Deep Transverse Friction Massage' (DTFM) is specifically applied:",
    "options": [
      "Strictly transverse (perpendicular) to the fiber orientation at the precise anatomical site of the lesion with sufficient depth to mobilize fibers and prevent cross-link adhesions",
      "Parallel to the longitudinal orientation of the tendon collagen fibers with superficial stroke to warm the skin",
      "Directly over acute, open bleeding hematomas on the playing field to disperse internal hemorrhage",
      "Using electrical current pads applied over the contralateral unaffected limb to produce reflex relaxation"
    ],
    "correct": 0,
    "explanation": "Cyriax DTFM is applied perpendicular (transverse) to the tendon/ligament fiber direction at the exact focal lesion site to produce transverse movement of collagen fibers, prevent abnormal cross-links, and induce hyperemic analgesia."
  },
  {
    "id": "t5-b-037",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "applied",
    "text": "In the Kaltenborn manual therapy system, what is the 'Resting Position' (Loose-Packed Position) of a joint?",
    "options": [
      "The position where joint capsule and periarticular ligaments are on greatest laxity and joint play is maximal (ideal for initial evaluation and pain relief)",
      "The position of maximal joint congruency where ligaments and capsule are taut and tightly spiralized",
      "The position where the joint is completely locked at terminal end-range of anatomical extension",
      "The position where the joint is completely dislocated out of the articular glenoid socket"
    ],
    "correct": 0,
    "explanation": "The loose-packed (resting) position is where articular surface congruency is minimal, joint capsule and ligaments are relaxed, joint volume is greatest, and joint play is maximal, making it the safest starting position for mobilization."
  },
  {
    "id": "t5-b-038",
    "section": "B",
    "topic": "human anatomy joint muscle ligament and nerve",
    "subtopic": "Joint biomechanics, muscle levers and force couples",
    "difficulty": "analytical",
    "text": "What is the Close-Packed Position of the Talocrural (Ankle) Joint where joint stability is maximal and articular surfaces are fully congruent?",
    "options": [
      "Full plantarflexion with subtalar inversion and adduction",
      "Maximal ankle dorsiflexion (anterior talar dome wedged in mortise)",
      "Mid-range 10 degrees plantarflexion with eversion",
      "Zero degrees neutral position with foot completely unloaded"
    ],
    "correct": 1,
    "explanation": "At maximal dorsiflexion, the wider anterior portion of the talar trochlea is wedged tightly into the mortise between the malleoli, making it the close-packed position with maximal congruency and taut collateral ligaments."
  },
  {
    "id": "t5-b-039",
    "section": "B",
    "topic": "exercise therapy and rehabilitation",
    "subtopic": "Therapeutic exercise protocols and manual therapy",
    "difficulty": "applied",
    "text": "In Mulligan's concept for treating acute lateral ankle sprains with persistent dorsiflexion restriction and pain, what Mobilization with Movement (MWM) technique is applied?",
    "options": [
      "Posteromedial glide of the fibula (or posterior glide of the talus) maintained while the patient actively lunges forward into pain-free dorsiflexion",
      "High-velocity thrust manipulation into forced sudden plantarflexion and inversion on the treatment table",
      "Continuous axial mechanical distraction while keeping the foot completely immobile in a brace",
      "Anterior translation of the distal fibula during non-weight-bearing resting on the couch"
    ],
    "correct": 0,
    "explanation": "Mulligan's ankle MWM applies a posterior/superior glide to the distal fibula (or posterior talar glide) with a belt or hand while the patient performs an active weight-bearing forward lunge into previously painful dorsiflexion."
  },
  {
    "id": "t5-b-040",
    "section": "B",
    "topic": "assessment and clinical reasoning differential",
    "subtopic": "Special orthopedic physical assessment tests",
    "difficulty": "analytical",
    "text": "In the cervical spine, the 'Sharp-Purser Test' is a specialized clinical safety test designed to evaluate the structural stability and integrity of which ligament?",
    "options": [
      "Ligamentum flavum between T1 and T2 thoracic spinal segments",
      "Transverse Ligament of the Atlas (evaluating atlantoaxial instability and odontoid subluxation)",
      "Supraspinous ligament of the lower lumbar vertebrae and sacrum",
      "Anterior longitudinal ligament at the sacrococcygeal junction"
    ],
    "correct": 1,
    "explanation": "The Sharp-Purser test evaluates atlantoaxial instability (subluxation of atlas on axis from transverse ligament insufficiency, common in rheumatoid arthritis/trauma); a posterior translation/relocation clunk confirms transverse ligament laxity."
  },
  {
    "id": "t5-c-001",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old elite track sprinter with recurrent left hamstring strain undergoes kinemati...",
    "difficulty": "analytical",
    "text": "At maximum velocity, the analyst notes excessive anterior pelvic tilt (18°), pronounced trunk forward lean, and late swing overstriding. Electromyography shows delayed onset of the Gluteus Maximus during hip extension, with the hamstrings firing prematurely as the primary hip extensor (synergistic dominance). What targeted lumbo-pelvic rehabilitation intervention is required?",
    "options": [
      "Gluteus maximus motor retraining/strengthening, anterior core (rectus/obliques) activation to control anterior pelvic tilt, and hip flexor (iliopsoas) flexibility restoration",
      "Passive bed rest for 3 consecutive months with complete avoidance of all gluteal activation and strengthening drills",
      "Heavy knee extension isolation machines performed to muscular failure twice daily to overpower the hamstrings",
      "Immediate surgical tenotomy and lengthening of the semitendinosus muscle belly on the track"
    ],
    "correct": 0,
    "explanation": "Synergistic dominance occurs when hamstrings compensate for weak gluteus maximus hip extension. Management requires gluteal re-education, anterior core strengthening to eliminate excessive anterior pelvic tilt, and restoring hip flexor length.",
    "passageId": "cs-41",
    "passage": "A 24-year-old elite track sprinter with recurrent left hamstring strain undergoes kinematic sprint analysis."
  },
  {
    "id": "t5-c-002",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 24-year-old elite track sprinter with recurrent left hamstring strain undergoes kinemati...",
    "difficulty": "analytical",
    "text": "During the late-stage sprint drills for this athlete, which drill focuses specifically on rapid hip flexion of the swing leg coupled with aggressive down-and-back ground strike under the center of mass to prevent overstriding?",
    "options": [
      "Slow continuous distance jogging on soft beach sand to build aerobic endurance",
      "'A-skips', 'B-skips', and high-speed dribble progressions with upright posture",
      "Passive static calf stretching on an inclined wooden wedge board in standing",
      "Seated leg curls performed with 5-second concentric pauses on a machine"
    ],
    "correct": 1,
    "explanation": "Sprint drills (A-skips, B-skips, dribbles) reinforce dynamic posture, high front-side mechanics, and ground contact directly beneath the center of mass (reducing braking forces and hamstring overstretch).",
    "passageId": "cs-41",
    "passage": "A 24-year-old elite track sprinter with recurrent left hamstring strain undergoes kinematic sprint analysis."
  },
  {
    "id": "t5-c-003",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old professional cricket fast bowler reports sharp posterior shoulder pain durin...",
    "difficulty": "analytical",
    "text": "Diagnostic ultrasound shows thickness and hyper-echogenicity of the posterior-inferior glenohumeral joint capsule, with a Glenohumeral Internal Rotation Deficit (GIRD) of 25° compared to the non-dominant shoulder. Total Arc of Motion is 155° in dominant shoulder vs 175° in non-dominant (a pathological Total Arc deficit of 20°). What does a Total Arc deficit >5° indicate in throwing athletes?",
    "options": [
      "Pathological GIRD with true posterior capsuloligamentous and soft tissue restriction, placing the athlete at a significantly elevated risk (>2.5x) for shoulder and elbow injuries",
      "Normal physiological non-pathological adaptation seen routinely in all international cricket fast bowlers",
      "Complete structural avulsion of the clavicle requiring emergency open reduction and internal plating",
      "Instantaneous mandatory requirement for permanent retirement from all overhead competitive sports"
    ],
    "correct": 0,
    "explanation": "Wilk et al. demonstrated that when total rotational arc of motion (ER + IR) in the throwing shoulder is >5° less than the non-throwing shoulder, it indicates true pathological GIRD (not just bony retroversion), drastically increasing injury risk.",
    "passageId": "cs-42",
    "passage": "A 21-year-old professional cricket fast bowler reports sharp posterior shoulder pain during ball release."
  },
  {
    "id": "t5-c-004",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 21-year-old professional cricket fast bowler reports sharp posterior shoulder pain durin...",
    "difficulty": "analytical",
    "text": "Which evidence-based stretching technique is proven to produce immediate and lasting restoration of internal rotation and posterior capsular mobility in throwers with pathological GIRD?",
    "options": [
      "Cross-body posterior stretch performed with manual stabilization of the lateral scapular border, combined with the Sleeper stretch",
      "Passive shoulder external rotation stretching in 90 degrees of abduction against a rigid doorway wall",
      "Holding 20 kg dumbbells overhead while jumping on a mini-trampoline to force shoulder mobility",
      "Applying ice packs to the anterior acromion without performing any active or passive joint movement"
    ],
    "correct": 0,
    "explanation": "Cross-body stretch with scapular stabilization prevents compensatory scapular protraction, isolating posterior glenohumeral capsular stretch and restoring internal rotation more effectively than unconstrained stretches.",
    "passageId": "cs-42",
    "passage": "A 21-year-old professional cricket fast bowler reports sharp posterior shoulder pain during ball release."
  },
  {
    "id": "t5-c-005",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old elite weightlifter reports anterior knee pain over the patellar tendon durin...",
    "difficulty": "analytical",
    "text": "Functional assessment shows adequate quadriceps strength but severe ankle dorsiflexion restriction (WBLT = 5 cm on affected side vs 12 cm on unaffected side). How does restricted ankle dorsiflexion biomechanically increase patellar tendon loading during squat landings?",
    "options": [
      "Restricted dorsiflexion limits forward tibial translation, forcing the athlete into earlier compensatory hip flexion or excessive dynamic knee valgus and increasing patellar tendon tensile strain",
      "Restricted dorsiflexion completely eliminates all quadriceps muscle EMG activation during squatting movements",
      "Restricted dorsiflexion forces the patella to dislocate into the posterior popliteal fossa during knee flexion",
      "Restricted dorsiflexion reduces ground reaction forces to absolute zero upon catching heavy barbell lifts"
    ],
    "correct": 0,
    "explanation": "Limited dorsiflexion prevents forward tibial progression, leading to compensatory dynamic knee valgus, higher knee extensor moments, and stiffer landing mechanics, significantly amplifying patellar tendon strain.",
    "passageId": "cs-43",
    "passage": "A 23-year-old elite weightlifter reports anterior knee pain over the patellar tendon during the catch phase of cleans and snatches."
  },
  {
    "id": "t5-c-006",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old elite weightlifter reports anterior knee pain over the patellar tendon durin...",
    "difficulty": "analytical",
    "text": "What is the integrated multi-modal management plan to resolve this weightlifter's patellar tendinopathy and prevent recurrence?",
    "options": [
      "Talocrural joint mobilizations (MWM) and gastrocnemius-soleus stretching to restore dorsiflexion, combined with Heavy Slow Resistance (HSR) decline squats and load management",
      "Immediate surgical debridement and excision of the patellar tendon within 48 hours of initial diagnosis",
      "Applying continuous passive ultrasound and resting completely in bed for eight consecutive months",
      "Switching permanently to upper body bench press training exclusively while abandoning all lower body lifting"
    ],
    "correct": 0,
    "explanation": "Effective management combines addressing the kinetic chain contributor (restoring dorsiflexion with talocrural MWM/calf mobility) with direct progressive tendon remodeling using Heavy Slow Resistance (HSR) loading.",
    "passageId": "cs-43",
    "passage": "A 23-year-old elite weightlifter reports anterior knee pain over the patellar tendon during the catch phase of cleans and snatches."
  },
  {
    "id": "t5-c-007",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old elite squash player reports persistent lateral elbow pain for 4 months....",
    "difficulty": "analytical",
    "text": "In addition to local tenderness over the ECRB origin, neurodynamic assessment reveals a positive Radial Nerve Upper Limb Neurodynamic Test (ULTT 2b) with symptom reproduction in the forearm. Palpation 4 cm distal to the lateral epicondyle reveals tenderness over the supinator muscle belly (Arcade of Frohse). What dual pathology is present?",
    "options": [
      "Lateral epicondylalgia coexisting with Radial Tunnel Syndrome (compression of the posterior interosseous nerve)",
      "Medial epicondylalgia coexisting with ulnar nerve entrapment at the cubital tunnel behind medial epicondyle",
      "Acute full-thickness rupture of the biceps brachii tendon at the radial tuberosity insertion",
      "Triceps brachii avulsion fracture at the olecranon tip accompanied by posterior elbow dislocation"
    ],
    "correct": 0,
    "explanation": "Recalcitrant lateral elbow pain often features coexisting Radial Tunnel Syndrome (PIN entrapment under the Arcade of Frohse in the supinator), confirmed by tenderness 4 cm distal to epicondyle and positive radial neurodynamics.",
    "passageId": "cs-44",
    "passage": "A 28-year-old elite squash player reports persistent lateral elbow pain for 4 months."
  },
  {
    "id": "t5-c-008",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 28-year-old elite squash player reports persistent lateral elbow pain for 4 months....",
    "difficulty": "analytical",
    "text": "What integrated physiotherapeutic treatment approach is indicated for this combined lateral elbow tendinopathy and radial nerve entrapment?",
    "options": [
      "Progressive eccentric wrist extensor loading (Tyler Twist) combined with radial nerve neurodynamic sliders/mobilizations and supinator myofascial release",
      "Complete arm casting for 6 months with absolute avoidance of all active elbow, wrist, or finger movement",
      "High-force passive wrist extension manipulation under general hospital anesthesia to break adhesions",
      "Application of hot paraffin wax packs over the forearm without any active therapeutic exercise"
    ],
    "correct": 0,
    "explanation": "Management addresses both the mechanical tendinopathy (eccentric-concentric loading) and neural entrapment (radial nerve mobilization/sliders, soft tissue release of the supinator/arcade of Frohse).",
    "passageId": "cs-44",
    "passage": "A 28-year-old elite squash player reports persistent lateral elbow pain for 4 months."
  },
  {
    "id": "t5-c-009",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old professional basketball guard presents with chronic ankle instability (CAI) ...",
    "difficulty": "analytical",
    "text": "Biomechanical evaluation reveals: Cumberland Ankle Instability Tool (CAIT) score = 16/30, severe peroneal reaction time delay, and dynamic postural instability on single-leg jump landing. Which targeted neuromuscular intervention protocol is supported by Level 1 evidence for reversing CAI deficits?",
    "options": [
      "Supervised progressive multi-directional balance and wobble-board training, perturbation drills, and dynamic functional agility cutting progressions",
      "Continuous passive calf stretching on a massage table for 6 months without active single-leg balance drills",
      "Complete immobilization in a rigid plastic fracture boot for 1 year to rest the ankle ligaments",
      "Applying ice packs to the lateral malleolus while resting in bed without any weight-bearing exercises"
    ],
    "correct": 0,
    "explanation": "High-level evidence (Donovan & Hertel, BJSM) confirms that multi-component neuromuscular balance training, unstable surface perturbation, and reactive agility drills restore sensorimotor control and prevent recurrent CAI sprains.",
    "passageId": "cs-45",
    "passage": "A 22-year-old professional basketball guard presents with chronic ankle instability (CAI) and frequent 'giving way' episodes."
  },
  {
    "id": "t5-c-010",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 22-year-old professional basketball guard presents with chronic ankle instability (CAI) ...",
    "difficulty": "analytical",
    "text": "In addition to balance training, what specific manual therapy joint mobilization restores posterior talar glide and improves dynamic dorsiflexion in chronic ankle instability?",
    "options": [
      "Mulligan Mobilization with Movement (posterior talar glide during active weight-bearing lunge)",
      "High-velocity manipulation into sudden inversion and plantarflexion on the couch",
      "Continuous passive mechanical traction of the hip joint in supine position",
      "Immobilization of the subtalar joint in a rigid fiberglass walking cast"
    ],
    "correct": 0,
    "explanation": "Talocrural MWM (posterior glide of talus on tibia during active lunging) addresses anterior talar positional faults common after lateral sprains, immediately improving dorsiflexion ROM and dynamic stability.",
    "passageId": "cs-45",
    "passage": "A 22-year-old professional basketball guard presents with chronic ankle instability (CAI) and frequent 'giving way' episodes."
  },
  {
    "id": "t5-c-011",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 11-year-old competitive junior tennis player reports bilateral posterior heel pain aggr...",
    "difficulty": "analytical",
    "text": "Examination reveals pain on the Calcaneal Squeeze test, tight Achilles tendon, and normal plain radiographs. In the context of long-term youth athlete development, what education should be provided to the athlete and parents regarding Sever's Disease?",
    "options": [
      "It is a benign, self-limiting traction apophysitis associated with rapid adolescent growth spurts that will resolve completely upon skeletal fusion of the calcaneal apophysis without long-term disability",
      "It is a malignant bone tumor requiring immediate surgical limb amputation to prevent systemic metastatic disease",
      "It causes permanent lifelong athletic disability and requires permanent sports retirement from all physical activities",
      "It requires immediate surgical drilling and excision of the calcaneus under general hospital anesthesia"
    ],
    "correct": 0,
    "explanation": "Parent/athlete reassurance is paramount: Sever's disease is self-limiting and resolves once the calcaneal apophysis fuses (~age 14–15), managed effectively with load management and heel cushions without long-term consequences.",
    "passageId": "cs-46",
    "passage": "An 11-year-old competitive junior tennis player reports bilateral posterior heel pain aggravated during match sprints."
  },
  {
    "id": "t5-c-012",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: An 11-year-old competitive junior tennis player reports bilateral posterior heel pain aggr...",
    "difficulty": "analytical",
    "text": "Which immediate footwear and biomechanical modifications provide rapid pain relief during sports activity in this young athlete with Sever's disease?",
    "options": [
      "Inserting shock-absorbing silicone heel cups or a 5–10 mm heel lift in sports shoes (to reduce tensile pull of the Achilles tendon on the apophysis) and avoiding barefoot running",
      "Forcing the child to run barefoot on hard asphalt concrete roads to stimulate rapid bone hardening and ossification",
      "Wearing heavy rigid steel-toed industrial safety work boots during all athletic tennis matches",
      "Applying high-dose corticosteroid injections directly into the subcalcaneal heel fat pad weekly"
    ],
    "correct": 0,
    "explanation": "Silicone heel cups or 5–10 mm heel lifts reduce tensile pull and traction stress from the Achilles tendon onto the healing calcaneal apophysis, providing immediate symptomatic relief during sports.",
    "passageId": "cs-46",
    "passage": "An 11-year-old competitive junior tennis player reports bilateral posterior heel pain aggravated during match sprints."
  },
  {
    "id": "t5-c-013",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old elite female cross-country runner presents with acute localized pain over th...",
    "difficulty": "analytical",
    "text": "Examination reveals pinpoint focal tenderness (<1 cm) and a palpable periosteal callus over the anterior tibial cortex. Tuning fork vibration testing is positive. What is the diagnosis?",
    "options": [
      "Diffuse Medial Tibial Stress Syndrome (MTSS) extending across the posteromedial border",
      "Anterior Tibial Cortex Stress Fracture ('The Dreaded Black Line' / High-Risk Bone Stress Injury)",
      "Acute deep vein thrombosis in the posterior compartment with calf swelling",
      "Gastrocnemius muscle belly grade I minor strain along the medial head"
    ],
    "correct": 1,
    "explanation": "Focal pinpoint tenderness and night pain over the anterior tibial cortex indicate an anterior cortex stress fracture—a 'high-risk' injury prone to non-union, delayed union, or complete catastrophic fracture due to tensile forces.",
    "passageId": "cs-47",
    "passage": "A 20-year-old elite female cross-country runner presents with acute localized pain over the anterior mid-shaft of the left tibia that is sharp, hurts during walking, and causes severe night pain."
  },
  {
    "id": "t5-c-014",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 20-year-old elite female cross-country runner presents with acute localized pain over th...",
    "difficulty": "analytical",
    "text": "Why is an anterior tibial cortex stress fracture classified as a 'high-risk' bone stress injury requiring strict non-weight-bearing protection or surgical intramedullary nailing?",
    "options": [
      "The anterior cortex is subject to constant tensile (bending) forces during running and has poor periosteal blood supply, resulting in high rates of non-union, delayed union, and complete transverse fracture",
      "It consistently causes acute bacterial infection and rupture of the popliteal femoral artery",
      "It heals completely within 24 hours without any necessity for medical precautions or activity modification",
      "It transforms the cortical tibial bone into fragile elastic cartilage within several days of loading"
    ],
    "correct": 0,
    "explanation": "The anterior tibial border is on the tension side of tibial bending moments and has poor vascular supply; failure to immobilize or surgically fix (intramedullary nail) frequently leads to non-union ('dreaded black line') and complete fracture.",
    "passageId": "cs-47",
    "passage": "A 20-year-old elite female cross-country runner presents with acute localized pain over the anterior mid-shaft of the left tibia that is sharp, hurts during walking, and causes severe night pain."
  },
  {
    "id": "t5-c-015",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old international soccer player is evaluated at 12 months post-ACL reconstructio...",
    "difficulty": "analytical",
    "text": "Objective testing shows: Quadriceps Limb Symmetry Index (LSI) = 96%, Hamstring LSI = 94%, Single Hop LSI = 95%, Triple Hop LSI = 97%, ACL-RSI score = 82/100, and 3D motion capture reveals symmetrical landing mechanics with zero dynamic knee valgus. According to current consensus guidelines, is this athlete ready for full unrestricted return to competitive match play?",
    "options": [
      "Yes, the athlete meets all physical, biomechanical, functional, and psychological criteria (LSI ≥90%, ACL-RSI >65%, symmetrical landing) and has completed sport-specific training without symptoms",
      "No, an athlete should never return to contact pivoting sports until at least 5 full years following knee surgery",
      "No, limb symmetry index must exceed 200% across all functional jump and hop testing batteries before clearance",
      "Yes, but only if all quadriceps and hamstring resistance exercises are permanently discontinued from training"
    ],
    "correct": 0,
    "explanation": "The athlete satisfies all rigorous consensus return-to-sport criteria (strength/hop LSI >90%, psychological readiness ACL-RSI >65%, biomechanical landing symmetry, and full sports-specific training completion).",
    "passageId": "cs-48",
    "passage": "A 23-year-old international soccer player is evaluated at 12 months post-ACL reconstruction."
  },
  {
    "id": "t5-c-016",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 23-year-old international soccer player is evaluated at 12 months post-ACL reconstructio...",
    "difficulty": "analytical",
    "text": "Why is completing a minimum of 9 to 12 months before returning to competitive pivoting match play strongly advocated post-ACL reconstruction, even if functional tests are passed earlier?",
    "options": [
      "Biological graft ligamentization, maturation, and biological re-innervation continue up to 12–24 months; returning prior to 9 months is associated with up to a 7-fold higher secondary ACL rupture rate",
      "Athletes forget all soccer tactical formations and strategy if they return to the field before 12 months",
      "Skeletal bone mineral density drops to absolute zero between 6 and 9 months post-reconstruction surgery",
      "World Anti-Doping Agency regulations strictly ban athletic participation within 12 months of orthopedic surgery"
    ],
    "correct": 0,
    "explanation": "Grindem et al. demonstrated that secondary ACL injury rates drop by 51% for each month return to sport is delayed until 9 months post-op; histological graft ligamentization and neuromuscular maturation require substantial biological time.",
    "passageId": "cs-48",
    "passage": "A 23-year-old international soccer player is evaluated at 12 months post-ACL reconstruction."
  },
  {
    "id": "t5-c-017",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: During real-time 3D motion analysis of a single-leg cut in a male handball player recoveri...",
    "difficulty": "analytical",
    "text": "What does this biomechanical profile indicate regarding ACL loading?",
    "options": [
      "The athlete demonstrates optimal force attenuation with minimal anterior cruciate ligament loading",
      "This combination (high knee valgus moment, hip internal rotation, and shallow knee flexion landing) produces high peak tensile strain on the ACL and represents an extreme injury risk mechanism",
      "The athlete has zero mechanical ground reaction force passing through the knee joint during the cut",
      "Shallow knee flexion landings completely protect the cruciate ligaments from mechanical strain"
    ],
    "correct": 1,
    "explanation": "The classic non-contact ACL injury mechanism involves shallow knee flexion (<20–30°), dynamic knee valgus moment, and internal hip rotation/tibial external rotation, generating massive peak ACL tensile strain.",
    "passageId": "cs-49",
    "passage": "During real-time 3D motion analysis of a single-leg cut in a male handball player recovering from knee injury, the analyst measures an external knee abduction (valgus) moment of 1.8 Nm/kg, accompanied by 25° of internal hip rotation and reduced knee flexion (15° landing)."
  },
  {
    "id": "t5-c-018",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: During real-time 3D motion analysis of a single-leg cut in a male handball player recoveri...",
    "difficulty": "analytical",
    "text": "What specific neuromuscular feedback intervention (e.g., using video playback or real-time visual feedback) is most effective to modify this athlete's cutting mechanics?",
    "options": [
      "Video self-modeling feedback and augmented external focus cues encouraging deeper knee flexion (>30°–45°), neutral knee alignment over the 2nd toe, and softer ground landings",
      "Instructing the athlete to keep the knee completely straight and stiff upon ground impact to absorb force",
      "Applying ice packs to the knee while walking backwards on a flat running track without coaching cues",
      "Completely immobilizing the ankle in 90 degrees of plantarflexion using a rigid plastic cast"
    ],
    "correct": 0,
    "explanation": "Video feedback and external attentional cues ('land softly', 'bend knees deeper', 'point knee over shoe laces') successfully alter motor programs, increasing knee flexion and reducing peak valgus moments during high-speed cutting.",
    "passageId": "cs-49",
    "passage": "During real-time 3D motion analysis of a single-leg cut in a male handball player recovering from knee injury, the analyst measures an external knee abduction (valgus) moment of 1.8 Nm/kg, accompanied by 25° of internal hip rotation and reduced knee flexion (15° landing)."
  },
  {
    "id": "t5-c-019",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 17-year-old junior cricket fast bowler experiences acute low back pain during an intensi...",
    "difficulty": "analytical",
    "text": "Single-leg hyperextension test on the left leg is painful. MRI (T2-weighted/STIR sequence) reveals high signal (bone marrow edema) in the left L4 pars interarticularis without a complete cortical fracture line. What is the clinical diagnosis and bone stress staging?",
    "options": [
      "Chronic ununited spondylolytic non-union with sclerotic bone margins and pseudoarthrosis",
      "Early/Active (Grade I) Pre-Fracture Spondylolysis (Stress Reaction of the Pars Interarticularis)",
      "Degenerative spondylolisthesis with Meyerding Grade IV anterior vertebral slip",
      "Thoracic Scheuermann's disease with anterior vertebral wedging and kyphosis"
    ],
    "correct": 1,
    "explanation": "MRI STIR hyperintensity (bone marrow edema) in the pars without a frank cortical fracture line represents active early-stage pars stress reaction (pre-fracture spondylolysis), which has the highest potential for complete bony healing if rested early.",
    "passageId": "cs-50",
    "passage": "A 17-year-old junior cricket fast bowler experiences acute low back pain during an intensive bowling camp."
  },
  {
    "id": "t5-c-020",
    "section": "C",
    "topic": "sports physiotherapy and case study analysis",
    "subtopic": "Case study: A 17-year-old junior cricket fast bowler experiences acute low back pain during an intensi...",
    "difficulty": "analytical",
    "text": "What is the optimal management and return-to-bowling timeline for this young fast bowler to achieve complete bony healing and prevent progression to non-union?",
    "options": [
      "Relative rest from all fast bowling and lumbar hyperextension for 8 to 12 weeks, deep core/trunk stabilization in neutral spine, followed by technical bowling action correction and progressive bowling workload reintroduction",
      "Immediate return to bowling 100 overs per week with heavy spinal hyperextension stretching on the pitch",
      "Immediate posterior lumbar spinal fusion surgery with pedicle screws and rods within 24 hours of diagnosis",
      "Permanent total bed rest for 5 consecutive years in a rigid full-body fiberglass cast"
    ],
    "correct": 0,
    "explanation": "Early-stage active pars lesions heal with high rates (up to 90–100%) under strict relative rest from bowling (typically 8–12 weeks), neutral spine stabilization (multifidus/transversus), biomechanical bowling action remediation (reducing mixed action / hyperextension), and gradual graded return.",
    "passageId": "cs-50",
    "passage": "A 17-year-old junior cricket fast bowler experiences acute low back pain during an intensive bowling camp."
  }
];
