import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend';
import { connect } from 'react-redux';

const Friends = (props) => {
    return(
        <div className={style.friends}>
            <h2>Friends</h2>
            <div className={style.friendsLinks}>
                {
                    props.friends.map( (friend) => {
                        if(friend.followed == true ){
                            return <Friend key={friend.id} friend={friend} />
                        }
                })
                }
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        friends: state.users.usersData
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;