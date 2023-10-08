import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg'


function Login({ loginUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        loginUser(
            email,
            password,
        );
    }

    return (
        <Form
            logo={logo}
            title="Рады видеть!"
            buttonTitle="Войти"
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
                    placeholder="E-mail" minLength="2" maxLength="40" />
            </div>
            <div className="form__input-container form__input-container_login">
                <p className="form__input-text">Пароль</p>
                <input type="password" required value={password} onChange={handlePasswordChange} className="form__input" name="userPassword"
                    placeholder="Пароль" minLength="2" maxLength="200" />
            </div>
        </Form>
    );
}

export default Login;