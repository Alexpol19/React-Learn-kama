import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend';

const Friends = (props) => {
    return(
        <div className={style.friends}>
            <h2>Friends</h2>
            <div className={style.friendsLinks}>
                {
                    props.friends.map( friend => <Friend key={friend.id} name={friend.name} url={friend.url} />)
                }
            </div>
        </div>
    );
}
export default Friends;