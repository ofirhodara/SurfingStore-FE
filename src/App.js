import React from 'react';
import Header from './components/Layout/Header';
import Boards from './components/SurfBoards/Boards';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header></Header>
        <main>
          <Boards></Boards>
         
        </main>
    </React.Fragment>

  );
}

export default App;
