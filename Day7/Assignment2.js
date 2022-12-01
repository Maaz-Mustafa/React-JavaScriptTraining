//Question :-
//Write a function filterObj that will filter out all the keys of a flat object that have objects
// or arrays using Object.keys and Object.entries. Example:

//---------------------- given -------------------
let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};
console.log(filterObject(obj)); //This should return {a:”Apple”, d:”Dog”}

//---------------------- my code -------------------

function filterObject(obj) {
  //console.log(Object.entries(obj))
  //console.log(Object.values(obj))
  // const arr=Object.values(obj)
  // arr.forEach((e)=>{
  //     //console.log(typeof e);
  //     if(typeof e !="object"){
  //         console.log("true");
  //     }
  // })
  const arrayOfEntries = Object.entries(obj);
  let newObject = {};
  arrayOfEntries.forEach((arr) => {
    if (typeof arr[1] != "object") {
      let str = arr[0];
      //newObject={arr:arr[1]}
      newObject[`${str}`] = arr[1];
    }
  });
  return newObject;
}
