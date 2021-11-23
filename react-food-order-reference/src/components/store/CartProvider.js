import CartContext from "./cart-context"
import { useReducer } from 'react'

// Set up a default state for this reducer
const defaultCartState = {
    items: [],
    totalAmount: 0
}

// state is the last state snapshot
// action is the action dispatched by you
const cartReducer = (currentState, action) => {
    if (action.type === "ADD_ITEM") {
        // Use concat to not change the old state
        const updatedItems = currentState.items.concat(action.item);
        const updatedTotalAmount = currentState.totalAmount + action.item.price + action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === "REMOVE_ITEM") {

    }

    return defaultCartState
}




// This is how we manage it - we wrap any component that needs this context
const CartProvider = props => {

    // Call the reducer in our code with the function and the default state
    const [currentCartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = item => {
        // We can create our own functions to dispatch by passing a type
        dispatchCartAction({
            type: "ADD_ITEM",
            items: item
        })
    }
    const removeItemFromCart = id => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            id: id
        })
    }

    const cartContext = {
        items: currentCartState.items,
        totalAmount: currentCartState.totalAmount,
        addItemToCart,
        removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}


export default CartProvider