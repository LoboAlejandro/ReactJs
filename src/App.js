import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import NavBar from './components/Header/NavBar';
//pages
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import NotFoundPage from './pages/NotFound';
import InConstructionPage from './pages/InConstruction';
import CartPage from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productos' element={<InConstructionPage/>}/>
          <Route path='/nosotros' element={<InConstructionPage/>}/>
          <Route path='/contacto' element={<InConstructionPage/>}/>
          <Route path='/producto/:id' element={<DetailPage/>}/>
          <Route path="/:category" element={<HomePage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
