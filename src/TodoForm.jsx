import {useRef, useState,useEffect} from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState(props.edit ? props.edit.text : "");
    const inputRef = useRef(null);

    const addHandler = (e) => {
        // console.log(e.target.value);
        setTodo(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!todo) {
            alert("Enter todo!");
        } else {
            props.addTodoHandler(todo);
            setTodo("");
        }
    };

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder={props.edit ? "New Title" : "Add task ..."}
                value={todo}
                onChange={addHandler}
                ref={inputRef}
            />
            <button type="submit">
                {props.edit ? "Done" : "Add"}
            </button>
        </form>
    );
};

export default TodoForm;
