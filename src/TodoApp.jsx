import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
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
  return (
    <div>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        completeHandler={completeHandler}
        deleteHandler={deleteHandler}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
