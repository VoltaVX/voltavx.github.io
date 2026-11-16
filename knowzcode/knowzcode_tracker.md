# KnowzCode — Verification index

Current goal, active change, and open work: .ai/state.json. This table indexes node verification, not implementation chronology.

| Status | WorkGroupID | Node ID | Label | Dependencies | Spec Link | Classification | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [VERIFIED] | C-0001 | Hosting | Static build and Pages URLs | Interface | specs/C-0001-scaffold.md | ARCHITECTURE | Build and root/repository browser checks passed; live deployment not run |
| [VERIFIED] | C-0001 | Interface | Reusable design and routes | Hosting URL helper | specs/C-0001-scaffold.md | ARCHITECTURE | Six route previews inspected; browser checks passed |
| [VERIFIED] | C-0001 | AgentContext | Minimal-Delta workflows | None | specs/C-0001-scaffold.md | ARCHITECTURE | Context checks and independent audit passed |
| [VERIFIED] | C-0001 | Verification | Behavioral and browser evidence | Hosting, Interface | specs/C-0001-scaffold.md | ARCHITECTURE | 6 unit tests, type check, 56 browser tests, independent audit passed |
| [VERIFIED] | C-0002 | GlassStyles | Glass materials and shared visual geometry | Interface | specs/C-0002-glass.md | BEHAVIOR | 54 root + 54 repository tests passed; 4 explicit CDP skips; six final views inspected |
| [VERIFIED] | C-0002 | UIGuidance | Comprehensive UI rules and migration prompt | GlassStyles | specs/C-0002-glass.md | BEHAVIOR | Root/styles contracts aligned with computed styles; independent re-review passed |
| [VERIFIED] | C-0002 | PortableStyles | Original-scaffold styles compatibility | GlassStyles, UIGuidance | specs/C-0002-glass.md | BEHAVIOR | Original archive + new styles passed build/type and 14 browser tests; ZIP parity and extracted build passed |

The dependencies column indicates verification prerequisites, not reverse source imports. Git owns implementation history; ADRs own durable decisions. Avoid adding a separate backlog when no open work exists.


| Status | WorkGroupID | Node ID | Label | Dependencies | Spec Link | Classification | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [VERIFIED] | C-0003 | UISpecification | Current portfolio authority and component catalog | Interface, AgentContext | specs/C-0003-portfolio-ui.md | ARCHITECTURE | 12 component contracts, indexed coverage and explicit agent lookup; C-0002 conflicting defaults superseded |
| [VERIFIED] | C-0003 | PortfolioStyles | Approved tokens and composition CSS | UISpecification | specs/C-0003-portfolio-ui.md | ARCHITECTURE | 36 root + 36 repository Chromium checks; actual portfolio pages remain future work |
| [VERIFIED] | C-0003 | UILookupIntegrity | Structural UI contract checks | UISpecification | specs/C-0003-portfolio-ui.md | ARCHITECTURE | 9 total unit tests; independent re-review passed; does not prove model compliance |

| [WIP] | C-0004 | Interface | Static portfolio composition and progressive work filters | Hosting URL helper, UISpecification | specs/C-0004-portfolio-site.md | BEHAVIOR | Implementation and independent source review pass; rendered QA remains OPEN |
| [WIP] | C-0004 | Hosting | Private Sites static publication | Interface | specs/C-0004-portfolio-site.md | BEHAVIOR | Registered once; static manifest and packaging ready; native Sites result owns deployment status |
| [WIP] | C-0004 | Verification | Portfolio content, base URLs and behavior tests | Interface | specs/C-0004-portfolio-site.md | BEHAVIOR | 14 unit tests, types and both static audits pass;100 browser cases unexecuted |

| [WIP] | C-0005 | ResponsiveComposition | Fluid portfolio layout and figure alignment | UISpecification, Interface | specs/C-0005-responsive.md | BEHAVIOR | Source review,14 unit tests, types and both static audits pass; rendered acceptance open |

| [WIP] | C-0006 | ExpressiveTypeFeature | Larger headings and full-height behavior card | ResponsiveComposition, UISpecification | specs/C-0006-type-behavior.md | BEHAVIOR | Source review/checks pass; actual browser/rendered acceptance open |

| [WIP] | C-0007 | ProportionalSpacing | Full-width feature and shared fluid spacing | ResponsiveComposition, UISpecification | specs/C-0007-spacing.md | BEHAVIOR | Source re-review,14 unit tests, types and both static audits pass; rendered acceptance open |

| [WIP] | C-0008 | MobileReferenceRefinements | Mobile spacing, arrows, centered controls/contact and wider behavior content | UISpecification, Interface | specs/C-0008-mobile-refinements.md | BEHAVIOR | Independent source review and static checks pass; rendered acceptance open |

| [WIP] | C-0009 | HeroCardSizing | Content-sized feature shells,75-percent hero, mobile glass sidebar/count | Interface, UISpecification | specs/C-0009-hero-card-sizing.md | BEHAVIOR | Source re-review/build/type/unit checks pass; rendered acceptance open |

| [WIP] | C-0010 | MaterialRhythm | Shared section rhythm, content callouts and mobile portrait framing | Interface, UISpecification | specs/C-0010-material-rhythm.md | BEHAVIOR | Source review,14 units, type and both build audits pass; rendered acceptance open |

| [WIP] | C-0011 | HeaderHeroReferences | Native icon menu, copy-height photo and eye/bullet discipline panel | UISpecification, Interface | specs/C-0011-header-hero.md | BEHAVIOR | Independent agents/review,14 units/types and both static audits pass; rendered acceptance open |

| [VERIFIED] | C-0012 | CurrentUIFrameworkExport | Consolidated current UI authority and portable reference source | UISpecification, Interface, AgentContext | specs/C-0012-spec-export.md | PATCH | Main+12 contracts, independent source/package review and extracted static checks; browser acceptance for prior UI changes stays open |

| [WIP] | C-0013 | CompactHeaderDiscipline | Compact mobile navigation and remove eye | UISpecification, Interface | specs/C-0013-compact-header.md | PATCH | Source checks14units/types/builds pass; browser cases unexecuted; specs/export updated |

| [WIP] | C-0015 | PageMigration | Local original portfolio routes and navigation | UISpecification, Interface | specs/C-0015-page-migration.md | BEHAVIOR |17 texts/routes/assets preserved;15 units/type/root+repo builds pass; independent review pass; targeted desktop preview only |

| [WIP] | C-0016 | DetailRhythm | Shared study diagram, card hierarchy and consistent local spacing | PageMigration, UISpecification | specs/C-0016-detail-refinement.md | BEHAVIOR |15 units/types/builds and independent source review pass;390px preview measured; full browser acceptance pending |

| [VERIFIED] | C-0017 | ReferenceTypography | Shared type/color and editorial surfaces | UISpecification | specs/C-0017-reference-type.md | PATCH |15 units/types/root+repository builds;320/390/1348 rendered spot checks; full device suite pending |
