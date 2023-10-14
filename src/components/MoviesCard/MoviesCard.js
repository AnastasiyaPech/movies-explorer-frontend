import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ data, onMovieSave, onMovieDelete }) {
    const location = useLocation().pathname;
    const [isSave, setSave] = useState(false);
    const [id, setId] = useState('');

    function handleChange() {
        if (!isSave) {
            onMovieSave({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailerLink: data.trailerLink,
                thumbnail: data.thumbnail,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN
            })
                .then((data) => {
                    console.log(data)
                    setId(data._id);
                });
        } else {
            onMovieDelete(id);
        }
        setSave(!isSave);
    }

    function timeConvert(min) {
        let hours = Math.floor(min / 60);
        let minutes = min % 60;
        return (`${hours} ч ${minutes} м`);
    }

    return (
        <div className="moviescard__container">
            <div className="moviescard__place">
                <a href={`${data.trailerlink}`} target='_blank' rel="noopener noreferrer" className="moviescard__link">
                    <img className="moviescard__image" alt={`${data.nameRU}`}
                        src={`https://api.nomoreparties.co/${data.image.url}`} /></a>
                <button type="button"
                    className={`moviescard__button-save 
                    ${isSave && 'moviescard__button-save_saved'}
                    ${location === "/saved-movies" ? "moviescard__button-delete" : ''}`}
                    onClick={handleChange}>
                    {/* onClick={handleSetSave}  */}
                    Сохранить</button>
            </div>
            <div className="list__container">
                <p className="list__text">{`${data.nameRU}`}</p>
                <p className="list__duration">{timeConvert(data.duration)}</p>
            </div>
        </div>

    );
}

export default MoviesCard;

