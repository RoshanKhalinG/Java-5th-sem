//Example 1
function addTwoNumbers(num1 ,num2) {
    console.log(num1+num2);
}
addTwoNumbers(1,2);


//Example 2
function  secFuntion(num1,num2) {
    let num3 = num1+num2;
    return num3;
}
let result = secFuntion(5, 6)
console.log("Result :",result);


//Example 3
function loginUserMessage(username) {
    return `${username} just logged in`
} 
// console.log(loginUserMessage("Roshan"));       ---Roshan just logged in
// console.log(loginUserMessage);                 ---just logged in
console.log(loginUserMessage());               // ---undefined just logged in



//Example 4
function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please Enter a Username")
        return
    }
   else{
     return `${username} just logged in`
   }
} 
console.log(loginUserMessage("roshan"));   



//Example 5
function calculateCartPrice(...num4) {
    return num4
}
console.log(calculateCartPrice(200,400,500,2000))




//Example 6
const user = {
    name : "Mouse",
    price : 199
}
function handleObject(anyobject) {
    console.log(`Product name is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    name : "Keyboard",
    price : 500
})



//Concept of Array in javascript 
const myNewArray = [200, 400,  100, 600]
function returnSecondValue(getArray) {
    return getArray[1]   
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));