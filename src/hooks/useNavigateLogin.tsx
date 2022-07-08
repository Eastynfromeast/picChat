import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useNavigateLogin() {
	const auth = getAuth();
	const user = auth.currentUser;
	let navigate = useNavigate();
	useEffect(() => {
		if (user !== null) {
			try {
				alert(user.email + ' is logged in!');
			} catch (error) {
				alert(error);
			} finally {
				navigate('../main', { replace: true });
			}
		} else {
			try {
				alert('You are not a user of picChat. We are moving to login page');
				navigate('../login', { replace: true });
			} catch (error) {
				alert(error);
			} finally {
				navigate('../login', { replace: true });
			}
		}
	}, [navigate, user]);
}

export default useNavigateLogin;
