import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';



function Movies() {
    return (
        <>
            <Header />
            <div className="movies__container">
                {/* <Preloader /> */}
                <SearchForm />
                <MoviesCardList />

            </div>
            <Footer />
        </>
    );
}

export default Movies;