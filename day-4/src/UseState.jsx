import { useState } from "react";

function UseState(){
    const [counter, setCounter]=useState(1);
    const [counter2, setCounter2]=useState(10);
    console.log(counter,"counter");
function Increment(){
    console.log("Inside function");
    if(counter<10){
    setCounter((preValue)=> preValue+1);
    }
}
function Decrement(){
    if(counter>1){
        setCounter((preValue)=> preValue-1);
    }
}

function Reset(){
     setCounter(1);
}
function Increment2(){
    
    console.log("Inside function")
    if(counter2>=10){
        setCounter2((preValue)=>preValue+1);
    }
    
}
function Decrement2(){
    
    console.log("Inside function")
    if(counter2 >10){
        setCounter2((preValue)=> preValue-1);
    }
}

function Reset2(){
     setCounter2(10);
}

    return (
    <div><h1>Counter : {counter}</h1>
    <button onClick={Increment}> +</button>
    <button onClick={Decrement}> -</button>
    <button onClick={Reset}>Reset</button>

    <h1>counter2 :{counter2}</h1>
    <button onClick={Increment2}> +</button>
    <button onClick={Decrement2}> -</button>
    <button onClick={Reset2}>Reset</button>
    </div>
    );
}
export default UseState;