import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ movies, show, onMovieSave, onMovieDelete, messageError }) {

    return (
        <>
            <div className="moviescardlist__container">
            {messageError && <span className="form__api-error">{messageError}</span>}
                {
                    movies
                        .slice(0, show)
                        .map((data) => {
                            return (<MoviesCard
                                key={data.id || data._id}
                                data={data}
                                onMovieSave={onMovieSave}
                                onMovieDelete={onMovieDelete}
                            />)
                        })
                }
            </div>
        </>
    );
}

export default MoviesCardList;