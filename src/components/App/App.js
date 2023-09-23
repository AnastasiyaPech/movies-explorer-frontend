import './App.css';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
// import Promo from '../Promo/Promo';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>

  );
}

export default App;
