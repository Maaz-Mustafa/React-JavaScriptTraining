//Question :- 
// 1- Do you think JSON.stringify would work for arrays as well? 
// 2- What about nested objects? 
// 3- What happens if we pass numbers, strings, undefined, null to JSON.stringify?

const arr=[1,2,3,4,5];

console.log(JSON.stringify(arr));
// 1- Yes, JSON.stringify works for array as well.

const obj={
    name:"Maaz",
    nestedObj:{
        EmployeeNo:737,
        BloodGrp:"A+"
    }
}
console.log(JSON.stringify(obj));
// 2- Yes, JSON.stringify also works for nested objects 

let number=1;
console.log(JSON.stringify(number));

let str="Stringify";
console.log(JSON.stringify(str));

const nul=null;
console.log(JSON.stringify(nul));

let und;
console.log(JSON.stringify(und));


/* 3- We can pass numbers, string as well as null values to JSON.stringify
    but JSON doen't allow 'undefined' values.
*/


