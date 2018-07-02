#!/bin/sh

DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd -P)"

yes | rm "$DIR"/backend/downloads/*
