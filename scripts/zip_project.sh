#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"
OUTPUT_FILE="${1:-project.zip}"

if [[ "$OUTPUT_FILE" != /* ]]; then
  OUTPUT_FILE="$PROJECT_ROOT/$OUTPUT_FILE"
fi

python3 - "$PROJECT_ROOT" "$OUTPUT_FILE" <<'PY'
from pathlib import Path
import sys
import zipfile

project_root = Path(sys.argv[1]).resolve()
output_file = Path(sys.argv[2]).resolve()

excluded_directories = {
    '.git', '.astro', '.debug', 'dist', 'node_modules', 'coverage',
    '.idea', '.vscode', '.netlify', '.vercel', '.wrangler', '__MACOSX',
}
excluded_names = {'.DS_Store', 'Thumbs.db', '.dev.vars'}
excluded_suffixes = ('.zip', '.tar.gz', '.tgz', '.log', '.pem', '.key', '.tsbuildinfo')

def include(path: Path) -> bool:
    relative = path.relative_to(project_root)
    if any(part in excluded_directories for part in relative.parts):
        return False
    if path == output_file or path.is_symlink() or not path.is_file():
        return False
    if path.name in excluded_names or path.name.startswith('._'):
        return False
    if path.name == '.env' or (path.name.startswith('.env.') and path.name != '.env.example'):
        return False
    if path.name.startswith('.dev.vars.'):
        return False
    return not path.name.endswith(excluded_suffixes)

files = sorted(path for path in project_root.rglob('*') if include(path))
output_file.parent.mkdir(parents=True, exist_ok=True)

with zipfile.ZipFile(output_file, 'w', zipfile.ZIP_DEFLATED, strict_timestamps=False) as archive:
    for path in files:
        info = zipfile.ZipInfo(path.relative_to(project_root).as_posix(), (1980, 1, 1, 0, 0, 0))
        info.compress_type = zipfile.ZIP_DEFLATED
        info.external_attr = (path.stat().st_mode & 0o777) << 16
        archive.writestr(info, path.read_bytes())

size_mb = output_file.stat().st_size / (1024 * 1024)
print(f"Archived {len(files)} files to '{output_file}' ({size_mb:.2f} MB)")
PY
