# Local testing guide

## 1. Fill environment

```bash
cp .env.example .env.local
```

Add real values when testing LiveKit and the video agent:

```env
LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
LEMONSLICE_API_KEY=
AGENT_NAME=lemonslice
```

## 2. Install frontend

```bash
npm install
```

## 3. Start frontend only

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 4. Frontend route checklist

Open these pages:

```text
http://localhost:3000/
http://localhost:3000/status
http://localhost:3000/test-room
http://localhost:3000/test
http://localhost:3000/router-test
http://localhost:3000/diagnostics
http://localhost:3000/quote
http://localhost:3000/service
```

Check these API routes:

```text
http://localhost:3000/api/health
http://localhost:3000/api/diagnostics
```

## 5. Build check

```bash
npm run build
```

GitHub Actions also runs this build on push and pull requests to main.

## 6. Install worker

```bash
cd agent
uv sync
cd ..
```

## 7. Run app and worker together

```bash
npm run dev:all
```

## 8. Video-agent checklist

- Welcome video loads.
- Start button works.
- `/api/token` returns token and url.
- Browser joins LiveKit room.
- Camera and microphone permission appears.
- Python worker starts.
- Agent joins room.
- Visitor can talk to Clean Advice.

## Known MVP limits

- LemonSlice plugin availability depends on installed package support.
- Voice and LLM are starter-safe defaults.
- Exact LemonSlice dashboard voice may require extra setup.
- The current diagnostic and router pages are MVP test tools, not final customer UX.
