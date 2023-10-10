import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg'


function Login({ loginUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // валидация
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [apiError, setApiError] = useState('');

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError])

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
        loginUser(
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
            title="Рады видеть!"
            onSubmit={handleSubmit}
            textReg={
                <div className="form__register-container">
                    <p className="form__register-text">Ещё не зарегистрированы?</p>
                    <Link to="login" className="form__register-link">Регистрация</Link>
                </div>
            }>
            <div className="form__input-container">
                <p className="form__input-text">E-mail</p>
                <input type="email" required value={email} onChange={handleEmailChange} className="form__input" name="userUrl"
                    placeholder="E-mail" />
                {emailError ? <span className="form__input-error">{emailError}</span> : ''}
            </div>
            <div className="form__input-container form__input-container_login">
                <p className="form__input-text">Пароль</p>
                <input type="password" required value={password} onChange={handlePasswordChange} className="form__input" name="userPassword"
                    placeholder="Пароль" />
                {passwordError && <span className="form__input-error">{passwordError}</span>}
            </div>
            {apiError && <span className="form__api-error">{apiError}</span>}
            <button disabled={!formValid ? 'disabled' : ''} type="submit"
                className={`form__button ${!formValid && "form__button_disabled"}`}>Войти</button>
        </Form>
    );
}


export default Login;