#!/usr/bin/env bash
# rush install
npm install -g @microsoft/rush
npm install
# generate
npm install -g azure-track2-js-sdk-release-tools
track2-codegen-automation-for-pipeline --inputJson=$1 --outputJson=$2 --use==@autorest/typescript@6.0.0-beta.5
