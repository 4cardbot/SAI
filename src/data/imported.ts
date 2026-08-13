import type { Question } from "../types";

/**
 * Imported from the supplied 1.txt and 2.txt question banks.
 * The first eight A questions in 1.txt are general awareness (A2);
 * the remaining A questions are basic sports science (A1).
 */
export const IMPORTED_QUESTION_BANK: Question[] = [
  {
    "id": "source-1-a2-001",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which organization is primarily responsible for the implementation of the Target Olympic Podium Scheme (TOPS)?",
    "options": [
      "Indian Olympic Association (IOA)",
      "Sports Authority of India (SAI)",
      "National Anti-Doping Agency (NADA)",
      "Ministry of Health"
    ],
    "correct": 1,
    "explanation": "SAI implements the TOPS scheme, which aims to identify and support potential Olympic medal winners.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a2-002",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Under WADA guidelines, if an athlete requires a prohibited medication for a legitimate medical condition, they must apply for:",
    "options": [
      "TUE (Therapeutic Use Exemption)",
      "MRE (Medical Requirement Exception)",
      "WADA Medical Clearance",
      "NADA Special Pass"
    ],
    "correct": 0,
    "explanation": "A Therapeutic Use Exemption (TUE) allows athletes to use prohibited substances for valid medical reasons.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a2-003",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "The primary objective of the 'Khelo India' scheme is to:",
    "options": [
      "Provide pensions to retired athletes",
      "Revive sports culture at the grassroots level",
      "Construct international stadiums abroad",
      "Privatize sports coaching"
    ],
    "correct": 1,
    "explanation": "Khelo India aims at mainstreaming sports as a tool for national development and reviving grassroots sports.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a2-004",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Who was the first Indian woman to win an Olympic medal?",
    "options": [
      "P.T. Usha",
      "Mary Kom",
      "Karnam Malleswari",
      "Saina Nehwal"
    ],
    "correct": 2,
    "explanation": "Karnam Malleswari won a bronze medal in weightlifting at the 2000 Sydney Olympics.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a2-005",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which of the following acts as the supreme authority for anti-doping regulations globally?",
    "options": [
      "CAS (Court of Arbitration for Sport)",
      "IOC (International Olympic Committee)",
      "WADA (World Anti-Doping Agency)",
      "WHO (World Health Organization)"
    ],
    "correct": 2,
    "explanation": "WADA is the independent international agency leading a collaborative worldwide movement for doping-free sport.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a2-006",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "The National Sports Day in India is celebrated to commemorate the birth anniversary of:",
    "options": [
      "Milkha Singh",
      "Major Dhyan Chand",
      "C.K. Nayudu",
      "K.D. Jadhav"
    ],
    "correct": 1,
    "explanation": "National Sports Day is celebrated on August 29th, the birthday of hockey legend Major Dhyan Chand.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a2-007",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which code governs the ethical and administrative operations of National Sports Federations in India?",
    "options": [
      "SAI Administrative Act",
      "Indian Sports Ethics Code",
      "National Sports Development Code of India",
      "Olympic Charter"
    ],
    "correct": 2,
    "explanation": "The National Sports Development Code of India governs the functioning of NSFs.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a2-008",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "In the context of the Asian Games, which body is responsible for organizing the event?",
    "options": [
      "IOC",
      "OCA (Olympic Council of Asia)",
      "CGF (Commonwealth Games Federation)",
      "SAI"
    ],
    "correct": 1,
    "explanation": "The Olympic Council of Asia (OCA) is the governing body of sports in Asia and organizes the Asian Games.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-1-a1-009",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During high-intensity exercise, the primary cause of fatigue is often attributed to:",
    "options": [
      "Depletion of intramuscular triglycerides",
      "Accumulation of hydrogen ions (H+)",
      "Depletion of blood glucose",
      "Increase in ATP stores"
    ],
    "correct": 1,
    "explanation": "The accumulation of H+ ions decreases muscle pH, which interferes with enzyme activity and muscle contraction, causing fatigue."
  },
  {
    "id": "source-1-a1-010",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which somatotype is characterized by a predominance of muscle and bone mass?",
    "options": [
      "Ectomorph",
      "Endomorph",
      "Mesomorph",
      "Somatomorph"
    ],
    "correct": 2,
    "explanation": "Mesomorphy refers to relative musculoskeletal robustness."
  },
  {
    "id": "source-1-a1-011",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "The 'Size Principle' of motor unit recruitment states that:",
    "options": [
      "Large motor units are recruited first",
      "Small motor units are recruited first",
      "Recruitment is random based on load",
      "Fast-twitch fibers are always recruited before slow-twitch"
    ],
    "correct": 1,
    "explanation": "Henneman's Size Principle states that smaller, lower-threshold motor units are recruited before larger, higher-threshold ones."
  },
  {
    "id": "source-1-a1-012",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In biomechanics, the 'ground reaction force' experienced during running is an application of which law?",
    "options": [
      "Newton's First Law",
      "Newton's Second Law",
      "Newton's Third Law",
      "Law of Conservation of Momentum"
    ],
    "correct": 2,
    "explanation": "Newton's Third Law (Action-Reaction) explains that the ground pushes back with equal and opposite force to the foot strike."
  },
  {
    "id": "source-1-a1-013",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which metabolic system provides the most rapid supply of ATP for brief, explosive movements?",
    "options": [
      "Oxidative Phosphorylation",
      "Anaerobic Glycolysis",
      "ATP-PC (Phosphagen) system",
      "Beta-oxidation"
    ],
    "correct": 2,
    "explanation": "The ATP-PC system provides immediate energy for high-intensity, short-duration activities."
  },
  {
    "id": "source-1-a1-014",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Excess Post-exercise Oxygen Consumption (EPOC) is primarily responsible for:",
    "options": [
      "Increasing lactic acid production",
      "Restoring ATP/PC stores and clearing metabolites",
      "Decreasing core body temperature",
      "Reducing heart rate variability"
    ],
    "correct": 1,
    "explanation": "EPOC represents the oxygen required to restore the body to its resting state, including replenishing ATP-PC and clearing lactate."
  },
  {
    "id": "source-1-a1-015",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to the Inverted-U hypothesis in sports psychology, optimal performance occurs at:",
    "options": [
      "Zero arousal",
      "Moderate arousal",
      "Maximum arousal",
      "Varies entirely based on the referee"
    ],
    "correct": 1,
    "explanation": "The Inverted-U theory suggests that performance peaks at a moderate level of arousal."
  },
  {
    "id": "source-1-a1-016",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which vitamin is synthesized in the skin upon exposure to sunlight and is crucial for bone health?",
    "options": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ],
    "correct": 2,
    "explanation": "Vitamin D is synthesized via UV exposure and is essential for calcium absorption and bone health."
  },
  {
    "id": "source-1-a1-017",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "A test's ability to consistently yield the same results upon repeated administration is known as its:",
    "options": [
      "Validity",
      "Reliability",
      "Sensitivity",
      "Specificity"
    ],
    "correct": 1,
    "explanation": "Reliability refers to the consistency or repeatability of a measure."
  },
  {
    "id": "source-1-a1-018",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which of the following is an internal load monitoring metric?",
    "options": [
      "GPS total distance",
      "Heart Rate (HR) Response",
      "Power output in Watts",
      "Barbell velocity"
    ],
    "correct": 1,
    "explanation": "Internal load refers to the physiological/psychological stress on the athlete (e.g., HR, RPE), whereas external load is the physical work done."
  },
  {
    "id": "source-1-a1-019",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Relative Energy Deficiency in Sport (RED-S) is primarily caused by:",
    "options": [
      "Excessive carbohydrate intake",
      "Low energy availability",
      "High altitude training",
      "Overtraining without sleep"
    ],
    "correct": 1,
    "explanation": "RED-S occurs when dietary energy intake is insufficient to support the energy expended for health and daily living after the cost of exercise is subtracted."
  },
  {
    "id": "source-1-a1-020",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In statistical analysis, a p-value of < 0.05 generally indicates:",
    "options": [
      "The results are practically significant",
      "The null hypothesis should be accepted",
      "The results are statistically significant",
      "A strong correlation exists"
    ],
    "correct": 2,
    "explanation": "A p-value < 0.05 indicates strong evidence against the null hypothesis, meaning the result is statistically significant."
  },
  {
    "id": "source-1-a1-021",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which physiological adaptation is most characteristic of chronic aerobic endurance training?",
    "options": [
      "Muscle hypertrophy",
      "Decreased mitochondrial density",
      "Increased capillary density",
      "Decreased stroke volume"
    ],
    "correct": 2,
    "explanation": "Aerobic training increases capillary density, enhancing oxygen delivery to working muscles."
  },
  {
    "id": "source-1-a1-022",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary function of the muscle spindle?",
    "options": [
      "To detect changes in muscle tension",
      "To detect changes in muscle length and the rate of change",
      "To initiate conscious voluntary movement",
      "To store elastic energy"
    ],
    "correct": 1,
    "explanation": "Muscle spindles are proprioceptors that sense muscle length and the speed of lengthening, triggering the stretch reflex."
  },
  {
    "id": "source-1-a1-023",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In a lever system, when the resistance is located between the fulcrum and the applied force, it is a:",
    "options": [
      "First-class lever",
      "Second-class lever",
      "Third-class lever",
      "Fourth-class lever"
    ],
    "correct": 1,
    "explanation": "A second-class lever has the resistance (load) in the middle (e.g., calf raise)."
  },
  {
    "id": "source-1-a1-024",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Delayed Onset Muscle Soreness (DOMS) is primarily associated with which type of muscle contraction?",
    "options": [
      "Concentric",
      "Eccentric",
      "Isometric",
      "Isokinetic"
    ],
    "correct": 1,
    "explanation": "DOMS is most strongly linked to the microtrauma caused by unaccustomed eccentric (lengthening) muscle contractions."
  },
  {
    "id": "source-1-a1-025",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "The principle of 'Specificity' in sports training dictates that:",
    "options": [
      "Training load must progressively increase",
      "Adaptations are specific to the nature of the stimulus applied",
      "Training should include a variety of sports",
      "Fitness is lost when training ceases"
    ],
    "correct": 1,
    "explanation": "Specificity (SAID principle) means the body adapts specifically to the type of demand placed on it."
  },
  {
    "id": "source-1-a1-026",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which component of body composition assessment uses a small electrical current?",
    "options": [
      "DEXA",
      "Skinfold Calipers",
      "Hydrostatic Weighing",
      "Bioelectrical Impedance Analysis (BIA)"
    ],
    "correct": 3,
    "explanation": "BIA measures the resistance of body tissues to a low-level electrical current to estimate body composition."
  },
  {
    "id": "source-1-a1-027",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In sports psychology, the 'Self-Determination Theory' emphasizes three basic psychological needs:",
    "options": [
      "Autonomy, Competence, Relatedness",
      "Power, Affiliation, Achievement",
      "Arousal, Anxiety, Stress",
      "Motivation, Emotion, Cognition"
    ],
    "correct": 0,
    "explanation": "SDT posits that humans require autonomy, competence, and relatedness for optimal psychological growth and intrinsic motivation."
  },
  {
    "id": "source-1-a1-028",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "For a strength and conditioning coach, 'Periodization' refers to:",
    "options": [
      "Using rest periods during a set",
      "The systematic manipulation of training variables over time",
      "Testing athletes periodically",
      "Focusing only on the competition phase"
    ],
    "correct": 1,
    "explanation": "Periodization is the planned, systematic variation of training specificity, intensity, and volume."
  },
  {
    "id": "source-1-a1-029",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which of the following is a passive recovery technique?",
    "options": [
      "Light jogging",
      "Static stretching",
      "Cold water immersion",
      "Dynamic mobility exercises"
    ],
    "correct": 2,
    "explanation": "Passive recovery involves external methods or complete rest, like cold water immersion or massage, requiring no metabolic work."
  },
  {
    "id": "source-1-a1-030",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "The primary biomechanical purpose of the patella is to:",
    "options": [
      "Increase the moment arm of the quadriceps muscle group",
      "Protect the cruciate ligaments",
      "Provide a shock-absorbing cushion",
      "Restrict knee hyperextension"
    ],
    "correct": 0,
    "explanation": "The patella acts as a pulley, increasing the mechanical advantage (moment arm) of the quadriceps."
  },
  {
    "id": "source-1-a1-031",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to WADA, which of the following substances is strictly prohibited in-competition but may be permitted out-of-competition?",
    "options": [
      "Anabolic steroids",
      "Peptide hormones",
      "Stimulants (e.g., Ephedrine)",
      "Diuretics"
    ],
    "correct": 2,
    "explanation": "Many stimulants are only prohibited 'in-competition' as per the WADA prohibited list."
  },
  {
    "id": "source-1-a1-032",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "VO2 max is best defined as:",
    "options": [
      "The maximum volume of air exhaled in one breath",
      "The maximum rate of oxygen consumption during incremental exercise",
      "The heart's maximum stroke volume",
      "The point where lactate begins to accumulate"
    ],
    "correct": 1,
    "explanation": "VO2 max reflects the maximum capacity of the body to transport and utilize oxygen."
  },
  {
    "id": "source-1-a1-033",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which ergogenic aid is scientifically proven to enhance high-intensity, short-duration exercise by buffering hydrogen ions?",
    "options": [
      "Caffeine",
      "Creatine Monohydrate",
      "Beta-alanine",
      "L-carnitine"
    ],
    "correct": 2,
    "explanation": "Beta-alanine increases intramuscular carnosine, which acts as a buffer against H+ accumulation."
  },
  {
    "id": "source-1-a1-034",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What does a 'false positive' in an injury screening test imply?",
    "options": [
      "The test correctly identifies an uninjured athlete",
      "The test indicates an injury risk, but the athlete is actually at low risk",
      "The test misses an athlete who is at high risk",
      "The test is highly reliable"
    ],
    "correct": 1,
    "explanation": "A false positive incorrectly flags a healthy or low-risk individual as being at risk or injured."
  },
  {
    "id": "source-1-a1-035",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which type of research design follows a group of individuals over a long period to observe outcomes?",
    "options": [
      "Cross-sectional study",
      "Case-control study",
      "Longitudinal cohort study",
      "Randomized controlled trial"
    ],
    "correct": 2,
    "explanation": "Longitudinal cohort studies track the same subjects over time."
  },
  {
    "id": "source-1-a1-036",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "The physiological mechanism responsible for heat loss via sweat evaporation is highly dependent on:",
    "options": [
      "Air temperature",
      "Relative humidity",
      "Wind speed",
      "Solar radiation"
    ],
    "correct": 1,
    "explanation": "High relative humidity decreases the vapor pressure gradient, significantly impairing the evaporation of sweat."
  },
  {
    "id": "source-1-a1-037",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In sports biomechanics, a 'force plate' primarily measures:",
    "options": [
      "Joint kinematics",
      "Muscle electrical activity",
      "Ground reaction forces in three dimensions",
      "Air resistance"
    ],
    "correct": 2,
    "explanation": "Force plates measure the kinetic parameters of movement, specifically the ground reaction forces."
  },
  {
    "id": "source-1-a1-038",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which breathing technique in Yoga (Pranayama) is specifically recognized for stimulating the sympathetic nervous system and increasing alertness?",
    "options": [
      "Anulom Vilom (Alternate nostril breathing)",
      "Bhramari (Humming bee breath)",
      "Kapalabhati (Skull shining breath)",
      "Shitali (Cooling breath)"
    ],
    "correct": 2,
    "explanation": "Kapalabhati involves forceful exhalations that stimulate the nervous system and increase alertness."
  },
  {
    "id": "source-1-a1-039",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "The 'Overtraining Syndrome' (OTS) is characterized by:",
    "options": [
      "A short-term decrease in performance resolving in days",
      "A prolonged maladaptation leading to long-term performance decrements",
      "An acute muscle strain",
      "Positive physiological adaptations to heavy load"
    ],
    "correct": 1,
    "explanation": "OTS is a severe, long-term condition requiring months of recovery, distinct from short-term overreaching."
  },
  {
    "id": "source-1-a1-040",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "When travelling across multiple time zones, athletes experience 'jet lag' primarily due to a disruption of their:",
    "options": [
      "Endocrine system",
      "Circadian rhythms",
      "Digestive enzymes",
      "Vestibular system"
    ],
    "correct": 1,
    "explanation": "Jet lag is the physiological disruption of the body's internal 24-hour clock (circadian rhythm)."
  },
  {
    "id": "source-1-b-041",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In the management of acute lateral ankle sprains, which mobilization technique is most appropriate in the early sub-acute phase to restore dorsiflexion?",
    "options": [
      "Anterior glide of the talus",
      "Posterior glide of the talus",
      "Medial glide of the calcaneus",
      "Distal distraction of the fibula"
    ],
    "correct": 1,
    "explanation": "A posterior glide of the talus on the tibia is arthrokinematically required to restore limited ankle dorsiflexion."
  },
  {
    "id": "source-1-b-042",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A volleyball player presents with anterior shoulder pain. The 'Empty Can' (Jobe's) test is positive. Which tendon is primarily implicated?",
    "options": [
      "Subscapularis",
      "Infraspinatus",
      "Supraspinatus",
      "Teres Minor"
    ],
    "correct": 2,
    "explanation": "The Empty Can test specifically isolates the supraspinatus muscle/tendon."
  },
  {
    "id": "source-1-b-043",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During the swing phase of the gait cycle, excessive plantarflexion (foot drop) is typically due to weakness in the:",
    "options": [
      "Gastrocnemius",
      "Tibialis Anterior",
      "Soleus",
      "Peroneus Longus"
    ],
    "correct": 1,
    "explanation": "The tibialis anterior acts concentrically to dorsiflex the foot for ground clearance during swing."
  },
  {
    "id": "source-1-b-044",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which of the following electrotherapy modalities uses a medium frequency alternating current to overcome skin impedance and produce a low frequency beat deep in the tissues?",
    "options": [
      "TENS",
      "Interferential Therapy (IFT)",
      "Short Wave Diathermy",
      "Russian Current"
    ],
    "correct": 1,
    "explanation": "IFT crosses two medium frequency currents to create a low frequency 'beat' deep in the tissue, minimizing skin resistance."
  },
  {
    "id": "source-1-b-045",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A post-operative ACL reconstruction patient (patellar tendon autograft) is at week 4. Which exercise is generally CONTRAINDICATED at this stage?",
    "options": [
      "Closed kinetic chain mini-squats (0-45 deg)",
      "Open kinetic chain knee extensions (90-0 deg)",
      "Stationary cycling",
      "Patellar mobilizations"
    ],
    "correct": 1,
    "explanation": "Unrestricted OKC knee extensions put excessive shear force on the healing ACL graft in the early post-op phase."
  },
  {
    "id": "source-1-b-046",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In Proprioceptive Neuromuscular Facilitation (PNF), the 'Hold-Relax' technique utilizes which neurophysiological principle to increase ROM?",
    "options": [
      "Autogenic inhibition",
      "Reciprocal inhibition",
      "Stretch reflex",
      "Crossed extensor reflex"
    ],
    "correct": 0,
    "explanation": "Hold-Relax uses an isometric contraction of the tight muscle, stimulating the Golgi Tendon Organ to induce autogenic inhibition and relax the muscle."
  },
  {
    "id": "source-1-b-047",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A runner complains of lateral knee pain that worsens downhill. The Ober's test is positive. The most likely diagnosis is:",
    "options": [
      "Patellar tendinopathy",
      "IT Band Friction Syndrome",
      "Medial meniscus tear",
      "Pes anserine bursitis"
    ],
    "correct": 1,
    "explanation": "Iliotibial (IT) Band syndrome presents with lateral knee pain, often provoked by downhill running, and tightness is assessed via Ober's test."
  },
  {
    "id": "source-1-b-048",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Therapeutic ultrasound applied at a frequency of 3 MHz is most appropriate for targeting which structures?",
    "options": [
      "Deep muscles like the piriformis",
      "Superficial structures like the lateral epicondyle",
      "Deep joint capsules like the hip",
      "Bone fractures exclusively"
    ],
    "correct": 1,
    "explanation": "3 MHz ultrasound is absorbed rapidly and targets superficial tissues (1-2 cm deep), whereas 1 MHz targets deeper tissues (up to 5 cm)."
  },
  {
    "id": "source-1-b-049",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which clinical test is considered the gold standard and most sensitive for diagnosing an acute Anterior Cruciate Ligament (ACL) rupture?",
    "options": [
      "Anterior Drawer Test",
      "McMurray's Test",
      "Lachman Test",
      "Apley's Compression Test"
    ],
    "correct": 2,
    "explanation": "The Lachman test (at 20-30 degrees of knee flexion) is the most sensitive and specific clinical test for ACL tears."
  },
  {
    "id": "source-1-b-050",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In sports biomechanics, a 'Closed Kinetic Chain' (CKC) exercise is characterized by:",
    "options": [
      "The distal segment moving freely in space",
      "The distal segment being fixed or meeting considerable resistance",
      "Isolation of a single joint",
      "Always requiring a machine"
    ],
    "correct": 1,
    "explanation": "In CKC exercises (like squats or push-ups), the distal segment (foot/hand) is fixed against a surface."
  },
  {
    "id": "source-1-b-051",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A patient with Medial Tibial Stress Syndrome (MTSS) typically exhibits tenderness:",
    "options": [
      "Along the anterior lateral border of the tibia",
      "Along the distal two-thirds of the posteromedial border of the tibia",
      "Directly on the tibial tuberosity",
      "At the medial malleolus only"
    ],
    "correct": 1,
    "explanation": "MTSS (shin splints) is characterized by diffuse tenderness along the posteromedial tibial border."
  },
  {
    "id": "source-1-b-052",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The primary rationale for utilizing eccentric exercise protocols (e.g., Alfredson protocol) in the management of Achilles tendinopathy is to:",
    "options": [
      "Decrease blood flow to the tendon",
      "Promote collagen fiber cross-linking and tendon remodeling",
      "Increase inflammation to speed healing",
      "Induce complete rest of the calf complex"
    ],
    "correct": 1,
    "explanation": "Controlled eccentric loading promotes collagen synthesis and structural remodeling of the degenerated tendon."
  },
  {
    "id": "source-1-b-053",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During an isokinetic evaluation of the knee, a normal Hamstring-to-Quadriceps (H:Q) peak torque ratio at 60 deg/sec is approximately:",
    "options": [
      "0.3 - 0.4",
      "0.5 - 0.7",
      "0.8 - 1.0",
      "1.2 - 1.5"
    ],
    "correct": 1,
    "explanation": "A standard, healthy H:Q ratio is typically between 50% and 70% (0.5 - 0.7)."
  },
  {
    "id": "source-1-b-054",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which manual therapy concept emphasizes the use of 'mobilization with movement' (MWM)?",
    "options": [
      "Maitland",
      "Cyriax",
      "Mulligan",
      "McKenzie"
    ],
    "correct": 2,
    "explanation": "Brian Mulligan's concept involves applying a sustained accessory glide while the patient performs the active movement."
  },
  {
    "id": "source-1-b-055",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A boxer presents with numbness in the 4th and 5th digits and weakness in hand intrinsic muscles. Which nerve is most likely compressed?",
    "options": [
      "Median nerve",
      "Radial nerve",
      "Ulnar nerve",
      "Musculocutaneous nerve"
    ],
    "correct": 2,
    "explanation": "The Ulnar nerve innervates the 4th/5th digits and most intrinsic hand muscles; compression (e.g., at Guyon's canal or cubital tunnel) causes these symptoms."
  },
  {
    "id": "source-1-b-056",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "To selectively stretch the Soleus muscle rather than the Gastrocnemius, the physiotherapist should position the patient's knee in:",
    "options": [
      "Full extension",
      "Flexion",
      "Hyperextension",
      "Valgus stress"
    ],
    "correct": 1,
    "explanation": "Because the gastrocnemius crosses the knee joint, flexing the knee puts it on slack, allowing isolation of the single-joint soleus."
  },
  {
    "id": "source-1-b-057",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In the context of sports concussions, which of the following is NOT a component of the SCAT5 assessment?",
    "options": [
      "Cognitive screening (Maddocks questions)",
      "Neurological screen",
      "Isokinetic neck strength testing",
      "Symptom evaluation"
    ],
    "correct": 2,
    "explanation": "SCAT5 assesses symptoms, cognition, balance, and cranial nerves, but does not involve isokinetic strength testing."
  },
  {
    "id": "source-1-b-058",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The 'Q-angle' is measured between lines drawn from the ASIS to the center of the patella, and from the:",
    "options": [
      "Center of the patella to the tibial tuberosity",
      "Greater trochanter to the lateral condyle",
      "Anterior inferior iliac spine to the fibular head",
      "Center of patella to medial malleolus"
    ],
    "correct": 0,
    "explanation": "The Q-angle assesses the lateral pull on the patella, measured from ASIS-to-patella and patella-to-tibial tuberosity."
  },
  {
    "id": "source-1-b-059",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A tennis player exhibits Glenohumeral Internal Rotation Deficit (GIRD). This is most commonly associated with:",
    "options": [
      "Anterior capsular laxity",
      "Posterior capsular contracture",
      "Subscapularis tear",
      "Acromioclavicular separation"
    ],
    "correct": 1,
    "explanation": "GIRD in overhead athletes is typically driven by a thickened, contracted posterior capsule and posterior rotator cuff tightness."
  },
  {
    "id": "source-1-b-060",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which characteristic differentiates a 'Grade II' muscle strain from a 'Grade I'?",
    "options": [
      "No pain on active contraction",
      "Complete rupture of the muscle",
      "Palpable defect and significant loss of strength",
      "Minor pain with no strength loss"
    ],
    "correct": 2,
    "explanation": "Grade II involves partial tearing, a palpable defect, pain, and a noticeable loss of strength, whereas Grade I is micro-tearing with minimal strength loss."
  },
  {
    "id": "source-1-b-061",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During plyometric training, the 'amortization phase' refers to:",
    "options": [
      "The final concentric contraction",
      "The initial eccentric stretching",
      "The transition time between the eccentric and concentric phases",
      "The resting period between sets"
    ],
    "correct": 2,
    "explanation": "Amortization is the brief pause between eccentric loading and concentric firing; a shorter phase yields greater power."
  },
  {
    "id": "source-1-b-062",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which physical agent is absolutely contraindicated over the abdomen of a pregnant athlete?",
    "options": [
      "Cryotherapy",
      "TENS for ankle pain",
      "Short Wave Diathermy (SWD)",
      "Kinesio taping"
    ],
    "correct": 2,
    "explanation": "Deep heating modalities like SWD and therapeutic ultrasound are strictly contraindicated over the pelvic/abdominal region during pregnancy."
  },
  {
    "id": "source-1-b-063",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The 'Thomas Test' is primarily used to assess tightness in which muscle group?",
    "options": [
      "Hamstrings",
      "Hip flexors (Iliopsoas/Rectus Femoris)",
      "Gluteus Maximus",
      "Piriformis"
    ],
    "correct": 1,
    "explanation": "The Thomas test assesses hip flexion contractures. The extended leg lifting off the table indicates tight hip flexors."
  },
  {
    "id": "source-1-b-064",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which biomechanical fault is most likely to predispose a female athlete to non-contact ACL injuries?",
    "options": [
      "Excessive hip external rotation",
      "Increased dynamic knee valgus upon landing",
      "Decreased Q-angle",
      "Excessive ankle dorsiflexion"
    ],
    "correct": 1,
    "explanation": "Dynamic knee valgus (hip adduction/internal rotation and knee abduction) heavily loads the ACL during deceleration/landing."
  },
  {
    "id": "source-1-b-065",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "When performing joint mobilizations, a 'Grade III' Maitland mobilization is defined as:",
    "options": [
      "Small amplitude at the beginning of ROM",
      "Large amplitude reaching the limit of ROM",
      "Small amplitude at the limit of ROM",
      "High-velocity low-amplitude thrust"
    ],
    "correct": 1,
    "explanation": "Grade III is a large amplitude rhythmic oscillation performed up to the limit of the available range of motion."
  },
  {
    "id": "source-1-b-066",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary physiological effect of Cryotherapy applied immediately post-injury?",
    "options": [
      "Vasodilation",
      "Increased cellular metabolism",
      "Vasoconstriction and decreased nerve conduction velocity",
      "Increased leukocyte infiltration"
    ],
    "correct": 2,
    "explanation": "Ice induces vasoconstriction, reduces metabolic demand, and slows nerve conduction to mitigate pain and secondary hypoxic injury."
  },
  {
    "id": "source-1-b-067",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A gymnast suffers from 'Spondylolysis'. This condition represents a defect or stress fracture in the:",
    "options": [
      "Spinous process",
      "Pars interarticularis",
      "Vertebral body",
      "Transverse process"
    ],
    "correct": 1,
    "explanation": "Spondylolysis is a defect in the pars interarticularis, common in sports requiring repetitive spinal hyperextension."
  },
  {
    "id": "source-1-b-068",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which statement regarding High Voltage Pulsed Current (HVPC) in wound healing/edema management is correct?",
    "options": [
      "It utilizes a continuous direct current",
      "The cathode is typically placed over the injury in the acute phase to repel proteins",
      "It generates deep thermal effects",
      "It requires frequencies above 1 MHz"
    ],
    "correct": 1,
    "explanation": "In acute edema, cathode (negative) placement over the injury site repels negatively charged plasma proteins (albumin), reducing fluid accumulation."
  },
  {
    "id": "source-1-b-069",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The 'Scaption' plane, ideal for rehabilitating the supraspinatus, is situated approximately:",
    "options": [
      "0 degrees to the coronal plane",
      "90 degrees to the coronal plane (sagittal plane)",
      "30-45 degrees anterior to the coronal plane",
      "60 degrees posterior to the coronal plane"
    ],
    "correct": 2,
    "explanation": "The plane of the scapula (scaption) is roughly 30-45 degrees forward of the coronal plane, providing optimal length-tension for the rotator cuff."
  },
  {
    "id": "source-1-b-070",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which specialized mechanoreceptor is highly concentrated in joint capsules and detects extremes of joint motion?",
    "options": [
      "Golgi Tendon Organs",
      "Ruffini endings",
      "Meissner's corpuscles",
      "Merkel discs"
    ],
    "correct": 1,
    "explanation": "Ruffini endings (and Pacinian corpuscles) in the joint capsule respond to mechanical deformation, acting as limit detectors."
  },
  {
    "id": "source-1-b-071",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A 'SLAP' lesion in the shoulder involves tearing of the:",
    "options": [
      "Superior Labrum Anterior to Posterior",
      "Subscapularis Ligament And Pectoralis",
      "Superior Ligament of Acromion Process",
      "Supraspinatus, Long head of biceps, And Posterior capsule"
    ],
    "correct": 0,
    "explanation": "SLAP stands for Superior Labrum Anterior to Posterior, involving the attachment of the long head of the biceps."
  },
  {
    "id": "source-1-b-072",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The primary mechanism behind the analgesic effect of Conventional TENS (High frequency, Low intensity) is explained by:",
    "options": [
      "Endorphin release",
      "The Gate Control Theory",
      "Placebo effect solely",
      "Peripheral nerve block"
    ],
    "correct": 1,
    "explanation": "Conventional TENS stimulates A-beta fibers, which inhibit nociceptive transmission (A-delta and C fibers) at the spinal cord level (Gate Control)."
  },
  {
    "id": "source-1-b-073",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In a patient with 'Drop Arm' sign, which muscle is most critically compromised?",
    "options": [
      "Deltoid",
      "Pectoralis Major",
      "Supraspinatus",
      "Latissimus Dorsi"
    ],
    "correct": 2,
    "explanation": "The Drop Arm test identifies massive full-thickness tears of the rotator cuff, predominantly the supraspinatus."
  },
  {
    "id": "source-1-b-074",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During early phase rehab for a meniscus repair (sutured), which activity is typically restricted to protect the repair?",
    "options": [
      "Straight leg raises",
      "Weight-bearing deep knee flexion past 90 degrees",
      "Patellar mobilizations",
      "Isometric quad sets"
    ],
    "correct": 1,
    "explanation": "Deep knee flexion under load dramatically increases compressive and shear forces on the posterior horns of the menisci."
  },
  {
    "id": "source-1-b-075",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The 'Windlass Mechanism' of the foot is crucial for:",
    "options": [
      "Absorbing shock during heel strike",
      "Raising the medial longitudinal arch during propulsion (toe-off)",
      "Allowing maximum pronation",
      "Relaxing the plantar fascia"
    ],
    "correct": 1,
    "explanation": "As the toes extend during push-off, the plantar fascia tightens around the metatarsal heads, raising the arch and creating a rigid lever."
  },
  {
    "id": "source-1-b-076",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which respiratory assessment parameter represents the maximum amount of air that can be exhaled after a maximum inspiration?",
    "options": [
      "Tidal Volume",
      "Residual Volume",
      "Vital Capacity",
      "Functional Residual Capacity"
    ],
    "correct": 2,
    "explanation": "Vital Capacity is the total usable volume of the lungs (Inspiratory Reserve + Tidal + Expiratory Reserve)."
  },
  {
    "id": "source-1-b-077",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Extracorporeal Shockwave Therapy (ESWT) is most evidence-based and commonly indicated for:",
    "options": [
      "Acute muscle contusions",
      "Chronic calcific tendinopathy and plantar fasciitis",
      "Acute ligament sprains",
      "Spinal disc herniations"
    ],
    "correct": 1,
    "explanation": "ESWT is highly effective for chronic, recalcitrant conditions like calcific tendinosis and plantar fasciitis by stimulating microtrauma and neovascularization."
  },
  {
    "id": "source-1-b-078",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A wrestler presents with 'Cauliflower Ear'. This is medically termed:",
    "options": [
      "Otitis Media",
      "Auricular Hematoma",
      "Tympanic rupture",
      "Mastoiditis"
    ],
    "correct": 1,
    "explanation": "Friction or blunt trauma causes a hematoma between the perichondrium and cartilage, leading to fibrosis if undrained."
  },
  {
    "id": "source-1-b-079",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In blood flow restriction (BFR) training, hypertrophy is achieved at low loads primarily due to:",
    "options": [
      "Mechanical tension",
      "Metabolic stress and cellular swelling",
      "Muscle fiber damage (microtrauma)",
      "Increased arterial blood flow during the set"
    ],
    "correct": 1,
    "explanation": "BFR restricts venous return, causing massive metabolic stress (lactate buildup) which triggers hypertrophic signaling despite low mechanical loads (20-30% 1RM)."
  },
  {
    "id": "source-1-b-080",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "According to the Ottawa Ankle Rules, ankle radiography is indicated if there is pain in the malleolar zone AND:",
    "options": [
      "Significant swelling over the ATFL",
      "Bone tenderness at the posterior edge of the lateral or medial malleolus",
      "Inability to walk backward",
      "A popping sound was heard"
    ],
    "correct": 1,
    "explanation": "The rules state x-rays are needed if there is bony tenderness at the posterior edges of the malleoli, base of the 5th metatarsal, or navicular, or an inability to bear weight."
  },
  {
    "id": "source-1-c-081",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg.",
    "difficulty": "analytical",
    "text": "Based on current evidence-based return-to-sport (RTS) criteria, what is the most appropriate clinical decision?",
    "options": [
      "Clear her for full contact play because she is past 6 months.",
      "Clear her for play but mandate a derotational knee brace.",
      "Delay RTS; she must achieve >90% LSI on hop tests and quadriceps strength.",
      "Delay RTS; ACL grafts require a mandatory 12 months regardless of functional scores."
    ],
    "correct": 2,
    "explanation": "RTS criteria strictly require >90% symmetry in functional hop tests and isokinetic quadriceps strength to minimize re-injury risk.",
    "passageId": "source-1-c-01",
    "passage": "Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg."
  },
  {
    "id": "source-1-c-082",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg.",
    "difficulty": "analytical",
    "text": "Why is the quadriceps deficit (22%) particularly concerning for a female footballer returning from ACL reconstruction?",
    "options": [
      "It limits her sprinting speed.",
      "Quadriceps weakness directly increases dynamic valgus and loading on the ACL graft during deceleration.",
      "It prevents full knee flexion.",
      "It leads to hamstring overactivation."
    ],
    "correct": 1,
    "explanation": "The quadriceps absorb eccentric forces during deceleration. Weakness shifts loads to passive structures (the graft) and worsens dynamic knee valgus.",
    "passageId": "source-1-c-01",
    "passage": "Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg."
  },
  {
    "id": "source-1-c-083",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg.",
    "difficulty": "analytical",
    "text": "Which advanced rehabilitation exercise is most critical to address the specific deficits seen in this athlete prior to RTS?",
    "options": [
      "Stationary cycling for 60 minutes",
      "Eccentric quadriceps loading and multidirectional plyometric landing drills",
      "Straight leg raises with ankle weights",
      "Swimming"
    ],
    "correct": 1,
    "explanation": "Eccentric control and plyometric landing mechanics directly address quadriceps strength deficits and deceleration mechanics required for football.",
    "passageId": "source-1-c-01",
    "passage": "Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg."
  },
  {
    "id": "source-1-c-084",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg.",
    "difficulty": "analytical",
    "text": "Using a hamstring autograft, what specific secondary muscle deficit should the physiotherapist specifically assess and rehabilitate?",
    "options": [
      "Gastrocnemius endurance",
      "Hip flexor power",
      "Deep knee flexion hamstring strength",
      "Gluteus medius timing"
    ],
    "correct": 2,
    "explanation": "Harvesting the semitendinosus/gracilis causes specific weakness in deep knee flexion and internal tibial rotation that must be targeted.",
    "passageId": "source-1-c-01",
    "passage": "Case 1: An elite 21-year-old female footballer is 7 months post-op ACL reconstruction (hamstring autograft). She has full ROM, no effusion, and wants to return to play. Her Limb Symmetry Index (LSI) on the single-leg hop test is 82%. Isokinetic testing shows quadriceps deficit of 22% compared to the uninjured leg."
  },
  {
    "id": "source-1-c-085",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive.",
    "difficulty": "analytical",
    "text": "What is the most likely pathological diagnosis for this athlete?",
    "options": [
      "Acromioclavicular sprain",
      "Subacromial impingement syndrome",
      "Bankart lesion",
      "Adhesive capsulitis"
    ],
    "correct": 1,
    "explanation": "Pain during the pull phase, combined with poor posture and positive Neer/Hawkins tests, strongly indicates subacromial impingement.",
    "passageId": "source-1-c-02",
    "passage": "Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive."
  },
  {
    "id": "source-1-c-086",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive.",
    "difficulty": "analytical",
    "text": "Which muscle group is most likely weakened and lengthened, contributing to the athlete's 'rounded shoulder' posture?",
    "options": [
      "Pectoralis Minor",
      "Upper Trapezius",
      "Middle/Lower Trapezius and Rhomboids",
      "Anterior Deltoid"
    ],
    "correct": 2,
    "explanation": "Rounded shoulders (Upper Crossed Syndrome) feature tight pectorals/upper traps and weak/lengthened scapular retractors (middle/lower traps, rhomboids).",
    "passageId": "source-1-c-02",
    "passage": "Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive."
  },
  {
    "id": "source-1-c-087",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive.",
    "difficulty": "analytical",
    "text": "What biomechanical alteration in the swimmer's stroke could be exacerbating the impingement?",
    "options": [
      "Entering the water with the hand positioned across the midline (crossing over)",
      "High elbow catch",
      "Excessive body roll",
      "Bilateral breathing"
    ],
    "correct": 0,
    "explanation": "Crossing the midline upon entry forces the shoulder into extreme internal rotation and elevation, reducing the subacromial space.",
    "passageId": "source-1-c-02",
    "passage": "Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive."
  },
  {
    "id": "source-1-c-088",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive.",
    "difficulty": "analytical",
    "text": "In the initial phase of rehab, which manual therapy technique would be most effective in increasing the subacromial space?",
    "options": [
      "Anterior glide of the humeral head",
      "Posterior and inferior glides of the humeral head",
      "Thoracic manipulation into flexion",
      "Aggressive stretching of the posterior rotator cuff"
    ],
    "correct": 1,
    "explanation": "Inferior and posterior glides help centralize the humeral head, counteracting the superior migration that causes impingement.",
    "passageId": "source-1-c-02",
    "passage": "Case 2: A 19-year-old competitive freestyle swimmer complains of unilateral anterior shoulder pain during the 'catch' and 'early pull' phases of the stroke. Posture reveals rounded shoulders, anterior pelvic tilt, and increased thoracic kyphosis. Neer and Hawkins-Kennedy tests are positive."
  },
  {
    "id": "source-1-c-089",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks.",
    "difficulty": "analytical",
    "text": "The clinical presentation is classic for:",
    "options": [
      "Tibial stress fracture",
      "Chronic exertional compartment syndrome",
      "Medial Tibial Stress Syndrome (MTSS)",
      "Popliteal artery entrapment"
    ],
    "correct": 2,
    "explanation": "Diffuse medial tibial pain that warms up but returns post-exercise, linked to overpronation and spiked training volume, is hallmark MTSS (shin splints).",
    "passageId": "source-1-c-03",
    "passage": "Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks."
  },
  {
    "id": "source-1-c-090",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks.",
    "difficulty": "analytical",
    "text": "To differentiate this condition from a tibial stress fracture, what clinical sign would point MORE toward a stress fracture?",
    "options": [
      "Diffuse tenderness over a 5+ cm area",
      "Bilateral pain",
      "Focal point tenderness over a 1-2 cm area and pain at rest",
      "Pain only when initiating running"
    ],
    "correct": 2,
    "explanation": "Stress fractures present with highly focal, pinpoint bone tenderness, positive tuning fork test, and pain at rest/night.",
    "passageId": "source-1-c-03",
    "passage": "Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks."
  },
  {
    "id": "source-1-c-091",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks.",
    "difficulty": "analytical",
    "text": "Which muscle's eccentric dysfunction is primarily responsible for the traction periostitis seen in MTSS due to overpronation?",
    "options": [
      "Tibialis Anterior",
      "Tibialis Posterior and Soleus",
      "Peroneus Brevis",
      "Gastrocnemius"
    ],
    "correct": 1,
    "explanation": "The Tibialis Posterior and Soleus control pronation eccentrically. Overpronation overworks them, pulling on their medial tibial fascial attachments.",
    "passageId": "source-1-c-03",
    "passage": "Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks."
  },
  {
    "id": "source-1-c-092",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks.",
    "difficulty": "analytical",
    "text": "What is the most critical immediate intervention to manage this athlete's condition?",
    "options": [
      "Complete cessation of all aerobic activity for 6 weeks",
      "Corticosteroid injection into the periosteum",
      "Load management (reducing running volume) and addressing footwear/pronation",
      "Surgical fasciotomy"
    ],
    "correct": 2,
    "explanation": "MTSS is a load-related injury. Reducing the inciting load and correcting the biomechanical fault (pronation) are the first-line treatments.",
    "passageId": "source-1-c-03",
    "passage": "Case 3: A 25-year-old marathon runner presents with diffuse pain along the distal medial border of the right tibia. Pain is worse at the start of the run, eases slightly, and returns intensely afterward. Biomechanical assessment shows severe overpronation and a rapid increase in training volume over the last 3 weeks."
  },
  {
    "id": "source-1-c-093",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head.",
    "difficulty": "analytical",
    "text": "In the sprinting gait cycle, during which phase do hamstring strains most commonly occur?",
    "options": [
      "Initial contact",
      "Mid-stance",
      "Late swing (terminal swing) phase",
      "Toe-off"
    ],
    "correct": 2,
    "explanation": "In late swing, the hamstrings contract eccentrically at high speeds to decelerate the advancing tibia, which is when most sprint-related tears happen.",
    "passageId": "source-1-c-04",
    "passage": "Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head."
  },
  {
    "id": "source-1-c-094",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head.",
    "difficulty": "analytical",
    "text": "During the acute phase (Days 1-3), which intervention is contraindicated?",
    "options": [
      "Frequent ice application",
      "Gentle pain-free isometric contractions",
      "Compression and elevation",
      "Aggressive passive stretching of the hamstrings"
    ],
    "correct": 3,
    "explanation": "Aggressive stretching disrupts the fragile forming scar tissue and can widen the muscular defect.",
    "passageId": "source-1-c-04",
    "passage": "Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head."
  },
  {
    "id": "source-1-c-095",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head.",
    "difficulty": "analytical",
    "text": "As the athlete enters the remodeling phase, which exercise protocol is most effective for preventing hamstring re-injury?",
    "options": [
      "High-volume concentric leg curls",
      "Nordic Hamstring Curls (eccentric bias)",
      "Static stretching holds of 60 seconds",
      "Cycling sprints"
    ],
    "correct": 1,
    "explanation": "The Nordic Hamstring exercise induces eccentric hypertrophy and shifts the optimum angle of peak torque to a longer muscle length, highly protective against strains.",
    "passageId": "source-1-c-04",
    "passage": "Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head."
  },
  {
    "id": "source-1-c-096",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head.",
    "difficulty": "analytical",
    "text": "A secondary biomechanical factor contributing to hamstring strains is 'anterior pelvic tilt'. Which muscle tightness drives this tilt?",
    "options": [
      "Gluteus Maximus",
      "Hamstrings",
      "Hip flexors (Iliopsoas)",
      "Abdominals"
    ],
    "correct": 2,
    "explanation": "Tight hip flexors pull the pelvis anteriorly, pre-stretching the hamstrings and leaving them vulnerable to over-lengthening injuries.",
    "passageId": "source-1-c-04",
    "passage": "Case 4: A 100m sprinter suddenly grabs the back of his left thigh at the 60m mark and limps to a halt. Ultrasound confirms a Grade II tear at the musculotendinous junction of the Biceps Femoris long head."
  },
  {
    "id": "source-1-c-097",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity.",
    "difficulty": "analytical",
    "text": "What is the primary anatomical structure compromised in this athlete?",
    "options": [
      "Lateral Collateral Ligament (LCL)",
      "Ulnar Collateral Ligament (UCL)",
      "Common Extensor Origin",
      "Biceps Brachii tendon"
    ],
    "correct": 1,
    "explanation": "Medial elbow pain with laxity on valgus stress testing is indicative of a Ulnar Collateral Ligament (UCL) sprain.",
    "passageId": "source-1-c-05",
    "passage": "Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity."
  },
  {
    "id": "source-1-c-098",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity.",
    "difficulty": "analytical",
    "text": "Due to the proximity of anatomical structures, what neurological symptom might this boxer concurrently experience?",
    "options": [
      "Numbness on the dorsum of the hand (Radial nerve)",
      "Tingling in the 4th and 5th fingers (Ulnar nerve)",
      "Weakness in shoulder abduction (Axillary nerve)",
      "Loss of thumb opposition (Median nerve)"
    ],
    "correct": 1,
    "explanation": "The Ulnar nerve runs through the cubital tunnel directly posterior to the UCL and is often stretched or irritated in valgus overload injuries.",
    "passageId": "source-1-c-05",
    "passage": "Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity."
  },
  {
    "id": "source-1-c-099",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity.",
    "difficulty": "analytical",
    "text": "Which dynamic stabilizing muscle group should be the primary focus of strengthening to protect the medial elbow?",
    "options": [
      "Wrist extensors and supinators",
      "Triceps brachii",
      "Flexor-pronator mass",
      "Biceps brachii"
    ],
    "correct": 2,
    "explanation": "The flexor-pronator group originates at the medial epicondyle and acts as an active dynamic stabilizer against valgus stress at the elbow.",
    "passageId": "source-1-c-05",
    "passage": "Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity."
  },
  {
    "id": "source-1-c-100",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity.",
    "difficulty": "analytical",
    "text": "If conservative management fails and the boxer requires surgery (Tommy John surgery), which tendon is most commonly harvested for the graft?",
    "options": [
      "Patellar tendon",
      "Palmaris longus",
      "Achilles tendon",
      "Extensor carpi radialis brevis"
    ],
    "correct": 1,
    "explanation": "The Palmaris Longus tendon (from the forearm) is the most standard autograft used for UCL reconstruction.",
    "passageId": "source-1-c-05",
    "passage": "Case 5: A 24-year-old amateur boxer presents with chronic pain over the medial aspect of the right elbow. He reports pain exacerbation during heavy bag sessions, specifically when throwing hooks. Valgus stress testing of the elbow at 30 degrees of flexion reproduces the pain and shows increased laxity."
  },
  {
    "id": "source-2-a1-001",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "An elite male sprinter and an elite Olympic weightlifter both present with identical Body Mass Index (BMI) values of 28.5 kg/m². Which anthropometric assessment technique provides the most accurate distinction between their physical profiling?",
    "options": [
      "Single-frequency bioelectrical impedance analysis incorporating segment-specific impedance vector algorithms",
      "Anthropometric waist-to-hip circumference ratio combined with trunk abdominal skinfold thickness indices",
      "Underwater hydrostatic weighing performed without correcting for individual pulmonary residual lung volume",
      "ISAK-standardized 8-skinfold site body composition assessment and Heath-Carter somatotyping"
    ],
    "correct": 3,
    "explanation": "BMI cannot differentiate between skeletal muscle hypertrophy and adipose tissue, nor can it account for tissue distribution. The ISAK 8-skinfold protocol combined with Heath-Carter somatotyping delineates endomorphy, mesomorphy, and ectomorphy, accurately distinguishing the extreme mesomorphy of weightlifters from the somatotype profile of sprinters."
  },
  {
    "id": "source-2-a1-002",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During peak height velocity (PHV) monitoring in adolescent athletes, which measurement combination provides the highest predictive accuracy for estimating somatic maturity using the Mirwald equation?",
    "options": [
      "Standing height, total body mass, biacromial breadth, and bi-epicondylar femur width measurements",
      "Decimal chronological age, wrist radiographical skeletal maturity age, and 8-site skinfold thickness",
      "Standing height, sitting height, leg length, decimal age, and parental heights (confirmed via evidence-based musculoskeletal diagnostics)",
      "Bi-epicondylar humerus width, bi-epicondylar femur width, waist circumference, and sitting height ratio"
    ],
    "correct": 2,
    "explanation": "The Mirwald non-invasive maturity offset equation utilizes chronological age, standing height, sitting height, leg length (standing height minus sitting height), and their interactions to estimate maturity offset (years from PHV)."
  },
  {
    "id": "source-2-a1-003",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Heath-Carter somatotyping, an athlete evaluated with a rating profile of 1.5 - 7.0 - 1.5 is classified under which somatotypic category?",
    "options": [
      "Balanced Endomorph profile exhibiting predominant soft roundness and elevated relative adiposity",
      "Balanced Ectomorph profile characterized by marked linearity and minimal subcutaneous fat tissue",
      "Mesomorph-Ectomorph hybrid profile displaying equal muscular robustness and relative linearity",
      "Extreme Mesomorph evaluated across standardized high-performance sports environments"
    ],
    "correct": 3,
    "explanation": "A Heath-Carter somatotype rating of 1.5 - 7.0 - 1.5 indicates low endomorphy (1.5), maximum mesomorphy (7.0), and low ectomorphy (1.5), designating an extreme mesomorph characteristic of elite powerlifters and sprinters."
  },
  {
    "id": "source-2-a1-004",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to ISAK guidelines, what is the acceptable Technical Error of Measurement (TEM) threshold for an accredited anthropometrist performing skinfold measurements?",
    "options": [
      "Below 5% for intra-examiner basic anthropometric measures and below 5% for all skinfold site measurements",
      "Below 1% for basic measures and below 5% for skinfolds evaluated across standardized high-performance sports environments",
      "Below 3% for basic anthropometric measures and below 10% for all skinfold site measurements (confirmed via evidence-based musculoskeletal diagnostics)",
      "Below 0.5% for basic anthropometric measures and below 1.5% for all skinfold site measurements (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "ISAK standards specify that intra-examiner TEM should be below 1% for basic measurements (height, body mass) and below 5% for skinfold measurements to ensure data reliability."
  },
  {
    "id": "source-2-a1-005",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which skinfold site is located at the intersection of a horizontal line marking the lowest point of the 10th rib margin and a vertical line originating from the anterior axillary fold?",
    "options": [
      "Subscapular skinfold site measured 2 cm below the inferior angle of the scapula at a 45-degree angle",
      "Supraspinale skinfold evaluated across standardized high-performance sports environments",
      "Iliac crest skinfold site measured immediately superior to the iliac crest along the mid-axillary line",
      "Abdominal skinfold site measured vertically 5 cm laterally to the right border of the omphalion"
    ],
    "correct": 1,
    "explanation": "The supraspinale skinfold landmark is defined by ISAK as the point of intersection of a line from the anterior superior iliac spine (ASIS) to the anterior axillary fold and a horizontal line at the level of the superior border of the ilium at the iliac crest."
  },
  {
    "id": "source-2-a1-006",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In kinanthropometric profiling of elite rowers, which anatomical proportion is most advantageous for stroke mechanical leverage?",
    "options": [
      "Short arm span relative to standing height combined with a disproportionately long sitting height torso",
      "High brachial index (forearm to upper arm ratio) combined with an elevated crural index (lower leg to thigh ratio)",
      "Low sitting height to standing height ratio paired with short femur length and reduced trunk leverage",
      "High arm span to height ratio (ape index > 1.05) and long sitting height to standing height ratio"
    ],
    "correct": 3,
    "explanation": "Elite rowers benefit from a high ape index (arm span exceeding standing height by >1.05) and long trunk length, allowing maximum stroke reach and mechanical leverage during the drive phase."
  },
  {
    "id": "source-2-a1-007",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which anthropometric index is calculated as (Biacromial Breadth / Bicristal Breadth) × 100 and assesses shoulder-to-hip structural balance?",
    "options": [
      "Acromial Structural Index measuring lateral shoulder tip displacement relative to total height",
      "Ponderal Index calculated as height divided by the cube root of total body mass (assessed during high-performance athletic screening)",
      "Cormic Stature Index evaluating lower extremity segment length relative to standing height",
      "Acromiocristal Index (Trunk Index) evaluated across standardized high-performance sports environments"
    ],
    "correct": 3,
    "explanation": "The Acromiocristal Index measures shoulder breadth (biacromial) relative to pelvic hip breadth (bicristal). Higher values reflect broad shoulders relative to narrow hips (masculine/athletic V-taper)."
  },
  {
    "id": "source-2-a1-008",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What does the Cormic Index measure in human growth and anthropometric profiling?",
    "options": [
      "Ratio of sum of 8 skinfold site thicknesses relative to limb muscle girth circumferences",
      "Percentage of sitting height relative to standing height (Sitting Height / Standing Height × 100)",
      "Ratio of biacromial shoulder breadth relative to square root of total body mass",
      "Whole body density calculated exclusively from waist-to-hip circumference and age equations"
    ],
    "correct": 1,
    "explanation": "The Cormic Index is the ratio of sitting height to standing height expressed as a percentage. It quantifies the relative contribution of trunk length versus leg length to total stature."
  },
  {
    "id": "source-2-a1-009",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "When assessing fat-free mass index (FFMI) in power athletes, what threshold value is generally considered the natural physiological upper limit in non-steroid using males?",
    "options": [
      "19.0 kg/m² representing baseline non-athletic skeletal muscle mass index",
      "25.0 kg/m² evaluated across standardized high-performance sports environments",
      "22.0 kg/m² representing average recreational endurance athlete fat-free mass index",
      "30.0 kg/m² representing extreme androgenic steroid-induced skeletal muscle hypertrophy limit"
    ],
    "correct": 1,
    "explanation": "Kouri et al. established that normalized FFMI in natural, drug-free elite male athletes rarely exceeds 25.0 kg/m², serving as a baseline for muscle mass potential without androgenic anabolic steroids."
  },
  {
    "id": "source-2-a1-010",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During early maturation in youth athletes, the Relative Age Effect (RAE) refers to:",
    "options": [
      "Early pubertal onset accelerating growth plate closure and reducing adult aerobic capacity potential",
      "Accelerated skeletal maturation resulting from high mechanical resistance training loads in youth",
      "The transient decline in flexibility and joint mobility observed during peak height velocity (PHV)",
      "Systematic selection bias favoring athletes born earlier in the selection year due to temporary physical advantages"
    ],
    "correct": 3,
    "explanation": "Relative Age Effect (RAE) describes the phenomenon where participation and selection rates are higher among athletes born early in the annual age-group cut-off year due to advanced chronological and biological maturity."
  },
  {
    "id": "source-2-a1-011",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During maximal 100-meter sprint running (~10 seconds duration), which bioenergetic system contributes the predominant energy supply for ATP resynthesis?",
    "options": [
      "ATP-Phosphocreatine (ATP-PCr) System evaluated across standardized high-performance sports environments",
      "Aerobic Glycolysis utilizing mitochondrial oxidative phosphorylation for slow ATP resynthesis",
      "Anaerobic Glycolysis utilizing muscular glycogen stores and accumulating metabolic lactate",
      "Beta-oxidation of intramyocellular and circulating plasma free fatty acids (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "The ATP-PCr (phosphagen) system provides immediate energy via intramuscular stores of ATP and phosphocreatine during maximal, short-duration high-intensity activities lasting up to 10-12 seconds."
  },
  {
    "id": "source-2-a1-012",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What physiological event defines the onset of blood lactate accumulation (OBLA) during an incremental treadmill exercise test?",
    "options": [
      "Initial non-linear deviation of blood lactate concentration above resting baseline values (~1.5 to 2.0 mmol/L) (evaluated under standardized clinical sports science protocols)",
      "Systemic blood lactate concentration reaching a fixed value of 4.0 mmol/L measured under standardized physiological testing conditions",
      "Lactate metabolic clearance rate reaching its theoretical physiological ceiling in non-working muscle (confirmed via evidence-based musculoskeletal diagnostics)",
      "Complete intramuscular depletion of glycogen stores in Type I and Type II skeletal muscle fibers (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "OBLA is conventionally defined as the exercise intensity at which blood lactate concentration reaches a fixed concentration of 4.0 mmol/L during incremental exercise testing."
  },
  {
    "id": "source-2-a1-013",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Excess Post-exercise Oxygen Consumption (EPOC) following high-intensity interval training (HIIT) is primarily driven during its fast component by which mechanism?",
    "options": [
      "Hepatic and myocardial oxidation of circulating blood lactate during late post-exercise recovery",
      "Heightened rate of skeletal muscle protein synthesis and structural myofibrillar tissue repair",
      "Sustained elevation of core body temperature, ventilation, and circulating catecholamine clearance",
      "Resynthesis of intramuscular phosphocreatine (PCr) and replenishment of myoglobin/hemoglobin oxygen stores"
    ],
    "correct": 3,
    "explanation": "The fast (alactacid) phase of EPOC occurs within 2 to 3 minutes post-exercise and is responsible for resynthesizing depleted ATP and PCr stores and reoxygenating muscle myoglobin and blood hemoglobin."
  },
  {
    "id": "source-2-a1-014",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to the Fick Equation, maximal oxygen uptake (VO2max) is determined by the product of:",
    "options": [
      "Resting Heart Rate multiplied by left ventricular End-Diastolic Volume (evaluated under standardized clinical sports science protocols)",
      "Left Ventricular Stroke Volume multiplied by systemic Mean Arterial Pressure",
      "Maximal Cardiac Output (Qmax) and Maximal Arterio-Venous Oxygen Difference (a-vO2 diff max)",
      "Minute Pulmonary Ventilation multiplied by alveolar oxygen membrane diffusion capacity"
    ],
    "correct": 2,
    "explanation": "The Fick Equation states VO2 = Cardiac Output (Q) × Arterio-Venous Oxygen Difference (a-vO2 diff). At maximal exertion, VO2max = Qmax × a-vO2 diff max."
  },
  {
    "id": "source-2-a1-015",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During prolonged exercise in heat without fluid ingestion, cardiovascular drift is characterized by which pattern of hemodynamic changes?",
    "options": [
      "Progressive elevation in stroke volume paired with a compensatory reduction in resting heart rate",
      "Simultaneous progressive elevation in left ventricular stroke volume and maximal cardiac output",
      "Progressive decline in stroke volume and progressive compensatory increase in heart rate to maintain cardiac output",
      "Abrupt drop in active heart rate accompanied by elevated systemic vascular resistance (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Cardiovascular drift involves a gradual reduction in stroke volume (due to reduced venous return from cutaneous vasodilation and fluid loss) compensated by a progressive increase in heart rate to keep cardiac output stable."
  },
  {
    "id": "source-2-a1-016",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Central fatigue during prolonged endurance exercise is primarily associated with alterations in which neurotransmitter system in the brain?",
    "options": [
      "Decreased brain dopamine and increased tryptophan/serotonin (5-HT) ratio evaluated across standardized high-performance sports environments",
      "Complete exhaustion of presynaptic acetylcholine vesicles at the neuromuscular junction (assessed during high-performance athletic screening)",
      "Increased free tryptophan entry into the brain leading to elevated 5-hydroxytryptamine (serotonin) synthesis (confirmed via evidence-based musculoskeletal diagnostics)",
      "Excessive accumulation of gamma-aminobutyric acid (GABA) within motor cortical interneurons (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "The Central Fatigue Hypothesis proposes that elevated plasma free tryptophan (due to FFA mobilization) crosses the blood-brain barrier, increasing brain serotonin (5-HT) synthesis, which induces central tiredness and loss of drive."
  },
  {
    "id": "source-2-a1-017",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which muscle fiber type exhibits high oxidative enzyme activity, high capillary density, high mitochondrial content, and resistance to fatigue?",
    "options": [
      "Type IIx Fast Glycolytic muscle fibers characterized by low mitochondrial density and rapid fatigue",
      "Type IIa Fast Oxidative-Glycolytic muscle fibers possessing intermediate fatigue resistance",
      "Type IIb Super-fast Glycolytic muscle fibers found predominantly in small animal species",
      "Type I (Slow oxidative) evaluated across standardized high-performance sports environments"
    ],
    "correct": 3,
    "explanation": "Type I (slow-twitch oxidative) muscle fibers possess dense mitochondrial networks, rich capillary supply, and elevated oxidative enzyme levels (e.g., citrate synthase), conferring high resistance to fatigue."
  },
  {
    "id": "source-2-a1-018",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In exercise bioenergetics, the 'Crossover Concept' describes the shift from primary fat oxidation to primary carbohydrate oxidation as exercise intensity increases above what approximate percentage of VO2max?",
    "options": [
      "20-30% VO2max representing low-intensity recovery exercise workloads",
      "95-100% VO2max representing maximal supramaximal sprinting workloads",
      "85-90% VO2max representing high-intensity interval training workloads near VO2max",
      "60-65% VO2max evaluated across standardized high-performance sports environments"
    ],
    "correct": 3,
    "explanation": "Brooks' Crossover Concept indicates that as exercise intensity increases beyond ~60-65% VO2max, carbohydrate oxidation becomes the predominant fuel source while fat oxidation declines."
  },
  {
    "id": "source-2-a1-019",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary rate-limiting enzyme regulating glycolytic flux during high-intensity exercise?",
    "options": [
      "Hexokinase enzyme regulating glucose phosphorylation upon cellular entry (evaluated under standardized clinical sports science protocols)",
      "Phosphofructokinase-1 (PFK-1) evaluated across standardized high-performance sports environments",
      "Pyruvate Dehydrogenase enzyme converting pyruvate into acetyl-CoA for Krebs entry",
      "Lactate Dehydrogenase enzyme catalyzing interconversion of pyruvate and lactate"
    ],
    "correct": 1,
    "explanation": "Phosphofructokinase-1 (PFK-1) is the key rate-limiting enzyme of glycolysis. It is allosterically inhibited by ATP and citrate, and activated by AMP, ADP, and inorganic phosphate."
  },
  {
    "id": "source-2-a1-020",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What occurs to the muscle force-velocity relationship during maximal concentric muscle contraction?",
    "options": [
      "Force output decreases non-linearly (hyperbolically) as shortening velocity increases",
      "Force output increases linearly as concentric muscle shortening velocity increases",
      "Force output remains constant and independent of concentric shortening velocity",
      "Force output drops to zero at zero shortening velocity during contraction"
    ],
    "correct": 0,
    "explanation": "Hill's equation dictates that during concentric muscle contractions, maximal force generation decreases hyperbolically as shortening velocity increases due to cross-bridge cycling limitations."
  },
  {
    "id": "source-2-a1-021",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During eccentric muscle action, how does maximum force production compare to isometric or concentric actions at high movement velocities?",
    "options": [
      "Eccentric force capacity is 20-50% higher than isometric force and remains elevated at high velocity (evaluated under standardized clinical sports science protocols)",
      "Eccentric force generation capacity is significantly lower than maximal concentric force (assessed during high-performance athletic screening)",
      "Eccentric force capacity drops to zero at high lengthening velocities evaluated across standardized high-performance sports environments",
      "Eccentric force capacity is identical to concentric force capacity across all contraction velocities (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Eccentric contractions generate 20-50% greater maximal force than isometric or concentric contractions due to mechanical detachment resistance of cross-bridges and titin structural stiffness."
  },
  {
    "id": "source-2-a1-022",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the physiological role of the Cori Cycle during high-intensity exercise recovery?",
    "options": [
      "Converting skeletal muscle glycogen directly into circulating blood glucose without hepatic enzymes",
      "Synthesizing glucogenic amino acids from circulating muscle lactate within renal tubule cells",
      "Transporting muscle-derived lactate via blood to the liver for gluconeogenesis back to glucose",
      "Excreting accumulated metabolic lactate directly through dermal sweat glands during exercise"
    ],
    "correct": 2,
    "explanation": "The Cori Cycle (lactic acid cycle) involves lactate produced by anaerobic glycolysis in skeletal muscle moving via blood to the liver, where hepatic gluconeogenesis converts it back into glucose."
  },
  {
    "id": "source-2-a1-023",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In human muscle motor unit recruitment, Henneman's Size Principle dictates that motor units are recruited in what sequence?",
    "options": [
      "High-threshold fast-twitch motor units recruited first, followed by small slow-twitch units (evaluated under standardized clinical sports science protocols)",
      "Motor units are recruited in a completely random and unpredictable spatial sequence evaluated across standardized high-performance sports environments",
      "Small, low-threshold slow-twitch motor units recruited first, followed progressively by larger high-threshold fast-twitch units (confirmed via evidence-based musculoskeletal diagnostics)",
      "Fast glycolytic motor units are recruited exclusively regardless of external mechanical load (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Henneman's Size Principle states that motor units are recruited in order of increasing soma size: small, low-threshold Type I units first, progressing to larger Type IIa and Type IIx units as force demands increase."
  },
  {
    "id": "source-2-a1-024",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the effect of acute altitude exposure (~3000m) on ventilatory response and arterial blood gases?",
    "options": [
      "Hyperventilation triggered by peripheral chemoreceptors resulting in respiratory alkalosis and decreased PaCO2 (evaluated under standardized clinical sports science protocols)",
      "Hyperventilation causing systemic respiratory acidosis and elevated arterial carbon dioxide pressure (assessed during high-performance athletic screening)",
      "Hypoventilation leading to severe arterial hypercapnia and drop in blood pH evaluated across standardized high-performance sports environments",
      "No measurable change in minute ventilation or arterial partial pressure of carbon dioxide (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Hypoxia at altitude stimulates arterial carotid body chemoreceptors, increasing ventilation (hyperventilation). This blows off CO2, resulting in a fall in arterial PCO2 and acute respiratory alkalosis."
  },
  {
    "id": "source-2-a1-025",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which cardiac adaptation is characteristic of the 'Athlete's Heart' in endurance-trained athletes (e.g., marathoners) compared to strength-trained athletes?",
    "options": [
      "Concentric left ventricular hypertrophy featuring thickened walls and reduced end-diastolic cavity volume",
      "Eccentric left ventricular hypertrophy with increased end-diastolic cavity volume and proportionate wall thickening",
      "Right atrial structural dilation accompanied by impaired right ventricular ejection fraction (confirmed via evidence-based musculoskeletal diagnostics)",
      "Aortic valve calcification and structural stenosis evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Endurance training causes volume overload, inducing eccentric left ventricular hypertrophy (increased LV cavity diameter and stroke volume). Resistance training induces pressure overload and concentric LV hypertrophy."
  },
  {
    "id": "source-2-a1-026",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During the acute inflammatory phase of musculoskeletal wound healing (Days 1 to 5), which cell type predominantly infiltrates the injured tissue first to clean debris?",
    "options": [
      "Fibroblasts evaluated across standardized high-performance sports environments",
      "Type I Collagen fibers evaluated across standardized high-performance sports environments",
      "Osteoblasts evaluated across standardized high-performance sports environments",
      "Neutrophils followed by macrophages (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Neutrophils arrive within hours to phagocytose bacteria and debris, followed by macrophages which secrete growth factors (TGF-beta, PDGF) essential for transitioning into the proliferative phase."
  },
  {
    "id": "source-2-a1-027",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In tendon matrix remodeling, what structural transformation occurs when transitioning from the proliferative phase to the maturation phase?",
    "options": [
      "Replacement of disorganized Type III collagen with parallel, cross-linked Type I collagen (evaluated under standardized clinical sports science protocols)",
      "Replacement of Type I collagen with disorganized Type III collagen (assessed during high-performance athletic screening)",
      "Loss of proteoglycans and conversion into hyaline cartilage evaluated across standardized high-performance sports environments",
      "Complete calcification of the tendon mid-substance evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "During tendon healing, initial repair tissue rich in weak, disorganized Type III collagen is gradually remodeled into mature, tensile-resistant Type I collagen oriented along lines of mechanical stress."
  },
  {
    "id": "source-2-a1-028",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to the PEACE & LOVE protocol for acute soft tissue injury management, what intervention is explicitly recommended to be AVOIDED during the first 48-72 hours?",
    "options": [
      "Protection and Elevation evaluated across standardized high-performance sports environments",
      "Compression and Education evaluated across standardized high-performance sports environments",
      "Avoidance of re-injury evaluated across standardized high-performance sports environments",
      "Anti-inflammatory drugs (NSAIDs) and Ice (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The PEACE & LOVE framework discourages Anti-inflammatory modalities (NSAIDs and ice) in the acute phase, as suppressing initial inflammation impairs natural tissue repair signaling cascade."
  },
  {
    "id": "source-2-a1-029",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which ligament injury classification corresponds to a Grade II sprain?",
    "options": [
      "Microscopic tearing with no joint laxity or instability evaluated across standardized high-performance sports environments",
      "Complete rupture of the ligament with severe instability and no end-feel (assessed during high-performance athletic screening)",
      "Partial tearing of ligament fibers with moderate joint laxity and a definite, though soft, end-feel (confirmed via evidence-based musculoskeletal diagnostics)",
      "Bone avulsion without ligamentous tearing evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "A Grade II ligament sprain involves partial tearing of fiber bundles, resulting in moderate pain, localized swelling, mild-to-moderate functional loss, and joint laxity with a discernible end-feel."
  },
  {
    "id": "source-2-a1-030",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What biomechanical property describes the time-dependent increase in strain/elongation under a constant sustained mechanical load in biological tissues?",
    "options": [
      "Creep evaluated across standardized high-performance sports environments",
      "Stress relaxation (assessed during high-performance athletic screening)",
      "Hysteresis evaluated across standardized high-performance sports environments",
      "Yield point elasticity (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Creep is the viscoelastic property where tissue gradually deforms (elongates) over time when subjected to a constant, continuous load."
  },
  {
    "id": "source-2-a1-031",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which tissue property represents energy loss (as heat) during a mechanical loading and unloading cycle?",
    "options": [
      "Thixotropy",
      "Plasticity",
      "Anisotropy",
      "Hysteresis"
    ],
    "correct": 3,
    "explanation": "Hysteresis refers to the difference in energy absorbed during mechanical loading versus energy restored during unloading, represented by the area between the loading and unloading stress-strain curves."
  },
  {
    "id": "source-2-a1-032",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In muscle strain classification, why are biarticular muscles (e.g., rectus femoris, biceps femoris, gastrocnemius) at highest risk for acute strain during explosive activities?",
    "options": [
      "They contain exclusively Type I muscle fibers evaluated across standardized high-performance sports environments",
      "They have poor vascular supply compared to monoarticular muscles evaluated across standardized high-performance sports environments",
      "They are subjected to simultaneous stretch across two joint axes during rapid eccentric contractions (confirmed via evidence-based musculoskeletal diagnostics)",
      "They lack muscle spindles and Golgi tendon organs evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Biarticular muscles span two joints and are frequently elongated over both joints simultaneously during high-velocity eccentric movements (e.g., sprinting late swing phase), creating extreme passive and active tension."
  },
  {
    "id": "source-2-a1-033",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which bone stress condition represents an early, reversible microvascular edema stage on MRI prior to cortical fracture formation?",
    "options": [
      "Frank cortical fracture evaluated across standardized high-performance sports environments",
      "Avulsion Fracture evaluated across standardized high-performance sports environments",
      "Osteochondritis Dissecans evaluated across standardized high-performance sports environments",
      "Bone Stress Reaction (Stress Reaction) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "A bone stress reaction represents bone marrow edema and localized micro-damage without distinct cortical breakdown on MRI, representing an early precursor to stress fracture."
  },
  {
    "id": "source-2-a1-034",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary functional difference between open kinetic chain (OKC) and closed kinetic chain (CKC) exercises in knee joint rehabilitation?",
    "options": [
      "OKC fixes the distal segment while CKC allows distal segment freedom evaluated across standardized high-performance sports environments",
      "CKC features fixed distal segment contact, high joint compressive loads, and co-contraction of surrounding agonist-antagonist musculature",
      "OKC generates higher joint shear forces and lower muscle activation evaluated across standardized high-performance sports environments",
      "CKC isolates single muscle groups without joint compression evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "CKC exercises feature a fixed distal extremity (foot/hand on ground), promoting weight-bearing axial compressive forces, multi-joint recruitment, and joint co-stabilization."
  },
  {
    "id": "source-2-a1-035",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In physical therapy examination, an 'empty' end-feel upon passive joint range of motion signifies:",
    "options": [
      "Normal bony anatomical stop evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Spasm-like rebound resistance evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Movement limited by severe pain before anatomical end-range is reached, with no structural resistance felt by clinician",
      "Leathery tissue stretch resistance evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "An 'empty' end-feel occurs when passive joint motion is halted by the patient due to severe pain before true tissue resistance or anatomical restriction is met, indicating acute inflammation or pathology."
  },
  {
    "id": "source-2-a1-036",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which neural reflex mechanism is activated by rapid stretching of the muscle belly to induce reflexive contraction of the agonist muscle?",
    "options": [
      "Autogenic Inhibition via Golgi Tendon Organ evaluated across standardized high-performance sports environments",
      "Reciprocal Inhibition via Group Ib afferents evaluated across standardized high-performance sports environments",
      "Myotatic (Stretch) Reflex via Muscle Spindle Group Ia afferents (confirmed via evidence-based musculoskeletal diagnostics)",
      "Flexor Withdrawal Reflex evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "The myotatic (stretch) reflex is triggered when muscle spindles detect rapid length changes, sending primary Ia afferent signals to the spinal cord to monosynaptically excite agonist alpha motor neurons."
  },
  {
    "id": "source-2-a1-037",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Autogenic inhibition during proprioceptive neuromuscular facilitation (PNF) contract-relax stretching is mediated primarily by which sensory receptor?",
    "options": [
      "Muscle Spindle Group II afferents (evaluated under standardized clinical sports science protocols)",
      "Ruffini Endings evaluated across standardized high-performance sports environments",
      "Golgi Tendon Organ (GTO) via Group Ib afferents (confirmed via evidence-based musculoskeletal diagnostics)",
      "Pacinian Corpuscles evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "High tension produced during isometric muscle contraction stimulates Golgi Tendon Organs (GTO), sending Ib afferent signals to inhibitory interneurons in the spinal cord, relaxing the agonist (autogenic inhibition)."
  },
  {
    "id": "source-2-a1-038",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which type of joint mobilization glide according to Kaltenborn principles is performed PARALLEL to the treatment plane?",
    "options": [
      "Traction (Distraction) (evaluated under standardized clinical sports science protocols)",
      "Compression evaluated across standardized high-performance sports environments",
      "Glide (Sliding) evaluated across standardized high-performance sports environments",
      "Rotation evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Kaltenborn treatment rules dictate that joint glides are applied parallel to the treatment plane (passing through the concave joint surface), whereas traction is applied perpendicular."
  },
  {
    "id": "source-2-a1-039",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to Maitland's passive movement grading system, a Grade III mobilization is defined as:",
    "options": [
      "Small amplitude movement performed at the beginning of available range (evaluated under standardized clinical sports science protocols)",
      "High-velocity small amplitude thrust beyond anatomical limit evaluated across standardized high-performance sports environments",
      "Small amplitude movement performed at the limit of available range (confirmed via evidence-based musculoskeletal diagnostics)",
      "Large amplitude movement performed within the tissue resistance up to the limit of range (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Maitland Grade III is a large-amplitude passive movement performed into tissue resistance, reaching up to the end limit of available range, aimed at stretching restricted joint structures."
  },
  {
    "id": "source-2-a1-040",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In neurodynamics, what positive clinical finding during the Upper Limb Tension Test 1 (ULTT1 / ULNT A for Median Nerve) confirms neural tissue mechanosensitivity?",
    "options": [
      "Local muscular ache in the biceps belly evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Inability to flex the fingers evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Loss of radial pulse during shoulder abduction evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Reproduction of symptoms, difference of >10° in elbow extension side-to-side, and symptom alteration upon structural differentiation (cervical side-bending)"
    ],
    "correct": 3,
    "explanation": "Positive neurodynamic testing requires: 1) reproduction of symptoms, 2) side-to-side asymmetry (>10° elbow extension deficit), and 3) structural differentiation (remote movement like cervical side-bending modifying symptoms)."
  },
  {
    "id": "source-2-a1-041",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which class of lever system in the human body is designed primarily for speed and range of motion, despite having a mechanical advantage less than 1.0?",
    "options": [
      "First Class Lever",
      "Second Class Lever",
      "Fourth Class Lever",
      "Third Class Lever"
    ],
    "correct": 3,
    "explanation": "Third-class levers (e.g., elbow flexion by biceps: effort between fulcrum and resistance) have effort arms shorter than resistance arms (MA < 1), sacrificing force for speed and displacement range."
  },
  {
    "id": "source-2-a1-042",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the mechanical advantage of a second-class lever system (e.g., plantar flexion at metatarsophalangeal joints during standing toe raise)?",
    "options": [
      "Mechanical Advantage < 1.0",
      "Mechanical Advantage > 1.0",
      "Mechanical Advantage = 1.0",
      "Mechanical Advantage = 0"
    ],
    "correct": 1,
    "explanation": "Second-class levers place the resistance between the fulcrum and effort. Since the effort arm is longer than the resistance arm, the Mechanical Advantage is always greater than 1.0 (force multiplier)."
  },
  {
    "id": "source-2-a1-043",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which equation correctly defines mechanical torque (T) generated about a joint axis?",
    "options": [
      "T = Force / Moment Arm evaluated across standardized high-performance sports environments",
      "T = Force × Perpendicular Distance (Moment Arm) from axis of rotation (assessed during high-performance athletic screening)",
      "T = Mass × Acceleration evaluated across standardized high-performance sports environments",
      "T = Force × Time evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Torque (rotational force) is calculated as the product of the magnitude of applied force and the perpendicular distance (moment arm) from the line of force to the axis of rotation."
  },
  {
    "id": "source-2-a1-044",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to Newton's Second Law of Motion (Law of Acceleration), if the net force applied to a runner's body mass is doubled, what happens to their linear acceleration?",
    "options": [
      "Acceleration is halved",
      "Acceleration is doubled",
      "Acceleration remains unchanged",
      "Acceleration increases fourfold"
    ],
    "correct": 1,
    "explanation": "Newton's Second Law states F = m × a (or a = F/m). Assuming constant mass, doubling net force directly doubles linear acceleration."
  },
  {
    "id": "source-2-a1-045",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "The area under a Ground Reaction Force vs. Time (Force-Time) curve during a jump takeoff represents which kinetic quantity?",
    "options": [
      "Work evaluated across standardized high-performance sports environments",
      "Power evaluated across standardized high-performance sports environments",
      "Linear Impulse (∫F dt) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Torque evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Linear impulse is the integral of force over time (area under the force-time curve). By the Impulse-Momentum Theorem, impulse equals the change in momentum (m × Δv)."
  },
  {
    "id": "source-2-a1-046",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In angular kinematics, what is the relationship between linear velocity (v) of a point on a rotating limb and its angular velocity (ω)?",
    "options": [
      "v = ω / r evaluated across standardized high-performance sports environments",
      "v = ω² × r evaluated across standardized high-performance sports environments",
      "v = ω × r (where r is radius of rotation) (confirmed via evidence-based musculoskeletal diagnostics)",
      "v = r / ω evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Linear tangential velocity (v) of a point on a segment rotating around an axis equals the angular velocity (ω in rad/s) multiplied by the radius of rotation (r)."
  },
  {
    "id": "source-2-a1-047",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During a vertical countermovement jump (CMJ), what does a negative flight time value or negative Reactive Strength Index (RSI) indicate?",
    "options": [
      "High explosive power output evaluated across standardized high-performance sports environments",
      "Invalid trial due to takeoff or landing detection error on force platform (assessed during high-performance athletic screening)",
      "Superior eccentric utilization ratio evaluated across standardized high-performance sports environments",
      "Optimal stretch-shortening cycle performance evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Flight time and RSI must mathematically be positive values. A negative calculation signifies an error in force plate thresholding, premature foot movement, or invalid trial detection."
  },
  {
    "id": "source-2-a1-048",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which joint motion occurs in the sagittal plane around a frontal-horizontal axis?",
    "options": [
      "Hip Abduction and Adduction evaluated across standardized high-performance sports environments",
      "Shoulder Internal and External Rotation (assessed during high-performance athletic screening)",
      "Forearm Pronation and Supination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Knee Flexion and Extension evaluated across standardized high-performance sports environments"
    ],
    "correct": 3,
    "explanation": "Flexion and extension occur in the sagittal plane around a transverse (frontal-horizontal) axis of rotation."
  },
  {
    "id": "source-2-a1-049",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In projectile motion (e.g., throwing a javelin), ignoring air resistance, what is the optimal theoretical angle of release to achieve maximum horizontal displacement on level ground?",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correct": 1,
    "explanation": "In ideal projectile physics on flat ground without aerodynamic drag or relative height difference, a 45° release angle yields maximum horizontal range."
  },
  {
    "id": "source-2-a1-050",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In human walking gait, what is the ground reaction force (GRF) peak magnitude typically observed during the loading response phase in multiples of body weight (BW)?",
    "options": [
      "0.5 BW evaluated across standardized high-performance sports environments",
      "3.0 to 4.0 BW (assessed during high-performance athletic screening)",
      "1.1 to 1.2 BW (confirmed via evidence-based musculoskeletal diagnostics)",
      "5.0 to 6.0 BW (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "During normal walking, the vertical GRF exhibits a bimodal curve with the first peak (impact/loading peak) reaching approximately 1.1 to 1.2 times body weight."
  },
  {
    "id": "source-2-a1-051",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During high-speed running, vertical ground reaction forces during ground contact can reach up to what magnitude?",
    "options": [
      "2.5 - 3.5 BW",
      "1.0 - 1.5 BW",
      "8.0 - 10.0 BW",
      "12.0 - 15.0 BW"
    ],
    "correct": 0,
    "explanation": "During sprinting ground contact, peak vertical GRF reaches 2.5 to 3.5 times body weight applied in less than 100 milliseconds."
  },
  {
    "id": "source-2-a1-052",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What biomechanical term defines the point at which total body mass is concentrated and about which all body parts balance perfectly in 3D space?",
    "options": [
      "Center of Gravity / Center of Mass (COM) (evaluated under standardized clinical sports science protocols)",
      "Center of Pressure (COP) evaluated across standardized high-performance sports environments",
      "Base of Support (BOS) evaluated across standardized high-performance sports environments",
      "Radius of Gyration evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "The Center of Gravity/Mass is the theoretical single point in space where the weighted relative positions of distributed body segment masses sum to zero."
  },
  {
    "id": "source-2-a1-053",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which balance parameter measures the spatial trajectory and displacement of the vertical ground reaction force vector under the feet during quiet standing?",
    "options": [
      "Center of Mass (COM) displacement (evaluated under standardized clinical sports science protocols)",
      "Inertial Moment evaluated across standardized high-performance sports environments",
      "Limit of Stability (LOS) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Center of Pressure (COP) sway path (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Center of Pressure (COP) is the spatial location of the vertical ground reaction force vector on the support surface, reflecting neuromuscular postural control adjustments."
  },
  {
    "id": "source-2-a1-054",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which anatomical motion occurs in the transverse plane around a vertical (longitudinal) axis?",
    "options": [
      "Cervical Lateral Flexion (evaluated under standardized clinical sports science protocols)",
      "Wrist Radial Deviation (assessed during high-performance athletic screening)",
      "Ankle Dorsiflexion (confirmed via evidence-based musculoskeletal diagnostics)",
      "Spinal Rotation evaluated across standardized high-performance sports environments"
    ],
    "correct": 3,
    "explanation": "Rotational movements (e.g., spinal trunk rotation, shoulder internal/external rotation) occur in the transverse (horizontal) plane around a vertical/longitudinal axis."
  },
  {
    "id": "source-2-a1-055",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What happens to the moment of inertia (I) of a diver when they tuck their limbs tightly into their chest compared to a layout position?",
    "options": [
      "Moment of inertia increases, slowing angular velocity evaluated across standardized high-performance sports environments",
      "Moment of inertia decreases, increasing angular velocity to conserve angular momentum (L = Iω) (assessed during high-performance athletic screening)",
      "Moment of inertia remains constant evaluated across standardized high-performance sports environments",
      "Angular momentum is destroyed evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "By pulling limbs close to the axis of rotation, mass distribution radius (r) decreases, dramatically reducing moment of inertia (I = ∑mr²). By conservation of angular momentum (L = Iω), angular velocity (ω) increases."
  },
  {
    "id": "source-2-a1-056",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Serum Creatine Kinase (CK) elevation peaking 24 to 48 hours after strenuous exercise primarily reflects which physiological event?",
    "options": [
      "Skeletal muscle sarcolemmal micro-damage induced by unaccustomed eccentric contractions",
      "Acute renal failure evaluated across standardized high-performance sports environments",
      "Severe hepatic glycogen depletion evaluated across standardized high-performance sports environments",
      "Myocardial infarction evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "CK is a cytosolic enzyme present in skeletal muscle. Eccentric contractions disrupt the sarcolemma and z-discs, causing CK leakage into circulation, peaking at 24-48h."
  },
  {
    "id": "source-2-a1-057",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "An elevated Resting Blood Urea Nitrogen (BUN) to Creatinine ratio (>20:1) combined with elevated serum urea in an athlete indicates:",
    "options": [
      "Optimal recovery and supercompensation evaluated across standardized high-performance sports environments",
      "Increased protein catabolism, insufficient carbohydrate intake, or chronic dehydration",
      "Excessive carbohydrate loading evaluated across standardized high-performance sports environments",
      "Acute muscle hypertrophy evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Elevated BUN and urea signal heightened protein catabolism (gluconeogenesis from amino acids) due to low glycogen availability or dehydration."
  },
  {
    "id": "source-2-a1-058",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What does a decline in the resting Free Testosterone to Cortisol ratio (fT/C ratio) of greater than 30% over a 2-week training block signify?",
    "options": [
      "Anabolic-catabolic imbalance indicative of overreaching or impending overtraining syndrome (evaluated under standardized clinical sports science protocols)",
      "High anabolic response and supercompensation evaluated across standardized high-performance sports environments",
      "Increased oxidative capacity evaluated across standardized high-performance sports environments",
      "Dehydration status evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "The fT/C ratio indicates anabolic vs catabolic state. A drop >30% signals incomplete recovery and excessive catabolic strain (overreaching)."
  },
  {
    "id": "source-2-a1-059",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which systemic inflammatory cytokine rises sharply immediately following prolonged strenuous exercise and acts as a central mediator stimulating hepatic hepcidin production?",
    "options": [
      "Interleukin-10 evaluated across standardized high-performance sports environments",
      "Interleukin-6 (IL-6) evaluated across standardized high-performance sports environments",
      "Interferon-gamma evaluated across standardized high-performance sports environments",
      "Transforming Growth Factor-beta (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Muscle-derived IL-6 acts as a myokine, rising exponentially during exercise. It triggers hepatic hepcidin secretion, temporarily inhibiting intestinal iron absorption."
  },
  {
    "id": "source-2-a1-060",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "How does elevated circulating hepcidin post-exercise impact iron metabolism in endurance athletes?",
    "options": [
      "Enhances duodenal iron absorption evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Increases transferrin saturation evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Binds and degrades ferroportin, blocking intestinal iron absorption and macrophage iron release for 3-6 hours post-exercise",
      "Stimulates immediate erythropoiesis evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Hepcidin binds to ferroportin, causing its internalization and degradation, which prevents iron efflux into blood and reduces oral iron supplement efficacy post-workout."
  },
  {
    "id": "source-2-a1-061",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "High-sensitivity C-Reactive Protein (hs-CRP) values consistently exceeding 3.0 mg/L in a non-infected elite athlete suggest:",
    "options": [
      "Optimal cardiorespiratory fitness evaluated across standardized high-performance sports environments",
      "Persistent systemic low-grade inflammation or incomplete muscle recovery (assessed during high-performance athletic screening)",
      "Low systemic inflammatory state evaluated across standardized high-performance sports environments",
      "Severe hyperhydration evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "hs-CRP is an acute-phase reactant synthesized by the liver. Chronically elevated levels (>3 mg/L) reflect ongoing systemic inflammation, micro-trauma, or overtraining."
  },
  {
    "id": "source-2-a1-062",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary fate of blood lactate during active light aerobic recovery (e.g., spinning at 40-50% VO2max) post-competition?",
    "options": [
      "Excretion through kidneys in urine evaluated across standardized high-performance sports environments",
      "Oxidation in Type I cardiac and skeletal muscle fibers back to pyruvate (assessed during high-performance athletic screening)",
      "Conversion into subcutaneous fat evaluated across standardized high-performance sports environments",
      "Storage as muscle protein evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Light active recovery enhances blood flow, delivering lactate to slow-twitch muscle fibers and myocardium where lactate dehydrogenase (LDH-H) oxidizes it to pyruvate for Krebs cycle entry."
  },
  {
    "id": "source-2-a1-063",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Under resting physiological conditions, what proportion of total liver and muscle glycogen is typically stored in a well-nourished 70 kg athlete?",
    "options": [
      "100g muscle, 400g liver evaluated across standardized high-performance sports environments",
      "400-500g in skeletal muscle, 80-100g in liver (assessed during high-performance athletic screening)",
      "50g muscle, 50g liver evaluated across standardized high-performance sports environments",
      "1000g muscle, 500g liver evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "The human body stores roughly 400-500g of glycogen in skeletal muscle (1.5-2.0 g/100g muscle wet weight) and 80-100g in the liver."
  },
  {
    "id": "source-2-a1-064",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which urinary biomarker is widely used as a field-based indicator of athlete hydration status before morning training?",
    "options": [
      "Urine Glucose test strip evaluated across standardized high-performance sports environments",
      "Urine Specific Gravity (USG) using a digital refractometer (assessed during high-performance athletic screening)",
      "Urine Ketone body concentration evaluated across standardized high-performance sports environments",
      "Urinary Creatinine Clearance evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Urine Specific Gravity (USG) measured via refractometer evaluates solute concentration. USG < 1.020 indicates euhydration, whereas USG ≥ 1.020 indicates dehydration."
  },
  {
    "id": "source-2-a1-065",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What metabolic change occurs when intracellular ATP/ADP ratio drops significantly during explosive exercise?",
    "options": [
      "Inhibition of AMP-activated protein kinase (AMPK) evaluated across standardized high-performance sports environments",
      "Activation of AMP-activated protein kinase (AMPK) and Phosphofructokinase (PFK) (assessed during high-performance athletic screening)",
      "Complete inhibition of glycolysis evaluated across standardized high-performance sports environments",
      "Stimulation of glycogen synthesis evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "A falling ATP/ADP ratio causes AMP accumulation, activating AMPK and PFK-1 to stimulate catabolic energy-generating pathways (glycolysis, fatty acid oxidation)."
  },
  {
    "id": "source-2-a1-066",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Salivary Immunoglobulin A (s-IgA) suppression during intense competition blocks indicates increased risk of:",
    "options": [
      "Acute ligament sprains evaluated across standardized high-performance sports environments",
      "Gastrointestinal bleeding evaluated across standardized high-performance sports environments",
      "Upper Respiratory Tract Infections (URTI) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Hypernatremia evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "s-IgA provides first-line mucosal immune defense. Transient suppression of s-IgA following heavy training/competition creates an 'open window' for viral URTIs."
  },
  {
    "id": "source-2-a1-067",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which enzyme converts pyruvate into lactate under anaerobic conditions while resynthesizing NAD+ to sustain glycolysis?",
    "options": [
      "Pyruvate Kinase evaluated across standardized high-performance sports environments",
      "Creatine Kinase evaluated across standardized high-performance sports environments",
      "Succinate Dehydrogenase (confirmed via evidence-based musculoskeletal diagnostics)",
      "Lactate Dehydrogenase (LDH) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Lactate Dehydrogenase (LDH) reduces pyruvate to lactate using NADH + H+, regenerating NAD+ required for step 6 of glycolysis (GAPDH reaction)."
  },
  {
    "id": "source-2-a1-068",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to the SAID Principle (Specific Adaptations to Imposed Demands), which training variable most directly determines the bioenergetic adaptation of skeletal muscle?",
    "options": [
      "Exercise duration only evaluated across standardized high-performance sports environments",
      "Time of day training occurs evaluated across standardized high-performance sports environments",
      "Exercise order in a session evaluated across standardized high-performance sports environments",
      "The specific intensity, work-to-rest ratio, and energy system utilized during training"
    ],
    "correct": 3,
    "explanation": "The SAID principle dictates that human body systems adapt specifically to the precise nature of physical stress—matching energy system demands, movement velocity, and recruitment patterns."
  },
  {
    "id": "source-2-a1-069",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In periodization theory, a training block lasting 2 to 6 weeks focused on a specific biomotor ability (e.g., Hypertrophy or Maximal Strength) is termed a:",
    "options": [
      "Mesocycle evaluated across standardized high-performance sports environments",
      "Microcycle evaluated across standardized high-performance sports environments",
      "Macrocycle evaluated across standardized high-performance sports environments",
      "Quadrennial cycle (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "A mesocycle is a medium-term training block typically lasting 2 to 6 weeks (commonly 4 weeks) targeting specific training goals within an annual macrocycle."
  },
  {
    "id": "source-2-a1-070",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which periodization model features daily or weekly variations in volume and intensity within the same microcycle?",
    "options": [
      "Traditional Linear Periodization (evaluated under standardized clinical sports science protocols)",
      "Reverse Linear Periodization (assessed during high-performance athletic screening)",
      "Block Periodization evaluated across standardized high-performance sports environments",
      "Undulating (Non-linear) Periodization (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Undulating (Non-linear) Periodization varies intensity and volume frequently (e.g., hyperthrophy day, strength day, power day within one week)."
  },
  {
    "id": "source-2-a1-071",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What phase of the Stretch-Shortening Cycle (SSC) represents the brief isometric transition period between eccentric deceleration and concentric acceleration?",
    "options": [
      "Amortization phase",
      "Eccentric phase",
      "Concentric phase",
      "Propulsive phase"
    ],
    "correct": 0,
    "explanation": "The amortization phase is the crucial electro-mechanical delay between eccentric stretch and concentric shortening. Minimizing amortization duration maximizes elastic recoil and reflex activation."
  },
  {
    "id": "source-2-a1-072",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Rate of Force Development (RFD) evaluation, RFD is mathematically defined as:",
    "options": [
      "Change in Work / Change in Time (evaluated under standardized clinical sports science protocols)",
      "Change in Force / Change in Time (ΔF / Δt) (assessed during high-performance athletic screening)",
      "Change in Power / Change in Displacement (confirmed via evidence-based musculoskeletal diagnostics)",
      "Force × Velocity evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "RFD measures explosive strength, calculated as the slope of the force-time curve (ΔF / Δt) in early contraction phases (e.g., 0-50ms, 0-100ms)."
  },
  {
    "id": "source-2-a1-073",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which exercise loading parameter is typically recommended by the NSCA for developing maximal muscular strength in trained athletes?",
    "options": [
      "1-6 reps at ≥ 85% 1RM",
      "15-20 reps at 50-60% 1RM",
      "8-12 reps at 67-85% 1RM",
      "30+ reps to failure"
    ],
    "correct": 0,
    "explanation": "The NSCA guidelines specify loads ≥ 85% 1RM for 1 to 6 repetitions per set with 2-5 minutes rest to optimize maximal strength adaptations."
  },
  {
    "id": "source-2-a1-074",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Velocity-Based Training (VBT), a mean concentric velocity threshold of 0.35 to 0.45 m/s during a back squat corresponds approximately to what percentage of 1RM?",
    "options": [
      "50% 1RM evaluated across standardized high-performance sports environments",
      "70% 1RM evaluated across standardized high-performance sports environments",
      "90-100% 1RM (Maximal Strength / 1RM) (confirmed via evidence-based musculoskeletal diagnostics)",
      "30% 1RM evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "In VBT, a mean velocity of ~0.30 - 0.35 m/s in back squat corresponds to ~90-100% 1RM (minimum velocity threshold), whereas 1.0 m/s corresponds to ~50% 1RM."
  },
  {
    "id": "source-2-a1-075",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What physiological principle explains why heavy resistance training leads to increased rate coding and motor unit synchronization?",
    "options": [
      "Somatic habituation evaluated across standardized high-performance sports environments",
      "Central Nervous System neural adaptation (assessed during high-performance athletic screening)",
      "Muscle cell hyperplasia evaluated across standardized high-performance sports environments",
      "Tendon calcification evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Early strength gains (first 4-8 weeks) are predominantly driven by neural adaptations, including increased recruitment, higher firing rates (rate coding), and motor unit synchronization."
  },
  {
    "id": "source-2-a1-076",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the recommended rest interval between sets when training for maximal explosive power (e.g., Olympic weightlifting cleans)?",
    "options": [
      "30 seconds",
      "60 seconds",
      "2 to 5 minutes",
      "10 minutes"
    ],
    "correct": 2,
    "explanation": "Developing maximal power requires full ATP-PCr resynthesis and neurological recovery, necessitating 2 to 5 minutes rest between sets."
  },
  {
    "id": "source-2-a1-077",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to Selye's General Adaptation Syndrome (GAS), what happens if a training stressor is excessive and unmanaged over extended periods?",
    "options": [
      "Exhaustion phase (Overtraining / Injury) (evaluated under standardized clinical sports science protocols)",
      "Resistance phase evaluated across standardized high-performance sports environments",
      "Alarm phase evaluated across standardized high-performance sports environments",
      "Supercompensation phase evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "If physical stressors persist without adequate recovery, the body enters the Exhaustion phase, leading to overtraining syndrome, burnout, and tissue breakdown."
  },
  {
    "id": "source-2-a1-078",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which plyometric exercise intensity classification corresponds to depth jumps from a 75 cm box?",
    "options": [
      "High / Shock intensity (evaluated under standardized clinical sports science protocols)",
      "Medium intensity evaluated across standardized high-performance sports environments",
      "Low intensity evaluated across standardized high-performance sports environments",
      "Sub-threshold intensity (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Depth jumps from high boxes (>60-75 cm) exert high shock impact loads, placing extreme stretch-shortening stress on tendons and neuromuscular systems."
  },
  {
    "id": "source-2-a1-079",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In training program design, 'Density' refers to:",
    "options": [
      "The mass of weights lifted per session evaluated across standardized high-performance sports environments",
      "The frequency of training sessions per week evaluated across standardized high-performance sports environments",
      "The distribution of work relative to rest periods within a training session (confirmed via evidence-based musculoskeletal diagnostics)",
      "The degree of movement complexity evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Training density describes the relationship between work volume and rest intervals per unit time. Increasing density means performing more work in less total time."
  },
  {
    "id": "source-2-a1-080",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Post-Activation Potentiation (PAP) / Post-Activation Performance Enhancement (PAPE) is best elicited by performing:",
    "options": [
      "Low-intensity static stretching 5 minutes before sprinting evaluated across standardized high-performance sports environments",
      "High-volume aerobic cycling before powerlifting evaluated across standardized high-performance sports environments",
      "A heavy conditioning contraction (e.g., 3RM squat) 4-8 minutes prior to an explosive task (e.g., countermovement jump)",
      "Cryotherapy immediately before jumping evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "PAPE utilizes heavy pre-loading (e.g., 85-90% 1RM squat) to increase myosin light-chain phosphorylation and spinal excitability, enhancing explosive performance 4-8 minutes later."
  },
  {
    "id": "source-2-a1-081",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which neuromuscular adaptation occurs as a result of long-term heavy eccentric training?",
    "options": [
      "Decrease in fascicle length evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Loss of Type IIa fibers evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Addition of sarcomeres in series, increasing muscle fascicle length and shifting optimal length to longer muscle lengths",
      "Reduction in tendon stiffness evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Eccentric training induces longitudinal sarcomerogenesis (adding sarcomeres in series), which increases muscle fascicle length and protects against strain injury at long muscle lengths."
  },
  {
    "id": "source-2-a1-082",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary objective of a 'Taper' phase prior to major athletic competition?",
    "options": [
      "Maximize training volume to force fatigue evaluated across standardized high-performance sports environments",
      "Cease all physical activity completely for 3 weeks evaluated across standardized high-performance sports environments",
      "Reduce training volume (by 40-60%) while maintaining intensity to eliminate fatigue while preserving fitness",
      "Drastically increase training frequency evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "An optimal exponential taper reduces training volume by 40-60% while maintaining intensity and frequency, enabling fatigue dissipation while preserving fitness (supercompensation)."
  },
  {
    "id": "source-2-a1-083",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to Self-Determination Theory (Deci & Ryan), intrinsic motivation is maximized when which three basic psychological needs are fulfilled?",
    "options": [
      "Money, Fame, and Victory evaluated across standardized high-performance sports environments",
      "Arousal, Anxiety, and Stress (assessed during high-performance athletic screening)",
      "Power, Control, and Superiority (confirmed via evidence-based musculoskeletal diagnostics)",
      "Autonomy, Competence, and Relatedness (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Self-Determination Theory posits that human flourishing and intrinsic motivation depend on satisfying three core needs: Autonomy (self-governance), Competence (mastery), and Relatedness (belonging)."
  },
  {
    "id": "source-2-a1-084",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Hanin's Individual Zones of Optimal Functioning (IZOF) model, optimal athletic performance occurs when:",
    "options": [
      "Anxiety is at the absolute lowest possible level measured under standardized physiological testing conditions",
      "Arousal is at an identical moderate level for all athletes measured under standardized physiological testing conditions",
      "Extrinsic rewards exceed intrinsic drive evaluated across standardized high-performance sports environments",
      "An athlete's emotional arousal state falls within their personal, individual bandwidth of optimal anxiety"
    ],
    "correct": 3,
    "explanation": "IZOF proposes that each athlete possesses a unique optimal zone of state anxiety/arousal (which may be low, moderate, or high) where peak performance is achieved."
  },
  {
    "id": "source-2-a1-085",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which psychological phenomenon occurs when high cognitive anxiety interacts with physiological arousal to cause a precipitous drop in performance?",
    "options": [
      "Inverted-U Gradual Decline (evaluated under standardized clinical sports science protocols)",
      "Hardiness theory evaluated across standardized high-performance sports environments",
      "Drive Theory evaluated across standardized high-performance sports environments",
      "Fazey and Hardy's Catastrophe Theory (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Catastrophe Theory predicts that when cognitive anxiety is high, increasing somatic arousal beyond an optimal threshold causes a sudden, catastrophic collapse in performance."
  },
  {
    "id": "source-2-a1-086",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In sports psychology, cognitive anxiety differs from somatic anxiety in that cognitive anxiety represents:",
    "options": [
      "Negative thoughts, worries, and apprehension of failure (evaluated under standardized clinical sports science protocols)",
      "Physiological symptoms like elevated heart rate and sweating (assessed during high-performance athletic screening)",
      "Muscle tension and tremors evaluated across standardized high-performance sports environments",
      "Pupillary dilation evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Cognitive anxiety involves the mental component (worry, negative self-talk, fear of failure), whereas somatic anxiety involves perceived physiological arousal symptoms."
  },
  {
    "id": "source-2-a1-087",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which mental skill technique involves systematic contraction and relaxation of major muscle groups to reduce somatic anxiety?",
    "options": [
      "Cognitive Reframing evaluated across standardized high-performance sports environments",
      "Thought Stopping evaluated across standardized high-performance sports environments",
      "Autogenic Imagery evaluated across standardized high-performance sports environments",
      "Jacobson's Progressive Muscle Relaxation (PMR) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Jacobson's PMR involves sequentially tensing and releasing specific muscle groups, teaching athletes to recognize and release physical muscle tension."
  },
  {
    "id": "source-2-a1-088",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Bandura's Social Cognitive Theory, which source exerts the strongest influence on an athlete's self-efficacy?",
    "options": [
      "Performance Accomplishments (Enactive Mastery Experiences) (evaluated under standardized clinical sports science protocols)",
      "Verbal persuasion from coach evaluated across standardized high-performance sports environments",
      "Vicarious experiences (modeling) evaluated across standardized high-performance sports environments",
      "Physiological arousal interpretation evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Enactive mastery experiences (past successful performances) provide the most direct, authentic evidence of capability and are the most powerful builder of self-efficacy."
  },
  {
    "id": "source-2-a1-089",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What psychological strategy involves changing an athlete's perception of anxiety symptoms from 'debilitative' (harmful) to 'facilitative' (helpful for performance)?",
    "options": [
      "Thought Suppression evaluated across standardized high-performance sports environments",
      "Cognitive Reframing / Reappraisal (assessed during high-performance athletic screening)",
      "Somatic Distraction evaluated across standardized high-performance sports environments",
      "Emotional Avoidance evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Cognitive reframing reinterprets physiological arousal (e.g., racing heart) as readiness and excitement rather than fear, rendering it facilitative."
  },
  {
    "id": "source-2-a1-090",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Nideffer's model of attentional focus categorizes attention along which two dimensions?",
    "options": [
      "Internal vs External and Positive vs Negative (evaluated under standardized clinical sports science protocols)",
      "Duration (Short vs Long) and Intensity (High vs Low) (assessed during high-performance athletic screening)",
      "Width (Broad vs Narrow) and Direction (Internal vs External) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Visual vs Auditory evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Nideffer's model classifies attention across Width (Broad vs Narrow) and Direction (Internal vs External), resulting in four quadrants (e.g., Broad-External for reading game play)."
  },
  {
    "id": "source-2-a1-091",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which attentional quadrant in Nideffer's model is required for a quarterback reading an opposing defense or a soccer player assessing open teammates?",
    "options": [
      "Broad-Internal",
      "Narrow-Internal",
      "Broad-External",
      "Narrow-External"
    ],
    "correct": 2,
    "explanation": "A Broad-External focus allows athletes to rapidly integrate multiple environmental cues (opponents, teammates, ball movement) across a wide field of view."
  },
  {
    "id": "source-2-a1-092",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the psychological definition of 'Choking under pressure' in elite sport?",
    "options": [
      "Physical suffocation from dynamic airway collapse evaluated across standardized high-performance sports environments",
      "Gradual physical fatigue late in a match evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "A acute process where performance deteriorates below expected levels due to self-focused attention or distraction under pressure",
      "Lack of tactical training evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Choking is a critical performance breakdown occurring under pressure, caused by high anxiety shifting focus either internally to step-by-step movement execution or to task-irrelevant worries."
  },
  {
    "id": "source-2-a1-093",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which goal type focuses on self-referenced metrics of improvement (e.g., improving personal 100m sprint time by 0.1s) rather than outcome?",
    "options": [
      "Outcome Goal",
      "Process Goal",
      "Performance Goal",
      "Extrinsic Goal"
    ],
    "correct": 2,
    "explanation": "Performance goals focus on achieving personal standards or performance objectives independently of opponents (e.g., personal best time)."
  },
  {
    "id": "source-2-a1-094",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What goal setting category targets specific behavioral actions performed during execution (e.g., keeping elbow high during javelin throw)?",
    "options": [
      "Outcome Goal",
      "Performance Goal",
      "Subjective Goal",
      "Process Goal"
    ],
    "correct": 3,
    "explanation": "Process goals focus on the specific execution behaviors and technical actions necessary to carry out a skill successfully."
  },
  {
    "id": "source-2-a1-095",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to ACSM/IOC sports nutrition guidelines, what is the daily carbohydrate recommendation for athletes undergoing high-intensity endurance training (2-3 hours/day)?",
    "options": [
      "1 to 3 g/kg body weight",
      "6 to 10 g/kg body weight",
      "3 to 5 g/kg body weight",
      "12 to 15 g/kg body weight"
    ],
    "correct": 1,
    "explanation": "Athletes engaged in moderate-to-high intensity endurance training (1-3 h/day) require 6 to 10 g/kg body weight of carbohydrate daily to maintain muscle glycogen stores."
  },
  {
    "id": "source-2-a1-096",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the recommended daily protein intake range for strength and power athletes aiming to optimize muscle protein synthesis (MPS)?",
    "options": [
      "0.8 g/kg body weight",
      "3.5 to 4.5 g/kg body weight",
      "1.6 to 2.2 g/kg body weight",
      "5.0+ g/kg body weight"
    ],
    "correct": 2,
    "explanation": "Research consistently demonstrates that protein intakes of 1.6 to 2.2 g/kg/day (distributed in 0.4 g/kg meals every 3-4 hours) maximize muscle hyperthrophy and recovery."
  },
  {
    "id": "source-2-a1-097",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "To replace fluid losses post-exercise, how much fluid should an athlete consume relative to body weight lost during training?",
    "options": [
      "50% of weight lost evaluated across standardized high-performance sports environments",
      "100% of weight lost evaluated across standardized high-performance sports environments",
      "120% to 150% of body weight lost (1.2-1.5 L per 1 kg lost) (confirmed via evidence-based musculoskeletal diagnostics)",
      "300% of weight lost evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Because sweat and urine losses continue post-exercise, athletes should consume 120-150% (1.2 to 1.5 L) of the net fluid lost to restore euhydration within 4-6 hours."
  },
  {
    "id": "source-2-a1-098",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which ergogenic supplement acts intracellularly to buffer hydrogen ions (H+), delaying acidosis during high-intensity exercise lasting 1 to 4 minutes?",
    "options": [
      "Beta-Alanine (precursor to Carnosine) (evaluated under standardized clinical sports science protocols)",
      "Creatine Monohydrate evaluated across standardized high-performance sports environments",
      "Caffeine Anhydrous evaluated across standardized high-performance sports environments",
      "L-Carnitine evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Beta-alanine combines with histidine to synthesize muscle carnosine, a major intracellular physicochemical buffer against H+ accumulation during high-glycolytic exercise."
  },
  {
    "id": "source-2-a1-099",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary physiological mechanism of action of Caffeine as an ergogenic aid?",
    "options": [
      "Stimulation of insulin secretion evaluated across standardized high-performance sports environments",
      "Neutralization of blood lactate evaluated across standardized high-performance sports environments",
      "Direct conversion into ATP evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Antagonism of central adenosine A1 and A2A receptors, decreasing perceived exertion and enhancing motor unit drive"
    ],
    "correct": 3,
    "explanation": "Caffeine crosses the blood-brain barrier and competitively inhibits central adenosine receptors, blocking adenosine-induced sedation, lowering RPE, and increasing central motor drive."
  },
  {
    "id": "source-2-a1-100",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the evidence-based daily loading protocol for Creatine Monohydrate to rapidly saturate muscle total creatine stores?",
    "options": [
      "1g/day before sleep for 3 months evaluated across standardized high-performance sports environments",
      "50g once daily for 30 days evaluated across standardized high-performance sports environments",
      "20g/day (divided into four 5g doses) for 5-7 days, followed by 3-5g/day maintenance",
      "10g intake only on competition days evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Standard creatine loading uses 20 g/day (0.3 g/kg/day) split into 4 doses for 5-7 days to saturate intramuscular phosphocreatine by 20-40%, followed by 3-5 g/day maintenance."
  },
  {
    "id": "source-2-a1-101",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the recommended carbohydrate concentration in a sports drink designed for optimal gastric emptying and intestinal fluid absorption during endurance exercise?",
    "options": [
      "1-2% evaluated across standardized high-performance sports environments",
      "15-20% (hypertonic solution) (assessed during high-performance athletic screening)",
      "6-8% (isotonic solution) (confirmed via evidence-based musculoskeletal diagnostics)",
      "25-30% evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "A 6-8% carbohydrate solution (containing glucose/maltodextrin and sodium) provides optimal osmolarity for rapid gastric emptying and intestinal sodium-glucose co-transport."
  },
  {
    "id": "source-2-a1-102",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Hyponatremia in marathon runners (blood sodium < 135 mmol/L) is primarily caused by:",
    "options": [
      "Overconsumption of hypotonic fluids (plain water) exceeding sweat losses combined with persistent sweat sodium loss",
      "Excessive intake of sodium chloride tablets evaluated across standardized high-performance sports environments",
      "High protein diet evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Low carbohydrate availability evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Exercise-Associated Hyponatremia (EAH) is driven by over-drinking plain water or hypotonic fluids beyond sweat rate, diluting extracellular fluid sodium concentrations."
  },
  {
    "id": "source-2-a1-103",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Relative Energy Deficiency in Sport (RED-S) expands upon the Female Athlete Triad to include impaired physiological function affecting which systems in BOTH male and female athletes?",
    "options": [
      "Metabolic rate, bone health, immunity, protein synthesis, cardiovascular health, and psychological well-being driven by Low Energy Availability (LEA)",
      "Only bone density and menstrual cycle evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Excessive body fat accumulation evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Kidney hypertrophy evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "RED-S describes systemic physiological impairments (metabolic rate, bone health, immunity, cardiovascular, endocrine) resulting from chronic Low Energy Availability (<30 kcal/kg FFM/day)."
  },
  {
    "id": "source-2-a1-104",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which dietary nitrate source enhances endothelial nitric oxide (NO) production via the nitrate-nitrite-NO pathway, reducing the O2 cost of submaximal exercise?",
    "options": [
      "Beetroot juice concentrate (evaluated under standardized clinical sports science protocols)",
      "Whey protein isolate (assessed during high-performance athletic screening)",
      "Citrus fruit pectin (confirmed via evidence-based musculoskeletal diagnostics)",
      "Fish oil softgels evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Dietary inorganic nitrate (found abundantly in concentrated beetroot juice) is converted to nitrite by oral bacteria and subsequently to nitric oxide, improving mitochondrial efficiency and vasodilation."
  },
  {
    "id": "source-2-a1-105",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary risk associated with high-dose acute ingestion of Sodium Bicarbonate (0.3 g/kg) as an extracellular buffer?",
    "options": [
      "Renal stone formation evaluated across standardized high-performance sports environments",
      "Hypoglycemia evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Central nervous system depression evaluated across standardized high-performance sports environments",
      "Severe gastrointestinal distress (nausea, stomach cramping, diarrhea) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Extracellular buffering via sodium bicarbonate (0.3 g/kg) effectively increases blood HCO3-, but frequently causes acute GI distress due to gas production and osmotic fluid shifts in the gut."
  },
  {
    "id": "source-2-a1-106",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which fat-soluble vitamin plays a critical role in bone mineralization, skeletal muscle calcium handling, and immune function, frequently requiring supplementation in indoor athletes?",
    "options": [
      "Vitamin A evaluated across standardized high-performance sports environments",
      "Vitamin K2 evaluated across standardized high-performance sports environments",
      "Vitamin E evaluated across standardized high-performance sports environments",
      "Vitamin D (25-hydroxyvitamin D) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Vitamin D acts as a secosteroid hormone regulating calcium homeostasis, bone density, muscle protein synthesis, and immune resilience. Athletes with 25(OH)D < 30 ng/mL require supplementation."
  },
  {
    "id": "source-2-a1-107",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which type of validity establishes that a new field-based fitness test strongly correlates with the gold-standard laboratory reference criterion?",
    "options": [
      "Criterion-related (Concurrent) Validity (evaluated under standardized clinical sports science protocols)",
      "Content Validity evaluated across standardized high-performance sports environments",
      "Face Validity evaluated across standardized high-performance sports environments",
      "Construct Validity evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Concurrent criterion validity evaluates how well test scores correlate with an established gold-standard reference measurement administered at approximately the same time."
  },
  {
    "id": "source-2-a1-108",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "The Intraclass Correlation Coefficient (ICC) measures which psychometric quality of a sports science testing battery?",
    "options": [
      "Measurement sensitivity to change evaluated across standardized high-performance sports environments",
      "Predictive clinical utility evaluated across standardized high-performance sports environments",
      "Absolute error magnitude in engineering units evaluated across standardized high-performance sports environments",
      "Relative reliability (consistency of ranking order across repeated measures) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "ICC assesses relative reliability—reflecting the proportion of total variance attributable to true between-subject differences across repeated test trials (ICC > 0.90 indicates high reliability)."
  },
  {
    "id": "source-2-a1-109",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What parameter quantifies absolute trial-to-trial measurement error in the original unit of measurement (e.g., kilograms or centimeters)?",
    "options": [
      "Pearson correlation coefficient (r) (evaluated under standardized clinical sports science protocols)",
      "Standard Error of Measurement (SEM) (assessed during high-performance athletic screening)",
      "Statistical Power (1-beta) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Type I Error rate evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "The Standard Error of Measurement (SEM = SD × √(1 - ICC)) provides absolute reliability in original units, reflecting precision of individual score estimates."
  },
  {
    "id": "source-2-a1-110",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In performance testing, the Minimal Detectable Change (MDC95) represents:",
    "options": [
      "The minimum change score required to be 95% confident that the observed change is true and beyond measurement error",
      "The smallest statistically significant difference in group means evaluated across standardized high-performance sports environments",
      "The maximum possible improvement achievable by an athlete evaluated across standardized high-performance sports environments",
      "The average standard deviation of the baseline test evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "MDC95 (calculated as SEM × 1.96 × √2) defines the threshold of score change that exceeds measurement error with 95% certainty."
  },
  {
    "id": "source-2-a1-111",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What distinguishes a Norm-Referenced assessment from a Criterion-Referenced assessment?",
    "options": [
      "Norm-referenced compares an athlete's score against a specific predefined pass/fail cutoff score evaluated across standardized high-performance sports environments",
      "Criterion-referenced is used only for lab tests evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Norm-referenced compares an athlete's score against normative peer data percentile ranks, whereas criterion-referenced compares scores against a fixed performance standard",
      "Norm-referenced testing has no reliability evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Norm-referenced tests judge performance relative to a population distribution (percentiles), while criterion-referenced tests judge performance against an absolute performance benchmark."
  },
  {
    "id": "source-2-a1-112",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In diagnostic screening, 'Specificity' is defined as the ability of a test to correctly identify:",
    "options": [
      "Athletes who actually have the condition/injury (True Positive rate) (evaluated under standardized clinical sports science protocols)",
      "Athletes who DO NOT have the condition/injury (True Negative rate) (assessed during high-performance athletic screening)",
      "False positives only evaluated across standardized high-performance sports environments",
      "The severity of an injury evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Specificity measures the proportion of healthy individuals correctly identified as negative (True Negatives / [True Negatives + False Positives]). High specificity minimizes false positives."
  },
  {
    "id": "source-2-a1-113",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What type of test sensitivity is required for an entry-level injury screening tool in elite sports academies?",
    "options": [
      "High sensitivity to detect almost all individuals at risk and avoid missing true cases (low false-negative rate)",
      "High specificity to rule out minor injuries evaluated across standardized high-performance sports environments",
      "Low sensitivity and low specificity evaluated across standardized high-performance sports environments",
      "Zero predictive value measured under standardized physiological testing conditions (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Screening tools prioritize high sensitivity so that almost all athletes carrying potential risk factors are flagged (low false negatives) for detailed secondary assessment."
  },
  {
    "id": "source-2-a1-114",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Prior to conducting a maximal VO2max treadmill stress test, which condition represents an ABSOLUTE contraindication to testing?",
    "options": [
      "Acute myocardial infarction within past 2 days or unstable angina (evaluated under standardized clinical sports science protocols)",
      "Controlled mild hypertension (135/85 mmHg) evaluated across standardized high-performance sports environments",
      "Resting heart rate of 80 bpm evaluated across standardized high-performance sports environments",
      "Mild DOMS from previous day training evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Absolute contraindications (e.g., recent acute MI, unstable angina, uncontrolled arrhythmias, acute pulmonary embolism) present severe life-threatening risk, prohibiting exercise testing."
  },
  {
    "id": "source-2-a1-115",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In force plate testing, what sampling frequency is mandatory to accurately capture rapid transient impact force peaks during landing tasks?",
    "options": [
      "50 Hz evaluated across standardized high-performance sports environments",
      "1000 Hz (1 kHz) or higher (assessed during high-performance athletic screening)",
      "100 Hz evaluated across standardized high-performance sports environments",
      "10 Hz evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "High-velocity transient force signals (impact spikes <20 ms) require force plate sampling rates of 1000 Hz or higher to prevent aliasing and signal distortion."
  },
  {
    "id": "source-2-a1-116",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary advantage of field-based fitness testing compared to laboratory testing?",
    "options": [
      "Greater control over environmental temperature and humidity evaluated across standardized high-performance sports environments",
      "Complete elimination of measurement error evaluated across standardized high-performance sports environments",
      "Gold-standard precision of physiological instrumentation evaluated across standardized high-performance sports environments",
      "Higher ecological validity, lower cost, and capability to evaluate large squads simultaneously in sport-specific environments"
    ],
    "correct": 3,
    "explanation": "Field tests provide high ecological validity because they occur in real sporting environments, enabling efficient, low-cost screening of entire teams under competitive conditions."
  },
  {
    "id": "source-2-a1-117",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "When calibrating a metabolic cart (gas analyzer) before VO2max testing, which two gases are used for automated two-point calibration?",
    "options": [
      "100% Pure Oxygen and 100% Nitrogen evaluated across standardized high-performance sports environments",
      "Ambient air (20.93% O2, 0.03% CO2) and a certified calibration gas mixture (typically 16.0% O2, 4.0% CO2)",
      "Pure Carbon Dioxide and Pure Helium evaluated across standardized high-performance sports environments",
      "Water vapor and Argon evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Metabolic carts require a 2-point calibration using ambient room air (20.93% O2, 0.03% CO2) and a precision reference tank containing typical expired gas concentrations (~16% O2, 4% CO2)."
  },
  {
    "id": "source-2-a1-118",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In 3D motion capture systems, 'Camera Calibration' establishes:",
    "options": [
      "The anatomical muscle insertion points evaluated across standardized high-performance sports environments",
      "The heart rate threshold of the subject evaluated across standardized high-performance sports environments",
      "The spatial transformation matrix converting 2D camera image coordinates into a calibrated 3D global coordinate space",
      "The force plate sampling frequency evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "3D motion capture calibration uses a wand/frame of known dimensions to define the global coordinate system origin and determine 3D spatial transformation parameters for all cameras."
  },
  {
    "id": "source-2-a1-119",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In load monitoring, the Acute:Chronic Workload Ratio (ACWR) compares current acute load to historical chronic load over what standard rolling time frames?",
    "options": [
      "7-day acute workload vs. 28-day chronic workload",
      "1-day acute load vs. 3-day chronic load",
      "14-day acute load vs. 90-day chronic load",
      "30-day acute load vs. 1-year chronic load"
    ],
    "correct": 0,
    "explanation": "ACWR evaluates fatigue vs. fitness by dividing the acute workload (most recent 7 days) by the chronic workload (rolling 28-day average)."
  },
  {
    "id": "source-2-a1-120",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "According to Gabbett's load management framework, what ACWR range represents the 'Sweet Spot' where injury risk is minimized while building high fitness?",
    "options": [
      "0.2 to 0.5",
      "0.8 to 1.3",
      "1.5 to 2.0",
      "2.5 to 3.0"
    ],
    "correct": 1,
    "explanation": "An ACWR between 0.8 and 1.3 is considered the 'sweet spot' with low relative injury risk. Ratios > 1.5 ('danger zone') indicate rapid load spikes increasing injury vulnerability."
  },
  {
    "id": "source-2-a1-121",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What mathematical model for ACWR calculation accounts for the non-linear decaying effects of fitness and fatigue over time?",
    "options": [
      "Exponentially Weighted Moving Average (EWMA) (evaluated under standardized clinical sports science protocols)",
      "Unweighted Coupled Rolling Average (assessed during high-performance athletic screening)",
      "Simple Linear Regression evaluated across standardized high-performance sports environments",
      "Z-Score Percentile Transformation (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "EWMA assigns higher weight to recent training sessions and models the physiological decay of fitness and fatigue, overcoming mathematical flaws of unweighted rolling averages."
  },
  {
    "id": "source-2-a1-122",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "When calculating a Z-Score for an athlete's physical performance metric, what does a Z-Score of +2.0 indicate?",
    "options": [
      "The athlete's performance score is 2.0 standard deviations above the team mean (evaluated under standardized clinical sports science protocols)",
      "The athlete performed 2 units below the team mean evaluated across standardized high-performance sports environments",
      "The athlete scored in the bottom 2nd percentile evaluated across standardized high-performance sports environments",
      "The metric is invalid evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "A Z-score (z = [X - μ] / σ) normalizes data, where +2.0 indicates performance 2.0 standard deviations above the population/team mean (~97.7th percentile)."
  },
  {
    "id": "source-2-a1-123",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In athlete monitoring, a 'Smallest Worthwhile Change' (SWC) is commonly operationalized in team sports as:",
    "options": [
      "1.0 × Standard Error of Measurement evaluated across standardized high-performance sports environments",
      "0.2 × Between-subject Standard Deviation (0.2 × SD) (assessed during high-performance athletic screening)",
      "50% of the maximum score evaluated across standardized high-performance sports environments",
      "1.96 × Variance evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Based on Hopkins' effect size criteria, SWC for individual sports/performance metrics is calculated as 0.2 multiplied by the baseline between-subject standard deviation."
  },
  {
    "id": "source-2-a1-124",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What visual tracking display format presents multi-factorial athlete profiles (e.g., strength, speed, VO2max, mobility) normalized on radial axes?",
    "options": [
      "Radar (Spider) Chart (evaluated under standardized clinical sports science protocols)",
      "Histogram evaluated across standardized high-performance sports environments",
      "Bland-Altman Plot (confirmed via evidence-based musculoskeletal diagnostics)",
      "Scatter plot evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Radar (spider) charts plot multiple normalized performance metrics along separate radial axes emanating from a central point, providing an intuitive visual overview of an athlete's physical profile."
  },
  {
    "id": "source-2-a1-125",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In reactive strength testing, how is the Reactive Strength Index (RSI) calculated from a drop jump?",
    "options": [
      "Ground Reaction Force / Contact Time (evaluated under standardized clinical sports science protocols)",
      "Flight Time × Takeoff Velocity (assessed during high-performance athletic screening)",
      "Peak Power / Body Mass evaluated across standardized high-performance sports environments",
      "Jump Height / Ground Contact Time (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "RSI evaluates stretch-shortening cycle capability, calculated as Jump Height (m) divided by Ground Contact Time (seconds), or Flight Time divided by Contact Time."
  },
  {
    "id": "source-2-a1-126",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "When delivering physical test feedback to sports coaches, what communication strategy is most effective for driving actionable training changes?",
    "options": [
      "Presenting concise, visual single-page dashboards highlighting key performance limiters and 2-3 targeted evidence-based training recommendations",
      "Providing raw 50-page unformatted Excel spreadsheets evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Using complex academic terminology without practical context evaluated across standardized high-performance sports environments",
      "Delivering feedback 3 months after testing evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Coaches require concise, visually clear, single-page summary dashboards that highlight actionable insights and translate data into specific, practical training interventions."
  },
  {
    "id": "source-2-a1-127",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In sprinting mechanics, what velocity phase is characterized by maximum ground contact time and severe forward trunk lean?",
    "options": [
      "Top-speed upright sprint phase evaluated across standardized high-performance sports environments",
      "Deceleration phase evaluated across standardized high-performance sports environments",
      "Initial acceleration phase (first 0-10 meters) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Curve sprinting phase evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "The initial acceleration phase requires deep forward trunk lean (pushing stance) and longer ground contact times (~0.15-0.20s) to produce large horizontal impulse vectors."
  },
  {
    "id": "source-2-a1-128",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What change in ground contact mechanics occurs when a sprinter transitions from acceleration to top-speed (upright) running?",
    "options": [
      "Ground contact time increases and horizontal force dominates evaluated across standardized high-performance sports environments",
      "Braking forces drop to zero evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Ground contact time decreases (<0.10s), body posture becomes upright, and vertical impulse dominates to support body weight",
      "Stride frequency drops by 50% evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Top-speed sprinting features short ground contact times (<0.10s), upright posture, high vertical peak ground reaction forces (~4-5 BW), and rapid clawing leg mechanics."
  },
  {
    "id": "source-2-a1-129",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In load monitoring, Session-RPE (sRPE) is calculated by multiplying subjectively reported session RPE (Borg CR10 scale) by:",
    "options": [
      "Heart rate peak evaluated across standardized high-performance sports environments",
      "Distance covered in kilometers evaluated across standardized high-performance sports environments",
      "Duration of the training session in minutes (confirmed via evidence-based musculoskeletal diagnostics)",
      "Number of repetitions performed (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Foster's Session-RPE method quantifies internal training load by multiplying the overall session intensity score (RPE on 0-10 scale taken 30 min post-exercise) by session duration in minutes."
  },
  {
    "id": "source-2-a1-130",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is a major limitation of using GPS tracking devices to quantify player load during indoor court sports like badminton or basketball?",
    "options": [
      "GPS devices are banned indoors evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Excessive battery life evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Inability to measure heart rate evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "GPS signal loss indoors due to satellite occlusion, requiring optical tracking or indoor ultra-wideband (UWB) positioning systems instead"
    ],
    "correct": 3,
    "explanation": "Standard GPS relies on direct satellite line-of-sight. Indoor structures block satellite signals, necessitating Ultra-Wideband (UWB) radio-frequency systems or optical camera tracking indoors."
  },
  {
    "id": "source-2-a1-131",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What water temperature and immersion duration guidelines are recommended for Cold Water Immersion (CWI) post-exercise recovery?",
    "options": [
      "0 to 4°C for 30 minutes",
      "10 to 15°C for 10 to 15 minutes",
      "25 to 30°C for 5 minutes",
      "38 to 42°C for 20 minutes"
    ],
    "correct": 1,
    "explanation": "Evidence-based recovery guidelines recommend CWI temperatures of 10-15°C for 10-15 minutes to induce vasoconstriction, reduce edema, and decrease DOMS."
  },
  {
    "id": "source-2-a1-132",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Why might frequent, routine Cold Water Immersion (CWI) be CONTRAINDICATED during a dedicated resistance training hyperthrophy block?",
    "options": [
      "CWI blunts intracellular anabolic signaling pathways (p70S6K, mTORC1) and satellite cell activation, reducing long-term muscle hypertrophy gains",
      "CWI increases muscle fiber diameter excessively evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "CWI causes acute bone demineralization evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "CWI raises core body temperature to dangerous levels measured under standardized physiological testing conditions (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Regular post-exercise cold water immersion blunts mTORC1 signaling, skeletal muscle blood flow, and satellite cell activity, attenuating long-term muscle hypertrophy and strength adaptations."
  },
  {
    "id": "source-2-a1-133",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "During rapid travel across multiple time zones, what physiological mechanism causes 'Jet Lag'?",
    "options": [
      "Dehydration from airplane cabin air pressure only evaluated across standardized high-performance sports environments",
      "Desynchronization between external local time cues (light/dark) and endogenous circadian pacemaker in the suprachiasmatic nucleus (SCN)",
      "Lactic acid accumulation in skeletal muscle evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Acute elevation of serum hemoglobin evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Jet lag is a circadian rhythm disorder caused by misalignment between external time environment and internal circadian oscillator (SCN), disrupting melatonin and cortisol rhythms."
  },
  {
    "id": "source-2-a1-134",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "To accelerate phase-advance re-entrainment when traveling EASTWARD across 6 time zones, when should an athlete seek bright light exposure?",
    "options": [
      "In the late local evening evaluated across standardized high-performance sports environments",
      "In the early morning local time at destination (after endogenous core body temperature minimum)",
      "At midnight local time evaluated across standardized high-performance sports environments",
      "Avoid all light exposure for 72 hours evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "Phase-advancing the internal clock (moving east) requires bright light exposure in the early morning at the destination, paired with light avoidance in the late evening."
  },
  {
    "id": "source-2-a1-135",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What sleep metric measured via actigraphy or polysomnography best reflects restorative physiological repair in elite athletes?",
    "options": [
      "Stage 1 Light Sleep duration evaluated across standardized high-performance sports environments",
      "Number of nocturnal awakenings evaluated across standardized high-performance sports environments",
      "Slow-Wave Sleep (SWS / Stage 3 NREM sleep) duration (confirmed via evidence-based musculoskeletal diagnostics)",
      "REM sleep latency evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "Slow-Wave Sleep (SWS) is the deep sleep phase during which growth hormone (GH) secretion peaks, promoting tissue repair, protein synthesis, and systemic recovery."
  },
  {
    "id": "source-2-a1-136",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In monitoring autonomic nervous system recovery, how does high vagal-mediated Heart Rate Variability (rMSSD) reflect athlete readiness?",
    "options": [
      "High rMSSD indicates sympathetic dominance and high stress evaluated across standardized high-performance sports environments",
      "High rMSSD signals acute dehydration evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "High rMSSD reflects parasympathetic vagal dominance, indicating favorable physiological recovery and readiness to tolerate stress",
      "rMSSD measures voluntary motor control evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "rMSSD (root mean square of successive RR interval differences) reflects parasympathetic vagal tone. High baseline rMSSD indicates systemic recovery, whereas acute drops signal unrecovered fatigue."
  },
  {
    "id": "source-2-a1-137",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which hydrotherapy protocol alternates immersion between cold water (10-15°C) and warm water (38-40°C) to induce dynamic vascular pumping?",
    "options": [
      "Whole Body Cryotherapy",
      "Hyperbaric Oxygen Therapy",
      "Flotation Rest Therapy",
      "Contrast Water Therapy (CWT)"
    ],
    "correct": 3,
    "explanation": "Contrast Water Therapy alternates cold water (vasoconstriction) and warm water (vasodilation) to stimulate peripheral blood flow, reduce muscle swelling, and clear metabolic byproducts."
  },
  {
    "id": "source-2-a1-138",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "How do mechanical compression garments (15-30 mmHg) facilitate post-competition muscle recovery?",
    "options": [
      "By increasing arterial occlusion evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "By directly resynthesizing glycogen evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "By heating skeletal muscle to 42°C evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "By promoting venous blood return, reducing intramuscular space for edema formation, and dampening muscle perception of DOMS"
    ],
    "correct": 3,
    "explanation": "Graduated external compression enhances deep venous return, reduces extracellular fluid extravasation/swelling, and reduces inflammatory pain perception."
  },
  {
    "id": "source-2-a1-139",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Whole-Body Cryotherapy (WBC) chambers typically expose athletes to extremely cold dry air within what temperature range for 2-3 minutes?",
    "options": [
      "-10°C to -30°C (evaluated under standardized clinical sports science protocols)",
      "-110°C to -140°C (assessed during high-performance athletic screening)",
      "-60°C to -80°C (confirmed via evidence-based musculoskeletal diagnostics)",
      "0°C to -5°C evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "WBC exposes athletes to extremely cold dry air (-110°C to -140°C) for 2 to 3 minutes, triggering widespread cutaneous vasoconstriction and sympathetic stimulation."
  },
  {
    "id": "source-2-a1-140",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary recovery benefit of low-intensity active recovery (e.g., 20 min easy cycling) compared to passive rest following strenuous match play?",
    "options": [
      "Significantly faster blood lactate clearance due to sustained hyperemic muscle blood flow and oxidation",
      "Faster glycogen resynthesis without food intake evaluated across standardized high-performance sports environments",
      "Complete prevention of acute muscle damage evaluated across standardized high-performance sports environments",
      "Immediate restoration of 1RM strength evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Active recovery maintains elevated cardiac output and muscular blood flow, accelerating the transport of lactate and metabolic byproducts to oxidative tissues for removal."
  },
  {
    "id": "source-2-a1-141",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Functional Movement Screen (FMS) scoring, what total composite score out of 21 has historically been identified as a cutoff threshold associated with increased injury risk in athletes?",
    "options": [
      "≤ 14",
      "≤ 18",
      "≤ 10",
      "≤ 7"
    ],
    "correct": 0,
    "explanation": "Kiesel et al. established an FMS composite score of ≤ 14 as a historical threshold associated with elevated injury risk in professional contact sports athletes."
  },
  {
    "id": "source-2-a1-142",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which component of an Inertial Measurement Unit (IMU) sensor measures 3D angular velocity of body segments?",
    "options": [
      "3D Accelerometer evaluated across standardized high-performance sports environments",
      "Barometric pressure sensor (assessed during high-performance athletic screening)",
      "Magnetometer evaluated across standardized high-performance sports environments",
      "3D Gyroscope evaluated across standardized high-performance sports environments"
    ],
    "correct": 3,
    "explanation": "An IMU sensor contains a 3D accelerometer (measures linear acceleration), a 3D gyroscope (measures angular velocity in rad/s or deg/s), and a magnetometer (measures heading)."
  },
  {
    "id": "source-2-a1-143",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In force plate jump analysis, how is the Eccentric Utilization Ratio (EUR) calculated to evaluate elastic energy storage capacity?",
    "options": [
      "Squat Jump Height / Drop Jump Height evaluated across standardized high-performance sports environments",
      "Countermovement Jump (CMJ) Height / Squat Jump (SJ) Height (assessed during high-performance athletic screening)",
      "CMJ Flight Time / SJ Flight Time evaluated across standardized high-performance sports environments",
      "Peak Power CMJ / Peak Power SJ evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "EUR compares jump height achieved with a stretch-shortening cycle (CMJ) to jump height without a prestretch (SJ). EUR = CMJ Height / SJ Height (values > 1.10 indicate good elastic utilization)."
  },
  {
    "id": "source-2-a1-144",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which wearable sensor parameter measures the cumulative tri-axial acceleration load imposed on an athlete during a training session?",
    "options": [
      "Metabolic Equivalent (MET) evaluated across standardized high-performance sports environments",
      "Internal RPE evaluated across standardized high-performance sports environments",
      "High Speed Running Distance evaluated across standardized high-performance sports environments",
      "PlayerLoad™ (expressed in arbitrary units AU) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "PlayerLoad™ (developed by Catapult) is an instantaneous rate of change of acceleration vector sum in 3 axes (X, Y, Z), quantifying external physical movement load."
  },
  {
    "id": "source-2-a1-145",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Surface Electromyography (sEMG) signal processing, what filter operation is applied to eliminate high-frequency noise and low-frequency motion artifacts?",
    "options": [
      "Band-pass filtering (typically 20 Hz to 450/500 Hz) (evaluated under standardized clinical sports science protocols)",
      "Fast Fourier Transform evaluated across standardized high-performance sports environments",
      "Unbiased Auto-correlation evaluated across standardized high-performance sports environments",
      "Gain multiplication evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "sEMG processing applies band-pass filtering (usually 20-500 Hz) to remove low-frequency movement artifacts (<20 Hz) and high-frequency electrical noise (>500 Hz)."
  },
  {
    "id": "source-2-a1-146",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary function of a Root Mean Square (RMS) envelope in sEMG signal analysis?",
    "options": [
      "To smooth the rectified raw sEMG signal, providing a continuous representation of sEMG signal amplitude and muscle activation intensity",
      "To convert sEMG signal into mechanical force in Newtons evaluated across standardized high-performance sports environments",
      "To measure nerve conduction velocity evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "To detect joint angle evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "The RMS envelope processes raw sEMG signals over a moving time window, outputting a smoothed time-domain curve reflecting neural drive and muscle activation magnitude."
  },
  {
    "id": "source-2-a1-147",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which screening test measures dynamic single-leg balance and postural control by reaching in anterior, posteromedial, and posterolateral directions?",
    "options": [
      "FMS Deep Squat evaluated across standardized high-performance sports environments",
      "Romberg Test evaluated across standardized high-performance sports environments",
      "Functional Reach Test evaluated across standardized high-performance sports environments",
      "Star Excursion Balance Test (SEBT) / Y-Balance Test (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The Y-Balance Test (a standardized derivative of the SEBT) evaluates dynamic neuromuscular balance, motor control, and asymmetry in anterior, posteromedial, and posterolateral reach directions."
  },
  {
    "id": "source-2-a1-148",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "An asymmetry of greater than how many centimeters in the ANTERIOR reach direction on the Y-Balance Test is associated with elevated lower extremity injury risk?",
    "options": [
      "1 cm",
      "15 cm",
      "10 cm",
      "4 cm"
    ],
    "correct": 3,
    "explanation": "Plisky et al. demonstrated that a side-to-side anterior reach difference > 4 cm on the Y-Balance Test correlates with a significantly increased risk of non-contact lower limb injuries."
  },
  {
    "id": "source-2-a1-149",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In machine learning applications for sports injury prediction, what is a primary limitation of using over-fitted predictive models?",
    "options": [
      "The model performs perfectly on historical training data but fails to generalize accurately to new, unseen future athlete data",
      "The model runs too fast evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "The model requires no data evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "The model works only for female athletes evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Over-fitting occurs when a complex ML algorithm memorizes noise and specific features of training data, yielding high historical accuracy but poor generalization to prospective real-world prediction."
  },
  {
    "id": "source-2-a1-150",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What ethical concern is most prominent when implementing continuous 24/7 wearable biometric tracking in professional team sports?",
    "options": [
      "High cost of battery replacement evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Sensor weight disrupting sleep evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "GPS signal drift indoors evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Athlete data privacy, informed consent, and potential misuse of personal off-field health data for contract negotiations"
    ],
    "correct": 3,
    "explanation": "Continuous monitoring raises significant ethical and legal challenges regarding data ownership, athlete surveillance privacy, informed consent, and security of biometric data."
  },
  {
    "id": "source-2-a1-151",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In sports science statistics, which test is appropriate for comparing mean performance scores between THREE independent athlete groups (e.g., Sprinters vs. Jumpers vs. Throwers)?",
    "options": [
      "Paired Student's t-test evaluated across standardized high-performance sports environments",
      "One-Way Analysis of Variance (ANOVA) (assessed during high-performance athletic screening)",
      "Chi-Square Test of Independence (confirmed via evidence-based musculoskeletal diagnostics)",
      "Wilcoxon Signed-Rank Test evaluated across standardized high-performance sports environments"
    ],
    "correct": 1,
    "explanation": "One-Way ANOVA tests for significant differences between the means of three or more independent continuous groups. Post-hoc tests (e.g., Tukey's HSD) identify specific group differences."
  },
  {
    "id": "source-2-a1-152",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What statistic measures the practical magnitude of a difference between two treatment means independent of sample size?",
    "options": [
      "Effect Size (e.g., Cohen's d) (evaluated under standardized clinical sports science protocols)",
      "p-value measured under standardized physiological testing conditions",
      "Standard Deviation evaluated across standardized high-performance sports environments",
      "Statistical Power evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "Cohen's d quantifies effect size in standard deviation units (d = 0.2 small, 0.5 medium, 0.8 large), evaluating practical/real-world meaningfulness regardless of sample size."
  },
  {
    "id": "source-2-a1-153",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which parametric statistical test compares repeated measures taken on the SAME group of athletes before and after an 8-week training intervention?",
    "options": [
      "Independent Samples t-test (evaluated under standardized clinical sports science protocols)",
      "Chi-Square Goodness of Fit (assessed during high-performance athletic screening)",
      "Mann-Whitney U Test evaluated across standardized high-performance sports environments",
      "Paired (Dependent) Samples t-test (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "A Paired Samples t-test evaluates whether the mean difference between two matched or repeated measurements on the same subjects is statistically significantly different from zero."
  },
  {
    "id": "source-2-a1-154",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is a Type I error in sports science research hypothesis testing?",
    "options": [
      "Measuring the wrong variable evaluated across standardized high-performance sports environments",
      "Failing to reject the null hypothesis when it is actually false (False Negative)",
      "Rejecting the null hypothesis when it is actually true (False Positive) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Using an incorrect sample size evaluated across standardized high-performance sports environments"
    ],
    "correct": 2,
    "explanation": "A Type I error (alpha level, typically set at 0.05) occurs when researchers conclude that a treatment effect exists when in reality there is no true effect."
  },
  {
    "id": "source-2-a1-155",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which yogic breathing technique (Pranayama) emphasizes slow, controlled diaphragmatic breathing with nasal resistance, promoting vagal stimulation and parasympathetic recovery?",
    "options": [
      "Kapalabhati evaluated across standardized high-performance sports environments",
      "Shitkari evaluated across standardized high-performance sports environments",
      "Bhastrika evaluated across standardized high-performance sports environments",
      "Ujjayi Pranayama (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Ujjayi Pranayama (Ocean Breath) involves slight glottic constriction during slow nasal breathing, stimulating baroreceptors and vagal nerve output to enhance parasympathetic recovery."
  },
  {
    "id": "source-2-a1-156",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In Long-Term Athlete Development (LTAD) models (e.g., Balyi), what phase focuses on developing fundamental movement skills through unstructured play before specialized training?",
    "options": [
      "Active Start and FUNdamentals phases (evaluated under standardized clinical sports science protocols)",
      "Train to Compete evaluated across standardized high-performance sports environments",
      "Train to Win evaluated across standardized high-performance sports environments",
      "Specialization phase evaluated across standardized high-performance sports environments"
    ],
    "correct": 0,
    "explanation": "The FUNdamentals stage (ages 6-9) prioritizes multi-sport agility, balance, coordination, and fundamental movement skills through fun, unstructured play prior to early specialization."
  },
  {
    "id": "source-2-a1-157",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Overtraining Syndrome (OTS) differs from Non-Functional Overreaching (NFOR) primarily in that OTS is characterized by:",
    "options": [
      "Recovery achieved within 48 hours of rest evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Rapid supercompensation evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Increased muscle mass evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Prolonged performance decrement lasting several months or longer, accompanied by severe neuroendocrine and immunological dysfunction"
    ],
    "correct": 3,
    "explanation": "Overtraining Syndrome involves chronic, systemic physiological and psychological collapse requiring months of medical rest and intervention, whereas NFOR resolves in weeks."
  },
  {
    "id": "source-2-a1-158",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "Which pharmacological agent is commonly prescribed short-term under medical supervision to facilitate circadian phase shifting during acute eastward transmeridian travel?",
    "options": [
      "Diuretics evaluated across standardized high-performance sports environments",
      "Beta-blockers evaluated across standardized high-performance sports environments",
      "Systemic Corticosteroids evaluated across standardized high-performance sports environments",
      "Exogenous Melatonin administered at destination bedtime (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Exogenous melatonin (0.5 to 3 mg) ingested near target bedtime at destination acts on SCN receptors to accelerate phase-advance circadian re-entrainment."
  },
  {
    "id": "source-2-a1-159",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "What is the primary anti-doping ethical responsibility of a sports science performance analyst under WADA guidelines?",
    "options": [
      "Ensuring strict compliance with the WADA Code, verifying all supplements are third-party tested (e.g., Informed Sport), and advocating clean sport",
      "Helping athletes conceal banned substances evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Formulating custom anabolic stacks evaluated across standardized high-performance sports environments (confirmed via evidence-based musculoskeletal diagnostics)",
      "Ignoring TUE requirements evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Sports scientists are ethically and legally bound to uphold the WADA Code, educate athletes, ensure third-party supplement verification, and strictly prevent anti-doping rule violations."
  },
  {
    "id": "source-2-a1-160",
    "section": "A1",
    "topic": "Basic sports science",
    "subtopic": "Basic sports science question",
    "difficulty": "applied",
    "text": "In high-performance sports support teams, what is the primary goal of Interdisciplinary Coordination between Physiotherapists, Strength & Conditioning Coaches, and Sports Scientists?",
    "options": [
      "Working in isolation without communication evaluated across standardized high-performance sports environments (evaluated under standardized clinical sports science protocols)",
      "Competing for administrative authority evaluated across standardized high-performance sports environments (assessed during high-performance athletic screening)",
      "Collaborative integration of objective data to optimize performance, manage training loads, prevent injuries, and streamline athlete rehabilitation",
      "Replacing coaches during tactical sessions evaluated across standardized high-performance sports environments (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Interdisciplinary coordination unifies domain expertise across sports science, medicine, and coaching into a cohesive, data-driven support system centered on athlete health and performance."
  },
  {
    "id": "source-2-a2-161",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "In the 2024 Paris Olympic Games, who was India's flag bearer alongside Sharath Kamal during the Opening Ceremony on the Seine River?",
    "options": [
      "Vinesh Phogat (Asian Games Gold Medalist wrestler)",
      "Manu Bhaker (Two-time Bronze medalist at Paris 2024 Olympics)",
      "PV Sindhu (Two-time Olympic medalist in Women's Badminton)",
      "Lovlina Borgohain (Tokyo 2020 Olympic Bronze medalist boxer)"
    ],
    "correct": 2,
    "explanation": "Dual-flag bearer representation for India at the Paris 2024 Opening Ceremony featured 2-time Olympic medalist badminton player PV Sindhu and table tennis legend Table Tennis player A. Sharath Kamal.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-162",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Who became the first athlete from independent India to win TWO individual Olympic medals in a single edition of the Olympic Games at Paris 2024?",
    "options": [
      "Neeraj Chopra (Tokyo 2020 Gold & Paris 2024 Silver medalist in Javelin)",
      "Manu Bhaker (Two-time Bronze medalist at Paris 2024 Olympics)",
      "PR Sreejesh (Two-time Olympic Bronze medalist hockey goalkeeper)",
      "Aman Sehrawat (Paris 2024 Bronze medalist wrestler)"
    ],
    "correct": 1,
    "explanation": "Manu Bhaker made history at the Paris 2024 Olympics by winning two bronze medals—first in the Women's 10m Air Pistol individual event and second in the 10m Air Pistol Mixed Team event (with Sarabjot Singh).",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-163",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Where are the 2026 Asian Games scheduled to be held?",
    "options": [
      "Doha, Qatar (Host of the 2030 Asian Games) (under official national sports governance framework)",
      "Riyadh, Saudi Arabia (Host of the 2034 Asian Games)",
      "Aichi-Nagoya, Japan (Official host city of the 2026 Asian Games)",
      "Bangkok, Thailand (Four-time host city of Asian Games)"
    ],
    "correct": 2,
    "explanation": "The 20th edition of the Asian Games in 2026 will be hosted in Aichi-Nagoya, Japan.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-164",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "At the 19th Asian Games held in Hangzhou (2023), India achieved a historic medal tally milestone by crossing 100 medals for the first time. What was India's total medal count?",
    "options": [
      "107 medals (28 Gold, 38 Silver, 41 Bronze)",
      "100 medals (25 Gold, 35 Silver, 40 Bronze)",
      "112 medals (30 Gold, 40 Silver, 42 Bronze)",
      "95 medals (20 Gold, 30 Silver, 45 Bronze)"
    ],
    "correct": 0,
    "explanation": "India created history at the Hangzhou Asian Games (2022/2023) by winning a record 107 medals, comprising 28 Gold, 38 Silver, and 41 Bronze medals.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-165",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which city is officially designated to host the 2028 Summer Olympic Games?",
    "options": [
      "Brisbane, Australia (Host city of the 2032 Summer Olympic Games)",
      "Paris, France (Host city of the 2024 Summer Olympic Games)",
      "Los Angeles, USA (Official host city of the 2028 Summer Olympic Games)",
      "Madrid, Spain (European candidate Olympic host city)"
    ],
    "correct": 2,
    "explanation": "The 2028 Summer Olympics (LA28) will be hosted by Los Angeles, California, United States.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-166",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which sport is returning to the Olympic official sports program at LA 2028 after an absence of over 120 years?",
    "options": [
      "Cricket (T20 format approved for Olympic inclusion)",
      "Squash and Cricket (T20 format officially included for LA 2028)",
      "Tug of War (Historic Olympic team sport) (in accordance with national sports policy guidelines)",
      "Equestrian Polo (Historic Olympic sport) (per official MYAS sports development guidelines)"
    ],
    "correct": 1,
    "explanation": "The IOC officially approved the inclusion of Cricket (T20 format), Squash, Flag Football, Lacrosse (Sixes), and Baseball/Softball for the LA 2028 Olympic Games.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-167",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Who was India's first individual Olympic Gold Medalist in history?",
    "options": [
      "KD Jadhav (Helsinki 1952 Olympic Bronze medalist wrestler)",
      "Major Dhyan Chand (Three-time Olympic Gold medalist hockey legend)",
      "Neeraj Chopra (Tokyo 2020 Gold & Paris 2024 Silver medalist in Javelin)",
      "Abhinav Bindra (Beijing 2008 10m Air Rifle Gold medalist)"
    ],
    "correct": 3,
    "explanation": "Abhinav Bindra won India's first-ever individual Olympic gold medal in the Men's 10m Air Rifle event at the 2008 Beijing Olympics.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-168",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "At which Olympic Games did Indian wrestler KD Jadhav win independent India's first individual Olympic medal (Bronze)?",
    "options": [
      "1948 London Olympic Games (First Olympics post-independence)",
      "1956 Melbourne Olympic Games (Site of India's 6th consecutive Hockey Gold)",
      "1952 Helsinki Olympic Games (Site of KD Jadhav's historic individual medal)",
      "1960 Rome Olympic Games (Site of Milkha Singh's historic 400m 4th finish)"
    ],
    "correct": 2,
    "explanation": "Khashaba Dadasaheb Jadhav won a bronze medal in freestyle wrestling (bantamweight) at the 1952 Helsinki Olympics, becoming independent India's first individual Olympic medalist.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-169",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "In which Olympic event did Neeraj Chopra win a Gold Medal at Tokyo 2020 and a Silver Medal at Paris 2024?",
    "options": [
      "Men's Shot Put event (Official recognized sports organization/event milestone)",
      "Men's Javelin Throw event (Winning 87.58m Gold at Tokyo and 89.45m Silver at Paris)",
      "Men's Discus Throw event (Official recognized sports organization/event milestone)",
      "Men's 10-event Decathlon competition (Official recognized sports organization/event milestone)"
    ],
    "correct": 1,
    "explanation": "Neeraj Chopra won the Gold Medal in Men's Javelin Throw at Tokyo 2020 with a throw of 87.58m and secured the Silver Medal at Paris 2024 with a season-best throw of 89.45m.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-170",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the official motto of the Olympic Games updated by the IOC in 2021?",
    "options": [
      "Citius, Altius, Fortius (Classic Latin motto: Faster, Higher, Stronger)",
      "One World, One Dream (Official Beijing 2008 Olympic slogan)",
      "Inspire a Generation (Official London 2012 Olympic slogan)",
      "Citius, Altius, Fortius - Communiter (Faster, Higher, Stronger - Together)"
    ],
    "correct": 3,
    "explanation": "In July 2021, the IOC approved adding the Latin word 'Communiter' (meaning 'Together') to the classic motto, making it: 'Citius, Altius, Fortius - Communiter'.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-171",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the primary objective of the Target Olympic Podium Scheme (TOPS) established under the Ministry of Youth Affairs and Sports (MYAS)?",
    "options": [
      "Providing customized high-performance financial, coaching, and scientific support to India's top elite athletes for Olympic/Paralympic medal success",
      "Constructing village-level playgrounds (Official recognized sports organization/event milestone) (as recognized by international sports governing bodies)",
      "Organizing school annual sports days (Official recognized sports organization/event milestone) (in accordance with national sports policy guidelines)",
      "Funding state sports federations only (Official recognized sports organization/event milestone) (per official MYAS sports development guidelines)"
    ],
    "correct": 0,
    "explanation": "TOPS was launched in 2014 by MYAS to identify, groom, and provide comprehensive financial, coaching, equipment, and sports science support to elite athletes with Olympic/Paralympic podium potential.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-172",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Under the Khelo India scheme, what is the duration and annual financial assistance provided to identified talented young sports scholars?",
    "options": [
      "Rs. 1 Lakh per annum for 2 years",
      "Rs. 10 Lakh per annum for 5 years",
      "Rs. 5 Lakh per annum for 8 years",
      "Rs. 2.5 Lakh per annum for 3 years"
    ],
    "correct": 2,
    "explanation": "Under the Khelo India Scheme, selected sports talents receive financial assistance of Rs. 5 Lakh per annum for a period of 8 years to support their elite development pipeline.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-173",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What does NCOE stand for within the Sports Authority of India (SAI) organizational framework?",
    "options": [
      "National Centre of Excellence",
      "National Council of Outdoor Education",
      "National Committee of Executive Coaching",
      "National Center of Exercise Science"
    ],
    "correct": 0,
    "explanation": "SAI operates National Centres of Excellence (NCOEs) across India to provide integrated sports training, scientific support, lodging, and dietary management to elite and developmental athletes.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-174",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Where is the headquarters of the Sports Authority of India (SAI) situated?",
    "options": [
      "Netaji Subhas National Institute of Sports (NSNIS), Patiala (under official national sports governance framework)",
      "SAI Southern Centre, Bengaluru (Official recognized sports organization/event milestone)",
      "SAI Netaji Subhash Regional Centre, Lucknow (in accordance with national sports policy guidelines)",
      "Jawaharlal Nehru Stadium Complex, New Delhi (per official MYAS sports development guidelines)"
    ],
    "correct": 3,
    "explanation": "The Head Office of the Sports Authority of India (SAI) is situated at Room No. 209, SAI Head Office, Jawaharlal Nehru Stadium Complex, Lodhi Road, New Delhi.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-175",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which historic institution under SAI, located in Patiala, serves as the premier academic hub for sports coaching education in Asia?",
    "options": [
      "Lakshmibai National College of Physical Education (LNCPE), Thiruvananthapuram (under official national sports governance framework)",
      "Indira Gandhi Institute of Physical Education, Delhi (Official recognized sports organization/event milestone)",
      "High Performance Sports Institute, Bhubaneswar (Official recognized sports organization/event milestone)",
      "Netaji Subhas National Institute of Sports (NSNIS), Patiala (per official MYAS sports development guidelines)"
    ],
    "correct": 3,
    "explanation": "NSNIS Patiala, established in 1961, is Asia's largest sports institute and SAI's premier academic center for training coaches and conducting sports research.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-176",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the name of the umbrella initiative launched by the Government of India in 2019 to encourage daily physical activity and fitness culture among Indian citizens?",
    "options": [
      "Target Gold India",
      "Khelo Bharat Abhiyan",
      "Swachh Sports India",
      "Fit India Movement"
    ],
    "correct": 3,
    "explanation": "The Fit India Movement was launched by Prime Minister Narendra Modi on National Sports Day (August 29, 2019) to foster a nationwide culture of physical fitness.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-177",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "National Sports Day in India is celebrated annually on August 29th to commemorate the birth anniversary of which legendary sportsperson?",
    "options": [
      "KD Jadhav (Helsinki 1952 Olympic Bronze medalist wrestler)",
      "Milkha Singh (Official recognized sports organization/event milestone)",
      "Major Dhyan Chand (Official recognized sports organization/event milestone)",
      "PT Usha (Official recognized sports organization/event milestone)"
    ],
    "correct": 2,
    "explanation": "National Sports Day honors the birth anniversary of hockey legend Major Dhyan Chand, who won three Olympic gold medals (1928, 1932, 1936).",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-178",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the highest sporting honor awarded annually by the Ministry of Youth Affairs and Sports in India?",
    "options": [
      "Major Dhyan Chand Khel Ratna Award (under official national sports governance framework)",
      "Dronacharya Award (Official recognized sports organization/event milestone)",
      "Arjuna Award (Official recognized sports organization/event milestone)",
      "Rashtriya Khel Protsahan Puraskar (per official MYAS sports development guidelines)"
    ],
    "correct": 0,
    "explanation": "The Major Dhyan Chand Khel Ratna Award (formerly Rajiv Gandhi Khel Ratna Award) is India's highest sporting honor bestowed for spectacular and outstanding performance over a period of 4 years.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-179",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which scheme under MYAS provides financial assistance for the creation and upgrade of sports infrastructure, hosting national games, and talent identification across India?",
    "options": [
      "SAI Pension Scheme (Official recognized sports organization/event milestone)",
      "TOPS Elite Division (Official recognized sports organization/event milestone)",
      "Fit India App Scheme (Official recognized sports organization/event milestone)",
      "Khelo India - Scheme for Development of Sports (per official MYAS sports development guidelines)"
    ],
    "correct": 3,
    "explanation": "The Khelo India Scheme is the flagship national program focused on sports infrastructure development, grassroots talent identification, Khelo India Youth/University/Winter Games, and sports promotion.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-180",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the role of the National Sports Development Fund (NSDF) established by the Central Government?",
    "options": [
      "To pay salaries of administrative staff (Official recognized sports organization/event milestone) (under official national sports governance framework)",
      "To manage stadium ticket sales (Official recognized sports organization/event milestone) (as recognized by international sports governing bodies)",
      "To mobilize resources from government, corporate sectors (CSR), and non-government organizations for the promotion of sports and specialized training of elite athletes",
      "To manufacture sports equipment (Official recognized sports organization/event milestone) (per official MYAS sports development guidelines)"
    ],
    "correct": 2,
    "explanation": "The NSDF mobilizes corporate funds (CSR) and public contributions (matched by government funds) to support elite athlete preparation, sports science facilities, and infrastructure creation.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-181",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What does NADA stand for in the context of sports governance in India?",
    "options": [
      "National Anti-Doping Agency (Official recognized sports organization/event milestone)",
      "National Athletics Development Agency (as recognized by international sports governing bodies)",
      "National Alliance of Domestic Sports Associations (in accordance with national sports policy guidelines)",
      "National Administration for Doping Audit (per official MYAS sports development guidelines)"
    ],
    "correct": 0,
    "explanation": "NADA is India's autonomous national body responsible for implementing anti-doping rules, in-competition and out-of-competition testing, and anti-doping education under WADA guidelines.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-182",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Where is the World Anti-Doping Agency (WADA) global headquarters located?",
    "options": [
      "Montreal, Canada",
      "Lausanne, Switzerland",
      "Geneva, Switzerland",
      "Vienna, Austria"
    ],
    "correct": 0,
    "explanation": "The global headquarters of the World Anti-Doping Agency (WADA) is situated in Montreal, Quebec, Canada.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-183",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Under WADA regulations, what is a Therapeutic Use Exemption (TUE)?",
    "options": [
      "An exemption allowing athletes to skip mandatory drug testing (Official recognized sports organization/event milestone) (under official national sports governance framework)",
      "A waiver reducing suspensions for accidental anti-doping violations (Official recognized sports organization/event milestone) (as recognized by international sports governing bodies)",
      "Formal permission granted to an athlete to use a prohibited substance or method for a verified legitimate medical condition without committing an Anti-Doping Rule Violation (ADRV)",
      "A permit to use performance-enhancing drugs during off-season (Official recognized sports organization/event milestone) (per official MYAS sports development guidelines)"
    ],
    "correct": 2,
    "explanation": "A TUE grants an athlete approval to use a WADA-prohibited medication if documented by medical specialists to treat a diagnosed medical condition, fulfilling strict criteria.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-184",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Under the 2021 WADA Code, how many distinct Anti-Doping Rule Violations (ADRVs) are defined?",
    "options": [
      "3 ADRVs",
      "5 ADRVs",
      "11 ADRVs",
      "20 ADRVs"
    ],
    "correct": 2,
    "explanation": "The 2021 WADA Code outlines 11 specific ADRVs, including Presence, Use/Attempted Use, Refusal/Evading sample, Whereabouts failures, Tampering, Possession, Trafficking, Administration, Complicity, Prohibited Association, and Retaliation.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-185",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What constitutes a 'Whereabouts Failure' for athletes included in a Registered Testing Pool (RTP)?",
    "options": [
      "Failing a blood test (Official recognized sports organization/event milestone) (under official national sports governance framework)",
      "Failing to update body weight weekly (Official recognized sports organization/event milestone)",
      "Arriving 5 minutes late to a press conference (Official recognized sports organization/event milestone)",
      "Any combination of 3 missed tests and/or filing failures within a rolling 12-month period"
    ],
    "correct": 3,
    "explanation": "Under WADA rules, any combination of 3 whereabouts failures (missed tests or filing failures) within a 12-month period constitutes an Anti-Doping Rule Violation.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-186",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which class of performance-enhancing substances on the WADA Prohibited List is prohibited AT ALL TIMES (both in-competition and out-of-competition)?",
    "options": [
      "Anabolic Androgenic Steroids (AAS) and Peptide Hormones (e.g., EPO, Growth Hormone)",
      "Stimulants (e.g., Amphetamines) (as recognized by international sports governing bodies)",
      "Glucocorticoids (Official recognized sports organization/event milestone)",
      "Narcotics (Official recognized sports organization/event milestone)"
    ],
    "correct": 0,
    "explanation": "S1 Anabolic Agents, S2 Peptide Hormones/Growth Factors, S3 Beta-2 Agonists, S4 Hormone/Metabolic Modulators, and S5 Diuretics are prohibited at ALL times under the WADA Prohibited List.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-187",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the standard period of ineligibility (ban) mandated by WADA for a first-time intentional Anti-Doping Rule Violation involving a non-specified substance?",
    "options": [
      "1 year (Official recognized sports organization/event milestone)",
      "2 years (Official recognized sports organization/event milestone)",
      "Lifetime ban (in accordance with national sports policy guidelines)",
      "4 years (Official recognized sports organization/event milestone)"
    ],
    "correct": 3,
    "explanation": "Under the WADA Code, a first-time intentional anti-doping rule violation involving a non-specified prohibited substance carries a mandatory 4-year period of ineligibility.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-188",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which international laboratory accreditation standard must be held by anti-doping testing laboratories (such as NDTL New Delhi) to analyze athlete samples?",
    "options": [
      "ISO 9001 (Official recognized sports organization/event milestone)",
      "WADA Accreditation under International Standard for Laboratories (ISL) / ISO/IEC 17025",
      "FDA Approval (Official recognized sports organization/event milestone)",
      "CE Mark Certification (Official recognized sports organization/event milestone)"
    ],
    "correct": 1,
    "explanation": "Anti-doping laboratories must maintain ISO/IEC 17025 accreditation and WADA accreditation under the International Standard for Laboratories (ISL).",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-189",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which Indian shuttler pair made history by winning India's first-ever Asian Badminton Championships Gold Medal in Men's Doubles in 2023?",
    "options": [
      "Lakshya Sen and Kidambi Srikanth",
      "Pullela Gopichand and Prakash Padukone",
      "Satwiksairaj Rankireddy and Chirag Shetty",
      "B. Sumeeth Reddy and Manu Attri"
    ],
    "correct": 2,
    "explanation": "Satwiksairaj Rankireddy and Chirag Shetty created history in April 2023 by winning India's first gold medal in Men's Doubles at the Badminton Asia Championships in Dubai.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-190",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "In 2022, India won the prestigious Thomas Cup (Men's World Team Badminton Championship) for the first time in history by defeating which 14-time champion team in the final?",
    "options": [
      "China (Official recognized sports organization/event milestone)",
      "Indonesia (as recognized by international sports governing bodies)",
      "Japan (Official recognized sports organization/event milestone)",
      "Malaysia (per official MYAS sports development guidelines)"
    ],
    "correct": 1,
    "explanation": "India's men's badminton team achieved a historic milestone in May 2022 by defeating 14-time champions Indonesia 3-0 in Bangkok to win their maiden Thomas Cup title.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-191",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Who is the President of the Indian Olympic Association (IOA), elected in December 2022 as the first female IOA President?",
    "options": [
      "MC Mary Kom (Official recognized sports organization/event milestone)",
      "PT Usha (Official recognized sports organization/event milestone)",
      "Karnam Malleswari (in accordance with national sports policy guidelines)",
      "Anju Bobby George (per official MYAS sports development guidelines)"
    ],
    "correct": 1,
    "explanation": "Legendary sprinter PT Usha was elected unopposed as the first female President of the Indian Olympic Association (IOA) in December 2022.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-192",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which Indian female athlete won India's first-ever medal at the World Athletics Championships (Bronze in Long Jump, Paris 2003)?",
    "options": [
      "PT Usha (Official recognized sports organization/event milestone)",
      "Anju Bobby George (as recognized by international sports governing bodies)",
      "Jyotirmoyee Sikdar (in accordance with national sports policy guidelines)",
      "KM Beenamol (Official recognized sports organization/event milestone)"
    ],
    "correct": 1,
    "explanation": "Anju Bobby George won the historic Bronze medal in Women's Long Jump at the 2003 World Athletics Championships in Paris with a jump of 6.70m.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-193",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Where were the 2022 Commonwealth Games held?",
    "options": [
      "Gold Coast, Australia",
      "Glasgow, Scotland",
      "Birmingham, England",
      "Victoria, Canada"
    ],
    "correct": 2,
    "explanation": "The XXII Commonwealth Games (2022) were hosted in Birmingham, England.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-194",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Which body serves as the supreme national sports governing authority in India responsible for selecting Indian contingents for the Olympic Games and Asian Games?",
    "options": [
      "Sports Authority of India (SAI)",
      "Ministry of Youth Affairs and Sports (MYAS)",
      "Indian Olympic Association (IOA)",
      "National Sports Development Board"
    ],
    "correct": 2,
    "explanation": "The Indian Olympic Association (IOA) is the recognized National Olympic Committee (NOC) for India, overseeing Olympic team selection and Commonwealth/Asian Games participation.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-195",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What key guideline document governs the autonomy, election tenure, age limits, and recognition of National Sports Federations (NSFs) in India?",
    "options": [
      "Olympic Charter Article 4 (Official recognized sports organization/event milestone)",
      "Indian Societies Registration Act 1860 (Official recognized sports organization/event milestone)",
      "Central Civil Services Conduct Rules (Official recognized sports organization/event milestone)",
      "National Sports Development Code of India 2011 (Sports Code) (per official MYAS sports development guidelines)"
    ],
    "correct": 3,
    "explanation": "The National Sports Development Code of India 2011 sets guidelines for NSF governance, including age limits (70 years max), tenure restrictions for office bearers, and ethical transparency.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-196",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Who holds the world record for the highest individual score in Men's ODI Cricket (264 runs)?",
    "options": [
      "Rohit Sharma (under official national sports governance framework)",
      "Sachin Tendulkar (as recognized by international sports governing bodies)",
      "Virat Kohli (Official recognized sports organization/event milestone)",
      "Virender Sehwag (per official MYAS sports development guidelines)"
    ],
    "correct": 0,
    "explanation": "Rohit Sharma holds the world record for the highest individual score in One Day Internationals (264 runs off 173 balls against Sri Lanka at Kolkata in 2014).",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-197",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "Under the National Sports Development Code of India 2011, what is the maximum age limit for an individual to hold an executive office bearer position in an NSF?",
    "options": [
      "60 years",
      "65 years",
      "70 years",
      "75 years"
    ],
    "correct": 2,
    "explanation": "The National Sports Development Code of India 2011 mandates an upper age limit of 70 years for office bearers of the IOA and recognized National Sports Federations.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-198",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the maximum continuous tenure allowed for the position of President of a National Sports Federation under the National Sports Code 2011?",
    "options": [
      "Maximum 1 term of 4 years (Official recognized sports organization/event milestone)",
      "Unlimited terms (Official recognized sports organization/event milestone)",
      "Maximum 3 terms of 4 years each (total 12 years) with or without break",
      "Maximum 2 terms of 2 years (Official recognized sports organization/event milestone)"
    ],
    "correct": 2,
    "explanation": "The National Sports Code limits the tenure of NSF Presidents to a maximum of 3 terms of 4 years each (total 12 years), with or without a break.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-199",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What ethical principle prohibits sports scientists, coaches, and support staff from betting or manipulating sports competitions?",
    "options": [
      "Right to privacy (Official recognized sports organization/event milestone) (under official national sports governance framework)",
      "Therapeutic Use Exemption (Official recognized sports organization/event milestone) (as recognized by international sports governing bodies)",
      "Safeguarding against Match-Fixing and Competition Manipulation (IOC Code on Prevention of Manipulation of Competitions)",
      "Commercial licensing (Official recognized sports organization/event milestone) (per official MYAS sports development guidelines)"
    ],
    "correct": 2,
    "explanation": "The IOC Code on the Prevention of the Manipulation of Competitions strictly forbids all accredited participants from betting, match-fixing, inside information sharing, or manipulating events.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-a2-200",
    "section": "A2",
    "topic": "General sports awareness",
    "subtopic": "General sports awareness question",
    "difficulty": "foundational",
    "text": "What is the primary function of the Court of Arbitration for Sport (CAS) headquartered in Lausanne, Switzerland?",
    "options": [
      "Organizing Olympic Games (Official recognized sports organization/event milestone) (under official national sports governance framework)",
      "Drafting WADA prohibited lists (Official recognized sports organization/event milestone) (as recognized by international sports governing bodies)",
      "Resolving international sports-related legal disputes, anti-doping appeals, and athletic eligibility controversies through arbitration",
      "Allocating television broadcasting rights (Official recognized sports organization/event milestone) (per official MYAS sports development guidelines)"
    ],
    "correct": 2,
    "explanation": "CAS is the supreme independent judicial authority in global sports, providing arbitration and mediation to resolve sports legal disputes and anti-doping appeal cases.",
    "asOf": "2026-01-30"
  },
  {
    "id": "source-2-b-201",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which muscle acts as the primary initiator of glenohumeral abduction during the first 0 to 15 degrees before the deltoid achieves mechanical dominance?",
    "options": [
      "Supraspinatus muscle acting as initiator of abduction (0-15°)",
      "Subscapularis muscle acting as primary internal rotator",
      "Infraspinatus muscle acting as primary external rotator",
      "Teres Minor muscle acting as secondary external rotator"
    ],
    "correct": 0,
    "explanation": "Biomechanical and electromyographic studies demonstrate that Supraspinatus initiates glenohumeral abduction (0-15°) and compresses the humeral head into the glenoid fossa before the Deltoid takes over."
  },
  {
    "id": "source-2-b-202",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which tendon of the rotator cuff is most vulnerable to hypovascularity (critical zone ischemia) located approximately 1 cm proximal to its insertion on the greater tubercle?",
    "options": [
      "Supraspinatus tendon inserting onto the superior greater tubercle (critical zone 1 cm proximal)",
      "Subscapularis tendon inserting onto the lesser tubercle (assessed during high-performance athletic screening)",
      "Teres minor tendon inserting onto the inferior greater tubercle (confirmed via evidence-based musculoskeletal diagnostics)",
      "Infraspinatus tendon inserting onto the middle greater tubercle facet (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Codman described the 'critical zone' of the supraspinatus tendon (1 cm proximal to its insertion), which suffers from microvascular avascularity during arm adduction and elevation, predisposing it to degenerative tears."
  },
  {
    "id": "source-2-b-203",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The scapular force couple responsible for smooth upward rotation of the scapula during arm elevation above 90 degrees consists of:",
    "options": [
      "Serratus Anterior and Pectoralis Minor",
      "Latissimus Dorsi and Teres Major (assessed during high-performance athletic screening)",
      "Levator Scapulae and Rhomboid Major",
      "Upper Trapezius, Lower Trapezius, and Serratus Anterior"
    ],
    "correct": 3,
    "explanation": "Upward scapular rotation is produced by a force couple comprising the Upper Trapezius (pulls upward), Lower Trapezius (pulls downward/medially on scapular spine), and Serratus Anterior (pulls inferior angle laterally)."
  },
  {
    "id": "source-2-b-204",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which ligament of the elbow provides the primary restraint against valgus stress during the late cocking and acceleration phases of throwing?",
    "options": [
      "Lateral Collateral Ligament (LCL) evaluated during comprehensive clinical physical examination",
      "Annular Ligament evaluated during comprehensive clinical physical examination",
      "Anterior Bundle of the Ulnar Collateral Ligament (MUCL) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Radial Collateral Ligament evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The anterior bundle of the Medial (Ulnar) Collateral Ligament (MUCL) is the primary static stabilizer against valgus displacement at the elbow during high-velocity overhead throwing."
  },
  {
    "id": "source-2-b-205",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Anatomical snuffbox tenderness following a fall on an outstretched hand (FOOSH) strongly warrants radiographical evaluation to rule out fracture of which carpal bone?",
    "options": [
      "Lunate carpal bone vulnerable to Kienböck's avascular necrosis (evaluated under standardized clinical sports science protocols)",
      "Scaphoid carpal bone located in anatomical snuffbox floor (vulnerable to nonunion AVN)",
      "Triquetrum carpal bone located beneath the pisiform (confirmed via evidence-based musculoskeletal diagnostics)",
      "Capitate carpal bone forming the central axis of the wrist (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "The scaphoid bone forms the floor of the anatomical snuffbox. FOOSH injuries causing localized tenderness in the snuffbox carry a high risk of scaphoid fracture and retrograde avascular necrosis."
  },
  {
    "id": "source-2-b-206",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which nerve passes through the Carpal Tunnel beneath the flexor retinaculum, innervating the thenar muscles and palmar cutaneous aspect of the radial 3.5 digits?",
    "options": [
      "Ulnar nerve passing through Guyon's canal at the wrist",
      "Median nerve passing beneath flexor retinaculum in carpal tunnel",
      "Radial nerve passing through the spiral groove of humerus",
      "Musculocutaneous nerve piercing coracobrachialis to innervate anterior arm"
    ],
    "correct": 1,
    "explanation": "The Median Nerve passes through the carpal tunnel alongside 9 flexor tendons (4 FDS, 4 FDP, 1 FPL). Compression yields numbness in the radial 3.5 digits and thenar atrophy."
  },
  {
    "id": "source-2-b-207",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Guyon's Canal (ulnar tunnel) compression at the wrist affects which peripheral nerve and motor function?",
    "options": [
      "Median nerve causing loss of thumb opposition (evaluated under standardized clinical sports science protocols)",
      "Ulnar nerve causing weakness of hypothenar muscles, interossei, and adductor pollicis",
      "Radial nerve causing wrist drop (confirmed via evidence-based musculoskeletal diagnostics)",
      "Axillary nerve causing deltoid paralysis (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Guyon's canal at the wrist transmits the ulnar nerve and artery between the pisiform and hook of hamate. Entrapment impairs hypothenar function, interossei (claw hand), and adductor pollicis."
  },
  {
    "id": "source-2-b-208",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which structure passes through the spinoglenoid notch of the scapula to innervate the infraspinatus muscle exclusively?",
    "options": [
      "Subscapular nerve evaluated during comprehensive clinical physical examination",
      "Axillary nerve evaluated during comprehensive clinical physical examination",
      "Suprascapular nerve (distal motor branch) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Thoracodorsal nerve evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The suprascapular nerve passes through the suprascapular notch (innervating supraspinatus) and continues around the spinoglenoid notch to innervate the infraspinatus muscle."
  },
  {
    "id": "source-2-b-209",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In the lumbar spine, what is the primary orientation of the facet (zygapophyseal) joint articulating surfaces in the sagittal plane?",
    "options": [
      "Sagittal plane orientation (favoring flexion/extension while restricting axial rotation)",
      "Frontal plane orientation (favoring lateral flexion) (assessed during high-performance athletic screening)",
      "Transverse plane orientation (favoring rotation) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Oblique 45-degree orientation evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Lumbar facet joint surfaces are oriented primarily in the sagittal plane (vertical), allowing substantial lumbar flexion and extension while mechanically blocking axial rotation."
  },
  {
    "id": "source-2-b-210",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which ligament of the vertebral column limits excessive spinal extension?",
    "options": [
      "Posterior Longitudinal Ligament (PLL) (evaluated under standardized clinical sports science protocols)",
      "Interspinous Ligament evaluated during comprehensive clinical physical examination",
      "Ligamentum Flavum evaluated during comprehensive clinical physical examination",
      "Anterior Longitudinal Ligament (ALL) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The Anterior Longitudinal Ligament (ALL) runs along the anterior aspect of vertebral bodies and intervertebral discs, serving as the primary static restraint against spinal hyperextension."
  },
  {
    "id": "source-2-b-211",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The 'Sprengel Deformity' represents an anatomical congenital anomaly characterized by:",
    "options": [
      "Failure of the scapula to descend normally from the neck to its normal thoracic position during embryonic development",
      "Complete absence of the clavicle (assessed during high-performance athletic screening)",
      "Fusion of cervical vertebrae (Klippel-Feil) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Bilateral cervical ribs evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Sprengel deformity is a congenital condition where one scapula is abnormally high, hypoplastic, and tethered to the cervical spine by an omovertebral bone/cartilage bridge."
  },
  {
    "id": "source-2-b-212",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which deep pelvic muscle acts as a primary dynamic stabilizer of the sacroiliac joint by tensioning the thoracolumbar fascia?",
    "options": [
      "Gluteus Maximus evaluated during comprehensive clinical physical examination",
      "Transversus Abdominis and Multifidus (assessed during high-performance athletic screening)",
      "Piriformis evaluated during comprehensive clinical physical examination",
      "Obturator Internus evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Co-contraction of the Transversus Abdominis and deep Multifidus exerts force closure across the sacroiliac joint by tensioning the middle layer of thoracolumbar fascia."
  },
  {
    "id": "source-2-b-213",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary function of the Ligamentum Teres of the hip joint?",
    "options": [
      "Restricting hip abduction evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Preventing anterior hip dislocation evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Carrying the acetabular branch of the obturator artery to supply the femoral head, particularly in pediatric growth stages",
      "Supporting the labrum during extension (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "The ligamentum teres capitis femoris contains the foveal artery (branch of obturator artery), supplying blood to the femoral head, and provides secondary micro-stability in deep flexion/abduction."
  },
  {
    "id": "source-2-b-214",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which structural deformity of the hip is defined by a femoral neck-shaft angle LESS than 120 degrees?",
    "options": [
      "Coxa Valga defined by femoral neck-shaft angle greater than 135 degrees",
      "Femoral retroversion defined by backward femoral neck angle less than 5 degrees",
      "Femoral anteversion defined by forward angle of femoral neck exceeding 20 degrees",
      "Coxa Vara defined by femoral neck-shaft angle less than 120 degrees"
    ],
    "correct": 3,
    "explanation": "Normal femoral neck-shaft angle is ~125°. An angle < 120° is Coxa Vara (shortens leg, increases shear at femoral neck). An angle > 135° is Coxa Valga."
  },
  {
    "id": "source-2-b-215",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In a normal adult hip, normal femoral anteversion angle (femoral neck axis relative to transcondylar axis) measures approximately:",
    "options": [
      "5 to 8 degrees of femoral neck torsion",
      "30 to 35 degrees of infantile femoral anteversion angle",
      "12 to 15 degrees of normal adult femoral anteversion angle",
      "45 degrees of extreme pathological femoral anteversion"
    ],
    "correct": 2,
    "explanation": "Normal adult femoral anteversion is 12 to 15 degrees. Excessive anteversion (>20°) causes toe-in gait, whereas retroversion (<5°) causes toe-out alignment."
  },
  {
    "id": "source-2-b-216",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which knee meniscal tissue region possesses functional vascularity (the 'red-red zone') capable of healing via primary surgical repair?",
    "options": [
      "Inner avascular third (central border) (evaluated under standardized clinical sports science protocols)",
      "Transverse meniscal ligament evaluated during comprehensive clinical physical examination",
      "Middle transitional zone evaluated during comprehensive clinical physical examination",
      "Outer peripheral 10-30% vascular zone adjacent to the joint capsule (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The outer peripheral 10-30% of the meniscus receives blood supply from the genicular arterial plexus ('red-red zone'), offering high healing potential following surgical repair."
  },
  {
    "id": "source-2-b-217",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During terminal knee extension (0 to 5 degrees), the 'Screw-Home Mechanism' in an open kinetic chain involves:",
    "options": [
      "Internal rotation of the tibia on the femur (evaluated under standardized clinical sports science protocols)",
      "External rotation of the tibia on the fixed femur",
      "External rotation of the tibia on the femur, locked by the popliteus",
      "Anterior translation of the femur (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "In an open kinetic chain (foot free), terminal knee extension produces automatic external rotation of the tibia relative to the femur (guided by the larger medial femoral condyle shape)."
  },
  {
    "id": "source-2-b-218",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which muscle unlocks the knee joint from terminal extension by producing internal rotation of the tibia (or external rotation of the femur in closed kinetic chain)?",
    "options": [
      "Gastrocnemius (evaluated under standardized clinical sports science protocols)",
      "Plantaris evaluated during comprehensive clinical physical examination",
      "Sartorius evaluated during comprehensive clinical physical examination",
      "Popliteus evaluated during comprehensive clinical physical examination"
    ],
    "correct": 3,
    "explanation": "The Popliteus muscle unlocks the extended knee by laterally rotating the femur on a fixed tibia (in CKC) or medially rotating the tibia on a fixed femur (in OKC)."
  },
  {
    "id": "source-2-b-219",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which ligament of the knee serves as the primary static restraint against posterior translation of the tibia relative to the femur?",
    "options": [
      "Anterior Cruciate Ligament (ACL) preventing anterior tibial translation (evaluated under standardized clinical sports science protocols)",
      "Fibular Collateral Ligament (LCL) resisting varus stress at the knee (assessed during high-performance athletic screening)",
      "Medial Collateral Ligament (MCL) resisting valgus stress at the knee (confirmed via evidence-based musculoskeletal diagnostics)",
      "Posterior Cruciate Ligament (PCL) providing primary static restraint against posterior tibial translation (~95%)"
    ],
    "correct": 3,
    "explanation": "The Posterior Cruciate Ligament (PCL) provides approximately 95% of total static resistance against posterior displacement of the tibia relative to the femur."
  },
  {
    "id": "source-2-b-220",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What structural feature anatomically distinguishes the medial meniscus from the lateral meniscus in the knee?",
    "options": [
      "Medial meniscus is circular and mobile; lateral is C-shaped and fixed (evaluated under standardized clinical sports science protocols)",
      "Medial meniscus is C-shaped and firmly attached to the deep fibers of the MCL; lateral is more circular and mobile",
      "Lateral meniscus has no vascular supply at all (confirmed via evidence-based musculoskeletal diagnostics)",
      "Medial meniscus attaches to the popliteus tendon (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "The medial meniscus is larger, C-shaped, and firmly anchored to the deep medial collateral ligament (MCL), making it less mobile and more prone to injury than the smaller, circular, mobile lateral meniscus."
  },
  {
    "id": "source-2-b-221",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which ligament is the main stabilizer preventing anterior translation of the talus within the ankle mortise during plantarflexion?",
    "options": [
      "Calcaneofibular Ligament (CFL) resisting inversion in neutral ankle position",
      "Anterior Talofibular Ligament (ATFL) resisting anterior talar translation in plantarflexion",
      "Posterior Talofibular Ligament (PTFL) resisting inversion in full dorsiflexion",
      "Deltoid Ligament complex resisting eversion and pronation forces (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "The Anterior Talofibular Ligament (ATFL) is the weakest lateral ankle ligament and the primary restraint against anterior talar displacement and inversion during plantarflexion."
  },
  {
    "id": "source-2-b-222",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Deltoid Ligament complex on the medial side of the ankle protects against excessive:",
    "options": [
      "Inversion and Plantarflexion (evaluated under standardized clinical sports science protocols)",
      "Internal Rotation of tibia (assessed during high-performance athletic screening)",
      "Eversion and Pronation forces (confirmed via evidence-based musculoskeletal diagnostics)",
      "Subtalar Varus evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The strong, fan-shaped Deltoid Ligament complex (tibionavicular, tibiocalcaneal, and anterior/posterior tibiotalar fibers) resists ankle eversion and pronation stress."
  },
  {
    "id": "source-2-b-223",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which arch of the foot is supported dynamically by the Tibialis Posterior tendon and statically by the 'Spring Ligament' (Plantar Calcaneonavicular Ligament)?",
    "options": [
      "Medial Longitudinal Arch (evaluated under standardized clinical sports science protocols)",
      "Lateral Longitudinal Arch (assessed during high-performance athletic screening)",
      "Transverse Metatarsal Arch (confirmed via evidence-based musculoskeletal diagnostics)",
      "Posterior Arch evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "The Medial Longitudinal Arch is maintained statically by the spring ligament and plantar fascia, and supported dynamically by the Tibialis Posterior tendon."
  },
  {
    "id": "source-2-b-224",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What muscle belly originates on the posterior proximal tibia/fibula, passes behind the medial malleolus through the tarsal tunnel, and inserts onto the navicular tuberosity?",
    "options": [
      "Tibialis Anterior muscle innervated by deep peroneal nerve (evaluated under standardized clinical sports science protocols)",
      "Flexor Hallucis Longus muscle passing beneath sustentaculum tali (assessed during high-performance athletic screening)",
      "Tibialis Posterior muscle passing through tarsal tunnel to support medial longitudinal arch",
      "Peroneus Longus muscle wrapping beneath cuboid to insert on 1st metatarsal base"
    ],
    "correct": 2,
    "explanation": "Tibialis Posterior travels through the tarsal tunnel behind the medial malleolus, inserting into the navicular tuberosity and cuneiforms, serving as a powerful plantarflexor and inverter."
  },
  {
    "id": "source-2-b-225",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which nerve innervates the anterior compartment of the lower leg (Tibialis Anterior, Extensor Hallucis Longus, Extensor Digitorum Longus)?",
    "options": [
      "Superficial Peroneal (Fibular) Nerve (evaluated under standardized clinical sports science protocols)",
      "Deep Peroneal (Fibular) Nerve (assessed during high-performance athletic screening)",
      "Tibial Nerve evaluated during comprehensive clinical physical examination",
      "Saphenous Nerve evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "The Deep Peroneal (Fibular) Nerve innervates all muscles of the anterior leg compartment. Compression or lesion leads to loss of dorsiflexion ('foot drop')."
  },
  {
    "id": "source-2-b-226",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Superficial Peroneal Nerve innervates which compartment of the lower leg?",
    "options": [
      "Anterior Compartment evaluated during comprehensive clinical physical examination",
      "Superficial Posterior Compartment evaluated during comprehensive clinical physical examination",
      "Deep Posterior Compartment evaluated during comprehensive clinical physical examination",
      "Lateral Compartment (Peroneus Longus and Brevis) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The Superficial Peroneal Nerve supplies Peroneus (Fibularis) Longus and Brevis in the lateral compartment, responsible for foot eversion."
  },
  {
    "id": "source-2-b-227",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which tendon loops under the cuboid bone across the sole of the foot to insert into the base of the first metatarsal and medial cuneiform?",
    "options": [
      "Peroneus (Fibularis) Brevis evaluated during comprehensive clinical physical examination",
      "Flexor Digitorum Longus evaluated during comprehensive clinical physical examination",
      "Tibialis Posterior muscle passing through tarsal tunnel to support medial longitudinal arch",
      "Peroneus (Fibularis) Longus evaluated during comprehensive clinical physical examination"
    ],
    "correct": 3,
    "explanation": "Peroneus Longus descends behind the lateral malleolus, wraps beneath the cuboid groove across the plantar foot, and inserts onto the 1st metatarsal base and medial cuneiform."
  },
  {
    "id": "source-2-b-228",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What anatomical nerve passes directly around the fibular head/neck and is vulnerable to direct blow trauma resulting in acute foot drop?",
    "options": [
      "Tibial Nerve evaluated during comprehensive clinical physical examination",
      "Common Peroneal (Fibular) Nerve (assessed during high-performance athletic screening)",
      "Femoral Nerve evaluated during comprehensive clinical physical examination",
      "Obturator Nerve evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "The Common Peroneal Nerve wraps superficially around the lateral aspect of the fibular neck, making it susceptible to impact trauma, compression, or fracture, causing foot drop."
  },
  {
    "id": "source-2-b-229",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which structure passes through the Greater Sciatic Foramen ABOVE the Piriformis muscle?",
    "options": [
      "Sciatic Nerve evaluated during comprehensive clinical physical examination",
      "Inferior Gluteal Nerve evaluated during comprehensive clinical physical examination",
      "Superior Gluteal Nerve and Vessels (confirmed via evidence-based musculoskeletal diagnostics)",
      "Pudendal Nerve evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The Superior Gluteal Nerve and Vessels exit the pelvis through the greater sciatic foramen superior to the piriformis muscle, innervating Gluteus Medius, Minimus, and TFL."
  },
  {
    "id": "source-2-b-230",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What muscle forms the medial border of the Femoral Triangle in the anterior groin region?",
    "options": [
      "Inguinal Ligament (evaluated under standardized clinical sports science protocols)",
      "Sartorius evaluated during comprehensive clinical physical examination",
      "Adductor Longus (confirmed via evidence-based musculoskeletal diagnostics)",
      "Pectineus evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The Femoral Triangle is bounded superiorly by the Inguinal Ligament, laterally by Sartorius, and medially by the medial border of Adductor Longus."
  },
  {
    "id": "source-2-b-231",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which descending spinal tract is primarily responsible for transmitting voluntary motor commands for isolated, skilled movements of the distal extremities?",
    "options": [
      "Lateral Corticospinal Tract evaluated during comprehensive clinical physical examination",
      "Anterior Spinothalamic Tract evaluated during comprehensive clinical physical examination",
      "Vestibulospinal Tract evaluated during comprehensive clinical physical examination",
      "Reticulospinal Tract regulating postural muscle tone and autonomic reflexes"
    ],
    "correct": 0,
    "explanation": "The Lateral Corticospinal Tract decussates in the medullary pyramids and descends to control fine, voluntary motor movements of distal limb musculature."
  },
  {
    "id": "source-2-b-232",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A patient demonstrating spasticity, hyperreflexia, clonus, and a positive Babinski sign is presenting with signs of a lesion in which system?",
    "options": [
      "Upper Motor Neuron (UMN)",
      "Lower Motor Neuron (LMN)",
      "Cerebellar Purkinje cell system",
      "Peripheral sensory ganglion"
    ],
    "correct": 0,
    "explanation": "UMN lesions in the central nervous system (corticospinal tract) disrupt descending inhibitory control, yielding hypertonia/spasticity, exaggerated reflexes, clonus, and Babinski sign."
  },
  {
    "id": "source-2-b-233",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Lower Motor Neuron (LMN) lesions (e.g., peripheral nerve transection) are characterized by:",
    "options": [
      "Spasticity and hyperreflexia evaluated during comprehensive clinical physical examination",
      "Rigidity evaluated during comprehensive clinical physical examination",
      "Chorea and tremor evaluated during comprehensive clinical physical examination",
      "Flaccid paralysis, muscle atrophy, fasciculations, and hyporeflexia/areflexia"
    ],
    "correct": 3,
    "explanation": "LMN lesions disrupt direct alpha motor neuron innervation to muscle, causing flaccid weakness, rapid denervation atrophy, loss of deep tendon reflexes, and fasciculations."
  },
  {
    "id": "source-2-b-234",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which dermatome corresponds to sensory innervation over the lateral aspect of the foot and fifth digit?",
    "options": [
      "L4 Dermatome",
      "L5 Dermatome",
      "S2 Dermatome",
      "S1 Dermatome"
    ],
    "correct": 3,
    "explanation": "The S1 dermatome supplies sensation to the lateral foot border, heel, and fifth toe (evaluated alongside S1 Achilles deep tendon reflex)."
  },
  {
    "id": "source-2-b-235",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Sensory loss restricted to the web space between the first and second toes corresponds to cutaneous innervation by which nerve?",
    "options": [
      "Superficial Peroneal Nerve (evaluated under standardized clinical sports science protocols)",
      "Saphenous Nerve evaluated during comprehensive clinical physical examination",
      "Deep Peroneal Nerve (confirmed via evidence-based musculoskeletal diagnostics)",
      "Sural Nerve evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The Deep Peroneal Nerve supplies cutaneous sensation exclusively to the small triangular skin patch in the first interdigital web space between the 1st and 2nd toes."
  },
  {
    "id": "source-2-b-236",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which nerve root level is evaluated by testing the Biceps Tendon Reflex?",
    "options": [
      "C7 evaluated during comprehensive clinical physical examination",
      "C5 - C6 (assessed during high-performance athletic screening)",
      "C8 evaluated during comprehensive clinical physical examination",
      "T1 evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "The biceps reflex tests the C5-C6 spinal nerve roots via the musculocutaneous nerve."
  },
  {
    "id": "source-2-b-237",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which deep tendon reflex assesses integrity of the C7 spinal nerve root?",
    "options": [
      "Biceps Reflex evaluated during comprehensive clinical physical examination",
      "Triceps Reflex evaluated during comprehensive clinical physical examination",
      "Brachioradialis Reflex (confirmed via evidence-based musculoskeletal diagnostics)",
      "Patellar Reflex evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "The triceps deep tendon reflex primarily tests the integrity of the C7 nerve root (radial nerve)."
  },
  {
    "id": "source-2-b-238",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Testing cutaneous sensation over the tip of the index finger evaluates which nerve root level?",
    "options": [
      "C5",
      "C6",
      "C7",
      "C8"
    ],
    "correct": 1,
    "explanation": "The C6 dermatome covers the lateral forearm, thumb, and index finger."
  },
  {
    "id": "source-2-b-239",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which myotome action tests functional integrity of the L4 spinal nerve root?",
    "options": [
      "Hip Flexion (Iliopsoas) evaluated during comprehensive clinical physical examination",
      "Great Toe Extension (EHL) evaluated during comprehensive clinical physical examination",
      "Ankle Dorsiflexion (Tibialis Anterior) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Ankle Plantarflexion (Gastrocnemius) (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "L4 myotome testing evaluates Tibialis Anterior motor strength via ankle dorsiflexion (and patellar tendon reflex)."
  },
  {
    "id": "source-2-b-240",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Great toe extension (Extensor Hallucis Longus) is the primary clinical myotome test for which spinal nerve root level?",
    "options": [
      "L3",
      "L4",
      "L5",
      "S1"
    ],
    "correct": 2,
    "explanation": "L5 myotome motor function is tested via Extensor Hallucis Longus (EHL) great toe dorsiflexion and Gluteus Medius hip abduction."
  },
  {
    "id": "source-2-b-241",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which ascending spinal tract transmits discriminative touch, 2-point discrimination, proprioception, and vibration sense to the somatosensory cortex?",
    "options": [
      "Anterolateral Spinothalamic Tract conveying pain and thermal sensation (evaluated under standardized clinical sports science protocols)",
      "Posterior Spinocerebellar Tract conveying unconscious muscle spindle proprioception to cerebellum",
      "Dorsal Column-Medial Lemniscal System conveying fine touch, vibration, and conscious proprioception",
      "Reticulospinal Tract regulating postural muscle tone and autonomic reflexes (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "The Dorsal Column-Medial Lemniscal (DCML) pathway conveys fine touch, conscious proprioception, and vibration. Fasciculus Gracilis conveys lower body inputs; Cuneatus upper body."
  },
  {
    "id": "source-2-b-242",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Pain and temperature sensations are transmitted through which ascending spinal pathway?",
    "options": [
      "Lateral Spinothalamic Tract",
      "Dorsal Column System",
      "Spinocerebellar Tract",
      "Corticospinal Tract"
    ],
    "correct": 0,
    "explanation": "The Lateral Spinothalamic Tract decussates at the spinal segment entry level (anterior white commissure) and ascends to convey pain and thermal sensations."
  },
  {
    "id": "source-2-b-243",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What structure in the brain is primarily responsible for motor planning, coordination, timing, and error correction of rapid voluntary movements?",
    "options": [
      "Basal Ganglia (evaluated under standardized clinical sports science protocols)",
      "Hippocampus (assessed during high-performance athletic screening)",
      "Thalamus evaluated during comprehensive clinical physical examination",
      "Cerebellum (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The Cerebellum compares intended motor commands from the motor cortex with sensory feedback from muscle spindles (comparator function) to coordinate movement and timing."
  },
  {
    "id": "source-2-b-244",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Basal Ganglia dysfunction (such as loss of dopaminergic neurons in the Substantia Nigra) produces which movement disorder classic triad?",
    "options": [
      "Resting tremor, bradykinesia, and lead-pipe/cogwheel rigidity (Parkinsonism)",
      "Intention tremor, dysmetria, and scanning speech (assessed during high-performance athletic screening)",
      "Flaccid weakness, atrophy, and fasciculations (confirmed via evidence-based musculoskeletal diagnostics)",
      "Hyperreflexia and Babinski sign evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Basal ganglia degeneration (Parkinson's disease) impairs the direct/indirect motor loops, manifesting as resting tremor, bradykinesia, rigidity, and postural instability."
  },
  {
    "id": "source-2-b-245",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which cranial nerve provides parasympathetic innervations to the heart, lungs, and upper gastrointestinal tract?",
    "options": [
      "Cranial Nerve IX (Glossopharyngeal)",
      "Cranial Nerve XII (Hypoglossal)",
      "Cranial Nerve XI (Accessory)",
      "Cranial Nerve X (Vagus Nerve)"
    ],
    "correct": 3,
    "explanation": "Cranial Nerve X (Vagus) conveys major parasympathetic output, slowing heart rate and regulating thoracic and abdominal visceral functions."
  },
  {
    "id": "source-2-b-246",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the function of Gamma Motor Neurons within the neuromuscular system?",
    "options": [
      "Innervating intrafusal muscle fibers within muscle spindles to maintain stretch sensitivity during muscle contraction (Alpha-Gamma Coactivation)",
      "Innervating extrafusal muscle fibers to generate mechanical tension (assessed during high-performance athletic screening)",
      "Inhibiting antagonist muscle groups evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Transmitting pain signals evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Gamma motor neurons innervate intrafusal fibers inside muscle spindles. Alpha-gamma coactivation ensures muscle spindles remain taut and sensitive during active extrafusal muscle shortening."
  },
  {
    "id": "source-2-b-247",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which neurotransmitter is released at the neuromuscular junction (NMJ) to initiate motor end-plate depolarization in skeletal muscle?",
    "options": [
      "Norepinephrine (evaluated under standardized clinical sports science protocols)",
      "Serotonin evaluated during comprehensive clinical physical examination",
      "Dopamine evaluated during comprehensive clinical physical examination",
      "Acetylcholine (ACh) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Acetylcholine (ACh) is released from motor axon terminals into the NMJ synaptic cleft, binding to nicotinic ACh receptors to generate end-plate potential."
  },
  {
    "id": "source-2-b-248",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In neurophysiology, what is the 'Refractory Period' of an axon action potential?",
    "options": [
      "The time period where an axon produces continuous maximal firing (evaluated under standardized clinical sports science protocols)",
      "The time required for muscle glycogen synthesis (assessed during high-performance athletic screening)",
      "The time interval immediately following an action potential during which a second action potential cannot be generated (Absolute) or requires a stronger stimulus (Relative)",
      "The delay in synaptic transmission (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "The refractory period prevents backward propagation of action potentials and limits maximum firing frequency due to voltage-gated Na+ channel inactivation."
  },
  {
    "id": "source-2-b-249",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Saltatory conduction occurs in myelinated nerve axons because action potentials jump between which specialized anatomical structures?",
    "options": [
      "Schwann cell nuclei (evaluated under standardized clinical sports science protocols)",
      "Nodes of Ranvier (assessed during high-performance athletic screening)",
      "Axon hillocks evaluated during comprehensive clinical physical examination",
      "Dendritic spines (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "In myelinated axons, myelin sheaths provide electrical insulation, allowing depolarizing ionic currents to jump rapidly between uninsulated Nodes of Ranvier (saltatory conduction)."
  },
  {
    "id": "source-2-b-250",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What neurological sign presents as rhythmic, oscillating involuntary muscle contractions induced by sudden sustained passive stretch of a spastic muscle?",
    "options": [
      "Fasciculation (evaluated under standardized clinical sports science protocols)",
      "Clonus evaluated during comprehensive clinical physical examination",
      "Athetosis evaluated during comprehensive clinical physical examination",
      "Dystonia evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Clonus is an UMN lesion sign characterized by involuntary, rhythmic neuromuscular oscillations (e.g., sustained ankle clonus >5 beats) triggered by rapid passive stretch."
  },
  {
    "id": "source-2-b-251",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What cardiorespiratory adaptation accounts for the major increase in stroke volume in endurance-trained athletes at rest and during exercise?",
    "options": [
      "Decreased left ventricular volume evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Decreased venous return evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Elevated systemic vascular resistance (afterload) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Increased plasma volume and left ventricular end-diastolic volume (increased preload) combined with myocardial contractility"
    ],
    "correct": 3,
    "explanation": "Endurance training increases blood plasma volume and venous return, expanding left ventricular end-diastolic volume (EDV/preload) and stroke volume via the Frank-Starling mechanism."
  },
  {
    "id": "source-2-b-252",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "How does chronic endurance exercise affect resting heart rate in elite endurance athletes?",
    "options": [
      "Increases resting heart rate to >90 bpm (evaluated under standardized clinical sports science protocols)",
      "Has no effect on resting heart rate (assessed during high-performance athletic screening)",
      "Causes persistent tachycardia evaluated during comprehensive clinical physical examination",
      "Induces sinus bradycardia (<50 bpm) due to increased parasympathetic vagal tone and elevated stroke volume"
    ],
    "correct": 3,
    "explanation": "Endurance conditioning increases vagal (parasympathetic) tone and decreases intrinsic SA node firing rate, yielding resting sinus bradycardia (often 35-45 bpm)."
  },
  {
    "id": "source-2-b-253",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which respiratory volume represents the maximum volume of air that can be forcefully expired after a maximal inspiration?",
    "options": [
      "Tidal Volume (TV) evaluated during comprehensive clinical physical examination",
      "Residual Volume (RV) evaluated during comprehensive clinical physical examination",
      "Functional Residual Capacity (FRC) evaluated during comprehensive clinical physical examination",
      "Vital Capacity (VC) / Forced Vital Capacity (FVC) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Vital Capacity (VC) is the maximum volume of air exhaled after maximal inhalation (VC = IRV + TV + ERV)."
  },
  {
    "id": "source-2-b-254",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What occurs to the oxygen-hemoglobin dissociation curve during exercise when muscle tissue temperature rises and metabolic H+ accumulates (Bohr Effect)?",
    "options": [
      "The curve shifts to the RIGHT, decreasing hemoglobin O2 affinity and facilitating O2 unloading into working muscle",
      "The curve shifts to the LEFT, increasing hemoglobin O2 affinity (assessed during high-performance athletic screening)",
      "The curve flattens completely evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Oxygen binding becomes irreversible evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "The Bohr Effect states that increases in PCO2, temperature, and H+ (lower pH) shift the O2-hemoglobin dissociation curve to the RIGHT, promoting O2 release into active skeletal muscle."
  },
  {
    "id": "source-2-b-255",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which enzyme system adapts most significantly in skeletal muscle mitochondria following high-volume aerobic endurance training?",
    "options": [
      "Krebs cycle enzymes (Citrate Synthase, Succinate Dehydrogenase) and Electron Transport Chain complexes",
      "Glycolytic enzymes (LDH, PFK) evaluated during comprehensive clinical physical examination",
      "Creatine Kinase evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Myosin ATPase evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Aerobic endurance training increases mitochondrial biogenesis, doubling oxidative enzyme activity (Citrate Synthase, Succinate Dehydrogenase) for enhanced fat and pyruvate oxidation."
  },
  {
    "id": "source-2-b-256",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the physiological cause of the 'Lactate Threshold' during incremental exercise?",
    "options": [
      "The point where systemic lactate production rate exceeds the rate of systemic lactate clearance",
      "Complete lack of oxygen in all muscle cells (assessed during high-performance athletic screening)",
      "Instantaneous muscle destruction evaluated during comprehensive clinical physical examination",
      "Depletion of liver glycogen evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Lactate threshold represents the workload where blood lactate production outpaces rate of metabolic clearance (by liver, heart, and non-working muscle), causing exponential blood lactate accumulation."
  },
  {
    "id": "source-2-b-257",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "How does high-intensity interval training (HIIT) stimulate mitochondrial biogenesis at the cellular level?",
    "options": [
      "By downregulating PGC-1alpha evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "By inducing high ATP turnover, activating AMPK and p38 MAPK signaling pathways which upregulate PGC-1alpha gene expression",
      "By destroying mitochondria evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "By inhibiting calcium release evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "HIIT triggers cellular stress (high AMP/ATP and Ca2+), activating AMPK and p38 MAPK, which directly upregulate PGC-1alpha—the master transcriptional coactivator of mitochondrial biogenesis."
  },
  {
    "id": "source-2-b-258",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary vascular adaptation responsible for improved peripheral oxygen extraction (a-vO2 diff) in endurance-trained skeletal muscle?",
    "options": [
      "Arterial stiffness evaluated during comprehensive clinical physical examination",
      "Increased capillary-to-muscle fiber ratio (capillarization) (assessed during high-performance athletic screening)",
      "Cutaneous vasoconstriction evaluated during comprehensive clinical physical examination",
      "Reduced myoglobin concentration evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Capillarization increases microvascular surface area and transit time for red blood cells in skeletal muscle, enhancing O2 diffusion from blood into myocytes."
  },
  {
    "id": "source-2-b-259",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During maximal exercise at sea level, what limits VO2max in healthy non-athletic individuals?",
    "options": [
      "Pulmonary diffusion capacity evaluated during comprehensive clinical physical examination",
      "Intramuscular lipid stores evaluated during comprehensive clinical physical examination",
      "Central cardiorespiratory capacity to deliver oxygen (Maximal Cardiac Output)",
      "Joint flexibility evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "In healthy non-athletic humans, maximal cardiac output (oxygen delivery capability) is the primary physiological bottleneck limiting VO2max, rather than pulmonary ventilation."
  },
  {
    "id": "source-2-b-260",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which respiratory parameter is defined as the ratio of volume of CO2 produced to volume of O2 consumed (VCO2 / VO2)?",
    "options": [
      "Respiratory Exchange Ratio (RER) (evaluated under standardized clinical sports science protocols)",
      "Ventilatory Equivalent for Oxygen (VE/VO2) (assessed during high-performance athletic screening)",
      "Minute Ventilation (VE) evaluated during comprehensive clinical physical examination",
      "Partial Pressure of CO2 evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "RER (VCO2 / VO2 measured at the mouth) reflects substrate utilization: RER = 0.70 indicates 100% fat oxidation; RER = 1.00 indicates 100% carbohydrate oxidation."
  },
  {
    "id": "source-2-b-261",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "An RER value exceeding 1.10 during a maximal exercise stress test indicates:",
    "options": [
      "Pure fat oxidation evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Excess non-metabolic CO2 production driven by bicarbonate buffering of metabolic H+ under high anaerobic glycolysis",
      "Hypoventilation evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Test invalidity evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "RER > 1.10 occurs during heavy anaerobic work because lactic acid buffering by blood sodium bicarbonate generates extra CO2 (HCO3- + H+ → H2O + CO2), blowing off excess CO2."
  },
  {
    "id": "source-2-b-262",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary determinant of muscle strength adaptation during the initial 4 to 6 weeks of a new heavy resistance training program?",
    "options": [
      "Significant muscle fiber hypertrophy evaluated during comprehensive clinical physical examination",
      "Neural adaptations (increased motor unit recruitment, firing rate, and synchronization)",
      "Tendon elongation evaluated during comprehensive clinical physical examination",
      "Increased capillary density evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Initial strength gains in early training phases are overwhelmingly driven by Central Nervous System neural adaptations rather than structural muscle hypertrophy."
  },
  {
    "id": "source-2-b-263",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which skeletal muscle fiber transformation occurs predominantly in response to heavy resistance and power training?",
    "options": [
      "Shift of Type IIx fibers to more fatigue-resistant Type IIa fibers",
      "Conversion of Type I fibers to Type IIx (assessed during high-performance athletic screening)",
      "Conversion of skeletal muscle into cardiac muscle",
      "Complete loss of Type I fibers (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Resistance training induces fiber-type transitions within the fast-twitch spectrum—shifting unrefined Type IIx fibers toward functional, oxidative-glycolytic Type IIa fibers."
  },
  {
    "id": "source-2-b-264",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What structural muscle hypertrophy mechanism involves an increase in the number of myofibrils packed in parallel within a muscle fiber?",
    "options": [
      "Sarcoplasmic Hypertrophy (evaluated under standardized clinical sports science protocols)",
      "Hyperplasia evaluated during comprehensive clinical physical examination",
      "Myofibrillar Hypertrophy (confirmed via evidence-based musculoskeletal diagnostics)",
      "Sarcomerogenesis in series (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Myofibrillar hypertrophy increases the density and quantity of contractile actin-myosin protein filaments, directly enhancing maximal force generation capacity."
  },
  {
    "id": "source-2-b-265",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What defines 'Sarcoplasmic Hypertrophy'?",
    "options": [
      "Increase in tendon collagen diameter (evaluated under standardized clinical sports science protocols)",
      "Increase in myofibrillar cross-bridges evaluated during comprehensive clinical physical examination",
      "Addition of sarcomeres in series (confirmed via evidence-based musculoskeletal diagnostics)",
      "Increase in non-contractile cellular components, glycogen stores, and sarcoplasmic fluid volume within the muscle fiber"
    ],
    "correct": 3,
    "explanation": "Sarcoplasmic hypertrophy increases non-contractile fluid, organelle, and glycogen volume in myocytes without a proportional increase in maximum force production."
  },
  {
    "id": "source-2-b-266",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the metabolic response of skeletal muscle to 4 weeks of complete bed rest or limb immobilization (detraining)?",
    "options": [
      "Rapid skeletal muscle atrophy, shift toward Type IIx fibers, decline in GLUT4 transporters, and reduced insulin sensitivity",
      "Increased mitochondrial density evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Increased capillary density evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Enhanced fat oxidation evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Disuse immobilization causes rapid muscle protein breakdown (atrophy), loss of mitochondrial oxidative enzymes, reduced GLUT4 expression, and impaired insulin action."
  },
  {
    "id": "source-2-b-267",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During exercise in hot, humid environments, sweat evaporation is severely compromised because:",
    "options": [
      "High ambient water vapor pressure reduces the vapor pressure gradient between skin and surrounding air",
      "Air temperature is too low (assessed during high-performance athletic screening)",
      "Cutaneous vasodilation stops evaluated during comprehensive clinical physical examination",
      "Sweat glands cease production evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Evaporative cooling depends on the water vapor pressure gradient between skin and air. High ambient humidity reduces this gradient, preventing sweat evaporation."
  },
  {
    "id": "source-2-b-268",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What physiological acclimatization occurs after 10-14 days of heat acclimatization training?",
    "options": [
      "Higher resting core temperature and delayed sweating (evaluated under standardized clinical sports science protocols)",
      "Earlier onset of sweating, higher sweat rate, diluted sweat (lower Na+ loss via aldosterone), and expanded plasma volume",
      "Decreased cardiac output evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Suppression of thirst mechanism evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Heat acclimatization expands plasma volume, lowers resting core temperature, lowers sweating threshold (sweat earlier), increases sweat rate, and conserves electrolytes via aldosterone."
  },
  {
    "id": "source-2-b-269",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the physiological rationale for 'Live High - Train Low' (LHTL) altitude training?",
    "options": [
      "Living at moderate altitude (~2200-2500m) to stimulate EPO and red blood cell mass (erythropoiesis) while training near sea level (<1250m) to maintain high exercise intensity and power output",
      "Acclimatizing to cold weather while sleeping (assessed during high-performance athletic screening)",
      "Living at sea level and training at 4000m (confirmed via evidence-based musculoskeletal diagnostics)",
      "Eliminating all aerobic training evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "LHTL provides hypoxic exposure during sleep to boost endogenous EPO and hemoglobin mass, while lower altitude training allows high velocity/intensity workouts uninhibited by hypoxia."
  },
  {
    "id": "source-2-b-270",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary cause of acute mountain sickness (AMS) upon rapid ascending above 2500 meters?",
    "options": [
      "Hypercapnia evaluated during comprehensive clinical physical examination",
      "Hypobaric hypoxia leading to arterial hypoxemia and mild cerebral edema",
      "Dehydration only evaluated during comprehensive clinical physical examination",
      "High solar radiation evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Reduced barometric pressure at altitude lowers inspired PO2 (hypobaric hypoxia), causing arterial hypoxemia, compensatory cerebral vasodilation, and elevated intracranial pressure."
  },
  {
    "id": "source-2-b-271",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which electrical current parameter according to the Strength-Duration Curve determines the minimum pulse duration required to excite a nerve fiber at twice the rheobase voltage?",
    "options": [
      "Rheobase defined as minimal current intensity of infinite duration to reach threshold",
      "Chronaxie defined as minimum pulse duration required at twice rheobase voltage to excite nerve",
      "Accommodation threshold representing nerve adaptation rate to slow-rising pulses",
      "Peak current amplitude measured in milliamperes (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Chronaxie is the minimum pulse duration required to excite a nerve fiber when current intensity is set at twice the rheobase voltage. Lower chronaxie indicates higher nerve excitability."
  },
  {
    "id": "source-2-b-272",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In electrotherapy, Rheobase is defined as:",
    "options": [
      "The minimum pulse duration at maximum voltage (evaluated under standardized clinical sports science protocols)",
      "The minimum electrical current intensity (amplitude) of infinite duration required to produce a threshold tissue response",
      "The peak frequency of IFT (confirmed via evidence-based musculoskeletal diagnostics)",
      "The resistance of dry skin (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Rheobase is the minimal current amplitude (intensity) needed to elicit a threshold nerve or muscle response using an impulse of infinite (long) duration."
  },
  {
    "id": "source-2-b-273",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which Gate Control Theory mechanism explains high-frequency Transcutaneous Electrical Nerve Stimulation (Conventional TENS: 80-120 Hz, low intensity)?",
    "options": [
      "Stimulating small unmyelinated C-fibers to release beta-endorphins (evaluated under standardized clinical sports science protocols)",
      "Inducing local tissue hyperthermia evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Blocking sodium channels directly at the peripheral receptor (confirmed via evidence-based musculoskeletal diagnostics)",
      "Selective stimulation of large-diameter myelinated A-beta sensory fibers, activating inhibitory interneurons in the spinal dorsal horn (substantia gelatinosa) to block pain transmission from A-delta/C fibers"
    ],
    "correct": 3,
    "explanation": "Conventional TENS selectively activates large A-beta nerve fibers, which enter the dorsal horn and excite substantia gelatinosa interneurons, presynaptically inhibiting nociceptive A-delta and C fiber transmission."
  },
  {
    "id": "source-2-b-274",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Low-frequency Acupuncture-like TENS (1-5 Hz, high motor-level intensity) acts primarily through which physiological pain-relief mechanism?",
    "options": [
      "Spinal Gate Control only evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Local cutaneous vasoconstriction evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Direct motor unit fatigue evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Descending endogenous opioid system triggering release of beta-endorphins and enkephalins from the pituitary and periaqueductal gray"
    ],
    "correct": 3,
    "explanation": "Acupuncture-like TENS delivers high-intensity noxious/motor pulses at 1-5 Hz, stimulating small-diameter A-delta fibers to activate the central descending opioid pathway, releasing endomorphins and enkephalins."
  },
  {
    "id": "source-2-b-275",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Interferential Therapy (IFT) utilizes two medium-frequency currents (e.g., 4000 Hz and 4100 Hz) to produce a low-frequency amplitude-modulated 'Beat Frequency' inside deep tissues. What is the resulting beat frequency?",
    "options": [
      "4000 Hz",
      "4100 Hz",
      "8100 Hz",
      "100 Hz"
    ],
    "correct": 3,
    "explanation": "When two medium-frequency currents cross in tissue, constructive/destructive interference creates an amplitude-modulated beat frequency equal to the difference (4100 - 4000 = 100 Hz)."
  },
  {
    "id": "source-2-b-276",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is a major advantage of using medium-frequency currents (e.g., 2000-4000 Hz in IFT or Russian Current) compared to low-frequency currents?",
    "options": [
      "They cannot contract skeletal muscle (evaluated under standardized clinical sports science protocols)",
      "They require higher voltage batteries (assessed during high-performance athletic screening)",
      "They cause permanent skin electrolysis (confirmed via evidence-based musculoskeletal diagnostics)",
      "Medium-frequency currents overcome skin capacitive impedance (Z = 1/2πfC), penetrating deeper into tissues with reduced cutaneous discomfort"
    ],
    "correct": 3,
    "explanation": "Skin impedance drops inverse to frequency. High/medium frequencies easily penetrate skin capacitance with minimal sensory pain, delivering current deep into target tissues."
  },
  {
    "id": "source-2-b-277",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Russian Current electro-stimulation protocol (Kots technique) for muscle strengthening utilizes what carrier frequency and burst delivery format?",
    "options": [
      "10,000 Hz microcurrent evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "100 Hz continuous DC current (assessed during high-performance athletic screening)",
      "2500 Hz carrier frequency delivered in 50 bursts per second (50 Hz burst frequency) with a 10:50 second work-to-rest ratio",
      "1 Hz monophasic spike evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Kots Russian Current uses a 2500 Hz sinusoidal carrier wave modulated into 50 bursts/sec (50 Hz), applied with a 10s contraction to 50s rest ratio for maximal motor recruitment."
  },
  {
    "id": "source-2-b-278",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In Neuromuscular Electrical Stimulation (NMES) of innervated muscle, what is the order of muscle fiber recruitment compared to voluntary physiological contraction?",
    "options": [
      "Identical: Type I fibers recruited first (evaluated under standardized clinical sports science protocols)",
      "Reverse order: Large, low-resistance motor axons supplying fast-twitch Type II fibers are recruited first, synchronously and non-selectively",
      "Only smooth muscle is recruited (confirmed via evidence-based musculoskeletal diagnostics)",
      "Voluntary recruitment order evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "NMES preferentially recruits large-diameter motor axons first (Type II fast glycolytic fibers) in a synchronous, non-selective pattern, leading to rapid muscle fatigue if rest intervals are inadequate."
  },
  {
    "id": "source-2-b-279",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "To stimulate a DENERVATED skeletal muscle (lacking motor nerve supply), what type of electrical current pulse duration is required?",
    "options": [
      "Long-duration interrupted direct current (IDC) or modified d.c. pulses (>100 ms to 300 ms)",
      "Very short pulse duration (<0.1 ms) (assessed during high-performance athletic screening)",
      "High frequency 1 MHz ultrasound (confirmed via evidence-based musculoskeletal diagnostics)",
      "TENS 100 Hz microsecond pulses (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Denervated muscle fibers lack nerve excitability and have very long chronaxie. They require long-duration impulses (>100-300 ms) to directly depolarize the sarcolemma."
  },
  {
    "id": "source-2-b-280",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which electrotherapeutic modality utilizes thermal acoustic waves operating at 1 MHz or 3 MHz frequencies to produce deep tissue heating and non-thermal cavitation?",
    "options": [
      "Shortwave Diathermy operating at 27.12 MHz electromagnetic frequency",
      "Infrared Radiation delivering superficial radiant luminous heat",
      "Therapeutic Ultrasound delivering acoustic crystal sound waves at 1 MHz or 3 MHz",
      "Continuous Direct Galvanic Current delivering non-pulsed unidirectional charge"
    ],
    "correct": 2,
    "explanation": "Therapeutic Ultrasound uses high-frequency acoustic sound waves (1 MHz for deep tissues 3-5 cm; 3 MHz for superficial tissues 1-2 cm) via piezoelectric crystal transformation."
  },
  {
    "id": "source-2-b-281",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary mechanism of Non-Thermal effects of Therapeutic Ultrasound during tissue repair?",
    "options": [
      "Continuous high-intensity tissue boiling evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Depletion of ATP evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Direct electrical breakdown of collagen (confirmed via evidence-based musculoskeletal diagnostics)",
      "Stable Acoustic Cavitation and Microstreaming, increasing cell membrane permeability and calcium influx to stimulate fibroblast activity"
    ],
    "correct": 3,
    "explanation": "Pulsed ultrasound produces non-thermal stable cavitation and microstreaming, altering cellular membrane permeability, accelerating protein synthesis, and promoting inflammatory repair."
  },
  {
    "id": "source-2-b-282",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "When applying Therapeutic Ultrasound, moving the soundhead continuously across the treatment area prevents which potential tissue complication?",
    "options": [
      "Transient nerve blockade evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Skin depigmentation evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Periosteal overheating and hot spots caused by standing waves (constructive interference at bone-tissue interfaces)",
      "Excessive sweating evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Static ultrasound application causes acoustic reflection at tissue-bone interfaces, creating standing waves and localized periosteal 'hot spots' that cause severe burning pain."
  },
  {
    "id": "source-2-b-283",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Shortwave Diathermy (SWD) operating at a standard frequency of 27.12 MHz heats deep tissues using which electromagnetic field method?",
    "options": [
      "Inductive coil method (magnetic field creating eddy currents in high-water tissues) or Capacitive plate method (electric field)",
      "Acoustic sound wave reflection evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Direct contact conduction evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Ionizing gamma radiation evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "SWD operates at 27.12 MHz, utilizing inductive applicators (magnetic fields generating eddy currents in high-conductivity tissues like muscle) or capacitive plates for deep heating."
  },
  {
    "id": "source-2-b-284",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which condition represents an ABSOLUTE CONTRAINDICATION for Shortwave Diathermy and Therapeutic Ultrasound?",
    "options": [
      "Chronic osteoarthritis evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Subacute muscle strain evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Presence of metallic implants (for SWD), cardiac pacemakers, active malignancy, pregnant uterus, or deep vein thrombosis (DVT)",
      "Joint stiffness evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Electromagnetic/acoustic energy risks heating metallic implants, destroying electronic pacemakers, spreading malignant cells, or dislodging deep vein thrombi."
  },
  {
    "id": "source-2-b-285",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Low-Level Laser Therapy (LLLT / Photobiomodulation) using red and near-infrared light (600-1000 nm) stimulates tissue healing by targeting which intracellular chromophore?",
    "options": [
      "Cytochrome c Oxidase in the mitochondrial respiratory chain",
      "Hemoglobin evaluated during comprehensive clinical physical examination",
      "Melanin evaluated during comprehensive clinical physical examination",
      "Keratin evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Photobiomodulation photon energy is absorbed by Cytochrome c Oxidase in mitochondria, enhancing ATP synthesis, reducing oxidative stress, and promoting cell proliferation."
  },
  {
    "id": "source-2-b-286",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In Extracorporeal Shockwave Therapy (ESWT) for chronic tendinopathies (e.g., plantar fasciitis), radial shockwaves work primarily by:",
    "options": [
      "Freezing nerves evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Delivering high-energy acoustic pressure pulses that induce micro-trauma, neo-vascularization, disruption of avascular scar tissue, and hyperstimulation analgesia",
      "Electrical stimulation of motor units (confirmed via evidence-based musculoskeletal diagnostics)",
      "Melting calcifications instantly evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "ESWT generates acoustic pressure waves that provoke localized micro-trauma in chronic degenerate tendinopathies, upregulating growth factors (e.g., VEGF) to re-initiate healing."
  },
  {
    "id": "source-2-b-287",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which hydrotherapy principle states that an immersed body experiences an upward buoyant force equal to the weight of the fluid displaced (Archimedes' Principle)?",
    "options": [
      "Pascal's Law evaluated during comprehensive clinical physical examination",
      "Archimedes' Principle of Buoyancy (assessed during high-performance athletic screening)",
      "Bernoulli's Principle evaluated during comprehensive clinical physical examination",
      "Metacentric Law evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Archimedes' Principle dictates that a submerged body is buoyed up by a force equal to the weight of displaced water, unloading joint weight-bearing during pool rehabilitation."
  },
  {
    "id": "source-2-b-288",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Immersing a patient in hydrotherapy pool water up to the level of the Xiphoid Process reduces weight-bearing stress on lower extremity joints by approximately what percentage?",
    "options": [
      "10%",
      "33%",
      "90%",
      "60%"
    ],
    "correct": 3,
    "explanation": "Immersion to the neck reduces weight-bearing load by ~90%; immersion to xiphoid process reduces load by ~60%; immersion to waist/navel reduces load by ~50%."
  },
  {
    "id": "source-2-b-289",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In electromyographic Nerve Conduction Studies (NCS), what parameter measures the time taken for an electrical stimulus to travel from the stimulation site to the muscle motor end-plate?",
    "options": [
      "Conduction Velocity (m/s) evaluated during comprehensive clinical physical examination",
      "Distal Motor Latency (ms) evaluated during comprehensive clinical physical examination",
      "Compound Muscle Action Potential (CMAP) Amplitude (confirmed via evidence-based musculoskeletal diagnostics)",
      "F-wave duration evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Distal Motor Latency (measured in ms) reflects conduction time along the terminal unmyelinated motor axon segment, neuromuscular junction, and muscle end-plate depolarization."
  },
  {
    "id": "source-2-b-290",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Fibrillation potentials and positive sharp waves detected on needle EMG during resting skeletal muscle examination indicate:",
    "options": [
      "Active muscle denervation / axonal degeneration (evaluated under standardized clinical sports science protocols)",
      "Normal muscle innervation evaluated during comprehensive clinical physical examination",
      "Central motor cortex fatigue evaluated during comprehensive clinical physical examination",
      "Normal tendon tightness evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Fibrillations and positive sharp waves are spontaneous involuntary single-fiber discharges seen 2-3 weeks post-injury, indicating active axonal denervation."
  },
  {
    "id": "source-2-b-291",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What does a reduced Nerve Conduction Velocity (NCV) (<40 m/s in upper extremity nerves) signify?",
    "options": [
      "Axonal loss without demyelination evaluated during comprehensive clinical physical examination",
      "Hyperthermia evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Normal athletic adaptation evaluated during comprehensive clinical physical examination",
      "Segmental demyelination of the peripheral nerve sheath (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Slowing of conduction velocity signifies breakdown of the insulating myelin sheath (demyelination), whereas reduction in CMAP amplitude reflects axonal loss."
  },
  {
    "id": "source-2-b-292",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Biofeedback devices in physical therapy monitor physiological activity (such as sEMG or pressure) to achieve what goal?",
    "options": [
      "Replacing physical therapy sessions evaluated during comprehensive clinical physical examination",
      "Providing real-time auditory/visual feedback to enhance voluntary control, muscle re-education, or relaxation",
      "Delivering high-voltage shocks evaluated during comprehensive clinical physical examination",
      "Measuring bone mineral density evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Biofeedback transforms covert physiological signals (e.g., VMO muscle activation) into real-time visual/auditory signals, allowing patients to consciously modify muscle recruitment."
  },
  {
    "id": "source-2-b-293",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which thermal agent transfer mechanism is utilized by Fluidotherapy and Whirlpool baths?",
    "options": [
      "Conduction",
      "Convection",
      "Radiation",
      "Conversion"
    ],
    "correct": 1,
    "explanation": "Convection transfers heat through bulk movement of circulating fluids or air particles around the body segment (e.g., whirlpool, fluidotherapy)."
  },
  {
    "id": "source-2-b-294",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Paraffin Wax Bath therapy transfers heat to distal extremities (hands/feet) via which physical mechanism?",
    "options": [
      "Convection evaluated during comprehensive clinical physical examination",
      "Conduction (using a 7:1 paraffin to mineral oil ratio at 47-54°C)",
      "Radiation evaluated during comprehensive clinical physical examination",
      "Conversion evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Paraffin wax transfers heat via conduction. Mineral oil lowers the melting point of paraffin (47-54°C), providing deep moist heat to small irregular hand/foot joints."
  },
  {
    "id": "source-2-b-295",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which cryotherapy application method produces the greatest reduction in deep intramuscular temperature?",
    "options": [
      "Vapocoolant spray evaluated during comprehensive clinical physical examination",
      "Brief 30-second cold gel wipe (assessed during high-performance athletic screening)",
      "Crushed Ice pack / Ice water immersion applied over skin for 20 minutes",
      "Infrared lamp evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Direct application of crushed ice packs or ice water immersion for 20 minutes produces significant, sustained drops in deep intramuscular temperature (>10°C drop)."
  },
  {
    "id": "source-2-b-296",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What physiological vascular phenomenon is described by Hunting's Reaction during prolonged cryotherapy (>15-20 minutes)?",
    "options": [
      "Continuous arterial occlusion evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Sudden systemic fever evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Cold-Induced Vasodilation (CIVD) following initial vasoconstriction to protect distal tissue from ischemic frostbite damage",
      "Venous thrombosis evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Hunting's Reaction involves alternating cycles of vasoconstriction and brief cold-induced vasodilation (CIVD) when tissue temperatures drop below 10°C, preserving tissue viability."
  },
  {
    "id": "source-2-b-297",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In Electrotherapy, 'Accommodation' of a motor nerve refers to:",
    "options": [
      "Nerve death evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Instantaneous twitch contraction evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "The gradual adaptation of a nerve to a slow-rising electrical stimulus, requiring higher voltage thresholds to elicit depolarization",
      "Skin burning evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Accommodation occurs when a nerve adapts to slow-rising triangular or saw-tooth current ramps, raising its excitation threshold due to sodium channel inactivation."
  },
  {
    "id": "source-2-b-298",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which current type is characterized by a continuous, unidirectional flow of charged particles toward a single pole?",
    "options": [
      "Direct (Galvanic) Current (DC)",
      "Alternating Current (AC)",
      "Pulsed Biphasic Current",
      "Interferential Current"
    ],
    "correct": 0,
    "explanation": "Direct Current (DC / Galvanic) flows continuously in one direction toward a fixed pole, utilized in iontophoresis and denervated muscle stimulation."
  },
  {
    "id": "source-2-b-299",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Iontophoresis utilizes low-voltage Direct Current to drive charged pharmaceutical ions across the skin. Which polarity electrode must be placed over a POSITIVELY charged drug ion (e.g., Dexamethasone is negative; Lidocaine is positive)?",
    "options": [
      "Random polarity evaluated during comprehensive clinical physical examination",
      "Cathode (Negative Pole) over positive drug ions (assessed during high-performance athletic screening)",
      "Ground electrode only evaluated during comprehensive clinical physical examination",
      "Anode (Positive Pole) over positive drug ions to repel them into tissue"
    ],
    "correct": 3,
    "explanation": "Like charges repel. To drive a positively charged drug ion (e.g., Lidocaine) into tissue, it must be placed under the positive active electrode (Anode)."
  },
  {
    "id": "source-2-b-300",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Dexamethasone sodium phosphate used in iontophoresis for acute tendinitis carries what electrical charge and must be placed under which electrode?",
    "options": [
      "Positive charge; placed under Anode (evaluated under standardized clinical sports science protocols)",
      "Neutral charge; no electrode needed (assessed during high-performance athletic screening)",
      "Negative charge; placed under Cathode (confirmed via evidence-based musculoskeletal diagnostics)",
      "Biphasic charge evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Dexamethasone phosphate is a negatively charged corticosteroid ion, so it must be placed under the negative electrode (Cathode) for electro-repulsive transdermal delivery."
  },
  {
    "id": "source-2-b-301",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "According to Kisner & Colby, what type of resistance training contractility is defined as dynamic muscle action performed at a constant angular velocity controlled by a specialized dynamometer?",
    "options": [
      "Isotonic training",
      "Isometric training",
      "Isokinetic training",
      "Plyometric training"
    ],
    "correct": 2,
    "explanation": "Isokinetic exercise utilizes an electromechanical dynamometer to maintain a constant predetermined angular velocity (deg/sec) regardless of maximal force applied by the athlete."
  },
  {
    "id": "source-2-b-302",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In PNF stretching techniques, the Hold-Relax procedure relies on which neurophysiological mechanism to achieve muscle lengthening?",
    "options": [
      "Reciprocal inhibition of the antagonist (evaluated under standardized clinical sports science protocols)",
      "Stretch reflex activation evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Autogenic inhibition of the target muscle mediated by Golgi Tendon Organs following an isometric contraction",
      "Gamma motor neuron suppression evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Hold-Relax utilizes a 20% to 50% maximal isometric contraction of the target muscle at end-range, triggering GTO autogenic inhibition to relax and lengthen the target muscle."
  },
  {
    "id": "source-2-b-303",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The PNF Contract-Relax technique differs from Hold-Relax primarily because Contract-Relax incorporates:",
    "options": [
      "Concentric rotational movement of the target muscle against resistance while autogenic inhibition takes place",
      "Concentric contraction of the antagonist muscle only (assessed during high-performance athletic screening)",
      "Complete passive paralysis evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "High velocity bounce stretching evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Contract-Relax incorporates concentric contraction of the rotatory component of the diagonal pattern against resistance, whereas Hold-Relax uses pure isometric contraction."
  },
  {
    "id": "source-2-b-304",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which PNF upper extremity pattern movement combines Shoulder Flexion, Abduction, and External Rotation?",
    "options": [
      "D1 Flexion evaluated during comprehensive clinical physical examination",
      "D2 Flexion ('Sword Draw' ending open overhead) (assessed during high-performance athletic screening)",
      "D1 Extension evaluated during comprehensive clinical physical examination",
      "D2 Extension evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "D2 Flexion pattern (resembling pulling a sword from hip and elevating overhead) consists of Shoulder Flexion, Abduction, and External Rotation with forearm supination and finger extension."
  },
  {
    "id": "source-2-b-305",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The PNF D1 Flexion pattern for the upper extremity consists of which combination of joint motions?",
    "options": [
      "Shoulder Flexion, Adduction, and External Rotation ('Hand to opposite ear')",
      "Shoulder Extension, Abduction, and Internal Rotation (assessed during high-performance athletic screening)",
      "Shoulder Flexion, Abduction, and Internal Rotation (confirmed via evidence-based musculoskeletal diagnostics)",
      "Pure shoulder extension evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "D1 Flexion (bringing hand up toward opposite ear) combines Shoulder Flexion, Adduction, and External Rotation with forearm supination and wrist/finger flexion."
  },
  {
    "id": "source-2-b-306",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which Maitland joint mobilization grade is appropriate for treating severe joint PAIN without tissue restriction?",
    "options": [
      "High-load traction evaluated during comprehensive clinical physical examination",
      "Grade III and Grade IV (assessed during high-performance athletic screening)",
      "Grade V thrust evaluated during comprehensive clinical physical examination",
      "Grade I and Grade II (low amplitude/large amplitude within pain-free range)"
    ],
    "correct": 3,
    "explanation": "Maitland Grades I and II are low-impact oscillations performed before tissue resistance, stimulating mechanoreceptors to inhibit pain without stretching tissue."
  },
  {
    "id": "source-2-b-307",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Maitland Grade IV joint mobilization is indicated for treating:",
    "options": [
      "Joint stiffness and structural hypomobility at end-range (evaluated under standardized clinical sports science protocols)",
      "Severe acute resting pain evaluated during comprehensive clinical physical examination",
      "Joint dislocation evaluated during comprehensive clinical physical examination",
      "Bone fracture evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Grade IV is a small-amplitude passive oscillation performed into tissue resistance at the end limit of available range to stretch stiff capsule/ligaments."
  },
  {
    "id": "source-2-b-308",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Mulligan's Mobilization with Movement (MWM) concept dictates that joint glides must be applied:",
    "options": [
      "Passively while the patient remains stationary (evaluated under standardized clinical sports science protocols)",
      "Passively by the clinician combined with active movement by the patient, and MUST be completely pain-free (PILL principle)",
      "Until severe pain is produced (confirmed via evidence-based musculoskeletal diagnostics)",
      "Only under general anesthesia evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "MWM combines sustained passive accessory joint glides with active patient movement. According to Mulligan, MWM must be Pain-free, Instant in result, and Long-Lasting (PILL)."
  },
  {
    "id": "source-2-b-309",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In Mulligan MWM concepts, what does the acronym 'CROKS' stand for regarding clinical evaluation?",
    "options": [
      "Clear, Reproducible Overpressure, Knowledge of Anatomy, Sustained Glides",
      "Clear Results Only Known Sometime (assessed during high-performance athletic screening)",
      "Clinical Reasoning, Outcome measures, Kinesiotherapy, Safety",
      "Concentric Range Of Motion Knee Stability (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Mulligan guidelines emphasize checking Clear financial/functional baseline, Reproducible Overpressure at end-range, Knowledge, and Sustained glides throughout movement."
  },
  {
    "id": "source-2-b-310",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which core stability exercise creates high intra-abdominal pressure and anti-rotational stiffness while minimizing lumbar spine compressive forces?",
    "options": [
      "McGill's 'Big Three' (Modified Curl-up, Side Plank, Bird-Dog)",
      "Full GHD sit-ups with spinal flexion (assessed during high-performance athletic screening)",
      "Heavy standing barbell torso twists (confirmed via evidence-based musculoskeletal diagnostics)",
      "Behind-neck crunches evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Stuart McGill's 'Big Three' core exercises build endurance and anti-rotational stiffness in abdominal wall musculature without imposing high compressive shear loads on lumbar discs."
  },
  {
    "id": "source-2-b-311",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "According to Shirley Sahrmann's Movement System Impairment concepts, lumbar spine dysfunction is predominantly caused by:",
    "options": [
      "Relative flexibility / hypermobility of lumbar segments paired with hypomobility of adjacent hip and thoracic joints",
      "Excessive stiffness of the lumbar spine (assessed during high-performance athletic screening)",
      "Hypertrophy of abdominal muscles evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Lack of spinal ligaments evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Sahrmann's model posits that the lumbar spine develops movement impairment because it moves too easily (relative flexibility) to compensate for hypomobile adjacent hip or thoracic joints."
  },
  {
    "id": "source-2-b-312",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In dynamic lumbar stabilization training, what is the primary function of the 'Abdominal Bracing' maneuver compared to 'Abdominal Hollowing'?",
    "options": [
      "Bracing causes spinal flexion evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Bracing reduces abdominal pressure evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Hollowing increases max strength evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Hollowing selectively isolates Transversus Abdominis; Bracing co-activates all abdominal wall layers (TA, Internal/External Obliques, Rectus) to create global 360-degree stability"
    ],
    "correct": 3,
    "explanation": "Abdominal bracing involves multi-muscle co-contraction of the entire abdominal wall without drawing in the navel, providing superior global stability for heavy lifting."
  },
  {
    "id": "source-2-b-313",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which stretching protocol uses slow, continuous, low-intensity mechanical stretch sustained for 20-30 minutes to permanently lengthen dense connective tissue plastic deformation?",
    "options": [
      "Ballistic stretching evaluated during comprehensive clinical physical examination",
      "High-velocity PNF evaluated during comprehensive clinical physical examination",
      "Dynamic active warm-up evaluated during comprehensive clinical physical examination",
      "Prolonged Low-Load Passive Stretch (LLPS) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "LLPS applies low load over extended time (20-30 min), exceeding viscoelastic creep thresholds to induce permanent plastic structural remodeling of collagen matrix."
  },
  {
    "id": "source-2-b-314",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Dynamic stretching prior to high-performance sprinting or jumping is preferred over static stretching because prolonged static stretching (>60s):",
    "options": [
      "Causes acute muscle tears evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Increases heart rate excessively evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Induces transient neural deficits, reduces muscle-tendon unit stiffness, and decreases maximal force/power output (stretch-induced force deficit)",
      "Reduces body temperature evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Static stretches held >60s decrease motor neuron excitability and tendon stiffness, causing acute deficits in force, power, and sprint acceleration (stretch-induced force loss)."
  },
  {
    "id": "source-2-b-315",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In eccentric tendinopathy rehabilitation (Alfredson Protocol for Achilles tendinopathy), what loading dosage is prescribed?",
    "options": [
      "3 sets of 15 repetitions performed twice daily for 12 weeks, with knees both straight (gastrocnemius) and bent (soleus), continuing through mild discomfort",
      "10 reps once a week (assessed during high-performance athletic screening)",
      "100 reps of fast jumping daily (confirmed via evidence-based musculoskeletal diagnostics)",
      "Complete bed rest evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "The Alfredson protocol prescribes 3 sets of 15 reps of eccentric heel drops, performed twice daily (180 reps total per day) for 12 weeks with straight and flexed knees."
  },
  {
    "id": "source-2-b-316",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Heavy Slow Resistance (HSR) training for tendinopathy (Kongsgaard protocol) differs from Alfredson eccentric loading by:",
    "options": [
      "Incorporating both heavy concentric and eccentric phases (3-4 sets of 6-15 RM) at slow movement velocities (3s up, 3s down) 3 days per week",
      "Using only light bodyweight repetitions (assessed during high-performance athletic screening)",
      "Eliminating all mechanical load evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Utilizing high-velocity plyometrics only evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "HSR utilizes heavy loading (up to 6RM) performing both slow concentric (3s) and slow eccentric (3s) phases 3 times per week, promoting collagen remodeling with high athlete compliance."
  },
  {
    "id": "source-2-b-317",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the therapeutic target of Blood Flow Restriction (BFR) training combined with low-load resistance exercise (20-30% 1RM)?",
    "options": [
      "Inducing arterial occlusion to starve muscle (evaluated under standardized clinical sports science protocols)",
      "Partial venous occlusion creating localized metabolic stress (hypoxia, lactate accumulation) to induce muscle hypertrophy comparable to heavy resistance training",
      "Increasing joint shear forces evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Stretching peripheral nerves evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "BFR applies pneumatic cuff compression to occlude venous outflow while preserving partial arterial inflow, creating cellular swelling and systemic anabolic hormone release with low mechanical loads."
  },
  {
    "id": "source-2-b-318",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which joint mobilization technique uses high-velocity, low-amplitude (HVLA) thrust at the end of available joint range (Maitland Grade V / Manipulation)?",
    "options": [
      "Grade I oscillation (evaluated under standardized clinical sports science protocols)",
      "Grade IV glide evaluated during comprehensive clinical physical examination",
      "Static traction evaluated during comprehensive clinical physical examination",
      "Grade V Thrust Manipulation (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Grade V (HVLA thrust) involves a rapid, small-amplitude mechanical thrust delivered beyond the restrictive articular barrier to restore joint play and alter neuromuscular tone."
  },
  {
    "id": "source-2-b-319",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "According to the Concave-Convex Rule (Kaltenborn), when a CONCAVE joint surface moves upon a fixed CONVEX surface, the arthrokinematic roll and glide occur in:",
    "options": [
      "Opposite directions",
      "The SAME direction",
      "Perpendicular planes",
      "Rotational axes only"
    ],
    "correct": 1,
    "explanation": "The Concave-Convex Rule dictates that when a concave surface moves on a fixed convex surface, roll and slide occur in the SAME direction. When convex moves on concave, slide is OPPOSITE to roll."
  },
  {
    "id": "source-2-b-320",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Applying the Convex-Concave Rule to glenohumeral abduction (convex humeral head moving on concave glenoid fossa), the humeral head must slide in which direction relative to the roll?",
    "options": [
      "Superior slide during superior roll (evaluated under standardized clinical sports science protocols)",
      "No sliding occurs evaluated during comprehensive clinical physical examination",
      "Anterior slide during posterior roll (confirmed via evidence-based musculoskeletal diagnostics)",
      "Inferior slide during superior roll (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Because the humeral head is convex moving on a concave glenoid, abduction involves a superior roll accompanied by an OPPOSITE (inferior) slide to prevent subacromial impingement."
  },
  {
    "id": "source-2-b-321",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "At the talocrural joint during open-chain ankle dorsiflexion, the convex talus rolls anteriorly and glides in which direction on the concave mortise?",
    "options": [
      "Anteriorly",
      "Laterally",
      "Superiorly",
      "Posteriorly"
    ],
    "correct": 3,
    "explanation": "The talus is convex moving within the concave tibiofibular mortise. During dorsiflexion, the talus rolls anteriorly and slides POSTERIORLY."
  },
  {
    "id": "source-2-b-322",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What kinetic chain phenomenon occurs at the knee during closed-chain squatting when the hip flexes and the ankle dorsiflexes?",
    "options": [
      "Co-contraction of quadriceps and hamstrings stabilizes the knee, where hamstrings extend the hip and quadriceps extend the knee (Lombard's Paradox)",
      "The hamstring flexes the knee while the quadriceps extends the hip (assessed during high-performance athletic screening)",
      "Quadriceps remain completely inactive evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "The knee dislocates anteriorly evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Lombard's Paradox explains how two biarticular antagonists (quadriceps and hamstrings) co-contract during standing/squatting to produce simultaneous hip and knee extension."
  },
  {
    "id": "source-2-b-323",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which exercise progression is most appropriate for late-stage ACL rehabilitation prior to agility drills?",
    "options": [
      "Straight-line jogging progressing to deceleration drills, single-leg hop landing control, and multi-planar plyometrics",
      "Static bed rest evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "High-load leg extension OKC only (confirmed via evidence-based musculoskeletal diagnostics)",
      "Continuous passive motion evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Return-to-sport progression transitions from linear running to deceleration control, single-leg landing stabilization, and multi-planar reactive plyometrics."
  },
  {
    "id": "source-2-b-324",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which upper extremity exercise produces high electromyographic activation of Serratus Anterior while minimizing Pectoralis Major involvement?",
    "options": [
      "Standard bench press evaluated during comprehensive clinical physical examination",
      "Push-up Plus (performing scapular protraction at full elbow extension) and Dynamic Hug",
      "Lat pulldown evaluated during comprehensive clinical physical examination",
      "Biceps curl evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "The Push-up Plus and Dynamic Hug specifically isolate Serratus Anterior by forcing active scapular protraction at end-range elbow extension."
  },
  {
    "id": "source-2-b-325",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In shoulder rehabilitation, which exercise isolates the Lower Trapezius muscle with minimal Upper Trapezius compensation?",
    "options": [
      "Shoulder Shrugs evaluated during comprehensive clinical physical examination",
      "Prone Y-Raise (Prone elevation in 135° abduction with thumb pointing up)",
      "Bench press evaluated during comprehensive clinical physical examination",
      "Upright barbell row evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "The Prone Y-raise (horizontal elevation at 135° abduction with external rotation) maximizes Lower Trapezius activation while minimizing dominant Upper Trapezius activity."
  },
  {
    "id": "source-2-b-326",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which kinetic chain rehabilitation exercise effectively recruits the Gluteus Medius with low tensor fasciae latae (TFL) dominance?",
    "options": [
      "Seated leg curl evaluated during comprehensive clinical physical examination",
      "Standing leg extension evaluated during comprehensive clinical physical examination",
      "Side-lying Clamshell and Side Bridge (Plank) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Prone hamstring curl evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Electromyographic studies confirm Side-lying Clamshells, Side Planks, and Quadruped Hip Extension activate Gluteus Medius while minimizing overactivity of TFL."
  },
  {
    "id": "source-2-b-327",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In core stability training, the 'Dead Bug' exercise trains which functional motor pattern?",
    "options": [
      "Lumbar hyperextension evaluated during comprehensive clinical physical examination",
      "Spinal rotation evaluated during comprehensive clinical physical examination",
      "Anti-extension core control (maintaining a neutral spine against limb lever torque)",
      "Lateral spinal flexion evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The Dead Bug challenges anterior core musculature to maintain anti-extension pelvic-lumbar neutral alignment while upper and lower limbs extend dynamically."
  },
  {
    "id": "source-2-b-328",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which manual therapy technique according to Robin McKenzie involves repetitive end-range spinal movements to 'centralize' radicular symptoms?",
    "options": [
      "Maitland Grade V manipulation evaluated during comprehensive clinical physical examination",
      "Myofascial Trigger Point Release evaluated during comprehensive clinical physical examination",
      "McKenzie Mechanical Diagnosis and Therapy (MDT) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Craniosacral therapy evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "McKenzie MDT uses repeated directional movement testing (e.g., lumbar extension) to produce 'centralization'—shifting peripheral radicular pain proximally toward the spinal midline."
  },
  {
    "id": "source-2-b-329",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In McKenzie spinal classification, the 'Centralization Phenomenon' refers to:",
    "options": [
      "Distal radicular pain abolishing or moving proximally toward the spinal column in response to specific directional movements",
      "Pain spreading further down the leg (assessed during high-performance athletic screening)",
      "Loss of bowel/bladder control evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Muscle spasm increase evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Centralization occurs when repeated movements cause distal nerve root pain to retreat proximally toward the midline, signaling favorable mechanical reduction of disc displacement."
  },
  {
    "id": "source-2-b-330",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary mechanical objective of applying Kinesiology Taping over a hypertonic, painful muscle belly?",
    "options": [
      "Rigid mechanical immobilization of the joint (evaluated under standardized clinical sports science protocols)",
      "Restricting arterial blood flow evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Replacing structural ligaments evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Lifting the skin (dermal-epidermal decompression) to facilitate lymphatic drainage, reduce nociceptive pressure, and provide tactile sensory feedback"
    ],
    "correct": 3,
    "explanation": "Kinesiology tape creates cutaneous convolutions, lifting the epidermis to decompress subcutaneous nociceptors and lymphatic vessels, enhancing circulation and sensory feedback."
  },
  {
    "id": "source-2-b-331",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "According to Perry's Gait Analysis, what percentage of the normal walking gait cycle is spent in the Stance Phase versus the Swing Phase?",
    "options": [
      "50% Stance, 50% Swing",
      "60% Stance, 40% Swing",
      "80% Stance, 20% Swing",
      "30% Stance, 70% Swing"
    ],
    "correct": 1,
    "explanation": "A normal walking gait cycle comprises 60% Stance Phase (weight-bearing contact) and 40% Swing Phase (unloaded limb advancement)."
  },
  {
    "id": "source-2-b-332",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In normal walking gait, double-limb support occurs during which two phases of the stance period?",
    "options": [
      "Mid-stance and Terminal stance evaluated during comprehensive clinical physical examination",
      "Terminal swing only evaluated during comprehensive clinical physical examination",
      "Initial swing and Mid-swing evaluated during comprehensive clinical physical examination",
      "Initial Contact / Loading Response and Pre-swing (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Double-limb support (both feet on ground) occurs twice per gait cycle (~10% duration each): at initial contact/loading response and pre-swing."
  },
  {
    "id": "source-2-b-333",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which gait event marks the transition from Stance Phase to Swing Phase in human locomotion?",
    "options": [
      "Initial Contact (Heel Strike) (evaluated under standardized clinical sports science protocols)",
      "Mid-stance evaluated during comprehensive clinical physical examination",
      "Toe-Off (Pre-swing completion) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Terminal Stance evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Toe-off (completion of pre-swing) marks the moment foot contact ceases, transitioning the limb into initial swing phase."
  },
  {
    "id": "source-2-b-334",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What pathological gait abnormality is characterized by excessive contralateral pelvic drop during single-leg stance due to weakness of the stance-leg Gluteus Medius?",
    "options": [
      "Trendelenburg Gait (evaluated under standardized clinical sports science protocols)",
      "Antalgic Gait (assessed during high-performance athletic screening)",
      "Equinus Gait evaluated during comprehensive clinical physical examination",
      "Steppage Gait (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Trendelenburg gait occurs when weak hip abductors (Gluteus Medius/Minimus) fail to stabilize the pelvis during single-leg stance, causing the un-weighted contralateral pelvis to drop."
  },
  {
    "id": "source-2-b-335",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A 'Steppage Gait' (excessive hip and knee flexion during swing phase) is mechanically required to compensate for foot drop caused by paralysis of which muscle group?",
    "options": [
      "Plantarflexors (Gastrocnemius/Soleus) evaluated during comprehensive clinical physical examination",
      "Quadriceps evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Hip Extensors evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Ankle Dorsiflexors (Tibialis Anterior) due to Deep Peroneal Nerve lesion (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Loss of ankle dorsiflexion (foot drop) causes the foot to drag during swing. To clear the toes, the patient excessively flexes the hip and knee ('steppage gait')."
  },
  {
    "id": "source-2-b-336",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "An 'Antalgic Gait' is primarily characterized by:",
    "options": [
      "Exaggerated arm swing evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Significantly shortened stance phase duration on the painful (affected) limb to minimize weight-bearing discomfort",
      "High stepping cadence evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Rigid trunk extension evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Antalgic gait is a pain-avoidance gait where the athlete quickly offloads the painful limb, resulting in a shortened stance phase on the affected side and uneven rhythm."
  },
  {
    "id": "source-2-b-337",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Peak knee flexion during normal walking gait reaches approximately how many degrees, and in which gait phase does it occur?",
    "options": [
      "15° during Mid-stance evaluated during comprehensive clinical physical examination",
      "90° during Heel strike evaluated during comprehensive clinical physical examination",
      "60° during Initial / Mid-Swing Phase (confirmed via evidence-based musculoskeletal diagnostics)",
      "30° during Terminal stance (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Peak knee flexion during normal walking gait reaches approximately 60 degrees during the initial-to-mid swing phase to clear the toe above ground."
  },
  {
    "id": "source-2-b-338",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During the Loading Response phase of gait, what eccentric muscle action controls the rate of ankle plantarflexion following initial heel contact?",
    "options": [
      "Eccentric contraction of Gastrocnemius evaluated during comprehensive clinical physical examination",
      "Isometric contraction of Soleus evaluated during comprehensive clinical physical examination",
      "Concentric contraction of Peroneus Longus (confirmed via evidence-based musculoskeletal diagnostics)",
      "Eccentric contraction of Tibialis Anterior (Dorsiflexors) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Following heel strike, Tibialis Anterior contracts eccentrically to lower the forefoot smoothly to the ground, preventing 'foot slap'."
  },
  {
    "id": "source-2-b-339",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What arthrokinematic motion occurs at the Subtalar Joint during early stance loading to absorb shock and adapt to uneven terrain?",
    "options": [
      "Subtalar Supination (Inversion, Adduction, Plantarflexion) (evaluated under standardized clinical sports science protocols)",
      "Pure Ankle Extension evaluated during comprehensive clinical physical examination",
      "Subtalar Pronation (Eversion, Abduction, Dorsiflexion) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Rigid locking evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Early stance subtalar pronation unlocks the midtarsal joints, transforming the foot into a flexible, shock-absorbing structure to adapt to terrain."
  },
  {
    "id": "source-2-b-340",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "During push-off / terminal stance, subtalar joint supination combines with the Windlass Mechanism to transform the foot into a:",
    "options": [
      "Rigid lever for forward propulsion (evaluated under standardized clinical sports science protocols)",
      "Flexible shock absorber evaluated during comprehensive clinical physical examination",
      "Hypermobile structure evaluated during comprehensive clinical physical examination",
      "Flat arch evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Late stance subtalar supination locks the midtarsal joints while MTP extension tightens the plantar fascia (Windlass effect), turning the foot into a rigid propulsive lever."
  },
  {
    "id": "source-2-b-341",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The 'Windlass Mechanism' of the plantar fascia is mechanically triggered by:",
    "options": [
      "Extension (dorsiflexion) of the Great Metatarsophalangeal (MTP) Joint, which winds the plantar fascia around the metatarsal head to elevate the medial longitudinal arch",
      "Ankle plantarflexion evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Subtalar eversion evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Knee flexion evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Extending the 1st MTP joint tightens the plantar fascia around the 1st metatarsal head (windlass effect), shortening distance between calcaneus and toes to elevate the arch."
  },
  {
    "id": "source-2-b-342",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What postural deformity is characterized by an increased anterior pelvic tilt, excessive lumbar lordosis, and associated tight hip flexors and weak gluteals?",
    "options": [
      "Lower Crossed Syndrome (Janda) (evaluated under standardized clinical sports science protocols)",
      "Upper Crossed Syndrome (assessed during high-performance athletic screening)",
      "Flat Back Posture evaluated during comprehensive clinical physical examination",
      "Sway Back Posture evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Janda's Lower Crossed Syndrome features tight hip flexors (Iliopsoas, Rectus Femoris) and lumbar erectors crossing with weak gluteals and abdominal wall musculature, creating anterior pelvic tilt."
  },
  {
    "id": "source-2-b-343",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Janda's Upper Crossed Syndrome is characterized by which pattern of muscular tightness and weakness?",
    "options": [
      "Global muscle flaccidity evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Tight rhomboids and weak pectorals (assessed during high-performance athletic screening)",
      "Tight abdominals and weak erector spinae (confirmed via evidence-based musculoskeletal diagnostics)",
      "Tight Pectoralis Major/Minor and Upper Trapezius/Levator Scapulae, crossing with weak Deep Cervical Flexors and Lower Trapezius/Serratus Anterior"
    ],
    "correct": 3,
    "explanation": "Upper Crossed Syndrome exhibits tight anterior chest (Pectorals) and upper back (UT/Levator) crossing with weak deep neck flexors and inferior scapular stabilizers (LT/Serratus), causing forward head and rounded shoulders."
  },
  {
    "id": "source-2-b-344",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What clinical posture is defined by forward head position, thoracic hyperkyphosis, posterior pelvic tilt, and anterior displacement of the pelvis relative to the ankles?",
    "options": [
      "Lordotic posture",
      "Scoliotic Posture",
      "Military Type Posture",
      "Sway-Back Posture"
    ],
    "correct": 3,
    "explanation": "Sway-back posture involves posterior pelvic tilt, anterior pelvic shift relative to plumbing line, thoracic hyperkyphosis, and forward head posture."
  },
  {
    "id": "source-2-b-345",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Structural Scoliosis differs from Functional Scoliosis because Structural Scoliosis:",
    "options": [
      "Disappears upon forward trunk flexion (Adams Forward Bend Test) (evaluated under standardized clinical sports science protocols)",
      "Occurs only in elderly males (assessed during high-performance athletic screening)",
      "Is caused purely by muscle spasm (confirmed via evidence-based musculoskeletal diagnostics)",
      "Involves fixed vertebral rotation and anatomical structural asymmetry that DOES NOT correct during forward flexion"
    ],
    "correct": 3,
    "explanation": "Structural scoliosis features fixed bony deformity with vertebral body rotation (causing rib hump on Adams Forward Bend Test) that persists during active movement, unlike functional scoliosis."
  },
  {
    "id": "source-2-b-346",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In running biomechanics, 'Overstriding' (foot landing significantly anterior to the runner's Center of Mass at initial contact) causes:",
    "options": [
      "Increased running speed and efficiency (evaluated under standardized clinical sports science protocols)",
      "Excessive horizontal braking forces, high impact transient peak loading, and increased knee joint stress",
      "Reduced ground contact time evaluated during comprehensive clinical physical examination",
      "Optimal elastic storage evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Landing with the foot far ahead of the COM creates large horizontal braking forces, increasing impact shock and knee joint joint-reaction forces."
  },
  {
    "id": "source-2-b-347",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which kinematic parameter differentiates running from walking gait?",
    "options": [
      "Running has a double-limb support phase (evaluated under standardized clinical sports science protocols)",
      "Running features a Float Phase (Flight Phase where neither foot contacts the ground) and absence of double-limb support",
      "Walking has a higher flight time (confirmed via evidence-based musculoskeletal diagnostics)",
      "Walking cadence is always higher (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Running is distinguished from walking by the presence of an airborne Float/Flight phase and the complete absence of double-limb support periods."
  },
  {
    "id": "source-2-b-348",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What running gait variation increases ground reaction forces and Achilles tendon loading compared to rearfoot striking?",
    "options": [
      "Rearfoot Strike (RFS) evaluated during comprehensive clinical physical examination",
      "Walking gait evaluated during comprehensive clinical physical examination",
      "Forefoot Strike (FFS) / Midfoot Strike (confirmed via evidence-based musculoskeletal diagnostics)",
      "Overstriding evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Forefoot striking shifts mechanical load from knee joints to the ankle plantarflexors and Achilles tendon, increasing triceps surae tension and calf strain risk."
  },
  {
    "id": "source-2-b-349",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Excessive dynamic knee valgus during landing is biomechanically driven by a combination of which hip joint movements?",
    "options": [
      "Hip Adduction and Internal Rotation combined with tibial eversion/pronation",
      "Hip Abduction and External Rotation (assessed during high-performance athletic screening)",
      "Hip Extension and Flexion evaluated during comprehensive clinical physical examination",
      "Pure pelvic elevation evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Dynamic knee valgus (femoral collapse) is driven by uncontrolled hip adduction and internal rotation relative to the foot, stressing the ACL and patellofemoral joint."
  },
  {
    "id": "source-2-b-350",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What biomechanical parameter is defined as the number of steps taken per minute during locomotion?",
    "options": [
      "Stride length evaluated during comprehensive clinical physical examination",
      "Cadence (Step Frequency) (assessed during high-performance athletic screening)",
      "Gait velocity evaluated during comprehensive clinical physical examination",
      "Step width evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Cadence is step rate (steps per minute). Increasing running cadence by 5-10% at a fixed speed shortens stride length and reduces knee impact loading."
  },
  {
    "id": "source-2-b-351",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In kinetic chain evaluation, 'Genu Valgum' alignment at the knee is commonly referred to as:",
    "options": [
      "Knock-knees evaluated during comprehensive clinical physical examination",
      "Bow-legs evaluated during comprehensive clinical physical examination",
      "Hyperextended knees (Genu Recurvatum) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Windswept knees evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Genu valgum (knock-knees) is lateral angulation of the distal segment (tibia points outward relative to femur), increasing medial joint tensile stress and lateral compressive stress."
  },
  {
    "id": "source-2-b-352",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Genu Varum alignment at the knee increases compressive mechanical stress predominantly in which knee joint compartment?",
    "options": [
      "Lateral Compartment (evaluated under standardized clinical sports science protocols)",
      "Medial Compartment evaluated during comprehensive clinical physical examination",
      "Patellofemoral joint (confirmed via evidence-based musculoskeletal diagnostics)",
      "Superior tibiofibular joint (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Genu varum (bow-legs) shifts the ground reaction force vector medially, significantly increasing compressive loading across the medial compartment of the knee."
  },
  {
    "id": "source-2-b-353",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What postural abnormality of the knee involves sagittal plane hyperextension beyond 10 degrees?",
    "options": [
      "Genu Valgum (evaluated under standardized clinical sports science protocols)",
      "Genu Recurvatum (assessed during high-performance athletic screening)",
      "Genu Varum evaluated during comprehensive clinical physical examination",
      "Patella Alta (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Genu Recurvatum is knee hyperextension > 10°, placing chronic tensile stress on the posterior knee capsule, PCL, and anterior ACL."
  },
  {
    "id": "source-2-b-354",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Q-Angle (Quadriceps Angle) is measured between which two intersecting anatomical lines?",
    "options": [
      "Line across iliac crests evaluated during comprehensive clinical physical examination",
      "Line from pubic symphysis to greater trochanter (assessed during high-performance athletic screening)",
      "Line from femoral head to lateral malleolus (confirmed via evidence-based musculoskeletal diagnostics)",
      "Line from ASIS to central patella, and line from central patella to tibial tuberosity"
    ],
    "correct": 3,
    "explanation": "The Q-angle is formed by the intersection of a line from the ASIS to the center of the patella and a line from the patellar center to the tibial tuberosity (normal ~13° in men, ~18° in women)."
  },
  {
    "id": "source-2-b-355",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "An abnormally high Q-angle (>20 degrees) increases lateral tracking force on which joint structure?",
    "options": [
      "Medial meniscus evaluated during comprehensive clinical physical examination",
      "Patellofemoral Joint (increasing lateral patellar subluxation vector)",
      "Posterior Cruciate Ligament evaluated during comprehensive clinical physical examination",
      "Fibula head evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "An elevated Q-angle creates a large lateral valgus vector on the patella during quadriceps contraction, predisposing to patellofemoral pain and lateral subluxation."
  },
  {
    "id": "source-2-b-356",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "According to Magee's Orthopedic Physical Assessment, which clinical test possesses the HIGHEST diagnostic sensitivity for detecting acute Anterior Cruciate Ligament (ACL) rupture?",
    "options": [
      "Lachman Test evaluated during comprehensive clinical physical examination",
      "Pivot Shift Test (assessed during high-performance athletic screening)",
      "Anterior Drawer Test (confirmed via evidence-based musculoskeletal diagnostics)",
      "McMurray Test evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "The Lachman test (performed at 20-30° knee flexion) has the highest diagnostic sensitivity (~95%) for ACL tears, superior to the Anterior Drawer test which is restricted by posterior meniscal wedging."
  },
  {
    "id": "source-2-b-357",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which ACL clinical test has the highest SPECIFICITY for confirming an ACL tear by reproducing rotational subluxation of the lateral tibial plateau?",
    "options": [
      "Lachman Test evaluated during comprehensive clinical physical examination",
      "Pivot Shift Test (assessed during high-performance athletic screening)",
      "Posterior Drawer Test (confirmed via evidence-based musculoskeletal diagnostics)",
      "Hughston Jerk Test (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "The Pivot Shift test evaluates dynamic rotational instability. While harder to elicit in conscious patients due to guarding, its high specificity (~98%) confirms an ACL rupture when positive."
  },
  {
    "id": "source-2-b-358",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The McMurray Test is used during knee examination to assess integrity of which structure?",
    "options": [
      "Anterior Cruciate Ligament (evaluated under standardized clinical sports science protocols)",
      "Patellar Tendon evaluated during comprehensive clinical physical examination",
      "Menisci (Medial and Lateral) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Iliotibial Band evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "McMurray's test evaluates meniscal tears. External tibial rotation with valgus stress tests the medial meniscus; internal rotation with varus stress tests the lateral meniscus."
  },
  {
    "id": "source-2-b-359",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What positive physical finding during the Apley Grind Test differentiates a meniscal injury from a collateral ligament lesion?",
    "options": [
      "Pain reproduced during distraction evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Inability to dorsiflex evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Loss of patellar reflex evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Pain reproduced during joint compression and rotation (meniscal tear), whereas pain during distraction indicates ligamentous sprain"
    ],
    "correct": 3,
    "explanation": "Apley's test applies axial compression with rotation (reproduces meniscal pain). If distraction with rotation produces pain, ligamentous tissue is implicated instead."
  },
  {
    "id": "source-2-b-360",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Thessaly Test for meniscal tear assessment is performed under which functional condition?",
    "options": [
      "Patient lying supine evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Patient sitting on edge of plinth (assessed during high-performance athletic screening)",
      "Patient prone with knee flexed to 90° (confirmed via evidence-based musculoskeletal diagnostics)",
      "Patient standing on one leg on the affected limb, flexing the knee to 20°, and actively rotating the body/femur internally and externally 3 times"
    ],
    "correct": 3,
    "explanation": "Thessaly test is a dynamic weight-bearing test performed at 20° knee flexion on a single leg. Body rotation exerts compressive/rotational stress on menisci (sensitivity ~89%)."
  },
  {
    "id": "source-2-b-361",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which special test assesses posterior cruciate ligament (PCL) injury by observing posterior sagging of the proximal tibia when the patient is supine with hips and knees flexed to 90 degrees?",
    "options": [
      "Posterior Sag Sign (Godfrey's Test) (evaluated under standardized clinical sports science protocols)",
      "Lachman Test evaluated during comprehensive clinical physical examination",
      "Godfrey sign evaluated during comprehensive clinical physical examination",
      "Dial Test evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "The Posterior Sag Sign (Godfrey test) assesses PCL tears by observing gravity-induced posterior displacement of the tibial tuberosity when hips and knees are flexed to 90°."
  },
  {
    "id": "source-2-b-362",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Dial Test (evaluating external rotation asymmetry at 30 degrees and 90 degrees of knee flexion) differentiates between isolated PCL tears and combined posterolateral corner (PLC) injuries. An isolated PLC injury shows increased external rotation (>10°) at:",
    "options": [
      "Neither 30° nor 90° evaluated during comprehensive clinical physical examination",
      "90° knee flexion ONLY (assessed during high-performance athletic screening)",
      "Both 30° and 90° knee flexion (confirmed via evidence-based musculoskeletal diagnostics)",
      "30° knee flexion ONLY (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "Increased tibial external rotation >10° at 30° knee flexion ONLY indicates isolated Posterolateral Corner (PLC) injury. Increased external rotation at BOTH 30° and 90° indicates combined PCL + PLC injury."
  },
  {
    "id": "source-2-b-363",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which special test is used to diagnose Subacromial Impingement Syndrome by passively elevating the patient's arm in the scapular plane with internal rotation (forcing the greater tuberosity against the acromion)?",
    "options": [
      "Hawkins-Kennedy Test (evaluated under standardized clinical sports science protocols)",
      "Neer Impingement Test (assessed during high-performance athletic screening)",
      "Empty Can Test evaluated during comprehensive clinical physical examination",
      "Speed's Test evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Neer's test passively flexes/elevates the internally rotated arm overhead, jamming the greater tuberosity against the anteroinferior acromion to reproduce subacromial pain."
  },
  {
    "id": "source-2-b-364",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Hawkins-Kennedy Test for subacromial shoulder impingement is performed by placing the patient's shoulder in:",
    "options": [
      "Full extension behind back evaluated during comprehensive clinical physical examination",
      "90° Abduction, followed by passive External Rotation (assessed during high-performance athletic screening)",
      "90° Flexion, followed by passive forced Internal Rotation (confirmed via evidence-based musculoskeletal diagnostics)",
      "Pure adduction evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Hawkins-Kennedy test flexes the shoulder to 90° in the sagittal plane with elbow flexed to 90°, then forcefully internally rotates the humerus to compress the supraspinatus tendon under the coracoacromial arch."
  },
  {
    "id": "source-2-b-365",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What special test isolates Supraspinatus tendon pathology or muscle weakness by testing isometric elevation in the scapular plane (90° elevation, 30° anterior to frontal plane) with full internal rotation ('thumbs down')?",
    "options": [
      "Full Can Test evaluated during comprehensive clinical physical examination",
      "Yergason's Test (assessed during high-performance athletic screening)",
      "Empty Can (Jobe) Test (confirmed via evidence-based musculoskeletal diagnostics)",
      "Drop Arm Test evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The Empty Can (Jobe) test positions the arm in 90° scapular abduction with full internal rotation ('thumbs down'), placing maximal mechanical isolation on the Supraspinatus muscle-tendon unit."
  },
  {
    "id": "source-2-b-366",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A positive Drop Arm Test (inability to control smooth passive lowering of the arm from 90° abduction) indicates a full-thickness tear of which muscle?",
    "options": [
      "Subscapularis muscle acting as primary internal rotator",
      "Infraspinatus muscle acting as primary external rotator",
      "Teres Minor muscle acting as secondary external rotator",
      "Supraspinatus muscle acting as initiator of abduction (0-15°)"
    ],
    "correct": 3,
    "explanation": "Drop Arm test detects full-thickness Supraspinatus tears when the athlete cannot eccentrically lower the arm slowly from 90° abduction, causing the arm to drop abruptly."
  },
  {
    "id": "source-2-b-367",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which special physical examination test assesses Subscapularis muscle tear or weakness by having the patient place the back of their hand against their mid-lumbar spine and actively lift it off the back?",
    "options": [
      "Gerber's Lift-Off Test (evaluated under standardized clinical sports science protocols)",
      "Belly-Press (Napoleonic) Test (assessed during high-performance athletic screening)",
      "Hornblower's Sign evaluated during comprehensive clinical physical examination",
      "Speeds Test evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Gerber's Lift-Off Test isolates Subscapularis by placing the dorsum of the hand against the lumbar spine and asking the patient to push posteriorly against examiner resistance."
  },
  {
    "id": "source-2-b-368",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Speed's Test and Yergason's Test are classical physical exam tests used to diagnose pathology of which proximal arm structure?",
    "options": [
      "Biceps Brachii Long Head Tendon (bicipital tendinopathy / tenosynovitis) (evaluated under standardized clinical sports science protocols)",
      "Rotator cuff supraspinatus tendon evaluated during comprehensive clinical physical examination",
      "Triceps tendon evaluated during comprehensive clinical physical examination",
      "Coracobrachialis evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Speed's (resisted shoulder flexion with forearm supinated) and Yergason's (resisted supination/external rotation) specifically provoke pain in the Long Head of Biceps tendon within the bicipital groove."
  },
  {
    "id": "source-2-b-369",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Finkelstein's Test is positive when passive thumb flexion inside a clenched fist combined with ulnar deviation of the wrist reproduces sharp pain over the first dorsal compartment, confirming:",
    "options": [
      "Carpal Tunnel Syndrome evaluated during comprehensive clinical physical examination",
      "De Quervain's Tenosynovitis (Abductor Pollicis Longus and Extensor Pollicis Brevis)",
      "Scaphoid nonunion evaluated during comprehensive clinical physical examination",
      "Trigger Thumb evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Finkelstein's test stretches tendons of the first dorsal wrist compartment (APL and EPB) over the radial styloid. Sharp pain confirms De Quervain's Tenosynovitis."
  },
  {
    "id": "source-2-b-370",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which physical test evaluates for Carpal Tunnel Syndrome by asking the patient to hold both wrists in unforced maximal hyperflexion back-to-back for 60 seconds?",
    "options": [
      "Tinel's Sign evaluated during comprehensive clinical physical examination",
      "Phalen's Test evaluated during comprehensive clinical physical examination",
      "Reverse Phalen's Test (confirmed via evidence-based musculoskeletal diagnostics)",
      "Froment's Sign evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Phalen's test increases pressure inside the carpal tunnel by holding maximum wrist flexion for 60 seconds. Numbness/paresthesia in median nerve distribution indicates positive test."
  },
  {
    "id": "source-2-b-371",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Froment's Sign tests for Ulnar Nerve palsy by asking a patient to pinch a piece of paper between thumb and index finger. A positive sign is seen when the patient compensates for weak Adductor Pollicis by flexing the thumb IP joint using which muscle?",
    "options": [
      "Abductor Pollicis Brevis evaluated during comprehensive clinical physical examination",
      "Flexor Hallucis Longus muscle passing beneath sustentaculum tali (assessed during high-performance athletic screening)",
      "Extensor Pollicis Longus evaluated during comprehensive clinical physical examination",
      "Flexor Pollicis Longus (Median Nerve) (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "In ulnar nerve weakness (Adductor Pollicis paralysis), the patient involuntarily flexes the thumb interphalangeal joint using Flexor Pollicis Longus (Median nerve) to hold paper ('Froment's sign')."
  },
  {
    "id": "source-2-b-372",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Thomas Test is performed in physical therapy physical examination to detect fixed tightness or flexion contracture of which muscle group?",
    "options": [
      "Hip Flexors (Iliopsoas and Rectus Femoris) (evaluated under standardized clinical sports science protocols)",
      "Hamstrings evaluated during comprehensive clinical physical examination",
      "Adductors evaluated during comprehensive clinical physical examination",
      "Gluteus Maximus evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Thomas test evaluates hip flexor tightness. With one leg held in maximal hip flexion against chest, if the extended leg lifts off the table, iliopsoas/rectus femoris tightness is present."
  },
  {
    "id": "source-2-b-373",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Ober's Test assesses tightness or contracture of which lateral lower extremity anatomical structure?",
    "options": [
      "Tensor Fasciae Latae (TFL) and Iliotibial Band (ITB) (evaluated under standardized clinical sports science protocols)",
      "Hamstrings evaluated during comprehensive clinical physical examination",
      "Adductor Longus evaluated during comprehensive clinical physical examination",
      "Rectus Femoris evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Ober's test evaluates ITB/TFL tightness. Patient lies side-lying; examiner abducts and extends upper leg, then lowers it into adduction. Inability to adduct past horizontal indicates tight ITB."
  },
  {
    "id": "source-2-b-374",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "A positive Straight Leg Raise (SLR / Lasègue's Test) between 30 and 70 degrees of hip flexion reproduces sciatic radicular pain, indicating:",
    "options": [
      "Hamstring muscle strain evaluated during comprehensive clinical physical examination",
      "Trochanteric bursitis evaluated during comprehensive clinical physical examination",
      "Sacroiliac joint sprain evaluated during comprehensive clinical physical examination",
      "Lumbar disc herniation with L5/S1 nerve root compression/traction"
    ],
    "correct": 3,
    "explanation": "SLR places mechanical dural traction on L5/S1 nerve roots between 30° and 70° flexion. Reproduction of sharp radicular pain below the knee indicates disc herniation with nerve root impingement."
  },
  {
    "id": "source-2-b-375",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What secondary movement maneuver during an SLR test (Bragard's Sign) differentiates true neural dural tightness from hamstring tightness?",
    "options": [
      "Ankle Plantarflexion evaluated during comprehensive clinical physical examination",
      "Ankle Passive Dorsiflexion (and/or neck flexion) at point of pain onset",
      "Knee Flexion evaluated during comprehensive clinical physical examination",
      "Hip External Rotation evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "Bragard's test backs off SLR height slightly to pain-free level, then adds passive ankle dorsiflexion. Re-aggravation of radicular pain confirms neural mechanosensitivity rather than hamstring stretch."
  },
  {
    "id": "source-2-b-376",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Slump Test is a dynamic neurodynamic examination procedure that sequentially applies tension to the neuraxis using which combination of movements?",
    "options": [
      "Cervical Extension and Knee Flexion (evaluated under standardized clinical sports science protocols)",
      "Spinal Extension and Hip Abduction (assessed during high-performance athletic screening)",
      "Spinal Slump (Thoracolumbar flexion), Cervical Flexion, Knee Extension, and Ankle Dorsiflexion",
      "Wrist Extension only evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Slump test increases dural tension through sitting spinal slump, neck flexion, knee extension, and ankle dorsiflexion, assessing neuromeningeal tract sensitivity."
  },
  {
    "id": "source-2-b-377",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which special test assesses Sacroiliac Joint dysfunction by performing forced Hip Flexion, Abduction, and External Rotation ('FABER' / Patrick's Test)?",
    "options": [
      "FABER (Patrick's) Test (evaluated under standardized clinical sports science protocols)",
      "Gaenslen's Test evaluated during comprehensive clinical physical examination",
      "Trendelenburg Test (confirmed via evidence-based musculoskeletal diagnostics)",
      "Ely's Test evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "FABER (Flexion, Abduction, External Rotation) test stresses the anterior SI joint and hip joint. Pain in posterior SI joint region suggests SI joint pathology."
  },
  {
    "id": "source-2-b-378",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Noble Compression Test is used to confirm the diagnosis of which common running overuse condition?",
    "options": [
      "Iliotibial Band Friction Syndrome (ITBFS) (evaluated under standardized clinical sports science protocols)",
      "Patellofemoral Pain Syndrome evaluated during comprehensive clinical physical examination",
      "Pes Anserine Bursitis evaluated during comprehensive clinical physical examination",
      "Plantar Fasciitis evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Noble Compression test applies manual pressure over the lateral femoral epicondyle while passively extending the knee from 90° to 0°. Pain at ~30° flexion confirms ITB friction syndrome."
  },
  {
    "id": "source-2-b-379",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which test assesses Achilles tendon complete rupture by squeezing the calf muscle belly while the patient lies prone with feet over the edge of the plinth?",
    "options": [
      "Morton's Test evaluated during comprehensive clinical physical examination",
      "Tinel's Test evaluated during comprehensive clinical physical examination",
      "Thompson (Simmonds) Squeeze Test (confirmed via evidence-based musculoskeletal diagnostics)",
      "Windlass Test evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Thompson Squeeze Test evaluates Achilles tendon integrity. Squeezing the gastrocnemius belly should elicit passive plantarflexion. Absence of plantarflexion confirms complete tendon rupture."
  },
  {
    "id": "source-2-b-380",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Anterior Drawer Test of the ankle assesses structural integrity of which lateral ligament?",
    "options": [
      "Anterior Talofibular Ligament (ATFL) resisting anterior talar translation in plantarflexion",
      "Calcaneofibular Ligament evaluated during comprehensive clinical physical examination",
      "Posterior Talofibular Ligament evaluated during comprehensive clinical physical examination",
      "Deltoid Ligament complex resisting eversion and pronation forces (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Anterior Drawer test of the ankle translates the calcaneus/talus anteriorly out of the mortise, specifically isolating ATFL structural integrity."
  },
  {
    "id": "source-2-b-381",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Under the updated PEACE & LOVE acute soft tissue injury management framework, what does the acronym 'LOVE' guide during the subacute rehab phase?",
    "options": [
      "Lotion, Oxygen, Vibration, Exercise",
      "Longitudinal Rest, Ice, Compression, Elevation",
      "Ligaments, Orthotics, Velocity, Energy",
      "Load, Optimism, Vascularisation, Exercise"
    ],
    "correct": 3,
    "explanation": "LOVE stands for: Load (progressive mechanical loading), Optimism (psychological confidence), Vascularisation (pain-free aerobic exercise), and Exercise (restoring mobility/strength)."
  },
  {
    "id": "source-2-b-382",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the recommended sideline assessment tool published in 2023 for evaluating suspected concussion in athletes aged 12 years and older?",
    "options": [
      "SCAT5 evaluated during comprehensive clinical physical examination",
      "SCAT6 (Sport Concussion Assessment Tool 6) and Child SCAT6 (assessed during high-performance athletic screening)",
      "Glasgow Coma Scale only evaluated during comprehensive clinical physical examination",
      "FMS Screen evaluated during comprehensive clinical physical examination"
    ],
    "correct": 1,
    "explanation": "SCAT6 (published in 2023 following the 6th International Consensus Conference on Concussion in Sport) is the current gold-standard sideline concussion assessment battery."
  },
  {
    "id": "source-2-b-383",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which clinical symptom mandates IMMEDIATE emergency medical evacuation (Red Flag) during sideline assessment of a head-injured athlete?",
    "options": [
      "Mild headache evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Transient dizziness lasting 30 seconds (assessed during high-performance athletic screening)",
      "Deteriorating level of consciousness, unequal/unreactive pupils, repeated vomiting, or progressive neurological deficit",
      "Mild fatigue evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Red Flag signs of intracranial hemorrhage (e.g., epidural/subdural hematoma) include worsening headache, falling GCS, pupillary asymmetry, focal neuro deficits, and repeated emesis."
  },
  {
    "id": "source-2-b-384",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In sideline concussion management, what is the mandatory first step regarding play participation once a concussion is suspected?",
    "options": [
      "Allow athlete to return after 15 minutes of rest if symptoms clear",
      "Give caffeine and send back to play (assessed during high-performance athletic screening)",
      "Immediate removal of the athlete from play, with NO return to play on the same day",
      "Tape the head evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The core consensus rule in sports concussion is: 'When in doubt, sit them out.' Any athlete with suspected concussion MUST be immediately removed and NOT return to play that day."
  },
  {
    "id": "source-2-b-385",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "According to the Graduated Return to Sport (RTS) protocol following concussion, how long must an athlete remain symptom-free at each stage before progressing to the next stage?",
    "options": [
      "12 hours evaluated during comprehensive clinical physical examination",
      "48 hours total for all steps (assessed during high-performance athletic screening)",
      "Minimum 24 hours at each step without symptom recurrence (confirmed via evidence-based musculoskeletal diagnostics)",
      "No waiting period required evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The international concussion Consensus protocol requires a minimum of 24 hours spent at each functional rehabilitation stage; if symptoms recur, the athlete drops back to the previous step."
  },
  {
    "id": "source-2-b-386",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In athletic taping, what is the primary purpose of applying a 'Heel Lock' strip when strapping an ankle with rigid zinc oxide tape?",
    "options": [
      "Preventing skin blisters evaluated during comprehensive clinical physical examination",
      "Stretching the plantar fascia evaluated during comprehensive clinical physical examination",
      "Controlling and restricting calcaneal inversion/eversion and subtalar joint hypermobility",
      "Increasing calf strength evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Heel lock taping strips wrap around the calcaneus and malleoli to mechanically lock the subtalar joint against pathological inversion and eversion roll."
  },
  {
    "id": "source-2-b-387",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What taping application method is designed to dynamically assist dorsiflexion and prevent foot slap in an athlete returning from a nerve strain?",
    "options": [
      "Kinesiology taping applied with stretch along Tibialis Anterior from insertion to origin",
      "Rigid non-elastic strapping evaluated during comprehensive clinical physical examination",
      "Underwrap padding only evaluated during comprehensive clinical physical examination",
      "Heavy compression wrap evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "Kinesiology tape applied from distal insertion to proximal origin over Tibialis Anterior with moderate-to-high tension provides dynamic recoil assisting ankle dorsiflexion."
  },
  {
    "id": "source-2-b-388",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In acute emergency sports care, what is the immediate priority management for an athlete presenting with suspected cervical spine trauma on the field?",
    "options": [
      "Rapidly rolling the athlete into a sitting position (evaluated under standardized clinical sports science protocols)",
      "Manual in-line cervical spine stabilization, maintaining airway/breathing, and applying a rigid cervical collar prior to log-rolling onto a spine board",
      "Asking the athlete to rotate their neck to test ROM (confirmed via evidence-based musculoskeletal diagnostics)",
      "Removing the helmet immediately without assistance (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Suspected cervical spine injury requires immediate manual in-line stabilization (MILS) to keep head and neck neutral, protecting the spinal cord during airway control and immobilization."
  },
  {
    "id": "source-2-b-389",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "When treating an athlete with Exertional Heat Stroke (EHS) on the field (core body temperature > 40.5°C with CNS dysfunction), what is the gold-standard immediate life-saving intervention?",
    "options": [
      "Giving oral water evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Transporting immediately in ambulance without cooling (assessed during high-performance athletic screening)",
      "Cold Water Immersion (CWI) in ice water (1-5°C) IMMEDIATELY on-site BEFORE emergency transport ('Cool First, Transport Second')",
      "Fanning with wet towels evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "EHS mortality is reduced to near 0% if immediate Cold Water Immersion ('Cool First, Transport Second') lowers core temperature below 39°C within 30 minutes of collapse."
  },
  {
    "id": "source-2-b-390",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the characteristic clinical distinction between Exertional Heat Stroke (EHS) and Heat Exhaustion?",
    "options": [
      "EHS features normal body temperature (evaluated under standardized clinical sports science protocols)",
      "EHS presents without sweating in all cases (assessed during high-performance athletic screening)",
      "Heat exhaustion causes coma evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "EHS presents with severe Central Nervous System (CNS) dysfunction (confusion, altered mental status, collapse, seizure) and core temperature > 40.5°C"
    ],
    "correct": 3,
    "explanation": "EHS is defined by profound CNS breakdown (delirium, ataxia, seizures, coma) and extreme core hyperthermia (>40.5°C), constituting a medical emergency."
  },
  {
    "id": "source-2-b-391",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In sports rehabilitation, what Return-to-Sport (RTS) Limb Symmetry Index (LSI) threshold is required across strength and functional hop tests before clearing an athlete for full competition post-ACL reconstruction?",
    "options": [
      "70% LSI evaluated during comprehensive clinical physical examination",
      "≥ 90% to 95% LSI compared to contralateral healthy limb",
      "80% LSI evaluated during comprehensive clinical physical examination",
      "100% on operated side only (measured across high-intensity competition conditions)"
    ],
    "correct": 1,
    "explanation": "Evidence-based RTS criteria mandate an LSI of ≥ 90% (preferably ≥95% for high-demand pivot sports) across quadriceps isokinetic strength, single hop, triple hop, and crossover hop tests."
  },
  {
    "id": "source-2-b-392",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The ACL-Return to Sport after Injury (ACL-RSI) scale measures which critical dimension of return-to-play readiness?",
    "options": [
      "Isokinetic quadriceps peak torque evaluated during comprehensive clinical physical examination",
      "Graft tension on MRI evaluated during comprehensive clinical physical examination",
      "Psychological readiness, confidence, and fear of re-injury post-ACL reconstruction",
      "Dynamic knee valgus angle evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "The ACL-RSI validated questionnaire quantifies psychological readiness, sports confidence, and fear of secondary rupture (scores > 60-75 indicate acceptable psychological readiness)."
  },
  {
    "id": "source-2-b-393",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In acute muscle tear management, why is early active mobilization (after initial 48-72h protection) preferred over prolonged complete immobilization?",
    "options": [
      "Immobilization causes muscle fiber atrophy and dense disorganized collagen scar formation, whereas early pain-free mobilization promotes parallel collagen alignment and vascularization",
      "Mobilization prevents bone growth evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Immobilization increases flexibility evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Mobilization eliminates inflammation entirely evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 0,
    "explanation": "Controlled early active mobilization accelerates capillary ingrowth, improves muscle fiber regeneration, and aligns collagen along lines of mechanical stress without breaking repair tissue."
  },
  {
    "id": "source-2-b-394",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which upper extremity functional test evaluates dynamic upper body power and core stability using a weighted medicine ball throw from a seated position?",
    "options": [
      "Upper Quarter Y-Balance Test evaluated during comprehensive clinical physical examination",
      "Push-up Test evaluated during comprehensive clinical physical examination",
      "Closed Kinetic Chain Upper Extremity Stability Test (CKCUEST) (confirmed via evidence-based musculoskeletal diagnostics)",
      "Seated Medicine Ball Throw (SMBT) Test (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The Seated Medicine Ball Throw (SMBT) isolates upper body power and trunk explosive strength while controlling lower extremity contribution."
  },
  {
    "id": "source-2-b-395",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "The Closed Kinetic Chain Upper Extremity Stability Test (CKCUEST) measures upper limb stability and agility by counting the number of times an athlete in a push-up position can touch alternating hands across what distance in 15 seconds?",
    "options": [
      "36 inches (91.4 cm) (evaluated under standardized clinical sports science protocols)",
      "10 inches (25.4 cm) (assessed during high-performance athletic screening)",
      "60 inches evaluated during comprehensive clinical physical examination",
      "5 inches evaluated during comprehensive clinical physical examination"
    ],
    "correct": 0,
    "explanation": "The CKCUEST involves placing two strips of tape 36 inches (91.4 cm) apart on the floor. The athlete in a plank position alternates touching opposite tape lines for 15 seconds (scores >21 touches indicate good stability)."
  },
  {
    "id": "source-2-b-396",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the primary mechanism causing a 'Burner' or 'Stinger' injury in contact sports athletes (e.g., rugby/football)?",
    "options": [
      "Direct lumbar disc rupture evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Clavicle fracture evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Sciatic nerve entrapment evaluated during comprehensive clinical physical examination (confirmed via evidence-based musculoskeletal diagnostics)",
      "Transient brachial plexus traction (shoulder depressed while neck lateral flexed opposite) or nerve root compression in intervertebral foramen"
    ],
    "correct": 3,
    "explanation": "Stingers/burners are acute brachial plexus traction injuries (or C5-C6 nerve root compression) resulting in unilateral burning pain, paresthesia, and transient arm weakness."
  },
  {
    "id": "source-2-b-397",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In managing acute lateral ankle sprain, what active exercise should be initiated in the early subacute phase to prevent chronic ankle instability (CAI)?",
    "options": [
      "Strict immobilization in plaster cast for 6 weeks (evaluated under standardized clinical sports science protocols)",
      "High impact plyometrics immediately evaluated during comprehensive clinical physical examination",
      "Proprioceptive balance training (single-leg stance, wobble board) combined with progressive eversion strengthening",
      "Complete rest evaluated during comprehensive clinical physical examination (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Early balance, proprioceptive sensorimotor training, and fibularis muscle strengthening restore dynamic joint stability, significantly reducing recurrent ankle sprain incidence."
  },
  {
    "id": "source-2-b-398",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "Which physical sign indicates complete rupture of the Quadriceps tendon above the patella?",
    "options": [
      "Positive Lachman test evaluated during comprehensive clinical physical examination (evaluated under standardized clinical sports science protocols)",
      "Excessive knee flexion evaluated during comprehensive clinical physical examination (assessed during high-performance athletic screening)",
      "Palpable suprapatellar gap, loss of active knee extension, and inability to perform a straight leg raise",
      "Loss of sensation over foot (measured across high-intensity competition conditions)"
    ],
    "correct": 2,
    "explanation": "Complete quadriceps tendon rupture presents with a palpable defect above the superior patellar pole, high patellar position (patella baja), and total loss of active knee extension mechanism."
  },
  {
    "id": "source-2-b-399",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "In treating female athletes with patellofemoral pain syndrome (PFPS), strengthening which proximal muscle group has been proven superior to quadriceps-isolated training alone?",
    "options": [
      "Ankle dorsiflexors evaluated during comprehensive clinical physical examination",
      "Flexor hallucis longus evaluated during comprehensive clinical physical examination",
      "Hip Abductors (Gluteus Medius) and External Rotators (confirmed via evidence-based musculoskeletal diagnostics)",
      "Wrist flexors evaluated during comprehensive clinical physical examination"
    ],
    "correct": 2,
    "explanation": "Meta-analyses demonstrate that combining hip strengthening (Gluteus Medius/Maximus) with quadriceps exercise produces superior pain relief and functional outcomes in PFPS compared to knee exercises alone."
  },
  {
    "id": "source-2-b-400",
    "section": "B",
    "topic": "Applied physiotherapy",
    "subtopic": "Applied physiotherapy question",
    "difficulty": "applied",
    "text": "What is the recommended timing for initiating light, pain-free aerobic exercise (Stage 2) post-concussion according to the 2023 Consensus Statement?",
    "options": [
      "After 14 days of strict darkness (evaluated under standardized clinical sports science protocols)",
      "After 1 month evaluated during comprehensive clinical physical examination",
      "Immediately on the field evaluated during comprehensive clinical physical examination",
      "After 24 to 48 hours of initial physical and cognitive rest (measured across high-intensity competition conditions)"
    ],
    "correct": 3,
    "explanation": "The 2023 Amsterdam consensus recommends 24-48 hours of initial rest, followed by early step-wise light sub-symptom threshold aerobic activity (walking, stationary cycling) to promote recovery."
  },
  {
    "id": "source-2-c-401",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 1: 22-year-old Female Track Athlete (Return to Sport ACL Evaluation)",
    "difficulty": "analytical",
    "text": "A 22-year-old female track athlete is evaluated at 6 months post-ACL reconstruction. Isokinetic dynamometry shows Quadriceps Limb Symmetry Index (LSI) of 72% and Hamstring LSI of 88%. ACL-RSI psychological readiness score is 42/100. Single hop test LSI is 78%. Can she be cleared for full competitive return to sport?",
    "options": [
      "Yes, 6 months post-op is always sufficient for return to competition (based on multidisciplinary clinical decision-making)",
      "No, she fails multiple critical Return-to-Sport criteria (Quadriceps LSI <90%, Hop LSI <90%, and ACL-RSI score <60), placing her at severe risk of secondary ACL rupture",
      "Yes, provided she wears an external knee brace during competition (in accordance with sports rehabilitation clinical pathways)",
      "Yes, if she has no swelling or pain at rest (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 1,
    "explanation": "Time alone is insufficient for Return to Sport clearance. LSI values <90% in strength and hop testing, combined with a low ACL-RSI score (<60), significantly elevate secondary ACL graft rupture risk. Comprehensive functional, strength, and psychological criteria must be fulfilled.",
    "passageId": "source-2-c-01",
    "passage": "Case 1: 22-year-old Female Track Athlete (Return to Sport ACL Evaluation)"
  },
  {
    "id": "source-2-c-402",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 1: 22-year-old Female Track Athlete (Return to Sport ACL Evaluation)",
    "difficulty": "analytical",
    "text": "What targeted rehabilitation intervention should be prioritized to address her specific quadriceps strength deficit (72% LSI)?",
    "options": [
      "High-volume stationary cycling only confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Complete rest for 4 weeks confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Heavy progressive resistance training incorporating open kinetic chain leg extensions (from 90° to 45° to avoid ACL graft strain) and closed kinetic chain single-leg squats",
      "Continuous passive motion (CPM) confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Targeted hypertrophic and neural strength training using OKC leg extensions (in safe arc 90-45°) and single-leg CKC exercises is required to eliminate quadriceps strength deficits.",
    "passageId": "source-2-c-01",
    "passage": "Case 1: 22-year-old Female Track Athlete (Return to Sport ACL Evaluation)"
  },
  {
    "id": "source-2-c-403",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 2: 24-year-old Elite Swimmer (Shoulder Pain)",
    "difficulty": "analytical",
    "text": "A 24-year-old elite freestyle swimmer reports progressive anterior-lateral shoulder pain aggravated during the pull-through phase of stroke. Examination reveals positive Hawkins-Kennedy and Neer tests, alongside reduced scapular upward rotation and Serratus Anterior weakness. What is the primary clinical diagnosis?",
    "options": [
      "Acute Glenoid Labral Tear (SLAP lesion) confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Complete supraspinatus tendon avulsion confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Subacromial Impingement Syndrome secondary to scapular dyskinesis (in accordance with sports rehabilitation clinical pathways)",
      "Cervical radiculopathy confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "Scapular dyskinesis and serratus anterior weakness reduce scapular upward rotation and anterior tilt during overhead stroke recovery, leading to secondary subacromial impingement of rotator cuff tendons under the coracoacromial arch.",
    "passageId": "source-2-c-02",
    "passage": "Case 2: 24-year-old Elite Swimmer (Shoulder Pain)"
  },
  {
    "id": "source-2-c-404",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 2: 24-year-old Elite Swimmer (Shoulder Pain)",
    "difficulty": "analytical",
    "text": "Which exercise progression is most effective for restoring scapular kinematic control in this swimmer?",
    "options": [
      "Push-up Plus, Dynamic Hug, and Prone Y-raises to recruit Serratus Anterior and Lower Trapezius while suppressing Upper Trapezius dominance",
      "Heavy shoulder shrugs and upright rows confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Complete upper extremity immobilization confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Passive stretching of the posterior capsule only (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "Scapular motor control rehabilitation emphasizes isolating Serratus Anterior (Push-up Plus) and Lower Trapezius (Prone Y-raises) to restore upwards scapular rotation without overactivating dominant Upper Trapezius muscles.",
    "passageId": "source-2-c-02",
    "passage": "Case 2: 24-year-old Elite Swimmer (Shoulder Pain)"
  },
  {
    "id": "source-2-c-405",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 3: 20-year-old Male Sprinter (Acute Thigh Pain)",
    "difficulty": "analytical",
    "text": "A 20-year-old male sprinter experiences sudden sharp pain in the posterior right thigh while accelerating out of the blocks. Palpation reveals localized tenderness over the proximal Biceps Femoris long head. MRI shows Grade II muscle strain at the myotendinous junction. What biomechanical phase of sprinting carries highest vulnerability for this injury?",
    "options": [
      "Initial stance phase loading confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Late swing phase during high-velocity eccentric deceleration of knee extension and hip flexion",
      "Mid-stance balance phase confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Early stance takeoff confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "The hamstring complex (especially Biceps Femoris long head) undergoes maximal eccentric lengthening and high tensile force during late swing phase to decelerate forward shank extension, making it highly vulnerable to acute strain.",
    "passageId": "source-2-c-03",
    "passage": "Case 3: 20-year-old Male Sprinter (Acute Thigh Pain)"
  },
  {
    "id": "source-2-c-406",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 3: 20-year-old Male Sprinter (Acute Thigh Pain)",
    "difficulty": "analytical",
    "text": "In subacute hamstring strain rehabilitation, which exercise protocol has strong evidence for lengthening fascicles and preventing recurrent injury?",
    "options": [
      "Static hamstring stretches held for 5 minutes (based on multidisciplinary clinical decision-making)",
      "Continuous low-voltage electro-acupuncture confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Progressive eccentric strength training using the Nordic Hamstring Exercise (NHE) and high-speed running exposure",
      "Short-wave diathermy confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "The Nordic Hamstring Exercise induces eccentric hypertrophy, adding sarcomeres in series to lengthen muscle fascicles and significantly reducing recurrent strain rates in sprinters.",
    "passageId": "source-2-c-03",
    "passage": "Case 3: 20-year-old Male Sprinter (Acute Thigh Pain)"
  },
  {
    "id": "source-2-c-407",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 4: 19-year-old Female Basketball Player (Ankle Inversion Injury)",
    "difficulty": "analytical",
    "text": "A 19-year-old female basketball player lands on an opponent's foot, sustaining an acute inversion-plantarflexion ankle injury. Localized swelling and ecchymosis are present over the lateral malleolus. Anterior drawer test is positive, while calcaneofibular stress test is negative. Which ligament is injured?",
    "options": [
      "Calcaneofibular Ligament (CFL) resisting inversion in neutral ankle position",
      "Posterior Talofibular Ligament (PTFL) resisting inversion in full dorsiflexion",
      "Anterior Talofibular Ligament (ATFL) resisting anterior talar translation in plantarflexion",
      "Deltoid Ligament complex resisting eversion and pronation forces (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Anterior drawer test specifically isolates the ATFL. A positive anterior drawer with a negative CFL test confirms an isolated Grade II sprain of the ATFL.",
    "passageId": "source-2-c-04",
    "passage": "Case 4: 19-year-old Female Basketball Player (Ankle Inversion Injury)"
  },
  {
    "id": "source-2-c-408",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 4: 19-year-old Female Basketball Player (Ankle Inversion Injury)",
    "difficulty": "analytical",
    "text": "To prevent chronic ankle instability (CAI) in this athlete, what functional rehabilitation component must be initiated as soon as pain permits?",
    "options": [
      "6 weeks of strict plaster cast immobilization (based on multidisciplinary clinical decision-making)",
      "Dynamic neuromuscular balance and proprioceptive sensorimotor training (single-leg stance on unstable surfaces) paired with fibularis (peroneal) strengthening",
      "Surgical ligament reconstruction immediately confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Ultrasound therapy exclusively confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 1,
    "explanation": "Early functional rehabilitation incorporating proprioceptive balance training on wobble boards and everter (peroneal) strengthening restores dynamic joint stability and prevents chronic instability.",
    "passageId": "source-2-c-04",
    "passage": "Case 4: 19-year-old Female Basketball Player (Ankle Inversion Injury)"
  },
  {
    "id": "source-2-c-409",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 5: 28-year-old Marathon Runner (Achilles Tendon Pain)",
    "difficulty": "analytical",
    "text": "A 28-year-old marathon runner presents with 3-month history of localized Achilles tendon pain 4 cm proximal to the calcaneal insertion. Palpation reveals a localized fusiform thickening. Pain is present at the start of running, eases during, and worsens post-exercise. Ultrasound shows tendon disorganization and hyper-vascularity. What is the clinical diagnosis?",
    "options": [
      "Achilles Tendon Rupture confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Retrocalcaneal Bursitis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Mid-substance Achilles Tendinopathy (Tendinosis stage) (in accordance with sports rehabilitation clinical pathways)",
      "Insertional Achilles Tendinopathy confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "Pain 2-6 cm proximal to insertion with nodular thickening, warm-up phenomenon, and neovascularity on ultrasound is diagnostic of mid-substance Achilles tendinopathy.",
    "passageId": "source-2-c-05",
    "passage": "Case 5: 28-year-old Marathon Runner (Achilles Tendon Pain)"
  },
  {
    "id": "source-2-c-410",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 5: 28-year-old Marathon Runner (Achilles Tendon Pain)",
    "difficulty": "analytical",
    "text": "According to the Alfredson protocol, how should eccentric loading be modified if the runner experiences mild discomfort (pain score 3/10) during exercise execution?",
    "options": [
      "Stop exercise immediately and rest for 6 weeks (based on multidisciplinary clinical decision-making)",
      "Switch to high-velocity jumping confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Continue performing the eccentric drops, as mild discomfort during loading is expected and acceptable, progressing weight when exercises become completely pain-free",
      "Apply corticosteroid injection into the tendon confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "The Alfredson protocol explicitly permits mild tendon discomfort during heavy eccentric heel drops; load is increased (e.g., adding backpack weight) once exercises become pain-free.",
    "passageId": "source-2-c-05",
    "passage": "Case 5: 28-year-old Marathon Runner (Achilles Tendon Pain)"
  },
  {
    "id": "source-2-c-411",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 6: 21-year-old Female Distance Runner (Anterior Knee Pain)",
    "difficulty": "analytical",
    "text": "A 21-year-old female runner reports diffuse peripatellar knee pain aggravated by downhill running and prolonged sitting ('theater sign'). Examination shows positive Clarke's sign, poor VMO activation, dynamic knee valgus during single-leg squat, and tight hamstrings. What is the primary diagnosis?",
    "options": [
      "Patellar Tendinopathy confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Iliotibial Band Syndrome confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Medial Meniscal Tear confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Patellofemoral Pain Syndrome (PFPS) (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "Diffuse peripatellar pain, theater sign, Clarke's sign, and dynamic valgus collapse are classic manifestations of Patellofemoral Pain Syndrome (PFPS).",
    "passageId": "source-2-c-06",
    "passage": "Case 6: 21-year-old Female Distance Runner (Anterior Knee Pain)"
  },
  {
    "id": "source-2-c-412",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 6: 21-year-old Female Distance Runner (Anterior Knee Pain)",
    "difficulty": "analytical",
    "text": "Which evidence-based exercise intervention delivers superior long-term clinical outcomes for PFPS?",
    "options": [
      "Combined hip (Gluteus Medius/Maximus abductors/external rotators) and quadriceps neuromuscular strengthening paired with movement retraining",
      "Isolated quadriceps leg extensions only confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Complete complete knee immobilization in a splint (in accordance with sports rehabilitation clinical pathways)",
      "Laser therapy without exercise confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "Evidence syntheses demonstrate that combining hip abductor/external rotator strengthening with quadriceps training yields significantly better pain relief and functional restoration than isolated knee training.",
    "passageId": "source-2-c-06",
    "passage": "Case 6: 21-year-old Female Distance Runner (Anterior Knee Pain)"
  },
  {
    "id": "source-2-c-413",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 7: 19-year-old Track Runner (Shinsplints vs Fracture)",
    "difficulty": "analytical",
    "text": "A 19-year-old track runner presents with posteromedial posteromedial tibial border pain over a diffuse 6 cm area. Pain worsens with activity. Plain radiographs are normal. Tuning fork test is negative. What is the most likely diagnosis?",
    "options": [
      "Tibial Stress Fracture confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Popliteal Artery Entrapment confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Chronic Exertional Compartment Syndrome (in accordance with sports rehabilitation clinical pathways)",
      "Medial Tibial Stress Syndrome (MTSS) (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "Diffuse tenderness along the posteromedial border of the distal middle third of the tibia (>5 cm) with normal X-rays is characteristic of Medial Tibial Stress Syndrome (MTSS).",
    "passageId": "source-2-c-07",
    "passage": "Case 7: 19-year-old Track Runner (Shinsplints vs Fracture)"
  },
  {
    "id": "source-2-c-414",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 7: 19-year-old Track Runner (Shinsplints vs Fracture)",
    "difficulty": "analytical",
    "text": "If an athlete instead presents with focal point tenderness (<1 cm) over the anterior tibial cortex with pain during resting night sleep, which imaging modality is most definitive to confirm a stress fracture?",
    "options": [
      "Magnetic Resonance Imaging (MRI) or High-Resolution CT (based on multidisciplinary clinical decision-making)",
      "Plain X-ray confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Diagnostic Ultrasound confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Thermography confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "MRI is the gold standard for detecting early bone marrow edema and cortical stress fractures when plain radiographs are negative in early stages.",
    "passageId": "source-2-c-07",
    "passage": "Case 7: 19-year-old Track Runner (Shinsplints vs Fracture)"
  },
  {
    "id": "source-2-c-415",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 8: 25-year-old Rugby Player (Head Trauma & Concussion)",
    "difficulty": "analytical",
    "text": "A 25-year-old rugby player suffers a head collision during a match. On the field, he appears dazed, has slow verbal responses, and reports mild headache. SCAT6 evaluation reveals a 3-word memory recall deficit and Maddocks score of 4/5. What is the immediate sideline management?",
    "options": [
      "Allow him to play after 10 minutes rest if headache subsides (based on multidisciplinary clinical decision-making)",
      "Immediately remove him from the match, conduct full medical evaluation, and enforce NO return to play on the same day",
      "Give oral NSAIDs and return to match (in accordance with sports rehabilitation clinical pathways)",
      "Apply neck traction confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Any athlete with suspected concussion signs must be immediately and permanently removed from play on the day of injury according to international SCAT6 guidelines.",
    "passageId": "source-2-c-08",
    "passage": "Case 8: 25-year-old Rugby Player (Head Trauma & Concussion)"
  },
  {
    "id": "source-2-c-416",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 8: 25-year-old Rugby Player (Head Trauma & Concussion)",
    "difficulty": "analytical",
    "text": "Following 48 hours of initial physical and cognitive rest post-concussion, how should the athlete progress through the Graduated Return-to-Sport (RTS) protocol?",
    "options": [
      "Progress through 6 sequential stages (Symptom-limited activity -> Light aerobic exercise -> Sport-specific exercise -> Non-contact drills -> Full contact practice -> Return to sport), spending minimum 24h per stage without symptom recurrence",
      "Jump directly into full contact scrimmage confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Complete 30 days of complete dark room bed rest (in accordance with sports rehabilitation clinical pathways)",
      "Return to play as soon as CT scan is normal (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "The consensus RTS framework mandates step-wise progression through 6 distinct stages, requiring at least 24 hours per stage without symptom reactivation.",
    "passageId": "source-2-c-08",
    "passage": "Case 8: 25-year-old Rugby Player (Head Trauma & Concussion)"
  },
  {
    "id": "source-2-c-417",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 9: 26-year-old Javelin Thrower (Medial Elbow Pain)",
    "difficulty": "analytical",
    "text": "A 26-year-old javelin thrower presents with medial elbow pain during the late cocking phase. Physical exam shows tenderness over the flexor-pronator mass and positive moving valgus stress test. What structure is affected?",
    "options": [
      "Lateral Epicondyle confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Medial Ulnar Collateral Ligament (MUCL) and Flexor-Pronator tendon mass (confirmed via objective functional return-to-sport testing)",
      "Radial Head confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Olecranon bursa confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Valgus stress during high-velocity throwing strains the medial ulnar collateral ligament and flexor-pronator origin, causing valgus instability and medial epicondylalgia.",
    "passageId": "source-2-c-09",
    "passage": "Case 9: 26-year-old Javelin Thrower (Medial Elbow Pain)"
  },
  {
    "id": "source-2-c-418",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 9: 26-year-old Javelin Thrower (Medial Elbow Pain)",
    "difficulty": "analytical",
    "text": "What kinetic chain limitation elsewhere in the body frequently contributes to excessive valgus stress at the elbow in throwing athletes?",
    "options": [
      "Restricted hip internal rotation and thoracic rotation deficits (based on multidisciplinary clinical decision-making)",
      "Excessive ankle dorsiflexion confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "High quadriceps strength confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Short foot arch confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Deficits in hip internal rotation and thoracic rotation impair proximal force transfer, forcing the athlete to 'arm' the throw, increasing valgus stress on the elbow.",
    "passageId": "source-2-c-09",
    "passage": "Case 9: 26-year-old Javelin Thrower (Medial Elbow Pain)"
  },
  {
    "id": "source-2-c-419",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 10: 17-year-old Female Gymnast (Low Back Pain)",
    "difficulty": "analytical",
    "text": "A 17-year-old female gymnast complains of focal low back pain exacerbated by spinal hyperextension (back handsprings). Single-leg hyperextension test (Stork test) is positive on the right side. SPECT/CT reveals a defect in the pars interarticularis of L5. What is the diagnosis?",
    "options": [
      "L5 Spondylolysis (Pars Interarticularis Stress Fracture) (based on multidisciplinary clinical decision-making)",
      "Lumbar Disc Herniation confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Lumbar Facet Osteoarthritis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Sacroiliac Joint Dislocation confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Focal lumbar extension pain in adolescent gymnasts with a positive Stork test and pars interarticularis defect on imaging confirms Spondylolysis.",
    "passageId": "source-2-c-10",
    "passage": "Case 10: 17-year-old Female Gymnast (Low Back Pain)"
  },
  {
    "id": "source-2-c-420",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 10: 17-year-old Female Gymnast (Low Back Pain)",
    "difficulty": "analytical",
    "text": "What is the key conservative physical therapy recommendation for managing acute active spondylolysis in a youth athlete?",
    "options": [
      "High-velocity lumbar extension thrusts confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Continuous spinal traction confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "High impact jump training confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Temporary restriction of spinal hyperextension activities, rigid/semi-rigid bracing if indicated, and core stabilization focusing on deep abdominal anti-extension control"
    ],
    "correct": 3,
    "explanation": "Active spondylolysis requires temporary restriction of extension movements to allow bony healing, paired with core stabilization emphasizing anti-extension control.",
    "passageId": "source-2-c-10",
    "passage": "Case 10: 17-year-old Female Gymnast (Low Back Pain)"
  },
  {
    "id": "source-2-c-421",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 11: 27-year-old Fast Bowler (Shoulder GIRD)",
    "difficulty": "analytical",
    "text": "A 27-year-old cricket fast bowler presents with a 25-degree deficit in passive internal rotation (IR) in his throwing shoulder compared to the non-dominant side, while total arc of motion (IR + ER) remains equal bilaterally. What is this condition termed?",
    "options": [
      "Multidirectional Instability confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Adhesive Capsulitis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Glenohumeral Internal Rotation Deficit (GIRD) (in accordance with sports rehabilitation clinical pathways)",
      "Subacromial Bursitis confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "GIRD is defined as a loss of internal rotation >18-20° in the throwing shoulder compared to non-dominant side, caused by posterior capsule/rotator cuff tightness.",
    "passageId": "source-2-c-11",
    "passage": "Case 11: 27-year-old Fast Bowler (Shoulder GIRD)"
  },
  {
    "id": "source-2-c-422",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 11: 27-year-old Fast Bowler (Shoulder GIRD)",
    "difficulty": "analytical",
    "text": "Which stretching technique specifically targets posterior glenohumeral capsular tightness to treat GIRD?",
    "options": [
      "Doorway Pectoralis stretch confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Sleeper Stretch and Cross-body adduction stretch (confirmed via objective functional return-to-sport testing)",
      "Overhead triceps stretch confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Biceps stretch confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "The Sleeper Stretch (side-lying with shoulder flexed 90° and passive internal rotation) and Cross-body stretch effectively stretch the posterior capsule to restore GIRD.",
    "passageId": "source-2-c-11",
    "passage": "Case 11: 27-year-old Fast Bowler (Shoulder GIRD)"
  },
  {
    "id": "source-2-c-423",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 12: 23-year-old Soccer Player (Groin Pain)",
    "difficulty": "analytical",
    "text": "A 23-year-old soccer player reports pain in the groin during kicking and cutting. Palpation reveals tenderness at the Adductor Longus insertion on the pubic bone. Resisted adduction at 0° and 45° reproduces pain. What condition is present?",
    "options": [
      "Adductor Longus Tendinopathy / Long-standing Groin Pain (based on multidisciplinary clinical decision-making)",
      "Inguinal Hernia confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Femoral Nerve Entrapment confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Iliopsoas Bursitis confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Tenderness at the pubic insertion of Adductor Longus and pain during resisted adduction are diagnostic of adductor-related groin pain.",
    "passageId": "source-2-c-12",
    "passage": "Case 12: 23-year-old Soccer Player (Groin Pain)"
  },
  {
    "id": "source-2-c-424",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 12: 23-year-old Soccer Player (Groin Pain)",
    "difficulty": "analytical",
    "text": "Which evidence-based exercise program has been proven to significantly reduce groin pain and increase adductor strength in football players?",
    "options": [
      "Passive groin stretches only (based on multidisciplinary clinical decision-making)",
      "Copenhagen Adduction Exercise Protocol (confirmed via objective functional return-to-sport testing)",
      "Leg press only confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Hamstring curls confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "The Copenhagen Adduction Exercise protocol (eccentric partner-assisted adduction) significantly increases adductor strength and reduces groin injury incidence.",
    "passageId": "source-2-c-12",
    "passage": "Case 12: 23-year-old Soccer Player (Groin Pain)"
  },
  {
    "id": "source-2-c-425",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 13: 20-year-old Basketball Player (Patellar Tendon Pain)",
    "difficulty": "analytical",
    "text": "A 20-year-old basketball player has inferior pole patellar pain during jumping ('Jumper's Knee'). Pain is severe at the start of training. Ultrasound confirms patellar tendinopathy. What initial loading exercise provides immediate pain relief (analgesia) in-season?",
    "options": [
      "High-velocity depth jumps confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Complete leg cast confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Heavy isometric quadriceps contractions (e.g., single-leg leg extension held at 60° for 45 seconds, 5 reps)",
      "Stretching quadriceps for 10 minutes confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "Rio et al. demonstrated that heavy isometric quadriceps contractions (45-second holds at 70% MVIC) induce immediate cortical inhibition and analgesia in patellar tendinopathy.",
    "passageId": "source-2-c-13",
    "passage": "Case 13: 20-year-old Basketball Player (Patellar Tendon Pain)"
  },
  {
    "id": "source-2-c-426",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 13: 20-year-old Basketball Player (Patellar Tendon Pain)",
    "difficulty": "analytical",
    "text": "Following initial pain control, how should patellar tendinopathy loading be progressed during off-season rehabilitation?",
    "options": [
      "Static rest only confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Progressing from Isometrics -> Heavy Slow Resistance (HSR) -> Energy Storage / Plyometrics -> Sport-specific Return-to-Play",
      "High-repetition low-load endurance leg extension confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Corticosteroid injection into the tendon confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Tendinopathy loading follows a structured 4-stage continuum: 1) Isometrics for pain relief, 2) Heavy Slow Resistance for hypertrophy/capacity, 3) Fast elastic plyometrics, 4) RTS.",
    "passageId": "source-2-c-13",
    "passage": "Case 13: 20-year-old Basketball Player (Patellar Tendon Pain)"
  },
  {
    "id": "source-2-c-427",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 14: 29-year-old Tennis Player (Lateral Elbow Pain)",
    "difficulty": "analytical",
    "text": "A 29-year-old tennis player presents with lateral elbow pain aggravated during backhand groundstrokes. Resisted wrist extension with elbow extended (Cozen's test) and resisted middle finger extension (Maudsley's test) reproduce severe pain over the lateral epicondyle. What tendon is primarily involved?",
    "options": [
      "Extensor Carpi Radialis Brevis (ECRB) origin (based on multidisciplinary clinical decision-making)",
      "Flexor Carpi Ulnaris confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Pronator Teres confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Biceps Brachii confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Lateral Epicondylalgia (Tennis Elbow) primarily involves micro-degenerative changes at the common extensor origin, specifically the Extensor Carpi Radialis Brevis (ECRB) tendon.",
    "passageId": "source-2-c-14",
    "passage": "Case 14: 29-year-old Tennis Player (Lateral Elbow Pain)"
  },
  {
    "id": "source-2-c-428",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 14: 29-year-old Tennis Player (Lateral Elbow Pain)",
    "difficulty": "analytical",
    "text": "Which eccentric exercise device protocol (using a flexible rubber bar / Tyler Twist) is effective for lateral epicondylalgia rehabilitation?",
    "options": [
      "Complete arm sling confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Heavy wrist curls confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Ultrasound only confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "FlexBar Tyler Twist eccentric wrist extension exercise (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "The Tyler Twist using a flexible rubber bar (FlexBar) performs isolated eccentric loading of Extensor Carpi Radialis Brevis, significantly reducing pain and improving wrist extension strength.",
    "passageId": "source-2-c-14",
    "passage": "Case 14: 29-year-old Tennis Player (Lateral Elbow Pain)"
  },
  {
    "id": "source-2-c-429",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 15: 22-year-old Badminton Player (Achilles Tendon Rupture)",
    "difficulty": "analytical",
    "text": "A 22-year-old badminton player experiences a sudden 'pop' behind his left ankle while lunging backward, feeling as if hit by a ball. He cannot walk. Squeezing the calf belly yields NO passive plantarflexion (positive Thompson test). A palpable gap is present 3 cm above the calcaneus. What is the injury?",
    "options": [
      "Gastrocnemius Muscle Strain (based on multidisciplinary clinical decision-making)",
      "Complete Achilles Tendon Rupture (confirmed via objective functional return-to-sport testing)",
      "Ankle Inversion Sprain confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Plantaris Tendon Tear confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "A sudden 'pop', positive Thompson test (absence of plantarflexion upon calf squeeze), and palpable defect confirm a complete Achilles tendon rupture.",
    "passageId": "source-2-c-15",
    "passage": "Case 15: 22-year-old Badminton Player (Achilles Tendon Rupture)"
  },
  {
    "id": "source-2-c-430",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 15: 22-year-old Badminton Player (Achilles Tendon Rupture)",
    "difficulty": "analytical",
    "text": "Following non-operative or operative management of Achilles rupture, what early rehabilitation phase accelerates tendon recovery while preventing elongation?",
    "options": [
      "Controlled early functional weight-bearing in a protective orthotic boot with heel wedges, progressing range of motion under safe limits",
      "6 months rigid cast immobilization in dorsiflexion (confirmed via objective functional return-to-sport testing)",
      "Immediate un-protected sprinting confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Passive stretching into extreme dorsiflexion confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Early functional rehabilitation in a protective rigid boot with heel wedges permits early controlled weight-bearing, optimizing tendon alignment without risk of tendon elongation.",
    "passageId": "source-2-c-15",
    "passage": "Case 15: 22-year-old Badminton Player (Achilles Tendon Rupture)"
  },
  {
    "id": "source-2-c-431",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 16: 25-year-old Weightlifter (Shoulder Pain during Overhead Snatch)",
    "difficulty": "analytical",
    "text": "A 25-year-old weightlifter experiences sharp anterior shoulder pain when holding the barbell overhead in a deep snatch position (flexion, abduction, external rotation). Relocation test relieves pain following a positive anterior apprehension test. What is the primary clinical finding?",
    "options": [
      "Posterior shoulder dislocation confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "AC Joint Grade III sprain confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Anterior Glenohumeral Instability / Labral Pathology (in accordance with sports rehabilitation clinical pathways)",
      "Scaphoid fracture confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "Apprehension relieved by posterior translation of the humeral head (Relocation test) confirms anterior glenohumeral instability.",
    "passageId": "source-2-c-16",
    "passage": "Case 16: 25-year-old Weightlifter (Shoulder Pain during Overhead Snatch)"
  },
  {
    "id": "source-2-c-432",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 16: 25-year-old Weightlifter (Shoulder Pain during Overhead Snatch)",
    "difficulty": "analytical",
    "text": "Rehabilitation for anterior shoulder instability must focus on dynamic stabilization by strengthening which muscle group?",
    "options": [
      "Rotator Cuff (especially Subscapularis) and Scapular Stabilizers (Serratus Anterior, Trapezius)",
      "Pectoralis Major exclusively confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Latissimus Dorsi confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Biceps short head confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Dynamic dynamic stability of the anterior glenohumeral joint relies on strengthening the anterior rotator cuff (Subscapularis) and scapular retractors/upward rotators.",
    "passageId": "source-2-c-16",
    "passage": "Case 16: 25-year-old Weightlifter (Shoulder Pain during Overhead Snatch)"
  },
  {
    "id": "source-2-c-433",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 17: 21-year-old Hockey Player (Hip & Groin Impingement)",
    "difficulty": "analytical",
    "text": "A 21-year-old ice hockey player reports deep anterior hip groin pain aggravated by hip flexion and internal rotation. FADIR test (Flexion, Adduction, Internal Rotation) reproduces deep joint pain. Radiographs reveal an asymmetrical femoral head-neck junction with an osseous bump ('Cam lesion'). What is the diagnosis?",
    "options": [
      "Trochanteric Bursitis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Cam-type Femoroacetabular Impingement (FAI) (confirmed via objective functional return-to-sport testing)",
      "Pincer-type FAI confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Hamstring Avulsion confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "An osseous prominence at the femoral head-neck junction causing mechanical impingement against the acetabular rim during flexion/internal rotation (positive FADIR) defines Cam-type FAI.",
    "passageId": "source-2-c-17",
    "passage": "Case 17: 21-year-old Hockey Player (Hip & Groin Impingement)"
  },
  {
    "id": "source-2-c-434",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 17: 21-year-old Hockey Player (Hip & Groin Impingement)",
    "difficulty": "analytical",
    "text": "What is the conservative physical therapy focus for an athlete with FAI?",
    "options": [
      "Neuromuscular control of hip deep rotators, gluteal strengthening, core stability, and avoiding provocative end-range flexion/internal rotation loading",
      "Forcing deep passive hip flexion and internal rotation stretches (confirmed via objective functional return-to-sport testing)",
      "High impact jumping confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Complete bed rest confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "FAI conservative management focuses on hip abductor/gluteal strengthening, dynamic pelvic control, and modifying movement patterns to avoid Provocative end-range FADIR positions.",
    "passageId": "source-2-c-17",
    "passage": "Case 17: 21-year-old Hockey Player (Hip & Groin Impingement)"
  },
  {
    "id": "source-2-c-435",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 18: 30-year-old Cyclist (Ulnar Nerve Palsy)",
    "difficulty": "analytical",
    "text": "A 30-year-old long-distance cyclist experiences numbness and tingling in the ring and little fingers after a 150 km ride, along with weakness in key pinch grip. Physical exam shows tenderness over Guyon's canal at the wrist. What condition is present?",
    "options": [
      "Carpal Tunnel Syndrome confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Handlebar Palsy (Ulnar Neuropathy at Guyon's Canal) (confirmed via objective functional return-to-sport testing)",
      "Radial Tunnel Syndrome confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "De Quervain's Tenosynovitis confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Direct mechanical pressure from bicycle handlebars onto the ulnar nerve as it passes through Guyon's canal at the wrist causes 'Handlebar Palsy' (ulnar neuropathy).",
    "passageId": "source-2-c-18",
    "passage": "Case 18: 30-year-old Cyclist (Ulnar Nerve Palsy)"
  },
  {
    "id": "source-2-c-436",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 18: 30-year-old Cyclist (Ulnar Nerve Palsy)",
    "difficulty": "analytical",
    "text": "What immediate ergonomic modification and physical therapy management should be prescribed for Handlebar Palsy?",
    "options": [
      "Increase handlebar grip pressure confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Immobilize elbow in 90° flexion for 6 months (confirmed via objective functional return-to-sport testing)",
      "Ergonomic bike fitting (padded gloves, repositioning handlebars to reduce wrist extension), activity modification, and nerve gliding exercises",
      "Surgical nerve transposition immediately confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Ergonomic adjustment of handlebar height and padded gloves offloads pressure on Guyon's canal, paired with neurodynamic ulnar nerve glides.",
    "passageId": "source-2-c-18",
    "passage": "Case 18: 30-year-old Cyclist (Ulnar Nerve Palsy)"
  },
  {
    "id": "source-2-c-437",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 19: 18-year-old Volleyball Player (Patellar Sinding-Larsen-Johansson vs Osgood-Schlatter)",
    "difficulty": "analytical",
    "text": "An 18-year-old adolescent volleyball player reports pain directly over the tibial tuberosity that worsens during jumping. Localized bony enlargement and marked tenderness are present at the insertion of the patellar tendon onto the tibial apophysis. What is the diagnosis?",
    "options": [
      "Sinding-Larsen-Johansson Syndrome confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Patellar Tendinopathy confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Pes Anserine Bursitis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Osgood-Schlatter Disease (Tibial Tubercle Apophysitis) (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "Traction apophysitis of the tibial tuberosity in skeletally immature jumping athletes characterizes Osgood-Schlatter disease. Sinding-Larsen-Johansson involves the inferior patellar pole.",
    "passageId": "source-2-c-19",
    "passage": "Case 19: 18-year-old Volleyball Player (Patellar Sinding-Larsen-Johansson vs Osgood-Schlatter)"
  },
  {
    "id": "source-2-c-438",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 19: 18-year-old Volleyball Player (Patellar Sinding-Larsen-Johansson vs Osgood-Schlatter)",
    "difficulty": "analytical",
    "text": "What is the key clinical management strategy for Osgood-Schlatter disease during peak growth spurts?",
    "options": [
      "Complete cast immobilization confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Load management (reducing jump frequency), ice post-activity, quadriceps/hamstring flexibility, and progressive isometric/isotonic quadriceps strengthening",
      "Surgical excision of the tibial tuberosity confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Corticosteroid injection into the apophysis confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 1,
    "explanation": "Osgood-Schlatter is a self-limiting traction apophysitis managed by modifying jump volume, stretching tight rectus femoris/hamstrings, and loading quadriceps within pain tolerance.",
    "passageId": "source-2-c-19",
    "passage": "Case 19: 18-year-old Volleyball Player (Patellar Sinding-Larsen-Johansson vs Osgood-Schlatter)"
  },
  {
    "id": "source-2-c-439",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 20: 26-year-old Weightlifter (Lumbar Disc Herniation)",
    "difficulty": "analytical",
    "text": "A 26-year-old weightlifter feels an acute snap in his lower back while executing a heavy deadlift, followed by sharp radicular pain shooting down the posterolateral right leg to the big toe. SLR is positive at 40° with positive Bragard's sign. Neurological exam shows weakness in Extensor Hallucis Longus (EHL). Which nerve root is compressed?",
    "options": [
      "L5 Nerve Root",
      "L4 Nerve Root",
      "L3 Nerve Root",
      "S1 Nerve Root"
    ],
    "correct": 0,
    "explanation": "Pain radiating to the big toe with weakness in Extensor Hallucis Longus (EHL) dorsiflexion and L4/L5 disc protrusion corresponds to L5 nerve root compression.",
    "passageId": "source-2-c-20",
    "passage": "Case 20: 26-year-old Weightlifter (Lumbar Disc Herniation)"
  },
  {
    "id": "source-2-c-440",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 20: 26-year-old Weightlifter (Lumbar Disc Herniation)",
    "difficulty": "analytical",
    "text": "If the athlete demonstrates extension bias during McKenzie evaluation (repeated lumbar extension centralizes leg pain), what intervention should be prioritized?",
    "options": [
      "Repeated lumbar flexion exercises (Williams flexion) confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Heavy deadlifts immediately confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Continuous spinal flexion stretches confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "McKenzie Extension Progression (Prone press-ups) to mechanically promote anterior disc migration and nerve root decompression"
    ],
    "correct": 3,
    "explanation": "Centralization of radicular symptoms during extension confirms an extension directional preference, indicating prone press-ups to reduce posterior disc herniation.",
    "passageId": "source-2-c-20",
    "passage": "Case 20: 26-year-old Weightlifter (Lumbar Disc Herniation)"
  },
  {
    "id": "source-2-c-441",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 21: Acute Lateral Ankle Sprain Edema Management",
    "difficulty": "analytical",
    "text": "A high-voltage pulsed current (HVPC) protocol is chosen to control acute edema in a soccer player 12 hours post ankle sprain. What electrical polarity and placement should be used according to evidence-based electrotherapy?",
    "options": [
      "Negative polarity (Cathode) over the acute edema site to repel negatively charged plasma proteins",
      "Positive polarity (Anode) over edema confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Alternating current without polarity confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Direct continuous DC current for 2 hours (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "HVPC applied with negative polarity (Cathode) over acute edema repels negatively charged serum proteins (albumin), reducing microvascular leakage into extracellular space.",
    "passageId": "source-2-c-21",
    "passage": "Case 21: Acute Lateral Ankle Sprain Edema Management"
  },
  {
    "id": "source-2-c-442",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 21: Acute Lateral Ankle Sprain Edema Management",
    "difficulty": "analytical",
    "text": "What parameters should be set for HVPC acute anti-edema treatment?",
    "options": [
      "Pulse frequency 1-2 Hz, 10 minutes confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "High frequency 100-120 Hz, monophasic twin-peak pulses at sensory-level intensity for 30 minutes",
      "Motor-threshold 10 Hz continuous confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Thermal SWD for 45 minutes confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Sensory-level high-frequency HVPC (100-120 Hz, 20-50 µs duration) applied for 30 minutes effectively inhibits vascular permeability and post-traumatic edema formation.",
    "passageId": "source-2-c-21",
    "passage": "Case 21: Acute Lateral Ankle Sprain Edema Management"
  },
  {
    "id": "source-2-c-443",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 22: Post-Stroke Upper Limb Motor Recovery",
    "difficulty": "analytical",
    "text": "A 55-year-old master athlete 6 months post-stroke presents with partial active wrist extension (15°) and finger extension (10°), but severe non-use of the affected arm. Which evidence-based neuro-rehabilitation protocol is indicated?",
    "options": [
      "Bobath passive therapy only confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Cryotherapy to affected limb confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Complete arm sling on affected side confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Constraint-Induced Movement Therapy (CIMT) restraining the non-affected arm for 90% of waking hours paired with intensive task-oriented practice"
    ],
    "correct": 3,
    "explanation": "CIMT is highly effective for post-stroke patients possessing active wrist/finger extension, overcoming learned non-use by constraining the unaffected arm and training the affected arm intensively.",
    "passageId": "source-2-c-22",
    "passage": "Case 22: Post-Stroke Upper Limb Motor Recovery"
  },
  {
    "id": "source-2-c-444",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 22: Post-Stroke Upper Limb Motor Recovery",
    "difficulty": "analytical",
    "text": "What neuroplastic mechanism underlies functional recovery achieved through CIMT?",
    "options": [
      "Peripheral nerve regeneration confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Use-dependent cortical reorganization and expansion of the motor cortex representation of the affected limb",
      "Loss of spinal reflexes confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Muscle cell hyperplasia confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Intensive repetitive task practice during CIMT drives activity-dependent neuroplasticity, reorganizing cortical motor maps to represent the paretic limb.",
    "passageId": "source-2-c-22",
    "passage": "Case 22: Post-Stroke Upper Limb Motor Recovery"
  },
  {
    "id": "source-2-c-445",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 23: Cardiac Rehabilitation Exercise Prescription",
    "difficulty": "analytical",
    "text": "A 50-year-old male marathon runner entering Phase II cardiac rehab has a resting heart rate (HRrest) of 60 bpm and peak heart rate (HRpeak) of 160 bpm on stress test. Using the Karvonen formula (Heart Rate Reserve method), calculate his target training heart rate at 70% intensity.",
    "options": [
      "112 bpm",
      "130 bpm",
      "140 bpm",
      "150 bpm"
    ],
    "correct": 1,
    "explanation": "Karvonen Formula: Target HR = HRrest + %Intensity × (HRpeak - HRrest). Target HR = 60 + 0.70 × (160 - 60) = 60 + 70 = 130 bpm.",
    "passageId": "source-2-c-23",
    "passage": "Case 23: Cardiac Rehabilitation Exercise Prescription"
  },
  {
    "id": "source-2-c-446",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 23: Cardiac Rehabilitation Exercise Prescription",
    "difficulty": "analytical",
    "text": "Which subjective rating scale is essential for monitoring exertion in cardiac rehab patients taking beta-blockers (which blunt heart rate response)?",
    "options": [
      "Visual Analog Scale (VAS) confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Likert scale confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "FMS Score confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Borg Rating of Perceived Exertion (RPE 6-20 or CR10 scale) (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "Beta-blockers suppress HR response to exercise; therefore, Borg's RPE scale (targeting RPE 11-14 'somewhat hard') is mandatory to regulate exercise intensity.",
    "passageId": "source-2-c-23",
    "passage": "Case 23: Cardiac Rehabilitation Exercise Prescription"
  },
  {
    "id": "source-2-c-447",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 24: Professional Footballer Load Monitoring",
    "difficulty": "analytical",
    "text": "A professional football player's GPS data shows a 7-day acute workload of 2800 AU and a 28-day chronic workload of 1600 AU. Calculate his ACWR and interpret the associated injury risk.",
    "options": [
      "ACWR = 0.57 (Low fitness) confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "ACWR = 1.00 (Optimal sweet spot) confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "ACWR = 1.75 (Danger Zone > 1.5, representing significantly elevated non-contact injury risk)",
      "ACWR = 2.50 (Zero injury risk) confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "ACWR = 2800 / 1600 = 1.75. Ratios > 1.5 represent a rapid workload spike ('danger zone'), exposing the athlete to a 2 to 4-fold increase in non-contact soft tissue injury risk.",
    "passageId": "source-2-c-24",
    "passage": "Case 24: Professional Footballer Load Monitoring"
  },
  {
    "id": "source-2-c-448",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 24: Professional Footballer Load Monitoring",
    "difficulty": "analytical",
    "text": "What load modification strategy should the Performance Analyst recommend to the head coach for this player?",
    "options": [
      "Increase acute load by another 50% confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Ignore the GPS data confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Bench the player for 6 months confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Tactically reduce acute training volume over the next microcycle to allow ACWR to return to the 0.8-1.3 safe zone while prioritizing active recovery"
    ],
    "correct": 3,
    "explanation": "High ACWR spikes mandate short-term acute load reduction (modulating high-speed running distance and volume) to bring ACWR back down to the 0.8-1.3 safe zone.",
    "passageId": "source-2-c-24",
    "passage": "Case 24: Professional Footballer Load Monitoring"
  },
  {
    "id": "source-2-c-449",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 25: Hot Weather Triathlete Collapse",
    "difficulty": "analytical",
    "text": "A triathlete collapses near the finish line of a race in 35°C heat with 85% humidity. He is confused, disoriented, and incoherent. Rectal temperature is 41.1°C. Skin is hot and flushed. What is the immediate medical diagnosis and priority action?",
    "options": [
      "Heat Exhaustion; give oral water and transport (based on multidisciplinary clinical decision-making)",
      "Dehydration; give intravenous saline and wait 1 hour (confirmed via objective functional return-to-sport testing)",
      "Exertional Heat Stroke (EHS); perform immediate Cold Water Immersion (CWI) in ice water on-site until core temperature drops below 39°C before ambulance transport",
      "Hyperventilation syndrome confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Core temp >40.5°C with CNS dysfunction confirms Exertional Heat Stroke. Mandatory protocol: 'Cool First on-site in ice tub, Transport Second' to prevent fatal multi-organ failure.",
    "passageId": "source-2-c-25",
    "passage": "Case 25: Hot Weather Triathlete Collapse"
  },
  {
    "id": "source-2-c-450",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 25: Hot Weather Triathlete Collapse",
    "difficulty": "analytical",
    "text": "Why is oral rehydration CONTRAINDICATED in an athlete presenting with Exertional Heat Stroke?",
    "options": [
      "Water causes hyperthermia confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Oral water slows down heart rate confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Altered mental status and confusion create severe risk of aspiration into the lungs (in accordance with sports rehabilitation clinical pathways)",
      "Sodium levels drop instantly confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "Athletes with CNS impairment (confusion, stupor, delirium) cannot protect their airway, posing high risk of pulmonary aspiration if given oral fluids.",
    "passageId": "source-2-c-25",
    "passage": "Case 25: Hot Weather Triathlete Collapse"
  },
  {
    "id": "source-2-c-451",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 26: 24-year-old Hurdler (Plantar Foot Pain)",
    "difficulty": "analytical",
    "text": "A 24-year-old track hurdler experiences sharp inferior heel pain during the first steps out of bed in the morning. Pain decreases after walking a few minutes but returns late in training. Tenderness is focal over the medial calcaneal tuberosity. Windlass test is positive. What is the diagnosis?",
    "options": [
      "Fat Pad Contusion confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Calcaneal Stress Fracture confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Tarsal Tunnel Syndrome confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Plantar Fasciitis / Plantar Fasciopathy (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "First-step morning heel pain, focal tenderness over the medial calcaneal tubercle, and symptom reproduction during Windlass test (passive 1st MTP extension) diagnose Plantar Fasciitis.",
    "passageId": "source-2-c-26",
    "passage": "Case 26: 24-year-old Hurdler (Plantar Foot Pain)"
  },
  {
    "id": "source-2-c-452",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 26: 24-year-old Hurdler (Plantar Foot Pain)",
    "difficulty": "analytical",
    "text": "Which high-load strength exercise protocol (Rathleff protocol) effectively treats plantar fasciopathy?",
    "options": [
      "Static calf stretching only confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Complete non-weight bearing for 8 weeks confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Progressive heel raises performed on a towel roll under the toes (to engage Windlass mechanism) with heavy resistance (slow 3s concentric, 3s eccentric) every second day",
      "Ice massage exclusively confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Rathleff's protocol utilizes progressive heavy slow resistance heel raises with a rolled towel under the toes to load the plantar fascia via the Windlass mechanism.",
    "passageId": "source-2-c-26",
    "passage": "Case 26: 24-year-old Hurdler (Plantar Foot Pain)"
  },
  {
    "id": "source-2-c-453",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 27: 23-year-old Volleyball Spiker (Infraspinatus Atrophy)",
    "difficulty": "analytical",
    "text": "A 23-year-old volleyball spiker presents with painless weakness of shoulder external rotation. Inspection reveals marked atrophy of the right infraspinatus fossa, while supraspinatus belly remains normal. What nerve entrapment is present?",
    "options": [
      "Supraspinatus branch of Suprascapular Nerve (based on multidisciplinary clinical decision-making)",
      "Axillary Nerve at Quadrangular Space confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Suprascapular Nerve entrapment at the Spinoglenoid Notch (in accordance with sports rehabilitation clinical pathways)",
      "Long Thoracic Nerve confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Suprascapular nerve entrapment at the spinoglenoid notch selectively denervates Infraspinatus (atrophy/weakness), whereas entrapment at the suprascapular notch affects BOTH supraspinatus and infraspinatus.",
    "passageId": "source-2-c-27",
    "passage": "Case 27: 23-year-old Volleyball Spiker (Infraspinatus Atrophy)"
  },
  {
    "id": "source-2-c-454",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 27: 23-year-old Volleyball Spiker (Infraspinatus Atrophy)",
    "difficulty": "analytical",
    "text": "What overhead movement pattern causes repetitive spinoglenoid notch nerve traction in volleyball spikers?",
    "options": [
      "Extreme shoulder adduction confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Wrist extension confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Elbow flexion confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Extreme cocking and follow-through hyper-abduction with cross-body horizontal adduction and internal rotation"
    ],
    "correct": 3,
    "explanation": "Rapid eccentric deceleration during follow-through causes the spinoglenoid ligament (ferro-ligamentous band) to stretch across the suprascapular nerve branch to infraspinatus.",
    "passageId": "source-2-c-27",
    "passage": "Case 27: 23-year-old Volleyball Spiker (Infraspinatus Atrophy)"
  },
  {
    "id": "source-2-c-455",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 28: 20-year-old Footballer (Meniscal Repair Rehab)",
    "difficulty": "analytical",
    "text": "A 20-year-old footballer undergoes surgical repair of a longitudinal tear in the peripheral red-red zone of the medial meniscus. How does early post-op weight-bearing and ROM restriction differ from a simple partial meniscectomy?",
    "options": [
      "Meniscectomy requires 6 weeks cast; Repair allows immediate running (based on multidisciplinary clinical decision-making)",
      "Meniscal Repair requires protected weight-bearing in hinged brace and restriction of deep knee flexion (>90°) for 4-6 weeks to protect suture lines, whereas Meniscectomy allows weight-bearing as tolerated immediately",
      "Both have identical rehab protocols confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Repair requires no physical therapy confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 1,
    "explanation": "Meniscal repair requires protecting the healing tissue under controlled load (braced, restricted ROM <90° for 4-6 weeks), whereas partial meniscectomy permits immediate weight-bearing and ROM.",
    "passageId": "source-2-c-28",
    "passage": "Case 28: 20-year-old Footballer (Meniscal Repair Rehab)"
  },
  {
    "id": "source-2-c-456",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 28: 20-year-old Footballer (Meniscal Repair Rehab)",
    "difficulty": "analytical",
    "text": "Why is deep open-chain knee flexion (>90°) restricted during early post-op meniscal repair rehabilitation?",
    "options": [
      "It causes quadriceps tears confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "It causes patellar fracture confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "It leads to foot drop confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Deep knee flexion causes posterior migration of the menisci and high compressive shear stress from the hamstring insertions, threatening repair integrity"
    ],
    "correct": 3,
    "explanation": "Flexion beyond 90° increases posterior meniscal displacement and compressive forces, loading the repair site and risking suture disruption.",
    "passageId": "source-2-c-28",
    "passage": "Case 28: 20-year-old Footballer (Meniscal Repair Rehab)"
  },
  {
    "id": "source-2-c-457",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 29: 22-year-old Rugby Player (Valgus Knee Trauma)",
    "difficulty": "analytical",
    "text": "A 22-year-old rugby player sustains a valgus blow to the lateral knee. Exam shows localized medial knee joint tenderness, 6 mm laxity on valgus stress testing at 30° knee flexion with a firm end-feel, and no laxity at 0° full extension. What is the diagnosis?",
    "options": [
      "Grade I MCL sprain confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Grade II Isolated MCL sprain confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Grade III Complete MCL rupture with ACL involvement (in accordance with sports rehabilitation clinical pathways)",
      "LCL tear confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Valgus laxity of 5-10 mm at 30° knee flexion with a firm end-point defines a Grade II partial MCL sprain. Stability at 0° confirms intact posterior capsule and cruciate ligaments.",
    "passageId": "source-2-c-29",
    "passage": "Case 29: 22-year-old Rugby Player (Valgus Knee Trauma)"
  },
  {
    "id": "source-2-c-458",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 29: 22-year-old Rugby Player (Valgus Knee Trauma)",
    "difficulty": "analytical",
    "text": "What is the conservative management protocol for a Grade II MCL sprain in a contact sport athlete?",
    "options": [
      "Hinged knee brace allowing controlled sagittal flexion/extension while blocking valgus stress, early pain-free weight-bearing, and progressive dynamic stabilizing exercises",
      "Immediate surgical reconstruction confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Rigid total leg cast for 12 weeks (in accordance with sports rehabilitation clinical pathways)",
      "Complete bed rest confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "Isolated Grade II MCL sprains heal reliably with non-operative management using a protective hinged brace to block valgus forces while encouraging progressive sagittal ROM and loading.",
    "passageId": "source-2-c-29",
    "passage": "Case 29: 22-year-old Rugby Player (Valgus Knee Trauma)"
  },
  {
    "id": "source-2-c-459",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 30: 19-year-old Female Dancer (External Snapping Hip)",
    "difficulty": "analytical",
    "text": "A 19-year-old female ballet dancer experiences an audible, palpable 'snap' over the lateral hip during active hip flexion and extension, accompanied by lateral trochanteric pain. What structure is snapping over the greater trochanter?",
    "options": [
      "Iliotibial Band (ITB) / Gluteus Maximus anterior border (based on multidisciplinary clinical decision-making)",
      "Iliopsoas tendon confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Ligamentum Teres confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Rectus Femoris origin confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "External snapping hip (Coxa Saltans) is caused by the posterior border of the ITB or anterior Gluteus Maximus sliding over the prominent greater trochanter during hip movement.",
    "passageId": "source-2-c-30",
    "passage": "Case 30: 19-year-old Female Dancer (External Snapping Hip)"
  },
  {
    "id": "source-2-c-460",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 30: 19-year-old Female Dancer (External Snapping Hip)",
    "difficulty": "analytical",
    "text": "If an athlete instead reports internal snapping deep in the anterior groin when extending an abducted, externally rotated hip, which tendon is snapping over the iliopectineal eminence?",
    "options": [
      "Tensor Fasciae Latae (based on multidisciplinary clinical decision-making)",
      "Iliopsoas tendon (confirmed via objective functional return-to-sport testing)",
      "Adductor Longus (in accordance with sports rehabilitation clinical pathways)",
      "Piriformis confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Internal snapping hip involves the Iliopsoas tendon snapping over the iliopectineal eminence or femoral head during hip extension from a flexed/abducted position.",
    "passageId": "source-2-c-30",
    "passage": "Case 30: 19-year-old Female Dancer (External Snapping Hip)"
  },
  {
    "id": "source-2-c-461",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 31: 21-year-old Football Linebacker (Neck & Arm Numbness)",
    "difficulty": "analytical",
    "text": "A 21-year-old football player experiences sudden severe burning pain radiating down his right arm to the thumb following a tackle. Arm hangs limp for 45 seconds before motor function completely recovers within 2 minutes. Cervical spine ROM is full and pain-free. Spurling's test is negative. What is the diagnosis?",
    "options": [
      "Cervical Spine Fracture confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Transient Brachial Plexus Neuropraxia ('Burner' / 'Stinger') (confirmed via objective functional return-to-sport testing)",
      "Acute Stroke confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Shoulder dislocation confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Transient unilateral burning paresthesia and weakness lasting under 15 minutes with normal cervical ROM and negative imaging indicates a transient brachial plexus neuropraxia (Stinger).",
    "passageId": "source-2-c-31",
    "passage": "Case 31: 21-year-old Football Linebacker (Neck & Arm Numbness)"
  },
  {
    "id": "source-2-c-462",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 31: 21-year-old Football Linebacker (Neck & Arm Numbness)",
    "difficulty": "analytical",
    "text": "When can an athlete with a single isolated 'stinger' be cleared to return to play?",
    "options": [
      "Never; immediate retirement required confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "After 6 months of cast rest confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Immediately during the next play while arm is weak (in accordance with sports rehabilitation clinical pathways)",
      "Once complete resolution of paresthesia and full, symmetrical strength in C5-T1 myotomes and full pain-free cervical spine ROM are documented"
    ],
    "correct": 3,
    "explanation": "Return to play requires 100% normal neurological exam, equal motor strength in all myotomes, no neck pain, and full cervical ROM.",
    "passageId": "source-2-c-31",
    "passage": "Case 31: 21-year-old Football Linebacker (Neck & Arm Numbness)"
  },
  {
    "id": "source-2-c-463",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 32: 24-year-old Kayaker (Radial Wrist Pain)",
    "difficulty": "analytical",
    "text": "A 24-year-old elite kayaker presents with severe radial wrist pain aggravated during paddle stroke grip. Finkelstein's test is strongly positive. Which anatomical tendon compartment is inflamed?",
    "options": [
      "3rd Dorsal Compartment (EPL) (based on multidisciplinary clinical decision-making)",
      "2nd Dorsal Compartment (ECRL and ECRB) (confirmed via objective functional return-to-sport testing)",
      "1st Dorsal Compartment (APL and EPB) (in accordance with sports rehabilitation clinical pathways)",
      "Carpal Tunnel confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "The 1st dorsal wrist compartment houses Abductor Pollicis Longus (APL) and Extensor Pollicis Brevis (EPB) beneath the extensor retinaculum over the radial styloid.",
    "passageId": "source-2-c-32",
    "passage": "Case 32: 24-year-old Kayaker (Radial Wrist Pain)"
  },
  {
    "id": "source-2-c-464",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 32: 24-year-old Kayaker (Radial Wrist Pain)",
    "difficulty": "analytical",
    "text": "What thumb spica splint position is prescribed for conservative management of De Quervain's Tenosynovitis?",
    "options": [
      "Forearm neutral, wrist in 15-20° extension with thumb in 30° palmar abduction and MP joint immobilised",
      "Wrist extension 40° with thumb MP flexed (confirmed via objective functional return-to-sport testing)",
      "Full wrist flexion and ulnar deviation confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Finger flexion splint confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "A custom thumb spica splint holds the wrist in slight extension (15-20°) and thumb in palmar abduction, resting APL and EPB tendons.",
    "passageId": "source-2-c-32",
    "passage": "Case 32: 24-year-old Kayaker (Radial Wrist Pain)"
  },
  {
    "id": "source-2-c-465",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 33: 31-year-old Distance Runner (Plantar Foot Numbness)",
    "difficulty": "analytical",
    "text": "A 31-year-old distance runner experiences burning pain and tingling across the plantar surface of his foot and toes. Tapping behind the medial malleolus reproduces paresthesia (positive Tinel's sign). Symptoms worsen with maximal passive eversion and dorsiflexion. What condition is present?",
    "options": [
      "Plantar Fasciitis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Tarsal Tunnel Syndrome (Tibial Nerve Entrapment beneath Flexor Retinaculum) (confirmed via objective functional return-to-sport testing)",
      "Morton's Neuroma confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Achilles Tendinopathy confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Compression of the Tibial Nerve beneath the flexor retinaculum behind the medial malleolus causes Tarsal Tunnel Syndrome (positive Tinel's sign over flexor retinaculum).",
    "passageId": "source-2-c-33",
    "passage": "Case 33: 31-year-old Distance Runner (Plantar Foot Numbness)"
  },
  {
    "id": "source-2-c-466",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 33: 31-year-old Distance Runner (Plantar Foot Numbness)",
    "difficulty": "analytical",
    "text": "What structural foot posture mechanically increases tension within the tarsal tunnel?",
    "options": [
      "Pes Cavus (High Arch) with supination confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Toe clawing confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Rigid dorsiflexion confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Excessive Pes Planus (Flat Foot) with hyper-pronation and subtalar eversion (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "Hyper-pronation and subtalar eversion increase mechanical stretch and space narrowing inside the tarsal tunnel, compromising tibial nerve blood supply.",
    "passageId": "source-2-c-33",
    "passage": "Case 33: 31-year-old Distance Runner (Plantar Foot Numbness)"
  },
  {
    "id": "source-2-c-467",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 34: 19-year-old Swimmer (Proximal Medial Tibial Pain)",
    "difficulty": "analytical",
    "text": "A 19-year-old breaststroke swimmer presents with localized pain over the proximal anteromedial tibia, 5 cm distal to the medial knee joint line. Resisted knee flexion with internal rotation reproduces tenderness. What tendons form the Pes Anserine insertion?",
    "options": [
      "Biceps Femoris, Semimembranosus, and Gastrocnemius",
      "Sartorius, Gracilis, and Semitendinosus (SGT)",
      "Rectus Femoris, Vastus Medialis, and Vastus Lateralis",
      "Tibialis Anterior, Extensor Digitorum, and Peroneus"
    ],
    "correct": 1,
    "explanation": "The Pes Anserine ('Goose's Foot') is formed by the conjoined insertion of Sartorius (femoral nerve), Gracilis (obturator nerve), and Semitendinosus (sciatic nerve) onto the anteromedial proximal tibia.",
    "passageId": "source-2-c-34",
    "passage": "Case 34: 19-year-old Swimmer (Proximal Medial Tibial Pain)"
  },
  {
    "id": "source-2-c-468",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 34: 19-year-old Swimmer (Proximal Medial Tibial Pain)",
    "difficulty": "analytical",
    "text": "Why does the breaststroke kick predispose swimmers to Pes Anserine Bursitis?",
    "options": [
      "Excessive linear forward propulsion confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Hyperextension of ankles confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Static flutter kicking confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Rapid whip-kick combining knee extension with forceful valgus stress and active internal rotation, frictionally loading the pes anserine bursa"
    ],
    "correct": 3,
    "explanation": "The breaststroke whip-kick subjects the medial knee to repetitive valgus loading and internal rotation, generating friction across the pes anserine bursa.",
    "passageId": "source-2-c-34",
    "passage": "Case 34: 19-year-old Swimmer (Proximal Medial Tibial Pain)"
  },
  {
    "id": "source-2-c-469",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 35: 14-year-old High Jumper (Inferior Patellar Pole Pain)",
    "difficulty": "analytical",
    "text": "A 14-year-old high jumper complains of focal pain at the inferior pole of the patella. X-rays show micro-fragmentation at the inferior patellar border without tibial tuberosity involvement. What is the diagnosis?",
    "options": [
      "Osgood-Schlatter Disease confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Sinding-Larsen-Johansson (SLJ) Syndrome (Patellar Inferior Pole Apophysitis) (confirmed via objective functional return-to-sport testing)",
      "Patellar tendon rupture confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Osteochondritis Dissecans confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Traction apophysitis affecting the inferior pole of the patella at the proximal origin of the patellar tendon defines Sinding-Larsen-Johansson syndrome.",
    "passageId": "source-2-c-35",
    "passage": "Case 35: 14-year-old High Jumper (Inferior Patellar Pole Pain)"
  },
  {
    "id": "source-2-c-470",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 35: 14-year-old High Jumper (Inferior Patellar Pole Pain)",
    "difficulty": "analytical",
    "text": "How does SLJ syndrome differ anatomically from Osgood-Schlatter disease?",
    "options": [
      "SLJ affects the quadriceps tendon insertion into the hip (based on multidisciplinary clinical decision-making)",
      "SLJ occurs only in 50-year-olds confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "SLJ involves the inferior pole of the patella, whereas Osgood-Schlatter involves the tibial tuberosity distal insertion",
      "SLJ causes foot drop confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "SLJ affects the proximal patellar tendon attachment at the inferior patellar pole, whereas Osgood-Schlatter affects the distal insertion at the tibial tubercle.",
    "passageId": "source-2-c-35",
    "passage": "Case 35: 14-year-old High Jumper (Inferior Patellar Pole Pain)"
  },
  {
    "id": "source-2-c-471",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 36: 22-year-old Goalkeeper (Wrist Pain Post FOOSH)",
    "difficulty": "analytical",
    "text": "A 22-year-old football goalkeeper falls on an outstretched hand (FOOSH). Initial X-rays 4 hours post-injury are reported negative for fracture. He continues playing despite persistent snuffbox tenderness. 6 weeks later, repeat X-rays show a clear fracture line across the scaphoid waist with sclerosis. Why were initial X-rays negative?",
    "options": [
      "Radiologist error confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Ligament tears hide bone confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Scaphoid bone is invisible on X-ray confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Non-displaced scaphoid fractures often fail to show on initial X-rays until bone resorption occurs 10-14 days post-injury"
    ],
    "correct": 3,
    "explanation": "Occult non-displaced scaphoid fractures are frequently invisible on immediate post-injury X-rays; clinical suspicion with snuffbox tenderness requires immobilisation and repeat imaging at 10-14 days or MRI.",
    "passageId": "source-2-c-36",
    "passage": "Case 36: 22-year-old Goalkeeper (Wrist Pain Post FOOSH)"
  },
  {
    "id": "source-2-c-472",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 36: 22-year-old Goalkeeper (Wrist Pain Post FOOSH)",
    "difficulty": "analytical",
    "text": "What serious vascular complication is associated with un-immobilised proximal pole scaphoid fractures?",
    "options": [
      "Carpal tunnel collapse confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Avascular Necrosis (AVN) of the proximal segment due to retrograde blood supply from the radial artery",
      "Ulnar artery thrombosis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Forearm compartment syndrome confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Blood supply to the scaphoid enters distally and flows retrogradely. Proximal pole fractures disrupt blood flow, resulting in avascular necrosis and nonunion if unmanaged.",
    "passageId": "source-2-c-36",
    "passage": "Case 36: 22-year-old Goalkeeper (Wrist Pain Post FOOSH)"
  },
  {
    "id": "source-2-c-473",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 37: 25-year-old Footballer (Midfoot Trauma)",
    "difficulty": "analytical",
    "text": "A 25-year-old footballer sustains an axial load onto a plantarflexed foot. He presents with severe midfoot pain, inability to bear weight, and plantar ecchymosis (bruising on the sole of the foot). Passive midfoot pronation/abduction causes intense pain. What injury is suspected?",
    "options": [
      "Lisfranc Joint (Tarso-Metatarsal) Complex Injury (based on multidisciplinary clinical decision-making)",
      "Plantar Fasciitis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Calcaneal fracture confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Achilles tendinitis confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Plantar ecchymosis combined with midfoot instability following axial load on a plantarflexed foot is pathognomonic for a Lisfranc tarso-metatarsal ligamentous injury.",
    "passageId": "source-2-c-37",
    "passage": "Case 37: 25-year-old Footballer (Midfoot Trauma)"
  },
  {
    "id": "source-2-c-474",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 37: 25-year-old Footballer (Midfoot Trauma)",
    "difficulty": "analytical",
    "text": "What weight-bearing radiographical view is required to assess Lisfranc diastasis?",
    "options": [
      "Bilateral Weight-Bearing AP and Lateral Foot Radiographs to evaluate widening (>2mm) between the 1st and 2nd metatarsal bases",
      "Non-weight-bearing AP view confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Hand X-ray confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Ultrasound scan confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "Weight-bearing bilateral foot X-rays apply body mass to reveal subtle diastasis (>2 mm widening) between the medial cuneiform and 2nd metatarsal base.",
    "passageId": "source-2-c-37",
    "passage": "Case 37: 25-year-old Footballer (Midfoot Trauma)"
  },
  {
    "id": "source-2-c-475",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 38: 26-year-old Soccer Player (Sports Hernia)",
    "difficulty": "analytical",
    "text": "A 26-year-old soccer player reports chronic pubic/groin pain aggravated by sprinting, twisting, and coughing. Physical exam shows tenderness over the pubic tubercle and rectus abdominis insertion, but NO palpable inguinal hernia bulge. MRI shows rectus abdominis / adductor longus aponeurotic plate tear. What is the diagnosis?",
    "options": [
      "Athletic Pubalgia ('Sports Hernia' / Core Muscle Injury) (based on multidisciplinary clinical decision-making)",
      "Direct Inguinal Hernia confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Trochanteric Bursitis confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Femoral Hernia confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Athletic pubalgia is a soft tissue tear of the rectus abdominis / adductor longus pubic aponeurosis without true visceral herniation.",
    "passageId": "source-2-c-38",
    "passage": "Case 38: 26-year-old Soccer Player (Sports Hernia)"
  },
  {
    "id": "source-2-c-476",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 38: 26-year-old Soccer Player (Sports Hernia)",
    "difficulty": "analytical",
    "text": "What conservative core dynamic stabilization strategy treats Athletic Pubalgia?",
    "options": [
      "Heavy sit-ups with high spinal flexion confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Co-stabilization of pelvic ring (adductor strengthening via Copenhagen protocol + abdominal wall motor control) avoiding explosive twisting until pain clears",
      "Complete bed rest for 1 year confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Stretching groin into extreme abduction confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 1,
    "explanation": "Rehabilitation focuses on restoring anterior pelvic ring stability through balanced adductor and abdominal wall co-contraction and progressive anti-rotational core loading.",
    "passageId": "source-2-c-38",
    "passage": "Case 38: 26-year-old Soccer Player (Sports Hernia)"
  },
  {
    "id": "source-2-c-477",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 39: 18-year-old Gymnast (Ulnar Wrist Pain)",
    "difficulty": "analytical",
    "text": "An 18-year-old gymnast presents with ulnar-sided wrist pain aggravated during axial weight-bearing (handstands). Exam shows tenderness over the soft tissue depression between the ulnar styloid and triquetrum (Fovea Sign) and positive Ulnar Fovea test. What structure is damaged?",
    "options": [
      "Triangular Fibrocartilage Complex (TFCC) (based on multidisciplinary clinical decision-making)",
      "Scaphoid bone confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Radial Collateral Ligament confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Median nerve confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Ulnar fovea tenderness and pain during axial loading with ulnar deviation confirm a Triangular Fibrocartilage Complex (TFCC) tear.",
    "passageId": "source-2-c-39",
    "passage": "Case 39: 18-year-old Gymnast (Ulnar Wrist Pain)"
  },
  {
    "id": "source-2-c-478",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 39: 18-year-old Gymnast (Ulnar Wrist Pain)",
    "difficulty": "analytical",
    "text": "What biomechanical wrist position stresses the TFCC during weight-bearing gymnastics skills?",
    "options": [
      "Wrist flexion and radial deviation confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Wrist Extension, Pronation, and Ulnar Deviation under high axial load (confirmed via objective functional return-to-sport testing)",
      "Resting neutral position confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Finger extension confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Axial loading combined with wrist extension, pronation, and ulnar deviation compresses and shears the TFCC disc between the ulnar head and carpus.",
    "passageId": "source-2-c-39",
    "passage": "Case 39: 18-year-old Gymnast (Ulnar Wrist Pain)"
  },
  {
    "id": "source-2-c-479",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 40: 28-year-old Powerlifter (Chest Tear during Bench Press)",
    "difficulty": "analytical",
    "text": "A 28-year-old powerlifter feels a tearing sensation in his anterior chest while lowering a 180 kg bench press, accompanied by an audible pop and immediate ecchymosis over the anterior axillary fold. Active horizontal adduction shows loss of the anterior axillary contour. What muscle tendon is ruptured?",
    "options": [
      "Latissimus Dorsi confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Pectoralis Major Tendon (humeral insertion avulsion) (confirmed via objective functional return-to-sport testing)",
      "Biceps Short Head confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Coracobrachialis confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Sudden rupture of Pectoralis Major occurs during maximal heavy eccentric loading (bench press bottom position), yielding anterior axillary asymmetry and loss of the axillary fold contour.",
    "passageId": "source-2-c-40",
    "passage": "Case 40: 28-year-old Powerlifter (Chest Tear during Bench Press)"
  },
  {
    "id": "source-2-c-480",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 40: 28-year-old Powerlifter (Chest Tear during Bench Press)",
    "difficulty": "analytical",
    "text": "In competitive strength athletes, what management is recommended for acute full-thickness Pectoralis Major tendon avulsions?",
    "options": [
      "Early surgical anatomical re-attachment to the humerus followed by structured rehabilitation (based on multidisciplinary clinical decision-making)",
      "Conservative arm sling immobilisation for 6 weeks (confirmed via objective functional return-to-sport testing)",
      "High-intensity bench press immediately confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Steroid injections into the chest confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Complete distal insertion avulsions of Pectoralis Major in high-demand strength athletes require early surgical repair to restore maximal bench press strength and axillary anatomy.",
    "passageId": "source-2-c-40",
    "passage": "Case 40: 28-year-old Powerlifter (Chest Tear during Bench Press)"
  },
  {
    "id": "source-2-c-481",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 41: Electrotherapy for Chronic Neuropathic Pain",
    "difficulty": "analytical",
    "text": "A 35-year-old runner with chronic neuropathic post-surgical scar pain is prescribed TENS. To activate the central descending opioid analgesic pathway, what TENS mode and frequency setting should be selected?",
    "options": [
      "Conventional TENS (100 Hz, low intensity) confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Continuous DC 50 mA confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Microcurrent 0.1 Hz confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Low-frequency Burst / Acupuncture-like TENS (2-4 Hz, high motor-level intensity to tolerance) (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "Low-frequency high-intensity TENS (1-4 Hz) stimulates A-delta nerve fibers to activate the descending endogenous opioid system, releasing systemic endorphins.",
    "passageId": "source-2-c-41",
    "passage": "Case 41: Electrotherapy for Chronic Neuropathic Pain"
  },
  {
    "id": "source-2-c-482",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 41: Electrotherapy for Chronic Neuropathic Pain",
    "difficulty": "analytical",
    "text": "How does Low-Frequency TENS differ from High-Frequency Conventional TENS regarding pharmacological reversal by Naloxone?",
    "options": [
      "High-frequency TENS effects are reversed by Naloxone (based on multidisciplinary clinical decision-making)",
      "Neither is affected by Naloxone confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Low-frequency TENS analgesia is blocked/reversed by Naloxone (confirming opioid mediation), whereas High-frequency TENS analgesia is mediated via delta-opioid / GABA receptors and less affected",
      "Both are identical confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Naloxone (an opioid receptor antagonist) blocks low-frequency TENS analgesia (mu-opioid mediated), proving its mechanism relies on endogenous endorphin release.",
    "passageId": "source-2-c-41",
    "passage": "Case 41: Electrotherapy for Chronic Neuropathic Pain"
  },
  {
    "id": "source-2-c-483",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 42: Deep Hip Joint Capsule Ultrasound Parameters",
    "difficulty": "analytical",
    "text": "A physical therapist aims to heat the deep posterior hip capsule (depth 4-5 cm) prior to joint mobilization. Which ultrasound transducer frequency setting must be selected?",
    "options": [
      "3.0 MHz",
      "1.0 MHz",
      "5.0 MHz",
      "10.0 MHz"
    ],
    "correct": 1,
    "explanation": "1.0 MHz ultrasound penetrates deep tissues (3 to 5 cm depth) due to lower protein absorption, whereas 3.0 MHz is absorbed in superficial tissues (1 to 2 cm depth).",
    "passageId": "source-2-c-42",
    "passage": "Case 42: Deep Hip Joint Capsule Ultrasound Parameters"
  },
  {
    "id": "source-2-c-484",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 42: Deep Hip Joint Capsule Ultrasound Parameters",
    "difficulty": "analytical",
    "text": "To achieve a therapeutic thermal increase of 4°C (vigorous heating for tissue stretching) in deep muscle tissue using 1 MHz continuous ultrasound at 1.5 W/cm², what minimum treatment duration is required?",
    "options": [
      "1 minute confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "10 to 12 minutes (confirmed via objective functional return-to-sport testing)",
      "30 minutes confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "60 minutes confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 1,
    "explanation": "Heating deep tissue by 4°C with 1 MHz continuous ultrasound at 1.5 W/cm² requires approximately 10 to 12 minutes of continuous soundhead movement.",
    "passageId": "source-2-c-42",
    "passage": "Case 42: Deep Hip Joint Capsule Ultrasound Parameters"
  },
  {
    "id": "source-2-c-485",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 43: Surface EMG Biofeedback in Knee Rehab",
    "difficulty": "analytical",
    "text": "During quadriceps re-education post-ACL reconstruction, dual-channel sEMG biofeedback is applied over Vastus Medialis Oblique (VMO) and Vastus Lateralis (VL). What is the desired sEMG signal outcome during a terminal extension exercise?",
    "options": [
      "Higher VL amplitude and zero VMO amplitude (based on multidisciplinary clinical decision-making)",
      "High electrical noise confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Complete suppression of all muscle activity confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Elevated VMO amplitude relative to VL, achieving a VMO:VL activation ratio ≥ 1.0 (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "sEMG biofeedback aims to train selective motor unit recruitment of VMO relative to VL, striving for a VMO:VL amplitude ratio ≥ 1.0 to ensure balanced patellar tracking.",
    "passageId": "source-2-c-43",
    "passage": "Case 43: Surface EMG Biofeedback in Knee Rehab"
  },
  {
    "id": "source-2-c-486",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 43: Surface EMG Biofeedback in Knee Rehab",
    "difficulty": "analytical",
    "text": "Where should the active sEMG surface electrodes be positioned over the VMO muscle belly?",
    "options": [
      "Over the VMO muscle belly ~4 cm superior and 5 cm medial to the superior border of the patella, oriented at 50-55° obliquity",
      "Directly over the patellar tendon confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Over the fibular head confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "On the lateral thigh confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "VMO surface electrodes are positioned over the anatomical muscle belly ~4 cm superior and 5 cm medial to the patellar border, aligned parallel to the 50-55° oblique fiber orientation.",
    "passageId": "source-2-c-43",
    "passage": "Case 43: Surface EMG Biofeedback in Knee Rehab"
  },
  {
    "id": "source-2-c-487",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 44: NMES Protocol for Quadriceps Atrophy",
    "difficulty": "analytical",
    "text": "A patient with severe quadriceps inhibition post-knee surgery receives NMES strength training (Russian current 2500 Hz, 50 bursts/sec). To minimize rapid muscle fatigue caused by non-selective recruitment of fast-twitch fibers, what rest ratio must be programmed?",
    "options": [
      "1:1 work-to-rest ratio (10s ON, 10s OFF) (based on multidisciplinary clinical decision-making)",
      "Continuous 100% ON for 20 minutes confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "1:5 work-to-rest ratio (10s contraction ON, 50s rest OFF) (in accordance with sports rehabilitation clinical pathways)",
      "10s ON, 2s OFF confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "NMES recruits Type II fast-twitch fibers synchronously, causing rapid fatigue. A 1:5 work-to-rest ratio (10s ON, 50s OFF) is required to allow ATP-PCr recovery between contractions.",
    "passageId": "source-2-c-44",
    "passage": "Case 44: NMES Protocol for Quadriceps Atrophy"
  },
  {
    "id": "source-2-c-488",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 44: NMES Protocol for Quadriceps Atrophy",
    "difficulty": "analytical",
    "text": "What minimum isometric contraction intensity (% MVIC) delivered by NMES is required to produce strength gains in orthopedically impaired knees?",
    "options": [
      "At least 50% of Maximum Voluntary Isometric Contraction (MVIC) of the uninjured limb",
      "5% MVIC confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "100% MVIC always confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Sub-sensory intensity confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Research demonstrates that NMES strength efficacy requires eliciting tetanic contractions of at least 50% MVIC of the contralateral healthy leg.",
    "passageId": "source-2-c-44",
    "passage": "Case 44: NMES Protocol for Quadriceps Atrophy"
  },
  {
    "id": "source-2-c-489",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 45: High Altitude Competition Preparation",
    "difficulty": "analytical",
    "text": "An Indian distance running squad travels to Leh (3500m altitude) for high-altitude training. During the first 48 hours, athletes demonstrate resting hyperventilation, arterial oxygen saturation (SpO2) of 88%, and elevated resting heart rate. What physiological mechanism causes this immediate increase in resting HR?",
    "options": [
      "Decline in blood volume confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Decrease in cardiac output confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Sympathetic nervous system surge releasing epinephrine/norepinephrine to compensate for arterial hypoxemia and maintain tissue oxygen delivery",
      "Hypercapnia confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Acute altitude hypoxia triggers sympathetic nervous system activation, elevating resting and submaximal heart rate to preserve cardiac output despite low PaO2.",
    "passageId": "source-2-c-45",
    "passage": "Case 45: High Altitude Competition Preparation"
  },
  {
    "id": "source-2-c-490",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 45: High Altitude Competition Preparation",
    "difficulty": "analytical",
    "text": "How many weeks of continuous hypoxic exposure at 2200-2500m are required to elicit a statistically significant increase in total Red Blood Cell Mass and Hemoglobin mass?",
    "options": [
      "2 days confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "6 months confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Minimum 3 to 4 weeks (over 14 hours/day hypoxic exposure) (in accordance with sports rehabilitation clinical pathways)",
      "12 hours confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 2,
    "explanation": "Significant stimulation of erythropoiesis (erythropoietin upregulation yielding increased total RBC mass and Hb mass) requires a minimum exposure of 3 to 4 weeks at 2200-2500m.",
    "passageId": "source-2-c-45",
    "passage": "Case 45: High Altitude Competition Preparation"
  },
  {
    "id": "source-2-c-491",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 46: Aquatic Therapy Post Multi-Fragment Fracture",
    "difficulty": "analytical",
    "text": "A 27-year-old athlete recovering from lower limb fracture internal fixation is cleared for partial weight-bearing hydrotherapy. Water depth is set at chest height (Xiphoid process). How does buoyancy assist his gait retraining?",
    "options": [
      "Reduces gravitational joint compressive load by ~60-70%, permitting early pain-free normal gait kinematics",
      "Increases joint compressive force confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Eliminates muscle activation confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Cooling body temperature confirmed through clinical reasoning and evidence-based sports rehabilitation"
    ],
    "correct": 0,
    "explanation": "Buoyancy unloads joint axial compressive forces by ~65% at xiphoid depth, enabling gait retraining without exceeding surgical weight-bearing limits.",
    "passageId": "source-2-c-46",
    "passage": "Case 46: Aquatic Therapy Post Multi-Fragment Fracture"
  },
  {
    "id": "source-2-c-492",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 46: Aquatic Therapy Post Multi-Fragment Fracture",
    "difficulty": "analytical",
    "text": "What hydrostatic pressure effect occurs when an athlete is immersed up to the neck in a hydrotherapy pool?",
    "options": [
      "Decreased venous return to the heart confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Hydrostatic pressure compresses distal lower extremity capacitance vessels, promoting venous return and shifting ~500 ml of blood centrally into the thoracic cavity",
      "Severe arterial hypotension confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Loss of pulmonary compliance confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 1,
    "explanation": "Pascal's law dictates that fluid exerts equal pressure at any depth. Immersion compresses peripheral veins, boosting central venous blood return and stroke volume.",
    "passageId": "source-2-c-46",
    "passage": "Case 46: Aquatic Therapy Post Multi-Fragment Fracture"
  },
  {
    "id": "source-2-c-493",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 47: Isokinetic Assessment in Professional Soccer",
    "difficulty": "analytical",
    "text": "Isokinetic dynamometry testing at 60°/sec concentric mode in a professional soccer player yields Concentric Hamstring Peak Torque of 130 Nm and Concentric Quadriceps Peak Torque of 260 Nm. Calculate his conventional Hamstring to Quadriceps (H:Q) ratio.",
    "options": [
      "H:Q ratio = 0.30",
      "H:Q ratio = 0.50",
      "H:Q ratio = 0.75",
      "H:Q ratio = 1.00"
    ],
    "correct": 1,
    "explanation": "Conventional H:Q ratio = Hamstring Concentric Peak Torque / Quadriceps Concentric Peak Torque = 130 / 260 = 0.50 (50%).",
    "passageId": "source-2-c-47",
    "passage": "Case 47: Isokinetic Assessment in Professional Soccer"
  },
  {
    "id": "source-2-c-494",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 47: Isokinetic Assessment in Professional Soccer",
    "difficulty": "analytical",
    "text": "How does a conventional concentric H:Q ratio below 0.55 impact hamstring injury risk in sprinters and soccer players?",
    "options": [
      "Decreases injury risk completely confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Indicates anterior cruciate ligament hypertrophy confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Optimal score for power athletes confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Indicates quadriceps dominance and hamstring strength weakness, significantly increasing hamstring strain risk during high-speed running"
    ],
    "correct": 3,
    "explanation": "A conventional H:Q ratio < 0.55-0.60 reflects inadequate hamstring co-activation relative to quadriceps, predisposing to hamstring strains and ACL injury.",
    "passageId": "source-2-c-47",
    "passage": "Case 47: Isokinetic Assessment in Professional Soccer"
  },
  {
    "id": "source-2-c-495",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 48: FMS Movement Screening in Youth Athletes",
    "difficulty": "analytical",
    "text": "During an FMS Deep Squat screen, an athlete cannot perform a full depth squat with the dowel overhead (torso flexes forward, heels lift). When a 2-inch board is placed under his heels, he performs a perfect deep squat with upright torso. What does this score and modification indicate?",
    "options": [
      "Score 3 (Perfect movement) confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Score 0 (Pain present) confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Score 2 (Movement accomplished with heel elevation modification), indicating ankle dorsiflexion mobility restriction or calf tightness",
      "Score 1 (Inability to perform) confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Achieving a clean deep squat ONLY after elevating heels scores a 2, revealing that closed-chain ankle dorsiflexion restriction is the primary mechanical limiter.",
    "passageId": "source-2-c-48",
    "passage": "Case 48: FMS Movement Screening in Youth Athletes"
  },
  {
    "id": "source-2-c-496",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 48: FMS Movement Screening in Youth Athletes",
    "difficulty": "analytical",
    "text": "If an athlete reports sharp anterior knee pain during any FMS clearing test or movement pattern, what score MUST be assigned for that specific test?",
    "options": [
      "Score 1 confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Score 2 confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Score 3 confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Score 0 (Pain automatically results in a score of 0, requiring clinical medical evaluation)"
    ],
    "correct": 3,
    "explanation": "In the FMS scoring rules, if pain is associated with any part of the screening movement or clearing test, that movement receives a score of 0.",
    "passageId": "source-2-c-48",
    "passage": "Case 48: FMS Movement Screening in Youth Athletes"
  },
  {
    "id": "source-2-c-497",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 49: Off-Field Concussion SCAT6 Examination",
    "difficulty": "analytical",
    "text": "During SCAT6 off-field cognitive testing, an athlete fails to recall 10 words after a 5-minute delay (delayed recall score 3/10) and shows 6 errors on the Modified Balance Error Scoring System (mBESS) single-leg stance. How should these objective deficits be interpreted?",
    "options": [
      "Normal variation due to match fatigue confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Dehydration only confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Malingering confirmed through clinical reasoning and evidence-based sports rehabilitation (in accordance with sports rehabilitation clinical pathways)",
      "Objective cognitive impairment and postural instability consistent with acute concussion, requiring medical protection"
    ],
    "correct": 3,
    "explanation": "Deficits in delayed 10-word recall and elevated mBESS balance errors reflect impaired memory processing and vestibular-somatosensory postural control secondary to concussive brain injury.",
    "passageId": "source-2-c-49",
    "passage": "Case 49: Off-Field Concussion SCAT6 Examination"
  },
  {
    "id": "source-2-c-498",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 49: Off-Field Concussion SCAT6 Examination",
    "difficulty": "analytical",
    "text": "How is the mBESS balance test executed on the SCAT6 battery?",
    "options": [
      "Testing 3 stances (Double-leg, Single-leg on non-dominant foot, Tandem stance) for 20 seconds each on a firm surface with eyes closed, counting postural errors",
      "Dynamic jumping on force plate confirmed through clinical reasoning and evidence-based sports rehabilitation (confirmed via objective functional return-to-sport testing)",
      "Standing on both feet with eyes open for 10 minutes (in accordance with sports rehabilitation clinical pathways)",
      "Walking on a tightrope confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 0,
    "explanation": "mBESS tests 3 static balance postures (double-leg, single-leg non-dominant, tandem) for 20 seconds each with eyes closed, recording errors (e.g., hands off hips, opening eyes, stepping).",
    "passageId": "source-2-c-49",
    "passage": "Case 49: Off-Field Concussion SCAT6 Examination"
  },
  {
    "id": "source-2-c-499",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 50: Final Return-to-Competition Clearance Evaluation",
    "difficulty": "analytical",
    "text": "A 24-year-old elite badminton player is evaluated for final return to international competition 9 months post-Achilles tendon repair. She demonstrates 96% calf heel-raise endurance LSI, 94% Y-Balance Test symmetry, 95% single-leg hop distance LSI, zero pain during 45 minutes of high-intensity court drills, and an ACL/Injury Psychological Readiness score of 88/100. What is the multidisciplinary team decision?",
    "options": [
      "Refuse clearance because 12 months is mandatory for all injuries (based on multidisciplinary clinical decision-making)",
      "Permit non-contact practice only confirmed through clinical reasoning and evidence-based sports rehabilitation",
      "Require 6 additional months of bed rest (in accordance with sports rehabilitation clinical pathways)",
      "Clear the athlete for full unrestricted return to competitive match play (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 3,
    "explanation": "The athlete fulfills all objective physical strength (LSI >90%), dynamic balance, functional hop performance, sport-specific match simulation, and high psychological readiness, justifying full clearance.",
    "passageId": "source-2-c-50",
    "passage": "Case 50: Final Return-to-Competition Clearance Evaluation"
  },
  {
    "id": "source-2-c-500",
    "section": "C",
    "topic": "Case-study analysis",
    "subtopic": "Case study: Case 50: Final Return-to-Competition Clearance Evaluation",
    "difficulty": "analytical",
    "text": "What final ongoing monitoring protocol should be maintained by the Sports Authority of India Performance Analyst team during her initial 3 months back in competition?",
    "options": [
      "Stop all load monitoring immediately confirmed through clinical reasoning and evidence-based sports rehabilitation (based on multidisciplinary clinical decision-making)",
      "Restricting match play to 5 minutes total (confirmed via objective functional return-to-sport testing)",
      "Longitudinal load monitoring (ACWR 0.8-1.3), tracking subjective fatigue/DOMS, conducting bi-weekly Achilles tendon ultrasound/stiffness checks, and maintaining supportive eccentric calf conditioning",
      "Daily invasive muscle biopsy confirmed through clinical reasoning and evidence-based sports rehabilitation (evaluated across comprehensive athlete monitoring batteries)"
    ],
    "correct": 2,
    "explanation": "Post-return clearance requires ongoing longitudinal workload monitoring (maintaining ACWR in safe zone), monitoring recovery markers, and continuing maintenance eccentric strengthening to prevent secondary injury.",
    "passageId": "source-2-c-50",
    "passage": "Case 50: Final Return-to-Competition Clearance Evaluation"
  }
];
