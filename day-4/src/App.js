import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import UseState from "./UseState";
import NotFound from "./NotFound";
import UseState2 from "./UseState2";
import UseEffect from "./26-05-24/UseEffect";
import UseEffect3 from "./29-05-24/UseEffect3";
import UserDetails from "./29-05-24/30-05-24/UserDetails";
import Routing from "./29-05-24/30-05-24/Routing";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path="/*" element={<NotFound/>} />
        <Route  path="/" element={<Home/>} />
        <Route  path="/UseState" element={<UseState/>} />
        <Route  path="/UseState2" element={<UseState2/>} />
        <Route  path="/UseEffect" element={<UseEffect/>} />
        <Route  path="/UseEffect3" element={<UseEffect3/>} />
        <Route  path="/UserDetails" element={<UserDetails/>} />
        <Route  path="/useNavigate" element={<Routing/>} />
        
      </Routes>
    </div>
  );
}

export default App;
