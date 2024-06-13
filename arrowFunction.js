//Arrow Function
let greet = ()=>{
    console.log('Good Night');
}
greet();


//SetTimeOut
setTimeout(() =>{
    console.log("We are inside setTimeout");
},4000)


//Add two number by passing argument in console ... Eg: sum(20,50)
let sum = (a,b)=>{
    return a+b;
}
//shortcut
let sum1 =(a,b)=> a+b;
let greeting = ()=>console.log('Good Morning');
greeting();

// Half ... Eg: in concole half(45) and it gives 22.5
let half = a => a/2;


//With Object 

let obj1 = {
    names: ["Harry", "Rohan","Yogesh","Pravin"],
    speak(){
        this.names.forEach((student) => {
            console.log("Kukdoo koo " + student);
        });
    }
}
obj1.speak();


//Examples :

/*Example 1: Basic Arrow Function
A simple function that adds two numbers:*/
const add = (a, b) => {
    return a + b;
};
//This can be further simplified to:
const add1 = (a, b) => a + b;

/*Example 2: Single Parameter
A function that doubles a number:*/
const double = n => n * 2;


/*Example 3: No Parameters
A function that returns a fixed value:*/
const getValue = () => 42;


/*Lexical this
One of the main advantages of arrow functions is that they do not have their own this context. Instead, they inherit this from the parent scope at the time they are defined. This makes them particularly useful in situations where you need to preserve the context, such as in event handlers or callback functions.

Example: Lexical this*/ 
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` properly refers to the Person instance
    }, 1000);
}

const person = new Person();


/*Comparison with Regular Functions
Syntax: Arrow functions have a more concise syntax.
this Context: Arrow functions do not have their own this binding. Instead, this is lexically scoped.
arguments Object: Arrow functions do not have their own arguments object. Use rest parameters (...args) if you need to access the function's arguments.
Constructor: Arrow functions cannot be used as constructors and will throw an error if used with new.
Methods: Arrow functions are not suitable for methods that need their own this context.
Example: this in Regular Functions vs Arrow Functions*/


const obj = {
    regularFunction: function() {
        console.log(this); // `this` refers to `obj`
    },
    arrowFunction: () => {
        console.log(this); // `this` refers to the global object or undefined in strict mode
    }
};

obj.regularFunction(); // logs: obj
obj.arrowFunction(); // logs: global object or undefined


