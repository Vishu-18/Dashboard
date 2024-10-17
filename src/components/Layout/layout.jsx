import React from 'react';
import Router from '../../routes/Router';
import Sidebar from '../Sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';

const Layout = () => {
  return <div className='layout'>
    <div className="main_sidebar"><Sidebar/></div>  
    
    <div className='content'>   
      
      <Router/>
      </div>
    </div>
  
}

export default Layout
