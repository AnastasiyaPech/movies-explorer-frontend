class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    //метод проверяет ответ от сервера
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
        }
    }

    // загрузка информации о пользователе с сервера
    getToUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    };

    //редактирование профиля пользователя
    changeUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
            headers: this._headers
        })
            .then(this._checkResponse)
    };

    updateAuthorizationToken(token) {
        this._headers.authorization = `Bearer ${token}`
    };

      // добавление нового фильма на страницу сохраненных
      createSaveMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co/${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
                movieId: data.movieId,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
            headers: this._headers
        })
            .then(this._checkResponse)
    };

    // удаление фильма из сохраненных
    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    };

}

const apiUsers = new Api(
    'https://api.vertydiploma.nomoredomainsicu.ru',
    {
        "Content-Type": 'application/json',
    });
export default apiUsers;