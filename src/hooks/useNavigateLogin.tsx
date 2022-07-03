import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function useNavigateLogin() {
	const auth = getAuth();
	const user = auth.currentUser;
	let navigate = useNavigate();

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
}

export default useNavigateLogin;
