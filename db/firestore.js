import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4gLPnVwFZntTlwpCUcS3lRHfGg5CtWQc',
  authDomain: 'chocolates-elder.firebaseapp.com',
  projectId: 'chocolates-elder',
  storageBucket: 'chocolates-elder.appspot.com',
  messagingSenderId: '584049330657',
  appId: '1:584049330657:web:29b095a345ff9990deaaa0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
