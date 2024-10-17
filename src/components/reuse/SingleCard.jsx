import React from "react";


const SingleCard = (props) => {
  const { title, totalProfit, percentProfit, icon,profit } = props.item;
  return (
    <div className="single__card">
      <span className="card__icon">
        {icon}
      </span>
      <div className="card__content">
        <p>{title}</p>
        <div className="totprof" ><h2>${totalProfit}k</h2></div>
        <div className="percprof"><h5>{profit}</h5> <h6>{percentProfit}</h6></div>
        
      </div>
      
      
    </div>
  );
};

export default SingleCard;
