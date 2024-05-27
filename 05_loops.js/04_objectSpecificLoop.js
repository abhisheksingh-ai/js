// for in LOOP

const languages = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'ruby',
    jv : 'Java'
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

// if wala delete kar de 

for (const key in object) {
   
    
}

for (const key in languages) {
    console.log(key);
}

// js
// cpp
// rb
// jv

//++++++++++++++++++++++++++++++++++

for (const key in languages) {
    console.log(`${key} is shortcut for, ${languages[key]}`);
}

// js is shortcut for, Javascript
// cpp is shortcut for, C++
// rb is shortcut for, ruby
// jv is shortcut for, Java

//++++++++++++++++++++++++++++++++++++

// Let's try to print array using for in LOOP

const myArr = ['c++', 'ruby', 'java']

for (const key in myArr) {
    console.log(key);
}

// 0
// 1
// 2

for (const [key, vales] in myArr) {
    console.log(key , ':->', vales)
}

// 0 :-> undefined
// 1 :-> undefined
// 2 :-> undefined

//+++++++++++++++++++++++++++++++++++++

for (const key in myArr) {
    console.log(myArr[key])
}

c++
ruby
java

//+++++++++++++++++++++++++++++++++++

//lets try map par for in loop 

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('PAK',"Pakistan")

for (const key in map) {
  console.log(key)
}

// map iterable nhi hai for in loop me