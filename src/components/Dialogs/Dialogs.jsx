import React from 'react';
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import { Route } from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import DialogsContainer from './DialogsContainer';

const Dialogs = (props) => {
    // need to change when clicked on chat dialog
    let chatId=1;
    
    return(
        <div className={style.dialogs}>
            <DialogsContainer />
            <Route 
                path={"/dialogs/"+chatId} render={ () => 
                    <MessagesContainer />}
            />
            
        </div>
    );
}
export default Dialogs;