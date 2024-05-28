const myNum = [1,2,3,4,5]

const newNums = myNum.map((item)=> item +10 )

console.log(newNums)

//[ 11, 12, 13, 14, 15 

//+++++++++++++++++++++++++++

//chainig of map

const newNums2 = myNum.map((item)=> item * 10).map((num)=> num + 10)

console.log(newNums2)

//[ 20, 30, 40, 50, 60 

//+++++++++++++++++++++++++++++

// filter ki chaining map k sath

const newNums3 = myNum.map((item)=> item * 10).map((num)=> num + 10).filter((num) => num > 40)

console.log(newNums3)

//[ 50, 60 ]