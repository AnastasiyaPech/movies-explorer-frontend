import React from 'react';
import arrow from '../../images/arrow.svg'



function Portfolio () {
    return (
        <div className="portfolio__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className ="portfolio__links">
            <a href="https://github.com/yandex-praktikum/how-to-learn.git" 
            target='_blank' rel="noopener noreferrer" className="portfolio__link">Статичный сайт 
            <img src={arrow} className="portfolio__logo" alt="фото" /></a>
            <a href="https://github.com/AnastasiyaPech/russian-travel.git" 
            target='_blank' rel="noopener noreferrer" className="portfolio__link">Адаптивный сайт 
            <img src={arrow} className="portfolio__logo" alt="фото" /></a>
            <a href="https://github.com/yandex-praktikum/react-mesto-api-full-gha.git" 
            target='_blank' rel="noopener noreferrer" className="portfolio__link">Одностраничное приложение 
            <img src={arrow} className="portfolio__logo" alt="фото" /></a>
            </nav>
        </div>
    );
}

export default Portfolio;