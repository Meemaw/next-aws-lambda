#!/bin/sh

set -e

echo "$(ls)"
echo "$*"
echo "$INPUT_ARGS"

cd "${E2E_FOLDER_DIR:-e2e}"

echo "$(ls)"

sh -c "sudo npx testcafe $*"
