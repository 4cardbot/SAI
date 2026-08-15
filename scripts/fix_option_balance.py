"""Remove residual answer-option formatting cues from the mock-test bank."""

from __future__ import annotations

import glob
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


# (question id, option index, replacement text)
CHANGES = [
    ("t1-b-011", 3, "It increases loading of the knee extensors and patellar tendon"),
    ("t2-a1-009", 0, "Increased erythropoiesis expands red-cell volume and haemoglobin mass"),
    ("t2-a1-022", 0, "Cognitive anxiety may precede competition; somatic anxiety often rises near the start"),
    ("t2-a1-030", 0, "SD describes individual variability; SEM describes precision of the sample mean"),
    ("t2-a1-032", 0, "Agreement and systematic bias between paired measurements"),
    ("t2-a2-001", 0, "Government contributes 25% of CSR funds received"),
    ("t2-a2-001", 1, "The Government matches non-government contributions 1:1"),
    ("t2-a2-001", 2, "The Fund is financed only by 100% international loans"),
    ("t2-b-011", 0, "Autogenic inhibition followed by reciprocal inhibition"),
    ("t2-b-018", 0, "First-class lever; fulcrum lies between load and effort"),
    ("t2-b-018", 3, "A pulley system with no lever arms or load moment"),
    ("t2-b-020", 2, "Anterior cruciate ligament"),
    ("t2-b-036", 0, "Delayed union heals slowly; non-union has stopped healing"),
    ("t2-b-036", 3, "Non-union means healing has ceased despite persistent pain or movement"),
    ("t2-b-039", 0, "A non-tender subcutaneous nodule unrelated to a taut band"),
    ("t2-b-039", 1, "A region of joint effusion causing swelling but not taut-band pain"),
    ("t2-b-039", 2, "Active: spontaneous familiar pain; latent: pain only on palpation"),
    ("t2-b-039", 3, "A periosteal spur causing focal insertional pain rather than taut-band pain"),
    ("t2-c-001", 1, "Hecc:Qcon target around 0.80–1.0 for return to sprinting"),
    ("t3-a1-010", 0, "Heat stroke includes CNS dysfunction; heat exhaustion does not"),
    ("t3-a1-017", 0, "Sum of three skinfolds: triceps, subscapular, and supraspinale, adjusted for height"),
    ("t3-a1-017", 1, "Sum of two bone breadths: biepicondylar humerus and biepicondylar femur"),
    ("t3-a1-017", 2, "Sum of two limb girths: flexed arm and calf, corrected for skinfold thickness"),
    ("t3-a1-017", 3, "Ratio of standing height divided by the cube root of body weight"),
    ("t3-a1-018", 0, "The ratio of arm span relative to standing height or the arm-span difference"),
    ("t3-a1-020", 0, "No universal seasonal pattern; training and growth may change components"),
    ("t3-b-026", 0, "A 2500-Hz carrier burst-modulated at about 50 bursts per second"),
    ("t3-b-031", 0, "No increase in tone throughout passive movement"),
    ("t3-b-031", 0, "No increase in tone during passive movement through the available range"),
    ("t3-b-031", 1, "A catch with minimal resistance through less than half the remaining range"),
    ("t3-b-033", 0, "Neer, Hawkins, and Speed tests at 60°"),
    ("t3-b-033", 1, "Lachman, pivot-shift, and anterior-drawer tests at 30°"),
    ("t3-b-033", 2, "Ober, Thomas, and Trendelenburg tests at 90°"),
    ("t3-b-033", 3, "Spurling, ULTT1, distraction, and rotation below 60°"),
    ("t3-b-038", 0, "Fulcrum at the lateral acromion; arms aligned with trunk and humerus"),
    ("t3-b-038", 1, "Fulcrum at the medial epicondyle; arms aligned with femur and tibia"),
    ("t3-b-038", 2, "Fulcrum at the patella; arms aligned with pelvis and tibia"),
    ("t3-b-038", 3, "Fulcrum at the fibular head; arms aligned with femur and calcaneus"),
    ("t3-b-040", 3, "Scapular Assistance Test"),
    ("t3-c-003", 0, "Rotator-cuff-related subacromial pain"),
    ("t3-c-010", 2, "Avoid or modify resisted hip-adduction loading during early rehabilitation"),
    ("t4-a1-032", 0, "Total financial cost per 100 registered club-athlete seasons"),
    ("t4-a1-032", 1, "Total injuries per 1,000 athlete-exposure hours in matches and training"),
    ("t4-a1-032", 2, "Percentage of 100 athletes receiving diagnostic MRI during the sports year"),
    ("t4-a1-032", 3, "Average days lost per 10 traumatic soft-tissue contusions"),
    ("t4-a2-001", 3, "NADA coordinates India's anti-doping programme"),
    ("t4-a2-007", 0, "It is determined by edition-specific Olympic accreditation rules"),
    ("t4-a2-007", 1, "Support staff may never be accredited under any rules"),
    ("t4-a2-007", 2, "Support staff are always capped at exactly 10% of athletes"),
    ("t4-b-002", 0, "Slump with cervical flexion, knee extension, dorsiflexion, then cervical release"),
    ("t4-b-002", 1, "Apley compression in prone with tibial rotation for suspected meniscal pathology"),
    ("t4-b-002", 2, "Thessaly at 20° knee flexion with standing rotation for suspected meniscal pathology"),
    ("t4-b-002", 3, "McMurray in supine with knee flexion and tibial rotation for suspected meniscal pathology"),
    ("t4-b-003", 0, "High scapular-plane elevation with axial load and humeral rotation"),
    ("t4-b-003", 1, "90° elevation with forced internal rotation only, without axial load"),
    ("t4-b-003", 2, "90° abduction in an empty-can position, without axial compression"),
    ("t4-b-003", 3, "90° forward flexion with forearm supination, not scapular-plane loading"),
    ("t4-b-015", 2, "They contribute through a kinetic chain"),
    ("t4-b-019", 2, "Locking the knee joint into rigid full extension during the 60% swing phase"),
    ("t4-b-019", 3, "Producing active extensor torque equal to 100% of quadriceps contraction"),
    ("t4-b-026", 1, "Negative polarity in some early wound protocols, selected by phase"),
    ("t4-b-026", 3, "Direct current is used to cauterize the skin during wound care"),
    ("t4-c-018", 0, "Use an AFO and gentle dorsiflexion positioning; add stimulation only if indicated"),
    ("t4-c-019", 0, "Compression-side always needs surgery; tension-side always needs rest"),
    ("t4-c-019", 1, "Both sides should be treated with unrestricted running and full training"),
    ("t4-c-019", 2, "Compression-side: protected weight bearing; tension-side: higher displacement risk"),
    ("t4-c-019", 3, "Neither side can heal without pelvic pins or specialist imaging"),
    ("t5-a2-001", 0, "Union Minister for Youth Affairs and Sports"),
    ("t5-a2-004", 0, "Sample A receives at least 60 mL and Sample B at least 30 mL"),
    ("t5-a2-004", 1, "Sample A and B each contain exactly 10 mL from a 20-mL collection"),
    ("t5-a2-004", 2, "The urine remains undivided in an unsealed 90-mL cup"),
    ("t5-a2-004", 3, "A blood sample is divided into five equal 10-mL serum tubes"),
    ("t5-a2-006", 0, "A national disciplinary panel for first-instance hearings and appeals"),
    ("t5-a2-006", 1, "Independent anti-doping testing and results management"),
    ("t5-a2-006", 2, "The Court of Arbitration for Sport in Lausanne"),
    ("t5-a2-006", 3, "A national constitutional court for sports disputes"),
    ("t5-a2-007", 0, "At least 25% representation"),
    ("t5-b-031", 0, "Complete: no sacral S4–S5 sensory or motor function is preserved"),
    ("t5-b-031", 1, "Incomplete: sensory but no motor function is preserved below level; motor strength 0/5"),
    ("t5-b-031", 2, "Incomplete: at least half of key muscles below the level are grade 3/5 or higher"),
    ("t5-b-031", 3, "Incomplete: more than half of key muscles below the level are below grade 3/5"),
    ("t5-b-039", 2, "Posterior distal-fibula or posterior-talus glide during weight-bearing lunge"),
    ("t6-b-006", 1, "Glenoid labral pathology"),
    ("t6-b-035", 0, "Anterior glide for external rotation; inferior glide for elevation"),
    ("t7-a1-003", 0, "Use an exercise-specific load that maximizes power"),
    ("t7-a1-010", 1, "A protein-serving leucine dose can stimulate mTOR signaling"),
    ("t7-a1-023", 1, "Keep sleep timing consistent; use a cool, dark, quiet room and limit evening light"),
    ("t7-a1-032", 3, "No single endocrine pattern reliably diagnoses overtraining"),
    ("t7-a2-004", 0, "Total blood cholesterol and triglycerides in the lipid profile"),
    ("t7-a2-004", 1, "Haemoglobin, haematocrit, reticulocytes, and OFF-score"),
    ("t7-a2-004", 2, "Serum creatinine and blood urea nitrogen for renal function"),
    ("t7-a2-004", 3, "Blood glucose and urine pH for metabolic screening"),
    ("t7-b-012", 3, "Autogenic inhibition via GTO Ib discharge"),
    ("t7-b-012", 1, "The stretch reflex caused by rapid muscle lengthening"),
    ("t7-b-012", 2, "Pharmacological blockade of acetylcholine at the motor endplate"),
    ("t7-b-018", 2, "Common/deep peroneal nerve with weak ankle dorsiflexors"),
    ("t9-a1-007", 0, "Thermoregulatory failure with CNS dysfunction in severe heat illness"),
    ("t9-a1-010", 2, "No rigid anabolic window; total intake and meal timing matter"),
    ("t9-a1-016", 3, "Mirwald's maturity-offset equation estimates years from PHV"),
    ("t9-a1-024", 0, "MEMS sensors measure acceleration on three orthogonal axes"),
    ("t9-a1-024", 3, "Measuring air pressure inside the lungs during breathing"),
    ("t9-b-013", 0, "Freezing deposits into ice crystals in the tendon"),
    ("t9-b-013", 1, "Direct electrical destruction of deltoid motor nerves during treatment"),
    ("t9-b-013", 2, "Surgical removal of the acromion rather than acoustic treatment"),
    ("t9-b-013", 3, "Shockwave acoustic energy may modulate pain and calcific deposits"),
    ("t9-b-024", 3, "The beam's effective treatment area, slightly smaller than the soundhead face"),
    ("t9-b-025", 0, "Cathode/negative polarity may be used early; phase guides selection"),
    ("t9-b-025", 3, "Anode/positive polarity is mandatory for every inflammatory wound"),
    ("t10-b-039", 2, "Gently draw the lower abdominal wall inward without pelvic movement"),
    ("t11-a1-009", 0, "A commonly cited leucine dose of about 2.5–3.0 g"),
    ("t11-b-037", 0, "Malleolar bone tenderness or inability to bear weight for four steps"),
    ("t11-c-003", 1, "GIRD with preserved total rotational arc in a throwing athlete"),
    ("t11-c-005", 0, "Proximal patellar tendinopathy at the inferior-pole tendon origin"),
    ("t11-c-005", 1, "Medial meniscal tear with a locked knee and joint-line symptoms"),
    ("t11-c-007", 0, "Grade I ankle sprain with microscopic injury and no laxity"),
    ("t11-c-007", 1, "Grade IV ankle dislocation with complete rupture and instability"),
    ("t11-c-007", 2, "Grade II sprain with partial ATFL injury and laxity"),
    ("t11-c-007", 3, "No ligamentous injury despite swelling and laxity"),
    ("t11-c-014", 1, "Increasing running cadence by 5–10% when tolerated to reduce impact loading"),
    ("t11-c-019", 2, "Scapular dyskinesis contributes to symptoms"),
    ("t12-a1-012", 3, "A 6% to 8% carbohydrate solution"),
    ("t12-a1-015", 2, "By entering age and anthropometric measures into a validated maturity-offset equation"),
    ("t12-b-008", 3, "120° abduction and 90° external rotation with supinated forearm and resisted elbow flexion"),
    ("t12-b-016", 3, "Less ankle contribution; more knee-extensor demand"),
    ("t12-b-022", 1, "Ground-reaction-force application path"),
    ("t12-b-025", 0, "Central opioid activation, especially μ-opioid mechanisms"),
    ("t12-b-039", 2, "May modestly preserve muscle during immobilization"),
    ("t12-c-003", 0, "Rotator-cuff-related subacromial pain with scapular contribution"),
    ("t12-c-003", 1, "Suprascapular nerve compression at the spinoglenoid notch"),
    ("t12-c-003", 2, "Complete acromial avulsion fracture causing acute shoulder trauma"),
    ("t12-c-003", 3, "Severe glenohumeral osteoarthritis with global passive restriction"),
    ("t12-c-014", 1, "Hip-abductor strengthening with individualized cadence and step-width changes"),
]


def main() -> None:
    by_id: dict[str, dict] = {}
    files = sorted(
        glob.glob(str(ROOT / "mock_tests" / "mock_test_*.json")),
        key=lambda name: int(re.search(r"_(\d+)\.json$", name).group(1)),
    )
    loaded: dict[str, list[dict]] = {}
    for filename in files:
        questions = json.loads(Path(filename).read_text())
        loaded[filename] = questions
        for question in questions:
            by_id[question["id"]] = question
    for question_id, index, value in CHANGES:
        by_id[question_id]["options"][index] = value
    for filename, questions in loaded.items():
        Path(filename).write_text(json.dumps(questions, indent=2, ensure_ascii=True) + "\n")


if __name__ == "__main__":
    main()
