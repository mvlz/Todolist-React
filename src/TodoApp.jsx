import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos,setTodos] = useState([])
    const addTodoHandler =(todo)=>{
        console.log(todo);
        // let i =0;
        const newTodo={
            id: todos.length +1, 
            text: todo,
            isCompleted:false,
        }
        setTodos([...todos,newTodo])
    }
    return ( 
        <div>
            <TodoForm addTodoHandler={addTodoHandler}/>
            <TodoList todos={todos} />
        </div>
     );
}
 
export default TodoApp;