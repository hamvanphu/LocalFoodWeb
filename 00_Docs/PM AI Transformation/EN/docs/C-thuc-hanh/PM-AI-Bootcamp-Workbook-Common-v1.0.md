# PM AI Bootcamp — Workbook (Common) v2.0

> **Companion to:** `Program` (Phase 2 — Hands-on).  
> **Goal:** turn assignment guidance into **hands-on exercises learners can run immediately**.  
> **Scope:** common exercises for all PM learners before role-specific specializations.  
> **How to use:** five exercises run on **the same case study** — learners work through them as one continuous project.  
> **Operating rule:** use **an AI coding agent as a super orchestrator** through the loop `Context -> Plan -> Delegate -> Execute -> Gate -> Log -> Iterate` — getting started: `Orchestrator Guide`.  
> **Date:** 2026-08-24 · **Version:** v2.0

---

## 0. Shared case study — Leave Management System

**Context:** a 500-person company currently manages leave requests through email and Excel, which makes approvals slow and error-prone.

**Stakeholder brief (intentionally incomplete):**

> "We want an online leave request app. Managers should approve quickly on mobile. Employees need to see remaining leave days. HR needs a monthly report. We also want attendance integration. It should be done in about two months, and security should be like our other internal apps."

**Training assumption:**

- 1 PM learner
- 3 developers
- 1 QA
- 0.5 designer
- target timeline about 8 weeks

> This ambiguity is intentional — the brief is vague so learners see that AI **cannot replace** the work of clarifying intent. That is the PM's job.

---

## Common telemetry for every exercise

| Field | What to record |
|---|---|
| Tool used | model / tool name |
| Token estimate | estimated total input/output tokens |
| Real time spent | total working minutes including review |
| Iterations | how many prompt / correction loops were needed |
| Rework | whether the artifact had to be redone |
| PM-edit | at least one point where the PM corrected AI intent or output |

**Honest measurement rules:**

- time is **real human time**, not a proxy from token count,
- token numbers may start as estimates and be reconciled later,
- side work and correction loops must still be logged,
- `PM-edit` is the most valuable field because it proves judgment.

---

## Exercise structure

Each exercise contains:

- capability target,
- duration,
- input,
- execution steps,
- required submission,
- mandatory telemetry,
- rubric (0-4),
- prompt starter.

---

## EX-01 — AI writes and reviews requirements *(maps to T1 + T2)*

**Capabilities:** C1 AI Literacy · C2 Delegation · C6 Outcome.  
**Duration:** 90 minutes

**Input:** Raw brief from section 0.

**Steps:**

1. **AI drafts a structured requirement** from the brief: objective, scope (in/out), user stories, NFRs (performance / security / availability), acceptance criteria.
2. **AI self-reviews** its own draft: find **contradictions, gaps, ambiguities** and produce a **list of clarification questions** for the stakeholder.
3. **PM judges:** mark which questions truly need stakeholder input and which stem from AI misunderstanding. Correct at least one point where AI misread intent (hint: "attendance integration" — in or out of MVP scope? "security like our other apps" — the PM must make that concrete).
4. **Hard-stop reflex:** identify at least one place where the brief **contradicts itself or lacks enough information to decide** and the PM **does not let AI guess** — instead, mark it as "awaiting stakeholder clarification" (e.g., "done in about two months" **vs.** scope that includes attendance integration + data migration). AI stopping to ask is a *strength*, not a failure.
5. **Simulation: stakeholder demands additional scope.**
   Use AI to role-play a **project sponsor / client** who makes a reasonable but out-of-MVP-scope request. For example:
   - PB-01: *"We need a coupon / discount-code feature in the MVP — the launch campaign depends on it."*
   - LMS case: *"We also want an overtime-request feature built in."*
   The PM must respond **in writing** (not verbally):
   - (a) **Impact** on scope / timeline / team if the feature is added — cite the requirement document already produced.
   - (b) **Alternative proposal** (e.g., for the launch campaign, manually adjust prices — keep the MVP scope, push coupons to phase 2).
   - (c) **"Email / chat reply to the stakeholder"** — five lines or fewer, clear, professional, protecting scope while preserving the relationship.

> *The skill of "saying NO with reasons" is the gap most PMs need to close. AI simulating a difficult stakeholder fits the programme's philosophy: AI does the work, the human makes the judgment call.*

**Submission:**

- `REQ-LMS.md`: structured requirement, reviewed by the PM.
- At least five clarification questions, each labelled `[Ask stakeholder]` or `[AI got it wrong]`.
- At least one **hard-stop** marked `[AWAITING CLARIFICATION — do not let AI guess]`.
- "Email reply to stakeholder" (five lines or fewer) plus the reasoning behind it.
- Telemetry.

**Rubric (0-4):**

| Score | Description |
|---|---|
| 2 (Pass) | All requirement sections present, follows the brief, at least five valid questions, PM corrected at least one intent error |
| 3 | Questions correctly classified as real vs. AI-misunderstanding; scope in/out is clear; at least one valid hard-stop; stakeholder response includes a feasible alternative |
| 4 | Acceptance criteria are measurable and the template is reusable for other projects; email maintains an appropriate tone while protecting scope |

**Prompt starter:**
> *"You are a BA. From the following brief, write a structured requirement: Objective, Scope (in/out), User Stories (As a... I want... so that...), NFRs, Acceptance Criteria. Clearly flag anything the brief does not cover instead of making it up. Brief: [...]"* — then: *"Now play the role of a tough reviewer: list contradictions, gaps, and ambiguities in the draft above, and write clarification questions for the stakeholder."*

---

## EX-02 — AI generates WBS *(maps to T3)*

**Capabilities:** C1 · C3 Workflow Design.  
**Duration:** 60 minutes

**Input:** `REQ-LMS.md` from EX-01.

**Steps:**

1. AI breaks the scope into a **WBS** with at least two levels (Epic -> Task), including **dependencies** between tasks.
2. AI tags each task with an SDLC phase (Design / Code / Test ...).
3. PM reviews: find tasks AI **missed** (e.g., migrating legacy leave data from Excel, role-based access for managers/HR, notifications) and tasks that are **unnecessary or out of MVP scope**.

**Submission:**

- `WBS-LMS.md` (table or tree), adjusted by the PM.
- Notes on at least two tasks the PM added or removed compared to the AI draft, with reasons.
- Telemetry.

**Rubric (0-4):**

| Score | Description |
|---|---|
| 2 (Pass) | WBS covers scope, dependencies are reasonable, PM has adjusted it |
| 3 | Caught important tasks AI missed; SDLC phases are correctly assigned |
| 4 | WBS is ready for estimation and task assignment; structure is reusable |

**Prompt starter:**
> *"From the following requirement, create a two-level WBS (Epic -> Task) for a team of 3 devs + 1 QA, internal project, ~8 weeks. For each task state: SDLC phase, dependency (which task must finish first). State your assumptions. Requirement: [...]"*

---

## EX-03 — AI estimation *(maps to T4)*

**Capabilities:** C1 · C5 Telemetry & Economics.  
**Duration:** 60 minutes

**Input:** `WBS-LMS.md` from EX-02.

**Steps:**

1. AI estimates effort per task using **three-point estimation** (optimistic / likely / pessimistic) and converts to **person-days (PD)**.
2. AI states **assumptions** behind each estimate, then totals everything and adds a risk buffer.
3. PM adjusts for real team capacity (e.g., junior dev, unfamiliar tech) and **compares with the 8-week target** — conclusion: feasible, or must cut scope.
4. **Compare and trade-off (mandatory — the most important PM skill).**
   Compare total effort (likely scenario + buffer) against the timeline multiplied by team capacity.
   - **If it exceeds the target** (very likely — the exercise is designed that way): the PM **must go back and revise** `REQ-PB0X.md` and `WBS-PB0X.md` — cut scope, document what was cut and why. Submit an additional `TRADEOFF-PB0X.md` containing: (a) a comparison table "full scope vs. cut scope"; (b) a **diff** between REQ v1 -> v2 and WBS v1 -> v2 (what was dropped, what was pushed to phase 2); (c) a short justification for the stakeholder explaining why the cut was made and which business goals are affected.
   - **If it fits or has room to spare**: the PM explains why the numbers are low (which assumptions drive this?), and prepares a contingency plan in case those assumptions prove wrong.

> *This is a real iteration loop: estimate blows the budget -> cut scope -> update WBS -> update requirement. PMs do this on every project — the exercise forces the trade-off reflex: scope vs. time vs. resources.*

**Submission:**

- Estimation table (task, three-point, PD, assumptions).
- Feasibility conclusion against the target, with a proposal if it exceeds (which scope to cut).
- `TRADEOFF-PB0X.md` (if the target is exceeded): scope cut + diff REQ/WBS v1 -> v2 + stakeholder justification.
- Telemetry.

**Rubric (0-4):**

| Score | Description |
|---|---|
| 2 (Pass) | Three-point estimate exists with clear assumptions; PM adjusted for real team context |
| 3 | Total effort compared against the target, with a clear feasibility / cut-scope decision; **diff of REQ + WBS v1 -> v2 provided when scope was cut** |
| 4 | Includes sensitivity analysis (changing assumptions changes the outcome) + scope was cut while preserving core business goals; phase 2 proposal is clear |

**Prompt starter:**
> *"Estimate effort for the following WBS using three-point estimation (optimistic / likely / pessimistic) in person-days. For each task, state your assumptions. Summarize and propose a buffer. Assume team: 3 devs (2 mid-level, 1 junior), 1 QA. WBS: [...]"*

---

## EX-04 — AI risk register *(maps to T5 — required for Phase 2 graduation)*

**Capabilities:** C3 · C4 Governance & Risk.  
**Duration:** 60 minutes

**Input:** `REQ-LMS.md` + `WBS-LMS.md` + `Estimation`.

**Steps:**

1. AI generates a **risk register** with at least 10 risks: description, **Likelihood (1-5)**, **Impact (1-5)**, score = L x I, **mitigation**, owner.
2. Require AI to cover multiple categories: technical (attendance integration), schedule (tight 8-week target), data (Excel migration), and **AI-related risks** (hallucination when AI generates code/documents, leaking HR data into prompts).
3. PM prioritizes the top five and checks that mitigations are **actionable** (reject generic or hollow mitigations).
4. **Attach a control level for AI-risks:** for every risk involving *AI use* (e.g., leaking HR data, AI-generated code with bugs), record the **allowed autonomy level (L0-L5)** and the **fail-closed gate** that blocks it (e.g., "AI generates code -> must pass human review before merge; HR data -> never included in prompts"). Mitigation must be a *verifiable mechanism*, not a promise.

**Submission:**

- `RISK-LMS.md`: table with at least 10 risks, ranked, top-five highlighted.
- Column for "autonomy level + fail-closed gate" on AI-risk rows.
- Telemetry.

**Rubric (0-4):**

| Score | Description |
|---|---|
| 2 (Pass) | At least 10 risks with L x I scores + actionable mitigations |
| 3 | All categories covered including **AI risks**; hollow mitigations rejected; AI-risks have autonomy level + fail-closed gate |
| 4 | Mitigations have owners + monitoring triggers; register is usable for a real risk review |

**Prompt starter:**
> *"Generate a risk register for the LMS project (internal, 8 weeks, includes attendance integration + Excel data migration, team uses AI for code/document generation). At least 10 risks, each with: description, Likelihood 1-5, Impact 1-5, L x I score, specific mitigation, owner. Must include a category for risks arising from USING AI in delivery."*

---

## EX-05 — AI weekly report + mini dashboard *(maps to T7 + T10 — T10 required for graduation)*

**Capabilities:** C5 Telemetry & Economics · C6 Outcome.  
**Duration:** 90 minutes

**Input (simulated data for one project week — distributed with this exercise):**
> Week 3 of 8. Plan for the week: complete core module #1 + core module #2 (varies by brief — e.g., PB-01: "Product Catalogue" + "Shopping Cart"; LMS case: "Leave Request" + "Approval"). Actual: module #1 done. Module #2 delayed by one day due to business logic being more complex than expected. 3 open bugs (2 UI, 1 logic). AI assisted with CRUD code generation (saved approx. 1.5 PD). Tokens this week: ~120k. 1 new risk: third-party integration lacks good API documentation.
> **The data above is ALL there is.** There is no: revenue, conversion rate, order count, page load speed, or any other number. If the report or dashboard contains a number not on this list, AI fabricated it.

**Steps:**

1. AI writes a **weekly report**: progress (plan vs. actual), blockers, risks, **next week**, noting **AI's contribution**.
2. AI proposes a **mini dashboard** with at least five KPIs drawn from the Telemetry Framework (programme section 10): e.g., AI Adoption, Review Time, Rework Rate, Token Cost, Schedule Variance — each KPI must state its **formula + data source**.
3. PM verifies every number against the source data (AI must not fabricate) and writes one **management decision** derived from the dashboard.
4. **Catch AI fabrications — hallucination detection drill (mandatory).**
   After AI generates the weekly report + dashboard, the PM audits every number: **is there any figure NOT present in the input data?**
   - AI commonly fabricates things like: "conversion rate 3.2%", "weekly revenue reached 15M", "page load time 1.8s" — numbers **nobody provided**.
   - Mark each fabricated number: *"Figure X in section Y — not in the input data, AI-generated."*
   - Submit **at least one real hallucination finding** plus the correction (replace with "data not available" or "N/A" — do not substitute another made-up number).

> *This is a survival skill: when a PM uses AI to write a report for leadership, one fabricated number leads to a wrong decision. The correct reflex is: "where does this number come from?" — if there is no source, delete it; do not replace it with another guess.*

**Submission:**

- `WEEKLY-W3.md` (report, one page or less).
- `DASHBOARD-LMS.md`: at least five KPIs with formula + data source.
- One management decision by the PM based on the data.
- At least one hallucination finding (fabricated number + how it was corrected).
- Telemetry.

**Rubric (0-4):**

| Score | Description |
|---|---|
| 2 (Pass) | Report uses only source data; dashboard has at least five KPIs with formula + source |
| 3 | No fabricated numbers; management decision is grounded in the dashboard; caught at least one AI fabrication + corrected properly ("N/A" instead of another guess) |
| 4 | Dashboard can be reused the following week; KPIs have targets + alert thresholds; PM establishes a dashboard rule: any KPI without a verified data source displays "N/A" |

**Prompt starter:**
> *"From the following week's data, write a weekly report (one page max): progress (plan vs. actual), blockers, risks, next-week plan, AI contribution. Do NOT fabricate numbers beyond what is provided. Then propose five dashboard KPIs, each with formula + data source. Data: [...]"*

---

## EX-06 — Delegation Map + Autonomy Leash *(maps to Lab M5 — most important module)*

**Capabilities:** C2 AI Delegation · C4 Governance.  
**Duration:** 75 minutes

**Input:** `WBS-LMS.md` (EX-02) + `RISK-LMS.md` (EX-04).

**Steps:**

1. Take **at least 15 tasks** from the WBS. For each task, fill in three decision columns:
   - **Work group (five types):** AI-do / Human-do / AI-review / Human-review / AI-should-not-do.
   - **Autonomy level L0-L5:** Observe / Draft / Recommend / Execute-bounded / Operate-workflow / Restricted.
   - **Approval owner:** AI self-closes / PM spot-checks / PM personally approves.
2. **Apply the "leash" A vs. A+** *(reminder: Leash is just two operating notches on the L0-L5 scale — **A ~ L3, A+ ~ L4** — not a separate framework)*: mark which tasks run at **A** (safe zone, AI produces a draft, does not self-release) and which must be **A+** (touches HR data / access control / attendance integration -> human must approve before use). All **A+ tasks -> flagged BUILT, awaiting approval**.
3. **PM justifies:** one line of reasoning for every task at L3 or above, and identifies at least one task **intentionally kept at L1/L2** despite AI "being able to do more" (because of risk or difficulty of verification).

**Submission:**

- `DELEGATION-MAP-LMS.md`: table with at least 15 tasks x (work group, L0-L5 level, approval owner, leash A/A+, justification).
- Telemetry.

**Rubric (0-4):**

| Score | Description |
|---|---|
| 2 (Pass) | At least 15 tasks with work group + L0-L5 + approval owner; justifications are reasonable |
| 3 | A vs. A+ correctly distinguished; tasks touching data/access are all **A+ awaiting approval**; at least one task intentionally kept low despite AI capability |
| 4 | Map is operationally usable; fail-closed gates for each hazard group; reusable for other projects |

**Prompt starter:**
> *"For the following LMS project tasks, propose for each: (a) AI-do / Human-do / AI-review / Human-review / AI-should-not-do; (b) autonomy level L0-L5; (c) who should approve. Flag any task that touches HR data or access control (needs tight control). Do NOT raise the autonomy level for high-risk tasks on your own. Tasks: [...]"* -> The PM then reviews and overrides AI suggestions based on their own judgment.

---

## Rubric summary

| Score | Meaning |
|---|---|
| 0 | No submission or no real AI use |
| 1 | Very rough, weak review, obvious defects |
| 2 | **Pass** — usable result with real PM review and telemetry |
| 3 | Strong — governance and reuse are visible |
| 4 | Excellent — reusable pattern, clear ROI, teachable to others |

---

## Exercise-to-assignment-to-capability map

| Exercise | Source assignment | Week | Main capabilities | Required for graduation |
|---|---|---|---|---|
| EX-01 | T1 + T2 | W1 | C1, C2, C6 | -- |
| EX-02 | T3 | W2 | C1, C3 | -- |
| EX-03 | T4 | W2 | C1, C5 | -- |
| EX-04 | T5 | W2 | C3, C4 | Yes (T5) |
| EX-05 | T7 + T10 | W4 | C5, C6 | Yes (T10) |
| EX-06 | Lab M5 | W3 | C2, C4 | -- *(strongly recommended)* |

> These six exercises cover **6 of 10 assignments + Lab M5** and form the SDLC backbone. Remaining tasks (T6 Test Strategy, T8 Meeting Summary, T9 Retrospective) are done on real projects in Phase 3, or can be added as common exercises using this same template.

---

## Facilitator notes

- **What to grade:** do not grade "how well AI answered" — grade **PM judgment** (where the PM corrected AI, what decisions were drawn). The `PM-edit` column in telemetry is the most important piece of evidence.
- **Intentional traps in the case:** the brief is vague (EX-01), tasks like migration/access control are easy to miss (EX-02), the 8-week target is tight (EX-03), AI-risks are often forgotten (EX-04), AI is tempted to fabricate numbers (EX-05). Ask learners whether they "caught" the trap.
- **Fail criterion — watch for "rubber-stamping":** submitting AI output with **no trace of human review** (blindly signing off on AI diffs) -> maximum 1 point, regardless of how polished the content looks. This is a **more dangerous failure mode than understaffing** — the entire programme must grade to root out this habit early.
- **Showcase:** each week, 2-3 learners present their exercise + telemetry; the class challenges "where should the PM not have trusted AI."
- **Adapting for real projects:** learners may replace the LMS case with their own project while keeping the same steps + rubric.
- **Pre-built brief set:** instead of having 300 PMs all use the LMS case, use the **six detailed project briefs (with specific requirements + tech stacks)** in `Project Briefs` — assign groups by brief (PB-01 through PB-06), PMs name their files with the brief code (`REQ-PB01.md` ...). New cohorts -> PB-03 (easiest); core cohorts -> PB-06 (closest to AI topics).

---

*This workbook is the **PM track** in the multi-role Workbook set sharing the Common Core (Programme section 14). Other tracks: BA (`...-Workbook-BA-...`), SA (`...-Workbook-SA-...`), Dev (`...-Workbook-Dev-...`). PMs in regulated or domain-specific fields will have additional specialised exercises by group (outside the scope of this common training).*

> **Glossary:** see `docs/GLOSSARY.md` for the unified glossary with cross-domain mapping.

---

## Appendix — Changelog

| Version | Date | Update |
|---|---|---|
| v1.0 | 2026-06-29 | Core common workbook with five detailed exercises (EX-01 through EX-05) on a shared case study + facilitator notes. |
| v1.1 | 2026-06-30 | Added EX-06 Delegation Map (L0-L5 + Leash A/A+) for M5; telemetry adds RevenueOS discipline (real hours not token proxy + est -> reconcile); EX-01 adds **hard-stop reflex** for contradictions; EX-04 adds **autonomy level + fail-closed gate** to mitigation; facilitator notes name **rubber-stamping** risk. |
| v1.1.1 | 2026-06-30 | EX-06 step 2: clarified that **Leash A/A+ = two operating notches on the L0-L5 scale (A ~ L3, A+ ~ L4)**, not a separate framework — aligned with Programme v1.2.2. |
| v2.0 | 2026-08-24 | **Exercise enhancements:** EX-01 adds step 5 (stakeholder scope-creep simulation); EX-03 adds step 4 (mandatory compare-and-trade-off loop back to scope); EX-05 revised input data (deliberately incomplete to train hallucination detection) + adds step 4 (catch AI fabrications). Changelog moved to end of file. Glossary now points to `docs/GLOSSARY.md`. |
