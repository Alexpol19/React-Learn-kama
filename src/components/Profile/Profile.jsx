import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainerPureFunction';

const Profile = (props) => {
    
    return(
        <div>
            <ProfileInfo {...props} updateStatus={props.updateStatus} />
            <MyPostsContainer 
                />
        </div>
    );
}

export default Profile;