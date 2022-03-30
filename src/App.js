import React from 'react';
import NavBar from './components/Header/NavBar'
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer';
import './App.css'

function App() {

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
