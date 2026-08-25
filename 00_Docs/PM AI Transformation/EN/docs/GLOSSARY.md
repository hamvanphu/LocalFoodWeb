# PM AI Bootcamp — Unified Glossary

> **Purpose:** A single place to look up terminology used throughout the program.
> The **"Industry equivalent"** column helps PMs communicate with international partners and reference materials outside FPT.
> All other documents point here instead of maintaining their own glossary.
> **Convention:** The first time an internal term appears in a document, write it as **"Compression (= Productivity Ratio in industry)"** — afterwards just use "Compression".

---

## Governance & AI Autonomy

| Program term | Industry equivalent | Definition |
|---|---|---|
| **L0--L5** (AI Autonomy Scale) | Autonomy Levels (similar to SAE J3016 in automotive) | 6 levels of AI autonomy: L0 Observe -> L1 Draft -> L2 Recommend -> L3 Execute (bounded) -> L4 Operate workflow -> L5 Restricted. Source: FPT CASAN Bible S6. |
| **Leash A / A+** | Standard / Elevated autonomy | 2 daily operating levels derived from L0--L5: **A = L3** (safe zone, AI produces drafts); **A+ = L4** (risk zone, human approval mandatory). Not a separate framework -- same axis as L0--L5. |
| **Fail-closed gate** | Fail-closed (standard security / safety engineering term) | A gate that defaults to **closed**: if verification fails or is unavailable, block -- never "let it pass for now". |
| **BUILT-flagged -- pending approval** | Gated release / Approval gate | AI has finished building but **does not self-release**. Risky work stops at "built, awaiting human approval". |
| **Hard-stop** | Hard-stop (standard safety engineering term) | Emergency stop when specs are contradictory / ambiguous / violate constraints. AI stopping and asking = good, not an error. |
| **Rubber-stamping** | Rubber-stamping (audit / governance term) | Blindly approving AI output without actually reviewing it -- the most dangerous failure mode for an AI-native PM. |
| **Human-in-the-loop (HITL)** | Human-in-the-loop | A mechanism where a human intervenes in the AI loop to judge / approve / block. |
| **Harness** | AI Toolchain / Agent Infrastructure | The technical toolkit assembled around a model (context, tools, validation, security, orchestration). An engineering layer; PMs do not operate it directly. Note: Industry commonly uses "harness" for **test harness** (a test execution framework) -- different meaning. |

## Processes & Methods

| Term | Industry equivalent | Definition |
|---|---|---|
| **SDLC** | Software Development Life Cycle | The full lifecycle of software development. |
| **WBS** | Work Breakdown Structure (PMBOK) | A hierarchical decomposition of work into manageable units. |
| **Rolling-Wave Planning** | Rolling-Wave (PMBOK) | Incremental planning: near-term work is detailed, far-term work stays rough -- refined as it approaches. |
| **Walking Skeleton** | Walking Skeleton (Alistair Cockburn, Crystal Clear) | The thinnest possible vertical slice that runs end-to-end across all system layers. |
| **DoR** | Definition of Ready (Scrum / Agile) | The conditions that must be met before a work item enters a build. |
| **Grain** (task / feature / epic) | Work Item hierarchy | Granularity levels: task (small, ~0.5--2 days) -> feature -> epic (large). |
| **Module Map / Layer 0** | Component Diagram + Foundation Layer | A map of system modules; Layer 0 = the shared foundation (auth, data model, permissions, gateway). |
| **Foundation vs Surface** | Foundation vs Feature layer | The invisible foundation (auth, schema, gateway) must be built first; user-facing features come after. |
| **7-Beat Cycle** | Plan-Do-Check-Act extended for AI delegation | Context -> Plan -> Delegate -> Execute -> Gate -> Log -> Iterate -- the standard orchestrator loop. |

## Artifacts & Documentation

| Term | Industry equivalent | Definition |
|---|---|---|
| **SRS / SW Spec** | Software Requirements Specification (IEEE 830) | A detailed software requirements specification document. |
| **NFR** | Non-Functional Requirement | Non-functional requirements: performance, security, availability, responsiveness, etc. |
| **AC** | Acceptance Criteria | Acceptance criteria, typically written in Given/When/Then format (Gherkin). |
| **ERD** | Entity-Relationship Diagram | An entity-relationship diagram (data model). |
| **API contract** | API Contract / API Specification | An API agreement: endpoint, HTTP method, input/output, error codes. |
| **RTM** | Requirements Traceability Matrix (PMBOK / CMMI) | A traceability matrix: requirement <-> design <-> code <-> test. |
| **Dev Book** | Decision Log / ADR (Architecture Decision Records -- Michael Nygard) | A journal of "AI-was-wrong -> human-corrected" entries + autonomy level + reasoning + gate applied -- evidence that the PM UNDERSTANDS, not rubber-stamps. |

## Testing

| Term | Industry equivalent | Definition |
|---|---|---|
| **SIT** | System Integration Testing | System integration testing. |
| **UAT** | User Acceptance Testing | User acceptance testing. |

## Metrics & Telemetry

| Term | Industry equivalent | Definition |
|---|---|---|
| **Telemetry** | Telemetry / Observability Metrics | Measurements of work performed: actual hours, AI correction count, tokens, cost. |
| **Compression** | Productivity Ratio / Effort Multiplier (benchmarking) | (Traditional hours estimated for the same workload) / (Actual human hours) -- the single most important AI leverage metric. |
| **Token Efficiency** | Token Efficiency / Cost Efficiency | (Deliverable man-days equivalent) / (Tokens consumed, in millions). |
| **est -> reconcile** | Estimate-then-Reconcile (time tracking practice) | Record token/effort as estimates upfront; reconcile against actuals at the end of the period. |
| **AI Adoption** | AI Adoption Rate | (Number of tasks using AI / Total tasks) x 100%. |
| **Rework Rate** | Rework Rate | (Artifacts that required rework / Total artifacts) x 100%. |

## Program Concepts (FPT Internal)

| Term | Industry equivalent | Definition |
|---|---|---|
| **CASAN (Level 1--5)** | AI Maturity Model (similar to Gartner 5-level AI Maturity) | FPT's internal AI maturity framework: Level 1 Curious -> Level 2 Augmented -> Level 3 Standard -> Level 4 Automated -> Level 5 Native. Source: CASAN Bible S1. |
| **Customer Zero** | Dogfooding (Microsoft/Google: "eat your own dog food") | Build and use your own product before deploying it for others. Note: In the SaaS industry, "Customer Zero" sometimes refers to the first external customer -- FPT uses it to mean internal self-use. |
| **Orchestrator** | AI Coding Agent / AI IDE Agent | Using an AI tool not as a Q&A chatbot but as an orchestrator: assign a goal -> it decomposes, reads/writes files, runs commands, validates -- the human commands and judges. Applies to Claude Code, Codex, Cursor, or any AI coding agent. |
| **Comprehension Gate** | Comprehension Gate (program-specific term) | A checkpoint at each Capstone step: requires re-explaining in your own words + catching at least 1 AI error -- prevents rubber-stamping. |

---

> **Maintenance:** When adding a new term to any document, add it here as well. If the term has an industry equivalent, include it so PMs are not locked into internal vocabulary.
