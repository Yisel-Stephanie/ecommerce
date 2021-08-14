import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer gretting='Bienvenidos ' />

    </>
  );
}

export default App;
