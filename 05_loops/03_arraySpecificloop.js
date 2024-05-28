// Array specific loop 
// [{}, {}, {}]
//for of loop

const arr = [1,2,3,4,5]

// iterator-> is same as i
//object-> kis object par loop laga rha hu

for (const iterator of object) {
    
}

for (const iterator of arr) {
    console.log(iterator)
}

// 1
// 2
// 3
// 4
// 5

//+++++++++++++++++++++++++++++++++

//c++ me for each loop jesa hi hai

const greeting = "hello Duniya"

for (const iterator of greeting) {
    if(iterator == 'l'){
        continue
    }
    console.log(iterator)
}

// h
// e
// o
 
// D
// u
// n
// i
// y
// a

//+++++++++++++++++++++++++++++++++

// Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys.

//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('PAK',"Pakistan")
console.log(map)

//Map(3) { 'IN' => 'India', 'USA' => 'America', 'PAK' => 'Pakistan' }

//Order will maintain here and Unique vales will be here

for (const key of map) {
    console.log(key)
}

// [ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'PAK', 'Pakistan' ]

// I want seperate value

//++++++++++++++++++++++++++++++++++++

for (const [key , value] of map) {
    console.log(key, '->' , value);
}

// IN -> India
// USA -> America
// PAK -> Pakistan

//++++++++++++++++++++++++++++++++++++++++

// Object par for of LOOP

const myObj = {
    'game1' : 'NFS',
    'game2' : 'PUBG'
}

for (const [key , value] of myObj) {
    console.log(key , ':->', value);
}

// TypeError: myObj is not iterable