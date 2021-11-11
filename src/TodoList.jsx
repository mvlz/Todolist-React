import Todo from "./Todo";

const TodoList = ({ todos, completeHandler, deleteHandler }) => {
  if (todos.length === 0) return <p>Add some tasks</p>;
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            completeHandler={() => completeHandler(todo.id)}
            deleteHandler={() => deleteHandler(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
