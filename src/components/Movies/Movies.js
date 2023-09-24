import React from 'react';
import Footer from '../Footer/Footer';
// import Header from './Header';
import SearchForm from '../SearchForm/SearchForm'
// import Preloader from '../Preloader/Preloader';



function Movies() {
    return (
        <>
            {/* <Header /> */}
            <div className="movies__container">
                {/* <Preloader /> */}
                <SearchForm />

            </div>
            <Footer />
        </>
    );
}

export default Movies;