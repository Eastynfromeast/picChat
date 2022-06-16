import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyApjqo4Y15QiJuqa9yhyuHzGfpDfwpB2go',
	authDomain: 'picchat-84b1f.firebaseapp.com',
	projectId: 'picchat-84b1f',
	storageBucket: 'picchat-84b1f.appspot.com',
	messagingSenderId: '843320636707',
	appId: '1:843320636707:web:7d79e20827d63b5a354896',
	measurementId: 'G-QCGKY16LEE',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
