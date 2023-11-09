import React, { Fragment, useState } from 'react';
import styles from './ListItem.module.css';
import { type TLine } from '../../types';
import Button from '../Button';

type Props = TLine & {
  onDelete: (lineId: string) => void;
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
                key={crypto.randomUUID()}
                className={styles.date}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {date}
            </div>
            <div
                key={crypto.randomUUID()}
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
