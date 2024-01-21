// GraphSection.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const GraphSection = ({ section }) => {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    // axios.get('')
    //   .then(response => {
    //     const data = response.data; 
    //     const years = data.map(item => item.year);
    //     const inflationRates = data.map(item => item.inflationRate);
    //     const chartData = {
    //       labels: years,
    //       datasets: [
    //         {
    //           label: 'Inflation Rate',
    //           data: inflationRates,
    //           fill: false,
    //           borderColor: 'rgba(75,192,192,1)',
    //         },
    //       ],
    //     };

    //     setGraphData(chartData);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <div>
      <h4>Graph Section {section}</h4>
      {/* <div style={{ height: '300px', width: '100%' }}>
        <Line data={graphData} />
      </div> */}
    </div>
  );
};

export default GraphSection;
