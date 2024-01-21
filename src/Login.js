
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
 import db from './firebase';

const Login = () => {
  const [loginMessage, setLoginMessage] = useState(''); 
   const history = useNavigate();

  const handleLogin = (e) => { 
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    db.collection('users')
      .where('username', '==', username)
      .where('password', '==', password)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          setLoginMessage('Login successful!');
          console.log(username)
          history('/trends/'+username);
        //   history('/main', {username: username});
        } else {
          setLoginMessage('Username or password is incorrect.');
        }
      })
      .catch((error) => {
        console.error('Error checking login:', error);
        setLoginMessage('An error occurred during login.');
      });
  };

  return (
    <div className="login-page">
      <h2>Welcome back...</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="Login" />
        <p className="login-message">{loginMessage}</p>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;