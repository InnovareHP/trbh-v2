#!/usr/bin/env bash
# PreToolUse guard: blocks pushes, production deploys and destructive shell commands.
# Exit 2 blocks the call and returns stderr to Claude. Exit 0 allows.

input=$(cat)

# Extract the command string from the hook payload without requiring jq.
cmd=$(printf '%s' "$input" | sed -n 's/.*"command"[[:space:]]*:[[:space:]]*"\(.*\)".*/\1/p' | head -1)
[ -z "$cmd" ] && exit 0

# The greedy capture runs into later JSON fields; cut at the next key.
cmd=${cmd%%\",\"*}
# Match the first command line only; heredoc bodies and file content must not trip the guards.
esc_nl='\n'
cmd=${cmd%%"$esc_nl"*}

block() {
  echo "BLOCKED by .claude/hooks/validate-bash.sh: $1" >&2
  echo "Ask the user for explicit permission; they can run it themselves with the ! prefix." >&2
  exit 2
}

case "$cmd" in
  *"git push --force"*|*"git push -f"*|*"push --force-with-lease"*)
    block "force push." ;;
  *"git push"*)
    block "push. Repo rule: never push; Netlify deploys from the remote." ;;
  *"git reset --hard"*|*"git clean -fd"*|*"git checkout -- "*)
    block "destructive git operation that discards uncommitted work." ;;
  *"netlify deploy"*|*"ntl deploy"*|*"netlify env:set"*|*"netlify env:unset"*)
    block "Netlify deploy or env mutation against the live site." ;;
  *"rm -rf /"*|*"rm -rf ~"*|*"rm -fr /"*|*"rm -rf public"*|*"rm -rf src"*)
    block "recursive delete of a root, home or source path." ;;
  *"Remove-Item"*"-Recurse"*"public"*|*"Remove-Item"*"-Recurse"*"src"*)
    block "recursive delete of a source path." ;;
esac

exit 0
