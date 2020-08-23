import React from 'react';
import style from './Dialogs.module.css'
import Messages from './Messages/Messages';
import Dialog from './Dialog/Dialog';
import { Route } from 'react-router-dom';

const Dialogs = (props) => {
    // need to change when clicked on chat dialog
    let chatId=props.dialogs[0].id;
    
    return(
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {
                    props.dialogs
                        .map( dialog => <Dialog id={dialog.id} key={dialog.id} name={dialog.name} /> )
                }
                
            </div>
            <Route 
                path={"/dialogs/"+chatId} render={ () => 
                    <Messages 
                        dialog={props.dialogs[0]}
                        addMessage={props.addMessage}
                        onChangeMessageText={props.onChangeMessageText}
                         />}
            />
            
        </div>
    );
}
export default Dialogs;