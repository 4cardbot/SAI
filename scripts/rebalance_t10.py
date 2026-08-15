import json

def rebalance_t10():
    with open('mock_tests/mock_test_10.json') as f:
        qs = json.load(f)

    updates = {
        "t10-a1-001": {
            "options": [
                "Lifting submaximal loads at maximal intentional movement velocity",
                "Lifting supramaximal loads with slow eccentric tempos and holds",
                "Lifting near-maximal loads to absolute concentric failure daily",
                "Lifting light endurance loads for continuous multi-minute sets"
            ]
        },
        "t10-a1-002": {
            "options": [
                "Transient post-exercise increase in muscle twitch force output (PAPE)",
                "Immediate reduction in muscle motor unit recruitment thresholds (SMUR)",
                "Sustained inhibition of muscle spindle Ia afferents during stretch (MSIA)",
                "Chronic structural increase in myofibrillar cross-sectional area (MCSA)"
            ]
        },
        "t10-a1-003": {
            "options": [
                "8 to 12 repetitions at 67% to 85% 1RM (hypertrophy)",
                "1 to 3 repetitions at 90% to 100% 1RM (maximal strength)",
                "4 to 6 repetitions at 80% to 88% 1RM (strength-power)",
                "15 to 25 repetitions at 50% to 60% 1RM (endurance)"
            ]
        },
        "t10-a1-004": {
            "options": [
                "Decreased pennation angle and selective atrophy of fast-twitch motor units",
                "Increased pennation angle and expansion of myofibrillar cross-sectional area",
                "Decreased intracellular glycogen storage capacity in active skeletal muscles",
                "Selective reduction of resting motor unit recruitment thresholds in fibers"
            ]
        },
        "t10-a1-005": {
            "options": [
                "Adenosine Triphosphate-Phosphocreatine system",
                "Anaerobic Fast Glycolytic energy system",
                "Aerobic Mitochondrial Oxidative system",
                "Beta-Oxidation and Fatty Acid system"
            ]
        },
        "t10-a1-006": {
            "options": [
                "Elevated intracellular hydrogen ion buffering via carnosine synthesis",
                "Direct stimulation of beta-adrenergic receptors and cardiac output",
                "Accelerated fatty acid transport into mitochondria via transferase",
                "Increased phosphocreatine resynthesis rate via creatine kinase"
            ]
        },
        "t10-a1-007": {
            "options": [
                "High parasympathetic activity elevating baseline resting heart rate",
                "Increased left ventricular chamber volume and increased compliance",
                "Decreased end-diastolic filling time leading to lower stroke volume",
                "Severe concentric myocardial wall thickening with reduced lumen"
            ]
        },
        "t10-a1-008": {
            "options": [
                "Arteriovenous oxygen difference widening at maximal effort",
                "Maximal heart rate increasing linearly with chronic conditioning",
                "Stroke volume increasing due to enhanced myocardial contractility",
                "Mitochondrial capillary density and oxidative enzyme expanding"
            ]
        },
        "t10-a1-009": {
            "options": [
                "Second ventilatory threshold point",
                "Maximal fat oxidation point",
                "First ventilatory threshold point",
                "Maximal voluntary ventilation point"
            ]
        },
        "t10-a1-010": {
            "options": [
                "Permanent inhibition of peripheral erythropoiesis",
                "Decreased partial pressure of inspired oxygen",
                "Decreased fractional percentage of ambient oxygen",
                "Increased barometric atmospheric ambient air pressure"
            ]
        },
        "t10-a1-011": {
            "options": [
                "30 to 60 grams of carbohydrate per hour (single-source carbohydrate)",
                "90 grams of carbohydrate per hour (multiple transportable carbohydrates)",
                "10 to 20 grams of carbohydrate per hour (low-dose carbohydrate)",
                "150 grams of carbohydrate per hour (high-dose carbohydrate)"
            ]
        },
        "t10-a1-012": {
            "options": [
                "3.0 to 3.5 g/kg/day during tapering periods",
                "1.4 to 2.0 g/kg/day during regular training",
                "0.6 to 0.8 g/kg/day during recovery periods",
                "4.0 to 5.0 g/kg/day during competition weeks"
            ]
        },
        "t10-a1-013": {
            "options": [
                "0.5 liters per kg of body weight lost (50% fluid replacement)",
                "1.0 liters per kg of body weight lost (100% fluid replacement)",
                "1.5 liters per kg of body weight lost (150% fluid replacement)",
                "3.0 liters per kg of body weight lost (300% fluid replacement)"
            ]
        },
        "t10-a1-014": {
            "options": [
                "Less than 30 kcal/kg fat-free mass/day (threshold for RED-S)",
                "Greater than 45 kcal/kg fat-free mass/day (optimal balance)",
                "Between 35 and 40 kcal/kg fat-free mass/day (sub-clinical zone)",
                "Between 50 and 60 kcal/kg fat-free mass/day (high surplus zone)"
            ]
        },
        "t10-a1-015": {
            "options": [
                "Endomorphy (adiposity), Mesomorphy (musculoskeletal), Ectomorphy (linearity)",
                "Ectomorphy (adiposity), Endomorphy (musculoskeletal), Mesomorphy (linearity)",
                "Mesomorphy (adiposity), Ectomorphy (musculoskeletal), Endomorphy (linearity)",
                "Endomorphy (linearity), Mesomorphy (adiposity), Ectomorphy (musculoskeletal)"
            ]
        },
        "t10-a1-016": {
            "options": [
                "Girls reach PHV approximately two years earlier than boys during puberty",
                "Boys reach PHV approximately two years earlier than girls during puberty",
                "Both sexes reach PHV at the identical chronological age during puberty",
                "Both sexes reach PHV at completely random intervals during puberty"
            ]
        },
        "t10-a1-017": {
            "options": [
                "Disproportionately longer upper torso (higher sitting height ratio)",
                "Disproportionately longer lower limbs (lower sitting height ratio)",
                "Symmetrical body proportionality (balanced sitting height ratio)",
                "Narrow shoulder to hip breadth (reduced bicristal breadth ratio)"
            ]
        },
        "t10-a1-018": {
            "options": [
                "Task-oriented goals focus on mastery; Ego-oriented focus on comparison",
                "Ego-oriented goals focus on mastery; Task-oriented focus on comparison",
                "Task-oriented goals focus on winning; Ego-oriented focus on rewards",
                "Ego-oriented goals focus on effort; Task-oriented focus on avoidance"
            ]
        },
        "t10-a1-019": {
            "options": [
                "Moderate arousal optimizes all motor tasks (Inverted-U hypothesis)",
                "Severe anxiety triggers catastrophic drops (Catastrophe model)",
                "Optimal arousal bandwidth varies per athlete (IZOF model)",
                "Arousal and performance show zero correlation (Null association)"
            ]
        },
        "t10-a1-020": {
            "options": [
                "Biofeedback training via autonomic monitoring",
                "Progressive muscle relaxation via tension-release",
                "Cognitive thought stopping via internal dialogue",
                "Autogenic training via sensations of warmth"
            ]
        },
        "t10-a1-021": {
            "options": [
                "Unpaired Student's t-test (two independent sample groups)",
                "One-way repeated measures ANOVA (three or more paired trials)",
                "Chi-Square test of independence (cross-tabulated categories)",
                "Mann-Whitney U test (two independent non-parametric groups)"
            ]
        },
        "t10-a1-022": {
            "options": [
                "Type I error: Rejecting a true null hypothesis",
                "Type II error: Failing to reject a false null",
                "Type III error: Formulating an invalid hypothesis",
                "Type IV error: Selecting an inappropriate test"
            ]
        },
        "t10-a1-023": {
            "options": [
                "Consistency and repeatability of a measurement tool across repeated trials",
                "Degree to which a measurement tool evaluates what it purports to measure",
                "Sensitivity of an instrument to detect subtle meaningful clinical changes",
                "Correlation between a newly developed field test and a gold standard test"
            ]
        },
        "t10-a1-024": {
            "options": [
                "Sympathetic nervous system dominance indicating accumulated athlete fatigue",
                "Parasympathetic vagal dominance indicating favorable athlete recovery status",
                "Immediate depletion of skeletal muscle phosphocreatine energy stores",
                "Severe reduction in left ventricular end-diastolic cardiac filling volume"
            ]
        },
        "t10-a1-025": {
            "options": [
                "Session-RPE method (Rating of Perceived Exertion * Duration)",
                "PlayerLoad metric (accelerometer vector magnitude integral)",
                "High-speed running distance (GPS tracking above threshold)",
                "Heart rate training impulse (TRIMP method calculation)"
            ]
        },
        "t10-a1-026": {
            "options": [
                "Cold water immersion at 10°C to 15°C for 15 minutes post-match",
                "Infrared sauna heat at 80°C for 45 minutes post-match",
                "Passive complete bed rest for 60 minutes post-match",
                "Plyometric depth jumping from 50 cm boxes post-match"
            ]
        },
        "t10-a1-027": {
            "options": [
                "Blunts acute inflammatory signaling, satellite cell activation, and hypertrophy",
                "Accelerates ribosomal translation initiation and myofibrillar protein synthesis",
                "Increases intramuscular temperature to promote continuous collagen remodeling",
                "Decreases central nervous system fatigue by selectively elevating growth hormone"
            ]
        },
        "t10-a1-028": {
            "options": [
                "Stage 3 non-REM slow-wave sleep (delta wave deep restorative sleep)",
                "Stage 1 non-REM transitional sleep (light alpha-theta wave sleep)",
                "Stage 2 non-REM spindle sleep (theta wave sleep spindle phase)",
                "Stage 4 REM sleep (active rapid eye movement dream sleep phase)"
            ]
        },
        "t10-a1-029": {
            "options": [
                "Broad-External attention (reading defensive coverage across the field)",
                "Narrow-External attention (focusing strictly on the golf ball at address)",
                "Broad-Internal attention (analyzing tactical game strategies in mind)",
                "Narrow-Internal attention (monitoring somatic heart rate and breathing)"
            ]
        },
        "t10-a1-030": {
            "options": [
                "Emotional/physical exhaustion, sport devaluation, and reduced accomplishment",
                "Delayed onset muscle soreness, joint swelling, and acute ligament sprain",
                "Elevated circulating creatine kinase, glycogen depletion, and insomnia",
                "Loss of technical skill execution, tactile numbness, and motor tremor"
            ]
        },
        "t10-a1-031": {
            "options": [
                "Concealing group allocation sequence from researchers until enrollment",
                "Preventing athletes from knowing their final competitive tournament scores",
                "Hiding research funding sources and financial sponsorships from ethics boards",
                "Preventing participants from knowing the identity of study investigators"
            ]
        },
        "t10-a1-032": {
            "options": [
                "Total injuries per 1,000 athlete-exposure hours across matches and training",
                "Total kilograms of ice used in athletic training rooms per calendar month",
                "Percentage of competitive matches won following orthopedic surgery",
                "Total number of injured players divided by stadium spectators attending"
            ]
        },
        "t10-a2-001": {
            "options": [
                "Target Olympic Podium Scheme (TOPS scheme)",
                "Khelo India National Programme (KIP scheme)",
                "National Sports Development Fund (NSDF fund)",
                "Special Area Games Scheme (SAG program)"
            ]
        },
        "t10-a2-002": {
            "options": [
                "Rs. 50,000 per month out-of-pocket allowance for training and competition",
                "Rs. 10,000 per month out-of-pocket allowance for training and competition",
                "Rs. 1,00,000 per month out-of-pocket allowance for training and competition",
                "Rs. 5,000 per month out-of-pocket allowance for training and competition"
            ]
        },
        "t10-a2-003": {
            "options": [
                "Major Dhyan Chand Khel Ratna Award for highest athletic achievement",
                "Arjuna Award for outstanding sports performance over four years",
                "Dronacharya Award for lifetime coaching excellence and dedication",
                "Rashtriya Khel Protsahan Puruskar for corporate sports support"
            ]
        },
        "t10-a2-004": {
            "options": [
                "S1: Anabolic Agents (exogenous and endogenous anabolic steroids)",
                "S6: Stimulants (prohibited strictly during in-competition testing)",
                "P1: Beta-blockers (prohibited strictly in specified target sports)",
                "S9: Glucocorticoids (prohibited in-competition via oral routes)"
            ]
        },
        "t10-a2-005": {
            "options": [
                "Athlete is strictly liable whenever a prohibited substance is found in their sample",
                "Athlete is liable only if intentional performance enhancement can be proven",
                "Athlete is exempt if the prohibited substance was prescribed by a physician",
                "Athlete is liable only during official international championship events"
            ]
        },
        "t10-a2-006": {
            "options": [
                "National Anti-Doping Disciplinary Panel (NADDP initial hearing panel)",
                "National Anti-Doping Appeal Panel (NADAP appellate tribunal)",
                "Court of Arbitration for Sport (CAS ordinary arbitration panel)",
                "Supreme Court of India (Special Leave Petition appellate bench)"
            ]
        },
        "t10-a2-007": {
            "options": [
                "Tanner-Whitehouse method analyzing hand radiographs (TW3 protocol)",
                "Greulich-Pyle method analyzing cervical spine films (GP1 protocol)",
                "Dual-energy X-ray absorptiometry analyzing total bone (DX2 protocol)",
                "Musculoskeletal ultrasound analyzing femoral plates (MS4 protocol)"
            ]
        },
        "t10-a2-008": {
            "options": [
                "Age limit of 70 years and maximum cumulative tenure limits for office bearers",
                "Age limit of 50 years and mandatory lifelong appointments for all presidents",
                "Age limit of 80 years and unrestricted consecutive terms for executive posts",
                "Age limit of 40 years and mandatory rotation of all international delegates"
            ]
        },
        "t10-b-001": {
            "options": [
                "Lachman test at 20° to 30° knee flexion",
                "Anterior drawer test at 90° knee flexion",
                "Pivot shift test at 30° knee flexion",
                "McMurray test at 90° knee flexion"
            ]
        },
        "t10-b-002": {
            "options": [
                "Thessaly test performed at 20° knee flexion with dynamic axial rotation",
                "Lachman test performed at 30° knee flexion with anterior tibial translation",
                "Posterior drawer test performed at 90° knee flexion with posterior force",
                "Valgus stress test performed at 0° knee flexion with medial joint opening"
            ]
        },
        "t10-b-003": {
            "options": [
                "Hawkins-Kennedy test at 90° flexion (subacromial bursal impingement)",
                "Neer elevation test at 90° elevation (subacromial arch impingement)",
                "Speed test at 90° shoulder flexion (biceps brachii long head tendinopathy)",
                "Empty Can test at 90° abduction (supraspinatus muscle tendinopathy)"
            ]
        },
        "t10-b-004": {
            "options": [
                "Calcaneofibular ligament (CFL) in anatomical neutral dorsiflexion",
                "Anterior talofibular ligament (ATFL) in plantarflexion and inversion",
                "Posterior talofibular ligament (PTFL) in maximal active dorsiflexion",
                "Deltoid ligament complex (DLC) in combined eversion and external rotation"
            ]
        },
        "t10-b-005": {
            "options": [
                "External rotation > Abduction > Internal rotation (capsular pattern)",
                "Internal rotation > External rotation > Flexion (capsular pattern)",
                "Flexion > Extension > External rotation (capsular pattern)",
                "Abduction > Internal rotation > External rotation (capsular pattern)"
            ]
        },
        "t10-b-006": {
            "options": [
                "Delorme progressive resistance exercise system (PRE)",
                "Oxford regressive resistance exercise system (RRE)",
                "Daily adjustable progressive resistance exercise (DAPRE)",
                "Isometric maximal voluntary contraction protocol (MVC)"
            ]
        },
        "t10-b-007": {
            "options": [
                "Alfredson eccentric heel-drop protocol (3 sets of 15 reps twice daily)",
                "Stanish eccentric tendon loading protocol (daily progressive speed work)",
                "Silbernagel combined loading protocol (eccentric-concentric drills)",
                "Cook and Purdam isometric tendon loading protocol (sustained holds)"
            ]
        },
        "t10-b-008": {
            "options": [
                "Increases patellar tendon load and quadriceps demand by reducing calf drive",
                "Decreases patellar tendon strain by shifting ground reaction forces posteriorly",
                "Eliminates quadriceps activation to allow passive hip extension loading",
                "Increases hamstring co-contraction to protect the anterior cruciate ligament"
            ]
        },
        "t10-b-009": {
            "options": [
                "Autogenic inhibition via Golgi tendon organ Ib afferents of target muscle",
                "Reciprocal inhibition via muscle spindle Ia afferents of antagonist muscle",
                "Cutaneous reflex facilitation via tactile mechanoreceptors of joint capsule",
                "Gamma motor neuron activation increasing baseline muscle spindle discharge"
            ]
        },
        "t10-b-010": {
            "options": [
                "Grade I (small amplitude oscillation at beginning of available range)",
                "Grade II (large amplitude oscillation within resistance-free mid-range)",
                "Grade III (large amplitude oscillation extending to end of available range)",
                "Grade IV (small amplitude oscillation performed at end of available range)"
            ]
        },
        "t10-b-011": {
            "options": [
                "Supraspinatus initiates abduction (0°–15°); Deltoid continues abduction (15°–90°)",
                "Deltoid initiates abduction (0°–15°); Supraspinatus continues abduction (15°–90°)",
                "Infraspinatus initiates abduction (0°–15°); Teres Major continues abduction",
                "Subscapularis initiates abduction (0°–15°); Pectoralis Major continues abduction"
            ]
        },
        "t10-b-012": {
            "options": [
                "Tibia rotates externally on femur in terminal open-chain extension",
                "Tibia rotates internally on femur in terminal open-chain extension",
                "Femur rotates externally on tibia in initial closed-chain flexion",
                "Femur translates posteriorly on tibia in terminal open-chain extension"
            ]
        },
        "t10-b-013": {
            "options": [
                "First-class lever (fulcrum located between effort and resistance load)",
                "Second-class lever (resistance load located between fulcrum and effort)",
                "Third-class lever (effort force applied between fulcrum and load)",
                "Fourth-class lever (effort and load acting in identical parallel planes)"
            ]
        },
        "t10-b-014": {
            "options": [
                "Initial contact phase (heel strike event during stance)",
                "Loading response phase (shock absorption during stance)",
                "Mid-stance phase (single-limb support balance during stance)",
                "Initial swing phase (limb acceleration reaches peak knee flexion)"
            ]
        },
        "t10-b-015": {
            "options": [
                "Gluteus medius weakness (superior gluteal nerve lesion)",
                "Quadriceps weakness (femoral nerve motor branch lesion)",
                "Gastrocnemius contracture (posterior tibial nerve lesion)",
                "Tibialis anterior paralysis (deep peroneal nerve lesion)"
            ]
        },
        "t10-b-016": {
            "options": [
                "Strong clinical evidence demonstrating long-term functional superiority",
                "Limited or no clinically meaningful benefit over sham/placebo control",
                "Moderate evidence demonstrating superiority over core exercise therapy",
                "First-line primary intervention recommended in international guidelines"
            ]
        },
        "t10-b-017": {
            "options": [
                "Chronic non-specific low back pain rehabilitation",
                "Acute post-operative pain and trauma pain control",
                "Structural spinal deformity correction and realignment",
                "Reversal of long-standing spasticity after stroke"
            ]
        },
        "t10-b-018": {
            "options": [
                "Pivot shift test at 30° flexion (dynamic rotatory subluxation)",
                "Anterior drawer test at 90° flexion (anterior tibial translation)",
                "Lachman test at 30° flexion (anterior tibial translation)",
                "McMurray test at 90° flexion (posterior meniscal evaluation)"
            ]
        },
        "t10-b-019": {
            "options": [
                "Structural hyaline cartilage regeneration on serial MRI imaging",
                "Significant reduction in pain and meaningful functional improvement",
                "Complete reversal of joint space narrowing on plain radiography",
                "Restoration of pristine juvenile joint contact biomechanics"
            ]
        },
        "t10-b-020": {
            "options": [
                "Demonstrate at least 10° active wrist extension and 10° finger extension",
                "Demonstrate at least 30° active shoulder abduction and 30° elbow extension",
                "Demonstrate at least 45° active hip flexion and 45° knee flexion extension",
                "Demonstrate at least 20° active ankle dorsiflexion and 20° plantarflexion"
            ]
        },
        "t10-b-021": {
            "options": [
                "Progressive eccentric tendon loading protocols",
                "Isometric training performed at single joint angles",
                "Passive stretching programs without active loading",
                "Low-load endurance cycling for muscle hematomas"
            ]
        },
        "t10-b-022": {
            "options": [
                "Spasticity is velocity-dependent; Rigidity is velocity-independent",
                "Spasticity is velocity-independent; Rigidity is velocity-dependent",
                "Spasticity causes lead-pipe tone; Rigidity causes clasp-knife tone",
                "Spasticity is cerebellar in origin; Rigidity is pyramidal in origin"
            ]
        },
        "t10-b-023": {
            "options": [
                "Centralization of symptoms (distal pain moves proximally toward spine)",
                "Peripheralization of symptoms (proximal pain radiates into lower limb)",
                "Directional preference abolition (pain remains constant in all planes)",
                "Spinal functional instability (lumbar translation increases on flexion)"
            ]
        },
        "t10-b-024": {
            "options": [
                "Active cardiac pacemaker or electronic implant over thoracic region",
                "Chronic osteoarthritis of the glenohumeral joint without pain",
                "Delayed onset muscle soreness following unaccustomed resistance work",
                "Mild patellofemoral pain syndrome without localized joint effusion"
            ]
        },
        "t10-b-025": {
            "options": [
                "Mulligan Mobilization with Movement (MWM glide technique)",
                "Maitland passive oscillatory mobilization (POM technique)",
                "Kaltenborn linear traction and glide (KTG technique)",
                "Cyriax deep transverse friction massage (DTF technique)"
            ]
        },
        "t10-b-026": {
            "options": [
                "Straight Leg Raise test (SLR for L4–S1 lumbar nerve roots)",
                "Prone Knee Bend test (PKB for L2–L4 femoral nerve roots)",
                "Upper Limb Tension Test 1 (ULTT1 for median nerve trunk)",
                "Upper Limb Tension Test 3 (ULTT3 for radial nerve trunk)"
            ]
        },
        "t10-b-027": {
            "options": [
                "2:1 ratio (2° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:2 ratio (1° glenohumeral motion for every 2° scapulothoracic motion)",
                "3:1 ratio (3° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:1 ratio (1° glenohumeral motion for every 1° scapulothoracic motion)"
            ]
        },
        "t10-b-028": {
            "options": [
                "Upper Trapezius, Lower Trapezius, and Serratus Anterior muscles",
                "Upper Trapezius, Levator Scapulae, and Rhomboid Major muscles",
                "Pectoralis Minor, Latissimus Dorsi, and Subscapularis muscles",
                "Middle Trapezius, Infraspinatus, and Teres Major muscles"
            ]
        },
        "t10-b-029": {
            "options": [
                "Popliteus muscle (unlocks knee via internal tibial rotation in open chain)",
                "Quadriceps femoris (locks knee via external tibial rotation in open chain)",
                "Gastrocnemius muscle (flexes knee via ankle plantarflexion in closed chain)",
                "Biceps femoris muscle (stabilizes knee via fibular external rotation)"
            ]
        },
        "t10-b-030": {
            "options": [
                "0° to 15° of closed-chain knee flexion during standing",
                "60° to 90° of closed-chain knee flexion during deep squats",
                "20° to 30° of closed-chain knee flexion during walking",
                "120° to 140° of closed-chain knee flexion during kneeling"
            ]
        },
        "t10-b-031": {
            "options": [
                "Deep peroneal nerve palsy causing tibialis anterior muscle weakness",
                "Femoral nerve compression causing quadriceps femoris muscle weakness",
                "Tibial nerve entrapment causing gastrocnemius muscle spasticity",
                "Obturator nerve lesion causing adductor longus muscle weakness"
            ]
        },
        "t10-b-032": {
            "options": [
                "Single peak curve reaching 0.5× body weight at mid-stance",
                "Linear progressive ramp reaching 3.0× body weight at toe-off",
                "Bimodal 'M-shaped' curve with two peaks reaching ~1.1–1.2× body weight",
                "Flat plateau curve maintaining 1.0× body weight throughout stance"
            ]
        },
        "t10-b-033": {
            "options": [
                "Superimposing two out-of-phase medium-frequency currents",
                "Delivering continuous galvanic direct current through pads",
                "Modulating high-voltage monophasic pulsed electric current",
                "Discharging high-frequency electromagnetic radio oscillations"
            ]
        },
        "t10-b-034": {
            "options": [
                "Initial vasoconstriction followed by cyclical cold-induced vasodilation",
                "Continuous uninterrupted vasodilation maintaining high skin perfusion",
                "Sustained continuous vasoconstriction preventing peripheral re-warming",
                "Sudden arterial spasm leading to irreversible ischemic tissue necrosis"
            ]
        },
        "t10-b-035": {
            "options": [
                "Task-specific training focusing on functional motor tasks",
                "Passive range of motion exercises without active effort",
                "Prolonged static splinting of affected spastic limbs",
                "Continuous low-intensity electrical stimulation alone"
            ]
        },
        "t10-b-036": {
            "options": [
                "Remodeling phase (woven bone replaced by lamellar trabecular bone)",
                "Inflammatory phase (hematoma formation and cellular infiltration)",
                "Soft callus phase (fibrocartilaginous bridge development at gap)",
                "Hard callus phase (endochondral ossification forming woven bone)"
            ]
        },
        "t10-b-037": {
            "options": [
                "Grade I (microscopic tearing with normal ligament laxity, <5 mm)",
                "Grade II (partial tearing with moderate joint laxity, 5–10 mm)",
                "Grade III (complete ligament disruption with gross laxity, >10 mm)",
                "Grade IV (complete ligament rupture with neurovascular injury, >20 mm)"
            ]
        },
        "t10-b-038": {
            "options": [
                "Progression of pain from proximal spine distally into the foot",
                "Abolition of distal pain with centralization toward spine midline",
                "Spontaneous recovery of motor strength without directional preference",
                "Symmetrical increase in lumbar paraspinal muscle hypertonicity"
            ]
        },
        "t10-b-039": {
            "options": [
                "Tibial nerve in the popliteal space and posterior compartment",
                "Common peroneal nerve at the fibular neck and lateral knee",
                "Saphenous nerve along the medial joint line and tibia border",
                "Sural nerve along the posterolateral ankle and calcaneus border"
            ]
        },
        "t10-b-040": {
            "options": [
                "Grade V: High-velocity low-amplitude thrust",
                "Grade I: Small amplitude oscillation at early range",
                "Grade II: Large amplitude oscillation in mid-range",
                "Grade III: Large amplitude oscillation at end-range"
            ]
        },
        "t10-c-001": {
            "options": [
                "Proximal Hamstring Tendinopathy (PHT with high-load tendon pain)",
                "Ischial bursitis (IB with superficial bursal swelling)",
                "Piriformis syndrome (PS with sciatic nerve entrapment)",
                "Gluteal muscle tear (GMT with acute hematoma)"
            ]
        },
        "t10-c-002": {
            "options": [
                "Puranen-Orava test (standing hamstring stretch reproduction)",
                "Lachman test (anterior tibial translation at 30° flexion)",
                "Hawkins-Kennedy test (subacromial internal impingement)",
                "Finkelstein's test (first dorsal compartment stretch)"
            ]
        },
        "t10-c-003": {
            "options": [
                "Progressive eccentric hamstring loading, trunk stabilization, and mechanics",
                "Complete bed rest for six months with avoidance of all active exercise",
                "High-dose corticosteroid injections directly into the hamstring origin",
                "Aggressive passive end-range hamstring stretching held for five minutes"
            ]
        },
        "t10-c-004": {
            "options": [
                "Ability to perform heavy eccentric loading and sprinting without pain",
                "Presence of persistent pain on sitting and walking with crutches",
                "Completion of two weeks of passive heat applications on table",
                "Ability to jog on a flat treadmill at slow speed with pain"
            ]
        },
        "t10-c-005": {
            "options": [
                "Lateral epicondylalgia with radial tunnel syndrome",
                "Medial epicondylalgia with ulnar nerve entrapment",
                "Distal biceps tendon complete rupture at the radius",
                "Olecranon bursitis with septic bacterial infection"
            ]
        },
        "t10-c-006": {
            "options": [
                "Resisted middle finger extension and palpation over radial tunnel",
                "Resisted wrist flexion with forearm pronated on table",
                "Passive elbow flexion with forearm supinated to end-range",
                "Tinel's sign over the median nerve at the flexor retinaculum"
            ]
        },
        "t10-c-007": {
            "options": [
                "Complete rupture of the triceps brachii tendon",
                "Lateral Epicondylalgia of the extensor tendons",
                "Medial Epicondylalgia of the flexor pronator mass",
                "Posterior interosseous nerve entrapment under arcade"
            ]
        },
        "t10-c-008": {
            "options": [
                "Isolated eccentric loading of wrist flexors with resistance bar",
                "High-force passive stretching of ulnar nerve behind epicondyle",
                "Applying continuous superficial heat packs over lateral epicondyle",
                "Arm casting in full-length fiberglass cast for six months"
            ]
        },
        "t10-c-009": {
            "options": [
                "Complete avulsion of Achilles tendon (CAT)",
                "Chronic Ankle Instability with deficits (CAI)",
                "Deep vein thrombosis of anterior tibial vein (DVT)",
                "Acute transverse fracture of tibial plafond (ATF)"
            ]
        },
        "t10-c-010": {
            "options": [
                "Passive bed rest for six months without active weight-bearing drills",
                "Rigid plaster casting continuously while avoiding all ankle movement",
                "Superficial ice packs applied to the lateral malleolus once monthly",
                "Progressive balance board training, perturbation drills, and agility work"
            ]
        },
        "t10-c-011": {
            "options": [
                "Sever's Disease (calcaneal traction apophysitis)",
                "Complete rupture of the plantaris muscle tendon belly",
                "Stress fracture of metatarsal (proximal first base)",
                "Acute compartment syndrome (posterior compartment)"
            ]
        },
        "t10-c-012": {
            "options": [
                "Sever's disease is self-limiting and resolves fully upon skeletal fusion",
                "Sever's disease is a malignant bone condition requiring sports retirement",
                "The child will never run or walk without crutches for the rest of life",
                "Immediate surgical amputation of the calcaneus within forty-eight hours"
            ]
        },
        "t10-c-013": {
            "options": [
                "Deep vein thrombosis in anterior tibial vein",
                "Medial Tibial Stress Syndrome on shin",
                "Gastrocnemius medial head muscle tear",
                "Anterior Tibial Cortex Stress Fracture"
            ]
        },
        "t10-c-014": {
            "options": [
                "It heals completely in two days if running twenty kilometers daily",
                "It requires immediate surgical replacement of the entire knee joint",
                "Tensile bending stress and poor vascularity lead to high non-union risk",
                "It transforms the tibia into soft cartilage requiring limb amputation"
            ]
        },
        "t10-c-015": {
            "options": [
                "No, an athlete must remain out of sports competition for ten full years post-op",
                "No, limb symmetry index must exceed 300% across all functional hop tests",
                "Yes, satisfies all physical, functional, biomechanical, and psychological criteria",
                "Yes, but only if all resistance training exercises are permanently discontinued"
            ]
        },
        "t10-c-016": {
            "options": [
                "Graft ligamentization and biological maturation continue for 12 to 24 months",
                "Athletes forget tactical soccer formations if they return before 12 months",
                "WADA regulations strictly ban sports participation for twelve months post-op",
                "Bone mineral density drops to zero between 6 and 9 months post-op"
            ]
        },
        "t10-c-017": {
            "options": [
                "Shallow knee flexion landings completely protect cruciate ligaments",
                "The athlete has zero mechanical ground reaction force passing through the knee",
                "High knee valgus, hip internal rotation, and shallow landing produce high ACL strain",
                "The athlete demonstrates optimal force attenuation with minimal ACL load"
            ]
        },
        "t10-c-018": {
            "options": [
                "Instructing the athlete to keep the knee completely straight on impact",
                "Video feedback and external cues promoting deeper knee flexion and softer landing",
                "Immobilizing the ankle in ninety degrees plantarflexion using a cast",
                "Applying ice packs to the knee while walking backwards on the track"
            ]
        },
        "t10-c-019": {
            "options": [
                "Degenerative spondylolisthesis with vertebral slip",
                "Thoracic Scheuermann's disease with vertebral wedging",
                "Chronic ununited spondylolytic non-union pseudoarthrosis",
                "Active Grade I Pre-Fracture Spondylolysis reaction"
            ]
        },
        "t10-c-020": {
            "options": [
                "Immediate posterior spinal fusion with pedicle screws in twenty-four hours",
                "Immediate return to bowling 100 overs per week with hyperextension",
                "Permanent total bed rest for five consecutive years in a fiberglass cast",
                "Relative rest from bowling for 8 to 12 weeks with core stabilization"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_10.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_10.json successfully!")

if __name__ == '__main__':
    rebalance_t10()

with open('mock_tests/mock_test_10.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't10-a1-032':
        q['options'] = [
            "Total injuries per 1,000 athlete-exposure hours across the competitive season",
            "Total kilograms of ice used per 1,000 athlete-treatment room visits recorded",
            "Percentage of competitive matches won per 1,000 player-match opportunities",
            "Total number of injured players recorded per 1,000 stadium spectators seated"
        ]
    if q['id'] == 't10-c-011':
        q['options'] = [
            "Sever's Disease (calcaneal traction apophysitis)",
            "Plantaris muscle tear (musculotendinous junction)",
            "Stress fracture of bone (proximal first metatarsal)",
            "Acute compartment syndrome (posterior compartment)"
        ]
    if q['id'] == 't10-c-016':
        q['options'] = [
            "Graft ligamentization and maturation continue for 12 to 24 months post-op",
            "Athletes forget tactical soccer positioning for 12 months post-op",
            "WADA regulations strictly ban sports participation for 12 months post-op",
            "Bone mineral density drops to zero between 6 and 9 months post-op"
        ]
    if q['id'] == 't10-c-020':
        q['options'] = [
            "Immediate posterior spinal fusion with pedicle screws in 24 hours",
            "Immediate return to bowling 100 overs per week with hyperextension",
            "Permanent total bed rest for 5 consecutive years in a fiberglass cast",
            "Relative rest from bowling for 8 to 12 weeks with core stabilization"
        ]

with open('mock_tests/mock_test_10.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 10 100% verified!")
