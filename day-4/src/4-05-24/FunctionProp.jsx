function FunctionProp(){
    function HandleClick(){
        console.log("Clicked.")
    }
    return (
        <div>
            <h1>FunctionProp</h1>
           < ChildrenComponent   buttonValue="Click me"  HandleClick={HandleClick}/>
        </div>
    );
}


function ChildrenComponent({buttonValue,HandleClick}){
    return <button onClick={HandleClick}>{buttonValue}</button>
}
export default FunctionProp;




// import { useState } from "react";
// function FunctionProp(){
//     const [counter, setCounter]=useState(1);
//     function Increment(){
//         setCounter(counter+1);
//     }
//     return(
//        <div>
//         <h1>Counter:{counter}</h1>
//         <ChildrenComponent Increment={Increment}/>
//        </div> 
//     )
    
// }
//  function ChildrenComponent({Increment}){
//     return<button onClick={Increment}>+</button>
//  }

// export default FunctionProp;



// import { useState } from "react";
// function FunctionProp(){
//     const [counter, setCounter]=useState(1);

// function  Increment(){
//     setCounter(counter+1);
// }

//     return(
//     <div>
//      <h1>Counter:{counter}</h1>
//      <ChildrenComponent />
//     </div>
   
//     ); 
    
// }

// function ChildrenComponent(){
//     <button > +</button>
// }
// export default FunctionProp;






// import React, { useState, useEffect } from 'react';

// const Counter = () => {

// const [count, setCount] = useState(0);

// const handleIncrement = () => {

// setCount(count + 1);

// };

// const handleDecrement = () => {

// setCount(count - 1);

// };

// useEffect(() => {

// console.log('Count updated:', count);

// }, [count]);

// return 
