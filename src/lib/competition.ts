export type Competition = {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export function getCompetition(
  searchParams:
    | {
        [key: string]: string | string[] | undefined;
      }
    | URLSearchParams
): Partial<Competition> {
  if (searchParams instanceof URLSearchParams) {
    searchParams = Object.fromEntries(searchParams.entries());
  }

  const { name, description, startDate, endDate } = searchParams;
  return {
    name: typeof name === 'string' ? name : undefined,
    description: typeof description === 'string' ? description : undefined,
    startDate: typeof startDate === 'string' ? new Date(startDate) : undefined,
    endDate: typeof endDate === 'string' ? new Date(endDate) : undefined,
  };
}

export function getCompetitionUrlSearchParams(competition: Partial<Competition>) {
  const { name, description, startDate, endDate } = competition;

  const searchParams = new URLSearchParams();
  if (name) searchParams.set('name', name);
  if (description) searchParams.set('description', description);
  if (startDate) searchParams.set('startDate', startDate.toISOString());
  if (endDate) searchParams.set('endDate', endDate.toISOString());

  return searchParams;
}

export function getCompetitionUrl(competition: Partial<Competition>) {
  return `/competition?${getCompetitionUrlSearchParams(competition)}`;
}
