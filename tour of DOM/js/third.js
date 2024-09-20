const mainContainer=document.getElementById('main-container');
const section=document.createElement('section');
section.innerHTML=`
<h1>My dynamic section </h1>
<p> my extra paragraph </p>
<ul>
    <li>section-1</li>
    <li>section-2</li>
    <li>section-3</li>
</ul>
`
mainContainer.appendChild(section)