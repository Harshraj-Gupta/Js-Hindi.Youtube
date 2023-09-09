// Date in js

// Month starts from 0 in js

let myDate = new Date(); // Date is an object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); 

let myCreatedDate = new Date(2023, 4, 21)
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023, 4, 21, 7, 3)
console.log(myCreatedDate1.toLocaleString());
let myCreatedDate2 = new Date("06-13-2023")
console.log(myCreatedDate2.toLocaleString());

//++++++++++++++++ Time Stamps +++++++++++++++++++++

let myTimeStamp =  Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);

newDate.toLocaleString(`default`,{
    weekday: "long",
}
)

