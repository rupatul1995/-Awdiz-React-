export const ADDTODO = 'ADDTODO';
export const DELETETODO = 'DELETETODO';

export const addTodo = (text) => ({
    type: ADDTODO,
    payload: text,
});

export const deleteTodo = (index) => ({
    type: DELETETODO,
    payload: index,
  });


