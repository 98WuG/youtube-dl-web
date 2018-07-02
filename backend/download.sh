#!/bin/sh

DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd -P)"
DOWNLOAD_FOLDER="downloads"
DOWNLOAD_URL="$DOWNLOAD_FOLDER/$(pwgen).mp4"
LOG="ydl.log"

echo "Shell script received \"$@\"" >> $DIR/$LOG
mkdir -p "$DIR/$DOWNLOAD_FOLDER" >> $DIR/$LOG
setfacl -m u:apache:rwx "$DIR/$DOWNLOAD_FOLDER" >> $DIR/$LOG
OUTPUT="$(youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' -o "$DIR/$DOWNLOAD_URL" "$@")"
echo "$OUTPUT" >> $DIR/$LOG

echo "<a href=\"./backend/$DOWNLOAD_URL\" download>Your download is ready! Click here to download.</a>"
