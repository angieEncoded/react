import React from 'react'
import classes from "./css/Input.module.css"

const Input = (props) => {
    return (

        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* This will add all the key\value pairs to input */}
            <input {...props.input} id={props.input.id} />
        </div>


    )
}

export default Input
