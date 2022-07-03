import React from 'react';
import {
	getAuth,
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

	// try, catch + async await
	const signUp = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user;
				console.log(user);
				alert('Sign Up is completed');
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode === 'auth/email-already-in-use') {
					alert('This email is already taken. Choose another one.');
				} else {
					alert(errorMessage);
				}
			});
	};

	const signIn = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed in
				//const user = userCredential.user;
				alert('We are moving to home sweet home');
				navigateHome();
			})
			.catch(error => {
				alert(error.message);
			});
	};

	const navigateHome = () => {
		navigate('../main', { replace: true });
	};

	const createUser = () => {
		signUp(email, password);
	};
	const login = () => {
		signIn(email, password);
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
			<button onClick={createUser}> Sign Up</button>
			<button onClick={login}> Log in </button>
		</div>
	);
}

export default Login;
