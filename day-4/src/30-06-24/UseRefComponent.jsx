import { useEffect, useRef, useState } from "react";

function UseRefComponent(){
    const [counter , setCounter]=useState(0);
    const prevCounter=useRef();
    console.log(prevCounter,"prevCounter")

useEffect(()=>{
prevCounter.current=counter;

},[counter])
return(
    <div>
         <h1>UseRefComponent</h1>  <br/>
       <h1>previous Counter:{prevCounter.current}</h1>      
       <h1>Counter:{counter}</h1>
     <button onClick={()=>setCounter(prevValue=>(prevValue+1))}>+</button>
    </div>
);
}
export default UseRefComponent;


