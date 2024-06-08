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

/* JavaScript der sætter klassen "active" på    */
/* <div class="hamburger"> og                   */
/* <ul class="nav-menu">                        */
// Step 8
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

/* JavaScript der sørger for at burger menuen   */
/* lukker når man klikker på et link            */
// Step 9
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropbtn");
  dropdown.addEventListener("click", function (event) {
    event.preventDefault();
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });
});
