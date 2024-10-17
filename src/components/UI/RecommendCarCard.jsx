import React from "react";

const RecommendCarCard = (props) => {
  const { carName,imgUrl,stock,totalSales,price } = props.item;
  return (
    <div className="recommend__car-card">
      <div className="recommend__car-img">
        <img src={imgUrl} alt=""  />
      </div>
      <div className="recommend__car-bottom">
        <h4>{carName}</h4>
        <p>Lorem ipsum dolor luptas minus.</p>
      </div>
      <div className="carDetails">
        <h4 className="stock">{stock}</h4>
        <h4 className="price">{price}</h4> 
        <h4 className="totalsales">{totalSales}</h4>
      </div>
    </div>
  );
};

export default RecommendCarCard;
