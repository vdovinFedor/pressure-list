import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import useDiaryData from '../../hooks/useDiaryData';
import { TDiaryNote } from '../../types';
import CalendarComponent from '../CalendarComponent';
import DiaryNote from '../DiaryNote';
import DiaryModalComponent from '../Modal';
import ToplineMobileCalendar from '../ToplineMobileCalendar';
import './Diary.css';

// eslint-disable-next-line react/function-component-definition
const PressureMeasurements: React.FC = () => {
    const diaryNotes = useDiaryData();
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDayClick = (date: string) => {
        console.log(date, 'datedate');
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
    };
    const entriesForSelectedDate = diaryNotes.filter((entry) => entry.date === selectedDate);
    const renderNotes = () => (diaryNotes.reverse().map((item: TDiaryNote) => (
        <DiaryNote
            date={item.date}
            rate={item.rate}
            note={item.note}
        />
    )));

    if (!diaryNotes.length) {
        return (
            <p>No data</p>
        );
    }
    console.log(diaryNotes);
    return (
        <>
            <ToplineMobileCalendar
                entries={diaryNotes}
            />
            <div className="diary-content">
                <div className="diary-calendar">
                    <CalendarComponent notes={diaryNotes} onDayClick={handleDayClick} />
                </div>
                <section>
                    <div className="diary-notes-container">
                        {renderNotes()}
                    </div>
                </section>
                <DiaryModalComponent
                    notes={entriesForSelectedDate}
                    onClose={closeModal}
                    isModalOpen={isModalOpen}
                    selectedDate={selectedDate}
                />
            </div>

        </>

    );
};

export default PressureMeasurements;
