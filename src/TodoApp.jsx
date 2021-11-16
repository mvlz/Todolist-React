import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodo,setFilterTodo]= useState([]);
  const [status, setStatus]= useState("All");

  useEffect(()=>{
    filterHandler(status);
  },[todos,status])
  const addTodoHandler = (todo) => {
    // console.log(todo);
    // let i =0;
    const newTodo = {
      id: todos.length + 1,
      text: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodo = [...todos];
    updatedTodo[index] = selectedTodo;
    setTodos(updatedTodo);
  };

  const deleteHandler = (id) => {
    const filteredTodo = todos.filter((t) => t.id !== id);
    setTodos(filteredTodo);
  };

  const updateTodo = (id,newVal) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newVal;
    const updatedTodo = [...todos];
    updatedTodo[index] = selectedTodo;
    setTodos(updatedTodo);
  };

  const filterHandler=(status)=>{
    switch(status){
      case "All":
        setFilterTodo(todos);
        break;
      case "Completed":
        setFilterTodo(todos.filter(tdo => tdo.isCompleted));
        break;
      case "Uncomplted":
        setFilterTodo(todos.filter(todo => !todo.isCompleted));
        break;
      default: setFilterTodo(todos);
    }
  }
  const selectHandler=(e)=>{
    setStatus(e.target.value)
    filterHandler(e.target.value);
}
  return (
    <div>
      <NavBar status={status} selectHandler={selectHandler} />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={filterTodo}
        completeHandler={completeHandler}
        deleteHandler={deleteHandler}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
