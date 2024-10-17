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
import TopNav from '../components/TopNav/TopNav'
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const earning = {
  title: "Earning",
  totalProfit: 750,
  profit:<p className='profit'>&#8593;25%</p>,
  percentProfit:<p> this month"</p>,
  icon: <AiOutlineDollar/>,
};

const orders = {
  title: "Orders",
  totalProfit: 2.8,
  profit:<p className='loss'>&#8595;2%</p>,
  percentProfit:<p> this month</p>,
  icon: <GoChecklist/>,
};

const balance = {
  title: "Balance",
  totalProfit: 2.4,
  profit:<p className='loss'>&#8595;4%</p>,
  percentProfit:<p> this month</p>,
  icon: <LiaWalletSolid/>,
};

const totalSales = {
  title: "Total Sales",
  totalProfit: 89,
  profit:<p className='profit'>&#8593;11%</p>,
  percentProfit:<p> this week</p>,
  icon: <BiSolidShoppingBag/>,
};

const Dashboard = () => {
  return (    
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div><TopNav/></div>
        <div className="dashboard__cards">
          <SingleCard item={earning} />
          <SingleCard item={orders} />
          <SingleCard item={balance} />
          <SingleCard item={totalSales} />
        </div>
        
        <div className="statics">
          <div className="stats">
            <div className="stat_head">              
            <h1 className="stats__title">Overview</h1>
            <select className='quarter'  >
              <option value="monthly">Monthly  </option>
              <option value="quartly">Quarterly  </option>
              <option value="yearly">Yearly  </option>
              </select>
              </div>
            <div className='chart'> <EarnChart/></div>
          </div> 
            <div className='piechart'>
                  <h2>Customers</h2>
                  <h5>Customers that buy products</h5>
                  <img src={piechart} />
            </div>          
        </div>
        <div className='footer' >
            <div><h2>Product Sell</h2>
              <div className="prosearch">
              <div className='searchBar'>
              <i class="ri-search-line"></i>
              <input type="text" placeholder="search" />
              </div>
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
