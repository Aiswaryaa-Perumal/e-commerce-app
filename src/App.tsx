import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from '../src/Screen.one'
import Login from './Components/Login_page/Login_Page'
import Register from './Components/Register-page/Register-page'
import Shopping from './Components/Shopping_Page/Shopping-window'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products_page/Products_page'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/products' element={<Products />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;