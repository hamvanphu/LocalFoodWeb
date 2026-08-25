# PM AI Bootcamp — Start Here

> You have just received the course materials. This file guides you **step by step** from receiving the materials to submitting your first assignment -- nothing missed, nothing extra, no confusion.
> **Principle:** Do not try to read everything before getting started. Read exactly what you need -> **do it immediately** -> look up more when you get stuck. Understanding comes from doing, not from documents.

---

## How the course works -- AI is the Coach, documents are the harness

> **Core principle:** This material is written primarily **for AI to read**, with humans reading along. The AI will learn the course requirements and **replace the instructor** in guiding you throughout your work.

### Working with AI

| Step | What you do | What the AI does |
|:---:|---|---|
| **1** | Install an **AI coding agent** (Claude Code, Codex, Cursor, etc.) | -- |
| **2** | Point the AI to the **curriculum folder**, ask it to learn | AI reads all `.md` files, absorbs the course requirements |
| **3** | Share **your ideas / solution approach** | AI analyzes, researches, brainstorms, builds detailed requirements |
| **4** | Review & judge the output | AI builds documents: Requirement -> WBS -> Architecture -> RTM -> SIT -> UAT |
| **5** | Give the command to implement | AI codes / prototypes / mocks (depending on Tier) |
| **6** | **Accept or reject** -- point out what is not up to standard | AI revises based on feedback |
| **7** | Repeat steps 3--6 until the requirements are met | -- |

**Sample prompt to get started** (paste into your AI coding agent after pointing it to the folder):

```
Learn the content and requirements of this course (skip PDF files to save tokens).
```

> **Why do we call it a "harness"?**
> The curriculum is a **constraining process** (harness) for the AI to follow. When the AI follows the process, it produces documents (REQ, WBS, RTM, SIT, UAT, etc.). These documents in turn become the **business harness** and **technical harness** -- ensuring the AI stays on track and does not go off course. You do not need to read the entire curriculum -- **the AI reads it for you**; you only need to judge and make decisions.

---

## Onboarding checklist -- 7 first steps

Follow in order. Each step clearly states **what to do**, **how long it takes**, and **what the outcome should be**.

### Step 1 -- Install tools (~20 minutes)

The course uses an **AI coding agent** as the primary tool throughout (Claude Code, Codex, Cursor, or equivalent).

| Task | Details |
|---|---|
| **Install an AI coding agent** | Follow the Coach's instructions at the kick-off session. If using Claude Code: install the CLI or IDE extension. |
| **Create a working directory** | Create one folder for the entire course, e.g.: `PM-AI-Bootcamp/PB-01/` (replace PB-01 with your project code). |
| **Verify it works** | Open terminal / IDE -> type a test command -> AI responds -> OK. If there is an error: ask the Coach immediately, **do not wait until the next day**. |

> Not installed yet? That is fine -- the kick-off session includes setup guidance. But installing beforehand saves time.

### Step 2 -- Attend the Kick-off (1 hour, week 1)

| Item | Content | What you need to do |
|---|---|---|
| **Kick-off session** | Course overview, AI Mindset intro, CASAN self-positioning, receive your project brief (PB-01 to PB-06 or a real project) | Listen, ask questions, take notes. Commit to "Customer Zero". |

**By end of session:** you must have your **project code** (e.g., PB-01) and **team assignment** (if applicable).

> **After the kick-off you work independently.** Each week there is a **2-hour clinic** -- volunteer to present your work and learn from peers. There is no separate showcase; the clinic IS the presentation and learning session.

### Step 3 -- Read 2 foundational documents (~30 minutes)

Read **exactly 2 files** -- nothing else at this stage:

| # | What to read | Time | Tip |
|---|---|---|---|
| 1 | **Operating Model** (1 page) | 10 min | **Print it out and stick it next to your screen.** This is the "multiplication table" of the course: L0--L5, Leash A/A+, 3 governance mechanisms. |
| 2 | **Orchestrator Guide -- only S0 and S1--S2** | 20 min | Understand "what an orchestrator is" + the 7-Beat Cycle. **STOP at S2** -- S3 onward is for reference when needed, do not read ahead. |

> **Most common mistake:** Trying to read the entire Program (15 sections, 700+ lines) before doing anything -> forget everything, waste time. The Program is a reference document -- the Coach will introduce it during the live session. **Look things up when needed**; do not read it end to end.

### Step 4 -- Read your project brief + complete EX-01 (~90 minutes)

| Task | File | Time |
|---|---|---|
| Read the project brief (only your project) | `docs/C-thuc-hanh/...-ProjectBriefs-...` -> find your PB code | 15 min |
| Open **Workbook Common -- EX-01** and follow step by step | `docs/C-thuc-hanh/...-Workbook-Common-...` | 60--75 min |

**EX-01 consists of 5 steps:** AI generates requirements -> AI self-reviews -> PM judges -> hard-stop -> **stakeholder simulation demanding more scope** (new step -- practices the skill of "saying NO with reasoning").

**Your first deliverable:** `REQ-PB0X.md` (replace X with your project code).

### Step 5 -- Submit your work + record telemetry

| Task | Details |
|---|---|
| **Use standard file naming** | Follow the pattern: `REQ-PB01.md`, `WBS-PB01.md`, `RISK-PB01.md`, `DELEGATION-MAP-PB01.md`, etc. Replace `PB01` with your project code. |
| **Record telemetry** at the end of each assignment | Required fields: tool used, tokens (est), actual time (hours at keyboard), number of iterations, rework, **PM-edit** (number of places PM corrected the AI -- the most important column). |
| **Submit per Coach's instructions** | Typically: push to the team repo or submit via the shared channel. The Coach will announce specifics. |

> **PM-edit** = the number of times you corrected the AI's output. This is evidence that you UNDERSTAND rather than rubber-stamp. PM-edit = 0 -> the Coach will probe further.

### Step 6 -- Continue with EX-02 through EX-06 (Weeks 1--3, self-paced)

Continue the **Workbook Common** in order:

```
EX-01 Requirement  (done)
  |
EX-02 WBS
  |
EX-03 Estimation -> New step: mandatory trade-off
       (estimate exceeds threshold -> go back and cut scope -> update REQ + WBS)
  |
EX-04 Risk Register
  |
EX-06 Delegation Map + Leash
  |
EX-05 Weekly Report + Dashboard -> New step: catch the AI fabricating numbers
       (input data is intentionally incomplete -- the AI will fabricate; the PM must catch it)
```

**Each week:** 2-hour clinic -- volunteer to present your work and learn from peers.

### Step 7 -- Enter Capstone (Weeks 4--5)

| Task | Details |
|---|---|
| Read the **Capstone Playbook** | 11 steps from project brief -> running system -> viva. **This is the main document from here on.** |
| Choose your **Tier** | **Tier 1 (Full-stack):** working code -- for PMs with a technical background. **Tier 2 (PM-stack):** prototype + API mock + schema + test scenarios -- for pure management PMs. Both tiers qualify for Certified. |
| Maintain your **Dev Book** in parallel | Every time the AI is wrong -> you correct it: log it. An empty Dev Book = rubber-stamping = not yet passing. |

---

## When you get stuck -- who to ask, where to go

| What is blocking you | Where to ask |
|---|---|
| **Tool installation error / AI not running** | Ask the Coach or the technical support channel (announced by the Coach at the kick-off) |
| **Do not understand the assignment requirements** | Re-read the Workbook Common -- each assignment has a **sample prompt** + **rubric** + **common pitfalls**. Still unclear -> ask at the weekly 2-hour clinic. |
| **Do not understand a term** | Look it up in `docs/GLOSSARY.md` -- includes a column mapping to international industry terms |
| **AI gives wrong / unexpected answers** | **That is normal** -- the program is designed so you catch AI errors. Log it in your Dev Book; do not panic. |
| **Not sure which L0--L5 level / Leash to assign** | Open the Operating Model (the 1-page printout) -> read tables 1 + 2 -> answer the 4 questions in the compass section |
| **Estimate exceeds threshold, not sure what to cut** | That is exactly the lesson in EX-03 -- see the trade-off guide in the Workbook. Cutting scope is a skill, not a failure. |

---

## 5 most common mistakes (avoid from the start)

1. **Reading all documents before starting** -> lose 2 days, forget 80%. Read exactly 2 files in Step 3 then START IMMEDIATELY.
2. **Rubber-stamping AI output** -> submitting the AI's raw output without any edits, PM-edit = 0. The Coach will catch this instantly during the viva.
3. **Not logging the Dev Book immediately** -> writing it up later = fabricating. Log it the moment the AI errs; do not wait.
4. **Not recording telemetry** -> missing telemetry = incomplete assignment. Record it alongside the assignment, not after.
5. **Afraid to use AI because it might be wrong** -> AI being wrong = learning opportunity. The program grades **your judgment**, not "how well the AI answers".

---

## Quick reference lookup -- what to find where

| What you need | Where to find it |
|---|---|
| KPI formulas | Program S10 |
| Grading rubric | Program S7 |
| L0--L5 scale / Leash A/A+ | Operating Model or Program S4 (M5) |
| Terminology / industry mapping | `docs/GLOSSARY.md` |
| Sample prompts | Orchestrator Guide S8 |
| Pocket checklist | Orchestrator Guide S10 |
| Graduation criteria | Program S9 (3 hard gates) |
| Project briefs | `docs/C-thuc-hanh/...-ProjectBriefs-...` |

---

## Document map

```
                          +---------------------+
                          |   START-HERE.md      |  <- You are here
                          |   (onboard + what    |
                          |    to read)           |
                          +----------+-----------+
                                     |
              +----------------------+----------------------+
              v                      v                      v
   +------------------+  +-----------------+  +------------------+
   | Operating Model  |  | Orchestrator    |  | GLOSSARY.md      |
   | (1 page, print)  |  | Guide (S0-S2)  |  | (look up as      |
   |                  |  |                 |  |  needed)          |
   +--------+---------+  +--------+--------+  +------------------+
            |                     |
            +----------+----------+
                       v
            +------------------+
            | Project Brief    |  <- Your team's brief (PB-01...PB-06)
            | (pick 1 brief)   |
            +--------+---------+
                     v
            +------------------+
            | Workbook Common  |  <- 6 exercises (EX-01 to EX-06)
            | (follow step     |
            |  by step)        |
            +--------+---------+
                     v
            +------------------+
            | Capstone         |  <- 11 steps to build the system
            | Playbook         |     Tier 1 or Tier 2
            +--------+---------+
                     v
                   VIVA
```

## No need to read (unless curious or you are a Coach/leader)

- **Changelog** at the end of each file -- for program maintainers.
- **Program S11--S14** -- 4-wave roadmap, operations, budget: intended for Coaches/leaders.
- **The full Program** -- too long for a first read; use the quick reference lookup table above.

---

*PM AI Bootcamp v2.0 -- START-HERE -- 2026-08-25 -- Open this file first; follow step by step.*
