#!/usr/bin/env bash
inputCofig=$1
specFolder=`jq .specFolder $inputCofig`
specFolderTrim=`echo $specFolder | sed 's/\"//g'`
npm install -g js-sdk-changelog-tool
npm install -g gulp-cli

for readmeFile in `echo $inputCofig | jq .relatedReadmeMdFiles | jq .[]`;
do
  readmeFileTrim=`echo $readmeFile | sed 's/\"//g'`
  wholePath=$specFolderTrim/$readmeFileTrim
  gulp automation_generate --use @microsoft.azure/autorest.typescript@4.2.2 --readme $wholePath
done
