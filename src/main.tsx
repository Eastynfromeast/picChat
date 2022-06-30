import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
	const navigate = useNavigate();
	const navigateApp = () => {
		try {
			navigate('/', { replace: true });
		} catch (error) {
			alert(error + 'is happened. Please try it again');
		}
	};
	return (
		<div>
			<h2> Home Sweet Home </h2>
			<button onClick={navigateApp}> Go back to App </button>
			<button> Log out </button>
		</div>
	);
}

export default Main;
