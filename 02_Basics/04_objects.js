//const tinderUser = new Object() // singleton object
//console.log(tinderUser);

const tinderUser = {}// nonsingleton object 
tinderUser.id = "2332"
tinderUser.name = "Roshan"
tinderUser.isLoggedin = false
console.log(tinderUser);

const regularuser = {
    email: "roshan658@",
    fullname: {
        userfullname: {
            firstname: "Rohan",
            lasname: "Sharma"
        }
    }
}

console.log(regularuser.email);
console.log(regularuser.fullname.userfullname.firstname);

console.log(regularuser.fullname?.userfullname.firstname);// ? => if fullname exists or not

const obj1 = {
    1: "a", 
    2: "b"

}
const obj2 = {
    3: "c", 
    4: "d"

}
// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "Something@1"
    },
    {
        id: 2,
        email: "Something@2"
    },
    {
        id: 3,
        email: "Something@"
    },
]
console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedin"));
console.log(tinderUser.hasOwnProperty("isLogged"));









