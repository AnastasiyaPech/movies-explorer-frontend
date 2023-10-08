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
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    // загрузка информации о пользователе с сервера
    getToUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    };

    updateAuthorizationToken(token) {
        this._headers.authorization = `Bearer ${token}`
    }

}

const apiUsers = new Api(
    'https://api.vertydiploma.nomoredomainsicu.ru',
    {
        "Content-Type": 'application/json',
    });
export default apiUsers;