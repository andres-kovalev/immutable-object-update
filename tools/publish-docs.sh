#/bin/sh

set -e

SOURCE_DIR=${1}
TEMP_DIR=${2}
GIT_SSH_URL="$(node ./tools/git-ssh.js)"
VERSION="$(node ./tools/version.js)"

echo "building docs..."
npm run build:docs -- ${SOURCE_DIR} ${TEMP_DIR}/docs
node ./tools/clean-dir.js ${SOURCE_DIR} ${TEMP_DIR}/docs

echo "fetching gp-pages..."
mkdir ${TEMP_DIR}/gh-pages
cd ${TEMP_DIR}/gh-pages
git init
git remote add origin ${GIT_SSH_URL}
git fetch
git checkout gh-pages

echo "preparing commit..."
git rm -rf .
mv -v ../docs/* .
git add -A .
git config user.email "marcel@akovalev.ru"
git config user.name "marcelka-bot"
git commit -m "${VERSION}"

echo "publishing..."
git push

echo "done ;)"
