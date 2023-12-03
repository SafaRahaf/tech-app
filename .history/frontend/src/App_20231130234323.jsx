import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Routes.jsx';
import Singup from './components/Signup/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Singup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
