import { ImageResponse } from 'next/server';

import { CompetitionImage } from '@/components/competition/og-image';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  return new ImageResponse(<CompetitionImage searchParams={searchParams} />, {
    width: 1200,
    height: 630,
  });
}
