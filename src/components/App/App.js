import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Header from './Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Register from '../Register/Register';
// import Promo from '../Promo/Promo';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Main />} />
      </Routes>



      <Footer />
    </div>

  );
}

export default App;
