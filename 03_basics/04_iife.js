// Immediately Invoked Function Expressions
// IIFE is used for global polution 

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
}
)(); // must be terminated with semicolon

//  (function aurcode(){
//     console.log(`DB Connected two`);
//  })();

((name) => {
    console.log(`DB Connected 2 ${name}`);
})("Harsh");
 

