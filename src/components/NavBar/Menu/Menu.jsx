import React from 'react';
import style from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = (props) => {
    return(
        <div className={style.menu}>
            {
                props.menu.map( link => <MenuItem key={link.id} name={link.name} linkName={link.link} />)
            }
        </div>
    );
}
export default Menu;