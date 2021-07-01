

import React from "react";
import "../headerOptionsComponent/_headerOption.scss";
import { Avatar } from "@material-ui/core";



const HeaderOptionComponent = ({avatar, Icon, title}) => {

    return (
        
        <div className = "headerOption">

            {Icon && <Icon className = "headerOptionIcon"/>}
            {avatar && (<Avatar  className = "headerOptionIcon" src = {avatar}/>)}
            <h3 className = "headerOptionTitle">{title}</h3>

        </div>
    )
}

export default HeaderOptionComponent;