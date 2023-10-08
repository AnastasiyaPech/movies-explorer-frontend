import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import React, { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { register, authorize, checkToken } from '../../utils/auth';
import apiUsers from '../../utils/MainApi';


function App() {

  const [currentUser, setCurrentUser] = useState({});  //данные о пользователе
  const [loggedIn, setLoggedIn] = useState(false);   //статус пользователя залогинен или нет
  const navigate = useNavigate();

  //проверка токена
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    handleCheckToken(token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 
  //обновляет данные о пользоваеле
  useEffect(() => {
    if (loggedIn) {
      apiUsers.getToUserInfo()
        .then((data) => {
          console.log(data)
          setCurrentUser(data)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn])

  // регистрация
  function handleRegister(name, email, password) {
    register(name, email, password)
      .then((data) => {
        console.log(data)
        handleLogin(email, password)
        // setLoggedIn(true);
        // apiUsers.updateAuthorizationToken(token);
        // navigate("/movies");
      })
      .catch(err => {
        console.log(err);
      })
  }

  //авторизация
  function handleLogin(email, password) {
    authorize(email, password)
      .then((data) => {
        console.log(data)
        const token = data.token;
        localStorage.setItem("jwt", token);
        setLoggedIn(true);
        // setCurrentUser(currentUser);
        apiUsers.updateAuthorizationToken(token);
        navigate("/movies");
      })
      .catch(err => {
        console.log(err);
      })
  }

// проверка токена
  function handleCheckToken(token) {
    if (token) {
        checkToken(token)
            .then((res) => {
              console.log(res)
                if (res) {
                  console.log(res)
                    setLoggedIn(true);
                    apiUsers.updateAuthorizationToken(token);
                    navigate("/movies");  
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

  //удаление токена и редирект на авторизацию
  function signOut() {
    localStorage.removeItem("jwt");
    navigate("/signin");
    setLoggedIn(false);
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Register registerUser={handleRegister} loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login loginUser={handleLogin} loggedIn={loggedIn} />} />
          <Route path="/profile" element={
            <ProtectedRoute element={<Profile logOut={signOut}/>}
              loggedIn={loggedIn} />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={
            <ProtectedRoute element={<Movies />}
              loggedIn={loggedIn} />} />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute element={<SavedMovies />}
                loggedIn={loggedIn} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
