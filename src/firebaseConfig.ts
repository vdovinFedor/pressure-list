import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import conf from './config';

const { firebase } = conf;

const firebaseConfig = {
    apiKey: firebase.apiKey,
    authDomain: firebase.authDomain,
    databaseURL: firebase.databaseURL,
    projectId: firebase.projectId,
    storageBucket: firebase.storageBucket,
    messagingSenderId: firebase.messagingSenderId,
    appId: firebase.appId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export {
    database, ref, get, signInWithEmailAndPassword, auth,
};
