const NavBar = ({UncompletedTodos,status,selectHandler}) => {
    return ( 
        <nav>
            <h2 className="app-name">TO-DO List {UncompletedTodos > 0 && <span className="uncomplete-num">{UncompletedTodos}</span>} </h2>
            <select className="select" onChange={selectHandler} value={status}> 
                <option value="All">All</option>
                <option value="Uncompleted">Uncompleted</option>
                <option value="Completed">Completed</option>
            </select>
        </nav>
     );
}
 
export default NavBar;