import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Boards from './components/SurfBoards/Boards';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isShownCart, setIsShownCart] = useState(false);


    const showCartHandler = () =>
  {
    setIsShownCart(true);
  };

  const hideCartHandler = () =>
  {
    setIsShownCart(false);
  };

  return (
    <CartProvider>
      {isShownCart && <Cart onClose={hideCartHandler}/>}

      <Header onShowCart={showCartHandler}></Header>
        <main>
          <Boards></Boards>
         
        </main>
    </CartProvider>

  );
}

export default App;
