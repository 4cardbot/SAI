import json

def rebalance_t7():
    with open('mock_tests/mock_test_7.json') as f:
        qs = json.load(f)

    updates = {
        "t7-a1-001": {
            "options": [
                "Lifting maximum loads with slow tempo (e.g., 90–95% 1RM) across all training sets",
                "Lifting light loads with maximum intent (e.g., 30–60% 1RM) to maximize bar velocity",
                "Lifting endurance loads to failure (e.g., 20–30% 1RM) for continuous extended sets",
                "Holding static isometric postures at 90 degrees joint angle until muscular exhaustion"
            ]
        },
        "t7-a1-002": {
            "options": [
                "Transient post-exercise increase in muscle twitch force output following a conditioning contraction (PAPE)",
                "Immediate reduction in muscle motor unit recruitment thresholds following static flexibility stretching",
                "Sustained inhibition of muscle spindle Ia afferents following rapid ballistic stretch-shortening movements",
                "Chronic structural increase in myofibrillar cross-sectional area following low-intensity aerobic cycling"
            ]
        },
        "t7-a1-003": {
            "options": [
                "8 to 12 repetitions at 67% to 85% 1RM (hypertrophy)",
                "1 to 3 repetitions at 90% to 100% 1RM (maximal strength)",
                "4 to 6 repetitions at 80% to 88% 1RM (strength-power)",
                "15 to 25 repetitions at 50% to 60% 1RM (endurance)"
            ]
        },
        "t7-a1-004": {
            "options": [
                "Decreased pennation angle and selective atrophy of fast-twitch motor units",
                "Increased pennation angle and expansion of myofibrillar cross-sectional area",
                "Decreased intracellular glycogen storage capacity in active skeletal muscles",
                "Selective reduction of resting motor unit recruitment thresholds in fibers"
            ]
        },
        "t7-a1-005": {
            "options": [
                "Phosphagen system (ATP-PCr anaerobic system)",
                "Glycolytic system (fast lactic energy system)",
                "Oxidative system (aerobic mitochondrial system)",
                "Lipolytic system (beta-oxidation energy system)"
            ]
        },
        "t7-a1-006": {
            "options": [
                "Elevation of arterial oxygen saturation above 98% during exercise",
                "Exercise-induced arterial hypoxemia due to diffusion limitations",
                "Alveolar hypoventilation leading to severe arterial hypercapnia",
                "Excessive pulmonary vascular resistance limiting cardiac index"
            ]
        },
        "t7-a1-007": {
            "options": [
                "Point where blood lactate concentration reaches 4.0 mmol/L (OBLA)",
                "Point where blood lactate reaches resting baseline 1.0 mmol/L (LT1)",
                "Point where blood lactate reaches maximal peak value 10.0 mmol/L (Max)",
                "Point where respiratory exchange ratio drops to baseline 0.70 (RER)"
            ]
        },
        "t7-a1-008": {
            "options": [
                "Rightward shift of oxyhemoglobin curve enhancing O2 delivery (Bohr)",
                "Leftward shift of oxyhemoglobin curve inhibiting O2 delivery (Haldane)",
                "Inhibition of oxygen unloading at active skeletal muscles (Hamburger)",
                "Downregulation of all mitochondrial respiratory enzymes (Warburg)"
            ]
        },
        "t7-a1-009": {
            "options": [
                "Expansion of plasma volume, earlier onset of sweating, and lower sweat sodium",
                "Decreased skin blood flow and elevated core body temperature threshold",
                "Increased sodium concentration in sweat and elevated resting heart rate",
                "Suppression of total sweat output to conserve extracellular fluid volume"
            ]
        },
        "t7-a1-010": {
            "options": [
                "10 to 12 grams of carbohydrate per kg body weight per day",
                "2 to 3 grams of carbohydrate per kg body weight per day",
                "5 to 7 grams of carbohydrate per kg body weight per day",
                "0.5 to 1 gram of carbohydrate per kg body weight per day"
            ]
        },
        "t7-a1-011": {
            "options": [
                "0.25 to 0.40 g/kg (approximately 20–40 g) distributed evenly every 3–4 hours",
                "0.05 to 0.10 g/kg (approximately 5–10 g) consumed once daily before sleep",
                "1.00 to 1.50 g/kg (approximately 80–120 g) consumed in a single mega-dose",
                "0.01 to 0.02 g/kg (approximately 1–2 g) consumed continuously every 30 min"
            ]
        },
        "t7-a1-012": {
            "options": [
                "Exercise-associated hyponatremia caused by excessive fluid intake (EAH)",
                "Severe gastrointestinal distress caused by hypertonic beverages (GID)",
                "Acute intracellular dehydration caused by excessive sodium intake (AID)",
                "Severe glycogen depletion accompanied by elevated core temperature (EHS)"
            ]
        },
        "t7-a1-013": {
            "options": [
                "Antagonizes central adenosine receptors, reducing perceived exertion",
                "Increases resting blood pressure to accelerate arterial oxygen delivery",
                "Inhibits peripheral motor neuron firing to prevent muscle fatigue",
                "Directly stimulates mitochondrial biogenesis in glycolytic units"
            ]
        },
        "t7-a1-014": {
            "options": [
                "Low energy availability, menstrual dysfunction, and low bone mineral density",
                "Excessive fat intake with elevated bone mineral density and amenorrhea",
                "High protein intake, polycystic ovarian syndrome, and patellar tendinopathy",
                "Severe dehydration, hyperandrogenism, and elevated thyroid hormone activity"
            ]
        },
        "t7-a1-015": {
            "options": [
                "Girls reach PHV approximately two years earlier than boys during puberty",
                "Boys reach PHV approximately two years earlier than girls during puberty",
                "Both sexes reach PHV at the identical chronological age during puberty",
                "Both sexes reach PHV at completely random intervals during puberty"
            ]
        },
        "t7-a1-016": {
            "options": [
                "High relative adiposity and fat storage (Endomorphy dominant)",
                "Extreme linearity and slender fragility (Ectomorphy dominant)",
                "Musculoskeletal development and robustness (Mesomorphy dominant)",
                "Equal balanced morphological proportionality (Central dominant)"
            ]
        },
        "t7-a1-017": {
            "options": [
                "Disproportionately longer upper torso (higher sitting height ratio)",
                "Disproportionately longer lower limbs (lower sitting height ratio)",
                "Symmetrical body proportionality (balanced sitting height ratio)",
                "Narrow shoulder to hip breadth (reduced bicristal breadth ratio)"
            ]
        },
        "t7-a1-018": {
            "options": [
                "Each athlete has an optimal bandwidth of arousal where peak performance occurs (IZOF)",
                "Identical moderate arousal levels optimize motor performance across all athletic tasks",
                "Elevated cognitive anxiety always destroys motor performance regardless of athlete traits",
                "Arousal and motor execution show zero measurable physiological or cognitive correlation"
            ]
        },
        "t7-a1-019": {
            "options": [
                "Biofeedback training via autonomic monitoring",
                "Progressive muscle relaxation via tension-release",
                "Cognitive thought stopping via internal dialogue",
                "Autogenic training via sensations of warmth"
            ]
        },
        "t7-a1-020": {
            "options": [
                "Intrinsic motivation driven by inherent enjoyment, interest, and satisfaction",
                "Extrinsic motivation driven by tangible financial rewards and trophies",
                "Amotivation characterized by complete absence of athletic intent or goal",
                "Introjected regulation driven by internal pressure and guilt avoidance"
            ]
        },
        "t7-a1-021": {
            "options": [
                "Tendency of individuals to exert less effort when working in a group",
                "Enhanced individual motor output resulting from positive peer support",
                "Complete loss of tactical decision-making ability under high cognitive stress",
                "Spontaneous coordination failure occurring among unfamiliar team members"
            ]
        },
        "t7-a1-022": {
            "options": [
                "Competitiveness, time urgency, impatience, and achievement striving (Type A)",
                "Relaxed demeanor, patience, low competitive drive, and stability (Type B)",
                "Introversion, high neuroticism, social withdrawal, and passivity (Type C)",
                "Negative affectivity, social inhibition, chronic worry, and low esteem (Type D)"
            ]
        },
        "t7-a1-023": {
            "options": [
                "Elevated circulating cortisol with reduced testosterone indicating catabolic stress",
                "Elevated testosterone-to-cortisol ratio indicating high anabolic adaptation state",
                "Depressed serum cortisol with normal resting heart rate and sleep architecture",
                "Immediate drop in serum creatine kinase to absolute undetectable baseline level"
            ]
        },
        "t7-a1-024": {
            "options": [
                "High autonomic parasympathetic vagal modulation and optimal recovery status",
                "Sympathetic hyperactivation or parasympathetic saturation indicating fatigue",
                "Optimal cardiovascular fitness and readiness for maximal match performance",
                "Complete recovery of muscle glycogen stores following interval conditioning"
            ]
        },
        "t7-a1-025": {
            "options": [
                "1000 Hz or higher (capturing rapid impacts and rate of force development)",
                "10 Hz to 20 Hz (monitoring low-velocity walking movements)",
                "50 Hz to 100 Hz (monitoring moderate-velocity jogging drills)",
                "1 Hz to 5 Hz (monitoring slow static postural balance adjustments)"
            ]
        },
        "t7-a1-026": {
            "options": [
                "Failing to reject a false null hypothesis (Type II error)",
                "Rejecting a true null hypothesis in error (Type I error)",
                "Obtaining low statistical testing power (Type III error)",
                "Accepting an invalid study hypothesis (Type IV error)"
            ]
        },
        "t7-a1-027": {
            "options": [
                "Technical error of measurement evaluating instrument precision (TEM)",
                "Subjective face validity evaluating appearance of relevance (SFV)",
                "Prospective criterion validity evaluating competitive success (PCV)",
                "Theoretical construct validity evaluating scientific theory (TCV)"
            ]
        },
        "t7-a1-028": {
            "options": [
                "Two-way mixed model Analysis of Variance (two-way mixed ANOVA)",
                "Spearman's rank correlation coefficient (non-parametric rank)",
                "Chi-square test of homogeneity (cross-tabulation model)",
                "Mann-Whitney U test (non-parametric independent group test)"
            ]
        },
        "t7-a1-029": {
            "options": [
                "Pairing a heavy resistance movement with a biomechanically similar plyometric drill",
                "Pairing continuous aerobic cycling with high-repetition machine bicep curls",
                "Pairing multiple single-joint isolation exercises performed to muscular exhaustion",
                "Pairing passive static stretching with continuous low-intensity treadmill runs"
            ]
        },
        "t7-a1-030": {
            "options": [
                "30 to 90 seconds of sustained near-maximal anaerobic efforts",
                "15 to 30 seconds of high-intensity intermittent work bouts",
                "3 to 5 minutes of steady-state submaximal endurance exercise",
                "0 to 5 seconds of instantaneous explosive power efforts"
            ]
        },
        "t7-a1-031": {
            "options": [
                "Increased resting parasympathetic vagal tone and elevated stroke volume",
                "Increased sympathetic tone elevating resting cardiac rate to peak values",
                "Enhanced beta-adrenergic receptor sensitivity elevating resting rhythm",
                "Suppression of sinoatrial pacemaker activity causing acute AV block"
            ]
        },
        "t7-a1-032": {
            "options": [
                "60% to 65% of VO2max (optimal fat oxidation zone)",
                "50% to 60% of VO2max (aerobic base training zone)",
                "10% to 20% of VO2max (sedentary resting zone)",
                "65% to 75% of VO2max (anaerobic threshold boundary)"
            ]
        },
        "t7-a2-001": {
            "options": [
                "Khelo India Youth Games (national youth U-18 multi-sport competition)",
                "Khelo India Winter Games (Gulmarg and Leh cold-weather games)",
                "Khelo India Para Games (New Delhi national parasport games)",
                "Khelo India University Games (multi-campus college games)"
            ]
        },
        "t7-a2-002": {
            "options": [
                "Major Dhyan Chand Khel Ratna Award for highest athletic achievement",
                "Dhyan Chand Lifetime Achievement Award in Sports and Games",
                "Rashtriya Khel Protsahan Puruskar for corporate sports support",
                "Dronacharya Award for Outstanding Coaches in Sports and Games"
            ]
        },
        "t7-a2-003": {
            "options": [
                "P1: Beta-blockers (prohibited in-competition in specified precision sports)",
                "S1: Anabolic agents (prohibited at all times across all athletic disciplines)",
                "S6: Stimulants (prohibited strictly during in-competition testing sessions)",
                "S9: Glucocorticoids (prohibited in-competition via oral and injectable routes)"
            ]
        },
        "t7-a2-004": {
            "options": [
                "Presence of a prohibited substance in an athlete's biological sample",
                "Use or attempted use of a prohibited pharmacological substance",
                "Evading, refusing, or failing to submit to sample collection",
                "All of the above constitute distinct anti-doping violations"
            ]
        },
        "t7-a2-005": {
            "options": [
                "Retroactive TUE is granted if emergency medical intervention was required",
                "Retroactive TUE is granted if the athlete was unaware of prohibited status",
                "Retroactive TUE is granted if application was omitted before competition",
                "Retroactive TUE is granted automatically to all junior youth category athletes"
            ]
        },
        "t7-a2-006": {
            "options": [
                "Brisbane, Australia (2032 Summer Olympic Games)",
                "Melbourne, Australia (2026 Commonwealth Games)",
                "Sydney, Australia (2000 Summer Olympic Games)",
                "Gold Coast, Australia (2018 Commonwealth Games)"
            ]
        },
        "t7-a2-007": {
            "options": [
                "International Olympic Committee (IOC) headquartered in Lausanne",
                "World Athletics (WA) headquartered in Monaco",
                "Badminton World Federation (BWF) headquartered in Kuala Lumpur",
                "International Hockey Federation (FIH) headquartered in Lausanne"
            ]
        },
        "t7-a2-008": {
            "options": [
                "Age limit of 70 years and maximum cumulative tenure limits for office bearers",
                "Age limit of 50 years and mandatory lifelong tenure appointments for presidents",
                "Age limit of 90 years and unrestricted consecutive terms for all executive posts",
                "Age limit of 40 years and mandatory rotation of all active executive delegates"
            ]
        },
        "t7-b-001": {
            "options": [
                "Full passive hip flexion combined with knee flexion to ninety degrees",
                "Passive knee flexion with the hip held at zero degrees extension",
                "Passive knee flexion performed with the athlete lying in prone position",
                "Full active hip abduction performed with the athlete in side-lying position"
            ]
        },
        "t7-b-002": {
            "options": [
                "Supraspinatus tendinopathy or subacromial bursal impingement",
                "Subscapularis tendon rupture or upper subscapular nerve entrapment",
                "Biceps brachii long head tendinopathy or SLAP labral tear lesion",
                "Infraspinatus muscle strain or suprascapular nerve entrapment"
            ]
        },
        "t7-b-003": {
            "options": [
                "Anterior drawer test performed at 90° knee flexion with neutral rotation",
                "Slocum test performed at 90° knee flexion with 30° internal rotation",
                "Posterior drawer test performed at 90° knee flexion with neutral rotation",
                "Hughston test performed at 90° knee flexion with 15° external rotation"
            ]
        },
        "t7-b-004": {
            "options": [
                "Medial collateral ligament (MCL superficial and deep fibers)",
                "Lateral collateral ligament (LCL of the knee joint)",
                "Anterior cruciate ligament (ACL anteromedial bundle)",
                "Posterior cruciate ligament (PCL posterolateral bundle)"
            ]
        },
        "t7-b-005": {
            "options": [
                "Infraspinatus or Teres Minor muscle weakness (external rotation lag)",
                "Subscapularis tendon rupture (subscapular nerve lesion)",
                "Supraspinatus tendon complete tear (suprascapular nerve entrapment)",
                "Pectoralis major clavicular head avulsion (lateral pectoral nerve lesion)"
            ]
        },
        "t7-b-006": {
            "options": [
                "Full passive knee flexion with external tibial rotation producing medial click",
                "Full passive knee flexion with internal tibial rotation producing lateral click",
                "Full passive knee extension with axial compression producing anterior pain",
                "Prone knee flexion at 90° with distraction producing joint capsule stretch"
            ]
        },
        "t7-b-007": {
            "options": [
                "Hip flexion contracture or iliopsoas structural tightness",
                "Gluteus medius weakness or superior gluteal nerve palsy",
                "Hamstring muscle contracture or sciatic nerve irritability",
                "Rectus femoris contracture or femoral nerve entrapment"
            ]
        },
        "t7-b-008": {
            "options": [
                "Delorme progressive resistance exercise system (PRE method)",
                "Oxford regressive resistance exercise system (RRE method)",
                "Daily adjustable progressive resistance exercise system (DAPRE)",
                "Isometric maximal voluntary contraction system (MVC method)"
            ]
        },
        "t7-b-009": {
            "options": [
                "3 sets of 15 repetitions on decline board, twice daily for 12 weeks",
                "1 set of 30 repetitions on flat ground, once weekly for 6 weeks",
                "5 sets of 5 repetitions with heavy loads, once daily for 4 weeks",
                "2 sets of 20 repetitions with light bands, alternate days for 8 weeks"
            ]
        },
        "t7-b-010": {
            "options": [
                "Autogenic inhibition via Golgi tendon organ Ib afferents of target muscle",
                "Reciprocal inhibition via muscle spindle Ia afferents of antagonist muscle",
                "Cutaneous reflex excitation via tactile mechanoreceptors of joint capsule",
                "Gamma motor neuron activation increasing baseline muscle spindle discharge"
            ]
        },
        "t7-b-011": {
            "options": [
                "Grade I (small amplitude oscillation at the beginning of range)",
                "Grade II (large amplitude oscillation within the mid-range)",
                "Grade III (large amplitude oscillation extending to the end of range)",
                "Grade IV (small amplitude oscillation performed at the end of range)"
            ]
        },
        "t7-b-012": {
            "options": [
                "Sustained tendon stress without joint motion, reducing cortical pain",
                "High-velocity stretch reflex activation accelerating collagen synthesis",
                "Rapid joint oscillation stimulating synovial fluid secretion and repair",
                "Continuous passive stretching reducing muscle spindle sensitivity"
            ]
        },
        "t7-b-013": {
            "options": [
                "Multi-angle isometric holds performed at submaximal voluntary effort",
                "High-velocity ballistic movements performed through terminal joint range",
                "Rapid stretch-shortening plyometric jumps on hard concrete surfaces",
                "Heavy dynamic eccentric loading performed to complete muscle failure"
            ]
        },
        "t7-b-014": {
            "options": [
                "Supraspinatus initiates abduction (0°–15°); Deltoid drives mid-to-late (15°–90°)",
                "Deltoid initiates abduction (0°–15°); Supraspinatus drives mid-to-late (15°–90°)",
                "Infraspinatus initiates abduction (0°–15°); Teres Major drives mid-to-late (15°–90°)",
                "Subscapularis initiates abduction (0°–15°); Pectoralis Major drives mid-to-late"
            ]
        },
        "t7-b-015": {
            "options": [
                "Tibia rotates externally on femur during final 30 degrees of extension",
                "Tibia rotates internally on femur during final 30 degrees of extension",
                "Femur rotates externally on tibia during initial 30 degrees of flexion",
                "Femur translates posteriorly on tibia during final 10 degrees of extension"
            ]
        },
        "t7-b-016": {
            "options": [
                "Popliteus muscle (internally rotates tibia in open chain to unlock knee)",
                "Quadriceps femoris (externally rotates tibia in open chain to unlock knee)",
                "Gastrocnemius muscle (plantarflexes ankle to unlock extended knee)",
                "Biceps femoris muscle (externally rotates femur in closed chain to unlock knee)"
            ]
        },
        "t7-b-017": {
            "options": [
                "Third-class lever (effort applied between fulcrum and resistance load)",
                "Second-class lever (resistance load located between fulcrum and effort)",
                "First-class lever (fulcrum located between effort and resistance load)",
                "Fourth-class lever (effort and load acting in identical parallel planes)"
            ]
        },
        "t7-b-018": {
            "options": [
                "Second-class lever (fulcrum - load - effort)",
                "First-class lever (effort - load - fulcrum)",
                "Third-class lever (fulcrum - effort - load)",
                "First-class lever (fulcrum - effort - load)"
            ]
        },
        "t7-b-019": {
            "options": [
                "60° to 90° of knee flexion during deep squats",
                "0° of knee flexion during standing balance",
                "20° to 30° of knee flexion during walking",
                "120° to 140° of knee flexion during kneeling"
            ]
        },
        "t7-b-020": {
            "options": [
                "Initial swing phase (peak knee flexion reaches approximately 60°)",
                "Initial contact of the reference limb with the ground surface",
                "Loading response immediately following initial heel contact",
                "Mid-stance single-limb support with horizontal level pelvis"
            ]
        },
        "t7-b-021": {
            "options": [
                "Quadriceps weakness causing knee hyperextension during mid-stance",
                "Hip abductor weakness (gluteus medius) causing pelvic drop",
                "Gastrocnemius contracture causing premature heel rise during stance",
                "Ankle dorsiflexor paralysis causing high steppage and foot drop"
            ]
        },
        "t7-b-022": {
            "options": [
                "Weakness of the ankle dorsiflexors (deep peroneal nerve palsy)",
                "Spasticity of the quadriceps femoris (femoral nerve lesion)",
                "Contracture of the iliopsoas muscle (lumbar plexus lesion)",
                "Weakness of the gluteus maximus muscle (inferior gluteal nerve palsy)"
            ]
        },
        "t7-b-023": {
            "options": [
                "Limited or no clinically meaningful benefit over placebo in back pain",
                "Substantial high-quality evidence demonstrating long-term recovery",
                "Strong evidence demonstrating superiority over active exercise programs",
                "Established primary first-line intervention in international guidelines"
            ]
        },
        "t7-b-024": {
            "options": [
                "Acute post-operative pain and acute musculoskeletal trauma",
                "Chronic non-specific low back pain rehabilitation",
                "Structural spinal scoliosis deformity correction",
                "Reversal of central spasticity following ischemic stroke"
            ]
        },
        "t7-b-025": {
            "options": [
                "Anterior drawer test (evaluates anterior translation at 90° flexion)",
                "Lachman test (highest sensitivity for anterior cruciate tears)",
                "Pivot shift test (evaluates dynamic rotational subluxation)",
                "McMurray test (evaluates posterior horn meniscal tear pathology)"
            ]
        },
        "t7-b-026": {
            "options": [
                "Significant reduction in pain and meaningful improvement in function",
                "Structural cartilage regeneration and reversal of joint space narrowing",
                "Complete elimination of subchondral bone sclerosis on radiographs",
                "Restoration of pristine juvenile hyaline cartilage across joint"
            ]
        },
        "t7-b-027": {
            "options": [
                "Meaningful improvement in functional task performance and motor ability",
                "Significant reduction in resting muscle spasticity scores on scale",
                "Complete restoration of normal monosynaptic stretch reflex latency",
                "Full recovery of tactile sensory thresholds across dermatomes"
            ]
        },
        "t7-b-028": {
            "options": [
                "Demonstrate at least 10° active wrist extension and 10° finger extension",
                "Are in the completely flaccid stage without active muscle contraction",
                "Have severe expressive aphasia preventing verbal communication with staff",
                "Exhibit profound sensory loss across all distal peripheral dermatomes"
            ]
        },
        "t7-b-029": {
            "options": [
                "Grade II: Partial ligament tearing with moderate laxity (5–10 mm)",
                "Grade I: Microscopic ligament fiber tearing with no laxity (<5 mm)",
                "Grade III: Complete ligament disruption with gross instability (>10 mm)",
                "Grade IV: Complete ligament rupture accompanied by neurovascular injury"
            ]
        },
        "t7-b-030": {
            "options": [
                "Peripheralization of symptoms (proximal pain radiates into limb)",
                "Centralization of symptoms (distal pain moves proximally toward spine)",
                "Structural spinal disc reduction confirmed on serial MRI neuroimaging",
                "Immediate spontaneous resolution of all motor deficits during extension"
            ]
        },
        "t7-b-031": {
            "options": [
                "Prone Knee Bend test (PKB) evaluating femoral nerve and L2–L4 roots",
                "Straight Leg Raise test (SLR) evaluating lower lumbar nerve roots",
                "Slump test evaluating dynamic neural tension throughout neuroaxis",
                "Upper Limb Tension test (ULTT) evaluating cervical brachial plexus"
            ]
        },
        "t7-b-032": {
            "options": [
                "Initial vasoconstriction followed by cyclical cold-induced vasodilation",
                "A continuous uninterrupted increase in local cutaneous blood flow",
                "A sustained vasoconstriction preventing all peripheral re-warming",
                "Immediate neurogenic reflex vasospasm resulting in local tissue necrosis"
            ]
        },
        "t7-b-033": {
            "options": [
                "Cyriax deep transverse friction massage soft tissue technique (DTF)",
                "Mulligan concept of Mobilization with Movement technique (MWM)",
                "Maitland passive oscillatory joint mobilization grading system (POM)",
                "Kaltenborn linear traction and gliding joint mobilization system (KTG)"
            ]
        },
        "t7-b-034": {
            "options": [
                "Supraspinatus muscle tendon (abductor initiator)",
                "Infraspinatus muscle tendon (external rotator)",
                "Subscapularis muscle tendon (internal rotator)",
                "Teres minor muscle tendon (external rotator)"
            ]
        },
        "t7-b-035": {
            "options": [
                "Mid-stance phase (single-limb support weight-bearing)",
                "Loading response (first 10% of the normal gait cycle)",
                "Terminal stance phase (heel rise to opposite initial contact)",
                "Initial swing phase (peak knee flexion reaches ~60°)"
            ]
        },
        "t7-b-036": {
            "options": [
                "Progressive resistance exercise training (PRE method)",
                "High-repetition low-load endurance resistance training",
                "Isometric training performed strictly at a single joint angle",
                "Passive stretching programs performed without active loading"
            ]
        },
        "t7-b-037": {
            "options": [
                "Chronic tendinopathies of the Achilles tendon and patellar tendon",
                "Acute skeletal muscle strain with localized intramuscular hematoma",
                "Patellofemoral pain syndrome with lateral retinacular tightness",
                "Gross ligamentous joint instability requiring surgical repair"
            ]
        },
        "t7-b-038": {
            "options": [
                "Chronic plantar fasciitis and calcific tendinopathy of rotator cuff",
                "Acute hamstring muscle strain with localized intramuscular hematoma",
                "Complete grade III anterior cruciate ligament rupture with effusion",
                "Severe spastic quadriplegia resulting from acute ischemic spinal stroke"
            ]
        },
        "t7-b-039": {
            "options": [
                "Terminal stance phase (propulsive heel rise)",
                "Initial contact phase (heel strike event)",
                "Loading response phase (weight acceptance)",
                "Pre-swing phase (terminal stance unloading)"
            ]
        },
        "t7-b-040": {
            "options": [
                "Grade I: Small amplitude oscillatory movement (early range)",
                "Grade II: Large amplitude oscillatory movement (mid range)",
                "Grade III: Large amplitude oscillatory movement (end range)",
                "Grade V: High-velocity low-amplitude thrust (anatomical limit)"
            ]
        },
        "t7-c-001": {
            "options": [
                "Type I SLAP tear (superior labrum fraying with intact biceps anchor)",
                "Type II SLAP tear (detachment of superior labrum and biceps anchor)",
                "Type III SLAP tear (bucket-handle labral tear with intact anchor)",
                "Type IV SLAP tear (bucket-handle labral tear extending into biceps)"
            ]
        },
        "t7-c-002": {
            "options": [
                "O'Brien's active compression test (thumb down pain abolished thumb up)",
                "Hawkins-Kennedy test (subacromial impingement reproduction)",
                "Speed's test (resisted forward flexion with forearm supinated)",
                "Yergason's test (resisted supination with elbow flexed at 90°)"
            ]
        },
        "t7-c-003": {
            "options": [
                "Aggressive heavy biceps loading and overhead military barbell presses",
                "High-velocity manipulative thrusts into end-range shoulder rotation",
                "Immobilization in a sling for twelve weeks with absolute rest",
                "Periscapular motor control, posterior capsule mobility, and rotator cuff work"
            ]
        },
        "t7-c-004": {
            "options": [
                "Failure of conservative rehabilitation after 3 to 6 months of therapy",
                "Immediate diagnosis on MRI regardless of symptoms or functional score",
                "Presence of mild asymptomatic labral fraying on diagnostic ultrasound",
                "Completion of two weeks of home rest without active physical therapy"
            ]
        },
        "t7-c-005": {
            "options": [
                "Achilles Tendinopathy (mid-portion tendinopathy with neovascularity)",
                "Retrocalcaneal Bursitis (calcaneal bursa inflammation behind tendon)",
                "Posterior Ankle Impingement (os trigonum syndrome with pinching)",
                "Plantaris Muscle Rupture (acute tendon tear with medial hematoma)"
            ]
        },
        "t7-c-006": {
            "options": [
                "Stage 1: Isometrics -> Stage 2: Heavy Slow Resistance -> Stage 3: Plyometrics",
                "Stage 1: Bed rest -> Stage 2: Immediate full competitive 5-set matches",
                "Stage 1: Steroid injections -> Stage 2: Daily passive stretching only",
                "Stage 1: Marathon runs -> Stage 2: Heavy upper body bench press drills"
            ]
        },
        "t7-c-007": {
            "options": [
                "Scapholunate ligament dissociation with Terry Thomas sign",
                "Triangular Fibrocartilage Complex (TFCC) tear / disruption",
                "De Quervain's tenosynovitis of the first dorsal compartment",
                "Carpal tunnel median nerve compression neuropathy at wrist"
            ]
        },
        "t7-c-008": {
            "options": [
                "High-force passive wrist manipulation into forceful ulnar deviation",
                "Total avoidance of all active upper body movements and sports retirement",
                "Applying continuous heat packs over the radial styloid while hanging",
                "Wrist splinting/TFCC strap, isometric forearm rotations, and ECU loading"
            ]
        },
        "t7-c-009": {
            "options": [
                "Complete rupture of the Achilles tendon at the calcaneal insertion",
                "Plantar fasciitis with subcalcaneal spur formation at heel",
                "Syndesmotic Ankle Sprain (High Ankle / Distal Tibiofibular Sprain)",
                "Grade 1 isolated sprain of the anterior talofibular ligament"
            ]
        },
        "t7-c-010": {
            "options": [
                "High ankle sprains always cause gangrene of the gastrocnemius muscle",
                "Syndesmotic ligaments have zero DNA and can never undergo healing",
                "Talar dome wedging in dorsiflexion separates the healing syndesmosis",
                "Medical regulations mandate a mandatory six-month competitive suspension"
            ]
        },
        "t7-c-011": {
            "options": [
                "Osgood-Schlatter Disease (tibial tuberosity apophysitis)",
                "Stress fracture of second metatarsal shaft (March fracture)",
                "Sever's Disease (traction apophysitis of calcaneus)",
                "Sinding-Larsen-Johansson syndrome (inferior patellar pole)"
            ]
        },
        "t7-c-012": {
            "options": [
                "Inserting silicone heel cups or heel lifts, load management, and calf stretches",
                "Complete immobilization of bilateral limbs in rigid casts for one year",
                "Immediate surgical excision of the calcaneus bone under anesthesia",
                "High-dose corticosteroid injections directly into the Achilles tendon"
            ]
        },
        "t7-c-013": {
            "options": [
                "Acute gouty arthritis of the first metatarsophalangeal joint",
                "Superficial blister of the medial skin requiring bandages",
                "Complete rupture of the plantar fascia requiring emergency casting",
                "Tarsal Navicular Stress Fracture (high-risk bone stress injury)"
            ]
        },
        "t7-c-014": {
            "options": [
                "The navicular bone completely dissolves into liquid within two weeks",
                "Weight-bearing walking causes instantaneous paralysis of sciatic nerve",
                "Central third is an avascular watershed zone with high risk of non-union",
                "Navicular fractures always lead to acute bacterial infection of artery"
            ]
        },
        "t7-c-015": {
            "options": [
                "Quadriceps strength symmetry is irrelevant as long as pain is zero",
                "LSI = 125%; exceeds strength requirements for immediate return to play",
                "LSI = 80% (160/200 Nm); does not meet criterion (requires LSI ≥ 90%)",
                "LSI = 50%; requires immediate surgical revision of patellar tendon graft"
            ]
        },
        "t7-c-016": {
            "options": [
                "Quadriceps weakness completely prevents digesting carbohydrates",
                "Quadriceps weakness causes tibial nerve to disconnect from spinal cord",
                "Quadriceps absorb landing impact; weakness shifts force onto ACL graft",
                "Quadriceps deficits prevent the knee joint from flexing past 10 degrees"
            ]
        },
        "t7-c-017": {
            "options": [
                "Hyperextension of the ankle joint with the knee completely unloaded",
                "Shallow knee flexion, dynamic valgus collapse, and hip internal rotation",
                "Pure coronal plane hip abduction with zero knee movement or force",
                "Deep knee flexion to 140° with pure varus stress and tibial rotation"
            ]
        },
        "t7-c-018": {
            "options": [
                "Men's soccer shoes have special shock absorbers absent in women's shoes",
                "Female athletes never participate in structured resistance training",
                "Female athletes have zero muscular tissue in their lower extremities",
                "Neuromuscular valgus dominance, quadriceps dominance, and wider Q-angle"
            ]
        },
        "t7-c-019": {
            "options": [
                "Pedicle of the superior lumbar vertebra (Scotty dog eye)",
                "Transverse process of the lower lumbar vertebra (Scotty dog nose)",
                "Spinous process of the first sacral segment (Scotty dog tail)",
                "Pars Interarticularis of the lumbar vertebra (Scotty dog collar/neck)"
            ]
        },
        "t7-c-020": {
            "options": [
                "Grade I: 0–25%, Grade II: 26–50%, Grade III: 51–75%, Grade IV: 76–100%",
                "Grade 1: 1–5 mm, Grade 2: 6–10 mm, Grade 3: 11–15 mm, Grade 4: 16–20 mm",
                "Grade A: 0–10%, Grade B: 11–20%, Grade C: 21–30%, Grade D: 31–40%",
                "Grade 1: 0–10%, Grade 2: 11–20%, Grade 3: 21–30%, Grade 4: 31–40%"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_7.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_7.json successfully!")

if __name__ == '__main__':
    rebalance_t7()

# re-run with final 17 fixes
with open('mock_tests/mock_test_7.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't7-a1-001':
        q['options'] = [
            "Lifting maximum loads with slow tempo (e.g., 90–95% 1RM) across all sets",
            "Lifting light loads with maximum intent (e.g., 30–60% 1RM) for high speed",
            "Lifting endurance loads to failure (e.g., 20–30% 1RM) for continuous sets",
            "Holding static isometric postures (e.g., 50–70% 1RM) at 90 degrees angle"
        ]
    if q['id'] == 't7-a1-002':
        q['options'] = [
            "Transient post-exercise increase in muscle twitch force output (PAPE)",
            "Immediate reduction in muscle motor unit recruitment thresholds (SMUR)",
            "Sustained inhibition of muscle spindle Ia afferents during stretch (MSIA)",
            "Chronic structural increase in myofibrillar cross-sectional area (MCSA)"
        ]
    if q['id'] == 't7-a1-008':
        q['options'] = [
            "Rightward shift of oxyhemoglobin curve enhancing oxygen delivery (Bohr)",
            "Leftward shift of oxyhemoglobin curve inhibiting oxygen delivery (Haldane)",
            "Inhibition of oxygen unloading at active skeletal muscles (Hamburger)",
            "Downregulation of all mitochondrial respiratory enzymes (Warburg)"
        ]
    if q['id'] == 't7-a1-018':
        q['options'] = [
            "Each athlete has an optimal bandwidth of arousal for performance (IZOF)",
            "Identical moderate arousal levels optimize performance across tasks (Inverted-U)",
            "Elevated cognitive anxiety always destroys performance traits (Catastrophe)",
            "Arousal and motor execution show zero measurable correlation (Null)"
        ]
    if q['id'] == 't7-a2-001':
        q['options'] = [
            "Khelo India Youth Games (national youth multi-sport competition)",
            "Khelo India Winter Games (Gulmarg and Leh cold-weather games)",
            "Khelo India Para Games (New Delhi national parasport games)",
            "Khelo India University Games (multi-campus college games)"
        ]
    if q['id'] == 't7-a2-007':
        q['options'] = [
            "International Olympic Committee (IOC) located in Lausanne, Switzerland",
            "World Athletics headquarters (WA) located in Monaco Principality",
            "Badminton World Federation (BWF) located in Kuala Lumpur, Malaysia",
            "International Hockey Federation (FIH) located in Lausanne, Switzerland"
        ]
    if q['id'] == 't7-b-020':
        q['options'] = [
            "Initial swing phase (limb acceleration)",
            "Initial contact phase (heel strike event)",
            "Loading response phase (shock absorption)",
            "Mid-stance phase (single-limb support)"
        ]
    if q['id'] == 't7-b-021':
        q['options'] = [
            "Quadriceps weakness (knee hyperextension during mid-stance)",
            "Hip abductor weakness (gluteus medius causing pelvic drop)",
            "Gastrocnemius contracture (premature heel rise in stance)",
            "Ankle dorsiflexor paralysis (high steppage and foot drop)"
        ]
    if q['id'] == 't7-b-029':
        q['options'] = [
            "Grade II: Partial ligament tearing with moderate laxity (5–10 mm)",
            "Grade I: Microscopic ligament fiber tearing with no laxity (0–5 mm)",
            "Grade III: Complete ligament disruption with gross laxity (>10 mm)",
            "Grade IV: Complete ligament rupture with neurovascular loss (>20 mm)"
        ]
    if q['id'] == 't7-b-030':
        q['options'] = [
            "Peripheralization of symptoms (distal pain radiates into lower limb)",
            "Centralization of symptoms (distal pain moves proximally to spine)",
            "Directional preference abolition (pain intensity remains unaffected)",
            "Segmental spinal stabilization (lumbar multifidus firing normalizes)"
        ]
    if q['id'] == 't7-b-031':
        q['options'] = [
            "Prone Knee Bend test (evaluates femoral nerve and L2–L4 roots)",
            "Straight Leg Raise test (evaluates lower lumbar nerve roots)",
            "Slump tension test (evaluates neural tension in spinal axis)",
            "Upper Limb Tension test (evaluates cervical brachial plexus)"
        ]
    if q['id'] == 't7-b-036':
        q['options'] = [
            "Progressive resistance exercise training programs",
            "High-repetition low-load endurance resistance training",
            "Isometric training performed at single joint angles",
            "Passive stretching programs performed without loading"
        ]
    if q['id'] == 't7-c-002':
        q['options'] = [
            "O'Brien's test (resisted forward flexion with thumb down vs up)",
            "Hawkins-Kennedy test (passive forward flexion with rotation)",
            "Speed's test (resisted forward flexion with forearm supinated)",
            "Yergason's test (resisted forearm supination with elbow flexed)"
        ]
    if q['id'] == 't7-c-007':
        q['options'] = [
            "Scapholunate ligament dissociation (SLD wrist tear)",
            "Triangular Fibrocartilage Complex (TFCC wrist tear)",
            "De Quervain's tenosynovitis (first compartment tear)",
            "Carpal tunnel median neuropathy (flexor retinaculum)"
        ]
    if q['id'] == 't7-c-009':
        q['options'] = [
            "Achilles tendon rupture (complete calcaneal tendon tear)",
            "Plantar fasciitis (subcalcaneal spur and fascial strain)",
            "Syndesmotic ankle sprain (distal tibiofibular ligament)",
            "Anterior talofibular sprain (lateral collateral ligament)"
        ]
    if q['id'] == 't7-c-013':
        q['options'] = [
            "Gouty arthritis of first MTP joint (acute inflammatory gout)",
            "Superficial blister of medial foot (cutaneous dermal blister)",
            "Complete rupture of plantar fascia (acute fascial disruption)",
            "Tarsal Navicular Stress Fracture (high-risk bone stress BSI)"
        ]
    if q['id'] == 't7-c-015':
        q['options'] = [
            "LSI is 0%; quadriceps strength is irrelevant if pain is absent",
            "LSI is 125%; exceeds strength requirements for immediate return",
            "LSI is 80%; does not meet criterion (requires LSI ≥ 90%)",
            "LSI is 50%; requires immediate revision of patellar tendon graft"
        ]

with open('mock_tests/mock_test_7.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 7 fully patched!")

with open('mock_tests/mock_test_7.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't7-c-015':
        q['options'] = [
            "LSI is 0%; quadriceps strength is irrelevant if pain is absent on testing",
            "LSI is 125%; exceeds strength requirements for immediate return to full sport",
            "LSI is 80%; does not meet clearance criterion requiring LSI 90% or higher",
            "LSI is 50%; requires immediate surgical revision of patellar tendon autograft"
        ]

with open('mock_tests/mock_test_7.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 7 100% finished!")
