

import React, {useState} from "react";
import "../login/_loginPage.style.scss";
import {auth} from "../../firebase"; //imported from the firebase config

//redux
import {useDispatch} from "react-redux";
import { login } from "../../features/userSlice";





const LoginPage = () => {

    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    //dispatch
    const dispatch = useDispatch();


    const loginTo_App = (event) => {

        event.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {

            dispatch(login({

                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,

            }))
        }).catch(error => alert(error));

    }


    const registerHandler = () => {

        if(!name){

            return alert("Please Enter Your Name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {

            userAuth.user.updateProfile({

                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {

                dispatch(login({

                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
            
        }).catch((error) => alert(error));

    };

   
    return(

        <div className = "loginSection">

            <img src="http://www.smartinsights.com/wp-content/uploads/2013/01/LinkedIn-Logo-2C.png" alt="" />
               

               <form>

                   <input type="text" value = {name} onChange = {e => setName(e.target.value)} placeholder = "Full Name (Required if Registering)"/>

                   <input type="text" value = {profilePic} onChange = {e => setProfilePic(e.target.value)} placeholder = "Profile Picture Url (Optional)" />

                   <input type="email" value = {email} onChange = {e => setEmail(e.target.value)} placeholder = "Email" />

                   <input type="password" value = {password} onChange = {e => setPassword(e.target.value)} placeholder = "Password" />

                   <button type="submit" onClick = {loginTo_App}>Sign In</button>

               </form>

               <p>Not a member?

                   <span className="registerNow" onClick = {registerHandler}> Register Now</span>

                </p>
        </div>
    )
}

export default LoginPage;