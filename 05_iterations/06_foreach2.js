// const coding = ["JS", "CSS", "HTML", "TypeS"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const newNums = myNums.filter((num) => num > 5)
//  console.log(myNums.filter((num) => num > 5))

// const newNums = myNums.filter((num) => { 
//     return num > 5}) /// explicit return

// console.log(newNums);

const newNums = []
myNums.forEach((num) => {
    if(num>5)
    newNums.push(num)
})

console.log(newNums);
