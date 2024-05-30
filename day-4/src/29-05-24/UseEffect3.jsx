import {  useEffect, useState } from "react"

 function UseEffect3(){
    const [ counter, setCounter]=useState(0);
    const[isUserLoggedIn,setIsUseLoggedIn]=useState(true);
    function Switchflag(){
        setIsUseLoggedIn((prevState)=> !prevState);
     }
     function Increment(){
        setCounter(counter+1);
     }
     useEffect(()=>{alert("calling from useeffect.");

     },[counter]);
     

    //  function Decrement(){
    //     setCounter(counter-1);
    //  }
    return (
        <div>
             {/* Assigment && -> if counter is more than 10 and less than 20 then display "counter is in between 10-20" else display "counter is out of range". */}
      {/* {condition ? 1st statement : 2nd statement } */}
            {/* ternary oprator */}
         {/* {isUserLoggedIn ? 1st statement: 2nd statement} */}
         {isUserLoggedIn  ? (
         <button><h1 onClick={Switchflag}>Welcome</h1> </button>) 
         :(<button> <h1 onClick={Switchflag}>Please login.</h1></button>)}

            <h1> Counter : {counter}</h1>
            <button  onClick={Increment}>  +</button>
            <button  onClick={()=>setCounter(counter-1)}>  -</button>
           
        </div>
    );
 }

 export default UseEffect3;