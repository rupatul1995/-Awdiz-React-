import React, { act, useReducer } from "react";

function reducer(state, action){

    switch(action.type){
        case Increment:
        return {...state,  counter: state.counter+1};
        case Decrement:
        return  {...state,  counter: state.counter-1};
        case Reset:
        return  {...state,  counter: 0};
       default :
        return state;
    }
}
const initialState={counter:0};
const Reducer = () => {
    const [state ,dispatch]=useReducer(reducer, initialState);

    function Increment(){
        dispatch({type:Increment});
    }
    function Decrement(){
        dispatch({type:Decrement});
    }
    function Reset(){
        dispatch({type:Reset});
    }
    return(  <div>
        <h1>Counter:{state.counter}</h1>
        
        <button onClick={ Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
        </div>
    );
};
export default Reducer;