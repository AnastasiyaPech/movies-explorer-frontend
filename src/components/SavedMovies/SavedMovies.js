import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies({ getMovies, onMovieDelete }) {

    const [messageError, setMessageError] = useState('');

    const [search, setSearch] = useState(''); // поиск по фильмам
    const [short, setShort] = useState(false); // поиск по фильмам


    const [filteredMovies, setFilteredMovies] = useState([]); // отфильтрованные фильмы

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

    function handleSearchMovie(e) {
        e.preventDefault();

        const searchString = e.target[0].value;
        const shortValue = e.target[2].checked;

        setSearch(searchString);
        setShort(shortValue);
        new Promise((resolve) => {
            resolve(getMovies)
        })
            .then(movies => {
                const filter = filterMovies(movies, searchString, shortValue)
                if (filter.length === 0) {
                    setMessageError('Ничего не найдено')
                }
                return filter;
            })
            .then(filteredMovies => {
                setFilteredMovies(filteredMovies);
                return filteredMovies;
            })
    }

    function onMovieDeleteWithFilter(id) {
        onMovieDelete(id).then(data => {
            setFilteredMovies((state) => {
                return state.filter((item) => item._id !== id)
            });
        })
    }


    return (
        <>
            <div className="movies__container">
                <SearchForm
                    onSearchMovie={handleSearchMovie}
                    search={search}
                    short={short} />
                {<MoviesCardList
                    movies={search || short ? filteredMovies : getMovies}
                    onMovieDelete={onMovieDeleteWithFilter}
                    messageError={messageError} />}
            </div>
            <Footer />
        </>
    );
}

export default SavedMovies;

