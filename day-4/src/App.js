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
// import AllProducts from "./30-05-24/AllProducts";
// import FunctionProp from "./4-05-24/FunctionProp";
import StyleComponent from "./4-05-24/StyleComponent";
import InlineStyling from "./4-05-24/InlineStyling";
import FunctionProp from "./Practice  folder/FunctionProp";
import Todo from "./6-06-24/Todo";
import Register from "./8-06-24/Register";
import Login from "./8-06-24/Login";
import Registervalidation from "./09-06-24/Registervalidation";
import Successlogin from "./09-06-24/Successlogin";
import Loginvalidation from "./09-06-24/Loginvalidation";
import ContactForm from "./09-06-24/ContactForm";
import AllProductsLoding from "./11-06-24/AllProductLoding";
import AllProducts from "./11-06/AllProducts";
import Reducer from "./15-06-24/Reducer";









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
        {/* < Route  path="/all-product" element={< AllProducts/>}/> */}
        <Route path="/function-prop" element={<FunctionProp/>}/>
        <Route path="/StyledComponent" element={<StyleComponent/>}/>
        <Route path="/Inline-styling" element={<InlineStyling/>}/>
        <Route path="Todo" element={<Todo/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Registervalidation" element={<Registervalidation/>}/>
        <Route path="/loginvalidation" element={<Loginvalidation/>}/>
        <Route path="/Successlogin" element={<Successlogin/>}/>
        <Route path="/contacform" element={<ContactForm/>}/>
        {/* <Route path="/conponant" element={<Conponant/>}/> */}
        <Route path="/All-ProductsLoding" element={<AllProductsLoding/>}/>
        <Route path="/AllProducts" element={<AllProducts/>}/>
        <Route path="/reducer" element={<Reducer/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
