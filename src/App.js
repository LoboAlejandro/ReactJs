import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components
import NavBar from './components/Header/NavBar';
//Pages
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import NotFoundPage from './pages/NotFound';
import InConstructionPage from './pages/InConstruction';
import CartPage from './pages/Cart';
//Context
import {CartProvider} from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/productos' element={<InConstructionPage/>}/>
            <Route path='/nosotros' element={<InConstructionPage/>}/>
            <Route path='/contacto' element={<InConstructionPage/>}/>
            <Route path='/producto/:id' element={<DetailPage/>}/>
            <Route path="/productos/:category" element={<HomePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
