
import React from "react";
import "../feed/_feed.style.scss";

//ICONS
import CreateIcon from '@material-ui/icons/Create';


const Feed = () => {

    return (

        <div className = "feedSection">

            <div className="feedInput_container">

                <div className="feedInput">
                    <CreateIcon/>

                    <form>
                        
                        <input type="text"/>
                        <button type = "submit">Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Feed;