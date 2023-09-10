//+++++++++++++++ Function ++++++++++++++

function sayMyName(){
    // console.log("H");
    // console.log("A");
    // console.log("R");
    // console.log("S");
    // console.log("H");
}
sayMyName()

// function Add(num1, num2)
// {
//     console.log(num1 + num2);
// }
function Add(num1, num2)
{
   // let result = num1 + num2
   //  return result
   return num1 + num2
}
// Add(67,33)
// Add(9, "8")
// Add(7, null)
// Add(9, "a")
// Add(null, null)//0
// const result = Add(9, 10)
//console.log(result);

const result = Add(9, 7)
// console.log(result);

function loginUserMessage(username){
    if(username === undefined)
    {
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Harsh"));
//console.log(loginUserMessage());// jam just logged in
console.log(loginUserMessage())


