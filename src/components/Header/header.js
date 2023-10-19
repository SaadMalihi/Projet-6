import React from 'react';
import './_header.scss'
import logo from '../../Images/LOGO.svg'

const header = () => {
    return (
        <header>
            <img src={logo} alt='logo kasa'/>
            <nav>
                <ul className='navigation'>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </header>
    );
};

export default header;