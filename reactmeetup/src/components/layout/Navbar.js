import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css"
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

const Navbar = () => {

    const favoritesContext = useContext(FavoritesContext);


    return (
        // This method will scope these styles to only this component
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    {/* We can't use regular a links in react */}
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/new-meetup'}>New Meetup</Link></li>
                    <li><Link to={'/favorites'}>Favorite Links</Link></li>
                    <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar
