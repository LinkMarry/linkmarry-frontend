#!/bin/sh
cd ../
mkdir -p output
rsync -a ./linkmarry-frontend/ ./output/
rsync -a ./output/ ./linkmarry-frontend/
