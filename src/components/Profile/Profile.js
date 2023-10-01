import { React, useState } from 'react';
import Header from '../Header/Header';


function Profile() {

    const [isEdit, setEdit] = useState(false);
    function handleSetEdit() {
        setEdit(!isEdit);
    }
    return (
        <>
            <Header />
            <div className="profile__form">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__container" name="registration__form" noValidate>
                    <div className="profile__input-container">
                        <input type="name" required className="profile__input profile__input_border" name="userName"
                            placeholder="Имя" minLength="2" maxLength="40" />
                    </div>
                    <div className="profile__input-container">
                        <input type="email" required className="profile__input" name="userUrl"
                            placeholder="E-mail" minLength="2" maxLength="200" />
                    </div>

                    {isEdit
                        ? <button type="submit" className="profile__button-save">Сохранить</button>
                        : <>
                            <button type="submit" className="profile__button" onClick={handleSetEdit}>Редактировать</button>
                            <button type="submit" className="profile__button-exit">Выйти из аккаунта</button>
                        </>
                    }




                </form>
            </div>
        </>
    );
}

export default Profile;