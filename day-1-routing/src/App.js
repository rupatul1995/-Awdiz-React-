import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';






  //To import click Route end and ctl+space bar and also click Home end word ctr+space bar
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/"element={<Home/>}  />
      <Route path ="/login"element={<Login/>}  />
      <Route path ="/register" element={<Register/>}  />
     </Routes>
    </div>
  ); 

}

export default App;
