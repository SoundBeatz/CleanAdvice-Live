import { AccessToken } from 'livekit-server-sdk';
import { NextResponse } from 'next/server';

export async function POST() {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const livekitUrl = process.env.LIVEKIT_URL;

  if (!apiKey || !apiSecret || !livekitUrl) {
    return NextResponse.json({ error: 'LiveKit environment variables are missing' }, { status: 500 });
  }

  const roomName = `clean-advice-${crypto.randomUUID()}`;
  const identity = `visitor-${crypto.randomUUID()}`;

  const token = new AccessToken(apiKey, apiSecret, {
    identity,
    name: 'Clean360 bezoeker'
  });

  token.addGrant({
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
    canPublishData: true
  });

  return NextResponse.json({
    token: await token.toJwt(),
    url: livekitUrl,
    roomName,
    identity
  });
}
