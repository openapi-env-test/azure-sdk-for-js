#!/usr/bin/env bash
set -x
pwd
inputCofig=`cat $1`
specFolder=`echo $inputCofig | jq .specFolder`
specFolderTrim=`echo $specFolder | sed 's/\"//g'`
npm install -g js-sdk-changelog-tool
npm install -g gulp-cli

for readmeFile in `echo $inputCofig | jq .relatedReadmeMdFiles | jq .[]`;
do
  readmeFileTrim=`echo $readmeFile | sed 's/\"//g'`
  echo $readmeFileTrim
  wholePath=$specFolderTrim/$readmeFileTrim
  gulp automation_generate --use @microsoft.azure/autorest.typescript@4.2.2 --readme $wholePath
done
