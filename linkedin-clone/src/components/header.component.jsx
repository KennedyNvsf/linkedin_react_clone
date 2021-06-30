
import React from "react";
import "../components/_header.component.scss";//STYLES
import SearchIcon from '@material-ui/icons/Search';//SEARCH ICON


const HeaderComponent = () => {

    return (

        <div className = "headerSection">
            
            <div className="headerLeft">

                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="logo" />

                <div className="headerSearch">

                    <SearchIcon/>
                    <input type="text" />
                </div>

            </div>

            <div className="headerRight">


            </div>
        </div>
    )
}

export default HeaderComponent;