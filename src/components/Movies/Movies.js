import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import initialMovies from '../../utils/constant';



function Movies() {
    return (
        <>
            <Header />
            <div className="movies__container">
                {/* <Preloader /> */}
                <SearchForm />
                <MoviesCardList list={initialMovies}/>
                <button type="button" className="movies__button-more">Ещё</button>
                
            </div>
            <Footer />
        </>
    );
}

export default Movies;