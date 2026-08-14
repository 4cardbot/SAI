#!/usr/bin/env python3
import json
import os
import random
import sys

from data_test1 import DATA_TEST_1
from data_test2 import DATA_TEST_2
from data_test3 import DATA_TEST_3
from data_test4 import DATA_TEST_4
from data_test5 import DATA_TEST_5

tests = [
    ("mock_test_1.json", DATA_TEST_1),
    ("mock_test_2.json", DATA_TEST_2),
    ("mock_test_3.json", DATA_TEST_3),
    ("mock_test_4.json", DATA_TEST_4),
    ("mock_test_5.json", DATA_TEST_5),
]

output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "mock_tests"))
os.makedirs(output_dir, exist_ok=True)

all_processed_questions = []

print("="*70)
print("COMPILING & VERIFYING 5 MOCK TESTS FOR SAI PHYSIOTHERAPIST CBT")
print("="*70)

for test_idx, (filename, q_list) in enumerate(tests, start=1):
    print(f"\nProcessing Test {test_idx}: {filename} (Total Qs: {len(q_list)})")
    if len(q_list) != 100:
        print(f"ERROR: {filename} does not contain exactly 100 questions!")
        sys.exit(1)
        
    sections = {"A1": 0, "A2": 0, "B": 0, "C": 0}
    # Balanced positions: exactly 25 of 0(A), 25 of 1(B), 25 of 2(C), 25 of 3(D)
    target_positions = [0]*25 + [1]*25 + [2]*25 + [3]*25
    rng = random.Random(1000 + test_idx)
    rng.shuffle(target_positions)
    
    processed_test = []
    length_ratios = []
    
    for i, q in enumerate(q_list):
        sec = q["section"]
        sections[sec] = sections.get(sec, 0) + 1
        
        orig_correct_idx = q["correct"]
        correct_text = q["options"][orig_correct_idx]
        distractors = [opt for idx, opt in enumerate(q["options"]) if idx != orig_correct_idx]
        
        new_pos = target_positions[i]
        new_options = [None] * 4
        new_options[new_pos] = correct_text
        
        d_idx = 0
        for slot in range(4):
            if slot != new_pos:
                new_options[slot] = distractors[d_idx]
                d_idx += 1
                
        # Length check
        lens = [len(opt) for opt in new_options]
        ratio = max(lens) / (min(lens) + 1e-5)
        length_ratios.append(ratio)
        
        new_q = {
            "id": (test_idx - 1) * 100 + (i + 1),
            "section": sec,
            "text": q["text"],
            "options": new_options,
            "correct": new_pos,
            "explanation": q["explanation"],
            "source": q["source"]
        }
        processed_test.append(new_q)
        all_processed_questions.append(new_q)
        
    # Verify section breakdown
    expected_sec = {"A1": 32, "A2": 8, "B": 40, "C": 20}
    if sections != expected_sec:
        print(f"ERROR in {filename} sections: {sections} vs expected {expected_sec}")
        sys.exit(1)
        
    # Verify key distribution
    dist = {0: 0, 1: 0, 2: 0, 3: 0}
    for q in processed_test:
        dist[q["correct"]] += 1
        
    avg_ratio = sum(length_ratios) / len(length_ratios)
    max_ratio = max(length_ratios)
    
    print(f"  Section Counts: A1={sections['A1']}, A2={sections['A2']}, B={sections['B']}, C={sections['C']} -> MATCHED")
    print(f"  Answer Distribution (A/B/C/D): A={dist[0]}, B={dist[1]}, C={dist[2]}, D={dist[3]} -> PERFECT 25% EQUAL")
    print(f"  Option Length Ratios: Average Max/Min Ratio = {avg_ratio:.2f}, Worst = {max_ratio:.2f}")
    
    filepath = os.path.join(output_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(processed_test, f, indent=2, ensure_ascii=False)
    print(f"  Wrote: {filepath}")

# Consolidated file
consolidated_path = os.path.join(output_dir, "all_5_mock_tests.json")
with open(consolidated_path, "w", encoding="utf-8") as f:
    json.dump(all_processed_questions, f, indent=2, ensure_ascii=False)
print(f"\nSuccessfully wrote consolidated bank (500 questions) to {consolidated_path}")
print("="*70)
print("ALL VERIFICATIONS COMPLETED WITH 100% SUCCESS!")
print("="*70)
