import React from 'react';
import union from '../../images/union.svg';

function InfoTooltip({ isSuccessInfoTooltipStatus, isOpen, onClose }) {

    return (
        <div className={`popup popup_notification ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button type="button" className="popup__button-exit popup__button-exit_picture" onClick={onClose}></button>
                <div className="popup__success-container">
                    
                    {isSuccessInfoTooltipStatus ? <img src={union} className="popup__success-image" alt="успешный запрос" /> : ''}
                    {isSuccessInfoTooltipStatus ? <h2 className="popup__success-text">Данные профиля успешно обновлены!</h2> : ''}

                </div>
            </div>
        </div>
    );
}

export default InfoTooltip;