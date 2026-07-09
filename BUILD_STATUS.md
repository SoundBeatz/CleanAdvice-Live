# Build status guide

This document explains how to check whether Clean Advice Live builds correctly.

## Local build

Run this from the project root:

```bash
npm install
npm run build
```

A successful build means the Next.js frontend can compile.

## GitHub Actions build

The repository includes this workflow:

```text
.github/workflows/build.yml
```

It runs on:

- push to `main`
- pull request to `main`

The workflow installs dependencies and runs:

```bash
npm run build
```

## What to check if build fails

1. Missing imports
2. Missing files
3. Invalid API route imports
4. Package dependency errors
5. Next.js client/server component mismatch
6. JSON import issues
7. Environment variables required during build

## Important MVP note

The frontend should build without real LiveKit or LemonSlice keys. Those values are required only when testing live video calls.

## Current critical routes

```text
/
/status
/test-room
/test
/router-test
/diagnostics
/quote
/service
/api/health
/api/diagnostics
/api/route-message
/api/quote
/api/service
/api/token
```

## Definition of ready for local testing

- `npm install` succeeds.
- `npm run build` succeeds.
- `npm run dev` starts the app.
- `/api/health` returns ok.
- `/diagnostics` loads.
- `/router-test` returns route data.
- `/quote` accepts form data.
- `/service` accepts form data.
