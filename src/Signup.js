import React, { useEffect, useState } from 'react';
import './Signup.css';
 import db  from './firebase'; 

const Signup = () => {
//   const [userLocation, setUserLocation] = useState('');
  useEffect(() => {
    const elements = document.querySelectorAll('.signup-page *');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 200}ms`;
    });
    console.log("enn")
  }, []);
  const handleSubmit =  (e) => {
    e.preventDefault();

    
    console.log("ente")
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    const gender = e.target.gender.value;
    const age = e.target.age.value;
    const location =e.target.location.value;
    const budget =  e.target.location.value;
    console.log(password)

      db.collection('users').add({
        username: username,
        password: password,
        location: location,
        gender: gender,
        age: parseInt(age),
        budget: budget,
      });
      
      console.log('Data stored in Firebase!');
  };

  return (
    <div className="signup-page">
      <h2>One Step Away...  </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
        />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />
        <label htmlFor="budget">Budget</label>
        <input type="number" id="budget" name="budget" />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;