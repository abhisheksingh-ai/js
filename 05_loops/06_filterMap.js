// use of filtr to extract data from Array or Array of objects 

const coding = ["js", "ruby", "cpp", "java"]

coding.forEach( function (item){
  console.log(item)
} )

// js
// ruby
// cpp
// java

// //++++++++++++++++++++++

// //forEach Nothing 

const values  = coding.forEach( function (item){
  return item
})

//undefined

//++++++++++++++++++++++++

// array se value return nahi ho rhi thi forEach loop me , to humne filter use kiya jo ki return karta hai arrayse values ko

const myNum = [1,2,3,4,5,6,7,8,9,10]

myNum.filter((num)=>{
  num > 5
})

const greaterThanFive = myNum.filter((item)=>{
    return item > 4
})

// console.log(greaterThanFive)

//[ 5, 6, 7, 8, 9, 10 ]

//{ yaha par return key word likhna hi padega}

// agr single line code hai to ( yaha return nahi likhna )

//++++++++++++++++++++++++

 const grtThan5 = myNum.filter((item)=>(item>4))

 console.log(grtThan5)

//[ 5, 6, 7, 8, 9, 10 ] yaha bydefault return hua kyuki (scope ye tha , single line code ka )

//++++++++++++++++++++++++++


//Agar humko for each loop use karna hi hai, chul machi h bhai to new array me stor karwa le 

const newNum = []

const myNum2 = [1,2,3,4,5,6,7,8,9,10]

myNum2.forEach((item)=>{
  if(item > 4){
    newNum.push(item)
  }
})

console.log(newNum2);

//[ 5, 6, 7, 8, 9, 10 ]

//+++++++++++++++++++++++++++

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// // I want those books , jiska genre history hai
const userBooks = books.filter((bk)=>{
  if(bk.genre == 'History'){
    return bk.genre
  }
})

console.log(userBooks); 

// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

//+++++++++++++++++++++++++++++++

//Give me thos books those are published after 2000

const after2000PublishedBook = books.filter((bk) => bk.publish > 2000)

console.log(after2000PublishedBook);

// [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]

// //+++++++++++++++++++++++++++++++++++

// // i want book that published after 1995 and is of 'Histor' category

const myBook = books.filter((item)=>{
  if(item.genre == 'History' && item.publish> 1995){
    return item;
  }
})

console.log(myBook);

//Approach-2 

const myBook2 = books.filter((item)=>
  (item.genre == 'History' && item.publish> 1995)
)

console.log(myBook2);

//Approach 3 

const myBook3 = books.filter((item)=>{
  return item.genre == 'History' && item.publish> 1995
}
)

console.log(myBook3);

// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]

