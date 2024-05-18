//Function repetative task
function sayMyName1( ){
    console.log("Abhishek")
}
//sayMyName1 //this is reference only, to execute it do ()
//sayMyName1()

//here 
function sayMyName(name){
    console.log(`My name is ${name}`)
    //My name is Rohit
}
//sayMyName("Rohit")

//function to add two numbers

function addTwoNumber(x , y){
    console.log(`Your final answer is ${x+y}`)
}
//addTwoNumber(3,4) --> this function returned nothing

function addTwoNumber2(x , y){
    return x + y;
}

//const answer  = addTwoNumber2(5 , 10)
//console.log(answer) //15

//const answer  = addTwoNumber2(5 , "10")
//console.log(answer) //510  javascript aisi hi hai bhai 
//that is why we use if and else 

//---. importance of return 
function addtwoNumber3(x,y){
    console.log(x+y) //10
}
//const result = addtwoNumber3(4,6)
//console.log(result) // Undefined --> beacse vo void return kiya 

//++++++++++++++++++++++++++++++++++++++++++++++

function greeting(name){
    return `${name}, just loggedIn`
}
//greeting("rohit") //kuchh hua nhi but run ho gya

//console.log(greeting("rohit")) //rohit, just loggedIn

function greeting2(name){
    return `${name}, just loggedIn`
}

//console.log(greeting2()) //undefined, just loggedIn --> kyuki aapne koi value hi nhi di

function greeting3(name){
    if(name === undefined){
        console.log("Please give input")
        return
    }
    else{
        return `${name}, just loggedIn`
    }
}

//console.log(greeting3())
//console.log(greeting3("Abhishek"))