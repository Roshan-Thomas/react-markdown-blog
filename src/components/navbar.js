import React from 'react'
import {Link} from 'react-router-dom'
import './components.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
        </div>
    )
}

export default Navbar
