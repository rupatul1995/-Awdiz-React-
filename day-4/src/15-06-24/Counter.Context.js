import { createContext, useReducer } from "react"

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return {...state, counter : state.counter+1}
        case "DECREMENT":
            return {...state, counter: state.counter-1}
        case "RESET":
            return {...state, counter: 0}
        // default:
        //     return state;
    }
}

const initialstate={counter: null}

export const CounterContext=createContext()

function MyCounterContextProvider({children}){
    const[state,dispatch]=useReducer(reducer, initialstate)


    return(
        <CounterContext.Provider value={{state,dispatch}}>
            {children}
        </CounterContext.Provider>
    );
}

export default MyCounterContextProvider;