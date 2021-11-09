import Todo from "./Todo";

const TodoList = ({todos}) => {
    if(todos.length === 0) return <p>Add some tasks</p>
    return ( 
        <div>
            {todos.map((todo)=>{
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
     );
}
 
export default TodoList;