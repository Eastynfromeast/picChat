import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function App() {
	const auth = getAuth();
	const user = auth.currentUser;
	let navigate = useNavigate();

	const navigateHome = () => {
		navigate('../main', { replace: true });
	};
	const navigateLogin = () => {
		navigate('./login', { replace: true });
	};
	useEffect(() => {
		if (user !== null) {
			navigateHome();
			console.log(user);
		} else {
			navigateLogin();
		}
	}, []);

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
