import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
	.then(userCredential => {
		// Signed in
		const user = userCredential.user;
		// ...
	})
	.catch(error => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	});

function Login() {
	return (
		<div>
			<div>
				<label htmlFor="id"> ID : </label>
				<input type="text" />
			</div>
			<div>
				<label htmlFor="pw">Password : </label>
				<input type="number" />
			</div>
			<button> Login </button>
		</div>
	);
}

export default Login;
