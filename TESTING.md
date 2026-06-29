# Local testing guide

## 1. Fill environment

```bash
cp .env.example .env.local
```

Add real values:

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

## 3. Install worker

```bash
cd agent
uv sync
cd ..
```

## 4. Run app and worker

```bash
npm run dev:all
```

Open:

```text
http://localhost:3000
```

## 5. Test checklist

- Welcome video loads.
- Start button works.
- `/api/token` returns token and url.
- Browser joins LiveKit room.
- Camera and microphone permission appears.
- Python worker starts.
- Agent joins room.
- Visitor can talk to Clean Advice.

## Known MVP limits

- This is the first local MVP scaffold.
- LemonSlice plugin availability depends on installed package support.
- Voice and LLM are starter-safe defaults.
- Exact LemonSlice dashboard voice may require a separate ElevenLabs plugin setup.
