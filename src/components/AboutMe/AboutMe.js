import React from 'react';
import foto from '../../images/pic_foto_pic.svg';


function AboutMe() {
    return (
        <div className="aboutme__container">
            <h2 className="aboutme__text">Студент</h2>
            <div className="content__container">
                <div className="list">
                    <h3 className="list__heading">Виталий</h3>
                    <p className="list__subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="list__paragrath">Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                        Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
                        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
                        и ушёл с постоянной работы.</p>
                    <a href="https://github.com/" target='_blank' rel="noopener noreferrer" className="footer__link">Github</a>
                </div>
                <img src={foto} className="aboutme__foto" alt="фото Виталия" />
            </div>
        </div>
    );
}

export default AboutMe;