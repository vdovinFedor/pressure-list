import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import useDiaryData from '../../hooks/useDiaryData';
import CalendarComponent from '../CalendarComponent';

Modal.setAppElement('#root');

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
        <div>
            <CalendarComponent notes={diaryNotes} onDayClick={handleDayClick} />
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2>
                    Записи за
                    {' '}
                    {selectedDate}
                </h2>
                {entriesForSelectedDate.length ? (
                    entriesForSelectedDate.map((entry) => (
                        <div key={entry.rate}>
                            <p>
                                Настроение:
                                {entry.rate}
                            </p>
                            <p>{entry.note}</p>
                        </div>
                    ))
                ) : (
                    <p>Нет записей</p>
                )}
                <button type="button" onClick={closeModal}>Закрыть</button>
            </Modal>
        </div>
    );
};

export default PressureMeasurements;
