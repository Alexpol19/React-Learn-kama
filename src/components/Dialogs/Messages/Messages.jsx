import React from 'react';
import style from './Messages.module.css';
import Message from './Message/Message';
import NewMessageForm from './NewMessageForm';

const Messages = (props) =>{
    return (
        <div className={style.messages}>
            {
                props.dialog.messagesData
                    .map( message => <Message id={message.id} key={message.id} name={message.name} messageText={message.messageText} url={message.url} own={message.own} /> )
            }
            <div className={style.newMessage}>
                <NewMessageForm onSubmit={props.sendMessage} />
            </div>
        </div>
    );
}

export default Messages;