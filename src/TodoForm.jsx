import { useState } from "react";

const TodoForm = () => {
    const [todo, setTodo]=useState('')
    const addHandler=(e)=>{
        console.log(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault()
    }
    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Add task ..."  onChange={addHandler} />
            <button>Add</button>
        </form>
     );
}
 
export default TodoForm;