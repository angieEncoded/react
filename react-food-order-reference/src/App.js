import React, { useState } from 'react'
import Header from "./components/layout/Header"
import Meals from "./components/meals/Meals"
import Cart from "./components/cart/Cart"
import CartProvider from './components/store/CartProvider';


function App() {

  // Cart is not showing by default
  const [cartShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  }

  const hideCart = () => {
    setCartIsShown(false);
  }


  return (
    <>
      {/* Wrap all our content that needs to know about the cart with the provider */}
      <CartProvider>
        {cartShown && <Cart hide={hideCart} />}
        <Header show={showCart} />
        <main>
          <Meals />
        </main>
      </CartProvider>

    </>
  );
}

export default App;
