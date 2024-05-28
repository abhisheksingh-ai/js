//while
let i = 0
while(i < 5){
    console.log(i)
    i = i + 1
}

// 0
// 1
// 2
// 3
// 4

//++++++++++++++++++++++++++++

const j = 0
while(j < 5){
    console.log(j)
    j = j + 1
}
// Error dega because const change nhi hoga

//++++++++++++++++++++++++++++

const students = ['Abhi' , 'Jahnavi' , 'Lokesh']
let index = 0
while(index <= students.length){
    console.log(students[index])
    index += 1
}

// Abhi
// Jahnavi
// Lokesh
// undefined -> <= k case me index 3 access karne gya jo ki exist nhi karta

//++++++++++++++++++++++++++++

//do while loop
//pahle kaam hoga fir condition check

let score = 1

do{
    console.log(score)
}while(score>2)
// 1 , print hote condition flase loop se bahar 