#!/usr/bin/env bash
# Script to zip up the project excluding files established in .gitignore

set -e

# Change to the repository root directory
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$REPO_ROOT"

OUTPUT_FILE="${1:-project.zip}"

python3 - "$OUTPUT_FILE" << 'EOF'
import os
import sys
import subprocess
import zipfile

output_filename = sys.argv[1]

# 1. Candidate files: tracked files + untracked non-ignored files
files_raw = subprocess.check_output(
    ["git", "ls-files", "-co", "--exclude-standard"], text=True
).splitlines()

# 2. Filter using git check-ignore --no-index to respect .gitignore
proc = subprocess.Popen(
    ["git", "check-ignore", "--stdin", "--no-index"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    text=True
)
ignored_raw, _ = proc.communicate(input="\n".join(files_raw))
ignored_set = set(ignored_raw.splitlines())

# 3. Exclude ignored files, existing zip files, and directories
files_to_zip = [
    f for f in files_raw
    if f not in ignored_set and not f.endswith(".zip") and f != output_filename and os.path.isfile(f)
]

out_path = os.path.abspath(output_filename)

with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as zf:
    for f in files_to_zip:
        zf.write(f, f)

size_mb = os.path.getsize(out_path) / (1024 * 1024)
print(f"Successfully zipped {len(files_to_zip)} files to '{out_path}' ({size_mb:.2f} MB)")
EOF
