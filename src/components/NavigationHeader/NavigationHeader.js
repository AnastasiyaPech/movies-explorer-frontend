import React from 'react';
import { Link } from 'react-router-dom'; 


function NavigationHeader () {
    return (
        <div className="navigation__container">
           <nav className ="navigation__links">
            <Link to="/movies" className="navigation__link">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
            <Link to="/profile" className="navigation__link">
                <p className="navigation__text">Аккаунт</p>
                <button type="button" className="navigation__button"></button>
                </Link>
            </nav>
        </div>
    );
}

export default NavigationHeader;