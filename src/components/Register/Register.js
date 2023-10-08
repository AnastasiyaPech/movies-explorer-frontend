import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg'


function Register({ registerUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        registerUser(
            name,
            email,
            password,
        );
    }

    return (
        <Form
            logo={logo}
            title="Добро пожаловать!"
            buttonTitle="Зарегистрироваться"
            textReg={
                <div className="form__register-container">
                    <p className="form__register-text">Уже зарегистрированы?</p>
                    <Link to="login" className="form__register-link">Войти</Link>
                </div>
            }
            onSubmit={handleSubmit}>

            <div className="form__input-container">
                <p className="form__input-text">Имя</p>
                <input type="text" required value={name} onChange={handleNameChange} className="form__input" name="userUrl"
                    placeholder="Имя" minLength="2" maxLength="40" />
            </div>
            <div className="form__input-container">
                <p className="form__input-text">E-mail</p>
                <input type="email" required value={email} onChange={handleEmailChange} className="form__input" name="userUrl"
                    placeholder="E-mail" minLength="2" maxLength="40" />
            </div>
            <div className="form__input-container">
                <p className="form__input-text">Пароль</p>
                <input type="password" required value={password} onChange={handlePasswordChange} className="form__input" name="userPassword"
                    placeholder="Пароль" minLength="2" maxLength="200" />
            </div>


        </Form>
    );
}

export default Register;