import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  return NextResponse.json({
    ok: true,
    type: 'quote_draft',
    createdAt: new Date().toISOString(),
    draft: {
      company: body.company || '',
      contact: body.contact || '',
      email: body.email || '',
      phone: body.phone || '',
      location: body.location || '',
      squareMeters: body.squareMeters || '',
      floorType: body.floorType || '',
      frequency: body.frequency || '',
      notes: body.notes || ''
    },
    nextStep: 'Clean360 kan deze gegevens gebruiken voor een eerste offertegesprek.'
  });
}
