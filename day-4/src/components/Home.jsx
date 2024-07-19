import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CounterContext } from "../15-06-24/Counter.Context";
import { themeContext } from "../18-06-24/theme.context";
import Api from "../axiosConfig";
import toast from "react-hot-toast";

function Home(){
    const {state}=useContext(CounterContext);
    const{themeState,dispatch}=useContext(themeContext);
const router=useNavigate();

 async function handleLogout(){
    try{
        const response =await Api.post("/auth/logout");
        if(response.data.success){
            dispatch({type:"LOGOUT"});
            router("/login");
            toast.success(response.data.message);
        }else{
            toast.error("Logout failed");
        }
    }catch(error){
        toast.error("Failed to Logout"); 

    }
 }

    return (        
    <div style={{backgroundColor:themeState.theme ==="LIGHT"?"yellow":"grey",}}>
      
    <h1>Home page:-{state?.counter }</h1>
    {/* <h1>Home page:-{state?.user?.name }</h1> */}
    <button onClick={handleLogout}>Logout</button>
    <button onClick={()=>router("/counter")}> Go to Counter</button>
    <button onClick={()=>router("/useNavigate")}>Redirect to Routing page</button>
    <button onClick={()=>dispatch({type:themeState?.theme==="LIGHT"? "DARK":"LIGHT"})}> change{themeState?.theme==="LIGHT"? "LIGH>T":"DARK"} theme</button>
    </div>
    );
}

export default Home;