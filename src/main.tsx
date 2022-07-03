import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth, getAuth, signOut } from 'firebase/auth';

function Main() {
	const navigate = useNavigate();
	const auth = getAuth();
	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				alert('Log out complete');
				navigate('/login', { replace: true });
			})
			.catch(error => {
				// An error happened.
			});
	};

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
			<button onClick={signOutUser}> Log out </button>
		</div>
	);
}

export default Main;
