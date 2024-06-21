import { useState } from "react";
import {useNavigate} from "react-router-dom";

function UseState3(){
    const[counter, setCounter]=useState(1);
    const[counter1, setCounter1]=useState(10);
    const router =useNavigate()
    // const[isUserLoggedIn, setIsUseLoggedIn]=useState(true);
    

    // function mydata(){
    //     setIsUseLoggedIn((prevState)=>!prevState);
    // }

function Increment(){
    setCounter(counter+1);
}
function Decrement(){
    if(counter>0){
        setCounter(counter-1);
    }
    
}
function Reset(){
    setCounter(1);
}


function Increment1(){
    if(counter1>=10){
        setCounter1(counter1+1);
    }
   

}
function Decrement1(){
    if(counter1>10){
        setCounter1(counter1-1);
    }
    
}
function Reset1(){
    setCounter1(10);
}

// useEffect(()=>{alert("CALLING FROM USEeFFECT")},[counter]);
    return(
<div>
    {/* {isUserLoggedIn? <button onClick={mydata}>Welcome !</button>:<button onClick={mydata}>Please Login</button>} */}
    <h1>counter:{counter}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
 



    <h1>counter2:{counter1}</h1>
    <button onClick={Increment1}>+</button>
    <button onClick={Decrement1}>-</button>
    <button onClick={Reset1}>Reset</button>
    <button onClick={()=>router("/Login")}>Go to home page</button>
    </div>
    );
}
export default UseState3;