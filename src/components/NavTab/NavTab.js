import React from 'react';


function NavTab() {
    return (
        <div className="navtab__container">
           <nav className ="navtab__links">
            <a href="#project" className="navtab__link">О проекте</a>
            <a href="#techs" className="navtab__link">Технологии</a>
            <a href="#student" className="navtab__link">Студент</a>
            </nav>
        </div>
        
    );
}

export default NavTab;

