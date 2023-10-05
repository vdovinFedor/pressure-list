import React from 'react';
import { type TLine } from '../../redusers/lines';

type Props = {
  lineses: Array<TLine>;
};
function FormComponent(props: Props) {
    const { lineses } = props;
    if (!lineses.length) {
        return (
            <p>Ytewtwetw</p>
        );
    }
    const getValue = (v: string) => (v || '-');

    const renderLines = () => lineses.map((l) => (
        <div className="flex mt-6 justify-center">
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
