
//Falsy : false , 0 , -0, 0n , "", Null , undefined , NaN
//let a = Boolean('aa')
//console.log(a);

// -----------IF-----------//

 /*if(condition){
     //Statement
 }

if ('aa') {
    console.log('run');
}
if (0) {
    console.log('run');
}
if (-1) {
    console.log('run');
}
if (-0) {
    console.log('run');
}*/


//--------- If / Else---------//
/*
let condition= 'Hello'
if (condition) {
    console.log('if')
}else{
    console.log('else');
}
*/


/*
//-------------------ELSE IF-----------------------------//
// 'use strict'
let condition = 3 < 2
let condition2 = 3 > 2

if (condition) {
   console.log('if'); 
}else if (condition2) {
    console.log('else if');
}else{
    console.log('else');
}
*/


/*
//----------Switch Statement------------//
const expr = 'Papayas'
switch (expr) {
    case 'Oranges':
        console.log('Oranges are RS 59 per kg');
        break;
    case 'Mangoes' :
        console.log('Mangoes');
    case 'Papayas':
        console.log('Papayas are RS 79 per Kg'); 
        break   
    default:
        console.log(`Sorry we are out of ${expr}.`);
        break;
}
*/

//-------------CODING CHALLENG--------------//

// 1.Create a variable named name and marks . If marks is greater than or equal to 32 then log 'You are passed' in the console else log 'you are failed'
   /* let name = 'Roshan Khaling';
    let marks = 90;

    if (marks>32 || marks==32) {
        console.log(name);
        console.log('You are passed');
        if (marks>=32 && marks<=50) {
            console.log('you passed in 3rd division');
        }
        else if (marks>50 && marks <=64) {
            console.log('you passed in 2nd division');
        }
        else if (marks>65 && marks <=79) {
            console.log('you passed in 1st division');
        }
        else if (marks>=80) {
            console.log('you passed in distinction');
        }
    }else{
        console.log('You are failed');
    }*/



    let name = 'Roshan Khaling';
    let marks = 90;

    switch (true) {
        case typeof marks === "number" && !isNaN(marks):
            switch (true) {
                case (marks>32 || marks==32):
                    console.log(name);
                    console.log('You are passed');
                    switch (true) {
                        case(marks>=32 && marks<=50) :
                            console.log('you passed in 3rd division');
                            break;
                        case(marks>50 && marks <=64) :
                            console.log('you passed in 2nd division');
                            break;
                        case (marks>65 && marks <=79) :
                            console.log('you passed in 1st division');
                            break;
                        default:
                            console.log('you passed in distinction');
                            break;
                    }
                    break;
                default:
                    console.log('You are failed'); 
                    break;
            }
            break;
    
        default:
            console.log('Enter a valid number');
            break;
    }
    

