import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, textColor, onClick, bootstrapClass }) => {
    return (
        <button onClick={onClick} /* style={{ backgroundColor: color, color: textColor }}*/ className={bootstrapClass}>{text}</button>
    )
}

export default Button


Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}