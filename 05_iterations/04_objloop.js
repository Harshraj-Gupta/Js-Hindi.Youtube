const myObject = {
      js: 'JavaScript',
      cpp: 'C++',
      rb: "ruby",
      swift: "swift by apple "
}
for (const key in myObject) {
    console.log(key);
}

// for (const key in myObject) {
//     console.log(myObject[key]);
// }
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["C", "C++", "Java", "C#"]

for (const key in programming) {
    console.log(programming[key]);
}