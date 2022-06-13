import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This will be the login page </h1>
      <div>
        <label htmlFor="userId"> ID : </label>
        <input type="text" id="userId" />
      </div>
      <div>
        <label htmlFor="userPw">Password : </label>
        <input type="number" id="userPw"/>
      </div>
      <button> log in </button>
    </div>
  );
}

export default App;
