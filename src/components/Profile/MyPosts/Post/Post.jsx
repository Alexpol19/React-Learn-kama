import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return(
        <div className={style.post}>
            <img src={props.url} />
            <p className={style.post__text}>{props.description}</p>
            <span>{props.likeCount}</span>  <button>Like</button> 
        </div>
    );
}

export default Post;