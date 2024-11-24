import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import useDiaryData from '../../hooks/useDiaryData';
import CalendarComponent from '../CalendarComponent';
import './Diary.css';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '90%',
        maxHeight: '80vh',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};
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
    const modalHeader = `Запис${entriesForSelectedDate.length > 1 ? 'и' : 'ь'} за ${selectedDate}`;
    return (
        <div>
            <CalendarComponent notes={diaryNotes} onDayClick={handleDayClick} />
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
                <div className="modal-container">
                    <div className="mb-8">
                        <h2>
                            {modalHeader}
                        </h2>
                    </div>
                    {entriesForSelectedDate.length ? (
                        entriesForSelectedDate.map((entry) => (
                            <div key={entry.rate} className="mb-8">
                                <p>
                                    Настроение:
                                    {entry.rate}
                                </p>
                                <div style={{ whiteSpace: 'pre-wrap' }}>
                                    {entry.note}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Нет записей</p>
                    )}
                    <button
                        style={{
                            marginTop: '15px',
                            padding: '10px 20px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        type="button"
                        onClick={closeModal}
                    >
                        Закрыть
                    </button>
                    <button
                        className="modal-x-btn"
                        type="button"
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default PressureMeasurements;
