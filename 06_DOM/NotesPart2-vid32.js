document.querySelectorAll('li')
//I get nodelist
//Reminder: nodelist and HTMLcollection are not purely array. See prototype we cant use map here but in array we can use

const templiList= document.querySelectorAll('li')

templiList[2].style.color ='green'
//'green'


//since i saw in prototype forEach so i can use it here
templist.forEach(function(l) {
    l.style.backgroundColor = 'green'
})

//++++++++++++++++++++++++

{/* <ul>
<li class="list">one</li>
<li class="list">two</li>
<li class="list">three</li>
<li class="list">four</li>
</ul> */}

document.getElementsByClassName('list')
//I get HTMLCollection , isme to forEach bhi nhi lga paunga(prototype me nhi hai )

//Now I want to convert HTMLCollection into array 
Array.from(templist)