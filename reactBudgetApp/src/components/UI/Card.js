import React from 'react';
import './Card.css'

// This is basically a wrapper div
const Card = (props) => {
    // This is how we can tell it to accept other classnames
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>

}

export default Card;