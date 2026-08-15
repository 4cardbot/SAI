import json

def refine_a2():
    # Test 5
    with open('mock_tests/mock_test_5.json') as f:
        t5 = json.load(f)
    for q in t5:
        if q['id'] == 't5-a2-002':
            q['options'] = [
                "Providing long-term commercial loans to private fitness club chains and franchises",
                "Funding national coaching camps, international exposure, and hiring coaches",
                "Constructing commercial entertainment multiplexes for private event organizers",
                "Funding municipal election campaigns across urban local governance bodies"
            ]
    with open('mock_tests/mock_test_5.json', 'w') as f:
        json.dump(t5, f, indent=2)

    # Test 7
    with open('mock_tests/mock_test_7.json') as f:
        t7 = json.load(f)
    for q in t7:
        if q['id'] == 't7-a2-001':
            q['options'] = [
                "Financial assistance of ₹5,00,000 (5 Lakhs) per annum for 8 consecutive years",
                "A monthly stipend of ₹25,000 for a maximum period of 2 consecutive years",
                "An annual lump-sum cash award of ₹15,00,000 without continuous training review",
                "A one-time equipment grant of ₹50,000 given at the national championship"
            ]
    with open('mock_tests/mock_test_7.json', 'w') as f:
        json.dump(t7, f, indent=2)

    # Test 8
    with open('mock_tests/mock_test_8.json') as f:
        t8 = json.load(f)
    for q in t8:
        if q['id'] == 't8-a2-006':
            q['options'] = [
                "A statutory regulatory board licensing private fitness equipment importers across Asia",
                "A corporate marketing agency that manages commercial broadcast rights for domestic leagues",
                "The apex national sports body under MYAS responsible for athlete talent scouting, operating National Centres of Excellence (NCOEs), sports science infrastructure, and managing national coaching camps",
                "A judicial court that passes criminal sentences on international athletes"
            ]
    with open('mock_tests/mock_test_8.json', 'w') as f:
        json.dump(t8, f, indent=2)

    # Test 9
    with open('mock_tests/mock_test_9.json') as f:
        t9 = json.load(f)
    for q in t9:
        if q['id'] == 't9-a2-001':
            q['options'] = [
                "Athletes must self-finance 100% of international travel and accommodation costs",
                "Full funding of international airfares, boarding/lodging, visa fees, out-of-pocket allowances, and medical insurance for national teams participating in approved international tournaments",
                "Financial support restricted strictly to domestic travel and food allowances within India",
                "Reimbursement of airfare costs provided only if the national team wins a medal in the finals"
            ]
    with open('mock_tests/mock_test_9.json', 'w') as f:
        json.dump(t9, f, indent=2)

    # Test 10
    with open('mock_tests/mock_test_10.json') as f:
        t10 = json.load(f)
    for q in t10:
        if q['id'] == 't10-a2-001':
            q['options'] = [
                "A dedicated junior/youth talent pathway designed to support promising young athletes identified for future Olympic Games (e.g., LA 2028 and Brisbane 2032) with customized coaching and funding",
                "A welfare scheme providing pensions and medical coverage to retired veteran international medalists",
                "An infrastructure committee managing commercial lease agreements for SAI regional stadiums",
                "A statutory panel that resolves administrative contract disputes between coaches and sports clubs"
            ]
        elif q['id'] == 't10-a2-006':
            q['options'] = [
                "The premier academic institute for sports coaching education, high-performance training, sports science research, and diploma/postgraduate certifications in Asia",
                "The national licensing authority that registers private gym trainers and commercial fitness centers",
                "A central government agency that inspects and certifies commercial sports nutrition supplements",
                "An independent sports dispute arbitration tribunal that hears legal appeals from athlete contracts"
            ]
        elif q['id'] == 't10-a2-008':
            q['options'] = [
                "A voluntary non-profit society operating under the Indian Olympic Association without statutory powers",
                "A statutory autonomous body established under central legislation, headed by a Director General appointed by the Government of India, with full operational independence in anti-doping matters",
                "A commercial laboratory accredited solely to test consumer pharmaceutical products and cosmetics",
                "A specialized security wing of the Central Armed Police Forces assigned to protect sports venues"
            ]
    with open('mock_tests/mock_test_10.json', 'w') as f:
        json.dump(t10, f, indent=2)
    print("Refined Section A2 distractors successfully.")

if __name__ == '__main__':
    refine_a2()
