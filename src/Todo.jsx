const Todo = ({todo,completeHandler,deleteHandler,editHandler}) => {
    return ( 
        <div className={todo.isCompleted ? "completed" : ""}>
            <p>{todo.text}</p>
            <div>
                <button onClick={completeHandler}>check</button>
                <button onClick={deleteHandler}>delete</button>
                <button onClick={editHandler}>edit</button>
            </div>
        </div>
     );
}
 
export default Todo;