import { profileAPI } from "../api/api";

const initialState = {
    userStatus : '',
    userData: null,
    newPostText: '',
    postsData: [
        {
            id:1,
            likeCount: 2,
            description: 'Hello World',
            url: 'https://klike.net/uploads/posts/2019-05/1556777145_1.jpg'
        },
        {
            id:2,
            likeCount: 5,
            description: 'Hello Peoples',
            url: 'https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg'
        },
    ]
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case AddPost:  // if (action === 'value1')
            let newPost = {
                id:3,
                likeCount: 0,
                description: action.text,
                url: 'https://klike.net/uploads/posts/2019-05/1556777145_1.jpg'
            }
            return {
                ...state, 
                newPostText : '', 
                postsData: [...state.postsData, newPost]
            };
        case DeletePost:  
        console.log(action.postId)
        console.log(state.postsData)
            return {
                ...state, 
                postsData: state.postsData.filter( p => p.id != action.postId)
            };
        case SetUserData:
            return {
                ...state,
                userData: action.userData
            }
        case SetStatus:
            // let status = action.status;
            // if(status == ''){
            //     status = 'Enter Status ...'
            // }
            return {
                ...state,
                userStatus: action.status,
            }
        default: 
            return state;
    }
}

const AddPost = 'AddPost';
const DeletePost = 'AddPost';
const SetUserData = 'SetUserData';
const SetStatus = 'SetStatus';


export const addPostActionCreator = (text) => {
    return { type: AddPost, text: text }
}
export const deletePost = (id) => {
    return { type: DeletePost, postId: id }
}
export const setUserData = (userData) => {
    return { type: SetUserData, userData}
}
export const setStatus = (status) => {
    return { type: SetStatus, status}
}


export const getProfileThunkCreator = (userId) => (dispatch) => {
    dispatch(setUserData())
    profileAPI.getProfile(userId)
    .then((data) => {
        dispatch(setUserData(data))
    })
    .catch( (err) => {
        console.log(err);
    });
}

//--------------------- async await vs then
export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    if(response){
        dispatch(setStatus(response))
    }
}
export const updateStatusThunkCreator = (newStatus) => (dispatch) => {
    profileAPI.updateStatus(newStatus)
    .then((result) => {
        if(result === 0){
            dispatch(setStatus(newStatus));
        }
    })
    .catch( (err) => {
        console.log(err);
    });
}
export default profileReducer;