//for loop
const studentName = ['rohit', 'mukesh', 1 , 2]
for (let i = 0; i < studentName.length; i++) {
    const element = studentName[i];
    console.log(element)
}
//console.log(element)  ye scope k bahar access nahi hoga
// rohit
// mukesh
// 1
// 2

//++++++++++++++++++++++++++++++++++++++++++++++++++

const studentName2 = ['rohit', 'mukesh', 1 , 2]
for (let i = 0; i < studentName2.length; i++) {
    const element = studentName2[i];
    if(element == 'mukesh'){
        console.log(`${element} bhai padhai kar lo`);
    }
    console.log(element)
}
// rohit
// mukesh bhai padhai kar lo
// mukesh
// 1
// 2

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
let count = 0
for (let i = 0; i < 10; i++) {
    
    for (let j = 0; j < 10; j++) {
        console.log(`outer loop ${i}, inner loop ${j}`);
        count++;
    }
}
console.log(`${count}, times loop chala`);
//100, times loop chala

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

const name = "Abhi"

for (let i = 0; i < name.length; i++) {
    console.log(`index: ${i}, value: ${name[i]}`);    
}
// index: 0, value: A
// index: 1, value: b
// index: 2, value: h
// index: 3, value: i

//++++++++++++++++++++++++++++++++++++++++++++++++++

//break and continue

for (let index = 0; index <= 20; index++) {
   //i dont want to print 5 , 10 , 20
   if(index==5 || index==10 || index == 20){
    continue
   }

    //if i dont want to print only sum
    if(index % 2 == 0){
        continue
    }
   console.log(index)
}

//++++++++++++++++++++++++++++++++++++++
//5 aate hi loop se bahar

for (let index = 0; index < 10; index++) {
    if(index == 5 ){
        break;
    }
    console.log(index)
}
// 0
// 1
// 2
// 3
// 4