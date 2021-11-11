const Todo = ({todo,completeHandler,deleteHandler}) => {
    return ( 
        <div className={todo.isCompleted ? "completed" : ""}>
            <p>{todo.text}</p>
            <div>
                <button onClick={completeHandler}>check</button>
                <button onClick={deleteHandler}>delete</button>
                <button>edit</button>
            </div>
        </div>
     );
}
 
export default Todo;