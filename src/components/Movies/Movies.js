import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import useWindowSize from '../MoviesCardList/useWindowSize';
import apiMovies from '../../utils/MoviesApi';

function Movies({ savedMovies, onMovieSave, onMovieDelete }) {
    const width = window.innerWidth;

    const [defaultShow, defaultInc] = pickDefaultShow(width);
    const [show, setShow] = useState(defaultShow);
    const [inc, setInc] = useState(defaultInc);

    const [isLoading, setisLoading] = useState(false); // стейт прелоадера
    const [messageError, setMessageError] = useState(''); // стейт ошибки

    const [search, setSearch] = useState(
        localStorage.getItem('searchString')
            ? localStorage.getItem('searchString')
            : ''
    ); // поиск по фильмам
    const [short, setShort] = useState(
        localStorage.getItem('short')
            ? JSON.parse(localStorage.getItem('short'))
            : false
    ); // поиск по фильмам

    const [movies, setMovies] = useState([]);

    const [filteredMovies, setFilteredMovies] = useState(
        localStorage.getItem('filteredMovies')
            ? JSON.parse(localStorage.getItem('filteredMovies'))
            : []
    ); // отфильтрованные фильмы

    function filterMovies(movies, searchString, short) {
        return movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(searchString.toLowerCase())
                || movie.nameEN.toLowerCase().includes(searchString.toLowerCase())
        })
            .filter((movie) => {
                if (short) {
                    return movie.duration < 40
                } else {
                    return true;
                }
            })
    }

    function addSavedMovieIdToMovies(beatfilmMovies) {
        const added = beatfilmMovies.map((movie) => {
            const findSavedMovie = savedMovies
                .find((savedMovie) => savedMovie.movieId === movie.id)
            if (findSavedMovie) {
                movie._id = findSavedMovie._id;
            } else {
                delete movie._id;
            }
            return movie;
        })
        return added;
    }

    function handleSearchMovie(e) {
        e.preventDefault();

        const searchString = e.target[0].value;
        const shortValue = e.target[2].checked;

        if (searchString.length === 0) {
            setMessageError('Нужно ввести ключевое слово');
            setFilteredMovies([])
            return;
        } else {
            setSearch(searchString);
            setShort(shortValue);
            setMessageError('');
        }

        getBeatfilmMovies()
            .then(movies => {
                console.log(movies)
                const filter = filterMovies(movies, searchString, shortValue)
                console.log(filter)
                if (filter.length === 0) {
                    setMessageError('Ничего не найдено')
                }
                return filter;
            })
            .then(filteredMovies => {
                setFilteredMovies(filteredMovies);
                return filteredMovies;
            })
            .then(filteredMovies => {
                if (filterMovies) {
                    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
                }

                localStorage.setItem('searchString', searchString)
                localStorage.setItem('short', JSON.stringify(shortValue))
            })
            .finally(() => {
                setisLoading(false);
            });
    }

    function getBeatfilmMovies() {
        if (movies.length === 0) {
            return apiMovies.getInitialMovies()
                .then((beatfilmMovies) => {
                    setMovies(beatfilmMovies);
                    return beatfilmMovies;
                })
                .catch(err => {
                    console.log(err);
                    setMessageError(err)               //ничего не найдено или произошла ошибка
                })
        } else {
            return new Promise((resolve) => {
                resolve(movies)
            });
        }
    }

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
                <SearchForm
                    onSearchMovie={handleSearchMovie}
                    search={search}
                    short={short}
                />
                {isLoading ?
                    <Preloader />
                    : <MoviesCardList
                        movies={addSavedMovieIdToMovies(filteredMovies)}
                        show={show}
                        onMovieSave={onMovieSave}
                        onMovieDelete={onMovieDelete}
                        messageError={messageError}
                    />}
                <button type="button" className="movies__button-more" onClick={handleShow}>Ещё</button>
            </div>
            <Footer />
        </>
    );
}

export default Movies;