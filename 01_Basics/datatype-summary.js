// There are two data types
// Primitive
    /*
        7 Types: 
        String, Number, Boolean, Null, Undefined, Symbol, BigInt 
    */

// Non Primitive (Reference datatype)
    /*
        Array, Objects, Functions
    */
        const Id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(anotherId);
    console.log(Id === anotherId);

    const bigNumber = 6867576587896987908n
    console.log(typeof bigNumber);
/// Array
    const heros = ["shaktiman", "superman", "naagraj"];
/// Objects

    let myObj = {
            name: "Sanju",
            age: 22,
    }
    /// Function
    const myFunction = function(){
        console.log("Hello, World!");
    }
 console.log(typeof myFunction);  // Object Function
 console.log(typeof heros);