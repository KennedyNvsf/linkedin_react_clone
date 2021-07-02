
import React, {useEffect, useState} from "react";
import "../feed/_feed.style.scss";

import firebase from "firebase"; //firebase
import { db } from "../../firebase";

//ICONS
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

//COMPONENTS
import InputOptions from "../inputOption/inputOption.commponent";
import Post from "../postsComponent/posts.component";





const Feed = () => {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 

            setPosts(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

    }, []);
   


    const sendPost_handler = (e) => {

        e.preventDefault();

       db.collection('posts').add({

            name: 'kennedy',
            description: 'hoping that this works',
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

       });

       setInput("");

    };

    return (

        <div className = "feedSection">

            <div className="feedInput_container">

                <div className="feedInput">
                    <CreateIcon/>

                    <form>
                        
                        <input value = {input} onChange = {e => setInput(e.target.value)} type="text"/>
                        <button onClick = {sendPost_handler} type = "submit">Send</button>
                    </form>
                </div>

                <div className="inputOptionContainer">

                    <InputOptions Icon = {ImageIcon} title = "Photo" color = "#70B5F9"/>
                    <InputOptions Icon = {SubscriptionsIcon} title = "Video" color = "#7FC15C"/>
                    <InputOptions Icon = {EventNoteIcon} title = "Event" color = "#E7A33E"/>
                    <InputOptions Icon = {CalendarViewDayIcon} title = "Write article" color = "#FC9295"/>

                </div>
            </div>


            {posts.map(({id, data: {name, description, message, photoUrl } }) => (

                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

           {/* <Post name = "kennedy" description = "whats good fam" message = "this one works"/> */}
           
        </div>

    )
}

export default Feed;