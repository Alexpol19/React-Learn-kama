import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';

const HeaderContainer = (props) => {
    let photoUrl = '';
    if(
        props.userData){
        if(
            props.userData.photos.small != null){
            photoUrl = 
            props.userData.photos.small;
        }
        else if(
            props.userData.photos.large != null){
            photoUrl = 
            props.userData.photos.large;
        }else{
            photoUrl = 'https://media.istockphoto.com/vectors/silhouette-of-male-head-man-face-in-profile-side-view-vector-id956741868?k=6&m=956741868&s=170667a&w=0&h=i5YCJE7emqMCvB8xGTviXpr-OFknbynAXA_hcGAZ_Vc='
        }
    }
    return (
        <Header {...
            props} photoUrl = {photoUrl}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userData: state.profile.userData
    };
}
export default connect(mapStateToProps, {
    logout
})(HeaderContainer);