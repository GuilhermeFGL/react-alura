import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
