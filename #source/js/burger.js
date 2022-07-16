const burgerButton = document.querySelector(".burger");
const burgerNavigationWrapper = document.querySelector(
  ".burger-navigation-wrapper"
);
const burgerNavigation = document.querySelector(".burger-navigation");

function changeShowBurgerMenu() {
  document.body.classList.toggle("locked");
  burgerButton.classList.toggle("active");
  burgerNavigationWrapper.classList.toggle("active");
  burgerNavigation.classList.toggle("active");
}

burgerButton.addEventListener("click", (e) => {
  changeShowBurgerMenu();
});

burgerNavigation.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    changeShowBurgerMenu();
  }
});

burgerNavigationWrapper.addEventListener("click", (e) => {
  if (
    burgerButton.classList.contains("active") &&
    e.target !== burgerNavigation &&
    e.target !== burgerNavigationList &&
    !e.target.closest("li")
  ) {
    changeShowBurgerMenu();
  }
});
