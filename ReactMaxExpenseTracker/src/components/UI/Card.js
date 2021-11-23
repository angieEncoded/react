import React from 'react'
import "./css/Card.css"

const Card = (props) => {

    // This will bring in any class names
    const classes = `card  ${props.className}`;

    return (
        // This is a reserved name - the value will always be the content between the opening and closing tags
        <div className={classes}>
            {props.children}
        </div>
    )

}

export default Card
