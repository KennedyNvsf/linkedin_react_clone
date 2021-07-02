

import React from "react";
import "../inputOption/_inputOption.style.scss";


const InputOptions = ({Icon, title, color}) => {


    return (

        <div className = "inputOptionBlocks">

            <Icon style = {{color: color}}/>
            <h4>{title}</h4>

        </div>
    )
}

export default InputOptions;