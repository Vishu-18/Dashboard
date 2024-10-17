import React from "react";
import PieChartt from "../charts/chart";
import "../styles/income.css";
import EarnChart from "../charts/earnChart";

const Income = () => {
  return (
    <div className="income">
      <h1>Total Income</h1>
      <div className="statts">
            <div className="statt_head">              
            <h1 className="stats__title">Overview</h1>
            <select className='quarter'  >
              <option value="monthly">Monthly  </option>
              <option value="quartly">Quarterly  </option>
              <option value="yearly">Yearly  </option>
              </select>
            </div>
            <div className='earnchart'> <EarnChart/></div>
          </div>
      <div className="pieBox">
        <h2>Profit-Share</h2>
        <PieChartt />
      </div>
      
    </div>
  );
};

export default Income;
