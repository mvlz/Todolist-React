const Todo = ({todo}) => {
    return ( 
        <div>
            <p>{todo.text}</p>
            <div>
                <button>check</button>
                <button>edit</button>
            </div>
        </div>
     );
}
 
export default Todo;