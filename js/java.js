document.addEventListener("DOMContentLoaded", function () {
  var collapsibles = document.querySelector(".collapsible");

  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.getElementById("burgerMenu");
  var navMenu = document.getElementById("navMenu");

  burgerMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
