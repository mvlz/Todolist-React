import { useState } from "react";

const NavBar = ({status,selectHandler}) => {

    
    return ( 
        <nav>
            <select className="select" onChange={selectHandler} value={status}> 
                <option value="All">All</option>
                <option value="Uncompleted">Uncompleted</option>
                <option value="Completed">Completed</option>
            </select>
        </nav>
     );
}
 
export default NavBar;