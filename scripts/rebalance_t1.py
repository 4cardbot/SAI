import json
import re

def rebalance_t1():
    with open('mock_tests/mock_test_1.json') as f:
        qs = json.load(f)

    updates = {
        "t1-a1-006": {
            "options": [
                "Mitochondrial beta-oxidation pathway utilizing circulating free fatty acids",
                "Oxidative phosphorylation pathway utilizing intramyocellular triglycerides",
                "Anaerobic glycolysis pathway utilizing intramuscular glycogen stores",
                "Phosphagen ATP-PCr pathway utilizing stored intramuscular phosphocreatine"
            ]
        },
        "t1-a1-009": {
            "options": [
                "When blood lactate falls below baseline values (<1.0 mmol/L) during light recovery",
                "When blood lactate reaches maximal peak concentration (>10.0 mmol/L) at exhaustion",
                "When blood lactate starts rising systematically above baseline values (~2.0 mmol/L)",
                "When blood lactate crosses the second steep exponential threshold (~4.0 mmol/L)"
            ]
        },
        "t1-a1-010": {
            "options": [
                "Hypoventilation causing arterial PO2 elevation and metabolic lactic alkalosis",
                "Hyperventilation causing arterial PCO2 reduction and respiratory alkalosis",
                "Hypoventilation causing arterial PCO2 elevation and respiratory acidosis",
                "Hyperventilation causing arterial PO2 reduction and metabolic lactic acidosis"
            ]
        },
        "t1-a1-011": {
            "options": [
                "Renal clearance of blood urea nitrogen and its conversion to branched-chain amino acids",
                "Adipose tissue lipolysis of triglycerides and their conversion to ketone bodies in skeletal muscle",
                "Hepatic gluconeogenesis converting muscle-derived lactate into blood glucose for active tissues",
                "Intramuscular glycogen synthesis directly from circulating long-chain free fatty acids in type I fibers"
            ]
        },
        "t1-a1-012": {
            "options": [
                "10 to 20 grams of carbohydrates per hour of exercise",
                "20 to 30 grams of carbohydrates per hour of exercise",
                "30 to 45 grams of carbohydrates per hour of exercise",
                "30 to 60 grams of carbohydrates per hour of exercise"
            ]
        },
        "t1-a1-014": {
            "options": [
                "0.5 liters per kilogram of body weight lost (50% replacement) with potassium",
                "1.0 liters per kilogram of body weight lost (100% replacement) with magnesium",
                "1.5 liters per kilogram of body weight lost (150% replacement) with sodium",
                "2.5 liters per kilogram of body weight lost (250% replacement) with calcium"
            ]
        },
        "t1-a1-015": {
            "options": [
                "Increasing circulating plasma bicarbonate to buffer extracellular hydrogen ions (H+)",
                "Directly stimulating the adrenal medulla to release high concentrations of adrenaline (Epi)",
                "Accelerating mitochondrial fatty acid transport via carnitine palmitoyltransferase (CPT-1)",
                "Increasing intracellular muscle carnosine to buffer intramuscular hydrogen ions (H+)"
            ]
        },
        "t1-a1-016": {
            "options": [
                "Excessive dietary fat intake relative to total daily carbohydrate demands (High Fat)",
                "Chronic low energy availability where intake fails to match exercise expenditure (LEA)",
                "Elevated resting metabolic rate resulting from high-dose protein supplementation (RMR)",
                "Inadequate micronutrient absorption resulting from excessive gastrointestinal fluid (GI)"
            ]
        },
        "t1-a1-017": {
            "options": [
                "1st: Ectomorphy (linearity), 2nd: Mesomorphy (muscularity), 3rd: Endomorphy (adiposity)",
                "1st: Mesomorphy (muscularity), 2nd: Endomorphy (adiposity), 3rd: Ectomorphy (linearity)",
                "1st: Ectomorphy (linearity), 2nd: Endomorphy (adiposity), 3rd: Mesomorphy (muscularity)",
                "1st: Endomorphy (adiposity), 2nd: Mesomorphy (muscularity), 3rd: Ectomorphy (linearity)"
            ]
        },
        "t1-a1-020": {
            "options": [
                "[Father's height + Mother's height + 13 cm] / 2",
                "[Father's height + Mother's height - 13 cm] / 2",
                "[Father's height + Mother's height + 6.5 cm] / 2",
                "[Father's height + Mother's height - 6.5 cm] / 2"
            ]
        },
        "t1-a1-022": {
            "options": [
                "Performance remains steady regardless of high cognitive anxiety levels",
                "Performance increases linearly as somatic anxiety rises to maximum",
                "Performance displays an inverted-U curve independent of cognitive worry",
                "Performance drops precipitously and dramatically when cognitive anxiety is high"
            ]
        },
        "t1-a1-023": {
            "options": [
                "Progressive muscle relaxation targeting autonomic parasympathetic regulation",
                "Cognitive thought stopping targeting intrusive negative internal dialogue",
                "Autogenic training targeting peripheral vasodilation and warmth sensations",
                "Cognitive reframing targeting appraisal of pressure as a positive challenge"
            ]
        },
        "t1-a1-024": {
            "options": [
                "Self-efficacy (confidence), self-regulation (control), and personal locus of causality",
                "Extrinsic reward (incentive), compliance (discipline), and positive behavioral praise",
                "Performance outcome (victory), ego orientation (status), and public athletic recognition",
                "Individual autonomy (choice), perceived competence (mastery), and relatedness (belonging)"
            ]
        },
        "t1-a1-025": {
            "options": [
                "Task cohesion reflects social bonding, while social cohesion reflects objective competitive match success",
                "Task cohesion is only seen in individual sports, whereas social cohesion is unique to elite contact team sports",
                "Task cohesion reflects shared commitment to performance goals, while social cohesion reflects interpersonal liking",
                "Task cohesion is managed by coaches, whereas social cohesion is determined solely by formal club management"
            ]
        },
        "t1-a1-027": {
            "options": [
                "CK levels peak at 1 to 2 hours post-exercise and require invasive muscle tissue biopsy",
                "CK demonstrates high inter-individual variability and typically peaks 24 to 48 hours post-exercise",
                "CK levels return to baseline within 2 to 4 hours following high-force eccentric muscle actions",
                "CK levels remain at constant 100 U/L baseline values across all athletes regardless of training"
            ]
        },
        "t1-a1-029": {
            "options": [
                "Flight time divided by ground contact time (s/s)",
                "Ground contact time divided by jump height (s/m)",
                "Peak landing force divided by jump height (N/m)",
                "Jump height divided by ground contact time (m/s)"
            ]
        },
        "t1-a1-030": {
            "options": [
                "Failing to reject the null hypothesis when it is in fact false (Type II false-negative error)",
                "Accepting the experimental hypothesis when sample variance is high (Type III directional error)",
                "Failing to reach statistical significance due to inadequate sample size (low power outcome)",
                "Rejecting the true null hypothesis and concluding an effect exists (Type I false-positive error)"
            ]
        },
        "t1-a1-032": {
            "options": [
                "Paired Student's t-test (parametric paired sample test)",
                "Chi-square test of independence (cross-tabulation test)",
                "One-way Analysis of Variance (one-way ANOVA test)",
                "Mann-Whitney U test (non-parametric two-group test)"
            ]
        },
        "t1-a2-001": {
            "options": [
                "Mission Olympic Cell (MOC) under SAI",
                "National Anti-Doping Agency (NADA) panel",
                "Indian Olympic Association (IOA) council",
                "National Sports Development Fund (NSDF) board"
            ]
        },
        "t1-a2-005": {
            "options": [
                "Emergency Medical Exemption (EME) certificate",
                "Therapeutic Use Exemption (TUE) certificate",
                "Authorized Medication Clearance (AMC) document",
                "Prohibited Substance Waiver (PSW) credential"
            ]
        },
        "t1-a2-008": {
            "options": [
                "Tanner-Whitehouse 3 (TW3) method on left wrist and hand radiograph",
                "Greulich-Pyle 2 (GP2) atlas method on left wrist and hand radiograph",
                "Fels Longitudinal 1 (FL1) method on left wrist and hand radiograph",
                "Roche-Wainer-Thissen 4 (RWT4) method on left wrist and hand radiograph"
            ]
        },
        "t1-b-001": {
            "options": [
                "Pivot Shift test at 30° knee flexion",
                "Anterior Drawer test at 90° knee flexion",
                "McMurray test at 90° knee flexion",
                "Lachman test at 20°–30° knee flexion"
            ]
        },
        "t1-b-003": {
            "options": [
                "90° shoulder forward flexion combined with maximal passive internal rotation",
                "90° shoulder coronal abduction combined with full passive external rotation",
                "90° scapular plane elevation combined with full resisted forearm supination",
                "90° shoulder sagittal extension combined with resisted active elbow flexion"
            ]
        },
        "t1-b-004": {
            "options": [
                "Calcaneofibular ligament (CFL)",
                "Anterior talofibular ligament (ATFL)",
                "Posterior talofibular ligament (PTFL)",
                "Deltoid ligament complex (DL)"
            ]
        },
        "t1-b-008": {
            "options": [
                "Triangular fibrocartilage complex tear involving the articular disc and radioulnar ligaments",
                "De Quervain's tenosynovitis of abductor pollicis longus and extensor pollicis brevis",
                "Carpal tunnel syndrome involving mechanical entrapment of the median nerve at the wrist",
                "Scaphoid nonunion fracture involving the waist and proximal pole of the carpal scaphoid"
            ]
        },
        "t1-b-010": {
            "options": [
                "3 sets of 15 repetitions with straight knee and 3 sets with bent knee, performed twice daily for 12 weeks",
                "1 set of 30 repetitions with straight knee and 1 set with bent knee, performed once weekly for 6 weeks",
                "5 sets of 5 repetitions with straight knee and 5 sets with bent knee, performed once daily for 4 weeks",
                "2 sets of 20 repetitions with straight knee and 2 sets with bent knee, performed alternate days for 8 weeks"
            ]
        },
        "t1-b-012": {
            "options": [
                "Reciprocal inhibition via muscle spindle (Ia afferents)",
                "Reciprocal facilitation via joint mechanoreceptors (Type II afferents)",
                "Autogenic inhibition via Golgi Tendon Organ (Ib afferents)",
                "Cutaneous withdrawal reflex via nociceptive fibers (A-delta afferents)"
            ]
        },
        "t1-b-014": {
            "options": [
                "Loads of 30% 1RM performed at 1-second cadence, 5 days per week",
                "Loads of 50% 1RM performed at 2-second cadence, 4 days per week",
                "Loads of 70–85% 1RM performed at 6-second cadence, 3 days per week",
                "Loads of 95% 1RM performed at 10-second cadence, 2 days per week"
            ]
        },
        "t1-b-016": {
            "options": [
                "2:1 overall ratio (2° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:2 overall ratio (1° glenohumeral motion for every 2° scapulothoracic motion)",
                "3:1 overall ratio (3° glenohumeral motion for every 1° scapulothoracic motion)",
                "1:1 overall ratio (1° glenohumeral motion for every 1° scapulothoracic motion)"
            ]
        },
        "t1-b-017": {
            "options": [
                "Upper Trapezius, Rhomboid Major, and Levator Scapulae",
                "Pectoralis Minor, Latissimus Dorsi, and Subscapularis",
                "Upper Trapezius, Lower Trapezius, and Serratus Anterior",
                "Middle Trapezius, Infraspinatus, and Teres Major"
            ]
        },
        "t1-b-020": {
            "options": [
                "Quadriceps Femoris (vastus medialis component)",
                "Popliteus (initiates internal tibial rotation)",
                "Gastrocnemius (medial head muscle fibers)",
                "Biceps Femoris (lateral hamstring muscle)"
            ]
        },
        "t1-b-021": {
            "options": [
                "20° to 30° of knee flexion",
                "60° to 90° of knee flexion",
                "0° to 15° of knee flexion",
                "45° to 55° of knee flexion"
            ]
        },
        "t1-b-024": {
            "options": [
                "Shock absorption, weight-bearing stability, and preservation of forward progression",
                "Passive acceleration of the swing limb without requiring active muscular torque output",
                "Rapid deceleration of the swinging foot immediately prior to initial ground contact",
                "Generation of propulsive push-off power through explosive concentric ankle plantarflexion"
            ]
        },
        "t1-b-026": {
            "options": [
                "Quadriceps femoris weakness and delayed vastus lateralis firing",
                "Deep peroneal nerve palsy resulting in ankle dorsiflexor weakness",
                "Tibial nerve entrapment causing severe gastrocnemius muscle spasm",
                "Femoral nerve compression causing iliopsoas hip flexor paralysis"
            ]
        },
        "t1-b-027": {
            "options": [
                "0.5× body weight at heel strike and 0.5× body weight at terminal push-off",
                "2.5× body weight at heel strike and 2.0× body weight at terminal push-off",
                "1.8× body weight at heel strike and 1.6× body weight at terminal push-off",
                "1.1–1.2× body weight at loading response and 1.1–1.2× body weight at terminal stance"
            ]
        },
        "t1-b-030": {
            "options": [
                "Acute hamstring muscle strain with localized intramuscular hematoma",
                "Chronic plantar fasciitis and calcific tendinopathy of the rotator cuff",
                "Complete grade III anterior cruciate ligament rupture with hemarthrosis",
                "Severe spastic quadriplegia resulting from acute ischemic spinal stroke"
            ]
        },
        "t1-b-031": {
            "options": [
                "Delivering low-frequency direct galvanic current (e.g., 50 Hz monophasic pulses)",
                "Modulating high-voltage pulsed monophasic current (e.g., 100 Hz twin-peak spikes)",
                "Superimposing two medium-frequency currents (e.g., 4000 Hz and 4100 Hz waves)",
                "Discharging capacitive high-frequency radio waves (e.g., 27.12 MHz shortwave coils)"
            ]
        },
        "t1-b-032": {
            "options": [
                "At least 30° active shoulder abduction, 30° elbow extension, and 30° finger flexion",
                "At least 20° active forearm pronation, 20° wrist flexion, and 20° thumb adduction",
                "At least 10° active wrist extension, 10° thumb abduction, and 10° finger extension",
                "At least 45° active shoulder flexion, 45° elbow flexion, and full passive finger extension"
            ]
        },
        "t1-b-033": {
            "options": [
                "Spasticity is velocity-independent resistance; rigidity is velocity-dependent resistance",
                "Spasticity is velocity-dependent resistance; rigidity is velocity-independent resistance",
                "Spasticity is seen only in cerebellar lesions; rigidity is seen in spinal transections",
                "Spasticity causes lead-pipe resistance; rigidity causes clasp-knife resistance"
            ]
        },
        "t1-b-037": {
            "options": [
                "Distal migration of symptoms into the peripheral foot and toes during spinal testing",
                "Proximal migration of radiating distal symptoms toward the lumbar midline with testing",
                "Sudden bilateral numbness in the perineal region without changes in spinal pain location",
                "Symmetrical increase in lumbar paraspinal muscle hypertonicity during passive flexion"
            ]
        },
        "t1-b-038": {
            "options": [
                "Saphenous nerve distribution",
                "Sural nerve distribution",
                "Tibial nerve distribution",
                "Common peroneal nerve distribution"
            ]
        },
        "t1-b-039": {
            "options": [
                "Continuous sustained cutaneous vasodilation maintaining high tissue blood flow",
                "Continuous sustained arterial vasoconstriction causing persistent tissue ischemia",
                "Immediate neurogenic reflex vasospasm resulting in local tissue necrosis",
                "Transient vasoconstriction followed by cyclical cold-induced vasodilation"
            ]
        },
        "t1-b-040": {
            "options": [
                "Mulligan Mobilization with Movement (MWM)",
                "Kaltenborn joint traction and glide (KTG)",
                "Cyriax deep friction massage (DFM)",
                "Maitland passive joint oscillation (PJO)"
            ]
        },
        "t1-c-002": {
            "options": [
                "Low-intensity continuous stationary cycling exclusively for 8 weeks without running drills",
                "Passive static stretching on a treatment table for 15 minutes daily without active loading",
                "Seated light leg extensions performed on a variable resistance machine without hip motion",
                "Nordic Hamstring Exercise with progressive eccentric overload and high-speed running exposure"
            ]
        },
        "t1-c-003": {
            "options": [
                "Subacromial Impingement Syndrome (SAIS) with subacromial bursal thickening",
                "Glenohumeral Internal Rotation Deficit (GIRD) with posterior capsular tightness",
                "Multidirectional Glenohumeral Instability (MDI) with inferior sulcus laxity",
                "Adhesive Capsulitis (Frozen Shoulder) with global capsular fibrosis"
            ]
        },
        "t1-c-004": {
            "options": [
                "Side-lying 'Sleeper stretch' and cross-body adduction stretching with scapular stabilization",
                "Standing doorway pectoralis major stretching in maximal external rotation and horizontal abduction",
                "Passive overhead latissimus dorsi bar hangs without scapular plane stabilization",
                "Standing overhead triceps wall stretches with passive cervical lateral flexion"
            ]
        },
        "t1-c-005": {
            "options": [
                "Pes Anserine Bursitis (PAB) with tibial insertion stress",
                "Infrapatellar Fat Pad Syndrome (Hoffa's disease) with tendon irritation",
                "Patellofemoral Pain Syndrome (PFPS) with dynamic maltracking",
                "Medial Meniscus Tear (MMT) with mechanical joint line locking"
            ]
        },
        "t1-c-006": {
            "options": [
                "Isolated continuous passive knee extension drills without active muscle recruitment",
                "Combined hip abductor strengthening and quadriceps vastus medialis motor retraining",
                "Strict knee immobilizer splinting for six weeks followed by lateral release surgery",
                "Heavy open-chain knee extensions from 90° to 0° performed to complete muscle failure"
            ]
        },
        "t1-c-007": {
            "options": [
                "Stress Fracture of the Radial Head (SFRH) with cortical bone disruption",
                "Sprain of the Ulnar Collateral Ligament (UCL) anterior band at the elbow",
                "Microtear of the Medial Epicondyle Common Flexor Tendon (CFT) origin",
                "Tendinopathy of the Extensor Carpi Radialis Brevis (ECRB) origin"
            ]
        },
        "t1-c-008": {
            "options": [
                "Rigid wrist splint immobilization in neutral for 12 weeks with zero active exercise",
                "Isolated passive wrist flexion stretching drills performed without resistive loading",
                "Progressive eccentric-concentric wrist extensor loading with gradual resistance loading",
                "High-velocity wrist pronation-supination ballistic drills performed to muscle exhaustion"
            ]
        },
        "t1-c-009": {
            "options": [
                "Calcaneofibular Ligament (CFL) complete tear",
                "Anterior Talofibular Ligament (ATFL) acute sprain",
                "Posterior Talofibular Ligament (PTFL) avulsion lesion",
                "Deltoid Ligament (tibionavicular part) acute sprain"
            ]
        },
        "t1-c-010": {
            "options": [
                "Isolated passive calf stretching drills performed without any weight-bearing demands",
                "Neuromuscular balance, perturbation, and dynamic proprioceptive training on unstable surfaces",
                "Rigid ankle cast immobilization maintained for twelve weeks to prevent ligament strain",
                "Unloaded aquatic freestyle swimming performed with strict prohibition of ground drills"
            ]
        },
        "t1-c-011": {
            "options": [
                "Tarsal Tunnel Syndrome (posterior tibial nerve entrapment)",
                "Achilles Tendinopathy (mid-portion collagen degenerative breakdown)",
                "Plantar Fasciitis (proximal plantar aponeurosis insertional strain)",
                "Sever's Disease (calcaneal traction apophysitis of youth)"
            ]
        },
        "t1-c-012": {
            "options": [
                "High-impact plyometric jumping drills daily to force immediate calcaneal bone fusion",
                "Activity modification, temporary heel cup cushioning, and gentle calf loading exercises",
                "Immediate surgical excision of the open calcaneal apophysis under general anesthesia",
                "Strict permanent bed rest with complete long-term cessation of all athletic activities"
            ]
        },
        "t1-c-013": {
            "options": [
                "Deep Vein Thrombosis (occlusion of the posterior tibial deep vascular tree)",
                "Tibial Stress Fracture (focal cortical microfracture of the anterior border)",
                "Medial Tibial Stress Syndrome (posteromedial periosteal traction overload)",
                "Chronic Exertional Compartment Syndrome (fascial boundary pressure elevation)"
            ]
        },
        "t1-c-014": {
            "options": [
                "Dual-energy X-ray absorptiometry (DEXA) assessing regional bone mineral density",
                "Diagnostic musculoskeletal ultrasound (MSUS) assessing superficial fascial thickness",
                "Plain lateral projection radiography (X-ray) performed on the initial injury day",
                "Magnetic Resonance Imaging (MRI) demonstrating localized cortical bone marrow edema"
            ]
        },
        "t1-c-015": {
            "options": [
                "Limb Symmetry Index (LSI) ≥90% on functional hop testing and quadriceps peak torque",
                "Limb Symmetry Index (LSI) ≥50% on functional hop testing and quadriceps peak torque",
                "Limb Symmetry Index (LSI) ≥70% on functional hop testing and quadriceps peak torque",
                "Limb Symmetry Index (LSI) ≥30% on functional hop testing and quadriceps peak torque"
            ]
        },
        "t1-c-016": {
            "options": [
                "Wechsler Adult Intelligence Scale (WAIS) cognitive processing assessment (>70 score)",
                "Profile of Mood States (POMS) questionnaire for clinical depression screening (<20 score)",
                "ACL-Return to Sport after Injury (ACL-RSI) psychological readiness score (>60–65%)",
                "Tampa Scale for Kinesiophobia (TSK) score for elevated fear of movement (>45 score)"
            ]
        },
        "t1-c-017": {
            "options": [
                "Excessive stiffness and structural contracture of the posterior cruciate ligament complex",
                "Weakness and delayed neuromuscular recruitment of the Gluteus Medius and hip external rotators",
                "Markedly excessive passive ankle dorsiflexion range of motion exceeding 50 degrees",
                "Excessive selective hypertrophy and hypertonicity of the medial gastrocnemius muscle belly"
            ]
        },
        "t1-c-018": {
            "options": [
                "Isolated passive hamstring stretching while lying supine on a physical therapy table",
                "Applying rigid bilateral knee braces and eliminating all multi-joint closed-chain exercises",
                "Neuromuscular jump-landing mechanics training with real-time feedback and hip abductor strengthening",
                "High-volume plyometric box jumping without addressing or correcting dynamic knee valgus angles"
            ]
        },
        "t1-c-019": {
            "options": [
                "Lumbar Spondylolysis (stress fracture of the pars interarticularis)",
                "Sacroiliac Joint Dysfunction (anterior iliac rotation subluxation)",
                "Thoracic Disc Herniation (intervertebral disc extrusion with myelopathy)",
                "Piriformis Syndrome (deep gluteal entrapment of the sciatic nerve trunk)"
            ]
        },
        "t1-c-020": {
            "options": [
                "High-velocity lumbar rotational manipulative thrusts directly into end-range extension",
                "Aggressive passive lumbar hyperextension stretching combined with immediate heavy bowling",
                "Relative rest from extension loads, lumbo-pelvic core stability training, and gradual return",
                "Strict continuous immobilization in a rigid spinal body jacket with complete bed rest"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_1.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_1.json successfully!")

if __name__ == '__main__':
    rebalance_t1()
