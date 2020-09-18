
import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from './NewPostFrom';

const MyPosts = (props) => {
    return(
        <div className={style.posts}>
            <h2>My posts</h2>
            <div className={style.posts__new}>
                <NewPostForm onSubmit={props.addPost} />                
            </div>
            <div className={style.posts__others}>
                {
                    props.posts.map((post)=>{
                        return <Post id={post.id} key={post.id} likeCount={post.likeCount}  description={post.description} url={post.url} />
                    })
                }
            </div>
        </div>
    );
}

export default MyPosts;