# Deployment guide

Clean Advice Live must be deployed separately from the main Clean360 website.

## Target

Production target:

```text
advice.clean360.nl
```

## Services

The MVP has two parts:

1. Next.js frontend and API routes
2. Python LiveKit worker

These can run on the same VPS during MVP testing, but should be treated as separate services.

## Required environment variables

```env
LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
LEMONSLICE_API_KEY=
AGENT_NAME=lemonslice
```

## Local test command

```bash
npm install
cd agent && uv sync && cd ..
npm run dev:all
```

## Production build command

```bash
npm install
npm run build
npm run start
```

## Worker command

```bash
cd agent
uv sync
uv run python src/agent.py dev
```

## First production checklist

- Domain advice.clean360.nl points to the app host.
- HTTPS is active.
- Env variables are configured on the host.
- Next.js app starts.
- /api/health returns ok.
- /test page works.
- /api/token returns a LiveKit token.
- Python worker starts without errors.
- Browser can join LiveKit room.
- Agent joins the same room.

## Important rule

Do not deploy this inside the main Clean360 website repository. Keep the AI app isolated so the public website remains stable.
