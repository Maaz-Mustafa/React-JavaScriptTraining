//Quetion :-
// 1- What happens if you pass a regular/invalid JSON string to JSON.parse?
// 2- What will happen if such an invalid function runs in the program?
//    Will other parts of the code execute correctly after that?

let regularString='{"name":"Maaz":"Mustafa"}';
JSON.parse(regularString);
// 1- if we pass an invalid string to JSON.parse it throws a Syntax Error

function invalidFunc(){
    let regularString='{"name":"Maaz":"Mustafa"}';
    JSON.parse(regularString);
}

invalidFunc();

console.log("runs perfectly");
// 2- No, if we have trouble in JSON.parse the other parts of the program will not work.


