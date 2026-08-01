# Project Rules & Guidelines

## Research Projects vs. Website Projects

- **Research Project Classification**: Any project whose `category` or `projectType` contains `"Research"` (e.g., `category: "Research & Behavioral Systems"` or `projectType: "Academic research"`) is classified as a research project.
- **Evidence & Claims Section ("What can—and cannot—be claimed.")**:
  - **Research Projects**: Must include the "What can—and cannot—be claimed." section (rendering available outcomes and limitations) across both `/work/[slug]` and `/research/[slug]` routes.
  - **Website / Commercial Projects**: Must NOT render the "What can—and cannot—be claimed." section or any "Evidence and limits" blocks.
- **Content & Schema Structure**: Research study definitions in both `src/content/research/` and `src/content/projects/` include `outcomes` and `limitations` frontmatter fields to populate the "What can—and cannot—be claimed." section.
- **Project Tagging Rule**: When creating or modifying project files in `src/content/projects/` or `src/content/research/`, ensure all research studies explicitly have `category` or `projectType` tagged with `"Research"` so that template logic automatically classifies them as research projects.

## Project Archiving & Zipping

- **Zipping Rule**: Whenever asked to zip, compress, or archive the project or repository, ALWAYS use `scripts/zip_project.sh` (or `npm run zip`).
- **Behavior**: The script uses `.gitignore` to exclude ignored files (e.g. `node_modules/`, `dist/`, `.astro/`, `.DS_Store`, build artifacts, secrets) and bundles only active project files into a `.zip` archive.
- **Usage**:
  - Default archive name: `bash scripts/zip_project.sh` (creates `project.zip` in root)
  - Custom output file name: `bash scripts/zip_project.sh custom-archive.zip`

## Git Workflow & Commit Rules

- **Git Commit Rule**: Whenever asked to commit changes or create a Git commit, Antigravity MUST use the `git-commit` skill or execute `bash scripts/git_commit.sh "<commit message>"`.
- **Git Push Rule**: Whenever asked to push commits to remote or push to origin, Antigravity MUST use the `git-push-origin` skill or execute `bash scripts/git_push_origin.sh`.
