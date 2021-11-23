import React from 'react'
import classes from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={classes.card}>
            {/* Special prop that every component gets by default */}
            {/* All content in between the tags is considered 'children' */}
            {props.children}
        </div>
    )
}


export default Card
