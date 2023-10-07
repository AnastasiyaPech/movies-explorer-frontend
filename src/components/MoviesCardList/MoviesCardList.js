import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import initialMovies from '../../utils/constant';


function MoviesCardList({list}) {
    return (
        <div className="moviescardlist__container">
            {
                list.map((data) => { 
                    return <MoviesCard
                     key={data.movieId} 
                     name={data.nameRu} 
                     link={data.image} 
                     duration={data.duration} 
                     >
                     </MoviesCard> 
                     
                }) 
            }
        </div>


    );
}

export default MoviesCardList;