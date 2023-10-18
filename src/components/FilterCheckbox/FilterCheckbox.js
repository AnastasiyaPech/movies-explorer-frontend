import React from 'react';



const FilterCheckbox = React.forwardRef(({ short }, ref) => {

    function submitForm(formRef) {
        formRef.current.requestSubmit();
    }

    return (

        <label className="checkbox__container">
            <input type="checkbox" defaultChecked={short} onClick={() => submitForm(ref)} className="checkbox__input" />
            <span className="checkbox__custom"></span>
            <p className="checkbox__text">Короткометражки</p>
        </label>
    );
})

export default FilterCheckbox;