export const BASE_URL = 'https://api.vertydiploma.nomoredomainsicu.ru';

//проверка ответа сервера
function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

// запрос на регистрацию
export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        })
    })
        .then(getResponseData)
};

//запрос на авторизацию
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
        .then(getResponseData)
};

// проверка токена
export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(getResponseData)
};