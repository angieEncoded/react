import React from 'react'
import Card from "./CustomCard"
import classes from "./CustomModal.module.css"
import Button from "./Button"
import ReactDOM from 'react-dom'

// Moved the backdrop to its own component inside this component
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.dismissError}></div>
}

// Moved the modal out as well
const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button type="button" text="Thanks." onClick={props.dismissError} />
            </footer>
        </Card>
    )
}

const CustomModal = (props) => {
    return (
        <>
            {/* The portal method wants two arguments, the thing to port in jsx, and the location in the dom */}
            {ReactDOM.createPortal(<Backdrop dismissError={props.dismissError} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} dismissError={props.dismissError} />,
                document.getElementById('overlay-root'))}
        </>
    )
}

export default CustomModal