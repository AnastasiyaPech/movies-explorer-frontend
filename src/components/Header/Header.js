import { React, useState } from 'react';
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import NavigationHeader from '../NavigationHeader/NavigationHeader';

function Header() {

    const location = useLocation().pathname;

    const [loggedIn, setLoggedIn] = useState(true);
    function handleSetLoggedIn() {
        setLoggedIn(!loggedIn);
    }


    return (
        <header className="header">
            <div className={`header__container ${location === "/" ? "header__container_pink" : ''}`}>
                    <img src={logo} className="header__logo" alt="логотип" onClick={handleSetLoggedIn} />
                {loggedIn ? (
                    <div className="header__navigation">
                        {location === "/" && <NavigationHeader />}
                        {location === "/movies" && <NavigationHeader />}
                        {location === "/saved-movies" && <NavigationHeader />}
                        {location === "/profile" && <NavigationHeader />}
                     </div>
                ) : (
                    < nav className="navigation__links-first">
                    <Link to="/signup" className="navigation__link">Регистрация</Link>
                    <Link to="/signin" className="navigation__link navigation__link_container">
                        <button type="button" className="navigation__button-black">Войти</button>
                    </Link>
                </nav>
                )}
            </div>
        </header>
    );
}

export default Header;