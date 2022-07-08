import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

function Main() {
	const navigate = useNavigate();
	const auth = getAuth();

	const storage = getStorage();
	const storageRef = ref(storage);

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				alert('Log out complete');
				navigate('/login', { replace: true });
			})
			.catch(error => {
				alert(error);
			});
	};

	const navigateApp = () => {
		try {
			navigate('/', { replace: true });
		} catch (error) {
			alert(error + 'is happened. Please try it again');
		}
	};

	// const upload
	return (
		<div>
			<h2> Home Sweet Home </h2>
			<button onClick={navigateApp}> Go back to App </button>
			<button onClick={signOutUser}> Log out </button>
			<div>
				<button> Upload </button>
			</div>
		</div>
	);
}

export default Main;
