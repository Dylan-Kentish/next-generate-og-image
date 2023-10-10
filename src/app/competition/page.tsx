import { Metadata, NextPage } from 'next';

import { CompetitionForm } from '@/components/competition/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getBaseUrl } from '@/lib/base-url';
import { getCompetition, getCompetitionUrlSearchParams } from '@/lib/competition';

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page: NextPage<PageProps> = ({ searchParams }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card>
        <CardHeader>
          <CardTitle>Competition</CardTitle>
          <CardDescription>
            Customize the competition to alter the og image generation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CompetitionForm searchParams={searchParams} />
        </CardContent>
      </Card>
    </main>
  );
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const competition = getCompetition(searchParams);

  return {
    title: competition.name,
    openGraph: {
      images: [
        {
          url: `${getBaseUrl()}/competition/og-image?${getCompetitionUrlSearchParams(competition)}`,
        },
      ],
    },
  } satisfies Metadata;
}

export default Page;
