document.addEventListener("DOMContentLoaded", function () {
  var collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
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
