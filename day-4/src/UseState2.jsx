import { useState } from "react"

function UseState2(){
    const[counter,setCounter]=useState(1);

    function Increment(){
        
        setCounter(counter+1);
    }
    function Decrement(){
        setCounter(counter-1)
    }
    return ( <div>
        <h1>useState2</h1>
        <h2>counter:{counter}</h2>    
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}> -</button>
        </div> 
    );
}
export default UseState2