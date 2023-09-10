const marvel_hesros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "flash", "superman"]
// marvel_hesros.push(dc_heros);
// console.log(marvel_hesros);

// console.log(marvel_hesros[3]);
// console.log(marvel_hesros[3][1]);

// const allheros = marvel_hesros.concat(dc_heros)
// console.log(allheros);

// const allnewheros = [...marvel_hesros, ...dc_heros]
// console.log(allnewheros);

const another_array = [1, 2, 3, [4, 5, 6], 6, 7, [8, 9, [90, 43]], 8]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Harshraj"));
console.log(Array.from("Harshraj"));
console.log(Array.from({name: "Harshraj"}));//interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));









