import React from 'react';
import Calendar from 'react-calendar';
import './CalendarComponent.css';
import convertDate from '../../helpers/convertDate';

function CalendarComponent({
    notes,
    onDayClick,
}: {
  notes: Array<{ date: string; rate: number; note: string }>;
  // eslint-disable-next-line no-unused-vars
  onDayClick: (date: string) => void;
}) {
    const getTileClassName = ({ date }: { date: Date }) => {
        const formattedDate = convertDate(date);
        const hasEntry = notes.some((entry) => entry.date === formattedDate);

        return hasEntry ? 'highlighted-day' : '';
    };

    return (
        <div className="calendarContainer">
            <Calendar
                onClickDay={(value) => onDayClick(convertDate(value))}
                tileClassName={getTileClassName}
            />
        </div>
    );
}

export default CalendarComponent;
