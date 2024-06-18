import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Home(){
    const{state}=useContext(AuthContext);
const router=useNavigate();
    return (
    <div><h1>Home page:-{state?.user?.name}</h1>
    <button onClick={()=>router("/useNavigate")}>Redirect to Routing page</button>
    </div>
    );
}

export default Home;