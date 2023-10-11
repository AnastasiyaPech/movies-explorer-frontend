import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader';
import initialMoviesSaved from '../../utils/constant2'




function SavedMovies() {
    return (
        <>
            <div className="movies__container">
                {/* <Preloader /> */}
                <SearchForm />
                <MoviesCardList list={initialMoviesSaved} />
            </div>
            <Footer />
        </>
    );
}

export default SavedMovies;