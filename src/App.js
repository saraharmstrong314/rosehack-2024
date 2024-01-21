import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Tracking from './Tracking';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/Tracking" element={<Tracking/>} />
      </Routes>
    </Router>
  );
}

export default App;
