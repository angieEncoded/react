import React from 'react'

const Modal = (props) => {

    // this is the alternative approach. 
    const cancelButton = () => {
        props.onCancel();
    }

    const confirmButton = () => {
        props.onConfirm();
    }



    return (
        <div className="modal">
            <p>Are you Sure?</p>
            <button onClick={cancelButton} className="btn btn--alt">Cancel</button>
            <button onClick={confirmButton} className="btn">Confirm</button>
        </div>
    )
}

export default Modal
