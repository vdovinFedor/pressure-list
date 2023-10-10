import React, { useEffect } from 'react';
import { type TLine } from '../../redusers/lines';
import mockData from '../../consts/mockData';
import { TData } from '../../types';

type Props = {
  lineses: Array<TLine>;
  init: (payload: TData) => void;
};
function FormComponent(props: Props) {
    // const { data, isLoading, isError } = useQuery('fetchData', fetchData);
    const { lineses, init } = props;

    useEffect(() => {
        setTimeout(() => {
            init(mockData);
            return mockData;
        }, 2000);
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
            <p>Ytewtwetw</p>
        );
    }
    const getValue = (v: string) => (v || '-');

    const renderLines = () => lineses.map((l) => (
        <div key={crypto.randomUUID()} className="flex mt-6 justify-center">
            <div>{getValue(l.up)}</div>
            <div>{getValue(l.down)}</div>
            <div>{getValue(l.heartRate)}</div>
        </div>
    ));

    return (
        <div>
            <div>{renderLines()}</div>
        </div>
    );
}

export default FormComponent;
