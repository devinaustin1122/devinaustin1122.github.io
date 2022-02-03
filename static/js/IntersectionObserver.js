let options = {
    root: null,
    threshold: .8
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
    threshold: .9
}

let navbar = document.querySelector(".navbar");

let heroObserver = new IntersectionObserver((entries, heroObserver) => {
    entries.forEach((entry)=> {
        if(!entry.isIntersecting) {
            navbar.classList.remove('scrolled');
        } else {
            console.log("black");
            navbar.classList.add('scrolled');
        }
    })
}, heroOptions)

heroObserver.observe(document.querySelector(".about"));
