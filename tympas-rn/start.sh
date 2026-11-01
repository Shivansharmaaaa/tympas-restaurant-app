#!/bin/bash
# Increase file limit for macOS (required to prevent EMFILE errors)
ulimit -n 10240

echo "Starting Expo with file limit: $(ulimit -n)"
echo "If you still see EMFILE errors, run: ulimit -n 10240 in your terminal first"
echo ""

# Start Expo
npx expo start --clear

