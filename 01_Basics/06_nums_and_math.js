const score = 400
 const balance = new Number(10089)
 console.log(balance);
 console.log(score);

 console.log(balance.toString());
 console.log(balance.toString().length);
 console.log(balance.toFixed(3));

 const otherNumber = 57.87897
 console.log(otherNumber.toPrecision(2));
 console.log(otherNumber.toPrecision(1));

  const newNumber = 100000000
  console.log(newNumber.toLocaleString()); //UAS style
  console.log(newNumber.toLocaleString('en-IN')); //Indian style

//   ********************* Maths *************************

console.log(Math);
console.log(Math.abs(-8768)); // it converts negative value into //posistive value

console.log(Math.round(8687.768768));
console.log(Math.ceil(6.2));
console.log(Math.floor(5.9));
console.log(Math.min(-6, 8, -9, 7, 2)); // selects minimum value
console.log(Math.max(9, 7, 19, 0, -5)); // selects maximum value

console.log(Math.random()); // output => always between 0 and 1
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1 ));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
