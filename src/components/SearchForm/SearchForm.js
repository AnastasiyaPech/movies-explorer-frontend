import React from 'react';
import icon from '../../images/icon_search.svg'
import stick from '../../images/input__stroke.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (

        <form className="search__container" name="search__form">
            <img src={icon} className="search__icon" alt="иконка поиска" />
            <input type="text" required className="search__input" name="search"
                placeholder="Фильм"/>
            <button type="submit" className="search__button">Найти</button>
            <img src={stick} className="search__stick" alt="иконка разделения" />
            <FilterCheckbox/>
        </form>

    );
}

export default SearchForm;