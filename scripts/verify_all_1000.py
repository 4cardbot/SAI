import json
import re

def verify_test(t_num):
    with open(f'mock_tests/mock_test_{t_num}.json') as f:
        qs = json.load(f)
    
    print(f"============================ TEST {t_num} ============================")
    for idx, q in enumerate(qs):
        c = q['correct']
        stem = q['text']
        opts = q['options']
        exp = q['explanation']
        qid = q['id']
        sec = q['section']
        
        # Check 1: Check if correct index is out of bounds
        if c not in (0, 1, 2, 3):
            print(f"[{qid}] INVALID CORRECT INDEX: {c}")
            continue
            
        corr_opt = opts[c]
        
        # Check 2: Check for obvious mismatch between explanation and correct option
        # E.g., if explanation specifically names a different option
        exp_clean = exp.lower()
        corr_clean = corr_opt.lower()
        
        # Check if another option is a distinct proper noun/medical term and mentioned in explanation while corr_opt is not
        for j, o in enumerate(opts):
            if j == c: continue
            o_terms = re.findall(r'\b[A-Za-z0-9\-\%]{4,}\b', o)
            # Find significant specific medical/scientific terms
            key_terms = [t for t in o_terms if t.lower() not in {'with', 'from', 'that', 'this', 'have', 'been', 'were', 'which', 'than', 'into', 'over', 'more', 'most', 'each', 'during', 'their', 'these', 'about', 'under', 'after', 'level', 'using', 'based', 'state', 'phase', 'group', 'value', 'total', 'index', 'standardized', 'criteria', 'progressive', 'clinical', 'assessment', 'drills', 'exercise', 'rehabilitation'}]
            if len(key_terms) >= 3 and all(kt.lower() in exp_clean for kt in key_terms) and not any(kt.lower() in corr_clean for kt in key_terms):
                print(f"[{qid}] POTENTIAL MISKEY:")
                print(f"   Stem: {stem}")
                print(f"   Marked [{c}]: {corr_opt}")
                print(f"   Candidate [{j}]: {o}")
                print(f"   Exp: {exp}")
                print()

if __name__ == '__main__':
    for t in range(1, 13):
        verify_test(t)
