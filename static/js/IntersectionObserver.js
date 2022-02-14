let options = {
    root: null,
    threshold: .3
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


let heroOptions = {
    root: null,
    threshold: .1
}

let navbar = document.querySelector(".navbar");

let heroObserver = new IntersectionObserver((entries, heroObserver) => {
    entries.forEach((entry)=> {
        if(!entry.isIntersecting) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    })
}, heroOptions)

heroObserver.observe(document.querySelector(".hero"));
