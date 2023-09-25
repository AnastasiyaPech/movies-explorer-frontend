import React from 'react';


function SearchForm() {
    return (

        <form className="search__container" name="search__form" noValidate>
            <input type="text" required className="search__input" name="search"
                placeholder="Фильм"/>
            <button type="submit" className="search__button">Найти</button>
        </form>

    );
}

export default SearchForm;