/* Loadle.js */

/* this will eventually be able to be used in a script block, passed class names to indicate animation, have built in animations, executes loading sequences, security checks, etc */

function disableScroll() {
  document.documentElement.style.height = "100vh";
  document.documentElement.style.overflow = "hidden";
}

function enableScroll() {
  document.documentElement.style.height = "auto";
  document.documentElement.style.overflow = "visible";
}

function removeAnimation(id) {
  let element = document.getElementById(id);
  element.remove();
}

disableScroll();

setTimeout(() => {
  removeAnimation("animate");
  enableScroll();
}, 2000);
