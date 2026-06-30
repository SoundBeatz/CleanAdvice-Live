# Runtime checklist

Use this checklist before testing Clean Advice Live locally or on a VPS.

## Required tools

- Node.js 20+
- npm
- Python 3.11+
- uv
- Docker Desktop optional

## Required accounts

- LiveKit Cloud
- LemonSlice

## Required environment variables

Create `.env.local` in the project root:

```env
LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
LEMONSLICE_API_KEY=
AGENT_NAME=lemonslice
```

## Local manual run

Terminal 1:

```bash
npm install
npm run dev
```

Terminal 2:

```bash
cd agent
uv sync
uv run python src/agent.py dev
```

Open:

```text
http://localhost:3000
```

## Local Docker run

```bash
docker compose up --build
```

Open:

```text
http://localhost:3000/status
http://localhost:3000/test
http://localhost:3000
```

## Route checks

- `/api/health` should return ok.
- `/test` should show API test buttons.
- `/` should show the Clean Advice welcome screen.
- Start button should request `/api/token`.

## Call checks

- Browser asks for camera and microphone.
- Visitor joins LiveKit room.
- Agent worker starts without import errors.
- Agent joins the room.
- Audio is received by the agent.
- Agent responds in the visitor's language.

## Common issues

### Token route error

Check LiveKit variables in `.env.local`.

### Agent does not join

Check that the Python worker is running and can access the same `.env.local` values.

### LemonSlice avatar not visible

Check LemonSlice API key and plugin availability.

### Browser has no microphone

Use HTTPS in production. Localhost should work for development.
