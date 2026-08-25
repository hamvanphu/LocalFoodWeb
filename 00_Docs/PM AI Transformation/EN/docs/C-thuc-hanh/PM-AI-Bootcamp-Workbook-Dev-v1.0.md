# Dev AI Bootcamp — Workbook (Dev track) v2.0

> **Companion to:** Program and the common workbook  
> **Role focus:** Developer  
> **Common core:** same delegation, governance, telemetry, capstone, and viva rules. This file changes the practice artifacts toward working code.  
> **Terminology:** For unified terminology, see `docs/GLOSSARY.md`.

---

## 0. Shared case study

Use the LMS case or one project brief as the role-specific coding scenario.

The developer objective is not "AI wrote code fast". The objective is "I can review, test, debug, and control AI-generated code responsibly."

---

## Common rules

- Treat AI-generated code like a PR from a fast but unreliable teammate.
- Every code exercise must include review evidence.
- Fake tests are a failure mode, not a pass.
- Telemetry and Dev Book logging are mandatory.

---

## DEV-EX-01 — Generate code from spec + review AI code

**Goal:** create code from a spec and prove human review happened.

**Outputs:**

- generated code sample
- review comments or corrected code
- telemetry

**Pass bar:** the learner catches at least one functional, structural, or safety issue in the AI-generated code.

---

## DEV-EX-02 — Test generation + fake-test detection

**Goal:** generate tests and prove they are not superficial.

**Outputs:**

- test suite
- at least one intentionally broken case
- explanation of why a fake-green test is unacceptable
- telemetry

**Pass bar:** the learner demonstrates that tests fail when they should fail.

---

## DEV-EX-03 — Debug with AI

**Goal:** use AI to accelerate debugging without losing human reasoning.

**Outputs:**

- reproduction steps
- root-cause note
- fix
- telemetry

**Pass bar:** the learner can explain the bug, not just present the patch.

---

## DEV-EX-04 — Build a small harness / agent

**Goal:** create a lightweight technical wrapper around a repeated task.

**Outputs:**

- small harness design
- gates / checks
- one controlled execution example
- telemetry

**Pass bar:** the learner shows where the harness stops and why.

---

## DEV-EX-05 — Working feature or service with green tests

**Goal:** create the Dev form of Customer Zero.

**Outputs:**

- working feature or service
- green test evidence
- Dev Book correction trail
- telemetry

**Pass bar:** the learner can demo the feature and explain at least one AI-generated mistake they corrected.

---

## DEV-EX-06 — Delegation Map + CI / gate thinking

**Goal:** decide which coding activities AI may do and where CI or human gates take over.

**Outputs:**

- delegation map
- L0-L5 labels
- A / A+ split
- gate list

**Pass bar:** sensitive changes, release-like actions, and high-impact code are not delegated past safe boundaries.

---

## Dev capability map

| Exercise | Capability emphasis |
|---|---|
| DEV-EX-01 | Review discipline |
| DEV-EX-02 | Test honesty |
| DEV-EX-03 | Debug reasoning |
| DEV-EX-04 | Safe automation |
| DEV-EX-05 | Real build outcome |
| DEV-EX-06 | CI and delegation control |

---

## Facilitator notes

- Fast code generation is not success by itself.
- Fake confidence from fake tests is one of the most dangerous dev-side failure modes.
- Review comments and fixes are stronger evidence than polished demo output.
- Telemetry is still part of the evaluation story.

---

## Changelog

| Version | Date | Update |
|---|---|---|
| v1.0 | 2026-07-02 | First Dev track workbook |
| v2.0 | 2026-08-25 | Header: shorten Program ref, add glossary pointer; move changelog to end |
