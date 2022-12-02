//Question :-
//Write a functiongroupBy to convert an array of objects into groups 
//based on the specified key:

//------------------------------ Given -----------------------------

 let users = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09",
"gender":"Male",
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05",
  "gender":"Female"
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
"date_of_birth": "2018/12/31",
  "gender":"Male"
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
"date_of_birth": "2012/05/23",
  "gender":"Female"
}];

groupBy(users, "gender")

//This should return 

//{
//“Male”:[
// {id:1, first_name:”Nicki”, ...}, 
// {id:3, first_name:”Demetris”, ...}
//]
//“Female”:[
// {id: 2, first_name:”Raychel”, ...},
// {id: 4, first_name:”Amata”, ...}
//]
//}


//--------------------------- My Code ---------------------------

function groupBy(usersArray,spkey){
    let newObject={};
    usersArray.forEach(element=>{
        if(newObject[element[spkey]]){
            newObject[element[spkey]]=[...newObject[element[spkey]],element];
        }
        else{
            newObject[element[spkey]]=[element];
        }
    })
    console.log(newObject)
} 


// for explanation :-

// let str1 = "Hello world";
// function myFunc(str){
//     let result ={};
//     for(let i=0;i<str.length;i++){
//         if(result[str[i]]){
//             result[str[i]]+=1;
//         }
//         else{
//             result[str[i]]=1;
//         }
//     }
//     console.log(result);
// }
// myFunc(str1);


