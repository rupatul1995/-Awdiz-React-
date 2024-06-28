import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './authSlice';

function Home  ()  {
  const { user } = useSelector((state) => state.auth);
  const { welcomeMessage } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const router =useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    router('/login');
  };

  return (
    <div>
      <h2>Home</h2>
      {user && <p>Rupali, {user.Rupali}</p>}
      <p>{welcomeMessage}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;