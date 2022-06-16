import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from './firebase';
import { auth } from './firebase';

interface userId {
	id: string | number;
}

function LogIn() {
	return (
		<div className="App">
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

export default LogIn;

// routing 설정

// 기존 유저
// login -> main

// new user
// login -> signup (login) -> main

// 로그인된 유저
// main
