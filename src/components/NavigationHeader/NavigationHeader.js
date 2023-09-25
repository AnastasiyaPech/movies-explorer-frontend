import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function NavigationHeader() {
    const location = useLocation().pathname;
    return (
        <nav className="navigation__links">
            <Link to="/movies" className="navigation__link">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
            <Link to="/profile" className="navigation__link navigation__link_container">
                <p className="navigation__text">Аккаунт</p>
                <button type="button" className={`navigation__button ${location ==="/" && "navigation__button_pink"}`}></button>
            </Link>
        </nav>

    );
}

export default NavigationHeader;
