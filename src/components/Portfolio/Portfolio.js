import React from 'react';
import arrow from '../../images/arrow.svg'



function Portfolio() {
    return (
        <div className="portfolio__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className="portfolio__links">
                <div className="link__container">
                    <a href="https://github.com/yandex-praktikum/how-to-learn.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">Статичный сайт</a>
                    <a href="https://github.com/yandex-praktikum/how-to-learn.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">
                        <img src={arrow} className="portfolio__logo" alt="фото" />
                    </a>
                </div>
                <div className="link__container">
                    <a href="https://github.com/AnastasiyaPech/russian-travel.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">Адаптивный сайт</a>
                    <a href="https://github.com/AnastasiyaPech/russian-travel.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">
                        <img src={arrow} className="portfolio__logo" alt="фото" />
                    </a>
                </div>
                <div className="link__container">
                    <a href="https://github.com/yandex-praktikum/react-mesto-api-full-gha.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">Одностраничное приложение</a>
                    <a href="https://github.com/yandex-praktikum/react-mesto-api-full-gha.git"
                        target='_blank' rel="noopener noreferrer" className="portfolio__link">
                        <img src={arrow} className="portfolio__logo" alt="фото" />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Portfolio;