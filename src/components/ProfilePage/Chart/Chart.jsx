import React from 'react';
import "./Chart.css"
import { LineChart, Line, XAxis, YAxis,Tooltip,  ResponsiveContainer } from 'recharts';

const data = [

  {
    name: ' ',
    point: 0,
    // amt: 2400,
  },
  {
    name: 'Mon',
    point: 30,
    // amt: 2400,
  },
  {
    name: 'Tue',
    point: 20,
    // amt: 2210,
  },
  {
    name: 'Wed',
    point: 50,
    // amt: 2290,
  },
  {
    name: 'Thu',
    point: 90,
    // amt: 2000,
  },
  {
    name: 'Fri',
    point: 40,
    // amt: 2181,
  },
  {
    name: 'Sat',
    point: 20,
    // amt: 2500,
  },
  {
    name: 'Sun',
    point: 5,
    
    // amt: 2100,
  },
];
const Chart = () => {
   const demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

   return (
     <ResponsiveContainer width="100%" height="100%">
      <div className="chart">
        <span className='point'>Points Earned</span>
      <LineChart
        width={482}
        height={230}
        data={data}
        stroke={
          d => d > 50 ? "red" : "green"
      }
      >
        <XAxis dataKey="name"  tick={{fontSize: 10}}/>
        <YAxis tick={{fontSize: 10}} />
        <Tooltip />
        <Line type="monotone" dataKey="point" stroke="#10B981" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
    </ResponsiveContainer>
  );
}

export default Chart