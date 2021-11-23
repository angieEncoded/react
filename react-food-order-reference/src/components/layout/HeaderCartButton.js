import React, { useContext } from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from "./CartIcon"
import CartContext from "../store/cart-context"


const HeaderCartButton = (props) => {
    // Get the cart from the context
    const cardContext = useContext(CartContext)
    // Transform an array into a single value
    const numberOfCartItems = cardContext.items.reduce((currentNumber, item) => {
        // current number starts at the value we gave it
        return currentNumber + item.amount
    }, 0)

    return (
        <button className={classes.button} onClick={props.show}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    )
}

export default HeaderCartButton