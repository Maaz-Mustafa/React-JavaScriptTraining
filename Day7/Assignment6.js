// Question :-
//● Given 2 arrays with related objects, return a new array where objects having the same id from
// each of the arrays are merged. Try to achieve it with a complexity - O(n).
//Example:

let userNames = [{
"id": 1,
"first_name": "Nicki",
}, {
"id": 2,
"first_name": "Raychel",
}, {
"id": 3,
"first_name": "Demetris",
}, {
"id": 6,
"first_name": "Amata",
}]
let userEmails = [{
"id": 2,
"email": "rmcgrady1@cpanel.net",
}, {
"id": 1,
"email": "ncrozier0@squarespace.com",
}, {
"id": 5,
"email": "abraiden3@canalblog.com",
}, {
"id": 3,
"email": "dkilshall2@elpais.com",
}]
 

//This should return an array of users in the format: 
/*[{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
}]
*/

// function mergeById(userNames, userEmails) {
    
//     let newObjArr=[];

//     userNames.forEach((objNames)=>{
//         userEmails.forEach((objEmails)=>{
//             if(objNames.id === objEmails.id){
//                 let newObj={};
//                 newObj={...objNames,"email":objEmails.email}
//                 newObjArr.push(newObj);
//             }
//         })
//     })
//     return newObjArr;
// }
// output = This is running but in O(n^2) time

// function mergeById(userNamesArray, userEmailsArray){
    
//     let arr1=userNamesArray.sort((a,b)=>{
//         return a.id-b.id;
//     });
//     let arr2=userEmailsArray.sort((a,b)=>{
//         return a.id-b.id;
//     });
//     //console.log(arr2);
//     let i=0,j=0;
//     let newObjArr=[];
    
//     while(i<arr1.length || j<arr2.length){
        
//         if(arr1[i].id===arr2[j].id){
//             arr1[i].email=arr2[j].email;
//                 newObjArr.push(arr1[i]);
//                 i++;
//                 j++;
//         }
//         else if(arr1[i].id<arr2[j].id && arr1[i].id != arr2[j].id){
                
//                 newObjArr.push(arr1[i]);
//                 i++;
              
//         }
//         else if(arr2[j].id<arr1[i].id && arr1[i].id != arr2[j].id){
           
//             newObjArr.push(arr2[j]);
//             j++;
//         }
//     }
//     return newObjArr;

// }

let sortById=(sortArray)=>{
    const sortedArray=sortArray.sort((a,b)=>{
    return a.id-b.id;
})
return sortedArray;
};
const arr1=sortById(userNames);
const arr2=sortById(userEmails);
  

const mergeById = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    arr1.length - 1 >= i;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i]["id"] > arr2[j]["id"]) {
        result.push(arr2[j]);
        j++;
      } else if (arr1[i]["id"] < arr2[j]["id"]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push({ ...arr1[i], ...arr2[j] });
        i++;
        j++;
      }
    }
  
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  };
  
console.log(mergeById(arr1,arr2));