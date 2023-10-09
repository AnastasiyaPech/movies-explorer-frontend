import{ React } from 'react';

function Form({ logo, title, textReg, children, onSubmit }) {


    return (
        <div className="form">
            <img src={logo} className="form__logo" alt="логотип" />
            <h2 className="form__text">{title}</h2>
            <form className="form__container" name="registration__form" onSubmit={onSubmit}>
                {children}
            </form>
            {textReg}
        </div>
    );
}

export default Form;