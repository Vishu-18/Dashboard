import React from 'react';
import Router from '../../routes/Router';
import Sidebar from '../Sidebar/Sidebar';
import Topnav from '../TopNav/TopNav'

const Layout = () => {
  return <div className='layout'>
    <Sidebar/>
    <div className='content'>
      <Router/>
      </div>
    </div>
  
}

export default Layout
