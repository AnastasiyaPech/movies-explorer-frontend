import React from 'react';
import arrow from '../../images/arrow.svg'



function Portfolio() {
    return (
        <section className="portfolio__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className="portfolio__links">
                <div className="link__container">
                    <p className="portfolio__text">Статичный сайт</p>
                    <a href="https://github.com/AnastasiyaPech/how-to-learn.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">
                        <img src={arrow} className="portfolio__logo" alt="указатель" />
                    </a>
                </div>
                <div className="link__container">
                    <p className="portfolio__text">Адаптивный сайт</p>
                    <a href="https://github.com/AnastasiyaPech/russian-travel.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">
                        <img src={arrow} className="portfolio__logo" alt="указатель" /></a>
                </div>
                <div className="link__container">
                    <p className="portfolio__text">Одностраничное приложение</p>
                    <a href="https://github.com/AnastasiyaPech/react-mesto-api-full-gha.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">
                        <img src={arrow} className="portfolio__logo" alt="указатель" /></a>
                </div>
            </nav>
        </section>
    );
}

export default Portfolio;