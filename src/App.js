import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth,createUserProfileDocument } from './firebase/firebase.util';
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser: user})
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        const snapshot = onSnapshot(userRef, user =>{
          this.setState({
            currentUser: {
              id: user.id,
              ...user.data()
            }
          })
        })
        // onSnapshot(doc(db,"users",userAuth.uid), (doc) => {
        //   this.setState({
        //     currentUser: {
        //       id: doc.id,
        //       ...doc.data()
        //     }
        //   })
        // });
        
      } 
      this.setState({currentUser: userAuth})
      // console.log(this.state);
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
