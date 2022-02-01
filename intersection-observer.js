'use strict';

const sectionAbout = document.querySelector('.about');


const options = {
    root: null,
    threshold: .5 // 0 to 1 value
}; 

const optionsToggle = {
    root: null,
    threshold: 0 // 0 to 1 value
}; 

const observer = new IntersectionObserver(function(entries, observer) {
 entries.forEach(entry => {
    console.log(entry);
 });
}, options);

const observerToggle = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
       console.log(entry);
    });
   }, optionsToggle);
   

observer.observe(sectionAbout);