import React from 'react';
import { Link } from 'react-router-dom';
import GraphSection from './GraphSection'; // You'll need to create this component
import './Trends.css'

const Trends = () => {
  return (
    <div>
        <h1>Sarah: your prefect financial advisor</h1>
      <nav>
        <ul>
          <li>
            <Link to="/nanami/Jasmine">Expenses Tracking</Link>
          </li>
          <li>
            <Link to="/nanami/Jasmine">Chat Assistant</Link>
          </li>
          <li>
            <Link to="/nanami/Jasmine">Coupons</Link>
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
