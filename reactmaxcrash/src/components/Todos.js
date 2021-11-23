import React, { useState } from 'react'
import Modal from "./Modal"
import Backdrop from "./Backdrop"

const Todos = (props) => {

    const [toggleModal, setToggleModal] = useState(false);

    const deleteTodo = () => {
        setToggleModal(true);
        //console.log("clicked")
    }

    const closeBackdrop = () => {
        setToggleModal(false);
    }

    const title = props.text;

    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="actions">
                {/* Set up the listener to delete the item */}
                <button onClick={deleteTodo} className="btn">Delete</button>
            </div>

            {/* How to show the  Modal - option 1 basic ternary*/}
            {/* {toggleModal ? <Modal /> : ""}
            {toggleModal ? <Backdrop /> : ""} */}

            {/* Javascript shortcut with the && - if both are true the second thing will be done */}
            {/* These are two different ways to handle the same thing.  */}
            {toggleModal && <Modal onCancel={closeBackdrop} onConfirm={closeBackdrop} />}
            {/* forward the function into the Backdrop component */}
            {toggleModal && <Backdrop backdropClicked={closeBackdrop} />}

        </div>
    )
}

export default Todos
