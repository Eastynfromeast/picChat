import React from 'react';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	const auth = getAuth();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const inputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};
	const inputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event?.target.value);
	};

	const signUp = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				alert('Sign Up is completed');
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const signIn = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed in
				//const user = userCredential.user;
				alert('We will lead you to home');
				navigateHome();
			})
			.catch(error => {
				alert(error);
			});
	};

	const navigateHome = () => {
		navigate('../home', { replace: true });
	};

	const onAuthChanged = (user: string) => {
		onAuthStateChanged(auth, user => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	};

	const onSubmit = () => {
		signIn(email, password);
		signUp(email, password);
	};

	return (
		<div>
			<div>
				<label htmlFor="id"> ID : </label>
				<input
					type="email"
					placeholder="Insert your email"
					value={email}
					onChange={inputEmail}
				/>
			</div>
			<div>
				<label htmlFor="pw">Password : </label>
				<input
					type="password"
					placeholder="Insert your password"
					value={password}
					onChange={inputPassword}
				/>
			</div>
			<button onClick={onSubmit}> Login </button>
		</div>
	);
}

export default Login;
