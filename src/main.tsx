import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

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

	return (
		<div>
			<h2> Home Sweet Home </h2>
			<button onClick={navigateApp}> Go back to App </button>
			<button onClick={signOutUser}> Log out </button>
			<div>
				<button>
					<Link to="/uploadImage"> Login </Link>
				</button>
			</div>
		</div>
	);
}

export default Main;
