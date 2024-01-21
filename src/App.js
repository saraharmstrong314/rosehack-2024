import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Coupons from './Coupons';
import Nanami from './Nanami';

function App() {
  return (
    <Coupons></Coupons>
    // <Router>
    //   <Routes>
    //     <Route path="/signup" element={<Signup/>} />
    //     <Route exact path="/" element={<Login/>} />
    //     <Route path="/nanami/:username" element={<Nanami/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
