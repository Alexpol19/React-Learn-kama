import React from 'react';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    let photoUrl = '';


    let follow = () =>{
        props.follow(props.user.id)
    }
    let unfollow = () =>{
        props.unfollow(props.user.id)
    }

    // if not one small photo show large, else show some photo
    if(props.user.photos.small != null){
        photoUrl = props.user.photos.small;
    }
    else if(props.user.photos.large != null){
        photoUrl = props.user.photos.large;
    }else{
        photoUrl = 'https://media.istockphoto.com/vectors/silhouette-of-male-head-man-face-in-profile-side-view-vector-id956741868?k=6&m=956741868&s=170667a&w=0&h=i5YCJE7emqMCvB8xGTviXpr-OFknbynAXA_hcGAZ_Vc='
    }

    // if user == auth user (My account) dont't show Follow
    let showFollow = true;
    if(props.user.id == props.authId){
        showFollow = false;
    }

    // is fetching make button -disabled

    return (
        <div className={style.user}>
            <div className={style.user__left}>
                <NavLink to={'/profile/' + props.user.id}><img src={photoUrl} alt="logo"/></NavLink>
                {props.auth 
                    ? (props.user.id == props.authId 
                        ? <></>
                        : (!props.user.followed 
                            ? <button onClick={follow} disabled={props.user.followFetching} className={style.user__subscribe}>Subscribe</button> 
                            : <button onClick={unfollow} disabled={props.user.followFetching} className={style.user__unsubscribe}>Unsubscribe</button>))
                        
                    : <></>}
                
            </div>
            <div className={style.user__right}>
                <div className={style.user__about}>
                    <h2>{props.user.name}</h2>
                    <p className={style.user__idea}>{props.user.status}</p>
                </div>
                <div className={style.user__location}>
                    {/* <p>{props.user.location.country}</p> */}
                    {/* <p>{props.user.location.city}</p> */}
                </div>
            </div>
        </div>
    );
}

export default User;