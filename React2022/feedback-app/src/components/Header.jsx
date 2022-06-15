import PropTypes from 'prop-types'
import React from 'react'

function Header({text, bgColor, textColor}) {
  return (
    <header style={{backgroundColor: bgColor, color:textColor}}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// Set up default props in case nothing was passed in
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}

// This allows us to check that the prop has the right type
Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    
}


export default Header