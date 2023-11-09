import React, { useEffect } from 'react';
import mockData from '../../consts/mockData';
import styles from './ListComponent.module.css';
import { type TData, type TLine } from '../../types';
import ListItem from '../ListItem';

type Props = {
  lineses: Array<TLine>;
  init: (payload: TData) => void;
  onDelete: (payload: string) => void;
};
function FormComponent(props: Props) {
    // const { data, isLoading, isError } = useQuery('fetchData', fetchData);
    const { lineses, init, onDelete } = props;

    useEffect(() => {
        setTimeout(() => {
            init(mockData);
            return mockData;
        }, 1000);
    }, []);

    /* async function fetchData() {
        // В этой функции вы можете имитировать получение данных из моковых данных

        setTimeout(() => {
            console.log('eeeee');
            init(mockData);
            return mockData;
        }, 2000);
    } */

    if (!lineses.length) {
        return (
            <p>No Data</p>
        );
    }

    return (
        <div className="flex justify-center mt-6">
            <div className={styles.tableContainer}>
                <div className={styles.container}>
                    <div className={styles.headerLine}>Дата</div>
                    <div className={styles.headerLine}>Результат</div>

                    {lineses.map((l: TLine) => (
                        <ListItem
                            onDelete={onDelete}
                            key={l.lineId}
                            lineId={l.lineId}
                            up={l.up}
                            down={l.down}
                            heartRate={l.heartRate}
                            date={l.date}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default FormComponent;
