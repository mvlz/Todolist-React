import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, completeHandler, deleteHandler,updateTodo }) => {
  const [edit,setEdit]=useState({id:null, text:"", isCompleted: false });
  const updateHandler=(newVal)=>{
    updateTodo(edit.id,newVal);
    setEdit({id:null, text:"", isCompleted: false })
  }
  const render = () => {
    return (
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              completeHandler={() => completeHandler(todo.id)}
              deleteHandler={() => deleteHandler(todo.id)}
              editHandler={()=>setEdit(todo)}
            />
          );
        })
    )
  }
  if (todos.length === 0) return <p>Add some tasks</p>;
  return <div className="todo-container"> {edit.id ? <TodoForm addTodoHandler={updateHandler} edit={edit} /> : render()} </div> 
};

export default TodoList;
