import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './NavBar';
import Shop from './Shop';
import Home from './Home';

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/shopping-page/shop" element={<Shop />} />
        <Route path="/shopping-page/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
