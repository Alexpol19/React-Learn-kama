import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, setUserData, savePhoto, saveDetails} from '../../redux/profileReducer'
import { withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthCheck';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    constructor (props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userId != this.props.match.params.userId){
            this.refreshProfile();
        }
    }
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);

        
        if(!this.userId && (this.props.userId != null)){
            this.userId = this.props.userId;
            this.props.setUserData()
        }
    }

    updateStatus(status) {
        this.props.updateStatusThunkCreator(status)
    }
    render() {
        
        return (
            <>
                <Profile {...this.props} authId={this.props.userId} updateStatus={this.updateStatus} />
            </>
        )
        
        
    }
}

let mapStateToProps = (state) => {
    return {
        profileData: state.profile.userData,
        userId: state.auth.id,
        status: state.profile.userStatus,
    }
}


export default compose(
    connect(mapStateToProps, {
        updateStatusThunkCreator,
        getStatusThunkCreator,
        getProfileThunkCreator,
        setUserData,
        savePhoto,
        saveDetails
    }), 
    withRouter, 
    withAuthRedirect
    )(ProfileContainer);