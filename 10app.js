// /** -----FUNCTION------- */

// // WAYS OF WRITING fUNCTIONS

// //1. FUNCTION DECLARATION

// function a(){
//     console.log('Hello')
// }

// //2.FUNCTION EXPRESSION

// let b = function(){
//     console.log('Hi');
    
// }

// //3.ARROW FUNCTION 
 
// let c = () => {
//     console.log('Hlw')
    
// }

// a()
// b()
// c()


/*-----------------PARAMETERS ------------*/

// function a1(number){//this is number parameter
//     return a1*2
// }

// //Argument
// let d = a1(2) // 2  is argument


// //Default Value

// function e(number = 4){
//     return number *2
// }

// console.log(e()); // 8
// console.log(e(2)); //4




/*--------------------------HIGHER ORDER FUNCTIONS :------------*/

//It can return function

// let a = function (){
//     return function (){
//         console.log('Hello ');
        
//     }
// }

// let b = a()
// /*
// b = function()
// {
//      console.log('hello)
// }
//  */

// console.log(b); // function aauxa
// b() // Hello
// a()() //Hello

// function modifyNumber(number , somefunction) {
//     return somefunction(number)
// }

// function add(number) {
//     return number + 2
// }

// function subtract(number){
//     return number -2
// }
// let c = modifyNumber(2 , add) //callback function
// let d = modifyNumber(2, subtract)
// console.log(c)//4
// console.log(d);//0

// Example yestoo ho . Mathi ko function le yesari kam garxa 
// let number = 2 
// let somefunction = function(number){
//     return number +2
// }
// console.log(somefunction(2));





/*------------------------RECURSION : ---------------------*/
//Function which call itself again and again  

//  //Iterative way 
// function power(x, n) {
//     let result = 1

//     for (let i = 0 ; i<n; i++){
//         result *= x
//     }
//     return result 
// }
// console.log(power(2,3)); //This gives you the correct result 2*2*2 = 8 


// //Recursive Way
// function power2(x , n)
// {
// if(n == 1){
//     return x;
// }else{
//     return x *= power2(x , n-1)
// }
// }

// console.log(power2(2,3));

// /*
// x = 2
// n = 3

// 2 * [
//     x = 2
//     n = 2
//     4 hunxa
//     ]
//     2 * 2 [
//         x = 2
//         n = 1
//         2 hunxa
//         ]

//    8 return garxa     
//  */



/*-------------------EXERCISE--------------------*/
// let a = {
//     data: 1,
//     next:{
//         data:2,
//         next:{
//             data:3,
//             next:{
//                 data: 4,
//                 next : null
//             }
//         }
//     }
// }
// //create a function using recursion which prints all the nested data in the console

// function recursion(obj){
//     console.log(obj.data);
//     if(obj.mext){
//         recursion(obj.next)
//     }
// }

// recursion(a); //1 2 3




/*-----------------SCOPE--------------------*/ 

// CODE BLOCK : Code inside with in {}

// Variable available in {}//

// Types :
//         Global: variable avilable outside code block
//         Local : Variable available Inside code block

// Example:
// let a = 1 //Global
// function b() {
//     let c = 2; // Local
//     return a + c;
// }

// console.log(b())

// //FUNCTION SCOPE

// //  let, const , var
// // var is function scoped
// function a() {
//     var b = 2;// available only within function
//     console.log(b);
// }
// console.log(a())// cant log due scode inde only

// if(true){
//     var b = 3;
// }
// console.log(b); // 3 
// // Var is considered as global as if it not found inside funtion. Var laai jun sukai code block bhitra rakhey pani global hunxa if function bhitra xaina bhaney

// if (true){
//     let c = 1
//     const d = 2
//     console.log(c);
//     console.log(d);
// }
// console.log(c);
// console.log(d)


// // Functio Scope with let . 
// function e() {
//     let z = 1
    
// }
// console.log(z);

// //let ra const chai global hudaina if tyo function or any code block bhitra xa bhaney 
// //BLOCK sCOPE
// var a = 1
// var a =2
// console.log() //2 
// //Var lai duichoti declared garna milxa . Tyo valid hunxa

// if(true){
//     var a = 3
// }
// console.log(a);



// let a = 1

// if(true){
//     let a = 3
//     console.log(a);
// // variable name same bhayeni global laai local le replace garxa code block bhitra ra baira gayepaxi global nai linxa

// }
// console.log(a);




 /* -------------Function Hoisting----------- */
 //Function declaration way :
       //1.Function Declation
       //2.Function Expression
       //3.Arrow Function

// When we declare a function from method 1 , Then we can call function at last as well as the before function block
// Function laai function banaunu bhanda ni aghadi call garna milxa
// a() // Hello nai aauxa
//  function a(){
//     console.log('Hello');
    
//  }
//  a()// Hello aauxa

//  //Function cannot be called before function block if we use Function declaretion and arrow Function method 
//  //Example 1: Function Expression
 
//   b() // print undefined 
//   let b = function(){
//     console.log('Hello');
//   }


//   c() // print undefined 
//     let c = () =>{
//         console.log('Hi');
        
//     }


// b()//hello
// function b() {
//     console.log('Hello');
// }

// b()//hello

// b = function(params){
//     console.log('hi');
    
// }

// b()//hi



//--Nested Scopes/ LEXICAL SCOPING---//
 
// function fn1() {
//     let outer = 'outer'
//     function fn2() {
//         let inner = 'inner'
//         console.log(outer);
//         console.log(inner);        
//     }
//     fn2()
//     console.log(outer);
//     console.log(inner); // invalid //available only inside fn2
// }
// fn1()

//Output : outer
          // inner
          //outer


// function fn1() {
//     let outer = 'outer'
//     function fn2() {
//         let inner = 'inner'
//         console.log(outer);
//         console.log(inner);        
//     }
//     console.log(outer);
//     outer = 'outer2'
//     fn2()
//     console.log(outer);
// }
// fn1()
/*output :
outer 330
outer2 327
inner  328
outer2 333
*/



//---------CLOSURE------------//

/*
//Example 1:
function makeCounter() {
    let count = 0;
    return function (){
        return count ++
    }
}

let counter = makeCounter()
console.log(counter());
console.log(counter());
console.log(counter());*/
/*
function makeCounter() {
    let count = 0;
    return function (){
        let a = 1
        console.log(a);
        a++
        
        return count ++
    }
}

let counter = makeCounter()
console.log(counter());
console.log(counter());
console.log(counter());
*/
/*
function makeCounter() {
    let count = 0;
    return function (){
        return ++ count 
    }
}

let counter = makeCounter()
console.log(counter()); //1
console.log(counter());//2
console.log(counter());//3
CSSConditionRule.log();//4
console.log(makeCounter()());//1
*/

/*-------THIS--------/

let a = 1 
function b() {
    console.log(this);
    
    console.log(this.a); 
}
b()
*/



//-------Functional Programming----------//


//Types of Function:

//pure Function : 
//Impure Function

//pure Function : 
// let a = 1
// let x = 2 
// let y = 1
// function b(number) {
//     a = a+ number
//     return a;
// }

// function c(number , y){
//     return y + number
// }

// console.log(b(1));//2
// console.log(b(2));//4
// console.log(b(1));//5
// console.log(b(2));//7


// console.log(c(1 , y));//3
// console.log(c(2 , y));//4
// console.log(c(1 , y));//3
// console.log(c(2 , y));//4
//c is pure $ b is impure funtion
/*pure function le every yime same arguments pass garda same value return garxa & impure le different value dinxa

/*Properties of Pure Function
    -always return same result when same argumet are passed
    -they only depend on input arguments
    -It does not depend on any sate or data of program
    They donot have side effects like modifying arguments , networs call

*/

/*
let a = 1;
function b() {
    a = a + 1
    return a
}

function c(n) {
    return n + 1
}

a = c(b)
*/



/*
// Naming Convention of Functional Programming
get 
calc
create
check

getAge()
calcSum()
*/



/*-----Currrying------- */
//---Euuta Matrai Arguments Linxa
// C bhaneko functional programming used garxa , Qbasic , Fast hunxa aru programming language bhanda
/*
function add(a , b) {
    return a + b
}

console.log(add(1 ,2));


function add2(a) {
    return function (b) {
        return a + b
    }
}

console.log(add2(1)(2));
*/



/*--------------EXERCISE---------- */
/* Create a empty array named contacts
Create a prompt that the first 5 contacts 
in your contact array 
the prompt takes 4 values a , b and c and d
option a is to add contact 
option b is to serach contact 
option c is delete contact 
option d is to exit 
a contact is a object with 2 properties name and email
while displaying contact also show the index of contact 
to delete you should prompt the index of contact
*/


// let contacts = []

// function getContactString(){
//     let contactstring = 'Your Contacts'
//      for (let i = 0; i < 5; i++) {
//         if (contacts [i]){
//             contactstring += `\n${i}. Name : ${contacts[i].name} , Email : ${contacts[i].email}`
//         }
//     }
//     return contactString
// }

// console.log(getContactString());

// for (let i = 1; i> 0; i++ ){
//     let input = prompt(getContactString())
//     switch (input) {
//         case 'a':
//             let name = prompt('Enter Name')
//             let email = prompt('Enter Email')
//             contacts.push({
//                 name: name,
//                 email: email
//             })
//             break;
//         case 'b':
//                 let contactname = prompt('Enter Name')
//                 let contactstring = 'Search Results'
//               for (let i = 0; i < contactname.length; i++)
//                 if(contact[i].name === contactname){
//                     contactstring += '\n${i}. Name : ${contact[i].name} , Email : ${contact[i].email}'
//                 }
//                 alert(contactString)
//                 break;
//         case 'c':
//             let contactIndex = prompt('Enter ContactIndex')
//             contacts = contact.filter(function(value , index){
//                 return index !== parseInt(contactIndex)
//             })
//             break;
//         case 'd':
//             i = -5
//             break ;

//             break;
//         default:
//             break;
//     }
// }


/*Recusion method of solving above problem */
let contacts = [];

function getContactString() {
    let contactString = 'Your Contacts:';
    for (let i = 0; i < 5; i++) {
        if (contacts[i]) {
            contactString += `\n${i}. Name: ${contacts[i].name}, Email: ${contacts[i].email}`;
        }
    }
    return contactString;
}

function start() {
    let input = prompt(getContactString() + '\n\nChoose an option: a) Add Contact, b) Search Contact, c) Delete Contact, d) Exit');
    
    switch (input) {
        case 'a':
            let name = prompt('Enter Name:');
            let email = prompt('Enter Email:');
            contacts.push({
                name: name,
                email: email
            });
            return start(); // Recursion continues after adding contact

        case 'b':
            let contactname = prompt('Enter Name to Search:');
            let contactstring = 'Search Results:';
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].name === contactname) {
                    contactstring += `\n${i}. Name: ${contacts[i].name}, Email: ${contacts[i].email}`;
                }
            }
            alert(contactstring);
            return start(); // Recursion continues after search

        case 'c':
            let contactIndex = prompt('Enter Contact Index to Delete:');
            contacts = contacts.filter(function (value, index) {
                return index !== parseInt(contactIndex);
            });
            return start(); // Recursion continues after deletion

        case 'd':
            return; // Exit case, break recursion

        default:
            alert('Invalid option! Please choose again.');
            return start(); // Recursion for invalid option
    }
}

start();
