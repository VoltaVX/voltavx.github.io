#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
if git -C "$SCRIPT_DIR" rev-parse --show-toplevel >/dev/null 2>&1; then
  PROJECT_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
elif git -C "$SCRIPT_DIR/.." rev-parse --show-toplevel >/dev/null 2>&1; then
  PROJECT_ROOT="$(git -C "$SCRIPT_DIR/.." rev-parse --show-toplevel)"
else
  echo "Error: this script must be stored in the repository root or its scripts directory." >&2
  exit 1
fi

cd "$PROJECT_ROOT"

branch="$(git branch --show-current)"
if [[ -z "$branch" ]]; then
  echo "Error: refusing to push from a detached HEAD." >&2
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Error: Git remote 'origin' is not configured." >&2
  exit 1
fi

if [[ -n "$(git diff --name-only --diff-filter=U)" ]]; then
  echo "Error: resolve merge conflicts before pushing." >&2
  exit 1
fi

echo "Pushing current branch '$branch' to origin without force..."
git push --set-upstream origin "HEAD:refs/heads/$branch"
