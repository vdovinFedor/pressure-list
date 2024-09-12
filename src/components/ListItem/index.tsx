import React, { Fragment, useState } from 'react';
import styles from './ListItem.module.css';
import { type TLine } from '../../types';
import Button from '../Button';

type Props = TLine & {
  onDelete: (_lineId: string) => void;
};
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('ru-RU', options);

    const time = date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return `${formattedDate.split(', ').reverse().join(', ')}, ${time}`;
};

function ListItem(props: Props) {
    const {
        up, down, heartRate, date, lineId, onDelete,
    } = props;
    const getValue = (v: string) => v || '-';

    const resultLine = () => `${getValue(up)} / ${getValue(down)} / ${getValue(heartRate)}`;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Fragment key={lineId}>
            <div
                className={styles.date}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {formatDate(date)}
            </div>
            <div
                className={styles.rightSide}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {resultLine()}
                {isHovered && (
                    <Button onClick={() => onDelete(lineId)} label="X" key={crypto.randomUUID()} />
                )}
            </div>
        </Fragment>
    );
}

export default ListItem;
