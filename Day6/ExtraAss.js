const arr=[1,2,3,4,5,6,7,8];
console.log("----------- map() ------------");
console.log(arr.map((e)=>{
    if(e>2)
    return e;
}));

console.log("----------- filter() ------------");
console.log(arr.filter((e)=>{
    return e>2;
}));

console.log("----------- forEach() ------------");
arr.forEach((e)=>{
    if(e>2)
     console.log(e);
});

console.log("----------- for in ------------");
// for(ele in arr){
//     //if(ele>2)
//     console.log(ele);   

// }
const obj={
    name:"maaz",
    Employee_Id:737,
    Bank_Account:"HDFC"
}

for(x in obj){
    console.log(x);
}

console.log("----------- for of ------------");
for(ele of arr){
    if(ele>2)
    console.log(ele);     
}


console.log(arr.slice(3,6));