import { useEffect, useState } from 'react';
import { database, get, ref } from '../firebaseConfig';
import useFirebaseAuth from './useFirebaseAuth';

type DiaryNote = Record<string, string>;
type DiaryNotes = Array<DiaryNote>

const useDiaryData = () => {
    const isAuthenticated = useFirebaseAuth();
    const [diaryNotes, setDiaryNotes] = useState<any[]>([]);

    useEffect(() => {
        if (!isAuthenticated) return;
        const fetchData = async () => {
            try {
                const userId = '223721326';
                const snapshot = await get(ref(database, `users/${userId}/diary/`));
                if (!snapshot.exists()) {
                    console.log('No data available');
                } else {
                    const notes = snapshot.val() as DiaryNotes;
                    const formattedNotes = Object.entries(notes)
                        .map(([, { timestamp, rate, text }]) => ({
                            date: timestamp.split('T')[0],
                            rate,
                            note: text,

                        }));
                    setDiaryNotes(formattedNotes);
                    console.log('Fetched data:', snapshot.val());
                }
            } catch (error) {
                console.error('Error signing in:', error);
            }
        };
        fetchData();
    }, [isAuthenticated]);

    return diaryNotes;
};
export default useDiaryData;
