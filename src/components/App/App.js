import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Header from '../Header/Header';


function App() {

  const [currentUser, setCurrentUser] = useState({});  //данные о пользователе
  const [loggedIn, setLoggedIn] = useState(false);   //статус пользователя залогинен или нет
  const [isSuccessInfoTooltipStatus, setIsSuccessInfoTooltipStatus] = useState(false); // уведомление об успешном редактировании профиля
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false); // открытие попапа-уведомления


  const [saveMovies, setisSaveMovies] = useState([]); // массив сохраненных фильмов
  const [messageError, setMessageError] = useState(''); // стейт ошибки
  // const [getMovies, setGetMovies] = useState([]);

  const navigate = useNavigate();
  const location = useLocation().pathname;

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
          setCurrentUser(data)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn])

  // запрос сохраненного массива фильма
  useEffect(() => {
    if (loggedIn) {
      apiUsers.getSavedMovies()
        .then((data) => {
          setisSaveMovies(data)
        })
        .catch(err => {
          console.log(err);
          setMessageError(err)
        })
    }
  }, [loggedIn])

  // регистрация
  function handleRegister(name, email, password) {
    return register(name, email, password)
      .then((data) => {
        handleLogin(email, password)
      })
  }

  //авторизация
  function handleLogin(email, password) {
    return authorize(email, password)
      .then((data) => {
        const token = data.token;
        localStorage.setItem("jwt", token);
        setLoggedIn(true);
        // setCurrentUser(data);
        apiUsers.updateAuthorizationToken(token);
        navigate("/movies", { replace: true });
      })
  }

  // проверка токена
  function handleCheckToken(token) {
    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            apiUsers.updateAuthorizationToken(token);
            navigate("/movies", { replace: true });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  //добавление фильма в сохраненные
  function handleAddMovie(data) {
    return apiUsers.createSaveMovie(data)
      .then((data) => {
        setisSaveMovies([data, ...saveMovies]);
        return data;
      })
      .catch(err => {
        console.log(err);
      })
  }

  //удаление фильма из сохраненных
  function handleMovieDelete(id) {
    return apiUsers.deleteMovie(id)
      .then((data) => {
        setisSaveMovies((state) => {
          return state.filter((item) => item._id !== id)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }


  //редактирование профиля
  function handleUpdateUser(data) {
    return apiUsers.changeUserInfo(data)
      .then((data) => {
        setCurrentUser(data)
        setIsInfoTooltipOpen(true);
        setIsSuccessInfoTooltipStatus(true);

      })
  }

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  //удаление токена и редирект на главную
  function signOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/");
    localStorage.clear();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {location === "/movies" && <Header loggedIn={loggedIn} />}
        {location === "/saved-movies" && <Header loggedIn={loggedIn} />}
        {location === "/profile" && <Header loggedIn={loggedIn} />}
        {location === "/" && <Header loggedIn={loggedIn} />}
        <Routes>
          <Route path="/signup" element={<Register registerUser={handleRegister} loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login loginUser={handleLogin} loggedIn={loggedIn} />} />
          <Route path="/profile" element={
            <ProtectedRoute element={<Profile onUpdateUser={handleUpdateUser} logOut={signOut} />}
              loggedIn={loggedIn} />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={
            <ProtectedRoute element={<Movies
              savedMovies={saveMovies}
              onMovieSave={handleAddMovie}
              onMovieDelete={handleMovieDelete} />}
              loggedIn={loggedIn} />} />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute element={<SavedMovies
                getMovies={saveMovies}
                onMovieDelete={handleMovieDelete} />}
                loggedIn={loggedIn} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* попап редактирования профиля */}
        <InfoTooltip
          isSuccessInfoTooltipStatus={isSuccessInfoTooltipStatus}
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}>
        </InfoTooltip>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
