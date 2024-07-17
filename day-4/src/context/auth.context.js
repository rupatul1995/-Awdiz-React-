import { createContext, useEffect, useReducer } from "react";
import Api from "../axiosConfig";
import toast from "react-hot-toast";



function reducer(state, action){

    switch(action.type){
        case "Login":
        return {...state,  user : action.payload};
        case "Logout":
        return {...state,  user :null};
        default :
        return state;


    }
}
 const initialState={user : null};

export const AuthContext=createContext();

function MyContextProvider({children})  {   //higher order componant
 
    const [state ,dispatch]=useReducer(reducer, initialState);
    async function getCurrentUser() {
        try {
          const response = await Api.get("/auth/get-current-user");
          if (response.data.success) {
            dispatch({ type: "Login", payload: response.data.userData });
          }
        } catch (error) {
          toast.error(error?.response?.data?.error);
        }
      }
      useEffect(() => {
        getCurrentUser();
        // alert("Page reloaded.");
        // // call another api to backend and use locally stored data.
        // retrive token from storage and send token to backend
        // token  decrypt -> userid
        // {name :"awdiz"}
        // dispatch({type :"LOGIN" , payload })
      }, []);
    
return(
   <AuthContext.Provider value={{state , dispatch}}>
    {children}
    </AuthContext.Provider>
);
}
export default MyContextProvider;