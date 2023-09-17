// +++++++++++++++++++++++ Reduce +++++++++++++++++++++

 const myNums = [1, 2, 3]

// const mytotal =  myNums.reduce(function(acc, currval) {
//     console.log(`the value of acc is ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const mytotal = myNums.reduce((acc, currval) => acc+currval, 0)
// console.log(mytotal);


const shoppingcart =  [
    {
        itemname: "js course",
        price: 999
    },
    {
        itemname: "py course",
        price: 1999
    },
    {
        itemname: "DSA course",
        price: 3999
    },
]

const total = shoppingcart.reduce( (acc, item) => acc + item.price, 0)
console.log(total);
