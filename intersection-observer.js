const sectionAbout = document.querySelector('.about');

const options = {
    root: null,
    threshold: .5 // 0 to 1 value
}; 

const observer = new IntersectionObserver(function(entries, observer) {
 entries.forEach(entry => {
    console.log(entry);
 });
}, options);

observer.observe(sectionAbout);