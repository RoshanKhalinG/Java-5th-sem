/*
//---------------Number--------------//

let a = 1;
let b = 6.5;
let c = 1234e5
let d = 123e-5

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

*/


/*
//-----------Nember Precision---------------//

let e =  888888888888888// javascript takes exact value only at 15
let f =  99999999999999999
let g = 0.1 + 0.2
let h = (0.1*10 + 0.2*10)/10
console.log(e,f, g, h);

*/


/*
//---------------Bigint----------------//

let f = 999999999999999999n

console.log(f + 2n);
console.log(Number.MAX_SAFE_INTEGER);

*/


/*
//----------------Boolean---------------------//

let a = true
let b = false
console.log(typeof a, typeof b);

*/


/*
//------------------Undefined------------------//

let a;
let b;

console.log(typeof a);

*/


/*
//---------------------null--------------------//

let c = null
console.log(typeof null);
*/



/*
//------------symbol------------------///

let sym1 = Symbol('sdsd')
let sym2 = Symbol('sdsd')

console.log(sym1 === sym2);

*/


/*
//----------------Array----------------------//

let a = [1,2,3, 'sds']
console.log(typeof a);
console.log(Array.isArray(a));
console.log(a[0]);
*/


/*
//--------------------Object---------------------//

let b = {
    a : "hello",
    b : "hi"
}
console.log(b.a , b['a'] , b['b'] );
*/


/*
//-------------------Function----------------------//

function function1(a , b){
     return a+b
}
function function2() {
     return 5
}

let c = function1(1,2)
let d = function2()
let e = function2()
let f = function2
let g = function2
console.log(c , d , e , f , g());
*/


/*
//----------EXERCISE----------//
//------------------------------//

// 1.Define a variable of name and assign the value to your full name
     let name = "Roshan Khaling"

// 2.Print your name into console
     console.log(name);

// 3.Slice your surname and print it into the console
     console.log(name.slice(7));

// 4.Define the function whose name is division give a and b parrameter
     function division(a , b) {
         return a/b
       }
     let c = division(4,2)
      console.log(c);

// 5.Declare a variable c assign it to the vaue returned parrameters 12 and 3
    //let c = division(12,3)

// 6.Define Variables name, age and print I am 'name' and I am 'age'

     let name = 'Roshan'
     let age = 19

     console.log('I am '+name+' and I am' +age);
     console.log('I am ${name} and I am ${age}');


// 7.Define a variables nameOfCars and assign the array string containing the name of cars log it to console

     let nameOfCars = ['ferrari' , 'audi' , 'mcclaren']
     console.log(nameOfCars);


// 8.Define a object person eith name and age properly print name of the person to the console

      let person = {
          name: 'Roshan',
          age: 19
      }
      console.log(person.name);
      console.log(person['name']);
*/