// Array

const newArray = [1, 2, 5, 9, "Harsh", true]
const newArray1 = ["Anubhav","Raj"]

console.log(newArray[0]);
console.log(newArray[3]);
console.log(newArray[4]);
console.log(newArray[5]);

const myArray = new Array(1, 2, 4, 6)
console.log(myArray[1]);

//Array methods
myArray.push(9)
console.log(myArray);
myArray.push(78)
console.log(myArray);
myArray.pop(0)
console.log(myArray);

myArray.unshift(78) // it shifts last element to at 0 index
console.log(myArray);
myArray.shift();
console.log(myArray);
console.log(myArray.includes(78));
console.log(myArray.indexOf(6));

const newArr = myArray.join()
console.log(myArray);
console.log(newArr);

// slice(), and splice()

console.log("A", myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C", myArray);
console.log(myn2)







