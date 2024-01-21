import React from 'react';
import { Link } from 'react-router-dom';
import GraphSection from './GraphSection'; 
import './Trends.css'
import { useParams } from 'react-router-dom';

const Trends = () => {
    const {username} = useParams(); 
    const exp = "/nanami/"+username;
    const chat = "/nanami/"+username;
    const coup = "/coupons/"+username;
    // const history = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={chat}>Expenses Tracking</Link>
          </li>
          <li>
            <Link to={exp}>Chat Assistant</Link>
          </li>
          <li>
            <Link to={coup}>Coupons</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h4>Food</h4>
        <GraphSection section="1" />
      </section>

      <section>
        <h4>HealthCare</h4>
        <GraphSection section="2" />
      </section>

      <section>
        <h4>Utilities</h4>
        <GraphSection section="3" />
      </section>
      <section>
        <h4>Major Expenses</h4>
        <GraphSection section="4" />
      </section>
    </div>
  );
};

export default Trends;
