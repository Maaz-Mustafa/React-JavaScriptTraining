import { Link, useParams } from "react-router-dom";

const Task = () => {
    const {id:id,task:task,status:status,ddate:ddate}=useParams()
    return ( 
        <div className="task-style ">
            <pre> <div className="">  Id       :   {id}</div>
            <div className="task-info-div">Task     :   {task}</div>
            <div className="task-info-div">Due Date :   {ddate}</div>
            <div className="task-info-div">Status   :   {status?"Active":"Completed"}</div>
            </pre>
            <div className="task-info-div"><Link to="/"> Go Back to To-Do-List</Link></div>
        </div>
     );
}
 
export default Task;