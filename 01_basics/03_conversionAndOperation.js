let score = "33"

console.log(typeof score)
console.log(typeof(score)) //both can work

//type casting 
let valueinNumber = Number(score)
console.log(typeof valueinNumber)

let score2 = "33abc"

console.log(typeof score2);
let valueinNumber2 = Number(score2)
console.log(typeof valueinNumber2)
console.log(valueinNumber2)  //Nan not in number , convert to ho gaya nut number nahi hai

let score3 = null

console.log(typeof score3);
let valueinNumber3 = Number(score3)
console.log(typeof valueinNumber3)
console.log(valueinNumber3)    //0 

//undefined=> Nan
//string=> Nan

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console

