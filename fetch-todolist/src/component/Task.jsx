import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getTodoById } from "../services/todos.services";

const Task = () => {
    const {id}=useParams()
    const {data,error}=useQuery("todo",()=>
        getTodoById(id),{staleTime:0}
    )
    
    return ( 
        <div className="task-style ">
            <pre> <div className="">  Id       :   {data?.id}</div>
            <div className="task-info-div">Task     :   {data?.task}</div>
            <div className="task-info-div">Due Date :   {data?.dueDtae}</div>
            <div className="task-info-div">Status   :   {data?.status?"Completed":"Active"}</div>
            </pre>
            <div className="task-info-div"><Link to="/"> Go Back to To-Do-List</Link></div>
        </div>
     );
}
 
export default Task;