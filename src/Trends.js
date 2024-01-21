import React from 'react';
import { Link } from 'react-router-dom';
import GraphSection from './GraphSection'; 
import './Trends.css'
import { useParams } from 'react-router-dom';

const Trends = () => {
    const {username} = useParams(); 
    const exp = "/Tracking/"+username;
    const chat = "/nanami/"+username;
    const coup = "/coupons/"+username;
    // const history = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={exp}>Expenses Tracking</Link>
          </li>
          <li>
            <Link to={chat}>Chat Assistant</Link>
          </li>
          <li>
            <Link to={coup}>Coupons</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h4>Food</h4>
        <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd7aa848c-955b-4749-9297-7e80156b1a3e_1600x1200.png'></img>
      </section>

      <section>
        <h4>HealthCare</h4>
        <img src='https://media.discordapp.net/attachments/1197315681574715412/1198674893374496930/image.png?ex=65bfc3fc&is=65ad4efc&hm=23c28166dc6e5c8271b1b86d4de48b5d21bf5a6a8b20181701d88b6c3df75e8d&=&format=webp&quality=lossless&width=1440&height=522'></img>
      </section>
    </div>
  );
};

export default Trends;
