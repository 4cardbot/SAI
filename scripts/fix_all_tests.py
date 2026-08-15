import subprocess
import json

def fix_all():
    # 1. Update Test 2
    with open('mock_tests/mock_test_2.json') as f:
        t2 = json.load(f)
    for q in t2:
        if q['id'] == 't2-b-014':
            q['options'] = [
                "CKC exercises promote joint axial compression, enhance co-contraction, and stability",
                "OKC exercises eliminate all shear forces across the anterior cruciate ligament graft",
                "CKC exercises generate pure open-chain isolation that speeds up patellar tendon healing",
                "OKC exercises stimulate faster bone-to-bone healing than weight-bearing closed chains"
            ]
            q['correct'] = 0
        elif q['id'] == 't2-b-026':
            q['text'] = "In gait biomechanics, what is the characteristic waveform profile of the vertical Ground Reaction Force (vGRF) during the stance phase of normal walking?"
            q['options'] = [
                "Single unimodal curve peaking at 0.5× body weight at mid-stance",
                "Linear progressive ramp reaching 3.0× body weight at toe-off",
                "Bimodal 'M-shaped' curve with two peaks reaching ~1.1–1.2× body weight",
                "Flat continuous plateau maintaining 1.0× body weight throughout stance"
            ]
            q['correct'] = 2
    with open('mock_tests/mock_test_2.json', 'w') as f:
        json.dump(t2, f, indent=2)
    print("Updated Test 2.")

    # 2. Update Test 3
    with open('mock_tests/mock_test_3.json') as f:
        t3 = json.load(f)
    for q in t3:
        if q['id'] == 't3-a1-017':
            q['options'] = [
                "Sum of three skinfolds: Triceps, Subscapular, and Supraspinale, adjusted for standing height",
                "Sum of two bone breadths: Biepicondylar humerus and Biepicondylar femur breadths",
                "Sum of two limb girths: Flexed arm girth and Calf girth corrected for skinfold thickness",
                "Ratio of standing height divided by the cube root of total body weight (Ponderal Index)"
            ]
            q['correct'] = 0
        elif q['id'] == 't3-a1-018':
            q['options'] = [
                "The ratio of arm span relative to standing height (or arm span minus standing height)",
                "The ratio of sitting height relative to standing height expressed as a percentage",
                "The ratio of biacromial shoulder width relative to bicristal pelvic width",
                "The ratio of total body mass divided by standing stature squared"
            ]
            q['correct'] = 0
        elif q['id'] == 't3-c-003':
            q['correct'] = 0
    with open('mock_tests/mock_test_3.json', 'w') as f:
        json.dump(t3, f, indent=2)
    print("Updated Test 3.")

    # 3. Update Test 4
    with open('mock_tests/mock_test_4.json') as f:
        t4 = json.load(f)
    for q in t4:
        if q['id'] == 't4-a1-018':
            q['correct'] = 0
        elif q['id'] == 't4-a1-019':
            q['correct'] = 0
        elif q['id'] == 't4-a1-032':
            q['correct'] = 1
        elif q['id'] == 't4-a2-002':
            q['correct'] = 2
        elif q['id'] == 't4-b-019':
            q['correct'] = 0
    with open('mock_tests/mock_test_4.json', 'w') as f:
        json.dump(t4, f, indent=2)
    print("Updated Test 4.")

    # 4. Update Test 5
    with open('mock_tests/mock_test_5.json') as f:
        t5 = json.load(f)
    for q in t5:
        if q['id'] == 't5-a1-018':
            q['options'] = [
                "Balanced Mesomorph (Mesomorphy is dominant with equal and lower Endomorphy and Ectomorphy)",
                "Endomorphic Mesomorph (Mesomorphy is dominant and Endomorphy is greater than Ectomorphy)",
                "Ectomorphic Mesomorph (Mesomorphy is dominant and Ectomorphy is greater than Endomorphy)",
                "Central Somatotype (All three components are balanced without any dominant component)"
            ]
            q['correct'] = 0
        elif q['id'] == 't5-a1-019':
            q['options'] = [
                "The distal tip of the medial malleolus along the medial ankle joint line",
                "The superior medial border of the tibial plateau along the knee joint line",
                "The prominence of the tibial tuberosity at the patellar tendon insertion",
                "The inferior pole of the patella along the anterior knee joint space"
            ]
            q['correct'] = 1
        elif q['id'] == 't5-a1-020':
            q['options'] = [
                "Dehydration reduces total body water, increasing tissue electrical resistance and impedance",
                "Dehydration increases total body water, decreasing tissue electrical resistance and impedance",
                "Dehydration reduces body mass index by 50% without altering fat percent",
                "Dehydration causes bioelectrical impedance machines to read zero body fat levels"
            ]
            q['correct'] = 0
        elif q['id'] == 't5-a1-021':
            q['options'] = [
                "Biacromial shoulder breadth relative to Biiliac pelvic width in posture",
                "Sitting Height relative to Leg Subischial Length across growing years",
                "Total arm span length relative to standing height in sports screening",
                "Triceps skinfold thickness relative to subscapular skinfold thickness"
            ]
            q['correct'] = 1
    with open('mock_tests/mock_test_5.json', 'w') as f:
        json.dump(t5, f, indent=2)
    print("Updated Test 5.")

    # 5. Update Test 6
    with open('mock_tests/mock_test_6.json') as f:
        t6 = json.load(f)
    for q in t6:
        if q['id'] == 't6-c-002':
            q['correct'] = 1
    with open('mock_tests/mock_test_6.json', 'w') as f:
        json.dump(t6, f, indent=2)
    print("Updated Test 6.")

    # 6. Restore and clean Tests 7, 8, 9, 10 from b8f1df4
    for t in [7, 8, 9, 10]:
        out_b8 = subprocess.check_output(['git', 'show', f'b8f1df4:mock_tests/mock_test_{t}.json']).decode('utf-8')
        qs_b8 = json.loads(out_b8)
        with open(f'mock_tests/mock_test_{t}.json', 'w') as f:
            json.dump(qs_b8, f, indent=2)
        print(f"Restored clean Test {t} from b8f1df4.")

if __name__ == '__main__':
    fix_all()
