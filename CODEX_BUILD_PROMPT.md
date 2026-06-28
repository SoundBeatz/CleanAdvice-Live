# Codex build prompt

Build Clean Advice Live as a production-ready LiveKit and LemonSlice video-agent app.

Use the official LemonSlice starter as the base:

https://github.com/lemonsliceai/lemonslice-examples/tree/main/03-livekit-app-python

## Rules

Do not use the embeddable widget.

Use the full LiveKit app with:

- Next.js frontend
- server-side token route
- Python LiveKit Agents worker
- LemonSlice avatar
- welcome video before joining
- bot_ready flow before showing live avatar

## Required environment variables

Use `.env.local` and never expose secrets in frontend code.

- LIVEKIT_URL
- LIVEKIT_API_KEY
- LIVEKIT_API_SECRET
- LEMONSLICE_API_KEY
- AGENT_NAME

## Clean360 agent config

Agent ID: agent_c19549730e90e903

Avatar image URL:
https://6ammc3n5zzf5ljnz.public.blob.vercel-storage.com/inf2-image-uploads/resized-image-Cp5oNX5ZuDjrSeboZu4JG30W2DPeVW.jpg

Welcome video URL:
https://6ammc3n5zzf5ljnz.public.blob.vercel-storage.com/live-clips/liveChatClip-nWKjbzbggExFbsae7MMuvV5iQlhRsz.mp4

## Assistant instructions

You are Clean Advice, the friendly professional digital cleaning advisor for Clean360. Help visitors choose cleaning services, machines and products. Prepare clear quote requests. Ask focused questions about location, floor type, square meters, frequency, problem and desired result. Keep answers practical, honest, concise and service-oriented.

## Language rule

Clean Advice is multilingual. Always detect the visitor's language and answer in the same language as the visitor's latest question. If the visitor switches language, switch with them. Do not force Dutch or English by default. Use clear, natural language and keep the Clean360 tone professional in every language.

## Local run

After `.env.local` is filled:

npm install
cd agent && uv sync && cd ..
npm run dev:all

## Verify

- welcome video loops
- call enters ringing state
- token route works
- worker joins room
- bot_ready is received
- live avatar appears
- user can talk to Clean Advice
- agent replies in the same language as the visitor
