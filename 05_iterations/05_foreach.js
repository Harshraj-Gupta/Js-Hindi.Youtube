const coding = ["JS", "CSS", "HTML", "TypeS"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach((item, index, arr ) => {
//     console.log(item, index, arr); 
// })

const mYcoding = [
    {
    languagename: 'javascript',
    languageFileName: "js"
    },
    {
    languagename: 'Cpp',
    languageFileName: "C++"
    },
    {
    languagename: 'java',
    languageFileName: "Java"
    },
]


mYcoding.forEach((item) => {
    console.log(item.languagename);
})