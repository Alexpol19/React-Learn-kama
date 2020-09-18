import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, setUserData} from '../../redux/profileReducer'
import { withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthCheck';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    constructor (props) {
        super(props);

        // this.userId = this.props.match.params.userId;
        this.updateStatus = this.updateStatus.bind(this);
    }
    componentDidMount() {
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
        // this.props.updateIsFetching();
        // first call
        // if(!this.props.profileData){
        //     this.props.getProfileThunkCreator(this.userId);
        //     this.props.getStatusThunkCreator(this.userId);
        // }
        // else if((this.props.profileData.userId != this.userId)){
        //     this.props.getProfileThunkCreator(this.userId);
        //     this.props.getStatusThunkCreator(this.userId);
        // }
        // else{

        // }
        
        
    }
    componentDidUpdate() {
        // if(!this.userId && (this.props.userId != null)){
        //     this.userId = this.props.userId;
        //     this.props.setUserData()
        // }
    }

    updateStatus(status) {
        this.props.updateStatusThunkCreator(status)
    }
    render() {
        
        return (
            <div>
                <Profile {...this.props} authId={this.props.userId} updateStatus={this.updateStatus} />
            </div>
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
    }), 
    withRouter, 
    withAuthRedirect
    )(ProfileContainer);