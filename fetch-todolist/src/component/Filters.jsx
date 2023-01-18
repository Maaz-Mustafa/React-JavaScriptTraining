import {memo} from 'react';
const FiltersComponent = ({handleStatusFilter,searchTask,handleOrder}) => {
    
    
    
    return ( <>
        <div className='filter-bar'><b>Filter :-</b></div>
        <label>Status : </label>
        <select onChange={(e)=>{ handleStatusFilter(e.target.value)}}>
            <option>Select One</option>
            <option>All</option>
            <option value="Completed">Completed</option>
            <option value="Active">Active</option>
        </select>
        <label>Search : </label>
        <input type="text" onKeyUp={(e)=>searchTask(e.target.value)} placeholder="Search Task"/> 
        <label>Sort : </label>
        <select onChange={(e)=>{handleOrder(e.target.value)}}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
    </>);
}
 
export  const Filters=memo(FiltersComponent);