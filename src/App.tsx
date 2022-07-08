import React from 'react';
import { Link } from 'react-router-dom';
import useNavigateLogin from './hooks/useNavigateLogin';

function App() {
	useNavigateLogin();

	return (
		<div>
			<h1>picChat</h1>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			></nav>
			<Link to="/login"> Login </Link>
		</div>
	);
}

export default App;
