import { NextResponse } from 'next/server';
import noWaterPickup from '../../../data/diagnostics/no-water-pickup.json';
import streaks from '../../../data/diagnostics/streaks.json';

const diagnostics = [noWaterPickup, streaks];

export async function GET() {
  return NextResponse.json({
    ok: true,
    diagnostics: diagnostics.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      startQuestion: item.startQuestion
    }))
  });
}
