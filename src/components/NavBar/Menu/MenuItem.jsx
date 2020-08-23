import React from 'react';
import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
    return(
        <div className={style.menu}>
            <NavLink to={'/'+props.linkName} activeClassName={style.active}>{props.name}</NavLink>
            {/* <NavLink to='/dialogs' activeClassName={style.activeMessages}>Dialogs</NavLink>
            <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            <NavLink to='/settings' activeClassName={style.active} style={{'marginTop':'30px'}}>Settings</NavLink> */}
        </div>
    );
}
export default MenuItem;