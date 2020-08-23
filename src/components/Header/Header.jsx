import React from 'react';
import logo from './logo.svg';
import style from './Header.module.css';

const Header = () => {
    return(
        <header className="containerFluid">
            <div className={'container '+ style.header__line}>
                <img src={logo} />   
            </div>
        </header> 
    );
}
export default Header;