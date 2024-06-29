import { useState } from "react";

function  MemoComponent(){
    const[counter ,setCounter]=useState(0);
    return(
   <div>
    <h1>MemoComponent</h1>
    <ChildrentComponant counter={counter}/>
    <button onClick={()=>setCounter(prevValue(prevValue+1))}>+</button>
   </div>
    );
}
function ChildrentComponant({counter}){
    console.log("Childrent component ")
    return(
   <div>
    <h1>Counter:{counter}</h1>
   </div>

    );
}
export default MemoComponent;