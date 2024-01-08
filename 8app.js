
//------Objects-------//
//Creatng a object
/*
let person = {
    name : "John Doe",
    age : 30,
    address : "Pokhara"
}

let animal = {}
    animal.type = "Dog",
    animal.breed = "labrador"


console.log(person);
console.log(animal);
*/


//-----Using new keyword----------
    /*
    const person = new Object()
    person.name = "John Doe"
    person.age = 35
    person.address = "pokhara"

    console.log(person);

    let animal = new Object({
    type : "Dog",
    breed : "Labrador"
    })

    console.log(animal);

    let a = {hello : 'world'}
    let b = a

    b.hello = 'hi'

    console.log(a);
    */


// ----Accessinf object properties------
    /*
    let a = {
        hello : "hi"

    }

    console.log(a.hello);
    console.log(a['hello']);
    console.log(a['he'+'llo']);

    let a = {
        a : 1,
        b : 2,
        c : 3
    }

    let b = 'c'

    console.log(a[b]);
    */

 // when should i use notaton oe bracket :
 /*
    let a ={
        hello : "hello",
        apple : "apple",
        namgo : "mango",
        1:1,
        2:2,
        '2a' : 1
    }
    let fruits = ['apple', 'mango']
    console.log(a.hello);
    console.log(a[fruits[0]]);//'apple'
*/

//------looping through a object---------//
/*
    let a = {a:1, b:2 , c:3}

    for(let key in a){
        console.log(key , a[key]);
    }

    let b = [1,2,3,4]
    for( let key in b){
        console.log(key , b[key]);
    }
 


    let a = [1,2,3]

    a['hello'] = 'hi'
    console.log(a);
    console.log(a , a.length);

    a[10] = 5

    console.log(a.length);
    console.log(a[9]);
  */
       
//----------Deleting a object proprety-----------/
/*

     let  a = {
        a:1,
        b:2,
        c:3
     }

     delete a.b
     let b = [1,2,3]
     delete b[0]
     console.log(b[0]);
     console.log(b.length);
*/
/*    
let a = {
    a:[1,2,3],
    b:1,
    b:2,
    c:[1,2,3],
    d : [
        {
            a:1,
            b:"Target"
        }
    ]
}

console.log(a.d[0].b);
*/

//-----Object Methods ------
/*
    let person = {
        name : "Roshan",
        hello : function () {
            return 2
        }
    }

    console.log(person.hello);//function
    console.log(person.hello);// value
*/


//-----------This keyword---------
    /*
    let person = {
        firstName : "john",
        lastname : 'Doe',
        fullName : function () {
        
            return this.firstName + ' ' + this.lastname
        }
    }

    console.log(person.fullName());
    */

   
    
 //-------EXERCISE--------//
 /*
 let  person = {
    name : "Roshan Rai",
    age : 19,
    gender : "male" ,
    location : 'Dhapakhel',
    maritalStatus : "Single",

    movedto : function(location){
        this.location = location
    },
    celebratedbirthday : function (){
       this.age ++ 
    },
    married(){
        if(this.maritalStatus === 'married'){
            console.error('Already Married')
        }
        else{
            this.maritalStatus = 'married'
    }
    },
    divorced(){
        if(this.maritalStatus === 'married'){
            this.maritalStatus = 'Single'
        }
        else{
            console.error("Get married first")
    }
 }
 }
 console.log(person.location);
 person.movedto("Kathmandu")
 console.log(person.location)

 console.log(person.age);
 person.celebratedbirthday();
 console.log(person.age);


 console.log(person.maritalStatus);
 person.married()
 console.log(person.maritalStatus);
 person.married()

 person.divorced();
  console.log(person.maritalStatus);
  person.divorced();
  */


 //----Alert box----
 
 /*let a = window.alert('hello')
 let b = alert('hi')

 console.log(a);
 console.log(b);
 */

 //----Prompt Box-----
/*
 let a = window.prompt("Do you want to continue")
 let b = prompt("Do you want to continue")

 console.log(a);
 console.log(b);
 */
/*
 let a = window.prompt(", What is your name ?", "SSS")
 let b = prompt("What is your name ?", "Roshan")

 console.log(a);
 console.log(b);
 */


 //-----EXERCISE-------
 
 Lalitpur,