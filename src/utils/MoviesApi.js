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

    // получение всех фильмов в виде массива
    getInitialMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers,
            method: 'GET',
        })
            .then(this._checkResponse)
    };
  
}

const apiMovies = new Api(
    ' https://api.nomoreparties.co/beatfilm-movies',
    {
        "Content-Type": 'application/json',
    });
export default apiMovies;