// Question :-
// 2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ).
// Log the data into the console once it is received


let promise = new Promise((resolve,reject)=>{
  let data=fetch("https://reqres.in/api/users");
  resolve(data);
  //return data;
});

promise
  .then((data) => {
    return data.json();
  })
  .then((obj) => console.log(obj))
  .catch((err) => console.log("Error occurs Here", err));
  