import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-link'>         
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/service'>Services</Link>
                <Link to='/contact'>Contact</Link>        
            </nav>
        </div>
    );
};

export default Header;