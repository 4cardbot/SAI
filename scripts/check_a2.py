import json
import glob

def check_section_a2():
    print("================== AUDITING SECTION A2 (80 Questions) ==================")
    for t in range(1, 11):
        with open(f'mock_tests/mock_test_{t}.json') as f:
            qs = json.load(f)
        a2_qs = [q for q in qs if q['section'] == 'A2']
        print(f"\n--- Test {t} Section A2 ({len(a2_qs)} questions) ---")
        for q in a2_qs:
            c = q['correct']
            print(f"ID: {q['id']} | Subtopic: {q.get('subtopic')}")
            print(f"Stem: {q['text']}")
            for idx, opt in enumerate(q['options']):
                m = " [CORRECT]" if idx == c else ""
                print(f"  {idx}: {opt}{m}")
            print(f"Exp: {q['explanation']}\n")

if __name__ == '__main__':
    check_section_a2()
