import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyApjqo4Y15QiJuqa9yhyuHzGfpDfwpB2go',
	authDomain: 'picchat-84b1f.firebaseapp.com',
	projectId: 'picchat-84b1f',
	storageBucket: 'picchat-84b1f.appspot.com',
	messagingSenderId: '843320636707',
	appId: '1:843320636707:web:7d79e20827d63b5a354896',
	measurementId: 'G-QCGKY16LEE',
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

//firebaseui 사용
const firebaseui = require('firebaseui');

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.

provider.setCustomParameters({ prompt: 'select_account' });
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.

export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	// Other config options...
});

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
