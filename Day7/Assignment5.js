// Question :-
// Write a function that sorts an array of objects by the key that is passed in the second argument, 
// and in the order passed as the 3rd argument. 
//Example:

//----------------------------------------- Given -------------------------------
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
 "gender":"Male”"
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
"date_of_birth": "2012/05/23",
 "gender":"Female"
}]
console.log(sort(users, "id", "desc")); //Should return users sorted by id in descending order
console.log(sort(users, "first_name","asc")); //Should return users sorted by first_name in ascending order

//--------------------------------------- My code --------------------------------------
function sort(usersArray,spkey,order){
    let newArray;
    if(order==="asc"){
        newArray=usersArray.sort((a,b)=>{
            return a[spkey]>b[spkey]?1:-1;
        })
    }
    else if(order==="desc"){
        newArray=usersArray.sort((a,b)=>{
            return b[spkey]>a[spkey]?1:-1;
        })
    }
    
    return newArray;
}

