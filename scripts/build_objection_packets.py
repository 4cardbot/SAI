from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path("objections/evidence")
RENDER = Path("/tmp/sai-objection-render")

FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

ITEMS = [
    dict(q="04", code="BK1021", source_image="q04.png", selected="D", key="A",
         correct="D - Comparing an athlete's test results across multiple parameters to identify strengths and weaknesses",
         locator="Page 1 of the printed AIS webpage; paragraph under 'Individual athlete profiling'",
         source="Australian Sports Commission / Australian Institute of Sport, Individual athlete profiling",
         url="https://www.ausport.gov.au/ais/performance-support/people-development/success-profiles/resources/physiology/strong-sport-specific-knowledge/individual-athlete-profiling-athlete-testing-and-monitoring-methodologies-and-interpretation",
         why="The source says athlete profiling identifies strengths and weaknesses and that testing should cover multiple critical performance factors.",
         complaint="AIS Athlete Profiling, p.1: testing covers multiple performance factors and identifies strengths/weaknesses; this supports D. Revise key to D.",
         question="Athlete 'performance profiling' primarily involves:",
         highlights=[(55, 674, 1160, 810)]),
    dict(q="11", code="BK1001", source_image="q11.png", selected="B", key="D",
         correct="B - Ectomorph",
         locator="NCBI PDF p.67 (Sheldon); SAI PDF p.20 (ectomorph)",
         source="NCBI/National Academies; SAI NSNIS",
         url="https://www.ncbi.nlm.nih.gov/books/NBK235955/pdf/Bookshelf_NBK235955.pdf; https://nis-ir.tiss.co.in/nis/bitstream/123456789/107/12/11Somatotype%20different%20components%2C%20importance%20and%20scope%20in%20sports%20_%20Method%20of%20Body%20Composition%20%281%29.pdf",
         why="The NCBI source identifies Sheldon et al.'s three somatotype extremes, including ectomorph; the SAI chart shows very little muscle or body fat for the ectomorph.",
         complaint="NCBI PDF p.67 names Sheldon et al.; SAI NSNIS PDF p.20 shows thin arms/legs and little muscle/fat. This supports B.",
         question="Which somatotype, as classified by Sheldon, is characterized by a lean, linear body build with low fat and muscle mass?",
         highlights=[(45, 325, 1400, 405), (45, 405, 1400, 620)],
         composite="q11"),
    dict(q="16", code="BK1031", source_image="q16.png", selected="C", key="B",
         correct="C - Prolonged maladaptation and performance decline despite adequate rest, often with mood and hormonal disturbances",
         locator="PDF page 1; PubMed abstract (AB field) for PMID 23247672",
         source="Meeusen et al., ECSS/ACSM consensus statement on overtraining syndrome",
         url="https://pubmed.ncbi.nlm.nih.gov/23247672/",
         why="The abstract identifies maladaptation and says overtraining symptoms include fatigue, performance decline and mood disturbance.",
         complaint="PubMed PMID 23247672 abstract: OTS involves maladaptation, performance decline and mood disturbance. This supports C. Revise key to C.",
         question="Overtraining syndrome in athletes is best characterized by:",
         highlights=[(45, 690, 1180, 785), (45, 825, 1180, 955)]),
    dict(q="19", code="BK1014", source_image="q19.png", selected="C", key="B",
         correct="C - At a moderate, optimal level",
         locator="PDF page 18 (printed page 35); paragraph on the Yerkes-Dodson Law / inverted-U hypothesis",
         source="University of Pretoria sport psychology research PDF",
         url="https://repository.up.ac.za/server/api/core/bitstreams/a6c9f786-d63e-4264-a1af-fd1c3c81a388/content",
         why="The source states that moderate arousal has the greatest positive effect on performance, while low or high arousal hinders ability.",
         complaint="University of Pretoria PDF p.18 (printed p.35), Yerkes-Dodson paragraph: moderate arousal optimizes performance. This supports C, not B.",
         question="The Inverted-U hypothesis in sports psychology suggests that performance is optimal when arousal is:",
         highlights=[(195, 130, 1130, 330)]),
    dict(q="23", code="BK1004", source_image="q23.png", selected="A", key="B",
         correct="A - Hydrogen ions (H+) and inorganic phosphate",
         locator="PDF page 23 of 30; 'KEY POINTS', final bullet and preceding measurements bullet",
         source="Hureau et al., Journal of Physiology, On the role of skeletal muscle acidosis and inorganic phosphates",
         url="https://pmc.ncbi.nlm.nih.gov/articles/PMC9250628/",
         why="The article measures H+ and Pi and reports Pi as a primary cause of peripheral fatigue; therefore A is the best listed option.",
         complaint="Hureau et al., J Physiol PDF p.23, Key Points: H+ and Pi relate to fatigue; Pi causes peripheral fatigue. Option A is correct, not B.",
         question="Peripheral muscle fatigue during high-intensity exercise is most closely associated with accumulation of:",
         highlights=[(105, 190, 1160, 335), (105, 575, 1160, 740)]),
    dict(q="33", code="BK1033", source_image="q33.png", selected="C", key="B",
         correct="C - International Olympic Committee (IOC)",
         locator="Olympic Charter PDF page 16 (printed page 15), Rule 1",
         source="Olympic Charter, Chapter 1 - The Olympic Movement",
         url="https://olympians.org/library/olympic_charter.pdf",
         why="Rule 1 states that the Olympic Movement is under the supreme authority and leadership of the International Olympic Committee.",
         complaint="Olympic Charter PDF p.16, Rule 1: IOC has supreme authority and leadership of the Olympic Movement. Option C is correct.",
         question="Which body is the supreme authority of the Olympic Movement globally?",
         highlights=[(105, 505, 850, 665)]),
    dict(q="34", code="BK1036", source_image="q34.png", selected="C", key="D",
         correct="C - Birmingham",
         locator="Page 1 of the printed Commonwealth Sport Birmingham 2022 webpage; event date and host panel",
         source="Commonwealth Sport, Birmingham 2022 Commonwealth Games",
         url="https://www.commonwealthsport.com/commonwealth-games/birmingham-2022",
         why="The official event page identifies the Games as Birmingham 2022 and lists the host as England, with Birmingham as the event city.",
         complaint="Commonwealth Sport Birmingham 2022 page 1 identifies Birmingham 2022 and its host city. Option C is correct, not D.",
         question="The XXII Commonwealth Games 2022 were hosted by which city?",
         highlights=[(65, 145, 1140, 390), (65, 390, 1140, 550)]),
    dict(q="37", code="BK1035", source_image="q37.png", selected="B", key="D",
         correct="B - Erythropoietin (EPO)",
         locator="PDF page 1; S2.1 heading 'Erythropoietins (EPO)' under 'Prohibited at all times'",
         source="JADCO 2026 Prohibited List, reproducing the WADA 2026 list",
         url="https://jadco.gov.jm/wp-content/uploads/2026/01/JADCO-Prohibited-List-2026.pdf",
         why="The 2026 List places erythropoietins, including EPO, in S2, a class prohibited at all times in and out of competition.",
         complaint="WADA 2026 List p.1, S2.1: EPO is under substances prohibited at all times. Option B is correct, not D.",
         question="Which of the following is prohibited at ALL TIMES (both in-competition and out-of-competition) under the WADA Prohibited List?",
         highlights=[(2840, 75, 3280, 285)],
         composite="q37"),
    dict(q="38", code="BK1034", source_image="q38-pib-local.png", selected="D", key="A",
         correct="D - Revival of sports culture at the grassroots level across India",
         locator="PIB page 1, paragraph 2, Release ID 1518310",
         source="Press Information Bureau, Government of India, Khelo India School Games release",
         url="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1518310&lang=2&reg=48",
         why="The official PIB release states that Khelo India was introduced to revive sports culture at the grass-root level, exactly matching option D.",
         complaint="PIB Release 1518310, para 2: Khelo India revives sports culture at grass-root level. This supports D, not A.",
         question="The Khelo India Programme was launched with which primary objective?",
         highlights=[(65, 355, 1160, 460)]),
    dict(q="39", code="BK1037", source_image="q39.png", selected="A", key="C",
         correct="A - 70 years",
         locator="PDF page 391 (printed page 389), Written Answers to 10 December 2014, point (iii)",
         source="Rajya Sabha official record quoting the National Sports Development Code of India, 2011",
         url="https://cms.rajyasabha.nic.in/UploadedFiles/Debates/OfficialDebatesDatewise/Floor/233/F10.12.2014.pdf",
         why="Point (iii) states that the President, Secretary and Treasurer of a recognized NSF cease office on attaining 70 years.",
         complaint="Rajya Sabha record p.391, point (iii): NSF President, Secretary and Treasurer cease office at 70 years. Option A is correct.",
         question="The National Sports Development Code of India, 2011 mandates that office-bearers of National Sports Federations must not exceed which age limit?",
         highlights=[(70, 300, 800, 570)]),
    dict(q="40", code="BK1039", source_image="q40.png", selected="B", key="A",
         correct="B - 5 rings - five continents of the world united by the Olympic Movement",
         locator="PDF page 3 of the printed IOC Olympic Symbol webpage; quotation and creation-of-rings text",
         source="International Olympic Committee Olympic Brand Centre, Olympic Symbol",
         url="https://brand-centre.olympic.org/olympic_symbol",
         why="The IOC page says the five rings represent the five parts of the world and notes athletes came from all five continents.",
         complaint="IOC Olympic Symbol page 3: five rings represent five parts of the world and athletes from all five continents. Option B is correct.",
         question="How many interlocking rings does the Olympic flag feature, and what do they collectively represent?",
         highlights=[(110, 125, 1130, 285), (95, 1320, 1130, 1480)]),
]


def font(path, size):
    return ImageFont.truetype(path, size)


def wrap_draw(draw, text, xy, width, fnt, fill=(35, 35, 35), spacing=8):
    x, y = xy
    words = text.split()
    lines = []
    cur = ""
    for word in words:
        trial = f"{cur} {word}".strip()
        if draw.textlength(trial, font=fnt) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += fnt.size + spacing
    return y


def marked_image(source_path, highlights, output_name):
    src = Image.open(source_path).convert("RGBA")
    overlay = Image.new("RGBA", src.size, (255, 255, 255, 0))
    d = ImageDraw.Draw(overlay)
    for box in highlights:
        x0, y0, x1, y1 = box
        pad = 9
        x0 = max(0, x0 - pad)
        y0 = max(0, y0 - pad)
        x1 = min(src.width - 1, x1 + pad)
        y1 = min(src.height - 1, y1 + pad)
        # Use a translucent marker fill only. A frame placed on a tight text
        # box can cross glyphs when the source page is resized for printing.
        d.rectangle((x0, y0, x1, y1), fill=(255, 224, 55, 78))
    marked = Image.alpha_composite(src, overlay)
    marked_path = RENDER / output_name
    marked.save(marked_path)
    return marked


def fit_image(image, max_width, max_height):
    scale = min(max_width / image.width, max_height / image.height)
    return image.resize((max(1, round(image.width * scale)), max(1, round(image.height * scale))), Image.Resampling.LANCZOS)


def paste_centered(canvas, image, area):
    x0, y0, x1, y1 = area
    fitted = fit_image(image, x1 - x0, y1 - y0)
    x = x0 + ((x1 - x0) - fitted.width) // 2
    y = y0 + ((y1 - y0) - fitted.height) // 2
    canvas.alpha_composite(fitted, (x, y))


def make_q11_composite():
    """Place two exact source-page excerpts together so the answer is explicit."""
    ncbi = marked_image(
        RENDER / "q11-ncbi-p67.png",
        [(145, 315, 1110, 405)],
        "marked-q11-ncbi.png",
    ).crop((80, 280, 1150, 405))
    sai = marked_image(
        RENDER / "q11.png",
        [(45, 325, 1400, 410)],
        "marked-q11-sai.png",
    ).crop((0, 0, 1440, 410))

    W, H = 1654, 1320
    composite = Image.new("RGBA", (W, H), "white")
    draw = ImageDraw.Draw(composite)
    label_font = font(BOLD, 24)
    draw.text((45, 18), "National Academies/NCBI PDF p.67 — Sheldon et al. and ectomorph", font=label_font, fill=(35, 35, 35))
    paste_centered(composite, ncbi, (35, 58, 1619, 625))
    draw.text((45, 665), "SAI NSNIS PDF p.20 — ectomorph description", font=label_font, fill=(35, 35, 35))
    paste_centered(composite, sai, (35, 705, 1619, 1305))
    out = RENDER / "source-q11-composite.png"
    composite.convert("RGB").save(out, quality=95)
    return out


def make_q37_composite():
    """Keep only the S2 context and the adjacent S2.1 EPO entry."""
    marked = marked_image(
        RENDER / "q37.png",
        [(2840, 75, 3280, 285), (2460, 390, 2885, 455)],
        "marked-q37.png",
    )
    epo = marked.crop((2850, 25, 3250, 295))
    context = marked.crop((2525, 345, 2885, 490))

    W, H = 1654, 1500
    composite = Image.new("RGBA", (W, H), "white")
    draw = ImageDraw.Draw(composite)
    label_font = font(BOLD, 24)
    draw.text((45, 18), "JADCO/WADA 2026 list, PDF p.1 — S2.1 EPO entry", font=label_font, fill=(35, 35, 35))
    paste_centered(composite, epo, (35, 58, 1619, 850))
    draw.text((45, 885), "JADCO/WADA 2026 list, PDF p.1 — S2 context", font=label_font, fill=(35, 35, 35))
    paste_centered(composite, context, (35, 925, 1619, 1475))
    out = RENDER / "source-q37-composite.png"
    composite.convert("RGB").save(out, quality=95)
    return out


def make_packet_image(item):
    if item.get("composite") == "q11":
        evidence = Image.open(make_q11_composite()).convert("RGBA")
    elif item.get("composite") == "q37":
        evidence = Image.open(make_q37_composite()).convert("RGBA")
    else:
        source = marked_image(
            RENDER / item["source_image"],
            item["highlights"],
            f"marked-{item['q']}.png",
        )
        if item.get("evidence_crop"):
            evidence = source.crop(item["evidence_crop"])
        else:
            evidence = source

    W, H = 1654, 2339
    page = Image.new("RGBA", (W, H), "white")
    draw = ImageDraw.Draw(page)
    title = font(BOLD, 31)
    source_font = font(FONT, 22)
    draw.text((42, 24), f"Q{item['q']}  |  Correct option: {item['correct'].split(' - ', 1)[0]}", font=title, fill=(19, 61, 115))
    source_text = f"Source: {item['source']} — {item['locator']}"
    wrap_draw(draw, source_text, (42, 67), W - 84, source_font, fill=(45, 45, 45), spacing=3)
    draw.line((42, 126, W - 42, 126), fill=(150, 150, 150), width=2)
    paste_centered(page, evidence, (32, 145, W - 32, H - 28))
    output = RENDER / f"packet-{item['q']}.png"
    page.convert("RGB").save(output, quality=95)
    return output


if __name__ == "__main__":
    for item in ITEMS:
        make_packet_image(item)
    print(f"Prepared {len(ITEMS)} one-page objection packet images")
