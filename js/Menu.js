const menuButton = document.querySelector(".fas.fa-bars");
const closeButton = document.querySelector(".fas.fa-times");
const navMobile = document.querySelector(".nav-mobile");

menuButton.addEventListener("click", event => {
  event.stopPropagation();
  navMobile.style.display = "flex";
  navMobile.classList.add("animated", "slideInDown");
});

closeButton.addEventListener("click", event => {
  event.stopPropagation();
  navMobile.style.display = "none";
  navMobile.classList.remove("animated", "slideInDown");
});

window.addEventListener("resize", event => {
  if (window.innerWidth > 900) {
    navMobile.style.display = "none";
  }
});
