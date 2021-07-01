import React from 'react';
import "./styles/app.scss"

//COMPONENTS
import HeaderComponent from './components/headerComponent/header.component';
import SideBar from './components/sideBar/sidebar.component';

function App() {
  return (
    <div className="app">
      
      <HeaderComponent/>

      <div className = "appBody">

          <SideBar/>
        {/*Feed*/}
        {/*Widgets*/}
      </div>

      
     


    </div>
  );
}

export default App;
