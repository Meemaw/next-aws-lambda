#!/bin/sh

set -e

echo "$(ls)"
echo "$*"
echo "$INPUT_ARGS"

sh -c "npx testcafe $*"
