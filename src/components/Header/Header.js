import { React } from 'react';
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import NavigationHeader from '../NavigationHeader/NavigationHeader';

function Header({ loggedIn }) {

    const location = useLocation().pathname;

    return (
        <header className="header">
            <div className={`header__container ${location === "/" ? "header__container_pink" : ''}`}>
                <Link to="/" >
                    <img src={logo} className="header__logo" alt="логотип" />
                </Link>
                <div className="header__navigation">
                    {loggedIn && <NavigationHeader />}
                </div>
                {!loggedIn && (
                    < nav className="navigation__links-first">
                        <Link to="/signup" className="navigation__link-first">Регистрация</Link>
                        <Link to="/signin" className="navigation__link-first navigation__link-container">
                            <button type="button" className="navigation__button-black">Войти</button>
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;