
import React from 'react';
import "./Coupons.css";
import { Link, useParams } from 'react-router-dom';
function Coupons(){
  const {username} = useParams(); 
  const exp = "/nanami/"+username;
    const chat = "/nanami/"+username;
  return (
    <div className='container'>
      <nav>
        <ul>
          <li>
            <Link to={chat}>Expenses Tracking</Link>
          </li>
          <li>
            <Link to={exp}>Chat Assistant</Link>
          </li>
          <li>
            <Link to="/coupons">Coupons</Link>
          </li>
        </ul>
      </nav>
      <h1>Coupons available</h1>
      <p className='para'>Coupons For You!</p>  
      

      
      <div className='coupon'>
        <img className='groupon-image' src='https://cdn0.iconfinder.com/data/icons/circle-icons/512/groupon.png' alt='groupon' />
        <a href='https://www.groupon.com/coupons'>Groupon</a>
        <p>A mobile and web-based platform that offers daily deals and discounts on various products and services.</p>
      </div>
      <div className='coupon'>
      <img className='groupon-image' src='data:image/png;base64,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' alt='retailmenot'/>
      <a href='https://www.retailmenot.com/'>retailmenot</a>
      <p>A mobile app and website that provides users with a platform to discover and access various online and in-store discounts, coupons and promotional codes.</p>

      </div>

      <div className='coupon'>
      <img className='groupon-image' src="https://play-lh.googleusercontent.com/E3PejGWhQfc0BPecmtncXfap7rKazvedmHSJad0Xj9wv7Bm_KLtH31GR37tn057NfbY" alt='groupon'/>
    <a href='https://www.joinhoney.com'>Honey</a>
    <p>A browser extension and mobile app, available for various desktops integrating with the users browser and helps find and apply coupon codes during online shopping.</p>
    </div>
  </div>
  )
}
 
export default Coupons;

