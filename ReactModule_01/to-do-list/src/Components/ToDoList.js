import {useState} from 'react';

const ToDoList = (props) => {
    

    
    
    
    return ( <div><h1>To DO List</h1><br/>
            <table cellSpacing={10}>
            {
                props.list.map((item)=>
                {
                    return (
                        <tr key={item.id}>
                            <td>
                                <input type="checkbox" id={item.id} onClick={(e)=>{
                                    props.changeStatus(e.target.checked,item.id)}}/>
                            </td>
                            <td>
                                {item.task}
                            </td>
                            <td>
                                {item.dueDtae}
                            </td>
                            <td>
                                {item.status}
                            </td>
                            <td>
                                <button onClick={()=>{props.handleDelete(item.id)}} >remove</button>
                            </td>
                        </tr>
                    )
                }
                )
            }
            </table>
            <button onClick={props.openDiv}>Add a new Task</button>
    </div>);
}
 
export default ToDoList;