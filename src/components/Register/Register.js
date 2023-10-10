import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg'


function Register({ registerUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // валидация
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [apiError, setApiError] = useState('');



    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError, passwordError])

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

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 2) {
            setPasswordError('Введите корректный пароль');
        } else {
            setPasswordError('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        registerUser(
            name,
            email,
            password,
        )
            .catch((err) => {
                setApiError(err);
            });
    }

    return (
        <Form
            logo={logo}
            title="Добро пожаловать!"
            textReg={
                <div className="form__register-container">
                    <p className="form__register-text">Уже зарегистрированы?</p>
                    <Link to="login" className="form__register-link">Войти</Link>
                </div>
            }
            onSubmit={handleSubmit}>

            <div className="form__input-container">
                <p className="form__input-text">Имя</p>
                <input type="text" required value={name} onChange={handleNameChange} className="form__input" name="userName"
                    placeholder="Имя" />
                {nameError && <span className="form__input-error">{nameError}</span>}
            </div>
            <div className="form__input-container">
                <p className="form__input-text">E-mail</p>
                <input type="email" required value={email} onChange={handleEmailChange} className="form__input" name="userUrl"
                    placeholder="E-mail" />
                {emailError && <span className="form__input-error">{emailError}</span>}
            </div>
            <div className="form__input-container">
                <p className="form__input-text">Пароль</p>
                <input type="password" required value={password} onChange={handlePasswordChange} className="form__input" name="userPassword"
                    placeholder="Пароль" />
                {passwordError && <span className="form__input-error">{passwordError}</span>}
            </div>
            {apiError && <span className="form__api-error">{apiError}</span>}
            <button disabled={!formValid ? 'disabled' : ''} type="submit"
                className={`form__button ${!formValid && "form__button_disabled"}`}>Зарегистрироваться</button>
        </Form>
    );
}

export default Register;