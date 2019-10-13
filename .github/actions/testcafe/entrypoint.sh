#!/bin/sh

set -e

echo "$(ip -4 addr show docker0 | grep -Po 'inet \K[\d.]+')"
echo "$(ip route show default | awk '/default/ {print $3}')"

sh -c "npx testcafe $INPUT_ARGS"
