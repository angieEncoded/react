import React from 'react'
import Button from "./Button"
import {useLocation} from 'react-router-dom'
// import PropTypes from 'prop-types'

const Header = ({ title, onAdd, changeButtonText }) => {

    const location = useLocation();

    return (
        <div>
            <span className="tracker-font h1">{title}</span>
            <div className="float-end">
            {location.pathname === '/' ? 
                <Button 
                color="green" 
                textColor="white" 
                bootstrapClass={changeButtonText ? "btn btn-secondary btn-sm" : "btn btn-primary btn-sm"}
                text={changeButtonText ? "Close Form" : "Add New"} 
                onClick={onAdd} />
                : 
                ""}


            </div>
            <hr />
        </div>
    )
}

Header.defaultProps = {
    title: "React Task Tracker"
}

// This will make 'typing' in javascript and help find errors
// Header.propTypes = {
//     title: PropTypes.string.isRequired,

// }

export default Header
