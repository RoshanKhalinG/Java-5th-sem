/*
let person = {
    name :"Roshan Rai"
}
console.log(person);

let a = Object.getOwnPropertyDescriptor(person, 'name')

console.log(a);


//------------ Object.defineProperty----------

let descriptor = Object.defineProperty(person , 'name', {
    writable : false,
    enumerable : true,
    configurable : true
})

let b = Object.getOwnPropertyDescriptor(person, 'name ')
console.log(b);
person.name = 'John'
console.log(person);
*/
/*

let a = {
    age : 22,
    name : "john"
}

Object.defineProperty(a , 'name' ,{
    enumerable : false
})

for (const key in a ){
    console.log(key);
    
}



// Object.defineProperty(a , 'age' ,{
//     configurable : false 
// })

delete a.age
console.log(a); // delete age and print {name: 'john'}



Object.defineProperty(a , 'age' ,{
    configurable : false 
 })

 delete a.age
console.log(a); // donot delete age and print both

//Prperties

Object.defineProperties( a , {
    name : {
        writable : true
    },
    age : {
        configurable : false
    }
})
delete a.age
console.log(a);
*/


/*
let a = {
    age : 22,
    name : "john"
}

Object.preventExtensions(a)
a.name = 'hi'

console.log(a);
*/


/*
let a = {
    age : 22,
    name : "john"
}

Object.seal(a) //seal le chai delete garna dinna ra , property change hunxa but naya chai add hunna
a.hello = 'hi'
a.age = 50
delete a.age
console.log(a);
*/ 

/*
let a = {
    age : 22,
    name : "john"
}

Object.freeze(a) //freeze le chai object ko property change garna didaina
a.hello = 'hi'

a.age = 50

delete a.age
console.log(a);
*/

/*
// Getter and Setter

//1.Data Properties
//2.Accessor Properties

let circle = {
    radius : 4,
    get area(){
        return Math.PI*(this.radius**2)
    },
    set area(value){
        this.radius = Math.sqrt(value/Math.PI)
    } 
}
circle.area = 49
console.log(circle.area);
console.log(circle.radius);
*/

/*
//Resuability
let vehicle = {fuel : 'diesel' , seats :4}
let car = {tyres : 4}
car.__proto__ = vehicle

console.log(vehicle);
console.log(car.fuel);


let tesla = {
    fuel : 'battery'
}

tesla.__proto__ = vehicle
console.log(tesla);
console.log(tesla.seats);//4
*/



//Ways of creating object
//Oblect.create

let vehicle = {fuel : 'diesel', seats : 4}

let car = Object.create(vehicle , {
    tyres : {
        value : 4
    }
})

console.log(car);



