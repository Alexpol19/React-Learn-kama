import React from 'react';
import style from './Header.module.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const HeaderSettings = (props) => {
    return(
        <DropdownButton alignRight id="dropdown-basic-button" title="" size="sm" >
            <Dropdown.Item onClick={props.logout}>Logout</Dropdown.Item>
        </DropdownButton>
    );
}
export default HeaderSettings;