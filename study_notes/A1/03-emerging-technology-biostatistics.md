# A1 — Emerging Technologies & Biostatistics

## Match the tool to the question

| Tool | Main output | High-yield limitation |
| --- | --- | --- |
| GPS/LPS | Distance, speed, acceleration, high-speed running | Sampling rate, satellite/venue signal and device validity affect short bursts |
| IMU | Acceleration, angular velocity, orientation, impacts | Placement, drift and algorithm differences |
| Force plate | Ground-reaction force, impulse, rate of force development, asymmetry | Expensive; a single jump is not the whole athlete |
| Motion capture/video | Joint angles, timing, technique | Marker/occlusion or camera-angle error; 2-D can hide 3-D motion |
| HR/HRV | Cardiovascular response/autonomic proxy | Strongly affected by sleep, illness, posture, breathing and measurement conditions |
| EMG | Electrical muscle activity timing/amplitude proxy | Crosstalk, electrode placement and normalisation matter |
| Athlete-management platform | Merges wellness, load, injury and availability data | Garbage in; privacy/access control; dashboards can create false certainty |
| AI/ML | Classification, prediction, pattern detection | Needs representative data, external validation and explainability |

## Descriptive statistics

```text
Mean = Σx / n                         Range = maximum − minimum
Sample variance s² = Σ(x − x̄)²/(n−1)  SD = √variance
CV% = SD/mean × 100                  z = (x − μ)/σ
```

- **Mean:** sensitive to outliers; useful for roughly symmetric data.
- **Median:** robust to skew/outliers; report IQR with it.
- **SD:** spread around the mean; not the same as standard error.
- **CI:** plausible range for a population estimate, not the probability that a fixed parameter is inside the interval.

## Inferential/statistical literacy

| Concept | What it actually says |
| --- | --- |
| p-value | How unusual the data would be under the null model; not the probability the hypothesis is true |
| 95% CI | Precision/uncertainty around an estimate; check whether it crosses a meaningful threshold |
| Effect size | Magnitude of a difference/relationship; pair with uncertainty and context |
| Type I error | False positive; reject a true null |
| Type II error | False negative; miss a real effect |
| Correlation | Association, not causation |
| Practical significance | Whether the change matters to the athlete, not merely whether p < 0.05 |

## Choosing a visual

```text
Time series → line chart       Group comparison → dot/box plot
Distribution → histogram       Relationship → scatter plot
Composition → stacked bar       Agreement → Bland–Altman plot
```

## Data-quality checklist

```text
Define variable → check units → inspect missingness/outliers
→ verify sensor/protocol → pre-specify analysis → analyse
→ show uncertainty → explain practical decision → protect privacy
```

**Do not confuse:** accuracy (closeness to truth), precision (repeatability), validity (construct/criterion meaning), and reliability (consistency).

## Memory tactics

- **GPS travels; IMU turns; force plate pushes; camera watches; EMG fires.**
- **M-M-S-C:** Mean/median for centre, SD/IQR for spread, CI for uncertainty.
- When you see “significant,” ask **“How big? How certain? Does it matter?”**

## Self-test

1. Which sensor is most directly suited to measuring impulse?
2. When would median/IQR be preferable to mean/SD?
3. Why is a model with excellent training accuracy not automatically useful in a new team?
4. What is the difference between statistical and practical significance?

## Sources

`sai-notification-2026`; `nsca-essentials-5`; `gps-validity-scott-2016`; `wearable-inertial-camomilla-2018`; `wearable-athlete-sensors-seshadri-2019`; `world-physiotherapy-ebp-2023`.
