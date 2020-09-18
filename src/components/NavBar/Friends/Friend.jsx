import React from 'react';
import style from './Friends.module.css';

const Friend = (props) => {
    let photoUrl='';
    if(props.friend.photos.small != null){
        photoUrl = props.friend.photos.small;
    }
    else if(props.friend.photos.large != null){
        photoUrl = props.friend.photos.large;
    }else{
        photoUrl = 'https://media.istockphoto.com/vectors/silhouette-of-male-head-man-face-in-profile-side-view-vector-id956741868?k=6&m=956741868&s=170667a&w=0&h=i5YCJE7emqMCvB8xGTviXpr-OFknbynAXA_hcGAZ_Vc='
    }
    return(
        <a href="#" className={style.friend}>
            <img src={photoUrl} alt="logo" />
            <span>{props.friend.name}</span>
        </a>
    );
}
export default Friend;