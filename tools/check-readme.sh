#!/bin/bash

set -e

bash ./tools/prepare-readme.sh

if [[ `git status --porcelain` ]]; then
    git add -A .
    git config user.email "marcel@akovalev.ru"
    git config user.name "marcelka-bot"
    git commit -m "docs: don't forget about docs"
    git push

    echo 'updated docs...'
else
    echo 'did nothing'
fi
