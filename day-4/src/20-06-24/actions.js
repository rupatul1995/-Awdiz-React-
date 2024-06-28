export const ADDTODO = 'ADDTODO';


export const addTodo = (text) => ({
    type: ADDTODO,
    payload: text,
});