import React from 'react';
import NavBar from './components/Header/NavBar'
import ItemListContainer from './components/Main/ItemListContainer';
import './App.css'

function App() {
  const item={
    stock: 7,
    initial: 1
  }

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer props={item}/>
    </div>
  );
}

export default App;
