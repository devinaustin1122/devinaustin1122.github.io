let options = {
    root: null,
    threshold: .75
}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
        } else {
            entry.target.classList.add('scrolled');
            observer.unobserve(entry.target);
        } 
    })
}, options);

document.querySelectorAll(".fade-right").forEach((target) => {
    observer.observe(target);
})

document.querySelectorAll(".fade-down").forEach((target) => {
    observer.observe(target);
})

document.querySelectorAll(".fade-up").forEach((target) => {
    observer.observe(target);
})