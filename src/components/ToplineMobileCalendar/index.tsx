import React, { useEffect, useState } from 'react';
import parceDiaryDate from '../../helpers/parceDiaryDate';
import { TDairyNotes } from '../../types';
import styles from './ToplineMobileCalendar.module.css';

interface ToplineMobileCalendarProps {
    // onDateSelect: (date: string) => void;
    daysBack?: number;
    entries: TDairyNotes,
}

type TState = {
    formattedDate: string;
    isoDate: string;
    weekday: string;
}

function ToplineMobileCalendar(props: ToplineMobileCalendarProps) {
    const [dates, setDates] = useState<TState[]>([]);
    const { /* onDateSelect = {}, */ daysBack = 30, entries = [] } = props;
    console.log(entries);
    useEffect(() => {
        const today = new Date();
        console.log(entries, 'qwdqwqd');

        const test = entries.reverse().map((entry) => {
            const {
                formattedDate, weekday, isoDate,
            } = parceDiaryDate(entry.date);
            return {
                formattedDate,
                weekday,
                isoDate,
            };
        });
        console.log(test, 'rwrw');
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

    return (
        <div className={styles.calendarStrip}>
            <div className={styles.dateWrapper}>
                {dates.map((date) => {
                    const hasEntries = !!entries.find((entry) => entry.date === date.formattedDate);
                    console.log(hasEntries, 'hasEntries');
                    return (
                        <div className={styles.dateItem}>
                            <div>
                                {date.weekday.toUpperCase()}
                            </div>
                            <div>
                                {date.formattedDate}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ToplineMobileCalendar;
