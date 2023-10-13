import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import initialMovies from '../../utils/constant';
// import Preloader from '../Preloader/Preloader';



function MoviesCardList({ movies, onMovieSave, onMovieDelete }) {


    return (
        <div className="moviescardlist__container">
            {
                movies.map((data) => {
                    return (<MoviesCard
                        key={data.id}
                        data={data}
                        onMovieSave={onMovieSave}
                        onMovieDelete={onMovieDelete}
                    />)
                    // {/* </MoviesCard> */}
                })
            }
        </div>
    );
}

export default MoviesCardList;