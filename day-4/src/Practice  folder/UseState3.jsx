import { useState } from "react";


function UseState3(){
    const[counter, setCounter]=useState(1);
    const[counter1, setCounter1]=useState(1);
function Increment(){
    if(counter>10){
        setCounter(counter+1);
    }
   
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
    setCounter1(counter1+1);
}
function Decrement1(){
    if(counter1>0){
        setCounter1(counter1-1);
    }
    
}
function Reset1(){
    setCounter1(10);
}
    return(
<div>
    <h1>counter:{counter}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>



    <h1>counter2:{counter1}</h1>
    <button onClick={Increment1}>+</button>
    <button onClick={Decrement1}>-</button>
    <button onClick={Reset1}>Reset</button>
    </div>
    );
}
export default UseState3;