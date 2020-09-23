import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
        <h3>Travel Bunny</h3>
        <ul className="nav-links">
            <Link to='/' className="nav-link"><li>Front</li></Link>
            <Link to='/Browse' className="nav-link"><li>Browse</li></Link>
        </ul>
    </nav>
    )
}

export default Navigation;