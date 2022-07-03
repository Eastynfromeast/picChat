import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function App() {
	const auth = getAuth();
	const user = auth.currentUser;
	let navigate = useNavigate();
	// const [checkLoginAndRoute]: any = useNavigateLogin();
	useEffect(() => {
		// checkLoginAndRoute();
		if (user !== null) {
			try {
				alert(user.email + ' is logged in!');
				navigate('../main', { replace: true });
			} catch (error) {
				alert(error);
			}
		} else {
			try {
				alert('You are not a user of picChat. We are moving to login page');
				navigate('./login', { replace: true });
			} catch (error) {
				alert(error);
			}
		}
	});

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
