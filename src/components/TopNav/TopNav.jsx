import React from 'react';
import "./top-nav.css";

const TopNav = () => {
  return (
    
    <div className="top__nav">
      <div className='greet' ><h3>Hello Vishal<span >👋🏼</span>,</h3></div>
      <div className="top__nav-wrapper">
        <div className="search__box">
          <i class="ri-search-line"></i>
          <input type="text" placeholder="search" />
          
        </div>

      </div>
    </div>
  );
};

export default TopNav
