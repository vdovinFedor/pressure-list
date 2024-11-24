import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { database, get, ref } from '../firebaseConfig';
import useFirebaseAuth from './useFirebaseAuth';
import { Measurements } from '../types';

const useMeasurementsData = () => {
    const isAuthenticated = useFirebaseAuth();
    const { userUuid } = useParams<{ userUuid: string }>();
    const [transformedData, setTransformedData] = useState<any[]>([]);

    useEffect(() => {
        if (!isAuthenticated) return;
        const fetchData = async () => {
            try {
                const snapshot = await get(
                    ref(database, `users/${userUuid}/measurements/`),
                );
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
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error signing in:', error);
            }
        };
        fetchData();
    }, [isAuthenticated]);
    return transformedData;
};
export default useMeasurementsData;
