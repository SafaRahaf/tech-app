import React from 'react';
import Login from '../components/Login/Login';

const LoginForm = () => {
  return (
    <div
      style={{
        textAlign: 'center'
      }}
      className="bg-red-400 text-3xl font-bold underline"
    >
      <Login />
    </div>
  );
};

export default LoginForm;
