// where to add

const placesList=document.getElementById('places-list');

console.log(placesList)
//what to be added
const li=document.createElement('li');
li.innerText='phar toli bon';

// add the child 
placesList.appendChild(li)

// where to add

const mainContainer=document.getElementById('main-container');
console.log(mainContainer)

//what to be added
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My food list';
section.appendChild(h1);

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='chicken';
ul.appendChild(li3);

section.appendChild(ul)
mainContainer.appendChild(section);


// set inner html directly
const sectionDress=document.createElement('section');
// console.log(sectionDress)

sectionDress.innerHTML= `
<h1>MY Dress List</h1>
<ul>
    <li>T-shirt</li>
    <li>lungi</li>
    <li>genji</li>
</ul>
    `
 
mainContainer.appendChild(sectionDress)
