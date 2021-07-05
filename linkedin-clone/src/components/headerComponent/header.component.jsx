
import React from "react";
import "../headerComponent/_header.component.scss";//STYLES

import { useDispatch } from "react-redux";
import { auth } from "../../firebase";


//IMPORTED ICONS
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


//COMPONENTS
import HeaderOptionComponent from "../headerOptionsComponent/headerOption";
import { logout } from "../../features/userSlice";


const Header = () => {

    

    const dispatch = useDispatch();

    const LogOutApp = () => {

        dispatch(logout());
        auth.signOut();

    }

    return (

        <div className = "headerSection">
            
            <div className="headerLeft">

                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="logo" />

                <div className="headerSearch">

                    <SearchIcon/>
                    <input type="text" placeholder = "Search" />
                </div>

            </div>


            <div className="headerRight">

                <HeaderOptionComponent Icon = {HomeIcon} title = "Home"/>
                <HeaderOptionComponent Icon = {SupervisorAccountIcon} title = "My Network"/>
                <HeaderOptionComponent Icon = {BusinessCenterIcon} title ="Jobs"/>
                <HeaderOptionComponent Icon = {ChatIcon} title ="Messaging"/>
                <HeaderOptionComponent Icon = {NotificationsIcon} title ="Notifications"/>
                <HeaderOptionComponent avatar = {true} title = "Me" onClick={LogOutApp}/>

            </div>
        </div>
    )
}

export default Header;