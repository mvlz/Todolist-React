import { useState } from "react";

const TodoForm = (props) => {
    const [todo, setTodo]=useState('')
    const addHandler=(e)=>{
        console.log(e.target.value);
        setTodo(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        props.addTodoHandler(todo)
        if (!todo) {
            alert("Enter todo!")
            return;
        }
        setTodo("");

    }
    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Add task ..." value={todo} onChange={addHandler} />
            <button type="submit">Add</button>
        </form>
     );
}
 
export default TodoForm;