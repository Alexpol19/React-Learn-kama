import React from 'react';
import style from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return(
        <NavLink to={"/dialogs/"+props.id} activeClassName={style.active} className={style.dialog}>{props.name}</NavLink>
            
    );
}
export default Dialog;