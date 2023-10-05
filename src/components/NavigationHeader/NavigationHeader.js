import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function NavigationHeader() {
    const location = useLocation().pathname;
    // бургер меню
    const [isOpen, setOpen] = useState();
    function handleSetNavClick() {
        setOpen(!isOpen);
    }

    return (
        <>
            <div className={`navigation__blur ${isOpen ? "active" : ""}`} />
            < nav className={`navigation__links ${isOpen ? "active" : ""}`}>
                <Link to="/movies" className="navigation__link navigation__link_main">Главная</Link>
                <Link to="/movies" className="navigation__link">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
                <Link to="/profile" className="navigation__link navigation__link_container">
                    <p className="navigation__text">Аккаунт</p>
                    <button type="button" className={`navigation__button ${location === "/" && "navigation__button_pink"}`}></button>
                </Link>
            </nav>
            <button type="button"
                className={`button__burger-menu ${isOpen ? "button__burger-menu_close" : "button__burger-menu"}`}
                onClick={handleSetNavClick}
            >
            </button>

        </>
    );
}

export default NavigationHeader;
