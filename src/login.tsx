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
	const [newBee, setNewBee] = React.useState(false);
	const inputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};
	const inputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event?.target.value);
	};
	const creatingNewBee = (event: React.MouseEvent<HTMLButtonElement>) => {
		setNewBee(pre => !pre);
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
				console.log(error);
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
				console.log(error);
			});
	};

	const navigateHome = () => {
		navigate('../home', { replace: true });
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
