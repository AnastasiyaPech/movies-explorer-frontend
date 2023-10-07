import React from 'react';



function FilterCheckbox() {
    return (

            <label className="checkbox__container">
            <input type="checkbox" className="checkbox__input"/>
            <span className="checkbox__custom"></span>
            <p className="checkbox__text">Короткометражки</p>
            </label>
            
    );
}

export default FilterCheckbox;