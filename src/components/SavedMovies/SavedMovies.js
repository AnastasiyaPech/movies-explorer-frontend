import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader';
import initialMoviesSaved from '../../utils/constant2'




function SavedMovies () {
    return (
        <>
        <Header />
        <div className="movies__container">
            {/* <Preloader /> */}
            <SearchForm />
            <MoviesCardList list={initialMoviesSaved}/>
        </div>
        <Footer />
    </>
    );
}

export default SavedMovies;