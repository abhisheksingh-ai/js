//Destructuring of object

const course = {
    name : " js in hindi",
    price : 99,
    courseInstructor : "abhishek"
}
// suppose I want to print courseInstructor
//Method 1
//console.log(course.courseInstructor);
//abhishek

const {courseInstructor} = course
//console.log(courseInstructor);
//abhishek

const {courseInstructor : instructor} = course;
//gave Alias to courseInstructor
//console.log(instructor)
//abhishek

//React
const navbar = (props.company) => {

};
// we will write
// const navbar = ({company}) =>{

// }
navbar(company = "hitesh")

//we can destructure arrays also

//API--->
//apna kaam kisi dusre par dalna
// ordering at hotel
//menu card is API
// i dont care how cook will cook the food

//API--> value jason form me deta hai
// JASON-> {} object hi jason hai

{
    "name" : "Abhi",
    "class" : 8
}

// API me convert kar lunga object me or eke ke value nikal lumga

[
    {},
    {},
    {}
]
