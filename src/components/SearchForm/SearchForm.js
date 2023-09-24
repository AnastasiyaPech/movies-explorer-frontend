import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'



function SearchForm() {
    return (

        <form className="search__container" name="search__form" noValidate>
            <input type="text" required className="search__input" name="search"
                placeholder="Фильм" minLength="2" maxLength="40" />
            <button type="submit" className="search__button">Найти</button>
            <FilterCheckbox/>
        </form>

    );
}

export default SearchForm;