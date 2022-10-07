import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDIlG6zhjGhb6X7qfD_5gd5NesrYLpdLLI',
  authDomain: 'your-two-cents.firebaseapp.com',
  projectId: 'your-two-cents',
  storageBucket: 'your-two-cents.appspot.com',
  messagingSenderId: '661166161809',
  appId: '1:661166161809:web:0c49f38a91c29e1677e430',
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
