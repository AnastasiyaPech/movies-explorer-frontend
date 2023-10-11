import { React, useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function Profile({ logOut, onUpdateUser }) {

    const currentUser = useContext(CurrentUserContext); //данные о пользователе
    const [isEdit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // валидация
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [apiError, setApiError] = useState('');

    useEffect(() => {
        setName(currentUser.name || '');
        setEmail(currentUser.email || '');
    }, [currentUser])

    useEffect(() => {
        if (nameError || emailError) {
            setFormValid(false);
        } else if (name === currentUser.name && email === currentUser.email){
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }
    }, [name, email, currentUser, nameError, emailError])

    function handleSetEdit() {
        setEdit(!isEdit);
    }
    function handleNameChange(e) {
        setName(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 30) {
            setNameError('Имя не может быть менее 2 и более 30 символов');
        } else {
            setNameError('');
        }
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Введите корректный email');
        } else {
            setEmailError('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            email
        })
            .catch((err) => {
                console.log(err)
                setApiError(err);
            });
    }
    return (
        <>
            <Header />
            <div className="profile__form" onSubmit={handleSubmit}>
                <h2 className="profile__title">Привет, {currentUser.name} !</h2>
                <form className="profile__container" name="registration__form">
                    <div className="profile__input-container">
                        <input type="name" required value={name} onChange={handleNameChange} className="profile__input profile__input_border" name="userName"
                            placeholder="Имя" />
                        {nameError && <span className="form__input-error">{nameError}</span>}
                    </div>
                    <div className="profile__input-container">
                        <input type="email" required value={email} onChange={handleEmailChange} className="profile__input profile__input_change" name="userUrl"
                            placeholder="E-mail" />
                        {emailError && <span className="form__input-error">{emailError}</span>}
                    </div>
                    {apiError && <span className="form__api-error">{apiError}</span>}
                    {isEdit
                        ? <button disabled={!formValid ? 'disabled' : ''} type="submit"
                            className={`profile__button-save $${!formValid && "form__button_disabled"}`}>Сохранить</button>
                        : <>
                            <button type="submit" className="profile__button" onClick={handleSetEdit}>Редактировать</button>
                            <button type="submit" className="profile__button-exit" onClick={logOut}>Выйти из аккаунта</button>
                        </>
                    }
                </form>
            </div>
        </>
    );
}

export default Profile;