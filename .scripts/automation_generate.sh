#!/usr/bin/env bash
# install some libraries
npm install -g @microsoft/rush
rush update
npm install

# generate
gulp automation_generate_in_pipeline --inputJson $1 --outputJson $2 --use @microsoft.azure/autorest.typescript@4.2.2
