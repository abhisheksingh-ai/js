//reduce 

//accumulator ek hi bar initialvalue lega fir sum store hota rhega usme

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

//++++++++++++++++++++++++++++

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc:- ${acc}, currval:- ${currval}`)
    return acc + currval
}, 0)

console.log(myTotal)

// acc:- 0, currval:- 1
// acc:- 1, currval:- 2
// acc:- 3, currval:- 3
// 6

//++++++++++++++++++++++++++++++

// try to write above code in arrow function

//const myNums = [1,2,3]

const myTotalss = myNums.reduce((acc, currval) => {
    console.log(`acc:- ${acc}, currval:- ${currval}`)
    return acc + currval
}, 0)

// acc:- 0, currval:- 1
// acc:- 1, currval:- 2
// acc:- 3, currval:- 3

const myTotals = myNums.reduce((acc,currval)=>acc+currval,0)

//same answer aayga

//+++++++++++++++++++++++++

//shopping cart sum me use hota hai reduce 

const shoppingCart = [
    {
        itemName : 'JavaScript Course',
        price : 10000
    },
    {
        itemName : 'python Course',
        price : 5000
    },
    {
        itemName : 'DSA Course',
        price : 29999
    }
]

const payPrice = shoppingCart.reduce((acc , item)=>acc + item.price , 0)

console.log(payPrice)

//44999





