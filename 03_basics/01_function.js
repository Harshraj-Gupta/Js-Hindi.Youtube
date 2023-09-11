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

// function loginUserMessage(username){
//     if(username === undefined)
//     {
//         console.log("Please enter your name");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Harsh"));
//console.log(loginUserMessage());// jam just logged in
console.log(loginUserMessage())

function loginUserMessage(username = "sam"){
    if(!username)
    {
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Harsh"))

function CalculateCarrPrice(value1, value2, ...num1){
     return num1
}
console.log(CalculateCarrPrice(799, 400, 788, 899));

const user = {
    username: "Harsh",
    price: 199
}

function handleuser(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}
handleuser(
    {
        username: "Raj",
        price: 35456
    }
)
handleuser(user)

const NewArray = [200, 400, 60, 67]

function returnValue(getArray){
    return getArray[3]
}
console.log(returnValue(NewArray))
console.log(returnValue([768, 980, 5676, 4556]))

