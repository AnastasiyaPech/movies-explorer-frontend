import React from 'react';



function FilterCheckbox({ short }) {
    return (

        <label className="checkbox__container">
            <input type="checkbox" defaultChecked={short} className="checkbox__input" />
            <span className="checkbox__custom"></span>
            <p className="checkbox__text">Короткометражки</p>
        </label>
    );
}

export default FilterCheckbox;