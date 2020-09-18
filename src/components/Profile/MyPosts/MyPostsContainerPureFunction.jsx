import React from 'react';
import { addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const MyPostsContainer = React.memo((props) => {
    return (
        <MyPosts {...props} />
    )
});

let mapStateToProps = (state) => {
    
    return {
        posts: state.profile.postsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (formData) => {
            dispatch(addPostActionCreator(formData.postText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);