import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  return NextResponse.json({
    ok: true,
    type: 'service_request',
    createdAt: new Date().toISOString(),
    request: {
      company: body.company || '',
      contact: body.contact || '',
      email: body.email || '',
      phone: body.phone || '',
      machineBrand: body.machineBrand || '',
      machineModel: body.machineModel || '',
      requestText: body.requestText || '',
      priority: body.priority || '',
      notes: body.notes || ''
    },
    nextStep: 'Clean360 kan deze gegevens gebruiken voor een service-opvolging.'
  });
}
