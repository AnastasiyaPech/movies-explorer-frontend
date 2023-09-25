import React from 'react';
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import NavigationHeader from '../NavigationHeader/NavigationHeader';

function Header() {
    const location = useLocation().pathname;
    return (
        <header className="header">
            <div className={`header__container ${location ==="/" ? "header__container_pink" : ''}`}>
            <Link to="/" className="header__link"><img src={logo} className="header__logo" alt="логотип" /></Link>
            <div className="header__navigation">
                {/* {loggedIn && <p className="header__text">{email}</p>}
                {loggedIn && <Link to="/sign-in" className="header__link" onClick={logOut}>Выйти</Link>}
                {location ==="/signin" && <Link to="/sign-up" className="header__link">Регистрация</Link>}
                {location ==="/signup" && <Link to="/sign-in" className="header__link">Войти</Link>} */}
                {location ==="/" &&  <NavigationHeader />}
                {location ==="/movies" &&  <NavigationHeader />}
                {location ==="/saved-movies" &&  <NavigationHeader />}
                {location ==="/profile" &&  <NavigationHeader />} 
            </div>
            </div>
        </header>
    );
}

export default Header;