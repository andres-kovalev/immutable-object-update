#/bin/sh

set -e

node ./tools/generate-readmes.js
node ./tools/jsdoc-to-markdown.js ./src/operations/README.hbs --operations "./src/operations/*/index.js" > ./src/operations/README.md
node ./tools/jsdoc-to-markdown.js ./src/functional/README.hbs --functionals "./src/functional/*/index.js" > ./src/functional/README.md
node ./tools/jsdoc-to-markdown.js ./README.hbs --operations "./src/operations/*/index.js" --functionals "./src/functional/*/index.js" > ./README.md
node ./tools/jsdoc-to-markdown.js ./SUMMARY.hbs --operations "./src/operations/*/index.js" --functionals "./src/functional/*/index.js" > ./SUMMARY.md
