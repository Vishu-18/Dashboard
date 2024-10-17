import React from "react";

const RecommendCarCard = (props) => {
  const { carName,imgUrl,stock,totalSales,price } = props.item;
  return (
    <div className="recommend__car-card">
      <div className="recommend__car-img">
        
        <figure>
        <img src={imgUrl} alt=""  />        
        
        <figcaption><h4>{carName}</h4></figcaption>
      </figure>
      
      </div>
        <h4 className="stock">{stock}</h4>
        <h4 className="price">{price}</h4> 
        <h4 className="totalsales">{totalSales}</h4>

    </div>
  );
};

export default RecommendCarCard;
