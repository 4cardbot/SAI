import json

def rebalance_t4():
    with open('mock_tests/mock_test_4.json') as f:
        qs = json.load(f)

    updates = {
        "t4-a1-002": {
            "options": [
                "First pull (floor to mid-shin elevation)",
                "Transition phase (knees re-bend under bar)",
                "Second pull (triple extension of hip, knee, ankle)",
                "Catch phase (deep squat receiving position)"
            ]
        },
        "t4-a1-003": {
            "options": [
                "Loads of 100% 1RM (maximal isometric effort)",
                "Loads of 90% to 95% 1RM (maximal strength)",
                "Loads of 0% bodyweight (unloaded movement)",
                "Loads of 30% to 45% 1RM (peak power output)"
            ]
        },
        "t4-a1-004": {
            "options": [
                "Rapid reduction in muscle-tendon unit stiffness during dynamic movements",
                "Increased pennation angle allowing more sarcomeres to align in parallel",
                "Decreased physiological cross-sectional area in fast-twitch fibers",
                "Conversion of all fast-twitch motor units into slow-twitch fibers"
            ]
        },
        "t4-a1-005": {
            "options": [
                "4 to 6 repetitions at 80% to 85% 1RM",
                "1 to 2 repetitions at 95% to 100% 1RM",
                "8 to 12 repetitions at 67% to 85% 1RM",
                "15 to 25 repetitions at 50% to 60% 1RM"
            ]
        },
        "t4-a1-006": {
            "options": [
                "15 to 30 seconds of high-intensity interval exercise bouts",
                "1 to 3 minutes of near-maximal sustained athletic efforts",
                "5 to 10 minutes of steady-state submaximal endurance exercise",
                "0 to 10 seconds of maximal explosive short-duration sprints"
            ]
        },
        "t4-a1-007": {
            "options": [
                "High parasympathetic activity elevating baseline resting heart rate",
                "Increased left ventricular chamber volume and increased myocardial compliance",
                "Decreased end-diastolic filling time leading to lower stroke volumes",
                "Severe concentric myocardial wall thickening with reduced lumen volume"
            ]
        },
        "t4-a1-008": {
            "options": [
                "Arteriovenous oxygen difference widening at maximal effort",
                "Maximal heart rate increasing linearly with chronic conditioning",
                "Stroke volume increasing due to enhanced myocardial contractility",
                "Mitochondrial capillary density and oxidative enzyme activity expanding"
            ]
        },
        "t4-a1-009": {
            "options": [
                "Second ventilatory threshold point (VT2)",
                "Maximal fat oxidation point (FatMax)",
                "First ventilatory threshold point (VT1)",
                "Maximal voluntary ventilation point (MVV)"
            ]
        },
        "t4-a1-010": {
            "options": [
                "Complete permanent inhibition of peripheral erythropoiesis (EPO)",
                "Decreased partial pressure of oxygen in inspired air (PO2)",
                "Decreased fractional concentration of oxygen in air (FiO2)",
                "Increased barometric atmospheric ambient air pressure (Pb)"
            ]
        },
        "t4-a1-011": {
            "options": [
                "30 to 60 grams of carbohydrate per hour (single-source carbohydrate)",
                "90 grams of carbohydrate per hour (multiple transportable carbohydrates)",
                "10 to 20 grams of carbohydrate per hour (low-dose carbohydrate)",
                "150 grams of carbohydrate per hour (high-dose carbohydrate)"
            ]
        },
        "t4-a1-012": {
            "options": [
                "3.0 to 3.5 g/kg/day during tapering periods",
                "1.4 to 2.0 g/kg/day during regular training",
                "0.6 to 0.8 g/kg/day during recovery periods",
                "4.0 to 5.0 g/kg/day during competition weeks"
            ]
        },
        "t4-a1-013": {
            "options": [
                "0.5 liters per kg of body weight lost (50% fluid replacement)",
                "1.0 liters per kg of body weight lost (100% fluid replacement)",
                "1.5 liters per kg of body weight lost (150% fluid replacement)",
                "3.0 liters per kg of body weight lost (300% fluid replacement)"
            ]
        },
        "t4-a1-014": {
            "options": [
                "Elevated intracellular hydrogen ion buffering via carnosine synthesis",
                "Direct stimulation of beta-adrenergic receptors and cardiac output",
                "Accelerated fatty acid transport into mitochondria via CPT-1 enzyme",
                "Increased phosphocreatine resynthesis rate via creatine kinase"
            ]
        },
        "t4-a1-015": {
            "options": [
                "Energy intake minus exercise expenditure, divided by fat-free mass",
                "Energy expenditure minus basal metabolic rate, divided by body weight",
                "Resting metabolic rate divided by total daily carbohydrate intake",
                "Caloric intake divided by skeletal muscle cross-sectional area"
            ]
        },
        "t4-a1-016": {
            "options": [
                "Heath-Carter somatotype: 7-1-1 (Endomorph)",
                "Heath-Carter somatotype: 1-7-1 (Mesomorph)",
                "Heath-Carter somatotype: 1-1-7 (Ectomorph)",
                "Heath-Carter somatotype: 4-4-4 (Central)"
            ]
        },
        "t4-a1-017": {
            "options": [
                "Target Weight = Lean Body Mass / (1 - Desired Fat %)",
                "Target Weight = Total Body Weight * (1 - Desired Fat %)",
                "Target Weight = Lean Body Mass * (1 + Desired Fat %)",
                "Target Weight = Total Body Weight / (1 + Desired Fat %)"
            ]
        },
        "t4-a1-018": {
            "options": [
                "Girls reach PHV ~2 years earlier than boys during pubertal maturation",
                "Boys reach PHV ~2 years earlier than girls during pubertal maturation",
                "Both sexes reach PHV at the identical chronological age of 14 years",
                "PHV occurs randomly without any consistent sex-specific differences"
            ]
        },
        "t4-a1-019": {
            "options": [
                "Narrow shoulder breadth relative to wide pelvic hip dimensions",
                "Equal shoulder breadth and pelvic hip breadth proportionality",
                "Broad shoulder breadth relative to narrow pelvic hip dimensions",
                "Short upper limb length relative to long trunk sitting height"
            ]
        },
        "t4-a1-020": {
            "options": [
                "Arousal and performance have a linear positive relationship",
                "Arousal and performance have a linear negative relationship",
                "Arousal and performance have an inverted-U shaped relationship",
                "Arousal has zero correlation with athletic motor performance"
            ]
        },
        "t4-a1-021": {
            "options": [
                "Cognitive anxiety has an inverted-U relationship with performance",
                "Somatic anxiety displays a negative linear relationship with performance",
                "Cognitive anxiety displays a negative linear relationship with performance",
                "Somatic anxiety and cognitive anxiety both show identical linear patterns"
            ]
        },
        "t4-a1-022": {
            "options": [
                "External regulation (external pressure)",
                "Introjected regulation (internal pressure)",
                "Identified regulation (conscious valuing)",
                "Intrinsic motivation (inherent interest)"
            ]
        },
        "t4-a1-023": {
            "options": [
                "High resting vagal tone and optimal parasympathetic recovery status",
                "Accumulated fatigue, autonomic dysfunction, and incomplete recovery",
                "Readiness for maximal high-intensity competition performance bouts",
                "Enhanced glycogen resynthesis and complete neuromuscular restitution"
            ]
        },
        "t4-a1-024": {
            "options": [
                "Peak jump force divided by ground contact time (N/s)",
                "Jump height divided by ground contact time (m/s)",
                "Ground contact time divided by jump flight time (s/s)",
                "Flight time multiplied by take-off velocity (m·s/s)"
            ]
        },
        "t4-a1-025": {
            "options": [
                "Type I error (rejecting true null hypothesis)",
                "Type II error (failing to reject false null)",
                "Type III error (incorrect hypothesis model)",
                "Type IV error (inappropriate test selection)"
            ]
        },
        "t4-a1-026": {
            "options": [
                "Precision and repeatability of repeated trials on the same subject",
                "Degree to which a test measures what it claims to evaluate",
                "Sensitivity of an instrument to detect small clinical changes",
                "Correlation between two independent test administration raters"
            ]
        },
        "t4-a1-027": {
            "options": [
                "One-way ANOVA (compares three independent groups)",
                "Paired t-test (compares two repeated measure trials)",
                "Chi-Square test (evaluates nominal frequencies)",
                "Mann-Whitney U test (compares two ranked groups)"
            ]
        },
        "t4-a1-030": {
            "options": [
                "Concealing the final tournament match score from stadium spectators and broadcast media",
                "Concealing group assignment sequence from investigators and participants until allocation",
                "Concealing athlete identities and team affiliations from tournament judges and referees",
                "Concealing research grant funding sources and financial sponsorships from ethics boards"
            ]
        },
        "t4-a1-032": {
            "options": [
                "Total number of injuries occurring per 1,000 athlete-exposure hours across season",
                "Total kilograms of ice modalities utilized per 1,000 athlete-treatment visits",
                "Total percentage of competitive matches won per 1,000 athletic training sessions",
                "Total number of injured players recorded per 1,000 stadium spectators attending"
            ]
        },
        "t4-a2-001": {
            "options": [
                "Target Olympic Podium Scheme (TOPS) under SAI governance",
                "National Sports Development Fund (NSDF) financial board",
                "Indian Olympic Association (IOA) executive administration",
                "Sports Authority of India Training Centre (STC) scheme"
            ]
        },
        "t4-a2-002": {
            "options": [
                "Core Group (podium prospects for upcoming Games) and Development Group (future prospects)",
                "Senior National Group (elite level) and Junior State Group (regional competition level)",
                "Olympic Medalist Group (prior winners) and National Champion Group (domestic winners)",
                "Individual Sport Group (solitary events) and Team Sport Group (collective team events)"
            ]
        },
        "t4-a2-003": {
            "options": [
                "Dhyan Chand Lifetime Award (Rs. 10 Lakh)",
                "Arjuna Award for Excellence (Rs. 15 Lakh)",
                "Dronacharya Coaching Award (Rs. 15 Lakh)",
                "Khel Ratna Premier Award (Rs. 25 Lakh)"
            ]
        },
        "t4-a2-004": {
            "options": [
                "Substances prohibited in-competition (S6 to S9 categories)",
                "Substances prohibited in sports (P1 beta-blocker category)",
                "Substances prohibited at all times (S0 to S5 categories)",
                "Specified stimulants subject to therapeutic exemptions (TUE)"
            ]
        },
        "t4-a2-005": {
            "options": [
                "Athlete is strictly liable whenever a prohibited substance is found in their sample",
                "Athlete is only liable if intention to enhance athletic performance is proven",
                "Athlete is exempt from sanctions if the substance was prescribed by a team coach",
                "Athlete is only tested during official national championship competitions"
            ]
        },
        "t4-a2-006": {
            "options": [
                "Court of Arbitration for Sport (CAS) in Lausanne",
                "International Olympic Committee (IOC) in Lausanne",
                "World Anti-Doping Agency (WADA) in Montreal",
                "United Nations Educational Body (UNESCO) in Paris"
            ]
        },
        "t4-a2-007": {
            "options": [
                "Tanner-Whitehouse 3 (TW3) method analyzing left wrist and hand radiographs",
                "Greulich-Pyle (GP) atlas method analyzing right knee and ankle radiographs",
                "Dual-energy X-ray absorptiometry (DEXA) analyzing total body densitometry",
                "Diagnostic musculoskeletal ultrasound analyzing femoral growth plate closure"
            ]
        },
        "t4-a2-008": {
            "options": [
                "Tenure limit of 12 consecutive years and retirement age limit of 70 years",
                "Tenure limit of 20 consecutive years and retirement age limit of 75 years",
                "Tenure limit of 5 consecutive years and retirement age limit of 60 years",
                "Tenure limit of 8 consecutive years and retirement age limit of 65 years"
            ]
        },
        "t4-b-001": {
            "options": [
                "Anterior drawer test at 90° flexion",
                "Lachman test at 20° to 30° flexion",
                "Pivot shift test at 30° flexion",
                "McMurray test at 90° flexion"
            ]
        },
        "t4-b-002": {
            "options": [
                "Lachman test (anterior translation at 30° knee flexion)",
                "Thessaly test (dynamic rotation at 20° knee flexion)",
                "McMurray test (joint-line click at 90° knee flexion)",
                "Apley compression test (grinding at 90° knee flexion)"
            ]
        },
        "t4-b-003": {
            "options": [
                "Hawkins-Kennedy test (subacromial bursal impingement)",
                "Neer elevation test (subacromial arch impingement)",
                "Speed test (biceps brachii long head tendinopathy)",
                "Empty Can test (supraspinatus tendon pathology)"
            ]
        },
        "t4-b-004": {
            "options": [
                "Calcaneofibular ligament (CFL) in neutral dorsiflexion",
                "Anterior talofibular ligament (ATFL) in slight plantarflexion",
                "Posterior talofibular ligament (PTFL) in full dorsiflexion",
                "Deltoid ligament complex (DLC) in combined eversion"
            ]
        },
        "t4-b-005": {
            "options": [
                "External rotation > Internal rotation > Abduction (capsular pattern)",
                "Internal rotation > External rotation > Flexion (capsular pattern)",
                "Abduction > External rotation > Internal rotation (capsular pattern)",
                "Flexion > Extension > Internal rotation (capsular pattern)"
            ]
        },
        "t4-b-006": {
            "options": [
                "Delorme PRE protocol (50% - 75% - 100% 10RM)",
                "Oxford RRE protocol (100% - 75% - 50% 10RM)",
                "DAPRE system protocol (50% - 75% - 100% 6RM)",
                "Isometric MVC protocol (50% - 75% - 100% MVC)"
            ]
        },
        "t4-b-007": {
            "options": [
                "Alfredson eccentric protocol (3 sets of 15 reps)",
                "Stanish eccentric protocol (3 sets of 10 reps)",
                "Silbernagel combined protocol (3 sets of 12 reps)",
                "Cook isometric protocol (5 sets of 45 seconds)"
            ]
        },
        "t4-b-008": {
            "options": [
                "Increases patellar tendon load and quadriceps demand by reducing calf involvement",
                "Decreases patellar tendon strain by shifting ground reaction forces posteriorly",
                "Eliminates quadriceps activation to allow passive hip extension loading",
                "Increases hamstring co-contraction to protect the anterior cruciate ligament"
            ]
        },
        "t4-b-009": {
            "options": [
                "Autogenic inhibition via Golgi tendon organ Ib afferents",
                "Reciprocal inhibition via muscle spindle Ia afferents",
                "Cutaneous mechanoreceptor reflex inhibition pathways",
                "Gamma motor neuron co-activation efferent pathways"
            ]
        },
        "t4-b-010": {
            "options": [
                "Grade I (small amplitude oscillation at beginning of range)",
                "Grade II (large amplitude oscillation within mid-range)",
                "Grade III (large amplitude oscillation extending to end-range)",
                "Grade IV (small amplitude oscillation at end-range of motion)"
            ]
        },
        "t4-b-011": {
            "options": [
                "Supraspinatus initiates abduction (0°–15°); Deltoid continues abduction (15°–90°)",
                "Deltoid initiates abduction (0°–15°); Supraspinatus continues abduction (15°–90°)",
                "Infraspinatus initiates abduction (0°–15°); Teres Major continues abduction (15°–90°)",
                "Subscapularis initiates abduction (0°–15°); Pectoralis Major continues abduction"
            ]
        },
        "t4-b-012": {
            "options": [
                "Tibia rotates externally on femur in terminal open-chain extension",
                "Tibia rotates internally on femur in terminal open-chain extension",
                "Femur rotates externally on tibia in initial closed-chain flexion",
                "Femur translates posteriorly on tibia in terminal open-chain extension"
            ]
        },
        "t4-b-013": {
            "options": [
                "First-class lever (fulcrum between load and effort forces)",
                "Second-class lever (load positioned between fulcrum and effort)",
                "Third-class lever (effort positioned between fulcrum and load)",
                "Fourth-class lever (effort and load acting in parallel planes)"
            ]
        },
        "t4-b-014": {
            "options": [
                "Initial contact phase (heel strike event in stance)",
                "Loading response phase (shock absorption in stance)",
                "Mid-stance phase (single-limb support in stance)",
                "Initial swing phase (limb acceleration in swing)"
            ]
        },
        "t4-b-015": {
            "options": [
                "Gluteus medius weakness (superior gluteal nerve lesion)",
                "Quadriceps weakness (femoral nerve motor branch lesion)",
                "Gastrocnemius contracture (posterior tibial nerve lesion)",
                "Tibialis anterior paralysis (deep peroneal nerve lesion)"
            ]
        },
        "t4-b-016": {
            "options": [
                "Strong clinical evidence for long-term functional superiority",
                "Limited or no clinically meaningful benefit over sham control",
                "Moderate evidence demonstrating superiority to core exercise",
                "First-line intervention recommended in international guidelines"
            ]
        },
        "t4-b-017": {
            "options": [
                "Chronic non-specific low back pain rehabilitation",
                "Acute post-operative pain and trauma pain control",
                "Structural spinal deformity correction and realignment",
                "Reversal of long-standing spasticity after stroke"
            ]
        },
        "t4-b-018": {
            "options": [
                "Pivot shift test (rotatory subluxation evaluation)",
                "Anterior drawer test (tibial translation at 90°)",
                "Lachman test (highest sensitivity for ACL tears)",
                "McMurray test (posterior meniscal horn evaluation)"
            ]
        },
        "t4-b-019": {
            "options": [
                "Structural hyaline cartilage regeneration on imaging",
                "Significant pain reduction and functional improvement",
                "Complete reversal of joint space narrowing on X-ray",
                "Restoration of pristine juvenile joint biomechanics"
            ]
        },
        "t4-b-020": {
            "options": [
                "Demonstrate at least 10° active wrist extension and 10° finger extension",
                "Demonstrate at least 30° active shoulder abduction and 30° elbow extension",
                "Demonstrate at least 45° active hip flexion and 45° knee flexion extension",
                "Demonstrate at least 20° active ankle dorsiflexion and 20° plantarflexion"
            ]
        },
        "t4-b-021": {
            "options": [
                "Eccentric loading for tendinopathies (e.g., Alfredson protocol)",
                "Isometric training for acute sprains (e.g., multi-angle holds)",
                "Passive stretching for dislocations (e.g., end-range mobilizations)",
                "Low-load cycling for muscle hematomas (e.g., continuous spinning)"
            ]
        },
        "t4-b-022": {
            "options": [
                "Spasticity is velocity-dependent; Rigidity is velocity-independent",
                "Spasticity is velocity-independent; Rigidity is velocity-dependent",
                "Spasticity causes lead-pipe tone; Rigidity causes clasp-knife tone",
                "Spasticity is cerebellar in origin; Rigidity is pyramidal in origin"
            ]
        },
        "t4-b-023": {
            "options": [
                "Centralization of symptoms (distal pain moves proximally toward spine)",
                "Peripheralization of symptoms (proximal pain radiates into lower limb)",
                "Directional preference abolition (pain remains constant in all planes)",
                "Spinal functional instability (lumbar translation increases on flexion)"
            ]
        },
        "t4-b-024": {
            "options": [
                "Active cardiac pacemaker or electronic implant over thoracic area",
                "Chronic osteoarthritis of the glenohumeral joint without pain",
                "Delayed onset muscle soreness following unaccustomed strength work",
                "Mild patellofemoral pain syndrome without localized joint swelling"
            ]
        },
        "t4-b-025": {
            "options": [
                "Mulligan Mobilization with Movement (MWM technique)",
                "Maitland passive oscillatory mobilization (POM technique)",
                "Kaltenborn linear traction and glide (KTG technique)",
                "Cyriax deep transverse friction massage (DTF technique)"
            ]
        },
        "t4-b-026": {
            "options": [
                "Straight Leg Raise test (SLR for L4–S1 lumbar nerve roots)",
                "Prone Knee Bend test (PKB for L2–L4 femoral nerve roots)",
                "Upper Limb Tension Test 1 (ULTT1 for median nerve trunk)",
                "Upper Limb Tension Test 3 (ULTT3 for radial nerve trunk)"
            ]
        },
        "t4-b-027": {
            "options": [
                "2:1 ratio (2° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:2 ratio (1° glenohumeral motion for every 2° scapulothoracic motion)",
                "3:1 ratio (3° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:1 ratio (1° glenohumeral motion for every 1° scapulothoracic motion)"
            ]
        },
        "t4-b-028": {
            "options": [
                "Upper Trapezius, Lower Trapezius, and Serratus Anterior muscles",
                "Upper Trapezius, Levator Scapulae, and Rhomboid Major muscles",
                "Pectoralis Minor, Latissimus Dorsi, and Subscapularis muscles",
                "Middle Trapezius, Infraspinatus, and Teres Major muscles"
            ]
        },
        "t4-b-029": {
            "options": [
                "Popliteus muscle (unlocks knee via internal tibial rotation)",
                "Quadriceps femoris (locks knee via external tibial rotation)",
                "Gastrocnemius muscle (flexes knee via ankle plantarflexion)",
                "Biceps femoris muscle (stabilizes knee via fibular rotation)"
            ]
        },
        "t4-b-030": {
            "options": [
                "0° to 15° of closed-chain knee flexion",
                "60° to 90° of closed-chain knee flexion",
                "20° to 30° of closed-chain knee flexion",
                "120° to 140° of closed-chain knee flexion"
            ]
        },
        "t4-b-031": {
            "options": [
                "Deep peroneal nerve palsy causing tibialis anterior weakness",
                "Femoral nerve compression causing quadriceps femoris weakness",
                "Tibial nerve entrapment causing gastrocnemius muscle spasticity",
                "Obturator nerve lesion causing adductor longus muscle weakness"
            ]
        },
        "t4-b-032": {
            "options": [
                "Single peak curve reaching 0.5× body weight at mid-stance",
                "Linear progressive ramp reaching 3.0× body weight at toe-off",
                "Bimodal 'M-shaped' curve with two peaks reaching ~1.1–1.2× body weight",
                "Flat plateau curve maintaining 1.0× body weight throughout stance"
            ]
        },
        "t4-b-033": {
            "options": [
                "Superimposing two out-of-phase medium-frequency currents",
                "Delivering continuous galvanic direct current through pads",
                "Modulating high-voltage monophasic pulsed electric current",
                "Discharging high-frequency electromagnetic radio oscillations"
            ]
        },
        "t4-b-034": {
            "options": [
                "Initial vasoconstriction followed by cyclical cold-induced vasodilation",
                "Continuous uninterrupted vasodilation maintaining high skin perfusion",
                "Sustained continuous vasoconstriction preventing peripheral re-warming",
                "Sudden arterial spasm leading to irreversible ischemic tissue necrosis"
            ]
        },
        "t4-b-035": {
            "options": [
                "Task-specific training focusing on functional motor tasks",
                "Passive range of motion exercises without active effort",
                "Prolonged static splinting of affected spastic limbs",
                "Continuous low-intensity electrical stimulation alone"
            ]
        },
        "t4-b-036": {
            "options": [
                "Remodeling phase (woven bone replaced by lamellar trabecular bone)",
                "Inflammatory phase (hematoma formation and cellular infiltration)",
                "Soft callus phase (fibrocartilaginous bridge development at gap)",
                "Hard callus phase (endochondral ossification forming woven bone)"
            ]
        },
        "t4-b-037": {
            "options": [
                "Grade I (microscopic tearing with normal ligament laxity, <5 mm)",
                "Grade II (partial tearing with moderate joint laxity, 5–10 mm)",
                "Grade III (complete ligament disruption with gross laxity, >10 mm)",
                "Grade IV (complete ligament rupture with neurovascular injury, >20 mm)"
            ]
        },
        "t4-b-038": {
            "options": [
                "Progression of pain from proximal spine distally into the foot",
                "Abolition of distal pain with centralization toward spine midline",
                "Spontaneous recovery of motor strength without directional preference",
                "Symmetrical increase in lumbar paraspinal muscle hypertonicity"
            ]
        },
        "t4-b-039": {
            "options": [
                "Tibial nerve in the popliteal space",
                "Common peroneal nerve at fibular neck",
                "Saphenous nerve at the medial knee",
                "Sural nerve along lateral ankle border"
            ]
        },
        "t4-b-040": {
            "options": [
                "Grade V: High-velocity low-amplitude thrust",
                "Grade I: Small amplitude early-range oscillation",
                "Grade II: Large amplitude mid-range oscillation",
                "Grade III: Large amplitude end-range oscillation"
            ]
        },
        "t4-c-001": {
            "options": [
                "Biceps femoris long head strain at terminal swing (eccentric loading)",
                "Semimembranosus muscle strain at initial contact (concentric loading)",
                "Adductor longus muscle strain during rapid hip adduction (contact load)",
                "Rectus femoris muscle strain during terminal stance (concentric drive)"
            ]
        },
        "t4-c-002": {
            "options": [
                "Nordic Hamstring Exercise and high-speed sprint running exposures",
                "Continuous low-intensity stationary cycling for eight weeks without runs",
                "Passive static stretching on a physical therapy table twice daily",
                "Seated light leg extensions performed on a variable machine to fatigue"
            ]
        },
        "t4-c-003": {
            "options": [
                "Glenohumeral Internal Rotation Deficit (GIRD with posterior capsule tightness)",
                "Subacromial Impingement Syndrome (SAIS with subacromial bursal thickening)",
                "Multidirectional Glenohumeral Instability (MDI with inferior sulcus laxity)",
                "Adhesive Capsulitis (Frozen Shoulder with global capsular restriction)"
            ]
        },
        "t4-c-004": {
            "options": [
                "Sleeper stretch and cross-body adduction stretching with scapular stabilization",
                "Doorway stretching in maximal external rotation for anterior joint capsule",
                "Overhead bar hangs without stabilization for inferior glenohumeral band",
                "Standing wall stretches with cervical lateral flexion for upper trapezius"
            ]
        },
        "t4-c-005": {
            "options": [
                "Calcaneal Stress Fracture (CSF with diffuse heel swelling)",
                "Achilles Tendon Rupture (ATR with palpable tendon gap)",
                "Plantar Fasciopathy (PF with medial tuberosity tenderness)",
                "Tarsal Tunnel Syndrome (TTS with tibial nerve entrapment)"
            ]
        },
        "t4-c-006": {
            "options": [
                "Continuous passive bed rest for 6 months without weight-bearing drills",
                "Immediate surgical plantar fascia release within 24 hours of injury",
                "Barefoot road running on hard asphalt surfaces for 8 straight weeks",
                "Rathleff high-load heel raises with towel under toes for 12 weeks"
            ]
        },
        "t4-c-007": {
            "options": [
                "Cam-type Femoroacetabular Impingement (FAI with aspherical femoral head)",
                "Pincer-type Femoroacetabular Impingement (FAI with acetabular overcoverage)",
                "Ischial tuberosity apophysitis (ITA with proximal hamstring avulsion)",
                "Greater trochanteric pain syndrome (GTPS with gluteus medius tear)"
            ]
        },
        "t4-c-008": {
            "options": [
                "Modifying squat depth, strengthening hip abductors/rotators, and core stability",
                "Aggressive passive internal rotation stretching at 90° flexion into pain",
                "Deep maximal squats under heavy loads to force mechanical bone remodeling",
                "Hip spica cast immobilization for twelve consecutive weeks without exercise"
            ]
        },
        "t4-c-009": {
            "options": [
                "Performing immediate knee joint manipulation into full hyper-flexion",
                "Placing the athlete in a dry sauna for 60 minutes to resolve effusion",
                "Applying hot packs and starting immediate heavy plyometric jumping",
                "Assessing distal peripheral pulses and Ankle-Brachial Index (ABI)"
            ]
        },
        "t4-c-010": {
            "options": [
                "Avoiding all weight bearing on the operated limb for 3 consecutive years",
                "Restricting quadriceps strengthening completely for the first 2 post-op years",
                "Restricting active resisted hamstring contractions for 6 to 12 weeks post-op",
                "Encouraging aggressive resisted hamstring curls in week 1 to stabilize graft"
            ]
        },
        "t4-c-011": {
            "options": [
                "Lateral cutaneous nerve of thigh entrapment at the inguinal ligament",
                "Sural nerve entrapment / friction at the posterolateral ankle border",
                "Deep peroneal nerve compression within the anterior compartment tunnel",
                "Saphenous nerve infrapatellar branch entrapment at medial joint line"
            ]
        },
        "t4-c-012": {
            "options": [
                "Applying ice directly to the nerve trunk for 60 continuous minutes",
                "Sural nerve neurodynamic slider and tensioner mobilization techniques",
                "Strict rigid casting of the foot in extreme plantarflexion for 8 weeks",
                "Heavy calf raises with 100 kg barbells on an elevated step to fatigue"
            ]
        },
        "t4-c-013": {
            "options": [
                "Multidirectional Glenohumeral Instability (MDI with secondary impingement)",
                "Unidirectional Traumatic Bankart Lesion (UTBL from collision tackle)",
                "Adhesive Capsulitis (Frozen Shoulder with global capsular fibrosis)",
                "Acromioclavicular Joint Osteoarthritis (ACJ with inferior spurs)"
            ]
        },
        "t4-c-014": {
            "options": [
                "Immediate surgical open inferior capsular shift without exercise trials",
                "Aggressive passive capsular stretching into extreme end-range rotation",
                "Complete immobilization of the shoulder in an abduction sling for 4 months",
                "Dynamic rotator cuff strengthening and scapular neuromuscular retraining"
            ]
        },
        "t4-c-015": {
            "options": [
                "Continuous therapeutic ultrasound (0.5 W/cm2 for 5 minutes)",
                "Static magnetic therapy bracelets (worn continuously at night)",
                "Infrared heat lamp application (15 minutes twice daily)",
                "Radial or Focused Extracorporeal Shockwave Therapy (ESWT)"
            ]
        },
        "t4-c-016": {
            "options": [
                "1 session of 4 hours under general anesthesia",
                "30 daily sessions of 10 minutes under nerve block",
                "10 sessions of 20 minutes in an ice water bath",
                "3 to 5 sessions spaced 1 week apart, without anesthetic"
            ]
        },
        "t4-c-017": {
            "options": [
                "Tibial nerve (TN) in the deep posterior compartment",
                "Femoral nerve (FN) in the anterior femoral triangle",
                "Common Peroneal Nerve (CPN) at the fibular neck",
                "Saphenous nerve (SN) along the medial tibia shaft"
            ]
        },
        "t4-c-018": {
            "options": [
                "Ankle-Foot Orthosis (AFO), stretching, and electrical muscle stimulation",
                "Immediate surgical amputation of distal foot to prevent tissue necrosis",
                "Forced barefoot running on gravel tracks to stimulate nerve regeneration",
                "Rigid plaster casting in fifty degrees plantarflexion for six months"
            ]
        },
        "t4-c-019": {
            "options": [
                "Compression fractures need heavy plyometric jumping; tension fractures need rest",
                "Tension fractures heal in three days; compression fractures are fatal injuries",
                "Compression fractures are managed conservatively; tension fractures require surgery",
                "Compression fractures need emergency arthroplasty; tension fractures need casting"
            ]
        },
        "t4-c-020": {
            "options": [
                "Full Relative Energy Deficiency in Sport screening (RED-S assessment)",
                "Closed-circuit underwater spirometry testing (COPD assessment)",
                "Bacterial sputum culture testing and chest radiography (TB assessment)",
                "Hereditary sensory neuropathy genetic screening (HSN assessment)"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_4.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_4.json successfully!")

if __name__ == '__main__':
    rebalance_t4()

# re-run with final 9 fixes
with open('mock_tests/mock_test_4.json') as f:
    qs = json.load(f)

for q in qs:
    if q['id'] == 't4-a1-009':
        q['options'] = [
            "Second ventilatory threshold point",
            "Maximal fat oxidation point",
            "First ventilatory threshold point",
            "Maximal voluntary ventilation point"
        ]
    if q['id'] == 't4-a1-010':
        q['options'] = [
            "Permanent inhibition of peripheral erythropoiesis",
            "Decreased partial pressure of inspired oxygen",
            "Decreased fractional percentage of ambient oxygen",
            "Increased barometric atmospheric ambient air pressure"
        ]
    if q['id'] == 't4-a1-014':
        q['options'] = [
            "Elevated intracellular hydrogen ion buffering via carnosine synthesis",
            "Direct stimulation of beta-adrenergic receptors and cardiac output",
            "Accelerated fatty acid transport into mitochondria via transferase",
            "Increased phosphocreatine resynthesis rate via creatine kinase"
        ]
    if q['id'] == 't4-a1-018':
        q['options'] = [
            "Girls reach PHV approximately two years earlier than boys during adolescence",
            "Boys reach PHV approximately two years earlier than girls during adolescence",
            "Both sexes reach PHV at the identical chronological age during adolescence",
            "Both sexes reach PHV at completely random intervals during adolescence"
        ]
    if q['id'] == 't4-a1-028':
        q['options'] = [
            "Intraclass Correlation Coefficient (ICC) and Standard Error of Measurement (SEM)",
            "Chi-Square test of independence (CST) and Odds Ratio Calculation (ORC)",
            "Spearman's rank correlation coefficient (SRC) and Kendall's Tau Coefficient (KTC)",
            "Pearson's product-moment correlation (PPMC) and Simple Linear Regression (SLR)"
        ]
    if q['id'] == 't4-a1-029':
        q['options'] = [
            "The percentage of fast-twitch motor units present in skeletal muscle",
            "The required sample size needed to detect a significant effect size",
            "The maximum jumping power wattage measured on a dual force platform",
            "The exact brand and mechanical resistance of the barbell equipment"
        ]
    if q['id'] == 't4-a2-004':
        q['options'] = [
            "Substances prohibited in-competition (stimulants and narcotics)",
            "Substances prohibited in sports (beta-blocker agents)",
            "Substances prohibited at all times (anabolic and peptide agents)",
            "Substances permitted under therapeutic exemptions (asthma inhalers)"
        ]
    if q['id'] == 't4-c-009':
        q['options'] = [
            "Performing immediate knee joint manipulation into full hyper-flexion",
            "Placing the athlete in a dry sauna for 60 minutes to resolve effusion",
            "Applying hot packs and starting immediate heavy plyometric jumping",
            "Assessing distal peripheral pulses and Ankle-Brachial Index directly"
        ]
    if q['id'] == 't4-c-018':
        q['options'] = [
            "Ankle-Foot Orthosis, passive dorsiflexion stretching, and electrical muscle stimulation",
            "Immediate surgical amputation of distal foot to prevent ischemic tissue necrosis",
            "Forced barefoot running on gravel tracks to stimulate peripheral nerve regeneration",
            "Rigid plaster casting in fifty degrees plantarflexion for six consecutive months"
        ]

with open('mock_tests/mock_test_4.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Test 4 fully patched!")
