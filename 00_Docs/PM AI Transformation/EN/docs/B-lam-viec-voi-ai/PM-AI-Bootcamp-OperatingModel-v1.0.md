# AI-Native PM — Operating Model (one-page handout)

> **When to use:** keep it beside your screen and open it every time you delegate work to AI. It answers one question: *"How far may AI go on this task, who removes the lock, and which gate blocks unsafe output?"*  
> Source basis: PM-AI-Bootcamp Program v2.0 · FPT CASAN Bible §6 (delegation ladder) + §20.3 (anti-patterns).  
> Language rule: humans **keep the goal and accountability**, AI is **delegated execution power**.  
> **Terminology:** for the full unified glossary with industry-standard mapping, see `docs/GLOSSARY.md`.

---

## 1. AI delegation ladder — L0 to L5 *(comparable to SAE J3016 autonomy levels in automotive)*

| Level | Name | What AI may do | Who decides |
|---|---|---|---|
| **L0** | Observe | Observe or summarize, **without changing anything** | — |
| **L1** | Draft | Produce a draft, **100% human approval required** | Human |
| **L2** | Recommend | Propose options and reasoning | Human |
| **L3** | Execute (bounded, low risk) | Execute a low-risk task within clear boundaries | AI runs, human **spot-checks** |
| **L4** | Operate workflow | Run a bounded workflow with barriers, audit, and exception handling | AI closes the "green path", human approves **exceptions / hazards** |
| **L5** | Restricted / high risk | High autonomy in complex zones | **Intentionally NOT granted** |

**Assignment rule:** read-only work can live safely at L0-L2. Anything that **writes, changes systems, affects permissions, or touches sensitive data** should stop at L3 at most, and hazard zones must move to controlled L4. Never jump to L5.

---

## 2. Autonomy leash — A and A+

> **Leash A / A+ are not a new framework.** They are the two everyday operating cuts of the L0-L5 ladder above.

| Leash | Approx. level | Use when | How far AI may go | Can AI mark it done? |
|---|---|---|---|---|
| **A** | **≈ L3** | Safe-zone work, **no hazard** | Code + test + verify up to a draft / dry-run PR | ✅ Only if the verification gate is green |
| **A+** | **≈ L4** | Work that touches **higher risk**: security, roles, release, sensitive data | Same as A **plus** mandatory real security gate and explicit hazard permission | ✅ Only if the security gate is green |
| **(L5)** | L5 | Very complex or very high-risk work | **Not granted** | ❌ Always waits for a human |

### 3 hard rules

1. AI **does not self-push, self-merge, or self-release**. Everything stops at a draft pending approval.
2. AI **does not touch secrets or credentials** (`.env`, tokens, customer secrets, internal keys).
3. While blocked by **hard-stop** or pending approval, AI **must not mark the task as done**.

---

## 3. Governance mechanisms

| Mechanism | Principle | What the PM does |
|---|---|---|
| **Fail-closed gate** *(standard security/safety engineering term)* | AI output is usable only when the automatic gate is **green**. *If it cannot be verified, it is blocked by default.* | Define the minimum gate for important artifacts: traceable, reviewable, evidence-backed. If proof is missing, it is not usable yet. |
| **Built-flagged, waiting for approval** | AI may finish the work, but it **does not release it**. High-risk work stops at *built and green, waiting for a human decision*. | Separate *"AI finished building"* from *"approved for real use"*. Human owners explicitly approve hazard zones. |
| **Hard-stop on contradiction** *(standard safety engineering term)* | If the spec is contradictory or unclear, AI must **stop and surface the issue**, never guess silently. | Treat *"AI stopped and asked"* as a **good signal**, not a failure. The PM resolves the conflict before reopening the path. |

**Traceability rule:** every important requirement should be traceable across **requirement ↔ work item ↔ test**. If you touch the requirement, you review the traceability chain again.

---

## 4. Four questions before pressing "run"

1. **How much impact does this task have?** Read-only, draft-only, or write access to a real system?
2. **Which level should it be?** L0-L5, and therefore leash A or A+?
3. **Which fail-closed gate protects the output?**
4. **Who must personally approve the hazard part before release?**

> **Red-line reminder:** do not rubber-stamp *(standard audit/governance term)*. The program scores **human judgment**, not how smooth AI output looks.

---

> ⚠️ **Do not confuse Leash with Harness.**  
> *Leash / L0-L5* = **autonomy**: how far AI may run on its own.  
> *Harness* = the **technical rig around the model**: context, tools, verification, security, agent ops, orchestration.  
> Horse-and-cart analogy: **Harness = the equipment**, **Leash = how far you allow the horse to move**.

---

For the full unified glossary with industry-standard mapping, see `docs/GLOSSARY.md`.

---
*PM-AI-Bootcamp v2.0 — Operating Model 1-page · 2026-08-24 · Handout for Phase 2 (M5 + M6).*
