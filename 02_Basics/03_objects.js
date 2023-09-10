// singleton
// object.create

// object literals
const mysym = Symbol("mykey1")
const user = {
    name: "Harsh",
    age: 21,
    "full name": "Harshraj",
    location: "Prayagraj",
    [mysym]: "mykey1", // declaration of symbol
    email: "harsh7898@googl.com",
    isLoggedIn: false,
    lastLoginDays: ["Sun", "Mon"]
}
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mysym]);

user.email = "raj67@yahoo.com";
console.log(user);
//Object.freeze(user) // now elements of object can't be modified
user.email = "raj67@chatgpt.com";
//Object.freeze(user)

user.greeting =  function(){
    console.log("Hell user")
}
user.greetingTwo = function(){
    console.log(`Hello usrer, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());




