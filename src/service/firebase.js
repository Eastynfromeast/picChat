import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import 'dotenv/config';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: 'picchat-84b1f.appspot.com',
	messagingSenderId: '843320636707',
	appId: '1:843320636707:web:7d79e20827d63b5a354896',
	measurementId: 'G-QCGKY16LEE',
};

// firebaseConfig 정보로 firebase 시작
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();

// export const auth = firebase.auth();

// // Initialize the FirebaseUI Widget using Firebase.
// var firebaseUi = new firebaseui.auth.AuthUI(firebase.auth());
// firebaseUi.start('#firebaseui-auth-container', {
// 	signInSuccessUrl: '<url-to-redirect-to-on-success>',
// 	signInOptions: [
// 		firebase.auth.EmailAuthProvider.PROVIDER_ID,
// 		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// 	],
// 	// Other config options...
// });

export default firebase;
