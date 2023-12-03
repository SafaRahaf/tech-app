// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Routes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Route path="/login" element={<Login />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
