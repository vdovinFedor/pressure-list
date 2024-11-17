import { useEffect, useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebaseConfig';
import config from '../config';

const {
    authFirebase: { email, password },
} = config;

const useFirebaseAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const signIn = async () => {
            if (!auth.currentUser) {
                await signInWithEmailAndPassword(auth, email, password);
            }
            setIsAuthenticated(true);
        };
        signIn().catch((error) => {
            console.error('Error', error);
            setIsAuthenticated(false);
        });
    }, []);

    return isAuthenticated;
};
export default useFirebaseAuth;
