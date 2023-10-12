import React from 'react';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
// import initialMovies from '../../utils/constant';
// import apiMovies from '../../utils/MoviesApi';




function Movies({movies}) {

   
    return (
        <>
            <div className="movies__container">
                {/* <Preloader /> */}
                <SearchForm />
                <MoviesCardList movies={movies} />
                <button type="button" className="movies__button-more">Ещё</button>
            </div>
            <Footer />
        </>
    );
}

export default Movies;