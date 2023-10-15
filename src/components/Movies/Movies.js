import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import apiMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import useWindowSize from '../MoviesCardList/useWindowSize';


function Movies({ movies, isLoading, onMovieSave, onMovieDelete }) {
    const width = window.innerWidth;

    const [defaultShow, defaultInc] = pickDefaultShow(width);
    const [show, setShow] = useState(defaultShow);
    const [inc, setInc] = useState(defaultInc);

    const windowSize = useWindowSize()

    let myResize = () => {
        const [, newInc] = pickDefaultShow(windowSize.width);
        setInc(newInc);
        setShow(show + newInc - show % newInc);
    };


    useEffect(myResize, [windowSize]);

    function pickDefaultShow(width) {
        if (width > 1170) {
            return [12, 3];
        }
        else if (width > 590) {
            return [8, 2];
        }
        else {
            return [5, 2];
        }
    }

    function handleShow() {
        setShow(show + inc);
    }

    return (
        <>
            <div className="movies__container">
                <SearchForm />
                {isLoading ?
                    <Preloader />
                    : <MoviesCardList movies={movies} show={show} onMovieSave={onMovieSave} onMovieDelete={onMovieDelete}/>}
                <button type="button" className="movies__button-more" onClick={handleShow}>Ещё</button>
            </div>
            <Footer />
        </>
    );
}

export default Movies;