import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer gretting='Bienvenidos ' />
      <ItemDetailContainer />

    </>
  );
}

export default App;
