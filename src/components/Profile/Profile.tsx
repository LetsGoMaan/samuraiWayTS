import React from "react";
import "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText:string) => void
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;

