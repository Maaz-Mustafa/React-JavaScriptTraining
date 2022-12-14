import { useState } from "react";
import AddToList from "./AddToList";
import ToDoList from "./ToDoList";

const Home = () => {
    const [list,setList]=useState([
        {id:1,task:"To complete Assignments on React",dueDtae:"14-12-2022",status:"Active"},
        {id:2,task:"Submit The Assignments of Java Script",dueDtae:"13-12-2022",status:"Completed"},
        {id:3,task:"Project Selection",dueDtae:"20-12-2022",status:"Active"}
    ])
    const [div,setDiv]=useState(false);
    const changeStatus=(check,id)=>{
        console.log(check,id);
        
        const updatedStatusArray = list.map(obj => {
            if(obj.id === id && check==true){
                obj.status="Completed"
            }
            else if(obj.id===id && check=== false){
                obj.status="Active"
            }
            return obj;
          });
          setList(updatedStatusArray)
          
        // list.find(
        // (item)=>{
        // if(id===item.id)
        // {
        //     if(check==true){
        //         item.status="Completed"
        //     }
        //     else {
        //         item.status="Active"
        //     }

        // }})
       
        // setList([...list])

        
    }
    const handleDelete=(id)=>{
        const resltArray=list.filter((filteredItem)=>
            id!==filteredItem.id
        )
        setList(resltArray);
    }
    const openDiv=()=>{
        if(!div)
        setDiv(true);
        else
        setDiv(false);
    }
    const handleAdd=(task,ddate)=>{
        console.log(ddate.toString());
        const obj={
            id:list.length+1,
            task:task,
            dueDtae:ddate.toString(),
            status:"Active"
        }
        
        setList([...list,obj]);
        setDiv(false);
    }
    return ( 
        <div>
            <div className="navBar">

        </div>
        <div className="Home">
            <ToDoList list={list} openDiv={openDiv} changeStatus={changeStatus} handleDelete={handleDelete}/>
            <div style={{display:div?"block":"none",
            position:"absolute",
            top:"70",
            bottom:"8",
            left: "700px",
            }} ><AddToList handleAdd={handleAdd}/></div>
        </div>
        </div>
        
     );
}
 
export default Home;
<div className="navBar">

</div>