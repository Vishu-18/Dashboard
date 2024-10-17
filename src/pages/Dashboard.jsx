import React from 'react';
import "../styles/dashboard.css";
import  {AiOutlineDollar} from 'react-icons/ai'
import  {GoChecklist} from 'react-icons/go'
import  {LiaWalletSolid} from 'react-icons/lia'
import  {BiSolidShoppingBag} from 'react-icons/bi'
import  {RiArrowDropDownLine} from 'react-icons/ri'
import piechart from '../assets/images/piechart.png'
import SingleCard from "../components/reuse/SingleCard";
import EarnChart from "../charts/earnChart";
import Topnav from '../components/TopNav/TopNav'
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const earning = {
  title: "Earning",
  totalProfit: 750,
  profit:<p>&#8593;25%</p>,
  percentProfit:"this month",
  icon: <AiOutlineDollar/>,
};

const orders = {
  title: "Orders",
  totalProfit: 2.8,
  profit:<p className='loss'>&#8595;2%</p>,
  percentProfit:"this month",
  icon: <GoChecklist/>,
};

const balance = {
  title: "Balance",
  totalProfit: 2.4,
  profit:<p className='loss'>&#8595;4%</p>,
  percentProfit:"this month",
  icon: <LiaWalletSolid/>,
};

const totalSales = {
  title: "Total Sales",
  totalProfit: 89,
  profit:<p>&#8593;11%</p>,
  percentProfit:"this week",
  icon: <BiSolidShoppingBag/>,
};

const Dashboard = () => {
  return (    
    <div className="dashboard" style={{height: '100vh'}}>
      <div><Topnav/></div>
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={earning} />
          <SingleCard item={orders} />
          <SingleCard item={balance} />
          <SingleCard item={totalSales} />
        </div>
        
        <div className="statics">
          <div className="stats">
            <select className='quarter'  >
              <option value="monthly">Monthly  </option>
              <option value="quartly">Quarterly  </option>
              <option value="yearly">Yearly  </option>
            </select>
            <h1 className="stats__title">Overview</h1>
            <h4 className='stats__desc'>Monthly Earning</h4>
            <EarnChart/>
            </div>
            <div className='piechart'>
              <h2>Customers</h2>
              <h5>Customers that buy products</h5>
              <img src={piechart} />
            </div>          
          </div>
          <div className='footer' >
            <div><h2>Product Sell</h2>
            
              <div className='prosearch'>
              <i class="ri-search-line"></i>
              <input type="text" placeholder="search" />
              <select className='lastdays'>
                <option value="last30">Last 30 days  </option>
                <option value="last100">Last 100 days  </option>
                <option value="last180">Last 180 days   </option>
              </select>
              </div>
              
              <div className="headDetails">
                <h4>Product Name</h4>
                <h4>Stock</h4>
                <h3>Price</h3>
                <h3>TotalSales</h3>
                
              </div>   
              <div className='hLine'><hr/> </div> 
            </div>
            
            
          <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
          </div> 

          </div>
          

               

      </div>
    </div>
  );
};

export default Dashboard
