# Clean Advice Live

Production video-agent app and AI platform foundation for Clean360.

Clean Advice Live is a standalone LiveKit + LemonSlice video-agent application. It must be deployed separately from the main Clean360 website.

## Production target

advice.clean360.nl

## Agent

- LemonSlice agent ID: agent_c19549730e90e903
- Avatar image URL: https://6ammc3n5zzf5ljnz.public.blob.vercel-storage.com/inf2-image-uploads/resized-image-Cp5oNX5ZuDjrSeboZu4JG30W2DPeVW.jpg
- Welcome video URL: https://6ammc3n5zzf5ljnz.public.blob.vercel-storage.com/live-clips/liveChatClip-nWKjbzbggExFbsae7MMuvV5iQlhRsz.mp4

## Required environment variables

```env
LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
LEMONSLICE_API_KEY=
AGENT_NAME=lemonslice
```

## Local setup

```bash
cp .env.example .env.local
npm install
cd agent && uv sync && cd ..
npm run dev:all
```

## Repository structure

```text
app/                  Next.js app routes
components/           Frontend components
agent/                Python LiveKit worker
knowledge/            Clean Knowledge database
rules/                Rule Engine definitions
workflows/            Workflow Engine definitions
schemas/              Structured data schemas
docs/                 Architecture and product documents
```

## Platform modules

- Clean Advice: video advisor
- Clean Service: service and troubleshooting
- Clean Quote: quote intake
- Clean Shop: product and machine advice
- Clean Knowledge: shared knowledge layer
- Clean Admin: future backoffice

## Safety rule

Never place LiveKit secrets in frontend code. The token route must stay server-side.

## Build principle

Build the system first, then the screens. Business knowledge belongs in `knowledge/`, deterministic rules in `rules/`, workflows in `workflows/`, and reusable schemas in `schemas/`.
