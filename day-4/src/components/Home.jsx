import { useNavigate } from "react-router-dom";

function Home(){
const router=useNavigate();
    return (
    <div><h1>Home</h1>
    <button onClick={()=>router("/useNavigate")}>Redirect to Routing page</button>
    </div>
    );
}

export default Home;