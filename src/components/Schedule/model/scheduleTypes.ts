import type { Moment } from 'moment';

export type ScheduleSlot = {
    time: string;
    status: 'Свободно' | 'Занято';
};

export type ScheduleProps = {
    selectedDate: Moment;
    startOfWeek: Moment;
    schedule: ScheduleSlot[];
    onDateChange: (date: Moment) => void;
    onWeekChange: (direction: 'prev' | 'next') => void;
};
