const mySym = Symbol("key1") 

const student = { 
    Name : "Abhishek" ,
    College : "IIT Kharagpur",
    greeting2 : function(){console.log(`bhai aapka name, ${this.Name}hai`)},
    Year : 2
};
console.log(student.Year);
console.log(student.Name);
console.log(student.College);

console.log(student.mySym);
console.log(typeof student.mySym);
console.log(typeof mySym);

student.greeting = function(){
    console.log(`Hello Student, ${this.Name}. Your college name is ${this.College}`)
}

console.log(student.greeting());

console.log(student)
console.log(student.greeting2());