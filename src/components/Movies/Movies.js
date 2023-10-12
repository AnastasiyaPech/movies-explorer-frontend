import React from 'react';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import apiMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';




function Movies({ movies, isLoading }) {


    return (
        <>
            <div className="movies__container">
                <SearchForm />
                {isLoading ?
                    <Preloader />
                    : <MoviesCardList movies={movies} />}
                <button type="button" className="movies__button-more">Ещё</button>
            </div>
            <Footer />
        </>
    );
}

export default Movies;