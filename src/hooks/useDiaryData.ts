import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database, get, ref } from '../firebaseConfig';
import useFirebaseAuth from './useFirebaseAuth';
import convertDate from '../helpers/convertDate';

type DiaryNote = Record<string, string>;
type DiaryNotes = Array<DiaryNote>

const useDiaryData = () => {
    const isAuthenticated = useFirebaseAuth();
    const { userUuid } = useParams<{ userUuid: string }>();
    const [diaryNotes, setDiaryNotes] = useState<any[]>([]);

    useEffect(() => {
        if (!isAuthenticated) return;
        const fetchData = async () => {
            try {
                const snapshot = await get(ref(database, `users/${userUuid}/diary/`));
                if (!snapshot.exists()) {
                    console.log('No data available');
                } else {
                    const notes = snapshot.val() as DiaryNotes;
                    const formattedNotes = Object.entries(notes)
                        .map(([, { timestamp, rate, text }]) => ({
                            date: convertDate(timestamp),
                            rate,
                            note: text,

                        }));
                    setDiaryNotes(formattedNotes);
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
