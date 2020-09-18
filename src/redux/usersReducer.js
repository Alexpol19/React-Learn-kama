import { usersAPI } from "../api/api";

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching:false,
}

const usersReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case SetUsers: {
            newState.usersData = [...action.newUsers]
            newState.usersData = newState.usersData.map((user) => {
                user.followFetching = false;
                return user;
            });
            return newState;
        }
        case SetTotalUsers: {
            newState.totalUsers = action.totalUsers;
            return newState;
        }
        case UpdateCurrentPage: {
            newState.currentPage = action.currentPage;
            return newState;
        }
        case UpdateIsFetching: {
            newState.isFetching = !newState.isFetching;
            return newState;
        }
        case FollowUser: {
            newState.usersData = state.usersData.map( (user) => {
                if( user.id == action.userId){
                    user.followed = true;
                }
                return user;
            })
            return newState;
        }
        case UnfollowUser: {
            newState.usersData = state.usersData.map( (user) => {
                if( user.id == action.userId){
                    user.followed = false;
                }
                return user;
            })
            return newState;
        }
        case FetchingFollow: {
            newState.usersData = state.usersData.map( (user) => {
                if( user.id == action.userId){
                    user.followFetching = !user.followFetching;
                }
                return user;
            })
            return newState;
        }

        default: 
            return state;
    }
}

const FollowUser = 'FollowUser';
const UnfollowUser = 'UnfollowUser';
const SetUsers = 'SetUsers';
const SetTotalUsers = 'SetTotalUsers';
const UpdateCurrentPage = 'UpdateCurrentPage';
const UpdateIsFetching = 'UpdateIsFetching';
const FetchingFollow = 'FetchingFollow';

export const followUser = (id) => {
    return { type: FollowUser,
              userId: id}
}
export const unfollowUser = (id) => {
    return { type: UnfollowUser,
              userId: id}
}
export const setUsers = (newUsers) => {
    return { type: SetUsers,
              newUsers: newUsers}
}
export const setTotalUsers = (totalUsers) => {
    return { type: SetTotalUsers,
              totalUsers: totalUsers}
}
export const updateCurrentPage = (currentPage) => {
    return { type: UpdateCurrentPage,
        currentPage: currentPage}
}
export const updateIsFetching = () => {
    return { type: UpdateIsFetching}
}
export const fetching = (id) => {
    return { type: FetchingFollow, userId: id}
}


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(updateIsFetching());
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setTotalUsers(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(updateIsFetching());
    
}
// ------------------before refactor
// export const followThunkCreator = (userId) => (dispatch) => {
//     dispatch(fetching(userId));
//     usersAPI.follow(userId)
//     .then((resultCode) => {
//         if(resultCode === 0){
//             dispatch(followUser(userId));
//         }
//         dispatch(fetching(userId));
//     })
//     .catch( (err) => {
//         dispatch(fetching(userId));
//         console.log(err);
//     });
// }
// export const unfollowThunkCreator = (userId) => (dispatch) => {
//     dispatch(fetching(userId));
//     usersAPI.unfollow(userId)
//     .then((resultCode) => {
//         if(resultCode === 0){
//             dispatch(unfollowUser(userId));
//         }
//         dispatch(fetching(userId));
//     })
//     .catch( (err) => {
//         dispatch(fetching(userId));
//         console.log(err);
//     });
// }
// ------------------------after refactor
// -------------------------dispatch from param, userId also from param, 
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(fetching(userId));
    let resultCode = await apiMethod(userId);
    if(resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(fetching(userId));
}
export const followThunkCreator = (userId) => (dispatch) => {
    // this is what different between other function
    // let apiMethod = usersAPI.follow.bind(usersAPI); /// bind need to not Lose context
    // let actionCreator = followUser;

    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followUser);
}
export const unfollowThunkCreator = (userId) => (dispatch) => {
    // let apiMethod = usersAPI.unfollow.bind(usersAPI); /// bind need to not Lose context
    // let actionCreator = unfollowUser;

    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowUser);
}


export default usersReducer;