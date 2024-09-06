const minimizeNav = document.getElementById("minimize-nav");
const listElements = document.getElementsByClassName("nav-list");

minimizeNav.addEventListener("click", () => {
  for (let i = 0; i < listElements.length; i++) {
    listElements[i].classList.toggle("open-nav-menu");
  }
});
