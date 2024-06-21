import {createContext, useReducer} from "react";

 export const themeContext = createContext();

  function Reducer( state, action){
    switch(action.type){
      case "DARK":
        return{...state, theme:"DARK"}
      case "LIGHT":
        return{...state, theme:"LIGHT"}
      default:
        return state;
    }

  }

 const intialState={theme:"LIGHT"};
function ThemeContextProvider({children}){
    const [themeState, dispatch]=useReducer(Reducer, intialState)
    return(
 <themeContext.Provider  value ={{themeState,dispatch}}> {children}
 </themeContext.Provider>
    );
}

export default ThemeContextProvider;
