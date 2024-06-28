import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo ,deleteTodo} from './actions';
import "./App.css"

function App() {
    const [todoinput, settodoInput] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todoinput) {
            dispatch(addTodo(todoinput));
            settodoInput('');
        }
    };

    return (
        <div className="tododiv">         
            <h1 className='tododiv1'> Create Todo List</h1>
            <div  className='inputdiv'>
            <input  className='inputdiv1'
                type="text"
                value={todoinput}
                onChange={(e) => settodoInput(e.target.value)}
                placeholder="Todo"
            />
            </div>
            <br/>
            <button className='submitdiv' onClick={handleAddTodo}>Submit</button><br/>
            <button className='submitdiv2' onClick={() => dispatch(deleteTodo())}>Delete</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.text}
                        
                        
                    </li>
                ))}
            </ul>
           
        </div>
    );
}


export default App;