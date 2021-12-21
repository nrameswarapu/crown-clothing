import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";


function App() {
  return (
    // <div className="App">
    //   <HomePage/>
    // </div>
    
      
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>} />
      
    </Routes>
   
  );
}

export default App;
