import React from 'react'

// Context is used for sitewide state storage
const CartContext = React.createContext({
    // Initial items we want to manage
    items: [],
    totalAmount: 0,

    // Functions that allow us to manipulate this store
    addItem: (item) => { },
    removeItem: (id) => { }
})








export default CartContext