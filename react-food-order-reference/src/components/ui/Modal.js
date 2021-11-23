import React from 'react'
import classes from "./css/Modal.module.css"
import ReactDOM from 'react-dom'

// Moved the backdrop to its own component inside this component
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.hide}></div>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {/* The portal method wants two arguments, the thing to port in jsx, and the location in the dom */}
            {/* PAss through the hide function */}
            {ReactDOM.createPortal(<Backdrop hide={props.hide} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
        </>
    )
}

export default Modal