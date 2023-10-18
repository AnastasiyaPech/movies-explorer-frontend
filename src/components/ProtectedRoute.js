import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, loggedIn }) {
    if (loggedIn === false) {
        return <Navigate to="/" replace />
    }
    else {
        return element;
    };
}

export default ProtectedRoute;