import { NextResponse } from 'next/server';
import noWaterPickup from '../../../../data/diagnostics/no-water-pickup.json';
import streaks from '../../../../data/diagnostics/streaks.json';

const diagnosticMap = {
  [noWaterPickup.id]: noWaterPickup,
  [streaks.id]: streaks
};

export async function GET(request, { params }) {
  const diagnostic = diagnosticMap[params.id];

  if (!diagnostic) {
    return NextResponse.json({ ok: false, error: 'Diagnostic not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true, diagnostic });
}
