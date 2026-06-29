import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: true, type: 'quote_draft' });
}
