import React, { useContext } from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'
import MyFavouriteContext from '../store/resort-context'
const Navbar = () => {
    const myContext = useContext(MyFavouriteContext);

    return (
        <div className={classes.nav__container}>
            <Link className={classes.logo} to='/'>SAMEER | RESORTS</Link>
            <div className={classes.nav__links}>
                <Link to='/'>All Resorts</Link>
                <Link to='/add-resort'>Add Resort</Link>
                <Link to='/fav-resort'>Favourit Resorts <span className={classes.badge}>{myContext.totalFavResorts}</span></Link>
            </div>
        </div>
    )
}

export default Navbar
