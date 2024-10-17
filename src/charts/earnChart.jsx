import React from 'react'


import { ResponsiveContainer, BarChart, Bar, XAxis, } from "recharts";

import earningStaticsData from "../assets/dummy-data/earningStastics";

const earnChart = () => {
  return (
    <ResponsiveContainer width="99%" position='fixed'>
      <BarChart className="barChart" data={earningStaticsData}>
        <XAxis  dataKey="month" stroke="#000000"  />
        <Bar className="barr" dataKey="earning" stroke="#f2efff" 
       fill="#f2efff" barSize={50} radius={18}/>

        
      </BarChart>
    </ResponsiveContainer>
  );
};
export default earnChart;
