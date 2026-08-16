# Technology and biostatistics source note

The official notification was used for the A1 scope: Annexure A identifies “New & Emerging Technologies in Sports Science” and “Biostatistics & Data Analysis,” including wearables, GPS/IMU/force plates/motion capture/video, AI/ML, athlete-management platforms, ethics/privacy, descriptive and inferential statistics, variability, effect size, and evidence-based decisions. The notification sample questions were used for concise conceptual/application MCQ style.

The supplied `Basic Biomechanics.pdf` and `Kinesiology of the Musculoskeletal System.pdf` informed the force, impulse, kinematics, camera-analysis, and measurement framing. Existing catalog IDs used in the JSON include `sai-notification-2026`, `acsm-getp-12`, `ioc-load-illness-2016`, `neumann-kinesiology`, and `world-physiotherapy-ebp-2023`. The current granular mappings additionally use `wearable-athlete-sensors-seshadri-2019`, `gps-validity-scott-2016`, `scikit-learn-supervised-learning`, `nist-ai-rmf-2023`, `unesco-ai-ethics-2021`, `nist-sematech-statistics`, and `nakagawa-cuthill-effect-size-2007`.

High-trust comparators consulted for relevance and interpretation:

- GPS validity and reliability review: https://pubmed.ncbi.nlm.nih.gov/26439776/
- Wearable inertial-sensor review: https://pubmed.ncbi.nlm.nih.gov/29543747/
- NIST/SEMATECH e-Handbook of Statistical Methods: https://www.itl.nist.gov/div898/handbook/index2.htm
- Effect size and confidence-interval guidance for biology: https://pubmed.ncbi.nlm.nih.gov/17944619/
- UNESCO Recommendation on the Ethics of Artificial Intelligence: https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence

The earlier statement that no new source IDs were required is historical. The retained file now uses the granular IDs listed above, each of which is registered in `src/data/sourceCatalog.ts` with an inspected URL and locator.
