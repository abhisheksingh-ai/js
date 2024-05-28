// Ye hum array k liye use karenge

 const codingLang = ['ruby' , 'cpp' , 'python' , 'golang']

 codingLang.forEach( function  ( item ) {
    console.log(item);
} )

// ruby
// cpp
// python
// golang

//++++++++++++++++++++++++++++

//Arrow function me bhi likh sakte h 

//How do we writ arrow function

const sum = () => {

}

codingLang.forEach( (item)=> {
    console.log(item);
})

// ruby
// cpp
// python
// golang

//++++++++++++++++++++++++++

function printMe (item) {
    console.log(item);
}

codingLang.forEach(printMe)

// ruby
// cpp
// python
// golang

//++++++++++++++++++++++++++++

codingLang.forEach( (item , index , codingLang) => {
    console.log(item, index, codingLang);
})

// ruby 0 [ 'ruby', 'cpp', 'python', 'golang' ]
// cpp 1 [ 'ruby', 'cpp', 'python', 'golang' ]
// python 2 [ 'ruby', 'cpp', 'python', 'golang' ]
// golang 3 [ 'ruby', 'cpp', 'python', 'golang' ]

//++++++++++++++++++++++++++++++

// [{},{},{}]

const myCodingLang = [
    {
        languageName : 'Javascritp',
        fileName : 'js'
    },

    {
        languageName : 'Java',
        fileName : 'jv'
    },

    {
        languageName : 'c++',
        fileName : 'cpp'
    }
]

myCodingLang.forEach((item)=>{
    //yaha item ek object hai
    console.log(item.fileName);
})

// js
// jv
// cpp
    