import React from 'react'

const Backdrop = (props) => {


    return (
        // in jsx we can write this as a self closing tag if there is no content
        <div className="backdrop" onClick={props.backdropClicked} />
        // We have been given a function from the Todos component that we can execute
    )
}
export default Backdrop
