#!/usr/bin/env bash
set -x
# install some libraries
npm install -g js-sdk-changelog-tool
npm install -g gulp-cli
npm install

# generate
gulp automation_generate --inputJson $1 --outputJson $2 --use @microsoft.azure/autorest.typescript@4.2.2
