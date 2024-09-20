console.log('this is separate js');
// onlick option -1:  Direcly set on the  html elements 
 
// <button onclick="console.log(65)">Another Button</button>


// onlick option -2 : add onclick function on the html element (IMPORTANT WE WILL USE THIS)

//  <button onclick="makeRed()">Make Red</button> (বুজার সুবিধার্থে এইচটিএমএল থেকে নিয়ে আসা হয়েছে)

function makeRed(){
    document.body.style.backgroundColor='red'; // ফাংশন টা কে বাটন এর অনক্লিকে কল করে দিলে বিজি কালার পরিবর্তন হয়ে যাবে। 
}

// onlick option -3

const makeBlueBtn=document.getElementById('make-blue');
    makeBlueBtn.onclick=makeBlue;
   function makeBlue(){
    document.body.style.backgroundColor='blue';
   }

// onlick option -3 another (we will use sometimes)

   const makePurpleBtn=document.getElementById('make-purple');
   makePurpleBtn.onclick= //function name ta na dile chole sodo function ta likhleo hoye jabe
   function makePurple(){
    document.body.style.backgroundColor='purple';
   }

// onlick option -4

   const pinkButton=document.getElementById('make-pink');
   // console.log(pinkButton) junior hisebe console kore nite hobe paise kina ba connect hoce kina
   pinkButton.addEventListener('click', makePink); //  এখানে ক্লিক কমা দিয়ে ফাংশন এর নাম টা লিখছি।
   function makePink(){
       document.body.style.backgroundColor='pink';
   }

   // onlick option -4 another

   const makePinkButton=document.getElementById('make-green');
    makePinkButton.addEventListener('click', function makeGreen(){document.body.style.backgroundColor='green';})

   // onlick option-4 (Final)  এটা আমরা ব্যবহার করবো। (IMPORTANT WE WILL USE THIS SOMETIMES)

    // document.getElementById('make-goldenrod').addEventListener('click', function(){})
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor='goldenrod';
    })