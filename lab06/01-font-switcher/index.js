const makeBigger = () => {
   var element = document.querySelector('h1');
   var property = window.getComputedStyle(element, null).getPropertyValue('font-size');
   var fontSize = parseFloat(property); 
   element.style.fontSize = (fontSize + 10) + 'px';

   var element = document.querySelector('.content');
   var property = window.getComputedStyle(element, null).getPropertyValue('font-size');
   var fontSize = parseFloat(property); 
   element.style.fontSize = (fontSize + 10) + 'px';
};

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

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
