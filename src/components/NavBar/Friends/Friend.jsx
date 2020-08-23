import React from 'react';
import style from './Friends.module.css';

const Friend = (props) => {
    return(
        <a href="#" className={style.friend}>
            <img src={props.url} />
            <span>{props.name}</span>
        </a>
    );
}
export default Friend;