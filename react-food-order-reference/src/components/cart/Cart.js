import React from 'react'
import classes from "./css/Cart.module.css"
import Modal from "../ui/Modal"

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}>{[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }]
        .map(item => <li key={item.id}>{item.name}</li>)}</ul>


    return (
        <Modal hide={props.hide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.hide}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart



