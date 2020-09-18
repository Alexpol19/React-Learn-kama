import React from 'react';
import logo from './logo.svg';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return(
        <header className="containerFluid">
            <div className={'container '+ style.header__line}>
                <NavLink to='/'><img src={logo} /></NavLink>
                {
                    props.isAuth ? <div><span className={style.userName}>{props.login}</span><img src={props.photoUrl} alt="logo"/><button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'} className={style.login}>Login</NavLink>
                }
                
            </div>
        </header> 
    );
}
export default Header;