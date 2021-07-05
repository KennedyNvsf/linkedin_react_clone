

import React from "react";
import "../headerOptionsComponent/_headerOption.scss";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { user_Selector } from "../../features/userSlice";



const HeaderOptionComponent = ({avatar, Icon, title, onClick}) => {

    const user = useSelector(user_Selector);

    return (
        
        <div onClick = {onClick} className = "headerOption">

            {Icon && <Icon className = "headerOptionIcon"/>}

            {avatar && (<Avatar src = {user.photoUrl} className = "headerOptionIcon">{user?.email[0]}</Avatar>)}
            
            <h3 className = "headerOptionTitle">{title}</h3>

        </div>
    )
}

export default HeaderOptionComponent;