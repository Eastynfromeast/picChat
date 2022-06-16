import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

interface userId {
	id: string | number;
}

function Login() {
	return (
		<div id="firebaseui-auth-container">
			<h1>This will be the login page </h1>
			<div>
				<label htmlFor="userId"> ID : </label>
				<input type="text" id="userId" />
			</div>
			<div>
				<label htmlFor="userPw">Password : </label>
				<input type="number" id="userPw" />
			</div>
			<button> log in </button>
		</div>
	);
}

export default Login;

// 기존 유저
// login -> main

// new user
// login -> signup (login) -> main

// 로그인된 유저
// main
