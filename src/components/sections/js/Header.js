import React from 'react';
import '../css/header.css'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <NavLink to="/" className={'brand'}>coded</NavLink>

            <Nav className="ms-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/courses">courses</NavLink>
            </Nav>
            <NavLink to={'/register'} className='mybtn'>sing in</NavLink>
        </header>
    );
};

export default Header;
