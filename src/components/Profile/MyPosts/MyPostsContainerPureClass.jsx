import React, { PureComponent } from 'react';
import { addPostActionCreator, onInputPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

class MyPostsContainer extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state;
    // }
    render() {
        console.log('render');
        return (
            <MyPosts {...this.props} />
        )
    }
}

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