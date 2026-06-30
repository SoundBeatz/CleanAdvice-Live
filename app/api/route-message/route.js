import { NextResponse } from 'next/server';
import { routeMessage } from '../../../lib/router';

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const text = body.text || '';

  return NextResponse.json({
    ok: true,
    route: routeMessage(text)
  });
}
