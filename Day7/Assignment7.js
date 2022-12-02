// Question :-
// Write a function to filter an array of strings to hold only unique values

const arrayOfStrings=["Maaz","Ishan","Inaya","Ananya","Maaz","Rishuabh"];

function uniqueString(arr){
    const result=arr.filter((currentValue,index,arr)=>{
        return arr.indexOf(currentValue)===index;
        // let ind2=0;
        // for(;ind2<arr.length;ind2++){
        //     if(ind1===ind2)   
        //         continue;
        //     if(e===arr[ind2]){
                
        //         return false;
        //     }
        //     else
        //         return true;
        //}
            
    })
    console.log(result);
}

uniqueString(arrayOfStrings)