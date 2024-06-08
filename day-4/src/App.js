import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import UseState from "./UseState";
import NotFound from "./NotFound";
import UseState2 from "./UseState2";
import UseEffect from "./26-05-24/UseEffect";
import UseEffect3 from "./29-05-24/UseEffect3";
import Routing from "./30-05-24/Routing";
import UserDetails from "./30-05-24/UserDetails";
import Mapping from "./2-05-24/Mapping";
import AllProducts from "./30-05-24/AllProducts";
// import FunctionProp from "./4-05-24/FunctionProp";
import StyleComponent from "./4-05-24/StyleComponent";
import InlineStyling from "./4-05-24/InlineStyling";
import FunctionProp from "./Practice  folder/FunctionProp";
import Todo from "./6-06-24/Todo";
import Register from "./8-06-24/Register";




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
        <Route path="/useNavigate" element={<Routing/>}/>
        <Route  path="/user/:username" element={<UserDetails/>}/>
        <Route  path="/user/:username/:Id" element={<UserDetails/>}/>
        < Route path="/Mapping" element={< Mapping  students={["virat","rohit","rahul"]}/>}/>
        < Route  path="/all-product" element={< AllProducts/>}/>
        <Route path="/function-prop" element={<FunctionProp/>}/>
        <Route path="/StyledComponent" element={<StyleComponent/>}/>
        <Route path="/Inline-styling" element={<InlineStyling/>}/>
        <Route path="Todo" element={<Todo/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
