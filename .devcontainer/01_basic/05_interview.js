"use strict";  // Enforcing strict mode

let newNumber = "gj567";  // String
let abc = "vga687";  // String
let nONTe = 2345;  // Number

// Corrected function definition
const elem = function() {
    console.log("This is elem function");
};

// Corrected object syntax (semicolons changed to commas)
const newValue = {
    name: "rtyu",
    age: "67"
};

const newvaule = "gdfggyug3456";  // String

// Logging the types
console.log(typeof newNumber);  // string
console.log(typeof abc);  // string
console.log(typeof nONTe);  // number
console.log(typeof elem);  // function
console.log(typeof newValue);  // object
console.log(typeof newvaule);  // string

// Logging null type
console.log(typeof null);  // object (this is a known JavaScript bug)
