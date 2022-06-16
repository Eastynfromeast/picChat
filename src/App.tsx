import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import LogIn from './login';

function App() {
	return (
		<div>
			<h1>picChat</h1>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			>
				<Link to="/login"> Login </Link>
			</nav>
		</div>
		// <Router>
		//   <div className="App">
		//   <Link to="/login">
		//     <button> Login </button>
		//   </Link>
		//   <Route path="/login" element={<LogIn/>} />
		//   </div>
		// </Router>
	);
}

export default App;

// routing 설정

// 기존 유저
// login -> main

// new user
// login -> signup (login) -> main

// 로그인된 유저
// main
