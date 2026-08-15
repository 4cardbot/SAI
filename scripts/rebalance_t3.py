import json

def rebalance_t3():
    with open('mock_tests/mock_test_3.json') as f:
        qs = json.load(f)

    updates = {
        "t3-a1-002": {
            "options": [
                "Pairing continuous aerobic cycling with high-repetition machine bicep curls (e.g., endurance)",
                "Pairing a heavy resistance movement with a biomechanically similar plyometric drill (e.g., PAPE)",
                "Pairing multiple single-joint isolation exercises performed to muscular exhaustion (e.g., fatigue)",
                "Pairing passive static stretching with continuous low-intensity hypoxic treadmill runs (e.g., aerobic)"
            ]
        },
        "t3-a1-005": {
            "options": [
                "Lifting submaximal loads (e.g., 50–60% 1RM) with maximal intentional acceleration and movement velocity",
                "Lifting supramaximal loads (e.g., 100–105% 1RM) with slow eccentric tempos and prolonged isometric holds",
                "Lifting near-maximal loads (e.g., 90–95% 1RM) to absolute concentric failure across repeated single sets",
                "Lifting light endurance loads (e.g., 20–30% 1RM) for continuous uninterrupted sets lasting several minutes"
            ]
        },
        "t3-a1-006": {
            "options": [
                "15 to 30 seconds of high-intensity intermittent work bouts",
                "30 to 90 seconds of sustained near-maximal anaerobic efforts",
                "3 to 5 minutes of steady-state submaximal endurance exercise",
                "0 to 5 seconds of instantaneous explosive power efforts"
            ]
        },
        "t3-a1-007": {
            "options": [
                "Increased sympathetic tone elevating resting cardiac rate to peak values",
                "Enhanced beta-adrenergic receptor sensitivity elevating resting rhythm",
                "Increased resting parasympathetic vagal tone and elevated stroke volume",
                "Suppression of sinoatrial pacemaker activity causing acute AV block"
            ]
        },
        "t3-a1-008": {
            "options": [
                "Rightward shift of the oxyhemoglobin dissociation curve (Bohr effect)",
                "Leftward shift of the oxyhemoglobin dissociation curve (Haldane effect)",
                "Inhibition of oxygen unloading at active skeletal muscles (Hamburger shift)",
                "Downregulation of all mitochondrial respiratory enzymes (Warburg effect)"
            ]
        },
        "t3-a1-009": {
            "options": [
                "Arterial oxygen saturation elevation above normal limits (EIAO)",
                "Exercise-induced arterial hypoxemia due to diffusion limits (EIAH)",
                "Alveolar hypoventilation leading to severe arterial hypercapnia (EIAH)",
                "Excessive pulmonary vascular resistance limiting cardiac index (EPVR)"
            ]
        },
        "t3-a1-010": {
            "options": [
                "50% to 60% of VO2max (aerobic base training zone)",
                "10% to 20% of VO2max (sedentary resting zone)",
                "65% to 75% of VO2max (anaerobic threshold boundary)",
                "60% to 65% of VO2max (optimal fat oxidation zone)"
            ]
        },
        "t3-a1-011": {
            "options": [
                "Continuous steady shivering thermogenesis elevating basal metabolic rate",
                "Cutaneous vasoconstriction to conserve heat, elevating central blood volume and diuresis",
                "Massive peripheral vasodilation increasing skin blood flow to warm extremities",
                "Rapid suppression of core metabolic heat production to conserve glycogen stores"
            ]
        },
        "t3-a1-012": {
            "options": [
                "10 to 12 grams of carbohydrate per kilogram of body weight per day",
                "2 to 3 grams of carbohydrate per kilogram of body weight per day",
                "5 to 7 grams of carbohydrate per kilogram of body weight per day",
                "0.5 to 1 gram of carbohydrate per kilogram of body weight per day"
            ]
        },
        "t3-a1-013": {
            "options": [
                "0.25 to 0.40 g/kg (approximately 20–40 g) distributed evenly every 3–4 hours",
                "0.05 to 0.10 g/kg (approximately 5–10 g) consumed once daily before morning sleep",
                "1.00 to 1.50 g/kg (approximately 80–120 g) consumed in a single mega-dose at night",
                "0.01 to 0.02 g/kg (approximately 1–2 g) consumed continuously every thirty minutes"
            ]
        },
        "t3-a1-014": {
            "options": [
                "Severe gastrointestinal distress caused by hypertonic carbohydrate beverages",
                "Exercise-associated hyponatremia caused by excessive plain fluid intake",
                "Acute intracellular dehydration caused by excessive sodium tablet ingestion",
                "Severe glycogen depletion accompanied by elevated core body temperature"
            ]
        },
        "t3-a1-015": {
            "options": [
                "Increases resting blood pressure to accelerate arterial oxygen delivery to muscles",
                "Inhibits peripheral motor neuron firing to prevent premature central muscle fatigue",
                "Antagonizes central adenosine receptors, reducing perceived exertion and enhancing alertness",
                "Directly stimulates mitochondrial biogenesis within fast-twitch glycolytic motor units"
            ]
        },
        "t3-a1-016": {
            "options": [
                "Excessive fat intake with elevated bone mineral density and amenorrhea",
                "Low energy availability, menstrual dysfunction, and low bone mineral density",
                "High protein intake, polycystic ovarian syndrome, and patellar tendinopathy",
                "Severe dehydration, hyperandrogenism, and elevated thyroid hormone activity"
            ]
        },
        "t3-a1-017": {
            "options": [
                "High relative adiposity and fat storage (Endomorphy dominant)",
                "Extreme linearity and slender fragility (Ectomorphy dominant)",
                "Musculoskeletal development and robustness (Mesomorphy dominant)",
                "Equal balanced morphological proportionality (Central dominant)"
            ]
        },
        "t3-a1-018": {
            "options": [
                "65.0 kg (requiring 5 kg lean mass loss)",
                "70.2 kg (requiring 7.8 kg body fat loss)",
                "75.0 kg (requiring zero body mass change)",
                "80.5 kg (requiring 2.5 kg muscle gain)"
            ]
        },
        "t3-a1-019": {
            "options": [
                "Girls reach PHV approximately two years earlier than boys during adolescence",
                "Boys reach PHV approximately two years earlier than girls during adolescence",
                "Both sexes reach PHV at the identical chronological age during adolescence",
                "Both sexes reach PHV at completely random intervals during adolescence"
            ]
        },
        "t3-a1-020": {
            "options": [
                "Disproportionately longer upper torso (higher sitting height ratio)",
                "Disproportionately longer lower limbs (lower sitting height ratio)",
                "Symmetrical body proportionality (balanced sitting height ratio)",
                "Narrow shoulder to hip breadth (reduced bicristal breadth ratio)"
            ]
        },
        "t3-a1-021": {
            "options": [
                "Athletes born in the final month of the selection year receive preferential coaching support",
                "Over-representation of athletes born early in the selection year due to physical maturation advantages",
                "Equal distribution of talent across all birth quartiles in competitive age-group sports",
                "Preferential selection of biologically late-maturing athletes for senior international teams"
            ]
        },
        "t3-a1-022": {
            "options": [
                "Moderate arousal optimizes all motor tasks (Inverted-U Hypothesis)",
                "Severe anxiety triggers catastrophic drops (Catastrophe Model)",
                "Optimal arousal bandwidth varies per athlete (IZOF Model)",
                "Arousal and performance show zero correlation (Null Association)"
            ]
        },
        "t3-a1-023": {
            "options": [
                "Biofeedback training via autonomic monitoring",
                "Progressive muscle relaxation via tension-release",
                "Cognitive thought stopping via internal dialogue",
                "Autogenic training via sensations of warmth"
            ]
        },
        "t3-a1-024": {
            "options": [
                "Extrinsic motivation driven by tangible financial rewards and trophies",
                "Amotivation characterized by complete absence of athletic intent",
                "Introjected regulation driven by internal pressure and guilt avoidance",
                "Intrinsic motivation driven by inherent enjoyment, interest, and satisfaction"
            ]
        },
        "t3-a1-025": {
            "options": [
                "Tendency of individuals to exert less effort when working collectively in a group",
                "Enhanced individual motor output resulting from positive peer group support",
                "Complete loss of tactical decision-making ability under high cognitive match stress",
                "Spontaneous coordination failure occurring among unfamiliar team members in competition"
            ]
        },
        "t3-a1-026": {
            "options": [
                "Competitiveness, time urgency, impatience, and high achievement striving (Type A behavior)",
                "Relaxed demeanor, patience, low competitive drive, and emotional stability (Type B behavior)",
                "Introversion, high neuroticism, social withdrawal, and passive acceptance (Type C behavior)",
                "Negative affectivity, social inhibition, chronic worry, and low self-esteem (Type D behavior)"
            ]
        },
        "t3-a1-027": {
            "options": [
                "Elevated testosterone-to-cortisol ratio indicating high anabolic adaptation",
                "Depressed serum cortisol with normal resting heart rate and sleep architecture",
                "Elevated circulating cortisol with reduced testosterone indicating catabolic stress",
                "Immediate drop in serum creatine kinase to absolute undetectable baseline levels"
            ]
        },
        "t3-a1-028": {
            "options": [
                "High autonomic parasympathetic vagal modulation and excellent physiological recovery",
                "Sympathetic hyperactivation or parasympathetic saturation indicating severe fatigue/overreaching",
                "Optimal cardiovascular fitness and readiness for maximal competitive match performance",
                "Complete recovery of muscle glycogen stores following intense interval conditioning"
            ]
        },
        "t3-a1-029": {
            "options": [
                "10 Hz to 20 Hz (monitoring low-velocity walking movements)",
                "50 Hz to 100 Hz (monitoring moderate-velocity jogging drills)",
                "1000 Hz or higher (capturing rapid impacts and rate of force development)",
                "1 Hz to 5 Hz (monitoring slow static postural balance adjustments)"
            ]
        },
        "t3-a1-030": {
            "options": [
                "Failing to reject a false null hypothesis (Type II error)",
                "Rejecting a true null hypothesis in error (Type I error)",
                "Obtaining low statistical testing power (Type III error)",
                "Accepting an invalid study hypothesis (Type IV error)"
            ]
        },
        "t3-a1-031": {
            "options": [
                "Technical error of measurement (TEM evaluation)",
                "Subjective face and content validity (FCV evaluation)",
                "Prospective criterion-related validity (CRV evaluation)",
                "Theoretical construct validity (TCV evaluation)"
            ]
        },
        "t3-a1-032": {
            "options": [
                "Spearman's rank correlation coefficient (non-parametric rank test)",
                "Two-way mixed model Analysis of Variance (two-way mixed ANOVA test)",
                "Chi-square test of homogeneity (categorical cross-tabulation test)",
                "Mann-Whitney U test (non-parametric two independent group test)"
            ]
        },
        "t3-a2-001": {
            "options": [
                "Khelo India Winter Games (Gulmarg and Leh venues)",
                "Khelo India Para Games (New Delhi national venues)",
                "Khelo India University Games (multi-campus college venues)",
                "Khelo India Youth Games (national youth U-18 venues)"
            ]
        },
        "t3-a2-002": {
            "options": [
                "Dhyan Chand Lifetime Achievement Award in Sports and Games",
                "Major Dhyan Chand Khel Ratna Award for athletic excellence",
                "Rashtriya Khel Protsahan Puruskar for corporate sports support",
                "Dronacharya Award for Outstanding Coaches in Sports and Games"
            ]
        },
        "t3-a2-003": {
            "options": [
                "P1: Beta-blockers (prohibited in-competition in specific precision sports)",
                "S1: Anabolic agents (prohibited at all times across all sports)",
                "S6: Stimulants (prohibited strictly during in-competition testing)",
                "S9: Glucocorticoids (prohibited in-competition via oral routes)"
            ]
        },
        "t3-a2-004": {
            "options": [
                "Presence of a prohibited substance in an athlete's biological sample",
                "Use or attempted use of a prohibited pharmacological substance",
                "Evading, refusing, or failing to submit to sample collection",
                "All of the above constitute distinct anti-doping violations"
            ]
        },
        "t3-a2-005": {
            "options": [
                "Retroactive TUE is granted if emergency medical intervention was required",
                "Retroactive TUE is granted if the athlete was unaware of prohibited status",
                "Retroactive TUE is granted if application was omitted before competition",
                "Retroactive TUE is granted automatically to all junior youth category athletes"
            ]
        },
        "t3-a2-006": {
            "options": [
                "Brisbane, Australia (2032 Summer Olympic Games)",
                "Melbourne, Australia (2026 Commonwealth Games)",
                "Sydney, Australia (2000 Summer Olympic Games)",
                "Gold Coast, Australia (2018 Commonwealth Games)"
            ]
        },
        "t3-a2-007": {
            "options": [
                "World Athletics (WA) headquartered in Monaco",
                "International Olympic Committee (IOC) headquartered in Lausanne",
                "Badminton World Federation (BWF) headquartered in Kuala Lumpur",
                "International Hockey Federation (FIH) headquartered in Lausanne"
            ]
        },
        "t3-a2-008": {
            "options": [
                "Age limit of 70 years and maximum cumulative tenure limits for office bearers",
                "Age limit of 50 years and mandatory lifelong tenure appointments for presidents",
                "Age limit of 90 years and unrestricted consecutive terms for all executive posts",
                "Age limit of 40 years and mandatory rotation of all active executive delegates"
            ]
        },
        "t3-b-001": {
            "options": [
                "Passive knee flexion with the hip held at zero degrees extension",
                "Full passive hip flexion combined with knee flexion to ninety degrees",
                "Passive knee flexion performed with the athlete lying in prone position",
                "Full active hip abduction performed with the athlete in side-lying position"
            ]
        },
        "t3-b-002": {
            "options": [
                "Supraspinatus tendinopathy or subacromial bursal impingement",
                "Subscapularis tendon rupture or upper subscapular nerve entrapment",
                "Biceps brachii long head tendinopathy or SLAP labral tear lesion",
                "Infraspinatus muscle strain or suprascapular nerve entrapment"
            ]
        },
        "t3-b-003": {
            "options": [
                "Anterior drawer test performed at 90° knee flexion with neutral tibial rotation",
                "Slocum test performed at 90° knee flexion with 30° internal tibial rotation",
                "Posterior drawer test performed at 90° knee flexion with neutral tibial rotation",
                "Hughston test performed at 90° knee flexion with 15° external tibial rotation"
            ]
        },
        "t3-b-004": {
            "options": [
                "Lateral collateral ligament (LCL) of the knee joint",
                "Anterior cruciate ligament (ACL) anteromedial bundle",
                "Medial collateral ligament (MCL) superficial and deep fibers",
                "Posterior cruciate ligament (PCL) posterolateral bundle"
            ]
        },
        "t3-b-005": {
            "options": [
                "Subscapularis tendon rupture (subscapular nerve lesion)",
                "Infraspinatus or Teres Minor muscle weakness (external rotation lag)",
                "Supraspinatus tendon complete tear (suprascapular nerve entrapment)",
                "Pectoralis major clavicular head avulsion (lateral pectoral nerve lesion)"
            ]
        },
        "t3-b-006": {
            "options": [
                "Full passive knee flexion with external tibial rotation producing medial joint line click",
                "Full passive knee flexion with internal tibial rotation producing lateral joint line click",
                "Full passive knee extension with axial compression producing anterior pain",
                "Prone knee flexion at 90° with distraction producing joint capsule stretch"
            ]
        },
        "t3-b-007": {
            "options": [
                "Hip flexion contracture or iliopsoas structural tightness",
                "Gluteus medius weakness or superior gluteal nerve palsy",
                "Hamstring muscle contracture or sciatic nerve irritability",
                "Rectus femoris contracture or femoral nerve entrapment"
            ]
        },
        "t3-b-008": {
            "options": [
                "Delorme progressive resistance exercise system (PRE)",
                "Oxford regressive resistance exercise system (RRE)",
                "Daily adjustable progressive resistance exercise system (DAPRE)",
                "Isometric maximal voluntary contraction system (MVC)"
            ]
        },
        "t3-b-009": {
            "options": [
                "3 sets of 15 repetitions on a decline board, performed twice daily for 12 weeks",
                "1 set of 30 repetitions on flat ground, performed once weekly for 6 weeks",
                "5 sets of 5 repetitions with heavy loads, performed once daily for 4 weeks",
                "2 sets of 20 repetitions with light bands, performed alternate days for 8 weeks"
            ]
        },
        "t3-b-010": {
            "options": [
                "Reciprocal inhibition via muscle spindle Ia afferents of antagonist muscle",
                "Autogenic inhibition via Golgi tendon organ Ib afferents of target muscle",
                "Cutaneous reflex excitation via tactile mechanoreceptors of joint capsule",
                "Gamma motor neuron activation increasing baseline muscle spindle discharge"
            ]
        },
        "t3-b-011": {
            "options": [
                "Grade I (small amplitude oscillation at the beginning of range)",
                "Grade II (large amplitude oscillation within the mid-range)",
                "Grade III (large amplitude oscillation extending to the end of range)",
                "Grade IV (small amplitude oscillation performed at the end of range)"
            ]
        },
        "t3-b-012": {
            "options": [
                "Sustained tendon stress without joint motion, reducing cortical pain and tendon strain",
                "High-velocity stretch reflex activation accelerating tendon collagen synthesis",
                "Rapid joint oscillation stimulating synovial fluid secretion and cartilage healing",
                "Continuous passive stretching reducing muscle spindle sensitivity and tone"
            ]
        },
        "t3-b-013": {
            "options": [
                "High-velocity ballistic movements performed through terminal joint range",
                "Multi-angle isometric holds performed at submaximal voluntary effort",
                "Rapid stretch-shortening plyometric jumps on hard concrete surfaces",
                "Heavy dynamic eccentric loading performed to complete muscle failure"
            ]
        },
        "t3-b-014": {
            "options": [
                "Supraspinatus initiates abduction (0°–15°); Deltoid drives mid-to-late abduction (15°–90°)",
                "Deltoid initiates abduction (0°–15°); Supraspinatus drives mid-to-late abduction (15°–90°)",
                "Infraspinatus initiates abduction (0°–15°); Teres Major drives mid-to-late abduction (15°–90°)",
                "Subscapularis initiates abduction (0°–15°); Pectoralis Major drives mid-to-late abduction (15°–90°)"
            ]
        },
        "t3-b-015": {
            "options": [
                "Tibia rotates externally on the femur during the final 30 degrees of open-chain extension",
                "Tibia rotates internally on the femur during the final 30 degrees of open-chain extension",
                "Femur rotates externally on the tibia during the initial 30 degrees of closed-chain flexion",
                "Femur translates posteriorly on the tibia during the final 10 degrees of open-chain extension"
            ]
        },
        "t3-b-016": {
            "options": [
                "Popliteus muscle (internally rotates the tibia in open chain to unlock the knee)",
                "Quadriceps femoris (externally rotates the tibia in open chain to unlock the knee)",
                "Gastrocnemius muscle (plantarflexes the ankle to unlock the extended knee)",
                "Biceps femoris muscle (externally rotates the femur in closed chain to unlock the knee)"
            ]
        },
        "t3-b-017": {
            "options": [
                "Third-class lever (effort applied between fulcrum and resistance load)",
                "Second-class lever (resistance load located between fulcrum and effort)",
                "First-class lever (fulcrum located between effort and resistance load)",
                "Fourth-class lever (effort and load acting in identical parallel directions)"
            ]
        },
        "t3-b-018": {
            "options": [
                "First-class lever (effort - load - fulcrum)",
                "Second-class lever (fulcrum - load - effort)",
                "Third-class lever (fulcrum - effort - load)",
                "First-class lever (fulcrum - effort - load)"
            ]
        },
        "t3-b-019": {
            "options": [
                "0° of knee flexion during standing balance",
                "20° to 30° of knee flexion during walking",
                "60° to 90° of knee flexion during deep squats",
                "120° to 140° of knee flexion during kneeling"
            ]
        },
        "t3-b-020": {
            "options": [
                "Initial contact phase (heel strike)",
                "Loading response phase (weight capture)",
                "Mid-stance phase (single-limb support)",
                "Initial swing phase (peak knee flexion)"
            ]
        },
        "t3-b-021": {
            "options": [
                "Hip abductor weakness (gluteus medius muscle deficit)",
                "Quadriceps weakness (vastus medialis muscle deficit)",
                "Gastrocnemius contracture (posterior ankle deficit)",
                "Ankle dorsiflexor paralysis (tibialis anterior deficit)"
            ]
        },
        "t3-b-022": {
            "options": [
                "Weakness of the ankle dorsiflexors (deep peroneal nerve palsy)",
                "Spasticity of the quadriceps femoris (femoral nerve lesion)",
                "Contracture of the iliopsoas muscle (lumbar plexus lesion)",
                "Weakness of the gluteus maximus muscle (inferior gluteal nerve palsy)"
            ]
        },
        "t3-b-023": {
            "options": [
                "Substantial high-quality evidence demonstrating long-term functional recovery",
                "Limited or no clinically meaningful benefit over placebo in chronic low back pain",
                "Strong evidence demonstrating superiority over active exercise therapy programs",
                "Established primary first-line intervention recommended in all clinical guidelines"
            ]
        },
        "t3-b-024": {
            "options": [
                "Chronic non-specific low back pain rehabilitation",
                "Acute post-operative pain and acute musculoskeletal trauma",
                "Structural spinal scoliosis deformity correction",
                "Reversal of central spasticity following ischemic stroke"
            ]
        },
        "t3-b-025": {
            "options": [
                "Lachman test (evaluates anterior tibial translation at 20° to 30° flexion)",
                "Anterior drawer test (evaluates anterior tibial translation at 90° flexion)",
                "Pivot shift test (evaluates dynamic rotatory subluxation at 30° flexion)",
                "McMurray test (evaluates posterior horn meniscal fibrocartilage tears)"
            ]
        },
        "t3-b-026": {
            "options": [
                "Structural cartilage regeneration and reversal of joint space narrowing",
                "Significant reduction in pain and meaningful improvement in physical function",
                "Complete elimination of subchondral bone sclerosis on plain radiographs",
                "Restoration of pristine juvenile hyaline cartilage across the joint"
            ]
        },
        "t3-b-027": {
            "options": [
                "Significant reduction in resting muscle spasticity scores",
                "Meaningful improvement in functional task performance and motor ability",
                "Complete restoration of normal monosynaptic stretch reflex latency",
                "Full recovery of tactile sensory thresholds across dermatomes"
            ]
        },
        "t3-b-028": {
            "options": [
                "Demonstrate at least 30° active shoulder abduction and 30° elbow extension",
                "Demonstrate at least 10° active wrist extension and 10° finger extension",
                "Demonstrate at least 45° active hip flexion and 45° knee flexion extension",
                "Demonstrate at least 20° active ankle dorsiflexion and 20° plantarflexion"
            ]
        },
        "t3-b-029": {
            "options": [
                "Grade I (microscopic tearing with no laxity, <5 mm translation)",
                "Grade II (partial tearing with moderate laxity, 5–10 mm translation)",
                "Grade III (complete disruption with gross laxity, >10 mm translation)",
                "Grade IV (complete rupture with vascular compromise, >20 mm translation)"
            ]
        },
        "t3-b-030": {
            "options": [
                "Centralization of symptoms (distal pain moves proximally toward spine)",
                "Peripheralization of symptoms (proximal pain radiates into extremities)",
                "Directional preference abolition (pain intensity remains unaffected)",
                "Segmental spinal stabilization (lumbar multifidus firing normalizes)"
            ]
        },
        "t3-b-031": {
            "options": [
                "Straight Leg Raise test (SLR)",
                "Prone Knee Bend test (PKB)",
                "Dynamic Slump test (DST)",
                "Upper Limb Tension test (ULTT)"
            ]
        },
        "t3-b-032": {
            "options": [
                "A continuous uninterrupted increase in local cutaneous blood flow",
                "A sustained vasoconstriction preventing all peripheral tissue re-warming",
                "Initial vasoconstriction followed by cyclical cold-induced vasodilation",
                "Immediate neurogenic reflex vasospasm resulting in local tissue necrosis"
            ]
        },
        "t3-b-033": {
            "options": [
                "Mulligan Mobilization with Movement (MWM)",
                "Maitland passive joint oscillation (PJO)",
                "Kaltenborn linear joint traction (KLT)",
                "Cyriax deep friction massage (DFM)"
            ]
        },
        "t3-b-034": {
            "options": [
                "Infraspinatus muscle tendon (external rotator)",
                "Supraspinatus muscle tendon (abductor initiator)",
                "Subscapularis muscle tendon (internal rotator)",
                "Teres minor muscle tendon (external rotator)"
            ]
        },
        "t3-b-035": {
            "options": [
                "Loading response (first 10% of the normal gait cycle)",
                "Mid-stance phase (single-limb support weight-bearing)",
                "Terminal stance phase (heel rise to opposite initial contact)",
                "Initial swing phase (peak knee flexion reaches ~60°)"
            ]
        },
        "t3-b-036": {
            "options": [
                "High-repetition low-load endurance resistance training protocols",
                "Isometric training protocols performed at single joint angles",
                "Progressive resistance exercise protocols (PRE Delorme/Oxford)",
                "Passive stretching programs performed without active muscle load"
            ]
        },
        "t3-b-037": {
            "options": [
                "Acute skeletal muscle strain with localized intramuscular hematoma",
                "Patellofemoral pain syndrome with lateral retinacular tightness",
                "Chronic tendinopathies of the Achilles tendon and patellar tendon",
                "Gross ligamentous joint instability requiring surgical repair"
            ]
        },
        "t3-b-038": {
            "options": [
                "Acute hamstring muscle strain with localized intramuscular hematoma",
                "Chronic plantar fasciitis and calcific tendinopathy of the rotator cuff",
                "Complete grade III anterior cruciate ligament rupture with hemarthrosis",
                "Severe spastic quadriplegia resulting from acute ischemic spinal stroke"
            ]
        },
        "t3-b-039": {
            "options": [
                "Initial contact phase (heel strike event)",
                "Loading response phase (weight acceptance)",
                "Terminal stance phase (propulsive heel rise)",
                "Pre-swing phase (terminal stance unloading)"
            ]
        },
        "t3-b-040": {
            "options": [
                "Progressive resistance training regimens",
                "Isometric training at single joint angles",
                "Low-load high-repetition aerobic training",
                "Passive flexibility stretching routines"
            ]
        },
        "t3-c-001": {
            "options": [
                "Supraspinatus tendon complete tear (SAIS lesion)",
                "Subacromial Impingement Syndrome (SAIS lesion)",
                "Glenohumeral Anterior Instability (GAI lesion)",
                "Adhesive Capsulitis / Frozen Shoulder (AC lesion)"
            ]
        },
        "t3-c-002": {
            "options": [
                "Upper Trapezius and Levator Scapulae (elevation force couple)",
                "Pectoralis Major and Latissimus Dorsi (depressor force couple)",
                "Serratus Anterior, Upper Trapezius, and Lower Trapezius (upward rotation)",
                "Rhomboid Major, Rhomboid Minor, and Pectoralis Minor (downward rotation)"
            ]
        },
        "t3-c-003": {
            "options": [
                "Sleeper stretch and cross-body adduction stretching for the posterior capsule",
                "Doorway stretching in maximal external rotation for the anterior capsule",
                "Overhead bar hangs without stabilization for the inferior glenohumeral ligament",
                "Standing wall stretches with cervical lateral flexion for the upper trapezius"
            ]
        },
        "t3-c-004": {
            "options": [
                "Shoulder immobilizer sling for four weeks with absolute avoidance of movement",
                "Serratus Anterior wall slides, Lower Trapezius Y-raises, and external rotation",
                "Behind-the-neck heavy lat pulldowns and overhead barbell presses to failure",
                "Heavy shoulder shrugs and upright barbell rows to fatigue using maximum loads"
            ]
        },
        "t3-c-005": {
            "options": [
                "Knee cylinder casting for 12 weeks with absolute non-weight-bearing crutches",
                "High-impact plyometric jumping performed daily on hard concrete surfaces",
                "Intratendinous corticosteroid injection directly into the patellar tendon core",
                "Isometric Spanish squats, Heavy Slow Resistance, energy storage, and sport return"
            ]
        },
        "t3-c-006": {
            "options": [
                "They produce rapid vastus medialis hypertrophy and premature apophyseal closure",
                "They are classified as prohibited stimulants on the WADA in-competition list",
                "They inhibit tenocyte collagen synthesis and significantly increase tendon rupture risk",
                "They cause permanent ligamentous hyper-laxity and complete joint dislocation"
            ]
        },
        "t3-c-007": {
            "options": [
                "Flexor Carpi Radialis and Palmaris Longus in carpal tunnel",
                "Extensor Carpi Ulnaris and Extensor Digiti Minimi in wrist",
                "Abductor Pollicis Longus and Extensor Pollicis Brevis in thumb",
                "Extensor Pollicis Longus and Extensor Indicis in forearm"
            ]
        },
        "t3-c-008": {
            "options": [
                "Immediate surgical tenotomy on the field within twenty-four hours of symptom onset",
                "Passive manual manipulation into extreme painful ulnar deviation under heavy force",
                "Thumb spica splinting, relative rest from flicking, eccentric loading, and nerve glides",
                "Heavy wrist flexor barbell curls with 20 kg loads to strengthen forearm musculature"
            ]
        },
        "t3-c-009": {
            "options": [
                "Hinged knee bracing (0°–90°), protected weight-bearing, and quad strengthening",
                "Plaster cylinder casting (0°–10°), non-weight-bearing crutches, and bed rest",
                "Emergency surgical repair (0°–30°), immediate tendon graft, and immobilization",
                "Rigid knee immobilizer (30°–60°), electrical stimulation, and passive stretching"
            ]
        },
        "t3-c-010": {
            "options": [
                "Absence of swelling on palpation (LSI ≥50%)",
                "Full pain-free active knee ROM and quadriceps strength (LSI ≥90%)",
                "Ability to walk 100 meters with braces (LSI ≥60%)",
                "Normal plain radiography of joint space (LSI ≥40%)"
            ]
        },
        "t3-c-011": {
            "options": [
                "Osgood-Schlatter Disease (osteochondrosis of the tibial tuberosity)",
                "Bipartite Patella Syndrome (developmental fragmentation of patella)",
                "Sinding-Larsen-Johansson Syndrome (osteochondrosis of patellar pole)",
                "Osteochondritis Dissecans (subchondral bone necrosis of femoral condyle)"
            ]
        },
        "t3-c-012": {
            "options": [
                "Strict permanent bed rest and complete lifetime cessation of all physical activities",
                "Immediate intratendinous injection of high-dose corticosteroids into the patellar pole",
                "Surgical excision of the distal patellar pole under general anesthesia in hospital",
                "Activity load management, quadriceps flexibility, and non-impact cross-training"
            ]
        },
        "t3-c-013": {
            "options": [
                "Plantar Fasciitis (PF) at the medial calcaneal tuberosity",
                "Tarsal Navicular Stress Fracture (high-risk bone stress)",
                "First Metatarsophalangeal Gout (acute inflammatory arthritis)",
                "Peroneus Brevis Avulsion (fifth metatarsal styloid fracture)"
            ]
        },
        "t3-c-014": {
            "options": [
                "It consistently causes acute systemic bacterial osteomyelitis in the foot joints",
                "It heals completely within forty-eight hours without requiring clinical precautions",
                "It causes immediate irreversible motor paralysis of the tibial and peroneal nerves",
                "The central third is a watershed avascular zone with high risk of delayed or non-union"
            ]
        },
        "t3-c-015": {
            "options": [
                "Structural graft rupture (extensor tendon disruption)",
                "Gastrocnemius spasticity (ankle plantarflexor contracture)",
                "Arthrogenic Muscle Inhibition (quadriceps motor deficit)",
                "Hamstring contracture (posterior knee capsular tightness)"
            ]
        },
        "t3-c-017": {
            "options": [
                "Significantly elevated risk (over 2.5× higher) for lower extremity injury",
                "Significantly reduced risk (over 2.5× lower) for lower extremity injury",
                "Slightly elevated risk (over 1.1× higher) for lower extremity injury",
                "Slightly reduced risk (over 1.1× lower) for lower extremity injury"
            ]
        },
        "t3-c-018": {
            "options": [
                "Non-weight-bearing casting for four weeks (NWB protocol)",
                "Therapeutic ultrasound over lateral malleolus (US protocol)",
                "Passive plantarflexor strengthening in neutral (PF protocol)",
                "Mulligan Mobilization with Movement talar glide (MWM protocol)"
            ]
        },
        "t3-c-019": {
            "options": [
                "Malingering behavior without physical anatomical pathology in the lumbar spine",
                "Centralization phenomenon indicating a reducing posterior disc derangement",
                "Functional spinal instability requiring immediate multi-level fusion surgery",
                "Peripheralization phenomenon indicating progressive worsening of nerve impingement"
            ]
        },
        "t3-c-020": {
            "options": [
                "Repeated passive and active lumbar extension in prone positions",
                "Repeated passive and active lumbar flexion in sitting positions",
                "Continuous full-body rotational spinal manipulation to end-range",
                "Heavy seated deadlifts with rounded lumbar flexion to fatigue"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_3.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_3.json successfully!")

if __name__ == '__main__':
    rebalance_t3()

# re-run with final 2 fixes
with open('mock_tests/mock_test_3.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't3-b-025':
        q['options'] = [
            "Lachman test (anterior translation at 30° flexion)",
            "Anterior drawer test (anterior translation at 90° flexion)",
            "Pivot shift test (dynamic subluxation at 30° flexion)",
            "McMurray test (meniscal pain reproduction at 90° flexion)"
        ]
    if q['id'] == 't3-b-036':
        q['options'] = [
            "High-repetition low-load endurance resistance training",
            "Isometric training performed at single joint angles",
            "Progressive resistance exercise training programs",
            "Passive stretching programs performed without active loading"
        ]

with open('mock_tests/mock_test_3.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 3 fully patched!")
