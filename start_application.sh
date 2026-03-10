#!/bin/bash

set -euo pipefail

export NX_TUI=false

BACKEND_PID=""
FRONTEND_PID=""

cleanup() {
	if [[ -n "$BACKEND_PID" ]]; then
		kill "$BACKEND_PID" 2>/dev/null || true
	fi

	if [[ -n "$FRONTEND_PID" ]]; then
		kill "$FRONTEND_PID" 2>/dev/null || true
	fi
}

trap cleanup INT TERM EXIT

npm run database:start
npm run backend:build
npm run frontend:build

npm run backend:serve &
BACKEND_PID=$!

npm run frontend:serve &
FRONTEND_PID=$!

wait "$BACKEND_PID" "$FRONTEND_PID"


