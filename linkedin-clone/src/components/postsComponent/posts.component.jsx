
    import React from "react";
    import "../postsComponent/_posts.style.scss";//styles

    //icons
    import { Avatar } from "@material-ui/core";
    import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
    import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
    import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
    import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

    //components
    import InputOptions from "../inputOption/inputOption.commponent";



    const Post = ({name, description, photourl, message}) => {

       

        return (

            <div className = "postContainer">

                <div className="postHeader">
                    <Avatar/>

                    <div className="postInfo">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="postBody">
                    <p>{message}</p>
                </div>

                <div className="postButtons">

                    <InputOptions Icon = {ThumbUpAltOutlinedIcon} title ="Like" color = "gray"/>
                    <InputOptions Icon = {CommentOutlinedIcon} title ="Comment" color = "gray"/>
                    <InputOptions Icon = {ShareOutlinedIcon} title ="Share" color = "gray"/>
                    <InputOptions Icon = {SendOutlinedIcon} title ="Send" color = "gray"/>

                </div>

            </div>
        )
    }

    export default Post;