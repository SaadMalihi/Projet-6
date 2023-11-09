import React from 'react';
import { Link } from 'react-router-dom'
import './_error404.scss'

const error404 = () => {
    return (
        <main className="error">
            <span className="errorTitle">404</span>
            <span className="errorDescription">
            Oups! La page que vous demandez n'existe pas.
            </span>
            <Link className="errorLink" to="/">
            Retourner sur la page d'accueil
            </Link>
      </main>
    );
};

export default error404;