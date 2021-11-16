const Todo = ({todo,completeHandler,deleteHandler,editHandler}) => {
    return ( 
        <div className={todo.isCompleted ? "completed" : "todo-div"}>
            <p>{todo.text}</p>
            <div className="Todo-btns">
                <button onClick={completeHandler} className={todo.isCompleted ? "completed-btn" :"check-btn"}></button>
                <div>
                    <button onClick={deleteHandler} className="delete-btn btn">delete</button>
                    <button onClick={editHandler} className="edit-btn btn">edit</button>
                </div>
            </div>
        </div>
     );
}
 
export default Todo;