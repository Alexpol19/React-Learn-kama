import React from 'react';
import style from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) =>{
    let newMessageText=React.createRef();
    let sendMessage = () => {
        props.addMessage();
    }
    let onInputMessageText =() =>{
        props.onChangeMessageText(newMessageText.current.value);
    }
    
    return (
        <div className={style.messages}>
            {
                props.dialog.messagesData
                    .map( message => <Message id={message.id} key={message.id} name={message.name} messageText={message.messageText} url={message.url} own={message.own} /> )
            }
            <div className={style.newMessage}>
                <input placeholder="Message" onInput={onInputMessageText} ref={newMessageText} value={props.dialog.newMessageText} />
                <button onClick={ sendMessage }>Send</button>
            </div>
        </div>
    );
}

export default Messages;