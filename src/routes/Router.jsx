import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';
import Promote from '../pages/Promote';
import Customers from '../pages/Customers';
import Income from '../pages/Income';
import Help from '../pages/Help';
const Router = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard/>}/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/product' element={<Product/>}/>
      <Route path='/promote' element={<Promote/>}/>
      <Route path='/customers' element={<Customers/>} />
      <Route path='/income' element={<Income/>}/>            
      <Route path='/help' element={<Help/>} />
    </Routes>
  )
};

export default Router
