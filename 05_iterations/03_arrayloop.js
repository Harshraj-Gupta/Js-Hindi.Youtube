// for of
//[{}, {}, {}]
// ["", "", ""]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!!"

for (const greet of greetings) {
//    console.log(`Each char is ${greet}`);
}

// Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // will not be included because map holds only unique values

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// for (const [key,  value] of map) {
//     console.log(key, ':-', value);
// }

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key,  value] of myObj) {
//     console.log(key, ':-', value);
// }
    //// dose not work for objects

