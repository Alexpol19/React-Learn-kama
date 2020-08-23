import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={style.author}>
            <img src="http://lorempixel.com/75/75" />
            <div className={style.author__details}>
                <h3>Alex P.</h3>
                <p>Date Birth: <span>19 march</span></p>
                <p>City: <span>Minsk</span></p>
                <p>Education: <span>BSU 11</span></p>
                <p>Web Site: <span>asasa</span></p>
            </div>
        </div>
    );
}

export default ProfileInfo;