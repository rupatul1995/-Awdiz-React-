import { memo, useState } from "react";

function  MemoComponent(){
    const[counter ,setCounter]=useState(0);
    const[data , setData]=useState("");
    console.log(data ,"data");
    return(
   <div>
    <input  onChange={(event)=>setData(event.target.value)}  />
    <h1>MemoComponent</h1>
  <MemoData counter={counter}/>
    <button onClick={()=>setCounter(prevValue=>(prevValue+1))}>+</button>
   </div>
    );
}
const MemoData = memo(ChildrentComponant);
function ChildrentComponant({counter}){
    console.log("Childrent component ")
    return(
   <div>
    <h1>Counter:{counter}</h1>
   </div>

    );
}
export default MemoComponent;