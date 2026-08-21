# A1 — Emerging Technologies & Biostatistics

## Match the tool to the question

| Tool | Main output | High-yield limitation |
| --- | --- | --- |
| Global positioning or local positioning system (GPS/LPS) | Distance, speed, acceleration, high-speed running | Sampling rate, satellite/venue signal and device validity affect short bursts |
| Inertial measurement unit (IMU) | Acceleration, angular velocity, orientation, impacts | Placement, drift and algorithm differences |
| Force plate | Ground-reaction force, impulse, rate of force development, asymmetry | Expensive; a single jump is not the whole athlete |
| Motion capture/video | Joint angles, timing, technique | Marker/occlusion or camera-angle error; 2-D can hide 3-D motion |
| Heart rate and heart-rate variability (HR/HRV) | Cardiovascular response/autonomic proxy | Strongly affected by sleep, illness, posture, breathing and measurement conditions |
| Electromyography (EMG) | Electrical muscle activity timing/amplitude proxy | Crosstalk, electrode placement and normalisation matter |
| Athlete-management platform | Merges wellness, load, injury and availability data | Garbage in; privacy/access control; dashboards can create false certainty |
| Artificial intelligence and machine learning (AI/ML) | Classification, prediction, pattern detection | Needs representative data, external validation and explainability |

## Descriptive statistics

```text
Mean = Σx / n                         Range = maximum − minimum
Sample variance = Σ(x − mean)²/(n−1)  Standard deviation (SD) = √variance
Coefficient of variation (CV%) = SD/mean × 100
Standard score (z) = (x − reference mean) / reference SD
```

- **Mean:** sensitive to outliers; useful for roughly symmetric data.
- **Median:** robust to skew/outliers; report the interquartile range (IQR) with it.
- **Standard deviation:** spread around the mean; not the same as standard error.
- **Confidence interval (CI):** plausible range for a population estimate, not the probability that a fixed parameter is inside the interval.

## Inferential/statistical literacy

| Concept | What it actually says |
| --- | --- |
| p-value | How unusual the data would be under the null model; not the probability the hypothesis is true |
| 95% confidence interval (CI) | Precision/uncertainty around an estimate; check whether it crosses a meaningful threshold |
| Effect size | Magnitude of a difference/relationship; pair with uncertainty and context |
| Type I error | False positive; reject a true null |
| Type II error | False negative; miss a real effect |
| Correlation | Association, not causation |
| Practical significance | Whether the change matters to the athlete, not merely whether p < 0.05 |

## Choosing a visual

| If you want to show… | Use… |
| --- | --- |
| Change over time | A line chart |
| Differences between groups | A dot plot or box plot |
| How values are distributed | A histogram |
| The relationship between two variables | A scatter plot |
| Parts that make up a whole | A stacked bar chart |
| Agreement between two measurement methods | A Bland–Altman plot |

## Data-quality checklist

For data quality, follow this checklist: **define the variable, check the
units, inspect missing values and unusual values, verify the sensor and test
protocol, decide the analysis before looking for a preferred result, show the
uncertainty, explain the practical decision, and protect privacy.**

**Do not confuse:** accuracy (closeness to truth), precision (repeatability), validity (construct/criterion meaning), and reliability (consistency).

## Easy ways to remember it

- Match the tool to its job: **positioning systems track travel, inertial units track movement, force plates measure pushes, cameras show angles, and electromyography shows muscle electrical activity.**
- For statistics, remember three questions: **Where is the centre? How spread out are the values? How uncertain is the estimate?**
- When you see “statistically significant,” immediately ask: **How large is the change? How certain is it? Does it matter to this athlete?**

## Self-test

1. Which sensor is most directly suited to measuring impulse?
2. When would median/IQR be preferable to mean/SD?
3. Why is a model with excellent training accuracy not automatically useful in a new team?
4. What is the difference between statistical and practical significance?

## Sources

`sai-notification-2026`; `nsca-essentials-5`; `gps-validity-scott-2016`; `wearable-inertial-camomilla-2018`; `wearable-athlete-sensors-seshadri-2019`; `world-physiotherapy-ebp-2023`.
