#!/usr/bin/env bash
# rush update
npm install -g @microsoft/rush
rush update
# generate
gulp automation_generate_in_pipeline --inputJson $1 --outputJson $2 --use @microsoft.azure/autorest.typescript@4.2.2
