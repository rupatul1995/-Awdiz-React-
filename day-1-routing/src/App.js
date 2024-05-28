import './App.css';
import Home from '../components/Home';
import Login from '../components/login';
import Register from '../components/register';
  //To import click Route end and ctl+space bar and also click Home end word ctr+space bar
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      
    </Routes>
    </div>
  );

}

export default App;
