'use client';

import { useRouter } from 'next/navigation';

import { getCompetition, getCompetitionUrl } from '@/lib/competition';

import { DatePicker } from '../ui/date-picker';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type CompetitionFormProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const CompetitionForm: React.FC<CompetitionFormProps> = ({ searchParams }) => {
  const competition = getCompetition(searchParams);
  const router = useRouter();

  function handleChange(change: Partial<typeof competition>) {
    const url = getCompetitionUrl({ ...competition, ...change });

    router.push(url, {
      scroll: false,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2">
        Name
        <Input value={competition.name} onChange={e => handleChange({ name: e.target.value })} />
      </Label>

      <Label className="flex flex-col gap-2">
        Description
        <Textarea
          value={competition.description}
          onChange={e => handleChange({ description: e.target.value })}
        />
      </Label>

      <Label className="flex flex-col gap-2">
        Start Date
        <DatePicker
          date={competition.startDate}
          onChange={date => handleChange({ startDate: date })}
        />
      </Label>

      <Label className="flex flex-col gap-2">
        End Date
        <DatePicker date={competition.endDate} onChange={date => handleChange({ endDate: date })} />
      </Label>
    </div>
  );
};
