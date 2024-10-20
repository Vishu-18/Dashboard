import React from 'react'


import { ResponsiveContainer, BarChart, Bar, XAxis, } from "recharts";

import earningStaticsData from "../assets/dummy-data/earningStastics";

const earnChart = () => {
  return (
    <ResponsiveContainer >
      <BarChart className="barChart" data={earningStaticsData}>
        <XAxis  dataKey="month" stroke="#000000"  />
        <Bar className="barr" dataKey="earning" stroke="#f2efff" 
       fill="#7d7b87" barSize={40} radius={18}/>

        
      </BarChart>
    </ResponsiveContainer>
  );
};
export default earnChart;
