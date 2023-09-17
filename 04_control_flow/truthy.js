// const userEmail = "Sanju@878"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got the user email");
    
} else{
    console.log("Don't have user email!!");
}

//+++++++++++++++++++++++ Falsy Values ++++++++++++++++++++++++++++

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

//+++++++++++++++++++++++ Truthy Values ++++++++++++++++++++++++++++
 "0", 'false', " ",  [],  {}, function(){}



 if(userEmail.length === 0)
 {
    console.log("Empty Array");
 }


 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
 }


//+++++++++++  Nullish Coalescing Operator (??): null undefined +++++++

let val1 ;
val1 = 5 ?? 10  // output=> 5
// val1 = null ?? 89 // output=> 89
// val1 = undefined ?? 34 // output=> 34
// val1 = null ?? 56 ?? 32 // output=> 56

console.log(val1);

  