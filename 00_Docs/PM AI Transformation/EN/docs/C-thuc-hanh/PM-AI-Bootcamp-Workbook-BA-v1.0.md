# BA AI Bootcamp — Workbook (BA track) v2.0

> **Companion to:** Program and the common workbook  
> **Role focus:** Business Analyst  
> **Common core:** mindset, delegation, governance, telemetry, capstone, and viva are shared with every other track. This file swaps in BA-specific exercises and outputs.  
> **Terminology:** For unified terminology, see `docs/GLOSSARY.md`.

---

## 0. Shared case study

Use the same LMS case or replace it with one of the project briefs (`PB-01` to `PB-06`).

The BA goal is not to produce elegant prose. The BA goal is to clarify intent, structure business flow, and make acceptance testable.

---

## Common rules for every BA exercise

- Use an AI coding agent as an orchestrator, not a paragraph generator.
- Keep telemetry and PM-edit evidence in every submission.
- Use hard-stop when requirement ambiguity is real.
- Score human reasoning, not polished AI output.

---

## BA-EX-01 — Elicitation and requirement review

**Goal:** draft and challenge the requirement set.

**Outputs:**

- `REQ-<CASE>.md`
- clarification question list
- at least one hard-stop
- telemetry

**Pass bar:** the learner distinguishes true stakeholder questions from AI misunderstanding and improves scope clarity.

---

## BA-EX-02 — User story and acceptance criteria

**Goal:** convert the requirement into testable stories.

**Outputs:**

- user stories
- acceptance criteria in Gherkin style
- role / use-case matrix
- telemetry

**Pass bar:** stories are INVEST enough to work with, AC is measurable, and at least one AI-generated weak AC item is corrected by the learner.

---

## BA-EX-03 — Process mapping (As-is -> To-be)

**Goal:** make workflow change visible.

**Outputs:**

- `PROCESS-<CASE>.md`
- simple swimlane or BPMN-style process summary
- highlighted pain points
- telemetry

**Pass bar:** the learner shows what changes in the process, not only what the new UI does.

---

## BA-EX-04 — Backlog grooming and prioritization

**Goal:** turn raw scope into a reasoned backlog.

**Outputs:**

- prioritized backlog
- value / effort or MoSCoW reasoning
- dependencies
- telemetry

**Pass bar:** the learner can defend why some items stay out of MVP.

---

## BA-EX-05 — Clickable prototype or business-flow prototype

**Goal:** create a mini Customer Zero from the BA angle.

**Outputs:**

- clickable or screen-based prototype
- user-flow explanation
- role journey
- telemetry and Dev Book note

**Pass bar:** the learner can walk a stakeholder through the flow and explain at least one AI-generated prototype defect they corrected.

---

## BA-EX-06 — Delegation Map from a BA point of view

**Goal:** show where AI helps business analysis and where humans must stay in charge.

**Outputs:**

- delegation map
- L0-L5 assignment
- A / A+ marks
- rationale for at least one conservative decision

**Pass bar:** sensitive requirement interpretation and acceptance-signoff work are not over-delegated.

---

## BA capability map

| Exercise | Capability emphasis |
|---|---|
| BA-EX-01 | Clarification and anti-assumption discipline |
| BA-EX-02 | Testable requirement quality |
| BA-EX-03 | Process thinking |
| BA-EX-04 | Scope control |
| BA-EX-05 | User-facing validation |
| BA-EX-06 | Safe AI delegation |

---

## Facilitator notes

- BA learners should be pushed hard on ambiguity handling.
- Acceptance criteria that only describe the happy path are incomplete.
- Prototypes count only when the learner understands the business flow behind them.
- BA work still needs telemetry and a visible PM-edit trail.

---

## Changelog

| Version | Date | Update |
|---|---|---|
| v1.0 | 2026-07-02 | First BA track workbook |
| v2.0 | 2026-08-25 | Header: shorten Program ref, tool-agnostic orchestrator note, add glossary pointer; move changelog to end |
