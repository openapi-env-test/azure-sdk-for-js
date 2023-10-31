#!/usr/bin/env bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.bashrc
export NVM_DIR="$HOME/.nvm"
nvm install v18.15.0
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
nvm use v18.15.0
npm install -g @microsoft/rush@5.92.0
npm install -g @azure-tools/js-sdk-release-tools
