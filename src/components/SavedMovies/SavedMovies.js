import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import initialMoviesSaved from '../../utils/constant2'




function SavedMovies({movies}) {
    return (
        <>
            <div className="movies__container">
                <SearchForm />
                { <MoviesCardList movies={movies} />}
            </div>
            <Footer />
        </>
    );
}

export default SavedMovies;

