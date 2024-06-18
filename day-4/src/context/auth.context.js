import { createContext, useReducer } from "react";
function reducer(state, action){

    switch(action.type){
        case "Login":
        return {...state,  user : action.payload};
        case "Loginout":
        return {...state,  user :null};
        default :
        return state;


    }
}
 const initialState={user : null};

export const AuthContext=createContext();

function MyContextProvider({children})  {   //higher order componant
 
    const [state ,dispatch]=useReducer(reducer, initialState);
    // function Login(data){
    //     dispatch({type:"Login",payload:data})
    // }

return(
   <AuthContext.Provider value={{state , dispatch}}>
    {children}
    </AuthContext.Provider>
);
}
export default MyContextProvider;