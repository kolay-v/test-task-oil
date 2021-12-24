#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd dist
ln -s index.html 404.html
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Piterden/test-task-oil.git master:gh-pages

cd -
