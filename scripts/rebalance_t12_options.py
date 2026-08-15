import json

with open('mock_tests/mock_test_12.json') as f:
    qs = json.load(f)

# Dictionary of balanced options for questions in Test 12
# Mapping question id -> balanced list of 4 options (in their current correct answer order)

fixes = {
  "t12-a1-011": [
    "To accelerate muscle protein breakdown and reduce total body muscle mass acutely",
    "To amplify cellular stress signaling to upregulate mitochondrial biogenesis pathways",
    "To completely eliminate all carbohydrate oxidation during subsequent race competition",
    "To induce severe metabolic ketoacidosis and reduce blood pH during training sessions"
  ],
  "t12-a1-013": [
    "Body mass divided by height squared index (Body Mass Index ratio)",
    "Height divided by the cube root of body mass (Height-Weight Ratio)",
    "Waist circumference divided by hip circumference (Waist-to-Hip Ratio)",
    "Bi-acromial breadth divided by bi-iliocristal breadth (Skeletal Ratio)"
  ],
  "t12-a1-015": [
    "By calculating differential growth proportions between sitting height, leg length, and stature",
    "By performing invasive annual bone biopsies of the distal radial growth plate under ultrasound",
    "By measuring salivary hormone concentrations upon awakening across four consecutive mornings",
    "By administering a maximal cardiopulmonary treadmill stress test to exhaustion under protocol"
  ],
  "t12-a1-018": [
    "Both cognitive and somatic anxiety remain at absolute zero until the match ends completely",
    "Cognitive anxiety remains stable while somatic anxiety spikes rapidly just prior to start",
    "Somatic anxiety remains elevated for weeks while cognitive anxiety spikes exclusively in debrief",
    "Cognitive anxiety drops to zero immediately while somatic anxiety disappears during warm-up"
  ],
  "t12-a1-020": [
    "A superimposed twitch during maximal voluntary contraction demonstrates incomplete central neural activation",
    "Muscle biopsy glycogen depletion confirms central fatigue is present at one hundred percent level in all fibers",
    "Blood lactate concentration exceeding ten millimoles per liter rules out peripheral fatigue completely",
    "Resting tendon reflex amplitude doubling indicates that central motor cortex drive is damaged permanently"
  ],
  "t12-a1-021": [
    "Decelerations involve rapid high-force eccentric muscle actions with high mechanical strain per fiber",
    "Decelerations require ninety percent higher oxygen consumption than concentric sprint accelerations",
    "Decelerations completely halt coronary arterial blood flow to the cardiac left ventricle acutely",
    "Decelerations occur exclusively while running backward on hard synthetic artificial turf grounds"
  ],
  "t12-a1-023": [
    "Minimal Detectable Change = SEM / 1.96",
    "Minimal Detectable Change = SEM * 1.96 * 1.414",
    "Minimal Detectable Change = SEM * 0.05",
    "Minimal Detectable Change = SEM^2 / 2.0"
  ],
  "t12-a1-024": [
    "Two-way mixed-effects model, absolute agreement, single measures",
    "One-way random-effects model, consistency, average group measures",
    "Pearson product-moment linear regression coefficient squared value",
    "Independent samples student t-test equality of variance model fit"
  ],
  "t12-a1-026": [
    "2D FPPA cannot differentiate true frontal knee abduction from transverse hip and tibial rotation",
    "2D FPPA requires placing thirty-two invasive retroreflective bone markers directly into cortices",
    "2D video cameras emit ionizing radiation that alters neuromuscular muscle recruitment patterns",
    "2D analysis completely overestimates ground reaction force vectors by over five hundred percent"
  ],
  "t12-a1-028": [
    "The concentric propulsion phase of the jump",
    "The eccentric braking deceleration phase of the jump",
    "The flight phase prior to ground impact and landing",
    "The quiet standing baseline weighing phase on plate"
  ],
  "t12-a1-029": [
    "By structurally transecting ascending spinothalamic nociceptive tracts permanently",
    "By decoupling sensory pain inputs from emotional appraisal in anterior cingulate cortex",
    "By eliminating all peripheral nerve action potential generation in mechanoreceptors",
    "By reducing circulating hemoglobin concentrations to diminish cerebral blood flow"
  ],
  "t12-a1-030": [
    "Single ten-minute dry sauna exposure on the morning of competition",
    "Daily exercise in heat (60-90 min/day) for 10 to 14 consecutive days",
    "Passive cold water immersion for 30 minutes daily for thirty days",
    "Fasting without water intake for forty-eight hours prior to departure"
  ],
  "t12-a1-032": [
    "When the prohibited substance was administered during emergency treatment for acute life-threatening medical trauma",
    "When the athlete forgot to submit the application form on time due to intensive pre-competition training schedules",
    "When the athlete wished to test whether their physical performance would improve during unofficial practice games",
    "When the team coaching staff advised the athlete that anti-doping testing would not be conducted at the competition"
  ],
  "t12-a2-003": [
    "Maximum of 400 micrograms over 24 hours of delivery",
    "Maximum of 1600 micrograms over 24 hours of delivery",
    "Maximum of 5000 micrograms over 24 hours of delivery",
    "Completely prohibited at all doses via all routes"
  ],
  "t12-a2-004": [
    "The National Anti-Doping Disciplinary Panel",
    "The Supreme Court of India Special Bench",
    "The Sports Authority of India Governing Body",
    "The Indian Olympic Association Council"
  ],
  "t12-a2-008": [
    "Cooling-off period of at least one (1) year after two terms",
    "Cooling-off period of at least four (4) years after two terms",
    "Cooling-off period of at least eight (8) years after two terms",
    "No cooling-off period required under the Code regulations"
  ],
  "t12-b-002": [
    "Combined rupture of both the PCL and Posterolateral Corner",
    "Isolated injury to the Posterolateral Corner with intact PCL",
    "Isolated complete rupture of the Anterior Cruciate Ligament",
    "Isolated tear of the anterior horn of the medial meniscus"
  ],
  "t12-b-004": [
    "Pain elicited in Position 1 (thumb down) that is eliminated in Position 2 (thumb up)",
    "Pain elicited equally in both positions (thumb down and thumb up) during extension",
    "Sudden electrical tingling radiating into hand (thumb and index) in Position 2 only",
    "Immediate inferior subluxation of the humeral head (sulcus sign) in both positions"
  ],
  "t12-b-007": [
    "Forced inversion stresses Calcaneofibular Ligament; Forced eversion stresses Deltoid Ligament",
    "Forced inversion stresses Deltoid Ligament; Forced eversion stresses Talofibular Ligament",
    "Forced inversion stresses Plantar Fascia; Forced eversion stresses Achilles Tendon complex",
    "Forced inversion stresses Spring Ligament; Forced eversion stresses Bifurcate Ligament band"
  ],
  "t12-b-010": [
    "Ballistic explosive movement (1 second concentric and 0 seconds eccentric per rep)",
    "Controlled slow tempo (3 seconds concentric and 3 seconds eccentric per rep)",
    "Ultra-slow isometric hold (30 seconds concentric and 30 seconds eccentric per rep)",
    "Variable random tempo (dictated by unpredictable electronic auditory metronome beeps)"
  ],
  "t12-b-011": [
    "Autogenic inhibition from target muscle GTOs combined with reciprocal inhibition from agonists",
    "Direct structural rupture of myofibrillar Z-discs combined with acute neural conduction blockade",
    "Complete sympathetic vasoconstriction combined with rapid elevation of motor unit firing rates",
    "Reciprocal excitation of target muscle spindles combined with Golgi tendon organ suppression"
  ],
  "t12-b-012": [
    "Large-amplitude slow oscillatory glide performed within the early pain-free range",
    "High-velocity, low-amplitude thrust performed at limit of available joint range",
    "Sustained isometric muscle contraction against immovable resistance for one minute",
    "Continuous passive motion machine mobilization applied for six hours continuously"
  ],
  "t12-b-013": [
    "Restricted Straight Leg Raise and low back pain associated with neural mechanosensitivity",
    "Complete anterior cruciate ligament rupture with massive hemarthrosis in acute knee trauma",
    "Symptomatic acromioclavicular joint separation grade III in competitive contact athletes",
    "De Quervain tenosynovitis with severe wrist extensor tendon sheath swelling and crepitus"
  ],
  "t12-b-015": [
    "High-intensity depth jumps -> Unilateral cutting drills -> Bilateral landing drills",
    "Bilateral landing mechanics -> Linear hopping -> Unilateral multi-directional cutting",
    "Continuous rotational box drops -> Seated leg curls -> Aquatic pool walking drills",
    "Single-leg triple hops to fatigue -> Bilateral squats -> Incline board stretching"
  ],
  "t12-b-016": [
    "The decline slope reduces dorsiflexion demand and isolates load onto patellar tendon",
    "The decline slope eliminates quadriceps activation and shifts all load to hamstrings",
    "The decline slope prevents the patella from contacting the femoral trochlear groove",
    "The decline slope reduces total mechanical loading on the knee joint by eighty percent"
  ],
  "t12-b-018": [
    "The position where the talar head is equally palpable on both sides of the navicular bone",
    "The position where the calcaneus is locked in twenty degrees of maximal active foot eversion",
    "The position where the great toe is held in ninety degrees of passive extension on the floor",
    "The position where the distal fibula translates anteriorly across the lateral talar dome surface"
  ],
  "t12-b-019": [
    "Initial 40 to 45 degrees occurs in lumbar spine, followed by anterior pelvic tilt at hips",
    "Initial 60 degrees occurs via posterior pelvic tilt, followed by thoracic hyperextension",
    "Flexion occurs exclusively at knee joints with lumbar spine locked in rigid lordosis shape",
    "Flexion occurs entirely through subtalar joint inversion without spinal vertebral movement"
  ],
  "t12-b-022": [
    "The neuromuscular controller's continuous spatial adjustments of the ground force vector",
    "The exact location of the anatomical center of body mass within the abdominal cavity space",
    "The total structural bone mineral density of the bilateral calcaneal skeletal tuberosities",
    "The maximal voluntary isometric force output of the quadriceps femoris extensor group"
  ],
  "t12-b-023": [
    "ER to IR strength ratio of approximately 20% to 30%",
    "ER to IR strength ratio of approximately 66% to 75%",
    "ER to IR strength ratio of approximately 120% to 150%",
    "ER to IR strength ratio of approximately 200% to 250%"
  ],
  "t12-b-024": [
    "Standing heel raise on the metatarsophalangeal joints via the triceps surae",
    "Elbow extension by the triceps brachii during a seated overhead arm press",
    "Biceps brachii elbow flexion lifting a dumbbell during concentric curls",
    "Hamstring knee flexion during terminal swing phase of running sprint gait"
  ],
  "t12-b-027": [
    "Inductive coils generate magnetic fields inducing eddy currents in vascular muscle tissue",
    "Capacitive plates generate pure acoustic sound waves that are reflected by skin epidermis",
    "Inductive coils freeze the superficial subcutaneous fat layer to sub-zero temperatures",
    "Capacitive plates only operate when submerged in high-concentration liquid saline bath"
  ],
  "t12-b-028": [
    "Radial waves peak at skin and diverge; Focused waves concentrate energy at a deep focal zone",
    "Radial waves penetrate twenty centimeters; Focused shockwaves only affect superficial epidermis",
    "Radial waves use electromagnetic light; Focused shockwaves use radioactive ionizing rays",
    "Radial waves require full anesthesia; Focused shockwaves are completely silent and vibration-free"
  ],
  "t12-b-029": [
    "NMES recruits motor units non-selectively and activates large fast-twitch fibers first",
    "NMES strictly follows Henneman size rule, recruiting small slow-twitch fibers exclusively",
    "NMES activates only smooth muscle fibers without stimulating alpha motor neuron axons",
    "NMES prevents all calcium ion release from the sarcoplasmic reticulum during stimulation"
  ],
  "t12-b-030": [
    "NCV decreases by approximately 1.5 to 2.0 m/s for every 1 degree C drop in tissue temperature",
    "NCV increases exponentially to over 200 m/s to facilitate rapid muscular withdrawal reflexes",
    "NCV remains completely unaltered until core body temperature drops below thirty degrees Celsius",
    "Sensory nerve conduction is permanently destroyed after two minutes of ice pack skin contact"
  ],
  "t12-b-031": [
    "To automatically rotate the modulation intersection zone across a larger treatment area",
    "To convert low-frequency current into high-voltage electromagnetic radio waves continuously",
    "To eliminate the requirement for conductive electrode gel or moist sponge pad interfaces",
    "To prevent the treatment timer from expiring during prolonged clinical therapy sessions"
  ],
  "t12-b-034": [
    "The nature of training dictates the specific nature of neural plasticity acquired",
    "Plasticity in response to one training task prevents learning any other motor skill",
    "Neural plasticity only occurs if training sessions exceed eight continuous hours daily",
    "Passive stretching of limbs induces greater cortical reorganization than motor training"
  ],
  "t12-b-035": [
    "Dual-task testing unmasks subclinical sensorimotor and attentional deficits post-concussion",
    "Dual-task testing measures maximal quadriceps torque without an isokinetic dynamometer",
    "Dual-task testing permanently reverses all structural post-concussion cortical microbleeds",
    "Dual-task testing is used strictly to evaluate visual acuity and determine eye prescriptions"
  ],
  "t12-b-036": [
    "Target angle positioning followed by blinded active reproduction, measuring error in degrees",
    "Measuring cutaneous thermal discrimination thresholds using warm and cold water glass tubes",
    "Determining the maximum weight an athlete can lift for one repetition with eyes closed shut",
    "Applying vibrating tuning forks over the clavicle to measure auditory brainstem reflexes"
  ],
  "t12-b-039": [
    "Attenuates disuse muscle atrophy, maintains GLUT4 content, and accelerates recovery",
    "Completely prevents all ligament laxity and accelerates articular cartilage healing",
    "Replaces the need for progressive mechanical loading and physical therapy entirely",
    "Eliminates all inflammatory cytokine release from healing surgical incision margins"
  ],
  "t12-b-040": [
    "Evaluating athlete health, biological healing status, and objective functional markers",
    "Evaluating financial bonuses and commercial sponsorship implications of match victory",
    "Assessing media scrutiny and external fan pressure on team coaching leadership staff",
    "Consulting opposing team coaches to assess tactical match importance and roster needs"
  ],
  "t12-c-001": [
    "Grade II isolated superficial MCL sprain with intact secondary stabilizers",
    "Grade III complete rupture of MCL combined with PCL ligament disruption",
    "Complete rupture of the ACL with medial meniscal root attachment tear",
    "Isolated lateral collateral ligament sprain with posterolateral instability"
  ],
  "t12-c-003": [
    "Subacromial space narrowing during elevation exacerbated by scapular protraction and cuff fatigue",
    "Complete traumatic bony avulsion fracture of the acromion process from the scapular spine",
    "Compression of the suprascapular nerve within the spinoglenoid notch by a paralabral cyst",
    "Severe glenohumeral osteoarthritis with large intra-articular osteophytes and joint destruction"
  ],
  "t12-c-004": [
    "Posterior capsule stretching, serratus anterior/lower trap strengthening, and cuff endurance",
    "Continuous ultrasound therapy alone without exercise and swimming avoidance for 12 months",
    "High-load military overhead barbell shoulder presses performed to muscular failure daily",
    "Surgical subacromial decompression (acromioplasty) as mandatory first-line intervention"
  ],
  "t12-c-005": [
    "Late reactive tendinopathy / tendon disrepair transitioning to degenerative tendinopathy",
    "Acute bacterial infectious tenosynovitis with tissue necrosis requiring urgent drainage",
    "Pure inflammatory peritendinitis without structural collagen changes in tendon core",
    "Complete traumatic rupture of patellar tendon with high-riding patella displacement"
  ],
  "t12-c-006": [
    "Isometric Spanish squats -> Heavy Slow Resistance -> Energy storage plyometrics progression",
    "Total bed rest and non-weight bearing on crutches for eight weeks followed by competition",
    "Routine repeated intratendinous corticosteroid injections every two weeks until pain-free",
    "Exclusive performance of high-velocity plyometric drop jumps from 60 cm boxes daily"
  ],
  "t12-c-007": [
    "The Anterior Talofibular Ligament",
    "The Posterior Talofibular Ligament",
    "The Superficial Deltoid Ligament",
    "The Anterior Tibiofibular Ligament"
  ],
  "t12-c-008": [
    "POLICE protocol with functional ankle support, early weight-bearing, and balance training",
    "Rigid fiberglass cast immobilization for six weeks without any ankle joint movement",
    "Immediate surgical open repair of the ATFL within twenty-four hours of injury presentation",
    "Strict non-weight bearing bed rest on crutches without therapy until swelling disappears"
  ],
  "t12-c-009": [
    "Hamstring strength deficit (LSI = 82%, below the >=90% threshold) following autograft harvest",
    "Quadriceps strength deficit (LSI = 62%, below the >=90% threshold) following surgery",
    "Psychological unreadiness (ACL-RSI = 44, below the >=75 score threshold) for contact sport",
    "Functional hop testing failure (LSI = 71%, below the >=90% threshold) across hop testing"
  ],
  "t12-c-010": [
    "High-load eccentric hamstring strengthening (Nordic curls, RDLs, and high-velocity leg curls)",
    "High-load seated open-chain leg extensions (quadriceps curls) performed five times weekly",
    "Passive knee extension stretching (with 10 kg overpressure) placed on superior patellar pole",
    "Complete cessation of all resistance exercise (with reliance solely) on stationary cycling"
  ],
  "t12-c-011": [
    "Repetitive traction microtrauma to immature tibial tuberosity (Osgood-Schlatter Disease)",
    "Acute intra-articular bacterial septic arthritis of the knee joint (Septic Joint Infection)",
    "Complete traumatic tear of the posterior horn of the lateral meniscus (Meniscal Root Tear)",
    "Primary osteosarcoma malignancy of the proximal tibial metaphysis (Malignant Bone Lesion)"
  ],
  "t12-c-012": [
    "Symptom-guided load management, quadriceps/hip flexibility, and post-activity cryotherapy",
    "Complete cast immobilization of the knee in full extension for twelve consecutive weeks",
    "Immediate surgical excision of the entire tibial tuberosity under general anesthesia",
    "Corticosteroid injection into the patellar tendon insertion under ultrasound guidance"
  ],
  "t12-c-013": [
    "Compression of richly innervated fat pad deep to ITB over lateral femoral epicondyle",
    "Complete longitudinal bucket-handle tear of the lateral meniscus fibrocartilage body",
    "Isolated rupture of the popliteus tendon with posterolateral rotational instability",
    "Stress fracture of the proximal fibular neck with accompanying peroneal nerve palsy"
  ],
  "t12-c-014": [
    "Gluteus medius strengthening, running cadence increase (+7.5%), and step width widening",
    "Solely passive foam rolling of the ITB for sixty minutes daily without hip exercises",
    "Immobilization in a long-leg cylinder cast for six weeks with complete cessation of sport",
    "Immediate surgical release and transection of the iliotibial band as first-line therapy"
  ],
  "t12-c-015": [
    "Pronator Teres and Flexor Carpi Radialis tendon origins",
    "Extensor Carpi Radialis Brevis and Digitorum tendon origins",
    "Triceps Brachii distal tendon insertion on olecranon process",
    "Biceps Brachii distal tendon insertion on radial tuberosity"
  ],
  "t12-c-016": [
    "Isometric wrist flexion -> Eccentric-concentric loading -> Archery kinetic chain drills",
    "Immobilization of the elbow in a cast for six weeks with complete cessation of activity",
    "Routine repeated corticosteroid injections into the flexor tendon origin every three weeks",
    "Passive continuous ultrasound therapy alone without any active therapeutic exercise loading"
  ],
  "t12-c-017": [
    "High diagnostic specificity (>90%) indicating space-occupying disc herniation with nerve compression",
    "Complete rule-out of lumbar disc pathology, confirming isolated hamstring muscle strain injury",
    "Confirmation of thoracic facet joint arthropathy without lumbar spine nerve root involvement",
    "High probability of sacroiliac joint ligamentous laxity without lumbar nerve root compression"
  ],
  "t12-c-018": [
    "Directional preference exercises (McKenzie extensions), avoiding loaded flexion, with core stability",
    "Aggressive continuous seated lumbar flexion stretches (with 20 kg overpressure) on thighs",
    "Immediate emergency lumbar spinal fusion surgery (without trial) of conservative physiotherapy",
    "High-velocity rotational spinal manipulation (performed in full flexion) under traction force"
  ],
  "t12-c-019": [
    "Detachment of superior labrum and long head of biceps tendon anchor from superior glenoid",
    "Fraying of the superior labrum with an intact and stable long biceps anchor attachment",
    "Bucket-handle tear of superior labrum with intact long head of biceps tendon anchor",
    "Bucket-handle tear of superior labrum with tear extension into long biceps tendon"
  ],
  "t12-c-020": [
    "Posterior capsular stretching, rotator cuff strengthening, and kinetic chain throwing drills",
    "Immediate surgical labral repair and biceps tenodesis without trial of physical therapy",
    "Complete rigid immobilization of the shoulder in an abduction splint for six months",
    "Exclusive high-load overhead barbell snatches performed to muscular failure daily"
  ]
}

for q in qs:
    qid = q['id']
    if qid in fixes:
        # Determine correct content originally
        c = q['correct']
        corr_text = q['options'][c]
        # Reconstruct balanced options with same correct option content in position c
        new_opts = fixes[qid]
        # Find which index in new_opts corresponds to the correct answer
        # For our fixes, index 0 is always the correct concept!
        # Place new_opts[0] at index c, and remaining at others
        final_opts = []
        rem_idx = 1
        for pos in range(4):
            if pos == c:
                final_opts.append(new_opts[0])
            else:
                final_opts.append(new_opts[rem_idx])
                rem_idx += 1
        q['options'] = final_opts

with open('mock_tests/mock_test_12.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Applied fixes to Test 12!")
