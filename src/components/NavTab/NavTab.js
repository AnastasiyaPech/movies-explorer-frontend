import React from 'react';
import { Link } from 'react-router-dom'; 


function NavTab() {
    return (
        <div className="navtab__container">
           <nav className ="navtab__links">
            <Link to="/" className="navtab__link">О проекте</Link>
            <Link to="/" className="navtab__link">Технологии</Link>
            <Link to="/" className="navtab__link">Студент</Link>
            </nav>
        </div>
    );
}

export default NavTab;