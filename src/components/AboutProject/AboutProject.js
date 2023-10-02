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
            <ul className="deadline__table">
                <li className="deadline__column">
                    <p className="deadline__text deadline__text_black">1 неделя</p>
                    <p className="deadline__text deadline__text_shadow">Back-end</p>
                </li>
                <li className="deadline__column deadline__column_right">
                    <p className="deadline__text deadline__text_grey">4 недели</p>
                    <p className="deadline__text deadline__text_shadow">Front-end</p>
                </li>
            </ul>

        </div>
    );
}

export default AboutProject;