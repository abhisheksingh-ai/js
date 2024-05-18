//singleton
//const tinderUser = new Object ();
//Non Singleton
const tinderUser2 = {}
//both are same 
// console.log(tinderUser)
// console.log(tinderUser2)
tinderUser2.id = "abhiiyaarrr"
tinderUser2.name = "Abhishek Singh Rajput"
tinderUser2.IsloggedIn = false;

//print
//console.log(tinderUser2);

//Nested Object
const regularUser = {
    email : "asingh19082000@gmail.com",
    fullname : {
        firstName : "Abhishek",
        lastName : "Singh",
        parents : {
            fatherName : "Bhagwan Singh",
            motherName : "Bina kanwar"
        }
    },
    age : 24,
    Greeting : function(){
        console.log(`regular User is,${this.fullname.firstName} ${this.fullname.lastName}, His father name is, ${this.fullname.parents.fatherName} and his mother name is, ${this.fullname.parents.motherName}`)
    }
};

//
//console.log(regularUser.Greeting());

//Suppose if full Name doesnot exists --> fullname?

//object -> concatination

const obj1 = {1 : "a" , 2 : "b" };
const obj2 = {3 : "c" , 4 : "d"};
const obj3 = {obj1 , obj2}
//console.log(obj3)
//--> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } and I dont want this 

const obj4 = Object.assign({},obj1,obj2)
//console.log(obj4)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign(obj1,obj2)
//console.log(obj5)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//console.log(obj1) 
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//--> obj1 me obj2 ki value assing ho gyi 

const obj6 = {...obj1,...obj2}
//console.log(obj6)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// spread operator is a key

//Data base se backened me Array of Object aayga
const users =[
    {
        1 : "abhishek",
        age: 24
    },
    {
        2 : "bhawani",
        age: 25
    }
]

//console.log(users[0][1]);
//abhishek

//console.log(users[0].age);
//24

//console.log(users[1].age);
//25

//console.log(users);
//[ { '1': 'abhishek', age: 24 }, { '2': 'bhawani', age: 25 } ]

//console.log(users[0][2]);
//undefined

//console.log(tinderUser2)
//{ id: 'abhiiyaarrr', name: 'Abhishek Singh Rajput', IsloggedIn: false }


//console.log(Object.keys(tinderUser2))
//[ 'id', 'name', 'IsloggedIn' ] --> Array mil gaya

//console.log(Object.length)
//1

//console.log(Object.IsloggedIn)
//undefined

//--> value exist nahi karti ho
