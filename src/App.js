import React from 'react';
import NavBar from './components/Header/NavBar'
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import './App.css'

function App() {

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
