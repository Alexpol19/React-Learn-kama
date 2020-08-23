import React from 'react';
import style from './NavBar.module.css';
import Menu from './Menu/Menu';
import Friends from './Friends/Friends';

const NavBar = (props) => {
    return(
        <nav>
            <Menu menu={props.navBarData.menu} />
            <Friends friends={props.navBarData.friends} />
        </nav>
    );
}
export default NavBar;