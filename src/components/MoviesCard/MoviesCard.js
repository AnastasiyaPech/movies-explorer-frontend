import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ nameRU, image, duration, trailerlink }) {
    const location = useLocation().pathname;
    const [isSave, setSave] = useState(false);
    function handleSetSave() {
        setSave(!isSave);
    }

    return (
        <div className="moviescard__container">
            <div className="moviescard__place">
                <a href={`${trailerlink}`} target='_blank' rel="noopener noreferrer" className="moviescard__link">
                    <img className="moviescard__image" alt={`${nameRU}`}
                        src={`https://api.nomoreparties.co/${image.url}`} /></a>
                <button type="button"
                    className={`moviescard__button-save 
                    ${isSave && 'moviescard__button-save_saved'}
                    ${location === "/saved-movies" ? "moviescard__button-delete" : ''}`}
                    onClick={handleSetSave}>
                    Сохранить</button>
            </div>
            <div className="list__container">
                <p className="list__text">{`${nameRU}`}</p>
                <p className="list__duration">{duration}</p>
            </div>
        </div>

    );
}

export default MoviesCard;

