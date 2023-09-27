import React from 'react';

function MoviesCard ({ name, link, duration }) {
  
    return (
        <div className="moviescard__container">
            <div className="moviescard__place">
                <img className="moviescard__image" alt={name} src={link}  />
                <button type="button" className="moviescard__button-save">Сохранить</button>
            </div>
            <div className="list__container">
                <p className="list__text">{name}</p>
                    <p className="list__duration">{duration}</p>
            </div>
        </div>
    );
}

export default MoviesCard;