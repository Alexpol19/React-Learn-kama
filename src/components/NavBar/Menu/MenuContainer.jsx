import React from 'react';
import style from './Menu.module.css';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';

const Menu = (props) => {
    return(
        <div className={style.menu}>
            {
                props.menu.map( link => <MenuItem key={link.id} name={link.name} linkName={link.link} />)
            }
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        menu: state.navBar.menu
    }
}
const MenuContainer = connect(mapStateToProps)(Menu);
export default MenuContainer;