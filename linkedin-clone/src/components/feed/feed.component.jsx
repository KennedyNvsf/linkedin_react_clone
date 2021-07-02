
import React from "react";
import "../feed/_feed.style.scss";

//ICONS
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

//COMPONENTS
import InputOptions from "../inputOption/inputOption.commponent";


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

                <div className="inputOptionContainer">

                    <InputOptions Icon = {ImageIcon} title = "Photo" color = "#70B5F9"/>
                    <InputOptions Icon = {SubscriptionsIcon} title = "Video" color = "#7FC15C"/>
                    <InputOptions Icon = {EventNoteIcon} title = "Event" color = "#E7A33E"/>
                    <InputOptions Icon = {CalendarViewDayIcon} title = "Write article" color = "#FC9295"/>

                </div>
            </div>

        </div>
    )
}

export default Feed;