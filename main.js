let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let rivers = document.getElementById("rivers");
let boat = document.getElementById("boat");
let sayes = document.querySelector(".design");
let main = document.querySelector(".main");
let links = document.getElementsByTagName("a");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountain3.style.top = value * 2 + "px";
  mountain4.style.top = value * 1.5 + "px";
  rivers.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3.5 + "px";

  sayes.style.fontSize = value + "px";
  if (scrollY >= 67) {
    sayes.style.fontSize = 67 + "px";
    sayes.style.position = "fixed";
    if (scrollY >= 478) {
      sayes.style.display = "none";
    } else {
      sayes.style.display = "block";
    }
  }
  if (scrollY >= 127) {
    main.style.background = "#10001f";
  } else {
    main.style.background = "#1D5D9B";
  }
};
