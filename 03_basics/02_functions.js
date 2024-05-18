//shopping cart me user products add krte rhta hai , hume pata nhi kitne argument aayenge

function calculateCartPrice(num1){
    return num1
}

//console.log(calculateCartPrice(200))
//--> we will use Rest Operator ...

function calculateCartPrice2(...num1){
    return num1
}

//console.log(calculateCartPrice2(200,400,600)) //Array me aa gya --. i can easily loop and calculate sum 

function calculateCartPrice3(val1, val2,...num1){
    console.log(val1); //400
    console.log(val2); //500

    return num1
}

//console.log(calculateCartPrice3(400,500,600,700,800)); //[600,700,800]

//+++++++++++++++++++++++++++++++++++++++

//Function With Objects

const user = {
    username : "Abhishek",
    price : 999
}

//How to pass object into the function and how to use it 
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username}, price is ${anyObject.price}`)
}

//handleObject(user)//Username is Abhishek, price is 999

//+++++++++++++++++  price --> prices
const user2 = {
    username : "Abhishek",
    prices : 999
}

//How to pass object into the function and how to use it 
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username}, price is ${anyObject.price}`)
}
//we have to check if and eles
//handleObject(user2) //Username is Abhishek, price is undefined

//handleObject({
    //username : "Raghav",
    //price: 1000
//})
//Username is Raghav, price is 1000

//++++++++++++++++++++++++++++++++++++
//I have an array and a function that return arrays second value

const myArr= [10,20,30,40,50]

function returnSecondValofArr(anyArray){
    console.log(anyArray[1])
}

returnSecondValofArr(myArr);
