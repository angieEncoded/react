// First file created. Very simple header stuff
import React from 'react'
// We import the image and the build tools takes care of it
import mealsImage from "../assets/meals.jpg"
// Import css module and they will each get a unique id in the app
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <>

            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton show={props.show} />
            </header>
            {/* This is how we use a class that has a dash in it with the modules style*/}
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table with food" />
            </div>

        </>
    )
}

export default Header
