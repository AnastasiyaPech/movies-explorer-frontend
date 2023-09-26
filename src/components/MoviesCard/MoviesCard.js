import React from 'react';

function Card({ name, link, owner, likes, id, onClick, onCardLike, onCardDelete }) {
  
    return (
        <li className="list__description">
            <div className="list__place">
                <img className="list__image" alt={name} src={link} onClick={() => onClick({ link: link, name: name })} />
            </div>
            <div className="list__container">
                <h2 className="list__text">{name}</h2>
                <div className="list__containerLikes">
                    <button type="button" className="list__button"></button>
                    <p className="list__countLikes">{likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;