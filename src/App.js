import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";


function App() {
  return (
    // <div className="App">
    //   <HomePage/>
    // </div>
    <div>
    <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/signin" element={<SignInSignUpPage/>} />
      </Routes>
    </div>
   
  );
}

export default App;
