/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const makeSmaller = () => {
   var element = document.querySelector('h1');
   var property = window.getComputedStyle(element, null).getPropertyValue('font-size');
   var fontSize = parseFloat(property); 
   element.style.fontSize = (fontSize - 10) + 'px';

   var element = document.querySelector('.content');
   var property = window.getComputedStyle(element, null).getPropertyValue('font-size');
   var fontSize = parseFloat(property); 
   element.style.fontSize = (fontSize - 10) + 'px';
};

const makeDefault = () => {
   document.querySelector('body').className = 'default'
};

const makeDesert = () => {
   document.querySelector('body').className = 'desert'
};

const makeOcean = () => {
   document.querySelector('body').className = 'ocean'
};

const makeHighContrast = () => {
   document.querySelector('body').className = 'high-contrast'
};

document.querySelector('#default').addEventListener('click', makeDefault);
document.querySelector('#desert').addEventListener('click', makeDesert);
document.querySelector('#ocean').addEventListener('click', makeOcean);
document.querySelector('#high-contrast').addEventListener('click', makeHighContrast);