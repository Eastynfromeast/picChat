import React from 'react';

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
