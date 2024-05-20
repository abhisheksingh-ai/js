// let a =10 
// const b =20
// var c=30

// console.log(a)
// console.log(b)
// console.log(c)


// {
//     //this is scope
// }

// if(true){
//     let a =10 
//     const b =20
//     var c=30
// }
//console.log("Ab dekho kon change hua kon nahi")
//console.log(a) //ReferenceError: a is not defined
//console.log(b) //ReferenceError: b is not defined
//console.log(c) //30
//var scopr k bahar bhi access ho gya mtlab var is global variable c=43 is also global scope


//+++++++++++++++++++++++++++++++++++++++++++++++++

// let a = 1000
// if(true){
//     let a =10 
//     const b =20
//     var c=30
//     console.log(a) //10
    //block scope
// }
// console.log(a) //1000
//global scope

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Nested scope
// function one(){
//     const username = "Abhishek"
//     function two(){
//         const website = "YouTube"
//         console.log(username)
//     }
//     console.log(website)//ReferenceError: website is not defined
//     two()
// }
// one()

//+++++++++++++++++++++++++++++++++++++++++++++
// function one(){
//     const username = "Abhishek"
//     console.log("fun one calling")
//     function two(){
//         const website = "YouTube"
//         console.log(username)
//         console.log(website)
//     }
    
// }
// one()
// two() //global scope ko nahi pata two() kya hai kyuki ye one( k scope me hai)

//+++++++++++++++++++++++++++++++++++++++++++++++++
// function one(){
//     const username = "Abhishek"
//     console.log("fun one calling")
//     function two(){
//         const website = "YouTube"
//         console.log(username)
//         console.log(website)
//     }
//     two()
// }
// one()
// fun one calling
// Abhishek
// YouTube

//++++++++++++++++++++++++++++++++++++++

// function Abhishek1(){
//     let firstgf = "Usha"
//     console.log(`My first gf was ${firstgf}`)

//     function Abhishek2(){
//         let secondgf = "Tanya"
//         console.log(`My second gf was ${secondgf}`)

//         function Abhishek2a(){
//             let thierdgf = "Jahanvi"
//             console.log(`My third gf was ${thierdgf}`)
//         }
//         Abhishek2a()
//     }

//     function Abhishek3(){
//         let fourthgf = "Srija"
//         console.log(`My fourth gf was ${fourthgf}`)
//     }
//     Abhishek2()
//     Abhishek3()
// }

// //problem --> Print them according two order
// Abhishek1()

//+++++++++++++++++++++++++++++++++++++++++++++
//Hoisting
addOne(5)
function addOne(num){
    return num + 1
}
//addOne(5)
//ye to run ho gya niche wala run nhi hoga

addTwo(5)
const addTwo = function(num){
    return num + 2
}
// addTwo(5)
//yha nhi hua run kyu????????????
//declare + hold dono kiya hai bhai 

//addTwo is holding a function