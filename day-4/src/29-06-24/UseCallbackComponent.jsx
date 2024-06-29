import { memo, useState } from "react";

function UseCallbackComponent(){
    const[counter , setCounter]=useState(0);
    const[data ,setData]=useState("");
    console.log(data ,"data");
    return(
<div>
    <input onChange={(event)=>setData(event.target.value)}/>
   <h1> Memo:-</h1>
   <MemoComponant counter={counter}/>
   <button onClick={()=>setCounter((prevValue)=>prevValue+1)}>+</button>
</div>
    );
}

const MemoComponant =memo(ChildrentComponant);
function ChildrentComponant({counter}){
    console.log("Childrent componant ");
return(
    <div> 
         <h1>Counter:-{counter}</h1>
    </div>
);
}
export default UseCallbackComponent;