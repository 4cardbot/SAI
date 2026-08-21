# A1 — Data Interpretation & Applied Analytics

## The performance-analyst loop

```text
Question → baseline → collect consistently → clean → visualise
        → interpret with uncertainty → communicate → intervene → re-test
```

The output is not a dashboard; it is a **defensible decision**.

## Useful calculations

```text
Absolute change = post − pre
% change = (post − pre) / pre × 100
Training monotony = weekly mean daily load / standard deviation of daily load
Training strain = weekly load × monotony
Session load = session duration (min) × rating of perceived exertion
Limb symmetry index (LSI) = involved / uninvolved × 100
```

Use acute:chronic workload ratios cautiously. They are summaries of load history, not a universal injury threshold or a substitute for athlete context.

## Read a performance profile

```text
                         ↑ strength
             limiter?    │      strength
                         │      /\
         recovery  ◀─────┼─────/  \─────▶ speed
                         │    /    \
                         │   /______\
                         ↓ availability / health
```

For each domain record: **current level, target, confidence in measurement, trend, limiting factor, action and review date**. A low score is not automatically the limiter; a high-impact, modifiable deficit is more actionable.

## Longitudinal interpretation

- Compare like with like: same test, protocol, timing, environment and athlete state.
- Plot individual data, not only team averages; averages can hide responders and non-responders.
- Separate **signal** from **noise** using reliability, measurement error, the minimum detectable change and repeated observations.
- Mark illness, travel, menstrual-cycle context where voluntarily and appropriately shared, injury and major training changes on the timeline.
- Use thresholds as prompts for review, not as automatic diagnoses.

## Analytics decisions

| Pattern | First question | Sensible action |
| --- | --- | --- |
| Performance down, wellness normal | Test error? fatigue from unrecorded load? | Recheck protocol and training exposure |
| Performance down, wellness down | Recovery/illness/travel? | Reduce or modify load; screen clinically |
| One sensor abnormal | Device/placement/algorithm? | Cross-check with another measure |
| Group average stable, athlete variable | Who is hidden by the mean? | Individualise monitoring |
| Strong correlation | Is the relationship causal and useful? | Examine timing, confounding and intervention evidence |

## Communication template

**Finding → confidence → performance meaning → recommendation → review point.**

Example: “Repeated-sprint time is 4% slower than the athlete’s reliable baseline across two sessions; sleep and recent high-speed volume are also reduced. Treat this as a recovery flag, modify today’s high-speed exposure, and reassess after recovery.”

## Easy ways to remember it

- For every result, work through five plain questions: **What is the context? Am I comparing like with like? Could this be measurement error? What action follows? When will I check again?**
- Every chart must answer: **What changed? Compared with what? How sure are we? What will we do?**

## Self-test

1. Calculate session load for 60 minutes at a rating of perceived exertion of 7.
2. Why is one abnormal wearable value insufficient for a training decision?
3. What fields belong in a performance profile besides the score?
4. Why should an acute:chronic ratio never be treated as a diagnosis?

## Sources

`sai-notification-2026`; `nsca-essentials-5`; `ioc-load-illness-2016`; `ioc-load-management-consensus-2016`; `gps-validity-scott-2016`; `world-physiotherapy-ebp-2023`.
