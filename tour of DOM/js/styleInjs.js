const sections=document.querySelectorAll('section');
console.log(sections)
for(const section of sections){
    console.log(section)
    section.style.border='2px solid blue';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.paddingLeft='10px';
    section.style.backgroundColor='lightGray';
}
const placesContainer=document.getElementById('places-container');
// placesContainer.style.backgroundColor='yellow';
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');

