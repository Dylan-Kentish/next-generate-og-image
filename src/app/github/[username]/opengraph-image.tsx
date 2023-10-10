import { ImageResponse } from 'next/server';

import { GitHubImage } from '@/components/github/og-image';

// Route segment config
export const runtime = 'edge';

export async function generateImageMetadata({
  params: { username },
}: {
  params: { username: string };
}) {
  return [
    {
      id: `github-${username}`,
      size: { width: 1200, height: 600 },
      alt: `GitHub profile picture for ${username}`,
      contentType: 'image/png',
    },
  ];
}

// Image generation
export default async function Image({ params: { username } }: { params: { username: string } }) {
  return new ImageResponse(<GitHubImage username={username} />);
}
