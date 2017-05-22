#! /bin/bash

# Get latest version
git checkout master
git pull origin master

# Build assets ready to be used
make build-prod

# Update release branch (does not have the same dir structure)
git checkout gh-pages
rm -r assets && cp -r dist/assets ./
cp dist/*.* ./

# Commit and push changes
git add --all assets
git commit -a -m "Bump compiled assets"
git push origin gh-pages

git checkout master