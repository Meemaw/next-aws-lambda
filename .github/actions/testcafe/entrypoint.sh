#!/bin/sh

set -e

echo "$(ip route show default | awk '/default/ {print $3}')"

sh -c "npx testcafe $INPUT_ARGS"
