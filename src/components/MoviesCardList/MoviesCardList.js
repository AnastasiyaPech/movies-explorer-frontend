import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import useWindowSize from './useWindowSize';


function MoviesCardList({ movies, show, onMovieSave, onMovieDelete }) {

    // const width = window.innerWidth;

    // const [defaultShow, defaultInc] = pickDefaultShow(width);
    // const [show, setShow] = useState(defaultShow);
    // const [inc, setInc] = useState(defaultInc);

    // const windowSize = useWindowSize()

    // let myResize = () => {
    //     const [, newInc] = pickDefaultShow(windowSize.width);
    //     setInc(newInc);
    //     setShow(show + newInc - show % newInc);
    // };


    // useEffect(myResize, [windowSize]);

    // function pickDefaultShow(width) {
    //     if (width > 1170) {
    //         return [12, 3];
    //     }
    //     else if (width > 590) {
    //         return [8, 2];
    //     }
    //     else {
    //         return [5, 2];
    //     }
    // }

    // function handleShow() {
    //     setShow(show + inc);
    // }

    // TODO опрокидывать из серчформ в мувис
    let searchString = "е".toLowerCase();

    return (
        <>
            <div className="moviescardlist__container">
                {
                    movies
                        .filter((movie) => {
                            // console.log(movie)
                            // console.log( movie.nameRU.toLowerCase().includes(searchString))
                            return movie.nameRU.toLowerCase().includes(searchString)
                                || movie.nameEN.toLowerCase().includes(searchString)
                                || movie.director.toLowerCase().includes(searchString);
                        })
                        .slice(0, show)
                        .map((data) => {
                            return (<MoviesCard
                                key={data.id}
                                data={data}
                                onMovieSave={onMovieSave}
                                onMovieDelete={onMovieDelete}
                            />)
                            // {/* </MoviesCard> */}
                        })
                }
            </div>
            {/* <button type="button" className="movies__button-more" onClick={handleShow}>Ещё</button> */}
        </>
    );
}

export default MoviesCardList;