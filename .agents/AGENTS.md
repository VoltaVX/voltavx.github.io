# Project Rules & Guidelines

## Research Projects vs. Website Projects

- **Research Project Classification**: Any project whose `category` or `projectType` contains `"Research"` (e.g., `category: "Research & Behavioral Systems"` or `projectType: "Academic research"`) is classified as a research project.
- **Evidence & Claims Section ("What can—and cannot—be claimed.")**:
  - **Research Projects**: Must include the "What can—and cannot—be claimed." section (rendering available outcomes and limitations) across both `/work/[slug]` and `/research/[slug]` routes.
  - **Website / Commercial Projects**: Must NOT render the "What can—and cannot—be claimed." section or any "Evidence and limits" blocks.
- **Content & Schema Structure**: Research study definitions in both `src/content/research/` and `src/content/projects/` include `outcomes` and `limitations` frontmatter fields to populate the "What can—and cannot—be claimed." section.
- **Project Tagging Rule**: When creating or modifying project files in `src/content/projects/` or `src/content/research/`, ensure all research studies explicitly have `category` or `projectType` tagged with `"Research"` so that template logic automatically classifies them as research projects.
