'use strict';
let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("how", "are", "you");
console.log(myArray.length);
myArray.shift();
for (let element of myArray) {
    console.log(element);    
}