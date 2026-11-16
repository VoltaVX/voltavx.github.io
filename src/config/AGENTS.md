# Site configuration module

## Purpose
Own small shared public content settings.
## Owns
Site name, description, contact email, language.
## Does Not Own
Deployment origin/base, private credentials, page copy.
## Public Interface
Readonly site object in site.ts.
## Allowed Dependencies
None.
## Forbidden Dependencies
UI, tools, process state, network calls.
## Invariants
All values are public and may appear in generated HTML. No secrets.
## Change Constraints
Keep the shape stable unless scope requires migration. Replace the example email before launch.
