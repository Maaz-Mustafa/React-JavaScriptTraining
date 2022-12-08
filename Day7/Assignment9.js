//Question :-
//Write a recursive function to create a deep clone of a nested object

let objectToBeCopied = {
  name: "Harry Potter",
  age: 12,
  address: {
    numbers: [1, 2, 3, 4, 5],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
    name2: { first_name: "Dheeraj", last_name: "Madde" },
  },
};

let copyObject = (obj) => {
  let resultObj = {};
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== "object") {
      resultObj[key] = value;
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        resultObj[key] = value;
      } else {
        resultObj[key] = copyObject(value);
      }
    }
  }

  return resultObj;
};

console.log(copyObject(objectToBeCopied));
