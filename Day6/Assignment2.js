/* Question :-
    What makes a method mutating or non mutating in Javascript?
    Find out whether each of the following methods are mutating or non-mutating.
    How can you verify this?:


1- push                                                 - mutating

2- pop                                                  - mutating

3- filter                                               - non mutating

4- find                                                 - non mutating

5- sort                                                 - mutating

6- map                                                  - non mutating
 */

// If a method modifies the original array changing it's original values inside of the array 
// this makes the method mutating in javascript e.g.


console.log("\n---------- Push() ------------")
let arr=[1,2,3,4,5,6,7]
console.log(arr)

arr.push(8)
console.log(arr)
// output = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// result = array is mutated
//hence push() is mutating 

console.log("\n---------- Pop() ------------")
arr=[1,2,3,4,5,6,7]
console.log(arr)

arr.pop()
console.log(arr)
// output = [ 1, 2, 3, 4, 5, 6 ]
// result = original array gets modified/mutates

console.log("\n---------- filter() ------------")
arr=[1,2,3,4,5,6,7]
console.log(arr)

const filteredArray=arr.filter((element)=>element>2)
console.log(filteredArray); // output = [ 3, 4, 5, 6, 7 ]
console.log(arr); // output = [ 1, 2, 3, 4, 5, 6, 7 ]
// result = Array is not mutated

console.log("\n---------- find() ------------")
arr=[1,2,3,4,5,6,7]
console.log(arr)

let a=arr.find((element)=>element==5)
console.log(a);// output = 5
console.log(arr);// output = [ 1, 2, 3, 4, 5, 6, 7 ]
// result = Array is not mutated

console.log("\n---------- sort() ------------")
arr=[1,2,3,4,5,6,7]
console.log(arr)

let sortedArray=arr.sort((a,b)=>b-a);
console.log(sortedArray);// output = [ 7, 6, 5, 4, 3, 2, 1 ]
console.log(arr);// output = [ 7, 6, 5, 4, 3, 2, 1 ]
// result = Original array was changed/mutated

console.log("\n---------- map() ------------")
arr=[1,2,3,4,5,6,7]
console.log(arr)

const  mappedArray= arr.map((item) => {
    if (item === 3) {
      return 10;  
    }
    return item;
}); 
console.log(mappedArray);// output = [ 1, 2, 10, 4, 5, 6, 7 ]
console.log(arr);// output = [ 1, 2, 3, 4, 5, 6, 7 ]
// result = Original array wasn't modified/mutated