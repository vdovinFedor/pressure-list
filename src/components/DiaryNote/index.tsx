import React from 'react';
import getEmotionRate from '../../helpers/getEmotionRate';
import parceDiaryDate from '../../helpers/parceDiaryDate';
import { TDiaryNote } from '../../types';
import './DiaryNote.css';

function DiaryNote(props: TDiaryNote) {
    const { date, note, rate } = props;
    const { formattedDate } = parceDiaryDate(date);
    // const [day, month] = date.split('-').map(Number);
    const { color } = getEmotionRate(rate);
    const headerText = 'Test header text';

    return (
        <article className={`note-container ${color}`}>
            <time className="note-date">{formattedDate}</time>
            <p className="note-header-text">{headerText}</p>
            <p className="note-text">{note}</p>

        </article>
    );
}

export default DiaryNote;
