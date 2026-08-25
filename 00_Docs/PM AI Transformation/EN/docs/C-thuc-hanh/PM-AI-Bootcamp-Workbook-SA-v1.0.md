# SA AI Bootcamp — Workbook (SA track) v2.0

> **Companion to:** Program and the common workbook  
> **Role focus:** Solution Architect  
> **Common core:** delegation, governance, telemetry, capstone, and viva remain shared. This workbook changes the role-specific artifacts.  
> **Terminology:** For unified terminology, see `docs/GLOSSARY.md`.

---

## 0. Shared case study

Use the LMS case or replace it with one of the six project briefs.

The SA objective is not to produce pretty diagrams. It is to make trade-offs explicit and create an architecture that supports a real vertical slice.

---

## Common rules

- Use an AI coding agent to orchestrate architectural work, not just describe it.
- Keep a visible line between assumptions, decisions, and open risks.
- Log telemetry and human corrections.
- Hard-stop when architecture depends on unresolved business or security decisions.

---

## SA-EX-01 — Architecture options and ADR

**Goal:** compare architectural options and record the decision.

**Outputs:**

- at least two architecture options
- trade-off analysis
- one ADR
- telemetry

**Pass bar:** the learner can explain why the chosen path is better for the brief, not just why it is familiar.

---

## SA-EX-02 — Tech stack selection with criteria

**Goal:** choose technology by fit, not habit.

**Outputs:**

- tech stack matrix
- evaluation criteria
- rationale and risks
- telemetry

**Pass bar:** the learner corrects at least one AI suggestion that is misaligned with the brief or environment.

---

## SA-EX-03 — NFR and architecture response

**Goal:** connect non-functional requirements to structural choices.

**Outputs:**

- NFR table
- architecture response per NFR
- measurable acceptance signals
- telemetry

**Pass bar:** security, performance, availability, and traceability are all covered concretely.

---

## SA-EX-04 — Threat model + design-first / four-lens review

**Goal:** review the system before build through architecture, requirement, test, and acceptance lenses.

**Outputs:**

- simple STRIDE or equivalent threat model
- design-first checklist
- four-lens notes
- telemetry

**Pass bar:** at least one security or control problem is caught before implementation.

---

## SA-EX-05 — Real architectural vertical slice

**Goal:** create the SA form of Customer Zero.

**Outputs:**

- container or component layout for the slice
- API contract
- data model subset
- a working or runnable skeleton
- Dev Book notes

**Pass bar:** the learner can point to the real boundaries of the slice and defend why they are enough for MVP-first learning.

---

## SA-EX-06 — Delegation Map from an architecture point of view

**Goal:** define which architectural tasks AI may support and which still need human control.

**Outputs:**

- delegation map
- L0-L5 assignment
- A / A+ split
- rationale for high-risk design zones

**Pass bar:** security, permissions, data sensitivity, and irreversible structural changes are not over-delegated.

---

## SA capability map

| Exercise | Capability emphasis |
|---|---|
| SA-EX-01 | Trade-off judgment |
| SA-EX-02 | Stack fit |
| SA-EX-03 | NFR discipline |
| SA-EX-04 | Early risk discovery |
| SA-EX-05 | Vertical slice realism |
| SA-EX-06 | Safe delegation |

---

## Facilitator notes

- The architecture is only useful if it survives real build work.
- Good SA work makes trade-offs visible, not hidden.
- A beautiful diagram with no risk model is weak output.
- Learners still need telemetry and concrete AI correction evidence.

---

## Changelog

| Version | Date | Update |
|---|---|---|
| v1.0 | 2026-07-02 | First SA track workbook |
| v2.0 | 2026-08-25 | Header: shorten Program ref, tool-agnostic orchestrator note, add glossary pointer; move changelog to end |
