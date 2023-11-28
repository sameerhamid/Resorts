import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className={classes.nav__container}>
            <Link className={classes.logo}>SAMEER | RESORTS</Link>
            <div className={classes.nav__links}>
                <Link to='/'>All Resorts</Link>
                <Link to='/add-resort'>Add Resort</Link>
                <Link to='/fav-resort'>Favourit Resorts <span className={classes.badge}>0</span></Link>
            </div>
        </div>
    )
}

export default Navbar
