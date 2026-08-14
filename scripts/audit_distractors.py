#!/usr/bin/env python3
import json
import re

from data_test1 import DATA_TEST_1
from data_test2 import DATA_TEST_2
from data_test3 import DATA_TEST_3
from data_test4 import DATA_TEST_4
from data_test5 import DATA_TEST_5
from data_test6 import DATA_TEST_6
from data_test7 import DATA_TEST_7
from data_test8 import DATA_TEST_8
from data_test9 import DATA_TEST_9
from data_test10 import DATA_TEST_10

all_datasets = [
    (1, DATA_TEST_1),
    (2, DATA_TEST_2),
    (3, DATA_TEST_3),
    (4, DATA_TEST_4),
    (5, DATA_TEST_5),
    (6, DATA_TEST_6),
    (7, DATA_TEST_7),
    (8, DATA_TEST_8),
    (9, DATA_TEST_9),
    (10, DATA_TEST_10),
]

# Suspicious words often found in simplistic / absurd distractors
ABSURD_PATTERNS = [
    r"\bamputat", r"\bdestroying all\b", r"\bcompletely eliminates all\b", r"\bcompletely shut",
    r"\bbed rest for (?:5|6|11|12|several|years|months)\b", r"\brandomly guess", r"\bforget.*tactical\b",
    r"\blucky\b", r"\bshouting at\b", r"\bcommercial retail\b", r"\bprivate medical clinic\b",
    r"\bairline company\b", r"\bshopping mall\b", r"\bconstruction company\b", r"\btelevision in dormitor",
    r"\bfacial\b", r"\bwatching television\b", r"\bpermanent.*disability\b", r"\bnever.*physical\b",
    r"\bzero.*energy\b", r"\bzero.*impact\b", r"\bzero.*force\b", r"\bzero.*atp\b",
    r"\bfiberglass cast for (?:6|8|12|months)\b", r"\bcombat boots\b", r"\bsteel-toed\b"
]

print("=== DISTRACTOR QUALITY AUDIT ACROSS 1,000 QUESTIONS ===")

total_flaws = 0
for test_num, dataset in all_datasets:
    test_flaws = 0
    for q in dataset:
        qid = q["id"]
        opts = q["options"]
        lens = [len(o) for o in opts]
        ratio = max(lens) / max(min(lens), 1)
        
        # Check parenthesis asymmetry:
        paren_counts = [len(re.findall(r"\(.*?\)", o)) for o in opts]
        has_paren_asymmetry = (max(paren_counts) >= 1 and min(paren_counts) == 0 and sum(paren_counts) == max(paren_counts))
        
        # Check absurd keywords:
        has_absurd = any(any(re.search(pat, o, re.IGNORECASE) for pat in ABSURD_PATTERNS) for o in opts)
        
        # Check high length ratio:
        is_unbalanced = ratio > 1.45 or (max(lens) - min(lens) > 40)
        
        if has_absurd or has_paren_asymmetry or is_unbalanced:
            test_flaws += 1
            total_flaws += 1
            # print first 5 per test
            if test_flaws <= 3:
                print(f"Test {test_num} Q{qid} (Ratio: {ratio:.2f}, Lens: {lens}):")
                print(f"  Question: {q['text'][:80]}...")
                for i, o in enumerate(opts):
                    print(f"    [{i}] {o[:70]}...")
    print(f"Test {test_num}: {test_flaws}/100 questions need distractor refinement.\n")

print(f"TOTAL QUESTIONS TO REFINE: {total_flaws}/1000")
