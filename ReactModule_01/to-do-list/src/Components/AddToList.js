import { useState } from "react";

const AddToList = (props) => {

    
    const [task,setTask]=useState("");
    const [ddate,setDdate]=useState("");

    return ( 
        <div>
            <form>
                <table>
                    <tr>
                        <td>Task</td>
                        <td><input type="text" name="task" 
                        onBlur={(e)=>{setTask(e.target.value)}}
                        /></td>
                    </tr>
                    <tr>
                        <td>Due Date</td>
                        <td><input type="date" name="ddate"
                        onBlur={(e)=>{setDdate(e.target.value)}}
                        /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" name="add"value="Add" 
                        onClick={()=>{props.handleAdd(task,ddate)}}
                        /></td>
                    </tr>
                     
                </table>
            </form>
        </div>
     );
}
 
export default AddToList;