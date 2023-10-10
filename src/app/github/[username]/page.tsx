import { Metadata, NextPage } from 'next';

import { GitHubImage } from '@/components/github/og-image';

type PageProps = {
  params: {
    username: string;
  };
};

const Page: NextPage<PageProps> = ({ params: { username } }) => {
  return (
    <main className="flex h-screen grow flex-col items-center justify-center p-24">
      <GitHubImage username={username} />
    </main>
  );
};

export async function generateMetadata({ params: { username } }: PageProps): Promise<Metadata> {
  return {
    title: username,
  } satisfies Metadata;
}

export default Page;
