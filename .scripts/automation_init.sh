#!/usr/bin/env bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install v18.15.0 
nvm use v18.15.0
npm install -g @microsoft/rush@5.92.0
npm install -g @azure-tools/js-sdk-release-tools
whereis code-gen-pipeline
whereis node
. ~/.bashrc
cat ~/.bashrc

#code-gen-pipeline: /home/cloudtest/.nvm/versions/node/v18.15.0/bin/code-gen-pipeline
#node: /usr/local/bin/node /home/cloudtest/.nvm/versions/node/v18.15.0/bin/node /opt/hostedtoolcache/node/16.20.2/x64/bin/node
#node: /usr/local/bin/node /opt/hostedtoolcache/node/16.20.2/x64/bin/node
