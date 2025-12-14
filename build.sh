#!/bin/sh
cd ../
mkdir -p output
shopt -s dotglob
cp -R ./linkmarry-frontend/* ./output
shopt -u dotglob
cp -R ./output ./linkmarry-frontend/
