import React from 'react';
import PressureTable from '../TableData';
import PressureChart from '../PressureChart';
import useMeasurementsData from '../../hooks/useMeasurementsData';

// eslint-disable-next-line react/function-component-definition
const PressureMeasurements: React.FC = () => {
    const measurements = useMeasurementsData();

    if (!measurements.length) {
        return <p>No Data</p>;
    }

    return (
        <div>
            <PressureChart data={measurements} />
            <PressureTable data={measurements} />
        </div>
    );
};

export default PressureMeasurements;
