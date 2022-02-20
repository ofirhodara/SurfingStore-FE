import React, { useState } from 'react';
import Header from './components/Layout/Header';
import AvailableBoards from './components/SurfBoards/AvailableBoards';
import Boards from './components/SurfBoards/Boards';
import Introduction from './components/SurfBoards/Introduction';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
        <main>
          <Boards></Boards>
        </main>
    </React.Fragment>

  );
}

export default App;
