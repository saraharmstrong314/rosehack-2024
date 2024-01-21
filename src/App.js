import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Tracking from './Tracking';
import Coupons from './Coupons';
import Nanami from './Nanami';
import Trends from './Trends';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route exact path="/" element={<Login/>} />
        <Route path="/nanami/:username" element={<Nanami/>} />
        <Route path="/Tracking/:username" element={<Tracking />}/>
        <Route path="/trends/:username" element={<Trends/>} />
        <Route path="/coupons/:username" element={<Coupons/>} />
      </Routes>
    </Router>
  );
}

export default App;
