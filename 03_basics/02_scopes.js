// let a = 10
// const b = 20
var c = 30
let a = 5765

if(true){
    let a = 20;
    const b = 87;
    var c = 373;
    // console.log("Inner: ",a);
    // console.log(b);

}
// console.log(a);
// // console.log(b);
// console.log(c);

function one()
{
    const  username = "Harsh"
    function two()
    {
        const website = "Youtube "
        // console.log(username);
    }
    // console.log(website);   

    two()
}

// one() 

if (true){
    const username = "Harshraj"
    if(username == "Harshraj")
    {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);


// +++++++++++++++++++ Interesting Topic ++++++++++++++++++++++

//  console.log(addOne(8)). ///. No Error
  function addOne(num)
  {
    return num + 1
  }

//   addTwo(5).  // Error
  const addTwo = function(num)
  {
      return num + 2
    }
    console.log(addTwo(5))
    
