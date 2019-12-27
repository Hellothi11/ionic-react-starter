#!/usr/bin/env bash

set -eo pipefail
ENV=$1
if [[ ! ${ENV} ]]
then
  ENV=local
fi
echo "Environment: ${ENV}"
if [[ ( ${ENV} != "prod" && ${ENV} != "dev" && ${ENV} != "local" ) ]]
then
  echo "Usage: $(basename "$0") [prod|dev|local]"
  exit 1
fi
echo "Building environment ${ENV}"

PLATFORM=$2
if [[ ! ${PLATFORM} ]]
then
  PLATFORM=browser
fi
echo "Platform: ${PLATFORM}"
if [[ ( ${PLATFORM} != "browser" && ${PLATFORM} != "ios" && ${PLATFORM} != "android" ) ]]
then
  echo "Usage: $(basename "$0") [browser|ios|android]"
  exit 1
fi
echo "Building platform ${PLATFORM}"

export TARGET_ENV=${ENV}
# VERSION=$(jq -r ".version" package.json)
# BUILD_NUMBER=$(jq -r ".buildNumber" build.json)
export TARGET_PLATFORM=${PLATFORM}

npm run build:clean
npm run build
if [[ (${PLATFORM} == "ios") || (${PLATFORM} == "android") ]]
then
  echo "Creating project ${PLATFORM}"
  rm -rf ${PLATFORM}
  npm run generate:${PLATFORM}
  npm run start:${PLATFORM}
fi