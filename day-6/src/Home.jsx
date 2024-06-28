import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './authSlice';

function Home  ()  {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router =useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    router('/login');
  };

  return (
    <div>
      <h2>Home -{userData?.name}</h2>
      <button onClick={handleLogout}>Login</button>
    </div>
  );
};

export default Home;