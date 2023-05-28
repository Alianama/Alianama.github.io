let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let button = document.getElementById("button");
let text = document.getElementById("text");
let mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value + "px";
});
