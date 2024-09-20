/*
objective: get base, height of a triangle. calculate the area by using the provided formula. and then display the area.
*step-1: get base value of triangle
*step-2: added an id in the base input field
*step-3: use getElementById to access the input field
*step-4: get value from the input field . (value is string now )
*step-5: convert the value to a number . use parseFloat
*/

function triangleCalculateArea(){
    // get triangle base value;
    const triangleBaseInput=document.getElementById("triangle-base");
    const triangleBaseValue=triangleBaseInput.value;
    const base=parseFloat(triangleBaseValue);
    // console.log(typeof base)
    // get triangle height value
     const triangleHeightInput=document.getElementById('triangle-height');
     const triangleHeightValue=triangleHeightInput.value;
     const height=parseFloat(triangleHeightValue);
    //  calculate triangle area
     const area=0.5 * base * height;
    //  display triangle  area 
    const triangleAreaSpan=document.getElementById("triangle-area");
    triangleAreaSpan.innerText=area;

    //  console.log('area of the triangle is:',area)
}