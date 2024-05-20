//+++++++++++++++++++++++++++++++++++
// this-> refer to current context
 const user = {
    
    username : "Abhishek",
    price : 99,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`)
        
        console.log(this)
        console.log(`${user.username}, Welcome to website`)//same hi aaygam 
    }
    
}
user.welcomeMessage() //Abhishek, Welcome to website
user.username = "Mukesh";
user.welcomeMessage() //Mukesh, Welcome to website


//+++++++++++++++++++++++++++++
console.log(this) //it will give {} in node enviroment but in browser it will give window 

//++++++++++++++++++++++++++++++++++++

function chai(){
    let username = "Rakhi"
    console.log(this.username)//aise function me aakr me this use nhi kar pa rha 
}

chai()
//bhut sari values aayi hai bhia isme to 

//samjhe beta this only used in objects 

//isi vajah se arraoe function banaya gya

//++++++++++++++++++++++++++++++++
//Normal Function
const chai = function(){
    const username = "rohit"
    console.log(this.username) //undefined kyuki normal function this se access nahi hoga 
    //halanki this se objects acess ho jate hai
}
chai();

//Arrow function

//function keyword hata do and ()=> ye kardo

const chai = ()=>{
    let username = "abhishek"
    console.log(this.username) //undefined
}
chai()

//Arrow function me bhi this use nahi kar skte

//++++++++++++++++++++++++++++++++++++++++++++
const addTwo =  (num1,num2) => {
    return num1+num2
}

console.log(addTwo(5,5)) //10

//++++++++++++++++++++++++++++++++++++
//implicit return 
//const addTwo =  (num1,num2) => ( num1+num2 )

// { }, curlly braces me return keyword likhna hi padega

// ( ), me return keyword nhi likhna 

//object return karne k liye use ({ } ) paranthesis me wrap karna pdega   
