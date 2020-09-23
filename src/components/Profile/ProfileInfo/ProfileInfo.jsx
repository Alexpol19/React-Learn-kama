import React from 'react';
import style from './ProfileInfo.module.css';
import Loader from 'react-loader-spinner';
import StatusFunc from './Status/StatusFunc';
import ProfileDetails from './ProfileDetails';
import ProfileDetailsEdit from './ProfileDetailsEdit';
import { useState } from 'react';
// import StatusClass from './Status/StatusClass';
const logo = 'https://media.istockphoto.com/vectors/silhouette-of-male-head-man-face-in-profile-side-view-vector-id956741868?k=6&m=956741868&s=170667a&w=0&h=i5YCJE7emqMCvB8xGTviXpr-OFknbynAXA_hcGAZ_Vc='

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    let setPhoto = (e) => {
        if(e.target.files.length > 0){
            let photo = e.target.files[0]
            props.savePhoto(photo);
        }
    }
    let saveProfileDetails = (newProfile) => {
        let result = props.saveDetails(newProfile, props.authId);
        result.then( resCode => {
            if(resCode == 0){
                setEditMode(false);
            }
        })
        
    }
    if(!props.profileData){
        return <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0} 

     />
    }
    else{
        return(
            <div className={style.profile}>
                {/* <img src={props.profileData.photos.large || logo} /> */}
                <div className={style.author}>
                    <div className={style.author__details}>
                        {editMode
                            ? <div className={style.editMainInfo}>
                                <img src={props.profileData.photos.small || logo} /><input type="file" onChange={setPhoto} />
                                <StatusFunc status={props.status} authId={props.authId} currentUserId={props.profileData.userId} updateStatus={props.updateStatus} />
                                </div>
                            : <div className={style.mainInfo}>
                                <img src={props.profileData.photos.small || logo} />
                                <div>
                                    <h3>{props.profileData.fullName}</h3>
                                    <p>{props.status}</p>
                                </div>
                            </div>}
                        
                        
                        
                        {!editMode ? <ProfileDetails details={props.profileData} authId={props.authId} setEditMode={setEditMode} /> : <ProfileDetailsEdit initialValues={props.profileData} details={props.profileData} onSubmit={saveProfileDetails} />}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ProfileInfo;