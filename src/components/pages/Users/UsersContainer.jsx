import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../../redux/usersReducer';
import { getPageSize, getTotalUsers, getCurrentPage, getIsFetching, getIsAuth, getAuthId, getUsersReselect } from '../../../redux/users-selectors';
import Users from './Users';
import { withAuthRedirect } from '../../../hoc/AuthCheck';
import { compose } from 'redux';

class UsersContainerAPI extends React.Component{
    componentDidMount(){
        // if users not in redux then load users
        if(this.props.users.length == 0){
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        }   
    }
    updateUsers = (currentPage) => {
        this.props.updateCurrentPage(currentPage)
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
    }
    render() {
        return (
            // <Users users={this.props.users} currentPage={this.props.currentPage}
            //     totalUsers={this.props.totalUsers} pageSize={this.props.pageSize}
            //     updateUsers={this.updateUsers} 
            //     updateCurrentPage={this.props.updateCurrentPage} subscribeUser={this.props.subscribeUser} 
            //     isFetching={this.props.isFetching}
            // />
            <Users {...this.props} updateUsers={this.updateUsers}
            />
        );
    }
}
// -------------old mapStateToProps
// let mapStateToProps = (state) => {
//     return {
//         users: state.users.usersData,
//         pageSize: state.users.pageSize,
//         totalUsers: state.users.totalUsers,
//         currentPage: state.users.currentPage,
//         isFetching: state.users.isFetching,

//         auth: state.auth.isAuth,
//         authId: state.auth.id
//     }
// }
// --------------------new mapStateToProps , with selectors
let mapStateToProps = (state) => {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),

        auth: getIsAuth(state),
        authId: getAuthId(state)
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         subscribeUser : (id) => {
//             dispatch(subscribeUserActionCreator(id));
//         },
//         setUsers : (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setTotalUsers: (total) => {
//             dispatch(setTotalUsersActionCreator(total));
//         },
//         updateCurrentPage: (current) => {
//             dispatch(updateCurrentPage(current))
//         },
//         updateIsFetching: () => {
//             dispatch(updateIsFetching())
//         }
//     };
// }

// let AuthRedirectContainer = withAuthRedirect(UsersContainerAPI)

// const UsersContainer = connect(mapStateToProps, {
//         updateCurrentPage,
//         getUsersThunkCreator,
//         followThunkCreator,
//         unfollowThunkCreator,
//     }
// )(AuthRedirectContainer)

export default compose(
    connect(mapStateToProps, {
        updateCurrentPage,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator,
    }), 
    // withAuthRedirect
)(UsersContainerAPI);