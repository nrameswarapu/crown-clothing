import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    })
    
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/signin" element={<SignInSignUpPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
