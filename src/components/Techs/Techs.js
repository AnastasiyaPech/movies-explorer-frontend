import React from 'react';



function Techs() {
    return (
        <div className="techs__container">
            <h2 className="techs__text">Технологии</h2>
            <h1 className="techs__title">7 технологий</h1>
            <p className="techs__subtitle">На курсе веб-разработки
                мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__table">
                    <li className="techs__column">HTML</li>
                    <li className="techs__column">CSS</li>
                    <li className="techs__column">JS</li>
                    <li className="techs__column">React</li>
                    <li className="techs__column">Git</li>
                    <li className="techs__column">Express.js</li>
                    <li className="techs__column">mongoDB</li>
                </ul>
        </div>
    );
}

export default Techs;