import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import React from 'react'
import '../css/home.css'
import { NavLink } from 'react-router-dom';
import Login from './Login'

const Home = () => {
    return (
        <section id='home'>
            <h1>The Power <br />
                of Good Advice</h1>
            <p>Courses start at ₹389 through Aug 31. <br /> Opportunities like this only come once in a season.</p>
            <NavLink to={'/login'} className='mybtn'>login</NavLink>

        </section>
    )
}

export default Home