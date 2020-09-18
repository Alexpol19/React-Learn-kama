import React from 'react';
import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
    return(
        <div className={style.menu}>
            <NavLink to={'/'+props.linkName} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    );
}
export default MenuItem;