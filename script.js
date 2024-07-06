const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let tl = gsap.timeline();

tl.to(".to-animate", {
  y: "100vh",
  scale: 0.4,
  duration: 0,
});

tl.to(".to-animate", {
  y: "-90vh",
  delay: 0.5,
  duration: 1,
});

tl.to(".to-animate", {
  y: 0,
  rotate: "-720deg",
  delay: 1,
  duration: 1,
  scale: 1,
});

function checkOrientation() {
  const portraitOverlay = document.getElementById("portrait-overlay");

  if (window.innerHeight > window.innerWidth) {
    portraitOverlay.style.display = "flex";
  } else {
    portraitOverlay.style.display = "none";
  }
}

window.addEventListener("resize", checkOrientation);

window.addEventListener("load", checkOrientation);
