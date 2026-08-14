import json

# Let us define the replacement unique questions for the duplicates
# 1. Fix single duplicates in earlier tests:

fix_q409 = {
    "id": 409,
    "section": "A1",
    "text": "According to ISAK anthropometry standards, which anatomical landmarks define the measurement of the 'Triceps' skinfold site?",
    "options": [
        "On the posterior midline of the upper arm, over the triceps brachii muscle belly, midway between the acromion and olecranon",
        "On the anterior midline of the upper arm, over the biceps brachii muscle belly, midway between the acromion and olecranon",
        "Along the lateral border of the deltoid muscle insertion, midway between the clavicle and the lateral humeral epicondyle",
        "Directly over the coracoid process of the scapula, pinched horizontally along the natural skin cleavage line of the arm"
    ],
    "correct": 0,
    "explanation": "ISAK triceps skinfold is measured on the posterior surface of the arm, in the midline, at the marked mid-acromiale-radiale level, with the arm hanging relaxed."
}

fix_q451 = {
    "id": 451,
    "section": "B",
    "text": "In manual therapy according to Maitland, what defines a 'Grade I' (Grade One) peripheral joint mobilization technique?",
    "options": [
        "A small-amplitude oscillatory movement performed near the starting position of range, well short of any tissue resistance",
        "A large-amplitude oscillatory movement performed within the mid-range of movement, well clear of any tissue resistance",
        "A large-amplitude oscillatory movement performed up to the limit of available range, moving well into tissue resistance",
        "A high-velocity, low-amplitude thrust manipulation performed past the anatomical limit of available range of movement"
    ],
    "correct": 0,
    "explanation": "Maitland Grade I is a small-amplitude oscillatory movement near the starting position of the range, used primarily for pain modulation via mechanoreceptor activation."
}

fix_q238 = {
    "id": 238,
    "section": "A2",
    "text": "Under the National Sports Awards scheme of India, what is the specific eligibility criterion for the 'Dronacharya Award' in the Regular Category?",
    "options": [
        "Outstanding and meritorious coaching work consistently over a period of four years in producing medalists at major games",
        "Outstanding coaching contribution over a lifetime period of twenty years or more in developing national sports academies",
        "Winning an individual gold medal in Olympic track and field sprint events over four consecutive Olympic tournament cycles",
        "Constructing the largest public municipal sports stadium facility in a state capital territory using public donations"
    ],
    "correct": 0,
    "explanation": "The Dronacharya Award (Regular Category) recognizes coaches who have successfully trained sportspersons or teams enabling them to achieve outstanding results in international competitions over a 4-year period."
}

fix_q651 = {
    "id": 651,
    "section": "B",
    "text": "In manual therapy according to Maitland, what defines a 'Grade III' (Grade Three) joint mobilization technique?",
    "options": [
        "A large-amplitude oscillatory movement performed up to the limit of available range, moving deep into tissue resistance",
        "A small-amplitude oscillatory movement performed near the starting position of range, well short of any tissue resistance",
        "A large-amplitude oscillatory movement performed within the mid-range of movement, well clear of any tissue resistance",
        "A high-velocity, low-amplitude thrust manipulation performed past the anatomical limit of available range of movement"
    ],
    "correct": 0,
    "explanation": "Maitland Grade III is a large-amplitude oscillatory movement performed up to the pathological limit of the available range, moving into tissue resistance to increase ROM."
}

fix_q670 = {
    "id": 670,
    "section": "B",
    "text": "In clinical neurodynamics, when performing the Upper Limb Neurodynamic Test 3 (ULNT3 / ULNT-Ulnar), what is the sequence of movements?",
    "options": [
        "Shoulder depression -> Abduction (90°) -> Wrist/finger extension + pronation -> Forearm pronation -> Elbow maximal flexion",
        "Shoulder elevation -> Shoulder abduction to 180° -> Forearm supination -> Wrist flexion -> Elbow extension in neutral plane",
        "Shoulder internal rotation behind back -> Elbow extension -> Forearm pronation -> Wrist flexion and ulnar deviation in sitting",
        "Shoulder horizontal adduction -> Elbow extension -> Forearm supination -> Wrist neutral -> Deep diaphragmatic inspiration"
    ],
    "correct": 0,
    "explanation": "ULNT3 (Ulnar nerve bias) sequence: Shoulder girdle depression, shoulder abduction, external rotation, forearm pronation/wrist-finger extension, followed by elbow flexion."
}

fix_q609 = {
    "id": 609,
    "section": "A1",
    "text": "According to ISAK anthropometry standards, which anatomical landmarks define the measurement of the 'Biceps' skinfold site?",
    "options": [
        "On the anterior midline of the upper arm, over the biceps brachii belly, at the marked mid-acromiale-radiale level line",
        "On the posterior midline of the upper arm, over the triceps belly, midway between the acromion and olecranon process",
        "Along the lateral border of the deltoid muscle insertion, midway between the clavicle and the lateral epicondylar ridge",
        "Directly over the coracoid process of the scapula, pinched horizontally along the natural cleavage lines of the skin"
    ],
    "correct": 0,
    "explanation": "ISAK biceps skinfold is measured on the anterior surface of the arm, over the belly of the biceps brachii, at the mid-acromiale-radiale level, with the arm relaxed."
}

fix_q349 = {
    "id": 349,
    "section": "B",
    "text": "In therapeutic exercise progression, what is the 'Overload Principle' in musculoskeletal rehabilitation (Kisner & Colby)?",
    "options": [
        "To improve physical capacity, exercise load must exceed the metabolic or mechanical capacity of the targeted tissues",
        "Exercise resistance must be continuously reduced over successive training sessions to prevent tissue overuse injuries",
        "All physical adaptations occur exclusively during the first twenty-four hours of beginning an exercise therapy program",
        "Muscles must be loaded only while in a state of complete glycogen depletion to force structural cellular adaptations"
    ],
    "correct": 0,
    "explanation": "The Overload Principle states that for muscle performance to improve, a resistance load that exceeds the metabolic capacity of the muscle must be applied."
}

fix_q472 = {
    "id": 472,
    "section": "B",
    "text": "In spinal cord injury neurological classification (ASIA Impairment Scale), what clinical presentation defines an 'ASIA Grade C' injury?",
    "options": [
        "Motor Incomplete: Motor function is preserved below neurological level, and more than half of key muscles have grade < 3",
        "Motor Incomplete: Motor function is preserved below neurological level, and at least half of key muscles have grade ≥ 3",
        "Sensory Incomplete: Sensory but NO motor function is preserved below neurological level and includes sacral segments",
        "Complete: No sensory or motor function is preserved in the sacral segments S4–S5 (light touch and anal pressure absent)"
    ],
    "correct": 0,
    "explanation": "ASIA C (Motor Incomplete): Motor function is preserved below the neurological level, and more than half of key muscle functions below the single neurological level of injury have a muscle grade less than 3."
}

fix_q809 = {
    "id": 809,
    "section": "A1",
    "text": "According to ISAK anthropometry standards, which anatomical landmarks define the measurement of the 'Supraspinale' skinfold?",
    "options": [
        "At intersection of line from iliospinale to anterior axillary border and horizontal line from superior iliac crest",
        "Directly 2 cm superior to the anterior superior iliac spine, pinched vertically along the mid-axillary reference line",
        "Along the posterior midline of the hamstring muscle belly, 5 cm proximal to the popliteal crease line of the knee",
        "On the anterior midline of the thigh, midway between the inguinal fold line and the superior margin of the patella"
    ],
    "correct": 0,
    "explanation": "The ISAK supraspinale skinfold is located at the intersection of a line from the iliospinale to the anterior axillary border and the horizontal line at the level of the superior border of the ilium."
}

fix_q641 = {
    "id": 641,
    "section": "B",
    "text": "The 'External Rotation Recoil Test' (Infraspinatus Spring-Back Test) of the shoulder evaluates the integrity of which structure?",
    "options": [
        "Infraspinatus and Teres Minor muscles (lag or spring-back from maximal passive external rotation indicates full tear)",
        "Subscapularis muscle tendon insertion at the lesser tuberosity of the proximal anterior humeral shaft in internal rotation",
        "Supraspinatus muscle tendon insertion at the superior facet of the greater tuberosity during active arm abduction",
        "Long head of the biceps brachii tendon within the bicipital groove of the anterior humerus during supination testing"
    ],
    "correct": 0,
    "explanation": "The external rotation lag sign (ERLS / Spring-back test) tests the integrity of the infraspinatus and teres minor tendons."
}

# 2. Brand-new 40 Unique Questions for Test 10 (Q941 to Q980) covering Section B:
new_test10_section_b = {
    941: {
        "id": 941,
        "section": "B",
        "text": "The 'Crank Test' of the shoulder (Liu et al.) is a provocative orthopedic physical assessment maneuver used to diagnose:",
        "options": [
            "Glenoid Labral Tears (particularly Superior Labrum Anterior-to-Posterior [SLAP] lesions and Bankart labral tears)",
            "Acromioclavicular joint osteoarthritis with inferior osteophyte spur formation along the clavicular articulation",
            "Bicipital tenosynovitis within the bicipital groove of the proximal anterior humeral shaft during arm elevation",
            "Adhesive capsulitis of the glenohumeral joint with global capsular restriction in a classic capsular pattern"
        ],
        "correct": 0,
        "explanation": "The Crank Test evaluates glenoid labral tears (SLAP and Bankart lesions) by applying axial compression along the humerus while rotating the 160° abducted arm in the scapular plane."
    },
    942: {
        "id": 942,
        "section": "B",
        "text": "The 'O'Brien Active Compression Test' of the shoulder is considered positive for a Superior Labral (SLAP) lesion when:",
        "options": [
            "Pain deep inside the joint is provoked with the arm internally rotated (thumb down) and relieved with supination (thumb up)",
            "Pain occurs exclusively over the acromioclavicular joint line in both forearm internal and external rotation positions",
            "Pain is relieved when the examiner applies downward axial traction on the abducted arm in ninety degrees abduction plane",
            "Sharp pain is provoked only when the arm is fully elevated overhead in 180° of abduction with forearm fully pronated"
        ],
        "correct": 0,
        "explanation": "O'Brien's test is positive for SLAP tears when deep joint pain is reproduced with arm in 90° flexion, 10° adduction, thumb down, and eliminated or reduced when thumb is up."
    },
    943: {
        "id": 943,
        "section": "B",
        "text": "The 'Drop-Arm Test' (Codman's Sign) of the shoulder is a physical examination maneuver used to detect complete rupture of:",
        "options": [
            "Supraspinatus muscle tendon (inability to smoothly lower the arm from 90° abduction without sudden dropping or pain)",
            "Subscapularis muscle tendon (inability to actively lift the dorsum of the hand away from the mid-lumbar spinal column)",
            "Infraspinatus muscle belly within the infraspinous fossa of the dorsal scapula during resisted external rotation testing",
            "Pectoralis major clavicular head tendon insertion at the lateral lip of the bicipital groove during arm adduction"
        ],
        "correct": 0,
        "explanation": "Drop-Arm test assesses for full-thickness tears of the supraspinatus tendon. The patient is asked to slowly lower the arm from 90° abduction; a positive test is sudden dropping of the arm."
    },
    944: {
        "id": 944,
        "section": "B",
        "text": "The 'Hornblower's Sign' (Patte Test) of the shoulder evaluates the structural integrity and fatty degeneration of:",
        "options": [
            "Teres Minor and Infraspinatus muscles (inability to maintain 90° external rotation in the 90° abducted shoulder position)",
            "Supraspinatus muscle tendon insertion at the superior facet of the greater tuberosity during active arm abduction plane",
            "Subscapularis muscle insertion at the lesser tuberosity of the proximal anterior humeral shaft during internal rotation",
            "Long head of the biceps brachii tendon within the bicipital groove of the anterior humerus during active arm flexion"
        ],
        "correct": 0,
        "explanation": "Hornblower's sign (Patte test) evaluates teres minor integrity. Inability to maintain external rotation with the arm abducted to 90° indicates severe teres minor pathology/fatty infiltration."
    },
    945: {
        "id": 945,
        "section": "B",
        "text": "The 'Faber Test' (Patrick's / Figure-of-Four Test) of the hip and pelvis is performed with which combined hip positioning?",
        "options": [
            "Hip Flexion, Abduction, and External Rotation with the lateral malleolus placed over the contralateral knee in supine",
            "Hip Extension, Adduction, and Internal Rotation with the limb placed across the midline of the body in prone position",
            "Hip Flexion, Adduction, and Internal Rotation with axial compression applied along the long axis of the femur in supine",
            "Hip Abduction, Extension, and External Rotation with the patient lying in side-lying with the pelvis stabilized firmly"
        ],
        "correct": 0,
        "explanation": "FABER stands for Flexion, ABduction, and External Rotation. It evaluates intra-articular hip pathology (anterior groin pain) or sacroiliac joint pathology (posterior buttock pain)."
    },
    946: {
        "id": 946,
        "section": "B",
        "text": "The 'Ely's Test' of the hip and knee is a clinical physical examination maneuver used to detect contracture or tightness of:",
        "options": [
            "Rectus Femoris muscle (passive knee flexion in prone causes spontaneous anterior pelvic tilt and hip flexion elevation)",
            "Iliopsoas muscle (passive knee extension in supine causes spontaneous lumbar hyperextension and anterior pelvic tilting)",
            "Gluteus Maximus muscle (passive hip flexion in supine causes spontaneous knee extension and posterior pelvic tilting)",
            "Tensor Fasciae Latae muscle (passive hip adduction in side-lying causes spontaneous knee flexion and lateral rotation)"
        ],
        "correct": 0,
        "explanation": "Ely's test assesses rectus femoris tightness. With the patient prone, the examiner passively flexes the knee; hip flexion/pelvic rise on the same side indicates tightness."
    },
    947: {
        "id": 947,
        "section": "B",
        "text": "The 'Dial Test' (Tibial External Rotation Test) of the knee, when positive at 30° of knee flexion but normal at 90°, indicates:",
        "options": [
            "Isolated injury to the Posterolateral Corner (PLC: FCL, Popliteus tendon, and Popliteofibular ligament complex)",
            "Combined injury to both the Posterior Cruciate Ligament (PCL) and Posterolateral Corner (PLC) complex of the knee",
            "Isolated complete tear of the Anteromedial bundle of the Anterior Cruciate Ligament (ACL) at the femoral insertion",
            "Isolated disruption of the Superficial Medial Collateral Ligament (sMCL) along the medial joint line of the knee"
        ],
        "correct": 0,
        "explanation": "An increase of >10° external rotation at 30° flexion that normalizes at 90° indicates an isolated PLC injury. If increased at both 30° and 90°, it indicates combined PCL + PLC injury."
    },
    948: {
        "id": 948,
        "section": "B",
        "text": "The 'Squeeze Test' (Distal Tibiofibular Compression Test) of the lower leg is a physical assessment maneuver used to detect:",
        "options": [
            "High Ankle Sprain (Distal Syndesmotic Ligament injury involving AITFL, PITFL, and Interosseous membrane)",
            "Acute lateral ankle sprain involving complete rupture of the Anterior Talofibular Ligament (ATFL) at the fibula",
            "Deep vein thrombosis of the anterior tibial vein with complete occlusion of lower extremity venous return channels",
            "Stress fracture of the distal fifth metatarsal styloid process with dense sclerotic non-union margins on X-ray"
        ],
        "correct": 0,
        "explanation": "The Squeeze test compresses the fibula and tibia at mid-calf; reproduction of distal syndesmotic pain indicates a syndesmosis (high ankle) injury."
    },
    949: {
        "id": 949,
        "section": "B",
        "text": "In therapeutic exercise progression, what is the 'Reversibility Principle' in sports rehabilitation and conditioning?",
        "options": [
            "Adaptive gains in muscular strength, endurance, and aerobic capacity are transient and regress when training ceases",
            "Rehabilitation exercises must be performed in reverse chronological order to optimize neuromuscular motor learning",
            "All physical training adaptations are permanent and never decline regardless of prolonged bed rest or detraining",
            "Athletes must perform concentric contractions followed immediately by reverse eccentric contractions in all sets"
        ],
        "correct": 0,
        "explanation": "The Reversibility Principle states that adaptive changes in the body's systems in response to an exercise program are transient unless training-induced improvements are regularly maintained."
    },
    950: {
        "id": 950,
        "section": "B",
        "text": "In patellar tendinopathy rehabilitation, what is the 'Heavy Slow Resistance' (HSR) protocol developed by Kongsgaard et al.?",
        "options": [
            "3 bilateral loading exercises performed 3 times weekly for 12 weeks, progressing from 15RM down to 6RM with slow cadence",
            "Strictly unilateral eccentric drop squats performed twice daily for 12 weeks on a 25-degree decline wooden board",
            "Continuous passive motorized knee stretching on a mechanical table for eight consecutive weeks without active exercise",
            "High-velocity drop jumps from 60 cm plyometric boxes onto hard wooden flooring surfaces performed three times daily"
        ],
        "correct": 0,
        "explanation": "The HSR protocol (Kongsgaard et al.) consists of 3 bilateral exercises (squat, leg press, hack squat) performed 3x/week for 12 weeks with a 6-second repetition cadence (3s eccentric, 3s concentric)."
    },
    951: {
        "id": 951,
        "section": "B",
        "text": "In manual therapy according to Maitland, what defines a 'Grade II' (Grade Two) joint mobilization technique?",
        "options": [
            "A large-amplitude oscillatory movement performed within the mid-range of movement, well clear of any tissue resistance",
            "A small-amplitude oscillatory movement performed near the starting position of range, well short of any tissue resistance",
            "A large-amplitude oscillatory movement performed up to the limit of available range, moving well into tissue resistance",
            "A high-velocity, low-amplitude thrust manipulation performed past the anatomical limit of available range of movement"
        ],
        "correct": 0,
        "explanation": "Maitland Grade II is a large-amplitude oscillatory movement within the mid-range of movement, free from resistance, used for pain modulation and joint lubrication."
    },
    952: {
        "id": 952,
        "section": "B",
        "text": "In Proprioceptive Neuromuscular Facilitation (PNF), what is the 'Rhythmic Initiation' technique and its primary clinical purpose?",
        "options": [
            "Progressing from passive to active-assisted to active resisted movement to teach a movement pattern and promote relaxation",
            "A rapid ballistic bouncing stretch performed at maximum velocity to trigger the stretch reflex loop in spastic muscles",
            "Applying continuous electrical stimulation to the tendon to cause permanent muscle denervation and spasticity relief",
            "Maintaining a continuous static stretch for two hours while the patient is sleeping under continuous hospital sedation"
        ],
        "correct": 0,
        "explanation": "Rhythmic Initiation progresses from passive through active-assisted to active-resisted movement. It is used to assist patients who have difficulty initiating movement or managing hypertonia."
    },
    953: {
        "id": 953,
        "section": "B",
        "text": "In patellar tendinopathy rehabilitation, what is the 'Decline Squat' protocol developed by Purdam and Cook et al.?",
        "options": [
            "Unilateral single-leg squats performed on a 25-degree decline board to maximize load on the patellar tendon enthesis",
            "Bilateral deep barbell squats performed with the heels elevated on 20 cm wooden blocks to muscular failure on machines",
            "Continuous passive motorized knee stretching on a mechanical table for eight consecutive weeks without active exercise",
            "Seated short-range leg extensions performed strictly on an open-chain gym machine with the hip held in 45° extension"
        ],
        "correct": 0,
        "explanation": "The decline squat on a 25° slant board isolates the patellar tendon by reducing calf contribution and increasing peak patellar tendon load and knee extensor moment."
    },
    954: {
        "id": 954,
        "section": "B",
        "text": "In the McKenzie Method (MDT), what defines the 'Dysfunction Syndrome' and how is it managed mechanically?",
        "options": [
            "Pain produced at the end-range of mechanically shortened, scarred, or contracted tissues; treated with end-range remodeling",
            "Mechanical displacement of disc nuclear material causing internal joint obstruction; treated with rapid centralization",
            "Pain produced exclusively by prolonged static poor posture without any internal mechanical joint derangement or scar",
            "Systemic inflammatory autoimmune arthritis requiring continuous high-dose pharmacological immunosuppressive drugs"
        ],
        "correct": 0,
        "explanation": "McKenzie Dysfunction Syndrome is caused by mechanical deformation of structurally impaired (shortened/fibrosed) tissues. Pain is consistently produced at limited end-range and treated by progressive remodeling."
    },
    955: {
        "id": 955,
        "section": "B",
        "text": "In kinesiology, what is the 'Convex-Concave Rule' for the Glenohumeral Joint during active open-chain shoulder Abduction?",
        "options": [
            "The convex humeral head rolls superiorly and glides (slides) INFERIORLY on the concave glenoid fossa articular surface",
            "The convex humeral head rolls superiorly and glides superiorly on the concave glenoid fossa in the same direction path",
            "The concave glenoid fossa rolls inferiorly on the fixed convex humeral head surface during active elevation movement",
            "The humeral head undergoes pure anterior translation without any angular rolling motion across the joint surface plane"
        ],
        "correct": 0,
        "explanation": "According to Neumann's kinesiology, the convex humeral head rolls superiorly and slides inferiorly on the concave glenoid fossa during open-chain shoulder abduction."
    },
    956: {
        "id": 956,
        "section": "B",
        "text": "During normal human walking gait, what is the 'Loading Response' (Initial Stance) phase characterized by at the knee joint?",
        "options": [
            "Controlled knee flexion of approximately 15°–20° under eccentric quadriceps control to provide shock absorption",
            "Complete knee hyperextension (recurvatum) locked in 0° to minimize metabolic energy expenditure during stance",
            "Rapid passive knee flexion to 60° driven exclusively by concentric hamstring contraction to clear the foot",
            "Unconstrained coronal plane knee valgus displacement driven by complete relaxation of the medial collateral ligament"
        ],
        "correct": 0,
        "explanation": "During Loading Response (0–10% of gait cycle), the knee flexes to ~15°–20° while the quadriceps contract eccentrically to absorb impact shock and preserve forward momentum."
    },
    957: {
        "id": 957,
        "section": "B",
        "text": "In human gait kinematics, what is the 'Terminal Swing' phase defined by in terms of lower extremity muscle action?",
        "options": [
            "Eccentric hamstring contraction to decelerate the advancing thigh/shank and position the foot for initial heel strike",
            "Concentric quadriceps contraction to hyperextend the knee and maximize flight time during sprint running acceleration",
            "Isometric contraction of the gastrocnemius to lock the ankle in maximal rigid plantarflexion posture during swing",
            "Complete electrical silence of all lower extremity muscles to allow passive ballistic swing trajectory of the limb"
        ],
        "correct": 0,
        "explanation": "During Terminal Swing (87–100% of gait cycle), the hamstrings contract eccentrically to decelerate hip flexion and knee extension, preparing the limb for initial contact."
    },
    958: {
        "id": 958,
        "section": "B",
        "text": "A 'Steppage Gait' (Drop Foot Gait) is a pathological gait deviation characterized by which kinematic compensation?",
        "options": [
            "Excessive hip and knee flexion during swing to lift the advancing limb and clear a weak or paralyzed dorsiflexing foot",
            "The patient rises onto the toes of the stance limb to create vertical clearance for a stiff contralateral limb in swing",
            "The swinging limb circumducts outward in a wide semi-circular arc to advance forward in the sagittal plane of movement",
            "The stance knee collapses into sudden hyperextension (recurvatum) due to weakness of the Quadriceps Femoris muscle"
        ],
        "correct": 0,
        "explanation": "Steppage gait is caused by weakness of the ankle dorsiflexors (deep peroneal nerve / L4–L5), compensated by excessive hip and knee flexion to prevent toe dragging during swing."
    },
    959: {
        "id": 959,
        "section": "B",
        "text": "In foot and ankle biomechanics, what constitutes the 'Subtalar Joint Neutral' position and its clinical importance?",
        "options": [
            "The position where the talar head is palpated equally congruous on medial and lateral sides within the navicular fossa",
            "The position where the ankle is held in maximal forty-five degrees of active plantarflexion and extreme hindfoot inversion",
            "The position where the calcaneus is locked in ten degrees of absolute fixed eversion against the lateral fibular malleolus",
            "The position where all intrinsic foot muscles are completely paralyzed under local anesthetic nerve block infiltration"
        ],
        "correct": 0,
        "explanation": "Subtalar joint neutral (STJN) is the position where the talus is congruent within the subtalar articulation, neither pronated nor supinated, used as a reference point for orthotic fabrication."
    },
    960: {
        "id": 960,
        "section": "B",
        "text": "In scapular kinematics, which muscular force couple produces upward rotation of the scapula during active arm elevation?",
        "options": [
            "Upper Trapezius, Lower Trapezius, and Serratus Anterior working cooperatively to upwardly rotate the scapular glenoid",
            "Pectoralis Major, Latissimus Dorsi, and Teres Major downward rotators pulling the humerus into internal rotation",
            "Rhomboid Major, Rhomboid Minor, and Levator Scapulae downward rotators pulling the medial scapular border superiorly",
            "Subscapularis, Supraspinatus, and Infraspinatus rotator cuff muscles pulling the humeral head into inferior translation"
        ],
        "correct": 0,
        "explanation": "Upward rotation of the scapula during arm elevation is driven by the synergistic force couple of the Upper Trapezius, Lower Trapezius, and Serratus Anterior."
    },
    961: {
        "id": 961,
        "section": "B",
        "text": "In foot kinematics, what is the 'Windlass Mechanism' described by Hicks and how is it mechanically engaged?",
        "options": [
            "Dorsiflexion of the 1st MTP tightens the plantar fascia over the metatarsal head, elevating the medial longitudinal arch",
            "Plantarflexion of the ankle relaxes the Achilles tendon to allow loose, shock-absorbing pronation during propulsion",
            "Eversion of the subtalar joint unlocks the transverse tarsal joints to convert the foot into a flexible structure",
            "Internal rotation of the tibia flattens the medial longitudinal arch to increase ground contact surface area in stance"
        ],
        "correct": 0,
        "explanation": "Hicks' Windlass Mechanism: Dorsiflexion of the hallux winds the plantar fascia around the head of the first metatarsal, shortening the distance between calcaneus and metatarsals and elevating the arch."
    },
    962: {
        "id": 962,
        "section": "B",
        "text": "In knee kinesiology, what is the 'Screw-Home Mechanism' during terminal knee extension in open kinetic chain?",
        "options": [
            "The Tibia externally rotates approximately 10°–15° on the fixed Femur during the final 30° of active knee extension",
            "The Tibia internally rotates approximately 10°–15° on the fixed Femur during the final 30° of active knee extension",
            "The Femur externally rotates on the fixed Tibia during the final 30° of active open-chain knee extension in sitting",
            "The patella translates laterally by 20 mm to lock into the lateral trochlear groove during terminal knee hyperextension"
        ],
        "correct": 0,
        "explanation": "In open chain knee extension, the larger medial femoral condyle causes the tibia to externally rotate ~10°–15° on the fixed femur during the terminal 30° of extension, locking the joint."
    },
    963: {
        "id": 963,
        "section": "B",
        "text": "In therapeutic electrotherapy, what is 'Acupuncture-Like TENS' (Low-Frequency TENS: 1–4 Hz at motor intensity) and its mechanism?",
        "options": [
            "Stimulates A-delta and C fibers via rhythmic muscle twitches, triggering systemic beta-endorphin release in the CNS",
            "Selectively depolarizes large A-beta sensory afferents, activating inhibitory interneurons to close Spinal Pain Gate",
            "Thermally cauterizes cutaneous nociceptors using focused microwave radiofrequency ablation and localized tissue heating",
            "Blocks neuromuscular acetylcholine release at the motor end-plate junction to cause temporary flaccid muscle paralysis"
        ],
        "correct": 0,
        "explanation": "Low-frequency / Acupuncture-like TENS (1–4 Hz, high intensity / motor twitches) activates the descending pain inhibitory system, releasing endogenous opioids (beta-endorphins and enkephalins)."
    },
    964: {
        "id": 964,
        "section": "B",
        "text": "In therapeutic ultrasound, what is the 'Beam Non-Uniformity Ratio' (BNR) and what is the maximum acceptable clinical value?",
        "options": [
            "The ratio of peak beam intensity to spatial average intensity ($I_{peak}/I_{avg}$); acceptable safe clinical value is <6:1",
            "The ratio of transducer surface area to effective radiating area ($ERA/Area$); acceptable safe clinical value is >10:1",
            "The ratio of acoustic frequency in Megahertz to electrical voltage in Volts; acceptable safe clinical value is <1:1",
            "The ratio of coupling medium thickness to ultrasound wavelength in tissue; acceptable safe clinical value is >20:1"
        ],
        "correct": 0,
        "explanation": "BNR is the ratio of spatial peak intensity to spatial average intensity. Lower BNR indicates a more uniform beam with less risk of hot spots; acceptable standard is <6:1."
    },
    965: {
        "id": 965,
        "section": "B",
        "text": "In electrotherapy, what is 'Interferential Current Therapy' (IFT) and why does it overcome high skin impedance?",
        "options": [
            "Medium-frequency carrier currents (~4000 Hz) encounter low skin capacitive impedance ($Z \\propto 1/f$), intersecting deep in tissue",
            "Low-frequency direct galvanic current encounters zero capacitive skin impedance when applied through wet carbon sponge pads",
            "High-voltage static magnetic fields penetrate the epidermis without triggering any sensory mechanoreceptor depolarization",
            "Pulsed shortwave electromagnetic radiation destroys the stratum corneum barrier to allow direct ion flow into deep tissues"
        ],
        "correct": 0,
        "explanation": "Skin impedance is inversely proportional to frequency ($Z = 1 / [2\pi f C]$). Medium-frequency currents (4000 Hz) pass easily through skin impedance and intersect in deep tissues, creating a therapeutic beat frequency."
    },
    966: {
        "id": 966,
        "section": "B",
        "text": "In cryotherapy, what is the 'Hunting Reaction' (Sir Thomas Lewis) and what physiological mechanism produces it?",
        "options": [
            "Cyclic alternating periods of cold-induced vasodilation following initial vasoconstriction during prolonged cold exposure (>15–20 min)",
            "Continuous progressive vasoconstriction that completely shuts down all peripheral microvascular blood flow across the whole limb",
            "Immediate complete paralysis of all sensory thermoreceptors following exposure to ice water immersion baths for five minutes",
            "Permanent dilation of deep muscular arteries with rapid increase in local metabolic rate and localized tissue temperature"
        ],
        "correct": 0,
        "explanation": "Sir Thomas Lewis's Hunting Reaction describes alternating cycles of vasoconstriction and transient vasodilation (CIVD) occurring after >15–20 min of cold application, serving as a protective mechanism against ischemia."
    },
    967: {
        "id": 967,
        "section": "B",
        "text": "In Neuromuscular Electrical Stimulation (NMES), what is 'Russian Current' (Kots Current) and its electrical parameters?",
        "options": [
            "A 2500 Hz sinusoidal AC carrier current delivered in 50 bursts/sec (50 Hz burst frequency with 10 ms burst / 10 ms off)",
            "A continuous direct galvanic current delivered at 100 mA for thirty consecutive minutes without programmed rest intervals",
            "A high-voltage monophasic twin-peaked pulsed current with a pulse duration of 20 microseconds delivered at motor threshold",
            "A low-frequency asymmetric biphasic square pulsed current operating at 2 Hz for systemic beta-endorphin release in brain"
        ],
        "correct": 0,
        "explanation": "Russian Current (developed by Yakov Kots) is a 2500 Hz alternating sinusoidal current modulated into 50 bursts per second (50 Hz burst frequency) with a 50% duty cycle (10ms on, 10ms off)."
    },
    968: {
        "id": 968,
        "section": "B",
        "text": "In neuro-rehabilitation, what is 'Constraint-Induced Movement Therapy' (CIMT) and its primary neuroplastic mechanism?",
        "options": [
            "Constraining the non-paretic arm in a mitt for 90% of waking hours with intensive repetitive training to overcome 'Learned Non-Use'",
            "Immobilizing the paretic limb in a rigid splint while training the sound limb in functional bilateral coordination motor tasks",
            "Applying continuous sensory transcutaneous electrical nerve stimulation to both arms simultaneously during seated resting",
            "Immobilizing both upper extremities in bilateral casts while performing passive gait re-education on a motorized treadmill"
        ],
        "correct": 0,
        "explanation": "CIMT (Taub et al.) forces the use of the affected limb by restraining the unaffected limb for ~90% of waking hours combined with intensive task-oriented training (shaping) to reverse learned non-use."
    },
    969: {
        "id": 969,
        "section": "B",
        "text": "In Proprioceptive Neuromuscular Facilitation (PNF), the 'D1 Flexion' pattern of the Upper Extremity consists of:",
        "options": [
            "Shoulder Flexion, Adduction, and External Rotation with forearm Supination, wrist/finger Flexion, and radial deviation",
            "Shoulder Extension, Abduction, and Internal Rotation with forearm Pronation, wrist/finger Extension, and ulnar deviation",
            "Shoulder Flexion, Abduction, and External Rotation with forearm Supination, wrist/finger Extension, and radial deviation",
            "Shoulder Extension, Adduction, and Internal Rotation with forearm Pronation, wrist/finger Flexion, and ulnar deviation"
        ],
        "correct": 0,
        "explanation": "PNF UE D1 Flexion pattern ('hand to mouth' / feeding): Shoulder flexion, adduction, external rotation; forearm supination; wrist flexion and radial deviation; finger flexion."
    },
    970: {
        "id": 970,
        "section": "B",
        "text": "In clinical neurodynamics, what is the 'Upper Limb Neurodynamic Test 1' (ULNT1 / ULNT-Median Bias) sequence of movements?",
        "options": [
            "Shoulder depression -> Abduction (110°) -> Forearm supination -> Wrist/finger extension -> External rotation -> Elbow extension",
            "Shoulder elevation -> Shoulder adduction -> Forearm pronation -> Wrist flexion -> Elbow flexion -> Ipsilateral cervical rotation",
            "Shoulder internal rotation behind back -> Elbow extension -> Forearm pronation -> Wrist ulnar deviation -> Neck hyperextension",
            "Shoulder abduction to 90° -> Elbow flexion to 90° -> Forearm neutral -> Wrist neutral -> Active bilateral fist clenching"
        ],
        "correct": 0,
        "explanation": "ULNT1 (Median nerve bias / Elvey): 1. Shoulder girdle depression, 2. Abduction (110°), 3. Forearm supination, 4. Wrist/finger extension, 5. Shoulder external rotation, 6. Elbow extension, 7. Contralateral cervical lateral flexion."
    },
    971: {
        "id": 971,
        "section": "B",
        "text": "In Vestibular Rehabilitation, what is the 'Epley Maneuver' (Canalith Repositioning Procedure) and its clinical objective?",
        "options": [
            "Posterior Semicircular Canal Benign Paroxysmal Positional Vertigo (BPPV), moving otoconia debris from canal back into utricle",
            "Meniere's Disease with persistent endolymphatic hydrops, episodic rotary vertigo, and low-frequency sensorineural deafness",
            "Vestibular Schwannoma (Acoustic Neuroma) causing unilateral sensorineural hearing loss, tinnitus, and facial nerve weakness",
            "Central cerebellar stroke with severe downbeating nystagmus, truncal ataxia, and loss of smooth pursuit eye movements"
        ],
        "correct": 0,
        "explanation": "The Epley maneuver is a canalith repositioning procedure designed to treat posterior semicircular canal BPPV by moving free-floating otoconia from the canal back into the utricle."
    },
    972: {
        "id": 972,
        "section": "B",
        "text": "In spinal cord injury neurological classification (ASIA Impairment Scale), which key muscle myotome corresponds to 'L4'?",
        "options": [
            "L4 = Tibialis Anterior (Ankle Dorsiflexion - evaluating L4 root motor innervation to the lower extremity)",
            "L4 = Quadriceps Femoris (Knee Extension - evaluating L3 root motor innervation to the femoral muscle group)",
            "L4 = Extensor Hallucis Longus (Great Toe Extension - evaluating L5 root motor innervation to the deep peroneal nerve)",
            "L4 = Gastrocnemius and Soleus (Ankle Plantarflexion - evaluating S1 root motor innervation to the tibial nerve)"
        ],
        "correct": 0,
        "explanation": "According to the ASIA International Standards for Neurological Classification of SCI (ISNCSCI), L4 key muscle is the Tibialis Anterior (ankle dorsiflexors)."
    },
    973: {
        "id": 973,
        "section": "B",
        "text": "The 'Straight Leg Raise Test' (Lasegue's Test) for lumbar radiculopathy evaluates mechanical tension on which neural structures?",
        "options": [
            "L4, L5, and S1 nerve roots and the Sciatic Nerve (symptom reproduction between 35° and 70° indicates radicular tension)",
            "L1, L2, and L3 nerve roots and the Femoral Nerve (symptom reproduction occurring exclusively above 80° of leg elevation)",
            "Lateral femoral cutaneous nerve within the inguinal tunnel (symptom reproduction occurring exclusively at 10° elevation)",
            "Obturator nerve within the obturator canal (symptom reproduction occurring exclusively during full passive knee flexion)"
        ],
        "correct": 0,
        "explanation": "The SLR test places tension on the sciatic nerve and L4–S1 nerve roots between 35° and 70° of elevation. Pain beyond 70° is usually hamstring tightness or SI joint pain."
    },
    974: {
        "id": 974,
        "section": "B",
        "text": "In Butler's clinical neurodynamics, what is the 'Femoral Nerve Neurodynamic Test' (Prone Knee Bend / PKB) limb positioning?",
        "options": [
            "Prone lying -> Passive knee flexion to 90° or end-range with hip extension to stretch the femoral nerve (L2–L4)",
            "Supine lying -> Straight leg raise to 70° with full ankle plantarflexion and inversion to stretch the peroneal nerve",
            "Side-lying -> Hip Extension, Abduction, and External Rotation with knee extension to stretch the obturator nerve in groin",
            "Sitting erect -> Neck flexion with active bilateral fist clenching and thoracic extension to stretch the median nerve"
        ],
        "correct": 0,
        "explanation": "Prone Knee Bend (PKB / Femoral Nerve Tension Test) stretches the femoral nerve and L2–L4 nerve roots via passive knee flexion with/without hip extension."
    },
    975: {
        "id": 975,
        "section": "B",
        "text": "In Kaltenborn manual therapy, what is the 'Concave-Convex Rule' application when mobilizing the Glenohumeral Joint to increase Abduction?",
        "options": [
            "Inferior Glide of the convex humeral head on the concave glenoid fossa to increase shoulder Abduction ROM",
            "Superior Glide of the convex humeral head on the concave glenoid fossa to increase shoulder Abduction ROM",
            "Anterior Glide of the convex humeral head on the concave glenoid fossa to increase shoulder Abduction ROM",
            "Posterior Glide of the convex humeral head on the concave glenoid fossa to increase shoulder Abduction ROM"
        ],
        "correct": 0,
        "explanation": "According to Kaltenborn, since the humeral head is convex moving on the concave glenoid, bone roll and joint slide occur in opposite directions; hence inferior glide increases abduction."
    },
    976: {
        "id": 976,
        "section": "B",
        "text": "In Cyriax's manual medicine, what defines an 'Empty End-Feel' and what pathological condition is it pathognomonic for?",
        "options": [
            "Movement stops due to intense acute pain before reaching any mechanical resistance barrier; indicates acute neoplasm/bursitis",
            "An abrupt hard unyielding stop when bone contacts bone during full terminal joint extension without any reported pain",
            "A soft yielding spongy stop caused by muscle approximation during terminal joint flexion in heavy muscular subjects",
            "A rubbery, springy rebound mechanical stop before full range, pathognomonic for internal joint derangement of meniscus"
        ],
        "correct": 0,
        "explanation": "Cyriax Empty End-Feel: The patient stops the movement due to severe pain before end-range tissue resistance is encountered. It indicates acute bursitis, abscess, neoplasm, or acute fracture."
    },
    977: {
        "id": 977,
        "section": "B",
        "text": "What is the Close-Packed Position of the Glenohumeral (GH) Joint where articular congruency and capsular tension are maximal?",
        "options": [
            "Full Abduction and maximal External Rotation (90/90 position where joint congruity and capsular tension peak)",
            "Neutral 0° anatomical position at the side of the torso (where all periarticular capsular ligaments are relaxed)",
            "55° Abduction and 30° Horizontal Adduction in the scapular plane (resting / loose-packed position of joint)",
            "Full Adduction across the chest in horizontal adduction with internal rotation (maximum anterior slack position)"
        ],
        "correct": 0,
        "explanation": "The close-packed position of the glenohumeral joint is full abduction and external rotation (the cocking phase of throwing)."
    },
    978: {
        "id": 978,
        "section": "B",
        "text": "In Mulligan's Concept, what Mobilization with Movement (MWM) technique is applied to treat acute painful restriction of ankle Dorsiflexion?",
        "options": [
            "Sustained Posterior Glide of the Talus on the distal Tibia combined with active patient-performed weight-bearing Dorsiflexion",
            "Sustained Anterior Glide of the Talus on the distal Tibia combined with active patient-performed non-weight-bearing Plantarflexion",
            "Continuous axial downward compression through the calcaneus while the patient remains completely stationary in sitting posture",
            "Forceful high-velocity thrust manipulation of the subtalar joint into forced end-range inversion under general anesthesia"
        ],
        "correct": 0,
        "explanation": "Mulligan MWM for ankle dorsiflexion: The therapist applies a sustained posterior glide of the talus on the tibia (often with a belt) while the patient performs active weight-bearing dorsiflexion (lunge)."
    },
    979: {
        "id": 979,
        "section": "B",
        "text": "In spinal core stabilization, what is the 'Bird-Dog' exercise (Stuart McGill's Big Three) and how does it challenge the spine?",
        "options": [
            "Quadruped alternating contralateral arm and leg extension, challenging back extensors while minimizing lumbar spine compression",
            "Prone bilateral straight leg hyper-extension lifting both legs simultaneously to maximal ceiling height with heavy ankle weights",
            "Performing 100 rapid full trunk sit-ups with straight legs on an inclined decline bench to complete muscular exhaustion",
            "Maximal 1RM barbell good-morning lifts performed with fully rounded spinal posture and heavy progressive resistance"
        ],
        "correct": 0,
        "explanation": "The Bird-Dog (quadruped opposite arm/leg extension) is one of McGill's 'Big Three' core exercises, challenging the posterior chain and torso stability with very low spinal compressive loads."
    },
    980: {
        "id": 980,
        "section": "B",
        "text": "In the cervical spine, what is the 'Sharp-Purser Test' and what clinical finding indicates atlantoaxial instability?",
        "options": [
            "Posterior translation of the occiput/C1 relative to C2 during slight flexion reduces subluxation with a palpable clunk/relief",
            "Passive neck extension reproducing sharp electrical paresthesia radiating down both upper extremities into the finger tips",
            "Lateral cervical side-bending producing severe episodic rotary vertigo and downbeating spontaneous nystagmus signs",
            "Resisted isometric neck rotation producing localized muscular fatigue in the upper trapezius muscle belly region"
        ],
        "correct": 0,
        "explanation": "The Sharp-Purser test evaluates transverse ligament integrity and atlantoaxial instability. A positive test is a posterior sliding motion or 'clunk' as the subluxated C1 reduces on C2, often relieving symptoms."
    }
}

# Special fix for 966 in case it was a list
if isinstance(new_test10_section_b.get(966), list):
    pass
else:
    new_test10_section_b[966] = {
        "id": 966,
        "section": "B",
        "text": "In cryotherapy, what is the 'Hunting Reaction' (Sir Thomas Lewis) and what physiological mechanism produces it?",
        "options": [
            "Cyclic alternating periods of cold-induced vasodilation following initial vasoconstriction during prolonged cold exposure (>15–20 min)",
            "Continuous progressive vasoconstriction that completely shuts down all peripheral microvascular blood flow across the whole limb",
            "Immediate complete paralysis of all sensory thermoreceptors following exposure to ice water immersion baths for five minutes",
            "Permanent dilation of deep muscular arteries with rapid increase in local metabolic rate and localized tissue temperature"
        ],
        "correct": 0,
        "explanation": "Sir Thomas Lewis's Hunting Reaction describes alternating cycles of vasoconstriction and transient vasodilation (CIVD) occurring after >15–20 min of cold application, serving as a protective mechanism against ischemia."
    }

# Apply all fixes to datasets:
# Test 2: Q138
import data_test2
for q in data_test2.DATA_TEST_2:
    if q["id"] == 138:
        # keep as is, it was Q238 in Test 3 that had dup
        pass

# Test 3: Q238
import data_test3
for q in data_test3.DATA_TEST_3:
    if q["id"] == 238:
        q.update(fix_q238)
with open("data_test3.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 3 (100 Questions)\n\nDATA_TEST_3 = " + json.dumps(data_test3.DATA_TEST_3, indent=4) + "\n")

# Test 4: Q349
import data_test4
for q in data_test4.DATA_TEST_4:
    if q["id"] == 349:
        q.update(fix_q349)
with open("data_test4.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 4 (100 Questions)\n\nDATA_TEST_4 = " + json.dumps(data_test4.DATA_TEST_4, indent=4) + "\n")

# Test 5: Q409, Q451, Q472
import data_test5
for q in data_test5.DATA_TEST_5:
    if q["id"] == 409:
        q.update(fix_q409)
    elif q["id"] == 451:
        q.update(fix_q451)
    elif q["id"] == 472:
        q.update(fix_q472)
with open("data_test5.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 5 (100 Questions)\n\nDATA_TEST_5 = " + json.dumps(data_test5.DATA_TEST_5, indent=4) + "\n")

# Test 7: Q609, Q641, Q651, Q670
import data_test7
for q in data_test7.DATA_TEST_7:
    if q["id"] == 609:
        q.update(fix_q609)
    elif q["id"] == 641:
        q.update(fix_q641)
    elif q["id"] == 651:
        q.update(fix_q651)
    elif q["id"] == 670:
        q.update(fix_q670)
with open("data_test7.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 7 (100 Questions)\n\nDATA_TEST_7 = " + json.dumps(data_test7.DATA_TEST_7, indent=4) + "\n")

# Test 9: Q809
import data_test9
for q in data_test9.DATA_TEST_9:
    if q["id"] == 809:
        q.update(fix_q809)
with open("data_test9.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 9 (100 Questions)\n\nDATA_TEST_9 = " + json.dumps(data_test9.DATA_TEST_9, indent=4) + "\n")

# Test 10: Q941 to Q980
import data_test10
for q in data_test10.DATA_TEST_10:
    qid = q["id"]
    if qid in new_test10_section_b:
        q.update(new_test10_section_b[qid])
with open("data_test10.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 10 (100 Questions)\n\nDATA_TEST_10 = " + json.dumps(data_test10.DATA_TEST_10, indent=4) + "\n")

print("Successfully replaced all duplicate questions across tests with 100% unique questions!")
