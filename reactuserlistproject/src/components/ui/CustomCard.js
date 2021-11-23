import React from 'react'
import classes from "./CustomCard.module.css"

const CustomCard = (props) => {
    return (
        // This was missing the child's class names and that's why my modal was fucked up
        <div className={`${classes.customCard} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default CustomCard