import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './DiaryModalComponent.css';

import CloseIcon from '@mui/icons-material/Close';

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
function DiaryModalComponent({
    notes, onClose, selectedDate, isModalOpen,
}: {
    notes: Array<{ date: string; rate: number; note: string }>,
    onClose: ()=>void,
    isModalOpen: boolean
    selectedDate: string | null,
}) {
    const modalHeader = `Запис${notes.length > 1 ? 'и' : 'ь'} за ${selectedDate}`;
    return (
        <Modal isOpen={isModalOpen} onRequestClose={onClose} style={customStyles}>
            <div className="modal-container">
                <div className="mb-8">
                    <h2>
                        {modalHeader}
                    </h2>
                </div>
                {notes.length ? (
                    notes.map((entry) => (
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
                <Button
                    className="mt-2"
                    variant="outlined"
                    size="small"
                    type="button"
                    onClick={onClose}
                >
                    Закрыть
                </Button>
                <div className="modal-close-btn">
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>

            </div>
        </Modal>

    );
}

export default DiaryModalComponent;
