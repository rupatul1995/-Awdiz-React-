import { useNavigate } from "react-router-dom";

function Routing(){
   const router=useNavigate(); 
  
return(
    <div>
        <h1>UseNavigate</h1>
        <button onClick={()=>router("/")}>Go to Home page</button>

    </div>
);
}
export default Routing;