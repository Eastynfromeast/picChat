import { User } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { auth } from '../service/firebase';

function AuthProvider(children: null) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const subscribe = auth.onAuthStateChanged(fbUser => {
			console.log('로그인 완료', fbUser);
			setUser(fbUser);
		});
		return subscribe;
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
