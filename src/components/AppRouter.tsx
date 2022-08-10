import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../Router/Home';
import Cart from '../Router/Cart';

function AppRouter() {
  return (
    <>
      {/* 메인페이지 = '/' 
      상품 페이지 = 'fashion' 'accessory' 'digital' 
      상세 페이지 = 'product/:id' 
      카트 페이지 = '/cart' */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={}></Route>
          <Route path="/" element={}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default AppRouter;
