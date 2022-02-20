import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Boards from './components/SurfBoards/Boards';
import Cart from './components/Cart/Cart';

function App() {
  const [isShownCart, setIsShownCart] = useState(true);


    const showCartHandler = () =>
  {
    setIsShownCart(true);
  };

  const hideCartHandler = () =>
  {
    setIsShownCart(false);
  };

  return (
    <React.Fragment>
      {isShownCart && <Cart onClose={hideCartHandler}/>}

      <Header onShowCart={showCartHandler}></Header>
        <main>
          <Boards></Boards>
         
        </main>
    </React.Fragment>

  );
}

export default App;
