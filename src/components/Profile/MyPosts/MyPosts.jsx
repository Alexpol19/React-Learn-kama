import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostText=React.createRef();
    let addPost=() =>{
        props.addPost();
    }
    let onInputPostText = () => {
        props.onInputPostText(newPostText.current.value);
    }
    return(
        <div className={style.posts}>
            <h2>My posts</h2>
            <div className={style.posts__new}>
                <input onInput={onInputPostText} placeholder="New post" ref={newPostText} value={props.profile.newPostText} />
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={style.posts__others}>
                {
                    props.profile.postsData.map((post)=>{
                        return <Post id={post.id} key={post.id} likeCount={post.likeCount}  description={post.description} url={post.url} />
                    })
                }
            </div>
        </div>
    );
}

export default MyPosts;