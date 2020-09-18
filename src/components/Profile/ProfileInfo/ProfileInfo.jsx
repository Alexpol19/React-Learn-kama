import React from 'react';
import style from './ProfileInfo.module.css';
import Loader from 'react-loader-spinner';
import StatusFunc from './Status/StatusFunc'
// import StatusClass from './Status/StatusClass';

const ProfileInfo = (props) => {
    if(!props.profileData){
        return <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0} 

     />
    }else{
        return(
            <>
                <img src={props.profileData.photos.large} />
                <div className={style.author}>
                    <img src={props.profileData.photos.small} />
                    <div className={style.author__details}>
                        <h3>{props.profileData.fullName}</h3>
                        <StatusFunc status={props.status} authId={props.authId} currentUserId={props.profileData.userId} updateStatus={props.updateStatus} />
                        
                        <p>About me: <span>{props.profileData.aboutMe}</span></p>
                        {props.profileData.lookingForAJob ? <p>Looking for a job</p> : <p>Work</p>}
                        {props.profileData.lookingForAJob ? <p>{props.profileData.lookingForAJobDescription}</p> : <></>}
                        <p>Socials:</p>
                        {props.profileData.contacts.facebook ? <p>Facebook: <span>{props.profileData.contacts.facebook}</span></p> : <></>}
                        {props.profileData.contacts.mainLink ? <p>mainLink: <span>{props.profileData.contacts.mainLink}</span></p> : <></>}
                        {props.profileData.contacts.website ? <p>website: <span>{props.profileData.contacts.website}</span></p> : <></>}
                        {props.profileData.contacts.vk ? <p>vk: <span>{props.profileData.contacts.vk}</span></p> : <></>}
                        {props.profileData.contacts.twitter ? <p>twitter: <span>{props.profileData.contacts.twitter}</span></p> : <></>}
                        {props.profileData.contacts.instagram ? <p>instagram: <span>{props.profileData.contacts.instagram}</span></p> : <></>}
                        {props.profileData.contacts.youtube ? <p>youtube: <span>{props.profileData.contacts.youtube}</span></p> : <></>}
                        {props.profileData.contacts.github ? <p>github: <span>{props.profileData.contacts.github}</span></p> : <></>}
                    </div>
                </div>
            </>
        );
    }
    
}

export default ProfileInfo;