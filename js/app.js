const bars = document.querySelector("#bars");
const navUl = document.querySelector(".nav_ul");

const toggleBar = () => {
  navUl.classList.toggle("show");
};

bars.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleBar();
});
