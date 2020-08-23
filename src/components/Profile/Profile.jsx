import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    return(
        <div>
            <img src="http://lorempixel.com/1000/500" />
            <ProfileInfo />
            <MyPosts 
                profile={props.profile} 
                addPost={props.addPost}
                onInputPostText={props.onInputPostText} />
        </div>
    );
}

export default Profile;