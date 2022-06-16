Loadle.onLoad("logo", "pulse");
ScrollReveal().reveal(".reveal", { delay: 200 });

function toggleMenu() {
  let items = document.getElementById("navigation__items");
  items.classList.toggle("navigation__items--open");
}

function handleSelect(e) {
  let selectors = document.getElementsByClassName(
    "experience__selector--selected"
  );
  selectors[0].classList.toggle("experience__selector--selected");
  e.target.classList.toggle("experience__selector--selected");

  let descriptions = document.getElementsByClassName(
    "experience__description--selected"
  );

  descriptions[0].classList.toggle("experience__description--selected");

  let description = document.getElementById(e.target.getAttribute("control"));
  description.classList.toggle("experience__description--selected");
}

function setTheme(theme) {
  document.documentElement.className = theme;
}
