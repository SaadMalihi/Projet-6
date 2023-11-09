import React from 'react';
import './_header.scss'
import logo from '../../Images/LOGO.svg';
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
        <header>
            <img src={logo} alt='logo kasa'/>
            <nav>
                <ul>
                    <li><NavLink to='/' >Accueil</NavLink></li>
                    <li><NavLink to='about'>A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default header;