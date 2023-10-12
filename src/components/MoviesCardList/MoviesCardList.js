import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import initialMovies from '../../utils/constant';
// import Preloader from '../Preloader/Preloader';



function MoviesCardList({ movies }) {


    return (
        <div className="moviescardlist__container">
            {
                movies.map((data) => {
                    return (<MoviesCard
                        key={data.id}
                        nameRU={data.nameRU}
                        image={data.image}
                        duration={data.duration}
                        trailerlink={data.trailerLink}
                    >
                    </MoviesCard>)
                })
            }
        </div>


    );
}

export default MoviesCardList;