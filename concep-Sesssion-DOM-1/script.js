console.log('connect html file')
// const title=document.getElementById('title');
// title.innerText='MY JS POWER'
// title.style.color='red';
// console.log(title)

// const title2=document.querySelector('p');
// title2.innerText='this is p tag'
// title2.style.backgroundColor='green'
// console.log(title2)
// const items=document.getElementsByClassName('li-items');
// for(let i=0; i<items.length; i++){
//     const element=items[i];
//     element.style.color='blue';
//     element.innerText='ami j k tomar';
//     console.log(element)
// }
// const myArry=Array.from(items);
// console.log(myArry)

// const items2=document.getElementsByTagName('li');
// console.log(items2)
// for(const li of items2){
//     li.style.backgroundColor='yellow'
//     li.style.fontSize='50px'
// }
// const items3=document.querySelectorAll('li')
// console.log(items3)
// const items4=document.getElementById('li-container');
// console.log(items4.nextSibling)
// // console.log(items4.childNodes)
// const items=document.querySelector('ul');
// const items=document.querySelector('h1');
// items.setAttribute('class', 'h1')
// items.removeAttribute('class')
// items.getAttribute('h1')
// console.log(items)

// const ul=document.querySelector('ul');
// const li=document.createElement('li')
//  li.innerText='this is li items'

// console.log(li)
// ul.appendChild(li)
const h1=document.querySelector('h1');
h1.classList.add('title1', 'title2');
h1.classList.remove('title1')
h1.classList.add('common');
console.log(h1)
const ul=document.querySelector('ul');
const second=document.getElementById('second');
const li=document.createElement('li')
li.innerText='hellow world';
// প্রথমে আমি ইউএল কে ধরবো এরপর কার উপরে দিতে চাই তাকে আইডি দিয়ে ধরলাম েএর পর কাকে দিতে চাই ওইটা প্রথমে এরপর কার উপরে দিতে চাই তার আইডি দিবো। 

ul.insertBefore(li, second); // প্রথমটা এলআই যা ক্রিয়েট করেছি দ্বিতীয় টা কারউপর ইনসার্ট করতে চাই তার আইডি। 