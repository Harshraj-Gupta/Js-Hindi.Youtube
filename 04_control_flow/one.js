const userLoggedin = true
const debitcard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if(userLoggedin && debitcard){
    console.log("Allow to access the course");
}

if(loggedinFromEmail || loggedinFromGoogle){
    console.log("loggedin");
}
