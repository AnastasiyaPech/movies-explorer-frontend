import { React, useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function Profile({ logOut, onUpdateUser  }) {

    const currentUser = useContext(CurrentUserContext); //данные о пользователе
    const [isEdit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(currentUser.name || '');
        setEmail(currentUser.email || '');
    }, [currentUser])


    function handleSetEdit() {
        setEdit(!isEdit);
    }
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            email
        });
    }
    return (
        <>
            <Header />
            <div className="profile__form">
                <h2 className="profile__title">Привет, {currentUser.name} !</h2>
                <form className="profile__container" name="registration__form">
                    <div className="profile__input-container">
                        <input type="name" required className="profile__input profile__input_border" name="userName"
                            placeholder="Имя" />
                    </div>
                    <div className="profile__input-container">
                        <input type="email" required className="profile__input" name="userUrl"
                            placeholder="E-mail" />
                    </div>
                    {isEdit
                        ? <button type="submit" className="profile__button-save">Сохранить</button>
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