

import React from "react";
import "../sideBar/_sidebar.style.scss";//styles
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { user_Selector } from "../../features/userSlice";



const SideBar = () => {

    const user = useSelector(user_Selector);

    const recentItem = (topic) => (

        <div className="sideBarRecent_item">
            <span className ="sideBarHash">#</span>
            <p>{topic}</p>
        </div>
    );

    return(

        <div className = "sideBarSection">

            <div className="sideBarTop">

                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlWR8MXx8fGVufDB8fHw%3D&w=10000&q=80" alt="" />

                <Avatar src = {user.photoUrl} className = "sideBarAvatar">{user.email[0]}</Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

              
            </div>

            <div className="sideBarStats">

                <div className="sidebarStatsBlock">

                    <p>Who Viewed You</p>
                    <p className ="sideBarStatsNumb">1,570</p>

                </div>

                <div className="sidebarStatsBlock">

                    <p>Views on Posts</p>
                    <p className ="sideBarStatsNumb">2,678</p>
                    
                </div>

            </div>

            <div className="sideBarBottom">

                <p>Recent</p>

                {recentItem("ReactJs")}
                {recentItem("Web Dev")}
                {recentItem("Front End")}
                {recentItem("Covid 19")}
                {recentItem("Programming")}

            </div>

        </div>
    )
}

export default SideBar;