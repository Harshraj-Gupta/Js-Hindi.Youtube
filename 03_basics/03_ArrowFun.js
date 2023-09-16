const user = {
    username: "Harshraj",
    price: 9809,
    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);
        //  console.log(this);
    }
}

//  user.welcomeMessage();
//  user.username = "viru"// We changed the context
//  user.welcomeMessage();

// console.log(this); // empty object (node environment)


 
//  function chai(){
//     let username = "Sanju"
//     console.log(this);
//   //  console.log(this.username);//. Undefined
//  }
//  chai()

// const chai = function(){
//     let username = "Sanju"
//     console.log(this.username);

// }
// chai()
const chai = () => {
    let username = "Sanju"
    console.log(this.username);

}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(8,9))


// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)// without resturn keyword
 //const addTwo = (num1, num2) => {username: "Sanju"}// undesfined

 const addTwo = (num1, num2) => ({username: "Sanju"})



console.log(addTwo(8,9))