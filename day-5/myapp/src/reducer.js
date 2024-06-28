import { ADDTODO,DELETETODO } from './actions';

const initialState = {
    todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return {

                ...state,
                todos: [...state.todos, { text: action.payload}],
            };
            case DELETETODO:
                return {
                  ...state,
                  todos: state.todos.filter((_, index) => index !== action.payload),
                };
       
        default:
         return state
    }
};

export default reducer;