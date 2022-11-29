//Question :- What do you think would happen if you pass an index beyond the range of the string? 
//Or if you pass a negative index? Try it out.


let str="String with length 21";
let length=str.length;

console.log(str.charAt(length+1)) //output = undefined

console.log(str.charAt(-1)) //output = undefined


