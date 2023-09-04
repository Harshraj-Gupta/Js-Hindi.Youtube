const name = "Sanju"
const repoCount = 24
// console.log(name + repoCount + "ert"); /// Old way;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sanju")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newStringOne = "    Sanju. "
console.log(newStringOne.trim());
console.log(newStringOne);

const url = "https://refactored-fortnight-7v97xg4qr567cx6pp.github.dev/"
console.log(url.replace('-', '%'))
console.log(url.replace('.', '%'))

console.log(url.includes("https"));
console.log(url.includes(".com"));

