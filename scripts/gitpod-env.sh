#!/bin/bash

# Gitpod-enhanced has some ENHANCED issues.

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

source "$HOME/.sdkman/bin/sdkman-init.sh"

nvm install 
nvm use