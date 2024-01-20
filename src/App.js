import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Coupons from './Coupons';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route exact path="/" element={<Login/>} />
        <Route path="/coupon" element={<Coupons/>} />
      </Routes>
    </Router>
  );
}

export default App;
