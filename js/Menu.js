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

function colorChange() {
  let x = Math.floor(Math.random() * 200);
  let y = Math.floor(Math.random() * 200);
  let z = Math.floor(Math.random() * 200);
  let linkColor = "rgb(" + x + "," + y + "," + z + ")";
  return linkColor;
}

let navevent = document.querySelectorAll("header a");

navevent.forEach(function(link, i) {
  link.addEventListener("mouseover", function() {
    navevent[i].style.color = colorChange();
  });

  link.addEventListener("mouseleave", function() {
    navevent[i].style.color = "black";
  });
});
