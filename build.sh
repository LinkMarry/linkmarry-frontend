#!/bin/sh
cd ../ || exit 1
mkdir -p output

cp -R ./linkmarry-frontend/. ./output/
cp -R ./output/. ./linkmarry-frontend/
