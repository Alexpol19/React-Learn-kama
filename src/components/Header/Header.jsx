import React from 'react';
import logo from './../../assets/logo.svg';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import HeaderSettings from './HeaderSettings';

const Header = (props) => {
    return(
        <header className="containerFluid">
            <div className={cn('container', style.header__line)}>
                <NavLink to='/'><img src={logo} /></NavLink>
                {
                    props.isAuth 
                    ? <div className={style.userTop}>
                            <NavLink to="/profile" className={style.userLink}><span className={style.userName}>{props.login}</span><img src={props.photoUrl} alt="logo"/></NavLink>
                            <HeaderSettings logout={props.logout} />
                     </div> 
                    : <NavLink to={'/login'} className={style.login}>Login</NavLink>
                }               
            </div>
        </header> 
    );
}
export default Header;