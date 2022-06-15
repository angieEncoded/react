import PropTypes from 'prop-types'
import React from 'react'

function Header({text}) {
  return (
    <header>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

// Set up default props in case nothing was passed in
Header.defaultProps = {
    text: 'Feedback UI'
}

// This allows us to check that the prop has the right type
Header.propTypes = {
    text: PropTypes.string.isRequired
}


export default Header