#!/bin/sh

DOWNLOAD_FOLDER="downloads"
DOWNLOAD_URL="$DOWNLOAD_FOLDER/$(pwgen)"

echo "Shell script received \"$@\""
mkdir -p "$DOWNLOAD_FOLDER"

echo "$@" > "$DOWNLOAD_URL"

echo "<br><a href=\"./$DOWNLOAD_URL\">Download</a>"
