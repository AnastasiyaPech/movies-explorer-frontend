import{ React } from 'react';
import { Link } from 'react-router-dom';

function Form({ logo, title, textReg, children, onSubmit }) {


    return (
        <div className="form">
            <Link to="/" >
            <img src={logo} className="form__logo" alt="логотип" />
            </Link>
            <h2 className="form__text">{title}</h2>
            <form className="form__container" name="registration__form" onSubmit={onSubmit}>
                {children}
            </form>
            {textReg}
        </div>

    );
}

export default Form;