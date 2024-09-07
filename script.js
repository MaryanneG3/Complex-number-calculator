const minimizeNav = document.getElementById("minimize-nav");
const listElements = document.getElementsByClassName("nav-text");
const navIcons = document.querySelectorAll("#nav-icons");

const navbarRight = document.querySelector(".navbar-right");
const calculatorIcon = document.getElementById("dark-mode-switch");

function toggleNavText() {
  console.log(`showing text`);
  for (let i = 0; i < listElements.length; i++) {
    listElements[i].classList.toggle("show-nav-text");
    navIcons[i].classList.remove("show-nav-icons");
  }
}

function toggleNavIcons() {
  console.log(`showing icons`);
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].classList.toggle("show-nav-icons");
    listElements[i].classList.remove("show-nav-text");
  }
}

// HANDLING TABLET & DESKTOP SCREEN SIZES

function handleScreenSizeChange(e) {
  // if screen max width is 767, show icons only
  if (e.matches) {
    toggleNavIcons();
    navbarRight.style.gap = "60px";
    calculatorIcon.style.fontSize = "x-large";
  } else {
    toggleNavText();
    navbarRight.style.gap = "100px";
    calculatorIcon.style.fontSize = "xx-large";
  }
}

// Create a MediaQueryList object
// max width of window is 767px
const mediaQuery = window.matchMedia("(max-width: 767px)");

// if the declared max-width changes, handle size change function will execute
mediaQuery.addEventListener("change", handleScreenSizeChange);

// first to execute - so that on load the nav menu is open
handleScreenSizeChange(mediaQuery);

minimizeNav.addEventListener("click", () => {
  handleScreenSizeChange(mediaQuery);
});

// ----------------------------------------------------------------------------------------------------
