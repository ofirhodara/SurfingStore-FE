import React from 'react';
import Header from './components/Layout/Header';
import Boards from './components/SurfBoards/Boards';

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
