import { memo, useCallback, useState } from "react";

function UseCallbackComponent(){
    const[counter , setCounter]=useState(0);
    const[data ,setData]=useState("");
    console.log(data ,"data");
    const Increment = useCallback(()=>{
        setCounter((prevValue)=>prevValue+1);},[]);
    
    return(
<div>
    <input onChange={(event)=>setData(event.target.value)}/>
   <h1> UseCallback:-</h1>
   <MemoComponant counter={counter} Increment={Increment}/>

</div>
    );
}

const MemoComponant =memo(ChildrentComponant);
function ChildrentComponant({counter,Increment}){
    console.log("Childrent componant ");
return(
    <div> 
         <h1>Counter:-{counter}</h1>
         <button onClick={Increment}>+</button>
    </div>
);
}
export default UseCallbackComponent;















