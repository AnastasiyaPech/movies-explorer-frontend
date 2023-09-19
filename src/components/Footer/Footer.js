import React from 'react';
// import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text"> Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
            <p className="footer__copyright">&copy;2020</p>
            <nav className ="footer__links">
            <a href="https://practicum.yandex.ru/" target='_blank' rel="noopener noreferrer" className="footer__link">Яндекс.Практикум</a>
            <a href="https://github.com/" target='_blank' rel="noopener noreferrer" className="footer__link">Github</a>
            </nav>
            </div>
        </footer>
    );
}

export default Footer;