import json

def rebalance_t9():
    with open('mock_tests/mock_test_9.json') as f:
        qs = json.load(f)

    updates = {
        "t9-a1-001": {
            "options": [
                "Lifting submaximal loads at maximal intentional movement velocity",
                "Lifting supramaximal loads with slow eccentric tempos and holds",
                "Lifting near-maximal loads to absolute concentric failure daily",
                "Lifting light endurance loads for continuous multi-minute sets"
            ]
        },
        "t9-a1-002": {
            "options": [
                "Transient post-exercise increase in muscle twitch force output (PAPE)",
                "Immediate reduction in muscle motor unit recruitment thresholds (SMUR)",
                "Sustained inhibition of muscle spindle Ia afferents during stretch (MSIA)",
                "Chronic structural increase in myofibrillar cross-sectional area (MCSA)"
            ]
        },
        "t9-a1-003": {
            "options": [
                "8 to 12 repetitions at 67% to 85% 1RM (hypertrophy)",
                "1 to 3 repetitions at 90% to 100% 1RM (maximal strength)",
                "4 to 6 repetitions at 80% to 88% 1RM (strength-power)",
                "15 to 25 repetitions at 50% to 60% 1RM (endurance)"
            ]
        },
        "t9-a1-004": {
            "options": [
                "Decreased pennation angle and selective atrophy of fast-twitch motor units",
                "Increased pennation angle and expansion of myofibrillar cross-sectional area",
                "Decreased intracellular glycogen storage capacity in active skeletal muscles",
                "Selective reduction of resting motor unit recruitment thresholds in fibers"
            ]
        },
        "t9-a1-005": {
            "options": [
                "Adenosine Triphosphate-Phosphocreatine system (ATP-PCr)",
                "Anaerobic Fast Glycolytic energy system (lactic pathway)",
                "Aerobic Mitochondrial Oxidative Phosphorylation system",
                "Beta-Oxidation and Free Fatty Acid catabolic pathway"
            ]
        },
        "t9-a1-006": {
            "options": [
                "Elevated intracellular hydrogen ion buffering via carnosine synthesis",
                "Direct stimulation of beta-adrenergic receptors and cardiac output",
                "Accelerated fatty acid transport into mitochondria via transferase",
                "Increased phosphocreatine resynthesis rate via creatine kinase"
            ]
        },
        "t9-a1-007": {
            "options": [
                "High parasympathetic activity elevating baseline resting heart rate",
                "Increased left ventricular chamber volume and increased compliance",
                "Decreased end-diastolic filling time leading to lower stroke volume",
                "Severe concentric myocardial wall thickening with reduced lumen"
            ]
        },
        "t9-a1-008": {
            "options": [
                "Arteriovenous oxygen difference widening at maximal effort",
                "Maximal heart rate increasing linearly with chronic conditioning",
                "Stroke volume increasing due to enhanced myocardial contractility",
                "Mitochondrial capillary density and oxidative enzyme expanding"
            ]
        },
        "t9-a1-009": {
            "options": [
                "Second ventilatory threshold point (VT2 compensation)",
                "Maximal fat oxidation point (FatMax zone peak)",
                "First ventilatory threshold point (VT1 buffering point)",
                "Maximal voluntary ventilation point (MVV limit point)"
            ]
        },
        "t9-a1-010": {
            "options": [
                "Permanent inhibition of peripheral erythropoiesis (EPO)",
                "Decreased partial pressure of oxygen in inspired air (PO2)",
                "Decreased fractional concentration of oxygen in air (FiO2)",
                "Increased barometric atmospheric ambient air pressure (Pb)"
            ]
        },
        "t9-a1-011": {
            "options": [
                "30 to 60 grams of carbohydrate per hour (single-source carbohydrate)",
                "90 grams of carbohydrate per hour (multiple transportable carbohydrates)",
                "10 to 20 grams of carbohydrate per hour (low-dose carbohydrate)",
                "150 grams of carbohydrate per hour (high-dose carbohydrate)"
            ]
        },
        "t9-a1-012": {
            "options": [
                "3.0 to 3.5 g/kg/day during tapering periods",
                "1.4 to 2.0 g/kg/day during regular training",
                "0.6 to 0.8 g/kg/day during recovery periods",
                "4.0 to 5.0 g/kg/day during competition weeks"
            ]
        },
        "t9-a1-013": {
            "options": [
                "0.5 liters per kg of body weight lost (50% fluid replacement)",
                "1.0 liters per kg of body weight lost (100% fluid replacement)",
                "1.5 liters per kg of body weight lost (150% fluid replacement)",
                "3.0 liters per kg of body weight lost (300% fluid replacement)"
            ]
        },
        "t9-a1-014": {
            "options": [
                "Less than 30 kcal/kg fat-free mass/day (threshold for RED-S)",
                "Greater than 45 kcal/kg fat-free mass/day (optimal balance)",
                "Between 35 and 40 kcal/kg fat-free mass/day (sub-clinical zone)",
                "Between 50 and 60 kcal/kg fat-free mass/day (high surplus zone)"
            ]
        },
        "t9-a1-015": {
            "options": [
                "Endomorphy (adiposity), Mesomorphy (musculoskeletal), Ectomorphy (linearity)",
                "Ectomorphy (adiposity), Endomorphy (musculoskeletal), Mesomorphy (linearity)",
                "Mesomorphy (adiposity), Ectomorphy (musculoskeletal), Endomorphy (linearity)",
                "Endomorphy (linearity), Mesomorphy (adiposity), Ectomorphy (musculoskeletal)"
            ]
        },
        "t9-a1-016": {
            "options": [
                "Girls reach PHV approximately two years earlier than boys during puberty",
                "Boys reach PHV approximately two years earlier than girls during puberty",
                "Both sexes reach PHV at the identical chronological age during puberty",
                "Both sexes reach PHV at completely random intervals during puberty"
            ]
        },
        "t9-a1-017": {
            "options": [
                "Disproportionately longer upper torso (higher sitting height ratio)",
                "Disproportionately longer lower limbs (lower sitting height ratio)",
                "Symmetrical body proportionality (balanced sitting height ratio)",
                "Narrow shoulder to hip breadth (reduced bicristal breadth ratio)"
            ]
        },
        "t9-a1-018": {
            "options": [
                "Task-oriented goals focus on mastery; Ego-oriented focus on comparison",
                "Ego-oriented goals focus on mastery; Task-oriented focus on comparison",
                "Task-oriented goals focus on winning; Ego-oriented focus on rewards",
                "Ego-oriented goals focus on effort; Task-oriented focus on avoidance"
            ]
        },
        "t9-a1-019": {
            "options": [
                "Moderate arousal optimizes all motor tasks (Inverted-U hypothesis)",
                "Severe anxiety triggers catastrophic drops (Catastrophe model)",
                "Optimal arousal bandwidth varies per athlete (IZOF model)",
                "Arousal and performance show zero correlation (Null association)"
            ]
        },
        "t9-a1-020": {
            "options": [
                "Biofeedback training via autonomic monitoring",
                "Progressive muscle relaxation via tension-release",
                "Cognitive thought stopping via internal dialogue",
                "Autogenic training via sensations of warmth"
            ]
        },
        "t9-a1-021": {
            "options": [
                "Unpaired Student's t-test (two independent sample groups)",
                "One-way repeated measures ANOVA (three or more paired trials)",
                "Chi-Square test of independence (cross-tabulated categories)",
                "Mann-Whitney U test (two independent non-parametric groups)"
            ]
        },
        "t9-a1-022": {
            "options": [
                "Type I error: Rejecting a true null hypothesis (false positive)",
                "Type II error: Failing to reject a false null (false negative)",
                "Type III error: Incorrectly formulating an alternative hypothesis",
                "Type IV error: Selecting an inappropriate statistical testing model"
            ]
        },
        "t9-a1-023": {
            "options": [
                "Consistency and repeatability of a measurement tool across repeated trials",
                "Degree to which a measurement tool evaluates what it purports to measure",
                "Sensitivity of an instrument to detect subtle meaningful clinical changes",
                "Correlation between a newly developed field test and a gold standard test"
            ]
        },
        "t9-a1-024": {
            "options": [
                "Sympathetic nervous system dominance indicating accumulated athlete fatigue",
                "Parasympathetic vagal dominance indicating favorable athlete recovery status",
                "Immediate depletion of skeletal muscle phosphocreatine energy stores",
                "Severe reduction in left ventricular end-diastolic cardiac filling volume"
            ]
        },
        "t9-a1-025": {
            "options": [
                "Session-RPE method (Rating of Perceived Exertion * Duration)",
                "PlayerLoad metric (accelerometer vector magnitude integral)",
                "High-speed running distance (GPS tracking above threshold)",
                "Heart rate training impulse (TRIMP method calculation)"
            ]
        },
        "t9-a1-026": {
            "options": [
                "Cold water immersion therapy performed at 10°C to 15°C for 10 to 15 minutes",
                "Infrared sauna heat exposure performed at 80°C for 45 consecutive minutes",
                "Passive complete bed rest without nutritional or hydration intervention",
                "High-intensity plyometric depth jumping performed immediately post-match"
            ]
        },
        "t9-a1-027": {
            "options": [
                "Blunts acute inflammatory signaling, satellite cell activation, and hypertrophy",
                "Accelerates ribosomal translation initiation and myofibrillar protein synthesis",
                "Increases intramuscular temperature to promote continuous collagen remodeling",
                "Decreases central nervous system fatigue by selectively elevating growth hormone"
            ]
        },
        "t9-a1-028": {
            "options": [
                "Stage 3 non-REM slow-wave sleep (delta wave deep restorative sleep)",
                "Stage 1 non-REM transitional sleep (light alpha-theta wave sleep)",
                "Stage 2 non-REM spindle sleep (theta wave sleep spindle phase)",
                "Stage 4 REM sleep (active rapid eye movement dream sleep phase)"
            ]
        },
        "t9-a1-029": {
            "options": [
                "Broad-External attention (reading defensive coverage across the field)",
                "Narrow-External attention (focusing strictly on the golf ball at address)",
                "Broad-Internal attention (analyzing tactical game strategies in mind)",
                "Narrow-Internal attention (monitoring somatic heart rate and breathing)"
            ]
        },
        "t9-a1-030": {
            "options": [
                "Emotional/physical exhaustion, sport devaluation, and reduced accomplishment",
                "Delayed onset muscle soreness, joint swelling, and acute ligament sprain",
                "Elevated circulating creatine kinase, glycogen depletion, and insomnia",
                "Loss of technical skill execution, tactile numbness, and motor tremor"
            ]
        },
        "t9-a1-031": {
            "options": [
                "Concealing group allocation sequence from researchers until enrollment",
                "Preventing athletes from knowing their final competitive tournament scores",
                "Hiding research funding sources and financial sponsorships from ethics boards",
                "Preventing participants from knowing the identity of study investigators"
            ]
        },
        "t9-a1-032": {
            "options": [
                "Total injuries per 1,000 athlete-exposure hours across matches and training",
                "Total kilograms of ice used in athletic training rooms per calendar month",
                "Percentage of competitive matches won following orthopedic surgery",
                "Total number of injured players divided by stadium spectators attending"
            ]
        },
        "t9-a2-001": {
            "options": [
                "Target Olympic Podium Scheme (TOPS elite athlete support)",
                "Khelo India National Programme for Sports Development",
                "National Sports Development Fund (NSDF financial board)",
                "Special Area Games Scheme (SAG talent spotting program)"
            ]
        },
        "t9-a2-002": {
            "options": [
                "Rs. 50,000 per month out-of-pocket allowance for training and competition",
                "Rs. 10,000 per month out-of-pocket allowance for training and competition",
                "Rs. 1,00,000 per month out-of-pocket allowance for training and competition",
                "Rs. 5,000 per month out-of-pocket allowance for training and competition"
            ]
        },
        "t9-a2-003": {
            "options": [
                "Major Dhyan Chand Khel Ratna Award for highest athletic achievement",
                "Arjuna Award for outstanding sports performance over four years",
                "Dronacharya Award for lifetime coaching excellence and dedication",
                "Rashtriya Khel Protsahan Puruskar for corporate sports support"
            ]
        },
        "t9-a2-004": {
            "options": [
                "S1: Anabolic Agents (exogenous and endogenous anabolic steroids)",
                "S6: Stimulants (prohibited strictly during in-competition testing)",
                "P1: Beta-blockers (prohibited strictly in specified target sports)",
                "S9: Glucocorticoids (prohibited in-competition via oral routes)"
            ]
        },
        "t9-a2-005": {
            "options": [
                "Athlete is strictly liable whenever a prohibited substance is found in their sample",
                "Athlete is liable only if intentional performance enhancement can be proven",
                "Athlete is exempt if the prohibited substance was prescribed by a physician",
                "Athlete is liable only during official international championship events"
            ]
        },
        "t9-a2-006": {
            "options": [
                "National Anti-Doping Disciplinary Panel (NADDP initial hearing panel)",
                "National Anti-Doping Appeal Panel (NADAP appellate tribunal)",
                "Court of Arbitration for Sport (CAS ordinary arbitration panel)",
                "Supreme Court of India (Special Leave Petition appellate bench)"
            ]
        },
        "t9-a2-007": {
            "options": [
                "Tanner-Whitehouse 3 (TW3) method analyzing left wrist/hand radiographs",
                "Greulich-Pyle (GP) atlas method analyzing cervical spine plain films",
                "Dual-energy X-ray absorptiometry (DEXA) analyzing total body densitometry",
                "Musculoskeletal ultrasound analyzing femoral distal growth plate closure"
            ]
        },
        "t9-a2-008": {
            "options": [
                "Age limit of 70 years and maximum cumulative tenure limits for office bearers",
                "Age limit of 50 years and mandatory lifelong appointments for all presidents",
                "Age limit of 80 years and unrestricted consecutive terms for executive posts",
                "Age limit of 40 years and mandatory rotation of all international delegates"
            ]
        },
        "t9-b-001": {
            "options": [
                "Lachman test at 20° to 30° knee flexion (highest diagnostic sensitivity)",
                "Anterior drawer test at 90° knee flexion with neutral foot rotation",
                "Pivot shift test at 30° knee flexion with valgus torque and internal rotation",
                "McMurray test at 90° knee flexion with external tibial axial rotation"
            ]
        },
        "t9-b-002": {
            "options": [
                "Thessaly test performed at 20° knee flexion with dynamic axial rotation",
                "Lachman test performed at 30° knee flexion with anterior tibial translation",
                "Posterior drawer test performed at 90° knee flexion with posterior force",
                "Valgus stress test performed at 0° knee flexion with medial joint opening"
            ]
        },
        "t9-b-003": {
            "options": [
                "Hawkins-Kennedy test at 90° flexion (subacromial bursal impingement)",
                "Neer elevation test at 90° elevation (subacromial arch impingement)",
                "Speed test at 90° shoulder flexion (biceps brachii long head tendinopathy)",
                "Empty Can test at 90° abduction (supraspinatus muscle tendinopathy)"
            ]
        },
        "t9-b-004": {
            "options": [
                "Calcaneofibular ligament (CFL) in anatomical neutral dorsiflexion",
                "Anterior talofibular ligament (ATFL) in plantarflexion and inversion",
                "Posterior talofibular ligament (PTFL) in maximal active dorsiflexion",
                "Deltoid ligament complex (DLC) in combined eversion and external rotation"
            ]
        },
        "t9-b-005": {
            "options": [
                "External rotation > Abduction > Internal rotation (capsular pattern)",
                "Internal rotation > External rotation > Flexion (capsular pattern)",
                "Flexion > Extension > External rotation (capsular pattern)",
                "Abduction > Internal rotation > External rotation (capsular pattern)"
            ]
        },
        "t9-b-006": {
            "options": [
                "Delorme progressive resistance exercise system (PRE 50%-75%-100%)",
                "Oxford regressive resistance exercise system (RRE 100%-75%-50%)",
                "Daily adjustable progressive resistance exercise system (DAPRE)",
                "Isometric maximal voluntary contraction training protocol (MVC)"
            ]
        },
        "t9-b-007": {
            "options": [
                "Alfredson eccentric heel-drop protocol (3 sets of 15 reps twice daily)",
                "Stanish eccentric tendon loading protocol (daily progressive speed work)",
                "Silbernagel combined loading protocol (eccentric-concentric drills)",
                "Cook and Purdam isometric tendon loading protocol (sustained holds)"
            ]
        },
        "t9-b-008": {
            "options": [
                "Increases patellar tendon load and quadriceps demand by reducing calf drive",
                "Decreases patellar tendon strain by shifting ground reaction forces posteriorly",
                "Eliminates quadriceps activation to allow passive hip extension loading",
                "Increases hamstring co-contraction to protect the anterior cruciate ligament"
            ]
        },
        "t9-b-009": {
            "options": [
                "Autogenic inhibition via Golgi tendon organ Ib afferents of target muscle",
                "Reciprocal inhibition via muscle spindle Ia afferents of antagonist muscle",
                "Cutaneous reflex facilitation via tactile mechanoreceptors of joint capsule",
                "Gamma motor neuron activation increasing baseline muscle spindle discharge"
            ]
        },
        "t9-b-010": {
            "options": [
                "Grade I (small amplitude oscillation at beginning of available range)",
                "Grade II (large amplitude oscillation within resistance-free mid-range)",
                "Grade III (large amplitude oscillation extending to end of available range)",
                "Grade IV (small amplitude oscillation performed at end of available range)"
            ]
        },
        "t9-b-011": {
            "options": [
                "Supraspinatus initiates abduction (0°–15°); Deltoid continues abduction (15°–90°)",
                "Deltoid initiates abduction (0°–15°); Supraspinatus continues abduction (15°–90°)",
                "Infraspinatus initiates abduction (0°–15°); Teres Major continues abduction",
                "Subscapularis initiates abduction (0°–15°); Pectoralis Major continues abduction"
            ]
        },
        "t9-b-012": {
            "options": [
                "Tibia rotates externally on femur in terminal open-chain extension",
                "Tibia rotates internally on femur in terminal open-chain extension",
                "Femur rotates externally on tibia in initial closed-chain flexion",
                "Femur translates posteriorly on tibia in terminal open-chain extension"
            ]
        },
        "t9-b-013": {
            "options": [
                "First-class lever (fulcrum located between effort and resistance load)",
                "Second-class lever (resistance load located between fulcrum and effort)",
                "Third-class lever (effort force applied between fulcrum and load)",
                "Fourth-class lever (effort and load acting in identical parallel planes)"
            ]
        },
        "t9-b-014": {
            "options": [
                "Initial contact phase (heel strike event during stance)",
                "Loading response phase (shock absorption during stance)",
                "Mid-stance phase (single-limb support balance during stance)",
                "Initial swing phase (limb acceleration reaches peak knee flexion)"
            ]
        },
        "t9-b-015": {
            "options": [
                "Gluteus medius weakness (superior gluteal nerve lesion)",
                "Quadriceps weakness (femoral nerve motor branch lesion)",
                "Gastrocnemius contracture (posterior tibial nerve lesion)",
                "Tibialis anterior paralysis (deep peroneal nerve lesion)"
            ]
        },
        "t9-b-016": {
            "options": [
                "Strong clinical evidence demonstrating long-term functional superiority",
                "Limited or no clinically meaningful benefit over sham/placebo control",
                "Moderate evidence demonstrating superiority over core exercise therapy",
                "First-line primary intervention recommended in international guidelines"
            ]
        },
        "t9-b-017": {
            "options": [
                "Chronic non-specific low back pain rehabilitation",
                "Acute post-operative pain and trauma pain control",
                "Structural spinal deformity correction and realignment",
                "Reversal of long-standing spasticity after stroke"
            ]
        },
        "t9-b-018": {
            "options": [
                "Pivot shift test (dynamic anterolateral rotatory subluxation evaluation)",
                "Anterior drawer test (tibial anterior translation at 90° knee flexion)",
                "Lachman test (highest diagnostic sensitivity for acute ACL tears)",
                "McMurray test (posterior meniscal fibrocartilage tear evaluation)"
            ]
        },
        "t9-b-019": {
            "options": [
                "Structural hyaline cartilage regeneration on serial MRI imaging",
                "Significant reduction in pain and meaningful functional improvement",
                "Complete reversal of joint space narrowing on plain radiography",
                "Restoration of pristine juvenile joint contact biomechanics"
            ]
        },
        "t9-b-020": {
            "options": [
                "Demonstrate at least 10° active wrist extension and 10° finger extension",
                "Demonstrate at least 30° active shoulder abduction and 30° elbow extension",
                "Demonstrate at least 45° active hip flexion and 45° knee flexion extension",
                "Demonstrate at least 20° active ankle dorsiflexion and 20° plantarflexion"
            ]
        },
        "t9-b-021": {
            "options": [
                "Progressive eccentric-concentric tendon loading protocols (Alfredson/HSR)",
                "Isometric training performed strictly at a single joint angle",
                "Passive stretching programs performed without active muscle load",
                "Low-load endurance cycling performed for acute muscle hematomas"
            ]
        },
        "t9-b-022": {
            "options": [
                "Spasticity is velocity-dependent; Rigidity is velocity-independent",
                "Spasticity is velocity-independent; Rigidity is velocity-dependent",
                "Spasticity causes lead-pipe tone; Rigidity causes clasp-knife tone",
                "Spasticity is cerebellar in origin; Rigidity is pyramidal in origin"
            ]
        },
        "t9-b-023": {
            "options": [
                "Centralization of symptoms (distal pain moves proximally toward spine)",
                "Peripheralization of symptoms (proximal pain radiates into lower limb)",
                "Directional preference abolition (pain remains constant in all planes)",
                "Spinal functional instability (lumbar translation increases on flexion)"
            ]
        },
        "t9-b-024": {
            "options": [
                "Active cardiac pacemaker or electronic implant over thoracic region",
                "Chronic osteoarthritis of the glenohumeral joint without pain",
                "Delayed onset muscle soreness following unaccustomed resistance work",
                "Mild patellofemoral pain syndrome without localized joint effusion"
            ]
        },
        "t9-b-025": {
            "options": [
                "Mulligan Mobilization with Movement (MWM glide technique)",
                "Maitland passive oscillatory mobilization (POM technique)",
                "Kaltenborn linear traction and glide (KTG technique)",
                "Cyriax deep transverse friction massage (DTF technique)"
            ]
        },
        "t9-b-026": {
            "options": [
                "Straight Leg Raise test (SLR for L4–S1 lumbar nerve roots)",
                "Prone Knee Bend test (PKB for L2–L4 femoral nerve roots)",
                "Upper Limb Tension Test 1 (ULTT1 for median nerve trunk)",
                "Upper Limb Tension Test 3 (ULTT3 for radial nerve trunk)"
            ]
        },
        "t9-b-027": {
            "options": [
                "2:1 ratio (2° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:2 ratio (1° glenohumeral motion for every 2° scapulothoracic motion)",
                "3:1 ratio (3° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:1 ratio (1° glenohumeral motion for every 1° scapulothoracic motion)"
            ]
        },
        "t9-b-028": {
            "options": [
                "Upper Trapezius, Lower Trapezius, and Serratus Anterior muscles",
                "Upper Trapezius, Levator Scapulae, and Rhomboid Major muscles",
                "Pectoralis Minor, Latissimus Dorsi, and Subscapularis muscles",
                "Middle Trapezius, Infraspinatus, and Teres Major muscles"
            ]
        },
        "t9-b-029": {
            "options": [
                "Popliteus muscle (unlocks knee via internal tibial rotation in open chain)",
                "Quadriceps femoris (locks knee via external tibial rotation in open chain)",
                "Gastrocnemius muscle (flexes knee via ankle plantarflexion in closed chain)",
                "Biceps femoris muscle (stabilizes knee via fibular external rotation)"
            ]
        },
        "t9-b-030": {
            "options": [
                "0° to 15° of closed-chain knee flexion during standing",
                "60° to 90° of closed-chain knee flexion during deep squats",
                "20° to 30° of closed-chain knee flexion during walking",
                "120° to 140° of closed-chain knee flexion during kneeling"
            ]
        },
        "t9-b-031": {
            "options": [
                "Deep peroneal nerve palsy causing tibialis anterior muscle weakness",
                "Femoral nerve compression causing quadriceps femoris muscle weakness",
                "Tibial nerve entrapment causing gastrocnemius muscle spasticity",
                "Obturator nerve lesion causing adductor longus muscle weakness"
            ]
        },
        "t9-b-032": {
            "options": [
                "Single peak curve reaching 0.5× body weight at mid-stance",
                "Linear progressive ramp reaching 3.0× body weight at toe-off",
                "Bimodal 'M-shaped' curve with two peaks reaching ~1.1–1.2× body weight",
                "Flat plateau curve maintaining 1.0× body weight throughout stance"
            ]
        },
        "t9-b-033": {
            "options": [
                "Superimposing two out-of-phase medium-frequency currents",
                "Delivering continuous galvanic direct current through pads",
                "Modulating high-voltage monophasic pulsed electric current",
                "Discharging high-frequency electromagnetic radio oscillations"
            ]
        },
        "t9-b-034": {
            "options": [
                "Initial vasoconstriction followed by cyclical cold-induced vasodilation",
                "Continuous uninterrupted vasodilation maintaining high skin perfusion",
                "Sustained continuous vasoconstriction preventing peripheral re-warming",
                "Sudden arterial spasm leading to irreversible ischemic tissue necrosis"
            ]
        },
        "t9-b-035": {
            "options": [
                "Task-specific training focusing on functional motor tasks",
                "Passive range of motion exercises without active effort",
                "Prolonged static splinting of affected spastic limbs",
                "Continuous low-intensity electrical stimulation alone"
            ]
        },
        "t9-b-036": {
            "options": [
                "Remodeling phase (woven bone replaced by lamellar trabecular bone)",
                "Inflammatory phase (hematoma formation and cellular infiltration)",
                "Soft callus phase (fibrocartilaginous bridge development at gap)",
                "Hard callus phase (endochondral ossification forming woven bone)"
            ]
        },
        "t9-b-037": {
            "options": [
                "Grade I (microscopic tearing with normal ligament laxity, <5 mm)",
                "Grade II (partial tearing with moderate joint laxity, 5–10 mm)",
                "Grade III (complete ligament disruption with gross laxity, >10 mm)",
                "Grade IV (complete ligament rupture with neurovascular injury, >20 mm)"
            ]
        },
        "t9-b-038": {
            "options": [
                "Progression of pain from proximal spine distally into the foot",
                "Abolition of distal pain with centralization toward spine midline",
                "Spontaneous recovery of motor strength without directional preference",
                "Symmetrical increase in lumbar paraspinal muscle hypertonicity"
            ]
        },
        "t9-b-039": {
            "options": [
                "Tibial nerve in the popliteal space and posterior compartment",
                "Common peroneal nerve at the fibular neck and lateral knee",
                "Saphenous nerve along the medial joint line and tibia border",
                "Sural nerve along the posterolateral ankle and calcaneus border"
            ]
        },
        "t9-b-040": {
            "options": [
                "Grade V: High-velocity low-amplitude thrust (HVLAT at anatomical barrier)",
                "Grade I: Small amplitude oscillation at the beginning of available range",
                "Grade II: Large amplitude oscillation within the resistance-free range",
                "Grade III: Large amplitude oscillation extending into the end of range"
            ]
        },
        "t9-c-001": {
            "options": [
                "Proximal Hamstring Tendinopathy (PHT with high-load tendon pain)",
                "Ischial bursitis (IB with superficial bursal swelling)",
                "Piriformis syndrome (PS with sciatic nerve entrapment)",
                "Gluteal muscle tear (GMT with acute hematoma)"
            ]
        },
        "t9-c-002": {
            "options": [
                "Puranen-Orava test (standing hamstring stretch reproduction)",
                "Lachman test (anterior tibial translation at 30° flexion)",
                "Hawkins-Kennedy test (subacromial internal impingement)",
                "Finkelstein's test (first dorsal compartment stretch)"
            ]
        },
        "t9-c-003": {
            "options": [
                "Progressive eccentric hamstring loading, trunk stabilization, and mechanics",
                "Complete bed rest for six months with avoidance of all active exercise",
                "High-dose corticosteroid injections directly into the hamstring origin",
                "Aggressive passive end-range hamstring stretching held for five minutes"
            ]
        },
        "t9-c-004": {
            "options": [
                "Ability to perform heavy eccentric loading and sprinting without pain",
                "Presence of persistent pain on sitting and walking with crutches",
                "Completion of two weeks of passive heat applications on table",
                "Ability to jog on a flat treadmill at slow speed with pain"
            ]
        },
        "t9-c-005": {
            "options": [
                "Lateral epicondylalgia with radial tunnel syndrome",
                "Medial epicondylalgia with ulnar nerve entrapment",
                "Distal biceps tendon complete rupture at the radius",
                "Olecranon bursitis with septic bacterial infection"
            ]
        },
        "t9-c-006": {
            "options": [
                "Resisted middle finger extension and palpation over radial tunnel",
                "Resisted wrist flexion with forearm pronated on table",
                "Passive elbow flexion with forearm supinated to end-range",
                "Tinel's sign over the median nerve at the flexor retinaculum"
            ]
        },
        "t9-c-007": {
            "options": [
                "Lateral epicondylalgia (extensor carpi radialis tendinopathy)",
                "Radial tunnel syndrome (posterior interosseous nerve)",
                "Pronator teres syndrome (median nerve entrapment)",
                "Cubital tunnel syndrome (ulnar nerve compression)"
            ]
        },
        "t9-c-008": {
            "options": [
                "Passive wrist manipulation under anesthesia to break adhesions",
                "Paraffin wax heat pack applications performed without active loading",
                "Progressive eccentric wrist extensor loading, nerve sliders, and release",
                "Complete arm casting for six months with absolute rest"
            ]
        },
        "t9-c-009": {
            "options": [
                "Applying ice packs to the lateral malleolus while resting in bed",
                "Continuous passive calf stretching on a table for six months",
                "Supervised balance board training, perturbation drills, and agility work",
                "Complete immobilization in a rigid plastic fracture boot for one year"
            ]
        },
        "t9-c-010": {
            "options": [
                "Subtalar joint immobilization in a rigid walking cast",
                "High-velocity manipulation into sudden ankle inversion",
                "Continuous passive mechanical traction of hip in supine",
                "Mulligan posterior talar glide during active lunge drills"
            ]
        },
        "t9-c-011": {
            "options": [
                "It causes permanent lifelong athletic disability and sports retirement",
                "It is a benign self-limiting apophysitis that resolves at skeletal fusion",
                "It is a malignant bone tumor requiring surgical limb amputation",
                "It requires immediate surgical excision of calcaneus under anesthesia"
            ]
        },
        "t9-c-012": {
            "options": [
                "Wearing heavy rigid steel-toed industrial safety work boots",
                "Inserting silicone heel cups or heel lifts and avoiding barefoot runs",
                "Applying high-dose corticosteroid injections into the heel pad",
                "Running barefoot on hard concrete roads to stimulate bone growth"
            ]
        },
        "t9-c-013": {
            "options": [
                "Deep vein thrombosis in posterior compartment with swelling",
                "Gastrocnemius medial head muscle belly grade I minor strain",
                "Diffuse Medial Tibial Stress Syndrome along posteromedial border",
                "Anterior Tibial Cortex Stress Fracture (high-risk bone injury)"
            ]
        },
        "t9-c-014": {
            "options": [
                "Anterior cortex has tensile bending strain and poor blood supply (high risk)",
                "It heals completely within twenty-four hours without medical precautions",
                "It transforms the cortical bone into fragile elastic cartilage in days",
                "It consistently causes acute bacterial infection of popliteal artery"
            ]
        },
        "t9-c-015": {
            "options": [
                "No, limb symmetry index must exceed 200% across all functional hop tests",
                "Yes, satisfies all physical, functional, biomechanical, and psychological criteria",
                "Yes, but only if all resistance training exercises are discontinued",
                "No, an athlete should never return to contact pivoting sports for five years"
            ]
        },
        "t9-c-016": {
            "options": [
                "Athletes forget tactical soccer formations if away for 12 months",
                "Graft ligamentization and biological maturation continue for 12 to 24 months",
                "Skeletal bone mineral density drops to zero between 6 and 9 months",
                "WADA regulations strictly ban athletic participation for 12 months"
            ]
        },
        "t9-c-017": {
            "options": [
                "Shallow knee flexion landings completely protect cruciate ligaments",
                "The athlete demonstrates optimal force attenuation with minimal ACL load",
                "The athlete has zero mechanical ground reaction force passing through knee",
                "High knee valgus, hip internal rotation, and shallow landing produce high ACL strain"
            ]
        },
        "t9-c-018": {
            "options": [
                "Applying ice packs to the knee while walking backwards on track",
                "Immobilizing the ankle in ninety degrees plantarflexion using cast",
                "Video feedback and external cues promoting deeper knee flexion and softer landing",
                "Instructing the athlete to keep the knee completely straight on impact"
            ]
        },
        "t9-c-019": {
            "options": [
                "Thoracic Scheuermann's disease with anterior vertebral wedging",
                "Chronic ununited spondylolytic non-union with sclerotic bone margins",
                "Degenerative spondylolisthesis with Meyerding Grade IV vertebral slip",
                "Active Grade I Pre-Fracture Spondylolysis (pars stress reaction)"
            ]
        },
        "t9-c-020": {
            "options": [
                "Permanent total bed rest for five consecutive years in a fiberglass cast",
                "Relative rest from bowling for 8–12 weeks, core stability, and workload review",
                "Immediate return to bowling 100 overs per week with hyperextension",
                "Immediate posterior spinal fusion with pedicle screws in twenty-four hours"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_9.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_9.json successfully!")

if __name__ == '__main__':
    rebalance_t9()

# re-run with final 12 fixes
with open('mock_tests/mock_test_9.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't9-a1-005':
        q['options'] = [
            "Adenosine Triphosphate-Phosphocreatine system",
            "Anaerobic Fast Glycolytic energy system",
            "Aerobic Mitochondrial Oxidative system",
            "Beta-Oxidation and Fatty Acid system"
        ]
    if q['id'] == 't9-a1-010':
        q['options'] = [
            "Permanent inhibition of peripheral erythropoiesis",
            "Decreased partial pressure of inspired oxygen",
            "Decreased fractional percentage of ambient oxygen",
            "Increased barometric atmospheric ambient air pressure"
        ]
    if q['id'] == 't9-a1-022':
        q['options'] = [
            "Type I error: Rejecting a true null hypothesis",
            "Type II error: Failing to reject a false null",
            "Type III error: Formulating an invalid hypothesis",
            "Type IV error: Selecting an inappropriate test"
        ]
    if q['id'] == 't9-a1-026':
        q['options'] = [
            "Cold water immersion at 10°C to 15°C for 15 minutes post-match",
            "Infrared sauna heat at 80°C for 45 minutes post-match",
            "Passive complete bed rest for 60 minutes post-match",
            "Plyometric depth jumping from 50 cm boxes post-match"
        ]
    if q['id'] == 't9-a2-007':
        q['options'] = [
            "Tanner-Whitehouse 3 (TW3) method analyzing hand radiographs",
            "Greulich-Pyle (GP) atlas method analyzing cervical spine films",
            "Dual-energy X-ray absorptiometry (DEXA) analyzing total bone",
            "Musculoskeletal ultrasound (MSUS) analyzing femoral growth plates"
        ]
    if q['id'] == 't9-b-001':
        q['options'] = [
            "Lachman test at 20° to 30° knee flexion",
            "Anterior drawer test at 90° knee flexion",
            "Pivot shift test at 30° knee flexion",
            "McMurray test at 90° knee flexion"
        ]
    if q['id'] == 't9-b-021':
        q['options'] = [
            "Progressive eccentric tendon loading protocols",
            "Isometric training performed at single joint angles",
            "Passive stretching programs without active loading",
            "Low-load endurance cycling for muscle hematomas"
        ]
    if q['id'] == 't9-b-040':
        q['options'] = [
            "Grade V: High-velocity low-amplitude thrust",
            "Grade I: Small amplitude oscillation at early range",
            "Grade II: Large amplitude oscillation in mid-range",
            "Grade III: Large amplitude oscillation at end-range"
        ]
    if q['id'] == 't9-c-013':
        q['options'] = [
            "Deep vein thrombosis in posterior calf compartment",
            "Gastrocnemius medial head muscle belly grade I tear",
            "Diffuse Medial Tibial Stress Syndrome on shin",
            "Anterior Tibial Cortex Stress Fracture on bone"
        ]
    if q['id'] == 't9-c-014':
        q['options'] = [
            "Anterior cortex has tensile bending strain and poor blood supply",
            "It heals completely within twenty-four hours without precautions",
            "It transforms the cortical bone into fragile elastic cartilage",
            "It consistently causes acute bacterial infection of artery"
        ]
    if q['id'] == 't9-c-019':
        q['options'] = [
            "Thoracic Scheuermann's disease with vertebral wedging",
            "Chronic ununited spondylolytic non-union pseudoarthrosis",
            "Degenerative spondylolisthesis with vertebral slip",
            "Active Grade I Pre-Fracture Spondylolysis reaction"
        ]
    if q['id'] == 't9-c-020':
        q['options'] = [
            "Permanent total bed rest for 5 consecutive years in a fiberglass cast",
            "Relative rest from bowling for 8 to 12 weeks with core stabilization",
            "Immediate return to bowling 100 overs per week with hyperextension",
            "Immediate posterior spinal fusion with pedicle screws in 24 hours"
        ]

with open('mock_tests/mock_test_9.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 9 100% finished!")
