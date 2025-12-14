#!/bin/sh
cd ../ || exit 1
mkdir output

cp -R ./linkmarry-frontend/. ./output/
cp -R ./output/. ./linkmarry-frontend/