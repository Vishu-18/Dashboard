import React from "react";
import PieChartt from "../charts/chart";
import "../styles/income.css";
import EarnChart from "../charts/earnChart";

const Income = () => {
  return (
    <div className="income">
      <div className="statts">
        <select className="quarter">
          <option value="monthly">Monthly </option>
          <option value="quartly">Quarterly </option>
          <option value="yearly">Yearly </option>
        </select>
        <h1 className="stats___title">Overview</h1>
        <h4 className="stats__desc">Monthly Earning</h4>
        <EarnChart />
      </div>
      <div className="piebox"><div className="piechartt">
        <h2>Profit-Share</h2>
        <PieChartt />
      </div></div>
      
    </div>
  );
};

export default Income;
