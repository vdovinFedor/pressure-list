import React, { useEffect, useState } from 'react';
import styles from './ToplineMobileCalendar.module.css';

interface ToplineMobileCalendarProps {
    // onDateSelect: (date: string) => void;
    daysBack?: number;
}

type TState = {
    formattedDate: string;
    isoDate: string;
    weekday: string;
}

function ToplineMobileCalendar(props: ToplineMobileCalendarProps) {
    const [dates, setDates] = useState<TState[]>([]);
    const { /* onDateSelect = {}, */ daysBack = 30 /* entries */ } = props;

    useEffect(() => {
        const today = new Date();
        const datesArray = [];
        // eslint-disable-next-line no-plusplus
        for (let i = -daysBack; i <= 0; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() + i);

            const formattedDate = date.toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'short',
            });
            const weekday = date.toLocaleDateString('ru-RU', {
                weekday: 'short',
            });

            datesArray.push({
                formattedDate,
                weekday,
                isoDate: date.toISOString().split('T')[0],
            });
        }
        setDates(datesArray);
    }, []);

    console.log(dates, 'dates');
    return (
        <div className={styles.calendarStrip}>
            <div className={styles.dateWrapper}>
                {dates.map((date) => (
                    <div className={styles.dateItem}>
                        <div>
                            {date.weekday.toUpperCase()}
                        </div>
                        <div>
                            {date.formattedDate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToplineMobileCalendar;
