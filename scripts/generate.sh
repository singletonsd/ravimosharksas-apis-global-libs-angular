#!/usr/bin/env bash

# Web Page of BASH best practices https://kvz.io/blog/2013/11/21/bash-best-practices/
#Exit when a command fails.
set -o errexit
#Exit when script tries to use undeclared variables.
set -o nounset
#The exit status of the last command that threw a non-zero exit code is returned.
set -o pipefail

#Trace what gets executed. Useful for debugging.
#set -o xtrace

# Set magic variables for current file & dir
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__file="${__dir}/$(basename "${BASH_SOURCE[0]}")"
__base="$(basename ${__file} .sh)"
__root="$(cd "$(dirname "${__dir}")" && pwd)"

if ! type "java" &> /dev/null; then
    echo "java is not installed. Install it and then re launch"
    exit 1
fi

if ! type "curl" &> /dev/null; then
    echo "curl is not installed. Install it and then re launch"
    exit 1
fi

API_SPEC="https://ravimosharksas.gitlab.io/apis/global/documentation/swagger.yaml"
VERSION="2.0.0"
function usage(){
    echo "1 - swagger spec location."
    echo "2 - api version."
}

if [ $# -ge 1 ]; then
    API_SPEC=${1}
    if [ $# -ge 2 ]; then
        VERSION=${2}
    fi
fi

FOLDER=binaries
SWAGGER_NAME=swagger-codegen-cli.jar
SWAGGER_JAR=${FOLDER}/${SWAGGER_NAME}

source ./scripts/binaries_dowloader.sh

SWAGGER_COMMAND="java -jar ${SWAGGER_JAR} generate -l typescript-angular"

${SWAGGER_COMMAND} \
    -i ${API_SPEC} \
    -c swaggerconfig.json \
    -o src \
    --model-package=models --api-package=api \
    --git-repo-id=ravimosharksas/apis/global/libs/angular

# TO KNOW ABOUT AVAILABLE CONFIGURATION PROPERTIES
# java -jar ${SWAGGER_JAR} config-help -l typescript-angular