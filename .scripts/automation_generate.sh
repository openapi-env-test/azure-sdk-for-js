#!/usr/bin/env bash
cat ~/.bashrc
echo ">>>>>>>>>>>>>>>"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use default
whereis code-gen-pipeline
whereis node
node -v
code-gen-pipeline --version
code-gen-pipeline --inputJsonPath=$1 --outputJsonPath=$2 --use=@autorest/typescript@^6.0.11 --typespecEmitter=@azure-tools/typespec-ts
