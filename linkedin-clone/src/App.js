import React from 'react';
import "./styles/app.scss";

import { useSelector } from 'react-redux';
import { login, logout, user_Selector } from './features/userSlice';//selector we created in the userSlice.js
import { auth } from './firebase';
import { useDispatch } from 'react-redux';


//COMPONENTS

import LoginPage from './components/login/loginPage.component';
import Header from "./components/headerComponent/header.component"
import SideBar from './components/sideBar/sidebar.component';
import Feed from './components/feed/feed.component';
import Widget from './components/widgetComponent/widget.component';


import { useEffect } from 'react';


function App() {

  const user = useSelector(user_Selector);
  const dispatch = useDispatch();

 useEffect(() => {

  auth.onAuthStateChanged((userAuth) => {

    if(userAuth){

      //user is logged in 
      dispatch(login({

        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL,


      }))
    
    }else{
      //user is logged out
      dispatch(logout())
    }

  })

 }, [])

  return (
    <div className="app">
      
      {!user ? (LoginPage) : (<Header/>)}
      
      {/* <Header/> */}

      {!user ? (<LoginPage/>) : (

        <div className = "appBody">

        <SideBar/>
        <Feed/>
        <Widget/>
        </div>

      )}

     

      
     


    </div>
  );
}

export default App;
