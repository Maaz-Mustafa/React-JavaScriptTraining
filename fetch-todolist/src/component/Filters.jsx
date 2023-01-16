import {memo} from 'react';
import {SelectBox} from '../shared/SelectBox';


const STATUS_OPTIONS=[{key:"All",value:"All"},{key:"Completed",value:"Completed"},{key:"Active",value:"Active"}];
const SORT_OPTIONS=[{key:"A-Z",value:"asc"},{key:"Z-A",value:"desc"}]

const FiltersComponent = ({handleStatusFilter,searchTask,handleOrder}) => {
    
    return ( <>
        <div className='filter-bar'><b>Filter :-</b></div>
        <label>Status : </label>
        <SelectBox options={STATUS_OPTIONS} targetFunc={handleStatusFilter}/>
        <label>Search : </label>
        <input type="text" onKeyUp={(e)=>searchTask(e.target.value)} placeholder="Search Task"/> 
        <label>Sort : </label>
        <SelectBox options={SORT_OPTIONS} targetFunc={handleOrder}/>
    </>);
}
 
export  const Filters=memo(FiltersComponent);