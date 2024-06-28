import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from "./authSlice"
function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router=useNavigate();

  const handleLogin = () => {
    // Replace this with actual authentication logic
    if (email && password) {
      dispatch(login({ email }));
      router('/');
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;