// App.js
// Example for a React component
import 'tailwindcss/base';
import 'tailwindcss/components';
import 'tailwindcss/utilities';

// Your React component code goes here

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Routes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
