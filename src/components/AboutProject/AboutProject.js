import React from 'react';


function AboutProject() {
    return (
        <div className="project__container">
            <h2 className="project__text">О проекте</h2>
            <ul className="table">
                <li className="table__column">
                    <h3 className="table__heading">Дипломный проект включал 5 этапов</h3>
                    <p className="table__text">Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="table__column">
                    <h3 className="table__heading">На выполнение диплома ушло 5 недель</h3>
                    <p className="table__text">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="deadline__table">
                    <p className="deadline__text-black">1 неделя</p>
                    <p className="deadline__text">4 недели</p>
            </div>
            <div className="stage__table">
                <p className="deadline__column-back">Back-end</p>
                <p className="deadline__column">Front-end</p>
            </div>
        </div>
    );
}

export default AboutProject;