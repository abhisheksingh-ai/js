//React me manually element select ho jate hai but java script me karna padega

//I want to select this (DOM learning on chai and code) from one.html
document.getElementById('title')
//return pura h1 tag hua hai

document.getElementById('title').id //isse id ki value aa gyi
//'title'

document.getElementById('title').className // DOM me className likh kar class le skta hu
//'heading'

//how to get Attribute from any selected element
document.getElementById('title').getAttribute('id')
//'title'

//set bhi kar skta hu 
document.getElementById('title').setAttribute('class' , 'test')
//it will always override the class

document.getElementById('title').setAttribute('class' , 'test heading')

//stored in a variable for easy access, h1 tag ab title variable me aa gya hai
const title  = document.getElementById('title')

title.style.backgroundColor = 'green'
//isse selected tag (h1) ka bg color green ho gya

title.style.borderRadius='15px'

//Intersting-> how to Extract content of h1 tag 

title.textContent
//'DOM learning on chai and code'
title.innerHTML
//'DOM learning on chai and code'
title.innerText
//'DOM learning on chai and code'

//What is diffrent bw innerText and innerContent
//<h1 id="title" class="heading">DOM learning on chai and code <span>test text</span> </h1>
//I added span in selected tag(h1)

title.textContent
//'DOM learning on chai and code test text '
title.innerText
//'DOM learning on chai and code test text'
//added style in span
//<h1 id="title" class="heading">DOM learning on chai and code <span style="display: none;">test text</span> </h1>

//now again check

title.textContent
//'DOM learning on chai and code test text ' //isse pura contnet aaya
title.innerText
//'DOM learning on chai and code'  // inner text se visible content aaya

title.innerHTML
//'DOM learning on chai and code <span style="display: none;">test text</span> '
//isme inner html tag support ho jate hai

document.getElementsByClassName('heading')
//HTMLCollection [h1#title.heading, title: h1#title.heading]

document.querySelector('h1')
//this will select first h1 tag on the page 

//ise samjhne k liye kuchh or h2 tag add kar lete hai 
{/* <h2>Lorem, ipsum dolor.</h2>
<h2>Lorem ipsum dolor sit amet.</h2>
<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>  */}

document.querySelector('h2')
//<h2>Lorem, ipsum dolor.</h2>  first h2 i will get 

document.querySelector('#title')
//i can select id using queryselector
//CSS me bhi to yegi karte hai 

document.querySelector('.heading')

document.querySelector('input[type="password"]')

{/* <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul> */}

//Task one ko select karke green kar 
//query selector se sirf ek hi element select hoga

//step-1 
document.querySelector('ul')
//step-2
const myOne = myul.querySelector('li')
undefined
//step-3
myOne.style.backgroundColor='green'
'green'

//++++++++++++++++++++++++++++++++++++++

//till now we have discussed how to select one element