// Routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';

const Routes = () => {
  return <Route path="/login" element={<Login />} />;
};

export default Routes;
