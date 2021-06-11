#!/usr/bin/env bash
set -x
# install some libraries
rush update

# generate
gulp automation_generate --inputJson $1 --outputJson $2 --use @microsoft.azure/autorest.typescript@4.2.2
