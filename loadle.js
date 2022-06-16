let Loadle = {
  onLoad: function onLoad(id) {
    this.configure(id);
    this.animate(id);
    setTimeout(() => {
      document.getElementById("root").classList.toggle("show");
      document.getElementById("animation").classList.toggle("hide");

      /* required for scroll reveal compatibility */
      window.dispatchEvent(new Event("resize"));
    }, 3000);
  },

  configure: function configure(id) {
    let element = document.getElementById(id);

    let animation = document.createElement("div");
    animation.setAttribute("id", "animation");
    animation.classList.add("hide");

    let content = document.createElement("div");
    content.classList.add("content");

    animation.appendChild(content);
    element.parentNode.insertBefore(animation, element);
    content.appendChild(element);
  },

  animate: function animate(id) {
    element = document.getElementById("animation");
    element.classList.toggle("hide");
  },
};
