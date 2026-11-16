---
guideline_id: DSN-001
name: Approved portfolio UI requirements
enforcement: mandatory
applies_to: both
priority: high
---

# UI design audit

The canonical authority is docs/ui/design.md and its component catalog. Do not repeat numerical rules in this guideline. Before design or implementation, explicitly read that file, foundations.md and the affected component specifications. Root AGENTS.md defines the required lookup sequence.

| Check | Required evidence |
| --- | --- |
| DSN-LOOKUP | Change record lists actual loaded spec paths and affected requirements |
| DSN-CATALOG | Every changed element maps to a current component contract; new elements are indexed before styling |
| DSN-TOKENS | Shared values and layers are used; scoped/unlayered overrides reconciled |
| DSN-GEOMETRY | Relevant dimensions, gap ownership, type, material and latest pathway details match the written contract |
| DSN-ACCESS | Relevant semantics, keyboard, focus, reflow, contrast and preference behavior checked |
| DSN-EVIDENCE | npm run check:ui and relevant browser/screenshot evidence; unavailable checks stated |

Fail a UI review for a missing required spec, unapproved design drift, changed locked copy, or a claimed behavior without evidence. Structural document checks cannot prove model compliance or accessibility conformance.
