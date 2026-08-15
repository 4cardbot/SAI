import json

def rebalance_t5():
    with open('mock_tests/mock_test_5.json') as f:
        qs = json.load(f)

    updates = {
        "t5-a1-001": {
            "options": [
                "1RM bench press test (maximal strength)",
                "30-second Wingate anaerobic cycle test",
                "Vertical jump test on a contact mat",
                "Cooper 12-minute continuous run test"
            ]
        },
        "t5-a1-002": {
            "options": [
                "Post-activation potentiation enhancement (PAPE response)",
                "Autogenic Golgi tendon organ inhibition (GTO response)",
                "Reciprocal muscle spindle facilitation (RMS response)",
                "Delayed onset muscle soreness induction (DOMS response)"
            ]
        },
        "t5-a1-003": {
            "options": [
                "2 to 3 minutes between maximal effort sets",
                "30 to 45 seconds between maximal effort sets",
                "5 to 8 minutes between maximal effort sets",
                "10 to 15 seconds between maximal effort sets"
            ]
        },
        "t5-a1-004": {
            "options": [
                "Conversion of slow-twitch type I fibers into fast-twitch glycolytic motor units",
                "Increased pennation angle and expansion of myofibrillar cross-sectional area",
                "Decreased intracellular glycogen storage capacity within active skeletal muscles",
                "Selective reduction of resting motor unit recruitment thresholds across fibers"
            ]
        },
        "t5-a1-005": {
            "options": [
                "Adenosine Triphosphate-Phosphocreatine system (ATP-PCr)",
                "Anaerobic Fast Glycolytic energy system (lactic system)",
                "Aerobic Mitochondrial Oxidative Phosphorylation system",
                "Beta-Oxidation and Free Fatty Acid catabolic pathway"
            ]
        },
        "t5-a1-006": {
            "options": [
                "Blood lactate reaches an absolute baseline concentration of 1.0 mmol/L",
                "Blood lactate reaches an absolute fixed concentration of 4.0 mmol/L",
                "Blood lactate reaches its maximal achievable level of 12.0 mmol/L",
                "Respiratory exchange ratio drops to its baseline value of 0.70"
            ]
        },
        "t5-a1-007": {
            "options": [
                "Progressive increase in maximal heart rate during repeated training",
                "Expansion of left ventricular internal diameter and resting blood volume",
                "Marked reduction in submaximal stroke volume during steady exercise",
                "Concentric left ventricular hypertrophy with diminished lumen volume"
            ]
        },
        "t5-a1-008": {
            "options": [
                "Decreased skin blood flow and elevated core body temperature threshold",
                "Expansion of plasma volume, earlier onset of sweating, and lower sweat sodium",
                "Increased sodium concentration in sweat and elevated resting heart rate",
                "Suppression of total sweat output to conserve extracellular fluid volume"
            ]
        },
        "t5-a1-009": {
            "options": [
                "6.0 to 10.0 g/kg/day during regular heavy endurance training",
                "1.0 to 2.0 g/kg/day during regular heavy endurance training",
                "15.0 to 20.0 g/kg/day during regular heavy endurance training",
                "3.0 to 4.0 g/kg/day during regular heavy endurance training"
            ]
        },
        "t5-a1-010": {
            "options": [
                "0.25 to 0.40 g/kg (approximately 20–40 g) every 3 to 4 hours",
                "0.05 to 0.10 g/kg (approximately 5–10 g) once daily before bed",
                "1.00 to 1.50 g/kg (approximately 80–120 g) in a single bolus",
                "0.01 to 0.02 g/kg (approximately 1–2 g) every thirty minutes"
            ]
        },
        "t5-a1-011": {
            "options": [
                "500 to 1000 mg/L (approximately 20–45 mmol/L)",
                "50 to 100 mg/L (approximately 2–4 mmol/L)",
                "2500 to 3000 mg/L (approximately 110–130 mmol/L)",
                "0 to 10 mg/L (pure demineralized water intake)"
            ]
        },
        "t5-a1-012": {
            "options": [
                "Elevates muscle glycogen storage capacity via insulin receptor activation",
                "Increases intramuscular carnosine synthesis, buffering cellular hydrogen ions",
                "Directly stimulates central nervous system beta-adrenergic receptor firing",
                "Inhibits adipose tissue lipolysis by blocking hormone-sensitive lipase"
            ]
        },
        "t5-a1-013": {
            "options": [
                "Less than 30 kcal/kg fat-free mass/day (threshold for RED-S)",
                "Greater than 45 kcal/kg fat-free mass/day (optimal balance)",
                "Between 35 and 40 kcal/kg fat-free mass/day (sub-clinical zone)",
                "Between 50 and 60 kcal/kg fat-free mass/day (high surplus zone)"
            ]
        },
        "t5-a1-014": {
            "options": [
                "Endomorphy (adiposity), Mesomorphy (musculoskeletal), Ectomorphy (linearity)",
                "Ectomorphy (adiposity), Endomorphy (musculoskeletal), Mesomorphy (linearity)",
                "Mesomorphy (adiposity), Ectomorphy (musculoskeletal), Endomorphy (linearity)",
                "Endomorphy (linearity), Mesomorphy (adiposity), Ectomorphy (musculoskeletal)"
            ]
        },
        "t5-a1-015": {
            "options": [
                "Peak height velocity occurs earlier in females than in males during puberty",
                "Peak height velocity occurs earlier in males than in females during puberty",
                "Peak height velocity occurs at the identical age across both biological sexes",
                "Peak height velocity occurs randomly without any pubertal age patterns"
            ]
        },
        "t5-a1-016": {
            "options": [
                "Disproportionately longer trunk length relative to shorter lower extremity limbs",
                "Disproportionately longer lower extremity limbs relative to shorter trunk length",
                "Narrow biacromial shoulder width relative to wide pelvic bicristal diameter",
                "Equal body proportionality matching standard non-athletic sedentary norms"
            ]
        },
        "t5-a1-017": {
            "options": [
                "Task-oriented goals focus on mastery; Ego-oriented goals focus on social comparison",
                "Ego-oriented goals focus on mastery; Task-oriented goals focus on social comparison",
                "Task-oriented goals focus on winning; Ego-oriented goals focus on external rewards",
                "Ego-oriented goals focus on effort; Task-oriented goals focus on avoiding failure"
            ]
        },
        "t5-a1-018": {
            "options": [
                "Inverted-U hypothesis (moderate arousal optimizes motor execution)",
                "Catastrophe model (cognitive anxiety triggers sudden performance collapse)",
                "Individual Zones of Optimal Functioning (bandwidth varies per athlete)",
                "Drive theory (arousal increases performance linearly without limits)"
            ]
        },
        "t5-a1-019": {
            "options": [
                "Systematically alternating muscle group tension followed by conscious release",
                "Silently repeating self-statements focused on sensations of warmth and heaviness",
                "Monitoring continuous galvanic skin resistance and heart rate deceleration",
                "Actively suppressing unwanted negative thoughts using external verbal commands"
            ]
        },
        "t5-a1-020": {
            "options": [
                "Unpaired Student's t-test (two independent sample groups)",
                "One-way repeated measures ANOVA (three or more paired trials)",
                "Chi-Square test of independence (cross-tabulated categories)",
                "Mann-Whitney U test (two independent non-parametric groups)"
            ]
        },
        "t5-a1-021": {
            "options": [
                "Type I error: Rejecting a true null hypothesis (false positive)",
                "Type II error: Failing to reject a false null hypothesis (false negative)",
                "Type III error: Incorrectly formulating an alternative hypothesis",
                "Type IV error: Selecting an inappropriate statistical testing model"
            ]
        },
        "t5-a1-022": {
            "options": [
                "Consistency and repeatability of a measurement tool across repeated trials",
                "Degree to which a measurement tool evaluates what it purports to measure",
                "Sensitivity of an instrument to detect subtle meaningful clinical changes",
                "Correlation between a newly developed field test and a gold standard test"
            ]
        },
        "t5-a1-023": {
            "options": [
                "Sympathetic nervous system dominance indicating accumulated athlete fatigue",
                "Parasympathetic vagal dominance indicating favorable athlete recovery status",
                "Immediate depletion of skeletal muscle phosphocreatine energy stores",
                "Severe reduction in left ventricular end-diastolic cardiac filling volume"
            ]
        },
        "t5-a1-024": {
            "options": [
                "Session-RPE method (Rating of Perceived Exertion * Duration in minutes)",
                "Tri-axial accelerometer PlayerLoad metric calculated from vector integrals",
                "Global Positioning System total sprinting distance covered above 25 km/h",
                "Metabolic equivalent of task multiplied by resting oxygen consumption"
            ]
        },
        "t5-a1-025": {
            "options": [
                "Cold water immersion therapy performed at 10°C to 15°C for 10 to 15 minutes",
                "Infrared sauna heat exposure performed at 80°C for 45 consecutive minutes",
                "Passive complete bed rest without nutritional or hydration intervention",
                "High-intensity plyometric depth jumping performed immediately post-match"
            ]
        },
        "t5-a1-026": {
            "options": [
                "Blunts acute inflammatory signaling, satellite cell activation, and hypertrophy",
                "Accelerates ribosomal translation initiation and myofibrillar protein synthesis",
                "Increases intramuscular temperature to promote continuous collagen remodeling",
                "Decreases central nervous system fatigue by selectively elevating growth hormone"
            ]
        },
        "t5-a1-027": {
            "options": [
                "Stage 3 non-REM slow-wave sleep (delta wave deep restorative sleep)",
                "Stage 1 non-REM transitional sleep (light alpha-theta wave sleep)",
                "Stage 2 non-REM spindle sleep (theta wave sleep spindle phase)",
                "Stage 4 REM sleep (active rapid eye movement dream sleep phase)"
            ]
        },
        "t5-a1-028": {
            "options": [
                "Broad-External attention (reading defensive coverage across the field)",
                "Narrow-External attention (focusing strictly on the golf ball at address)",
                "Broad-Internal attention (analyzing tactical game strategies in mind)",
                "Narrow-Internal attention (monitoring somatic heart rate and breathing)"
            ]
        },
        "t5-a1-029": {
            "options": [
                "Emotional/physical exhaustion, sport devaluation, and reduced accomplishment",
                "Delayed onset muscle soreness, joint swelling, and acute ligament sprain",
                "Elevated circulating creatine kinase, glycogen depletion, and insomnia",
                "Loss of technical skill execution, tactile numbness, and motor tremor"
            ]
        },
        "t5-a1-030": {
            "options": [
                "Linear distance covered per unit time (running speed in m/s)",
                "Rate of change of velocity with respect to time (acceleration in m/s²)",
                "Mechanical work output performed per unit time (wattage power)",
                "Magnitude of ground reaction force per unit mass (relative force)"
            ]
        },
        "t5-a1-031": {
            "options": [
                "Concealing group allocation sequence from researchers until enrollment",
                "Preventing athletes from knowing their final competitive tournament scores",
                "Hiding research funding sources and financial sponsorships from ethics boards",
                "Preventing participants from knowing the identity of study investigators"
            ]
        },
        "t5-a1-032": {
            "options": [
                "Total injuries per 1,000 athlete-exposure hours across matches and training",
                "Total kilograms of ice used in athletic training rooms per calendar month",
                "Percentage of competitive matches won following orthopedic surgery",
                "Total number of injured players divided by stadium spectators attending"
            ]
        },
        "t5-a2-001": {
            "options": [
                "Target Olympic Podium Scheme (TOPS elite athlete support)",
                "Khelo India National Programme for Sports Development",
                "National Sports Development Fund (NSDF financial board)",
                "Special Area Games Scheme (SAG talent spotting program)"
            ]
        },
        "t5-a2-002": {
            "options": [
                "Rs. 50,000 per month out-of-pocket allowance for training and competition",
                "Rs. 10,000 per month out-of-pocket allowance for training and competition",
                "Rs. 1,00,000 per month out-of-pocket allowance for training and competition",
                "Rs. 5,000 per month out-of-pocket allowance for training and competition"
            ]
        },
        "t5-a2-003": {
            "options": [
                "Major Dhyan Chand Khel Ratna Award for highest athletic achievement",
                "Arjuna Award for outstanding sports performance over four years",
                "Dronacharya Award for lifetime coaching excellence and dedication",
                "Rashtriya Khel Protsahan Puruskar for corporate sports support"
            ]
        },
        "t5-a2-004": {
            "options": [
                "S1: Anabolic Agents (exogenous and endogenous anabolic steroids)",
                "S6: Stimulants (prohibited strictly during in-competition testing)",
                "P1: Beta-blockers (prohibited strictly in specified target sports)",
                "S9: Glucocorticoids (prohibited in-competition via oral routes)"
            ]
        },
        "t5-a2-005": {
            "options": [
                "Athlete is strictly liable whenever a prohibited substance is found in their sample",
                "Athlete is liable only if intentional performance enhancement can be proven",
                "Athlete is exempt if the prohibited substance was prescribed by a physician",
                "Athlete is liable only during official international championship events"
            ]
        },
        "t5-a2-006": {
            "options": [
                "National Anti-Doping Disciplinary Panel (NADDP initial hearing panel)",
                "National Anti-Doping Appeal Panel (NADAP appellate tribunal)",
                "Court of Arbitration for Sport (CAS ordinary arbitration panel)",
                "Supreme Court of India (Special Leave Petition appellate bench)"
            ]
        },
        "t5-a2-007": {
            "options": [
                "Tanner-Whitehouse 3 (TW3) method analyzing left wrist/hand radiographs",
                "Greulich-Pyle (GP) atlas method analyzing cervical spine plain films",
                "Dual-energy X-ray absorptiometry (DEXA) analyzing total body densitometry",
                "Musculoskeletal ultrasound analyzing femoral distal growth plate closure"
            ]
        },
        "t5-a2-008": {
            "options": [
                "Age limit of 70 years and maximum cumulative tenure limits for office bearers",
                "Age limit of 50 years and mandatory lifelong appointments for all presidents",
                "Age limit of 80 years and unrestricted consecutive terms for executive posts",
                "Age limit of 40 years and mandatory rotation of all international delegates"
            ]
        },
        "t5-b-001": {
            "options": [
                "Lachman test at 20° to 30° knee flexion (highest diagnostic sensitivity)",
                "Anterior drawer test at 90° knee flexion with neutral foot rotation",
                "Pivot shift test at 30° knee flexion with valgus torque and internal rotation",
                "McMurray test at 90° knee flexion with external tibial axial rotation"
            ]
        },
        "t5-b-002": {
            "options": [
                "Thessaly test performed at 20° knee flexion with dynamic axial rotation",
                "Lachman test performed at 30° knee flexion with anterior tibial translation",
                "Posterior drawer test performed at 90° knee flexion with posterior force",
                "Valgus stress test performed at 0° knee flexion with medial joint opening"
            ]
        },
        "t5-b-003": {
            "options": [
                "Hawkins-Kennedy impingement test at 90° forward flexion and internal rotation",
                "Neer impingement test at maximal passive elevation in the scapular plane",
                "Speed's test for the long head of the biceps brachii tendon at 90° flexion",
                "Empty Can (Jobe) test for supraspinatus muscle tendinopathy at 90° abduction"
            ]
        },
        "t5-b-004": {
            "options": [
                "Calcaneofibular ligament (CFL) in anatomical neutral dorsiflexion",
                "Anterior talofibular ligament (ATFL) in plantarflexion and inversion",
                "Posterior talofibular ligament (PTFL) in maximal active dorsiflexion",
                "Deltoid ligament complex (DLC) in combined eversion and external rotation"
            ]
        },
        "t5-b-005": {
            "options": [
                "External rotation > Abduction > Internal rotation (capsular pattern)",
                "Internal rotation > External rotation > Flexion (capsular pattern)",
                "Flexion > Extension > External rotation (capsular pattern)",
                "Abduction > Internal rotation > External rotation (capsular pattern)"
            ]
        },
        "t5-b-006": {
            "options": [
                "Delorme progressive resistance exercise system (50% - 75% - 100% 10RM)",
                "Oxford regressive resistance exercise system (100% - 75% - 50% 10RM)",
                "Daily adjustable progressive resistance exercise system (DAPRE protocol)",
                "Isometric maximal voluntary contraction training protocol (MVC protocol)"
            ]
        },
        "t5-b-007": {
            "options": [
                "Alfredson eccentric heel-drop protocol (3 sets of 15 reps twice daily)",
                "Stanish eccentric tendon loading protocol (daily progressive speed work)",
                "Silbernagel combined loading protocol (eccentric-concentric drills)",
                "Cook and Purdam isometric tendon loading protocol (sustained holds)"
            ]
        },
        "t5-b-008": {
            "options": [
                "Increases patellar tendon load and quadriceps demand by reducing calf drive",
                "Decreases patellar tendon strain by shifting ground reaction forces posteriorly",
                "Eliminates quadriceps activation to allow passive hip extension loading",
                "Increases hamstring co-contraction to protect the anterior cruciate ligament"
            ]
        },
        "t5-b-009": {
            "options": [
                "Autogenic inhibition via Golgi tendon organ Ib afferents of target muscle",
                "Reciprocal inhibition via muscle spindle Ia afferents of antagonist muscle",
                "Cutaneous reflex facilitation via tactile mechanoreceptors of joint capsule",
                "Gamma motor neuron activation increasing baseline muscle spindle discharge"
            ]
        },
        "t5-b-010": {
            "options": [
                "Grade I (small amplitude oscillation at beginning of available range)",
                "Grade II (large amplitude oscillation within resistance-free mid-range)",
                "Grade III (large amplitude oscillation extending to end of available range)",
                "Grade IV (small amplitude oscillation performed at end of available range)"
            ]
        },
        "t5-b-011": {
            "options": [
                "Supraspinatus initiates abduction (0°–15°); Deltoid continues abduction (15°–90°)",
                "Deltoid initiates abduction (0°–15°); Supraspinatus continues abduction (15°–90°)",
                "Infraspinatus initiates abduction (0°–15°); Teres Major continues abduction",
                "Subscapularis initiates abduction (0°–15°); Pectoralis Major continues abduction"
            ]
        },
        "t5-b-012": {
            "options": [
                "Tibia rotates externally on femur in terminal open-chain extension",
                "Tibia rotates internally on femur in terminal open-chain extension",
                "Femur rotates externally on tibia in initial closed-chain flexion",
                "Femur translates posteriorly on tibia in terminal open-chain extension"
            ]
        },
        "t5-b-013": {
            "options": [
                "First-class lever (fulcrum located between effort and resistance load)",
                "Second-class lever (resistance load located between fulcrum and effort)",
                "Third-class lever (effort force applied between fulcrum and load)",
                "Fourth-class lever (effort and load acting in identical parallel planes)"
            ]
        },
        "t5-b-014": {
            "options": [
                "Initial contact phase (heel strike event during stance)",
                "Loading response phase (shock absorption during stance)",
                "Mid-stance phase (single-limb support balance during stance)",
                "Initial swing phase (limb acceleration reaches peak knee flexion)"
            ]
        },
        "t5-b-015": {
            "options": [
                "Gluteus medius weakness (superior gluteal nerve lesion)",
                "Quadriceps weakness (femoral nerve motor branch lesion)",
                "Gastrocnemius contracture (posterior tibial nerve lesion)",
                "Tibialis anterior paralysis (deep peroneal nerve lesion)"
            ]
        },
        "t5-b-016": {
            "options": [
                "Strong clinical evidence demonstrating long-term functional superiority",
                "Limited or no clinically meaningful benefit over sham/placebo control",
                "Moderate evidence demonstrating superiority over core exercise therapy",
                "First-line primary intervention recommended in international guidelines"
            ]
        },
        "t5-b-017": {
            "options": [
                "Chronic non-specific low back pain rehabilitation",
                "Acute post-operative pain and trauma pain control",
                "Structural spinal deformity correction and realignment",
                "Reversal of long-standing spasticity after stroke"
            ]
        },
        "t5-b-018": {
            "options": [
                "Pivot shift test (dynamic anterolateral rotatory subluxation evaluation)",
                "Anterior drawer test (tibial anterior translation at 90° knee flexion)",
                "Lachman test (highest diagnostic sensitivity for acute ACL tears)",
                "McMurray test (posterior meniscal fibrocartilage tear evaluation)"
            ]
        },
        "t5-b-019": {
            "options": [
                "Structural hyaline cartilage regeneration on serial MRI imaging",
                "Significant reduction in pain and meaningful functional improvement",
                "Complete reversal of joint space narrowing on plain radiography",
                "Restoration of pristine juvenile joint contact biomechanics"
            ]
        },
        "t5-b-020": {
            "options": [
                "Demonstrate at least 10° active wrist extension and 10° finger extension",
                "Demonstrate at least 30° active shoulder abduction and 30° elbow extension",
                "Demonstrate at least 45° active hip flexion and 45° knee flexion extension",
                "Demonstrate at least 20° active ankle dorsiflexion and 20° plantarflexion"
            ]
        },
        "t5-b-021": {
            "options": [
                "Progressive eccentric-concentric tendon loading protocols (Alfredson/HSR)",
                "Isometric training performed strictly at a single joint angle",
                "Passive stretching programs performed without active muscle load",
                "Low-load endurance cycling performed for acute muscle hematomas"
            ]
        },
        "t5-b-022": {
            "options": [
                "Spasticity is velocity-dependent; Rigidity is velocity-independent",
                "Spasticity is velocity-independent; Rigidity is velocity-dependent",
                "Spasticity causes lead-pipe tone; Rigidity causes clasp-knife tone",
                "Spasticity is cerebellar in origin; Rigidity is pyramidal in origin"
            ]
        },
        "t5-b-023": {
            "options": [
                "Centralization of symptoms (distal pain moves proximally toward spine)",
                "Peripheralization of symptoms (proximal pain radiates into lower limb)",
                "Directional preference abolition (pain remains constant in all planes)",
                "Spinal functional instability (lumbar translation increases on flexion)"
            ]
        },
        "t5-b-024": {
            "options": [
                "Active cardiac pacemaker or electronic implant over thoracic region",
                "Chronic osteoarthritis of the glenohumeral joint without pain",
                "Delayed onset muscle soreness following unaccustomed resistance work",
                "Mild patellofemoral pain syndrome without localized joint effusion"
            ]
        },
        "t5-b-025": {
            "options": [
                "Mulligan Mobilization with Movement (MWM glide technique)",
                "Maitland passive oscillatory mobilization (POM technique)",
                "Kaltenborn linear traction and glide (KTG technique)",
                "Cyriax deep transverse friction massage (DTF technique)"
            ]
        },
        "t5-b-026": {
            "options": [
                "Straight Leg Raise test (SLR for L4–S1 lumbar nerve roots)",
                "Prone Knee Bend test (PKB for L2–L4 femoral nerve roots)",
                "Upper Limb Tension Test 1 (ULTT1 for median nerve trunk)",
                "Upper Limb Tension Test 3 (ULTT3 for radial nerve trunk)"
            ]
        },
        "t5-b-027": {
            "options": [
                "2:1 ratio (2° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:2 ratio (1° glenohumeral motion for every 2° scapulothoracic motion)",
                "3:1 ratio (3° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:1 ratio (1° glenohumeral motion for every 1° scapulothoracic motion)"
            ]
        },
        "t5-b-028": {
            "options": [
                "Upper Trapezius, Lower Trapezius, and Serratus Anterior muscles",
                "Upper Trapezius, Levator Scapulae, and Rhomboid Major muscles",
                "Pectoralis Minor, Latissimus Dorsi, and Subscapularis muscles",
                "Middle Trapezius, Infraspinatus, and Teres Major muscles"
            ]
        },
        "t5-b-029": {
            "options": [
                "Popliteus muscle (unlocks knee via internal tibial rotation in open chain)",
                "Quadriceps femoris (locks knee via external tibial rotation in open chain)",
                "Gastrocnemius muscle (flexes knee via ankle plantarflexion in closed chain)",
                "Biceps femoris muscle (stabilizes knee via fibular external rotation)"
            ]
        },
        "t5-b-030": {
            "options": [
                "0° to 15° of closed-chain knee flexion during standing",
                "60° to 90° of closed-chain knee flexion during deep squats",
                "20° to 30° of closed-chain knee flexion during walking",
                "120° to 140° of closed-chain knee flexion during kneeling"
            ]
        },
        "t5-b-031": {
            "options": [
                "Deep peroneal nerve palsy causing tibialis anterior muscle weakness",
                "Femoral nerve compression causing quadriceps femoris muscle weakness",
                "Tibial nerve entrapment causing gastrocnemius muscle spasticity",
                "Obturator nerve lesion causing adductor longus muscle weakness"
            ]
        },
        "t5-b-032": {
            "options": [
                "Single peak curve reaching 0.5× body weight at mid-stance",
                "Linear progressive ramp reaching 3.0× body weight at toe-off",
                "Bimodal 'M-shaped' curve with two peaks reaching ~1.1–1.2× body weight",
                "Flat plateau curve maintaining 1.0× body weight throughout stance"
            ]
        },
        "t5-b-033": {
            "options": [
                "Superimposing two out-of-phase medium-frequency currents",
                "Delivering continuous galvanic direct current through pads",
                "Modulating high-voltage monophasic pulsed electric current",
                "Discharging high-frequency electromagnetic radio oscillations"
            ]
        },
        "t5-b-034": {
            "options": [
                "Initial vasoconstriction followed by cyclical cold-induced vasodilation",
                "Continuous uninterrupted vasodilation maintaining high skin perfusion",
                "Sustained continuous vasoconstriction preventing peripheral re-warming",
                "Sudden arterial spasm leading to irreversible ischemic tissue necrosis"
            ]
        },
        "t5-b-035": {
            "options": [
                "Task-specific training focusing on functional motor tasks",
                "Passive range of motion exercises without active effort",
                "Prolonged static splinting of affected spastic limbs",
                "Continuous low-intensity electrical stimulation alone"
            ]
        },
        "t5-b-036": {
            "options": [
                "Remodeling phase (woven bone replaced by lamellar trabecular bone)",
                "Inflammatory phase (hematoma formation and cellular infiltration)",
                "Soft callus phase (fibrocartilaginous bridge development at gap)",
                "Hard callus phase (endochondral ossification forming woven bone)"
            ]
        },
        "t5-b-037": {
            "options": [
                "Grade I (microscopic tearing with normal ligament laxity, <5 mm)",
                "Grade II (partial tearing with moderate joint laxity, 5–10 mm)",
                "Grade III (complete ligament disruption with gross laxity, >10 mm)",
                "Grade IV (complete ligament rupture with neurovascular injury, >20 mm)"
            ]
        },
        "t5-b-038": {
            "options": [
                "Progression of pain from proximal spine distally into the foot",
                "Abolition of distal pain with centralization toward spine midline",
                "Spontaneous recovery of motor strength without directional preference",
                "Symmetrical increase in lumbar paraspinal muscle hypertonicity"
            ]
        },
        "t5-b-039": {
            "options": [
                "Tibial nerve in the popliteal space and posterior compartment",
                "Common peroneal nerve at the fibular neck and lateral knee",
                "Saphenous nerve along the medial joint line and tibia border",
                "Sural nerve along the posterolateral ankle and calcaneus border"
            ]
        },
        "t5-b-040": {
            "options": [
                "Grade V: High-velocity low-amplitude thrust (HVLAT at anatomical barrier)",
                "Grade I: Small amplitude oscillation at the beginning of available range",
                "Grade II: Large amplitude oscillation within the resistance-free range",
                "Grade III: Large amplitude oscillation extending into the end of range"
            ]
        },
        "t5-c-001": {
            "options": [
                "Right Quadratus Lumborum strain during side flexion bowling impact",
                "Left Lumbar Pars Interarticularis Bone Stress Injury (Spondylolysis)",
                "Lumbar disc herniation with L5 nerve root radiculopathy",
                "Sacroiliac joint anterior sprain with pelvic ring asymmetry"
            ]
        },
        "t5-c-002": {
            "options": [
                "T1-weighted plain MRI without fat suppression sequences",
                "T2-weighted fat-suppressed / STIR MRI of the lumbar spine",
                "Standing anteroposterior plain projection radiography",
                "Diagnostic musculoskeletal ultrasound of lumbar multifidus"
            ]
        },
        "t5-c-003": {
            "options": [
                "Cessation of bowling for 8–12 weeks, core stabilization, and bowling action review",
                "Immediate posterior spinal fusion with pedicle screw fixation in week one",
                "Forced aggressive hyperextension bowling drills performed to muscle failure",
                "Complete bed rest in a rigid fiberglass body jacket for twelve months"
            ]
        },
        "t5-c-004": {
            "options": [
                "Mixed bowling action (excessive shoulder counter-rotation with front-on hips)",
                "Side-on bowling action (aligned shoulder and hip axis throughout delivery)",
                "Front-on bowling action (square hips and shoulders facing the batsman)",
                "Semi-open bowling action (minimal trunk lateral flexion at release)"
            ]
        },
        "t5-c-005": {
            "options": [
                "Subacromial Impingement Syndrome (SAIS lesion)",
                "Internal / Undersurface Glenohumeral Impingement",
                "Traumatic Anterior Glenohumeral Instability",
                "Adhesive Capsulitis (Frozen Shoulder lesion)"
            ]
        },
        "t5-c-006": {
            "options": [
                "Glenohumeral internal rotation deficit and scapular dyskinesis",
                "Excessive internal rotation with restricted external rotation range",
                "Pectoralis major contracture with anterior clavicle subluxation",
                "Supraspinatus tendon complete rupture with humeral head migration"
            ]
        },
        "t5-c-007": {
            "options": [
                "Sleeper stretch and cross-body adduction stretching for posterior capsule",
                "Doorway stretching in maximal external rotation for anterior capsule",
                "Overhead bar hangs without stabilization for inferior capsule",
                "Standing wall stretches with cervical lateral flexion for upper trapezius"
            ]
        },
        "t5-c-008": {
            "options": [
                "Eccentric wrist extensor loading, radial nerve sliders, and supinator release",
                "Paraffin wax heat pack applications performed without active exercise",
                "Passive wrist extension manipulation under general hospital anesthesia",
                "Complete upper extremity casting for six months with absolute rest"
            ]
        },
        "t5-c-009": {
            "options": [
                "Passive calf stretching on a table for six months without balance drills",
                "Supervised progressive balance board training, perturbations, and agility drills",
                "Complete immobilization in a rigid plastic fracture boot for one year",
                "Applying ice packs to the lateral malleolus while resting in bed"
            ]
        },
        "t5-c-010": {
            "options": [
                "Mechanical hip joint traction performed in supine position",
                "High-velocity manipulation into sudden ankle inversion/plantarflexion",
                "Immobilization of the subtalar joint in a rigid walking cast",
                "Mulligan posterior talar glide during active weight-bearing lunge"
            ]
        },
        "t5-c-011": {
            "options": [
                "It causes permanent lifelong athletic disability requiring sports retirement",
                "It requires immediate surgical excision of the calcaneus under anesthesia",
                "It represents a malignant bone tumor requiring immediate surgical amputation",
                "It is a self-limiting traction apophysitis that resolves upon skeletal fusion"
            ]
        },
        "t5-c-012": {
            "options": [
                "Running barefoot on hard concrete roads to stimulate bone hardening",
                "Injecting high-dose corticosteroids into the subcalcaneal heel fat pad",
                "Inserting shock-absorbing heel cups or heel lifts and avoiding barefoot runs",
                "Wearing rigid steel-toed industrial safety boots during tennis matches"
            ]
        },
        "t5-c-013": {
            "options": [
                "Deep vein thrombosis in the deep posterior calf compartment",
                "Anterior Tibial Cortex Stress Fracture (high-risk bone stress injury)",
                "Gastrocnemius muscle belly grade I minor strain along medial head",
                "Diffuse Medial Tibial Stress Syndrome along posteromedial border"
            ]
        },
        "t5-c-014": {
            "options": [
                "It consistently causes acute bacterial infection of the popliteal artery",
                "It transforms the cortical bone into fragile elastic cartilage in days",
                "It is subject to constant tensile strain and has high risk of non-union",
                "It heals completely within twenty-four hours without any rest needed"
            ]
        },
        "t5-c-015": {
            "options": [
                "No, return to pivoting sports is prohibited for five years post-op",
                "No, limb symmetry index must exceed 200% across all functional hops",
                "Yes, but only if all resistance training exercises are discontinued",
                "Yes, meets all functional, strength, biomechanical, and psychological criteria"
            ]
        },
        "t5-c-016": {
            "options": [
                "WADA regulations strictly ban athletic participation for twelve months",
                "Graft ligamentization and biological maturation continue up to 12–24 months",
                "Athletes forget all soccer tactical formations if they return before 12 months",
                "Skeletal bone mineral density drops to zero between 6 and 9 months post-op"
            ]
        },
        "t5-c-017": {
            "options": [
                "Shallow knee flexion landings completely protect cruciate ligaments",
                "High knee valgus, hip internal rotation, and shallow landing produce high ACL strain",
                "The athlete demonstrates optimal force attenuation with minimal ACL load",
                "The athlete has zero mechanical ground reaction force passing through the knee"
            ]
        },
        "t5-c-018": {
            "options": [
                "Instructing the athlete to land with stiff, straight knees on impact",
                "Video feedback and external cues promoting deeper knee flexion and softer landings",
                "Applying ice packs to the knee while walking backwards on the track",
                "Immobilizing the ankle in ninety degrees plantarflexion using a cast"
            ]
        },
        "t5-c-019": {
            "options": [
                "Degenerative spondylolisthesis with Meyerding Grade IV vertebral slip",
                "Active Grade I Pre-Fracture Spondylolysis (pars stress reaction)",
                "Chronic ununited spondylolytic non-union with sclerotic bone margins",
                "Thoracic Scheuermann's disease with anterior vertebral wedging"
            ]
        },
        "t5-c-020": {
            "options": [
                "Relative rest from bowling for 8–12 weeks, core stability, and workload management",
                "Immediate return to bowling 100 overs per week with heavy hyperextension",
                "Permanent total bed rest for five consecutive years in a fiberglass cast",
                "Immediate posterior spinal fusion with pedicle screws within twenty-four hours"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_5.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_5.json successfully!")

if __name__ == '__main__':
    rebalance_t5()

# re-run with final 16 fixes
with open('mock_tests/mock_test_5.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't5-a1-001':
        q['options'] = [
            "One-repetition maximal barbell bench press test",
            "Thirty-second Wingate anaerobic bicycle sprint test",
            "Standing vertical countermovement jump power test",
            "Twelve-minute continuous aerobic running distance test"
        ]
    if q['id'] == 't5-a1-005':
        q['options'] = [
            "Adenosine Triphosphate-Phosphocreatine system",
            "Anaerobic Fast Glycolytic energy system",
            "Aerobic Mitochondrial Oxidative system",
            "Beta-Oxidation and Fatty Acid system"
        ]
    if q['id'] == 't5-a1-021':
        q['options'] = [
            "Type I error: Rejecting a true null hypothesis",
            "Type II error: Failing to reject a false null",
            "Type III error: Formulating an invalid hypothesis",
            "Type IV error: Selecting an inappropriate test"
        ]
    if q['id'] == 't5-a1-024':
        q['options'] = [
            "Session-RPE method (Rating of Perceived Exertion * Duration)",
            "PlayerLoad metric (accelerometer vector magnitude integral)",
            "High-speed running distance (GPS tracking above threshold)",
            "Heart rate training impulse (TRIMP method calculation)"
        ]
    if q['id'] == 't5-b-001':
        q['options'] = [
            "Lachman test at 20° to 30° knee flexion",
            "Anterior drawer test at 90° knee flexion",
            "Pivot shift test at 30° knee flexion",
            "McMurray test at 90° knee flexion"
        ]
    if q['id'] == 't5-b-003':
        q['options'] = [
            "Hawkins-Kennedy test at 90° flexion",
            "Neer elevation test at 90° elevation",
            "Speed test at 90° shoulder flexion",
            "Empty Can test at 90° abduction"
        ]
    if q['id'] == 't5-b-021':
        q['options'] = [
            "Progressive eccentric tendon loading protocols",
            "Isometric training performed at single joint angles",
            "Passive stretching programs without active loading",
            "Low-load endurance cycling for muscle hematomas"
        ]
    if q['id'] == 't5-b-040':
        q['options'] = [
            "Grade V: High-velocity low-amplitude thrust",
            "Grade I: Small amplitude oscillation at early range",
            "Grade II: Large amplitude oscillation in mid-range",
            "Grade III: Large amplitude oscillation at end-range"
        ]
    if q['id'] == 't5-c-001':
        q['options'] = [
            "Quadratus Lumborum acute muscle belly strain",
            "Lumbar Pars Interarticularis Bone Stress Injury",
            "Lumbar intervertebral disc herniation lesion",
            "Sacroiliac joint anterior ligamentous sprain"
        ]
    if q['id'] == 't5-c-002':
        q['options'] = [
            "T1-weighted plain MRI without fat suppression sequences",
            "T2-weighted fat-suppressed MRI of the lumbar spine",
            "Standing AP plain radiography of the lumbar spine",
            "Musculoskeletal ultrasound of lumbar multifidus"
        ]
    if q['id'] == 't5-c-005':
        q['options'] = [
            "Subacromial Impingement Syndrome",
            "Internal Undersurface Impingement",
            "Traumatic Anterior Instability",
            "Adhesive Capsulitis Frozen Shoulder"
        ]
    if q['id'] == 't5-c-013':
        q['options'] = [
            "Deep vein thrombosis in the deep posterior compartment",
            "Anterior Tibial Cortex Stress Fracture (high risk)",
            "Gastrocnemius muscle strain in the medial belly",
            "Diffuse Medial Tibial Stress Syndrome (low risk)"
        ]
    if q['id'] == 't5-c-016':
        q['options'] = [
            "WADA regulations strictly ban athletic participation for 12 months",
            "Graft ligamentization and maturation continue up to 12 to 24 months",
            "Athletes forget tactical soccer positioning if away for 12 months",
            "Bone mineral density drops to absolute zero for 6 to 9 months"
        ]
    if q['id'] == 't5-c-019':
        q['options'] = [
            "Degenerative spondylolisthesis with vertebral slip",
            "Active Grade I Pre-Fracture Spondylolysis reaction",
            "Chronic ununited spondylolytic non-union pseudoarthrosis",
            "Thoracic Scheuermann's disease with vertebral wedging"
        ]
    if q['id'] == 't5-c-020':
        q['options'] = [
            "Relative rest from bowling for 8 to 12 weeks with core stabilization",
            "Immediate return to bowling 100 overs per week with hyperextension",
            "Permanent total bed rest for 5 consecutive years in a fiberglass cast",
            "Immediate posterior spinal fusion with pedicle screws in 24 hours"
        ]

with open('mock_tests/mock_test_5.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 5 fully patched!")

with open('mock_tests/mock_test_5.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't5-b-006':
        q['options'] = [
            "Delorme progressive resistance exercise system (PRE)",
            "Oxford regressive resistance exercise system (RRE)",
            "Daily adjustable progressive resistance exercise (DAPRE)",
            "Isometric maximal voluntary contraction protocol (MVC)"
        ]
    if q['id'] == 't5-c-002':
        q['options'] = [
            "T1-weighted plain MRI sequence of the spine",
            "T2-weighted STIR MRI sequence of the spine",
            "Standing AP plain radiography of the spine",
            "Musculoskeletal ultrasound scan of multifidus"
        ]
    if q['id'] == 't5-c-013':
        q['options'] = [
            "Deep vein thrombosis in posterior compartment",
            "Anterior Tibial Cortex Stress Fracture (high risk)",
            "Gastrocnemius muscle strain in medial head (low risk)",
            "Diffuse Medial Tibial Stress Syndrome (low risk)"
        ]

with open('mock_tests/mock_test_5.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 5 100% finished!")

with open('mock_tests/mock_test_5.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't5-c-002':
        q['options'] = [
            "T1-weighted plain MRI sequence of the spine (plain sequence)",
            "T2-weighted STIR MRI sequence of the spine (fluid sensitive)",
            "Standing 2D plain radiography of the spine (radiographic view)",
            "Musculoskeletal 3D ultrasound of the spine (sonographic view)"
        ]
    if q['id'] == 't5-c-013':
        q['options'] = [
            "Deep vein thrombosis in posterior compartment (DVT condition)",
            "Anterior Tibial Cortex Stress Fracture (high-risk bone BSI)",
            "Gastrocnemius muscle strain in medial head (low-risk strain)",
            "Diffuse Medial Tibial Stress Syndrome (low-risk bone MTSS)"
        ]

with open('mock_tests/mock_test_5.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 5 100% verified!")
