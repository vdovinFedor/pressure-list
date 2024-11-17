import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { database, get, ref } from '../../firebaseConfig';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import PressureTable from '../TableData';
import PressureChart from '../PressureChart';

interface Measurement {
  timestamp: string;
  systolic: string;
  diastolic: string;
  pulse: string;
}
type Measurements = Record<string, Measurement>

// eslint-disable-next-line react/function-component-definition
const PressureMeasurements: React.FC = () => {
    const [transformedData, setTransformedData] = useState<any[]>([]);
    const isAuthenticated = useFirebaseAuth();

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchData = async () => {
            try {
                const userId = '223721326';
                const snapshot = await get(ref(database, `users/${userId}/measurements/`));
                if (snapshot.exists()) {
                    const data = snapshot.val() as Measurements;
                    const prepareMeasurements = Object.entries(data).map(
                        ([key, {
                            timestamp, systolic, diastolic, pulse,
                        }]) => ({
                            timestamp: format(new Date(timestamp), 'd MMMM, HH:mm'),
                            systolic,
                            diastolic,
                            pulse,
                            id: key,
                        }),
                    );
                    setTransformedData(prepareMeasurements);
                    console.log(prepareMeasurements, 'prepareMeasurements');
                    console.log('Fetched data:', snapshot.val());
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error signing in:', error);
            }
        };

        fetchData();
    }, [isAuthenticated]);

    // useEffect(() => {
    //     if (Object.keys(measurements).length) {
    //         const prepareMeasurements = Object.entries(measurements).map(
    //             ([key, {
    //                 timestamp, systolic, diastolic, pulse,
    //             }]) => ({
    //                 timestamp: format(new Date(timestamp), 'd MMMM, HH:mm'),
    //                 systolic,
    //                 diastolic,
    //                 pulse,
    //                 id: key,
    //             }),
    //         );
    //         setTransformedData(prepareMeasurements);
    //     }
    // }, [measurements]);

    if (!transformedData.length) {
        return <p>No Data</p>;
    }

    return (
        <div>
            <PressureChart data={transformedData} />
            <PressureTable data={transformedData} />
        </div>
    );
};

export default PressureMeasurements;
