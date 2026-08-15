import json
import re

def full_diagnostic():
    for t in range(1, 11):
        with open(f'mock_tests/mock_test_{t}.json') as f:
            qs = json.load(f)
        
        print(f"\n========================== TEST {t} ({len(qs)} QUESTIONS) ==========================")
        for i, q in enumerate(qs):
            qid = q['id']
            c = q['correct']
            opts = q['options']
            stem = q['text']
            exp = q['explanation']
            
            # Check 1: Stem vs Option topic mismatch
            # E.g. if stem mentions somatotype/anthropometry/ape index/endomorphy but options mention Cormic index or Autonomous phase
            stem_lower = stem.lower()
            opt_lower = " ".join(opts).lower()
            
            # Check for specific obvious mismatches
            if 'ape index' in stem_lower and 'arm span' not in opt_lower:
                print(f"[{qid}] STEM-OPTION MISMATCH: Stem asks for Ape index but options don't mention arm span")
            if 'endomorphy' in stem_lower and ('skinfold' not in opt_lower and 'fat' not in opt_lower and 'adiposity' not in opt_lower):
                print(f"[{qid}] STEM-OPTION MISMATCH: Stem asks for Endomorphy but options don't mention skinfolds/adiposity")
            if 'somatotype' in stem_lower and '2–6–2' in stem_lower and 'mesomorph' not in opt_lower:
                print(f"[{qid}] STEM-OPTION MISMATCH: Stem asks for somatotype 2-6-2 but options don't mention mesomorph")
            if 'boyle' in exp.lower() and 'boyle' in opt_lower and c != 0:
                print(f"[{qid}] MISKEY: Bod Pod / Boyle's law marked {c} instead of Boyle option")
            if 'khamis-roche' in stem_lower and c != 0:
                print(f"[{qid}] MISKEY: Khamis-Roche marked {c} instead of stature/parent height")
            if 'tibiale mediale' in stem_lower and c != 1:
                print(f"[{qid}] MISKEY: Tibiale mediale marked {c} instead of tibial plateau")
            if 'dehydration' in stem_lower and 'impedance' in stem_lower and c != 0:
                print(f"[{qid}] MISKEY: BIA dehydration marked {c} instead of increases impedance")
            if 'mirwald' in stem_lower and c != 1:
                print(f"[{qid}] MISKEY: Mirwald maturity offset marked {c} instead of sitting height")
            if 'neer' in stem_lower and 'hawkins' in stem_lower and 'subacromial' in exp.lower() and 'subacromial' in opts[0].lower() and c != 0:
                print(f"[{qid}] MISKEY: Neer/Hawkins marked {c} instead of subacromial (0)")

if __name__ == '__main__':
    full_diagnostic()
