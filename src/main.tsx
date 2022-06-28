import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
	const navigate = useNavigate();
	const navigateApp = () => {
		navigate('/', { replace: true });
	};
	return (
		<div>
			<h2> Home Sweet Home </h2>
			<button onClick={navigateApp}> Go back to App </button>
		</div>
	);
}

export default Main;
