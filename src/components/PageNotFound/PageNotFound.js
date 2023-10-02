import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="not-found__container">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <Link to="/" className="link__to-main" >Назад</Link>
        </div>
    );
}

export default PageNotFound;