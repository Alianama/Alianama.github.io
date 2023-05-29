let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let button = document.getElementById("button");
let text = document.getElementById("text");
let mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginLeft = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  button.style.marginTop = value * 1.5 + "px";
});
