import React from 'react';
import { Schedule } from './UI/Schedule';
import { useSchedule } from './model/useSchedule';

const ScheduleContainer: React.FC = () => {
    const { selectedDate, startOfWeek, schedule, onDateChange, onWeekChange } = useSchedule();

    return (
        <Schedule
            selectedDate={selectedDate}
            startOfWeek={startOfWeek}
            schedule={schedule}
            onDateChange={onDateChange}
            onWeekChange={onWeekChange}
        />
    );
};

export { ScheduleContainer };
