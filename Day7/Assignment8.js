// Question :-
//Write a function to check deep equality of two nested objects/arrays. //

let object = {
  name: "Harry Potter",
  age: 12,
  address: {
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
    name: { first_name: "Dheeraj", last_name: "Madde" },
  },
};

const deepCopyObject = JSON.parse(JSON.stringify(object));

const shallowCopy = { ...object };

let checkDeepEquality = (obj1, obj2) => {
  let flag = true;
  for (key in obj1) {
    if (typeof obj1[key] === "object") flag = false;
    if (typeof obj1[key] === "object" && obj1[key] !== obj2[key]) {
      checkDeepEquality(obj1[key], obj2[key]);
    } else if (typeof obj1[key] === "object" && obj1[key] === obj2[key]) {
      console.log("Objects are shallow copied");

      return;
    }
  }
  if (flag) console.log("Objects are deep Copied");
};
checkDeepEquality(object, deepCopyObject);

//---tried to achieve closure but got stuck in between so switeched normal func---

//const shallowCopy=Object.assign({},object);
// let checkDeepEquality=(obj1)=>{
//     return (obj2)=>{
//         for(key in obj1){

//             //console.log(typeof obj1[key]);
//             //let flag=true;
//             if(typeof obj1[key] === "object" && obj1[key] !== obj2[key]){
//                 console.log("Hi");
//                 checkDeepEquality(obj1[key],obj2[key])
//             }
//             else if(typeof obj1[key] === "object" && obj1[key] === obj2[key]){
//                 console.log("Objects are shallow copied");
//                 flag=false;
//                 return;
//             }
//             // if(flag)
//             // console.log("Objects are deep Copied");
//         }
//         console.log("Objects are deep Copied");
//     }

// }
//let checkEqualty=checkDeepEquality(object);
//checkEqualty(deepCopyObject);
//checkDeepEquality(deepCopyObject,object);
