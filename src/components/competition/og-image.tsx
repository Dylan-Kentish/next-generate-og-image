/* eslint-disable react/no-unknown-property */
import { getCompetition } from '@/lib/competition';

export const CompetitionImage: React.FC<{
  searchParams: URLSearchParams;
}> = ({ searchParams }) => {
  const competition = getCompetition(searchParams);

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <div tw="flex flex-col items-center p-24">
        <div tw="flex text-4xl font-bold">Name: {competition.name}</div>
        <div tw="flex text-2xl text-gray-700">Description: {competition.description}</div>
        <div tw="flex text-xl text-gray-500">
          Start Date: {competition.startDate?.toLocaleDateString()}
        </div>
        <div tw="flex text-xl text-gray-500">
          End Date: {competition.endDate?.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};
