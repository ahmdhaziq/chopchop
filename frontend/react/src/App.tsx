import { useState } from 'react'
import './App.css'
import Sidebar from './components/navbar'
import CustLayout from './layouts/custLayout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './pages/productList';
import BaseLayout from './layouts/baseLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path='/' element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
