//Question :-
// Write a function mapBy to convert an array of objects into an object mapped by the specified key:
//Example: 
//----------------------- Given --------------------------
let users = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
}];
mapBy(users, "first_name") 

//This should return
//{
// “Nicki”:{id:1, first_name:”Nicki”, ...},
// “Raychel”:{id:2, first_name:”Raychell”, ...},
//}

//------------------------------ my code -------------------------------
function mapBy(usersArray,spkey){
    //console.log(usersArray[0])
    //console.log(spkey)
    let newObject={};
    usersArray.forEach(element => {
        newObject[element[spkey]]=element;
    });
    console.log(newObject);
}