//Question :-
//How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

const object1 = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

//object1.address.details[0]="5"

//const object2={...object1,address.details:["5", "Privet Drive"]};
const object2 = { ...object1 };
object2.address.details[0] = "5";

console.log(object1);
console.log(object2);
