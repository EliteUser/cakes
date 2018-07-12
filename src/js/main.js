var navButton = document.querySelector(".main-navigation__button");
var navList = document.querySelector(".main-navigation__list");

navButton.addEventListener("click", function () {
  navButton.classList.toggle("main-navigation__button--active");
  navList.classList.toggle("main-navigation__list--active");
});
