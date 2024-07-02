import {UseState, useRef } from "react";

function UseRefComponent2(){
   
    const counterRef= useRef(0);
    const [counter, SetCounter]=UseState(10);

    function Increment() {
        counterRef.current++;
        console.log("current counter",counterRef.current);
    }
    return(
        <div>
             <h1>UseRef2Component</h1>
             <h1>State counter:{counter}</h1>
            <button onClick={()=>SetCounter(counter+1)}>+</button>
             <h1>Counter:{counterRef.current}</h1>
             <button onClick={Increment}>+</button> 
        </div>
    );
}
export default UseRefComponent2;