import React from 'react';
import style from './NavBar.module.css';
import FriendsContainer from './Friends/FriendsContainer';
import MenuContainer from './Menu/MenuContainer';

const NavBar = (props) => {

    return(
        <nav>
            <MenuContainer />
            <FriendsContainer />
        </nav>
    );
}
export default NavBar;