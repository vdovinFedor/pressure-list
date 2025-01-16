import React from 'react';
import getEmotionRate from '../../helpers/getEmotionRate';
import { TDiaryNote } from '../../types';
import './DiaryNote.css';

function DiaryNote(props: TDiaryNote) {
    const { date, note, rate } = props;

    return (
        <article className="note-container">
            <header className="note-header">
                <time>{date}</time>
                <span>{getEmotionRate(rate)}</span>
            </header>
            <p className="note-text">{note}</p>

        </article>
    );
}

export default DiaryNote;
