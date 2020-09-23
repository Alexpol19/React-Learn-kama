import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileDetails = (props) => {
    return(
        <div className={style.information}>
            <div className={style.info}>
                
                <div className={style.item}>
                    <h5>Information</h5>
                    <p>About me: <span>{props.details.aboutMe}</span></p>
                    {props.details.lookingForAJob ? <p>Looking for a job</p> : <p>{props.details.lookingForAJobDescription}</p>}
                    
                </div>
                <div className={style.item}>
                    <h5>Socials:</h5>
                    {Object.keys(props.details.contacts).map( key => {
                        if(props.details.contacts[key]){
                            return ( <p key={key}>{key}: <span>{props.details.contacts[key]}</span></p>)
                        }
                    })}
                </div>
            </div>
            {props.authId == props.details.userId 
                ? <button className={style.editInfo} onClick={ () => props.setEditMode(true)}>Edit</button>
                : <></>
            }
        </div>
    );
}

export default ProfileDetails;