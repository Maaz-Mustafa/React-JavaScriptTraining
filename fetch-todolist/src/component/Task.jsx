import { Link, useParams } from "react-router-dom";

const Task = () => {
    const {id:id,task:task,status:status,ddate:ddate}=useParams()
    return ( 
        <div className="task-style ">
            <pre>Id       :   {id}<br/><br/>
            Task     :   {task}<br/><br/>
            Due Date :   {ddate}<br/><br/>
            Status   :   {status?"Active":"Completed"}
            </pre>
            <Link to="/"> Go Back to To-Do-List</Link>
        </div>
     );
}
 
export default Task;