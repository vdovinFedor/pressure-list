import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import useDiaryData from '../../hooks/useDiaryData';
import CalendarComponent from '../CalendarComponent';
import './Diary.css';
import DiaryModalComponent from '../Modal';

// eslint-disable-next-line react/function-component-definition
const PressureMeasurements: React.FC = () => {
    const diaryNotes = useDiaryData();
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDayClick = (date: string) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
    };
    const entriesForSelectedDate = diaryNotes.filter((entry) => entry.date === selectedDate);
    if (!diaryNotes.length) {
        return (
            <p>No data</p>
        );
    }
    return (
        <div className="flex justify-center">
            <CalendarComponent notes={diaryNotes} onDayClick={handleDayClick} />
            <DiaryModalComponent
                notes={entriesForSelectedDate}
                onClose={closeModal}
                isModalOpen={isModalOpen}
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default PressureMeasurements;
