import React from 'react';
import "./styles/app.scss"

//COMPONENTS

import Header from "./components/headerComponent/header.component"
import SideBar from './components/sideBar/sidebar.component';
import Feed from './components/feed/feed.component';

function App() {
  return (
    <div className="app">
      
      <Header/>

      <div className = "appBody">

          <SideBar/>
          <Feed/>
        {/*Widgets*/}
      </div>

      
     


    </div>
  );
}

export default App;
