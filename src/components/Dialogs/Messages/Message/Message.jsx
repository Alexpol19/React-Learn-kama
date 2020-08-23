import React from 'react';
import style from './Message.module.css'

const Message = (props) =>{
    // 1 - my |  0 - companion
    let own = '';
    if(props.own == 1){
        own = style.my;
    }else{
        own = style.companion;
    }
    return (
        // or .my, or .companion
        <div className={style.message+' '+own}>
            <div className={style.message__left}>
                <img src={props.url} />
                <a href="#">{props.name}</a>
            </div>
            <div className={style.message__right}><p>{props.messageText}</p></div>
        </div>
    );
}

export default Message;