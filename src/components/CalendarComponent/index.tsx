import React from 'react';
import Calendar from 'react-calendar';
import './CalendarComponent.css';

function CalendarComponent({
    notes,
    onDayClick,
}: {
  notes: Array<{ date: string; mood: number; note: string }>;
  // eslint-disable-next-line no-unused-vars
  onDayClick: (date: string) => void;
}) {
    const getTileClassName = ({ date }: { date: Date }) => {
        const formattedDate = date.toISOString().split('T')[0];
        const hasEntry = notes.some((entry) => entry.date === formattedDate);

        return hasEntry ? 'highlighted-day' : ''; // Добавьте класс для дней с записями
    };

    return (
        <Calendar
            onClickDay={(value) => onDayClick(value.toISOString().split('T')[0])}
            tileClassName={getTileClassName}
        />
    );
}

export default CalendarComponent;
